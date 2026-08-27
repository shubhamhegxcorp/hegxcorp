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
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
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
      connect_timeout: 10
    });
  }
  return globalForSql.hegxcorpSql;
}
function mapGrowthAudit(row) {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString()
  };
}
async function createGrowthAuditInquiry(input) {
  const sql = getSql();
  const leadSourceData = cleanLeadSourceData(input.leadSourceData);
  const rows = await sql`
    INSERT INTO "GrowthAuditInquiry" (
      "id",
      "name",
      "email",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "revenueRange",
      "goal",
      "updatedAt"
    )
    VALUES (
      ${randomUUID()},
      ${input.name.trim()},
      ${input.email.trim().toLowerCase()},
      ${input.website.trim()},
      ${input.visitorId?.trim() || null},
      ${leadSourceData.leadSource?.trim() || null},
      ${leadSourceData.leadMedium?.trim() || null},
      ${leadSourceData.leadCampaign?.trim() || null},
      ${leadSourceData.leadAdSet?.trim() || null},
      ${leadSourceData.leadAd?.trim() || null},
      ${leadSourceData.leadLandingPage?.trim() || null},
      ${leadSourceData.leadReferrer?.trim() || null},
      ${input.revenueRange.trim()},
      ${input.goal.trim()},
      now()
    )
    RETURNING
      "id",
      "name",
      "email",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "revenueRange",
      "goal",
      "status",
      "createdAt",
      "updatedAt"
  `;
  return mapGrowthAudit(rows[0]);
}
async function listSavedGrowthAuditInquiries() {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql`
    SELECT
      "id",
      "name",
      "email",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "revenueRange",
      "goal",
      "status",
      "createdAt",
      "updatedAt"
    FROM "GrowthAuditInquiry"
    ORDER BY "createdAt" DESC
    LIMIT 200
  `;
  return rows.map(mapGrowthAudit);
}
async function updateSavedGrowthAuditInquiryStatus(id, status) {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql`
    UPDATE "GrowthAuditInquiry"
    SET
      "status" = ${status}::"InquiryStatus",
      "updatedAt" = now()
    WHERE "id" = ${id}
    RETURNING
      "id",
      "name",
      "email",
      "website",
      "visitorId",
      "leadSource",
      "leadMedium",
      "leadCampaign",
      "leadAdSet",
      "leadAd",
      "leadLandingPage",
      "leadReferrer",
      "revenueRange",
      "goal",
      "status",
      "createdAt",
      "updatedAt"
  `;
  if (!rows[0]) {
    throw new Error("Growth audit inquiry not found.");
  }
  return mapGrowthAudit(rows[0]);
}
export {
  createGrowthAuditInquiry,
  listSavedGrowthAuditInquiries,
  updateSavedGrowthAuditInquiryStatus
};
