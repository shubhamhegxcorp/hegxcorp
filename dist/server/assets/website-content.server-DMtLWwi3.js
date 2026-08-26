import process from "node:process";
import postgres from "postgres";
import { assertAdminSession } from "./admin-auth.server-DZQFE0yK.js";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.js";
import "node:crypto";
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
      connection: {
        statement_timeout: 2e4
      }
    });
  }
  return globalForSql.hegxcorpSql;
}
async function ensureWebsiteContentTable(sql) {
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpWebsiteContentReady) {
    globalForSql.hegxcorpWebsiteContentReady = (async () => {
      await sql.begin(async (tx) => {
        await tx`SET LOCAL lock_timeout = '5s'`;
        await tx`SET LOCAL statement_timeout = '15s'`;
        await tx`
          CREATE TABLE IF NOT EXISTS "WebsiteContent" (
            "key" TEXT NOT NULL,
            "value" JSONB NOT NULL,
            "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "WebsiteContent_pkey" PRIMARY KEY ("key")
          )
        `;
      });
    })().catch((error) => {
      globalForSql.hegxcorpWebsiteContentReady = void 0;
      throw error;
    });
  }
  await globalForSql.hegxcorpWebsiteContentReady;
}
async function getWebsiteSection(key) {
  const sql = getSql();
  await ensureWebsiteContentTable(sql);
  const rows = await sql`
    SELECT "key", "value"
    FROM "WebsiteContent"
    WHERE "key" = ${key}
  `;
  if (rows.length > 0) {
    return rows[0].value;
  }
  return DEFAULT_CMS_SECTIONS[key] || null;
}
async function saveWebsiteSection(key, value) {
  await assertAdminSession();
  const sql = getSql();
  await ensureWebsiteContentTable(sql);
  await sql`
    INSERT INTO "WebsiteContent" ("key", "value", "updatedAt")
    VALUES (${key}, ${sql.json(value)}, NOW())
    ON CONFLICT ("key") DO UPDATE SET
      "value" = ${sql.json(value)},
      "updatedAt" = NOW()
  `;
  return value;
}
async function listWebsiteSections() {
  const sql = getSql();
  await ensureWebsiteContentTable(sql);
  const rows = await sql`
    SELECT "key", "value"
    FROM "WebsiteContent"
  `;
  const sections = { ...DEFAULT_CMS_SECTIONS };
  for (const row of rows) {
    sections[row.key] = row.value;
  }
  return sections;
}
export {
  getWebsiteSection,
  listWebsiteSections,
  saveWebsiteSection
};
