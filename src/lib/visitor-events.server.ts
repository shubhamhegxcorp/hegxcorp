import { randomUUID } from "node:crypto";

import { getDbClient, type SqlClient } from "./db.server";
import type { VisitorEventInput } from "./visitor-events";

function cleanOptional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
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
  const sql = getDbClient();

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
