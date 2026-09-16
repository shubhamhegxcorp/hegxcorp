import { randomUUID } from "node:crypto";

import { assertAdminSession } from "./admin-auth.server";
import { getDbClient } from "./db.server";
import { cleanLeadSourceData } from "./lead-source";
import { cleanOptional } from "./text-cleanup";
import type { GrowthAuditInquiry, GrowthAuditInquiryInput } from "./growth-audit-inquiries";
import type { InquiryStatus } from "./contact-inquiries";

type GrowthAuditRow = {
  id: string;
  name: string;
  email: string;
  website: string;
  visitorId: string | null;
  leadSource: string | null;
  leadMedium: string | null;
  leadCampaign: string | null;
  leadAdSet: string | null;
  leadAd: string | null;
  leadLandingPage: string | null;
  leadReferrer: string | null;
  revenueRange: string;
  goal: string;
  status: InquiryStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function mapGrowthAudit(row: GrowthAuditRow): GrowthAuditInquiry {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

export async function createGrowthAuditInquiry(input: GrowthAuditInquiryInput) {
  const sql = getDbClient();
  const leadSourceData = cleanLeadSourceData(input.leadSourceData);
  const rows = await sql<GrowthAuditRow[]>`
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
      ${cleanOptional(input.visitorId)},
      ${cleanOptional(leadSourceData.leadSource)},
      ${cleanOptional(leadSourceData.leadMedium)},
      ${cleanOptional(leadSourceData.leadCampaign)},
      ${cleanOptional(leadSourceData.leadAdSet)},
      ${cleanOptional(leadSourceData.leadAd)},
      ${cleanOptional(leadSourceData.leadLandingPage)},
      ${cleanOptional(leadSourceData.leadReferrer)},
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

export async function listSavedGrowthAuditInquiries() {
  await assertAdminSession();
  const sql = getDbClient();
  const rows = await sql<GrowthAuditRow[]>`
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

export async function updateSavedGrowthAuditInquiryStatus(id: string, status: InquiryStatus) {
  await assertAdminSession();
  const sql = getDbClient();
  const rows = await sql<GrowthAuditRow[]>`
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
