import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Eye,
  EyeOff,
  Inbox,
  LockKeyhole,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";

import { getAdminSession, loginAdmin, logoutAdmin } from "@/lib/admin-auth";
import {
  type ContactInquiry,
  type InquiryStatus,
  inquiryStatuses,
  listContactInquiries,
  updateContactInquiryStatus,
} from "@/lib/contact-inquiries";
import {
  type GrowthAuditInquiry,
  listGrowthAuditInquiries,
  updateGrowthAuditInquiryStatus,
} from "@/lib/growth-audit-inquiries";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Lead Inbox | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp lead inbox for contact and service inquiries.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLeadsPage,
} as never);

const statusStyles: Record<InquiryStatus, string> = {
  NEW: "bg-[#FFF4E8] text-[#C96A13]",
  INPROGRESS: "bg-[#EAF2FF] text-[#2359B8]",
  CLOSED: "bg-[#F2F4F7] text-[#475467]",
};

type LeadInbox = "contact" | "growthAudit";

const activeInboxStorageKey = "hegxcorp-admin-active-inbox";
const leadsPerPage = 10;

const inboxCopy: Record<LeadInbox, { title: string; empty: string }> = {
  contact: {
    title: "Contact Form",
    empty: "New website inquiries will appear here after the contact form saves them to the database.",
  },
  growthAudit: {
    title: "Growth Audit Form",
    empty: "New growth audit requests will appear here after the free audit form saves them to the database.",
  },
};

