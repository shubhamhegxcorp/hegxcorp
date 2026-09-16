import { createFileRoute, Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
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
  Mail,
  RefreshCw,
  ShieldCheck,
  UserRound,
  UserCog,
  UserPlus,
  ChevronRight,
  PlusCircle,
  ChevronDown,
  Globe,
  KeyRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";

import { AdminContext } from "@/lib/admin-context";
import { changeAdminPasswordFn, getAdminSession, loginAdmin, logoutAdmin } from "@/lib/admin-auth";
import type { AdminAccessLevel } from "@/lib/admin-users";
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
import { listNewsletterSubscribers } from "@/lib/newsletter";
import { SUB_SERVICES_CATALOG } from "@/lib/cms-config";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessLevel, setAccessLevel] = useState<AdminAccessLevel>("FULL");
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [growthAuditInquiries, setGrowthAuditInquiries] = useState<GrowthAuditInquiry[]>([]);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const [isBlogMenuHovered, setIsBlogMenuHovered] = useState(false);
  const isBlogMenuVisible = isBlogMenuOpen || isBlogMenuHovered;
  const [isFormsMenuOpen, setIsFormsMenuOpen] = useState(false);
  const [isFormsMenuHovered, setIsFormsMenuHovered] = useState(false);
  const isFormsMenuVisible = isFormsMenuOpen || isFormsMenuHovered;

  const [isWebsiteContentMenuOpen, setIsWebsiteContentMenuOpen] = useState(false);
  const [isWebsiteContentMenuHovered, setIsWebsiteContentMenuHovered] = useState(false);
  const isWebsiteContentRoute = location.pathname.startsWith("/admin/website-content");
  const isWebsiteContentMenuVisible =
    isWebsiteContentMenuOpen || isWebsiteContentMenuHovered || isWebsiteContentRoute;

  const isContactLeadsRoute = location.pathname.startsWith("/admin/contact-leads");
  const isGrowthLeadsRoute = location.pathname.startsWith("/admin/growth-leads");
  const isSubscribersRoute = location.pathname.startsWith("/admin/subscribers");
  const isBlogRoute = location.pathname.startsWith("/admin/blog");
  const isAddBlogRoute = location.pathname.startsWith("/admin/add-blog");
  const isAdLeadsRoute = location.pathname.startsWith("/admin/ad-leads");
  const isAdminsRoute = location.pathname.startsWith("/admin/admins");
  const isFullAdmin = accessLevel === "FULL";

  const isHeaderContentRoute = location.pathname === "/admin/website-content/header";
  const isFooterContentRoute = location.pathname === "/admin/website-content/footer";
  const isHomeContentRoute = location.pathname === "/admin/website-content/home";
  const isAboutContentRoute = location.pathname === "/admin/website-content/about";
  const isServicesContentRoute = location.pathname === "/admin/website-content/services";
  const isContactContentRoute = location.pathname === "/admin/website-content/contact";

  const isSubServiceRoute = location.pathname.startsWith("/admin/website-content/service/");
  const activeSubServiceSlug = isSubServiceRoute
    ? location.pathname.split("/admin/website-content/service/")[1]?.split("/")[0]
    : null;
  const activeSubService = activeSubServiceSlug
    ? SUB_SERVICES_CATALOG.find((s) => s.slug === activeSubServiceSlug)
    : null;

  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);
  const [isServicesSubMenuHovered, setIsServicesSubMenuHovered] = useState(false);
  const servicesLeaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesMouseEnter = () => {
    if (servicesLeaveTimerRef.current) {
      clearTimeout(servicesLeaveTimerRef.current);
      servicesLeaveTimerRef.current = null;
    }
    setIsServicesSubMenuHovered(true);
  };

  const handleServicesMouseLeave = () => {
    servicesLeaveTimerRef.current = setTimeout(() => {
      setIsServicesSubMenuHovered(false);
    }, 300);
  };

  const isServicesSubMenuVisible =
    isServicesSubMenuOpen ||
    isServicesSubMenuHovered ||
    isSubServiceRoute ||
    isServicesContentRoute;
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassInput, setCurrentPassInput] = useState("");
  const [newPassInput, setNewPassInput] = useState("");
  const [confirmPassInput, setConfirmPassInput] = useState("");
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [isChangingPass, setIsChangingPass] = useState(false);

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();
    if (!currentPassInput || !newPassInput) {
      toast.error("Please enter your current and new password.");
      return;
    }
    if (newPassInput !== confirmPassInput) {
      toast.error("New passwords do not match.");
      return;
    }
    if (newPassInput.length < 6) {
      toast.error("New password must be at least 6 characters.");
      return;
    }

    setIsChangingPass(true);
    try {
      const res = await changeAdminPasswordFn({
        data: {
          currentPassword: currentPassInput,
          newPassword: newPassInput,
        },
      });
      toast.success(res.message || "Password updated successfully in database!");
      setIsPasswordModalOpen(false);
      setCurrentPassInput("");
      setNewPassInput("");
      setConfirmPassInput("");
    } catch (err: any) {
      toast.error(err?.message || "Failed to update password.");
    } finally {
      setIsChangingPass(false);
    }
  }

  const pageTitle = isAdminsRoute
    ? "Add & Manage Admins"
    : isContactLeadsRoute
      ? "Contact Form submissions"
      : isGrowthLeadsRoute
        ? "Growth Audit submissions"
        : isSubscribersRoute
          ? "Newsletter Subscribers"
          : isBlogRoute
            ? "All Blogs"
            : isAddBlogRoute
              ? "Create blog post"
              : isAdLeadsRoute
                ? "Ad lead performance"
                : activeSubService
                  ? `${activeSubService.title} CMS`
                  : isHeaderContentRoute
                    ? "Header & Nav CMS"
                    : isFooterContentRoute
                      ? "Footer Content CMS"
                      : isHomeContentRoute
                        ? "Home Content CMS"
                        : isAboutContentRoute
                          ? "About Content CMS"
                          : isServicesContentRoute
                            ? "Services Content CMS"
                            : isContactContentRoute
                              ? "Contact Content CMS"
                              : "Admin";

  async function loadInquiries() {
    setIsLoading(true);
    setError("");
    try {
      const [savedInquiries, savedGrowthAuditInquiries, savedSubscribers] = await Promise.all([
        listContactInquiries(),
        listGrowthAuditInquiries(),
        listNewsletterSubscribers().catch(() => []),
      ]);
      setInquiries(savedInquiries);
      setGrowthAuditInquiries(savedGrowthAuditInquiries);
      setSubscriberCount(savedSubscribers.length);
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
          setIsAuthenticated(false);
          setEmail("");
          setPassword("");
          return;
        }
        const session = await getAdminSession();
        setIsAuthenticated(session.isAuthenticated);
        if (session.isAuthenticated) {
          setEmail(session.email ?? "");
          setAccessLevel(session.accessLevel ?? "FULL");
          await loadInquiries();
          if (location.pathname === "/admin" || location.pathname === "/admin/") {
            void navigate({ to: "/admin/contact-leads" });
          }
          if (
            location.pathname === "/admin/website-content" ||
            location.pathname === "/admin/website-content/"
          ) {
            void navigate({ to: "/admin/website-content/services" });
          }
        } else {
          window.sessionStorage.removeItem(adminTabSessionKey);
        }
      } catch (sessionError) {
        console.warn("Admin session check:", sessionError);
        setIsAuthenticated(false);
      } finally {
        setIsCheckingSession(false);
      }
    }
    void restoreSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAuthenticated || isFullAdmin) return;

    const fullAccessRoute = isAdminsRoute || isBlogRoute || isAddBlogRoute || isWebsiteContentRoute;
    if (fullAccessRoute) {
      void navigate({ to: "/admin/contact-leads" });
      toast.error("Full access admin permission required.");
    }
  }, [
    isAuthenticated,
    isFullAdmin,
    isAdminsRoute,
    isBlogRoute,
    isAddBlogRoute,
    isWebsiteContentRoute,
    navigate,
  ]);
  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoggingIn(true);
    setError("");
    try {
      const session = await loginAdmin({ data: { email, password } });
      setIsAuthenticated(session.isAuthenticated);
      setEmail(session.email);
      setAccessLevel(session.accessLevel ?? "FULL");
      setPassword("");
      window.sessionStorage.setItem(adminTabSessionKey, "active");
      await loadInquiries();
      void navigate({ to: "/admin/contact-leads" });
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
      setSubscriberCount(0);
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
        accessLevel,
        isFullAdmin,
      }}
    >
      <main className="min-h-screen bg-[#F7F8FA] text-[#101828] lg:flex">
        <Toaster position="top-right" richColors />

        <aside className="border-b border-[#E4E7EC] bg-white lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r lg:overflow-y-auto">
          <div className="flex min-h-full flex-col p-4">
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
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                    isContactLeadsRoute || isGrowthLeadsRoute
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
                    className={`h-4 w-4 transition ${
                      isContactLeadsRoute || isGrowthLeadsRoute ? "text-white/70" : "text-[#98A2B3]"
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
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                        isContactLeadsRoute
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
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                        isGrowthLeadsRoute
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

              {isFullAdmin && (
                <>
                  {/* Blog dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsBlogMenuHovered(true)}
                    onMouseLeave={() => setIsBlogMenuHovered(false)}
                  >
                    <Link
                      to="/admin/blog"
                      onClick={() => setIsBlogMenuOpen(false)}
                      aria-expanded={isBlogMenuVisible}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                        isBlogRoute || isAddBlogRoute
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
                        className={`h-4 w-4 transition ${
                          isBlogRoute || isAddBlogRoute ? "text-white/70" : "text-[#98A2B3]"
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
                          className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                            isBlogRoute
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
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                            isAddBlogRoute
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
                </>
              )}

              <Link
                to="/admin/ad-leads"
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                  isAdLeadsRoute
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

              <Link
                to="/admin/subscribers"
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                  isSubscribersRoute
                    ? "bg-[#06133D] text-white"
                    : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Mail
                    className={`h-4 w-4 ${isSubscribersRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                  />
                  Subscribers
                </span>
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                    isSubscribersRoute ? "bg-white/20 text-white" : "bg-[#F2F4F7] text-[#344054]"
                  }`}
                >
                  {subscriberCount}
                </span>
              </Link>

              {isFullAdmin && (
                <Link
                  to="/admin/admins"
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                    isAdminsRoute
                      ? "bg-[#06133D] text-white"
                      : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <UserPlus
                      className={`h-4 w-4 ${isAdminsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                    />
                    Add Admin
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                      isAdminsRoute ? "bg-white/20 text-white" : "bg-[#FFF4E8] text-[#C96A13]"
                    }`}
                  >
                    Manage
                  </span>
                </Link>
              )}
              {/* Website Content dropdown */}
              {isFullAdmin && (
                <div
                  className="relative"
                  onMouseEnter={() => setIsWebsiteContentMenuHovered(true)}
                  onMouseLeave={() => setIsWebsiteContentMenuHovered(false)}
                >
                  <button
                    type="button"
                    onClick={() => setIsWebsiteContentMenuOpen((current) => !current)}
                    aria-expanded={isWebsiteContentMenuVisible}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${
                      isWebsiteContentRoute
                        ? "bg-[#06133D] text-white"
                        : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Globe
                        className={`h-4 w-4 ${isWebsiteContentRoute ? "text-[#FC9C44]" : "text-[#667085]"}`}
                      />
                      Website Content
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        isWebsiteContentRoute ? "text-white/70" : "text-[#98A2B3]"
                      } ${isWebsiteContentMenuVisible ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isWebsiteContentMenuVisible && (
                    <div className="absolute left-0 right-0 top-full z-20 mt-2 grid max-h-[calc(100vh-100px)] gap-2 overflow-y-auto overscroll-contain border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:max-h-none lg:overflow-visible lg:shadow-none">
                      <Link
                        to="/admin/website-content/header"
                        onClick={() => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                          location.pathname === "/admin/website-content/header"
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 shrink-0" />
                        Header & Nav
                      </Link>

                      <Link
                        to="/admin/website-content/footer"
                        onClick={() => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                          location.pathname === "/admin/website-content/footer"
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 shrink-0" />
                        Footer
                      </Link>

                      <Link
                        to="/admin/website-content/home"
                        onClick={() => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                          location.pathname === "/admin/website-content/home"
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 shrink-0" />
                        Home
                      </Link>

                      <Link
                        to="/admin/website-content/about"
                        onClick={() => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                          location.pathname === "/admin/website-content/about"
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 shrink-0" />
                        About
                      </Link>

                      {/* Services with hoverable Sub-Services */}
                      <div
                        className="relative flex flex-col"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        <div
                          className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                            isServicesContentRoute || isSubServiceRoute
                              ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                              : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                          }`}
                        >
                          <Link
                            to="/admin/website-content/services"
                            onClick={() => {
                              setIsServicesSubMenuOpen((prev) => !prev);
                            }}
                            className="flex flex-1 items-center gap-2"
                          >
                            <ChevronRight className="h-3 w-3 shrink-0" />
                            <span>Services</span>
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsServicesSubMenuOpen((prev) => !prev);
                            }}
                            className="rounded p-0.5 text-[#98A2B3] hover:text-[#06133D]"
                            title="Toggle Sub-Services"
                          >
                            <ChevronDown
                              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                isServicesSubMenuVisible ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* Sub-Services list: displays all 11 sub-services with smooth scrolling when needed */}
                        {isServicesSubMenuVisible && (
                          <div className="mt-1 flex flex-col rounded-lg border border-[#EAECF0] bg-[#F8F9FC] shadow-xs">
                            <div className="flex items-center justify-between border-b border-[#EAECF0] bg-white/70 px-2.5 py-1.5 rounded-t-lg">
                              <span className="text-[10px] font-black uppercase tracking-wider text-[#98A2B3]">
                                11 Sub-Services CMS
                              </span>
                              <span className="rounded bg-[#FFF4E8] px-1.5 py-0.5 text-[9px] font-extrabold text-[#C96A13]">
                                11 Total &bull; Scroll &darr;
                              </span>
                            </div>
                            <div
                              onWheel={(e) => {
                                // Stop wheel event from propagating to outer sidebar so cursor doesn't drift away
                                e.stopPropagation();
                              }}
                              className="subservices-scroll flex max-h-[260px] flex-col gap-1 overflow-y-auto p-1.5 pr-1.5"
                            >
                              {SUB_SERVICES_CATALOG.map((sub) => {
                                const isSubActive =
                                  location.pathname ===
                                  `/admin/website-content/service/${sub.slug}`;
                                return (
                                  <Link
                                    key={sub.slug}
                                    to="/admin/website-content/service/$slug"
                                    params={{ slug: sub.slug }}
                                    onClick={() => {
                                      setIsWebsiteContentMenuOpen(false);
                                      setIsWebsiteContentMenuHovered(false);
                                    }}
                                    className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-semibold transition ${
                                      isSubActive
                                        ? "bg-[#FC9C44] text-white font-bold shadow-xs"
                                        : "text-[#475467] hover:bg-white hover:text-[#06133D]"
                                    }`}
                                  >
                                    <span className="truncate">{sub.title}</span>
                                    <span
                                      className={`text-[9px] font-bold uppercase tracking-wider ${
                                        isSubActive ? "text-white/85" : "text-[#98A2B3]"
                                      }`}
                                    >
                                      {sub.category}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <Link
                        to="/admin/website-content/contact"
                        onClick={() => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        }}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${
                          location.pathname === "/admin/website-content/contact"
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"
                        }`}
                      >
                        <ChevronRight className="h-3 w-3 shrink-0" />
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </nav>

            <div className="mt-auto hidden border-t border-[#E4E7EC] pt-4 lg:block">
              <p className="px-2 text-xs font-semibold leading-5 text-[#667085]">
                Signed in as <span className="font-black text-[#06133D]">{email}</span>
                <span className="mt-1 block font-black text-[#FC9C44]">
                  {isFullAdmin ? "Full Access" : "Minimum Access"}
                </span>
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
                  onClick={() => setIsPasswordModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                >
                  <KeyRound className="h-4 w-4 text-[#FC9C44]" />
                  Change Password
                </button>
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

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#EAECF0] pb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#06133D]">Change Password</h3>
                  <p className="text-xs text-[#667085]">Saved directly to the database</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPasswordModalOpen(false)}
                className="rounded-lg p-1.5 text-[#98A2B3] hover:bg-[#F2F4F7] hover:text-[#344054]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="mt-5 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#344054]">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPass ? "text" : "password"}
                    required
                    value={currentPassInput}
                    onChange={(e) => setCurrentPassInput(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 pr-10 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPass((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#344054]"
                  >
                    {showCurrentPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#344054]">
                  New Password (min 6 characters)
                </label>
                <div className="relative">
                  <input
                    type={showNewPass ? "text" : "password"}
                    required
                    minLength={6}
                    value={newPassInput}
                    onChange={(e) => setNewPassInput(e.target.value)}
                    placeholder="Enter new strong password"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 pr-10 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#344054]"
                  >
                    {showNewPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-[#344054]">
                  Confirm New Password
                </label>
                <input
                  type={showNewPass ? "text" : "password"}
                  required
                  minLength={6}
                  value={confirmPassInput}
                  onChange={(e) => setConfirmPassInput(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="rounded-lg border border-[#D0D5DD] bg-white px-4 py-2.5 text-sm font-bold text-[#344054] transition hover:bg-[#F9FAFB]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isChangingPass}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#e08630] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isChangingPass ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminContext.Provider>
  );
}
