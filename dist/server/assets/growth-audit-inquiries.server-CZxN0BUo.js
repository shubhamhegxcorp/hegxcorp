import { randomUUID } from "node:crypto";
import process from "node:process";
import postgres from "postgres";
import { assertAdminSession } from "./admin-auth.server-DZQFE0yK.js";
import { c as cleanLeadSourceData } from "./lead-source-C0KU7OxF.js";
import "./server-yv7ZiuMh.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }
  const globalForSql = globalThis;
  if (!globalForSql.hegxcorpSql) {
    globalForSql.hegxcorpSql = postgres(databaseUrl, {
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