function formatStatus(status: InquiryStatus) {
  if (status === "INPROGRESS") {
    return "In Progress";
  }

  return status
    .toLowerCase()
    .split("_")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function isLeadInbox(value: string | null): value is LeadInbox {
  return value === "contact" || value === "growthAudit";
}

function AdminLeadsPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeInbox, setActiveInbox] = useState<LeadInbox>("contact");
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [growthAuditInquiries, setGrowthAuditInquiries] = useState<GrowthAuditInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");
  const [isFormMenuOpen, setIsFormMenuOpen] = useState(false);
  const [isFormMenuHovered, setIsFormMenuHovered] = useState(false);
  const [leadPages, setLeadPages] = useState<Record<LeadInbox, number>>({
    contact: 1,
    growthAudit: 1,
  });
  const [activeStatusFilter, setActiveStatusFilter] = useState<InquiryStatus | null>(null);

  const allActiveInquiries = activeInbox === "contact" ? inquiries : growthAuditInquiries;
  const filteredContactInquiries = activeStatusFilter
    ? inquiries.filter((inquiry) => inquiry.status === activeStatusFilter)
    : inquiries;
  const filteredGrowthAuditInquiries = activeStatusFilter
    ? growthAuditInquiries.filter((inquiry) => inquiry.status === activeStatusFilter)
    : growthAuditInquiries;
  const activeInquiries =
    activeInbox === "contact" ? filteredContactInquiries : filteredGrowthAuditInquiries;
  const activeInboxTitle = inboxCopy[activeInbox].title;
  const isFormMenuVisible = isFormMenuOpen || isFormMenuHovered;
  const activePage = leadPages[activeInbox];
  const totalLeadPages = Math.max(1, Math.ceil(activeInquiries.length / leadsPerPage));
  const currentLeadPage = Math.min(activePage, totalLeadPages);
  const firstVisibleLead = activeInquiries.length
    ? (currentLeadPage - 1) * leadsPerPage + 1
    : 0;
  const lastVisibleLead = Math.min(currentLeadPage * leadsPerPage, activeInquiries.length);
  const pageStartIndex = (currentLeadPage - 1) * leadsPerPage;
  const pageEndIndex = pageStartIndex + leadsPerPage;
  const paginatedContactInquiries = filteredContactInquiries.slice(pageStartIndex, pageEndIndex);
  const paginatedGrowthAuditInquiries = filteredGrowthAuditInquiries.slice(pageStartIndex, pageEndIndex);

  function selectInbox(inbox: LeadInbox) {
    setActiveInbox(inbox);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(activeInboxStorageKey, inbox);
    }
  }

  function setActiveLeadPage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), totalLeadPages);
    setLeadPages((current) => ({
      ...current,
      [activeInbox]: nextPage,
    }));
  }

  function toggleStatusFilter(status: InquiryStatus) {
    setActiveStatusFilter((current) => (current === status ? null : status));
    setLeadPages((current) => ({
      ...current,
      [activeInbox]: 1,
    }));
  }

  function clearStatusFilter() {
    setActiveStatusFilter(null);
    setLeadPages((current) => ({
      ...current,
      [activeInbox]: 1,
    }));
  }

  const stats = useMemo(() => {
    return inquiryStatuses.map((status) => ({
      status,
      count: allActiveInquiries.filter((inquiry) => inquiry.status === status).length,
    }));
  }, [allActiveInquiries]);

  useEffect(() => {
    if (activePage > totalLeadPages) {
      setLeadPages((current) => ({
        ...current,
        [activeInbox]: totalLeadPages,
      }));
    }
  }, [activeInbox, activePage, totalLeadPages]);

  async function loadInquiries() {
    setIsLoading(true);
    setError("");

    try {
      const [savedInquiries, savedGrowthAuditInquiries] = await Promise.all([
        listContactInquiries(),
        listGrowthAuditInquiries(),
      ]);
      setInquiries(savedInquiries);
      setGrowthAuditInquiries(savedGrowthAuditInquiries);
    } catch (loadError) {
      console.error("Lead inbox failed:", loadError);
      const message =
        loadError instanceof Error
          ? loadError.message
          : "Lead inbox could not load right now.";
      setError(message);
      if (message.includes("Authentication required")) {
        setIsAuthenticated(false);
        setInquiries([]);
        setGrowthAuditInquiries([]);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const savedInbox = window.localStorage.getItem(activeInboxStorageKey);
    if (isLeadInbox(savedInbox)) {
      setActiveInbox(savedInbox);
    }

    async function restoreSession() {
      try {
        const session = await getAdminSession();
        setIsAuthenticated(session.isAuthenticated);
        if (session.isAuthenticated) {
          setEmail(session.email ?? "");
          await loadInquiries();
        }
      } catch (sessionError) {
        console.error("Admin session check failed:", sessionError);
        setError(
          sessionError instanceof Error
            ? sessionError.message
            : "Admin login could not be checked.",
        );
      } finally {
        setIsCheckingSession(false);
      }
    }

    void restoreSession();
    // The initial session check should run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    setError("");

    try {
      const session = await loginAdmin({ data: { email, password } });
      setIsAuthenticated(session.isAuthenticated);
      setEmail(session.email);
      setPassword("");
      await loadInquiries();
    } catch (loginError) {
      console.error("Admin login failed:", loginError);
      setError(
        loginError instanceof Error
          ? loginError.message
          : "Login failed. Check your credentials and try again.",
      );
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleLogout() {
    setError("");
    try {
      await logoutAdmin();
      setIsAuthenticated(false);
      setInquiries([]);
      setGrowthAuditInquiries([]);
      setPassword("");
      toast.success("You have been signed out.");
    } catch (logoutError) {
      console.error("Admin logout failed:", logoutError);
      toast.error("Could not sign out. Please try again.");
    }
  }

  async function handleStatusChange(id: string, status: InquiryStatus) {
    setUpdatingId(id);
    setError("");

    try {
      const updatedInquiry = await updateContactInquiryStatus({
        data: {
          id,
          status,
        },
      });

      setInquiries((current) =>
        current.map((inquiry) => (inquiry.id === id ? updatedInquiry : inquiry)),
      );
      toast.success("Lead status updated.");
    } catch (updateError) {
      console.error("Lead status update failed:", updateError);
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Lead status could not be updated.",
      );
      toast.error("Lead status could not be updated.");
    } finally {
      setUpdatingId("");
    }
  }

  async function handleGrowthAuditStatusChange(id: string, status: InquiryStatus) {
    setUpdatingId(id);
    setError("");

    try {
      const updatedInquiry = await updateGrowthAuditInquiryStatus({
        data: {
          id,
          status,
        },
      });

      setGrowthAuditInquiries((current) =>
        current.map((inquiry) => (inquiry.id === id ? updatedInquiry : inquiry)),
      );
      toast.success("Growth audit status updated.");
    } catch (updateError) {
      console.error("Growth audit status update failed:", updateError);
      setError(
        updateError instanceof Error
          ? updateError.message
          : "Growth audit status could not be updated.",
      );
      toast.error("Growth audit status could not be updated.");
    } finally {
      setUpdatingId("");
    }
  }

  if (isCheckingSession) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#F7F8FA] text-[#06133D]">
        <div className="grid place-items-center gap-4 text-sm font-bold">
          <RefreshCw className="h-7 w-7 animate-spin text-[#FC9C44]" />
          Checking secure session...
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#050B24] px-6 py-12 text-white">
        <Toaster position="top-right" richColors />
        <div className="pointer-events-none absolute -left-32 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#FC9C44]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-[#2359B8]/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[460px]  -translate-y-25">
          <section className="w-full rounded-lg border border-white/10 bg-white p-7 text-center text-[#101828] shadow-2xl shadow-black/30 sm:p-10">
            <Link
              to="/"
              className="mb-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-[#667085] transition hover:text-[#fcb044]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to website
            </Link>

            {/* <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
              <LockKeyhole className="h-6 w-6" />
            </div> */}
            <h2
              className="mt-6 text-3xl font-black text-[#06133D]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Admin login
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Sign in with your Hegxcorp administrator credentials.
            </p>

            <form onSubmit={handleLogin} className="mt-8 grid gap-5 text-left">
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
                  Email address
                </span>
                <span className="relative">
                  <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    autoComplete="username"
                    required
                    autoFocus
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-[#D0D5DD] py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
                  Password
                </span>
                <span className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
                  <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-[#D0D5DD] py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] transition hover:text-[#FC9C44]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </span>
              </label>

              {error && (
                <div role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-3 text-sm font-black text-white transition hover:bg-[#E88C35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoggingIn && <RefreshCw className="h-4 w-4 animate-spin" />}
                {isLoggingIn ? "Signing in..." : "Sign in "}
              </button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#101828] lg:flex">
      <Toaster position="top-right" richColors />

      <aside className="border-b border-[#E4E7EC] bg-white lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex h-full flex-col p-4">
          <div className="px-2 pb-5">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#FC9C44]">
              <ShieldCheck className="h-4 w-4" />
              Hegxcorp Admin
            </div>
            <h1
              className="mt-2 text-2xl font-black text-[#06133D]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Lead Inbox
            </h1>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsFormMenuHovered(true)}
            onMouseLeave={() => setIsFormMenuHovered(false)}
          >
            <button
              type="button"
              onClick={() => setIsFormMenuOpen((current) => !current)}
              aria-expanded={isFormMenuVisible}
              className="flex w-full items-center justify-between rounded-lg bg-[#06133D] px-3 py-3 text-left text-sm font-black text-white transition hover:bg-[#102159]"
            >
              <span className="flex items-center gap-2">
                <Inbox className="h-4 w-4 text-[#FC9C44]" />
                Lead Forms
              </span>
              <ChevronDown
                className={`h-4 w-4 text-white/70 transition ${isFormMenuVisible ? "rotate-180" : ""}`}
              />
            </button>

            {isFormMenuVisible && (
              <div className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none">
                <button
                  type="button"
                  onClick={() => {
                    selectInbox("contact");
                    setIsFormMenuOpen(false);
                    setIsFormMenuHovered(false);
                  }}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${activeInbox === "contact"
                    ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                    : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Form
                  </span>
                  <span>{inquiries.length}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    selectInbox("growthAudit");
                    setIsFormMenuOpen(false);
                    setIsFormMenuHovered(false);
                  }}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${activeInbox === "growthAudit"
                    ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                    : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <ClipboardList className="h-4 w-4" />
                    Growth Audit Form
                  </span>
                  <span>{growthAuditInquiries.length}</span>
                </button>
              </div>
            )}
          </div>

          <div className="mt-auto hidden border-t border-[#E4E7EC] pt-4 lg:block">
            <p className="px-2 text-xs font-semibold leading-5 text-[#667085]">
              Signed in as <span className="font-black text-[#06133D]">{email}</span>
            </p>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="border-b border-[#E4E7EC] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#98A2B3]">
                Viewing {activeInboxTitle}
              </p>
              <h2
                className="mt-2 text-2xl font-black text-[#06133D] sm:text-3xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {activeInboxTitle} submissions
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
              >
                <ArrowLeft className="h-4 w-4" />
                Website
              </Link>
              <button
                type="button"
                onClick={() => void handleLogout()}
                className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-red-300 hover:text-red-600"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
              <button
                type="button"
                onClick={() => void loadInquiries()}
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>
          </div>
        </div>

        <section className="grid gap-6 px-6 py-8 lg:px-8 ">
          <div className="grid gap-3 sm:grid-cols-4 ">
            <button
              type="button"
              onClick={clearStatusFilter}
              aria-pressed={activeStatusFilter === null}
              className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === null
                ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
                : "border-[#E4E7EC] bg-white text-[#101828]"
                }`}
            >
              <p className={`text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`}>
                All Leads
              </p>
              <p className={`mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`}>
                {allActiveInquiries.length}
              </p>
            </button>

            {stats.map(({ status, count }) => (
              <button
                type="button"
                key={status}
                onClick={() => toggleStatusFilter(status)}
                aria-pressed={activeStatusFilter === status}
                className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""
                  } ${status === "NEW"
                    ? "border-[#FED7AA] bg-[#FFF7ED]"
                    : status === "INPROGRESS"
                      ? "border-[#B9D3FF] bg-[#EAF2FF]"
                      : status === "CLOSED"
                        ? "border-[#D0D5DD] bg-[#F2F4F7]"
                        : "border-[#E4E7EC] bg-white"
                  }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">
                  {formatStatus(status)}
                </p>
                <p className="mt-2 text-3xl font-black text-[#06133D]">{count}</p>
              </button>
            ))}
          </div>

          {/* <div className="flex flex-wrap items-center justify-between gap-3 border border-[#E4E7EC] bg-white px-4 py-3">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#667085]">
              <ShieldCheck className="h-4 w-4 text-[#FC9C44]" />
              Signed in as <span className="font-black text-[#06133D]">{email}</span>
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#98A2B3]">
              {activeInquiries.length} leads
            </p>
          </div> */}

          {error && (
            <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </div>
          )}

          <div className="overflow-hidden border border-[#E4E7EC] bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4">
              <div className="flex items-center gap-2">
                {activeInbox === "contact" ? (
                  <Inbox className="h-5 w-5 text-[#FC9C44]" />
                ) : (
                  <ClipboardList className="h-5 w-5 text-[#FC9C44]" />
                )}
                <h2 className="text-base font-black text-[#06133D]">
                  {activeInboxTitle} submissions
                </h2>
                {activeStatusFilter && (
                  <span className="rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]">
                    {formatStatus(activeStatusFilter)}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                <p className="text-sm font-semibold text-[#667085]">
                  {firstVisibleLead}-{lastVisibleLead} of {activeInquiries.length} leads
                </p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveLeadPage(currentLeadPage - 1)}
                    disabled={currentLeadPage === 1}
                    className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous leads page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <span className="min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]">
                    Page {currentLeadPage} of {totalLeadPages}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveLeadPage(currentLeadPage + 1)}
                    disabled={currentLeadPage === totalLeadPages}
                    className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next leads page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]">
                Loading leads...
              </div>
            ) : activeInquiries.length === 0 ? (
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
                      : inboxCopy[activeInbox].empty}
                  </p>
                </div>
              </div>
            ) : activeInbox === "contact" ? (
              <div className="overflow-x-auto">
                <table className="min-w-[1040px] w-full border-collapse text-left">
                  <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                    <tr>
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">Source</th>
                      <th className="px-5 py-3">Budget</th>
                      <th className="px-5 py-3">Timeline</th>
                      <th className="px-5 py-3">Message</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E7EC]">
                    {paginatedContactInquiries.map((inquiry) => (
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
                              onChange={(event) =>
                                void handleStatusChange(
                                  inquiry.id,
                                  event.target.value as InquiryStatus,
                                )
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

            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-collapse text-left">
                  <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                    <tr>
                      <th className="px-5 py-3">Lead</th>
                      <th className="px-5 py-3">Website</th>
                      <th className="px-5 py-3">Revenue Range</th>
                      <th className="px-5 py-3">Growth Goal</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E7EC]">
                    {paginatedGrowthAuditInquiries.map((inquiry) => (
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
                            <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]">
                              <CalendarClock className="h-4 w-4" />
                              {formatDate(inquiry.createdAt)}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href={inquiry.website}
                            target="_blank"
                            rel="noreferrer"
                            className="block max-w-[240px] truncate text-sm font-semibold text-[#FC9C44] hover:underline"
                          >
                            {inquiry.website}
                          </a>
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
                              className={`w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles[inquiry.status]}`}
                            >
                              {formatStatus(inquiry.status)}
                            </span>
                            <select
                              value={inquiry.status}
                              disabled={updatingId === inquiry.id}
                              onChange={(event) =>
                                void handleGrowthAuditStatusChange(
                                  inquiry.id,
                                  event.target.value as InquiryStatus,
                                )
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
            {activeInquiries.length > 0 && (
              <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4">
                <p className="text-sm font-semibold text-[#667085]">
                  {firstVisibleLead}-{lastVisibleLead} of {activeInquiries.length} leads
                </p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveLeadPage(currentLeadPage - 1)}
                    disabled={currentLeadPage === 1}
                    className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Previous leads page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <span className="min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]">
                    Page {currentLeadPage} of {totalLeadPages}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveLeadPage(currentLeadPage + 1)}
                    disabled={currentLeadPage === totalLeadPages}
                    className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Next leads page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
