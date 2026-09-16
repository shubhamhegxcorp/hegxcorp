import { randomUUID } from "node:crypto";
import process from "node:process";
import { P as Postgres } from "../_libs/postgres.mjs";
import { assertAdminSession } from "./admin-auth.server-DZQFE0yK.mjs";
import { c as cleanLeadSourceData } from "./lead-source-C0KU7OxF.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "os";
import "fs";
import "net";
import "tls";
import "crypto";
import "stream";
import "perf_hooks";
import "./server-yv7ZiuMh.mjs";
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
import "../_libs/isbot.mjs";
function cleanOptional(value) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}
function cleanServices(services) {
  return [...new Set(services.map((service) => service.trim()).filter(Boolean))];
}
function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = Postgres(databaseUrl, {
      max: 5,
      idle_timeout: 20,
      connect_timeout: 10,
    });
  }
  return globalForSql.hegxcorpSql;
}
function mapInquiry(row) {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}
async function createContactInquiry(input) {
  const sql = getSql();
  const services = cleanServices(input.services);
  const leadSourceData = cleanLeadSourceData(input.leadSourceData);
  const rows = await sql`
    INSERT INTO "ContactInquiry" (
      "id",
      "name",
      "email",
      "phone",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "source",
      "services",
      "budget",
      "timeline",
      "message",
      "updatedAt"
    )
    VALUES (
      ${randomUUID()},
      ${input.name.trim()},
      ${input.email.trim().toLowerCase()},
      ${cleanOptional(input.phone)},
      ${cleanOptional(input.website)},
      ${cleanOptional(input.visitorId)},
      ${cleanOptional(leadSourceData.leadSource)},
      ${cleanOptional(leadSourceData.leadMedium)},
      ${cleanOptional(leadSourceData.leadCampaign)},
      ${cleanOptional(leadSourceData.leadAdSet)},
      ${cleanOptional(leadSourceData.leadAd)},
      ${cleanOptional(leadSourceData.leadLandingPage)},
      ${cleanOptional(leadSourceData.leadReferrer)},
      ${input.source?.trim() || "Contact"},
      ${sql.array(services)},
      ${cleanOptional(input.budget)},
      ${cleanOptional(input.timeline)},
      ${input.message.trim()},
      now()
    )
    RETURNING
      "id",
      "name",
      "email",
      "phone",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "source",
      "services",
      "budget",
      "timeline",
      "message",
      "status",
      "createdAt",
      "updatedAt"
  `;
  return mapInquiry(rows[0]);
}
async function listSavedContactInquiries() {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql`
    SELECT
      "id",
      "name",
      "email",
      "phone",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "source",
      "services",
      "budget",
      "timeline",
      "message",
      "status",
      "createdAt",
      "updatedAt"
    FROM "ContactInquiry"
    ORDER BY "createdAt" DESC
    LIMIT 200
  `;
  return rows.map(mapInquiry);
}
async function updateSavedContactInquiryStatus(id, status) {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql`
    UPDATE "ContactInquiry"
    SET
      "status" = ${status}::"InquiryStatus",
      "updatedAt" = now()
    WHERE "id" = ${id}
    RETURNING
      "id",
      "name",
      "email",
      "phone",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "source",
      "services",
      "budget",
      "timeline",
      "message",
      "status",
      "createdAt",
      "updatedAt"
  `;
  if (!rows[0]) {
    throw new Error("Inquiry not found.");
  }
  return mapInquiry(rows[0]);
}
export { createContactInquiry, listSavedContactInquiries, updateSavedContactInquiryStatus };
