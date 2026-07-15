import { randomUUID } from "node:crypto";
import process from "node:process";

import postgres from "postgres";

import { assertAdminSession } from "./admin-auth.server";
import type {
  GrowthAuditInquiry,
  GrowthAuditInquiryInput,
} from "./growth-audit-inquiries";
import type { InquiryStatus } from "./contact-inquiries";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
};

type GrowthAuditRow = {
  id: string;
  name: string;
  email: string;
  website: string;
  revenueRange: string;
  goal: string;
  status: InquiryStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
};

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

function mapGrowthAudit(row: GrowthAuditRow): GrowthAuditInquiry {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

export async function createGrowthAuditInquiry(input: GrowthAuditInquiryInput) {
  const sql = getSql();
  const rows = await sql<GrowthAuditRow[]>`
    INSERT INTO "GrowthAuditInquiry" (
      "id",
      "name",
      "email",
      "website",
      "revenueRange",
      "goal",
      "updatedAt"
    )
    VALUES (
      ${randomUUID()},
      ${input.name.trim()},
      ${input.email.trim().toLowerCase()},
      ${input.website.trim()},
      ${input.revenueRange.trim()},
      ${input.goal.trim()},
      now()
    )
    RETURNING
      "id",
      "name",
      "email",
      "website",
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
  const sql = getSql();
  const rows = await sql<GrowthAuditRow[]>`
    SELECT
      "id",
      "name",
      "email",
      "website",
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

export async function updateSavedGrowthAuditInquiryStatus(
  id: string,
  status: InquiryStatus,
) {
  await assertAdminSession();
  const sql = getSql();
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
