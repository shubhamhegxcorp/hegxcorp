import { randomUUID } from "node:crypto";
import process from "node:process";

import postgres from "postgres";

import { assertAdminSession } from "./admin-auth.server";
import type { BlogDraft, BlogDraftInput } from "./blog-drafts";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
  hegxcorpBlogDraftReady?: Promise<void>;
};

type BlogDraftRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  seoDescription: string;
  status: string;
  featured: boolean;
  category: string[];
  tags: string[];
  featuredImage: string | null;
  authorname: string;
  seotitle: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const globalForSql = globalThis as GlobalWithSql;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = postgres(databaseUrl, {
      max: 5,
      idle_timeout: 20,
      connect_timeout: 10,
      // Any single query that runs longer than 20s is aborted with a clear
      // error instead of hanging the HTTP request into a gateway timeout.
      connection: {
        statement_timeout: 20000,
      },
    });
  }

  return globalForSql.hegxcorpSql;
}

// Creates the "BlogDraft" table the first time it is needed, so saving a draft
// (for example when the admin clicks Preview) works without any manual setup.
// The promise is cached on globalThis so the DDL only runs once per process.
async function ensureBlogDraftTable(sql: SqlClient) {
  const globalForSql = globalThis as GlobalWithSql;
  if (!globalForSql.hegxcorpBlogDraftReady) {
    globalForSql.hegxcorpBlogDraftReady = (async () => {
      // Run the DDL inside a transaction with short timeouts. If another DB
      // session is holding a lock on the table (e.g. an idle transaction left
      // open in a GUI, or a killed migration), this fails fast with a clear
      // error instead of hanging the request into a 504.
      await sql.begin(async (tx) => {
        await tx`SET LOCAL lock_timeout = '5s'`;
        await tx`SET LOCAL statement_timeout = '15s'`;
        await tx`
          CREATE TABLE IF NOT EXISTS "BlogDraft" (
            "id" TEXT NOT NULL,
            "title" TEXT NOT NULL DEFAULT '',
            "slug" TEXT NOT NULL DEFAULT '',
            "excerpt" TEXT NOT NULL DEFAULT '',
            "content" TEXT NOT NULL DEFAULT '',
            "readTime" TEXT NOT NULL DEFAULT '',
            "seoDescription" TEXT NOT NULL DEFAULT '',
            "status" TEXT NOT NULL DEFAULT 'DRAFT',
            "featured" BOOLEAN NOT NULL DEFAULT false,
            "category" TEXT[],
            "tags" TEXT[],
            "featuredImage" TEXT,
            "authorname" TEXT NOT NULL DEFAULT 'Hegxcorp Team',
            "seotitle" TEXT NOT NULL DEFAULT '',
            "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" TIMESTAMP(3) NOT NULL,
            CONSTRAINT "BlogDraft_pkey" PRIMARY KEY ("id")
          )
        `;
        await tx`
          CREATE INDEX IF NOT EXISTS "BlogDraft_updatedAt_idx"
          ON "BlogDraft" ("updatedAt")
        `;
        // The table may already exist from before these two columns were
        // introduced. ADD COLUMN IF NOT EXISTS is safe to run every time —
        // it's a no-op once the column is already there, so this keeps
        // older databases in sync automatically without a manual migration.
        await tx`ALTER TABLE "BlogDraft" ADD COLUMN IF NOT EXISTS "authorname" TEXT NOT NULL DEFAULT 'Hegxcorp Team'`;
        await tx`ALTER TABLE "BlogDraft" ADD COLUMN IF NOT EXISTS "seotitle" TEXT NOT NULL DEFAULT ''`;
      });
    })().catch((error) => {
      // Reset so a later call can retry if this attempt failed.
      globalForSql.hegxcorpBlogDraftReady = undefined;
      throw error;
    });
  }

  await globalForSql.hegxcorpBlogDraftReady;
}

