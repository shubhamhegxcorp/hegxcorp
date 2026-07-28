import process from "node:process";

import postgres from "postgres";

import { assertAdminSession } from "./admin-auth.server";
import type { AdFunnelReportRow } from "./ad-funnel";

type SqlClient = ReturnType<typeof postgres>;
type GlobalWithSql = typeof globalThis & {
  hegxcorpSql?: SqlClient;
};

type AdFunnelReportDbRow = Omit<
  AdFunnelReportRow,
  "visitors" | "formStarts" | "leadsGenerated" | "genuineLeads" | "newLeads" | "latestActivityAt"
> & {
  visitors: number | string | null;
  formStarts: number | string | null;
  leadsGenerated: number | string | null;
  genuineLeads: number | string | null;
  newLeads: number | string | null;
  latestActivityAt: Date | string | null;
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

function toNumber(value: number | string | null) {
  return Number(value ?? 0);
}

function mapReportRow(row: AdFunnelReportDbRow): AdFunnelReportRow {
  return {
    ...row,
    visitors: toNumber(row.visitors),
    formStarts: toNumber(row.formStarts),
    leadsGenerated: toNumber(row.leadsGenerated),
    genuineLeads: toNumber(row.genuineLeads),
    newLeads: toNumber(row.newLeads),
    latestActivityAt: row.latestActivityAt
      ? new Date(row.latestActivityAt).toISOString()
      : new Date(0).toISOString(),
  };
}

export async function listSavedAdFunnelReport() {
  await assertAdminSession();
  const sql = getSql();
  const rows = await sql<AdFunnelReportDbRow[]>`
    WITH event_groups AS (
      SELECT
        COALESCE(NULLIF("params" ->> 'lead_source', ''), 'Untracked') AS "leadSource",
        COALESCE(NULLIF("params" ->> 'lead_campaign', ''), 'No campaign') AS "leadCampaign",
        COALESCE(NULLIF("params" ->> 'lead_ad_set', ''), 'No ad set') AS "leadAdSet",
        COALESCE(NULLIF("params" ->> 'lead_ad', ''), 'No ad') AS "leadAd",
        COUNT(DISTINCT "visitorId") FILTER (WHERE "eventName" = 'page_view') AS "visitors",
        COUNT(DISTINCT "visitorId") FILTER (WHERE "eventName" = 'form_start') AS "formStarts",
        MAX("createdAt") AS "latestActivityAt"
      FROM "VisitorEvent"
      WHERE "eventName" IN ('page_view', 'form_start')
        AND COALESCE(NULLIF("params" ->> 'lead_source', ''), '') <> ''
        AND COALESCE(NULLIF("params" ->> 'lead_source', ''), 'Untracked') <> 'Direct'
      GROUP BY 1, 2, 3, 4
    ),
    lead_rows AS (
      SELECT
        "leadSource",
        "leadCampaign",
        "leadAdSet",
        "leadAd",
        "status",
        "createdAt"
      FROM "ContactInquiry"
      WHERE COALESCE(NULLIF("leadSource", ''), '') <> ''
        AND COALESCE(NULLIF("leadSource", ''), 'Untracked') <> 'Direct'

      UNION ALL

      SELECT
        "leadSource",
        "leadCampaign",
        "leadAdSet",
        "leadAd",
        "status",
        "createdAt"
      FROM "GrowthAuditInquiry"
      WHERE COALESCE(NULLIF("leadSource", ''), '') <> ''
        AND COALESCE(NULLIF("leadSource", ''), 'Untracked') <> 'Direct'
    ),
    lead_groups AS (
      SELECT
        COALESCE(NULLIF("leadSource", ''), 'Untracked') AS "leadSource",
        COALESCE(NULLIF("leadCampaign", ''), 'No campaign') AS "leadCampaign",
        COALESCE(NULLIF("leadAdSet", ''), 'No ad set') AS "leadAdSet",
        COALESCE(NULLIF("leadAd", ''), 'No ad') AS "leadAd",
        COUNT(*) AS "leadsGenerated",
        COUNT(*) FILTER (WHERE "status" IN ('INPROGRESS', 'CLOSED')) AS "genuineLeads",
        COUNT(*) FILTER (WHERE "status" = 'NEW') AS "newLeads",
        MAX("createdAt") AS "latestActivityAt"
      FROM lead_rows
      GROUP BY 1, 2, 3, 4
    )
    SELECT
      CONCAT_WS(
        '||',
        COALESCE(event_groups."leadSource", lead_groups."leadSource"),
        COALESCE(event_groups."leadCampaign", lead_groups."leadCampaign"),
        COALESCE(event_groups."leadAdSet", lead_groups."leadAdSet"),
        COALESCE(event_groups."leadAd", lead_groups."leadAd")
      ) AS "key",
      COALESCE(event_groups."leadSource", lead_groups."leadSource") AS "leadSource",
      COALESCE(event_groups."leadCampaign", lead_groups."leadCampaign") AS "leadCampaign",
      COALESCE(event_groups."leadAdSet", lead_groups."leadAdSet") AS "leadAdSet",
      COALESCE(event_groups."leadAd", lead_groups."leadAd") AS "leadAd",
      COALESCE(event_groups."visitors", 0) AS "visitors",
      COALESCE(event_groups."formStarts", 0) AS "formStarts",
      COALESCE(lead_groups."leadsGenerated", 0) AS "leadsGenerated",
      COALESCE(lead_groups."genuineLeads", 0) AS "genuineLeads",
      COALESCE(lead_groups."newLeads", 0) AS "newLeads",
      GREATEST(
        COALESCE(event_groups."latestActivityAt", '1970-01-01'::timestamp),
        COALESCE(lead_groups."latestActivityAt", '1970-01-01'::timestamp)
      ) AS "latestActivityAt"
    FROM event_groups
    FULL OUTER JOIN lead_groups
      ON event_groups."leadSource" = lead_groups."leadSource"
      AND event_groups."leadCampaign" = lead_groups."leadCampaign"
      AND event_groups."leadAdSet" = lead_groups."leadAdSet"
      AND event_groups."leadAd" = lead_groups."leadAd"
    ORDER BY
      COALESCE(lead_groups."genuineLeads", 0) DESC,
      COALESCE(lead_groups."leadsGenerated", 0) DESC,
      COALESCE(event_groups."visitors", 0) DESC,
      "latestActivityAt" DESC
    LIMIT 100
  `;

  return rows.map(mapReportRow);
}
