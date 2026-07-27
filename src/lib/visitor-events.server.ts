import { randomUUID } from "node:crypto";
import process from "node:process";

import postgres from "postgres";

import type { VisitorEventInput } from "./visitor-events";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
};

function cleanOptional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

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
    });
  }

  return globalForSql.hegxcorpSql;
}

async function upsertScrollDepthEvent(sql: SqlClient, input: VisitorEventInput) {
  const rows = await sql<{ id: string }[]>`
    UPDATE "VisitorEvent"
    SET
      "pageTitle" = ${cleanOptional(input.pageTitle)},
      "referrer" = ${cleanOptional(input.referrer)},
      "params" = ${sql.json(input.params)},
      "userAgent" = ${cleanOptional(input.userAgent)},
      "createdAt" = now()
    WHERE "visitorId" = ${input.visitorId.trim()}
      AND "eventName" = 'scroll_depth'
      AND "path" = ${input.path.trim()}
    RETURNING "id"
  `;

  if (rows.length > 0) return;

  await sql`
    INSERT INTO "VisitorEvent" (
      "id",
      "visitorId",
      "eventName",
      "path",
      "pageTitle",
      "referrer",
      "params",
      "userAgent"
    )
    VALUES (
      ${randomUUID()},
      ${input.visitorId.trim()},
      ${input.eventName.trim()},
      ${input.path.trim()},
      ${cleanOptional(input.pageTitle)},
      ${cleanOptional(input.referrer)},
      ${sql.json(input.params)},
      ${cleanOptional(input.userAgent)}
    )
  `;
}

export async function createVisitorEvent(input: VisitorEventInput) {
  const sql = getSql();

  if (input.eventName.trim() === "scroll_depth") {
    await upsertScrollDepthEvent(sql, input);
    return { ok: true };
  }

  await sql`
    INSERT INTO "VisitorEvent" (
      "id",
      "visitorId",
      "eventName",
      "path",
      "pageTitle",
      "referrer",
      "params",
      "userAgent"
    )
    VALUES (
      ${randomUUID()},
      ${input.visitorId.trim()},
      ${input.eventName.trim()},
      ${input.path.trim()},
      ${cleanOptional(input.pageTitle)},
      ${cleanOptional(input.referrer)},
      ${sql.json(input.params)},
      ${cleanOptional(input.userAgent)}
    )
  `;

  return { ok: true };
}
