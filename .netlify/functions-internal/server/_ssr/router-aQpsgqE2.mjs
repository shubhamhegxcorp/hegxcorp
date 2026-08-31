import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { S as notFound, T as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { c as createSsrRpc } from "./createSsrRpc-ET3YHIm-.mjs";
import { c as createServerFn } from "./server-DDc6VQK7.mjs";
import { c as cleanLeadSourceData } from "./lead-source-C0KU7OxF.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { l as listPublishedBlogDrafts, g as getBlogDraft, a as listBlogDrafts, d as deleteBlogDraft, s as saveBlogDraft } from "./blog-drafts-DUyaO1gc.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.mjs";
import { i as inquiryStatuses, l as listContactInquiries, u as updateContactInquiryStatus } from "./contact-inquiries-Y3QmyFha.mjs";
import { i as index_default$2 } from "../_libs/tiptap__extension-image.mjs";
import { i as index_default$1 } from "../_libs/tiptap__extension-link.mjs";
import { i as index_default$3 } from "../_libs/tiptap__extension-placeholder.mjs";
import { u as useEditor, E as EditorContent } from "../_libs/tiptap__react.mjs";
import { i as index_default } from "../_libs/tiptap__starter-kit.mjs";
import { T as Target, L as Layers, M as MousePointerClick, G as Gauge, C as ChevronRight, R as Rocket, P as PenTool, a as CalendarDays, b as Clapperboard, U as Users, c as ChartColumn, I as Image, d as Megaphone, F as FileText, e as Presentation, f as Palette, B as Brush, g as BookOpen, h as MessageSquareText, i as Mail, A as ArrowRight, j as Globe, k as Phone, l as ChevronDown, m as CodeXml, n as LayoutTemplate, S as ShoppingCart, o as Search, p as Share2, q as PenLine, r as Sparkles, s as Check, t as TrendingUp, u as Menu, X, v as CircleCheck, w as Settings, H as Handshake, x as Cloud, y as Cross, z as GraduationCap, D as House, E as Briefcase, J as MapPin, K as Linkedin, N as Twitter, O as Instagram, Q as Facebook, Z as Zap, V as ChartLine, W as Smartphone, Y as DollarSign, _ as ShieldCheck, $ as Building2, a0 as Earth, a1 as Camera, a2 as RefreshCw, a3 as ArrowLeft, a4 as LockKeyhole, a5 as UserRound, a6 as EyeOff, a7 as Eye, a8 as Inbox, a9 as ClipboardList, aa as BookOpenText, ab as CirclePlus, ac as LogOut, ad as CalendarClock, ae as ChevronLeft, af as Plus, ag as Star, ah as Pencil, ai as Trash2, aj as Clock, ak as Calendar, al as Link2, am as Bookmark, an as Bold, ao as Italic, ap as Strikethrough, aq as Heading1, ar as Heading2, as as List, at as ListOrdered, au as Quote, av as Code, aw as Link$1, ax as Undo2, ay as Redo2 } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType, r as recordType, e as enumType, u as unionType, n as numberType, d as booleanType, f as nullType, b as anyType, c as arrayType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tiptap__core.mjs";
import "../_libs/prosemirror-transform.mjs";
import "../_libs/prosemirror-model.mjs";
import "../_libs/orderedmap.mjs";
import "../_libs/prosemirror-commands.mjs";
import "../_libs/prosemirror-state.mjs";
import "../_libs/prosemirror-schema-list.mjs";
import "../_libs/prosemirror-view.mjs";
import "../_libs/prosemirror-keymap.mjs";
import "../_libs/w3c-keyname.mjs";
import "../_libs/linkifyjs.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/prosemirror-dropcursor.mjs";
import "../_libs/prosemirror-gapcursor.mjs";
import "../_libs/prosemirror-history.mjs";
import "../_libs/rope-sequence.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiptap__extension-blockquote.mjs";
import "../_libs/tiptap__extension-bold.mjs";
import "../_libs/tiptap__extension-code.mjs";
import "../_libs/tiptap__extension-code-block.mjs";
import "../_libs/tiptap__extension-document.mjs";
import "../_libs/tiptap__extension-hard-break.mjs";
import "../_libs/tiptap__extension-heading.mjs";
import "../_libs/@tiptap/extension-horizontal-rule+[...].mjs";
import "../_libs/tiptap__extension-italic.mjs";
import "../_libs/tiptap__extension-list.mjs";
import "../_libs/tiptap__extension-paragraph.mjs";
import "../_libs/tiptap__extension-strike.mjs";
import "../_libs/tiptap__extension-text.mjs";
import "../_libs/tiptap__extension-underline.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-DIi7xOAP.css";
const gtmId = void 0;
const ga4Id = void 0;
const googleAdsId = void 0;
function createGoogleInitScript() {
  const tagIds = [ga4Id, googleAdsId].filter(Boolean);
  if (!tagIds.length) return "";
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    ${tagIds.map((id) => `gtag('config', '${id}');`).join("\n")}
  `;
}
function createMetaPixelScript() {
  return "";
}
function AnalyticsScripts() {
  const googleInitScript = createGoogleInitScript();
  const googleTagId = googleAdsId;
  const metaPixelScript = createMetaPixelScript();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    gtmId,
    googleTagId,
    googleInitScript && /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: googleInitScript } }),
    metaPixelScript
  ] });
}
const visitorEventValueSchema = unionType([stringType(), numberType(), booleanType(), nullType()]);
const visitorEventInputSchema = objectType({
  visitorId: stringType().min(1),
  eventName: stringType().min(1),
  path: stringType().min(1),
  pageTitle: stringType().optional(),
  referrer: stringType().optional(),
  params: recordType(visitorEventValueSchema).default({}),
  userAgent: stringType().optional()
});
const saveVisitorEvent = createServerFn({
  method: "POST"
}).validator(visitorEventInputSchema).handler(createSsrRpc("83f6aed03b3ca362ab36ece6f2445ae8c877362afd4e531cd65e59875a74e12f"));
const visitorIdStorageKey = "hegxcorp_visitor_id";
const leadSourceStorageKey = "hegxcorp_lead_source";
const excludedTrackingPaths = ["/admin"];
function compactParams(params) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== void 0 && value !== null && value !== ""
    )
  );
}
function createVisitorId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
}
function shouldTrackCurrentPage() {
  if (typeof window === "undefined") return false;
  return !excludedTrackingPaths.some(
    (path) => window.location.pathname === path || window.location.pathname.startsWith(`${path}/`)
  );
}
function readStoredLeadSource() {
  try {
    const savedValue = window.localStorage.getItem(leadSourceStorageKey);
    if (!savedValue) return {};
    const parsedValue = JSON.parse(savedValue);
    if (!parsedValue || typeof parsedValue !== "object") return {};
    return cleanLeadSourceData(parsedValue);
  } catch {
    return {};
  }
}
function getSearchValue(searchParams, names) {
  for (const name of names) {
    const value = searchParams.get(name)?.trim();
    if (value) return value;
  }
  return void 0;
}
function inferLeadSource(searchParams, referrer) {
  const utmSource = searchParams.get("utm_source")?.trim();
  const sourceValue = (utmSource ?? "").toLowerCase();
  const referrerValue = referrer.toLowerCase();
  if (searchParams.has("fbclid") || sourceValue.includes("meta") || sourceValue.includes("facebook") || sourceValue.includes("instagram") || referrerValue.includes("facebook.com") || referrerValue.includes("instagram.com")) {
    return "Meta Ads";
  }
  if (sourceValue) return utmSource;
  if (referrer) {
    try {
      return new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      return "Referral";
    }
  }
  return "Direct";
}
function captureLeadSource() {
  if (typeof window === "undefined") return {};
  const storedLeadSource = readStoredLeadSource();
  const searchParams = new URLSearchParams(window.location.search);
  const hasAdClick = searchParams.has("fbclid") || Array.from(searchParams.keys()).some((key) => key.toLowerCase().startsWith("utm_"));
  if (!hasAdClick && Object.keys(storedLeadSource).length > 0) {
    return storedLeadSource;
  }
  if (!hasAdClick && !document.referrer) {
    return storedLeadSource;
  }
  const nextLeadSource = cleanLeadSourceData({
    leadSource: inferLeadSource(searchParams, document.referrer),
    leadMedium: getSearchValue(searchParams, ["utm_medium"]),
    leadCampaign: getSearchValue(searchParams, ["utm_campaign", "campaign", "campaign_name"]),
    leadAdSet: getSearchValue(searchParams, ["utm_term", "adset", "adset_name"]),
    leadAd: getSearchValue(searchParams, ["utm_content", "ad", "ad_name"]),
    leadLandingPage: `${window.location.pathname}${window.location.search}`,
    leadReferrer: document.referrer
  });
  window.localStorage.setItem(leadSourceStorageKey, JSON.stringify(nextLeadSource));
  return nextLeadSource;
}
function getVisitorId() {
  if (typeof window === "undefined") return "";
  const storedVisitorId = window.localStorage.getItem(visitorIdStorageKey);
  if (storedVisitorId) return storedVisitorId;
  const visitorId = createVisitorId();
  window.localStorage.setItem(visitorIdStorageKey, visitorId);
  return visitorId;
}
function getLeadSourceData() {
  if (typeof window === "undefined") return {};
  return captureLeadSource();
}
function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !shouldTrackCurrentPage()) return;
  const visitorId = getVisitorId();
  const leadSourceData = getLeadSourceData();
  const eventParams = compactParams({
    visitor_id: visitorId,
    page_path: window.location.pathname,
    lead_source: leadSourceData.leadSource,
    lead_medium: leadSourceData.leadMedium,
    lead_campaign: leadSourceData.leadCampaign,
    lead_ad_set: leadSourceData.leadAdSet,
    lead_ad: leadSourceData.leadAd,
    lead_landing_page: leadSourceData.leadLandingPage,
    ...params
  });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams
  });
  window.gtag?.("event", eventName, eventParams);
  void saveVisitorEvent({
    data: {
      visitorId,
      eventName,
      path: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer,
      params: eventParams,
      userAgent: navigator.userAgent
    }
  }).catch((error) => {
    console.error("Visitor event tracking failed:", error);
  });
}
function normalizePhoneE164(rawPhone) {
  if (!rawPhone) return void 0;
  let digits = rawPhone.replace(/\D/g, "");
  if (!digits) return void 0;
  if (digits.length === 10) digits = `91${digits}`;
  return `+${digits}`;
}
function buildLeadUserData(userData) {
  const result = {};
  const email = userData.email?.trim().toLowerCase();
  if (email) result.email_address = email;
  const phone = normalizePhoneE164(userData.phone);
  if (phone) result.phone_number = phone;
  return Object.keys(result).length > 0 ? result : void 0;
}
function trackLead(params = {}, userData = {}) {
  const leadParams = {
    currency: "INR",
    value: 1,
    ...params
  };
  const leadUserData = buildLeadUserData(userData);
  if (typeof window !== "undefined" && leadUserData) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ user_data: leadUserData });
  }
  trackEvent("generate_lead", leadParams);
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", compactParams(leadParams));
}
function trackContactClick(method, label) {
  trackEvent("contact_click", {
    contact_method: method,
    link_label: label
  });
}
const scrollDepthBuckets = [25, 50, 75, 90, 100];
const scrollTrackDelayMs = 700;
function getScrollPercent() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (documentHeight <= 0) return 100;
  return Math.min(100, Math.round(scrollTop / documentHeight * 100));
}
function getScrollDepthBucket(scrollPercent) {
  return scrollDepthBuckets.reduce(
    (highestBucket, bucket) => scrollPercent >= bucket ? bucket : highestBucket,
    0
  );
}
function VisitorTracking() {
  const location = useLocation();
  const highestScrollDepthRef = reactExports.useRef(0);
  const scrollTimerRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    highestScrollDepthRef.current = 0;
    trackEvent("page_view", {
      page_path: location.pathname
    });
  }, [location.pathname]);
  reactExports.useEffect(() => {
    function sendHighestScrollDepth() {
      if (highestScrollDepthRef.current <= 0) return;
      trackEvent("scroll_depth", {
        scroll_percent: highestScrollDepthRef.current,
        page_path: location.pathname
      });
    }
    function handleScroll() {
      const scrollDepth = getScrollDepthBucket(getScrollPercent());
      if (scrollDepth <= highestScrollDepthRef.current) return;
      highestScrollDepthRef.current = scrollDepth;
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = window.setTimeout(sendHighestScrollDepth, scrollTrackDelayMs);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);
  return null;
}
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function OrganizationSchema({
  name = "Hegxcorp",
  url = "https://hegxcorp.com",
  logo = "https://hegxcorp.com/favicon/apple-touch-icon.png",
  description = "Data-driven digital growth agency providing SEO, paid media, high-performance web engineering, and conversion rate optimisation.",
  sameAs = [
    "https://twitter.com/hegxcorp",
    "https://linkedin.com/company/hegxcorp",
    "https://instagram.com/hegxcorp"
  ]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "Customer Support",
      availableLanguage: ["English", "Hindi"]
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
    }
  );
}
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hegxcorp",
    url: "https://hegxcorp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hegxcorp.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$E = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        name: "description",
        content: "Hegxcorp helps businesses generate more leads, sales and revenue through data-driven SEO, paid advertising, web development and conversion optimization."
      },
      { name: "author", content: "Hegxcorp" },
      { property: "og:title", content: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        property: "og:description",
        content: "Generate more leads, sales and revenue through data-driven growth marketing."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://hegxcorp.com/favicon/apple-touch-icon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hegxcorp" },
      { name: "twitter:image", content: "https://hegxcorp.com/favicon/apple-touch-icon.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon/favicon.svg"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrganizationSchema, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WebsiteSchema, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsScripts, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$E.useRouteContext();
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true
    });
    window.lenis = lenis;
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = void 0;
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisitorTracking, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true })
  ] });
}
const $$splitComponentImporter$l = () => import("./terms-of-service-B3dhYSE_.mjs");
const Route$D = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [{
      title: "Terms of Service | Hegxcorp"
    }, {
      name: "description",
      content: "Terms governing use of the Hegxcorp website and digital services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const aisearch = "/assets/How%20AI%20Search%20Changes%20Rankings-CVbelTlb.png";
const organic = "/assets/organic-CeeObELc.png";
const maximizing = "/assets/maximizing-DIDylDLW.png";
const psycho = "/assets/psycho-CqDCmmnC.png";
const core = "/assets/core--eSAZnfi.png";
const compound = "/assets/compound-DSk0rL_0.png";
const blogs = [
  {
    id: "blog-001",
    slug: "how-ai-search-reshapes-organic-traffic",
    title: "How AI Search Is Reshaping Organic Traffic",
    category: "AI Search",
    readTime: "5 min read",
    excerpt: "Generative search engines are fundamentally shifting user search behavior. Learn how to optimize your content architecture for AI-driven query platforms.",
    publishedAt: "2026-06-14T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Principal Growth Strategist",
      bio: "Akshay Jadia is the Principal Growth Strategist at Hegxcorp. With over a decade of experience engineering search architectures and campaign performance pipelines, he helps enterprise brands scale their customer acquisition channels profitably."
    },
    featuredImage: organic,
    previewImage: organic,
    seoTitle: "How AI Search Reshapes Organic Traffic | Hegxcorp Insights",
    seoDescription: "Generative search engines and LLM-powered answer bots are shifting user behavior. Learn how to construct a content architecture designed for AI-driven search models.",
    featured: true,
    content: `
      <h2>The Shift from Ten Blue Links to Generative Answers</h2>
      <p>Search engines are no longer just directories pointing users to other web destinations. With the rise of Search Generative Experience (SGE) and LLM-powered answer bots, users receive complete, multi-perspective summaries directly in the viewport. This shifts user behaviour from link-clicking to direct answer consumption.</p>
      
      <h2>Understanding Retrieval-Augmented Generation (RAG) in Search</h2>
      <p>Modern search engines crawl websites not just to rank keywords, but to ingest context for RAG systems. To rank inside AI summaries, your content must satisfy complex semantic queries rather than simple keyword matches. This requires a transition from keyword stuffing to robust concept mapping.</p>
      
      <h2>Structuring Content for AI Ingestion</h2>
      <p>To ensure your organic content is selected as a source by AI models, follow these three core parameters:</p>
      <ul>
        <li><strong>Factual Precision:</strong> State answers clearly at the top of headers. AI engines prefer concise sentences that are easy to parse into vector search databases.</li>
        <li><strong>Semantic Schemas:</strong> Use structured data (JSON-LD) to clearly delineate product features, FAQs, and definitions.</li>
        <li><strong>Expertise Signals (E-E-A-T):</strong> Link your arguments to real-world datasets, case studies, and proprietary research that search engines cannot easily hallucinate.</li>
      </ul>

      <h2>The Future of Organic CTR</h2>
      <p>While informational queries will see a reduction in click-through rates, high-intent transactional queries will become more valuable. Users visiting your site from generative summaries are pre-qualified and significantly closer to conversion. The websites that adapt their architecture to support LLM references will dominate search in the next decade.</p>
    `,
    blocks: [
      { type: "heading", level: 2, text: "The Shift from Ten Blue Links to Generative Answers" },
      {
        type: "paragraph",
        text: "Search engines are no longer just directories pointing users to other web destinations. With the rise of Search Generative Experience (SGE) and LLM-powered answer bots, users receive complete, multi-perspective summaries directly in the viewport. This shifts user behaviour from link-clicking to direct answer consumption."
      },
      {
        type: "pull-quote",
        text: "The transition to generative answers shifts user behaviour from link-clicking to direct, in-viewport consumption."
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Retrieval-Augmented Generation (RAG) in Search"
      },
      {
        type: "paragraph",
        text: "Modern search engines crawl websites not just to rank keywords, but to ingest context for RAG systems. To rank inside AI summaries, your content must satisfy complex semantic queries rather than simple keyword matches. This requires a transition from keyword stuffing to robust concept mapping."
      },
      {
        type: "callout",
        variant: "info",
        title: "Technical Context: RAG Pipelines",
        text: "Retrieval-Augmented Generation processes match queries to multi-dimensional vector databases using cosine similarity, serving factual content sections to LLMs dynamically."
      },
      { type: "heading", level: 2, text: "Structuring Content for AI Ingestion" },
      {
        type: "paragraph",
        text: "To ensure your organic content is selected as a source by AI models, follow these three core parameters:"
      },
      {
        type: "list",
        items: [
          "**Factual Precision:** State answers clearly at the top of headers. AI engines prefer concise sentences that are easy to parse into vector search databases.",
          "**Semantic Schemas:** Use structured data (JSON-LD) to clearly delineate product features, FAQs, and definitions.",
          "**Expertise Signals (E-E-A-T):** Link your arguments to real-world datasets, case studies, and proprietary research that search engines cannot easily hallucinate."
        ]
      },
      {
        type: "statistics",
        value: "147%",
        label: "Conversion Lift for Semantic Content",
        description: "Transactional conversion rates saw massive increases when landing layouts optimized for direct answer retrieval."
      },
      { type: "heading", level: 2, text: "The Future of Organic CTR" },
      {
        type: "paragraph",
        text: "While informational queries will see a reduction in click-through rates, high-intent transactional queries will become more valuable. Users visiting your site from generative summaries are pre-qualified and significantly closer to conversion. The websites that adapt their architecture to support LLM references will dominate search in the next decade."
      }
    ]
  },
  {
    id: "blog-002",
    slug: "how-ai-search-changes-rankings",
    title: "How AI Search Changes Rankings",
    category: "SEO",
    readTime: "6 min read",
    excerpt: "A technical breakdown of semantic search index shifts and how search algorithms evaluate topical authority inside generative answers.",
    publishedAt: "2026-06-10T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Technical Director",
      bio: "Akshay Jadia is the Technical Director at Hegxcorp. He leads full-stack engineering initiatives and is an expert in search engine indexing mechanics, dense retrieval pipelines, and semantic schema architectures."
    },
    featuredImage: aisearch,
    previewImage: aisearch,
    seoTitle: "How AI Search Changes SEO Rankings & Indexing | Hegxcorp",
    seoDescription: "A technical breakdown of dense vector search databases and how topical authority algorithms evaluate content collections inside modern search systems.",
    featured: false,
    content: `
      <h2>Semantic Overlays vs Vector Databases</h2>
      <p>The transition from lexical matching to dense vector search has changed how content is catalogued. Instead of matching exact string patterns, search engines map questions and answers into high-dimensional vector spaces, calculating relevance using cosine similarity. This means pages with completely different wording can rank if their semantic intent matches.</p>

      <h2>The Death of Page-Level Keyword Optimization</h2>
      <p>Traditional on-page SEO targeting isolated keywords is obsolete. Today's search engines group pages into topic clusters. If a cluster does not comprehensively cover a subject, individual articles will fail to rank. Topical coverage is now a heavier ranking weight than direct backlink counts.</p>

      <h2>Core Actions for Topic Authority</h2>
      <p>To survive the transition, teams should focus on building comprehensive guides that cover broad parent subjects, linked structurally to highly focused child articles. This signals deep topical coverage to vector indexes.</p>
    `
  },
  {
    id: "blog-003",
    slug: "maximizing-performance-max-campaigns",
    title: "Maximizing Performance Max Campaigns",
    category: "Paid Media",
    readTime: "7 min read",
    excerpt: "How to structure asset groups, feed signals, and first-party customer audiences to scale Google Ads budgets profitably.",
    publishedAt: "2026-06-06T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Paid Media Lead",
      bio: "Akshay Jadia is the Paid Media Lead at Hegxcorp. He oversees multi-million dollar performance marketing portfolios, engineering custom audience models, feeds, and automation scripts across Google and Meta ad platforms."
    },
    featuredImage: maximizing,
    previewImage: maximizing,
    seoTitle: "Optimizing Google Ads Performance Max Campaigns | Hegxcorp",
    seoDescription: "A tactical guide on structuring asset groups, audience signals, first-party data, and negatives to scale Performance Max ad budgets profitably.",
    featured: false,
    content: `
      <h2>The Black Box of PMax</h2>
      <p>Google's Performance Max is a highly automated campaign type that spans Search, YouTube, Display, Discover, and Maps. However, without strict constraints, PMax can waste budget on poor-quality display placements or brand bidding. Controlling PMax requires feeding it high-value data signals.</p>

      <h2>Asset Group Isolation & Audience Signals</h2>
      <p>Do not mix products or messaging within a single asset group. Instead, isolate asset groups by product category and provide specific search themes and customer match lists. This gives Google's bidding algorithm a baseline of what a high-converting user looks like.</p>

      <h2>Negative Keyword Exclusions</h2>
      <p>Ensure brand keywords are excluded from your PMax campaigns to prevent it from stealing credit from organic search. Set up account-level negative keyword lists to target strictly non-brand queries and maximize net incremental revenue.</p>
    `
  },
  {
    id: "blog-004",
    slug: "psychology-of-high-converting-landing-pages",
    title: "The Psychology of High-Converting Landing Pages",
    category: "Conversion",
    readTime: "4 min read",
    excerpt: "A deep dive into cognitive load reduction, structural hierarchy, and decision-making frameworks that drive lower acquisition costs.",
    publishedAt: "2026-05-28T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "CRO Lead",
      bio: "Akshay Jadia is the Conversion Rate Optimisation Lead at Hegxcorp. She specializes in cognitive design frameworks, heuristic evaluations, and interactive A/B experimentation that drives down customer acquisition costs."
    },
    featuredImage: psycho,
    previewImage: psycho,
    seoTitle: "High-Converting Landing Page UX & Psychology | Hegxcorp",
    seoDescription: "Analyze the psychological frameworks of page layouts. Discover how to reduce cognitive load and use visual trust cues to maximize landing page conversions.",
    featured: false,
    content: `
      <h2>Friction and Cognitive Load</h2>
      <p>Conversion optimization is less about adding elements and more about removing friction. Every input field, secondary navigation link, or visual distraction increases cognitive load, driving down overall conversion rate. A user should understand your offer within three seconds of landing.</p>

      <h2>The Principle of Choice Architecture</h2>
      <p>Limit the number of choices a user must make. If your page offers both an ebook download and a direct strategy call, they will often choose neither. Establish a singular, clear primary call to action (CTA) and keep secondary actions minimal and low contrast.</p>

      <h2>Social Proof Integration</h2>
      <p>Position trust metrics, customer logos, and testimonials directly next to conversion action points. When social proof is placed near CTA inputs, it alleviates immediate buyer anxiety and improves form completion rates.</p>
    `
  },
  {
    id: "blog-005",
    slug: "core-web-vitals-and-organic-growth",
    title: "Core Web Vitals & Organic Growth",
    category: "Web Development",
    readTime: "5 min read",
    excerpt: "How sub-second rendering times, low cumulative layout shifts, and responsive interactions directly boost organic search positioning.",
    publishedAt: "2026-05-20T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Technical Web Engineer",
      bio: "Akshay Jadia is a Technical Web Engineer at Hegxcorp. He designs headless CMS integrations, static site rendering architectures, and performance-tuned front-ends that maintain sub-second LCP scores."
    },
    featuredImage: core,
    previewImage: core,
    seoTitle: "Core Web Vitals Impact on Organic Search Rankings | Hegxcorp",
    seoDescription: "Examine how Cumulative Layout Shift, Largest Contentful Paint, and page responsiveness affect search engine index prioritization and organic search listings.",
    featured: false,
    content: `
      <h2>Speed as a Ranking Tie-Breaker</h2>
      <p>While content relevance is paramount, Google uses page experience metrics—specifically Core Web Vitals—as a critical ranking signal. If two pages cover a query with similar authority, the faster page with a stable visual layout will win the top slot.</p>

      <h2>Optimizing for LCP and CLS</h2>
      <p>Largest Contentful Paint (LCP) should occur within 2.5 seconds of page load. Ensure images above the fold are preloaded and that layout elements have pre-allocated aspect ratios to eliminate Cumulative Layout Shift (CLS).</p>

      <h2>Server-Side Rendering (SSR) Benefits</h2>
      <p>Using SSR frameworks like TanStack Start or Next.js ensures search engines receive pre-rendered HTML immediately, boosting crawl budget efficiency and search indexation speed.</p>
    `
  },
  {
    id: "blog-006",
    slug: "engineering-compounding-growth-systems",
    title: "Engineering Compounding Growth Systems",
    category: "Growth Systems",
    readTime: "8 min read",
    excerpt: "Why isolated search campaigns fail, and how to build interconnected organic loops, paid acquisition, and conversion funnels.",
    publishedAt: "2026-05-12T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Principal Growth Strategist",
      bio: "Akshay Jadia is the Principal Growth Strategist at Hegxcorp. With over a decade of experience engineering search architectures and campaign performance pipelines, he helps enterprise brands scale their customer acquisition channels profitably."
    },
    featuredImage: compound,
    previewImage: compound,
    seoTitle: "Interconnected Growth Marketing Architecture | Hegxcorp",
    seoDescription: "Break down internal marketing silos. Design a compounding growth strategy linking organic SEO loops, PPC campaigns, and conversion optimization.",
    featured: false,
    content: `
      <h2>The Trap of Marketing Silos</h2>
      <p>Many businesses separate their SEO, PPC, and product development teams. This structure creates massive inefficiencies: PPC teams target high-cost terms that the SEO team could easily capture organically, and web developers build pages that destroy search authority.</p>

      <h2>Unified Audience Data Sharing</h2>
      <p>A true growth engine shares search query data across channels. High-performing search terms from paid campaigns should immediately seed the content pipeline for the SEO team. Organic search landers should be used to build retargeting audiences for paid social campaigns.</p>

      <h2>The Compounding Conversion Loop</h2>
      <p>By optimizing conversion funnels, you raise the value of every single visit. This increases your maximum bid capacity on PPC channels, enabling you to acquire competitive ad placements that competitors cannot afford, fueling further traffic and customer insights.</p>
    `
  }
];
function getBlogs() {
  return blogs;
}
function draftToBlogCard(draft) {
  return {
    id: `draft-${draft.id}`,
    slug: draft.slug,
    title: draft.title,
    excerpt: draft.excerpt,
    content: draft.content,
    category: draft.category[0] ?? "Uncategorized",
    readTime: draft.readTime,
    featuredImage: draft.featuredImage ?? "",
    previewImage: draft.featuredImage ?? "",
    author: { name: draft.authorname ?? "Hegxcorp Team", role: "Editor" },
    publishedAt: draft.updatedAt,
    seoTitle: draft.seotitle?.trim() ? draft.seotitle : draft.title,
    seoDescription: draft.seoDescription,
    featured: draft.featured
  };
}
async function getPublishedBlogs() {
  const drafts = await listPublishedBlogDrafts();
  const published = drafts.map(draftToBlogCard);
  return [...published, ...blogs];
}
async function getPublishedBlogBySlug(slug) {
  const all = await getPublishedBlogs();
  return all.find((b) => b.slug === slug) ?? null;
}
const caseStudies = [
  {
    id: "cs-001",
    slug: "tarkashastra",
    client: "Tarkashastra",
    industry: "Education",
    services: ["SEO", "PPC", "Web Development"],
    metricValue: "2×",
    metricLabel: "Business Growth",
    summary: "Optimize keyword architecture and landing page conversion paths to double lead volume and drive massive revenue growth.",
    featuredImage: "/placeholders/tarkashastra-preview.svg",
    proofLabel: "SEO & PPC",
    proofDuration: "12 Months",
    gallery: ["/placeholders/tarkashastra-preview.svg", "/placeholders/gpen-preview.svg"],
    seoTitle: "Tarkashastra Case Study: 2x Lead Volume & PPC Optimization | Hegxcorp",
    seoDescription: "Explore how Hegxcorp re-engineered Tarkashastra's organic search visibility and PPC ad campaigns to double business conversions and lower acquisition costs.",
    featured: true,
    challenge: {
      title: "Rising Ad Costs & Page 3 Search Rankings",
      description: "Tarkashastra, an elite coaching institute, struggled with low visibility for high-intent keywords, high cost-per-lead (CPL) on paid search, and a lack of systematic funnel conversions. Ed-tech aggregators with heavy funding dominated the space, driving PPC bids out of reach and resulting in over-inflated cost-per-clicks with a leaky funnel that dropped 80% of landing page visitors before verification."
    },
    solution: {
      title: "Intent-Matched Funnels & Schema Optimization",
      description: "We re-architected the technical SEO foundation using structured schemas and modular topic clusters. Simultaneously, we engineered lightning-fast landing pages with optimized copy, matching each PPC campaign directly to specific user intent, significantly reducing bounce rates and raising PPC ad quality scores."
    },
    approach: [
      {
        phase: "1",
        title: "Audit & Scraping",
        description: "Mapped keyword intent gaps, scraped competitor ad bids, and isolated rendering-blocking scripts in the legacy student portal."
      },
      {
        phase: "2",
        title: "Cluster Rebuild",
        description: "Constructed structured markup schemas for coaching categories and designed separate transactional PPC landing pages."
      },
      {
        phase: "3",
        title: "Funnels & Launch",
        description: "Deployed the optimized React client, integrated first-party user verification hooks, and launched granular search query campaigns."
      },
      {
        phase: "4",
        title: "Bid Scaling",
        description: "Analyzed scroll heatmaps, pruned loose negative match types, and automated Google Ads smart bidding parameters."
      }
    ],
    results: {
      metrics: [
        { value: "2×", label: "Business Growth" },
        { value: "908", label: "Direct Phone Leads" },
        { value: "150", label: "Form Submissions" },
        { value: "-48%", label: "Reduction in CPL" }
      ],
      description: "Over a 12-month period, organic query visibility climbed to page 1 for core coaching search terms. Combined with intent-matched conversion landing pages, overall business volume doubled while paid acquisition efficiency was dramatically optimized."
    },
    testimonial: {
      quote: "Hegxcorp completely transformed our digital funnel. They didn't just give us traffic; they engineered high-quality inquiries that translated into actual enrollment growth.",
      author: "Amit Bose",
      role: "Founder, Tarkashastra"
    }
  },
  {
    id: "cs-002",
    slug: "g-pen",
    client: "G Pen",
    industry: "Education",
    services: ["SEO", "PPC", "Conversion Optimization"],
    metricValue: "+961%",
    metricLabel: "ROI Growth",
    summary: "Scaling return on ad spend and organic e-commerce revenue through semantic search restructuring and smart campaign bidding.",
    featuredImage: "/placeholders/gpen-preview.svg",
    proofLabel: "Google Ads",
    proofDuration: "12 Months",
    gallery: ["/placeholders/gpen-preview.svg", "/placeholders/rollink-preview.svg"],
    seoTitle: "G Pen Case Study: +961% ROI & Google Ads Scaling | Hegxcorp",
    seoDescription: "How Hegxcorp restructured e-commerce search semantic architecture and optimized Smart bidding groups to scale ROAS to 3.4x for G Pen.",
    featured: true,
    challenge: {
      title: "Ad Account Saturation & Weak SEO Visibility",
      description: "G Pen needed to transition away from expensive broad campaigns while addressing technical bottlenecks in their Shopify site structure that restricted organic crawling and category-page optimization."
    },
    solution: {
      title: "Dynamic Search Ads & Technical E-Commerce SEO",
      description: "We deployed highly segmented PPC campaigns with micro-budget allocation and custom audiences. In tandem, we executed a complete collection-page semantic markup overhaul and optimized index speeds to drive consistent rank gains."
    },
    approach: [
      {
        phase: "1",
        title: "Crawl Diagnostic",
        description: "Identified nested Shopify index blocks and duplicate pagination loops hurting search engine bot crawls."
      },
      {
        phase: "2",
        title: "Semantic Restructure",
        description: "Implemented nested Product schema strings and organized product listing structures around core search intents."
      },
      {
        phase: "3",
        title: "Audience Feed Sync",
        description: "Wired first-party customer checkout variables straight into Google Ads conversion tracking triggers."
      },
      {
        phase: "4",
        title: "Budget Optimization",
        description: "Moved legacy broad match budgets into high-intent long-tail keywords and localized PMax campaigns."
      }
    ],
    results: {
      metrics: [
        { value: "+961%", label: "ROI Growth" },
        { value: "3.4x", label: "E-commerce ROAS" },
        { value: "+180%", label: "Category Rank Increase" },
        { value: "54k+", label: "Organic Transactions" }
      ],
      description: "Paid media scaling achieved compound returns, generating a massive boost in profitable search conversions, with organic traffic taking over as the primary source."
    },
    testimonial: {
      quote: "The outcome-first strategy Hegxcorp brought to our brand was unparalleled. Our numbers speak for themselves.",
      author: "Sarah Vance",
      role: "VP Growth, G Pen"
    }
  },
  {
    id: "cs-003",
    slug: "rollink",
    client: "Rollink",
    industry: "E-Commerce",
    services: ["SEO", "Content Architecture"],
    metricValue: "730K",
    metricLabel: "Organic Visitors",
    summary: "Scaling search traffic for a leading travel brand through programmatic content architecture and core web vitals optimization.",
    featuredImage: "/placeholders/rollink-preview.svg",
    proofLabel: "Organic Search",
    proofDuration: "18 Months",
    gallery: ["/placeholders/rollink-preview.svg", "/placeholders/learning-tree-preview.svg"],
    seoTitle: "Rollink Case Study: 730k Visitors via Organic SEO | Hegxcorp",
    seoDescription: "Discover how Hegxcorp developed programmatic content clusters and resolved core web vitals speed blocks to scale organic visitors for Rollink.",
    featured: false,
    challenge: {
      title: "Lack of Search Presence for Non-Branded Queries",
      description: "Rollink dominated branded searches but had almost zero footprint for broader category terms, like travel suitcases, lightweight luggage, and folding bags."
    },
    solution: {
      title: "Programmatic Content Clusters & Speed Overhaul",
      description: "We mapped out travel intent guides and programmatic search collections. We optimized image load weights and resolved rendering blocking scripts to clear all Web Vitals performance benchmarks."
    },
    approach: [
      {
        phase: "1",
        title: "Gap Mapping",
        description: "Uncovered non-branded high-volume category queries that competitors were overlooking."
      },
      {
        phase: "2",
        title: "Cluster Engineering",
        description: "Programmed dynamic guide structures referencing travel definitions, product specifications, and comparisons."
      },
      {
        phase: "3",
        title: "WebVitals Audit",
        description: "Reduced average Largest Contentful Paint (LCP) from 4.8s to 1.9s by refactoring heavy javascript scripts."
      },
      {
        phase: "4",
        title: "Keyword Ingestion",
        description: "Monitored initial indexing and established deep internal links to pass equity to high-intent transactional collections."
      }
    ],
    results: {
      metrics: [
        { value: "730K", label: "Organic Visitors" },
        { value: "+420%", label: "Search Impressions" },
        { value: "12+", label: "Top 3 Ranking Keywords" },
        { value: "24%", label: "Cart Conversion Rate Lift" }
      ],
      description: "Non-branded organic search traffic rapidly became a significant revenue driver, with page load optimization generating immediate drop-off reductions at checkout."
    }
  },
  {
    id: "cs-004",
    slug: "learning-tree",
    client: "Learning Tree",
    industry: "Education",
    services: ["Google Ads", "PPC Campaigns"],
    metricValue: "1341%",
    metricLabel: "Revenue Growth",
    summary: "Rebuilding enterprise Google Ads campaigns to focus on bottom-funnel conversion queries, resulting in massive scaling.",
    featuredImage: "/placeholders/learning-tree-preview.svg",
    proofLabel: "Google PPC",
    proofDuration: "6 Months",
    gallery: ["/placeholders/learning-tree-preview.svg", "/placeholders/orra-preview.svg"],
    seoTitle: "Learning Tree Case Study: +1341% Revenue via Search PPC | Hegxcorp",
    seoDescription: "See how Hegxcorp restructured Google Ads query bidding models to slash CAC by 52% and drive enrollments for Learning Tree.",
    featured: false,
    challenge: {
      title: "High Customer Acquisition Cost (CAC) on Broad Search",
      description: "Learning Tree was overspending on top-of-funnel informational queries that failed to capture actual high-intent leads, leading to high cost-per-conversion and budget waste."
    },
    solution: {
      title: "Bottom-Funnel Bid Restructure & Search Query Pruning",
      description: "We completely reorganized their search account. We excluded broad generic terms and focused exclusively on high-conversion intent keywords while using value-based bidding settings."
    },
    approach: [
      {
        phase: "1",
        title: "Query Sorting",
        description: "Isolated keyword lists to identify queries driving actual enrollments vs informational clicks."
      },
      {
        phase: "2",
        title: "Negative Pruning",
        description: "Created comprehensive account-level lists to drop generic search trends wasting client ad budget."
      },
      {
        phase: "3",
        title: "Value Setup",
        description: "Wired dynamic conversion values back to the bidding algorithm based on downstream classroom pricing."
      },
      {
        phase: "4",
        title: "Bid Scaling",
        description: "Moved to Maximize Conversions with a strict target CPA threshold, safely expanding ad exposure."
      }
    ],
    results: {
      metrics: [
        { value: "1341%", label: "Revenue Growth" },
        { value: "4.8x", label: "Google Ads ROAS" },
        { value: "-52%", label: "Acquisition Cost (CAC)" },
        { value: "2.8k+", label: "Qualified Enrollments" }
      ],
      description: "The restructuring lowered acquisition cost significantly, allowing campaigns to scale profitably with clean, bottom-funnel tracking."
    }
  },
  {
    id: "cs-005",
    slug: "orra",
    client: "Orra",
    industry: "Luxury Consumer Goods",
    services: ["Digital Strategy", "Audience Reach"],
    metricValue: "1M+",
    metricLabel: "Audience Reach",
    summary: "Establishing local search authority and luxury brand positioning for Orra’s premium collections across multiple retail outlets.",
    featuredImage: "/placeholders/orra-preview.svg",
    proofLabel: "Local Strategy",
    proofDuration: "9 Months",
    gallery: ["/placeholders/orra-preview.svg", "/placeholders/tarkashastra-preview.svg"],
    seoTitle: "Orra Case Study: Luxury Brand Local Search Dominance | Hegxcorp",
    seoDescription: "How Hegxcorp designed a unified local SEO listing architecture to boost physical store foot traffic by 3.2x across Orra luxury outlets.",
    featured: false,
    challenge: {
      title: "Fragmented Local Store Footprint Online",
      description: "Orra faced a fragmented search landscape where local branches competed against each other for organic jewelry searches rather than combining into a single dominant brand authority."
    },
    solution: {
      title: "Integrated Local Search Architecture & Premium Brand Storytelling",
      description: "We created an integrated localized SEO map structure with dynamic landing pages for each retail location, optimizing for high-intent nearby buyer searches."
    },
    approach: [
      {
        phase: "1",
        title: "Map Sync",
        description: "Analyzed address, description, and contact info records across 40 physical locations to resolve local list duplicates."
      },
      {
        phase: "2",
        title: "Site Architecture",
        description: "Built distinct, localized directory pages linked together under a centralized domain authority."
      },
      {
        phase: "3",
        title: "Reviews Loop",
        description: "Wired an automated request system to prompt post-purchase customers to rate their location online."
      },
      {
        phase: "4",
        title: "Local Lift",
        description: "Tracked call directions and nearby navigation queries to monitor store foot traffic increases."
      }
    ],
    results: {
      metrics: [
        { value: "1M+", label: "Audience Reach" },
        { value: "+210%", label: "Store Visit Inquiries" },
        { value: "18+", label: "Local Keywords Ranked #1" },
        { value: "3.2x", label: "Offline Store Traffic Growth" }
      ],
      description: "The localized map architecture combined with premium storytelling created localized search dominance for Orra branches across target Indian cities."
    }
  }
];
function getCaseStudies() {
  return caseStudies;
}
function getCaseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}
const siteUrl = "https://hegxcorp.com";
const pages = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.8" },
  { path: "/service/web-dev", changefreq: "weekly", priority: "0.8" },
  { path: "/service/web-app", changefreq: "weekly", priority: "0.8" },
  { path: "/service/wordpress", changefreq: "weekly", priority: "0.8" },
  { path: "/service/e-comm", changefreq: "weekly", priority: "0.8" },
  { path: "/service/seo", changefreq: "weekly", priority: "0.8" },
  { path: "/service/ppc", changefreq: "weekly", priority: "0.8" },
  { path: "/service/social-med", changefreq: "weekly", priority: "0.8" },
  { path: "/service/content-marketing", changefreq: "weekly", priority: "0.8" },
  { path: "/service/ui-ux-design", changefreq: "weekly", priority: "0.8" },
  { path: "/service/branding", changefreq: "weekly", priority: "0.8" },
  { path: "/service/graphic-design", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/free-growth-audit", changefreq: "monthly", priority: "0.9" },
  { path: "/case-studies", changefreq: "weekly", priority: "0.6" },
  { path: "/industries", changefreq: "monthly", priority: "0.5" },
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/blog", changefreq: "weekly", priority: "0.6" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.3" }
];
function renderUrl({
  path,
  changefreq,
  priority,
  lastmod
}) {
  return `  <url>
    <loc>${siteUrl}${path}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}
const Route$C = createFileRoute("/sitemap.xml")({
  loader: async () => {
    let allBlogs = [];
    try {
      allBlogs = await getPublishedBlogs();
    } catch (error) {
      console.error("Failed to load published blogs for sitemap:", error);
    }
    const blogPages = allBlogs.map((blog) => ({
      path: `/blog/${blog.slug}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: blog.publishedAt ? blog.publishedAt.slice(0, 10) : void 0
    }));
    const caseStudyPages = getCaseStudies().map((study) => ({
      path: `/case-studies/${study.slug}`,
      changefreq: "monthly",
      priority: "0.6"
    }));
    const urls = [...pages, ...blogPages, ...caseStudyPages].map(renderUrl).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
});
const $$splitComponentImporter$k = () => import("./services-BJkKpb6B.mjs");
const Route$B = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services — Full-Stack Digital Growth & Engineering | Hegxcorp"
    }, {
      name: "description",
      content: "Explore Hegxcorp services: SEO growth architectures, high-performance web development, PPC campaigns, conversion rate optimisation, UI/UX design, and brand identity systems."
    }, {
      property: "og:title",
      content: "Our Services — Full-Stack Digital Growth & Engineering | Hegxcorp"
    }, {
      property: "og:description",
      content: "Explore Hegxcorp services: SEO growth architectures, high-performance web development, PPC campaigns, conversion rate optimisation, UI/UX design, and brand identity systems."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/services"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Our Services — Full-Stack Digital Growth & Engineering | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Explore Hegxcorp services: SEO growth architectures, high-performance web development, PPC campaigns, conversion rate optimisation, UI/UX design, and brand identity systems."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./privacy-policy-8xAH4Ps8.mjs");
const Route$A = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | Hegxcorp"
    }, {
      name: "description",
      content: "Learn how Hegxcorp collects, uses, protects, and manages personal information."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const logoAsset = "/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const getWebsiteSection = createServerFn({
  method: "POST"
}).validator(objectType({
  key: stringType()
})).handler(createSsrRpc("096eae861181842f6b9c58fdf329b679903d62e276f435e2d50c4de2148abd8f"));
const saveWebsiteSection = createServerFn({
  method: "POST"
}).validator(objectType({
  key: stringType(),
  value: anyType()
})).handler(createSsrRpc("bd287953a9b9b285a2e93c5ade22438047a6fd33d89b4d08447dc39f567442b9"));
createServerFn({
  method: "POST"
}).handler(createSsrRpc("5426afc6adc66c89bf460964cdef01750ec1b7318a5ba8b72615e21c932f3d44"));
function useWebsiteSection(key, defaultValue) {
  const fallbackVal = DEFAULT_CMS_SECTIONS[key];
  const [data, setData] = reactExports.useState(fallbackVal);
  const [loading, setLoading] = reactExports.useState(true);
  const fetchSection = async () => {
    try {
      const result = await getWebsiteSection({ data: { key } });
      if (result) {
        setData(result);
      }
    } catch (err) {
      console.error(`Error loading CMS section "${key}":`, err);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    void fetchSection();
  }, [key]);
  return { data, loading, refresh: fetchSection };
}
const serviceColumns = [
  {
    heading: "Development",
    items: [
      {
        icon: CodeXml,
        title: "Web Development",
        desc: "Scalable, modern websites",
        href: "/service/web-dev"
      },
      {
        icon: Layers,
        title: "Custom Web Applications",
        desc: "Tailored platforms",
        href: "/service/web-app"
      },
      {
        icon: LayoutTemplate,
        title: "WordPress Development",
        desc: "Premium WP builds",
        href: "/service/wordpress"
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Development",
        desc: "Stores that convert",
        href: "/service/e-comm"
      }
    ]
  },
  {
    heading: "Marketing",
    items: [
      { icon: Search, title: "SEO Services", desc: "Rank where it matters", href: "/service/seo" },
      {
        icon: MousePointerClick,
        title: "PPC",
        desc: "Performance ad campaigns",
        href: "/service/ppc"
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        desc: "Engage & grow",
        href: "/service/social-med"
      },
      {
        icon: PenLine,
        title: "Content Marketing",
        desc: "Stories that scale",
        href: "/service/content-marketing"
      }
    ]
  },
  {
    heading: "Design",
    items: [
      {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Human-centered design",
        href: "/service/ui-ux-design"
      },
      {
        icon: Sparkles,
        title: "Branding",
        desc: "Identities with intent",
        href: "/service/branding"
      },
      {
        icon: Image,
        title: "Graphic Design",
        desc: "Visual storytelling",
        href: "/service/graphic-design"
      }
    ]
  }
];
const countries = [
  { code: "in", flag: "IN", name: "India", region: "hegxcorp.in", domain: "https://hegxcorp.in" },
  {
    code: "us",
    flag: "US",
    name: "United States",
    region: "hegxcorp.us",
    domain: "https://hegxcorp.us"
  },
  {
    code: "uk",
    flag: "UK",
    name: "United Kingdom",
    region: "hegxcorp.uk",
    domain: "https://hegxcorp.uk"
  },
  { code: "ae", flag: "AE", name: "Dubai", region: "hegxcorp.ae", domain: "https://hegxcorp.ae" }
];
const navLinks = [
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];
function StatCounter({
  target,
  suffix = "",
  duration = 1200,
  trigger
}) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    let startTimestamp = null;
    let animationFrameId;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, target, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    count,
    suffix
  ] });
}
function Header() {
  const { data: contactDetails } = useWebsiteSection("contact.details");
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [megaOpen, setMegaOpen] = reactExports.useState(false);
  const [countryOpen, setCountryOpen] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [activeCountry, setActiveCountry] = reactExports.useState("in");
  const [mobileServicesOpen, setMobileServicesOpen] = reactExports.useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = reactExports.useState(false);
  const [hasMegaOpened, setHasMegaOpened] = reactExports.useState(false);
  const triggerRef = reactExports.useRef(null);
  const MEGA_MENU_WIDTH = 1180;
  const [megaMenuPos, setMegaMenuPos] = reactExports.useState({ top: 0, left: 0, width: MEGA_MENU_WIDTH });
  reactExports.useEffect(() => {
    if (!megaOpen || !triggerRef.current) return;
    const updatePosition = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const padding = 16;
      const width = Math.min(MEGA_MENU_WIDTH, window.innerWidth - padding * 2);
      const centerX = rect.left + rect.width / 2;
      let left = centerX - width / 2;
      left = Math.max(padding, Math.min(left, window.innerWidth - padding - width));
      setMegaMenuPos({ top: rect.bottom, left, width });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [megaOpen]);
  reactExports.useEffect(() => {
    if (megaOpen) {
      setHasMegaOpened(true);
    }
  }, [megaOpen]);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const active = countries.find((c) => c.code === activeCountry);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-[#1D2742] text-white/80 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-8 max-w-[1400px] items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-white/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium tracking-wide text-white/90", children: "Global Presence:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "India • USA • Australia • Europe" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "24/7 Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `tel:${(contactDetails?.phone || "+918369207836").replace(/\s+/g, "")}`,
            onClick: () => trackContactClick("phone", "header_utility_phone"),
            className: "flex items-center gap-1.5 text-white/90 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
              contactDetails?.phone || "+91 836 920 7836"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "sticky top-0 z-50 w-full bg-white border-b border-[#EAEAEA]/60 transition-all duration-300",
          scrolled && "shadow-[0_4px_24px_-12px_rgba(17,24,39,0.12)]"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-300",
              scrolled ? "h-[65px]" : "h-[90px]"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", "aria-label": "HEXGCORP home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logoAsset,
                  alt: "HEXGCORP",
                  className: cn("w-auto transition-all duration-300", scrolled ? "h-11" : "h-[80px]")
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    ref: triggerRef,
                    className: "relative",
                    onMouseEnter: () => setMegaOpen(true),
                    onMouseLeave: () => setMegaOpen(false),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: "/services",
                          className: "group flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]",
                          "aria-expanded": megaOpen,
                          "aria-haspopup": "true",
                          children: [
                            "Services",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                className: cn(
                                  "h-3.5 w-3.5 transition-transform duration-300",
                                  megaOpen && "rotate-180"
                                )
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "fixed pt-3",
                            "transition-opacity duration-200",
                            megaOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                          ),
                          style: {
                            top: megaMenuPos.top,
                            left: megaMenuPos.left,
                            width: megaMenuPos.width
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#EAEAEA]/60 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.18)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-6", children: [
                            serviceColumns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]", children: col.heading }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: col.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Link,
                                {
                                  to: item.href,
                                  className: "group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-300 hover:bg-[#FFF4E8] hover:-translate-y-[3px]",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-[#EAEAEA] text-foreground/70 group-hover:text-[#FC9C44] group-hover:border-[#FC9C44]/25 transition-all duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium text-foreground", children: item.title }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground", children: item.desc })
                                    ] })
                                  ]
                                }
                              ) }, item.title)) })
                            ] }, col.heading)),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              motion.div,
                              {
                                initial: { opacity: 0, y: 10 },
                                animate: megaOpen ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.4 },
                                className: "rounded-xl bg-[#FC9C44] p-6 text-white flex flex-col justify-between",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-black tracking-tight text-white leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatCounter, { target: 300, suffix: "+", trigger: hasMegaOpened }) }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.1em] text-white/60", children: "Projects Delivered" })
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-base font-bold leading-snug", children: "Building Modern Digital Experiences" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/75 leading-relaxed font-normal", children: "We help businesses build scalable websites, digital products, and growth-focused solutions that drive measurable results." })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    motion.div,
                                    {
                                      whileHover: { scale: 1.03 },
                                      transition: { duration: 0.2 },
                                      className: "w-full mt-6",
                                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                        Link,
                                        {
                                          to: "/contact",
                                          className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-xs xl:text-sm font-semibold text-foreground hover:bg-white/90 transition-colors whitespace-nowrap",
                                          children: [
                                            "Schedule a Strategy Call",
                                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
                                          ]
                                        }
                                      )
                                    }
                                  )
                                ]
                              }
                            )
                          ] }) })
                        }
                      )
                    ]
                  }
                ),
                navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: l.to,
                    className: "group relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]",
                    children: [
                      l.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" })
                    ]
                  },
                  l.to
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative hidden lg:block",
                    onMouseEnter: () => setCountryOpen(true),
                    onMouseLeave: () => setCountryOpen(false),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          className: "flex items-center gap-2 rounded-full border border-[#EAEAEA]/80 px-3.5 py-2 text-sm font-medium text-foreground/80 hover:bg-[#FFF4E8] hover:text-foreground transition-colors",
                          "aria-haspopup": "true",
                          "aria-expanded": countryOpen,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: active.flag }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xl:inline", children: active.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ChevronDown,
                              {
                                className: cn("h-3.5 w-3.5 transition-transform", countryOpen && "rotate-180")
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "absolute right-0 top-full pt-2 w-72 transition-all duration-200",
                            countryOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                          ),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#EAEAEA]/60 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.2)]", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: "Select your region" }),
                            countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "a",
                              {
                                href: c.domain,
                                onClick: () => {
                                  setActiveCountry(c.code);
                                  setCountryOpen(false);
                                },
                                className: cn(
                                  "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#FFF4E8]",
                                  activeCountry === c.code && "bg-[#FFF4E8]"
                                ),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl leading-none", children: c.flag }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium text-foreground", children: c.name }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground", children: c.region })
                                  ] }),
                                  activeCountry === c.code && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#FC9C44]" })
                                ]
                              },
                              c.code
                            ))
                          ] })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/contact",
                    onClick: () => trackEvent("cta_click", {
                      cta_name: "connect_with_us",
                      cta_location: "header",
                      destination: "/contact"
                    }),
                    className: "hidden md:inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(252,156,68,0.35)] hover:bg-[#E88C35] hover:shadow-[0_12px_24px_-8px_rgba(252,156,68,0.45)] hover:-translate-y-0.5 transition-all duration-300",
                    children: [
                      "Connect With Us",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/free-growth-audit",
                    onClick: () => trackEvent("cta_click", {
                      cta_name: "free_growth_audit",
                      cta_location: "mobile_header",
                      destination: "/free-growth-audit"
                    }),
                    className: "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FC9C44] text-white shadow-[0_4px_12px_-4px_rgba(252,156,68,0.5)]",
                    "aria-label": "Get Free Growth Audit",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors",
                    onClick: () => setMobileOpen(true),
                    "aria-label": "Open menu",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        "aria-hidden": !mobileOpen,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50", onClick: () => setMobileOpen(false) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "aside",
            {
              className: cn(
                "absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300",
                mobileOpen ? "translate-x-0" : "translate-x-full"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-60 items-center justify-between border-b border-border px-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset, alt: "HEXGCORP", className: "h-20 w-auto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted",
                      onClick: () => setMobileOpen(false),
                      "aria-label": "Close menu",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 overflow-y-auto px-3 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      className: "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      onClick: () => setMobileServicesOpen((v) => !v),
                      children: [
                        "Services",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")
                          }
                        )
                      ]
                    }
                  ),
                  mobileServicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 ml-2 mt-1 space-y-3 border-l border-[#EAEAEA] pl-3", children: serviceColumns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]", children: col.heading }),
                    col.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: item.href,
                        onClick: () => setMobileOpen(false),
                        className: "flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-[#FFF4E8]",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4 text-muted-foreground" }),
                          item.title
                        ]
                      },
                      item.title
                    ))
                  ] }, col.heading)) }),
                  navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: l.to,
                      onClick: () => setMobileOpen(false),
                      className: "block rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      children: l.label
                    },
                    l.to
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      className: "mt-2 flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      onClick: () => setMobileCountriesOpen((v) => !v),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4" }),
                          "Countries"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: cn("h-4 w-4 transition-transform", mobileCountriesOpen && "rotate-180")
                          }
                        )
                      ]
                    }
                  ),
                  mobileCountriesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2 mt-1 space-y-1 border-l border-[#EAEAEA] pl-3", children: countries.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: c.domain,
                      onClick: () => {
                        setActiveCountry(c.code);
                        setMobileOpen(false);
                      },
                      className: cn(
                        "flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-[#FFF4E8]",
                        activeCountry === c.code && "bg-[#FFF4E8] font-medium"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: c.flag }),
                        c.name,
                        activeCountry === c.code && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-[#FC9C44]" })
                      ]
                    },
                    c.code
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#EAEAEA] p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/free-growth-audit",
                      onClick: () => setMobileOpen(false),
                      className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FC9C44] px-5 py-3 hover:bg-[#E88C35] text-sm font-semibold text-white",
                      children: [
                        "Get Free Growth Audit",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `tel:${(contactDetails?.phone || "+918369207836").replace(/\s+/g, "")}`,
                      onClick: () => trackContactClick("phone", "mobile_menu_support_phone"),
                      className: "flex items-center justify-center gap-2 text-sm text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                        " Support: ",
                        contactDetails?.phone || "+91 836 920 7836"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
const footerLinks = {
  Services: [
    { label: "Search Engine Optimisation", to: "/service/seo" },
    { label: "Paid Advertising (PPC)", to: "/service/ppc" },
    { label: "Web Development", to: "/service/web-dev" },
    { label: "Social Media Marketing", to: "/service/social-med" },
    { label: "Branding & Design", to: "/service/branding" },
    { label: "Conversion Optimisation", to: "/service/ui-ux-design" }
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Blog & Insights", to: "/blog" },
    { label: "Contact", to: "/contact" }
  ],
  Regions: [
    { label: "India (hegxcorp.in)", href: "https://hegxcorp.in" },
    { label: "United States", href: "https://hegxcorp.us" },
    { label: "United Kingdom", href: "https://hegxcorp.uk" },
    { label: "Dubai & UAE", href: "https://hegxcorp.ae" }
  ]
};
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/hegxcorp", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/hegxcorp", label: "X (Twitter)" },
  { icon: Instagram, href: "https://instagram.com/hegxcorp", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/hegxcorp", label: "Facebook" }
  // { icon: Youtube, href: "https://youtube.com/@hegxcorp", label: "YouTube" },
];
function Footer() {
  const { data: footerData } = useWebsiteSection("home.footer");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[#1D2742] relative overflow-hidden grain-overlay", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none select-none absolute inset-0 overflow-hidden",
        style: { zIndex: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%) translateY(38%)",
              whiteSpace: "nowrap",
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: "clamp(100px, 16vw, 280px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.04)",
              userSelect: "none",
              /* Fade edges so it blends cleanly into the navy */
              maskImage: "linear-gradient(to right, transparent 0%, white 18%, white 82%, transparent 100%), linear-gradient(to top, white 0%, white 50%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 18%, white 82%, transparent 100%), linear-gradient(to top, white 0%, white 50%, transparent 100%)",
              WebkitMaskComposite: "source-in"
            },
            children: "HEGXCORP"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none select-none absolute inset-0 overflow-hidden",
        style: { zIndex: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              position: "absolute",
              left: "50%",
              top: "0",
              transform: "translateX(-50%)",
              width: "60vw",
              maxWidth: "800px",
              height: "100%",
              background: "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(252,156,68,0.04) 0%, transparent 100%)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/[0.06]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mx-auto max-w-[1280px] px-6 lg:px-10",
          style: {
            paddingTop: "clamp(32px, 3.5vw, 48px)",
            paddingBottom: "clamp(32px, 3.5vw, 48px)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-10 gap-y-10 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "self-start", "aria-label": "Hegxcorp home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logoAsset,
                  alt: "Hegxcorp",
                  className: "h-8 w-auto brightness-0 invert",
                  style: { objectFit: "contain", objectPosition: "left" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-white/50 text-[13px] leading-[1.7] max-w-[250px]",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "A data-driven growth consultancy helping businesses generate more leads, sales, and revenue through SEO, paid advertising, and conversion optimisation."
                }
              ),
              footerData && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "space-y-2 mt-1 text-[13px] text-white/55",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    footerData.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-[#FC9C44] shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `tel:${footerData.phone.replace(/\s+/g, "")}`,
                          className: "hover:text-white transition-colors",
                          children: footerData.phone
                        }
                      )
                    ] }),
                    footerData.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-[#FC9C44] shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `mailto:${footerData.email}`,
                          className: "hover:text-white transition-colors",
                          children: footerData.email
                        }
                      )
                    ] }),
                    footerData.address && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-[#FC9C44] shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: footerData.address })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/free-growth-audit",
                  className: "self-start inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35] transition-colors duration-200",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    "Get Free Growth Audit ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: socialLinks.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: s.href,
                  "aria-label": s.label,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.09] text-white/35 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-3.5 w-3.5" })
                },
                s.label
              )) })
            ] }),
            Object.entries(footerLinks).map(([group, links]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "text-[10px] font-bold uppercase tracking-[0.18em] text-white/35",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: group
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-px bg-white/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "to" in link ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  className: "group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-200 ease-out group-hover:translate-x-[3px]", children: link.label })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform duration-200 ease-out group-hover:translate-x-[3px]", children: link.label })
                }
              ) }, link.label)) })
            ] }, group))
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/[0.07]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 pt-4 pb-28 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-[11px] text-white/30 tracking-wide",
            style: { fontFamily: "'Inter', sans-serif" },
            children: footerData?.copyright || `© ${(/* @__PURE__ */ new Date()).getFullYear()} Hegxcorp. All rights reserved.`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: [
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Terms of Service", to: "/terms-of-service" },
          { label: "Cookie Policy", to: "/cookie-policy" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            className: "text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 tracking-wide",
            style: { fontFamily: "'Inter', sans-serif" },
            children: link.label
          },
          link.to
        )) })
      ] }) })
    ] })
  ] });
}
function SectionHeading({
  tagline,
  heading,
  description,
  align = "left",
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center max-w-[720px] mx-auto" : "max-w-[640px]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]",
            style: { fontFamily: "'Inter', sans-serif" },
            children: tagline
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-bold text-[#232323] leading-tight",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 48px)"
            },
            children: heading
          }
        ),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-[#6B7280] leading-relaxed mt-1",
            style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.1vw, 17px)"
            },
            children: description
          }
        )
      ]
    }
  );
}
const Route$z = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Target Verticals & Industries | Hegxcorp" },
      {
        name: "description",
        content: "Learn about the core industries Hegxcorp partners with to deploy high-scale SEO and digital transformation. Industry deep-dives coming soon."
      }
    ]
  }),
  component: IndustriesComingSoon
});
function IndustriesComingSoon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[640px] mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }),
          "Target Industries"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            align: "center",
            tagline: "Coming Soon",
            heading: "Industry vertical solutions & case benchmarks",
            description: "We are structuring our digital growth playbooks tailored for E-commerce, B2B Enterprise SaaS, Healthcare, FinTech, and Professional Services sectors."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/free-growth-audit",
              className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-all",
              children: [
                "Request Growth Audit ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#232323] border border-[#EAEAEA] bg-white hover:bg-[#FAFAF8] transition-all",
              children: "Contact Our Strategists"
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$i = () => import("./free-growth-audit-C26ymctS.mjs");
const Route$y = createFileRoute("/free-growth-audit")({
  head: () => ({
    meta: [{
      title: "Free Digital Growth & SEO Audit | Hegxcorp"
    }, {
      name: "description",
      content: "Request a comprehensive growth and conversion audit from Hegxcorp. We analyze your SEO ranking potential, paid advertising efficiency, and website conversion funnels."
    }, {
      property: "og:title",
      content: "Free Digital Growth & SEO Audit | Hegxcorp"
    }, {
      property: "og:description",
      content: "Request a comprehensive growth and conversion audit from Hegxcorp. We analyze your SEO ranking potential, paid advertising efficiency, and website conversion funnels."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/free-growth-audit"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Free Digital Growth & SEO Audit | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Request a comprehensive growth and conversion audit from Hegxcorp. We analyze your SEO ranking potential, paid advertising efficiency, and website conversion funnels."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/free-growth-audit"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
objectType({
  name: stringType().min(2, {
    message: "Name must be at least 2 characters"
  }),
  email: stringType().email({
    message: "Please enter a valid business email address"
  }),
  website: stringType().min(4, {
    message: "Please enter your company website domain (e.g. brand.com)"
  }),
  revenueRange: stringType().min(1, {
    message: "Please select your annual revenue range"
  }),
  goal: stringType().min(1, {
    message: "Please select your primary growth target"
  })
});
const $$splitComponentImporter$h = () => import("./cookie-policy-NFJqqhxh.mjs");
const Route$x = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [{
      title: "Cookie Policy | Hegxcorp"
    }, {
      name: "description",
      content: "Learn how cookies and similar technologies may be used on the Hegxcorp website."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contact-qfL8WkvK.mjs");
const Route$w = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Our Growth Consulting Team | Hegxcorp"
    }, {
      name: "description",
      content: "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture."
    }, {
      property: "og:title",
      content: "Contact Our Growth Consulting Team | Hegxcorp"
    }, {
      property: "og:description",
      content: "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/contact"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Contact Our Growth Consulting Team | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Get in touch with Hegxcorp's digital transformation consultants. Schedule a strategic consultation to discuss SEO opportunities, paid advertising, and web architecture."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const fullNamePattern = /^[A-Za-z\s]+$/;
const phoneNumberPattern = /^\d+$/;
objectType({
  name: stringType().trim().min(1, {
    message: "Please enter your name"
  }).min(2, {
    message: "Name must be at least 2 characters"
  }).regex(fullNamePattern, {
    message: "Please enter alphabets only"
  }),
  email: stringType().email({
    message: "Please enter a valid email address"
  }),
  phone: stringType().trim().min(1, {
    message: "Please enter your number"
  }).regex(phoneNumberPattern, {
    message: "Please enter digits only"
  }),
  services: arrayType(stringType()).min(1, {
    message: "Please select at least one service"
  }),
  budget: stringType().min(1, {
    message: "Please select a budget"
  }),
  timeline: stringType().min(1, {
    message: "Please select a timeline"
  }),
  message: stringType().min(10, {
    message: "Message must be at least 10 characters long"
  })
});
const Route$v = createFileRoute("/case-studies")({
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
});
const Route$u = createFileRoute("/blog")({
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
});
const AdminContext = reactExports.createContext(null);
function useAdminContext() {
  const context = reactExports.useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used inside the /admin layout route.");
  }
  return context;
}
const adminLoginSchema = objectType({
  email: stringType().trim().email("Enter a valid email address").max(200),
  password: stringType().min(1, "Enter your password").max(200)
});
const getAdminSession = createServerFn({
  method: "GET"
}).handler(createSsrRpc("5657035a0ee6556f722dba234784a0e3c2460389c82b35f94de2f5440bef5f56"));
const loginAdmin = createServerFn({
  method: "POST"
}).validator(adminLoginSchema).handler(createSsrRpc("b30f690c7c4db6ee5c0d491cd43f1c8eb07322a9bac537eba1f13ddbb4f26745"));
const logoutAdmin = createServerFn({
  method: "POST"
}).handler(createSsrRpc("714b8bdd6e41622ea8c921b2022f0a7efd279b2c04f4ab839072930e553f0a5c"));
const leadSourceDataSchema = objectType({
  leadSource: stringType().optional(),
  leadMedium: stringType().optional(),
  leadCampaign: stringType().optional(),
  leadAdSet: stringType().optional(),
  leadAd: stringType().optional(),
  leadLandingPage: stringType().optional(),
  leadReferrer: stringType().optional()
});
const growthAuditInquiryInputSchema = objectType({
  name: stringType().min(2, {
    message: "Please enter your full name"
  }),
  email: stringType().email({
    message: "Please enter a valid business email"
  }),
  website: stringType().min(4, {
    message: "Please enter your website"
  }),
  visitorId: stringType().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  revenueRange: stringType().min(1, {
    message: "Please select your annual revenue range"
  }),
  goal: stringType().min(1, {
    message: "Please select your primary growth target"
  })
});
const submitGrowthAuditInquiry = createServerFn({
  method: "POST"
}).validator(growthAuditInquiryInputSchema).handler(createSsrRpc("0ddfc30b57f5fdc4738ee0434dff6b90e395d964e15a36b156b349ee83673a67"));
const listGrowthAuditInquiries = createServerFn({
  method: "POST"
}).handler(createSsrRpc("0a749c920f3ff82cb75ca65d248a3d0005331af64fb4b47bd0b4248ba2986b34"));
const updateGrowthAuditInquiryStatus = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1),
  status: enumType(inquiryStatuses)
})).handler(createSsrRpc("52de78cfc2ef0447325f4709a52d1693596e35786b45728b298c52f041d7fb95"));
const Route$t = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin | Hegxcorp" }, { name: "robots", content: "noindex,nofollow" }]
  }),
  component: AdminLayout
});
const adminTabSessionKey = "hegxcorp-admin-tab-session";
const blogPostCount = getBlogs().length;
function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [isCheckingSession, setIsCheckingSession] = reactExports.useState(true);
  const [isLoggingIn, setIsLoggingIn] = reactExports.useState(false);
  const [inquiries, setInquiries] = reactExports.useState([]);
  const [growthAuditInquiries, setGrowthAuditInquiries] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [updatingId, setUpdatingId] = reactExports.useState("");
  const [isBlogMenuOpen, setIsBlogMenuOpen] = reactExports.useState(false);
  const [isBlogMenuHovered, setIsBlogMenuHovered] = reactExports.useState(false);
  const isBlogMenuVisible = isBlogMenuOpen || isBlogMenuHovered;
  const [isFormsMenuOpen, setIsFormsMenuOpen] = reactExports.useState(false);
  const [isFormsMenuHovered, setIsFormsMenuHovered] = reactExports.useState(false);
  const isFormsMenuVisible = isFormsMenuOpen || isFormsMenuHovered;
  const [isWebsiteContentMenuOpen, setIsWebsiteContentMenuOpen] = reactExports.useState(false);
  const [isWebsiteContentMenuHovered, setIsWebsiteContentMenuHovered] = reactExports.useState(false);
  const isWebsiteContentMenuVisible = isWebsiteContentMenuOpen || isWebsiteContentMenuHovered;
  const isContactLeadsRoute = location.pathname.startsWith("/admin/contact-leads");
  const isGrowthLeadsRoute = location.pathname.startsWith("/admin/growth-leads");
  const isBlogRoute = location.pathname.startsWith("/admin/blog");
  const isAddBlogRoute = location.pathname.startsWith("/admin/add-blog");
  const isAdLeadsRoute = location.pathname.startsWith("/admin/ad-leads");
  const isWebsiteContentRoute = location.pathname.startsWith("/admin/website-content");
  const isHomeContentRoute = location.pathname === "/admin/website-content/home";
  const isAboutContentRoute = location.pathname === "/admin/website-content/about";
  const isServicesContentRoute = location.pathname === "/admin/website-content/services";
  const isContactContentRoute = location.pathname === "/admin/website-content/contact";
  const pageTitle = isContactLeadsRoute ? "Contact Form submissions" : isGrowthLeadsRoute ? "Growth Audit submissions" : isBlogRoute ? "All Blogs" : isAddBlogRoute ? "Create blog post" : isAdLeadsRoute ? "Ad lead performance" : isHomeContentRoute ? "Home Content CMS" : isAboutContentRoute ? "About Content CMS" : isServicesContentRoute ? "Services Content CMS" : isContactContentRoute ? "Contact Content CMS" : "Admin";
  async function loadInquiries() {
    setIsLoading(true);
    setError("");
    try {
      const [savedInquiries, savedGrowthAuditInquiries] = await Promise.all([
        listContactInquiries(),
        listGrowthAuditInquiries()
      ]);
      setInquiries(savedInquiries);
      setGrowthAuditInquiries(savedGrowthAuditInquiries);
    } catch (loadError) {
      console.error("Lead inbox failed:", loadError);
      const message = loadError instanceof Error ? loadError.message : "Lead inbox could not load right now.";
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
  reactExports.useEffect(() => {
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
          if (location.pathname === "/admin" || location.pathname === "/admin/") {
            void navigate({ to: "/admin/contact-leads" });
          }
        } else {
          window.sessionStorage.removeItem(adminTabSessionKey);
        }
      } catch (sessionError) {
        console.error("Admin session check failed:", sessionError);
        setError(
          sessionError instanceof Error ? sessionError.message : "Admin login could not be checked."
        );
      } finally {
        setIsCheckingSession(false);
      }
    }
    void restoreSession();
  }, []);
  async function handleLogin(event) {
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
      void navigate({ to: "/admin/contact-leads" });
    } catch (loginError) {
      console.error("Admin login failed:", loginError);
      setError(
        loginError instanceof Error ? loginError.message : "Login failed. Check your credentials and try again."
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
  async function handleStatusChange(id, status) {
    setUpdatingId(id);
    setError("");
    try {
      const updatedInquiry = await updateContactInquiryStatus({ data: { id, status } });
      setInquiries(
        (current) => current.map((inquiry) => inquiry.id === id ? updatedInquiry : inquiry)
      );
      toast.success("Lead status updated.");
    } catch (updateError) {
      console.error("Lead status update failed:", updateError);
      setError(
        updateError instanceof Error ? updateError.message : "Lead status could not be updated."
      );
      toast.error("Lead status could not be updated.");
    } finally {
      setUpdatingId("");
    }
  }
  async function handleGrowthAuditStatusChange(id, status) {
    setUpdatingId(id);
    setError("");
    try {
      const updatedInquiry = await updateGrowthAuditInquiryStatus({ data: { id, status } });
      setGrowthAuditInquiries(
        (current) => current.map((inquiry) => inquiry.id === id ? updatedInquiry : inquiry)
      );
      toast.success("Growth audit status updated.");
    } catch (updateError) {
      console.error("Growth audit status update failed:", updateError);
      setError(
        updateError instanceof Error ? updateError.message : "Growth audit status could not be updated."
      );
      toast.error("Growth audit status could not be updated.");
    } finally {
      setUpdatingId("");
    }
  }
  if (isCheckingSession) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "grid min-h-screen place-items-center bg-[#F7F8FA] text-[#06133D]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center gap-4 text-sm font-bold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-7 w-7 animate-spin text-[#FC9C44]" }),
      "Checking secure session..."
    ] }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative grid min-h-screen place-items-center overflow-hidden bg-[#050B24] px-6 py-12 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#FC9C44]/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-48 right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-[#2359B8]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-[460px] -translate-y-25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full rounded-lg border border-white/10 bg-white p-7 text-center text-[#101828] shadow-2xl shadow-black/30 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "mb-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-[#667085] transition hover:text-[#fcb044]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back to website"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "mt-6 text-3xl font-black text-[#06133D]",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: "Admin login"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-[#667085]", children: "Sign in with your Hegxcorp administrator credentials." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "mt-8 grid gap-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#475467]", children: "Email address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: email,
                  onChange: (event) => setEmail(event.target.value),
                  type: "email",
                  autoComplete: "username",
                  required: true,
                  autoFocus: true,
                  placeholder: "Enter your email address",
                  className: "w-full rounded-lg border border-[#D0D5DD] py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#475467]", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: password,
                  onChange: (event) => setPassword(event.target.value),
                  type: showPassword ? "text" : "password",
                  autoComplete: "current-password",
                  required: true,
                  placeholder: "Enter your password",
                  className: "w-full rounded-lg border border-[#D0D5DD] py-3 pl-10 pr-11 text-sm outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword((current) => !current),
                  "aria-label": showPassword ? "Hide password" : "Show password",
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] transition hover:text-[#FC9C44]",
                  children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              role: "alert",
              className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700",
              children: error
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: isLoggingIn,
              className: "mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-3 text-sm font-black text-white transition hover:bg-[#E88C35] disabled:cursor-not-allowed disabled:opacity-60",
              children: [
                isLoggingIn && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
                isLoggingIn ? "Signing in..." : "Sign in"
              ]
            }
          )
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AdminContext.Provider,
    {
      value: {
        inquiries,
        growthAuditInquiries,
        isLoading,
        error,
        updatingId,
        handleStatusChange,
        handleGrowthAuditStatusChange,
        loadInquiries
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-[#F7F8FA] text-[#101828] lg:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "border-b border-[#E4E7EC] bg-white lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#FC9C44]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
              "Hegxcorp Admin"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "mt-2 text-2xl font-black text-[#06133D]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: "Lead Inbox"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setIsFormsMenuHovered(true),
                onMouseLeave: () => setIsFormsMenuHovered(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsFormsMenuOpen((current) => !current),
                      "aria-expanded": isFormsMenuVisible,
                      className: `flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isContactLeadsRoute || isGrowthLeadsRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Inbox,
                            {
                              className: `h-4 w-4 ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                            }
                          ),
                          "Forms Leads"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: `h-4 w-4 transition ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-white/70" : "text-[#98A2B3]"} ${isFormsMenuVisible ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  isFormsMenuVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admin/contact-leads",
                        onClick: () => {
                          setIsFormsMenuOpen(false);
                          setIsFormsMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isContactLeadsRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-4 w-4" }),
                            "Contact Leads"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: inquiries.length })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admin/growth-leads",
                        onClick: () => {
                          setIsFormsMenuOpen(false);
                          setIsFormsMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isGrowthLeadsRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-4 w-4" }),
                            "Growth Leads"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: growthAuditInquiries.length })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setIsBlogMenuHovered(true),
                onMouseLeave: () => setIsBlogMenuHovered(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/admin/blog",
                      onClick: () => setIsBlogMenuOpen(false),
                      "aria-expanded": isBlogMenuVisible,
                      className: `flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isBlogRoute || isAddBlogRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            BookOpenText,
                            {
                              className: `h-4 w-4 ${isBlogRoute || isAddBlogRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                            }
                          ),
                          "Blog"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: `h-4 w-4 transition ${isBlogRoute || isAddBlogRoute ? "text-white/70" : "text-[#98A2B3]"} ${isBlogMenuVisible ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  isBlogMenuVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admin/blog",
                        onClick: () => {
                          setIsBlogMenuOpen(false);
                          setIsBlogMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isBlogRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpenText, { className: "h-4 w-4" }),
                            "All Blogs"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: blogPostCount })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/admin/add-blog",
                        onClick: () => {
                          setIsBlogMenuOpen(false);
                          setIsBlogMenuHovered(false);
                        },
                        className: `flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isAddBlogRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "h-4 w-4" }),
                          "Add Blog"
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admin/ad-leads",
                className: `flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isAdLeadsRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Megaphone,
                    {
                      className: `h-4 w-4 ${isAdLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                    }
                  ),
                  "Ad Leads"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setIsWebsiteContentMenuHovered(true),
                onMouseLeave: () => setIsWebsiteContentMenuHovered(false),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsWebsiteContentMenuOpen((current) => !current),
                      "aria-expanded": isWebsiteContentMenuVisible,
                      className: `flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isWebsiteContentRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Globe,
                            {
                              className: `h-4 w-4 ${isWebsiteContentRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                            }
                          ),
                          "Website Content"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: `h-4 w-4 transition ${isWebsiteContentRoute ? "text-white/70" : "text-[#98A2B3]"} ${isWebsiteContentMenuVisible ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  isWebsiteContentMenuVisible && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none", children: [
                    { to: "/admin/website-content/home", label: "Home" },
                    { to: "/admin/website-content/about", label: "About" },
                    { to: "/admin/website-content/services", label: "Services" },
                    { to: "/admin/website-content/contact", label: "Contact" }
                  ].map((item) => {
                    const isActive = location.pathname === item.to;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: item.to,
                        onClick: () => {
                          setIsWebsiteContentMenuOpen(false);
                          setIsWebsiteContentMenuHovered(false);
                        },
                        className: `flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isActive ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3 shrink-0" }),
                          item.label
                        ]
                      },
                      item.to
                    );
                  }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto hidden border-t border-[#E4E7EC] pt-4 lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "px-2 text-xs font-semibold leading-5 text-[#667085]", children: [
            "Signed in as ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-[#06133D]", children: email })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#E4E7EC] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-2xl font-black text-[#06133D] sm:text-3xl",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: pageTitle
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/",
                  className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                    "Website"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => void handleLogout(),
                  className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-red-300 hover:text-red-600",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
                    "Sign out"
                  ]
                }
              ),
              (isContactLeadsRoute || isGrowthLeadsRoute) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => void loadInquiries(),
                  disabled: isLoading,
                  className: "inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-4 w-4 ${isLoading ? "animate-spin" : ""}` }),
                    "Refresh"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
        ] })
      ] })
    }
  );
}
const $$splitComponentImporter$f = () => import("./about-CyY4hiB1.mjs");
const Route$s = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Hegxcorp — Digital Transformation & Growth Engineering"
    }, {
      name: "description",
      content: "Meet Hegxcorp, a digital growth consultancy helping ambitious companies scale through data-driven SEO, paid media, high-performance web systems, and brand strategy."
    }, {
      property: "og:title",
      content: "About Hegxcorp — Digital Transformation & Growth Engineering"
    }, {
      property: "og:description",
      content: "Meet Hegxcorp, a digital growth consultancy helping ambitious companies scale through data-driven SEO, paid media, high-performance web systems, and brand strategy."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/about"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "About Hegxcorp — Digital Transformation & Growth Engineering"
    }, {
      name: "twitter:description",
      content: "Meet Hegxcorp, a digital growth consultancy helping ambitious companies scale through data-driven SEO, paid media, high-performance web systems, and brand strategy."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./index-CYIJSMDV.mjs");
const Route$r = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hegxcorp — Data-Driven Growth Marketing Agency"
    }, {
      name: "description",
      content: "Hegxcorp helps businesses generate more leads, sales and revenue through data-driven SEO, paid advertising, web development and conversion optimisation. Serving India, USA, UK and Dubai."
    }, {
      property: "og:title",
      content: "Hegxcorp — Data-Driven Growth Marketing Agency"
    }, {
      property: "og:description",
      content: "Generate more leads, sales and revenue through data-driven growth marketing. SEO, Paid Ads, Web Development and CRO."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Hegxcorp — Data-Driven Growth Marketing Agency"
    }, {
      name: "twitter:description",
      content: "Generate more leads, sales and revenue through data-driven growth marketing. SEO, Paid Ads, Web Development and CRO."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "keywords",
      content: "digital marketing agency, SEO agency India, PPC agency, web development, growth marketing, Hegxcorp"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./case-studies.index-D-CR-B3F.mjs");
const Route$q = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [{
      title: "Client Success & Growth Case Studies | Hegxcorp"
    }, {
      name: "description",
      content: "Discover how Hegxcorp helps leading B2B and E-commerce brands scale organic revenue, optimize PPC campaigns, and achieve measurable growth."
    }, {
      property: "og:title",
      content: "Client Success & Growth Case Studies | Hegxcorp"
    }, {
      property: "og:description",
      content: "Discover how Hegxcorp helps leading B2B and E-commerce brands scale organic revenue, optimize PPC campaigns, and achieve measurable growth."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/case-studies"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Client Success & Growth Case Studies | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Discover how Hegxcorp helps leading B2B and E-commerce brands scale organic revenue, optimize PPC campaigns, and achieve measurable growth."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/case-studies"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./blog.index-CJm9G95h.mjs");
const Route$p = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: "Growth Lab Insights — SEO, Paid Media & CRO | Hegxcorp"
    }, {
      name: "description",
      content: "Strategic breakdowns of organic search systems, campaign performance optimization, and high-converting website engineering."
    }, {
      property: "og:title",
      content: "Growth Lab Insights — SEO, Paid Media & CRO | Hegxcorp"
    }, {
      property: "og:description",
      content: "Strategic breakdowns of organic search systems, campaign performance optimization, and high-converting website engineering."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/blog"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Growth Lab Insights — SEO, Paid Media & CRO | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Strategic breakdowns of organic search systems, campaign performance optimization, and high-converting website engineering."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const Route$o = createFileRoute("/admin/")({
  beforeLoad: () => {
    throw redirect({
      to: "/admin/contact-leads"
    });
  }
});
const $$splitComponentImporter$b = () => import("./service.wordpress-BhdxWH3L.mjs");
const Route$n = createFileRoute("/service/wordpress")({
  head: () => ({
    meta: [{
      title: "WordPress Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "WordPress development services by Hegxcorp including custom WordPress websites, theme development, WooCommerce stores, plugin setup, CMS configuration, speed optimisation, security, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./service.web-dev-BX8OjXEZ.mjs");
const Route$m = createFileRoute("/service/web-dev")({
  head: () => ({
    meta: [{
      title: "Website Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "Website development services by Hegxcorp including responsive websites, custom development, ecommerce websites, performance optimisation, CMS development, website redesign, integrations, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./service.web-app-CNvTbnYP.mjs");
const Route$l = createFileRoute("/service/web-app")({
  head: () => ({
    meta: [{
      title: "Web Application Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "Web application development services by Hegxcorp including custom web apps, dashboards, portals, SaaS platforms, backend systems, API integrations, performance optimisation, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
function ZigZagGrowthStack({ eyebrow, title, description, cards }) {
  const [activeReveal, setActiveReveal] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute left-1/2 top-[330px] hidden h-[calc(100%-420px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#06133D]/12 to-transparent lg:block"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-16 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4vw, 58px)"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:gap-10", children: cards.map((card, index) => {
        const Icon = card.icon;
        const alignRight = index % 2 === 0;
        const hasDetails = Boolean(
          card.detailTitle || card.detailCopy || card.detailPoints?.length
        );
        const isRevealOpen = activeReveal === index;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: hasDetails ? `flex flex-col gap-4 lg:items-stretch ${alignRight ? "lg:flex-row-reverse" : "lg:flex-row"}` : `flex ${alignRight ? "justify-end" : "justify-start"}`,
            initial: { opacity: 0, x: alignRight ? 46 : -46, y: 18 },
            whileInView: { opacity: 1, x: 0, y: 0 },
            viewport: { once: true, amount: 0.34 },
            transition: { duration: 0.58, delay: index * 0.08, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.article,
                {
                  onMouseEnter: () => {
                    if (hasDetails) setActiveReveal(index);
                  },
                  onMouseLeave: () => {
                    if (hasDetails) setActiveReveal(null);
                  },
                  onFocus: () => {
                    if (hasDetails) setActiveReveal(index);
                  },
                  onBlur: () => {
                    if (hasDetails) setActiveReveal(null);
                  },
                  tabIndex: hasDetails ? 0 : void 0,
                  whileHover: { y: -8 },
                  transition: { duration: 0.3, ease: "easeOut" },
                  className: "group/card min-h-[230px] w-full max-w-[640px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 shadow-[0_18px_48px_-30px_rgba(29,39,66,0.36)] outline-none transition-all duration-300 ease-out hover:rounded-tr-[44px] hover:rounded-br-[44px] hover:border-[#4C1688] hover:bg-[#ebc671] hover:shadow-[0_26px_68px_-28px_rgba(76,22,136,0.62)] focus-visible:ring-2 focus-visible:ring-[#FC9C44] sm:p-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 23, strokeWidth: 2 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: card.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: card.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: card.copy })
                  ]
                }
              ),
              hasDetails && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "aside",
                {
                  "aria-hidden": !isRevealOpen,
                  className: `overflow-hidden rounded-[8px] border border-[#DFE3EA] bg-white/88 shadow-[0_18px_48px_-34px_rgba(29,39,66,0.32)] backdrop-blur-sm transition-all duration-300 ease-out lg:pointer-events-none ${isRevealOpen ? `opacity-100 lg:max-w-[430px] ${alignRight ? "lg:translate-x-0" : "lg:translate-x-0"}` : `max-h-0 opacity-0 lg:max-h-none lg:max-w-0 ${alignRight ? "lg:translate-x-5" : "lg:-translate-x-5"}`}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 p-6 lg:w-[430px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.14em] text-[#FC9C44]", children: "More Detail" }),
                    card.detailTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-3 text-xl font-black leading-tight text-[#06133D]", children: card.detailTitle }),
                    card.detailCopy && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-[#4F5B76]", children: card.detailCopy }),
                    card.detailPoints?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-2", children: card.detailPoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "rounded-full border border-[#DFE3EA] bg-[#F7F8FB] px-4 py-2 text-xs font-bold text-[#06133D]",
                        children: point
                      },
                      point
                    )) }) : null
                  ] })
                }
              )
            ]
          },
          card.title
        );
      }) })
    ] })
  ] });
}
const Route$k = createFileRoute("/service/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design Services | Hegxcorp" },
      {
        name: "description",
        content: "Premium UI/UX design services by Hegxcorp for websites, SaaS products, mobile apps, landing pages, design systems, user research, wireframes, prototypes, and conversion-focused digital experiences."
      },
      { property: "og:title", content: "UI/UX Design Services | Hegxcorp" },
      {
        property: "og:description",
        content: "Design digital experiences that feel premium, reduce friction, and convert visitors into qualified leads and customers."
      }
    ]
  }),
  component: UiUxDesignPage
});
const uxCapabilities = [
  {
    icon: Search,
    title: "UX Research",
    tag: "User Clarity",
    hook: "Design decisions should come from real behavior, not assumptions.",
    description: "We study your audience, business goals, competitors, analytics, user journeys, objections, and conversion friction so the experience starts from evidence.",
    pills: ["Personas", "Journey maps", "Heuristic review", "Analytics"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=75"
  },
  {
    icon: LayoutTemplate,
    title: "Wireframes",
    tag: "Structure",
    hook: "Map the experience before visual polish hides the weak points.",
    description: "We create page flows, information architecture, section hierarchy, low-fidelity wireframes, content blocks, and decision paths before moving into final UI.",
    pills: ["IA", "User flows", "Layouts", "Content hierarchy"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=75"
  },
  {
    icon: Palette,
    title: "Visual UI Design",
    tag: "Premium Interface",
    hook: "Make the product look trustworthy before the user reads a word.",
    description: "We design polished screens with typography, spacing, colour systems, component states, interaction cues, and brand-aligned visual direction.",
    pills: ["Art direction", "Typography", "Components", "States"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=75"
  },
  {
    icon: MousePointerClick,
    title: "Conversion UX",
    tag: "Lead Flow",
    hook: "Every important click should feel obvious, useful, and low-friction.",
    description: "We improve CTA hierarchy, form UX, trust placement, landing page flow, microcopy, proof sections, and mobile decision moments to increase qualified actions.",
    pills: ["CTA paths", "Forms", "Trust cues", "Landing pages"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75"
  },
  {
    icon: Layers,
    title: "Design Systems",
    tag: "Scale",
    hook: "Your next page should not need a redesign from zero.",
    description: "We build reusable design systems with components, grids, tokens, responsive rules, documentation, and handoff notes for faster production.",
    pills: ["Tokens", "Components", "Guidelines", "Handoff"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=75"
  },
  {
    icon: Gauge,
    title: "Usability Optimization",
    tag: "Friction Removal",
    hook: "A premium interface should also be fast, clear, and easy to finish.",
    description: "We review navigation, accessibility, responsive behavior, visual clarity, task completion, content density, and interaction friction across key screens.",
    pills: ["Accessibility", "Mobile UX", "Navigation", "QA"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75"
  }
];
const proofStats = [
  ["8+", "Core experience layers reviewed before final UI"],
  ["40%", "Fewer confusing decisions through cleaner flow planning"],
  ["3x", "More reusable components for faster future pages"],
  ["100%", "Responsive design handoff with interaction states"]
];
const blueprintSteps = [
  {
    icon: Search,
    label: "01",
    title: "Discover the buying journey",
    copy: "We study your current website, target users, market positioning, analytics signals, call-to-action paths, competitor pages, and the objections stopping people from taking the next step."
  },
  {
    icon: FileText,
    label: "02",
    title: "Shape structure and content priority",
    copy: "We define information architecture, page hierarchy, core messages, trust signals, form moments, content density, and conversion paths before we add visual styling."
  },
  {
    icon: Palette,
    label: "03",
    title: "Design the premium interface system",
    copy: "We create polished screens with typography, colour, spacing, cards, states, visual rhythm, responsive rules, and brand-led interaction details that feel intentional."
  },
  {
    icon: Settings,
    label: "04",
    title: "Prepare build-ready handoff",
    copy: "We package components, annotations, responsive behavior, edge states, copy notes, and design QA guidance so developers can ship the experience accurately."
  }
];
const uxGrowthStack = [
  {
    icon: Target,
    label: "Strategy",
    title: "Positioning-led experience design",
    copy: "We connect your service promise, customer motivation, proof points, and business goal into a clear experience strategy before screens are designed.",
    detailTitle: "The interface starts with the offer.",
    detailCopy: "A beautiful page cannot fix unclear positioning. We clarify what the user should understand, trust, compare, and do at every important point.",
    detailPoints: ["Audience logic", "Offer clarity", "Conversion intent"]
  },
  {
    icon: Layers,
    label: "System",
    title: "Reusable UI foundations",
    copy: "We build visual systems that keep every landing page, dashboard, and campaign screen consistent without slowing down future production.",
    detailTitle: "Every component gets a job.",
    detailCopy: "Buttons, sections, form blocks, cards, badges, icons, modals, and navigation states are designed as reusable patterns instead of one-off decoration.",
    detailPoints: ["Design tokens", "Component states", "Responsive rules"]
  },
  {
    icon: MousePointerClick,
    label: "Conversion",
    title: "Decision paths that remove hesitation",
    copy: "We organize pages so prospects see the right value, proof, pricing context, objections, and contact options before friction makes them leave.",
    detailTitle: "Premium UX still has to sell.",
    detailCopy: "We improve CTA placement, form length, reassurance copy, social proof, comparison blocks, and page rhythm around the action you want users to take.",
    detailPoints: ["Lead forms", "CTA hierarchy", "Trust cues"]
  },
  {
    icon: Gauge,
    label: "Performance",
    title: "Fast, responsive, accessible interfaces",
    copy: "We design for mobile behavior, readable density, performance-minded media, accessible contrast, tap targets, and clean handoff for front-end build.",
    detailTitle: "A polished UI should not become heavy.",
    detailCopy: "We consider how each design decision affects loading, scanning, implementation effort, and long-term maintainability.",
    detailPoints: ["Mobile QA", "Accessibility", "Build-ready specs"]
  }
];
const serviceItems = [
  {
    title: "Website UI/UX Design",
    answer: "We design premium website experiences for service businesses, SaaS brands, ecommerce companies, agencies, consultants, and enterprise teams. This includes homepage design, service pages, landing pages, pricing pages, product pages, case study layouts, contact flows, navigation, footer systems, and reusable section libraries."
  },
  {
    title: "Landing Page UX & Conversion Design",
    answer: "We improve landing page structure, offer clarity, hero messaging, above-the-fold CTA paths, proof placement, form experience, objection handling, content sequencing, and responsive layout so campaigns have a stronger chance to convert traffic into leads."
  },
  {
    title: "SaaS & Web App Interface Design",
    answer: "We design dashboards, onboarding flows, empty states, data tables, filters, settings screens, account pages, product navigation, feature flows, and interaction states for software teams that need clean and scalable user interfaces."
  },
  {
    title: "Mobile App UX/UI",
    answer: "We design mobile app flows for discovery, onboarding, account setup, browsing, booking, checkout, messaging, profile management, notifications, and repeat engagement with careful attention to tap targets, flow depth, and small-screen clarity."
  },
  {
    title: "Design System & Component Library",
    answer: "We create component libraries, UI tokens, typography scales, colour systems, grids, button states, cards, form fields, modals, navigation patterns, usage notes, and responsive behavior documentation for faster design and development."
  },
  {
    title: "UX Audit & Redesign Roadmap",
    answer: "We review your current experience for unclear hierarchy, poor messaging, broken responsive layouts, weak trust cues, form friction, navigation problems, accessibility issues, and conversion leaks, then turn findings into a prioritized redesign roadmap."
  }
];
const processItems$3 = [
  {
    title: "Experience Audit",
    answer: "We review your current digital experience, analytics signals, primary pages, conversion paths, mobile behavior, navigation, forms, content clarity, design consistency, and competitor benchmarks."
  },
  {
    title: "UX Strategy & Page Architecture",
    answer: "We define target users, primary actions, page goals, information architecture, content blocks, user flows, CTA hierarchy, proof requirements, and the structure of the design system."
  },
  {
    title: "Wireframes & Interaction Planning",
    answer: "We map page sections, screen flows, states, form steps, content order, navigation logic, and interaction behavior before detailed visual design begins."
  },
  {
    title: "High-Fidelity UI Design",
    answer: "We create polished desktop and mobile designs with typography, colour, spacing, imagery direction, cards, icons, component states, motion notes, and brand-aligned visual treatment."
  },
  {
    title: "Prototype, Feedback & Refinement",
    answer: "We use prototypes and review rounds to test flow clarity, stakeholder feedback, mobile layout, content hierarchy, CTA visibility, and user confidence before handoff."
  },
  {
    title: "Developer Handoff & Design QA",
    answer: "We prepare build notes, component guidance, responsive states, spacing rules, asset notes, and QA feedback so the implemented experience matches the approved design."
  }
];
const deliverables = [
  "UX audit and friction report",
  "User journey and page-flow mapping",
  "Information architecture and wireframes",
  "High-fidelity desktop and mobile UI screens",
  "Interactive prototype for review",
  "Landing page and lead form optimization",
  "Design system foundations and component states",
  "Developer handoff notes and design QA support",
  "Includes UX structure, premium UI, responsive layouts, and optimized conversion paths",
  "Designed for websites, SaaS products, mobile apps, and landing pages"
];
const industries = [
  { icon: Handshake, label: "B2B services" },
  { icon: Cloud, label: "SaaS platforms" },
  { icon: ShoppingCart, label: "Ecommerce brands" },
  { icon: Cross, label: "Healthcare and clinics" },
  { icon: GraduationCap, label: "Education and coaching" },
  { icon: House, label: "Real estate and local services" },
  { icon: Briefcase, label: "Finance and professional services" },
  { icon: Rocket, label: "Startups and founder-led brands" }
];
const faqs$3 = [
  {
    question: "What are UI/UX design services?",
    answer: "UI/UX design services help businesses plan, structure, design, and improve digital experiences. This can include research, wireframes, user flows, visual interface design, prototypes, design systems, landing pages, websites, mobile apps, SaaS dashboards, and conversion-focused redesigns."
  },
  {
    question: "Can you redesign my existing website or app?",
    answer: "Yes. We can audit your current experience, identify friction, rebuild the page structure, improve visual quality, redesign key screens, create a new component system, and support handoff for implementation."
  },
  {
    question: "Do you design only visuals or also user journeys?",
    answer: "We handle both. The visual layer matters, but the strongest results come from clear user journeys, content hierarchy, action paths, trust signals, mobile behavior, and conversion structure."
  },
  {
    question: "Can UI/UX design improve lead generation?",
    answer: "Yes. Better UX can improve clarity, reduce form friction, improve CTA visibility, build trust faster, and make key actions easier. For lead-focused pages, we design around the full decision path rather than only making the page look good."
  },
  {
    question: "Do you provide developer handoff?",
    answer: "Yes. We can provide responsive screen designs, component states, spacing guidance, copy notes, asset direction, interaction notes, and design QA feedback so development teams can implement the approved UI accurately."
  },
  {
    question: "How long does a UI/UX design project take?",
    answer: "A landing page or small website redesign can often move quickly in one to three weeks. Larger websites, SaaS platforms, mobile apps, and design systems may take longer depending on the number of screens, research depth, and review cycles."
  }
];
function UiUxHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb:14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 opacity-[0.08]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: " inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 10, strokeWidth: 2 }),
              "Premium UI/UX Design"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "max-w-4xl font-black leading-[1.02]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)"
                },
                children: [
                  "Digital experiences",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[#FC9C44]", children: "people trust, use," }),
                  "and act on"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-7 max-w-2xl text-white/74",
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  lineHeight: 1.75
                },
                children: "Hegxcorp designs websites, SaaS interfaces, mobile app flows, landing pages, and design systems that feel premium, guide users clearly, and support measurable business growth."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/contact",
                  className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                  children: [
                    "Start a Design Project",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 2 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/case-studies",
                  className: "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12",
                  children: "Explore Case Studies"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 28, scale: 0.96 },
          animate: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
          className: "relative",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center justify-between gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Experience Blueprint" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "UI/UX Design System" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 22, strokeWidth: 2 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-[0.8fr_1.2fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Screen Flow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-3", children: ["Discover", "Compare", "Trust", "Contact"].map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 rounded-xl bg-white/[0.06] p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#FC9C44] text-[10px] font-black text-white", children: index + 1 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white/82", children: step })
                    ]
                  },
                  step
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Interface Health" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#FC9C44]/18 px-3 py-1 text-[11px] font-black text-[#FC9C44]", children: "Mapped" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
                  ["Visual hierarchy", "92%"],
                  ["Form clarity", "86%"],
                  ["Mobile flow", "94%"]
                ].map(([label, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/58", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: value })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]",
                      style: { width: value }
                    }
                  ) })
                ] }, label)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-3", children: ["Wireframes", "Prototype", "Handoff"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl border border-white/10 bg-white/[0.05] p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mb-4 h-5 w-5 text-[#FC9C44]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-white", children: item }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-5 text-white/54", children: "Planned with responsive states and conversion flow." })
                ]
              },
              item
            )) })
          ] }) })
        }
      )
    ] })
  ] });
}
function ProofBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-[#EAEAEA] bg-white px-6 py-10 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl gap-4 md:grid-cols-4", children: proofStats.map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "border border-[#EAEAEA] bg-[#FAFAF8] p-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black text-[#06133D]", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold leading-6 text-[#5F6B7A]", children: label })
      ]
    },
    label
  )) }) });
}
function UxCapabilities() {
  const [activeCapability, setActiveCapability] = reactExports.useState(0);
  const activeItem = uxCapabilities[activeCapability];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F7F8FB] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "UI/UX Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.4vw, 64px)"
          },
          children: "Design that makes the next action feel natural"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Every design layer is planned to reduce confusion, make value easier to understand, and support a stronger conversion path across desktop and mobile." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-eyebrow", children: "Experience Layers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-split-heading", children: "From user insight to build-ready interface" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-body", children: "We combine research, structure, interface design, conversion thinking, and system documentation into one practical design workflow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-service-list", children: uxCapabilities.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeCapability === index;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onMouseEnter: () => setActiveCapability(index),
              onFocus: () => setActiveCapability(index),
              onClick: () => setActiveCapability(index),
              className: `seo-service-item ${isActive ? "active" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: 2 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-service-copy", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-name", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-tag", children: item.tag })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
              ]
            },
            item.title
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, scale: 1.02 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.99 },
          transition: { duration: 0.42, ease: "easeOut" },
          className: "seo-capability-slide",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "seo-slide-bg service-slide-bg",
                style: { backgroundImage: `url("${activeItem.image}")` }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-tint service-slide-tint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-slide-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-kicker", children: activeItem.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "seo-slide-hook", children: [
                '"',
                activeItem.hook,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
            ] })
          ]
        },
        activeItem.title
      ) }) })
    ] })
  ] }) });
}
function ExperienceBlueprint() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "Experience Blueprint" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 62px)"
            },
            children: "A complete design process for serious digital growth"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Strong UI/UX design is not only a screen mockup. It is a working system of page logic, user psychology, visual hierarchy, responsive behavior, and handoff detail that helps your team move faster." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: blueprintSteps.map((step, index) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.5, delay: index * 0.06, ease: "easeOut" },
          className: "group border border-[#E2E6EF] bg-[#FAFAF8] p-7 transition hover:-translate-y-1 hover:border-[#FC9C44]/55 hover:bg-white hover:shadow-[0_24px_68px_-48px_rgba(6,19,61,0.5)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-start justify-between gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-14 w-14 items-center justify-center bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 23, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-black leading-none text-[#E3E7EF] transition group-hover:text-[#FC9C44]/22", children: step.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black leading-tight text-[#06133D]", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-8 text-[#4F5B76]", children: step.copy })
          ]
        },
        step.title
      );
    }) })
  ] }) });
}
function DeliverablesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#06133D] px-6 py-24 text-white lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 opacity-[0.08]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "52px 52px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.76fr_1fr] lg:items-start lg:gap-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "What You Get" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 62px)"
            },
            children: "Detailed design assets your team can actually build from"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-8 text-white/70", children: "We keep deliverables practical. The goal is not a pretty file that sits unused. The goal is a clear experience system that helps marketing, design, and development ship better pages faster." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:pt-1", children: deliverables.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.45, delay: index * 0.035, ease: "easeOut" },
          className: "flex items-start gap-3 border border-white/10 bg-white/[0.06] p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-[#FC9C44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold leading-6 text-white/86", children: item })
          ]
        },
        item
      )) })
    ] })
  ] });
}
function IndustriesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#FAFAF8] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "Who It Helps" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.4vw, 62px)"
          },
          children: "UI/UX design for brands that need clarity, trust, and action"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Whether you are rebuilding a service website, improving a product flow, or launching a campaign page, the design should make your value easier to understand and easier to choose." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: industries.map((industry, index) => {
      const Icon = industry.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.42, delay: index * 0.035, ease: "easeOut" },
          className: "group border border-[#E2E6EF] bg-white p-5 transition hover:-translate-y-1 hover:border-[#FC9C44]/60 hover:shadow-[0_18px_48px_-36px_rgba(6,19,61,0.38)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-5 flex h-11 w-11 items-center justify-center bg-[#FFF4E8] text-[#FC9C44] transition group-hover:bg-[#FC9C44] group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 19, strokeWidth: 2 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-[#06133D]", children: industry.label })
          ]
        },
        industry.label
      );
    }) })
  ] }) });
}
function UiUxDesignPage() {
  const [openService, setOpenService] = reactExports.useState(null);
  const [openProcess, setOpenProcess] = reactExports.useState(null);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UiUxHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProofBand, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UxCapabilities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceBlueprint, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "UI/UX Growth Stack",
          title: "Premium design works best when strategy, interface, and conversion move together",
          description: "A stronger digital experience connects business goals, user needs, visual clarity, component systems, and measurable conversion behavior.",
          cards: uxGrowthStack
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DeliverablesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#ebc671]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: serviceItems.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: processItems$3.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IndustriesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: faqs$3.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Route$j = createFileRoute("/service/social-med")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Services | Hegxcorp" },
      {
        name: "description",
        content: "Social media marketing services by Hegxcorp including strategy, content creation, social media management, paid campaigns, community growth, analytics, and brand engagement."
      }
    ]
  }),
  component: SocialMediaPage
});
const socialCapabilities = [
  {
    icon: Target,
    title: "Social Media Strategy",
    tag: "Growth Roadmap",
    hook: "Turn platform activity into a clear brand growth system.",
    description: "We build a clear social media roadmap based on your audience, brand position, competitors, content pillars, and growth goals.",
    pills: ["Audience", "Pillars", "Positioning", "Goals"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75",
    visual: "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.7), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.1), rgba(6,19,61,0.44))"
  },
  {
    icon: PenTool,
    title: "Content Creation",
    tag: "Creative Engine",
    hook: "Create posts that feel native to each platform.",
    description: "We create platform-ready posts, captions, creative concepts, short-form ideas, campaign themes, and visual directions that fit your brand.",
    pills: ["Captions", "Concepts", "Carousels", "Campaigns"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=75",
    visual: "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: CalendarDays,
    title: "Content Planning",
    tag: "Consistency",
    hook: "Keep every channel moving with a practical publishing rhythm.",
    description: "We organize posting calendars, campaign schedules, content themes, and publishing workflows so your brand stays consistent.",
    pills: ["Calendars", "Themes", "Workflow", "Scheduling"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=75",
    visual: "radial-gradient(circle at 22% 20%, rgba(252,156,68,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.4))"
  },
  {
    icon: Clapperboard,
    title: "Short-Form Video",
    tag: "Video Hooks",
    hook: "Build attention with sharper reels, shorts, and scripts.",
    description: "We plan reels, shorts, hooks, scripts, and video content ideas designed for attention, engagement, and brand recall.",
    pills: ["Reels", "Shorts", "Hooks", "Scripts"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=75",
    visual: "radial-gradient(circle at 72% 24%, rgba(252,156,68,0.64), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.04), rgba(6,19,61,0.46))"
  },
  {
    icon: Users,
    title: "Community Growth",
    tag: "Engagement",
    hook: "Make your audience feel seen, heard, and invited back.",
    description: "We help improve audience interaction through comments, engagement prompts, brand conversations, and community-focused content.",
    pills: ["Comments", "Prompts", "Conversations", "Loyalty"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=75",
    visual: "radial-gradient(circle at 20% 28%, rgba(252,156,68,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: ChartColumn,
    title: "Analytics & Reporting",
    tag: "Performance",
    hook: "Use social data to improve what gets created next.",
    description: "We track reach, engagement, follower growth, content performance, campaign results, and insights for continuous improvement.",
    pills: ["Reach", "Engagement", "Growth", "Insights"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
    visual: "radial-gradient(circle at 76% 20%, rgba(255,212,170,0.62), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))"
  }
];
const socialServices = [
  {
    title: "Social Media Management",
    answer: "We manage your social media presence with planned content, consistent posting, brand-aligned messaging, and performance review."
  },
  {
    title: "Instagram Marketing",
    answer: "We create Instagram strategies for reels, carousels, stories, captions, profile optimisation, and audience engagement."
  },
  {
    title: "Facebook Marketing",
    answer: "We help brands use Facebook pages, content, communities, and campaigns to improve visibility and customer connection."
  },
  {
    title: "LinkedIn Marketing",
    answer: "We build LinkedIn content systems for founders, teams, and B2B brands that want stronger authority and lead generation."
  },
  {
    title: "Creative Campaigns",
    answer: "We plan campaign ideas around launches, offers, events, seasonal promotions, and brand awareness goals."
  },
  {
    title: "Paid Social Advertising",
    answer: "We create and optimise paid social campaigns for awareness, leads, traffic, retargeting, and conversion-focused objectives."
  }
];
const socialGrowthStack = [
  {
    icon: Target,
    label: "Strategy First",
    title: "Audience & Platform Direction",
    copy: "We define who you need to reach, which platforms matter, what content pillars should lead, and how social activity supports real business goals.",
    detailTitle: "The roadmap behind every post",
    detailCopy: "Before content starts, we organize the brand voice, audience segments, platform priorities, competitor angle, and campaign rhythm so every post has a job.",
    detailPoints: ["Audience segments", "Platform priorities", "Content pillars"]
  },
  {
    icon: Clapperboard,
    label: "Creative System",
    title: "Content Built for Attention",
    copy: "Reels, carousels, captions, campaign ideas, and short-form hooks are planned as one repeatable creative engine instead of random posting.",
    detailTitle: "Creative that can keep moving",
    detailCopy: "We plan content formats that can be produced consistently, tested quickly, and adapted across Instagram, LinkedIn, Facebook, YouTube, and campaign launches.",
    detailPoints: ["Reels hooks", "Carousel flows", "Caption systems"]
  },
  {
    icon: ChartColumn,
    label: "Growth Signals",
    title: "Measure, Learn, Improve",
    copy: "We read reach, engagement, saves, clicks, community response, and follower quality to improve the next content cycle with clearer decisions.",
    detailTitle: "A feedback loop for better content",
    detailCopy: "Performance data guides what to repeat, what to improve, and where to shift creative energy so social media becomes a learning system.",
    detailPoints: ["Engagement quality", "Content winners", "Next-cycle improvements"]
  }
];
const processItems$2 = [
  {
    title: "Research",
    answer: "We study your brand, audience, competitors, platforms, current content, engagement patterns, and business objectives."
  },
  {
    title: "Strategy",
    answer: "We define platform priorities, content pillars, tone of voice, campaign themes, growth goals, and reporting metrics."
  },
  {
    title: "Create",
    answer: "We develop content ideas, captions, creative directions, video concepts, post formats, and campaign assets."
  },
  {
    title: "Publish & Engage",
    answer: "We support consistent publishing, audience interaction, content scheduling, and community-focused communication."
  },
  {
    title: "Measure & Improve",
    answer: "We review analytics, identify winning content, improve weak areas, and refine the plan for better performance."
  },
  {
    title: "Social Media Audit",
    answer: "We review your current profiles, content quality, engagement, audience signals, competitor activity, and growth opportunities."
  }
];
function SocialMediaPage() {
  const [activeCapability, setActiveCapability] = reactExports.useState(0);
  const [openService, setOpenService] = reactExports.useState(null);
  const [openProcess, setOpenProcess] = reactExports.useState(null);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const activeItem = socialCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "52px 52px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Social Media Marketing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Social Media",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[#FC9C44]", children: "That Builds Demand" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-7 max-w-2xl text-white/72",
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.25vw, 19px)",
                      lineHeight: 1.75
                    },
                    children: "Build a stronger brand presence with strategy, content planning, creative campaigns, community engagement, and performance-focused growth."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Plan My Social Growth"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/case-studies",
                      className: "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12",
                      children: "View Results"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Brand Growth Console" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Social Performance System" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Reach Lift", "+248%"],
                  ["Engagement", "+186%"],
                  ["Content Score", "92"],
                  ["Community", "+64%"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `mt-3 text-3xl font-black ${index === 1 ? "text-[#FC9C44]" : "text-white"}`,
                          children: value
                        }
                      )
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/52", children: "Weekly Content Mix" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "Live" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: [
                    ["Reels", "78%"],
                    ["Carousels", "64%"],
                    ["Community", "52%"]
                  ].map(([label, width]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: width })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]",
                        style: { width }
                      }
                    ) })
                  ] }, label)) })
                ] })
              ] }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-eyebrow", children: "Social Media Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "seo-split-heading", children: "Complete social media systems for brand growth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the social media system builds awareness, consistency, engagement, and measurable demand." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-service-list", children: socialCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "seo-capability-slide",
            initial: { opacity: 0, x: 24, scale: 0.98 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: -18, scale: 0.98 },
            transition: { duration: 0.5, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "Social Growth Stack",
          title: "Social media works best when strategy, content, and community move together",
          description: "Each layer of your social system should make the next one stronger, from audience insight to creative execution and performance learning.",
          cards: socialGrowthStack
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: "Services & Process"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: socialServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: processItems$2.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$8 = () => import("./service.seo-w90ZgFFr.mjs");
const Route$i = createFileRoute("/service/seo")({
  head: () => ({
    meta: [{
      title: "SEO Services — Technical, Enterprise & Ecommerce Search Growth | Hegxcorp"
    }, {
      name: "description",
      content: "Data-driven SEO services: technical search architecture, content clusters, local & international SEO, link authority, and organic revenue scaling."
    }, {
      property: "og:title",
      content: "SEO Services — Technical, Enterprise & Ecommerce Search Growth | Hegxcorp"
    }, {
      property: "og:description",
      content: "Data-driven SEO services: technical search architecture, content clusters, local & international SEO, link authority, and organic revenue scaling."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://hegxcorp.com/service/seo"
    }, {
      property: "og:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "SEO Services — Technical, Enterprise & Ecommerce Search Growth | Hegxcorp"
    }, {
      name: "twitter:description",
      content: "Data-driven SEO services: technical search architecture, content clusters, local & international SEO, link authority, and organic revenue scaling."
    }, {
      name: "twitter:image",
      content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
    }],
    links: [{
      rel: "canonical",
      href: "https://hegxcorp.com/service/seo"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const Route$h = createFileRoute("/service/ppc")({
  head: () => ({
    meta: [
      { title: "PPC Advertising Services | Hegxcorp" },
      {
        name: "description",
        content: "PPC advertising services by Hegxcorp including Google Search Ads, Performance Max, Meta Ads, LinkedIn Ads, YouTube Ads, shopping ads, retargeting, conversion tracking, landing pages, and ROAS optimization."
      }
    ]
  }),
  component: PpcServicePage
});
const ppcCapabilities = [
  {
    icon: Search,
    title: "Google Search Ads",
    tag: "High Intent",
    hook: "Capture buyers already searching for your offer.",
    description: "We build tightly structured Google Search campaigns around intent, match types, ad relevance, negative keywords, and conversion-ready landing pages.",
    pills: ["Search intent", "Ad groups", "Negatives", "Quality score"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75",
    visual: "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.66), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.44))"
  },
  {
    icon: Zap,
    title: "Performance Max",
    tag: "Scale System",
    hook: "Give automation the right signals before asking it to scale.",
    description: "We structure asset groups, audience signals, product feeds, exclusions, and creative inputs so Performance Max can find profitable demand.",
    pills: ["Asset groups", "Feeds", "Signals", "Exclusions"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
    visual: "radial-gradient(circle at 78% 20%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))"
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    tag: "Creative Testing",
    hook: "Turn creative learning into cheaper acquisition.",
    description: "We test hooks, audiences, placements, creatives, and retargeting journeys across Facebook and Instagram to improve cost per qualified action.",
    pills: ["Hooks", "Audiences", "Creatives", "Retargeting"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
    visual: "radial-gradient(circle at 22% 24%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))"
  },
  {
    icon: Users,
    title: "LinkedIn ABM",
    tag: "B2B Demand",
    hook: "Reach decision-makers with sharper account-based campaigns.",
    description: "We build LinkedIn campaigns around firmographics, job roles, account lists, lead magnets, and founder-led positioning for B2B growth.",
    pills: ["ABM", "Lead magnets", "Job roles", "Firmographics"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75",
    visual: "radial-gradient(circle at 78% 18%, rgba(252,156,68,0.58), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: Target,
    title: "Retargeting Funnels",
    tag: "Second Chance",
    hook: "Bring back the people who were close to converting.",
    description: "We segment website visitors, video viewers, cart abandoners, and lead-stage audiences into retargeting flows that match their buying stage.",
    pills: ["Segments", "Sequences", "Cart recovery", "Lead stages"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75",
    visual: "radial-gradient(circle at 20% 26%, rgba(255,212,170,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))"
  },
  {
    icon: ChartLine,
    title: "ROAS Analytics",
    tag: "Profit Control",
    hook: "Scale based on revenue clarity, not vanity metrics.",
    description: "We connect tracking, events, conversion values, dashboards, and reporting so budget decisions are based on return, margin, and pipeline quality.",
    pills: ["Tracking", "Events", "Dashboards", "Revenue"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=75",
    visual: "radial-gradient(circle at 74% 22%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))"
  }
];
const ppcServices = [
  {
    title: "Google Ads Management",
    answer: "We manage search, Performance Max, display, shopping, YouTube, and lead-generation campaigns with clear account structure, conversion tracking, search term reviews, negative keywords, budget pacing, and weekly optimization."
  },
  {
    title: "Paid Search Strategy",
    answer: "We map high-intent keywords, competitor pressure, CPC ranges, funnel stages, account architecture, landing page gaps, ad message, and budget priorities before spend is scaled."
  },
  {
    title: "Meta & Instagram Ads",
    answer: "We plan audience testing, creative concepts, hooks, placements, retargeting flows, campaign objectives, offer angles, and conversion events for Facebook and Instagram campaigns."
  },
  {
    title: "LinkedIn Advertising",
    answer: "We build B2B campaigns for account-based marketing, lead magnets, company targeting, job-role targeting, founder-led positioning, remarketing, and pipeline-focused demand generation."
  },
  {
    title: "Conversion Tracking",
    answer: "We configure conversion events, value tracking, pixels, Google Tag Manager, GA4 goals, call tracking signals, lead form tracking, ecommerce events, and reporting so every campaign can be judged properly."
  },
  {
    title: "Landing Page Alignment",
    answer: "We align ad message, search intent, landing page copy, offer clarity, trust signals, form friction, page speed, mobile layout, and call-to-action structure to improve lead quality and reduce wasted spend."
  },
  {
    title: "Retargeting Campaigns",
    answer: "We create retargeting journeys for website visitors, warm audiences, abandoned carts, video viewers, high-intent page visitors, lead-stage prospects, and previous customer segments."
  }
];
const processItems$1 = [
  {
    title: "Account & Funnel Audit",
    answer: "We review account structure, spend allocation, conversion tracking, search terms, creative performance, landing pages, audiences, bidding strategy, competitor pressure, and wasted budget."
  },
  {
    title: "Campaign Strategy & Media Plan",
    answer: "We define channel mix, campaign architecture, keyword priorities, audience plan, offer angles, conversion goals, budget pacing, testing cadence, and reporting model."
  },
  {
    title: "Build, Tracking & QA",
    answer: "We create campaigns, ad groups, audiences, assets, ad copy, extensions, negative lists, tracking events, UTM structure, conversion imports, and launch-ready dashboards."
  },
  {
    title: "Launch & Early Optimization",
    answer: "After launch, we monitor spend delivery, search terms, placements, audience quality, creative response, landing page behavior, lead quality, and tracking accuracy closely."
  },
  {
    title: "Scale Winning Segments",
    answer: "We shift budget into profitable campaigns, expand winning keywords and audiences, test new segments, introduce fresh creative, and protect ROAS while increasing qualified volume."
  },
  {
    title: "Reporting & Growth Reviews",
    answer: "We report on spend, conversions, cost per lead, ROAS, conversion quality, search intent, creative winners, landing page gaps, and the next decisions needed to improve results."
  },
  {
    title: "Budget & Bid Optimization",
    answer: "We monitor bids, budgets, audiences, search terms, placements, device performance, dayparting, creative fatigue, conversion quality, and revenue signals to scale what works and cut waste."
  }
];
const faqs$2 = [
  {
    question: "What are PPC advertising services?",
    answer: "PPC advertising services help businesses plan, launch, manage, and optimize paid campaigns across platforms like Google, Meta, Instagram, LinkedIn, YouTube, shopping, display, and retargeting networks."
  },
  {
    question: "Which PPC platforms do you manage?",
    answer: "We can support Google Search Ads, Performance Max, Meta Ads, Instagram Ads, LinkedIn Ads, YouTube Ads, shopping campaigns, display campaigns, remarketing, and lead-generation campaigns depending on your goals."
  },
  {
    question: "How fast can PPC show results?",
    answer: "PPC can start generating traffic quickly after launch, but meaningful optimization usually needs a few weeks of conversion data, search term review, creative testing, and landing page learning."
  },
  {
    question: "Do you handle landing pages and tracking?",
    answer: "Yes. PPC performance depends on the full funnel, so we can support landing page alignment, tracking setup, events, analytics, call tracking signals, ecommerce events, and reporting."
  },
  {
    question: "How do you reduce wasted ad spend?",
    answer: "We reduce waste through search term pruning, negative keywords, audience exclusions, placement checks, bid adjustments, budget pacing, conversion-quality review, landing page improvements, and clearer campaign structure."
  },
  {
    question: "Can PPC work with SEO and content marketing?",
    answer: "Yes. PPC data can reveal high-converting keywords, offers, audiences, and objections. Hegxcorp can use those insights to improve SEO pages, content topics, landing pages, and retargeting journeys."
  },
  {
    question: "What budget do I need for PPC?",
    answer: "The right PPC budget depends on your industry, geography, CPCs, funnel, conversion rate, and lead value. We usually recommend starting with enough budget to collect meaningful conversion data before scaling."
  },
  {
    question: "Do you manage ecommerce PPC campaigns?",
    answer: "Yes. Ecommerce PPC can include shopping campaigns, Performance Max, product feed improvements, category-level campaigns, dynamic retargeting, conversion value tracking, and ROAS-led reporting."
  }
];
const ppcProofMetrics = [
  {
    value: "24/7",
    label: "Spend visibility",
    copy: "Campaign delivery, cost, leads, and conversion quality are monitored so spend does not drift quietly."
  },
  {
    value: "6+",
    label: "Ad channels",
    copy: "Google Search, Performance Max, Meta, Instagram, LinkedIn, YouTube, shopping, display, and retargeting."
  },
  {
    value: "30-day",
    label: "Learning cycle",
    copy: "Early campaign data is reviewed quickly to improve keywords, audiences, creatives, and landing pages."
  },
  {
    value: "ROAS",
    label: "Growth lens",
    copy: "Budget decisions are connected to revenue, cost per lead, lead quality, and pipeline value."
  }
];
function PpcProofBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: ppcProofMetrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45 },
      className: "border border-[#E5E7EB] bg-white p-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
      ]
    },
    metric.label
  )) }) });
}
const ppcChannelServices = [
  {
    icon: Search,
    title: "Google Search Ads",
    copy: "High-intent search campaigns built around keyword groups, ad relevance, landing page intent, negatives, bid control, and conversion tracking.",
    points: ["Keyword mapping", "RSA copy", "Negatives", "Lead tracking"]
  },
  {
    icon: Zap,
    title: "Performance Max Campaigns",
    copy: "PMax structure for ecommerce and lead generation with audience signals, asset groups, feed hygiene, exclusions, search themes, and value-based goals.",
    points: ["Asset groups", "Feed checks", "Audience signals", "Exclusions"]
  },
  {
    icon: Megaphone,
    title: "Meta & Instagram Ads",
    copy: "Creative-led paid social campaigns with hooks, formats, audience tests, retargeting pools, offer angles, and conversion objective alignment.",
    points: ["Creative tests", "Hooks", "Retargeting", "Lead forms"]
  },
  {
    icon: Users,
    title: "LinkedIn B2B Campaigns",
    copy: "Account-based and role-based campaigns for B2B brands that need decision-maker reach, lead magnets, remarketing, and pipeline quality.",
    points: ["ABM", "Job roles", "Lead magnets", "Pipeline"]
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Ecommerce PPC",
    copy: "Product feed optimization, shopping campaigns, category budget control, dynamic remarketing, conversion value tracking, and ROAS reporting.",
    points: ["Product feeds", "Shopping ads", "Dynamic ads", "ROAS"]
  },
  {
    icon: Smartphone,
    title: "YouTube, Display & Remarketing",
    copy: "Awareness and retargeting campaigns that reconnect with visitors, video viewers, cart abandoners, and engaged audiences across the funnel.",
    points: ["Video ads", "Display", "Warm audiences", "Sequences"]
  }
];
function PpcChannelDepth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "PPC Management Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.8vw, 66px)"
            },
            children: "Paid media coverage for every high-intent acquisition channel"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E5E7EB] bg-[#FAFAF8] p-6 shadow-[0_22px_70px_-54px_rgba(6,19,61,0.5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp builds PPC systems across search, social, shopping, video, display, and retargeting so every channel has the right message, tracking, landing page, budget rule, and optimization rhythm before scale." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: ["Search intent", "Paid social", "Shopping ads", "Retargeting"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-black text-[#06133D]",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: ppcChannelServices.map((service, index) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#06133D]", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: service.copy }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: service.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#536083]",
                children: point
              },
              point
            )) })
          ]
        },
        service.title
      );
    }) })
  ] }) });
}
const ppcWhyCards = [
  {
    icon: ShieldCheck,
    title: "Waste control from day one",
    copy: "Search terms, placements, negatives, audience quality, and conversion signals are checked early so budget does not disappear into poor-fit traffic."
  },
  {
    icon: Gauge,
    title: "Tracking before scaling",
    copy: "We confirm events, values, forms, calls, ecommerce actions, and analytics flows before recommending heavier budget allocation."
  },
  {
    icon: Layers,
    title: "Landing page alignment",
    copy: "Campaigns are reviewed with page speed, offer clarity, message match, trust elements, and conversion friction in mind."
  },
  {
    icon: ChartColumn,
    title: "Reporting that explains action",
    copy: "Reports show what changed, what improved, where budget moved, which tests mattered, and what should happen next."
  }
];
function PpcWhySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Why Hegxcorp PPC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 60px)"
            },
            children: "Paid campaigns built with control before scale"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-3xl justify-self-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-white/72", children: "PPC can create demand quickly, but it can also waste budget quickly. Hegxcorp focuses on clean setup, useful data, landing page alignment, and measured scaling so paid media has a stronger chance of becoming profitable without losing control of spend, tracking quality, or lead value." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-3", children: ["Budget discipline", "Tracking clarity", "Landing page fit"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/82",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: ppcWhyCards.map((card) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-white/12 bg-white/[0.06] p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 21, strokeWidth: 1.9 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-white", children: card.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-white/72", children: card.copy })
      ] }, card.title);
    }) })
  ] }) });
}
const ppcIndustries = [
  {
    icon: Building2,
    title: "B2B & SaaS",
    copy: "Lead-generation campaigns, LinkedIn ABM, high-intent Google Search, demo requests, lead magnets, and pipeline-quality reporting."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C",
    copy: "Shopping campaigns, Performance Max, dynamic remarketing, product feed improvements, ROAS tracking, and category-level budget strategy."
  },
  {
    icon: MapPin,
    title: "Local Services",
    copy: "Call-focused campaigns, map intent, city targeting, service-area landing pages, lead forms, and retargeting for high-intent visitors."
  },
  {
    icon: Earth,
    title: "Education, Healthcare & Services",
    copy: "Inquiry campaigns, appointment or enrollment funnels, trust-led landing pages, audience segmentation, and lead quality review."
  }
];
function PpcIndustries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "PPC Use Cases" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.4vw, 60px)"
          },
          children: "Campaign planning adapted to industry, funnel, and lead quality"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4", children: ppcIndustries.map((industry) => {
      const Icon = industry.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white p-7 transition hover:bg-[#FAFAF8]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mb-6 h-7 w-7 text-[#FC9C44]", strokeWidth: 1.9 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#06133D]", children: industry.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: industry.copy })
      ] }, industry.title);
    }) })
  ] }) });
}
function PpcHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 opacity-[0.08]",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "52px 52px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "PPC Advertising Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "max-w-3xl font-black leading-[1.02]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)"
                },
                children: [
                  "Paid Ads",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[#FC9C44]", children: "Built for ROAS" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-7 max-w-2xl text-white/72",
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  lineHeight: 1.75
                },
                children: "Launch, optimize, and scale PPC campaigns across Google, Meta, LinkedIn, and retargeting channels with clear tracking and revenue-focused decisions."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/free-growth-audit",
                  className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                  children: "Get PPC Audit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/case-studies",
                  className: "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12",
                  children: "View Results"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 28, scale: 0.96 },
          animate: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
          className: "relative",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Paid Growth Console" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "PPC Performance System" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MousePointerClick, { size: 22, strokeWidth: 2 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              ["ROAS", "4.8x"],
              ["CPL Drop", "-42%"],
              ["Lead Lift", "+176%"],
              ["Waste Cut", "31%"]
            ].map(([label, value], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `mt-3 text-3xl font-black ${index === 0 ? "text-[#FC9C44]" : "text-white"}`,
                      children: value
                    }
                  )
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/52", children: "Channel Allocation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "Optimizing" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: [
                ["Google Search", "74%"],
                ["Performance Max", "58%"],
                ["Meta Retargeting", "46%"]
              ].map(([label, width]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: width })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]",
                    initial: { width: 0 },
                    animate: { width },
                    transition: { duration: 1.1, delay: 0.25, ease: "easeOut" }
                  }
                ) })
              ] }, label)) })
            ] })
          ] }) })
        }
      )
    ] })
  ] });
}
function PpcCapabilities() {
  const [activeCapability, setActiveCapability] = reactExports.useState(0);
  const activeItem = ppcCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-reveal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-eyebrow", children: "PPC Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "seo-split-heading", children: "Paid media systems for profitable acquisition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the PPC system improves targeting, conversion quality, spend control, and ROAS." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-service-list", children: ppcCapabilities.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeCapability === index;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onMouseEnter: () => setActiveCapability(index),
            onFocus: () => setActiveCapability(index),
            onClick: () => setActiveCapability(index),
            className: `seo-service-item ${isActive ? "active" : ""}`,
            "aria-pressed": isActive,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-service-copy", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-name", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-tag", children: item.tag })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
            ]
          },
          item.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "seo-capability-slide",
        initial: { opacity: 0, x: 24, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -18, scale: 0.98 },
        transition: { duration: 0.5, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "seo-slide-bg service-slide-bg",
              style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-tint service-slide-tint" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-slide-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-slide-kicker", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
              activeItem.tag
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "seo-slide-hook", children: [
              '"',
              activeItem.hook,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
          ] })
        ]
      },
      activeItem.title
    ) }) })
  ] }) }) });
}
function PpcPerformanceStack() {
  const cards = [
    {
      icon: DollarSign,
      title: "Budget Control",
      value: "Spend pacing",
      copy: "Every campaign is monitored by budget, conversion value, lead quality, and efficiency."
    },
    {
      icon: Gauge,
      title: "Tracking Quality",
      value: "Clean events",
      copy: "Pixels, tags, conversion values, and CRM signals help us optimize toward real outcomes."
    },
    {
      icon: ChartColumn,
      title: "Scale Decisions",
      value: "ROAS first",
      copy: "Winning campaigns get more budget only when the data supports profitable acquisition."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mb-12 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Performance Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4vw, 58px)"
            },
            children: "PPC works best when media, tracking, and landing pages move together"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: "Each part of the paid growth system is built to protect budget, improve conversion quality, and scale only when performance is clear." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid gap-6 md:grid-cols-3", children: cards.map((card, index) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            whileHover: { y: -8 },
            viewport: { once: true, amount: 0.28 },
            transition: { duration: 0.55, delay: index * 0.08, ease: "easeOut" },
            className: "group/card min-h-[340px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 shadow-[0_18px_48px_-30px_rgba(29,39,66,0.36)] transition-all duration-300 ease-out hover:rounded-tr-[48px] hover:rounded-br-[48px] hover:border-[#4C1688] hover:bg-[#4C1688] hover:shadow-[0_26px_68px_-28px_rgba(76,22,136,0.62)] lg:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: card.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: card.copy })
            ]
          },
          card.title
        );
      }) })
    ] })
  ] });
}
function PpcServicePage() {
  const [openService, setOpenService] = reactExports.useState(null);
  const [openProcess, setOpenProcess] = reactExports.useState(null);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcProofBand, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcCapabilities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcChannelDepth, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcPerformanceStack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcWhySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: ppcServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: processItems$1.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PpcIndustries, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: faqs$2.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const Route$g = createFileRoute("/service/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design Services | Hegxcorp" },
      {
        name: "description",
        content: "Graphic design services by Hegxcorp including social media creatives, ad creatives, brochures, pitch decks, brand collateral, campaign visuals, packaging direction, and marketing design systems."
      }
    ]
  }),
  component: GraphicDesignPage
});
const graphicCapabilities = [
  {
    icon: Image,
    title: "Social Media Creatives",
    tag: "Daily Visibility",
    hook: "Create scroll-stopping posts that still feel on-brand.",
    description: "We design social media posts, carousels, stories, profile banners, reel covers, launch posts, and reusable templates that help your brand stay active with visual consistency.",
    pills: ["Posts", "Carousels", "Stories", "Templates"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
    visual: "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.7), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.1), rgba(6,19,61,0.44))"
  },
  {
    icon: Megaphone,
    title: "Ad Creative Design",
    tag: "Campaign Assets",
    hook: "Turn offers into clear visual ads people can act on.",
    description: "We design static ads, carousel ads, offer graphics, retargeting visuals, lead magnet creatives, and campaign variants for Meta, Google Display, LinkedIn, and landing-page funnels.",
    pills: ["Meta ads", "Display ads", "Variants", "Offers"],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=75",
    visual: "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: FileText,
    title: "Brochures & Collateral",
    tag: "Sales Support",
    hook: "Make your services, offers, and proof easier to explain.",
    description: "We create brochures, flyers, one-pagers, company profiles, proposal covers, rate cards, event handouts, and printable assets that support real sales conversations.",
    pills: ["Brochures", "Flyers", "Profiles", "One-pagers"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=75",
    visual: "radial-gradient(circle at 22% 20%, rgba(252,156,68,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.4))"
  },
  {
    icon: Presentation,
    title: "Pitch Deck Design",
    tag: "Investor & Sales Decks",
    hook: "Package your story into polished slides that feel premium.",
    description: "We design pitch decks, sales decks, capability presentations, case study slides, report layouts, and visual storytelling systems that help teams present with confidence.",
    pills: ["Pitch decks", "Sales decks", "Reports", "Case studies"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=75",
    visual: "radial-gradient(circle at 72% 24%, rgba(252,156,68,0.64), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.04), rgba(6,19,61,0.46))"
  },
  {
    icon: Palette,
    title: "Brand Collateral",
    tag: "Identity Extension",
    hook: "Carry your visual identity into every everyday asset.",
    description: "We extend your brand into business cards, letterheads, email signatures, certificates, folders, templates, icons, stationery, and internal communication graphics.",
    pills: ["Stationery", "Templates", "Icons", "Documents"],
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=900&q=75",
    visual: "radial-gradient(circle at 20% 28%, rgba(252,156,68,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: Clapperboard,
    title: "Campaign Visual Systems",
    tag: "Creative Direction",
    hook: "Build a visual world for launches, offers, and events.",
    description: "We create campaign key visuals, launch graphics, event creatives, festive assets, sale campaigns, banner families, and creative rules so every campaign feels connected.",
    pills: ["Launches", "Events", "Banners", "Key visuals"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=75",
    visual: "radial-gradient(circle at 76% 20%, rgba(255,212,170,0.62), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))"
  }
];
const graphicServiceTracks = [
  {
    icon: Image,
    title: "Social Media Creative Design",
    copy: "Daily posts, carousel systems, stories, reel covers, launch posts, profile banners, and campaign templates designed so your social presence looks active, premium, and consistent.",
    points: ["Posts", "Carousels", "Stories", "Templates"]
  },
  {
    icon: Megaphone,
    title: "Paid Ad Creative Design",
    copy: "Static ads, offer creatives, carousel ads, retargeting visuals, lead magnet graphics, and A/B creative variants built around message clarity and campaign action.",
    points: ["Meta ads", "Google Display", "LinkedIn", "Variants"]
  },
  {
    icon: FileText,
    title: "Brochures, Flyers & One-Pagers",
    copy: "Sales-ready collateral for services, offers, products, events, company profiles, rate cards, handouts, and printable marketing assets that explain value quickly.",
    points: ["Brochures", "Flyers", "Profiles", "One-pagers"]
  },
  {
    icon: Presentation,
    title: "Pitch Deck & Presentation Design",
    copy: "Investor decks, sales presentations, proposal decks, case study slides, reports, training decks, and visual storytelling systems for stronger business conversations.",
    points: ["Pitch decks", "Sales decks", "Reports", "Case studies"]
  },
  {
    icon: Palette,
    title: "Brand Collateral & Identity Assets",
    copy: "Business cards, letterheads, email signatures, certificates, folders, stationery, icon sets, brand templates, and internal documents that keep your identity consistent.",
    points: ["Stationery", "Icons", "Documents", "Templates"]
  },
  {
    icon: Clapperboard,
    title: "Campaign Visual Systems",
    copy: "Key visuals, launch graphics, festive campaigns, event assets, offer banners, announcement kits, and format families that make every campaign feel connected.",
    points: ["Key visuals", "Launches", "Events", "Banners"]
  },
  {
    icon: LayoutTemplate,
    title: "Reusable Design Templates",
    copy: "Editable visual systems for social, ads, presentations, sales assets, and internal communication so your team can move faster without losing brand quality.",
    points: ["Editable files", "Layouts", "Rules", "Handoff"]
  },
  {
    icon: Camera,
    title: "Website, Email & Digital Graphics",
    copy: "Hero graphics, section visuals, email headers, blog graphics, landing page assets, thumbnails, banners, and digital campaign visuals for stronger online presentation.",
    points: ["Hero assets", "Email headers", "Banners", "Thumbnails"]
  }
];
const graphicValuePoints = [
  "Consistent design makes every touchpoint feel like one brand instead of scattered one-off creatives.",
  "Reusable templates reduce turnaround time for social posts, ads, decks, campaign graphics, and sales assets.",
  "Better hierarchy helps people understand the offer faster, especially in ads, carousels, brochures, and pitch decks.",
  "Creative variants give campaigns more room to test hooks, CTAs, formats, and visual directions without starting from zero."
];
const graphicGrowthStack = [
  {
    icon: Target,
    label: "Creative Direction",
    title: "Design With a Clear Communication Goal",
    copy: "We define what each asset needs to communicate, who it is for, where it will be used, and which action it should support before visuals are created.",
    detailTitle: "The brief behind every visual",
    detailCopy: "Creative direction keeps design from becoming random decoration. It aligns message, format, audience, offer, hierarchy, and brand tone.",
    detailPoints: ["Audience context", "Message hierarchy", "Channel purpose"]
  },
  {
    icon: Brush,
    label: "Visual System",
    title: "Create Assets That Feel Connected",
    copy: "Social posts, ads, brochures, decks, and banners are built from shared visual rules so every touchpoint feels like the same brand.",
    detailTitle: "Consistency across daily marketing",
    detailCopy: "We use typography, color, spacing, image treatment, layout rhythm, and component patterns to make creative output faster and more recognizable.",
    detailPoints: ["Reusable templates", "Brand styling", "Format families"]
  },
  {
    icon: ChartColumn,
    label: "Creative Learning",
    title: "Improve What Gets Seen, Saved, and Clicked",
    copy: "Campaign and social performance signals help us refine layouts, hooks, formats, CTAs, and visual directions for the next creative cycle.",
    detailTitle: "Design that keeps getting sharper",
    detailCopy: "We learn from engagement, ad performance, sales feedback, content usage, and team needs so future assets are easier to produce and more useful.",
    detailPoints: ["Creative variants", "CTA testing", "Format improvements"]
  }
];
const faqs$1 = [
  {
    question: "What are graphic design services?",
    answer: "Graphic design services help businesses create visual assets for marketing, sales, social media, ads, print, presentations, campaigns, and brand communication."
  },
  {
    question: "Do you design social media creatives?",
    answer: "Yes. We design posts, carousels, stories, reel covers, campaign creatives, launch posts, profile banners, and reusable social media templates."
  },
  {
    question: "Can you design ads for Meta, Google, and LinkedIn?",
    answer: "Yes. We can create ad creative families with different formats, messages, CTAs, offer angles, and platform sizes for paid campaign testing."
  },
  {
    question: "Do you create brochures and pitch decks?",
    answer: "Yes. We design brochures, company profiles, pitch decks, sales decks, one-pagers, case study decks, and proposal visuals for business communication."
  },
  {
    question: "Can you match our existing brand style?",
    answer: "Yes. We can follow your existing guidelines or help clean up inconsistent visual usage so new assets look more professional and connected."
  },
  {
    question: "Can you create reusable graphic templates?",
    answer: "Yes. We can design editable templates for social media, ads, presentations, documents, banners, and campaign assets so your team can produce future creatives faster."
  },
  {
    question: "Do you provide print-ready and digital files?",
    answer: "Yes. We can prepare files for digital use, social platforms, ads, presentations, and print production, including size adaptations and export formats based on your needs."
  },
  {
    question: "Can graphic design improve ad and social performance?",
    answer: "Good design can improve clarity, trust, readability, CTA visibility, and format fit. We create visual variants so campaigns and content have stronger creative options to test."
  }
];
function GraphicServiceDepth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Graphic Design Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.8vw, 66px)"
          },
          children: "Creative assets for every place your brand needs to look sharp"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp builds graphic design as a usable creative system, not just single files. Your social posts, ads, brochures, decks, templates, campaign visuals, and digital graphics should all carry the same level of clarity and brand confidence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: graphicServiceTracks.map((track, index) => {
      const Icon = track.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#06133D]", children: track.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-[#5F6B7A]", children: track.copy })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: track.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#536083]",
                children: point
              },
              point
            )) })
          ]
        },
        track.title
      );
    }) })
  ] }) });
}
function GraphicValueSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Design That Compounds" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.6vw, 62px)"
          },
          children: "Strong graphic design makes marketing easier to recognize, reuse, and improve"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-8 text-white/72", children: "A good creative system helps your team publish faster, run better campaigns, and keep visual quality consistent across every sales and marketing touchpoint." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: graphicValuePoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 border border-white/12 bg-white/[0.06] p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-7 text-white/78", children: point })
    ] }, point)) })
  ] }) });
}
function GraphicDesignPage() {
  const [activeCapability, setActiveCapability] = reactExports.useState(0);
  const [openService, setOpenService] = reactExports.useState(null);
  const [openProcess, setOpenProcess] = reactExports.useState(null);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const activeItem = graphicCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "52px 52px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Graphic Design Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Visual Design",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[#FC9C44]", children: "That Sells the Story" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-7 max-w-2xl text-white/72",
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.25vw, 19px)",
                      lineHeight: 1.75
                    },
                    children: "Create premium marketing graphics, social creatives, ad visuals, brochures, decks, and campaign assets that make your brand easier to notice, understand, and trust."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Plan My Creative Assets"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/case-studies",
                      className: "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12",
                      children: "View Results"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Creative Production Console" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Visual Asset System" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Creative Formats", "18+"],
                  ["Asset Variants", "4x"],
                  ["Brand Consistency", "94"],
                  ["Turnaround Flow", "Fast"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `mt-3 text-3xl font-black ${index === 1 ? "text-[#FC9C44]" : "text-white"}`,
                          children: value
                        }
                      )
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/52", children: "Monthly Design Mix" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "Ready" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: [
                    ["Social creatives", "82%"],
                    ["Ad variants", "68%"],
                    ["Sales collateral", "56%"]
                  ].map(([label, width]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: width })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]",
                        style: { width }
                      }
                    ) })
                  ] }, label)) })
                ] })
              ] }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-eyebrow", children: "Graphic Design Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "seo-split-heading", children: "Complete creative systems for marketing, sales, and brand recall" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each design layer helps your brand show up clearly across social, ads, presentations, print, and campaigns." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-service-list", children: graphicCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "seo-capability-slide",
            initial: { opacity: 0, x: 24, scale: 0.98 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: -18, scale: 0.98 },
            transition: { duration: 0.5, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicServiceDepth, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "Creative Growth Stack",
          title: "Graphic design works best when direction, assets, and learning move together",
          description: "Each layer of your creative system should make the next one stronger, from clear communication goals to consistent design output and better campaign performance.",
          cards: graphicGrowthStack
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicValueSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: faqs$1.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      "return (",
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) }),
      ");"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$7 = () => import("./service.e-comm-DPvJccEb.mjs");