function cleanList(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

function mapDraft(row: BlogDraftRow): BlogDraft {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    readTime: row.readTime,
    seoDescription: row.seoDescription,
    status: row.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT",
    featured: row.featured,
    category: row.category ?? [],
    tags: row.tags ?? [],
    featuredImage: row.featuredImage,
    authorname: row.authorname,
    seotitle: row.seotitle,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

export async function saveBlogDraft(input: BlogDraftInput) {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);

  const id = input.id?.trim() || randomUUID();
  const status = input.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
  const category = sql.array(cleanList(input.category));
  const tags = sql.array(cleanList(input.tags));
  const featuredImage = input.featuredImage?.trim() ? input.featuredImage : null;
  const authorname = input.authorname?.trim() ? input.authorname.trim() : "Hegxcorp Team";
  const seotitle = input.seotitle?.trim() ? input.seotitle.trim() : "";

  const rows = await sql<BlogDraftRow[]>`
    INSERT INTO "BlogDraft" (
      "id",
      "title",
      "slug",
      "excerpt",
      "content",
      "readTime",
      "seoDescription",
      "status",
      "featured",
      "category",
      "tags",
      "featuredImage",
      "authorname",
      "seotitle",
      "updatedAt"
    )
    VALUES (
      ${id},
      ${input.title},
      ${input.slug},
      ${input.excerpt},
      ${input.content},
      ${input.readTime},
      ${input.seoDescription},
      ${status},
      ${input.featured},
      ${category},
      ${tags},
      ${featuredImage},
      ${authorname},
      ${seotitle},
      now()
    )
    ON CONFLICT ("id") DO UPDATE SET
      "title" = EXCLUDED."title",
      "slug" = EXCLUDED."slug",
      "excerpt" = EXCLUDED."excerpt",
      "content" = EXCLUDED."content",
      "readTime" = EXCLUDED."readTime",
      "seoDescription" = EXCLUDED."seoDescription",
      "status" = EXCLUDED."status",
      "featured" = EXCLUDED."featured",
      "category" = EXCLUDED."category",
      "tags" = EXCLUDED."tags",
      "featuredImage" = EXCLUDED."featuredImage",
      "authorname" = EXCLUDED."authorname",
      "seotitle" = EXCLUDED."seotitle",
      "updatedAt" = now()
    RETURNING
      "id",
      "title",
      "slug",
      "excerpt",
      "content",
      "readTime",
      "seoDescription",
      "status",
      "featured",
      "category",
      "tags",
      "featuredImage",
      "authorname",
      "seotitle",
      "createdAt",
      "updatedAt"
  `;

  return mapDraft(rows[0]);
}

export async function listBlogDrafts() {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  const rows = await sql<BlogDraftRow[]>`
    SELECT
      "id",
      "title",
      "slug",
      "excerpt",
      "content",
      "readTime",
      "seoDescription",
      "status",
      "featured",
      "category",
      "tags",
      "featuredImage",
      "authorname",
      "seotitle",
      "createdAt",
      "updatedAt"
    FROM "BlogDraft"
    ORDER BY "updatedAt" DESC
    LIMIT 200
  `;

  return rows.map(mapDraft);
}

export async function getBlogDraftById(id: string) {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  const rows = await sql<BlogDraftRow[]>`
    SELECT
      "id",
      "title",
      "slug",
      "excerpt",
      "content",
      "readTime",
      "seoDescription",
      "status",
      "featured",
      "category",
      "tags",
      "featuredImage",
      "authorname",
      "seotitle",
      "createdAt",
      "updatedAt"
    FROM "BlogDraft"
    WHERE "id" = ${id}
    LIMIT 1
  `;

  return rows[0] ? mapDraft(rows[0]) : null;
}

export async function deleteBlogDraft(id: string) {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  await sql`DELETE FROM "BlogDraft" WHERE "id" = ${id}`;
  return { id };
}