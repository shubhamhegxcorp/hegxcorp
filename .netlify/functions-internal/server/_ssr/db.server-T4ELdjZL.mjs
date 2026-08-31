import process from "node:process";
import { P as Postgres } from "../_libs/postgres.mjs";
function getDbClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = Postgres(databaseUrl, {
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
      connection: {
        statement_timeout: 2e4
      }
    });
  }
  return globalForSql.hegxcorpSql;
}
export {
  getDbClient as g
};
