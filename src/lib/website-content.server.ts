import { assertAdminSession } from "./admin-auth.server";
import { DEFAULT_CMS_SECTIONS } from "./cms-config";
import { getDbClient, type SqlClient } from "./db.server";

type GlobalWithWebsiteContentReady = typeof globalThis & {
  hegxcorpWebsiteContentReady?: Promise<void>;
};

async function ensureWebsiteContentTable(sql: SqlClient) {
  const globalForWebsiteContentReady = globalThis as GlobalWithWebsiteContentReady;
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
      globalForWebsiteContentReady.hegxcorpWebsiteContentReady = undefined;
      throw error;
    });
  }

  await globalForWebsiteContentReady.hegxcorpWebsiteContentReady;
}

export async function getWebsiteSection(key: string): Promise<any> {
  const sql = getDbClient();
  await ensureWebsiteContentTable(sql);

  const rows = await sql<{ key: string; value: any }[]>`
    SELECT "key", "value"
    FROM "WebsiteContent"
    WHERE "key" = ${key}
  `;

  if (rows.length > 0) {
    return rows[0].value;
  }

  // Fallback to default configuration
  return DEFAULT_CMS_SECTIONS[key] || null;
}

export async function saveWebsiteSection(key: string, value: any): Promise<any> {
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

export async function listWebsiteSections(): Promise<Record<string, any>> {
  const sql = getDbClient();
  await ensureWebsiteContentTable(sql);

  const rows = await sql<{ key: string; value: any }[]>`
    SELECT "key", "value"
    FROM "WebsiteContent"
  `;

  const sections: Record<string, any> = { ...DEFAULT_CMS_SECTIONS };
  for (const row of rows) {
    sections[row.key] = row.value;
  }

  return sections;
}
