// Standalone DB connectivity check. Does NOT touch your app.
// It only: loads DATABASE_URL, connects, runs SELECT 1, and reports timing.
// Run with:  node scripts/check-db.mjs
import { readFileSync } from "node:fs";
import postgres from "postgres";

// --- tiny .env loader (no dependencies) ---
function loadEnv(file) {
  try {
    for (const line of readFileSync(file, "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      let v = m[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!(m[1] in process.env)) process.env[m[1]] = v;
    }
  } catch {}
}
loadEnv(".env.local");
loadEnv(".env");

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("✗ DATABASE_URL is not set in .env or .env.local");
  process.exit(1);
}
console.log("→ Using DATABASE_URL:", url.replace(/(:\/\/[^:]+:)[^@]+(@)/, "$1****$2"));

const sql = postgres(url, { max: 1, connect_timeout: 10, idle_timeout: 5 });

const start = Date.now();
try {
  console.log("→ Connecting and running SELECT 1 ...");
  const r = await sql`SELECT 1 AS ok`;
  console.log(`✓ Connected OK in ${Date.now() - start}ms. Result:`, r[0]);

  const t = await sql`SELECT to_regclass('"BlogDraft"') AS tbl`;
  console.log(t[0].tbl ? '✓ "BlogDraft" table exists.' : 'ℹ "BlogDraft" table does not exist yet (that is fine — the app creates it).');

  await sql.end();
  process.exit(0);
} catch (err) {
  console.error(`✗ FAILED after ${Date.now() - start}ms`);
  console.error("  name:", err.name);
  console.error("  code:", err.code);
  console.error("  message:", err.message);
  try { await sql.end(); } catch {}
  process.exit(2);
}
