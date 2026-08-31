import { assertAdminSession } from "./admin-auth.server-CbPIcdqN.mjs";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.mjs";
import { g as getDbClient } from "./db.server-T4ELdjZL.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "../_libs/postgres.mjs";
import "node:crypto";
import "node:process";
import "./server-DDc6VQK7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "os";
import "fs";
import "net";
import "tls";
import "perf_hooks";
async function ensureWebsiteContentTable(sql) {
  const globalForWebsiteContentReady = globalThis;
  if (!globalForWebsiteContentReady.hegxcorpWebsiteContentReady) {
    globalForWebsiteContentReady.hegxcorpWebsiteContentReady = (async () => {
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
      globalForWebsiteContentReady.hegxcorpWebsiteContentReady = void 0;
      throw error;
    });
  }
  await globalForWebsiteContentReady.hegxcorpWebsiteContentReady;
}
async function getWebsiteSection(key) {
  const sql = getDbClient();
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
  const sql = getDbClient();
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
  const sql = getDbClient();
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