const Route$f = createFileRoute("/service/e-comm")({
  head: () => ({
    meta: [{
      title: "E-Commerce Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "E-commerce development services by Hegxcorp including online store design, product pages, cart, checkout, payment integration, WooCommerce, Shopify, performance optimisation, and ecommerce maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const Route$e = createFileRoute("/service/content-marketing")({
  head: () => ({
    meta: [
      { title: "Content Marketing Services | Hegxcorp" },
      {
        name: "description",
        content: "Content marketing services by Hegxcorp including content strategy, SEO blogs, website copywriting, content calendars, social media content, email content, brand storytelling, thought leadership, and performance optimization."
      }
    ]
  }),
  component: ContentMarketingPage
});
const contentCapabilities = [
  {
    icon: BookOpen,
    title: "Content Strategy",
    tag: "Editorial Direction",
    hook: "Plan content around the questions your buyers already ask.",
    description: "We plan content around your audience, business goals, search demand, and conversion journey.",
    pills: ["Audience", "Topics", "Funnels", "Keywords"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=75",
    visual: "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  },
  {
    icon: FileText,
    title: "SEO Blog Writing",
    tag: "Organic Reach",
    hook: "Publish articles that earn attention and search demand.",
    description: "Search-friendly articles built to attract qualified traffic and answer real customer questions.",
    pills: ["Blogs", "Briefs", "Search intent", "Clusters"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=75",
    visual: "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.6), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.44))"
  },
  {
    icon: PenTool,
    title: "Website Copywriting",
    tag: "Conversion Copy",
    hook: "Turn service and landing pages into clearer buying paths.",
    description: "Clear, persuasive website content for landing pages, service pages, product pages, and product descriptions.",
    pills: ["Landing pages", "Service pages", "Offers", "CTAs"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=75",
    visual: "radial-gradient(circle at 20% 26%, rgba(252,156,68,0.58), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.42))"
  },
  {
    icon: MessageSquareText,
    title: "Social Media Content",
    tag: "Platform Voice",
    hook: "Keep your brand active with ideas people can respond to.",
    description: "Platform-ready captions, ideas, and messaging that keep your brand active and consistent.",
    pills: ["Captions", "Post ideas", "Campaigns", "Messaging"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
    visual: "radial-gradient(circle at 74% 24%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))"
  },
  {
    icon: Mail,
    title: "Email Content",
    tag: "Retention",
    hook: "Nurture prospects and customers with useful messages.",
    description: "Newsletters, nurture emails, launch campaigns, and retention content written to drive action.",
    pills: ["Newsletters", "Nurture", "Launches", "Retention"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=75",
    visual: "radial-gradient(circle at 18% 20%, rgba(255,212,170,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.44))"
  },
  {
    icon: CalendarDays,
    title: "Brand Storytelling",
    tag: "Brand Memory",
    hook: "Make your expertise easier to understand and remember.",
    description: "Messaging that communicates your value, personality, expertise, and trust in a memorable way.",
    pills: ["Voice", "Narrative", "Trust", "Positioning"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=75",
    visual: "radial-gradient(circle at 78% 18%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))"
  }
];
const highlightedServices = [
  {
    title: "Content Strategy",
    answer: "We build a clear content direction based on audience research, search demand, funnel stages, brand voice, competitors, offers, content gaps, publishing capacity, and conversion goals."
  },
  {
    title: "SEO Blog Writing",
    answer: "We write optimized blog content that answers real customer questions, targets search intent, supports topic clusters, strengthens internal linking, and improves long-term organic visibility."
  },
  {
    title: "Website Copywriting",
    answer: "We create clear, persuasive website copy for service pages, landing pages, product pages, comparison sections, FAQs, trust blocks, offers, and conversion-focused user journeys."
  },
  {
    title: "Content Marketing",
    answer: "We combine strategy, writing, SEO, design direction, publishing guidance, repurposing, and performance reviews to help your brand attract, educate, nurture, and convert the right audience."
  },
  {
    title: "Social Media Content",
    answer: "We prepare platform-ready captions, post ideas, carousel outlines, reel hooks, founder-led posts, campaign themes, and messaging that keep your brand consistent across channels."
  },
  {
    title: "Email Content",
    answer: "We write newsletters, nurture sequences, promotional emails, launch emails, lead magnet follow-ups, customer education emails, and retention messages designed to encourage action."
  }
];
const contentStepScrollerSteps = [
  {
    icon: BookOpen,
    label: "01 Strategy",
    title: "Map the message before writing",
    copy: "We study your audience, search demand, buyer questions, brand voice, competitors, and conversion goals before a single content asset is planned.",
    points: ["Audience insight", "Keyword direction", "Content pillars"]
  },
  {
    icon: PenTool,
    label: "02 Creation",
    title: "Build content that earns attention",
    copy: "Blogs, landing pages, website copy, social content, email sequences, and campaign messaging are created with structure, clarity, and intent.",
    points: ["SEO briefs", "Conversion copy", "Platform-ready assets"]
  },
  {
    icon: CalendarDays,
    label: "03 Optimization",
    title: "Publish, measure, and compound",
    copy: "We refine content using performance signals, readability, internal linking, publishing rhythm, engagement data, and conversion opportunities.",
    points: ["Content calendar", "Performance review", "Continuous improvement"]
  }
];
const processItems = [
  {
    title: "Audience, Offer & Search Research",
    answer: "We study your brand, audience, competitors, offers, current content, keyword demand, sales conversations, objections, and business goals to find the content opportunities worth building first."
  },
  {
    title: "Messaging & Content Strategy",
    answer: "We create a content plan with topics, formats, channels, keywords, messaging direction, conversion goals, repurposing paths, publishing priorities, and measurement signals."
  },
  {
    title: "Writing, Editing & Creative Direction",
    answer: "We write useful, polished, on-brand content for your website, blog, social media, email, and campaigns, then refine structure, tone, proof, CTAs, and readability before publishing."
  },
  {
    title: "SEO, Conversion & Repurposing",
    answer: "We refine content for SEO, readability, structure, internal linking, engagement, conversion opportunities, social snippets, email reuse, and campaign alignment."
  },
  {
    title: "Performance Review & Content Refresh",
    answer: "We review rankings, engagement, traffic quality, leads, assisted conversions, content decay, and audience response, then improve weak assets and expand the content system."
  },
  {
    title: "Brand Storytelling",
    answer: "We shape your messaging so your brand communicates value, trust, personality, proof, differentiation, founder perspective, and expertise in a memorable way."
  }
];
const contentProofMetrics = [
  {
    value: "10+",
    label: "Content formats",
    copy: "Blogs, service pages, emails, social posts, landing pages, FAQs, case studies, and campaign assets."
  },
  {
    value: "3x",
    label: "Repurposing logic",
    copy: "Core ideas are planned so they can support SEO, social, email, sales, and paid campaigns."
  },
  {
    value: "90-day",
    label: "Editorial roadmap",
    copy: "Priority topics, owners, publishing cadence, optimization tasks, and refresh cycles are mapped clearly."
  },
  {
    value: "Intent",
    label: "Conversion lens",
    copy: "Every asset is connected to awareness, education, comparison, trust, or action."
  }
];
function ContentProofBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: contentProofMetrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45 },
      className: "border border-[#E5E7EB] bg-white p-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
      ]
    },
    metric.label
  )) }) });
}
const contentFormats = [
  {
    icon: Search,
    title: "SEO Topic Clusters",
    copy: "Keyword-led blog clusters, pillar pages, FAQs, and internal links that help your site build authority around important subjects.",
    points: ["Pillar pages", "Blog clusters", "FAQs", "Internal links"]
  },
  {
    icon: PenTool,
    title: "Website & Landing Page Copy",
    copy: "Service pages, landing pages, offer pages, product descriptions, comparison sections, and CTA copy built for clarity and conversion.",
    points: ["Service pages", "Landing pages", "Offers", "CTAs"]
  },
  {
    icon: MessageSquareText,
    title: "Social Media Content",
    copy: "Carousels, captions, reels hooks, founder posts, campaign ideas, and platform-specific messaging that keep the brand active.",
    points: ["Captions", "Carousels", "Reels", "Founder posts"]
  },
  {
    icon: Mail,
    title: "Email & Nurture Content",
    copy: "Newsletters, nurture sequences, promotional emails, product education, onboarding notes, and retention messages.",
    points: ["Newsletters", "Nurture", "Launches", "Retention"]
  },
  {
    icon: BookOpen,
    title: "Thought Leadership",
    copy: "Expert POVs, founder articles, LinkedIn pieces, industry explainers, and trust-building content that makes expertise visible.",
    points: ["POV posts", "Founder voice", "Guides", "Expertise"]
  },
  {
    icon: Layers,
    title: "Sales Enablement Content",
    copy: "Case studies, pitch copy, objection-handling assets, one-pagers, comparison content, and lead magnets that support sales teams.",
    points: ["Case studies", "One-pagers", "Lead magnets", "Comparisons"]
  }
];
function ContentFormatDepth() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Content Marketing Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.8vw, 66px)"
          },
          children: "Content formats built for search, social, email, and sales"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp plans content as a connected system. One strong idea can become a ranking page, a blog, a social post, an email, a sales asset, and a campaign message when the strategy is clear." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: contentFormats.map((format, index) => {
      const Icon = format.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#06133D]", children: format.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: format.copy }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: format.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#536083]",
                children: point
              },
              point
            )) })
          ]
        },
        format.title
      );
    }) })
  ] }) });
}
const contentWhyCards = [
  {
    icon: Target,
    title: "Strategy before writing",
    copy: "We define audience intent, content pillars, funnel stage, keyword role, distribution use, and conversion goal before creating assets."
  },
  {
    icon: ShieldCheck,
    title: "Clear, useful, trust-led copy",
    copy: "Content is written to help the reader understand, compare, trust, and act, not just to fill a publishing calendar."
  },
  {
    icon: ChartColumn,
    title: "Performance review loop",
    copy: "We review rankings, clicks, engagement, assisted conversions, lead quality, and decay so content keeps improving."
  },
  {
    icon: Users,
    title: "Built for real buyers",
    copy: "Messaging reflects objections, customer questions, decision criteria, proof points, and the practical language your buyers use."
  }
];
function ContentWhySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Why Hegxcorp Content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 60px)"
            },
            children: "Content that teaches, ranks, and moves people closer to action"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.75)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-8 text-white/72", children: "Good content is not just writing. It is research, structure, positioning, search intent, proof, publishing rhythm, repurposing, and continuous improvement working together so every piece has a clear job in the customer journey." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-3", children: ["Search intent", "Buyer questions", "Content reuse"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-black text-white/86",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: contentWhyCards.map((card) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "border border-white/12 bg-white/[0.06] p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 21, strokeWidth: 1.9 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-white", children: card.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-white/72", children: card.copy })
      ] }, card.title);
    }) })
  ] }) });
}
const contentIndustries = [
  {
    title: "B2B & SaaS",
    copy: "Thought leadership, comparison pages, solution pages, onboarding content, and lead magnets for complex buying journeys."
  },
  {
    title: "Ecommerce & D2C",
    copy: "Category copy, buying guides, product education, email campaigns, social content, and seasonal campaign messaging."
  },
  {
    title: "Healthcare & Education",
    copy: "Trust-led service pages, FAQs, appointment or enrollment content, patient or student guides, and local SEO content."
  },
  {
    title: "Local & Professional Services",
    copy: "Service pages, city pages, case studies, review-led content, FAQs, and practical guides that support enquiries."
  }
];
function ContentIndustries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Content Use Cases" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-black leading-tight text-[#06133D]",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.4vw, 60px)"
          },
          children: "Editorial planning shaped around your audience and sales cycle"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4", children: contentIndustries.map((industry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white p-7 transition hover:bg-[#FAFAF8]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-[#06133D]", children: industry.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: industry.copy })
    ] }, industry.title)) })
  ] }) });
}
function ContentStepScroller() {
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const activeItem = contentStepScrollerSteps[activeStep];
  const ActiveIcon = activeItem.icon;
  const setStepFromControl = (index) => {
    if (index === activeStep) return;
    setActiveStep(index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Content Growth Steps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4vw, 58px)"
            },
            children: "Content marketing grows when every step feeds the next one"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: "Click a step to move through the content. Each step opens with a smooth top-down transition." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] bg-[#06133D] p-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: [
            "Step ",
            String(activeStep + 1).padStart(2, "0"),
            " /",
            " ",
            String(contentStepScrollerSteps.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-3xl font-black leading-tight", children: activeItem.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-7 text-white/64", children: activeItem.copy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: contentStepScrollerSteps.map((step, index) => {
            const isActive = index === activeStep;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStepFromControl(index),
                className: `flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${isActive ? "border-[#FC9C44] bg-[#FC9C44] text-white" : "border-white/10 bg-white/[0.05] text-white/58 hover:border-white/24 hover:bg-white/[0.08]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `h-2.5 w-2.5 rounded-full ${isActive ? "bg-white" : "bg-white/28"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.12em]", children: step.label })
                ]
              },
              step.label
            );
          }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-[430px] overflow-hidden rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: -56, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 36, scale: 0.98 },
            transition: {
              type: "spring",
              stiffness: 130,
              damping: 18,
              mass: 0.75
            },
            className: "group/card min-h-[390px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 transition-all duration-300 hover:rounded-tr-[56px] hover:rounded-br-[56px] hover:border-[#4C1688] hover:bg-[#4C1688] sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { size: 23, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: activeItem.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 max-w-2xl text-4xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: activeItem.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: activeItem.copy }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: activeItem.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-[#DFE3EA] bg-[#F7F8FB] px-4 py-2 text-center text-xs font-bold text-[#06133D] transition-colors duration-300 group-hover/card:border-white/24 group-hover/card:bg-white/10 group-hover/card:text-white",
                  children: point
                },
                point
              )) })
            ]
          },
          activeItem.title
        ) }) })
      ] })
    ] })
  ] });
}
const faqs = [
  {
    question: "What are content marketing services?",
    answer: "Content marketing services help businesses plan, create, optimize, publish, repurpose, and improve content that attracts the right audience, builds trust, supports SEO, and helps conversions."
  },
  {
    question: "Why does my business need content marketing?",
    answer: "Content marketing helps your business show up before customers are ready to buy. It improves visibility, educates your audience, answers objections, supports sales, and makes your brand easier to trust."
  },
  {
    question: "How long does content marketing take to show results?",
    answer: "Some content can support campaigns immediately, especially landing pages, emails, and social content. SEO-driven content usually takes 3 to 6 months to show stronger organic results."
  },
  {
    question: "What is included in content marketing services?",
    answer: "Content marketing can include strategy, blog writing, website copy, SEO content, social media content, email content, content calendars, thought leadership, case studies, lead magnets, and performance improvement."
  },
  {
    question: "Can you create SEO content for my website?",
    answer: "Yes. We can plan and write SEO blogs, service pages, location pages, FAQs, comparison content, buying guides, and topic clusters based on keyword research and buyer intent."
  },
  {
    question: "Do you help with content calendars?",
    answer: "Yes. We can prepare monthly or quarterly calendars with topics, formats, keywords, publishing dates, channels, campaign notes, repurposing ideas, and review dates."
  },
  {
    question: "Can content marketing support social media?",
    answer: "Yes. A strong content strategy can turn website topics, guides, case studies, and campaign messages into captions, carousels, founder posts, reels hooks, newsletters, and paid ad angles."
  },
  {
    question: "How do you measure content performance?",
    answer: "We review rankings, impressions, clicks, organic traffic, engagement, scroll behavior, leads, assisted conversions, internal link performance, content decay, and audience response."
  }
];
function ContentMarketingPage() {
  const [activeCapability, setActiveCapability] = reactExports.useState(0);
  const [openService, setOpenService] = reactExports.useState(null);
  const [openProcess, setOpenProcess] = reactExports.useState(null);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const activeItem = contentCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "52px 52px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Content Marketing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Content That",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[#FC9C44]", children: "Compounds Trust" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-7 max-w-2xl text-white/72",
                    style: {
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(16px, 1.25vw, 19px)",
                      lineHeight: 1.75
                    },
                    children: "Build trust, improve visibility, and turn ideas into strategic content that attracts, educates, and converts your ideal customers."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Build My Content Plan"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/case-studies",
                      className: "inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12",
                      children: "View Results"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Editorial Growth Engine" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Content Performance Map" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Organic Lift", "+214%"],
                  ["Lead Pages", "38"],
                  ["Content ROI", "4.2x"],
                  ["Brief Quality", "96"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `mt-3 text-3xl font-black ${index === 2 ? "text-[#FC9C44]" : "text-white"}`,
                          children: value
                        }
                      )
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/52", children: "Pipeline Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "Active" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: [
                    ["Strategy", "Complete"],
                    ["SEO Briefs", "In Review"],
                    ["Publishing", "Scheduled"]
                  ].map(([label, status]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-white/80", children: label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#FC9C44]/16 px-3 py-1 text-xs font-bold text-[#FC9C44]", children: status })
                      ]
                    },
                    label
                  )) })
                ] })
              ] }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContentProofBand, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-eyebrow", children: "Content Marketing Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "seo-split-heading", children: "Content built for visibility, trust, and conversion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the content system answers questions, strengthens brand voice, and moves buyers closer to choosing you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-service-list", children: contentCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.article,
          {
            initial: { y: -42, opacity: 1 },
            animate: { y: 0, opacity: 1 },
            transition: {
              duration: 0.24,
              ease: [0.16, 1, 0.3, 1]
            },
            className: "group/card min-h-[390px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 transition-all duration-200 hover:rounded-tr-[56px] hover:rounded-br-[56px] hover:border-[#4C1688] hover:bg-[#4C1688] sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContentFormatDepth, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContentStepScroller, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContentWhySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: highlightedServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: processItems.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContentIndustries, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./service.branding-BasIZrXa.mjs");
