import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  RefreshCw,
  Search,
  Trash2,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { downloadCsv, escapeCsv, formatAdminDate, paginate } from "@/lib/admin-leads";

import {
  deleteNewsletterSubscriber,
  listNewsletterSubscribers,
  updateNewsletterSubscriberStatus,
  type NewsletterSubscriber,
  type SubscriberStatus,
} from "@/lib/newsletter";

export const Route = createFileRoute("/admin/subscribers")({
  head: () => ({
    meta: [
      { title: "Newsletter Subscribers | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminSubscribersPage,
} as never);

function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | SubscriberStatus>("ALL");
  const [page, setPage] = useState(1);
  const [actionInProgressId, setActionInProgressId] = useState("");

  async function loadSubscribers() {
    setIsLoading(true);
    try {
      const data = await listNewsletterSubscribers();
      setSubscribers(data);
    } catch (err: any) {
      console.error("Failed to load subscribers:", err);
      toast.error(err?.message || "Failed to load newsletter subscribers.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadSubscribers();
  }, []);

  const totalCount = subscribers.length;
  const activeCount = subscribers.filter((s) => s.status === "ACTIVE").length;
  const unsubscribedCount = subscribers.filter((s) => s.status === "UNSUBSCRIBED").length;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const thisMonthCount = subscribers.filter((s) => {
    const d = new Date(s.createdAt);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;

  // Filtered subscribers
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return subscribers.filter((sub) => {
      const matchesSearch =
        !q || sub.email.toLowerCase().includes(q) || sub.source.toLowerCase().includes(q);
      const matchesStatus = statusFilter === "ALL" || sub.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [subscribers, searchQuery, statusFilter]);

  const { totalPages, currentPage, firstVisible, lastVisible, pageItems } = paginate(
    filtered,
    page,
    15,
  );

  async function handleToggleStatus(sub: NewsletterSubscriber) {
    const newStatus: SubscriberStatus = sub.status === "ACTIVE" ? "UNSUBSCRIBED" : "ACTIVE";
    setActionInProgressId(sub.id);
    try {
      await updateNewsletterSubscriberStatus({ data: { id: sub.id, status: newStatus } });
      setSubscribers((prev) =>
        prev.map((item) => (item.id === sub.id ? { ...item, status: newStatus } : item)),
      );
      toast.success(
        newStatus === "ACTIVE" ? `Reactivated ${sub.email}` : `Marked ${sub.email} as unsubscribed`,
      );
    } catch (err: any) {
      toast.error(err?.message || "Could not update status.");
    } finally {
      setActionInProgressId("");
    }
  }

  async function handleDelete(id: string, email: string) {
    if (!window.confirm(`Are you sure you want to permanently delete ${email}?`)) {
      return;
    }

    setActionInProgressId(id);
    try {
      await deleteNewsletterSubscriber({ data: { id } });
      setSubscribers((prev) => prev.filter((item) => item.id !== id));
      toast.success(`Removed ${email} from subscriber list.`);
    } catch (err: any) {
      toast.error(err?.message || "Could not delete subscriber.");
    } finally {
      setActionInProgressId("");
    }
  }

  function handleExportCsv() {
    if (filtered.length === 0) {
      toast.error("No subscribers to export.");
      return;
    }

    const headers = ["Email", "Source", "Status", "Subscribed At"];
    const rows = filtered.map((s) => [
      escapeCsv(s.email),
      escapeCsv(s.source),
      escapeCsv(s.status),
      escapeCsv(s.createdAt),
    ]);

    downloadCsv(
      `hegxcorp_newsletter_subscribers_${new Date().toISOString().slice(0, 10)}.csv`,
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n"),
    );
    toast.success(`Exported ${filtered.length} subscribers to CSV!`);
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      {/* Metric Cards */}
      <div className="grid gap-3 sm:grid-cols-4">
        <button
          type="button"
          onClick={() => {
            setStatusFilter("ALL");
            setPage(1);
          }}
          className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            statusFilter === "ALL"
              ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
              : "border-[#E4E7EC] bg-white text-[#101828]"
          }`}
        >
          <div className="flex items-center justify-between">
            <p
              className={`text-xs font-bold uppercase tracking-[0.12em] ${statusFilter === "ALL" ? "text-white/70" : "text-[#667085]"}`}
            >
              Total Audience
            </p>
            <Users
              className={`h-4 w-4 ${statusFilter === "ALL" ? "text-[#FC9C44]" : "text-[#667085]"}`}
            />
          </div>
          <p
            className={`mt-2 text-3xl font-black ${statusFilter === "ALL" ? "text-white" : "text-[#06133D]"}`}
          >
            {totalCount}
          </p>
        </button>

        <button
          type="button"
          onClick={() => {
            setStatusFilter("ACTIVE");
            setPage(1);
          }}
          className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            statusFilter === "ACTIVE"
              ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
              : "border-[#D1FADF] bg-[#F6FEF9] text-[#101828]"
          }`}
        >
          <div className="flex items-center justify-between">
            <p
              className={`text-xs font-bold uppercase tracking-[0.12em] ${statusFilter === "ACTIVE" ? "text-white/70" : "text-[#027A48]"}`}
            >
              Active Subscribers
            </p>
            <UserCheck
              className={`h-4 w-4 ${statusFilter === "ACTIVE" ? "text-emerald-400" : "text-[#027A48]"}`}
            />
          </div>
          <p
            className={`mt-2 text-3xl font-black ${statusFilter === "ACTIVE" ? "text-white" : "text-[#027A48]"}`}
          >
            {activeCount}
          </p>
        </button>

        <div className="border border-[#E4E7EC] bg-white p-4 text-left">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">
              New This Month
            </p>
            <CalendarClock className="h-4 w-4 text-[#FC9C44]" />
          </div>
          <p className="mt-2 text-3xl font-black text-[#06133D]">+{thisMonthCount}</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatusFilter("UNSUBSCRIBED");
            setPage(1);
          }}
          className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            statusFilter === "UNSUBSCRIBED"
              ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
              : "border-[#E4E7EC] bg-white text-[#101828]"
          }`}
        >
          <div className="flex items-center justify-between">
            <p
              className={`text-xs font-bold uppercase tracking-[0.12em] ${statusFilter === "UNSUBSCRIBED" ? "text-white/70" : "text-[#667085]"}`}
            >
              Unsubscribed
            </p>
            <UserX
              className={`h-4 w-4 ${statusFilter === "UNSUBSCRIBED" ? "text-red-400" : "text-[#98A2B3]"}`}
            />
          </div>
          <p
            className={`mt-2 text-3xl font-black ${statusFilter === "UNSUBSCRIBED" ? "text-white" : "text-[#475467]"}`}
          >
            {unsubscribedCount}
          </p>
        </button>
      </div>

      {/* Main Table Card */}
      <div className="overflow-hidden border border-[#E4E7EC] bg-white rounded-xl shadow-xs">
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] p-5">
          <div className="flex flex-1 items-center gap-3 min-w-[260px] max-w-md">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
              <input
                type="text"
                placeholder="Search by email or article source..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] py-2 pl-9 pr-3 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:bg-white focus:ring-2 focus:ring-[#FC9C44]/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleExportCsv}
              className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
            >
              <Download className="h-3.5 w-3.5" />
              Export CSV
            </button>
            <button
              type="button"
              onClick={() => void loadSubscribers()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#102159] disabled:opacity-60"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Table Content */}
        {isLoading ? (
          <div className="grid min-h-[300px] place-items-center text-sm font-semibold text-[#667085]">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 animate-spin text-[#FC9C44]" />
              Loading subscribers...
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="grid min-h-[300px] place-items-center px-6 text-center">
            <div>
              <Mail className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-base font-black text-[#06133D]">No subscribers found</h3>
              <p className="mt-1.5 max-w-sm text-xs leading-5 text-[#667085]">
                {searchQuery
                  ? "No results matched your search term. Try a different query."
                  : "New subscribers will appear here automatically when readers sign up from your blog."}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.1em] text-[#667085] border-b border-[#E4E7EC]">
                <tr>
                  <th className="px-6 py-3.5">Subscriber Email</th>
                  <th className="px-6 py-3.5">Signup Source</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Subscribed Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {pageItems.map((sub) => {
                  const isProcessing = actionInProgressId === sub.id;
                  const isActive = sub.status === "ACTIVE";

                  return (
                    <tr key={sub.id} className="transition hover:bg-[#F9FAFB]/70">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] font-bold text-xs shrink-0">
                            {sub.email.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold text-[#101828] select-all">{sub.email}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-md bg-[#F2F4F7] px-2.5 py-1 text-xs font-medium text-[#344054]">
                          {sub.source.replace("blog_article:", "Article: ")}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600 border border-gray-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                            Unsubscribed
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-xs font-semibold text-[#667085]">
                        {formatAdminDate(sub.createdAt)}
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            disabled={isProcessing}
                            onClick={() => void handleToggleStatus(sub)}
                            className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition disabled:opacity-50 ${
                              isActive
                                ? "border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50"
                                : "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            }`}
                          >
                            {isActive ? "Unsubscribe" : "Reactivate"}
                          </button>
                          <button
                            type="button"
                            disabled={isProcessing}
                            onClick={() => void handleDelete(sub.id, sub.email)}
                            aria-label={`Delete ${sub.email}`}
                            className="rounded-lg p-1.5 text-[#98A2B3] transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Footer */}
        {filtered.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E4E7EC] px-6 py-4 text-xs font-bold text-[#667085]">
            <p>
              Showing {firstVisible}-{lastVisible} of {filtered.length} subscribers
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="inline-flex items-center gap-1 rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-bold text-[#344054] transition hover:border-[#FC9C44] disabled:opacity-50"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="inline-flex items-center gap-1 rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-bold text-[#344054] transition hover:border-[#FC9C44] disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
