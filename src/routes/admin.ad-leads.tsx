import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Megaphone, RefreshCw, ShieldCheck, Target } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { type AdFunnelReportRow, listAdFunnelReport } from "@/lib/ad-funnel";

export const Route = createFileRoute("/admin/ad-leads")({
  head: () => ({
    meta: [
      { title: "Ad Leads | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp ad source lead funnel report.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminAdLeadsPage,
} as never);

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const metaRows = useMemo(
    () => reportRows.filter((row) => row.leadSource === "Meta Ads"),
    [reportRows],
  );
  const totalVisitors = reportRows.reduce((total, row) => total + row.visitors, 0);
  const totalFormStarts = reportRows.reduce((total, row) => total + row.formStarts, 0);
  const totalLeadsGenerated = reportRows.reduce((total, row) => total + row.leadsGenerated, 0);
  const totalGenuineLeads = reportRows.reduce((total, row) => total + row.genuineLeads, 0);
  const metaVisitors = metaRows.reduce((total, row) => total + row.visitors, 0);
  const metaFormStarts = metaRows.reduce((total, row) => total + row.formStarts, 0);
  const metaLeadsGenerated = metaRows.reduce((total, row) => total + row.leadsGenerated, 0);
  const metaGenuineLeads = metaRows.reduce((total, row) => total + row.genuineLeads, 0);
  const bestRow = getBestRow(reportRows);

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

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      <div className="grid gap-3 lg:grid-cols-4">
        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <Megaphone className="h-4 w-4 text-[#FC9C44]" />
            Meta Visitors
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{metaVisitors}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {metaFormStarts} form starts, {metaLeadsGenerated} leads generated
          </p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <ShieldCheck className="h-4 w-4 text-[#FC9C44]" />
            Meta Genuine Leads
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{metaGenuineLeads}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {formatPercent(metaGenuineLeads, metaLeadsGenerated)} of generated Meta leads
          </p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            All Tracked Funnel
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{totalVisitors}</p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {totalFormStarts} starts, {totalLeadsGenerated} leads, {totalGenuineLeads} genuine
          </p>
        </div>

        <div className="border border-[#E4E7EC] bg-white p-4">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <Target className="h-4 w-4 text-[#FC9C44]" />
            Best Campaign / Ad
          </p>
          <p className="mt-2 text-lg font-black text-[#06133D]">
            {bestRow ? bestRow.leadCampaign : "No tracked ad activity yet"}
          </p>
          <p className="mt-1 text-xs font-semibold text-[#667085]">
            {bestRow
              ? `${bestRow.leadAd} - ${bestRow.genuineLeads} genuine leads`
              : "Use UTM labels in your ad URL to start tracking."}
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
            <h2 className="text-base font-black text-[#06133D]">Ad funnel report</h2>
            <p className="mt-1 text-xs font-semibold text-[#667085]">
              Visitors and form starts come from tracking events. Leads generated come from form
              submissions. Genuine means status is In Progress or Closed.
            </p>
          </div>
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

        {isLoading ? (
          <div className="grid min-h-[300px] place-items-center text-sm font-semibold text-[#667085]">
            Loading ad funnel...
          </div>
        ) : reportRows.length === 0 ? (
          <div className="grid min-h-[300px] place-items-center px-6 text-center">
            <div>
              <Megaphone className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">No tracked ad activity yet</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#667085]">
                isitors will appear here after they arrive from Meta or another UTM-tagged ad URL.
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
                  <th className="px-5 py-3">Latest Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {reportRows.map((row) => (
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
                        <CalendarClock className="h-4 w-4" />
                        {formatDate(row.latestActivityAt)}
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
