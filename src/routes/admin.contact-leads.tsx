import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, ChevronLeft, ChevronRight, Inbox, Mail, Phone } from "lucide-react";
import { useMemo, useState } from "react";

import { useAdminContext } from "@/lib/admin-context.tsx";
import { inquiryStatuses, type InquiryStatus } from "@/lib/contact-inquiries";

export const Route = createFileRoute("/admin/contact-leads")({
  head: () => ({
    meta: [
      { title: "Contact Leads | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ContactLeadsPage,
} as never);

const leadsPerPage = 10;

const statusStyles: Record<InquiryStatus, string> = {
  NEW: "bg-[#FFF4E8] text-[#C96A13]",
  INPROGRESS: "bg-[#EAF2FF] text-[#2359B8]",
  CLOSED: "bg-[#F2F4F7] text-[#475467]",
};

function formatStatus(status: InquiryStatus) {
  if (status === "INPROGRESS") return "In Progress";
  return status
    .toLowerCase()
    .split("_")
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join(" ");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(value),
  );
}

function getLeadSourceLabel(lead: {
  leadSource: string | null;
  leadCampaign: string | null;
  leadAd?: string | null;
}) {
  const source = lead.leadSource?.trim() || "Untracked";
  const campaign = lead.leadCampaign?.trim();
  const ad = lead.leadAd?.trim();
  if (campaign && ad) return `${source} / ${campaign} / ${ad}`;
  if (campaign) return `${source} / ${campaign}`;
  return source;
}

function ContactLeadsPage() {
  const { inquiries, isLoading, error, updatingId, handleStatusChange } = useAdminContext();
  const [activeStatusFilter, setActiveStatusFilter] = useState<InquiryStatus | null>(null);
  const [page, setPage] = useState(1);

  const filtered = activeStatusFilter
    ? inquiries.filter((i) => i.status === activeStatusFilter)
    : inquiries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / leadsPerPage));
  const currentPage = Math.min(page, totalPages);
  const firstVisible = filtered.length ? (currentPage - 1) * leadsPerPage + 1 : 0;
  const lastVisible = Math.min(currentPage * leadsPerPage, filtered.length);
  const paginated = filtered.slice((currentPage - 1) * leadsPerPage, currentPage * leadsPerPage);

  const stats = useMemo(
    () =>
      inquiryStatuses.map((status) => ({
        status,
        count: inquiries.filter((i) => i.status === status).length,
      })),
    [inquiries],
  );

  function toggleFilter(status: InquiryStatus) {
    setActiveStatusFilter((current) => (current === status ? null : status));
    setPage(1);
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
            {inquiries.length}
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
              {formatStatus(status)}
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
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4">
          <div className="flex items-center gap-2">
            <Inbox className="h-5 w-5 text-[#FC9C44]" />
            <h2 className="text-base font-black text-[#06133D]">Contact Form submissions</h2>
            {activeStatusFilter && (
              <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]">
                {formatStatus(activeStatusFilter)}
              </span>
            )}
          </div>
          <p className="text-sm font-semibold text-[#667085]">
            {firstVisible}-{lastVisible} of {filtered.length} leads
          </p>
        </div>

        {isLoading ? (
          <div className="grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]">
            Loading leads...
          </div>
        ) : filtered.length === 0 ? (
          <div className="grid min-h-[320px] place-items-center px-6 text-center">
            <div>
              <Inbox className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">
                {activeStatusFilter
                  ? `No ${formatStatus(activeStatusFilter).toLowerCase()} leads found`
                  : "No leads saved yet"}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#667085]">
                {activeStatusFilter
                  ? "Choose another status box to review a different lead group."
                  : "New website inquiries will appear here after the contact form saves them to the database."}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1180px] w-full border-collapse text-left">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                <tr>
                  <th className="px-5 py-3">Lead</th>
                  <th className="px-5 py-3">Source</th>
                  <th className="px-5 py-3">Ad Source</th>
                  <th className="px-5 py-3">Budget</th>
                  <th className="px-5 py-3">Timeline</th>
                  <th className="px-5 py-3">Message</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {paginated.map((inquiry) => (
                  <tr key={inquiry.id} className="align-top transition hover:bg-[#FFF9F3]">
                    <td className="px-5 py-4">
                      <div className="min-w-[220px]">
                        <p className="font-black text-[#06133D]">{inquiry.name}</p>
                        <a
                          href={`mailto:${inquiry.email}`}
                          className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]"
                        >
                          <Mail className="h-4 w-4" />
                          {inquiry.email}
                        </a>
                        {inquiry.phone && (
                          <a
                            href={`tel:${inquiry.phone}`}
                            className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]"
                          >
                            <Phone className="h-4 w-4" />
                            {inquiry.phone}
                          </a>
                        )}
                        <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]">
                          <CalendarClock className="h-4 w-4" />
                          {formatDate(inquiry.createdAt)}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-bold text-[#344054]">{inquiry.source}</p>
                      {inquiry.services.length > 0 && (
                        <div className="mt-2 flex max-w-[240px] flex-wrap gap-2">
                          {inquiry.services.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-[#FFF4E8] px-2.5 py-1 text-xs font-bold text-[#C96A13]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                      {inquiry.website && (
                        <a
                          href={inquiry.website}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 block max-w-[240px] truncate text-sm font-semibold text-[#FC9C44] hover:underline"
                        >
                          {inquiry.website}
                        </a>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="grid min-w-[220px] gap-1 text-xs font-semibold text-[#667085]">
                        <span className="w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]">
                          {inquiry.leadSource ?? "Untracked"}
                        </span>
                        <p className="max-w-[240px] truncate">{getLeadSourceLabel(inquiry)}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#475467]">
                      {inquiry.budget ?? "Not shared"}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#475467]">
                      {inquiry.timeline ?? "Not shared"}
                    </td>
                    <td className="px-5 py-4">
                      <p className="max-w-[300px] text-sm leading-6 text-[#344054]">
                        {inquiry.message}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="grid gap-2">
                        <span
                          className={`w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles[inquiry.status]}`}
                        >
                          {formatStatus(inquiry.status)}
                        </span>
                        <select
                          value={inquiry.status}
                          disabled={updatingId === inquiry.id}
                          onChange={(e) =>
                            void handleStatusChange(inquiry.id, e.target.value as InquiryStatus)
                          }
                          className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {inquiryStatuses.map((status) => (
                            <option key={status} value={status}>
                              {formatStatus(status)}
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
