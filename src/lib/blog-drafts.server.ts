import { randomUUID } from "node:crypto";
import process from "node:process";
import { blogDraftStatuses } from "./blog-drafts";

import { assertAdminSession } from "./admin-auth.server";
import { getDbClient, type SqlClient } from "./db.server";
import type { BlogDraft, BlogDraftInput } from "./blog-drafts";

type GlobalWithBlogDraftReady = typeof globalThis & {
  hegxcorpBlogDraftReady?: Promise<void>;
};

// Public-safe: no admin session required. Only ever returns PUBLISHED
// posts, so nothing sensitive (drafts) is exposed to site visitors.
export async function listPublishedBlogDrafts() {
  const sql = getDbClient();
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
    WHERE "status" = 'PUBLISHED'
    ORDER BY "updatedAt" DESC
    LIMIT 200
  `;

  return rows.map(mapDraft);
}

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

// Creates the "BlogDraft" table the first time it is needed, so saving a draft
// (for example when the admin clicks Preview) works without any manual setup.
// The promise is cached on globalThis so the DDL only runs once per process.
async function ensureBlogDraftTable(sql: SqlClient) {
  const globalForBlogDraftReady = globalThis as GlobalWithBlogDraftReady;
  if (!globalForBlogDraftReady.hegxcorpBlogDraftReady) {
    globalForBlogDraftReady.hegxcorpBlogDraftReady = (async () => {
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
      globalForBlogDraftReady.hegxcorpBlogDraftReady = undefined;
      throw error;
    });
  }

  await globalForBlogDraftReady.hegxcorpBlogDraftReady;
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
  const sql = getDbClient();
  await ensureBlogDraftTable(sql);

  const id = input.id?.trim() || randomUUID();
  const status = blogDraftStatuses.includes(input.status) ? input.status : "DRAFT";
  const category = sql.array(cleanList(input.category));
  const tags = sql.array(cleanList(input.tags));
  const featuredImage = input.featuredImage?.trim() ? input.featuredImage : null;
  const authorname = input.authorname?.trim() ? input.authorname.trim() : "Hegxcorp Team";
  const seotitle = input.seotitle?.trim() ? input.seotitle.trim() : "";
  if (input.featured) {
    await sql`UPDATE "BlogDraft" SET "featured" = false WHERE "id" <> ${id}`;
  }

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
  const sql = getDbClient();
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
  const sql = getDbClient();
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
  const sql = getDbClient();
  await ensureBlogDraftTable(sql);
  await sql`DELETE FROM "BlogDraft" WHERE "id" = ${id}`;
  return { id };
}
