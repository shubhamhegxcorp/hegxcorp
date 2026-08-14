/**
 * One-time setup: creates the "BlogDraft" table used by the admin draft +
 * preview system. Safe to run multiple times (uses IF NOT EXISTS).
 *
 * Run from the project root:
 *   node scripts/setup-blog-draft-table.mjs
 *
 * It reads DATABASE_URL from your .env / .env.local, exactly like the app.
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import postgres from "postgres";

// Minimal .env loader (so we don't depend on dotenv being wired up here).
function loadEnvFile(file) {
  const full = path.resolve(process.cwd(), file);
  if (!fs.existsSync(full)) return;
  const text = fs.readFileSync(full, "utf8");
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("✗ DATABASE_URL is not set. Add it to your .env file and retry.");
  process.exit(1);
}

const sql = postgres(databaseUrl, { max: 1, connect_timeout: 10 });

try {
  await sql`
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
      "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "BlogDraft_pkey" PRIMARY KEY ("id")
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS "BlogDraft_updatedAt_idx" ON "BlogDraft"("updatedAt")`;

  const [{ count }] = await sql`SELECT count(*)::int AS count FROM "BlogDraft"`;
  console.log(`✓ "BlogDraft" table is ready. Current draft rows: ${count}`);
} catch (error) {
  console.error("✗ Failed to create BlogDraft table:", error.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
