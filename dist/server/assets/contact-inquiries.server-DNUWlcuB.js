import { randomUUID } from "node:crypto";
import process from "node:process";
import postgres from "postgres";
import { assertAdminSession } from "./admin-auth.server-DIbikcBb.js";
import "./server-D_LdMuXC.js";
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
    globalForSql.hegxcorpSql = postgres(databaseUrl, {
      max: 5,
      idle_timeout: 20,
      connect_timeout: 10
    });
  }
  return globalForSql.hegxcorpSql;
}
function mapInquiry(row) {
  return {
    ...row,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString()
  };
}
async function createContactInquiry(input) {
  const sql = getSql();
  const services = cleanServices(input.services);
  const rows = await sql`
    INSERT INTO "ContactInquiry" (
      "id",
      "name",
      "email",
      "phone",
      "website",
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
export {
  createContactInquiry,
  listSavedContactInquiries,
  updateSavedContactInquiryStatus
};