const Route$d = createFileRoute("/service/branding")({
  head: () => ({
    meta: [{
      title: "Branding & Identity Design Services | Hegxcorp"
    }, {
      name: "description",
      content: "Branding and identity design services by Hegxcorp including brand strategy, logo systems, visual identity, messaging, design systems, brand guidelines, collateral, and launch-ready creative assets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./case-studies._slug-d1TfvBrC.mjs");
const Route$c = createFileRoute("/case-studies/$slug")({
  loader: ({
    params
  }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) {
      throw notFound();
    }
    return {
      study
    };
  },
  head: ({
    params
  }) => {
    const study = getCaseStudyBySlug(params.slug);
    const title = study ? `${study.seoTitle} | Hegxcorp Case Study` : "Case Study | Hegxcorp";
    const description = study ? study.seoDescription : "Detailed case history of performance growth, organic search architectures, and digital scaling engineered by Hegxcorp.";
    const currentUrl = `https://hegxcorp.com/case-studies/${params.slug}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: currentUrl
      }, {
        property: "og:image",
        content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "twitter:image",
        content: "https://hegxcorp.com/favicon/apple-touch-icon.png"
      }],
      links: [{
        rel: "canonical",
        href: currentUrl
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./blog._slug-OY6zBbWu.mjs");
const Route$b = createFileRoute("/blog/$slug")({
  // Loader can be async — TanStack Router waits for it before rendering,
  // so this is the right place to hit the database (unlike head/component
  // below, which need the already-resolved loaderData).
  loader: async ({
    params
  }) => {
    const article = await getPublishedBlogBySlug(params.slug);
    if (!article) {
      throw notFound();
    }
    return {
      article
    };
  },
  head: ({
    params,
    loaderData
  }) => {
    const article = loaderData?.article;
    const title = article ? article.seoTitle : "Insights | Hegxcorp";
    const description = article ? article.seoDescription : "In-depth growth breakdowns and strategic frameworks from Hegxcorp.";
    const currentUrl = `https://hegxcorp.com/blog/${params.slug}`;
    const ogImage = article ? article.featuredImage : "https://hegxcorp.com/og-default.jpg";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: currentUrl
      }, {
        property: "og:image",
        content: ogImage
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "twitter:image",
        content: ogImage
      }],
      links: [{
        rel: "canonical",
        href: currentUrl
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const Route$a = createFileRoute("/api/growth-audit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body." }, { status: 400 });
        }
        const parsed = growthAuditInquiryInputSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            {
              error: "Validation failed.",
              fields: parsed.error.flatten().fieldErrors
            },
            { status: 400 }
          );
        }
        const { createGrowthAuditInquiry } = await import("./growth-audit-inquiries.server-BUQzPva7.mjs");
        const inquiry = await createGrowthAuditInquiry(parsed.data);
        return Response.json(
          {
            message: "Growth audit inquiry created.",
            inquiry
          },
          { status: 201 }
        );
      }
    }
  }
});
const Route$9 = createFileRoute("/admin/growth-leads")({
  head: () => ({
    meta: [
      { title: "Growth Audit Leads | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: GrowthLeadsPage
});
const leadsPerPage$1 = 10;
const statusStyles$2 = {
  NEW: "bg-[#FFF4E8] text-[#C96A13]",
  INPROGRESS: "bg-[#EAF2FF] text-[#2359B8]",
  CLOSED: "bg-[#F2F4F7] text-[#475467]"
};
function formatStatus$1(status) {
  if (status === "INPROGRESS") return "In Progress";
  return status.toLowerCase().split("_").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
}
function formatDate$3(value) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(value)
  );
}
function getLeadSourceLabel$1(lead) {
  const source = lead.leadSource?.trim() || "Untracked";
  const campaign = lead.leadCampaign?.trim();
  const ad = lead.leadAd?.trim();
  if (campaign && ad) return `${source} / ${campaign} / ${ad}`;
  if (campaign) return `${source} / ${campaign}`;
  return source;
}
function GrowthLeadsPage() {
  const { growthAuditInquiries, isLoading, error, updatingId, handleGrowthAuditStatusChange } = useAdminContext();
  const [activeStatusFilter, setActiveStatusFilter] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const filtered = activeStatusFilter ? growthAuditInquiries.filter((i) => i.status === activeStatusFilter) : growthAuditInquiries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / leadsPerPage$1));
  const currentPage = Math.min(page, totalPages);
  const firstVisible = filtered.length ? (currentPage - 1) * leadsPerPage$1 + 1 : 0;
  const lastVisible = Math.min(currentPage * leadsPerPage$1, filtered.length);
  const paginated = filtered.slice((currentPage - 1) * leadsPerPage$1, currentPage * leadsPerPage$1);
  const stats = reactExports.useMemo(
    () => inquiryStatuses.map((status) => ({
      status,
      count: growthAuditInquiries.filter((i) => i.status === status).length
    })),
    [growthAuditInquiries]
  );
  function toggleFilter(status) {
    setActiveStatusFilter((current) => current === status ? null : status);
    setPage(1);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setActiveStatusFilter(null);
            setPage(1);
          },
          "aria-pressed": activeStatusFilter === null,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === null ? "border-[#06133D] bg-[#06133D] text-white shadow-md" : "border-[#E4E7EC] bg-white text-[#101828]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`,
                children: "All Leads"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`,
                children: growthAuditInquiries.length
              }
            )
          ]
        }
      ),
      stats.map(({ status, count }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => toggleFilter(status),
          "aria-pressed": activeStatusFilter === status,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""} ${status === "NEW" ? "border-[#FED7AA] bg-[#FFF7ED]" : status === "INPROGRESS" ? "border-[#B9D3FF] bg-[#EAF2FF]" : "border-[#D0D5DD] bg-[#F2F4F7]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#667085]", children: formatStatus$1(status) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: count })
          ]
        },
        status
      ))
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Growth Audit Form submissions" }),
          activeStatusFilter && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]", children: formatStatus$1(activeStatusFilter) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading leads..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: activeStatusFilter ? `No ${formatStatus$1(activeStatusFilter).toLowerCase()} leads found` : "No leads saved yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: activeStatusFilter ? "Choose another status box to review a different lead group." : "New growth audit requests will appear here after the free audit form saves them to the database." })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[1060px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Website" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Ad Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Revenue Range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Growth Goal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginated.map((inquiry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-[#06133D]", children: inquiry.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${inquiry.email}`,
                className: "mt-2 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                  inquiry.email
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4" }),
              formatDate$3(inquiry.createdAt)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: inquiry.website,
              target: "_blank",
              rel: "noreferrer",
              className: "block max-w-[240px] truncate text-sm font-semibold text-[#FC9C44] hover:underline",
              children: inquiry.website
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]", children: inquiry.leadSource ?? "Untracked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[240px] truncate", children: getLeadSourceLabel$1(inquiry) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.revenueRange }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[280px] text-sm leading-6 text-[#344054]", children: inquiry.goal }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles$2[inquiry.status]}`,
                children: formatStatus$1(inquiry.status)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: inquiry.status,
                disabled: updatingId === inquiry.id,
                onChange: (e) => void handleGrowthAuditStatusChange(
                  inquiry.id,
                  e.target.value
                ),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60",
                children: inquiryStatuses.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: formatStatus$1(status) }, status))
              }
            )
          ] }) })
        ] }, inquiry.id)) })
      ] }) }),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              disabled: currentPage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              disabled: currentPage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Route$8 = createFileRoute("/admin/contact-leads")({
  head: () => ({
    meta: [
      { title: "Contact Leads | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: ContactLeadsPage
});
const leadsPerPage = 10;
const statusStyles$1 = {
  NEW: "bg-[#FFF4E8] text-[#C96A13]",
  INPROGRESS: "bg-[#EAF2FF] text-[#2359B8]",
  CLOSED: "bg-[#F2F4F7] text-[#475467]"
};
function formatStatus(status) {
  if (status === "INPROGRESS") return "In Progress";
  return status.toLowerCase().split("_").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
}
function formatDate$2(value) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(value)
  );
}
function getLeadSourceLabel(lead) {
  const source = lead.leadSource?.trim() || "Untracked";
  const campaign = lead.leadCampaign?.trim();
  const ad = lead.leadAd?.trim();
  if (campaign && ad) return `${source} / ${campaign} / ${ad}`;
  if (campaign) return `${source} / ${campaign}`;
  return source;
}
function ContactLeadsPage() {
  const { inquiries, isLoading, error, updatingId, handleStatusChange } = useAdminContext();
  const [activeStatusFilter, setActiveStatusFilter] = reactExports.useState(null);
  const [page, setPage] = reactExports.useState(1);
  const filtered = activeStatusFilter ? inquiries.filter((i) => i.status === activeStatusFilter) : inquiries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / leadsPerPage));
  const currentPage = Math.min(page, totalPages);
  const firstVisible = filtered.length ? (currentPage - 1) * leadsPerPage + 1 : 0;
  const lastVisible = Math.min(currentPage * leadsPerPage, filtered.length);
  const paginated = filtered.slice((currentPage - 1) * leadsPerPage, currentPage * leadsPerPage);
  const stats = reactExports.useMemo(
    () => inquiryStatuses.map((status) => ({
      status,
      count: inquiries.filter((i) => i.status === status).length
    })),
    [inquiries]
  );
  function toggleFilter(status) {
    setActiveStatusFilter((current) => current === status ? null : status);
    setPage(1);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setActiveStatusFilter(null);
            setPage(1);
          },
          "aria-pressed": activeStatusFilter === null,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === null ? "border-[#06133D] bg-[#06133D] text-white shadow-md" : "border-[#E4E7EC] bg-white text-[#101828]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`,
                children: "All Leads"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`,
                children: inquiries.length
              }
            )
          ]
        }
      ),
      stats.map(({ status, count }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => toggleFilter(status),
          "aria-pressed": activeStatusFilter === status,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""} ${status === "NEW" ? "border-[#FED7AA] bg-[#FFF7ED]" : status === "INPROGRESS" ? "border-[#B9D3FF] bg-[#EAF2FF]" : "border-[#D0D5DD] bg-[#F2F4F7]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#667085]", children: formatStatus(status) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: count })
          ]
        },
        status
      ))
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Contact Form submissions" }),
          activeStatusFilter && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]", children: formatStatus(activeStatusFilter) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading leads..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: activeStatusFilter ? `No ${formatStatus(activeStatusFilter).toLowerCase()} leads found` : "No leads saved yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: activeStatusFilter ? "Choose another status box to review a different lead group." : "New website inquiries will appear here after the contact form saves them to the database." })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[1180px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Lead" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Ad Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Budget" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginated.map((inquiry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-black text-[#06133D]", children: inquiry.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${inquiry.email}`,
                className: "mt-2 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                  inquiry.email
                ]
              }
            ),
            inquiry.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${inquiry.phone}`,
                className: "mt-1 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  inquiry.phone
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4" }),
              formatDate$2(inquiry.createdAt)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#344054]", children: inquiry.source }),
            inquiry.services.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex max-w-[240px] flex-wrap gap-2", children: inquiry.services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full bg-[#FFF4E8] px-2.5 py-1 text-xs font-bold text-[#C96A13]",
                children: service
              },
              service
            )) }),
            inquiry.website && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: inquiry.website,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-3 block max-w-[240px] truncate text-sm font-semibold text-[#FC9C44] hover:underline",
                children: inquiry.website
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-w-[220px] gap-1 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]", children: inquiry.leadSource ?? "Untracked" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[240px] truncate", children: getLeadSourceLabel(inquiry) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.budget ?? "Not shared" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.timeline ?? "Not shared" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[300px] text-sm leading-6 text-[#344054]", children: inquiry.message }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles$1[inquiry.status]}`,
                children: formatStatus(inquiry.status)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: inquiry.status,
                disabled: updatingId === inquiry.id,
                onChange: (e) => void handleStatusChange(inquiry.id, e.target.value),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60",
                children: inquiryStatuses.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: formatStatus(status) }, status))
              }
            )
          ] }) })
        ] }, inquiry.id)) })
      ] }) }),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              disabled: currentPage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              disabled: currentPage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function blogDraftToPreview(draft) {
  return {
    title: draft.title,
    excerpt: draft.excerpt,
    category: draft.category[0] ?? "",
    readTime: draft.readTime,
    slug: draft.slug,
    content: draft.content,
    featuredImage: draft.featuredImage,
    authorname: draft.authorname
  };
}
function BlogPreview({ data, backHref }) {
  const title = data.title || "Untitled post";
  const excerpt = data.excerpt || "Your focus key Pharse / excerpt will appear here.";
  const category = data.category || "Uncategorized";
  const readTime = data.readTime || "5 min read";
  const slug = data.slug || "your-post-slug";
  const content = data.content || "<p>Start writing your post…</p>";
  const imagePreview = data.featuredImage;
  const authorName = data.authorname || "Hegxcorp Team";
  const authorRole = "Editorial";
  const authorInitials = authorName.split(" ").map((n) => n[0]).join("");
  const publishedLabel = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-lenis-prevent": true,
      className: "fixed inset-0 z-[100] overflow-y-auto bg-white overscroll-contain",
      style: { WebkitOverflowScrolling: "touch", touchAction: "pan-y" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-[110] flex items-center justify-between border-b border-[#EAEAEA] bg-[#1D2742] px-4 py-2.5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FC9C44]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Preview mode — not published"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: backHref,
              className: "inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold hover:bg-white/20 transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                " Back to editor"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-14 md:py-20 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[850px] mx-auto space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: backHref,
                className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider transition hover:text-[#1D2742]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                  " Back to editor"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#FFF4E8] px-2.5 py-1 rounded-md", children: category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                " ",
                readTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[#6B7280]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
                publishedLabel
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-bold text-[#1D2742] tracking-tight leading-[1.1]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(30px, 4.2vw, 52px)"
                },
                children: title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base md:text-lg text-[#6B7280] leading-relaxed font-normal max-w-[780px]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: excerpt
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAEAEA]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-xs select-none", children: authorInitials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#1D2742]", children: authorName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#9CA3AF] font-semibold", children: authorRole })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[#6B7280]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider mr-1.5", children: "Share article:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-2 border border-[#EAEAEA] rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-2 border border-[#EAEAEA] rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-3.5 w-3.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "p-2 border border-[#EAEAEA] rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5" }) })
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[850px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F56]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#27C93F]" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate", children: [
                "hegxcorp.com/blog/",
                slug
              ] })
            ] }),
            imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: imagePreview,
                alt: title,
                className: "aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5", children: "HEGXCORP RESEARCH PAPER" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-5 w-5 text-white/55" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[620px] space-y-3.5 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl md:text-3xl font-bold text-white leading-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs md:text-sm text-white/70 font-normal leading-relaxed max-w-[500px]",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: excerpt
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-white/45 text-[9px] uppercase tracking-wider font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "© ",
                  (/* @__PURE__ */ new Date()).getFullYear(),
                  " Hegxcorp Systems"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#FC9C44]", children: [
                  "Author: ",
                  authorName
                ] })
              ] })
            ] })
          ] }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 max-w-[850px] mx-auto items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "prose prose-slate max-w-none\n                      prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight\n                      prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4\n                      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2\n                      prose-p:text-[#4A5568] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6\n                      prose-strong:text-[#1D2742] prose-strong:font-bold\n                      prose-a:text-[#C96A13]\n                      prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]\n                      prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6\n                      prose-blockquote:border-l-4 prose-blockquote:border-[#FC9C44] prose-blockquote:pl-6 prose-blockquote:italic\n                      prose-img:rounded-lg\n                      prose-li:leading-relaxed",
                style: { fontFamily: "'Inter', sans-serif" },
                dangerouslySetInnerHTML: { __html: content }
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-white space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-wider", children: "Share Article" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-3.5 w-3.5" }),
                    " X"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-3.5 w-3.5" }),
                    " LinkedIn"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    className: "text-sm font-bold text-[#1D2742]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "Weekly Industry Reports"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B7280] leading-relaxed", children: "Deep marketing experiments and growth frameworks sent to your inbox." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-lg bg-[#FC9C44] py-2 text-center text-xs font-semibold text-white", children: "Subscribe" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#1D2742] text-white space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    className: "text-sm font-bold leading-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "Need help growing your business?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/70 leading-relaxed", children: "Claim a free manual performance audit of your acquisition loops." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-full inline-flex justify-center items-center gap-1.5 rounded-lg bg-[#FC9C44] py-2 text-xs font-bold text-[#1D2742]", children: [
                  "Book Free Growth Audit ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                ] })
              ] })
            ] })
          ] }) }) })
        ] })
      ]
    }
  );
}
const Route$7 = createFileRoute("/admin/blog-preview")({
  validateSearch: (search) => ({
    draft: typeof search.draft === "string" ? search.draft : void 0
  }),
  head: () => ({
    meta: [{ title: "Preview | Hegxcorp Admin" }, { name: "robots", content: "noindex,nofollow" }]
  }),
  component: BlogPreviewPage
});
function BlogPreviewPage() {
  const { draft: draftId } = Route$7.useSearch();
  const [draft, setDraft] = reactExports.useState(null);
  const [state, setState] = reactExports.useState("loading");
  const backHref = draftId ? `/admin/add-blog?draft=${encodeURIComponent(draftId)}` : "/admin/add-blog";
  reactExports.useEffect(() => {
    let active = true;
    if (!draftId) {
      setState("notfound");
      return;
    }
    setState("loading");
    getBlogDraft({ data: { id: draftId } }).then((result) => {
      if (!active) return;
      if (result) {
        setDraft(result);
        setState("ready");
      } else {
        setState("notfound");
      }
    }).catch((loadError) => {
      console.error("Preview draft failed to load:", loadError);
      if (active) setState("error");
    });
    return () => {
      active = false;
    };
  }, [draftId]);
  if (state === "ready" && draft) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPreview, { data: blogDraftToPreview(draft), backHref });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] grid place-items-center bg-white px-6 text-center", children: state === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid place-items-center gap-3 text-sm font-bold text-[#06133D]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-7 w-7 animate-spin text-[#FC9C44]" }),
    "Loading preview…"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid max-w-md place-items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-black text-[#06133D]", children: state === "error" ? "Preview could not load" : "Draft not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#667085]", children: state === "error" ? "Something went wrong while loading this draft. Head back to the editor and try again." : "This draft may have been deleted, or it was never saved. Return to the editor to continue." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: backHref,
        className: "mt-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#E88933]",
        children: "Back to editor"
      }
    )
  ] }) });
}
const Route$6 = createFileRoute("/admin/blog")({
  head: () => ({
    meta: [
      { title: "All Posts | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp admin blog post list."
      },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: AdminBlogPostsPage
});
function draftToBlog(draft) {
  return {
    id: `draft-${draft.id}`,
    slug: draft.slug,
    title: draft.title || "Untitled draft",
    excerpt: draft.excerpt,
    content: draft.content,
    category: draft.category[0] ?? "Uncategorized",
    readTime: draft.readTime,
    featuredImage: draft.featuredImage ?? "",
    author: {
      name: draft.authorname?.trim() ? draft.authorname : "Hegxcorp Team",
      role: "Editor"
    },
    publishedAt: draft.updatedAt,
    seoTitle: draft.seotitle?.trim() ? draft.seotitle : draft.title,
    seoDescription: draft.seoDescription,
    featured: draft.featured
  };
}
const postsPerPage = 8;
const statusStyles = {
  PUBLISHED: "bg-[#EAF8ED] text-[#287D3C]",
  DRAFT: "bg-[#FFF4E8] text-[#C96A13]",
  ARCHIVED: "bg-[#F2F4F7] text-[#475467]"
};
const statusLabels = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  ARCHIVED: "Archived"
};
function formatDate$1(value) {
  if (!value) {
    return "-";
  }
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}
function getAuthorInitials(name) {
  return name.split(" ").map((part) => part[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
}
function AdminBlogPostsPage() {
  const staticPosts = reactExports.useMemo(() => getBlogs(), []);
  const [drafts, setDrafts] = reactExports.useState([]);
  const [updatingId, setUpdatingId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let active = true;
    listBlogDrafts().then((rows) => {
      if (active) setDrafts(rows);
    }).catch((loadError) => {
      console.error("Failed to load blog drafts:", loadError);
    });
    return () => {
      active = false;
    };
  }, []);
  const sourcePosts = reactExports.useMemo(
    () => [...drafts.map(draftToBlog), ...staticPosts],
    [drafts, staticPosts]
  );
  const draftMetaByBlogId = reactExports.useMemo(() => {
    const lookup = {};
    for (const draft of drafts) {
      lookup[`draft-${draft.id}`] = draft;
    }
    return lookup;
  }, [drafts]);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const categories = reactExports.useMemo(
    () => ["All", ...Array.from(new Set(sourcePosts.map((post) => post.category)))],
    [sourcePosts]
  );
  const managedPosts = reactExports.useMemo(() => {
    return sourcePosts.map((post) => {
      const draft = draftMetaByBlogId[post.id];
      return {
        ...post,
        adminStatus: draft?.status ?? "PUBLISHED",
        adminFeatured: draft?.featured ?? post.featured,
        draftId: draft?.id
      };
    }).sort(
      (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  }, [draftMetaByBlogId, sourcePosts]);
  const filteredPosts = reactExports.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return managedPosts.filter((post) => {
      const matchesSearch = !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.category.toLowerCase().includes(query) || post.author.name.toLowerCase().includes(query) || post.content.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [managedPosts, searchQuery, selectedCategory]);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const firstVisiblePost = filteredPosts.length ? (safePage - 1) * postsPerPage + 1 : 0;
  const lastVisiblePost = Math.min(safePage * postsPerPage, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * postsPerPage,
    safePage * postsPerPage
  );
  reactExports.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);
  async function persistDraftUpdate(draft, changes) {
    setUpdatingId(draft.id);
    try {
      const updated = await saveBlogDraft({
        data: {
          id: draft.id,
          title: draft.title,
          slug: draft.slug,
          excerpt: draft.excerpt,
          content: draft.content,
          readTime: draft.readTime,
          seotitle: draft.seotitle,
          seoDescription: draft.seoDescription,
          status: changes.status ?? draft.status,
          featured: changes.featured ?? draft.featured,
          category: draft.category,
          tags: draft.tags,
          featuredImage: draft.featuredImage,
          authorname: draft.authorname ?? ""
        }
      });
      setDrafts((prev) => prev.map((d) => d.id === draft.id ? updated : d));
      return true;
    } catch (updateError) {
      console.error("Failed to update draft:", updateError);
      return false;
    } finally {
      setUpdatingId(null);
    }
  }
  async function handleStatusChange(post, status) {
    if (!post.draftId) {
      toast.error("This demo post can't be changed here.");
      return;
    }
    const draft = drafts.find((d) => d.id === post.draftId);
    if (!draft) return;
    const ok = await persistDraftUpdate(draft, { status });
    if (ok) {
      toast.success(`Post marked as ${statusLabels[status].toLowerCase()}.`);
    } else {
      toast.error("Could not update status. Try again.");
    }
  }
  async function handleToggleFeatured(post) {
    if (!post.draftId) {
      toast.error("This demo post can't be changed here.");
      return;
    }
    const draft = drafts.find((d) => d.id === post.draftId);
    if (!draft) return;
    const nextFeatured = !draft.featured;
    const ok = await persistDraftUpdate(draft, { featured: nextFeatured });
    if (ok) {
      if (nextFeatured) {
        setDrafts((prev) => prev.map((d) => d.id === draft.id ? d : { ...d, featured: false }));
      }
      toast.success("Featured setting updated.");
    } else {
      toast.error("Could not update featured status. Try again.");
    }
  }
  async function deleteDraft(draftId) {
    if (!window.confirm("Delete this draft permanently? This cannot be undone.")) {
      return;
    }
    try {
      await deleteBlogDraft({ data: { id: draftId } });
      setDrafts((prev) => prev.filter((draft) => draft.id !== draftId));
      toast.success("Draft deleted.");
    } catch (deleteError) {
      console.error("Failed to delete draft:", deleteError);
      toast.error("Could not delete the draft. Try again.");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-black text-[#06133D]", children: "Blog posts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#667085]", children: "Manage every post, published or in progress." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            window.location.href = "/admin/add-blog";
          },
          className: "inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#E88933]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            "New Post"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-3 border border-[#E4E7EC] bg-white px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex flex-wrap items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
      filteredPosts.length,
      " items"
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-[#06133D]", children: "Blog post library" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]", children: [
            filteredPosts.length,
            " posts"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-wrap items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative min-w-[230px] flex-1 sm:max-w-[360px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: searchQuery,
                onChange: (event) => setSearchQuery(event.target.value),
                placeholder: "Search posts...",
                className: "w-full rounded-lg border border-[#D0D5DD] bg-white py-2.5 pl-10 pr-3 text-sm font-semibold text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: selectedCategory,
              onChange: (event) => setSelectedCategory(event.target.value),
              className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2.5 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]",
              children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: category, children: category === "All" ? "All Categories" : category }, category))
            }
          )
        ] })
      ] }),
      filteredPosts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: "No posts found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: "Clear the search or category filter to review the full blog library." })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[1120px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Post" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Author" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Published" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginatedPosts.map((post) => {
          const isUpdating = post.draftId != null && updatingId === post.draftId;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-[340px] gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-[#E4E7EC] bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[360px] font-black leading-5 text-[#06133D]", children: post.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[420px] text-sm leading-6 text-[#667085]", children: post.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs font-bold text-[#98A2B3]", children: [
                  "/blog/",
                  post.slug
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-[180px] items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-[#06133D] text-xs font-black text-white", children: getAuthorInitials(post.author.name) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#06133D]", children: post.author.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#667085]", children: post.author.role })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]", children: post.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs font-bold text-[#98A2B3]", children: post.readTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles[post.adminStatus]}`,
                  children: statusLabels[post.adminStatus]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: post.adminStatus,
                  disabled: !post.draftId || isUpdating,
                  onChange: (event) => handleStatusChange(post, event.target.value),
                  className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PUBLISHED", children: "Published" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DRAFT", children: "Draft" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ARCHIVED", children: "Archived" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleToggleFeatured(post),
                disabled: !post.draftId || isUpdating,
                "aria-pressed": post.adminFeatured,
                className: `inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-50 ${post.adminFeatured ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#D0D5DD] bg-white text-[#667085] hover:border-[#FC9C44]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Star,
                    {
                      className: `h-4 w-4 ${post.adminFeatured ? "fill-[#FC9C44]" : ""}`
                    }
                  ),
                  post.adminFeatured ? "Featured" : "Non feature"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex min-w-[170px] items-center gap-2 text-sm font-semibold text-[#475467]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4 text-[#98A2B3]" }),
              formatDate$1(post.publishedAt)
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-[150px] flex-wrap items-center gap-2", children: post.draftId ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `/admin/add-blog?draft=${encodeURIComponent(post.draftId)}`,
                  className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                  "aria-label": `Edit ${post.title}`,
                  title: "Edit",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `/admin/blog-preview?draft=${encodeURIComponent(post.draftId)}`,
                  className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                  "aria-label": `View ${post.title}`,
                  title: "View",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => void deleteDraft(post.draftId),
                  className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-red-300 hover:text-red-600",
                  "aria-label": `Delete ${post.title}`,
                  title: "Delete",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog/$slug",
                params: { slug: post.slug },
                className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                "aria-label": `View ${post.title}`,
                title: "View (demo post)",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
              }
            ) }) })
          ] }, post.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisiblePost,
          "-",
          lastVisiblePost,
          " of ",
          filteredPosts.length,
          " posts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.max(1, page - 1)),
              disabled: safePage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Previous posts page",
              children: "←"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            safePage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.min(totalPages, page + 1)),
              disabled: safePage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Next posts page",
              children: "→"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-[#E4E7EC] bg-white p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          "Public blog source"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold leading-6 text-[#667085]", children: "This admin list is collected from the same blog data used by the public blog page." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
            "Open public blog"
          ]
        }
      )
    ] }) })
  ] });
}
function PostCategoryPicker({
  categories,
  selected,
  onSelect,
  onAddCategory,
  onDeleteCategory,
  onCategoriesRestored,
  storageKey = "admin.addBlog.categories"
}) {
  const [search, setSearch] = reactExports.useState("");
  const [isAdding, setIsAdding] = reactExports.useState(false);
  const [newCategoryName, setNewCategoryName] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw);
        if (Array.isArray(saved)) {
          const missing = saved.filter((name) => !categories.includes(name));
          if (missing.length > 0) {
            onCategoriesRestored?.(missing);
          }
        }
      }
    } catch {
    }
  }, []);
  const filteredCategories = categories.filter(
    (cat) => cat.toLowerCase().includes(search.toLowerCase())
  );
  function persistCategory(name) {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const saved = raw ? JSON.parse(raw) : [];
      if (!saved.includes(name)) {
        window.localStorage.setItem(storageKey, JSON.stringify([...saved, name]));
      }
    } catch {
    }
  }
  function removeCategory(name) {
    try {
      const raw = window.localStorage.getItem(storageKey);
      const saved = raw ? JSON.parse(raw) : [];
      window.localStorage.setItem(storageKey, JSON.stringify(saved.filter((c) => c !== name)));
    } catch {
    }
  }
  const handleAdd = () => {
    const trimmed = newCategoryName.trim();
    if (trimmed) {
      onAddCategory?.(trimmed);
      persistCategory(trimmed);
      setNewCategoryName("");
      setIsAdding(false);
    }
  };
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const canScrollUp = scrollTop > -1;
      const canScrollDown = scrollTop + clientHeight < scrollHeight;
      if (e.deltaY < 0 && canScrollUp || e.deltaY > 0 && canScrollDown) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollTop += e.deltaY;
      }
    };
    el.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5 bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative block mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search Categories",
          className: "w-full rounded-md border border-[#D0D5DD] bg-white py-1.5 pl-9 pr-3 text-xs text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: scrollRef,
        tabIndex: 0,
        className: "max-h-[9.5rem] overflow-y-auto overscroll-contain pr-1 mb-3 space-y-2 focus:outline-none",
        children: [
          filteredCategories.map((cat) => {
            const isChecked = selected.includes(cat);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 text-xs font-bold text-[#344054] hover:text-[#06133D]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: isChecked,
                    onChange: () => {
                      if (isChecked) {
                        onSelect(selected.filter((c) => c !== cat));
                      } else {
                        onSelect([...selected, cat]);
                      }
                    },
                    className: "h-4 w-4 rounded border-[#D0D5DD] text-[#FC9C44] accent-[#FC9C44] focus:ring-[#FC9C44]"
                  }
                ),
                cat
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    removeCategory(cat);
                    onDeleteCategory?.(cat);
                  },
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                }
              )
            ] }, cat);
          }),
          filteredCategories.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#98A2B3]", children: "No categories found." })
        ]
      }
    ),
    isAdding ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          autoFocus: true,
          value: newCategoryName,
          onChange: (e) => setNewCategoryName(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") handleAdd();
            if (e.key === "Escape") setIsAdding(false);
          },
          placeholder: "New category name",
          className: "w-full rounded-md border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs text-[#344054] outline-none focus:border-[#FC9C44]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsAdding(false),
            className: "rounded px-2.5 py-1 text-xs font-bold text-[#667085] hover:bg-[#F2F4F7]",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAdd,
            className: "rounded bg-[#FC9C44] px-2.5 py-1 text-xs font-black text-white hover:bg-[#E88933]",
            children: "Add"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setIsAdding(true),
        className: "text-xs font-black text-[#FC9C44] hover:text-[#E88933] flex items-center gap-1",
        children: "+ Add Category"
      }
    )
  ] });
}
function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing your post…"
}) {
  const editor = useEditor({
    // TanStack Start renders on the server first; letting Tiptap render
    // immediately there causes an SSR/hydration mismatch. Defer the first
    // render to the client.
    immediatelyRender: false,
    extensions: [
      index_default.configure({
        heading: { levels: [1, 2, 3] },
        // StarterKit v3 already bundles the Link extension. Turn its default
        // off here so we can register our own configured Link below without
        // tripping Tiptap's "duplicate extension" conflict.
        link: false
      }),
      index_default$1.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-[#C96A13] underline",
          rel: "noopener noreferrer nofollow"
        }
      }),
      index_default$2.configure({
        HTMLAttributes: { class: "rounded-lg" }
      }),
      index_default$3.configure({ placeholder })
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "prose-editor min-h-[320px] w-full px-4 py-3 text-sm text-[#101828] outline-none"
      }
    },
    onUpdate: ({ editor: current }) => {
      onChange(current.getHTML());
    }
  });
  reactExports.useEffect(() => {
    if (!editor) return;
    if (value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);
  if (!editor) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-[#D0D5DD] focus-within:border-[#FC9C44]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, { editor }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditorContent, { editor })
  ] });
}
function Toolbar({ editor }) {
  function addLink() {
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }
  const imageInputRef = reactExports.useRef(null);
  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async function handleImageFile(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || !file.type.startsWith("image/")) return;
    const src = await readFileAsDataUrl(file);
    editor.chain().focus().setImage({ src, alt: file.name }).run();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 rounded-t-lg border-b border-[#D0D5DD] bg-[#F9FAFB] px-2 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Bold",
        onClick: () => editor.chain().focus().toggleBold().run(),
        active: editor.isActive("bold"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bold, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Italic",
        onClick: () => editor.chain().focus().toggleItalic().run(),
        active: editor.isActive("italic"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Italic, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Strikethrough",
        onClick: () => editor.chain().focus().toggleStrike().run(),
        active: editor.isActive("strike"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Strikethrough, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Heading 1",
        onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        active: editor.isActive("heading", { level: 1 }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading1, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Heading 2",
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        active: editor.isActive("heading", { level: 2 }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading2, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Bullet list",
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        active: editor.isActive("bulletList"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Ordered list",
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        active: editor.isActive("orderedList"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Blockquote",
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        active: editor.isActive("blockquote"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Code block",
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        active: editor.isActive("codeBlock"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { label: "Link", onClick: addLink, active: editor.isActive("link"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link$1, { size: 16 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { label: "Upload image", onClick: () => imageInputRef.current?.click(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 16 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: imageInputRef,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: handleImageFile
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Undo",
        onClick: () => editor.chain().focus().undo().run(),
        disabled: !editor.can().undo(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToolbarButton,
      {
        label: "Redo",
        onClick: () => editor.chain().focus().redo().run(),
        disabled: !editor.can().redo(),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Redo2, { size: 16 })
      }
    )
  ] });
}
function ToolbarButton({
  label,
  onClick,
  active = false,
  disabled = false,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      title: label,
      "aria-label": label,
      "aria-pressed": active,
      onMouseDown: (e) => e.preventDefault(),
      onClick,
      disabled,
      className: `grid h-8 w-8 place-items-center rounded-md transition disabled:cursor-not-allowed disabled:opacity-40 ${active ? "bg-[#FFF4E8] text-[#C96A13]" : "text-[#667085] hover:bg-[#F2F4F7] hover:text-[#344054]"}`,
      children
    }
  );
}
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 h-5 w-px bg-[#E4E7EC]", "aria-hidden": "true" });
}
function TagInput({
  value,
  onChange,
  storageKey = "admin.tagInput",
  placeholder = "Type a tag and press Enter"
}) {
  const isControlled = value !== void 0;
  const [internalTags, setInternalTags] = reactExports.useState([]);
  const [draft, setDraft] = reactExports.useState("");
  const [hydrated, setHydrated] = reactExports.useState(false);
  const tags = isControlled ? value : internalTags;
  reactExports.useEffect(() => {
    if (isControlled) return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setInternalTags(parsed);
      }
    } catch {
    } finally {
      setHydrated(true);
    }
  }, [storageKey]);
  reactExports.useEffect(() => {
    if (isControlled || !hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(internalTags));
    } catch {
    }
  }, [internalTags, isControlled, hydrated, storageKey]);
  function commitTags(next) {
    if (isControlled) {
      onChange?.(next);
    } else {
      setInternalTags(next);
      onChange?.(next);
    }
  }
  function addTag(raw) {
    const label = raw.trim();
    if (!label) return;
    if (tags.some((tag) => tag.toLowerCase() === label.toLowerCase())) {
      setDraft("");
      return;
    }
    commitTags([...tags, label]);
    setDraft("");
  }
  function removeTag(label) {
    commitTags(tags.filter((tag) => tag !== label));
  }
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag(draft);
      return;
    }
    if (event.key === "Backspace" && draft === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-[#D0D5DD] bg-white px-2 py-2 focus-within:border-[#FC9C44] focus-within:ring-4 focus-within:ring-[#FC9C44]/10", children: [
    tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]",
        children: [
          tag,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeTag(tag),
              "aria-label": `Remove tag ${tag}`,
              className: "rounded-full p-0.5 text-[#C96A13] transition hover:bg-[#FC9C44] hover:text-white",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
            }
          )
        ]
      },
      tag
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: draft,
        onChange: (event) => setDraft(event.target.value),
        onKeyDown: handleKeyDown,
        onBlur: () => addTag(draft),
        placeholder: tags.length === 0 ? placeholder : "",
        className: "min-w-[120px] flex-1 border-none bg-transparent text-sm text-[#344054] outline-none"
      }
    )
  ] }) });
}
function generateId() {
  const cryptoObj = typeof crypto !== "undefined" ? crypto : void 0;
  if (cryptoObj && typeof cryptoObj.randomUUID === "function") {
    return cryptoObj.randomUUID();
  }
  if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
    const bytes = cryptoObj.getRandomValues(new Uint8Array(16));
    bytes[6] = bytes[6] & 15 | 64;
    bytes[8] = bytes[8] & 63 | 128;
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0"));
    return hex.slice(0, 4).join("") + "-" + hex.slice(4, 6).join("") + "-" + hex.slice(6, 8).join("") + "-" + hex.slice(8, 10).join("") + "-" + hex.slice(10, 16).join("");
  }
  return `id_${Date.now().toString(16)}_${Math.random().toString(16).slice(2, 14)}`;
}
function extractFirstImageFromContent(html) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}
const Route$5 = createFileRoute("/admin/add-blog")({
  head: () => ({
    meta: [
      { title: "Create Blog Post | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  validateSearch: (search) => ({
    draft: typeof search.draft === "string" ? search.draft : void 0
  }),
  component: CreateBlogPage
});
const DEFAULT_CATEGORIES = ["Web development", "Tutorials", "News"];
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function CreateBlogPage() {
  const [form, setForm] = reactExports.useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    readTime: "",
    seoDescription: "",
    status: "DRAFT",
    featured: false,
    category: [],
    tags: "",
    seotitle: "",
    authorname: ""
  });
  const [slugTouched, setSlugTouched] = reactExports.useState(false);
  const search = Route$5.useSearch();
  const [draftId] = reactExports.useState(() => search.draft ?? generateId());
  const [saving, setSaving] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const [imagePreview, setImagePreview] = reactExports.useState(null);
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [categories, setCategories] = reactExports.useState(DEFAULT_CATEGORIES);
  function handleCategoriesRestored(names) {
    setCategories((prev) => Array.from(/* @__PURE__ */ new Set([...prev, ...names])));
  }
  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }
  function handleTitleChange(value) {
    updateField("title", value);
    if (!slugTouched) {
      updateField("slug", slugify(value));
    }
  }
  async function handlePublishClick() {
    if (!validateForm()) return;
    updateField("status", "PUBLISHED");
    setSaving(true);
    try {
      await saveBlogDraft({ data: { ...buildPayload(), status: "PUBLISHED" } });
      toast.success("Published successfully!");
    } catch (publishError) {
      console.error("Failed to publish:", publishError);
      toast.error("Could not publish. Please try again.");
    } finally {
      setSaving(false);
    }
  }
  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async function handleImageFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    setImageFile(file);
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setImagePreview(dataUrl);
    } catch (readError) {
      console.error("Failed to read image file:", readError);
      alert("Could not read that image. Please try another file.");
    }
  }
  function handleAddCategory(name) {
    if (categories.includes(name)) {
      updateField("category", [...form.category, name]);
      return;
    }
    setCategories((prev) => [...prev, name]);
    updateField("category", [...form.category, name]);
  }
  function handleDeleteCategory(name) {
    setCategories((prev) => prev.filter((c) => c !== name));
    if (form.category.includes(name)) {
      updateField(
        "category",
        form.category.filter((c) => c !== name)
      );
    }
  }
  const tagList = form.tags ? form.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
  function handleTagsChange(nextTags) {
    updateField("tags", nextTags.join(", "));
  }
  reactExports.useEffect(() => {
    if (!search.draft) return;
    let cancelled = false;
    getBlogDraft({ data: { id: search.draft } }).then((draft) => {
      if (cancelled || !draft) return;
      setForm({
        title: draft.title,
        slug: draft.slug,
        excerpt: draft.excerpt,
        content: draft.content,
        readTime: draft.readTime,
        seoDescription: draft.seoDescription,
        status: draft.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT",
        featured: draft.featured,
        category: draft.category,
        tags: draft.tags.join(", "),
        seotitle: draft.seotitle || "",
        authorname: draft.authorname || ""
      });
      setSlugTouched(Boolean(draft.slug));
      if (draft.category.length) handleCategoriesRestored(draft.category);
      if (draft.featuredImage) setImagePreview(draft.featuredImage);
    }).catch((loadError) => {
      console.error("Failed to load draft:", loadError);
    });
    return () => {
      cancelled = true;
    };
  }, [search.draft]);
  function buildPayload() {
    const fallbackImage = imagePreview ?? extractFirstImageFromContent(form.content);
    return {
      id: draftId,
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      readTime: form.readTime,
      seoDescription: form.seoDescription,
      seotitle: form.seotitle,
      authorname: form.authorname,
      status: form.status,
      featured: form.featured,
      category: form.category,
      tags: tagList,
      featuredImage: fallbackImage
    };
  }
  function validateForm() {
    if (!form.title.trim()) {
      toast.error("Title is required before you can save or publish.");
      return false;
    }
    return true;
  }
  async function saveNow() {
    if (!validateForm()) return false;
    setSaving(true);
    try {
      await saveBlogDraft({ data: buildPayload() });
      return true;
    } catch (saveError) {
      console.error("Failed to save draft:", saveError);
      return false;
    } finally {
      setSaving(false);
    }
  }
  async function handlePreviewClick() {
    const ok = await saveNow();
    if (!ok) {
      alert("Could not save the draft. Check your connection and try again.");
      return;
    }
    window.location.href = `/admin/blog-preview?draft=${encodeURIComponent(draftId)}`;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#E4E7EC] pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin/blog",
            className: "text-xs font-black text-[#98A2B3] transition hover:text-[#344054]",
            children: "← Back to library"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-black text-[#06133D]", children: "Create blog post" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handlePreviewClick,
            disabled: saving,
            className: "rounded-lg border border-[#D0D5DD] bg-white px-5 py-2 text-sm font-black text-[#344054] transition hover:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60",
            children: saving ? "Saving…" : "Preview"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handlePublishClick,
            disabled: saving,
            className: "rounded-lg bg-[#FC9C44] px-5 py-2 text-sm font-black text-white transition hover:bg-[#E88933] disabled:cursor-not-allowed disabled:opacity-60",
            children: saving ? "Publishing…" : "Publish post"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_416px] ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.title,
              onChange: (e) => handleTitleChange(e.target.value),
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-3 text-base font-semibold text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Content" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            RichTextEditor,
            {
              value: form.content,
              onChange: (html) => updateField("content", html),
              placeholder: "Start writing your post…"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Slug" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-4 py-5 text-sm font-bold text-[#667085]", children: form.slug }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Focus Key Pharse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: form.excerpt,
              onChange: (e) => updateField("excerpt", e.target.value),
              rows: 1,
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Seo title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.seotitle,
              onChange: (e) => updateField("seotitle", e.target.value),
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm font-bold text-[#344054] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "SEO meta description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.seoDescription,
              onChange: (e) => updateField("seoDescription", e.target.value),
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Author Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: form.authorname,
              onChange: (e) => updateField("authorname", e.target.value),
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Featured image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/*",
              className: "hidden",
              onChange: (e) => {
                void handleImageFile(e.target.files?.[0]);
                e.target.value = "";
              }
            }
          ),
          imagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-lg border border-[#E4E7EC]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: imagePreview,
                alt: imageFile?.name,
                className: "h-28 w-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-[10px] font-bold text-white", children: imageFile?.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => fileInputRef.current?.click(),
                    className: "text-[10px] font-black text-white underline",
                    children: "Replace"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setImagePreview(null);
                      setImageFile(null);
                    },
                    className: "text-[10px] font-black text-white underline",
                    children: "Remove"
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => fileInputRef.current?.click(),
              onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && fileInputRef.current?.click(),
              onDragOver: (e) => e.preventDefault(),
              onDrop: (e) => {
                e.preventDefault();
                void handleImageFile(e.dataTransfer.files?.[0]);
              },
              className: "grid h-28 cursor-pointer place-items-center rounded-lg border border-dashed border-[#FC9C44] bg-[#FFF4E8] hover:bg-[#FFEBD6]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    },
                    "aria-label": "Upload featured image",
                    className: "mb-1 grid h-7 w-7 place-items-center rounded-full bg-[#FC9C44] text-white hover:bg-[#E88933]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black leading-none", children: "+" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-[#C96A13]", children: "Upload featured image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-[#98A2B3]", children: "Recommended 1200×630" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PostCategoryPicker,
          {
            categories,
            selected: form.category,
            onSelect: (cats) => updateField("category", cats),
            onAddCategory: handleAddCategory,
            onDeleteCategory: handleDeleteCategory,
            onCategoriesRestored: handleCategoriesRestored,
            storageKey: "admin.addBlog.categories"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Tags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TagInput,
            {
              value: tagList,
              onChange: handleTagsChange,
              placeholder: "Add tags, press Enter…"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#FC9C44] bg-[#FFF4E8] p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#C96A13]", children: "Ready to publish?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-bold text-[#8A5A28]", children: "This will appear on the public blog page immediately." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: async () => {
                  const ok = await saveNow();
                  alert(ok ? "Draft saved." : "Could not save the draft. Try again.");
                },
                disabled: saving,
                className: "flex-1 rounded-lg border border-[#D0D5DD] bg-white py-2 text-xs font-black text-[#344054] disabled:cursor-not-allowed disabled:opacity-60",
                children: saving ? "Saving…" : "Save as draft"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  window.location.href = "/admin/add-blog";
                },
                className: "flex-1 rounded-lg bg-[#FC9C44] py-2 text-xs font-black text-white",
                children: "Start a New Post"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const listAdFunnelReport = createServerFn({
  method: "POST"
}).handler(createSsrRpc("f08ca2ced5afa418ebc61986ca8a389f8d75019bdfd71cc709c3f0a0e806a15b"));
const Route$4 = createFileRoute("/admin/ad-leads")({
  head: () => ({
    meta: [
      { title: "Ad Leads | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp ad source lead funnel report."
      },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: AdminAdLeadsPage
});
function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}
function formatPercent(value, total) {
  if (total <= 0) return "0%";
  return `${Math.round(value / total * 100)}%`;
}
function getBestRow(rows) {
  return [...rows].sort((left, right) => {
    if (right.genuineLeads !== left.genuineLeads) return right.genuineLeads - left.genuineLeads;
    if (right.leadsGenerated !== left.leadsGenerated) {
      return right.leadsGenerated - left.leadsGenerated;
    }
    return right.visitors - left.visitors;
  })[0];
}
function AdminAdLeadsPage() {
  const [reportRows, setReportRows] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  const metaRows = reactExports.useMemo(
    () => reportRows.filter((row) => row.leadSource === "Meta Ads"),
    [reportRows]
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
        loadError instanceof Error ? loadError.message : "Ad funnel report could not load right now."
      );
    } finally {
      setIsLoading(false);
    }
  }
  reactExports.useEffect(() => {
    void loadAdFunnelReport();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Meta Visitors"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: metaVisitors }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          metaFormStarts,
          " form starts, ",
          metaLeadsGenerated,
          " leads generated"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Meta Genuine Leads"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: metaGenuineLeads }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          formatPercent(metaGenuineLeads, metaLeadsGenerated),
          " of generated Meta leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: "All Tracked Funnel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: totalVisitors }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          totalFormStarts,
          " starts, ",
          totalLeadsGenerated,
          " leads, ",
          totalGenuineLeads,
          " genuine"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Best Campaign / Ad"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg font-black text-[#06133D]", children: bestRow ? bestRow.leadCampaign : "No tracked ad activity yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: bestRow ? `${bestRow.leadAd} - ${bestRow.genuineLeads} genuine leads` : "Use UTM labels in your ad URL to start tracking." })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Ad funnel report" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: "Visitors and form starts come from tracking events. Leads generated come from form submissions. Genuine means status is In Progress or Closed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => void loadAdFunnelReport(),
            disabled: isLoading,
            className: "inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-4 w-4 ${isLoading ? "animate-spin" : ""}` }),
              "Refresh"
            ]
          }
        )
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[300px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading ad funnel..." }) : reportRows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-[300px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: "No tracked ad activity yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-sm leading-6 text-[#667085]", children: "isitors will appear here after they arrive from Meta or another UTM-tagged ad URL." })
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-[1180px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Campaign" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Ad Set" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Ad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Visitors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Form Starts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Leads Generated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Genuine Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Latest Activity" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: reportRows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-black text-[#2359B8]", children: row.leadSource }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-black text-[#06133D]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[220px]", children: row.leadCampaign }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[180px]", children: row.leadAdSet }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[180px]", children: row.leadAd }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-black text-[#06133D]", children: row.visitors }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.formStarts }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.formStarts, row.visitors),
              " of visitors"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.leadsGenerated }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.leadsGenerated, row.visitors),
              " of visitors"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.genuineLeads }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.genuineLeads, row.leadsGenerated),
              " of generated leads"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex min-w-[170px] items-center gap-2 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "h-4 w-4" }),
            formatDate(row.latestActivityAt)
          ] }) })
        ] }, row.key)) })
      ] }) })
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./admin.website-content.services-WxDVuJ0N.mjs");
const Route$3 = createFileRoute("/admin/website-content/services")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.website-content.home-zkwVj13j.mjs");
const Route$2 = createFileRoute("/admin/website-content/home")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.website-content.contact-CeyaEdbj.mjs");
const Route$1 = createFileRoute("/admin/website-content/contact")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.website-content.about-BLjINwYE.mjs");
const Route = createFileRoute("/admin/website-content/about")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsOfServiceRoute = Route$D.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$E
});
const SitemapDotxmlRoute = Route$C.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$E
});
const ServicesRoute = Route$B.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$E
});
const PrivacyPolicyRoute = Route$A.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$E
});
const IndustriesRoute = Route$z.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$E
});
const FreeGrowthAuditRoute = Route$y.update({
  id: "/free-growth-audit",
  path: "/free-growth-audit",
  getParentRoute: () => Route$E
});
const CookiePolicyRoute = Route$x.update({
  id: "/cookie-policy",
  path: "/cookie-policy",
  getParentRoute: () => Route$E
});
const ContactRoute = Route$w.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$E
});
const CaseStudiesRoute = Route$v.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$E
});
const BlogRoute = Route$u.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$E
});
const AdminRoute = Route$t.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$E
});
const AboutRoute = Route$s.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$E
});
const IndexRoute = Route$r.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$E
});
const CaseStudiesIndexRoute = Route$q.update({
  id: "/",
  path: "/",
  getParentRoute: () => CaseStudiesRoute
});
const BlogIndexRoute = Route$p.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const AdminIndexRoute = Route$o.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const ServiceWordpressRoute = Route$n.update({
  id: "/service/wordpress",
  path: "/service/wordpress",
  getParentRoute: () => Route$E
});
const ServiceWebDevRoute = Route$m.update({
  id: "/service/web-dev",
  path: "/service/web-dev",
  getParentRoute: () => Route$E
});
const ServiceWebAppRoute = Route$l.update({
  id: "/service/web-app",
  path: "/service/web-app",
  getParentRoute: () => Route$E
});
const ServiceUiUxDesignRoute = Route$k.update({
  id: "/service/ui-ux-design",
  path: "/service/ui-ux-design",
  getParentRoute: () => Route$E
});
const ServiceSocialMedRoute = Route$j.update({
  id: "/service/social-med",
  path: "/service/social-med",
  getParentRoute: () => Route$E
});
const ServiceSeoRoute = Route$i.update({
  id: "/service/seo",
  path: "/service/seo",
  getParentRoute: () => Route$E
});
const ServicePpcRoute = Route$h.update({
  id: "/service/ppc",
  path: "/service/ppc",
  getParentRoute: () => Route$E
});
const ServiceGraphicDesignRoute = Route$g.update({
  id: "/service/graphic-design",
  path: "/service/graphic-design",
  getParentRoute: () => Route$E
});
const ServiceECommRoute = Route$f.update({
  id: "/service/e-comm",
  path: "/service/e-comm",
  getParentRoute: () => Route$E
});
const ServiceContentMarketingRoute = Route$e.update({
  id: "/service/content-marketing",
  path: "/service/content-marketing",
  getParentRoute: () => Route$E
});
const ServiceBrandingRoute = Route$d.update({
  id: "/service/branding",
  path: "/service/branding",
  getParentRoute: () => Route$E
});
const CaseStudiesSlugRoute = Route$c.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => CaseStudiesRoute
});
const BlogSlugRoute = Route$b.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const ApiGrowthAuditRoute = Route$a.update({
  id: "/api/growth-audit",
  path: "/api/growth-audit",
  getParentRoute: () => Route$E
});
const AdminGrowthLeadsRoute = Route$9.update({
  id: "/growth-leads",
  path: "/growth-leads",
  getParentRoute: () => AdminRoute
});
const AdminContactLeadsRoute = Route$8.update({
  id: "/contact-leads",
  path: "/contact-leads",
  getParentRoute: () => AdminRoute
});
const AdminBlogPreviewRoute = Route$7.update({
  id: "/blog-preview",
  path: "/blog-preview",
  getParentRoute: () => AdminRoute
});
const AdminBlogRoute = Route$6.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => AdminRoute
});
const AdminAddBlogRoute = Route$5.update({
  id: "/add-blog",
  path: "/add-blog",
  getParentRoute: () => AdminRoute
});
const AdminAdLeadsRoute = Route$4.update({
  id: "/ad-leads",
  path: "/ad-leads",
  getParentRoute: () => AdminRoute
});
const AdminWebsiteContentServicesRoute = Route$3.update({
  id: "/website-content/services",
  path: "/website-content/services",
  getParentRoute: () => AdminRoute
});
const AdminWebsiteContentHomeRoute = Route$2.update({
  id: "/website-content/home",
  path: "/website-content/home",
  getParentRoute: () => AdminRoute
});
const AdminWebsiteContentContactRoute = Route$1.update({
  id: "/website-content/contact",
  path: "/website-content/contact",
  getParentRoute: () => AdminRoute
});
const AdminWebsiteContentAboutRoute = Route.update({
  id: "/website-content/about",
  path: "/website-content/about",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminAdLeadsRoute,
  AdminAddBlogRoute,
  AdminBlogRoute,
  AdminBlogPreviewRoute,
  AdminContactLeadsRoute,
  AdminGrowthLeadsRoute,
  AdminIndexRoute,
  AdminWebsiteContentAboutRoute,
  AdminWebsiteContentContactRoute,
  AdminWebsiteContentHomeRoute,
  AdminWebsiteContentServicesRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const BlogRouteChildren = {
  BlogSlugRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const CaseStudiesRouteChildren = {
  CaseStudiesSlugRoute,
  CaseStudiesIndexRoute
};
const CaseStudiesRouteWithChildren = CaseStudiesRoute._addFileChildren(
  CaseStudiesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  BlogRoute: BlogRouteWithChildren,
  CaseStudiesRoute: CaseStudiesRouteWithChildren,
  ContactRoute,
  CookiePolicyRoute,
  FreeGrowthAuditRoute,
  IndustriesRoute,
  PrivacyPolicyRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TermsOfServiceRoute,
  ApiGrowthAuditRoute,
  ServiceBrandingRoute,
  ServiceContentMarketingRoute,
  ServiceECommRoute,
  ServiceGraphicDesignRoute,
  ServicePpcRoute,
  ServiceSeoRoute,
  ServiceSocialMedRoute,
  ServiceUiUxDesignRoute,
  ServiceWebAppRoute,
  ServiceWebDevRoute,
  ServiceWordpressRoute
};
const routeTree = Route$E._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Footer as F,
  Header as H,
  Route$b as R,
  SectionHeading as S,
  ZigZagGrowthStack as Z,
  getVisitorId as a,
  trackLead as b,
  trackContactClick as c,
  getPublishedBlogs as d,
  aisearch as e,
  getCaseStudies as f,
  getLeadSourceData as g,
  getCaseStudyBySlug as h,
  cn as i,
  getWebsiteSection as j,
  saveWebsiteSection as k,
  router as r,
  submitGrowthAuditInquiry as s,
  trackEvent as t,
  useWebsiteSection as u
};
