import type { InquiryStatus } from "./contact-inquiries";

export const leadsPerPage = 10;

export const leadStatusStyles: Record<InquiryStatus, string> = {
  NEW: "bg-[#FFF4E8] text-[#C96A13]",
  INPROGRESS: "bg-[#EAF2FF] text-[#2359B8]",
  CLOSED: "bg-[#F2F4F7] text-[#475467]",
};

export function formatInquiryStatus(status: InquiryStatus) {
  return status === "INPROGRESS" ? "In Progress" : titleCase(status);
}

export function formatAdminDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(value),
  );
}

export function escapeCsv(value: unknown): string {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

export function downloadCsv(filename: string, csvContent: string) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function getLeadSourceLabel(lead: {
  leadSource: string | null;
  leadCampaign: string | null;
  leadAd?: string | null;
}) {
  return [lead.leadSource?.trim() || "Untracked", lead.leadCampaign?.trim(), lead.leadAd?.trim()]
    .filter(Boolean)
    .join(" / ");
}

export function getStatusStats<T extends { status: InquiryStatus }>(
  items: T[],
  statuses: readonly InquiryStatus[],
) {
  return statuses.map((status) => ({
    status,
    count: items.filter((item) => item.status === status).length,
  }));
}

export function paginate<T>(items: T[], page: number, perPage = leadsPerPage) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * perPage;

  return {
    totalPages,
    currentPage,
    firstVisible: items.length ? startIndex + 1 : 0,
    lastVisible: Math.min(currentPage * perPage, items.length),
    pageItems: items.slice(startIndex, startIndex + perPage),
  };
}

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

export function normalizeWebsiteUrl(url?: string | null): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export function formatWebsiteDisplay(url?: string | null): string {
  if (!url) return "";
  return url
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/, "");
}

export function getGmailComposeUrl(
  email?: string | null,
  subject = "Regarding your inquiry with Hegxcorp",
): string {
  if (!email) return "";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email.trim(),
  )}&su=${encodeURIComponent(subject)}`;
}
