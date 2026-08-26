import process from "node:process";
import postgres from "postgres";
import { assertAdminSession } from "./admin-auth.server";
import { DEFAULT_CMS_SECTIONS } from "./cms-config";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
  hegxcorpWebsiteContentReady?: Promise<void>;
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
      connection: {
        statement_timeout: 20000,
      },
    });
  }

  return globalForSql.hegxcorpSql;
}

async function ensureWebsiteContentTable(sql: SqlClient) {
  const globalForSql = globalThis as GlobalWithSql;
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
      globalForSql.hegxcorpWebsiteContentReady = undefined;
      throw error;
    });
  }

  await globalForSql.hegxcorpWebsiteContentReady;
}

export async function getWebsiteSection(key: string): Promise<any> {
  const sql = getSql();
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

export async function listWebsiteSections(): Promise<Record<string, any>> {
  const sql = getSql();
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
