import { randomUUID } from "node:crypto";
import { g as getDbClient } from "./db.server-T4ELdjZL.mjs";
import "../_libs/postgres.mjs";
import "node:process";
import "os";
import "fs";
import "net";
import "tls";
import "crypto";
import "stream";
import "perf_hooks";
function cleanOptional(value) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}
async function upsertScrollDepthEvent(sql, input) {
  const rows = await sql`
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
async function createVisitorEvent(input) {
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
export {
  createVisitorEvent
};
