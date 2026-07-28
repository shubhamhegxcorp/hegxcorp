import { randomUUID } from "node:crypto";
import process from "node:process";

import postgres from "postgres";

import { assertAdminSession } from "./admin-auth.server";
import { cleanLeadSourceData } from "./lead-source";
import type { ContactInquiry, ContactInquiryInput, InquiryStatus } from "./contact-inquiries";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
};

type InquiryRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  website: string | null;
  visitorId: string | null;
  leadSource: string | null;
  leadMedium: string | null;
  leadCampaign: string | null;
  leadAdSet: string | null;
  leadAd: string | null;
  leadLandingPage: string | null;
  leadReferrer: string | null;
  source: string;
  services: string[];
  budget: string | null;
  timeline: string | null;
  message: string;
  status: InquiryStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function cleanOptional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function cleanServices(services: string[]) {
  return [...new Set(services.map((service) => service.trim()).filter(Boolean))];
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

function mapInquiry(row: InquiryRow): ContactInquiry {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

export async function createContactInquiry(input: ContactInquiryInput) {
  const sql = getSql();
  const services = cleanServices(input.services);
  const leadSourceData = cleanLeadSourceData(input.leadSourceData);
  const rows = await sql<InquiryRow[]>`
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

export async function listSavedContactInquiries() {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql<InquiryRow[]>`
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

export async function updateSavedContactInquiryStatus(id: string, status: InquiryStatus) {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql<InquiryRow[]>`
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
