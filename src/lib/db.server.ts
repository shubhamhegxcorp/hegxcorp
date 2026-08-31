import process from "node:process";
import postgres from "postgres";

export type SqlClient = ReturnType<typeof postgres>;

type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
};

/**
 * Provides a singleton PostgreSQL client connection pool with safe connection
 * and statement timeout configurations.
 */
export function getDbClient(): SqlClient {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const globalForSql = globalThis as GlobalWithSql;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = postgres(databaseUrl, {
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
      connection: {
        statement_timeout: 20000,
      },
    });
  }

  return globalForSql.hegxcorpSql;
}
