import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Copy,
  Download,
  ExternalLink,
  Globe,
  Mail,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { useAdminContext } from "@/lib/admin-context.tsx";
import {
  downloadCsv,
  escapeCsv,
  formatAdminDate,
  formatInquiryStatus,
  formatWebsiteDisplay,
  getGmailComposeUrl,
  getLeadSourceLabel,
  getStatusStats,
  leadStatusStyles,
  normalizeWebsiteUrl,
  paginate,
} from "@/lib/admin-leads";
import { inquiryStatuses, type InquiryStatus } from "@/lib/contact-inquiries";

export const Route = createFileRoute("/admin/growth-leads")({
  head: () => ({
    meta: [
      { title: "Growth Audit Leads | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: GrowthLeadsPage,
} as never);

function GrowthLeadsPage() {
  const { growthAuditInquiries, isLoading, error, updatingId, handleGrowthAuditStatusChange } =
    useAdminContext();
  const [activeStatusFilter, setActiveStatusFilter] = useState<InquiryStatus | null>(null);
  const [page, setPage] = useState(1);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  async function handleCopy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success(`${label} copied to clipboard!`);
      setTimeout(() => setCopiedText(null), 2000);
    } catch {
      toast.error(`Could not copy ${label.toLowerCase()}`);
    }
  }

  const filtered = activeStatusFilter
    ? growthAuditInquiries.filter((i) => i.status === activeStatusFilter)
    : growthAuditInquiries;
  const { totalPages, currentPage, firstVisible, lastVisible, pageItems } = paginate(
    filtered,
    page,
  );

  const stats = useMemo(
    () => getStatusStats(growthAuditInquiries, inquiryStatuses),
    [growthAuditInquiries],
  );

  function toggleFilter(status: InquiryStatus) {
    setActiveStatusFilter((current) => (current === status ? null : status));
    setPage(1);
  }

  function handleExportCsv() {
    if (filtered.length === 0) {
      toast.error("No growth audit leads to export.");
      return;
    }

    const headers = [
      "Date",
      "Name",
      "Email",
      "Website",
      "Annual Revenue",
      "Growth Target",
      "Status",
      "Lead Source",
      "Campaign",
      "Medium",
      "Ad Set",
      "Ad",
      "Landing Page",
      "Referrer",
    ];

    const rows = filtered.map((lead) => [
      escapeCsv(new Date(lead.createdAt).toLocaleString("en-IN")),
      escapeCsv(lead.name),
      escapeCsv(lead.email),
      escapeCsv(lead.website),
      escapeCsv(lead.revenueRange),
      escapeCsv(lead.goal),
      escapeCsv(lead.status),
      escapeCsv(lead.leadSource || ""),
      escapeCsv(lead.leadCampaign || ""),
      escapeCsv(lead.leadMedium || ""),
      escapeCsv(lead.leadAdSet || ""),
      escapeCsv(lead.leadAd || ""),
      escapeCsv(lead.leadLandingPage || ""),
      escapeCsv(lead.leadReferrer || ""),
    ]);

    downloadCsv(
      `hegxcorp_growth_audit_leads_${new Date().toISOString().slice(0, 10)}.csv`,
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n"),
    );
    toast.success(`Exported ${filtered.length} growth audit leads to CSV!`);
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-4">
        <button
          type="button"
          onClick={() => {
            setActiveStatusFilter(null);
            setPage(1);
          }}
          aria-pressed={activeStatusFilter === null}
          className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            activeStatusFilter === null
              ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
              : "border-[#E4E7EC] bg-white text-[#101828]"
          }`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`}
          >
            All Leads
          </p>
          <p
            className={`mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`}
          >
            {growthAuditInquiries.length}
          </p>
        </button>

        {stats.map(({ status, count }) => (
          <button
            type="button"
            key={status}
            onClick={() => toggleFilter(status)}
            aria-pressed={activeStatusFilter === status}
            className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
              activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""
            } ${
              status === "NEW"
                ? "border-[#FED7AA] bg-[#FFF7ED]"
                : status === "INPROGRESS"
                  ? "border-[#B9D3FF] bg-[#EAF2FF]"
                  : "border-[#D0D5DD] bg-[#F2F4F7]"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">
              {formatInquiryStatus(status)}
            </p>
            <p className="mt-2 text-3xl font-black text-[#06133D]">{count}</p>
          </button>
        ))}
      </div>

      {error && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="overflow-hidden border border-[#E4E7EC] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-5 py-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-[#FC9C44]" />
            <h2 className="text-base font-black text-[#06133D]">Growth Audit Form submissions</h2>
            {activeStatusFilter && (
              <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]">
                {formatInquiryStatus(activeStatusFilter)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleExportCsv}
              className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-1.5 text-xs font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
            >
              <Download className="h-3.5 w-3.5 text-[#FC9C44]" />
              Export CSV
            </button>
            <p className="text-sm font-semibold text-[#667085]">
              {firstVisible}-{lastVisible} of {filtered.length} leads
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]">
            Loading leads...
          </div>
        ) : filtered.length === 0 ? (
          <div className="grid min-h-[320px] place-items-center px-6 text-center">
            <div>
              <ClipboardList className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">
                {activeStatusFilter
                  ? `No ${formatInquiryStatus(activeStatusFilter).toLowerCase()} leads found`
                  : "No leads saved yet"}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#667085]">
                {activeStatusFilter
                  ? "Choose another status box to review a different lead group."
                  : "New growth audit requests will appear here after the free audit form saves them to the database."}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1060px] w-full border-collapse text-left">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                <tr>
                  <th className="px-5 py-3">Lead</th>
                  <th className="px-5 py-3">Website</th>
                  <th className="px-5 py-3">Ad Source</th>
                  <th className="px-5 py-3">Revenue Range</th>
                  <th className="px-5 py-3">Growth Goal</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {pageItems.map((inquiry) => (
                  <tr key={inquiry.id} className="align-top transition hover:bg-[#FFF9F3]">
                    <td className="px-5 py-4">
                      <div className="min-w-[220px]">
                        <p className="font-black text-[#06133D]">{inquiry.name}</p>
                        <div className="mt-2 flex flex-col gap-1">
                          <div className="flex items-center gap-1.5">
                            <a
                              href={getGmailComposeUrl(inquiry.email)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex max-w-[210px] items-center gap-1.5 text-sm font-bold text-[#06133D] underline decoration-[#FC9C44]/40 underline-offset-2 transition hover:text-[#FC9C44] hover:decoration-[#FC9C44]"
                              title={`Compose email to ${inquiry.email} in Gmail`}
                            >
                              <Mail className="h-4 w-4 shrink-0 text-[#FC9C44]" />
                              <span className="truncate">{inquiry.email}</span>
                              <ExternalLink className="h-3 w-3 shrink-0 text-[#98A2B3]" />
                            </a>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                void handleCopy(inquiry.email.trim(), "Email");
                              }}
                              className="rounded p-1 text-[#98A2B3] transition hover:bg-[#F2F4F7] hover:text-[#06133D]"
                              title="Copy email to clipboard"
                              aria-label="Copy email"
                            >
                              {copiedText === inquiry.email.trim() ? (
                                <Check className="h-3.5 w-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                          </div>
                          <div className="flex items-center gap-2 pl-5 text-[11px] font-semibold text-[#667085]">
                            <a
                              href={getGmailComposeUrl(inquiry.email)}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[#FC9C44] hover:underline"
                              title="Open in Gmail Web Composer"
                            >
                              Gmail
                            </a>
                            <span className="text-[#D0D5DD]">&bull;</span>
                            <a
                              href={`mailto:${inquiry.email.trim()}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-[#06133D] hover:underline"
                              title="Open in your default desktop mail app (Outlook, Apple Mail, etc.)"
                            >
                              Mail App
                            </a>
                          </div>
                        </div>
                        <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]">
                          <CalendarClock className="h-4 w-4 shrink-0" />
                          {formatAdminDate(inquiry.createdAt)}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      {inquiry.website ? (
                        <div className="flex items-center gap-1.5">
                          <a
                            href={normalizeWebsiteUrl(inquiry.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex max-w-[210px] items-center gap-1.5 truncate text-sm font-bold text-[#FC9C44] underline decoration-[#FC9C44]/40 underline-offset-2 transition hover:text-[#e08630] hover:decoration-[#e08630]"
                            title={`Open ${normalizeWebsiteUrl(inquiry.website)} in new tab`}
                          >
                            <Globe className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">
                              {formatWebsiteDisplay(inquiry.website)}
                            </span>
                            <ExternalLink className="h-3 w-3 shrink-0 opacity-80" />
                          </a>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              void handleCopy(normalizeWebsiteUrl(inquiry.website), "Website URL");
                            }}
                            className="rounded p-1 text-[#98A2B3] transition hover:bg-[#F2F4F7] hover:text-[#06133D]"
                            title="Copy website URL"
                            aria-label="Copy website URL"
                          >
                            {copiedText === normalizeWebsiteUrl(inquiry.website) ? (
                              <Check className="h-3.5 w-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-[#98A2B3]">Not provided</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="grid gap-1 text-xs font-semibold text-[#667085]">
                        <span className="w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]">
                          {inquiry.leadSource ?? "Untracked"}
                        </span>
                        <p className="max-w-[240px] truncate">{getLeadSourceLabel(inquiry)}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#475467]">
                      {inquiry.revenueRange}
                    </td>
                    <td className="px-5 py-4">
                      <p className="max-w-[280px] text-sm leading-6 text-[#344054]">
                        {inquiry.goal}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="grid gap-2">
                        <span
                          className={`w-fit rounded-full px-3 py-1 text-xs font-black ${leadStatusStyles[inquiry.status]}`}
                        >
                          {formatInquiryStatus(inquiry.status)}
                        </span>
                        <select
                          value={inquiry.status}
                          disabled={updatingId === inquiry.id}
                          onChange={(e) =>
                            void handleGrowthAuditStatusChange(
                              inquiry.id,
                              e.target.value as InquiryStatus,
                            )
                          }
                          className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {inquiryStatuses.map((status) => (
                            <option key={status} value={status}>
                              {formatInquiryStatus(status)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4">
            <p className="text-sm font-semibold text-[#667085]">
              {firstVisible}-{lastVisible} of {filtered.length} leads
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
