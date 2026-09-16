import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Download, Megaphone, RefreshCw, ShieldCheck, Target } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { type AdFunnelReportRow, listAdFunnelReport } from "@/lib/ad-funnel";
import { downloadCsv, escapeCsv, formatAdminDate } from "@/lib/admin-leads";

export const Route = createFileRoute("/admin/ad-leads")({
  head: () => ({
    meta: [
      { title: "Meta Ad Leads | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp Meta Ads lead funnel report.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminAdLeadsPage,
} as never);

type FunnelMetric = "visitors" | "formStarts" | "leadsGenerated" | "genuineLeads";

function sumReportMetric(rows: AdFunnelReportRow[], metric: FunnelMetric) {
  return rows.reduce((total, row) => total + row[metric], 0);
}

function formatPercent(value: number, total: number) {
  if (total <= 0) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function getBestRow(rows: AdFunnelReportRow[]) {
  return [...rows].sort((left, right) => {
    if (right.genuineLeads !== left.genuineLeads) return right.genuineLeads - left.genuineLeads;
    if (right.leadsGenerated !== left.leadsGenerated) {
      return right.leadsGenerated - left.leadsGenerated;
    }
    return right.visitors - left.visitors;
  })[0];
}

function AdminAdLeadsPage() {
  const [reportRows, setReportRows] = useState<AdFunnelReportRow[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Strictly Meta Ads only: remove Untracked and any other non-Meta ad channels
  const metaRows = useMemo(() => {
    return reportRows
      .filter((row) => {
        const source = (row.leadSource || "").trim().toLowerCase();
        return (
          row.leadSource !== "Untracked" &&
          (source === "meta ads" ||
            source.includes("meta") ||
            source.includes("facebook") ||
            source.includes("instagram"))
        );
      })
      .map((row) => ({
        ...row,
        leadSource: "Meta Ads",
      }))
      .sort((a, b) => {
        const timeA = new Date(a.latestActivityAt).getTime();
        const timeB = new Date(b.latestActivityAt).getTime();
        return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
      });
  }, [reportRows, sortOrder]);

  const totalVisitors = sumReportMetric(metaRows, "visitors");
  const totalFormStarts = sumReportMetric(metaRows, "formStarts");
  const totalLeadsGenerated = sumReportMetric(metaRows, "leadsGenerated");
  const totalGenuineLeads = sumReportMetric(metaRows, "genuineLeads");
  const bestRow = getBestRow(metaRows);

  async function loadAdFunnelReport() {
    setIsLoading(true);
    setError("");

    try {
      const savedReportRows = await listAdFunnelReport();
      setReportRows(savedReportRows);
    } catch (loadError) {
      console.error("Ad funnel report failed:", loadError);
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Ad funnel report could not load right now.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadAdFunnelReport();
  }, []);

  function handleExportCsv() {
    if (metaRows.length === 0) return;

    const headers = [
      "Source",
      "Campaign",
      "Ad Set",
      "Ad",
      "Visitors",
      "Form Starts",
      "Leads Generated",
      "Genuine Leads",
      "Latest Activity",
    ];

    const rows = metaRows.map((row) => [
      row.leadSource,
      row.leadCampaign,
      row.leadAdSet,
      row.leadAd,
      row.visitors,
      row.formStarts,
      row.leadsGenerated,
      row.genuineLeads,
      row.latestActivityAt,
    ]);

    const csvContent = [
      headers.map(escapeCsv).join(","),
      ...rows.map((r) => r.map(escapeCsv).join(",")),
    ].join("\n");

    downloadCsv(`meta-ad-leads-${new Date().toISOString().slice(0, 10)}.csv`, csvContent);
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      {/* Metric Cards - strictly Meta Ads */}
      <div className="grid gap-3 lg:grid-cols-4">
        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <Megaphone className="h-4 w-4 text-[#FC9C44]" />
            Meta Visitors
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{totalVisitors}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">Tracked Meta Ads traffic</p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <Target className="h-4 w-4 text-[#FC9C44]" />
            Meta Form Starts
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{totalFormStarts}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {formatPercent(totalFormStarts, totalVisitors)} start rate from visitors
          </p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <ShieldCheck className="h-4 w-4 text-[#FC9C44]" />
            Meta Genuine Leads
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{totalGenuineLeads}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {totalLeadsGenerated} generated ({formatPercent(totalGenuineLeads, totalLeadsGenerated)}{" "}
            genuine)
          </p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <Target className="h-4 w-4 text-[#FC9C44]" />
            Best Meta Campaign / Ad
          </p>
          <p
            className="mt-2 text-lg font-black text-[#06133D] truncate"
            title={bestRow ? bestRow.leadCampaign : undefined}
          >
            {bestRow ? bestRow.leadCampaign : "No Meta ad activity yet"}
          </p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {bestRow
              ? `${bestRow.leadAd} • ${bestRow.genuineLeads} genuine leads`
              : "Visitors with Meta UTMs will appear here."}
          </p>
        </div>
      </div>

      {error && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <div className="overflow-hidden border border-[#E4E7EC] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-black text-[#06133D]">Meta Ads Funnel Report</h2>
              <span className="rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-xs font-black text-[#2359B8]">
                Only Meta Ads
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold text-[#667085]">
              Real-time funnel performance strictly for Meta Ads campaigns (untracked & other
              channels removed). Sorted by latest activity in ascending order.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={isLoading || metaRows.length === 0}
              className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-[#F9FAFB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download className="h-3.5 w-3.5 text-[#667085]" />
              Export CSV
            </button>
            <button
              type="button"
              onClick={() => void loadAdFunnelReport()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="grid min-h-[300px] place-items-center text-sm font-semibold text-[#667085]">
            Loading Meta Ads funnel...
          </div>
        ) : metaRows.length === 0 ? (
          <div className="grid min-h-[300px] place-items-center px-6 text-center">
            <div>
              <Megaphone className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">No Meta Ads activity yet</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#667085]">
                Meta Ads traffic and leads will appear here once visitors arrive with Meta campaign
                UTMs or fbclid parameters. Untracked and non-Meta channels are excluded.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1180px] w-full border-collapse text-left">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                <tr>
                  <th className="px-5 py-3">Source</th>
                  <th className="px-5 py-3">Campaign</th>
                  <th className="px-5 py-3">Ad Set</th>
                  <th className="px-5 py-3">Ad</th>
                  <th className="px-5 py-3">Visitors</th>
                  <th className="px-5 py-3">Form Starts</th>
                  <th className="px-5 py-3">Leads Generated</th>
                  <th className="px-5 py-3">Genuine Leads</th>
                  <th className="px-5 py-3">
                    <button
                      type="button"
                      onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
                      className="group inline-flex items-center gap-1.5 font-black uppercase tracking-[0.11em] text-[#667085] hover:text-[#06133D]"
                      title="Toggle ascending / descending sort"
                    >
                      <span>Latest Activity</span>
                      <span className="rounded bg-[#FFF4E8] px-1.5 py-0.5 text-[10px] font-extrabold text-[#C96A13]">
                        {sortOrder === "asc" ? "Asc ↑" : "Desc ↓"}
                      </span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {metaRows.map((row) => (
                  <tr key={row.key} className="align-top transition hover:bg-[#FFF9F3]">
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-black text-[#2359B8]">
                        {row.leadSource}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm font-black text-[#06133D]">
                      <p className="max-w-[220px]">{row.leadCampaign}</p>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#475467]">
                      <p className="max-w-[180px]">{row.leadAdSet}</p>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-[#475467]">
                      <p className="max-w-[180px]">{row.leadAd}</p>
                    </td>
                    <td className="px-5 py-4 text-sm font-black text-[#06133D]">{row.visitors}</td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-black text-[#06133D]">{row.formStarts}</p>
                      <p className="text-xs font-semibold text-[#667085]">
                        {formatPercent(row.formStarts, row.visitors)} of visitors
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-black text-[#06133D]">{row.leadsGenerated}</p>
                      <p className="text-xs font-semibold text-[#667085]">
                        {formatPercent(row.leadsGenerated, row.visitors)} of visitors
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-black text-[#06133D]">{row.genuineLeads}</p>
                      <p className="text-xs font-semibold text-[#667085]">
                        {formatPercent(row.genuineLeads, row.leadsGenerated)} of generated leads
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="flex min-w-[170px] items-center gap-2 text-xs font-semibold text-[#667085]">
                        <CalendarClock className="h-4 w-4 text-[#FC9C44]" />
                        {formatAdminDate(row.latestActivityAt)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
