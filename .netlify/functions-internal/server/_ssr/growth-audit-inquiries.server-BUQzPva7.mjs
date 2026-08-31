import { randomUUID } from "node:crypto";
import { assertAdminSession } from "./admin-auth.server-CbPIcdqN.mjs";
import { g as getDbClient } from "./db.server-T4ELdjZL.mjs";
import { c as cleanLeadSourceData } from "./lead-source-C0KU7OxF.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "../_libs/postgres.mjs";
import "node:process";
import "./server-DDc6VQK7.mjs";
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
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "os";
import "fs";
import "net";
import "tls";
import "perf_hooks";
function mapGrowthAudit(row) {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString()
  };
}
async function createGrowthAuditInquiry(input) {
  const sql = getDbClient();
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
  const sql = getDbClient();
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
  const sql = getDbClient();
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
