import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpenText,
  ClipboardList,
  Eye,
  EyeOff,
  Inbox,
  LockKeyhole,
  LogOut,
  Megaphone,
  RefreshCw,
  ShieldCheck,
  UserRound,
  ChevronRight,
  PlusCircle,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";

import { AdminContext } from "@/lib/admin-context.tsx";
import { getAdminSession, loginAdmin, logoutAdmin } from "@/lib/admin-auth";
import { getBlogs } from "@/lib/content/blogs";
import {
  type ContactInquiry,
  type InquiryStatus,
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
    meta: [{ title: "Admin | Hegxcorp" }, { name: "robots", content: "noindex,nofollow" }],
  }),
  component: AdminLayout,
} as never);

const adminTabSessionKey = "hegxcorp-admin-tab-session";
const blogPostCount = getBlogs().length;

function AdminLayout() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [growthAuditInquiries, setGrowthAuditInquiries] = useState<GrowthAuditInquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const [isBlogMenuHovered, setIsBlogMenuHovered] = useState(false);
  const isBlogMenuVisible = isBlogMenuOpen || isBlogMenuHovered;
  const [isFormsMenuOpen, setIsFormsMenuOpen] = useState(false);
  const [isFormsMenuHovered, setIsFormsMenuHovered] = useState(false);
  const isFormsMenuVisible = isFormsMenuOpen || isFormsMenuHovered;

  const isContactLeadsRoute = location.pathname.startsWith("/admin/contact-leads");
  const isGrowthLeadsRoute = location.pathname.startsWith("/admin/growth-leads");
  const isBlogRoute = location.pathname.startsWith("/admin/blog");
  const isAddBlogRoute = location.pathname.startsWith("/admin/add-blog");
  const isAdLeadsRoute = location.pathname.startsWith("/admin/ad-leads");

  const pageTitle = isContactLeadsRoute
    ? "Contact Form submissions"
    : isGrowthLeadsRoute
      ? "Growth Audit submissions"
      : isBlogRoute
        ? "All Blogs"
        : isAddBlogRoute
          ? "Create blog post"
          : isAdLeadsRoute
            ? "Ad lead performance"
            : "Admin";

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
        loadError instanceof Error ? loadError.message : "Lead inbox could not load right now.";
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
    async function restoreSession() {
      try {
        if (window.sessionStorage.getItem(adminTabSessionKey) !== "active") {
          await logoutAdmin();
          setIsAuthenticated(false);
          setEmail("");
          setPassword("");
          return;
        }
        const session = await getAdminSession();
        setIsAuthenticated(session.isAuthenticated);
        if (session.isAuthenticated) {
          setEmail(session.email ?? "");
          await loadInquiries();
        } else {
          window.sessionStorage.removeItem(adminTabSessionKey);
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
      window.sessionStorage.setItem(adminTabSessionKey, "active");
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
      window.sessionStorage.removeItem(adminTabSessionKey);
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
      const updatedInquiry = await updateContactInquiryStatus({ data: { id, status } });
      setInquiries((current) =>
        current.map((inquiry) => (inquiry.id === id ? updatedInquiry : inquiry)),
      );
      toast.success("Lead status updated.");
    } catch (updateError) {
      console.error("Lead status update failed:", updateError);
      setError(
        updateError instanceof Error ? updateError.message : "Lead status could not be updated.",
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
      const updatedInquiry = await updateGrowthAuditInquiryStatus({ data: { id, status } });
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

        <div className="relative mx-auto w-full max-w-[460px] -translate-y-25">
          <section className="w-full rounded-lg border border-white/10 bg-white p-7 text-center text-[#101828] shadow-2xl shadow-black/30 sm:p-10">
            <Link
              to="/"
              className="mb-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-[#667085] transition hover:text-[#fcb044]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to website
            </Link>

            <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
              <LockKeyhole className="h-6 w-6" />
            </div>
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
                <div
                  role="alert"
                  className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoggingIn}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-3 text-sm font-black text-white transition hover:bg-[#E88C35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoggingIn && <RefreshCw className="h-4 w-4 animate-spin" />}
                {isLoggingIn ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <AdminContext.Provider
      value={{
        inquiries,
        growthAuditInquiries,
        isLoading,
        error,
        updatingId,
        handleStatusChange,
        handleGrowthAuditStatusChange,
        loadInquiries,
      }}
    >
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

            <nav className="grid gap-2">
              {/* Forms Leads dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsFormsMenuHovered(true)}
                onMouseLeave={() => setIsFormsMenuHovered(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsFormsMenuOpen((current) => !current)}
                  aria-expanded={isFormsMenuVisible}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isContactLeadsRoute || isGrowthLeadsRoute
                      ? "bg-[#06133D] text-white"
                      : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <Inbox
                      className={`h-4 w-4 ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                    />
                    Forms Leads
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-white/70" : "text-[#98A2B3]"
                      } ${isFormsMenuVisible ? "rotate-180" : ""}`}
                  />
                </button>

                {isFormsMenuVisible && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none">
                    <Link
                      to="/admin/contact-leads"
                      onClick={() => {
                        setIsFormsMenuOpen(false);
                        setIsFormsMenuHovered(false);
                      }}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isContactLeadsRoute
                          ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                          : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <Inbox className="h-4 w-4" />
                        Contact Leads
                      </span>
                      <span>{inquiries.length}</span>
                    </Link>

                    <Link
                      to="/admin/growth-leads"
                      onClick={() => {
                        setIsFormsMenuOpen(false);
                        setIsFormsMenuHovered(false);
                      }}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isGrowthLeadsRoute
                          ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                          : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <ClipboardList className="h-4 w-4" />
                        Growth Leads
                      </span>
                      <span>{growthAuditInquiries.length}</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog dropdown — unchanged, just its own separate div now */}
              <div
                className="relative"
                onMouseEnter={() => setIsBlogMenuHovered(true)}
                onMouseLeave={() => setIsBlogMenuHovered(false)}
              >
                <Link
                  to="/admin/blog"
                  onClick={() => setIsBlogMenuOpen(false)}
                  aria-expanded={isBlogMenuVisible}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isBlogRoute || isAddBlogRoute
                      ? "bg-[#06133D] text-white"
                      : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <BookOpenText
                      className={`h-4 w-4 ${isBlogRoute || isAddBlogRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                    />
                    Blog
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${isBlogRoute || isAddBlogRoute ? "text-white/70" : "text-[#98A2B3]"
                      } ${isBlogMenuVisible ? "rotate-180" : ""}`}
                  />
                </Link>

                {isBlogMenuVisible && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none">
                    <Link
                      to="/admin/blog"
                      onClick={() => {
                        setIsBlogMenuOpen(false);
                        setIsBlogMenuHovered(false);
                      }}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isBlogRoute
                          ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                          : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <BookOpenText className="h-4 w-4" />
                        All Blogs
                      </span>
                      <span>{blogPostCount}</span>
                    </Link>

                    <Link
                      to="/admin/add-blog"
                      onClick={() => {
                        setIsBlogMenuOpen(false);
                        setIsBlogMenuHovered(false);
                      }}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isAddBlogRoute
                          ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                          : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                    >
                      <PlusCircle className="h-4 w-4" />
                      Add Blog
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/admin/ad-leads"
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isAdLeadsRoute
                    ? "bg-[#06133D] text-white"
                    : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                  }`}
              >
                <span className="flex items-center gap-2">
                  <Megaphone
                    className={`h-4 w-4 ${isAdLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                  />
                  Ad Leads
                </span>
              </Link>
            </nav>

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
              <h2
                className="text-2xl font-black text-[#06133D] sm:text-3xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {pageTitle}
              </h2>

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
                {(isContactLeadsRoute || isGrowthLeadsRoute) && (
                  <button
                    type="button"
                    onClick={() => void loadInquiries()}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                    Refresh
                  </button>
                )}
              </div>
            </div>
          </div>

          <Outlet />
        </div>
      </main>
    </AdminContext.Provider>
  );
}
