import { randomUUID } from "node:crypto";
import process from "node:process";
import { b as blogDraftStatuses } from "./blog-drafts-D6gaYuCP.js";
import postgres from "postgres";
import { assertAdminSession } from "./admin-auth.server-DZQFE0yK.js";
import "./createSsrRpc-DcZ7Clyk.js";
import "./server-yv7ZiuMh.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "zod";
async function listPublishedBlogDrafts() {
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  const rows = await sql`
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
function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = postgres(databaseUrl, {
      max: 5,
      idle_timeout: 20,
      connect_timeout: 10,
      // Any single query that runs longer than 20s is aborted with a clear
      // error instead of hanging the HTTP request into a gateway timeout.
      connection: {
        statement_timeout: 2e4
      }
    });
  }
  return globalForSql.hegxcorpSql;
}
async function ensureBlogDraftTable(sql) {
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpBlogDraftReady) {
    globalForSql.hegxcorpBlogDraftReady = (async () => {
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
        await tx`ALTER TABLE "BlogDraft" ADD COLUMN IF NOT EXISTS "authorname" TEXT NOT NULL DEFAULT 'Hegxcorp Team'`;
        await tx`ALTER TABLE "BlogDraft" ADD COLUMN IF NOT EXISTS "seotitle" TEXT NOT NULL DEFAULT ''`;
      });
    })().catch((error) => {
      globalForSql.hegxcorpBlogDraftReady = void 0;
      throw error;
    });
  }
  await globalForSql.hegxcorpBlogDraftReady;
}
function cleanList(values) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}
function mapDraft(row) {
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
    updatedAt: new Date(row.updatedAt).toISOString()
  };
}
async function saveBlogDraft(input) {
  await assertAdminSession();
  const sql = getSql();
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
  const rows = await sql`
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
async function listBlogDrafts() {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  const rows = await sql`
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
async function getBlogDraftById(id) {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  const rows = await sql`
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
async function deleteBlogDraft(id) {
  await assertAdminSession();
  const sql = getSql();
  await ensureBlogDraftTable(sql);
  await sql`DELETE FROM "BlogDraft" WHERE "id" = ${id}`;
  return { id };
}
export {
  deleteBlogDraft,
  getBlogDraftById,
  listBlogDrafts,
  listPublishedBlogDrafts,
  saveBlogDraft
};
