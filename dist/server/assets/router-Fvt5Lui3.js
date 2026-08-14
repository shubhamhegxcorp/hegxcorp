import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useLocation, createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, useParams, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState, createContext, useContext, useCallback, useMemo } from "react";
import { c as createSsrRpc, i as inquiryStatuses, s as submitContactInquiry, l as listContactInquiries, u as updateContactInquiryStatus } from "./contact-inquiries-7TK3gyta.js";
import { c as createServerFn } from "./server-Bg4GKRDW.js";
import * as z from "zod";
import { c as cleanLeadSourceData } from "./lead-source-C0KU7OxF.js";
import Lenis from "lenis";
import { Globe, Phone, ChevronDown, Code2, Layers, LayoutTemplate, ShoppingCart, Search, MousePointerClick, Share2, PenLine, Palette, Sparkles, Image, ArrowRight, Check, TrendingUp, Menu, X, Linkedin, Twitter, Instagram, Facebook, ShieldCheck, BarChart3, User, Mail, Target, ArrowLeft, MapPin, Send, RefreshCw, LockKeyhole, UserRound, EyeOff, Eye, Inbox, ClipboardList, BookOpenText, PlusCircle, Megaphone, LogOut, Award, Lightbulb, BadgeCheck, Handshake, Users, Zap, GitMerge, BarChart2, CalendarCheck, PhoneCall, FileText, Percent, BookOpen, Gauge, ChevronRight, Layers3, Rocket, CheckCircle2, Settings, Cloud, Cross, GraduationCap, House, Briefcase, PenTool, CalendarDays, Clapperboard, Link2, Globe2, Building2, Youtube, Activity, LineChart, Smartphone, DollarSign, Presentation, Brush, Camera, MessageSquareText, MessageSquare, Clock, Calendar, Bookmark, Info, AlertCircle, CalendarClock, ChevronLeft, ChevronsLeft, ChevronsRight, Star, XCircle, Archive } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence, useInView, animate, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const appCss = "/assets/styles-CLO9wIAg.css";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    gtmId,
    googleTagId,
    googleInitScript && /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: googleInitScript } }),
    metaPixelScript && /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: metaPixelScript } })
  ] });
}
const visitorEventValueSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const visitorEventInputSchema = z.object({
  visitorId: z.string().min(1),
  eventName: z.string().min(1),
  path: z.string().min(1),
  pageTitle: z.string().optional(),
  referrer: z.string().optional(),
  params: z.record(visitorEventValueSchema).default({}),
  userAgent: z.string().optional()
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
function trackLead(params = {}) {
  const leadParams = {
    currency: "INR",
    value: 1,
    ...params
  };
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
  const highestScrollDepthRef = useRef(0);
  const scrollTimerRef = useRef(void 0);
  useEffect(() => {
    highestScrollDepthRef.current = 0;
    trackEvent("page_view", {
      page_path: location.pathname
    });
  }, [location.pathname]);
  useEffect(() => {
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
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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
const Route$y = createRootRouteWithContext()({
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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hegxcorp" }
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
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(AnalyticsScripts, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$y.useRouteContext();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true
    });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(VisitorTracking, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$8 = () => import("./terms-of-service-DgFc8vsZ.js");
const Route$x = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [{
      title: "Terms of Service | Hegxcorp"
    }, {
      name: "description",
      content: "Terms governing use of the Hegxcorp website and digital services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
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
function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
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
function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured);
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
const Route$w = createFileRoute("/sitemap.xml")({
  loader: () => {
    const blogPages = getBlogs().map((blog) => ({
      path: `/blog/${blog.slug}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: blog.publishedAt.slice(0, 10)
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
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
});
const $$splitComponentImporter$7 = () => import("./services-CHUKSZyl.js");
const Route$v = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Our Services | Hegxcorp"
    }, {
      name: "description",
      content: "Explore Hegxcorp services including website development, web application development, ecommerce development, WordPress development, SEO, digital marketing, UI/UX design, branding, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./privacy-policy-BeacvmFN.js");
const Route$u = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy | Hegxcorp"
    }, {
      name: "description",
      content: "Learn how Hegxcorp collects, uses, protects, and manages personal information."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const logoAsset = "/assets/cropped-hegxcorp-logo-new-web-jmKFR4Um.webp";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const serviceColumns = [
  {
    heading: "Development",
    items: [
      {
        icon: Code2,
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
  const [count, setCount] = useState(0);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("span", { children: [
    count,
    suffix
  ] });
}
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState("in");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const [hasMegaOpened, setHasMegaOpened] = useState(false);
  useEffect(() => {
    if (megaOpen) {
      setHasMegaOpened(true);
    }
  }, [megaOpen]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const active = countries.find((c) => c.code === activeCountry);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "hidden md:block bg-[#1D2742] text-white/80 text-xs", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-8 max-w-[1400px] items-center justify-between px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-white/60" }),
        /* @__PURE__ */ jsx("span", { className: "font-medium tracking-wide text-white/90", children: "Global Presence:" }),
        /* @__PURE__ */ jsx("span", { className: "text-white/60", children: "India • USA • Australia • Europe" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white/60", children: "24/7 Support" }),
        /* @__PURE__ */ jsx("span", { className: "text-white/20", children: "|" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+918369207836",
            onClick: () => trackContactClick("phone", "header_utility_phone"),
            className: "flex items-center gap-1.5 text-white/90 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
              "+91 836 920 7836"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "header",
      {
        className: cn(
          "sticky top-0 z-50 w-full bg-white border-b border-[#EAEAEA]/60 transition-all duration-300",
          scrolled && "shadow-[0_4px_24px_-12px_rgba(17,24,39,0.12)]"
        ),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-300",
              scrolled ? "h-[65px]" : "h-[90px]"
            ),
            children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", "aria-label": "HEXGCORP home", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: logoAsset,
                  alt: "HEXGCORP",
                  className: cn("w-auto transition-all duration-300", scrolled ? "h-11" : "h-[80px]")
                }
              ) }),
              /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative",
                    onMouseEnter: () => setMegaOpen(true),
                    onMouseLeave: () => setMegaOpen(false),
                    children: [
                      /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: "/services",
                          className: "group flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]",
                          "aria-expanded": megaOpen,
                          "aria-haspopup": "true",
                          children: [
                            "Services",
                            /* @__PURE__ */ jsx(
                              ChevronDown,
                              {
                                className: cn(
                                  "h-3.5 w-3.5 transition-transform duration-300",
                                  megaOpen && "rotate-180"
                                )
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { className: "absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: cn(
                            "absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1180px] max-w-[calc(100vw-3rem)]",
                            "transition-all duration-200",
                            megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                          ),
                          children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[#EAEAEA]/60 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.18)]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-6", children: [
                            serviceColumns.map((col) => /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h4", { className: "mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]", children: col.heading }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: col.items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                                Link,
                                {
                                  to: item.href,
                                  className: "group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-300 hover:bg-[#FFF4E8] hover:-translate-y-[3px]",
                                  children: [
                                    /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-[#EAEAEA] text-foreground/70 group-hover:text-[#FC9C44] group-hover:border-[#FC9C44]/25 transition-all duration-200", children: /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }) }),
                                    /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                                      /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-foreground", children: item.title }),
                                      /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground", children: item.desc })
                                    ] })
                                  ]
                                }
                              ) }, item.title)) })
                            ] }, col.heading)),
                            /* @__PURE__ */ jsxs(
                              motion.div,
                              {
                                initial: { opacity: 0, y: 10 },
                                animate: megaOpen ? { opacity: 1, y: 0 } : {},
                                transition: { duration: 0.4 },
                                className: "rounded-xl bg-[#FC9C44] p-6 text-white flex flex-col justify-between",
                                children: [
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                                      /* @__PURE__ */ jsx("div", { className: "text-5xl font-black tracking-tight text-white leading-none", children: /* @__PURE__ */ jsx(StatCounter, { target: 300, suffix: "+", trigger: hasMegaOpened }) }),
                                      /* @__PURE__ */ jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.1em] text-white/60", children: "Projects Delivered" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                      /* @__PURE__ */ jsx("h5", { className: "text-base font-bold leading-snug", children: "Building Modern Digital Experiences" }),
                                      /* @__PURE__ */ jsx("p", { className: "text-xs text-white/75 leading-relaxed font-normal", children: "We help businesses build scalable websites, digital products, and growth-focused solutions that drive measurable results." })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      whileHover: { scale: 1.03 },
                                      transition: { duration: 0.2 },
                                      className: "w-full mt-6",
                                      children: /* @__PURE__ */ jsxs(
                                        Link,
                                        {
                                          to: "/contact",
                                          className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-xs xl:text-sm font-semibold text-foreground hover:bg-white/90 transition-colors whitespace-nowrap",
                                          children: [
                                            "Schedule a Strategy Call",
                                            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 shrink-0" })
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
                navLinks.map((l) => /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: l.to,
                    className: "group relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]",
                    children: [
                      l.label,
                      /* @__PURE__ */ jsx("span", { className: "absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" })
                    ]
                  },
                  l.to
                ))
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative hidden lg:block",
                    onMouseEnter: () => setCountryOpen(true),
                    onMouseLeave: () => setCountryOpen(false),
                    children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          className: "flex items-center gap-2 rounded-full border border-[#EAEAEA]/80 px-3.5 py-2 text-sm font-medium text-foreground/80 hover:bg-[#FFF4E8] hover:text-foreground transition-colors",
                          "aria-haspopup": "true",
                          "aria-expanded": countryOpen,
                          children: [
                            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: active.flag }),
                            /* @__PURE__ */ jsx("span", { className: "hidden xl:inline", children: active.name }),
                            /* @__PURE__ */ jsx(
                              ChevronDown,
                              {
                                className: cn("h-3.5 w-3.5 transition-transform", countryOpen && "rotate-180")
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: cn(
                            "absolute right-0 top-full pt-2 w-72 transition-all duration-200",
                            countryOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                          ),
                          children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#EAEAEA]/60 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.2)]", children: [
                            /* @__PURE__ */ jsx("div", { className: "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: "Select your region" }),
                            countries.map((c) => /* @__PURE__ */ jsxs(
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
                                  /* @__PURE__ */ jsx("span", { className: "text-xl leading-none", children: c.flag }),
                                  /* @__PURE__ */ jsxs("span", { className: "flex-1 min-w-0", children: [
                                    /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-foreground", children: c.name }),
                                    /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground", children: c.region })
                                  ] }),
                                  activeCountry === c.code && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#FC9C44]" })
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
                /* @__PURE__ */ jsxs(
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
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
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
                    children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors",
                    onClick: () => setMobileOpen(true),
                    "aria-label": "Open menu",
                    children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        "aria-hidden": !mobileOpen,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50", onClick: () => setMobileOpen(false) }),
          /* @__PURE__ */ jsxs(
            "aside",
            {
              className: cn(
                "absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300",
                mobileOpen ? "translate-x-0" : "translate-x-full"
              ),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex h-60 items-center justify-between border-b border-border px-5", children: [
                  /* @__PURE__ */ jsx("img", { src: logoAsset, alt: "HEXGCORP", className: "h-20 w-auto" }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted",
                      onClick: () => setMobileOpen(false),
                      "aria-label": "Close menu",
                      children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("nav", { className: "flex-1 overflow-y-auto px-3 py-4", children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      onClick: () => setMobileServicesOpen((v) => !v),
                      children: [
                        "Services",
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")
                          }
                        )
                      ]
                    }
                  ),
                  mobileServicesOpen && /* @__PURE__ */ jsx("div", { className: "mb-2 ml-2 mt-1 space-y-3 border-l border-[#EAEAEA] pl-3", children: serviceColumns.map((col) => /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]", children: col.heading }),
                    col.items.map((item) => /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: item.href,
                        onClick: () => setMobileOpen(false),
                        className: "flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-[#FFF4E8]",
                        children: [
                          /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-muted-foreground" }),
                          item.title
                        ]
                      },
                      item.title
                    ))
                  ] }, col.heading)) }),
                  navLinks.map((l) => /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: l.to,
                      onClick: () => setMobileOpen(false),
                      className: "block rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      children: l.label
                    },
                    l.to
                  )),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "mt-2 flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]",
                      onClick: () => setMobileCountriesOpen((v) => !v),
                      children: [
                        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
                          "Countries"
                        ] }),
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: cn("h-4 w-4 transition-transform", mobileCountriesOpen && "rotate-180")
                          }
                        )
                      ]
                    }
                  ),
                  mobileCountriesOpen && /* @__PURE__ */ jsx("div", { className: "ml-2 mt-1 space-y-1 border-l border-[#EAEAEA] pl-3", children: countries.map((c) => /* @__PURE__ */ jsxs(
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
                        /* @__PURE__ */ jsx("span", { className: "text-lg", children: c.flag }),
                        c.name,
                        activeCountry === c.code && /* @__PURE__ */ jsx(Check, { className: "ml-auto h-4 w-4 text-[#FC9C44]" })
                      ]
                    },
                    c.code
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "border-t border-[#EAEAEA] p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/free-growth-audit",
                      onClick: () => setMobileOpen(false),
                      className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FC9C44] px-5 py-3 hover:bg-[#E88C35] text-sm font-semibold text-white",
                      children: [
                        "Get Free Growth Audit",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "tel:+918369207836",
                      onClick: () => trackContactClick("phone", "mobile_menu_support_phone"),
                      className: "flex items-center justify-center gap-2 text-sm text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                        " Support: +91 836 920 7836"
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
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#1D2742] relative overflow-hidden grain-overlay", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none select-none absolute inset-0 overflow-hidden",
        style: { zIndex: 0 },
        children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none select-none absolute inset-0 overflow-hidden",
        style: { zIndex: 0 },
        children: /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { style: { position: "relative", zIndex: 1 }, children: [
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/[0.06]" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "mx-auto max-w-[1280px] px-6 lg:px-10",
          style: {
            paddingTop: "clamp(32px, 3.5vw, 48px)",
            paddingBottom: "clamp(32px, 3.5vw, 48px)"
          },
          children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-10 gap-y-10 items-start", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5", children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "self-start", "aria-label": "Hegxcorp home", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: logoAsset,
                  alt: "Hegxcorp",
                  className: "h-8 w-auto brightness-0 invert",
                  style: { objectFit: "contain", objectPosition: "left" }
                }
              ) }),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-white/50 text-[13px] leading-[1.7] max-w-[250px]",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "A data-driven growth consultancy helping businesses generate more leads, sales, and revenue through SEO, paid advertising, and conversion optimisation."
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/free-growth-audit",
                  className: "self-start inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35] transition-colors duration-200",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    "Get Free Growth Audit ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: socialLinks.map((s) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: s.href,
                  "aria-label": s.label,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.09] text-white/35 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20",
                  children: /* @__PURE__ */ jsx(s.icon, { className: "h-3.5 w-3.5" })
                },
                s.label
              )) })
            ] }),
            Object.entries(footerLinks).map(([group, links]) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3.5", children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-[10px] font-bold uppercase tracking-[0.18em] text-white/35",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: group
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "w-5 h-px bg-white/10" }),
              /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: links.map((link) => /* @__PURE__ */ jsx("li", { children: "to" in link ? /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.to,
                  className: "group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: /* @__PURE__ */ jsx("span", { className: "transition-transform duration-200 ease-out group-hover:translate-x-[3px]", children: link.label })
                }
              ) : /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: /* @__PURE__ */ jsx("span", { className: "transition-transform duration-200 ease-out group-hover:translate-x-[3px]", children: link.label })
                }
              ) }, link.label)) })
            ] }, group))
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/[0.07]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 pt-4 pb-28 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "text-[11px] text-white/30 tracking-wide",
            style: { fontFamily: "'Inter', sans-serif" },
            children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Hegxcorp. All rights reserved."
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: [
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Terms of Service", to: "/terms-of-service" },
          { label: "Cookie Policy", to: "/cookie-policy" }
        ].map((link) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center max-w-[720px] mx-auto" : "max-w-[640px]",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]",
            style: { fontFamily: "'Inter', sans-serif" },
            children: tagline
          }
        ),
        /* @__PURE__ */ jsx(
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
        description && /* @__PURE__ */ jsx(
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
const Route$t = createFileRoute("/industries")({
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[640px] mx-auto space-y-6", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5" }),
          "Target Industries"
        ] }),
        /* @__PURE__ */ jsx(
          SectionHeading,
          {
            align: "center",
            tagline: "Coming Soon",
            heading: "Industry vertical solutions & case benchmarks",
            description: "We are structuring our digital growth playbooks tailored for E-commerce, B2B Enterprise SaaS, Healthcare, FinTech, and Professional Services sectors."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 flex justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/free-growth-audit",
              className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-all",
              children: [
                "Request Growth Audit ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const leadSourceDataSchema = z.object({
  leadSource: z.string().optional(),
  leadMedium: z.string().optional(),
  leadCampaign: z.string().optional(),
  leadAdSet: z.string().optional(),
  leadAd: z.string().optional(),
  leadLandingPage: z.string().optional(),
  leadReferrer: z.string().optional()
});
const growthAuditInquiryInputSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name"
  }),
  email: z.string().email({
    message: "Please enter a valid business email"
  }),
  website: z.string().min(4, {
    message: "Please enter your website"
  }),
  visitorId: z.string().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  revenueRange: z.string().min(1, {
    message: "Please select your annual revenue range"
  }),
  goal: z.string().min(1, {
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
}).validator(z.object({
  id: z.string().min(1),
  status: z.enum(inquiryStatuses)
})).handler(createSsrRpc("52de78cfc2ef0447325f4709a52d1693596e35786b45728b298c52f041d7fb95"));
const Route$s = createFileRoute("/free-growth-audit")({
  head: () => ({
    meta: [
      { title: "Get Your Free Custom Growth Audit | Hegxcorp" },
      {
        name: "description",
        content: "Request a custom-tailored search optimization, advertising, and conversion rate audit from our consultants. Free of charge, no obligation."
      },
      { property: "og:title", content: "Free Custom Digital Growth Audit | Hegxcorp" },
      {
        property: "og:description",
        content: "Optimize your customer acquisition funnel. Claim your free SEO and PPC growth audit."
      }
    ]
  }),
  component: FreeGrowthAuditPage
});
const auditSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid business email address" }),
  website: z.string().min(4, { message: "Please enter your company website domain (e.g. brand.com)" }),
  revenueRange: z.string().min(1, { message: "Please select your annual revenue range" }),
  goal: z.string().min(1, { message: "Please select your primary growth target" })
});
const revenueOptions = [
  { label: "Under $1M ARR", value: "under-1m" },
  { label: "$1M - $5M ARR", value: "1m-5m" },
  { label: "$5M - $20M ARR", value: "5m-20m" },
  { label: "$20M+ ARR", value: "above-20m" }
];
const goalOptions = [
  { label: "Increase Qualified Organic Leads", value: "organic-leads" },
  { label: "Reduce Customer Acquisition Cost (CAC)", value: "reduce-cac" },
  { label: "Build a Scalable Search Strategy (SEO)", value: "seo" },
  { label: "Increase E-Commerce ROAS / Revenue", value: "ecommerce-roas" },
  { label: "Rebuild Website / Custom Application", value: "engineering" }
];
function FreeGrowthAuditPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasTrackedFormStartRef = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      revenueRange: "",
      goal: ""
    }
  });
  const selectedRevenue = watch("revenueRange");
  const selectedGoal = watch("goal");
  const nextStep = async () => {
    const fieldsToValidate = ["name", "email", "website"];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(2);
    } else {
      toast.error("Please Fill  all value in fields .");
    }
  };
  const prevStep = () => {
    setStep(1);
  };
  const onSubmit = async (data) => {
    try {
      await submitGrowthAuditInquiry({
        data: {
          ...data,
          visitorId: getVisitorId(),
          leadSourceData: getLeadSourceData()
        }
      });
      trackLead({
        form_name: "growth_audit_form",
        lead_source: "Free growth audit page",
        revenue_range: data.revenueRange,
        goal: data.goal
      });
      toast.success("Audit request submitted successfully! We will analyze your site shortly.");
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Growth audit form failed:", error);
      toast.error("We could not save your audit request. Please try again.");
    }
  };
  function trackFormStart() {
    if (hasTrackedFormStartRef.current) return;
    hasTrackedFormStartRef.current = true;
    trackEvent("form_start", {
      form_name: "growth_audit_form"
    });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-right", richColors: true }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          SectionHeading,
          {
            tagline: "Free Growth Audit",
            heading: "Claim a custom-engineered roadmap to scale your business",
            description: "We don't send generic PDF reports. Our specialists spend 3-4 hours studying your actual traffic channels, core vitals, ad campaigns, and checkout UX before sending you a personalized breakdown."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3.5 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-sm font-bold text-[#232323]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "100% Confidential"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-xs text-[#6B7280] leading-relaxed mt-0.5",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "We respect your IP. Your website URLs, statistics, and business data are never shared."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3.5 items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-sm font-bold text-[#232323]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "No Commitment Required"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-xs text-[#6B7280] leading-relaxed mt-0.5",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "The growth audit is yours to keep, whether you decide to work with our team or execute it internally."
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-5 sm:p-8 lg:p-10 shadow-[0_20px_48px_-20px_rgba(29,39,66,0.08)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs text-[#6B7280] uppercase tracking-wider mb-2.5 font-bold", children: [
            /* @__PURE__ */ jsx("span", { children: isSubmitted ? "Complete" : `Step ${step} of 2` }),
            /* @__PURE__ */ jsx("span", { children: isSubmitted ? "100%" : step === 1 ? "50%" : "90%" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-[#EAEAEA] rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "h-full bg-[#FC9C44]",
              initial: { width: "0%" },
              animate: { width: isSubmitted ? "100%" : step === 1 ? "50%" : "90%" },
              transition: { duration: 0.3 }
            }
          ) })
        ] }),
        isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-10 space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-xl font-bold text-[#232323]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "Audit Request Logged!"
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-sm text-[#6B7280] leading-relaxed max-w-[380px] mx-auto",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Thanks for claiming your audit. Our analysts are beginning their manual review of your website. We will deliver the audit to your business email in the next 3–4 business days."
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsSubmitted(false);
                setStep(1);
              },
              className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#FC9C44] hover:underline",
              children: "Submit another audit request"
            }
          )
        ] }) : /* @__PURE__ */ jsx(
          "form",
          {
            onSubmit: handleSubmit(onSubmit),
            onFocusCapture: trackFormStart,
            className: "space-y-6",
            children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: step === 1 ? (
              /* STEP 1: Profile Details */
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 10 },
                  transition: { duration: 0.2 },
                  className: "space-y-5",
                  children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-base font-bold text-[#232323]",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: "Tell us about your brand"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                        /* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                        "Your Name"
                      ] }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. Priya Sharma",
                          ...register("name"),
                          className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.name.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                        /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                        "Business Email"
                      ] }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          placeholder: "e.g. priya@retailbrand.in",
                          ...register("email"),
                          className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.email.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: [
                        /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                        "Company Website"
                      ] }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g. retailbrand.in",
                          ...register("website"),
                          className: `w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF] ${errors.website ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`
                        }
                      ),
                      errors.website && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.website.message })
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: nextStep,
                        className: "w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all cursor-pointer",
                        children: [
                          /* @__PURE__ */ jsx("span", { children: "Continue to Goals" }),
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                        ]
                      }
                    )
                  ]
                },
                "step-1"
              )
            ) : (
              /* STEP 2: Revenue & Goals */
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 10 },
                  transition: { duration: 0.2 },
                  className: "space-y-5",
                  children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-base font-bold text-[#232323]",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: "Choose your revenue scale and primary target"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: "Annual Revenue Range" }),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: revenueOptions.map((opt) => /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setValue("revenueRange", opt.value, { shouldValidate: true }),
                          className: `rounded-xl border p-3.5 text-xs font-semibold text-center transition-all ${selectedRevenue === opt.value ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm" : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"}`,
                          children: opt.label
                        },
                        opt.value
                      )) }),
                      errors.revenueRange && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.revenueRange.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]", children: "Primary Focus Goal" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: goalOptions.map((opt) => /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => setValue("goal", opt.value, { shouldValidate: true }),
                          className: `w-full text-left rounded-xl border p-3.5 text-xs font-semibold flex items-center justify-between transition-all ${selectedGoal === opt.value ? "bg-[#1D2742] border-[#1D2742] text-white shadow-sm" : "bg-white border-[#EAEAEA] text-[#232323] hover:border-[#FC9C44]/40"}`,
                          children: [
                            /* @__PURE__ */ jsx("span", { children: opt.label }),
                            /* @__PURE__ */ jsx(
                              Target,
                              {
                                className: `h-3.5 w-3.5 ${selectedGoal === opt.value ? "text-[#EBB771]" : "text-[#9CA3AF]"}`
                              }
                            )
                          ]
                        },
                        opt.value
                      )) }),
                      errors.goal && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 font-medium", children: errors.goal.message })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-2", children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: prevStep,
                          className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#EAEAEA] bg-white px-4 py-3.5 text-sm font-semibold text-[#6B7280] hover:text-[#232323] hover:bg-[#FAFAF8] transition-all cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                            /* @__PURE__ */ jsx("span", { children: "Back" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "submit",
                          disabled: isSubmitting,
                          className: "flex-[2] inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 cursor-pointer",
                          children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                            /* @__PURE__ */ jsx("span", { children: "Submitting..." })
                          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx("span", { children: "Claim Free Audit" }),
                            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
                          ] })
                        }
                      )
                    ] })
                  ]
                },
                "step-2"
              )
            ) })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./cookie-policy-DD1O3m3b.js");
const Route$r = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [{
      title: "Cookie Policy | Hegxcorp"
    }, {
      name: "description",
      content: "Learn how cookies and similar technologies may be used on the Hegxcorp website."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const ShapeGrid = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  shape = "square",
  hoverTrailAmount = 0,
  staticMode = false,
  className = ""
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const trailCells = useRef([]);
  const cellOpacities = useRef(/* @__PURE__ */ new Map());
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const isHex = shape === "hexagon";
    const isTri = shape === "triangle";
    const hexHoriz = squareSize * 1.5;
    const hexVert = squareSize * Math.sqrt(3);
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };
    resizeCanvas();
    const drawHex = (cx, cy, size) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i;
        const vx = cx + size * Math.cos(angle);
        const vy = cy + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(vx, vy);
        else ctx.lineTo(vx, vy);
      }
      ctx.closePath();
    };
    const drawCircle = (cx, cy, size) => {
      ctx.beginPath();
      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
      ctx.closePath();
    };
    const drawTriangle = (cx, cy, size, flip) => {
      ctx.beginPath();
      if (flip) {
        ctx.moveTo(cx, cy + size / 2);
        ctx.lineTo(cx + size / 2, cy - size / 2);
        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);
        ctx.lineTo(cx + size / 2, cy + size / 2);
        ctx.lineTo(cx - size / 2, cy + size / 2);
      }
      ctx.closePath();
    };
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = (gridOffset.current.x % hexHoriz + hexHoriz) % hexHoriz;
        const offsetY = (gridOffset.current.y % hexVert + hexVert) % hexVert;
        const cols = Math.ceil(canvas.width / hexHoriz) + 3;
        const rows2 = Math.ceil(canvas.height / hexVert) + 3;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows2; row++) {
            const cx = col * hexHoriz + offsetX;
            const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawHex(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawHex(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const colShift = Math.floor(gridOffset.current.x / halfW);
        const rowShift = Math.floor(gridOffset.current.y / squareSize);
        const offsetX = (gridOffset.current.x % halfW + halfW) % halfW;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / halfW) + 4;
        const rows2 = Math.ceil(canvas.height / squareSize) + 4;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows2; row++) {
            const cx = col * halfW + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const flip = ((col + colShift + row + rowShift) % 2 + 2) % 2 !== 0;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawTriangle(cx, cy, squareSize, flip);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawTriangle(cx, cy, squareSize, flip);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else if (shape === "circle") {
        const offsetX = (gridOffset.current.x % squareSize + squareSize) % squareSize;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows2 = Math.ceil(canvas.height / squareSize) + 3;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows2; row++) {
            const cx = col * squareSize + squareSize / 2 + offsetX;
            const cy = row * squareSize + squareSize / 2 + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              drawCircle(cx, cy, squareSize);
              ctx.fillStyle = hoverFillColor;
              ctx.fill();
              ctx.globalAlpha = 1;
            }
            drawCircle(cx, cy, squareSize);
            ctx.strokeStyle = borderColor;
            ctx.stroke();
          }
        }
      } else {
        const offsetX = (gridOffset.current.x % squareSize + squareSize) % squareSize;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const cols = Math.ceil(canvas.width / squareSize) + 3;
        const rows2 = Math.ceil(canvas.height / squareSize) + 3;
        for (let col = -2; col < cols; col++) {
          for (let row = -2; row < rows2; row++) {
            const sx = col * squareSize + offsetX;
            const sy = row * squareSize + offsetY;
            const cellKey = `${col},${row}`;
            const alpha = cellOpacities.current.get(cellKey);
            if (alpha) {
              ctx.globalAlpha = alpha;
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(sx, sy, squareSize, squareSize);
              ctx.globalAlpha = 1;
            }
            ctx.strokeStyle = borderColor;
            ctx.strokeRect(sx, sy, squareSize, squareSize);
          }
        }
      }
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    if (staticMode) {
      drawGrid();
      const handleResize = () => {
        resizeCanvas();
        drawGrid();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      const wrapX = isHex ? hexHoriz * 2 : squareSize;
      const wrapY = isHex ? hexVert : isTri ? squareSize * 2 : squareSize;
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY;
          break;
      }
      updateCellOpacities();
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };
    const updateCellOpacities = () => {
      const targets = /* @__PURE__ */ new Map();
      if (hoveredSquare.current) {
        targets.set(`${hoveredSquare.current.x},${hoveredSquare.current.y}`, 1);
      }
      if (hoverTrailAmount > 0) {
        for (let i = 0; i < trailCells.current.length; i++) {
          const t = trailCells.current[i];
          const key = `${t.x},${t.y}`;
          if (!targets.has(key)) {
            targets.set(key, (trailCells.current.length - i) / (trailCells.current.length + 1));
          }
        }
      }
      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) {
          cellOpacities.current.set(key, 0);
        }
      }
      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;
        const next = opacity + (target - opacity) * 0.15;
        if (next < 5e-3) {
          cellOpacities.current.delete(key);
        } else {
          cellOpacities.current.set(key, next);
        }
      }
    };
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      if (isHex) {
        const colShift = Math.floor(gridOffset.current.x / hexHoriz);
        const offsetX = (gridOffset.current.x % hexHoriz + hexHoriz) % hexHoriz;
        const offsetY = (gridOffset.current.y % hexVert + hexVert) % hexVert;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / hexHoriz);
        const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0;
        const row = Math.round((adjustedY - rowOffset) / hexVert);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount)
              trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (isTri) {
        const halfW = squareSize / 2;
        const offsetX = (gridOffset.current.x % halfW + halfW) % halfW;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / halfW);
        const row = Math.floor(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount)
              trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else if (shape === "circle") {
        const offsetX = (gridOffset.current.x % squareSize + squareSize) % squareSize;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.round(adjustedX / squareSize);
        const row = Math.round(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount)
              trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      } else {
        const offsetX = (gridOffset.current.x % squareSize + squareSize) % squareSize;
        const offsetY = (gridOffset.current.y % squareSize + squareSize) % squareSize;
        const adjustedX = mouseX - offsetX;
        const adjustedY = mouseY - offsetY;
        const col = Math.floor(adjustedX / squareSize);
        const row = Math.floor(adjustedY / squareSize);
        if (!hoveredSquare.current || hoveredSquare.current.x !== col || hoveredSquare.current.y !== row) {
          if (hoveredSquare.current && hoverTrailAmount > 0) {
            trailCells.current.unshift({ ...hoveredSquare.current });
            if (trailCells.current.length > hoverTrailAmount)
              trailCells.current.length = hoverTrailAmount;
          }
          hoveredSquare.current = { x: col, y: row };
        }
      }
    };
    const handleMouseLeave = () => {
      if (hoveredSquare.current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...hoveredSquare.current });
        if (trailCells.current.length > hoverTrailAmount)
          trailCells.current.length = hoverTrailAmount;
      }
      hoveredSquare.current = null;
    };
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    direction,
    speed,
    borderColor,
    hoverFillColor,
    squareSize,
    shape,
    hoverTrailAmount,
    staticMode
  ]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: `shapegrid-canvas ${className}` });
};
const Route$q = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Our Growth Consulting Team | Hegxcorp" },
      {
        name: "description",
        content: "Get in touch with Hegxcorp's digital transformation consultants. Let's discuss your growth targets, SEO opportunities, and ad performance audit."
      },
      { property: "og:title", content: "Contact Hegxcorp | Enterprise Growth Partners" },
      {
        property: "og:description",
        content: "Connect with us to schedule a strategy call or request a detailed SEO and marketing audit."
      }
    ]
  }),
  component: ContactPage
});
const serviceGroups = [
  {
    title: "Development",
    services: [
      { name: "Web Development", desc: "Scalable, modern websites" },
      { name: "Custom Web Applications", desc: "Tailored platforms" },
      { name: "WordPress Development", desc: "Premium WP builds" },
      { name: "Ecommerce Development", desc: "Stores that convert" }
    ]
  },
  {
    title: "Marketing",
    services: [
      { name: "SEO", desc: "Rank where it matters" },
      { name: "PPC", desc: "Performance ad campaigns" },
      { name: "Social Media Marketing", desc: "Engage and grow" },
      { name: "Content Marketing", desc: "Stories that scale" }
    ]
  },
  {
    title: "Design",
    services: [
      { name: "UI/UX Design", desc: "Human-centered design" },
      { name: "Branding", desc: "Identities with intent" },
      { name: "Graphic Design", desc: "Visual storytelling" }
    ]
  }
];
const fullNamePattern = /^[A-Za-z\s]+$/;
const fullNameCharacterPattern = /^[A-Za-z\s]$/;
const phoneNumberPattern = /^\d+$/;
const phoneNumberCharacterPattern = /^\d$/;
const defaultPhoneCountryCode = "+91";
const fieldBaseClass = "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all placeholder:text-[#9CA3AF]";
const selectBaseClass = "w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#232323] outline-none transition-all";
const errorMessageClass = "text-xs font-medium text-red-500";
function getFieldClass(hasError) {
  return `${fieldBaseClass} ${hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`;
}
function getSelectClass(hasError) {
  return `${selectBaseClass} ${hasError ? "border-red-500 focus:border-red-500" : "border-[#EAEAEA] focus:border-[#FC9C44]"}`;
}
function getPhoneFieldClass(hasError) {
  return `flex overflow-hidden rounded-lg border bg-white transition-all focus-within:border-[#FC9C44] ${hasError ? "border-red-500 focus-within:border-red-500" : "border-[#EAEAEA]"}`;
}
function getServiceButtonClass(hasError) {
  return `flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${hasError ? "border-red-500" : "border-[#EAEAEA] hover:border-[#FC9C44]"}`;
}
function blockInvalidNameKey(event, onInvalidInput) {
  if (event.key.length === 1 && !fullNameCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidNamePaste(event, onInvalidInput) {
  const pastedText = event.clipboardData.getData("text");
  if (!fullNamePattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidPhoneKey(event, onInvalidInput) {
  if (event.key.length === 1 && !phoneNumberCharacterPattern.test(event.key)) {
    event.preventDefault();
    onInvalidInput();
  }
}
function blockInvalidPhonePaste(event, onInvalidInput) {
  const pastedText = event.clipboardData.getData("text");
  if (!phoneNumberPattern.test(pastedText)) {
    event.preventDefault();
    onInvalidInput();
  }
}
const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).min(2, { message: "Name must be at least 2 characters" }).regex(fullNamePattern, { message: "Please enter alphabets only" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().trim().min(1, { message: "Please enter your number" }).regex(phoneNumberPattern, { message: "Please enter digits only" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  budget: z.string().min(1, { message: "Please select a budget" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" })
});
function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const serviceDropdownRef = useRef(null);
  const hasTrackedFormStartRef = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      services: [],
      budget: "",
      timeline: ""
    }
  });
  const selectedServices = watch("services") || [];
  useEffect(() => {
    if (!isServiceOpen) return;
    function closeServiceDropdown(event) {
      if (!serviceDropdownRef.current?.contains(event.target)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", closeServiceDropdown);
    document.addEventListener("touchstart", closeServiceDropdown);
    return () => {
      document.removeEventListener("mousedown", closeServiceDropdown);
      document.removeEventListener("touchstart", closeServiceDropdown);
    };
  }, [isServiceOpen]);
  function handleServiceDropdownWheel(event) {
    const dropdown = event.currentTarget;
    if (dropdown.scrollHeight <= dropdown.clientHeight) return;
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    dropdown.scrollTop += event.deltaY;
  }
  const onSubmit = async (data) => {
    try {
      await submitContactInquiry({
        data: {
          ...data,
          phone: `${defaultPhoneCountryCode} ${data.phone}`,
          visitorId: getVisitorId(),
          leadSourceData: getLeadSourceData(),
          source: "Contact page"
        }
      });
      trackLead({
        form_name: "contact_form",
        lead_source: "Contact page",
        services: data.services.join(", "),
        budget: data.budget,
        timeline: data.timeline
      });
      toast.success("Message saved successfully! Our growth strategists will contact you shortly.");
      setIsSubmitted(true);
      setIsServiceOpen(false);
      reset();
    } catch (error) {
      console.error("Contact form failed:", error);
      toast.error("We could not save your message. Please try again.");
    }
  };
  function trackFormStart() {
    if (hasTrackedFormStartRef.current) return;
    hasTrackedFormStartRef.current = true;
    trackEvent("form_start", {
      form_name: "contact_form"
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-right", richColors: true }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 select-none",
          style: { opacity: 0.2 },
          children: /* @__PURE__ */ jsx(
            ShapeGrid,
            {
              shape: "hexagon",
              squareSize: 38,
              borderColor: "rgba(29,39,66,0.3)",
              hoverFillColor: "transparent",
              hoverTrailAmount: 0,
              staticMode: false,
              speed: 0.2,
              className: "w-full h-full"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
            className: "space-y-10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx(
                  SectionHeading,
                  {
                    tagline: "Connect With Us",
                    heading: "Let's Talk About Growth",
                    description: "Whether you're looking to scale organic traffic, improve paid advertising performance, or build a high-converting website, our team is ready to help you identify the fastest path forward."
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex flex-wrap gap-x-6 gap-y-3 pt-2 text-[#4A5568] border-b border-[#EAEAEA]/80 pb-6",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-10", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "Response within 24 hours" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-10", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "Free strategy consultation" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-10", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-[#FC9C44] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-wide uppercase", children: "No-obligation growth assessment" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "tel:+918369207836",
                    onClick: () => trackContactClick("phone", "contact_page_hotline"),
                    className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Direct Hotline"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: "+91 836 920 7836"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "mailto:hegxcorp@gmail.com",
                    onClick: () => trackContactClick("email", "contact_page_email"),
                    className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Inquiries"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-sm font-semibold text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: "hegxcorp@gmail.com"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "group flex gap-4 items-start cursor-pointer w-fit transition-transform duration-300 ease-out hover:translate-x-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44] group-hover:bg-[#FC9C44] group-hover:text-white transition-all duration-300", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280] transition-colors group-hover:text-[#FC9C44] duration-300",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "ADDRESS"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-sm text-[#232323] group-hover:text-[#FC9C44] transition-colors duration-300 leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East) Mumbai, Maharashtra 400063"
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
            className: "rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-8 shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] lg:p-10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-lg font-bold text-[#232323]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "Send a secure message"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#F5D5B6] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: "Fast reply" })
              ] }),
              isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-10 space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsx(
                  "h4",
                  {
                    className: "text-base font-bold text-[#232323]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "Thank you! Message Received"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm text-[#6B7280] leading-relaxed max-w-[340px] mx-auto",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: "We've logged your request. One of our growth advisors will reach out to you via email within the next business day."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setIsSubmitted(false),
                    className: "mt-4 text-xs font-semibold text-[#FC9C44] hover:underline",
                    children: "Send another message"
                  }
                )
              ] }) : /* @__PURE__ */ jsxs(
                "form",
                {
                  onSubmit: handleSubmit(onSubmit),
                  onFocusCapture: trackFormStart,
                  className: "space-y-5",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "name",
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Full Name"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "text",
                            id: "name",
                            placeholder: "e.g. Priya Sharma",
                            ...register("name", { onChange: () => clearErrors("name") }),
                            onKeyDown: (event) => blockInvalidNameKey(
                              event,
                              () => setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only"
                              })
                            ),
                            onPaste: (event) => blockInvalidNamePaste(
                              event,
                              () => setError("name", {
                                type: "manual",
                                message: "Please enter alphabets only"
                              })
                            ),
                            className: getFieldClass(Boolean(errors.name))
                          }
                        ),
                        errors.name && /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: errorMessageClass,
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: errors.name.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "phone",
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Phone Number"
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: getPhoneFieldClass(Boolean(errors.phone)), children: [
                          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center border-r border-[#EAEAEA] bg-[#F9FAFB] px-4 text-sm font-bold text-[#06133D]", children: defaultPhoneCountryCode }),
                          /* @__PURE__ */ jsx(
                            "input",
                            {
                              type: "tel",
                              id: "phone",
                              inputMode: "numeric",
                              placeholder: "9876543210",
                              ...register("phone", { onChange: () => clearErrors("phone") }),
                              onKeyDown: (event) => blockInvalidPhoneKey(
                                event,
                                () => setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only"
                                })
                              ),
                              onPaste: (event) => blockInvalidPhonePaste(
                                event,
                                () => setError("phone", {
                                  type: "manual",
                                  message: "Please enter digits only"
                                })
                              ),
                              className: "min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#232323] outline-none placeholder:text-[#9CA3AF] placeholder:opacity-50"
                            }
                          )
                        ] }),
                        errors.phone && /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: errorMessageClass,
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: errors.phone.message
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "email",
                          className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: "Business Email"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          id: "email",
                          placeholder: "e.g. priya@retailbrand.in",
                          ...register("email"),
                          className: getFieldClass(Boolean(errors.email))
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: errorMessageClass,
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: errors.email.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: "Services Required"
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { ref: serviceDropdownRef, className: "relative", children: [
                        /* @__PURE__ */ jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setIsServiceOpen((value) => !value),
                            className: getServiceButtonClass(Boolean(errors.services)),
                            children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: selectedServices.length ? "font-semibold text-[#232323]" : "text-[#9CA3AF]",
                                  children: selectedServices.length ? `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected` : "Choose one or more services"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                ChevronDown,
                                {
                                  className: `h-4 w-4 text-[#FC9C44] transition-transform ${isServiceOpen ? "rotate-180" : ""}`
                                }
                              )
                            ]
                          }
                        ),
                        isServiceOpen && /* @__PURE__ */ jsx(
                          "div",
                          {
                            onWheel: handleServiceDropdownWheel,
                            className: "absolute left-0 right-0 z-30 mt-2 max-h-[190px] overflow-y-scroll overscroll-contain rounded-xl border border-[#EAEAEA] bg-white p-4 pr-2 shadow-[0_22px_60px_rgba(29,39,66,0.14)] [scrollbar-gutter:stable] sm:max-h-[210px]",
                            children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 pr-2 md:grid-cols-3", children: serviceGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: group.title }),
                              group.services.map((service) => /* @__PURE__ */ jsxs(
                                "label",
                                {
                                  className: "flex cursor-pointer gap-3 rounded-lg p-2 transition-colors hover:bg-[#FFF4E8]",
                                  children: [
                                    /* @__PURE__ */ jsx(
                                      "input",
                                      {
                                        type: "checkbox",
                                        value: service.name,
                                        ...register("services"),
                                        className: "mt-1 h-4 w-4 accent-[#FC9C44]"
                                      }
                                    ),
                                    /* @__PURE__ */ jsxs("span", { children: [
                                      /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold text-[#232323]", children: service.name }),
                                      /* @__PURE__ */ jsx("span", { className: "block text-xs text-[#6B7280]", children: service.desc })
                                    ] })
                                  ]
                                },
                                service.name
                              ))
                            ] }, group.title)) })
                          }
                        )
                      ] }),
                      selectedServices.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: selectedServices.map((service) => /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#FC9C44]",
                          children: service
                        },
                        service
                      )) }),
                      errors.services && /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: errorMessageClass,
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: errors.services.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "budget",
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Budget"
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "select",
                          {
                            id: "budget",
                            ...register("budget"),
                            className: getSelectClass(Boolean(errors.budget)),
                            children: [
                              /* @__PURE__ */ jsx("option", { value: "", children: "Select budget" }),
                              /* @__PURE__ */ jsx("option", { value: "Under Rs. 25,000", children: "Under Rs. 25,000" }),
                              /* @__PURE__ */ jsx("option", { value: "Rs. 25,000 - Rs. 50,000", children: "Rs. 25,000 - Rs. 50,000" }),
                              /* @__PURE__ */ jsx("option", { value: "Rs. 50,000 - Rs. 1,00,000", children: "Rs. 50,000 - Rs. 1,00,000" }),
                              /* @__PURE__ */ jsx("option", { value: "Above Rs. 1,00,000", children: "Above Rs. 1,00,000" })
                            ]
                          }
                        ),
                        errors.budget && /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: errorMessageClass,
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: errors.budget.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsx(
                          "label",
                          {
                            htmlFor: "timeline",
                            className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Timeline"
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "select",
                          {
                            id: "timeline",
                            ...register("timeline"),
                            className: getSelectClass(Boolean(errors.timeline)),
                            children: [
                              /* @__PURE__ */ jsx("option", { value: "", children: "Select timeline" }),
                              /* @__PURE__ */ jsx("option", { value: "Urgent", children: "Urgent" }),
                              /* @__PURE__ */ jsx("option", { value: "1-2 weeks", children: "1-2 weeks" }),
                              /* @__PURE__ */ jsx("option", { value: "1 month", children: "1 month" }),
                              /* @__PURE__ */ jsx("option", { value: "Flexible", children: "Flexible" })
                            ]
                          }
                        ),
                        errors.timeline && /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: errorMessageClass,
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: errors.timeline.message
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "message",
                          className: "block text-xs font-bold uppercase tracking-wider text-[#6B7280]",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: "How can we help?"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          rows: 5,
                          placeholder: "Tell us about your digital platforms, your timeline, and your specific growth targets...",
                          ...register("message"),
                          className: `${getFieldClass(Boolean(errors.message))} resize-none`
                        }
                      ),
                      errors.message && /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: errorMessageClass,
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: errors.message.message
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#E88C35] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                        children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                          /* @__PURE__ */ jsx("span", { children: "Sending inquiry..." })
                        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx("span", { children: "Submit Message" }),
                          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
                        ] })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const Route$p = createFileRoute("/case-studies")({
  component: () => /* @__PURE__ */ jsx(Outlet, {})
});
const Route$o = createFileRoute("/blog")({
  component: () => /* @__PURE__ */ jsx(Outlet, {})
});
const AdminContext = createContext(null);
function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used inside the /admin layout route.");
  }
  return context;
}
const adminLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(200),
  password: z.string().min(1, "Enter your password").max(200)
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
const Route$n = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin | Hegxcorp" }, { name: "robots", content: "noindex,nofollow" }]
  }),
  component: AdminLayout
});
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
  const [inquiries, setInquiries] = useState([]);
  const [growthAuditInquiries, setGrowthAuditInquiries] = useState([]);
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
  const pageTitle = isContactLeadsRoute ? "Contact Form submissions" : isGrowthLeadsRoute ? "Growth Audit submissions" : isBlogRoute ? "All Blogs" : isAddBlogRoute ? "Create blog post" : isAdLeadsRoute ? "Ad lead performance" : "Admin";
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
    return /* @__PURE__ */ jsx("main", { className: "grid min-h-screen place-items-center bg-[#F7F8FA] text-[#06133D]", children: /* @__PURE__ */ jsxs("div", { className: "grid place-items-center gap-4 text-sm font-bold", children: [
      /* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 animate-spin text-[#FC9C44]" }),
      "Checking secure session..."
    ] }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxs("main", { className: "relative grid min-h-screen place-items-center overflow-hidden bg-[#050B24] px-6 py-12 text-white", children: [
      /* @__PURE__ */ jsx(Toaster, { position: "top-right", richColors: true }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-32 top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#FC9C44]/15 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-48 right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-[#2359B8]/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto w-full max-w-[460px] -translate-y-25", children: /* @__PURE__ */ jsxs("section", { className: "w-full rounded-lg border border-white/10 bg-white p-7 text-center text-[#101828] shadow-2xl shadow-black/30 sm:p-10", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "mb-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-[#667085] transition hover:text-[#fcb044]",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back to website"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(LockKeyhole, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "mt-6 text-3xl font-black text-[#06133D]",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: "Admin login"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-6 text-[#667085]", children: "Sign in with your Hegxcorp administrator credentials." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "mt-8 grid gap-5 text-left", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#475467]", children: "Email address" }),
            /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(UserRound, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
              /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsxs("label", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#475467]", children: "Password" }),
            /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(LockKeyhole, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
              /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setShowPassword((current) => !current),
                  "aria-label": showPassword ? "Hide password" : "Show password",
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] transition hover:text-[#FC9C44]",
                  children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          error && /* @__PURE__ */ jsx(
            "div",
            {
              role: "alert",
              className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700",
              children: error
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: isLoggingIn,
              className: "mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-3 text-sm font-black text-white transition hover:bg-[#E88C35] disabled:cursor-not-allowed disabled:opacity-60",
              children: [
                isLoggingIn && /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
                isLoggingIn ? "Signing in..." : "Sign in"
              ]
            }
          )
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-[#F7F8FA] text-[#101828] lg:flex", children: [
        /* @__PURE__ */ jsx(Toaster, { position: "top-right", richColors: true }),
        /* @__PURE__ */ jsx("aside", { className: "border-b border-[#E4E7EC] bg-white lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:shrink-0 lg:border-b-0 lg:border-r", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-2 pb-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#FC9C44]", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
              "Hegxcorp Admin"
            ] }),
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "mt-2 text-2xl font-black text-[#06133D]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: "Lead Inbox"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setIsFormsMenuHovered(true),
                onMouseLeave: () => setIsFormsMenuHovered(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setIsFormsMenuOpen((current) => !current),
                      "aria-expanded": isFormsMenuVisible,
                      className: `flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isContactLeadsRoute || isGrowthLeadsRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                      children: [
                        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(
                            Inbox,
                            {
                              className: `h-4 w-4 ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                            }
                          ),
                          "Forms Leads"
                        ] }),
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: `h-4 w-4 transition ${isContactLeadsRoute || isGrowthLeadsRoute ? "text-white/70" : "text-[#98A2B3]"} ${isFormsMenuVisible ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  isFormsMenuVisible && /* @__PURE__ */ jsxs("div", { className: "absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none", children: [
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/admin/contact-leads",
                        onClick: () => {
                          setIsFormsMenuOpen(false);
                          setIsFormsMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isContactLeadsRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Inbox, { className: "h-4 w-4" }),
                            "Contact Leads"
                          ] }),
                          /* @__PURE__ */ jsx("span", { children: inquiries.length })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/admin/growth-leads",
                        onClick: () => {
                          setIsFormsMenuOpen(false);
                          setIsFormsMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isGrowthLeadsRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(ClipboardList, { className: "h-4 w-4" }),
                            "Growth Leads"
                          ] }),
                          /* @__PURE__ */ jsx("span", { children: growthAuditInquiries.length })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative",
                onMouseEnter: () => setIsBlogMenuHovered(true),
                onMouseLeave: () => setIsBlogMenuHovered(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/admin/blog",
                      onClick: () => setIsBlogMenuOpen(false),
                      "aria-expanded": isBlogMenuVisible,
                      className: `flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isBlogRoute || isAddBlogRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                      children: [
                        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(
                            BookOpenText,
                            {
                              className: `h-4 w-4 ${isBlogRoute || isAddBlogRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                            }
                          ),
                          "Blog"
                        ] }),
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: `h-4 w-4 transition ${isBlogRoute || isAddBlogRoute ? "text-white/70" : "text-[#98A2B3]"} ${isBlogMenuVisible ? "rotate-180" : ""}`
                          }
                        )
                      ]
                    }
                  ),
                  isBlogMenuVisible && /* @__PURE__ */ jsxs("div", { className: "absolute left-0 right-0 top-full z-20 mt-2 grid gap-2 border border-[#E4E7EC] bg-white p-2 shadow-xl shadow-[#06133D]/10 lg:static lg:shadow-none", children: [
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/admin/blog",
                        onClick: () => {
                          setIsBlogMenuOpen(false);
                          setIsBlogMenuHovered(false);
                        },
                        className: `flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isBlogRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(BookOpenText, { className: "h-4 w-4" }),
                            "All Blogs"
                          ] }),
                          /* @__PURE__ */ jsx("span", { children: blogPostCount })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/admin/add-blog",
                        onClick: () => {
                          setIsBlogMenuOpen(false);
                          setIsBlogMenuHovered(false);
                        },
                        className: `flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm font-bold transition ${isAddBlogRoute ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#E4E7EC] bg-white text-[#344054] hover:border-[#FC9C44]/50"}`,
                        children: [
                          /* @__PURE__ */ jsx(PlusCircle, { className: "h-4 w-4" }),
                          "Add Blog"
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/admin/ad-leads",
                className: `flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-black transition ${isAdLeadsRoute ? "bg-[#06133D] text-white" : "bg-white text-[#344054] hover:bg-[#F9FAFB] hover:text-[#06133D]"}`,
                children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    Megaphone,
                    {
                      className: `h-4 w-4 ${isAdLeadsRoute ? "text-[#FC9C44]" : "text-[#667085]"}`
                    }
                  ),
                  "Ad Leads"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto hidden border-t border-[#E4E7EC] pt-4 lg:block", children: /* @__PURE__ */ jsxs("p", { className: "px-2 text-xs font-semibold leading-5 text-[#667085]", children: [
            "Signed in as ",
            /* @__PURE__ */ jsx("span", { className: "font-black text-[#06133D]", children: email })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "border-b border-[#E4E7EC] bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-2xl font-black text-[#06133D] sm:text-3xl",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: pageTitle
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/",
                  className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                    "Website"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => void handleLogout(),
                  className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-red-300 hover:text-red-600",
                  children: [
                    /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }),
                    "Sign out"
                  ]
                }
              ),
              (isContactLeadsRoute || isGrowthLeadsRoute) && /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => void loadInquiries(),
                  disabled: isLoading,
                  className: "inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60",
                  children: [
                    /* @__PURE__ */ jsx(RefreshCw, { className: `h-4 w-4 ${isLoading ? "animate-spin" : ""}` }),
                    "Refresh"
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Outlet, {})
        ] })
      ] })
    }
  );
}
const ahrefsLogo = "data:image/webp;base64,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";
const hegxcorpStory = "/assets/hegxcorp-story-CH04ezgc.webp";
const majesticLogo = "data:image/webp;base64,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";
const mozLogo = "data:image/webp;base64,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";
const ourMission = "/assets/our-mission-CuHrmjRP.webp";
const ourStory = "/assets/our-story-C7rBGqNZ.webp";
const ourValues = "/assets/our-values-DGEYjPt7.webp";
const searchEngineLandLogo = "data:image/webp;base64,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";
const semrushLogo = "data:image/webp;base64,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";
const similarwebLogo = "data:image/webp;base64,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";
const Route$m = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hegxcorp | Digital Transformation & Growth Partners" },
      {
        name: "description",
        content: "Meet Hegxcorp, a Mumbai-founded digital growth agency helping businesses turn technology, design, and marketing into measurable progress."
      }
    ]
  }),
  component: AboutPage
});
const values = [
  {
    icon: Lightbulb,
    title: "Innovation for Growth",
    description: "We challenge familiar thinking and use technology, creativity, and insight to uncover better ways forward."
  },
  {
    icon: ShieldCheck,
    title: "Integrity in Every Pixel",
    description: "We communicate clearly, make responsible decisions, and build every partnership on trust and transparency."
  },
  {
    icon: BadgeCheck,
    title: "Excellence in Execution",
    description: "We care about the details—from the first strategic decision to the final experience your customers receive."
  },
  {
    icon: Handshake,
    title: "Collaboration Is Key",
    description: "The strongest outcomes come from working as one team, sharing context, and staying aligned from start to finish."
  }
];
const appreciationLogos = [
  { src: semrushLogo, alt: "Semrush" },
  { src: mozLogo, alt: "Moz" },
  { src: similarwebLogo, alt: "Similarweb" },
  { src: searchEngineLandLogo, alt: "Search Engine Land" },
  { src: majesticLogo, alt: "Majestic" },
  { src: ahrefsLogo, alt: "Ahrefs" }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen  bg-white text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative isolate min-h-[560px] overflow-hidden bg-white lg:min-h-[640px]", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 select-none",
            style: { opacity: 0.2 },
            children: /* @__PURE__ */ jsx(
              ShapeGrid,
              {
                shape: "hexagon",
                squareSize: 38,
                borderColor: "rgba(29,39,66,0.3)",
                hoverFillColor: "transparent",
                hoverTrailAmount: 0,
                staticMode: false,
                speed: 0.2,
                className: "h-full w-full"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto flex min-h-[560px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[800px] lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
            "About Hegxcorp"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl", children: "One partner for digital growth, built to help you stand out." }),
          /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-base leading-8 text-[#52607A] sm:text-lg", children: "We bring technology, design, and marketing together to help ambitious businesses build stronger brands, reach more people, and create lasting momentum." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/free-growth-audit",
                className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:-translate-y-0.5 hover:bg-[#ffad63]",
                children: [
                  "Claim Your Growth Audit ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/services",
                className: "inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-6 py-3.5 text-sm font-semibold text-[#06133D] shadow-sm transition hover:bg-[#FAFAF8]",
                children: "Explore Our Services"
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "relative py-20 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 -z-10 rounded-[2rem] bg-[#FFF4E8]" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: hegxcorpStory,
              alt: "Hegxcorp team collaborating on a global digital strategy",
              className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_24px_70px_rgba(6,19,61,0.16)]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-8 lg:pt-0", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]", children: "Who We Are" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl", children: "A forward-thinking partner for the digital world." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-[#52607A] sm:text-lg", children: "Hegxcorp legally known as AKSHAY JADIA ENTERPRISE is a technology, digital development, and marketing agency serving businesses across the world." }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-8 text-[#52607A] sm:text-lg", children: "We connect creative thinking with practical strategy so every website, campaign, and digital experience has a clear purpose: moving the business forward." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[#E8ECF5] bg-[#F8F9FC] p-5", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-[#FC9C44]" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 font-semibold", children: "Strategy with purpose" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[#E8ECF5] bg-[#F8F9FC] p-5", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-[#FC9C44]" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 font-semibold", children: "Work built to perform" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F7F8FB] py-20 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]", children: "Our Story" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl", children: "Where creativity meets strategy." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-[#52607A] sm:text-lg", children: "Founder Akshay Jadia started Hegxcorp in Mumbai in 2016 with a focused mission: help small and medium-sized businesses navigate the fast-changing world of digital marketing and design." }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-8 text-[#52607A] sm:text-lg", children: "From the beginning, the goal has been to make high-quality digital services more accessible and affordable—without losing the strategic thinking and care that create meaningful results." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: ourStory,
            alt: "A team discussing global digital opportunities",
            className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_24px_70px_rgba(6,19,61,0.14)]"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#06133D] py-20 text-white sm:py-24 lg:py-28", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#FC9C44]/15 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: ourMission,
              alt: "A connected world illustrating Hegxcorp's global mission",
              className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-1 ring-white/10"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]", children: "Our Mission" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl", children: "Turn digital challenges into opportunities for growth." }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/70 sm:text-lg", children: "Our mission is to empower businesses in the digital ecosystem by combining technology, thoughtful design, and results-led marketing." }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-8 text-white/70 sm:text-lg", children: "We help growing companies expand their reach, improve their visibility, and compete with confidence wherever their customers may be." }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/contact",
                className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FFB36E] transition hover:text-white",
                children: [
                  "Start a conversation ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]", children: "Our Values" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl", children: "The principles behind every partnership." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-8 text-[#52607A] sm:text-lg", children: "Our values shape how we think, collaborate, and deliver work that supports real business progress." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-14 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: ourValues,
              alt: "A creative workspace representing Hegxcorp's values",
              className: "h-full min-h-[420px] w-full rounded-[1.75rem] object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: values.map(({ icon: Icon, title, description }, index) => /* @__PURE__ */ jsxs(
            "article",
            {
              className: "group rounded-[1.5rem] border border-[#E7EAF2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FC9C44]/60 hover:shadow-[0_20px_50px_rgba(6,19,61,0.1)]",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1E3] text-[#E87922] transition group-hover:bg-[#FC9C44] group-hover:text-[#06133D]", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-[#06133D]/25", children: [
                    "0",
                    index + 1
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold", children: title }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-[#647089]", children: description })
              ]
            },
            title
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "border-y border-[#E8ECF5] bg-[#F7F8FB] py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]", children: "Appreciations" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 text-2xl font-bold sm:text-3xl", children: "Recognized across the digital landscape" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6", children: appreciationLogos.map((logo) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex min-h-40 items-center justify-center rounded-2xl border border-[#E5E9F2] bg-white px-5 py-6",
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: logo.src,
                alt: `${logo.alt} logo`,
                className: "h-25 max-w-full object-contain",
                loading: "lazy"
              }
            )
          },
          logo.alt
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 sm:py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#06133D] px-6 py-14 text-center text-white sm:px-12 sm:py-16", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FC9C44]/20 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#3A65FF]/20 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]", children: "Let's Grow Together" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl", children: "Ready to turn your next idea into measurable growth?" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70", children: "Tell us where you want to go. We'll help you find the clearest digital path to get there." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/free-growth-audit",
                className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:bg-[#ffad63]",
                children: [
                  "Get a Free Growth Audit ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10",
                children: "Contact Us"
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const dashboardMetrics = [
  {
    label: "Organic Traffic Growth",
    value: 310,
    prefix: "+",
    suffix: "%",
    icon: TrendingUp,
    color: "text-[#FC9C44]"
  },
  {
    label: "Qualified Leads",
    value: 184,
    prefix: "+",
    suffix: "%",
    icon: Users,
    color: "text-[#EBB771]"
  },
  {
    label: "ROAS Achieved",
    value: 4.8,
    prefix: "",
    suffix: "x",
    icon: BarChart3,
    color: "text-[#FC9C44]",
    decimals: 1
  },
  {
    label: "Client Satisfaction",
    value: 98,
    prefix: "+",
    suffix: "%",
    icon: Zap,
    color: "text-[#EBB771]"
  }
];
const cardVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3 + idx * 0.1, ease: "easeOut" }
  }),
  hover: {
    y: -4,
    borderColor: "#FC9C44",
    boxShadow: "0 12px 24px -8px rgba(29, 39, 66, 0.06)",
    backgroundColor: "rgba(255, 244, 232, 0.2)",
    transition: { duration: 0.2, ease: "easeOut" }
    // snappier 200ms transition
  }
};
const iconVariants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 2,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
    // 200ms snappy response
  }
};
function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-white",
      style: { paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 select-none",
            style: {
              opacity: 0.2
            },
            children: /* @__PURE__ */ jsx(
              ShapeGrid,
              {
                shape: "hexagon",
                squareSize: 38,
                borderColor: "rgba(29,39,66,0.3)",
                hoverFillColor: "transparent",
                hoverTrailAmount: 0,
                staticMode: false,
                speed: 0.2,
                className: "w-full h-full"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#FC9C44] shadow-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" }),
                  "Growth Consultancy & Digital Transformation Partner"
                ] }),
                /* @__PURE__ */ jsxs(
                  "h1",
                  {
                    className: "font-bold text-[#232323] leading-[1.08] tracking-tight",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(40px, 4.8vw, 68px)"
                    },
                    children: [
                      "Generate More",
                      " ",
                      /* @__PURE__ */ jsxs("span", { className: "relative", children: [
                        "Leads, Sales",
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "absolute bottom-0 left-0 right-0 h-[3px] rounded-full",
                            style: { background: "#FC9C44", bottom: "-4px" }
                          }
                        )
                      ] }),
                      " ",
                      "& Revenue"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "max-w-[540px] text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.2vw, 19px)" },
                    children: "We design and execute data-driven growth marketing systems, custom engineering, and search optimization built to position enterprise firms for compounding scale."
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/free-growth-audit",
                      className: "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 ease-out bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)]",
                      id: "hero-cta-audit",
                      children: [
                        "Get Free Growth Audit",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/case-studies",
                      className: "inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] bg-white px-7 py-3.5 text-sm font-semibold text-[#232323] transition-[background-color,border-color] duration-200 ease-out hover:bg-[#FFF4E8] hover:border-[#FC9C44]",
                      id: "hero-cta-case-studies",
                      children: "View Case Studies"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-xs text-[#6B7280]",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                      /* @__PURE__ */ jsx("span", { children: "Trusted by enterprise companies across India, USA, UK & UAE" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 30 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              className: "w-full",
              children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  animate: { y: [0, -6, 0] },
                  transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  whileHover: {
                    y: -10,
                    // subtle lift on hover
                    boxShadow: "0 32px 80px -20px rgba(29,39,66,0.16)",
                    transition: { duration: 0.25, ease: "easeOut" }
                  },
                  className: "relative rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-0.5 shadow-[0_24px_64px_-16px_rgba(29,39,66,0.12)] overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] rounded-t-2xl", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
                        /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-[#FF5F56]" }),
                        /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-[#FFBD2E]" }),
                        /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-[#27C93F]" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 max-w-[340px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded-md py-1 px-3 text-[10px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-emerald-500 font-bold", children: "https://" }),
                        /* @__PURE__ */ jsx("span", { children: "hegxcorp.com/growth-analytics" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-b-2xl", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx(
                            "h3",
                            {
                              className: "text-sm font-bold text-[#232323] tracking-tight",
                              style: { fontFamily: "'Space Grotesk', sans-serif" },
                              children: "Hegxcorp Growth Engine"
                            }
                          ),
                          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#6B7280]", children: "Real-time Client Portfolio Metrics" })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600", children: [
                          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                          "System Active"
                        ] }) })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: dashboardMetrics.map((m, idx) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          custom: idx,
                          variants: cardVariants,
                          initial: "initial",
                          animate: isMounted ? "animate" : "initial",
                          whileHover: "hover",
                          className: "group rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-4 cursor-default",
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-[#6B7280] uppercase tracking-wide", children: m.label }),
                              /* @__PURE__ */ jsx(motion.div, { variants: iconVariants, children: /* @__PURE__ */ jsx(m.icon, { className: "h-4 w-4 text-[#FC9C44]" }) })
                            ] }),
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "text-2xl font-bold text-[#232323]",
                                style: { fontFamily: "'Space Grotesk', sans-serif" },
                                children: /* @__PURE__ */ jsx(
                                  HeroMetric,
                                  {
                                    value: m.value,
                                    prefix: m.prefix,
                                    suffix: m.suffix,
                                    decimals: m.decimals
                                  }
                                )
                              }
                            )
                          ]
                        },
                        m.label
                      )) }),
                      /* @__PURE__ */ jsx(ChartArea, {})
                    ] })
                  ]
                }
              )
            }
          )
        ] }) })
      ]
    }
  );
}
function HeroMetric({ value, prefix = "", suffix = "", decimals = 0 }) {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const hasStarted = useRef(false);
  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const controls = animate(0, value, {
        duration: 1.4,
        // duration in 1.2–1.5s range
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(latest);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);
  return /* @__PURE__ */ jsxs("span", { ref: containerRef, className: "tabular-nums", children: [
    prefix,
    displayValue.toFixed(decimals),
    suffix
  ] });
}
function ChartArea() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref: containerRef,
      initial: { opacity: 0, y: 15 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
      transition: { duration: 0.6, ease: "easeOut" },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: "rounded-xl border border-[#EAEAEA] p-4 bg-white transition-[box-shadow] duration-200 ease-out hover:shadow-sm",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-[#232323]", children: "Revenue Pipeline Growth (Average YoY)" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-emerald-500", children: "+247%" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative h-28 w-full", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 400 100", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "0",
              y1: "25",
              x2: "400",
              y2: "25",
              stroke: "#F3F4F6",
              strokeWidth: "1",
              strokeDasharray: "3"
            }
          ),
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "0",
              y1: "50",
              x2: "400",
              y2: "50",
              stroke: "#F3F4F6",
              strokeWidth: "1",
              strokeDasharray: "3"
            }
          ),
          /* @__PURE__ */ jsx(
            "line",
            {
              x1: "0",
              y1: "75",
              x2: "400",
              y2: "75",
              stroke: "#F3F4F6",
              strokeWidth: "1",
              strokeDasharray: "3"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M 0 100 L 0 80 L 40 85 L 80 65 L 120 75 L 160 50 L 200 55 L 240 35 L 280 40 L 320 20 L 360 25 L 400 5 L 400 100 Z",
              fill: "url(#gradient-area)",
              initial: { pathLength: 0 },
              animate: isInView ? { pathLength: 1 } : { pathLength: 0 },
              transition: { duration: 1.4, delay: 0.2, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M 0 80 L 40 85 L 80 65 L 120 75 L 160 50 L 200 55 L 240 35 L 280 40 L 320 20 L 360 25 L 400 5",
              fill: "none",
              stroke: "#FC9C44",
              animate: {
                pathLength: isInView ? 1 : 0,
                strokeWidth: isHovered ? 4.5 : 3.5
              },
              strokeLinecap: "round",
              initial: { pathLength: 0, strokeWidth: 3.5 },
              transition: {
                pathLength: { duration: 1.4, delay: 0.2, ease: "easeOut" },
                strokeWidth: { duration: 0.2, ease: "easeOut" }
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.circle,
            {
              cx: "200",
              cy: "55",
              r: "4.5",
              fill: "#FC9C44",
              stroke: "#FFFFFF",
              strokeWidth: "2",
              initial: { scale: 0 },
              animate: isInView ? { scale: 1 } : { scale: 0 },
              transition: { duration: 0.3, delay: 1, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.circle,
            {
              cx: "320",
              cy: "20",
              r: "4.5",
              fill: "#FC9C44",
              stroke: "#FFFFFF",
              strokeWidth: "2",
              initial: { scale: 0 },
              animate: isInView ? { scale: 1 } : { scale: 0 },
              transition: { duration: 0.3, delay: 1.2, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.circle,
            {
              cx: "400",
              cy: "5",
              r: "4.5",
              fill: "#FC9C44",
              stroke: "#FFFFFF",
              strokeWidth: "2",
              initial: { scale: 0 },
              animate: isInView ? { scale: 1 } : { scale: 0 },
              transition: { duration: 0.3, delay: 1.4, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gradient-area", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.22" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2 text-[9px] text-[#6B7280] font-mono select-none", children: [
          /* @__PURE__ */ jsx("span", { children: "Q1" }),
          /* @__PURE__ */ jsx("span", { children: "Q2" }),
          /* @__PURE__ */ jsx("span", { children: "Q3" }),
          /* @__PURE__ */ jsx("span", { children: "Q4" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44] font-bold", children: "PROJECTED SCALE" })
        ] })
      ]
    }
  );
}
const logo1 = "data:image/webp;base64,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Nn77l02EZk53+E/nRJ6SKpE7tmHlk6HC5NwpPnN/djcnpvePt65DqRxitXSz8/lDjrptolM2Oog4k+BS92B2GLWtOtX0vgXGvxLA8kmsEYsEji/7fy5gwiT4P+MoT+3FppTQUKBkL4zkRp9SBPEMWrci3sW80o0OASdk9FSrB1dkTK9s1JNQ0YHqh85nvLbcBeL4h6ulrgp2NXb6aothYU1KPaNyepcMjJFzB3dVFTEpF7Y87bIAfEzaC8n7HbIAn+Gy3VrB9fMRn6LHfrTkUcLxyqiAn/wnhJ7JWLnV1MifVqUFmG/0JAosG2Q7+pyV83/zapslnn4mySd60Awc1JF0FrKziI4IN89vurgJh5LaPW48M2YVALXTPsFmXpJ+2PwyxrQJof2bRlhptwOaCpWgR/zR1sHVV1ZzZQ3x7QCmKdX2RFFv3Kvr1kF/n7+Kmiz97ArhKgy8tM+ofbZ8une+j8vNSQf3iujsZynThvoXubJ5wXtrR5CsXom3s5aPGWLHMH97uFPZSytJbgLExhDfTYCI8vf5Z8yBUEYWmVtYId1QCiDeQpq3nXonF5qJ/MkNU8pt3Ezt2qvfRtjpKIEibRLzDfy2yhspDRTubuNSJteRnQe2qV5M9dllF/HzUv9jREcjR1mbT2/91VMrg1n6dscrFG0a/bygb2MHmGNks9t+Yj/4hesPE0q3WXh53/+V3SvJJsOAEQnLUfZW4b1xb5W2yvMy6CO33GY3yy6w9GhK1gKTXzcy3k0TzL7r/ICiBPgS5NyWqSOHCdeMEsL+Wh7LvMa/BsjEJnMCpRRcApLU9cPBiTRlRTwTEx8LQXm+tYnoogFhKKeyQdpEaWnl3+PTYIFaFBxdbU6j4CIthZMuqqgDLHc9RQWdKiF2s8EKZ9BqRYjlMvQAAAAAAAAAAAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAIsBAAADoAQAAQAAACcBAAAAAAAAWE1QINsAAAA8P3hwYWNrZXQgYmVnaW49IiIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJHbyBYTVAgU0RLIDEuMCI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48L3JkZjpSREY+PC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4A";
const logo2 = "/assets/2-4-RSujknJL.webp";
const logo7 = "data:image/webp;base64,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";
const logo8 = "data:image/webp;base64,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";
const logo9 = "/assets/9-4-C8GHvnEm.webp";
const logo10 = "data:image/webp;base64,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";
const logo11 = "data:image/webp;base64,UklGRnIPAABXRUJQVlA4WAoAAAAMAAAAigEAJgEAVlA4IK4NAABwWgCdASqLAScBPlEokUYjoqGhJlBYeHAKCWlu4XXuABnZznns+6K3UBzEfKv57zK/jX3g/l/kZ8dezn7magW5P9KDzD3tQB3bMybIA/if9f9He9h/B+oB4uXcz7lfrr2EhguDJecGS84Ml5wZLzgyXnBkvODJecGS84Ml5wZHaWJUlIuFuAwi/8bPFyiv9IrqXpIPzPgyXnBkvNv04bsPUYukDEVLEp0KUPu8OV389KCUNiBtiI148z4MjznSm4DtRg27XIbYl+Oqr7gUn7n9wVZn4lEsTLN/7wmKL85LzgyQsO30yCHvM8r30fjioFEofPO6x5wTFn774HD8JZCOeadwIr85LzgyXm1wHDO8bdByCfq2rUmj2uKdNt29x040ci9kdhKcaO5DAVDAj1vUYL85LzgyXk3d7fNJ5uVw1bhzvKI1FZEEeW5YhmuBmSb705lk2QzDCjkOK2P3zsfvmPFg1rF/TSzeudp2kaHAVDsHca0x/2Tw2npeLDUZszbA/xL2yMRPhy1FcYtwZLzgyXcTj4yABP2rRZEL3a8NXaRjqVCdYei7q/GMewy3jD2xnUoiJYFiLZRfnJecGR3mOhyg9HvapuYvI9pnsfjQbreOIqFKsW77dS4OvtgGpxGAbtpTFkSjG+dj987H66DlTPkdQIRQZ/bxZpmQo8/ose/6wmyknw0TW2HNhcC/ZvMuFDBnwZLzgyXAMJqoo72wF0maNNMqkdwNpTHsFI9yF1ctZi0P7I2Pk3XPsl+vmfBkvODJeUGDa8dwXvUQEHGk6HPF23rVNFacefz5VPz5r4yvJHCTHmfBkvODJeTdFolo9fJeQ34U2zWqJWdCzjDHOgI1fGDuq3pF+cl5wZLzexSde2OnBw4Dk/3fjko8xHncrl836mnY/fOx++dj98xK2nkskDTZ6n/h+pNxPByKq8eZ8GS84Ml5wZLzgyXnBkvODJecGS84Ml5wYIAA/v1NgAGkt+fk/HVQ8bV3+fmYAkOIePjMYXiMflTSG1m5jPxIt2DsNSNLXk/HPNqEeHGpN5W8JnAEwJuITSpdjGuVUX7uzZg0BM6oWH+lGUxTSQb0G7c2+BYrIWtIzPfBjCVyBySrALtowBzJxcc6CUMTrkxhHRV9GL70tU1T1UlK34bKkQHjGg6HR6b9kSlbmF+YZbwtydVy9ZS+prqzxa3ejj48vYvPe/DiqpV2mWvtuCPWfEDqpPJy4Yq+zWYDKxxfSbV19aCgcN4kn5Jte4/Fp8AdprneP1EZYnq86TtB2vp8yeSmx0Vgyv999d+zh5TVyXbflMSNalIcC2Dw3b2kZIHAjB0o5SkVhhXEQOgEyFgWk7kzBD+feFUDJeAob69dOr6AEfR3BFrxn739q3E5Gw/Xj1UvIkfrwph2johmVF/lHVXHpH86RpOgpWCvvq8hXxVWZ5CHm1gYPe65cnyAyb6Xivis8Z2P0+jYJcaojCAEXvOA+i3gVsKZxHLC5P3IU8cI/AwunboyNGqAWeHdCAQizcVSU1fd7nHLZFGHNmpxlP8SO3GLkgP5txF9dcvK+eSp7pPEoLnrr91wB6tEEP/x+DMthwFQ5i8ZwQ7/NRzYdbboNb+Ow6KBue2Vh/qs4vqAnXgm9ywLR7//kseW+D5eQSVTX9Y7rNfJEjjB3swaa+ogX7e++65DzAZ6OvrdHREV+OGqY9zX+bDke8M/a6vO8z0zePxs98UcbPDw4w0vPBbEeSBRCjBzYLOXXLKOVGiMyuv0Ul+e1kxVEXko4Xqzncpk/q1PgdFmRZFsoQGWE0xg+4mgcui1/53qsFAFK3uTpxyDod9/CWuDSilhOfLnP8kZbuRC3OU5zpJWNcEd14Fp1NX84j4CH7hX9odjJ7v/tTngLkl23fSZcVqPijZmU2g6ATLSuAPoErwxLtVqRlJ8MSBwnaTTvJhwdQ4tlyPfr4UCxkEO1HVWY+2rtOTSUReVhbMNRm759RB3fQsHw7MgEjKDN6qgvyRpCZHA+ZCHxqk6NJ9O6+MsW7V3/e52xjYxwPyrQ9N/A9IXeZ5Hb2unr7/5Va6YRDdksYQ5vE49EBJG5DkiKHP8YRBzZwXL5bPvW7t12R2CnSpbGlve+V2AsNUnlklIC3LwojJn+kmg+ETBKOzLKXc37oBzJ27uMNJyuYO42cWkoEFZ2/T+ZMYZCVkFYHc7X7BlUph4AOh6YWobvHcSyzuXOF43dw114QU+T+QUIrtbHHQfXITYfCYQGHetb8T9inremzJnoU8v8h0x4VChOQnFSRDc3assAYtE/+d/TGdOH3rmatMoDZmQOMRZdI1d5/Oj/uh9X1378X5deff9dn3A65r36r5WfsMtb211aTiwXiVPRbCn/faWTGQqsOFnVQgJhDKyN3hzzh3k8UrPZc+XvODe+1tB2idzx/m8ogwkfqWKSAP0TE4Va+EuF0G3WC+9iSO7XxYDQIRpwSn5Pgpvsr8AMpkURVPiMPe4q5UzjqYp2OaFh5HwNU5xaOjJDVZG3NWKBW3n2O5HfSh+jCy+qiESURkmi26qyWH6J+i2MJNuVK06DrpLJ6cIHSE4EKrVTH4Y4wsjNM0Gn6FYn4CTi+mICocqt1blPbBLg8f502c3dCSW5o4v3jRyKfnDFo9gaqwkjrdsczShmUJqh4K+hny5u4QYHiH3CK1nnNjqW2BtDW5F1uOxQgsLdisX4PW5Auj0v+kjdsiXnlWMfniyPuRYL+6NeJSBpeAgIAv/jluK6sTE6B9VQNj3t6Uxe7p6IepEmro+/LPl2/yhHtndam1cffhc4BbiWgx27jRxZgC1YnKExTGfQMVD6uZKOuYWk0zbzPIeDfD8fvm92Oapds4ti6w9769o36oZptsU6OaPkexoL94fLjKkzweMMopSd7HB2snxScyefW8cLDfEqXzqTUQEnHtCTyRCK9HJqIYMkVw+MvBKRl4jIXD0GPX8lczX7i96HHqjd+iTfeqDarJHfNcvGKa0rdkRZMSMqk/Hb/5s68rZOPiD3ckIfkxg1/qfxPnhwGUZVoQe1WeXZ7HP4R1Ej8ErOOPWIn7Iz0Hp3fRLVpSa4m9HMUM6M2Kq35KAGYGTETzpSnZLwovrkIZfWvkGejKdc5icHr4bNaFYPSRTlzDYzaR6c1rTu7tbIhb+Cnd1R2CP3zgtD9NhxRzPt8WfSJ5VvYzyrFcRDOH8Lah0+LPFHlEkiQYE7XnwfxB5/iXW+AzK2quFQr/VJY+iTZOQ1ejqUJb+Ea8vPt68ErG2Xti6+5LaCVmDvwlhWXcQiZj1Plf57Y+8vVBnTWD+JIE7Xn/LjGLZfwtej2oHCi9DMquu95P0ICT5YXXWuCrt6Gkey9c/FxjcFerr9OjLAkpaUcdzNeGv0/OQfwrbl33IrV1iq1PyXOP/oRBdRc5UTGkiz7lsQCJKR3tpBB/oEwiSUQTz6g2rf+xJL24oJ6xMMbQ7J+EDs+zGzhQpDomEHKUsM3mumTWlYglejR0UO72ZxuWiTiWE7OSKSLbKh8ItiEYim7vsbbh0UTUyfAI5LiRHm9AUNVgSdeF6simUngfaMTPLoMkjGEsmZS+SXGZ6ZWmp7aM4rZ0H0GtLmhmSF0CWgOlrJRd8Az2M/rA6avhmg3UPHVu7xEhYDmHseMUawi8McjK414cTB4XHTgIUfF9IYq7TQQc+NkQJ0gwaSHpC4d7Z3jKhPfADBU/9PmY2wdoYv0SUM9b06EEvNzZikmx31cc/8J3pgsmYBiXS/AqEa4TjfwozIFXDjI1Q5mLXU3JfGTKNwH0fvq2q7ANB7qlq0+Zq0ySFYSZ5+0E/l7t1jUdElJjgmrWKYEckfmxMpuMmHudV+/+lm6f4NekwmHowaU3VhfUJlh7BjABMGdcviKPyZl2rTD3VTSzPz9A+e448THG/uydmmuD+IEfPrURfawAJQcogFyUZ2B/c+f8oxQsnvh0yCLVeGLwAvcC0vM+W+IqUucljzPieO5byARzq4nuFGo7I+MRrBMJ8XUzZMdRfiC7cZsSE4+ZpSFxkgtmgoe+HxrdzfhCo49VU7SxS5CKXl+31TbaewEtnlJGnTyNBmlBdXUGbdQOBw0J2dnkTKs2YKYb3ZYo/P0no/FdFLOKjqCVK06CcbCXUqDlEUCpr4l5CMMzsqvdIZwWtV1H/IDCEAANKXXPWiVaDKd04MCE7gs19hP4n5CNNiEPksGQ14BM7jO8cofnluaDPZQ5eOxixP9kEDalDZUw9b76fSCj/h6nOCy2nwjP2VpvcOhxPirNtW5xhdWaGfuCSAx+ls3P/8i+LoyWIGBHPJe4hr/Ojbsv1rDsKvgdeDSNlW/LU+qhoYuXPiDqGkA0TNXcc2foMq7/RHdSWoNWHKg9kBivkTO/+/G9Z9fviP8GbJjsMCrKV6jRejJ3gAFIr+u9SVW+ftx3qj7lrWolcalBFt3vyIKdwgYQv89qyc6Ugfu/9ACy79c0bLX671LTtoUezzE1AQXl0OLaSKcnlsyWQoOaaHcw/WCbo+y+hzWtBmNyMC2IN31iLRSjFNrEF9DJGWQAvalblxhNm7CX0BRkXD14u0AcpKusmWMYG0Dh+iLz/WLiVZ0QfY3nMI9+4lU0/bzmgZYpX78Gp1qdc6enN//+oR/EwKGPLF1L/VGLCmjo8AzLMuAAAAAAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAiwEAAAOgBAABAAAAJwEAAAAAAABYTVAg2wAAADw/eHBhY2tldCBiZWdpbj0iIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkdvIFhNUCBTREsgMS4wIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjwvcmRmOlJERj48L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/PgA=";
const logo12 = "/assets/12-5-Dpuj0Kw4.webp";
const logo13 = "/assets/13-3-2ehNKuf3.webp";
const logo14 = "data:image/webp;base64,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";
const logo15 = "/assets/15-D1G8ZCM3.webp";
const logo16 = "/assets/16-DWwC_Xc-.webp";
const logo17 = "data:image/webp;base64,UklGRpwGAABXRUJQVlA4WAoAAAAMAAAAigEAJgEAVlA4INgEAAAwNQCdASqLAScBPlEokkYjoqGhIXGJsHAKCWlu4XShG/NdZwfLPyX6Hk+e/G+ZfTEeQz+h/lLnAXqP8x/y1samp+Sf6o/YL4DP1S/5QlKUS6jvvkZOELZkdfd95SzI6+6xCm3WaP1xmmcGUD4MoHt8bawdxTH752P3zsfrjNM4HJNYQjawhG1g7imP3qjETsfvnY/fOmdux+uM0zgygfBlA9vjbWDuKY/fOx++dj9cZpnA5JqcCYYqYnYfThYnv+7nrM+ycMADarUwhr7Fpr3c5VjlmNSwfkLwXvkf3PYV7852/lg/eSASjdGuGqFyIiJ0zt0UZgpnJsKlnlsmljvsFluX7qk77O9hcoMP8hFf//rQUNU+NhrETsS/uDZBZlAvqVM0ebMnav/8xyoCtfI+NM4HJNYQb5E8EIj6MlhshhT42sIRciIidM7dj987H752PbMimbfG2sIRtYQjavyTtH64zTODKB8GUD2+NtYO4pj987H752P1xmmcDkmsIRtYQjawdxTH70F9tGO1PX3feUsyOvu+8pZkbDABuM+B0neUsyOvu+8pZkdfd95SyAS0AAD+/7WVl7GhjT/hyD6mQKx5eEgsQipIfE1YQASiZ/8Fh/Gekio/2USUWkgAAAAODpTP7+sgrLxnzZD3Djn6+EfkU1oIf+4dn2LfbMZs01y81e6LXYyVuLEW/ux6s404ScbVZI6yJ2c7dvGVf3ii0nfUxY8Po2VPuvepj+ES9nq1IpE9N8EyGoOso9KcOQSPfE4r6r21AbeLCOBGAQUa585C/hzRBJ/hd9R4Ev4N/Kc+mtUf0HRndkOG3jYYHt+E4lj89XT5rXt1naOLqAUidsRjACwhOOL029PDudBcloYICfLnmI7tyZ8heiKjCS+hfhcgHJrcsfSvoJteRRGwoPN31nYUxbzTR29e/cRCbALVvb17Aszr6Rc2ajzfJY8GHChWhFeKIZLNibpzRVKoMiHMQglYiqjULm/7je5OL1ZPVRLU4NFXE9ny6lv+I046Ge8G2bTs8Hoae+y81Ljt3KHVA9ChglT/L0R+vD2ym8sc9pAHp7SpU/XTEuzr0YDGG83Lt1FGGSV2HtzIzq0UzI+dcn+1CJq8hVdhQcw3Hc1sgUmk1+CXEvJRII4ViVOnbqKN+RnCftx81K0Bv1Ay1CaPqtJxCZ1LCDrlu94obNr6Rh1thlfw5Lo5FTR2C7lSPyqy/8YRJkpTX6BcK/ERzBLfNv4+Kp/ISN5hZmfTrG6eoNRbQLV+Kdw5cOv/Y2yMBKezYJBMU4KiQf4lJunv8LxBNu8ieIcLnJgTN/eCqa4LuZ33HlgTLE+EeYNH1MrRMxG+GUKI3ooE2Z4szYfrZn8ZfILrdz3uETWqwYOskwWCqsY9FjSuIEpoJ579K0Zixi6SzmdVtUG251E8mpHrJkt/lUeH94mTEQj55whDRAdFyCnzBJ49tDbNk7awPazuVvSfypoVPlV3xkv1PB9TW1+fJzOSKjD3/SxN8qJmcGRc2pQwN4CgysKNvZI5sXLcDiCLS3G85PXl0iH5aBmnVBsnB3nqOFR8T34mKEes3dftSe32DdXB0H1ZtpFoaQyyJTTE89MUu4IlT0dTnioAAAAB2vWeOlxszH6WvFbTTtJeoI+gAAAARVhJRroAAABFeGlmAABJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAEwIDAAEAAAABAAAAaYcEAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAAAGAACQBwAEAAAAMDIxMAGRBwAEAAAAAQIDAACgBwAEAAAAMDEwMAGgAwABAAAA//8AAAKgBAABAAAAiwEAAAOgBAABAAAAJwEAAAAAAABYTVAg2wAAADw/eHBhY2tldCBiZWdpbj0iIiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkdvIFhNUCBTREsgMS4wIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjwvcmRmOlJERj48L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0idyI/PgA=";
const logo18 = "data:image/webp;base64,UklGRpoMAABXRUJQVlA4WAoAAAAMAAAAigEAJgEAVlA4INYKAAAwUQCdASqLAScBPlEmkUYjoiGhIXMaEHAKCWlu4XKRG/OT8df2rta/v/9b/Z79wO3+8/9wHPpef+wf638wPZrv/+MmoF+Qfzb/D/lL/T/295BIAH5t/Xf9D4RepfkAfltx3lAX9Kegx/5f6z0H/UP7RfAR+sn/U7EQvvtnqfBUXUyoZCAlRyC+2ep8FRdTKhkICVHIL7Z6nwVF1MqGQgJUcgvtnqfBUXUyoZCAlRyC+mUyELajUI0hQRLK8dlCfPGlo5QXY+fIDQI/tnqfBUW3NVsH4m1/t7nkbrrg3cgilh+oHAateU15/uaxh09WoZCAlRxzGQrf79b86Gcn55ZoGrYSfq1CeD/NTAmhowFiXZASo5BfbPUWBYIGGmw4F7WQKavI9RGl3nnhA4wQkw3gZEiid+yOyqGQgJUcg0rR0BQBSQholUB1JnX4dFQ6ncFHUtki30dqdlsHHkyVhSkGeym1g2Y23Inne/8iI16xhL1rqIS9lAMnYqi6XR/uhCeupJEvxL87QUdXBmwLAVEj41wV656G8FHTz6SueilF4Y1DZHSskiucRTGjgtlCEtwocZ3KlTb70XIL7Whx1TN3GUuONilOTieMrQogJqx/MxBWqGJOXIrbK1EUMlzCvGuQQgf46oocd5Pdn8CsffRNlEsJZjXFVw2nmr8M8mgsKXLHW4EMWZIcx4zyLAh6AdtJbNMHjOpoSdEZIuA2l1oRxTsLkXlzAlRuyh4N1DFKHfPFGOUt7jBAWj2YEu7dCTFKaHXlBWDtHA/znsJBBeEgnX0ymwFCtjcYCpbwIaAlRyC+6yFHTjmZJutPgqLqZUMhASo5BfbPU+CouplQyEBKjkF9s9T4Ki6mVDIQEqOQX2qAAP7/k3wAAADbtGe7GHqSaiWfeiXE9w+GZn2dJ42Q/6bdAAeGkDyrY+hLiYZNfM4OEW60pRex3LRLWQFmrFj/+til6f/1eDdMM1opWV8LmktVtrayPIQKT++w5xiQaJkdTs+NAM+Yj3zz665PGj4fxRGVCV55WScrNBLduGwzhl6G2dPxfsjmjsa25YKwcbkCnoUYby0PpyZ/ZEhziguA6gW/rt2kEtW6iQTfdx67hVOOuIgWEzp3ZYDcn7lgoiStp/IHEeNUAdoED+xYDSNIx8PuVcslFJRttmcDaW6A2G1Nfgbd+tneIF9iejNZmneR9DTml68LOQFBXeu/42xrGUzhrcf5P5SdNk/y638futGiXT8V8lU/ACqFHfpKuYK9ua+J/qryz22mnOdAIChRnUlwk83Hy/BzxuST9Hor3+q7i/OyTMBGlZP21okTFET/IgzP6V09BKHYJl+OVr7tNLENXGd7bjg40QiLpEihPX++DFcSbSQAdoi851FW/byTmlihAJUXOWtc/sWFFvhebP1FJwPKN+kWzAjiceeUwVWO3Tr4aZTSmAsn95teHHeKg53uzFZda+uBefhkFXCIiq/XNYUsrmjwElWOkB+3SMyJsvz4IghSXPwxh7sJlctqNrj+389pyTkzdvpexZ5GgoPd/lOA55mCh7YJkcOrmyyiEfttu561bJYXn1M2f+iiduc6djecW+cmPTYF+P0acPZrxj0wfrubXZBxlaNueE4j4NRWAwkAQJAQ+5ft47wDHg6DJJPhc4iYi5Q++6xQyLrJ9XoBRknz+Xpkv93HoN75cDg/g8g8vCOLy9E85weoW2tXB0hE4FWH79fOBPmpEiZjQ/9TDJuGM7TzzW72tGFg4QQaXQtgIDbh3In9YNcMMOoFOX9IAy5A5igM18QXUVf251bO/VfKoikeVxTqnhv3GvfZwgtPjk83qzMlYXUnepIhNc5hp07g3sIfYZmAkQ3FuaoSoqSBDg3aQlRaR+nWFxTbFUC0r6PChnqLKC4V+iYxMyZ2rrOonQrHBnebea6H28TXd02p4Rgl0LlyUQ2oi5mq1AsZgCTfBI7A1awY3rmZLkut2+NLPNlsQzYfp3C1xIg4bvwWMf3XunVTZDBZeLeJdJjWgOnxh8y9gVLgzxtDDSnsK6bHP6NeksdIbyzKlyBA/aaFqo0vhNLnwch/KUaeszGH9BKIGQUR0/RvmQmTRm1NHloYoRx5seVZoXw3daA/7jFWozBdWTjsT+9Ufq5exMOi/tPysRrU+vj4jLdelDWMCoR/7/4bj/CPxziNGf3PE0hxKcW1epAOtxx/RgGqXMmze3T7sbCWfBWMnLWYc8dds9E5e8YNrOslD4RBqgBzDn/Rl/zArNqne//zvz3j5mYCPwVrcOv+VQsBqWjJGXFa/9peRjvzz//waqCLmHlmJgY+fz/2h/8KKhP2c4MvhV7JE61PXunsxCOicKEHssKFMuoIkAYmtDd6is3N2tXc2qlfyqZkOH2rgBMdQe/4fhBwxyJO0J/TUblkysGN6tMxpLV/VrNWp4+MIs3mENSaRF4Kd8bzRdBSzor0WKtZvpemu8zjLHhmzjTmE2EdP8PXRvFCzYsY+107bYsHTyKXBNgksqUrjmMsNr1O0QIawgJ+XwESOUHxmXOL5ZdWDRWEr4wMFnhQA2yX/Ozkbwnd+ma0xfJvV0juWkEyNXDMFVEfrSH0euzaZCbBLHlxGYicyZRS2IayfySGMFMyZ56KGQCwzadXy2146jDq+xGXdueN/yBg//vlJg5gtD2AofpuP++rgfVcES6Oh1VsHEKYKv54gNIMTj4Fpiwd9iRhnylcOrwEcCGFhhDMWh/D9qM5MCL5jnvqxNBlPesD6JckNyp6Ah6Ni3x8WTe2GzcO3aVjB8x5GtSaVwl1XmyvE4wRX1XdYji3cEMc+gPibElJz7GwDYN3mbN+Kj+YKs0EbqSoAS1MEMyVuwaIU4oEbZVBa3teUXjxVjlwUg0qabJOJCc+UXlcVvEBDvQFMMeDO3xF/Z/bx93iOhWZpCgUgXR9pdsoCnyyeGq1Z3EM2gPDjXoHvd8M+D3xxR0m+7KHqphlTg2YYqqkAaiVaPtrmCJVZobgO9f6gPLsFl0A7LlkJrBJUGREAoVzaJcZt6Qn+2sTGYobJVsFQnVLbJ/Ednv5yNT9Ls/+geijuKzbHuMeL2NeH7zwSVQs40sEg/fKmN2xs/xkxsIZqj1oLcqeeTHJdihkd8gIgqeQsfOkaqwCX98t3xfXNs8KrsMExP8/bedE5berdyl31d5nU9/yGhu8z+DDnyRybkyUsjkVJ5aVRioEparSAraYq5X0PCK8AvSb1rZP50ene5YbbudzLWtetk5+24F51P+F/+5Mp5yRDaiCorSG//DsY6Q8/zx6R/KIYhUFaXFf3H5X7rzr095AtrBHC3/aksZA3iw+Z9idiBE/yFhWyt+j/KfW4F25RSbcRsUDP64Wn+RaSm69D1Vf+O3tjtge7GvI+vHkCBR84oPmgRrMQJVI2xk68g+esF4ohAcmyYYFkvLU0P+c/nZT0cxv90Qyhw4z7vZKC3+4KkHhyesIiboKeN2nMdElBJi0KnXOKe+ipov8jrMyfVaHmyxjkoswah25Yzl6Adk4XikrAWlkNjb9FLRn8dgs+3DOa37qWkFSz5V75nThs1G5gkKXjU0qq91Pk69J6pT+NVLjn4HCR6r4RK229AQaNidG6/DoPyM6ErIXwn1nfjRZ8ZoxuVrZleeyhouBNswdVSIKiChqeMQfm87fm6FNL19XD/fVMnQH4AAAAAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAIsBAAADoAQAAQAAACcBAAAAAAAAWE1QINsAAAA8P3hwYWNrZXQgYmVnaW49IiIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJHbyBYTVAgU0RLIDEuMCI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48L3JkZjpSREY+PC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4A";
const logo19 = "data:image/webp;base64,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";
const logo20 = "/assets/20-6SQeXImn.webp";
const logo21 = "data:image/webp;base64,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";
const logo22 = "/assets/22-6eurBCOs.webp";
const logos = [
  { id: 1, src: logo1, alt: "Client 1" },
  { id: 2, src: logo2, alt: "Client 2" },
  { id: 3, src: logo7, alt: "Client 3" },
  { id: 4, src: logo8, alt: "Client 4" },
  { id: 5, src: logo9, alt: "Client 5" },
  { id: 6, src: logo10, alt: "Client 6" },
  { id: 7, src: logo11, alt: "Client 7" },
  { id: 8, src: logo12, alt: "Client 8" },
  { id: 9, src: logo13, alt: "Client 9" },
  { id: 10, src: logo14, alt: "Client 10" },
  { id: 11, src: logo15, alt: "Client 11" },
  { id: 12, src: logo16, alt: "Client 12" },
  { id: 13, src: logo17, alt: "Client 13" },
  { id: 14, src: logo18, alt: "Client 14" },
  { id: 15, src: logo19, alt: "Client 15" },
  { id: 16, src: logo20, alt: "Client 16" },
  { id: 17, src: logo21, alt: "Client 17" },
  { id: 18, src: logo22, alt: "Client 18" }
];
function ClientLogos() {
  const track = [...logos, ...logos, ...logos];
  return /* @__PURE__ */ jsxs("section", { className: "border-y border-[#EAEAEA] bg-white py-12 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 mb-10 text-center", children: /* @__PURE__ */ jsxs(
      "p",
      {
        className: "text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]",
        style: { fontFamily: "'Inter', sans-serif" },
        children: [
          "Trusted by businesses across ",
          /* @__PURE__ */ jsx("span", { className: "text-[#fc9c44]", children: "India, USA, UK & UAE" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10",
          style: { background: "linear-gradient(to right, white 40%, transparent)" }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10",
          style: { background: "linear-gradient(to left, white 40%, transparent)" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-12 animate-marquee w-max", style: { willChange: "transform" }, children: track.map((logo, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "client-logo-item shrink-0 flex items-center justify-center",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logo.src,
              alt: logo.alt,
              loading: "lazy",
              decoding: "async",
              className: "client-logo-img block"
            }
          )
        },
        `${logo.id}-${i}`
      )) })
    ] })
  ] });
}
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  trigger = true
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const obj = useRef({ value: 0 });
  useEffect(() => {
    if (!trigger) return;
    obj.current.value = 0;
    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(obj.current, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              setCount(obj.current.value);
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [target, duration, trigger]);
  const displayValue = count.toFixed(decimals);
  return /* @__PURE__ */ jsxs("span", { ref: elementRef, className: "tabular-nums", children: [
    prefix,
    displayValue,
    suffix
  ] });
}
const supporting = [
  {
    id: "leads",
    prefix: "+",
    value: 184,
    suffix: "%",
    label: "Qualified Leads",
    sub: "More pipeline through conversion-optimised funnels",
    decimals: 0,
    href: "/case-studies"
  },
  {
    id: "roas",
    prefix: "",
    value: 4.8,
    suffix: "×",
    label: "Average ROAS",
    sub: "Return on ad spend across Google, Meta & programmatic",
    decimals: 1,
    href: "/case-studies"
  },
  {
    id: "satisfaction",
    prefix: "",
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    sub: "Senior-led accounts — no handoff to juniors after onboarding",
    decimals: 0,
    href: "/about"
  }
];
function ResultsMetrics() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1100px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "mb-12 lg:mb-16",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "Proven Results"
                }
              ),
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "mt-3 text-[28px] font-bold text-[#1D2742] leading-snug",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "Numbers that prove we deliver."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-24 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              },
              className: "relative",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    "aria-hidden": "true",
                    className: "hidden sm:block pointer-events-none select-none absolute -top-6 -left-4 leading-none text-[#EAEAEA] font-black",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(120px, 17vw, 210px)",
                      zIndex: 0
                    },
                    children: "310"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "font-black leading-none tracking-tight text-[#1D2742]",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(72px, 10vw, 130px)"
                      },
                      children: /* @__PURE__ */ jsx(AnimatedCounter, { target: 310, prefix: "+", suffix: "%", decimals: 0, trigger: true })
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "mt-5 mb-4 h-[2px] w-14 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-[20px] font-bold text-[#232323] leading-snug mb-2",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: "Organic Traffic Growth"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-[14px] text-[#6B7280] leading-relaxed mb-7 max-w-[340px]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Average increase across all SEO clients within 12 months of engagement."
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/case-studies",
                      className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] group",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "See the case study",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.12
              },
              className: "divide-y divide-[#EAEAEA]",
              children: supporting.map((m, i) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: {
                    duration: 0.45,
                    delay: 0.25 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  className: "group py-6 first:pt-0 last:pb-0",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "text-[46px] font-black leading-none text-[#1D2742] tracking-tight",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: /* @__PURE__ */ jsx(
                            AnimatedCounter,
                            {
                              target: m.value,
                              prefix: m.prefix,
                              suffix: m.suffix,
                              decimals: m.decimals,
                              trigger: true
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "text-sm font-bold text-[#232323] mt-1.5 mb-0.5",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "text-xs text-[#9CA3AF] leading-relaxed",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: m.sub
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        to: m.href,
                        className: "shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        "aria-label": `View ${m.label} results`,
                        children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-[#FC9C44]" })
                      }
                    )
                  ] })
                },
                m.id
              ))
            }
          )
        ] })
      ] })
    }
  );
}
function SystemConnections() {
  const lines = [
    // Featured row horizontal
    [0.25, 0.28, 0.75, 0.28],
    // Standard row horizontals
    [0.125, 0.78, 0.375, 0.78],
    [0.375, 0.78, 0.625, 0.78],
    [0.625, 0.78, 0.875, 0.78],
    // Verticals: featured → standard
    [0.25, 0.28, 0.25, 0.78],
    [0.75, 0.28, 0.75, 0.78]
  ];
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: "absolute inset-0 w-full h-full pointer-events-none select-none",
      viewBox: "0 0 1 1",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      children: lines.map(([x1, y1, x2, y2], i) => /* @__PURE__ */ jsx(
        "line",
        {
          x1,
          y1,
          x2,
          y2,
          stroke: "#FC9C44",
          strokeWidth: "1",
          opacity: "0.08",
          vectorEffect: "non-scaling-stroke"
        },
        i
      ))
    }
  );
}
function SEOVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-col gap-2", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end gap-[3px] h-14", children: [32, 50, 42, 64, 54, 74, 62, 82, 70, 92].map((h, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "flex-1 rounded-[2px] bg-[#FC9C44]",
        style: { opacity: 0.12 + i * 0.09 },
        initial: { scaleY: 0 },
        whileInView: { scaleY: 1 },
        viewport: { once: true },
        transition: {
          duration: 0.55,
          delay: i * 0.05,
          ease: [0.22, 1, 0.36, 1],
          originY: "bottom"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full",
            style: { height: `${h * 0.56}px`, transformOrigin: "bottom" }
          }
        )
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 36", className: "w-full h-8", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "seo-g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.2" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 34 C30 30, 60 22, 90 14 S140 5, 170 3 S190 2, 200 1 V36 H0 Z",
          fill: "url(#seo-g)"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.path,
        {
          d: "M0 34 C30 30, 60 22, 90 14 S140 5, 170 3 S190 2, 200 1",
          fill: "none",
          stroke: "#FC9C44",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true },
          transition: { duration: 1.4, ease: "easeInOut", delay: 0.2 }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute -top-1 right-0 text-right", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[20px] font-bold text-[#FC9C44] leading-none font-mono", children: "+310%" }),
      /* @__PURE__ */ jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono", children: "Organic Growth" })
    ] })
  ] });
}
function PPCVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-[40px] font-bold text-[#1D2742] leading-none font-mono",
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          children: [
            "4.8",
            /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "×" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono uppercase tracking-widest mt-1.5", children: "Average ROAS" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full space-y-2", children: [
      { label: "Google", pct: 68 },
      { label: "Meta", pct: 52 }
    ].map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[8px] text-[#C4C9D4] font-mono w-9 shrink-0", children: b.label }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 h-1.5 rounded-full bg-[#F3F4F6] overflow-hidden", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full rounded-full bg-[#FC9C44]",
          initial: { width: 0 },
          whileInView: { width: `${b.pct}%` },
          viewport: { once: true },
          transition: { duration: 1, delay: 0.4, ease: "easeOut" }
        }
      ) }),
      /* @__PURE__ */ jsxs("span", { className: "text-[8px] text-[#9CA3AF] font-mono shrink-0 w-5 text-right", children: [
        b.pct,
        "%"
      ] })
    ] }, b.label)) })
  ] });
}
function WebDevVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-[#1D2742] px-3.5 py-3 font-mono space-y-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[9px] text-[#FC9C44]", children: "<GrowthEngine />" }),
      /* @__PURE__ */ jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  performance: ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "98" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  seo: ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "100" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  edge: ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-400", children: "cached ✓" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-1", children: [
      /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" }),
      /* @__PURE__ */ jsx("span", { className: "text-[9px] text-emerald-600 font-mono font-medium", children: "Deployment successful" }),
      /* @__PURE__ */ jsx("span", { className: "ml-auto text-[8px] text-[#C4C9D4] font-mono", children: "98 Lighthouse" })
    ] })
  ] });
}
function CROVisual() {
  const steps2 = [
    { label: "Visitors", w: "100%" },
    { label: "Leads", w: "44%" },
    { label: "Customers", w: "18%" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-2", children: [
    steps2.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      i > 0 && /* @__PURE__ */ jsx("div", { className: "text-[9px] text-[#E5E7EB] font-mono text-center leading-none select-none", children: "↓" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[8px] font-mono text-[#9CA3AF] w-14 shrink-0", children: s.label }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 h-3.5 rounded bg-[#F3F4F6] overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "h-full rounded bg-gradient-to-r from-[#FC9C44] to-[#ffb880]",
            style: { width: s.w },
            initial: { width: 0 },
            whileInView: { width: s.w },
            viewport: { once: true },
            transition: {
              duration: 0.9,
              delay: 0.15 + i * 0.2,
              ease: "easeOut"
            }
          }
        ) })
      ] })
    ] }, s.label)),
    /* @__PURE__ */ jsx("div", { className: "text-right mt-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#FC9C44] font-mono", children: "+184% Leads" }) })
  ] });
}
function BrandVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: ["#1D2742", "#FC9C44", "#ffb36b", "#F3F4F6", "#232323"].map((c) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex-1 h-9 rounded-md",
        style: {
          background: c,
          border: c === "#F3F4F6" ? "1px solid #EAEAEA" : void 0
        }
      },
      c
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] px-3 py-2.5", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-[18px] font-bold text-[#232323] leading-none",
          style: { fontFamily: "'Space Grotesk', sans-serif" },
          children: "Aa"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-[9px] text-[#9CA3AF] mt-0.5",
          style: { fontFamily: "'Inter', sans-serif" },
          children: "Brand identity system"
        }
      )
    ] })
  ] });
}
function SMMVisual() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono uppercase tracking-wider pt-1", children: "Audience Growth" }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[20px] font-bold text-[#1D2742] leading-none font-mono", children: "+38%" }),
        /* @__PURE__ */ jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono", children: "Engagement" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 44", className: "w-full h-10", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "smm-g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#E1306C", stopOpacity: "0.15" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#E1306C", stopOpacity: "0" })
      ] }) }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 42 C20 40, 40 36, 60 28 S90 16, 120 10 S160 4, 200 1 V44 H0 Z",
          fill: "url(#smm-g)"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.path,
        {
          d: "M0 42 C20 40, 40 36, 60 28 S90 16, 120 10 S160 4, 200 1",
          fill: "none",
          stroke: "#E1306C",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true },
          transition: { duration: 1.4, ease: "easeInOut", delay: 0.2 }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
      { name: "Instagram", color: "#E1306C" },
      { name: "LinkedIn", color: "#0077B5" },
      { name: "YouTube", color: "#FF0000" }
    ].map((p) => /* @__PURE__ */ jsxs(
      "span",
      {
        className: "text-[8px] text-[#9CA3AF] font-mono flex items-center gap-1",
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "h-1.5 w-1.5 rounded-full inline-block shrink-0",
              style: { background: p.color }
            }
          ),
          p.name
        ]
      },
      p.name
    )) })
  ] });
}
const services = [
  {
    slug: "SEO",
    title: "Search Engine Optimisation",
    desc: "A compounding growth asset. We engineer technical authority and content systems that make you the default answer in your market.",
    href: "/service/seo",
    url: "hegxcorp › seo-engine",
    Visual: SEOVisual
  },
  {
    slug: "PPC",
    title: "Paid Advertising",
    desc: "Every campaign optimised toward revenue, not clicks. Google, Meta and programmatic — unified by one metric: ROAS.",
    href: "/service/ppc",
    url: "hegxcorp › paid-ads",
    Visual: PPCVisual
  },
  {
    slug: "WEB",
    title: "Web Development",
    desc: "Sites engineered to load fast, rank high and convert. Performance and conversion architecture are baked in from line one.",
    href: "/service/web-dev",
    url: "hegxcorp › web-platform",
    Visual: WebDevVisual
  },
  {
    slug: "CRO",
    title: "Conversion Optimisation",
    desc: "Turn existing traffic into more revenue. We map the funnel, find the leaks and close them with systematic data-led experiments.",
    href: "/service/ui-ux-design",
    url: "hegxcorp › cro-funnel",
    Visual: CROVisual
  },
  {
    slug: "BRAND",
    title: "Branding & Design",
    desc: "A brand system that makes premium positioning visible at every touchpoint — identity, type, colour and creative assets built to last.",
    href: "/service/branding",
    url: "hegxcorp › brand-system",
    Visual: BrandVisual
  },
  {
    slug: "SMM",
    title: "Social Media Marketing",
    desc: "Audiences built with intent. Content systems that grow engaged communities and feed your wider growth funnel.",
    href: "/service/social-med",
    url: "hegxcorp › social-studio",
    Visual: SMMVisual
  }
];
const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08
    }
  })
};
function ServiceCard({
  s,
  i,
  size = "standard"
}) {
  const isFeatured = size === "featured";
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      custom: i,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: cardVariant,
      whileHover: {
        y: -5,
        borderColor: "rgba(252,156,68,0.45)",
        boxShadow: "0 0 0 1px rgba(252,156,68,0.12), 0 20px 40px -16px rgba(29,39,66,0.09)",
        transition: { duration: 0.2, ease: "easeOut" }
      },
      className: "group rounded-2xl border border-[#EAEAEA] bg-white overflow-hidden flex flex-col cursor-pointer",
      children: /* @__PURE__ */ jsxs(Link, { to: s.href, className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA] select-none shrink-0", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#FC9C44]/50" }),
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#E5E7EB]" }),
          /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[#E5E7EB]" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 text-[8px] text-[#C4C9D4] font-mono truncate flex-1", children: s.url }),
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#EAEAEA] group-hover:bg-emerald-400 transition-colors duration-300 shrink-0" })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `border-b border-[#F3F4F6] bg-white ${isFeatured ? "px-6 pt-6 pb-5" : "px-4 pt-4 pb-3"}`,
            style: { minHeight: isFeatured ? "200px" : "140px" },
            children: /* @__PURE__ */ jsx(s.Visual, {})
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: `flex flex-col flex-1 gap-2 ${isFeatured ? "p-5" : "p-4"}`, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] font-bold tracking-[0.14em] text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: s.slug
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "font-bold text-[#232323] leading-snug",
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: isFeatured ? "18px" : "14px"
              },
              children: s.title
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-[#6B7280] leading-relaxed flex-1 ${isFeatured ? "text-[13px]" : "text-[12px] line-clamp-2"}`,
              style: { fontFamily: "'Inter', sans-serif" },
              children: s.desc
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-xs font-semibold text-[#FC9C44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200 ease-out",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                "Learn more ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function ServicesGrid() {
  const featured = services.slice(0, 2);
  const standard = services.slice(2);
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(10px, 2vw, 20px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6",
            children: [
              /* @__PURE__ */ jsx(
                SectionHeading,
                {
                  tagline: "One Growth Engine · Six Capabilities",
                  heading: "Services built for growth",
                  description: "Not six separate services. One integrated system where every capability strengthens the next."
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.2 },
                  className: "shrink-0 mb-1",
                  children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/services",
                      className: "inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "Explore all services ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-5", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 pointer-events-none hidden lg:block", children: /* @__PURE__ */ jsx(SystemConnections, {}) }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 grid sm:grid-cols-2 gap-5", children: featured.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, { s, i, size: "featured" }, s.slug)) }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: standard.map((s, i) => /* @__PURE__ */ jsx(ServiceCard, { s, i: i + 2, size: "standard" }, s.slug)) })
        ] })
      ] })
    }
  );
}
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CaseStudyCursor({ children, className = "" }) {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const rafRef = useRef(0);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const animate2 = useCallback(() => {
    if (!cursorRef.current) return;
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;
    gsap.set(cursorRef.current, {
      x: posRef.current.x,
      y: posRef.current.y,
      xPercent: -50,
      yPercent: -50
    });
    rafRef.current = requestAnimationFrame(animate2);
  }, []);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const container = containerRef.current;
    if (!container) return;
    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetRef.current.x = e.clientX - rect.left;
      targetRef.current.y = e.clientY - rect.top;
    };
    const handleEnter = () => {
      setVisible(true);
      rafRef.current = requestAnimationFrame(animate2);
    };
    const handleLeave = () => {
      setVisible(false);
      cancelAnimationFrame(rafRef.current);
    };
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate2]);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative ${className}`, style: { cursor: "none" }, children: [
    children,
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: cursorRef,
        "aria-hidden": "true",
        className: "pointer-events-none select-none absolute top-0 left-0 z-50",
        style: {
          willChange: "transform",
          transition: "opacity 200ms ease, transform 200ms ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide whitespace-nowrap",
            style: {
              background: "#1D2742",
              color: "#FC9C44",
              boxShadow: "0 8px 24px -6px rgba(29,39,66,0.4)",
              fontFamily: "'Inter', sans-serif"
            },
            children: "View Case Study →"
          }
        )
      }
    )
  ] });
}
function MagneticButton({ children, strength = 10, className = "" }) {
  const wrapperRef = useRef(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const lerpFactor = 0.18;
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = wrapperRef.current;
    if (!el) return;
    const tick = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;
      gsap.set(el, {
        x: currentPos.current.x,
        y: currentPos.current.y,
        force3D: true
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const maxDist = Math.max(rect.width, rect.height) / 2;
      targetPos.current.x = distX / maxDist * strength;
      targetPos.current.y = distY / maxDist * strength;
    };
    const handleLeave = () => {
      targetPos.current.x = 0;
      targetPos.current.y = 0;
    };
    const handleEnter = () => {
      rafRef.current = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: wrapperRef,
      className: `inline-flex ${className}`,
      style: { willChange: "transform" },
      children
    }
  );
}
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const projects = [
  {
    id: "Spirit Boosting Digital",
    isFeatured: true,
    title: "Spirit Boosting Digital",
    category: "SEO + Conversion Engineering",
    industry: "E-Commerce",
    url: "spiritboostingdigital.in",
    metric: "+280% Organic Revenue",
    browserColor: "#FFF4E8",
    screenshotType: "ecommerce"
  },
  {
    id: "launchscale",
    isFeatured: false,
    title: "Cultural Web Creation",
    category: "Full Funnel Performance Ads",
    industry: "B2B SaaS",
    url: "launchscale.com/analytics",
    metric: "5.2x Google & Meta ROAS",
    browserColor: "#E8F0FE",
    screenshotType: "saas"
  },
  {
    id: "healthfirst",
    isFeatured: false,
    title: "Environmental Brand Creation",
    category: "Local SEO & Platform Engineering",
    industry: "Healthcare",
    url: "healthfirst.in/booking",
    metric: "2x Qualified Leads",
    browserColor: "#F0FDF4",
    screenshotType: "healthcare"
  },
  {
    id: "fintechone",
    isFeatured: false,
    title: "FintechOne Portal",
    category: "Custom Web Application Development",
    industry: "FinTech",
    url: "fintechone.io/dashboard",
    metric: "Sub-second Load Times",
    browserColor: "#EAEAEA",
    screenshotType: "fintech"
  }
];
function FeaturedWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;
    const ctx = gsap.context(() => {
      const getStepWidth = () => window.innerWidth * 0.5;
      const totalMove = (projects.length - 1) * getStepWidth();
      gsap.set(`.project-card-0`, { scale: 1.02, opacity: 1, y: 0, filter: "blur(0px)" });
      for (let i = 1; i < projects.length; i++) {
        gsap.set(`.project-card-${i}`, { scale: 0.92, opacity: 0.4, y: 20, filter: "blur(4px)" });
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projects.length * 110}%`,
          // scroll length
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (projects.length - 1));
            setActiveIndex(index);
          }
        }
      });
      tl.to(
        trackRef.current,
        {
          x: () => -totalMove,
          ease: "none",
          duration: 1
        },
        0
      );
      projects.forEach((_, index) => {
        tl.fromTo(`.preview-inner-${index}`, { x: -30 }, { x: 30, ease: "none", duration: 1 }, 0);
        if (index > 0) {
          const startTime = (index - 1) / (projects.length - 1);
          const segmentDuration = 1 / (projects.length - 1);
          tl.to(
            `.project-card-${index - 1}`,
            {
              scale: 0.92,
              opacity: 0.4,
              y: 20,
              filter: "blur(4px)",
              ease: "power2.inOut",
              duration: segmentDuration
            },
            startTime
          );
          tl.to(
            `.project-card-${index}`,
            {
              scale: 1.02,
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power2.inOut",
              duration: segmentDuration
            },
            startTime
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: sectionRef,
        className: "hidden md:flex relative h-screen w-full flex-col justify-between py-14 bg-white overflow-hidden select-none",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] w-full px-6 lg:px-10 shrink-0", children: /* @__PURE__ */ jsx(
            SectionHeading,
            {
              tagline: "Client Success Stories",
              heading: "Visual proof of our engineering and growth capabilities"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex-1 flex items-center justify-start overflow-hidden w-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              ref: trackRef,
              className: "flex flex-nowrap w-max gap-[6vw] items-center",
              style: {
                paddingLeft: "28vw",
                // Centers card 0 exactly in center of screen: 50vw - (44vw / 2)
                paddingRight: "28vw"
              },
              children: projects.map((project, index) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: `project-card-${index} shrink-0 w-[44vw] origin-center`,
                  children: /* @__PURE__ */ jsx(CaseStudyCursor, { children: /* @__PURE__ */ jsx(ProjectCard, { project, index, isActive: activeIndex === index }) })
                },
                project.id
              ))
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "h-6 shrink-0" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "block md:hidden bg-white pt-14 pb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 mb-8", children: /* @__PURE__ */ jsx(
        SectionHeading,
        {
          tagline: "Client Success Stories",
          heading: "Visual proof of our capabilities"
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 py-4",
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          children: [
            /* @__PURE__ */ jsx("style", { children: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          ` }),
            projects.map((project) => /* @__PURE__ */ jsx("div", { className: "snap-center shrink-0 w-[85vw] max-w-[320px]", children: /* @__PURE__ */ jsx(ProjectCard, { project, index: 0, isMobile: true, isActive: true }) }, project.id))
          ]
        }
      )
    ] })
  ] });
}
function BrowserPreview$1({ type, isActive = false }) {
  if (type === "ecommerce") {
    return /* @__PURE__ */ jsxs("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-[#EAEAEA]", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#1D2742] tracking-wider", children: "E-SHOP" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 w-10 bg-[#EAEAEA] rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-2 w-6 bg-[#FC9C44] rounded" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 my-2 flex-1", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            animate: isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 },
            transition: { duration: 0.4, ease: "easeOut" },
            className: "rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-10 bg-[#FAFAF8] rounded flex items-center justify-center", children: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-[#FC9C44] opacity-50" }) }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#EAEAEA] rounded mt-1.5 w-3/4" }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#FC9C44] rounded mt-1 w-1/3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            animate: isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 },
            transition: { duration: 0.4, delay: 0.1, ease: "easeOut" },
            className: "rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-10 bg-[#FAFAF8] rounded flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-[#FC9C44] opacity-50" }) }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#EAEAEA] rounded mt-1.5 w-2/3" }),
              /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#EBB771] rounded mt-1 w-1/4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#1D2742] rounded-sm w-full" })
    ] });
  }
  if (type === "saas") {
    return /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-10 border-r border-[#EAEAEA] pr-1 space-y-1.5", children: [
        /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#1D2742] rounded w-full" }),
        /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-3/4" }),
        /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-2/3" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "h-3 bg-[#FAFAF8] rounded w-1/2 mb-2" }),
        /* @__PURE__ */ jsx("div", { className: "h-10 w-full flex items-end gap-1 pb-1 border-b border-[#EAEAEA]", children: [30, 45, 20, 60, 55, 75, 90].map((h, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: "0%" },
            animate: isActive ? { height: `${h}%` } : { height: "0%" },
            transition: { duration: 0.5, delay: i * 0.04, ease: "easeOut" },
            className: "flex-1 rounded-t-sm",
            style: {
              backgroundColor: i === 6 ? "#FC9C44" : "#EAEAEA"
            }
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#FAFAF8] rounded w-1/3 mt-2" })
      ] })
    ] }) });
  }
  if (type === "healthcare") {
    return /* @__PURE__ */ jsxs("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: [
      /* @__PURE__ */ jsx("div", { className: "h-3 bg-[#1D2742] rounded w-1/3 mb-2" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 my-2 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-[#FFF4E8] flex items-center justify-center", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-[#FC9C44]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1.5", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-[#EAEAEA] rounded w-3/4" }),
          /* @__PURE__ */ jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-1/2" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border border-[#EAEAEA] rounded p-2 bg-[#FAFAF8] flex justify-between gap-1", children: [1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ jsxs("div", { className: "flex-1 text-center space-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-[6px] text-[#9CA3AF] font-bold", children: [
          "D",
          d
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { backgroundColor: "#FFFFFF", scale: 0.9 },
            animate: isActive && d === 3 ? { backgroundColor: "#FC9C44", scale: 1 } : { backgroundColor: "#FFFFFF", scale: 0.9 },
            transition: { duration: 0.3 },
            className: "h-2.5 rounded-sm border border-[#EAEAEA]"
          }
        )
      ] }, d)) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "h-full w-full bg-[#FAFAF8] p-4 flex flex-col justify-between select-none", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-3 w-12 bg-[#1D2742] rounded" }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-6 bg-[#FC9C44] rounded" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white border border-[#EAEAEA] rounded p-3 flex flex-col justify-center items-center gap-1.5 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: isActive ? { scale: [1, 1.15, 1], rotate: [0, 8, 0] } : { scale: 1, rotate: 0 },
          transition: { duration: 0.5 },
          children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-[#FC9C44]" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "w-full h-8 mt-1", children: /* @__PURE__ */ jsx("svg", { className: "w-full h-full", viewBox: "0 0 100 30", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx(
        motion.path,
        {
          d: "M 0 25 Q 25 5, 50 20 T 100 5",
          fill: "none",
          stroke: "#EBB771",
          strokeWidth: "2",
          initial: { pathLength: 0 },
          animate: isActive ? { pathLength: 1 } : { pathLength: 0 },
          transition: { duration: 0.8, ease: "easeOut" }
        }
      ) }) })
    ] })
  ] });
}
function parseMetric(metric) {
  const match = metric.match(/^([^\d]*)([\d.]+)([^\d\s]*)(.*)$/);
  if (!match) {
    return {
      hasNumber: false,
      text: metric,
      prefix: "",
      numberVal: 0,
      suffix: "",
      label: metric,
      decimals: 0
    };
  }
  const prefix = match[1];
  const numberVal = parseFloat(match[2]);
  const suffix = match[3];
  const label = match[4];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return {
    hasNumber: true,
    prefix,
    numberVal,
    suffix,
    label,
    decimals
  };
}
function AnimatedMetric({ metric, trigger = false }) {
  const parsed = parseMetric(metric);
  const [currentVal, setCurrentVal] = useState(0);
  const valObj = useRef({ value: 0 });
  useEffect(() => {
    if (!parsed.hasNumber) return;
    if (trigger) {
      valObj.current.value = 0;
      setCurrentVal(0);
      gsap.to(valObj.current, {
        value: parsed.numberVal,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          setCurrentVal(valObj.current.value);
        }
      });
    }
  }, [trigger, parsed.hasNumber, parsed.numberVal]);
  if (!parsed.hasNumber) {
    return /* @__PURE__ */ jsx("span", { className: "text-[#EBB771] font-black text-xl md:text-2xl tracking-tight font-sans", children: metric });
  }
  const formattedNum = currentVal.toFixed(parsed.decimals);
  return /* @__PURE__ */ jsxs("span", { className: "text-[#EBB771] font-black text-xl md:text-2xl tracking-tight block font-sans", children: [
    /* @__PURE__ */ jsx("span", { children: parsed.prefix }),
    /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: formattedNum }),
    /* @__PURE__ */ jsx("span", { children: parsed.suffix }),
    /* @__PURE__ */ jsx("span", { className: "text-[#6B7280] font-medium text-xs md:text-sm ml-2 inline-block normal-case", children: parsed.label.trim() })
  ] });
}
function ProjectCard({
  project,
  index,
  isMobile = false,
  isActive = false
}) {
  const cardRef = useRef(null);
  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);
  const rotateX = useTransform(yVal, [-1, 1], [3, -3]);
  const rotateY = useTransform(xVal, [-1, 1], [-3, 3]);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const normX = mouseX / rect.width * 2 - 1;
    const normY = mouseY / rect.height * 2 - 1;
    xVal.set(normX);
    yVal.set(normY);
  };
  const handleMouseLeave = () => {
    xVal.set(0);
    yVal.set(0);
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref: cardRef,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: {
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
        perspective: 1e3
      },
      className: `group rounded-2xl border border-[#EAEAEA] bg-white cursor-pointer overflow-hidden flex flex-col justify-between transition-[box-shadow] duration-300 hover:shadow-[0_24px_48px_-12px_rgba(29,39,66,0.08)] ${isMobile ? "w-full min-h-[400px]" : "w-full min-h-[460px]"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] select-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#FF5F56]" }),
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#27C93F]" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 max-w-[240px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-2 text-[9px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1 overflow-hidden truncate", children: [
            /* @__PURE__ */ jsx("span", { className: "text-emerald-500 font-bold", children: "https://" }),
            /* @__PURE__ */ jsx("span", { children: project.url })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex-1 relative overflow-hidden flex items-stretch border-b border-[#EAEAEA]",
            style: { backgroundColor: project.browserColor },
            children: /* @__PURE__ */ jsx("div", { className: "w-full h-44 md:h-52 self-center p-6 overflow-hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-full w-full rounded-lg shadow-sm border border-[#EAEAEA] overflow-hidden preview-inner-${index}`,
                children: /* @__PURE__ */ jsx("div", { className: "scale-110 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.14]", children: /* @__PURE__ */ jsx(BrowserPreview$1, { type: project.screenshotType, isActive }) })
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4 bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: [
              project.industry,
              " · ",
              project.category
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-lg font-bold text-[#1D2742]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: project.title
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "py-1 min-h-[32px] flex items-center", children: /* @__PURE__ */ jsx(AnimatedMetric, { metric: project.metric, trigger: isActive }) }),
          /* @__PURE__ */ jsx("div", { className: "pt-3 border-t border-[#EAEAEA] flex items-center justify-between", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/case-studies",
              className: "group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FC9C44] transition-colors",
              children: [
                "Explore Case Study",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
const rows = [
  { agency: "Reports activity", hegx: "Reports business outcomes" },
  { agency: "SEO, PPC & Web teams operate separately", hegx: "Unified growth strategy" },
  { agency: "Generic service packages", hegx: "Custom growth roadmaps" },
  { agency: "Monthly reporting", hegx: "Continuous optimisation" },
  { agency: "Traffic-focused KPIs", hegx: "Revenue-focused KPIs" },
  { agency: "Vendor relationship", hegx: "Extension of your team" }
];
const pillars = [
  {
    icon: Target,
    title: "Diagnosis Before Prescription",
    desc: "Before touching a channel, we audit your full funnel — gaps, leaks and hidden wins. You get a strategy grounded in your actual business, not a recycled template."
  },
  {
    icon: GitMerge,
    title: "Channels That Compound",
    desc: "SEO builds authority that makes paid ads cheaper. Paid ads fund the data that sharpens SEO. We wire the channels together so every pound spent does double the work."
  },
  {
    icon: BarChart2,
    title: "Outcomes, Not Vanity Metrics",
    desc: "Traffic reports don't pay salaries. We tie every KPI back to pipeline and revenue so you always know which activity is making you money."
  },
  {
    icon: Users,
    title: "Senior Talent, Always On",
    desc: "Your account is run by senior strategists — never handed to a junior coordinator after onboarding. The people who pitch the plan are the people who execute it."
  },
  {
    icon: TrendingUp,
    title: "Built to Scale With You",
    desc: "As your business grows, the system scales with it. New channels, new markets and new products plug into an existing growth engine instead of starting from scratch."
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.07
    }
  })
};
function WhyHegxcorp() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: { paddingTop: "clamp(10px, 2vw, 20px)", paddingBottom: "clamp(72px, 9vw, 128px)" },
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 space-y-16", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            custom: 0,
            variants: fadeUp,
            children: /* @__PURE__ */ jsx(
              SectionHeading,
              {
                tagline: "WHY CLIENTS SWITCH TO HEGXCORP",
                heading: "Most agencies run campaigns. We build growth systems.",
                description: "The difference isn't the channels we use. It's how we connect strategy, execution, reporting and optimisation into one growth engine."
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            custom: 1,
            variants: fadeUp,
            children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto rounded-2xl border border-[#EAEAEA] shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)]", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[560px] border-collapse text-sm", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx(
                    "th",
                    {
                      className: "w-1/2 px-7 py-5 text-left font-semibold text-[#6B7280] border-b border-[#EAEAEA] bg-[#FAFAF8]",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "13px",
                        letterSpacing: "0.02em"
                      },
                      children: "Traditional Agency"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "th",
                    {
                      className: "w-1/2 px-7 py-5 text-left font-semibold border-b border-[#FC9C44]/30 bg-[#FFF4E8]",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "13px",
                        letterSpacing: "0.02em",
                        color: "#c97a1e"
                      },
                      children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "inline-block h-2 w-2 rounded-full bg-[#FC9C44]",
                            "aria-hidden": "true"
                          }
                        ),
                        "Hegxcorp"
                      ] })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "group transition-colors duration-200 hover:bg-[#FAFAF8]", children: [
                  /* @__PURE__ */ jsx(
                    "td",
                    {
                      className: `px-7 py-4 text-[#9CA3AF] ${i < rows.length - 1 ? "border-b border-[#EAEAEA]" : ""}`,
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(
                          "svg",
                          {
                            className: "shrink-0 h-4 w-4 text-[#D1D5DB]",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsx(
                              "path",
                              {
                                d: "M4 4l8 8M12 4l-8 8",
                                stroke: "currentColor",
                                strokeWidth: "1.6",
                                strokeLinecap: "round"
                              }
                            )
                          }
                        ),
                        row.agency
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "td",
                    {
                      className: `px-7 py-4 font-medium text-[#1D2742] bg-[#FFF4E8] ${i < rows.length - 1 ? "border-b border-[#FC9C44]/20" : ""}`,
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(
                          "svg",
                          {
                            className: "shrink-0 h-4 w-4 text-[#FC9C44]",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsx(
                              "path",
                              {
                                d: "M3 8l4 4 6-7",
                                stroke: "currentColor",
                                strokeWidth: "1.8",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                              }
                            )
                          }
                        ),
                        row.hegx
                      ] })
                    }
                  )
                ] }, i)) })
              ] }) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-hidden": "true",
                  className: "md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 rounded-r-2xl",
                  style: { background: "linear-gradient(to left, white 0%, transparent 100%)" }
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden", children: pillars.map((p, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            custom: i,
            variants: fadeUp,
            whileHover: {
              y: -4,
              zIndex: 10,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)",
              transition: { duration: 0.22, ease: "easeOut" }
            },
            className: "group flex flex-col gap-5 bg-white p-7 cursor-default transition-colors duration-300 hover:bg-[#FFF4E8]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] text-[#1D2742] transition-all duration-300 group-hover:bg-[#FC9C44] group-hover:text-white group-hover:border-transparent", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "font-bold text-[#232323] leading-snug mb-2",
                    style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" },
                    children: p.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: p.desc
                  }
                )
              ] })
            ]
          },
          p.title
        )) })
      ] })
    }
  );
}
const results = [
  { label: "Organic Traffic", value: "+310%", period: "12 months" },
  { label: "Lead Volume", value: "+184%", period: "Q1–Q3" },
  { label: "Revenue Growth", value: "+$1.2M", period: "Year 1" }
];
function FeaturedCaseStudy() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-[#1D2742] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#EBB771]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Featured Case Study"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 mt-8 items-start", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    className: "font-bold text-white leading-tight",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(28px, 3.5vw, 44px)"
                    },
                    children: "How we grew an e-commerce brand by 340% in organic traffic"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-[#EBB771] pl-5", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771] mb-1",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "The Challenge"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-white/70 text-sm leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "A fast-growing e-commerce brand was struggling with stagnant organic traffic and heavy reliance on paid ads. Their ROAS was declining and CAC was climbing quarter over quarter."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-[#FC9C44] pl-5", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-xs font-semibold uppercase tracking-[0.12em] text-[#FC9C44] mb-1",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "Our Solution"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-white/70 text-sm leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "We deployed a full-funnel strategy combining technical SEO, content architecture, and conversion-rate optimisation — reducing paid dependency while compounding organic results."
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.03 },
                    transition: { duration: 0.2 },
                    className: "inline-block",
                    children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/case-studies",
                        className: "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35]",
                        children: [
                          "View Full Case Study ",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                        ]
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                results.map((r, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 15 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: i * 0.1 },
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-200",
                    children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "text-xs text-white/50 mb-1",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: r.label
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "text-[42px] font-black text-white leading-none",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: r.value
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "text-xs text-white/40",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Timeframe"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "text-sm font-semibold text-[#EBB771] mt-0.5",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: r.period
                          }
                        )
                      ] })
                    ]
                  },
                  r.label
                )),
                /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: ["E-Commerce", "SEO", "Content", "CRO", "India"].map((tag) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: tag
                  },
                  tag
                )) })
              ] })
            ] })
          ]
        }
      ) })
    }
  );
}
const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We analyse your current digital footprint SEO health, ad performance, website UX, and competitive landscape  to identify the highest-impact opportunities.",
    deliverables: [
      "Competitor Analysis",
      "Funnel Review",
      "Analytics Audit",
      "Opportunity Mapping"
    ]
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We build a 90-day growth roadmap with clear KPIs, channel allocation, and milestones. No generic playbooks every strategy is bespoke to your business.",
    deliverables: ["Channel Plan", "Growth Roadmap", "KPI Design", "90-Day Blueprint"]
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our specialist team activates across SEO, paid media, content, and development simultaneously  moving fast without sacrificing quality.",
    deliverables: ["SEO Setup", "Paid Campaigns", "Content Activation", "Web Deployment"]
  },
  {
    num: "04",
    title: "Optimisation",
    desc: "We continuously test, analyse and refine every campaign and touchpoint. Data informs every decision, week over week.",
    deliverables: ["A/B Tests", "Weekly Reports", "CRO Experiments", "Bid Strategy"]
  },
  {
    num: "05",
    title: "Scale",
    desc: "Once we've found what works, we double down. Proven channels get more budget, winning creative gets expanded, and growth compounds.",
    deliverables: ["Budget Expansion", "New Channels", "Market Entry", "Creative Scaling"]
  }
];
function Process() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top;
      const totalHeight = rect.height - windowHeight;
      if (totalHeight <= 0) return;
      const currentScroll = -start;
      const rawProgress = currentScroll / totalHeight;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(progress);
      const stepIndex = Math.min(Math.floor(progress * 5), 4);
      setActiveStep(stepIndex);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: "hidden md:block relative bg-[#FAFAF8]",
        style: { height: "260vh" },
        children: /* @__PURE__ */ jsx("div", { className: "sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] w-full px-6 lg:px-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-14", children: /* @__PURE__ */ jsx(SectionHeading, { tagline: "How We Work", heading: "From audit to scale in 5 steps" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1.2fr_1.8fr] gap-16 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex gap-8 pl-4 py-6", children: [
              /* @__PURE__ */ jsx("div", { className: "relative w-[3px] bg-[#EAEAEA] rounded-full self-stretch", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute top-0 w-full bg-[#FC9C44] rounded-full origin-top",
                  style: { height: `${scrollProgress * 100}%` },
                  transition: { type: "tween", ease: "easeOut" }
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6 py-2", children: steps.map((s, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4 cursor-default select-none",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute left-[13px] z-10 -translate-x-1/2 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: {
                            backgroundColor: isActive || isCompleted ? "#FC9C44" : "#FFFFFF",
                            borderColor: isActive || isCompleted ? "#FC9C44" : "#EAEAEA",
                            scale: isActive ? 1.25 : 1
                          },
                          className: "h-4 w-4 rounded-full border-2 flex items-center justify-center text-[7px] text-white",
                          children: isCompleted && /* @__PURE__ */ jsx(Check, { className: "h-2.5 w-2.5 stroke-[3px]" })
                        }
                      ) }),
                      /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          animate: {
                            opacity: isActive ? 1 : isCompleted ? 0.7 : 0.35,
                            x: isActive ? 6 : 0
                          },
                          transition: { duration: 0.3 },
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: `text-xs  ${isActive ? "text-[#FC9C44]" : "text-[#6B7280]"}`,
                                style: { fontFamily: "'Space Grotesk', sans-serif" },
                                children: s.num
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: `text-base font-bold ${isActive ? "text-[#1D2742]" : "text-[#6B7280]"}`,
                                style: { fontFamily: "'Space Grotesk', sans-serif" },
                                children: s.title
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  s.num
                );
              }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-12 min-h-[300px] flex flex-col justify-center shadow-[0_12px_40px_-20px_rgba(29,39,66,0.06)]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -15 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "space-y-5",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-8xl font-black text-[#fcb044] leading-none select-none tracking-tight",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif"
                        // WebkitTextStroke: "1px #EAEAEA",
                      },
                      children: steps[activeStep].num
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "text-3xl font-bold text-[#1D2742]",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: steps[activeStep].title
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-[#6B7280] leading-relaxed max-w-[500px]",
                      style: { fontFamily: "'Inter', sans-serif", fontSize: "16px" },
                      children: steps[activeStep].desc
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-3",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "Deliverables"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: steps[activeStep].deliverables.map((d) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "inline-block rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-3 py-1 text-[11px] font-medium text-[#6B7280]",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: d
                      },
                      d
                    )) })
                  ] })
                ]
              },
              activeStep
            ) }) })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "block md:hidden bg-[#FAFAF8]",
        style: {
          paddingTop: "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(64px, 8vw, 120px)"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(SectionHeading, { tagline: "How We Work", heading: "From audit to scale in 5 steps" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setMobileActive(i),
              className: `flex items-center gap-2.5 rounded-xl px-4 py-3 shrink-0 transition-all duration-300 ${mobileActive === i ? "bg-[#1D2742] text-white shadow-md" : "bg-white border border-[#EAEAEA] text-[#6B7280]"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-[10px] font-bold ${mobileActive === i ? "text-[#EBB771]" : "text-[#FC9C44]"}`,
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: s.num
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-xs font-semibold",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: s.title
                  }
                )
              ]
            },
            s.num
          )) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-7", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.25 },
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-6xl font-black text-[#FAFAF8] leading-none select-none",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      WebkitTextStroke: "1px #EAEAEA"
                    },
                    children: steps[mobileActive].num
                  }
                ),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-xl font-bold text-[#1D2742]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: steps[mobileActive].title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: steps[mobileActive].desc
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-2.5",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Deliverables"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: steps[mobileActive].deliverables.map((d) => /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "inline-block rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-2.5 py-1 text-[10px] font-medium text-[#6B7280]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: d
                    },
                    d
                  )) })
                ] })
              ]
            },
            mobileActive
          ) }) })
        ] })
      }
    )
  ] });
}
const testimonials = [
  {
    id: 1,
    result: { value: "+280%", label: "Organic Revenue" },
    quote: "Hegxcorp's SEO strategy drove a 280% increase in organic revenue within 10 months. What impressed us most was the transparency — we always knew exactly what was being done and why.",
    name: "Priya Sharma",
    role: "Head of Marketing",
    company: "RetailBrand India",
    industry: "E-Commerce",
    initials: "PS"
  },
  {
    id: 2,
    result: { value: "5.2×", label: "ROAS Delivered" },
    quote: "We were burning through ad spend with another agency and getting nowhere. Hegxcorp restructured our entire paid strategy in 30 days. Our ROAS went from 1.8× to 5.2×. I wish we'd found them sooner.",
    name: "James O'Connor",
    role: "Founder & CEO",
    company: "LaunchScale",
    industry: "SaaS",
    initials: "JO"
  },
  {
    id: 3,
    result: { value: "2×", label: "Qualified Leads" },
    quote: "The level of strategic thinking Hegxcorp brings is what sets them apart. They don't just execute — they think deeply about the business problem first. Our lead volume doubled in the first quarter.",
    name: "Meera Patel",
    role: "Director, Digital",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    initials: "MP"
  }
];
const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1
    }
  })
};
function Testimonials() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-white overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1]
            },
            className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: "Client Stories"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "h2",
                  {
                    className: "mt-3 text-[clamp(24px,3.5vw,36px)] font-bold text-[#1D2742] leading-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: [
                      "Results that speak",
                      /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
                      " for themselves."
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/case-studies",
                  className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] shrink-0 group",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    "See all case studies",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-[#EAEAEA]", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            custom: i,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            variants: rowVariant,
            className: "group grid grid-cols-1 md:grid-cols-[160px_1fr_200px] lg:grid-cols-[200px_1fr_240px] gap-6 lg:gap-12 py-10 items-start",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "shrink-0", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-[clamp(36px,5vw,52px)] font-black text-[#1D2742] leading-none tracking-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: t.result.value
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "mt-1.5 text-[11px] font-bold tracking-[0.1em] text-[#FC9C44] uppercase",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: t.result.label
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                "p",
                {
                  className: "text-[15px] lg:text-[16px] text-[#374151] leading-relaxed",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[#C4C9D4] mr-0.5 font-serif text-[18px]", children: '"' }),
                    t.quote,
                    /* @__PURE__ */ jsx("span", { className: "text-[#C4C9D4] ml-0.5 font-serif text-[18px]", children: '"' })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white select-none",
                      style: { background: "#1D2742", fontFamily: "'Space Grotesk', sans-serif" },
                      children: t.initials
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-sm font-bold text-[#232323]",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: t.name
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-xs text-[#9CA3AF]",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: t.role
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-xs text-[#6B7280]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: t.company
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-[#EAEAEA]", children: "·" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "rounded-full border border-[#EAEAEA] px-2 py-0.5 text-[10px] font-semibold text-[#9CA3AF]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: t.industry
                    }
                  )
                ] })
              ] })
            ]
          },
          t.id
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.3 },
            className: "mt-12 pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-4",
            children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#6B7280]", style: { fontFamily: "'Inter', sans-serif" }, children: [
                "Join ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#232323]", children: "100+ businesses" }),
                " scaling with Hegxcorp across India, USA, UK & Dubai."
              ] }),
              /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.03 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/case-studies",
                  className: "inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44]",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "Read full case studies →"
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}
function BrowserPreview({
  children,
  src,
  alt = "Browser Preview",
  className,
  innerClassName,
  aspectRatio = "video",
  proofLabel,
  proofDuration,
  proofMetric,
  url
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_16px_36px_rgba(29,39,66,0.06)] overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#FF5F56]/60 transition-all duration-300 ease-out group-hover:bg-[#FF5F56] group-hover:scale-[1.05]" }),
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#FFBD2E]/60 transition-all duration-300 ease-out group-hover:bg-[#FFBD2E] group-hover:scale-[1.05]" }),
            /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-[#27C93F]/60 transition-all duration-300 ease-out group-hover:bg-[#27C93F] group-hover:scale-[1.05]" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-[280px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[9px] text-[#9CA3AF] font-mono text-center select-none truncate", children: url || "www.hegxcorp-client.com" })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "overflow-hidden bg-[#FAFAF8] relative",
              aspectRatio === "video" && "aspect-video",
              aspectRatio === "square" && "aspect-square",
              aspectRatio === "auto" && "h-auto",
              innerClassName
            ),
            children: [
              src ? /* @__PURE__ */ jsx(
                "img",
                {
                  src,
                  alt,
                  className: "w-full h-full object-cover object-top transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]",
                  loading: "lazy"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]", children }),
              (proofLabel || proofDuration || proofMetric) && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#EAEAEA] rounded-lg p-3.5 shadow-lg flex items-center gap-4 max-w-[280px] z-10 transition-all duration-[350ms] ease-out group-hover:translate-y-[-3px] group-hover:shadow-2xl", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  proofMetric && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-sm font-bold text-[#1D2742] tracking-tight truncate leading-tight",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: proofMetric
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider mt-0.5 leading-none", children: proofLabel }),
                  proofDuration && /* @__PURE__ */ jsxs("div", { className: "text-[9px] text-[#6B7280] font-medium uppercase tracking-wider mt-1 leading-none", children: [
                    "Timeline: ",
                    proofDuration
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-16 h-8 shrink-0", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 100 40", children: [
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "sparkline-grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.2" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M 0 40 L 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2 L 100 40 Z",
                      fill: "url(#sparkline-grad)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2",
                      fill: "none",
                      stroke: "#FC9C44",
                      strokeWidth: "2.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  ),
                  /* @__PURE__ */ jsx("circle", { cx: "100", cy: "2", r: "2.5", fill: "#FC9C44" })
                ] }) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function BlogPreview() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "space-y-14",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
              /* @__PURE__ */ jsx(
                SectionHeading,
                {
                  tagline: "INSIGHTS",
                  heading: "Ideas, Experiments & Growth Systems",
                  description: "Practical breakdowns of SEO, paid media, conversion optimisation, and digital growth systems used to help businesses scale."
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.2 },
                  className: "shrink-0 mb-1",
                  children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/blog",
                      className: "inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "Read all articles ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-12 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-3xl lg:text-4xl font-bold text-[#1D2742] tracking-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "How AI Search Changes Rankings"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "p",
                  {
                    className: "text-[#6B7280] leading-relaxed text-sm md:text-base",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: [
                      "A technical breakdown of semantic search index shifts and how search algorithms evaluate topical authority inside generative answers.",
                      " "
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/blog/$slug",
                    params: { slug: "how-ai-search-reshapes-organic-traffic" },
                    className: "inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-colors",
                    children: [
                      "View Blog",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
                BrowserPreview,
                {
                  aspectRatio: "video",
                  url: "hegxcorp.com/blog",
                  className: "w-full shadow-lg",
                  children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/blog/$slug",
                      params: { slug: "how-ai-search-reshapes-organic-traffic" },
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: aisearch,
                          alt: "How Ai Search Changes Rankings",
                          className: "w-full h-full object-cover"
                        }
                      )
                    }
                  )
                }
              ) })
            ] }) })
          ]
        }
      ) })
    }
  );
}
function FinalCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-[#1D2742] overflow-hidden grain-overlay pt-10 pb-28 md:pt-12 md:pb-12 lg:pt-16 lg:pb-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.18] select-none overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-full bg-[#FC9C44] blur-[130px] animate-pulse",
          style: {
            margin: "auto",
            width: "55vw",
            maxWidth: "650px",
            height: "55vw",
            animationDuration: "8s"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute rounded-full bg-[#EBB771] blur-[100px] animate-pulse",
          style: {
            margin: "auto",
            width: "35vw",
            maxWidth: "450px",
            height: "35vw",
            animationDuration: "14s",
            animationDelay: "-3s",
            opacity: 0.6
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10 z-10", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "max-w-[800px] mx-auto text-center space-y-8",
        children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center gap-2 rounded-full border border-[#EBB771]/30 bg-[#EBB771]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                /* @__PURE__ */ jsx(CalendarCheck, { className: "h-3.5 w-3.5" }),
                "Free Strategy Session · No Commitment"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-bold text-white leading-tight",
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 5vw, 64px)"
              },
              children: "Let's identify what's limiting your growth."
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-white/75 max-w-[620px] mx-auto leading-relaxed",
              style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" },
              children: "Book a free strategy session and receive a practical growth roadmap tailored to your business. We'll review your website, acquisition channels, and conversion opportunities and show you the highest-impact next steps."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center pt-2", children: [
            /* @__PURE__ */ jsx(MagneticButton, { strength: 10, children: /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: {
                  y: -3,
                  boxShadow: "0 12px 28px -8px rgba(252,156,68,0.4)"
                },
                transition: { duration: 0.2, ease: "easeOut" },
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/contact",
                    onClick: () => trackEvent("cta_click", {
                      cta_name: "book_free_strategy_call",
                      cta_location: "final_cta",
                      destination: "/contact"
                    }),
                    className: "group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-[#1D2742] bg-[#FC9C44] transition-colors duration-200 hover:bg-[#E88C35]",
                    style: { fontFamily: "'Inter', sans-serif" },
                    id: "final-cta-strategy-call",
                    children: [
                      "Book a Free Strategy Call",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" })
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx(MagneticButton, { strength: 10, children: /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: {
                  y: -3,
                  boxShadow: "0 12px 24px -10px rgba(255,255,255,0.15)"
                },
                transition: { duration: 0.2, ease: "easeOut" },
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/free-growth-audit",
                    onClick: () => trackEvent("cta_click", {
                      cta_name: "get_free_growth_audit",
                      cta_location: "final_cta",
                      destination: "/free-growth-audit"
                    }),
                    className: "group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/40",
                    style: { fontFamily: "'Inter', sans-serif" },
                    id: "final-cta-free-audit",
                    children: [
                      "Get Free Growth Audit",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" })
                    ]
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-wrap justify-center gap-6 md:gap-10 text-xs text-white/50 pt-4",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsx("span", { children: "No sales pressure" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#EBB771]" }),
                  /* @__PURE__ */ jsx("span", { children: "30-minute strategy session" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsx("span", { children: "Actionable recommendations" })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { duration: 0.3, ease: "easeOut" },
      className: "fixed bottom-4 left-4 right-4 z-40 md:hidden",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-[#EAEAEA] bg-white/95 p-3.5 shadow-[0_12px_30px_-8px_rgba(29,39,66,0.2)] backdrop-blur-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: "Limited Slots" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-[#232323]", children: "Free Growth Audit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/free-growth-audit",
            onClick: () => trackEvent("cta_click", {
              cta_name: "claim_audit",
              cta_location: "sticky_mobile_cta",
              destination: "/free-growth-audit"
            }),
            className: "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FC9C44] px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-[#E88C35] transition-all",
            children: [
              "Claim Audit",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
            ]
          }
        )
      ] })
    }
  ) });
}
const Route$l = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        name: "description",
        content: "Hegxcorp helps businesses generate more leads, sales and revenue through data-driven SEO, paid advertising, web development and conversion optimisation. Serving India, USA, UK and Dubai."
      },
      { property: "og:title", content: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        property: "og:description",
        content: "Generate more leads, sales and revenue through data-driven growth marketing. SEO, Paid Ads, Web Development and CRO."
      },
      {
        name: "keywords",
        content: "digital marketing agency, SEO agency India, PPC agency, web development, growth marketing, Hegxcorp"
      }
    ]
  }),
  component: Index
});
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ClientLogos, {}),
    /* @__PURE__ */ jsx(ResultsMetrics, {}),
    /* @__PURE__ */ jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsx(FeaturedWork, {}),
    /* @__PURE__ */ jsx(WhyHegxcorp, {}),
    /* @__PURE__ */ jsx(FeaturedCaseStudy, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(BlogPreview, {}),
    /* @__PURE__ */ jsx(FinalCTA, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(StickyMobileCTA, {})
  ] });
}
function SplitText({ text, className, style }) {
  const containerRef = useRef(null);
  const lines = text.split("\n");
  useGSAP(
    () => {
      gsap.fromTo(
        ".split-line-inner",
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          // 120ms delay between lines
          force3D: true
        }
      );
    },
    { scope: containerRef }
  );
  return /* @__PURE__ */ jsx("h1", { ref: containerRef, className, style, children: lines.map((line, index) => /* @__PURE__ */ jsx("span", { className: "block overflow-hidden relative pb-2 -mb-2", children: /* @__PURE__ */ jsx("span", { className: "split-line-inner inline-block", children: line === "Real Results." ? /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
    line,
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute bottom-0 left-0 right-0 h-[4px] rounded-full bg-[#FC9C44]",
        style: { bottom: "-6px" }
      }
    )
  ] }) : line }) }, index)) });
}
const Route$k = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Client Success & Growth Case Studies | Hegxcorp" },
      {
        name: "description",
        content: "Discover how Hegxcorp helps leading B2B and E-commerce brands scale organic revenue, optimize PPC campaigns, and achieve measurable growth."
      }
    ]
  }),
  component: CaseStudiesPage
});
function EditorialDivider() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center my-16 md:my-24 max-w-[1280px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" }),
    /* @__PURE__ */ jsx("div", { className: "mx-4 text-[#FC9C44] rotate-45 select-none font-bold text-xs", children: "♦" }),
    /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" })
  ] });
}
function CaseStudiesPage() {
  const studies = getCaseStudies();
  const featuredStudy = studies.find((c) => c.slug === "tarkashastra") || studies[0];
  const gpen = studies.find((c) => c.slug === "g-pen") || studies[1];
  const rollink = studies.find((c) => c.slug === "rollink") || studies[2];
  const learningTree = studies.find((c) => c.slug === "learning-tree") || studies[3];
  const orra = studies.find((c) => c.slug === "orra") || studies[4];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: "relative overflow-hidden bg-white border-b border-[#EAEAEA]",
          style: {
            paddingTop: "clamp(80px, 10vw, 140px)",
            paddingBottom: "clamp(80px, 10vw, 140px)"
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0 select-none",
                style: { opacity: 0.2 },
                children: /* @__PURE__ */ jsx(
                  ShapeGrid,
                  {
                    shape: "hexagon",
                    squareSize: 38,
                    borderColor: "rgba(29,39,66,0.3)",
                    hoverFillColor: "transparent",
                    hoverTrailAmount: 0,
                    staticMode: false,
                    speed: 0.2,
                    className: "w-full h-full"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto space-y-8", children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 animate-pulse" }),
                    "Case Studies"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                SplitText,
                {
                  text: "Real Brands.\nReal Growth.\nReal Results.",
                  className: "font-bold text-[#232323] leading-[1.1] tracking-tight",
                  style: {
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(42px, 5.2vw, 76px)"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "max-w-[600px] mx-auto text-[#6B7280] leading-relaxed",
                  style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.2vw, 20px)" },
                  children: "Explore how strategy, execution and data-driven systems helped businesses achieve measurable growth."
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "pt-4 flex justify-center", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/free-growth-audit",
                  className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)] transition-[background-color,transform,box-shadow] duration-200 ease-out",
                  children: [
                    "Get Free Growth Audit",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ) })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "bg-[#FC9C44] py-8 border-b border-[#E88C35]", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "80+"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Clients Served"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-l border-white/20", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "13+"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Years Experience"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-t border-white/20 md:border-t-0 md:border-l border-white/20", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-none",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "International"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Markets Served"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-l border-t border-white/20 md:border-t-0 border-white/20", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-none",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "SEO • PPC • Web"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Growth Systems"
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-[#FAFAF8] relative", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Featured Case Study"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "font-bold text-[#1D2742] leading-[0.95] tracking-tight",
                  style: {
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(56px, 7vw, 100px)"
                  },
                  children: featuredStudy.metricValue
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: featuredStudy.metricLabel.toUpperCase()
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-2xl font-bold text-[#6B7280] tracking-tight",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: featuredStudy.client
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider", children: [
              /* @__PURE__ */ jsx("span", { children: featuredStudy.industry }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Google Ads" }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Search Console" }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "GA4" }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "CRO" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "space-y-6 pt-6 border-t border-[#EAEAEA] text-[#4A5568]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-[#1D2742]", children: "The Challenge" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed", children: featuredStudy.challenge.description })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-[#1D2742]", children: "Our Solution" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-sm leading-relaxed", children: featuredStudy.solution.description })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 pt-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsx(PhoneCall, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-sm font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "908"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Phone Leads" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-sm font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "150"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Form Subs" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsx(Percent, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-sm font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "-48%"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Lower CPL" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/case-studies/$slug",
              params: { slug: featuredStudy.slug },
              className: "inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white bg-[#1D2742] hover:bg-[#2C3B60] transition-colors duration-200",
              children: [
                "View Full Case Study",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx(Link, { to: "/case-studies/$slug", params: { slug: featuredStudy.slug }, children: /* @__PURE__ */ jsx(
          BrowserPreview,
          {
            src: featuredStudy.featuredImage,
            alt: `${featuredStudy.client} Growth Result`,
            proofLabel: featuredStudy.proofLabel,
            proofDuration: featuredStudy.proofDuration,
            proofMetric: `${featuredStudy.metricValue} Growth`,
            className: "w-full shadow-[0_32px_64px_rgba(29,39,66,0.1)]"
          }
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(EditorialDivider, {}),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-[700px] mb-20 space-y-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Archive"
            }
          ),
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "font-bold text-[#232323] leading-tight",
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 4vw, 54px)"
              },
              children: "Documented Growth Outcomes"
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-[#6B7280] leading-relaxed text-sm",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Documented case histories of performance bidding, organic architectures, and local reach integrations built to deliver scalable pipelines."
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-24", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/case-studies/$slug",
                params: { slug: gpen.slug },
                className: "group flex flex-col gap-6 text-left focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx(
                    BrowserPreview,
                    {
                      src: gpen.featuredImage,
                      alt: `${gpen.client} Performance Outcomes`,
                      proofLabel: gpen.proofLabel,
                      proofDuration: gpen.proofDuration,
                      proofMetric: gpen.metricValue,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: gpen.metricValue
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: gpen.metricLabel.toUpperCase()
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: gpen.client
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-sm text-[#4A5568] leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: gpen.summary
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                      /* @__PURE__ */ jsx("span", { children: gpen.industry }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Google Ads" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "GA4" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "CRO" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                      "Read Study",
                      " ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                    ] }) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/case-studies/$slug",
                params: { slug: rollink.slug },
                className: "group flex flex-col gap-6 text-left focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx(
                    BrowserPreview,
                    {
                      src: rollink.featuredImage,
                      alt: `${rollink.client} Performance Outcomes`,
                      proofLabel: rollink.proofLabel,
                      proofDuration: rollink.proofDuration,
                      proofMetric: rollink.metricValue,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: rollink.metricValue
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: rollink.metricLabel.toUpperCase()
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: rollink.client
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-sm text-[#4A5568] leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: rollink.summary
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                      /* @__PURE__ */ jsx("span", { children: rollink.industry }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "SEO" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Search Console" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Vitals Overhaul" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                      "Read Study",
                      " ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                    ] }) })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/case-studies/$slug",
                params: { slug: learningTree.slug },
                className: "group flex flex-col gap-6 text-left focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx(
                    BrowserPreview,
                    {
                      src: learningTree.featuredImage,
                      alt: `${learningTree.client} Performance`,
                      proofLabel: learningTree.proofLabel,
                      proofDuration: learningTree.proofDuration,
                      proofMetric: learningTree.metricValue,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: "Featured Performance Story" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: learningTree.metricValue
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: learningTree.metricLabel.toUpperCase()
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: learningTree.client
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-sm text-[#4A5568] leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: learningTree.summary
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                      /* @__PURE__ */ jsx("span", { children: learningTree.industry }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Google Ads" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "PPC Bid Optimization" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Funnel Audit" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                      "Read Study",
                      " ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                    ] }) })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/case-studies/$slug",
                params: { slug: orra.slug },
                className: "group flex flex-col gap-6 text-left focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx(
                    BrowserPreview,
                    {
                      src: orra.featuredImage,
                      alt: `${orra.client} Performance`,
                      proofLabel: orra.proofLabel,
                      proofDuration: orra.proofDuration,
                      proofMetric: orra.metricValue,
                      className: "w-full"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: "Localized Brand Authority" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: orra.metricValue
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: orra.metricLabel.toUpperCase()
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "h3",
                        {
                          className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: orra.client
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-sm text-[#4A5568] leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: orra.summary
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                      /* @__PURE__ */ jsx("span", { children: orra.industry }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "SEO Local architecture" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Digital Strategy" }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: "Map Dominance" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                      "Read Study",
                      " ",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                    ] }) })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(EditorialDivider, {}),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#FAFAF8] border-t border-b border-[#EAEAEA] relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-8 relative z-10", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-12 w-12 text-[#FC9C44] mx-auto animate-pulse" }),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-3xl md:text-4xl font-bold text-[#1D2742] tracking-tight",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: "Let's Build Your Next Growth Story."
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-[#6B7280] leading-relaxed max-w-[540px] mx-auto text-sm md:text-base",
            style: { fontFamily: "'Inter', sans-serif" },
            children: "Get a Free Growth Audit and Strategic Roadmap tailored to your business goals."
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/free-growth-audit",
              className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]",
              children: [
                "Get Free Growth Audit",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-[#1D2742] bg-white border border-[#EAEAEA] hover:border-[#FC9C44] hover:bg-[#FFF4E8] hover:-translate-y-0.5 transition-all duration-200 shadow-sm",
              children: "Schedule Strategy Call"
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$j = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Growth Lab Insights - SEO, Paid Media & CRO | Hegxcorp" },
      {
        name: "description",
        content: "Strategic breakdowns of organic search systems, campaign performance optimization, and high-converting website engineering."
      }
    ]
  }),
  component: BlogPage
});
function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const articlesPerPage = 4;
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(getBlogs().map((a) => a.category)))];
  }, []);
  const popularTopics = [
    { label: "#TechnicalSEO", searchVal: "Technical SEO" },
    { label: "#CoreWebVitals", searchVal: "Core Web Vitals" },
    { label: "#PerformanceMax", searchVal: "Performance Max" },
    { label: "#GA4", searchVal: "GA4" },
    { label: "#LocalSEO", searchVal: "Local SEO" },
    { label: "#CRO", searchVal: "CRO" }
  ];
  const filteredArticles = useMemo(() => {
    return getBlogs().filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesTag = !selectedTag || article.title.toLowerCase().includes(selectedTag.toLowerCase()) || article.excerpt.toLowerCase().includes(selectedTag.toLowerCase()) || article.content.toLowerCase().includes(selectedTag.toLowerCase());
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);
  const featuredArticle = useMemo(() => {
    return getBlogs().find((a) => a.slug === "how-ai-search-reshapes-organic-traffic") || getBlogs()[0];
  }, []);
  useMemo(() => {
    return getBlogs().filter((a) => a.slug !== featuredArticle.slug).slice(0, 4);
  }, [featuredArticle.slug]);
  const feedArticles = useMemo(() => {
    return filteredArticles.filter((a) => a.slug !== featuredArticle.slug);
  }, [filteredArticles, featuredArticle.slug]);
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return feedArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [feedArticles, currentPage, articlesPerPage]);
  const totalPages = Math.ceil(feedArticles.length / articlesPerPage) || 1;
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5e3);
    }
  };
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedTag("");
    setCurrentPage(1);
  };
  const handleTagClick = (tagVal) => {
    if (selectedTag === tagVal) {
      setSelectedTag("");
    } else {
      setSelectedTag(tagVal);
      setSelectedCategory("All");
    }
    setCurrentPage(1);
  };
  const scrollToLatestArticles = () => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById("latest-articles");
      if (!target) return;
      const headerOffset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: "relative overflow-hidden bg-white border-b border-[#EAEAEA] flex items-center ",
          style: { minHeight: "85vh", paddingTop: "80px", paddingBottom: "80px" },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0 select-none",
                style: { opacity: 0.2 },
                children: /* @__PURE__ */ jsx(
                  ShapeGrid,
                  {
                    shape: "hexagon",
                    squareSize: 38,
                    borderColor: "rgba(29,39,66,0.3)",
                    hoverFillColor: "transparent",
                    hoverTrailAmount: 0,
                    staticMode: false,
                    speed: 0.2,
                    className: "w-full h-full"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid w-full max-w-[1280px] gap-10 px-6 text-center lg:min-h-[500px] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] lg:items-center lg:px-10 lg:text-left", children: [
              /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[720px] space-y-6 lg:mx-0", children: [
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 animate-pulse text-[#FC9C44]" }),
                      "INSIGHTS"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "h1",
                  {
                    className: "font-bold text-[#232323] leading-[1.05] tracking-tight",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(38px, 5vw, 68px)"
                    },
                    children: "Insights From The Field"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "mx-auto max-w-[680px] text-[#6B7280] lg:mx-0",
                    style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.1vw, 18px)" },
                    children: /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Data-driven marketing strategies. Explore in-depth articles on SEO, performance marketing, website architecture, and conversion optimization to build digital experiences that deliver measurable results." })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 pt-4 lg:justify-start", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        document.getElementById("latest-articles")?.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#2D3A5D] transition-all cursor-pointer",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Browse Articles"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/contact",
                      className: "inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] px-8 py-3.5 text-sm font-semibold text-[#1D2742] bg-[#FAFAF8] hover:bg-[#EAEAEA] transition-all",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Contact Team"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end", children: /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: { slug: featuredArticle.slug }, className: "block", children: /* @__PURE__ */ jsxs(motion.article, { className: "overflow-hidden rounded-xl border border-[#EAEAEA] bg-white text-left shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)]", children: [
                /* @__PURE__ */ jsx("div", { className: "group/image aspect-video overflow-hidden bg-[#FAFAF8]", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: featuredArticle.featuredImage,
                    alt: featuredArticle.title,
                    className: "h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "group/text space-y-4 border-t border-[#EAEAEA] p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Featured Article" }),
                    /* @__PURE__ */ jsx("span", { children: featuredArticle.category }),
                    /* @__PURE__ */ jsx("span", { children: featuredArticle.readTime })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "h2",
                    {
                      className: "text-xl font-bold leading-tight text-[#1D2742] transition-colors duration-200 group-hover/text:text-[#FC9C44] md:text-2xl",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: featuredArticle.title
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "line-clamp-2 text-sm leading-relaxed text-[#6B7280]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: featuredArticle.excerpt
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-[#1D2742] transition-colors duration-200 group-hover/text:text-[#FC9C44]", children: [
                    /* @__PURE__ */ jsx("span", { children: "Read Article" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover/text:translate-x-1" })
                  ] })
                ] })
              ] }) }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "main-feed", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { id: "latest-articles", className: "scroll-mt-28 lg:col-span-8 space-y-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#EAEAEA] pb-5", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-xl font-bold text-[#1D2742]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: selectedCategory === "All" && !selectedTag ? "Latest Articles" : selectedCategory !== "All" ? `Category: ${selectedCategory}` : `Topic: #${selectedTag}`
              }
            ),
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-[#6B7280]", children: [
              "Showing ",
              filteredArticles.length,
              " ",
              filteredArticles.length === 1 ? "article" : "articles"
            ] })
          ] }),
          paginatedArticles.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: paginatedArticles.map((article) => /* @__PURE__ */ jsx(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: article.slug },
              className: "block",
              children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: "hover",
                  className: "group flex flex-col h-full rounded-xl border border-[#EAEAEA] bg-white overflow-hidden shadow-sm hover:shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-all duration-300",
                  style: { transformOrigin: "center" },
                  variants: {
                    hover: { y: -4 }
                  },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-4 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "h-2 w-2 rounded-full bg-[#EAEAEA]",
                            variants: {
                              hover: {
                                backgroundColor: "#FC9C44",
                                transition: { delay: 0, duration: 0.15 }
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "h-2 w-2 rounded-full bg-[#EAEAEA]",
                            variants: {
                              hover: {
                                backgroundColor: "#FC9C44",
                                transition: { delay: 0.08, duration: 0.15 }
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            className: "h-2 w-2 rounded-full bg-[#EAEAEA]",
                            variants: {
                              hover: {
                                backgroundColor: "#FC9C44",
                                transition: { delay: 0.16, duration: 0.15 }
                              }
                            }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-[150px] mx-auto bg-white border border-[#EAEAEA] rounded py-0.5 px-2 text-[8px] text-[#9CA3AF] font-mono text-center select-none truncate", children: "text/blog" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden border-b border-[#EAEAEA] bg-[#FAFAF8]", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: article.previewImage || article.featuredImage,
                        alt: article.title,
                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "p-6 text-left flex-1 flex flex-col justify-between bg-white", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44]", children: article.category }),
                        /* @__PURE__ */ jsx(
                          "h4",
                          {
                            className: "text-base font-bold text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors duration-200 line-clamp-2 leading-snug",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: article.title
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "p",
                          {
                            className: "text-xs text-[#6B7280] leading-relaxed line-clamp-2",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: article.excerpt
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-5 flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-200 mt-auto", children: [
                        /* @__PURE__ */ jsx("span", { children: "Read Article" }),
                        /* @__PURE__ */ jsx(
                          motion.span,
                          {
                            variants: {
                              hover: { x: 6 }
                            },
                            transition: { duration: 0.2 },
                            children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              )
            },
            article.slug
          )) }) }) : /* @__PURE__ */ jsxs("div", { className: "border border-dashed border-[#EAEAEA] rounded-xl py-20 text-center space-y-4", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] mx-auto", children: /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-base font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "No insights found"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "text-xs text-[#6B7280]",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "Try clearing search terms or modifying category selections."
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedTag("");
                },
                className: "text-xs font-bold text-[#FC9C44] bg-[#FFF4E8] px-4 py-2 rounded-full hover:bg-[#FC9C44] hover:text-white transition-all cursor-pointer",
                children: "Clear Filters"
              }
            )
          ] }),
          totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 border-t border-[#EAEAEA] pt-10 mt-6", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: currentPage === 1,
                onClick: () => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  scrollToLatestArticles();
                },
                className: "px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                children: "← Previous"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setCurrentPage(i + 1);
                  scrollToLatestArticles();
                },
                className: `h-9 w-9 text-xs font-bold rounded-lg border transition-all ${currentPage === i + 1 ? "bg-[#FC9C44] text-white border-[#FC9C44]" : "bg-white text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]"}`,
                children: i + 1
              },
              i
            )) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                disabled: currentPage === totalPages,
                onClick: () => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  scrollToLatestArticles();
                },
                className: "px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                children: "Next →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxs("aside", { className: "space-y-10 lg:sticky lg:top-[120px] lg:h-fit", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-left", children: [
            /* @__PURE__ */ jsx(
              "h4",
              {
                className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Search Insights"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search insights...",
                  value: searchQuery,
                  onChange: (e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  },
                  className: "w-full rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] py-3 pl-10 pr-4 text-xs text-[#232323] outline-none focus:border-[#FC9C44] focus:bg-white transition-all placeholder:text-[#9CA3AF]"
                }
              ),
              /* @__PURE__ */ jsx(Search, { className: "absolute left-3.5 top-3 h-4 w-4 text-[#9CA3AF]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-left", children: [
            /* @__PURE__ */ jsx(
              "h4",
              {
                className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Categories"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleCategoryClick(cat),
                className: `px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${selectedCategory === cat ? "bg-[#1D2742] text-white border-[#1D2742]" : "bg-[#FAFAF8] text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]/30 hover:bg-[#FFF4E8]/20"}`,
                children: cat
              },
              cat
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-left", children: [
            /* @__PURE__ */ jsx(
              "h4",
              {
                className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Popular Topics"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2.5", children: popularTopics.map((topic) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleTagClick(topic.searchVal),
                className: `px-3 py-1.5 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${selectedTag === topic.searchVal ? "bg-[#FC9C44] text-white border-[#FC9C44]" : "bg-white text-[#4A5568] border-[#EAEAEA] hover:border-[#FC9C44]/20 hover:bg-[#FAFAF8]"}`,
                children: topic.label
              },
              topic.label
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-6 text-left relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#FFF4E8]/40 blur-xl" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx(
                  "h4",
                  {
                    className: "text-base font-bold text-[#1D2742]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: "Get Weekly Growth Insights"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-xs text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: "Get notified when new guides, frameworks, and digital systems analysis papers go live."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubscribe, className: "space-y-2 pt-1", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    placeholder: "business@email.com",
                    value: emailInput,
                    onChange: (e) => setEmailInput(e.target.value),
                    className: "w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2.5 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all placeholder:text-[#9CA3AF]"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "w-full rounded-lg bg-[#FC9C44] py-2.5 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all cursor-pointer",
                    children: "Subscribe"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: subscribed && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 text-center mt-2",
                  children: "✓ Subscribed! Check your inbox soon."
                }
              ) })
            ] })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 sm:py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#06133D] px-6 py-14 text-center text-white sm:px-12 sm:py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FC9C44]/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#3A65FF]/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]", children: "Keep Learning With Hegxcorp" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl", children: "Want sharper ideas for your next stage of growth?" }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70", children: "Read more practical insights from our team, or talk with us about turning what you learn into a focused digital plan." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/free-growth-audit",
              className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:bg-[#ffad63]",
              children: [
                "Get a Free Growth Audit ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10",
              children: "Contact Us"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./service.wordpress-BzNsBI90.js");
const Route$i = createFileRoute("/service/wordpress")({
  head: () => ({
    meta: [{
      title: "WordPress Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "WordPress development services by Hegxcorp including custom WordPress websites, theme development, WooCommerce stores, plugin setup, CMS configuration, speed optimisation, security, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./service.web-dev-AY6ZuYDw.js");
const Route$h = createFileRoute("/service/web-dev")({
  head: () => ({
    meta: [{
      title: "Website Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "Website development services by Hegxcorp including responsive websites, custom development, ecommerce websites, performance optimisation, CMS development, website redesign, integrations, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./service.web-app-BfxNith5.js");
const Route$g = createFileRoute("/service/web-app")({
  head: () => ({
    meta: [{
      title: "Web Application Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "Web application development services by Hegxcorp including custom web apps, dashboards, portals, SaaS platforms, backend systems, API integrations, performance optimisation, and maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
function ZigZagGrowthStack({ eyebrow, title, description, cards }) {
  const [activeReveal, setActiveReveal] = useState(null);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute left-1/2 top-[330px] hidden h-[calc(100%-420px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#06133D]/12 to-transparent lg:block"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: eyebrow }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 lg:gap-10", children: cards.map((card, index) => {
        const Icon = card.icon;
        const alignRight = index % 2 === 0;
        const hasDetails = Boolean(
          card.detailTitle || card.detailCopy || card.detailPoints?.length
        );
        const isRevealOpen = activeReveal === index;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: hasDetails ? `flex flex-col gap-4 lg:items-stretch ${alignRight ? "lg:flex-row-reverse" : "lg:flex-row"}` : `flex ${alignRight ? "justify-end" : "justify-start"}`,
            initial: { opacity: 0, x: alignRight ? 46 : -46, y: 18 },
            whileInView: { opacity: 1, x: 0, y: 0 },
            viewport: { once: true, amount: 0.34 },
            transition: { duration: 0.58, delay: index * 0.08, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxs(
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
                    /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsx(Icon, { size: 23, strokeWidth: 2 }) }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: card.label }),
                    /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: card.title }),
                    /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: card.copy })
                  ]
                }
              ),
              hasDetails && /* @__PURE__ */ jsx(
                "aside",
                {
                  "aria-hidden": !isRevealOpen,
                  className: `overflow-hidden rounded-[8px] border border-[#DFE3EA] bg-white/88 shadow-[0_18px_48px_-34px_rgba(29,39,66,0.32)] backdrop-blur-sm transition-all duration-300 ease-out lg:pointer-events-none ${isRevealOpen ? `opacity-100 lg:max-w-[430px] ${alignRight ? "lg:translate-x-0" : "lg:translate-x-0"}` : `max-h-0 opacity-0 lg:max-h-none lg:max-w-0 ${alignRight ? "lg:translate-x-5" : "lg:-translate-x-5"}`}`,
                  children: /* @__PURE__ */ jsxs("div", { className: "min-w-0 p-6 lg:w-[430px]", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.14em] text-[#FC9C44]", children: "More Detail" }),
                    card.detailTitle && /* @__PURE__ */ jsx("h4", { className: "mt-3 text-xl font-black leading-tight text-[#06133D]", children: card.detailTitle }),
                    card.detailCopy && /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#4F5B76]", children: card.detailCopy }),
                    card.detailPoints?.length ? /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-2", children: card.detailPoints.map((point) => /* @__PURE__ */ jsx(
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
const Route$f = createFileRoute("/service/ui-ux-design")({
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
const processItems$4 = [
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
const faqs$4 = [
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
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb:14", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxs("p", { className: " inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: [
              /* @__PURE__ */ jsx(Sparkles, { size: 10, strokeWidth: 2 }),
              "Premium UI/UX Design"
            ] }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "max-w-4xl font-black leading-[1.02]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)"
                },
                children: [
                  "Digital experiences",
                  /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "people trust, use," }),
                  "and act on"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/contact",
                  className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                  children: [
                    "Start a Design Project",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16, strokeWidth: 2 })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 28, scale: 0.96 },
          animate: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
          className: "relative",
          children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between gap-5", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Experience Blueprint" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "UI/UX Design System" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Palette, { size: 22, strokeWidth: 2 }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-[0.8fr_1.2fr]", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Screen Flow" }),
                /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-3", children: ["Discover", "Compare", "Trust", "Contact"].map((step, index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 rounded-xl bg-white/[0.06] p-3",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#FC9C44] text-[10px] font-black text-white", children: index + 1 }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white/82", children: step })
                    ]
                  },
                  step
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Interface Health" }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#FC9C44]/18 px-3 py-1 text-[11px] font-black text-[#FC9C44]", children: "Mapped" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                  ["Visual hierarchy", "92%"],
                  ["Form clarity", "86%"],
                  ["Mobile flow", "94%"]
                ].map(([label, value]) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em]", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/58", children: label }),
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: value })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]",
                      style: { width: value }
                    }
                  ) })
                ] }, label)) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-4 sm:grid-cols-3", children: ["Wireframes", "Prototype", "Handoff"].map((item) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "rounded-2xl border border-white/10 bg-white/[0.05] p-4",
                children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-4 h-5 w-5 text-[#FC9C44]" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-white", children: item }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs leading-5 text-white/54", children: "Planned with responsive states and conversion flow." })
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
  return /* @__PURE__ */ jsx("section", { className: "border-y border-[#EAEAEA] bg-white px-6 py-10 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-4 md:grid-cols-4", children: proofStats.map(([value, label]) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "border border-[#EAEAEA] bg-[#FAFAF8] p-5",
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-[#06133D]", children: value }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold leading-6 text-[#5F6B7A]", children: label })
      ]
    },
    label
  )) }) });
}
function UxCapabilities() {
  const [activeCapability, setActiveCapability] = useState(0);
  const activeItem = uxCapabilities[activeCapability];
  return /* @__PURE__ */ jsx("section", { className: "bg-[#F7F8FB] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "UI/UX Capabilities" }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Every design layer is planned to reduce confusion, make value easier to understand, and support a stronger conversion path across desktop and mobile." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
      /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
        /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "Experience Layers" }),
        /* @__PURE__ */ jsx("h3", { className: "seo-split-heading", children: "From user insight to build-ready interface" }),
        /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "We combine research, structure, interface design, conversion thinking, and system documentation into one practical design workflow." }),
        /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: uxCapabilities.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeCapability === index;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onMouseEnter: () => setActiveCapability(index),
              onFocus: () => setActiveCapability(index),
              onClick: () => setActiveCapability(index),
              className: `seo-service-item ${isActive ? "active" : ""}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 2 }) }),
                /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                  /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                  /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
                ] }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
              ]
            },
            item.title
          );
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, scale: 1.02 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.99 },
          transition: { duration: 0.42, ease: "easeOut" },
          className: "seo-capability-slide",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "seo-slide-bg service-slide-bg",
                style: { backgroundImage: `url("${activeItem.image}")` }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "seo-slide-tint service-slide-tint" }),
            /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
              /* @__PURE__ */ jsx("span", { className: "seo-slide-kicker", children: activeItem.tag }),
              /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
              /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
                '"',
                activeItem.hook,
                '"'
              ] }),
              /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
              /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
            ] })
          ]
        },
        activeItem.title
      ) }) })
    ] })
  ] }) });
}
function ExperienceBlueprint() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "Experience Blueprint" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Strong UI/UX design is not only a screen mockup. It is a working system of page logic, user psychology, visual hierarchy, responsive behavior, and handoff detail that helps your team move faster." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: blueprintSteps.map((step, index) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.5, delay: index * 0.06, ease: "easeOut" },
          className: "group border border-[#E2E6EF] bg-[#FAFAF8] p-7 transition hover:-translate-y-1 hover:border-[#FC9C44]/55 hover:bg-white hover:shadow-[0_24px_68px_-48px_rgba(6,19,61,0.5)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-start justify-between gap-5", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-14 w-14 items-center justify-center bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]", children: /* @__PURE__ */ jsx(Icon, { size: 23, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-5xl font-black leading-none text-[#E3E7EF] transition group-hover:text-[#FC9C44]/22", children: step.label })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black leading-tight text-[#06133D]", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-8 text-[#4F5B76]", children: step.copy })
          ]
        },
        step.title
      );
    }) })
  ] }) });
}
function DeliverablesSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#06133D] px-6 py-24 text-white lg:px-10", children: [
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.76fr_1fr] lg:items-start lg:gap-24", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "What You Get" }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-8 text-white/70", children: "We keep deliverables practical. The goal is not a pretty file that sits unused. The goal is a clear experience system that helps marketing, design, and development ship better pages faster." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:pt-1", children: deliverables.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.45, delay: index * 0.035, ease: "easeOut" },
          className: "flex items-start gap-3 border border-white/10 bg-white/[0.06] p-4",
          children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold leading-6 text-white/86", children: item })
          ]
        },
        item
      )) })
    ] })
  ] });
}
function IndustriesSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#FAFAF8] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-14 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: "Who It Helps" }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Whether you are rebuilding a service website, improving a product flow, or launching a campaign page, the design should make your value easier to understand and easier to choose." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: industries.map((industry, index) => {
      const Icon = industry.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.42, delay: index * 0.035, ease: "easeOut" },
          className: "group border border-[#E2E6EF] bg-white p-5 transition hover:-translate-y-1 hover:border-[#FC9C44]/60 hover:shadow-[0_18px_48px_-36px_rgba(6,19,61,0.38)]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "mb-5 flex h-11 w-11 items-center justify-center bg-[#FFF4E8] text-[#FC9C44] transition group-hover:bg-[#FC9C44] group-hover:text-white", children: /* @__PURE__ */ jsx(Icon, { size: 19, strokeWidth: 2 }) }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-black text-[#06133D]", children: industry.label })
          ]
        },
        industry.label
      );
    }) })
  ] }) });
}
function UiUxDesignPage() {
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(UiUxHero, {}),
      /* @__PURE__ */ jsx(ProofBand, {}),
      /* @__PURE__ */ jsx(UxCapabilities, {}),
      /* @__PURE__ */ jsx(ExperienceBlueprint, {}),
      /* @__PURE__ */ jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "UI/UX Growth Stack",
          title: "Premium design works best when strategy, interface, and conversion move together",
          description: "A stronger digital experience connects business goals, user needs, visual clarity, component systems, and measurable conversion behavior.",
          cards: uxGrowthStack
        }
      ),
      /* @__PURE__ */ jsx(DeliverablesSection, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#ebc671]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: serviceItems.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: processItems$4.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(IndustriesSection, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs$4.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$e = createFileRoute("/service/social-med")({
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
    icon: BarChart3,
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
    icon: BarChart3,
    label: "Growth Signals",
    title: "Measure, Learn, Improve",
    copy: "We read reach, engagement, saves, clicks, community response, and follower quality to improve the next content cycle with clearer decisions.",
    detailTitle: "A feedback loop for better content",
    detailCopy: "Performance data guides what to repeat, what to improve, and where to shift creative energy so social media becomes a learning system.",
    detailPoints: ["Engagement quality", "Content winners", "Next-cycle improvements"]
  }
];
const processItems$3 = [
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
  const [activeCapability, setActiveCapability] = useState(0);
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const activeItem = socialCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Social Media Marketing" }),
                /* @__PURE__ */ jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Social Media",
                      /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "That Builds Demand" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Plan My Social Growth"
                    }
                  ),
                  /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Brand Growth Console" }),
                    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Social Performance System" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Users, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Reach Lift", "+248%"],
                  ["Engagement", "+186%"],
                  ["Content Score", "92"],
                  ["Community", "+64%"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/52", children: "Weekly Content Mix" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Live" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: [
                    ["Reels", "78%"],
                    ["Carousels", "64%"],
                    ["Community", "52%"]
                  ].map(([label, width]) => /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                      /* @__PURE__ */ jsx("span", { children: label }),
                      /* @__PURE__ */ jsx("span", { children: width })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "Social Media Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "seo-split-heading", children: "Complete social media systems for brand growth" }),
          /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the social media system builds awareness, consistency, engagement, and measurable demand." }),
          /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: socialCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "seo-capability-slide",
            initial: { opacity: 0, x: 24, scale: 0.98 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: -18, scale: 0.98 },
            transition: { duration: 0.5, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "Social Growth Stack",
          title: "Social media works best when strategy, content, and community move together",
          description: "Each layer of your social system should make the next one stronger, from audience insight to creative execution and performance learning.",
          cards: socialGrowthStack
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx("div", { children: socialServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsx("div", { children: processItems$3.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$d = createFileRoute("/service/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services | Hegxcorp" },
      {
        name: "description",
        content: "Hegxcorp SEO services in India for technical SEO, local SEO, international SEO, ecommerce SEO, content strategy, link authority, analytics and long-term organic growth."
      }
    ]
  }),
  component: SeoServicePage
});
function SeoHero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-10 lg:pb-14 ", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.22), transparent 28%), radial-gradient(circle at 82% 28%, rgba(79,111,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "SEO Growth Consulting" }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "max-w-3xl font-black leading-[0.9]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)"
                },
                children: [
                  "Search Engine",
                  /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "Optimisation" }),
                  "Built to Compound"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "mt-7 max-w-2xl text-white/72",
                style: {
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  lineHeight: 1.75
                },
                children: "Hegxcorp builds SEO systems for brands that want more than rankings. We improve technical health, search intent coverage, content authority, local visibility, and conversion paths so organic traffic turns into qualified enquiries and revenue."
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/free-growth-audit",
                  className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                  children: "Get Free SEO Audit"
                }
              ),
              /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 28, scale: 0.96 },
          animate: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
          className: "relative",
          children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Organic Growth Plan" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Search Visibility Roadmap" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(BarChart3, { size: 22, strokeWidth: 2 }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Audit Signals" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-4xl font-black text-white", children: "80+" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/58", children: "Technical, content, and authority checks" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Intent Clusters" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-4xl font-black text-[#FC9C44]", children: "12+" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/58", children: "Buyer journeys mapped to keywords" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Fix Priority" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-black text-white", children: "90 days" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: "Reporting" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-black text-white", children: "Weekly" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white/52", children: "Compounding Visibility Path" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Mapped" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-28 items-end gap-2", children: [28, 36, 44, 52, 68, 76, 88, 100].map((height, index) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex-1 rounded-t-lg bg-gradient-to-t from-[#FC9C44] to-[#FFD4AA]",
                  style: {
                    height: `${height}%`,
                    opacity: 0.45 + index * 0.06
                  }
                },
                height
              )) })
            ] })
          ] }) })
        }
      )
    ] })
  ] });
}
const seoCapabilities = [
  {
    icon: Gauge,
    title: "Technical SEO",
    tag: "Site Health",
    hook: "Fix what blocks growth before scaling content.",
    description: "We audit crawlability, indexation, site structure, Core Web Vitals, schema, internal links, redirects, canonicals, and the technical issues that stop organic growth.",
    pills: ["Crawlability", "Core Web Vitals", "Schema", "Canonicals"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75"
  },
  {
    icon: Search,
    title: "Keyword Strategy",
    tag: "Search Demand",
    hook: "Target the terms your buyers already use.",
    description: "We identify high-intent keywords, commercial modifiers, local searches, competitor gaps, and topic clusters that connect directly to your services, products, and buyer journey.",
    pills: ["Intent mapping", "Competitors", "Clusters", "SERP gaps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75"
  },
  {
    icon: FileText,
    title: "Content Strategy",
    tag: "Authority",
    hook: "Build pages that rank, educate, and convert.",
    description: "We plan SEO landing pages, blogs, service pages, FAQs, comparison pages, and content clusters that help search engines and buyers understand your authority.",
    pills: ["Landing pages", "Blogs", "Topic clusters", "FAQs"],
    image: "https://images.unsplash.com/photo-1542435503-ec7b0f4b96a5?w=900&q=75"
  },
  {
    icon: Link2,
    title: "Authority Building",
    tag: "Trust Signals",
    hook: "Earn the credibility search engines can measure.",
    description: "We strengthen organic trust through quality content, digital PR, backlink strategy, and credibility signals.",
    pills: ["Digital PR", "Backlinks", "Mentions", "Relevance"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75"
  },
  {
    icon: BarChart3,
    title: "Ecommerce SEO",
    tag: "Revenue Pages",
    hook: "Turn product discovery into organic sales.",
    description: "We optimize category pages, product pages, filters, metadata, content depth, and technical architecture for ecommerce traffic.",
    pills: ["Categories", "Products", "Filters", "Metadata"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75"
  },
  {
    icon: MapPin,
    title: "Local SEO",
    tag: "Nearby Demand",
    hook: "Win searches from people ready to visit or call.",
    description: "We improve local search visibility through location pages, Google Business Profile optimization, citations, and review signals.",
    pills: ["GBP", "Reviews", "Citations", "Location pages"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=75"
  },
  {
    icon: Globe2,
    title: "International SEO",
    tag: "Global Reach",
    hook: "Make every market discover the right version of your site.",
    description: "We map country targeting, language intent, hreflang, localized landing pages, and search demand so growing brands can rank beyond one region.",
    pills: ["Hreflang", "Market pages", "Localized intent", "Global tracking"],
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900&q=75"
  },
  {
    icon: Settings,
    title: "AI Search Readiness",
    tag: "Future Visibility",
    hook: "Help your brand show up clearly in modern search experiences.",
    description: "We structure content, FAQs, entity signals, schema, and expert-led page depth so your site is easier for search engines and AI answer systems to understand.",
    pills: ["Entity clarity", "Structured content", "Schema", "Helpful answers"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=75"
  }
];
function SeoCapabilities() {
  const [activeCapability, setActiveCapability] = useState(0);
  const activeItem = seoCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
    /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
      /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "SEO Capabilities" }),
      /* @__PURE__ */ jsx("h2", { className: "seo-split-heading", children: "Complete SEO systems for long-term organic growth" }),
      /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the SEO system compounds visibility, authority, and qualified demand." }),
      /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: seoCapabilities.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeCapability === index;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onMouseEnter: () => setActiveCapability(index),
            onFocus: () => setActiveCapability(index),
            onClick: () => setActiveCapability(index),
            className: `seo-service-item ${isActive ? "active" : ""}`,
            "aria-pressed": isActive,
            children: [
              /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
              ] }),
              /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
            ]
          },
          item.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "seo-capability-slide",
        initial: { opacity: 0, x: 24, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -18, scale: 0.98 },
        transition: { duration: 0.5, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "seo-slide-bg",
              style: { backgroundImage: `url(${activeItem.image})` }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "seo-slide-tint" }),
          /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
            /* @__PURE__ */ jsxs("span", { className: "seo-slide-kicker", children: [
              /* @__PURE__ */ jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
              activeItem.tag
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
            /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
              '"',
              activeItem.hook,
              '"'
            ] }),
            /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
            /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
          ] })
        ]
      },
      activeItem.title
    ) }) })
  ] }) }) });
}
const seoProofMetrics = [
  {
    value: "80+",
    label: "SEO checkpoints",
    copy: "Technical, content, UX, schema, local, and authority checks before the roadmap is finalized."
  },
  {
    value: "12+",
    label: "Intent clusters",
    copy: "Search topics grouped by buyer stage so every important service has a ranking path."
  },
  {
    value: "7-step",
    label: "Execution process",
    copy: "Audit, keyword research, on-page SEO, technical fixes, content, authority, and reporting."
  },
  {
    value: "Weekly",
    label: "Visibility review",
    copy: "Search Console, analytics, rankings, leads, and content gaps reviewed with action priorities."
  }
];
function SeoProofBand() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: seoProofMetrics.map((metric) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45 },
      className: "border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_45px_-34px_rgba(6,19,61,0.45)]",
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
      ]
    },
    metric.label
  )) }) });
}
const seoServiceTracks = [
  {
    icon: MapPin,
    title: "Local SEO",
    copy: "Improve visibility for city, area, and near-me searches with Google Business Profile optimization, local landing pages, NAP consistency, review signals, and citation cleanup.",
    points: ["Google Business Profile", "Location pages", "Review strategy", "Local citations"]
  },
  {
    icon: Globe2,
    title: "International SEO",
    copy: "Reach buyers across countries with region-specific keyword research, localized content planning, hreflang hygiene, country targeting, and global performance tracking.",
    points: ["Hreflang strategy", "Country pages", "Localized keywords", "Global reporting"]
  },
  {
    icon: Building2,
    title: "B2B SEO Services",
    copy: "Build authority for complex buying journeys using problem-aware content, service comparison pages, thought leadership, LinkedIn-aligned topics, and lead-focused landing pages.",
    points: [
      "Lead-intent keywords",
      "Decision-stage pages",
      "Authority content",
      "Pipeline tracking"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    copy: "Optimize category pages, product descriptions, filters, schema, internal links, and content depth so shoppers can discover products and move confidently toward checkout.",
    points: ["Category SEO", "Product schema", "Faceted navigation", "Conversion paths"]
  },
  {
    icon: Gauge,
    title: "Technical SEO & Migrations",
    copy: "Protect rankings during redesigns, domain moves, CMS migrations, and architecture changes with crawl audits, redirect maps, index controls, speed checks, and launch QA.",
    points: ["Core Web Vitals", "Redirect mapping", "Indexation fixes", "Architecture QA"]
  },
  {
    icon: PenTool,
    title: "Content Marketing SEO",
    copy: "Create service pages, blogs, FAQs, comparison pages, and topic clusters that answer buyer questions while supporting rankings, internal linking, and conversion.",
    points: ["Content briefs", "Topic clusters", "Service pages", "Helpful FAQs"]
  },
  {
    icon: Link2,
    title: "Link Building & Authority",
    copy: "Strengthen trust with relevant backlinks, brand mentions, internal authority flow, digital PR opportunities, and content assets worth referencing.",
    points: ["Backlink strategy", "Digital PR", "Internal links", "Authority assets"]
  },
  {
    icon: Layers,
    title: "WordPress, Shopify & CMS SEO",
    copy: "Tune popular CMS platforms with plugin setup, metadata, sitemap health, theme performance, structured data, collection pages, and clean content architecture.",
    points: ["Plugin setup", "Sitemaps", "Theme speed", "Collection SEO"]
  },
  {
    icon: Youtube,
    title: "YouTube SEO",
    copy: "Support video discovery with keyword-led titles, descriptions, chapters, tags, thumbnails, playlist structure, transcripts, and landing page embeds.",
    points: ["Video keywords", "Descriptions", "Playlists", "Transcripts"]
  },
  {
    icon: Settings,
    title: "AI SEO & Search Answer Readiness",
    copy: "Prepare pages for modern search experiences with entity clarity, structured answers, schema, author credibility, content freshness, and stronger topical coverage.",
    points: ["Entity signals", "Answer blocks", "Schema", "Content freshness"]
  }
];
function SeoServiceDepth() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-6xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "SEO Services in India" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[#06133D] font-black leading-tight",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 4.8vw, 66px)"
          },
          children: "Full-funnel SEO services for visibility, trust, and qualified leads"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 max-w-6xl text-base leading-8 text-[#5F6B7A]", children: [
        "Hegxcorp covers the practical SEO layers a growing brand needs: local, international, B2B, ecommerce, technical, content, authority, CMS, video, and AI-ready search optimization, helping every important page become easier to discover, understand, trust, and convert.",
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: seoServiceTracks.map((track, index) => {
      const Icon = track.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: track.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-[#5F6B7A]", children: track.copy })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: track.points.map((point) => /* @__PURE__ */ jsx(
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
const seoInvestmentPoints = [
  "SEO keeps building value after the first campaign cycle, while paid ads stop the moment spend pauses.",
  "A stronger technical foundation improves crawl efficiency, page experience, conversion paths, and analytics clarity.",
  "Content created around buyer intent can support rankings, sales conversations, remarketing audiences, and brand authority.",
  "Monthly reporting connects rankings and traffic to enquiries, form submissions, calls, and business outcomes."
];
function SeoInvestmentSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Long-Term Growth" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "font-black leading-tight",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.6vw, 62px)"
          },
          children: "Why SEO is one of the strongest investments for compounding demand"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/72", children: "Paid campaigns are useful for speed, but SEO builds durable discovery. Hegxcorp connects organic search with website performance, brand trust, helpful content, and conversion optimization so your audience can find you before they are ready to talk to sales." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-13", children: seoInvestmentPoints.map((point) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 border border-white/12 bg-white/[0.06] p-5", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-white/78", children: point })
    ] }, point)) })
  ] }) });
}
const highlightedServices$1 = [
  {
    title: "SEO Audit",
    answer: "Hegxcorp audits your website from the ground up: crawlability, indexation, metadata, Core Web Vitals, schema, content gaps, internal links, competitor visibility, conversion paths, analytics setup, and search demand. The output is a prioritized roadmap, not a generic checklist."
  },
  {
    title: "Technical SEO",
    answer: "We fix the behind-the-scenes issues that restrict organic growth: slow pages, broken links, duplicate content, thin templates, redirect chains, incorrect canonical tags, sitemap errors, robots rules, JavaScript rendering issues, and poor mobile experience."
  },
  {
    title: "Local SEO",
    answer: "For location-led businesses, we optimize Google Business Profile, service area pages, city pages, local citations, review signals, maps visibility, and local keyword targeting so nearby buyers can find and trust your brand faster."
  },
  {
    title: "Content Marketing",
    answer: "Our content planning connects keyword research with buyer intent. We create page briefs, service copy, blogs, FAQs, comparison content, and internal linking plans that build topical authority while supporting enquiries and sales conversations."
  },
  {
    title: "SEO Migrations",
    answer: "When you redesign, re-platform, or change domains, Hegxcorp protects your rankings with URL mapping, redirect strategy, metadata preservation, staging audits, indexation checks, analytics validation, and post-launch monitoring."
  },
  {
    title: "Link Building",
    answer: "We focus on relevance and trust rather than volume. Authority work includes internal link architecture, digital PR opportunities, partner mentions, high-quality citations, linkable content assets, and competitor backlink gap analysis."
  },
  {
    title: "Enterprise SEO",
    answer: "Enterprise SEO needs governance as much as execution. We help teams manage page templates, content workflows, technical priorities, multi-location architecture, reporting dashboards, and cross-functional growth roadmaps."
  },
  {
    title: "eCommerce SEO",
    answer: "We optimize ecommerce stores through category structure, product schema, collection copy, filters, breadcrumbs, metadata, review markup, internal links, content blocks, and conversion-focused product discovery."
  }
];
const seoGrowthStack = [
  {
    icon: Gauge,
    label: "Technical Foundation",
    title: "Search-Ready Site Health",
    copy: "Crawlability, speed, indexation, schema, internal links, and structure are tightened first so search engines can understand and trust the site."
  },
  {
    icon: FileText,
    label: "Authority Content",
    title: "Pages That Rank and Convert",
    copy: "Service pages, landing pages, blogs, and topic clusters are planned around buyer intent so traffic grows with stronger conversion potential."
  },
  {
    icon: BarChart3,
    label: "Performance Loop",
    title: "Measure, Refine, Compound",
    copy: "Rankings, traffic quality, leads, content gaps, and technical signals are reviewed continuously so the SEO system keeps improving over time."
  }
];
const processItems$2 = [
  {
    title: "Initial Consultation & Website Audit",
    answer: "We begin by understanding your business model, service priorities, current website health, competitors, analytics data, and lead goals. Then we audit technical SEO, content quality, indexation, rankings, user experience, and conversion paths."
  },
  {
    title: "Keyword Research & Search Intent Mapping",
    answer: "We map keywords by intent: awareness, comparison, local, product, service, and ready-to-buy searches. This helps Hegxcorp build pages that attract the right visitors, not just more visitors."
  },
  {
    title: "On-Page Optimization",
    answer: "We improve titles, headings, metadata, internal links, content depth, schema, image alt text, calls-to-action, FAQs, and page structure so every important page has a clear ranking and conversion purpose."
  },
  {
    title: "Technical SEO Fixes",
    answer: "We prioritize crawl, speed, mobile, canonical, sitemap, redirect, broken link, structured data, and indexation issues so search engines can discover, understand, and trust the website."
  },
  {
    title: "Content Development & Optimization",
    answer: "We create and improve service pages, blogs, location pages, comparison pages, FAQs, and supporting content. Every content asset is planned around search intent, internal linking, and business value."
  },
  {
    title: "Authority Building & Off-Page SEO",
    answer: "We strengthen trust signals through relevant backlinks, citations, digital PR, brand mentions, review signals, and internal authority flow. The goal is sustainable credibility, not short-term link volume."
  },
  {
    title: "Monitoring, Reporting & Continuous Improvement",
    answer: "SEO is reviewed continuously. We monitor Search Console, analytics, rankings, traffic quality, conversions, competitor movement, and new content opportunities, then refine the roadmap based on what the data shows."
  }
];
const whyChooseCards = [
  {
    icon: Target,
    title: "Revenue-first SEO strategy",
    copy: "We connect keyword opportunities with your highest-value services, enquiry quality, customer journey, and sales goals so SEO supports real business outcomes."
  },
  {
    icon: Settings,
    title: "Technical depth plus content clarity",
    copy: "Hegxcorp combines technical SEO, content strategy, analytics, and conversion thinking, which helps your website rank better and perform better after visitors arrive."
  },
  {
    icon: Activity,
    title: "Transparent performance reporting",
    copy: "You see what changed, why it changed, what improved, and what should happen next across rankings, impressions, clicks, traffic quality, and enquiries."
  },
  {
    icon: ShieldCheck,
    title: "Sustainable, search-safe execution",
    copy: "We focus on clean site structure, useful content, strong UX, relevant links, and durable authority instead of risky shortcuts that can damage long-term growth."
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement loop",
    copy: "SEO is not a one-time setup. We keep improving pages, fixing technical barriers, expanding content, and adapting to search behavior as your market changes."
  },
  {
    icon: BarChart3,
    title: "SEO connected with CRO",
    copy: "Organic growth matters most when visitors take action. We review calls-to-action, page hierarchy, lead forms, trust signals, and user flow alongside rankings."
  }
];
function WhyChooseHegxcorp() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-[#EAEAEA] bg-[#FAFAF8] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Why Choose Hegxcorp" }),
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: "text-[#06133D] font-black leading-tight",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 60px)"
            },
            children: "Search growth handled with strategy, engineering, and accountability"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E5E7EB] bg-white p-6 shadow-[0_22px_70px_-54px_rgba(6,19,61,0.45)]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp is built for businesses that want a practical SEO partner. We understand your website, audience, services, and growth goals before making recommendations. Our team strengthens content, improves technical SEO, and removes friction that blocks visibility. Every strategy is connected to measurable growth, qualified enquiries, and stronger search performance. We focus on long-term organic visibility instead of short-term ranking tricks. The result is an SEO system that keeps improving your website, traffic quality, and business outcomes." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-3", children: ["Technical clarity", "Content direction", "Growth reporting"].map((item) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "border border-[#E5E7EB] bg-[#FAFAF8] px-4 py-3 text-sm font-black text-[#06133D]",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: whyChooseCards.map((card, index) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.42, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-white p-7",
          children: [
            /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 21, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: card.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: card.copy })
          ]
        },
        card.title
      );
    }) })
  ] }) });
}
const seoIndustries = [
  {
    title: "B2B & SaaS",
    copy: "Rank for problem-aware, comparison, integration, and decision-stage searches that generate better-fit leads."
  },
  {
    title: "Ecommerce & D2C",
    copy: "Improve category visibility, product discovery, rich results, review signals, and content-led shopping journeys."
  },
  {
    title: "Healthcare & Clinics",
    copy: "Build trustworthy service pages, local visibility, FAQ depth, appointment intent, and patient education content."
  },
  {
    title: "Education & Institutes",
    copy: "Capture course, location, admission, comparison, and career-focused search demand with structured content."
  },
  {
    title: "Real Estate & Local Services",
    copy: "Strengthen city pages, map visibility, neighborhood intent, lead forms, and trust signals for local enquiries."
  },
  {
    title: "Manufacturing & Industrial",
    copy: "Turn technical capabilities into searchable service pages, product categories, case studies, and B2B authority."
  }
];
function SeoIndustries() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-6xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Industries We Optimize" }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[#06133D] font-black leading-tight",
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(34px, 4.4vw, 60px)"
          },
          children: "SEO strategy adapted to your market, audience, and sales cycle"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3", children: seoIndustries.map((industry) => /* @__PURE__ */ jsxs("article", { className: "bg-white p-7 transition hover:bg-[#FAFAF8]", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: industry.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: industry.copy })
    ] }, industry.title)) })
  ] }) });
}
const faqs$3 = [
  {
    question: "What are SEO services?",
    answer: "SEO services improve how your website appears, performs, and converts in organic search. A strong SEO plan includes technical SEO, keyword research, on-page optimization, content strategy, local SEO, link authority, analytics, and ongoing reporting."
  },
  {
    question: "Why does my business need SEO?",
    answer: "SEO helps your business get discovered by people already searching for your services, products, or solutions. It can reduce dependence on paid ads, improve qualified traffic, strengthen credibility, and create long-term compounding growth."
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO usually takes 3 to 6 months to show meaningful movement, depending on competition, website condition, content quality, technical health, and authority. Technical fixes can create earlier gains, while content and authority typically compound over time."
  },
  {
    question: "What is included in SEO services?",
    answer: "Hegxcorp SEO services can include SEO audits, technical fixes, keyword research, on-page optimization, content planning, local SEO, international SEO, ecommerce SEO, link building, Search Console review, analytics setup, and monthly reporting."
  },
  {
    question: "Do you offer local SEO for city or area searches?",
    answer: "Yes. Local SEO can include Google Business Profile optimization, service area pages, location pages, citation consistency, review strategy, map visibility improvements, and local keyword targeting."
  },
  {
    question: "Can SEO help ecommerce websites?",
    answer: "Yes. Ecommerce SEO improves product discovery through optimized category pages, product metadata, structured data, internal links, filters, collection content, review markup, and conversion-focused product journeys."
  },
  {
    question: "Will you create SEO content for my website?",
    answer: "Yes. We can plan and create service pages, blogs, FAQs, location pages, comparison pages, and topic clusters. Every content recommendation is tied to search intent, authority, and conversion value."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track rankings, impressions, clicks, organic traffic, landing page quality, conversions, calls, form enquiries, Search Console data, technical health, and content growth. The exact dashboard depends on your business goals."
  },
  {
    question: "Can you protect rankings during a website redesign?",
    answer: "Yes. For redesigns and migrations, we prepare redirect maps, preserve important metadata, audit staging environments, check indexation controls, validate analytics, monitor launch changes, and resolve post-launch crawl issues."
  }
];
function SeoServicePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("style", { children: `
                .seo-split-reveal {
                    display: grid;
                    grid-template-columns: minmax(300px, 0.9fr) 1px minmax(420px, 1.1fr);
                    gap: 42px;
                    align-items: stretch;
                    min-height: 520px;
                    background: transparent;
                    border: 0;
                    border-radius: 0;
                    box-shadow: none;
                    overflow: visible;
                }

                .seo-split-left {
                    width: auto;
                    padding: 0;
                    background: transparent;
                    border: 0;
                    border-radius: 0;
                }

                .seo-split-divider {
                    width: 1px;
                    min-height: 100%;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(6, 19, 61, 0.16),
                        transparent
                    );
                }

                .seo-split-eyebrow {
                    margin-bottom: 14px;
                    color: #fc9c44;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .seo-split-heading {
                    max-width: 440px;
                    margin-bottom: 16px;
                    color: #06133d;
                    font-size: clamp(36px, 4vw, 56px);
                    font-weight: 800;
                    line-height: 1.08;
                }

                .seo-split-body {
                    max-width: 430px;
                    margin-bottom: 34px;
                    color: #5a6480;
                    font-size: 15px;
                    line-height: 1.75;
                }

                .seo-service-list {
                    border-top: 1px solid rgba(6, 19, 61, 0.12);
                }

                .seo-service-item {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    gap: 14px;
                    border: 0;
                    border-bottom: 1px solid rgba(6, 19, 61, 0.12);
                    background: transparent;
                    padding: 18px 0;
                    cursor: pointer;
                    text-align: left;
                    transition:
                        padding-left 240ms ease,
                        background-color 240ms ease;
                }

                .seo-service-item:hover,
                .seo-service-item.active {
                    padding-left: 12px;
                }

                .seo-service-icon {
                    display: flex;
                    width: 38px;
                    height: 38px;
                    flex-shrink: 0;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #f3f5fb;
                    color: #536083;
                    transition:
                        background-color 240ms ease,
                        color 240ms ease,
                        transform 240ms ease;
                }

                .seo-service-item:hover .seo-service-icon,
                .seo-service-item.active .seo-service-icon {
                    background: #fc9c44;
                    color: #ffffff;
                    transform: scale(1.05);
                }

                .seo-service-copy {
                    display: grid;
                    gap: 2px;
                }

                .seo-service-name {
                    color: #06133d;
                    font-size: 16px;
                    font-weight: 750;
                    transition: color 220ms ease;
                }

                .seo-service-tag {
                    color: #7a849f;
                    font-size: 12px;
                }

                .seo-service-item:hover .seo-service-name,
                .seo-service-item.active .seo-service-name {
                    color: #fc9c44;
                }

                .seo-service-arrow {
                    margin-left: auto;
                    color: rgba(6, 19, 61, 0.28);
                    transition:
                        color 220ms ease,
                        transform 220ms ease;
                }

                .seo-service-item:hover .seo-service-arrow,
                .seo-service-item.active .seo-service-arrow {
                    color: #fc9c44;
                    transform: translateX(6px);
                }

                .seo-split-right {
                    position: relative;
                    min-width: 0;
                    min-height: 520px;
                    overflow: hidden;
                    border-radius: 0;
                    background: #06133d;
                }

                .seo-capability-slide {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 3rem;
                }

                .seo-slide-bg {
                    position: absolute;
                    inset: 0;
                    background-position: center;
                    background-size: cover;
                    background-blend-mode: normal;
                    transform: scale(1.02);
                    transition: transform 700ms ease, filter 700ms ease;
                }

                .seo-capability-slide:hover .seo-slide-bg {
                    transform: scale(1.08);
                    filter: saturate(1.08);
                }

                .seo-slide-tint {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(6, 19, 61, 0.78) 0%,
                        rgba(6, 19, 61, 0.38) 48%,
                        rgba(6, 19, 61, 0.1) 100%
                    );
                }

                .seo-slide-content {
                    position: relative;
                    z-index: 2;
                    max-width: 460px;
                }

                .seo-slide-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 14px;
                    border-radius: 999px;
                    background: #fc9c44;
                    padding: 6px 14px;
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                .seo-slide-title {
                    margin-bottom: 10px;
                    color: #ffffff;
                    font-size: clamp(34px, 4vw, 58px);
                    font-weight: 850;
                    line-height: 1.02;
                }

                .seo-slide-hook {
                    margin-bottom: 18px;
                    color: rgba(255, 255, 255, 0.78);
                    font-size: 15px;
                    font-style: italic;
                }

                .seo-slide-desc {
                    max-width: 430px;
                    margin-bottom: 22px;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 15px;
                    line-height: 1.75;
                }

                .seo-slide-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .seo-slide-pill {
                    border: 1px solid rgba(255, 255, 255, 0.28);
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.12);
                    padding: 6px 13px;
                    color: rgba(255, 255, 255, 0.84);
                    font-size: 12px;
                    font-weight: 650;
                }

                .seo-disclosure-answer {
                    color: #06133d;
                    font-size: 1.02rem;
                    font-weight: 700;
                    line-height: 1.75;
                }

                @media (max-width: 900px) {
                    .seo-split-reveal {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .seo-split-divider {
                        display: none;
                    }

                    .seo-split-right {
                        min-height: 440px;
                    }

                    .seo-capability-slide {
                        padding: 2rem;
                    }
                }
            ` }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(SeoHero, {}),
      /* @__PURE__ */ jsx(SeoProofBand, {}),
      /* @__PURE__ */ jsx(SeoCapabilities, {}),
      /* @__PURE__ */ jsx(SeoServiceDepth, {}),
      /* @__PURE__ */ jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "SEO Growth Stack",
          title: "SEO works best when technical health, content, and measurement move together",
          description: "Every SEO layer should support the next, turning a stronger website foundation into clearer authority, better rankings, and more qualified demand.",
          cards: seoGrowthStack
        }
      ),
      /* @__PURE__ */ jsx(SeoInvestmentSection, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "text-center text-[#06133D] font-black leading-tight mb-20",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-x-24 gap-y-12", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: highlightedServices$1.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group w-full flex items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-[#06133D] font-semibold",
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "18px"
                        },
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: processItems$2.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group w-full flex items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-[#06133D] font-semibold",
                        style: {
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "18px"
                        },
                        children: item.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(WhyChooseHegxcorp, {}),
      /* @__PURE__ */ jsx(SeoIndustries, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs$3.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$c = createFileRoute("/service/ppc")({
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
    icon: LineChart,
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
  return /* @__PURE__ */ jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: ppcProofMetrics.map((metric) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45 },
      className: "border border-[#E5E7EB] bg-white p-6",
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
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
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "PPC Management Services" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E5E7EB] bg-[#FAFAF8] p-6 shadow-[0_22px_70px_-54px_rgba(6,19,61,0.5)]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp builds PPC systems across search, social, shopping, video, display, and retargeting so every channel has the right message, tracking, landing page, budget rule, and optimization rhythm before scale." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: ["Search intent", "Paid social", "Shopping ads", "Retargeting"].map((item) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-black text-[#06133D]",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: ppcChannelServices.map((service, index) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: service.copy }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: service.points.map((point) => /* @__PURE__ */ jsx(
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
    icon: BarChart3,
    title: "Reporting that explains action",
    copy: "Reports show what changed, what improved, where budget moved, which tests mattered, and what should happen next."
  }
];
function PpcWhySection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Why Hegxcorp PPC" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-3xl justify-self-end", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-white/72", children: "PPC can create demand quickly, but it can also waste budget quickly. Hegxcorp focuses on clean setup, useful data, landing page alignment, and measured scaling so paid media has a stronger chance of becoming profitable without losing control of spend, tracking quality, or lead value." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-3", children: ["Budget discipline", "Tracking clarity", "Landing page fit"].map((item) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/82",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: ppcWhyCards.map((card) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxs("article", { className: "border border-white/12 bg-white/[0.06] p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 21, strokeWidth: 1.9 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-white", children: card.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-white/72", children: card.copy })
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
    icon: Globe2,
    title: "Education, Healthcare & Services",
    copy: "Inquiry campaigns, appointment or enrollment funnels, trust-led landing pages, audience segmentation, and lead quality review."
  }
];
function PpcIndustries() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "PPC Use Cases" }),
      /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4", children: ppcIndustries.map((industry) => {
      const Icon = industry.icon;
      return /* @__PURE__ */ jsxs("article", { className: "bg-white p-7 transition hover:bg-[#FAFAF8]", children: [
        /* @__PURE__ */ jsx(Icon, { className: "mb-6 h-7 w-7 text-[#FC9C44]", strokeWidth: 1.9 }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: industry.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: industry.copy })
      ] }, industry.title);
    }) })
  ] }) });
}
function PpcHero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "PPC Advertising Services" }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "max-w-3xl font-black leading-[1.02]",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)"
                },
                children: [
                  "Paid Ads",
                  /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "Built for ROAS" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/free-growth-audit",
                  className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                  children: "Get PPC Audit"
                }
              ),
              /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 28, scale: 0.96 },
          animate: { opacity: 1, x: 0, scale: 1 },
          transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
          className: "relative",
          children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Paid Growth Console" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "PPC Performance System" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(MousePointerClick, { size: 22, strokeWidth: 2 }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              ["ROAS", "4.8x"],
              ["CPL Drop", "-42%"],
              ["Lead Lift", "+176%"],
              ["Waste Cut", "31%"]
            ].map(([label, value], index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                  /* @__PURE__ */ jsx(
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
            /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white/52", children: "Channel Allocation" }),
                /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Optimizing" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: [
                ["Google Search", "74%"],
                ["Performance Max", "58%"],
                ["Meta Retargeting", "46%"]
              ].map(([label, width]) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                  /* @__PURE__ */ jsx("span", { children: label }),
                  /* @__PURE__ */ jsx("span", { children: width })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
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
  const [activeCapability, setActiveCapability] = useState(0);
  const activeItem = ppcCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
    /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
      /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "PPC Capabilities" }),
      /* @__PURE__ */ jsx("h2", { className: "seo-split-heading", children: "Paid media systems for profitable acquisition" }),
      /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the PPC system improves targeting, conversion quality, spend control, and ROAS." }),
      /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: ppcCapabilities.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeCapability === index;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onMouseEnter: () => setActiveCapability(index),
            onFocus: () => setActiveCapability(index),
            onClick: () => setActiveCapability(index),
            className: `seo-service-item ${isActive ? "active" : ""}`,
            "aria-pressed": isActive,
            children: [
              /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
              ] }),
              /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
            ]
          },
          item.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "seo-capability-slide",
        initial: { opacity: 0, x: 24, scale: 0.98 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: -18, scale: 0.98 },
        transition: { duration: 0.5, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "seo-slide-bg service-slide-bg",
              style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "seo-slide-tint service-slide-tint" }),
          /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
            /* @__PURE__ */ jsxs("span", { className: "seo-slide-kicker", children: [
              /* @__PURE__ */ jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
              activeItem.tag
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
            /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
              '"',
              activeItem.hook,
              '"'
            ] }),
            /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
            /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
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
      icon: BarChart3,
      title: "Scale Decisions",
      value: "ROAS first",
      copy: "Winning campaigns get more budget only when the data supports profitable acquisition."
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mb-12 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Performance Stack" }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: "Each part of the paid growth system is built to protect budget, improve conversion quality, and scale only when performance is clear." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative grid gap-6 md:grid-cols-3", children: cards.map((card, index) => {
        const Icon = card.icon;
        return /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            whileHover: { y: -8 },
            viewport: { once: true, amount: 0.28 },
            transition: { duration: 0.55, delay: index * 0.08, ease: "easeOut" },
            className: "group/card min-h-[340px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 shadow-[0_18px_48px_-30px_rgba(29,39,66,0.36)] transition-all duration-300 ease-out hover:rounded-tr-[48px] hover:rounded-br-[48px] hover:border-[#4C1688] hover:bg-[#4C1688] hover:shadow-[0_26px_68px_-28px_rgba(76,22,136,0.62)] lg:p-8",
            children: [
              /* @__PURE__ */ jsx("span", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: card.value }),
              /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: card.copy })
            ]
          },
          card.title
        );
      }) })
    ] })
  ] });
}
function PpcServicePage() {
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(PpcHero, {}),
      /* @__PURE__ */ jsx(PpcProofBand, {}),
      /* @__PURE__ */ jsx(PpcCapabilities, {}),
      /* @__PURE__ */ jsx(PpcChannelDepth, {}),
      /* @__PURE__ */ jsx(PpcPerformanceStack, {}),
      /* @__PURE__ */ jsx(PpcWhySection, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx("div", { children: ppcServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsx("div", { children: processItems$1.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0, y: -6 },
                  animate: { opacity: 1, height: "auto", y: 0 },
                  exit: { opacity: 0, height: 0, y: -6 },
                  transition: { duration: 0.24, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
                }
              ) })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(PpcIndustries, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs$2.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$b = createFileRoute("/service/graphic-design")({
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
    icon: BarChart3,
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
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-4xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Graphic Design Services" }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-3xl text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp builds graphic design as a usable creative system, not just single files. Your social posts, ads, brochures, decks, templates, campaign visuals, and digital graphics should all carry the same level of clarity and brand confidence." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: graphicServiceTracks.map((track, index) => {
      const Icon = track.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: track.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-[#5F6B7A]", children: track.copy })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: track.points.map((point) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Design That Compounds" }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/72", children: "A good creative system helps your team publish faster, run better campaigns, and keep visual quality consistent across every sales and marketing touchpoint." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: graphicValuePoints.map((point) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 border border-white/12 bg-white/[0.06] p-5", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-white/78", children: point })
    ] }, point)) })
  ] }) });
}
function GraphicDesignPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const activeItem = graphicCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:py-28", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Graphic Design Services" }),
                /* @__PURE__ */ jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Visual Design",
                      /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "That Sells the Story" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Plan My Creative Assets"
                    }
                  ),
                  /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Creative Production Console" }),
                    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Visual Asset System" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Palette, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Creative Formats", "18+"],
                  ["Asset Variants", "4x"],
                  ["Brand Consistency", "94"],
                  ["Turnaround Flow", "Fast"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/52", children: "Monthly Design Mix" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Ready" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: [
                    ["Social creatives", "82%"],
                    ["Ad variants", "68%"],
                    ["Sales collateral", "56%"]
                  ].map(([label, width]) => /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between text-xs text-white/58", children: [
                      /* @__PURE__ */ jsx("span", { children: label }),
                      /* @__PURE__ */ jsx("span", { children: width })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "Graphic Design Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "seo-split-heading", children: "Complete creative systems for marketing, sales, and brand recall" }),
          /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each design layer helps your brand show up clearly across social, ads, presentations, print, and campaigns." }),
          /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: graphicCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "seo-capability-slide",
            initial: { opacity: 0, x: 24, scale: 0.98 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: -18, scale: 0.98 },
            transition: { duration: 0.5, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(GraphicServiceDepth, {}),
      /* @__PURE__ */ jsx(
        ZigZagGrowthStack,
        {
          eyebrow: "Creative Growth Stack",
          title: "Graphic design works best when direction, assets, and learning move together",
          description: "Each layer of your creative system should make the next one stronger, from clear communication goals to consistent design output and better campaign performance.",
          cards: graphicGrowthStack
        }
      ),
      /* @__PURE__ */ jsx(GraphicValueSection, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs$1.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      "return (",
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) }),
      ");"
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$1 = () => import("./service.e-comm-gDfj-xg2.js");
const Route$a = createFileRoute("/service/e-comm")({
  head: () => ({
    meta: [{
      title: "E-Commerce Development Services | Hegxcorp"
    }, {
      name: "description",
      content: "E-commerce development services by Hegxcorp including online store design, product pages, cart, checkout, payment integration, WooCommerce, Shopify, performance optimisation, and ecommerce maintenance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const Route$9 = createFileRoute("/service/content-marketing")({
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
  return /* @__PURE__ */ jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: contentProofMetrics.map((metric) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.45 },
      className: "border border-[#E5E7EB] bg-white p-6",
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
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
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Content Marketing Services" }),
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-base leading-8 text-[#5F6B7A]", children: "Hegxcorp plans content as a connected system. One strong idea can become a ranking page, a blog, a social post, an email, a sales asset, and a campaign message when the strategy is clear." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: contentFormats.map((format, index) => {
      const Icon = format.icon;
      return /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay: index * 0.03 },
          className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.9 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: format.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: format.copy }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: format.points.map((point) => /* @__PURE__ */ jsx(
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
    icon: BarChart3,
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
  return /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Why Hegxcorp Content" }),
        /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "w-full border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.75)]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-white/72", children: "Good content is not just writing. It is research, structure, positioning, search intent, proof, publishing rhythm, repurposing, and continuous improvement working together so every piece has a clear job in the customer journey." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-3", children: ["Search intent", "Buyer questions", "Content reuse"].map((item) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-black text-white/86",
            children: item
          },
          item
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: contentWhyCards.map((card) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxs("article", { className: "border border-white/12 bg-white/[0.06] p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 21, strokeWidth: 1.9 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-white", children: card.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-white/72", children: card.copy })
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
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: "Content Use Cases" }),
      /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx("div", { className: "grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4", children: contentIndustries.map((industry) => /* @__PURE__ */ jsxs("article", { className: "bg-white p-7 transition hover:bg-[#FAFAF8]", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: industry.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: industry.copy })
    ] }, industry.title)) })
  ] }) });
}
function ContentStepScroller() {
  const [activeStep, setActiveStep] = useState(0);
  const activeItem = contentStepScrollerSteps[activeStep];
  const ActiveIcon = activeItem.icon;
  const setStepFromControl = (index) => {
    if (index === activeStep) return;
    setActiveStep(index);
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-y-0 right-0 w-[34%] opacity-[0.08]",
        style: {
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-14 max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Content Growth Steps" }),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]", children: "Click a step to move through the content. Each step opens with a smooth top-down transition." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-28", children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] bg-[#06133D] p-6 text-white", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: [
            "Step ",
            String(activeStep + 1).padStart(2, "0"),
            " /",
            " ",
            String(contentStepScrollerSteps.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-3xl font-black leading-tight", children: activeItem.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-white/64", children: activeItem.copy }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3", children: contentStepScrollerSteps.map((step, index) => {
            const isActive = index === activeStep;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setStepFromControl(index),
                className: `flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${isActive ? "border-[#FC9C44] bg-[#FC9C44] text-white" : "border-white/10 bg-white/[0.05] text-white/58 hover:border-white/24 hover:bg-white/[0.08]"}`,
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-2.5 w-2.5 rounded-full ${isActive ? "bg-white" : "bg-white/28"}`
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.12em]", children: step.label })
                ]
              },
              step.label
            );
          }) })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "relative min-h-[430px] overflow-hidden rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx("span", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]", children: /* @__PURE__ */ jsx(ActiveIcon, { size: 23, strokeWidth: 2 }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72", children: activeItem.label }),
              /* @__PURE__ */ jsx("h3", { className: "mt-3 max-w-2xl text-4xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white", children: activeItem.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90", children: activeItem.copy }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-3", children: activeItem.points.map((point) => /* @__PURE__ */ jsx(
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
  const [activeCapability, setActiveCapability] = useState(0);
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const activeItem = contentCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.65, ease: "easeOut" },
              children: [
                /* @__PURE__ */ jsx("p", { className: "mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "Content Marketing" }),
                /* @__PURE__ */ jsxs(
                  "h1",
                  {
                    className: "max-w-3xl font-black leading-[1.02]",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(46px, 6vw, 86px)"
                    },
                    children: [
                      "Content That",
                      /* @__PURE__ */ jsx("span", { className: "block text-[#FC9C44]", children: "Compounds Trust" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/free-growth-audit",
                      className: "inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]",
                      children: "Build My Content Plan"
                    }
                  ),
                  /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 28, scale: 0.96 },
              animate: { opacity: 1, x: 0, scale: 1 },
              transition: { duration: 0.75, delay: 0.12, ease: "easeOut" },
              className: "relative",
              children: /* @__PURE__ */ jsx("div", { className: "rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[22px] border border-white/10 bg-[#071333]/92 p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]", children: "Editorial Growth Engine" }),
                    /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black text-white", children: "Content Performance Map" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(BookOpen, { size: 22, strokeWidth: 2 }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                  ["Organic Lift", "+214%"],
                  ["Lead Pages", "38"],
                  ["Content ROI", "4.2x"],
                  ["Brief Quality", "96"]
                ].map(([label, value], index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-white/10 bg-white/[0.06] p-4",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-white/48", children: label }),
                      /* @__PURE__ */ jsx(
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
                /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white/52", children: "Pipeline Status" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "Active" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: [
                    ["Strategy", "Complete"],
                    ["SEO Briefs", "In Review"],
                    ["Publishing", "Scheduled"]
                  ].map(([label, status]) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-white/80", children: label }),
                        /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#FC9C44]/16 px-3 py-1 text-xs font-bold text-[#FC9C44]", children: status })
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
      /* @__PURE__ */ jsx(ContentProofBand, {}),
      /* @__PURE__ */ jsx("section", { className: "border-b border-neutral-200 bg-white px-6 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "seo-split-reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "seo-split-left", children: [
          /* @__PURE__ */ jsx("p", { className: "seo-split-eyebrow", children: "Content Marketing Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "seo-split-heading", children: "Content built for visibility, trust, and conversion" }),
          /* @__PURE__ */ jsx("p", { className: "seo-split-body", children: "Hover or select a capability to see how each part of the content system answers questions, strengthens brand voice, and moves buyers closer to choosing you." }),
          /* @__PURE__ */ jsx("div", { className: "seo-service-list", children: contentCapabilities.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCapability === index;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onMouseEnter: () => setActiveCapability(index),
                onFocus: () => setActiveCapability(index),
                onClick: () => setActiveCapability(index),
                className: `seo-service-item ${isActive ? "active" : ""}`,
                "aria-pressed": isActive,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "seo-service-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17, strokeWidth: 1.9 }) }),
                  /* @__PURE__ */ jsxs("span", { className: "seo-service-copy", children: [
                    /* @__PURE__ */ jsx("span", { className: "seo-service-name", children: item.title }),
                    /* @__PURE__ */ jsx("span", { className: "seo-service-tag", children: item.tag })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "seo-service-arrow", size: 16, strokeWidth: 2 })
                ]
              },
              item.title
            );
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-divider", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "seo-split-right", children: /* @__PURE__ */ jsxs(
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
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "seo-slide-bg service-slide-bg",
                  style: { backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "seo-slide-tint service-slide-tint" }),
              /* @__PURE__ */ jsxs("div", { className: "seo-slide-content", children: [
                /* @__PURE__ */ jsxs("span", { className: "seo-slide-kicker", children: [
                  /* @__PURE__ */ jsx(ActiveIcon, { size: 14, strokeWidth: 2 }),
                  activeItem.tag
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "seo-slide-title", children: activeItem.title }),
                /* @__PURE__ */ jsxs("p", { className: "seo-slide-hook", children: [
                  '"',
                  activeItem.hook,
                  '"'
                ] }),
                /* @__PURE__ */ jsx("p", { className: "seo-slide-desc", children: activeItem.description }),
                /* @__PURE__ */ jsx("div", { className: "seo-slide-pills", children: activeItem.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "seo-slide-pill", children: pill }, pill)) })
              ] })
            ]
          },
          activeItem.title
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ContentFormatDepth, {}),
      /* @__PURE__ */ jsx(ContentStepScroller, {}),
      /* @__PURE__ */ jsx(ContentWhySection, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1050px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "mb-20 text-center font-black leading-tight text-[#06133D]",
            style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.4vw, 64px)"
            },
            children: [
              "Highlighted",
              /* @__PURE__ */ jsx("br", {}),
              "Services & Process"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-x-24 gap-y-12 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx("div", { children: highlightedServices.map((item, index) => {
            const isOpen = openService === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenService(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) }),
          /* @__PURE__ */ jsx("div", { children: processItems.map((item, index) => {
            const isOpen = openProcess === index;
            return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#06133D]", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenProcess(isOpen ? null : index),
                  className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-[#06133D]", children: item.title }),
                    /* @__PURE__ */ jsx(
                      ChevronRight,
                      {
                        className: `h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("p", { className: "seo-disclosure-answer pb-7 pr-10", children: item.answer })
            ] }, item.title);
          }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ContentIndustries, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setOpenFaq(isOpen ? null : index),
                className: "group flex w-full items-start gap-5 py-7 text-left",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`,
                        children: faq.question
                      }
                    ),
                    isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
                  ] })
                ]
              }
            ) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]",
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const $$splitComponentImporter = () => import("./service.branding-DLBJ76af.js");
const Route$8 = createFileRoute("/service/branding")({
  head: () => ({
    meta: [{
      title: "Branding & Identity Design Services | Hegxcorp"
    }, {
      name: "description",
      content: "Branding and identity design services by Hegxcorp including brand strategy, logo systems, visual identity, messaging, design systems, brand guidelines, collateral, and launch-ready creative assets."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Route$7 = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) {
      throw notFound();
    }
    return { study };
  },
  head: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    return {
      meta: [
        { title: study ? study.seoTitle : "Case Study | Hegxcorp" },
        {
          name: "description",
          content: study ? study.seoDescription : "Detailed case history of performance growth, organic search architectures, and digital scaling engineered by Hegxcorp."
        }
      ]
    };
  },
  component: CaseStudyDetailPage
});
const gridColsMap = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5"
};
function CaseStudyDetailPage() {
  const { slug } = useParams({ strict: false });
  const study = getCaseStudyBySlug(slug || "");
  if (!study) {
    return null;
  }
  const relatedStudies = getCaseStudies().filter((c) => c.slug !== study.slug).slice(0, 2);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        "section",
        {
          className: "relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA]",
          style: {
            paddingTop: "clamp(64px, 8vw, 100px)",
            paddingBottom: "clamp(64px, 8vw, 100px)"
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-0 select-none",
                style: { opacity: 0.2 },
                children: /* @__PURE__ */ jsx(
                  ShapeGrid,
                  {
                    shape: "hexagon",
                    squareSize: 42,
                    borderColor: "rgba(29,39,66,0.3)",
                    hoverFillColor: "transparent",
                    hoverTrailAmount: 0,
                    staticMode: true,
                    className: "w-full h-full"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/case-studies",
                  className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                    " Back to Case Studies"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs font-bold text-[#FC9C44] uppercase tracking-wider", children: [
                      /* @__PURE__ */ jsx("span", { children: study.industry }),
                      /* @__PURE__ */ jsx("span", { children: "•" }),
                      /* @__PURE__ */ jsx("span", { children: study.services.join(" • ") })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "font-bold text-[#1D2742] leading-[0.95] tracking-tight",
                          style: {
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(56px, 7vw, 100px)"
                          },
                          children: study.metricValue
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: study.metricLabel.toUpperCase()
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "h2",
                      {
                        className: "text-2xl font-bold text-[#6B7280]",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: [
                          "Client Case Study: ",
                          study.client
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-[#4A5568] leading-relaxed text-base border-l-2 border-[#FC9C44] pl-4",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: study.summary
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsx(
                  BrowserPreview,
                  {
                    src: study.featuredImage,
                    alt: `${study.client} Case Study Screenshot`,
                    proofLabel: study.proofLabel,
                    proofDuration: study.proofDuration,
                    proofMetric: `${study.metricValue} Growth`,
                    className: "w-full shadow-[0_24px_48px_rgba(29,39,66,0.08)]"
                  }
                ) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "01 / The Challenge"
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-2xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: study.challenge.title
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-[#4A5568] leading-relaxed space-y-4",
              style: { fontFamily: "'Inter', sans-serif" },
              children: /* @__PURE__ */ jsx("p", { children: study.challenge.description })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "02 / The Solution"
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-2xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: study.solution.title
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "text-[#4A5568] leading-relaxed space-y-4",
              style: { fontFamily: "'Inter', sans-serif" },
              children: /* @__PURE__ */ jsx("p", { children: study.solution.description })
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-16 space-y-3", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Methodology"
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-3xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "Our Approach & Roadmap"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[#6B7280] text-sm", style: { fontFamily: "'Inter', sans-serif" }, children: "A systematic workflow engineered to isolate scaling bottlenecks and build compounding search and campaign loops." })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `grid ${gridColsMap[study.approach?.length || 4] || "md:grid-cols-4"} gap-8 relative`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-[#EAEAEA] -z-0" }),
              study.approach?.map((step, idx) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: step.phase
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "h4",
                      {
                        className: "font-bold text-[#1D2742] text-sm",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: step.title
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-xs text-[#6B7280] leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: step.description
                      }
                    )
                  ]
                },
                idx
              ))
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-16 space-y-3", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "03 / Verified Results"
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-3xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "Documented Client Outcomes"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[#6B7280] text-sm", style: { fontFamily: "'Inter', sans-serif" }, children: "Concrete, measurable performance indices checked and verified post-deployment." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: study.results.metrics.map((metric, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-[#FAFAF8] p-6 rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center text-center space-y-2 shadow-sm",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-3xl md:text-4xl font-bold text-[#FC9C44]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: metric.value
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "text-[11px] font-bold text-[#1D2742] uppercase tracking-wider",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: metric.label
                }
              )
            ]
          },
          idx
        )) }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-[#4A5568] leading-relaxed text-sm text-center max-w-[720px] mx-auto mt-12",
            style: { fontFamily: "'Inter', sans-serif" },
            children: study.results.description
          }
        )
      ] }) }),
      study.testimonial && /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#1D2742] text-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-[#FC9C44] mx-auto opacity-80" }),
        /* @__PURE__ */ jsxs(
          "blockquote",
          {
            className: "text-xl md:text-2xl font-bold leading-relaxed italic",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: [
              "“",
              study.testimonial.quote,
              "”"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "font-bold text-[#FC9C44]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: study.testimonial.author
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-xs text-[#9CA3AF] font-medium uppercase tracking-wider",
              style: { fontFamily: "'Inter', sans-serif" },
              children: study.testimonial.role
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-10 space-y-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: "Visual Proof"
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-2xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "Live System Preview"
            }
          ),
          /* @__PURE__ */ jsxs(
            "p",
            {
              className: "text-xs text-[#6B7280] leading-relaxed",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                "Direct capture layout representing the client's optimized website presence.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-[#9CA3AF]", children: "(Placeholder graphic will be replaced with real analytics screenshots)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-[960px] mx-auto", children: study.gallery && study.gallery.length > 0 ? study.gallery.map((img, idx) => /* @__PURE__ */ jsx(
          BrowserPreview,
          {
            src: img,
            alt: `${study.client} Gallery Screen ${idx + 1}`,
            aspectRatio: "video",
            className: "w-full shadow-md"
          },
          idx
        )) : /* @__PURE__ */ jsx("div", { className: "md:col-span-2 max-w-[800px] mx-auto w-full", children: /* @__PURE__ */ jsx(
          BrowserPreview,
          {
            src: study.featuredImage,
            alt: `${study.client} Analytics Proof`,
            proofLabel: study.proofLabel,
            proofDuration: study.proofDuration,
            proofMetric: `${study.metricValue} Growth`,
            aspectRatio: "video",
            className: "w-full shadow-md"
          }
        ) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-2xl font-bold text-[#1D2742] tracking-tight mb-12 text-center",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: "Other Success Stories"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-12 max-w-[960px] mx-auto", children: relatedStudies.map((item) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/case-studies/$slug",
            params: { slug: item.slug },
            className: "group flex flex-col gap-4 text-left focus:outline-none",
            children: [
              /* @__PURE__ */ jsx(
                BrowserPreview,
                {
                  src: item.featuredImage,
                  alt: `${item.client} Case Study`,
                  className: "w-full"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "text-lg font-bold text-[#FC9C44] group-hover:text-[#E88C35] transition-colors",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: [
                      item.metricValue,
                      " ",
                      item.metricLabel
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "h4",
                  {
                    className: "text-sm font-bold text-[#1D2742]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: item.client
                  }
                ),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-xs text-[#6B7280] line-clamp-2 leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: item.summary
                  }
                )
              ] })
            ]
          },
          item.slug
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#FAFAF8] border-t border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-10 w-10 text-[#FC9C44] mx-auto" }),
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "text-3xl font-bold text-[#1D2742] tracking-tight",
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: "Want Similar Results?"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-[#6B7280] leading-relaxed max-w-[500px] mx-auto text-sm",
            style: { fontFamily: "'Inter', sans-serif" },
            children: "We'll audit your search visibility, PPC ad spend, and conversion funnel to uncover high-impact growth paths for your business."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/free-growth-audit",
            className: "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all",
            children: [
              "Get Free Growth Audit",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$6 = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getBlogBySlug(params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ params }) => {
    const article = getBlogBySlug(params.slug);
    const title = article ? article.seoTitle : "Insights | Hegxcorp";
    const description = article ? article.seoDescription : "In-depth growth breakdowns and strategic frameworks from Hegxcorp.";
    const currentUrl = `https://hegxcorp.com/blog/${params.slug}`;
    const ogImage = article ? `https://hegxcorp.com${article.featuredImage}` : "https://hegxcorp.com/og-default.jpg";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: currentUrl },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage }
      ],
      links: [{ rel: "canonical", href: currentUrl }]
    };
  },
  component: BlogDetailPage
});
function ContentBlockRenderer({ blocks }) {
  return /* @__PURE__ */ jsx("div", { className: "space-y-8", children: blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-[#4A5568] leading-[1.85] text-base md:text-lg max-w-[720px]",
            style: { fontFamily: "'Inter', sans-serif" },
            dangerouslySetInnerHTML: { __html: block.text }
          },
          index
        );
      case "heading":
        const HeadingTag = block.level === 2 ? "h2" : "h3";
        const headingClass = block.level === 2 ? "text-2xl md:text-3xl font-bold text-[#1D2742] mt-12 mb-4 scroll-mt-28 border-b border-[#EAEAEA] pb-2" : "text-xl font-bold text-[#1D2742] mt-8 mb-3 scroll-mt-28";
        return /* @__PURE__ */ jsx(
          HeadingTag,
          {
            className: headingClass,
            style: { fontFamily: "'Space Grotesk', sans-serif" },
            children: block.text
          },
          index
        );
      case "list":
        return /* @__PURE__ */ jsx(
          "ul",
          {
            className: "list-disc pl-6 space-y-3 text-[#4A5568] text-sm md:text-base max-w-[720px]",
            style: { fontFamily: "'Inter', sans-serif" },
            children: block.items.map((item, i) => /* @__PURE__ */ jsx("li", { dangerouslySetInnerHTML: { __html: item } }, i))
          },
          index
        );
      case "quote":
        return /* @__PURE__ */ jsxs(
          "blockquote",
          {
            className: "border-l-4 border-[#FC9C44] pl-6 py-2 my-8 italic text-[#1D2742] font-semibold text-lg max-w-[720px]",
            style: { fontFamily: "'Inter', sans-serif" },
            children: [
              /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
                "“",
                block.text,
                "”"
              ] }),
              block.author && /* @__PURE__ */ jsxs("span", { className: "text-xs text-[#6B7280] not-italic", children: [
                "— ",
                block.author
              ] })
            ]
          },
          index
        );
      case "pull-quote":
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: "my-10 py-6 border-y border-[#EAEAEA] text-center max-w-[760px] mx-auto",
            children: /* @__PURE__ */ jsxs(
              "p",
              {
                className: "text-xl md:text-2xl font-bold text-[#1D2742] italic leading-relaxed",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: [
                  "“",
                  block.text,
                  "”"
                ]
              }
            )
          },
          index
        );
      case "callout":
        const variantStyles = {
          info: "bg-blue-50/70 border-blue-200 text-blue-900",
          warning: "bg-amber-50/70 border-amber-200 text-amber-900",
          tip: "bg-[#FFF4E8]/60 border-[#FC9C44]/20 text-[#1D2742]"
        };
        const IconComponent = block.variant === "info" ? Info : block.variant === "warning" ? AlertCircle : Lightbulb;
        const iconColor = block.variant === "info" ? "text-blue-500" : block.variant === "warning" ? "text-amber-600" : "text-[#FC9C44]";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `p-5 rounded-xl border ${variantStyles[block.variant]} my-6 max-w-[720px] flex items-start gap-4 text-left`,
            style: { fontFamily: "'Inter', sans-serif" },
            children: [
              /* @__PURE__ */ jsx("span", { className: `shrink-0 mt-0.5 ${iconColor}`, children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                block.title && /* @__PURE__ */ jsx("h5", { className: "font-bold text-sm mb-1 text-[#1D2742]", children: block.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm leading-relaxed", children: block.text })
              ] })
            ]
          },
          index
        );
      case "statistics":
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] my-8 max-w-[720px] flex flex-col md:flex-row items-center gap-6",
            style: { fontFamily: "'Inter', sans-serif" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-4xl md:text-5xl font-black text-[#FC9C44] tracking-tight shrink-0",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: block.value
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-left space-y-1", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-bold text-[#1D2742] text-sm md:text-base leading-tight", children: block.label }),
                block.description && /* @__PURE__ */ jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed", children: block.description })
              ] })
            ]
          },
          index
        );
      case "image":
        return /* @__PURE__ */ jsxs("div", { className: "my-8 space-y-2.5 max-w-[760px]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: block.src,
              alt: block.alt || block.caption,
              className: "w-full rounded-xl border border-[#EAEAEA] shadow-sm"
            }
          ),
          block.caption && /* @__PURE__ */ jsx("p", { className: "text-xs text-[#9CA3AF] text-center italic", children: block.caption })
        ] }, index);
      case "divider":
        return /* @__PURE__ */ jsx("hr", { className: "my-10 border-[#EAEAEA] max-w-[720px]" }, index);
      case "code":
        return /* @__PURE__ */ jsx(
          "pre",
          {
            className: "p-4 rounded-xl bg-[#1D2742] text-white overflow-x-auto my-6 text-xs max-w-[720px] font-mono leading-relaxed",
            children: /* @__PURE__ */ jsx("code", { children: block.code })
          },
          index
        );
      case "table":
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-x-auto my-6 border border-[#EAEAEA] rounded-xl max-w-[720px]",
            children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs md:text-sm text-[#4A5568] border-collapse", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "bg-[#FAFAF8] border-b border-[#EAEAEA]", children: block.headers.map((h, i) => /* @__PURE__ */ jsx("th", { className: "p-3.5 font-bold text-[#1D2742]", children: h }, i)) }) }),
              /* @__PURE__ */ jsx("tbody", { children: block.rows.map((row, rowIndex) => /* @__PURE__ */ jsx(
                "tr",
                {
                  className: "border-b border-[#EAEAEA]/60 last:border-0 hover:bg-[#FAFAF8]/50 transition-colors",
                  children: row.map((cell, cellIndex) => /* @__PURE__ */ jsx("td", { className: "p-3.5 font-medium", children: cell }, cellIndex))
                },
                rowIndex
              )) })
            ] })
          },
          index
        );
      default:
        return null;
    }
  }) });
}
function BlogDetailPage() {
  const { slug } = useParams({ strict: false });
  const article = getBlogBySlug(slug || "");
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const contentRef = useRef(null);
  if (!article) {
    return null;
  }
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const offsetTop = window.scrollY + rect.top;
        const currentScroll = window.scrollY - offsetTop;
        const maxScroll = elementHeight - window.innerHeight;
        if (maxScroll > 0) {
          const progress = currentScroll / maxScroll * 100;
          setReadingProgress(Math.min(100, Math.max(0, progress)));
        } else {
          setReadingProgress(window.scrollY > offsetTop ? 100 : 0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const relatedArticles = getBlogs().filter((a) => a.slug !== article.slug).slice(0, 3);
  const relatedCaseStudies = getFeaturedCaseStudies().slice(0, 2);
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const extracted = [];
      headings.forEach((h, index) => {
        const id = `toc-heading-${index}`;
        h.setAttribute("id", id);
        h.classList.add("scroll-mt-28");
        extracted.push({
          id,
          text: h.textContent || ""
        });
      });
      setToc(extracted);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -55% 0px", threshold: 0.2 }
      );
      headings.forEach((h) => observer.observe(h));
      return () => {
        headings.forEach((h) => observer.unobserve(h));
      };
    }
  }, [article.slug]);
  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const handleSidebarNewsletterSubmit = (e) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setSidebarEmail("");
      setTimeout(() => setSidebarSubscribed(false), 5e3);
    }
  };
  const shareText = encodeURIComponent(article.title);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `https://hegxcorp.com${article.featuredImage}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "Hegxcorp",
      logo: {
        "@type": "ImageObject",
        url: "https://hegxcorp.com/assets/cropped-hegxcorp-logo-new-web.webp"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hegxcorp.com/blog/${article.slug}`
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLdSchema) }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1.5 bg-[#FC9C44] z-50 origin-left",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("header", { className: "relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-14 md:py-20 text-left", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 select-none opacity-[0.08]",
            children: /* @__PURE__ */ jsx(
              ShapeGrid,
              {
                shape: "hexagon",
                squareSize: 40,
                borderColor: "rgba(29,39,66,0.3)",
                hoverFillColor: "transparent",
                hoverTrailAmount: 0,
                staticMode: true,
                className: "w-full h-full"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[850px] mx-auto space-y-6", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/blog",
              className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                " Back to Insights"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-[#FFF4E8] px-2.5 py-1 rounded-md", children: article.category }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
              " ",
              article.readTime
            ] }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[#6B7280]", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
              new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "font-bold text-[#1D2742] tracking-tight leading-[1.1]",
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(30px, 4.2vw, 52px)"
              },
              children: article.title
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-base md:text-lg text-[#6B7280] leading-relaxed font-normal max-w-[780px]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: article.excerpt
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAEAEA]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-xs select-none", children: article.author.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-[#1D2742]", children: article.author.name }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] text-[#9CA3AF] font-semibold", children: article.author.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[#6B7280]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider mr-1.5", children: "Share article:" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all",
                  "aria-label": "Share on X",
                  children: /* @__PURE__ */ jsx(Twitter, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all",
                  "aria-label": "Share on LinkedIn",
                  children: /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCopyLink,
                  className: "p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all relative flex items-center justify-center",
                  "aria-label": "Copy Article Link",
                  children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-emerald-600 animate-pulse" }) : /* @__PURE__ */ jsx(Link2, { className: "h-3.5 w-3.5" })
                }
              )
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-8 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-[850px] mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F56]" }),
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#27C93F]" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate", children: [
            "hegxcorp.com/blog/",
            article.slug
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex justify-between items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5", children: "HEGXCORP RESEARCH PAPER" }),
            /* @__PURE__ */ jsx(Bookmark, { className: "h-5 w-5 text-white/55" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[620px] space-y-3.5 text-left", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-xl md:text-3.5xl font-bold text-white leading-tight",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: article.title
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-xs md:text-sm text-white/70 font-normal leading-relaxed max-w-[500px]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: article.excerpt
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-white/45 text-[9px] uppercase tracking-wider font-semibold", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Hegxcorp Systems"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-[#FC9C44]", children: [
              "Author: ",
              article.author.name
            ] })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("main", { className: "py-10 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 max-w-[850px] mx-auto items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 text-left", children: /* @__PURE__ */ jsx("article", { ref: contentRef, className: "max-w-none", children: article.blocks ? /* @__PURE__ */ jsx(ContentBlockRenderer, { blocks: article.blocks }) : /* @__PURE__ */ jsx(
          "div",
          {
            id: "article-content",
            className: "prose prose-slate max-w-none\n                        prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight\n                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2\n                        prose-p:text-[#4A5568] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6\n                        prose-strong:text-[#1D2742] prose-strong:font-bold\n                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]\n                        prose-li:leading-relaxed",
            style: {
              fontFamily: "'Inter', sans-serif"
            },
            dangerouslySetInnerHTML: { __html: article.content }
          }
        ) }) }),
        /* @__PURE__ */ jsxs("aside", { className: "lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-[#FAFAF8] border border-[#EAEAEA] p-3.5 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative h-10 w-10 shrink-0", children: [
              /* @__PURE__ */ jsxs("svg", { className: "h-full w-full -rotate-90", children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "20",
                    cy: "20",
                    r: "16",
                    className: "stroke-[#EAEAEA]",
                    strokeWidth: "3.5",
                    fill: "transparent"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "20",
                    cy: "20",
                    r: "16",
                    className: "stroke-[#FC9C44] transition-all duration-75",
                    strokeWidth: "3.5",
                    fill: "transparent",
                    strokeDasharray: 2 * Math.PI * 16,
                    strokeDashoffset: 2 * Math.PI * 16 * (1 - readingProgress / 100),
                    strokeLinecap: "round"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1D2742]", children: [
                Math.round(readingProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase font-bold text-[#FC9C44] tracking-wider block", children: "Reading Progress" }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-[#1D2742]", children: [
                article.readTime,
                " est. time"
              ] })
            ] })
          ] }),
          toc.length > 0 && /* @__PURE__ */ jsxs("div", { className: "hidden lg:block border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.15em] border-b border-[#EAEAEA] pb-2.5", children: "Outline" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: toc.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: `#${item.id}`,
                onClick: (e) => handleTocClick(e, item.id),
                className: `block text-xs font-semibold leading-relaxed transition-all duration-200 hover:text-[#FC9C44] ${activeId === item.id ? "text-[#FC9C44] border-l-2 border-[#FC9C44] pl-3" : "text-[#9CA3AF] border-l border-[#EAEAEA] pl-3"}`,
                children: item.text
              }
            ) }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-white space-y-3", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-wider", children: "Share Article" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568] hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all",
                  children: [
                    /* @__PURE__ */ jsx(Twitter, { className: "h-3.5 w-3.5" }),
                    " X"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568] hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all",
                  children: [
                    /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" }),
                    " LinkedIn"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCopyLink,
                  className: "p-2 border border-[#EAEAEA] rounded-lg hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all flex items-center justify-center shrink-0",
                  children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-600 animate-pulse" }) : /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1 relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44] mb-2", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-sm font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "Weekly Industry Reports"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] text-[#6B7280] leading-relaxed", children: "Deep marketing experiments, performance methodologies, and growth frameworks sent straight to your inbox." })
            ] }),
            /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: handleSidebarNewsletterSubmit,
                className: "space-y-2 relative z-10",
                children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      required: true,
                      placeholder: "business@email.com",
                      value: sidebarEmail,
                      onChange: (e) => setSidebarEmail(e.target.value),
                      className: "w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      className: "w-full rounded-lg bg-[#FC9C44] py-2 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all",
                      children: "Subscribe"
                    }
                  )
                ]
              }
            ),
            sidebarSubscribed && /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-center", children: "✓ Subscribed successfully!" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#1D2742] text-white space-y-4 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.1),transparent_50%)] animate-pulse",
                style: { animationDuration: "6s" }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 relative z-10", children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-sm font-bold leading-tight",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: "Need help growing your business?"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] text-white/70 leading-relaxed", children: "Claim a free manual performance audit of acquisition loops and visual conversion tracks." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 pt-1", children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/free-growth-audit",
                className: "w-full inline-flex justify-center items-center gap-1.5 rounded-lg bg-[#FC9C44] py-2 text-xs font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all",
                children: [
                  "Book Free Growth Audit ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
                ]
              }
            ) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 border-t border-[#EAEAEA] bg-[#FAFAF8]", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[850px] mx-auto space-y-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left shadow-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg select-none shrink-0", children: article.author.name.split(" ").map((n) => n[0]).join("") }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "text-base font-bold text-[#1D2742]",
                  style: { fontFamily: "'Space Grotesk', sans-serif" },
                  children: article.author.name
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-[#9CA3AF] font-semibold", children: article.author.role })
            ] }),
            article.author.bio && /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-xs md:text-sm text-[#6B7280] leading-relaxed",
                style: { fontFamily: "'Inter', sans-serif" },
                children: article.author.bio
              }
            )
          ] })
        ] }),
        relatedCaseStudies.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-xl font-bold text-[#1D2742]",
              style: { fontFamily: "'Space Grotesk', sans-serif" },
              children: "Visual Proof: Related Case Studies"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: relatedCaseStudies.map((cs) => /* @__PURE__ */ jsx(
            Link,
            {
              to: "/case-studies/$slug",
              params: { slug: cs.slug },
              className: "group block",
              children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] hover:-translate-y-0.5 transition-all duration-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider bg-[#FFF4E8] px-2.5 py-1 rounded", children: cs.industry }),
                    /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors", children: cs.metricValue })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "h4",
                      {
                        className: "text-base font-bold text-[#1D2742] leading-snug group-hover:text-[#FC9C44] transition-colors mb-1.5",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: cs.client
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed line-clamp-3", children: cs.summary })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[10px] font-bold text-[#FC9C44] flex items-center gap-1 mt-6 border-t border-[#FAFAF8] pt-4", children: [
                  "View Case Study",
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-1 transition-transform" })
                ] })
              ] })
            },
            cs.slug
          )) })
        ] }),
        relatedArticles.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-xl font-bold text-[#1D2742]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: "Related Articles"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog",
                className: "text-xs font-bold text-[#FC9C44] hover:text-[#E88C35] transition-colors uppercase tracking-wider",
                children: "View All Insights →"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: relatedArticles.map((rel) => /* @__PURE__ */ jsx(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: rel.slug },
              className: "block group",
              children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#EAEAEA] rounded-xl p-5 flex flex-col h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] hover:-translate-y-0.5 transition-all duration-300", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] font-bold text-[#FC9C44] uppercase tracking-wider mb-2 block", children: rel.category }),
                /* @__PURE__ */ jsx(
                  "h4",
                  {
                    className: "text-sm font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors line-clamp-2 leading-snug mb-3 flex-1",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: rel.title
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-[9px] text-[#9CA3AF] font-semibold border-t border-[#FAFAF8] pt-3", children: [
                  /* @__PURE__ */ jsx("span", { children: rel.readTime }),
                  /* @__PURE__ */ jsxs("span", { className: "group-hover:text-[#FC9C44] transition-colors flex items-center gap-0.5", children: [
                    "Read",
                    " ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-1 transition-transform" })
                  ] })
                ] })
              ] })
            },
            rel.slug
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#1D2742] text-white p-8 md:p-12 relative overflow-hidden text-center shadow-lg border border-white/5", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.12),transparent_50%)] animate-pulse",
              style: { animationDuration: "8s" }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#FC9C44]/5 blur-2xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[620px] mx-auto space-y-6", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FC9C44]", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3 animate-pulse text-[#FC9C44]" }),
              "Growth Execution"
            ] }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-bold tracking-tight",
                style: {
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.15
                },
                children: "Ready to Grow Your Business?"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-xs md:text-sm text-white/70 leading-relaxed font-normal max-w-[500px] mx-auto",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Partner with Hegxcorp to design, build, and optimize scalable acquisition channels, conversion loops, and technical marketing systems."
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center pt-2", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/free-growth-audit",
                  className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-8 py-3.5 text-sm font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]",
                  children: [
                    "Book Free Growth Audit",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  className: "inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all",
                  children: "Contact Us"
                }
              )
            ] })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Route$5 = createFileRoute("/api/growth-audit")({
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
        const { createGrowthAuditInquiry } = await import("./growth-audit-inquiries.server-D3Roa57E.js");
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
const Route$4 = createFileRoute("/admin/growth-leads")({
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
  const [activeStatusFilter, setActiveStatusFilter] = useState(null);
  const [page, setPage] = useState(1);
  const filtered = activeStatusFilter ? growthAuditInquiries.filter((i) => i.status === activeStatusFilter) : growthAuditInquiries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / leadsPerPage$1));
  const currentPage = Math.min(page, totalPages);
  const firstVisible = filtered.length ? (currentPage - 1) * leadsPerPage$1 + 1 : 0;
  const lastVisible = Math.min(currentPage * leadsPerPage$1, filtered.length);
  const paginated = filtered.slice((currentPage - 1) * leadsPerPage$1, currentPage * leadsPerPage$1);
  const stats = useMemo(
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
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`,
                children: "All Leads"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`,
                children: growthAuditInquiries.length
              }
            )
          ]
        }
      ),
      stats.map(({ status, count }) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => toggleFilter(status),
          "aria-pressed": activeStatusFilter === status,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""} ${status === "NEW" ? "border-[#FED7AA] bg-[#FFF7ED]" : status === "INPROGRESS" ? "border-[#B9D3FF] bg-[#EAF2FF]" : "border-[#D0D5DD] bg-[#F2F4F7]"}`,
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#667085]", children: formatStatus$1(status) }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: count })
          ]
        },
        status
      ))
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ClipboardList, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Growth Audit Form submissions" }),
          activeStatusFilter && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]", children: formatStatus$1(activeStatusFilter) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading leads..." }) : filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(ClipboardList, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: activeStatusFilter ? `No ${formatStatus$1(activeStatusFilter).toLowerCase()} leads found` : "No leads saved yet" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: activeStatusFilter ? "Choose another status box to review a different lead group." : "New growth audit requests will appear here after the free audit form saves them to the database." })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-[1060px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Lead" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Website" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Ad Source" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Revenue Range" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Growth Goal" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginated.map((inquiry) => /* @__PURE__ */ jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[220px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-black text-[#06133D]", children: inquiry.name }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `mailto:${inquiry.email}`,
                className: "mt-2 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                  inquiry.email
                ]
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]", children: [
              /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4" }),
              formatDate$3(inquiry.createdAt)
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: inquiry.website,
              target: "_blank",
              rel: "noreferrer",
              className: "block max-w-[240px] truncate text-sm font-semibold text-[#FC9C44] hover:underline",
              children: inquiry.website
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-1 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsx("span", { className: "w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]", children: inquiry.leadSource ?? "Untracked" }),
            /* @__PURE__ */ jsx("p", { className: "max-w-[240px] truncate", children: getLeadSourceLabel$1(inquiry) })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.revenueRange }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx("p", { className: "max-w-[280px] text-sm leading-6 text-[#344054]", children: inquiry.goal }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles$2[inquiry.status]}`,
                children: formatStatus$1(inquiry.status)
              }
            ),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: inquiry.status,
                disabled: updatingId === inquiry.id,
                onChange: (e) => void handleGrowthAuditStatusChange(
                  inquiry.id,
                  e.target.value
                ),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60",
                children: inquiryStatuses.map((status) => /* @__PURE__ */ jsx("option", { value: status, children: formatStatus$1(status) }, status))
              }
            )
          ] }) })
        ] }, inquiry.id)) })
      ] }) }),
      filtered.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              disabled: currentPage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              disabled: currentPage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Route$3 = createFileRoute("/admin/contact-leads")({
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
  const [activeStatusFilter, setActiveStatusFilter] = useState(null);
  const [page, setPage] = useState(1);
  const filtered = activeStatusFilter ? inquiries.filter((i) => i.status === activeStatusFilter) : inquiries;
  const totalPages = Math.max(1, Math.ceil(filtered.length / leadsPerPage));
  const currentPage = Math.min(page, totalPages);
  const firstVisible = filtered.length ? (currentPage - 1) * leadsPerPage + 1 : 0;
  const lastVisible = Math.min(currentPage * leadsPerPage, filtered.length);
  const paginated = filtered.slice((currentPage - 1) * leadsPerPage, currentPage * leadsPerPage);
  const stats = useMemo(
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
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3 sm:grid-cols-4", children: [
      /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `text-xs font-bold uppercase tracking-[0.12em] ${activeStatusFilter === null ? "text-white/70" : "text-[#667085]"}`,
                children: "All Leads"
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `mt-2 text-3xl font-black ${activeStatusFilter === null ? "text-white" : "text-[#06133D]"}`,
                children: inquiries.length
              }
            )
          ]
        }
      ),
      stats.map(({ status, count }) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => toggleFilter(status),
          "aria-pressed": activeStatusFilter === status,
          className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${activeStatusFilter === status ? "ring-2 ring-[#06133D]/15 shadow-md" : ""} ${status === "NEW" ? "border-[#FED7AA] bg-[#FFF7ED]" : status === "INPROGRESS" ? "border-[#B9D3FF] bg-[#EAF2FF]" : "border-[#D0D5DD] bg-[#F2F4F7]"}`,
          children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.12em] text-[#667085]", children: formatStatus(status) }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: count })
          ]
        },
        status
      ))
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Inbox, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Contact Form submissions" }),
          activeStatusFilter && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-black text-[#C96A13]", children: formatStatus(activeStatusFilter) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[320px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading leads..." }) : filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Inbox, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: activeStatusFilter ? `No ${formatStatus(activeStatusFilter).toLowerCase()} leads found` : "No leads saved yet" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: activeStatusFilter ? "Choose another status box to review a different lead group." : "New website inquiries will appear here after the contact form saves them to the database." })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-[1180px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Lead" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Source" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Ad Source" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Budget" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Timeline" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Message" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginated.map((inquiry) => /* @__PURE__ */ jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "min-w-[220px]", children: [
            /* @__PURE__ */ jsx("p", { className: "font-black text-[#06133D]", children: inquiry.name }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `mailto:${inquiry.email}`,
                className: "mt-2 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                  inquiry.email
                ]
              }
            ),
            inquiry.phone && /* @__PURE__ */ jsxs(
              "a",
              {
                href: `tel:${inquiry.phone}`,
                className: "mt-1 flex items-center gap-2 text-sm font-semibold text-[#475467] transition hover:text-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                  inquiry.phone
                ]
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 flex items-center gap-2 text-xs font-semibold text-[#667085]", children: [
              /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4" }),
              formatDate$2(inquiry.createdAt)
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-[#344054]", children: inquiry.source }),
            inquiry.services.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 flex max-w-[240px] flex-wrap gap-2", children: inquiry.services.map((service) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-full bg-[#FFF4E8] px-2.5 py-1 text-xs font-bold text-[#C96A13]",
                children: service
              },
              service
            )) }),
            inquiry.website && /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid min-w-[220px] gap-1 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsx("span", { className: "w-fit rounded-full bg-[#EAF2FF] px-2.5 py-1 font-black text-[#2359B8]", children: inquiry.leadSource ?? "Untracked" }),
            /* @__PURE__ */ jsx("p", { className: "max-w-[240px] truncate", children: getLeadSourceLabel(inquiry) })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.budget ?? "Not shared" }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: inquiry.timeline ?? "Not shared" }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx("p", { className: "max-w-[300px] text-sm leading-6 text-[#344054]", children: inquiry.message }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles$1[inquiry.status]}`,
                children: formatStatus(inquiry.status)
              }
            ),
            /* @__PURE__ */ jsx(
              "select",
              {
                value: inquiry.status,
                disabled: updatingId === inquiry.id,
                onChange: (e) => void handleStatusChange(inquiry.id, e.target.value),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60",
                children: inquiryStatuses.map((status) => /* @__PURE__ */ jsx("option", { value: status, children: formatStatus(status) }, status))
              }
            )
          ] }) })
        ] }, inquiry.id)) })
      ] }) }),
      filtered.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisible,
          "-",
          lastVisible,
          " of ",
          filtered.length,
          " leads"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              disabled: currentPage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              disabled: currentPage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Route$2 = createFileRoute("/admin/blog")({
  head: () => ({
    meta: [
      { title: "All Blogs | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp admin blog post list."
      },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: AdminBlogPostsPage
});
const postsPerPage = 5;
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
function getInitialStatus(post) {
  return post.publishedAt ? "PUBLISHED" : "DRAFT";
}
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
  const sourcePosts = useMemo(() => getBlogs(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDateRange, setSelectedDateRange] = useState("All");
  const [selectedBulkAction, setSelectedBulkAction] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [postState, setPostState] = useState(
    () => Object.fromEntries(
      sourcePosts.map((post) => [
        post.id,
        {
          status: getInitialStatus(post),
          featured: post.featured
        }
      ])
    )
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sourcePosts.map((post) => post.category)))],
    [sourcePosts]
  );
  const managedPosts = useMemo(() => {
    return sourcePosts.map((post) => ({
      ...post,
      adminStatus: postState[post.id]?.status ?? getInitialStatus(post),
      adminFeatured: postState[post.id]?.featured ?? post.featured
    })).sort(
      (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  }, [postState, sourcePosts]);
  useMemo(
    () => ({
      all: managedPosts.length,
      published: managedPosts.filter((post) => post.adminStatus === "PUBLISHED").length,
      drafts: managedPosts.filter((post) => post.adminStatus === "DRAFT").length,
      archived: managedPosts.filter((post) => post.adminStatus === "ARCHIVED").length,
      featured: managedPosts.filter((post) => post.adminFeatured).length
    }),
    [managedPosts]
  );
  const dateFilteredPosts = useMemo(() => {
    const now = Date.now();
    const ranges = {
      "7": 7 * 24 * 60 * 60 * 1e3,
      "30": 30 * 24 * 60 * 60 * 1e3,
      "90": 90 * 24 * 60 * 60 * 1e3
    };
    if (selectedDateRange === "All") {
      return managedPosts;
    }
    const range = ranges[selectedDateRange];
    return managedPosts.filter((post) => {
      const publishedTime = new Date(post.publishedAt).getTime();
      return Number.isFinite(publishedTime) && now - publishedTime <= range;
    });
  }, [managedPosts, selectedDateRange]);
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return dateFilteredPosts.filter((post) => {
      const matchesSearch = !query || post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.category.toLowerCase().includes(query) || post.author.name.toLowerCase().includes(query) || post.content.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesStatus = activeFilter === "ALL" || activeFilter === "FEATURED" && post.adminFeatured || post.adminStatus === activeFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [activeFilter, dateFilteredPosts, searchQuery, selectedCategory]);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const firstVisiblePost = filteredPosts.length ? (safePage - 1) * postsPerPage + 1 : 0;
  const lastVisiblePost = Math.min(safePage * postsPerPage, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * postsPerPage,
    safePage * postsPerPage
  );
  const filterTabs = [
    // { id: "ALL", label: "All", count: stats.all },
    // { id: "PUBLISHED", label: "Published", count: stats.published },
    // { id: "DRAFT", label: "Drafts", count: stats.drafts },
    // { id: "ARCHIVED", label: "Archived", count: stats.archived },
    // { id: "FEATURED", label: "Featured", count: stats.featured },
  ];
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery, selectedCategory, selectedDateRange]);
  function updatePostStatus(postId, status) {
    setPostState((current) => ({
      ...current,
      [postId]: {
        status,
        featured: current[postId]?.featured ?? false
      }
    }));
    toast.success(`Post marked as ${statusLabels[status].toLowerCase()}.`);
  }
  function toggleFeatured(postId) {
    setPostState((current) => {
      const nextFeatured = !(current[postId]?.featured ?? false);
      return {
        ...current,
        [postId]: {
          status: current[postId]?.status ?? "PUBLISHED",
          featured: nextFeatured
        }
      };
    });
    toast.success("Featured setting updated.");
  }
  function applyBulkAction(action = selectedBulkAction) {
    if (!action) {
      toast.info("Choose a bulk action first.");
      return;
    }
    if (filteredPosts.length === 0) {
      toast.info("No visible posts match this filter.");
      return;
    }
    const visiblePostIds = new Set(filteredPosts.map((post) => post.id));
    setPostState((current) => {
      const nextState = { ...current };
      for (const post of sourcePosts) {
        if (!visiblePostIds.has(post.id)) {
          continue;
        }
        const currentPostState = nextState[post.id] ?? {
          status: getInitialStatus(post),
          featured: post.featured
        };
        if (action === "PUBLISHED") {
          nextState[post.id] = { ...currentPostState, status: "PUBLISHED" };
        }
        if (action === "DRAFT") {
          nextState[post.id] = { ...currentPostState, status: "DRAFT" };
        }
        if (action === "ARCHIVED") {
          nextState[post.id] = { ...currentPostState, status: "ARCHIVED" };
        }
        if (action === "FEATURED") {
          nextState[post.id] = { ...currentPostState, featured: true };
        }
        if (action === "UNFEATURED") {
          nextState[post.id] = { ...currentPostState, featured: false };
        }
      }
      return nextState;
    });
    toast.success(`Bulk action applied to ${filteredPosts.length} visible posts.`);
    setSelectedBulkAction("");
  }
  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDateRange("All");
    setActiveFilter("ALL");
    setCurrentPage(1);
  }
  function getTabClass(tabId) {
    const isActive = activeFilter === tabId;
    if (tabId === "ALL") {
      return isActive ? "border-[#06133D] bg-[#06133D] text-white shadow-md" : "border-[#E4E7EC] bg-white text-[#101828]";
    }
    const styles = {
      PUBLISHED: "border-[#B8E0C0] bg-[#F0FBF3] text-[#101828]",
      DRAFT: "border-[#FED7AA] bg-[#FFF7ED] text-[#101828]",
      ARCHIVED: "border-[#D0D5DD] bg-[#F2F4F7] text-[#101828]",
      FEATURED: "border-[#B9D3FF] bg-[#EAF2FF] text-[#101828]"
    };
    return `${styles[tabId]} ${isActive ? "ring-2 ring-[#06133D]/15 shadow-md" : ""}`;
  }
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex justify-end", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/admin/add-blog",
        className: "inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#E88933]",
        children: "+ Add New Post"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-5", children: filterTabs.map((tab) => /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActiveFilter(tab.id),
        "aria-pressed": activeFilter === tab.id,
        className: `border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${getTabClass(tab.id)}`,
        children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-xs font-bold uppercase tracking-[0.12em] ${activeFilter === tab.id && tab.id === "ALL" ? "text-white/70" : "text-[#667085]"}`,
              children: tab.label
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `mt-2 text-3xl font-black ${activeFilter === tab.id && tab.id === "ALL" ? "text-white" : "text-[#06133D]"}`,
              children: tab.count
            }
          )
        ]
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 border border-[#E4E7EC] bg-white px-4 py-4", children: [
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: selectedBulkAction,
          onChange: (event) => {
            const action = event.target.value;
            setSelectedBulkAction(action);
            if (action) {
              applyBulkAction(action);
            }
          },
          className: "min-h-10 min-w-[160px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]",
          "aria-label": "Bulk actions",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Bulk actions" }),
            /* @__PURE__ */ jsx("option", { value: "PUBLISHED", children: "Publish visible posts" }),
            /* @__PURE__ */ jsx("option", { value: "DRAFT", children: "Move visible to draft" }),
            /* @__PURE__ */ jsx("option", { value: "ARCHIVED", children: "Archive visible posts" }),
            /* @__PURE__ */ jsx("option", { value: "FEATURED", children: "Feature visible posts" }),
            /* @__PURE__ */ jsx("option", { value: "UNFEATURED", children: "Remove visible featured" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: selectedDateRange,
          onChange: (event) => setSelectedDateRange(event.target.value),
          className: "min-h-10 min-w-[150px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]",
          "aria-label": "Date filter",
          children: [
            /* @__PURE__ */ jsx("option", { value: "All", children: "All dates" }),
            /* @__PURE__ */ jsx("option", { value: "7", children: "Last 7 days" }),
            /* @__PURE__ */ jsx("option", { value: "30", children: "Last 30 days" }),
            /* @__PURE__ */ jsx("option", { value: "90", children: "Last 90 days" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "select",
        {
          value: selectedCategory,
          onChange: (event) => setSelectedCategory(event.target.value),
          className: "min-h-10 min-w-[170px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]",
          "aria-label": "Category filter",
          children: categories.map((category) => /* @__PURE__ */ jsx("option", { value: category, children: category === "All" ? "All Categories" : category }, category))
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setCurrentPage(1);
            toast.success("Filters applied.");
          },
          className: "min-h-10 rounded-lg border border-[#FC9C44] bg-white px-4 text-sm font-black text-[#FC9C44] transition hover:bg-[#FC9C44] hover:text-white",
          children: "Filter"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: clearFilters,
          className: "min-h-10 rounded-lg border border-[#D0D5DD] bg-white px-4 text-sm font-bold text-[#667085] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
          children: "Clear"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          filteredPosts.length,
          " items"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage(1),
              disabled: safePage === 1,
              className: "grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "First posts page",
              children: /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.max(1, page - 1)),
              disabled: safePage === 1,
              className: "grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Previous posts page",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          Array.from({ length: Math.min(totalPages, 3) }).map((_, index) => {
            const page = index + 1;
            return /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setCurrentPage(page),
                className: `h-9 min-w-9 rounded-md border px-3 text-sm font-black transition ${safePage === page ? "border-[#FC9C44] bg-white text-[#FC9C44]" : "border-[#D0D5DD] bg-white text-[#344054] hover:border-[#FC9C44] hover:text-[#FC9C44]"}`,
                children: page
              },
              page
            );
          }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.min(totalPages, page + 1)),
              disabled: safePage === totalPages,
              className: "grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Next posts page",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage(totalPages),
              disabled: safePage === totalPages,
              className: "grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Last posts page",
              children: /* @__PURE__ */ jsx(ChevronsRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-black text-[#06133D]", children: "Blog post library" }),
          /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]", children: [
            filteredPosts.length,
            " posts"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-wrap items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "relative min-w-[230px] flex-1 sm:max-w-[360px]", children: [
            /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: searchQuery,
                onChange: (event) => setSearchQuery(event.target.value),
                placeholder: "Search posts...",
                className: "w-full rounded-lg border border-[#D0D5DD] bg-white py-2.5 pl-10 pr-3 text-sm font-semibold text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedCategory,
              onChange: (event) => setSelectedCategory(event.target.value),
              className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2.5 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]",
              children: categories.map((category) => /* @__PURE__ */ jsx("option", { value: category, children: category === "All" ? "All Categories" : category }, category))
            }
          )
        ] })
      ] }),
      filteredPosts.length === 0 ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[320px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(FileText, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: "No posts found" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-sm leading-6 text-[#667085]", children: "Clear the search, category, or status filter to review the full blog library." })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-[1120px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Post" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Author" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Category" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Featured" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Published" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: paginatedPosts.map((post) => /* @__PURE__ */ jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-[340px] gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-[#E4E7EC] bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "max-w-[360px] font-black leading-5 text-[#06133D]", children: post.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-[420px] text-sm leading-6 text-[#667085]", children: post.excerpt }),
              /* @__PURE__ */ jsxs("p", { className: "mt-2 text-xs font-bold text-[#98A2B3]", children: [
                "/blog/",
                post.slug
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-[180px] items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-[#06133D] text-xs font-black text-white", children: getAuthorInitials(post.author.name) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#06133D]", children: post.author.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-[#667085]", children: post.author.role })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]", children: post.category }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs font-bold text-[#98A2B3]", children: post.readTime })
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles[post.adminStatus]}`,
                children: statusLabels[post.adminStatus]
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: post.adminStatus,
                onChange: (event) => updatePostStatus(post.id, event.target.value),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "PUBLISHED", children: "Published" }),
                  /* @__PURE__ */ jsx("option", { value: "DRAFT", children: "Draft" }),
                  /* @__PURE__ */ jsx("option", { value: "ARCHIVED", children: "Archived" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => toggleFeatured(post.id),
              "aria-pressed": post.adminFeatured,
              className: `inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-black transition ${post.adminFeatured ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]" : "border-[#D0D5DD] bg-white text-[#667085] hover:border-[#FC9C44]"}`,
              children: [
                /* @__PURE__ */ jsx(Star, { className: `h-4 w-4 ${post.adminFeatured ? "fill-[#FC9C44]" : ""}` }),
                post.adminFeatured ? "Featured" : "Not featured"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("p", { className: "flex min-w-[170px] items-center gap-2 text-sm font-semibold text-[#475467]", children: [
            /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4 text-[#98A2B3]" }),
            formatDate$1(post.publishedAt)
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex min-w-[190px] flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog/$slug",
                params: { slug: post.slug },
                className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                "aria-label": `View ${post.title}`,
                children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => updatePostStatus(post.id, "PUBLISHED"),
                className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-green-300 hover:text-green-700",
                "aria-label": `Publish ${post.title}`,
                children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => updatePostStatus(post.id, "DRAFT"),
                className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
                "aria-label": `Move ${post.title} to draft`,
                children: /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => updatePostStatus(post.id, "ARCHIVED"),
                className: "grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-red-300 hover:text-red-600",
                "aria-label": `Archive ${post.title}`,
                children: /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4" })
              }
            )
          ] }) })
        ] }, post.id)) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-[#667085]", children: [
          firstVisiblePost,
          "-",
          lastVisiblePost,
          " of ",
          filteredPosts.length,
          " posts"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage(1),
              disabled: safePage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "First posts page",
              children: /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.max(1, page - 1)),
              disabled: safePage === 1,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Previous posts page",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]", children: [
            "Page ",
            safePage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage((page) => Math.min(totalPages, page + 1)),
              disabled: safePage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Next posts page",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrentPage(totalPages),
              disabled: safePage === totalPages,
              className: "grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40",
              "aria-label": "Last posts page",
              children: /* @__PURE__ */ jsx(ChevronsRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border border-[#E4E7EC] bg-white p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
          "Public blog source"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold leading-6 text-[#667085]", children: "This admin list is collected from the same blog data used by the public blog page." })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]",
          children: [
            /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" }),
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
  onAddCategory
}) {
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const filteredCategories = categories.filter(
    (cat) => cat.toLowerCase().includes(search.toLowerCase())
  );
  const handleAdd = () => {
    const trimmed = newCategoryName.trim();
    if (trimmed) {
      onAddCategory?.(trimmed);
      setNewCategoryName("");
      setIsAdding(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5 bg-white", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Categories" }),
    /* @__PURE__ */ jsxs("label", { className: "relative block mb-3", children: [
      /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search Categories",
          className: "w-full rounded-md border border-[#D0D5DD] bg-white py-1.5 pl-9 pr-3 text-xs text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-h-48 overflow-y-auto pr-1 space-y-2 mb-3", children: [
      filteredCategories.map((cat) => {
        const isChecked = cat === selected;
        return /* @__PURE__ */ jsxs(
          "label",
          {
            className: "flex cursor-pointer items-center gap-2 text-xs font-bold text-[#344054] hover:text-[#06133D]",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isChecked,
                  onChange: () => onSelect(cat),
                  className: "h-4 w-4 rounded border-[#D0D5DD] text-[#FC9C44] accent-[#FC9C44] focus:ring-[#FC9C44]"
                }
              ),
              cat
            ]
          },
          cat
        );
      }),
      filteredCategories.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-[#98A2B3]", children: "No categories found." })
    ] }),
    isAdding ? /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-2", children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsAdding(false),
            className: "rounded px-2.5 py-1 text-xs font-bold text-[#667085] hover:bg-[#F2F4F7]",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleAdd,
            className: "rounded bg-[#FC9C44] px-2.5 py-1 text-xs font-black text-white hover:bg-[#E88933]",
            children: "Add"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsx(
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
function TagInput({
  value,
  onChange,
  storageKey = "admin.tagInput",
  placeholder = "Type a tag and press Enter"
}) {
  const isControlled = value !== void 0;
  const [internalTags, setInternalTags] = useState([]);
  const [draft, setDraft] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const tags = isControlled ? value : internalTags;
  useEffect(() => {
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-[420px]", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-10 flex-wrap items-center gap-2 rounded-md border border-[#D0D5DD] bg-white px-2 py-2 focus-within:border-[#FC9C44] focus-within:ring-4 focus-within:ring-[#FC9C44]/10", children: [
    tags.map((tag) => /* @__PURE__ */ jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]",
        children: [
          tag,
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeTag(tag),
              "aria-label": `Remove tag ${tag}`,
              className: "rounded-full p-0.5 text-[#C96A13] transition hover:bg-[#FC9C44] hover:text-white",
              children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
            }
          )
        ]
      },
      tag
    )),
    /* @__PURE__ */ jsx(
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
const Route$1 = createFileRoute("/admin/add-blog")({
  head: () => ({
    meta: [
      { title: "Create Blog Post | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" }
    ]
  }),
  component: CreateBlogPage
});
const DEFAULT_CATEGORIES = ["Web development", "Tutorials", "News"];
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function CreateBlogPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    readTime: "",
    seoDescription: "",
    status: "DRAFT",
    featured: false,
    category: "Web development",
    tags: ""
  });
  const [slugTouched, setSlugTouched] = useState(false);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }
  function handleTitleChange(value) {
    updateField("title", value);
    if (!slugTouched) {
      updateField("slug", slugify(value));
    }
  }
  function handleImageFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }
  function handleAddCategory(name) {
    if (categories.includes(name)) {
      updateField("category", name);
      return;
    }
    setCategories((prev) => [...prev, name]);
    updateField("category", name);
  }
  const tagList = form.tags ? form.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [];
  function handleTagsChange(nextTags) {
    updateField("tags", nextTags.join(", "));
  }
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#E4E7EC] pb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/admin/blog",
            className: "text-xs font-black text-[#98A2B3] transition hover:text-[#344054]",
            children: "← Back to library"
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-black text-[#06133D]", children: "Create blog post" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "rounded-lg border border-[#D0D5DD] bg-white px-5 py-2 text-sm font-black text-[#344054] transition hover:border-[#FC9C44]",
            children: "Preview"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "rounded-lg bg-[#FC9C44] px-5 py-2 text-sm font-black text-white transition hover:bg-[#E88933]",
            children: "Publish post"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_416px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              value: form.title,
              onChange: (e) => handleTitleChange(e.target.value),
              placeholder: "e.g. Building a faster component pipeline",
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-3 text-base font-semibold text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Content" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-t-lg border border-b-0 border-[#D0D5DD] bg-[#F9FAFB] px-4 py-3 text-sm font-black text-[#667085]", children: [
            /* @__PURE__ */ jsx("span", { children: "B" }),
            /* @__PURE__ */ jsx("span", { className: "italic", children: "I" }),
            /* @__PURE__ */ jsx("span", { children: "H1" }),
            /* @__PURE__ */ jsx("span", { children: "H2" }),
            /* @__PURE__ */ jsx("span", { children: "🔗" }),
            /* @__PURE__ */ jsx("span", { children: "▤" }),
            /* @__PURE__ */ jsx("span", { children: '"' }),
            /* @__PURE__ */ jsx("span", { children: "🖼" })
          ] }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: form.content,
              onChange: (e) => updateField("content", e.target.value),
              placeholder: "Start writing your post…",
              rows: 14,
              className: "w-full rounded-b-lg border border-[#D0D5DD] px-4 py-3 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Slug" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-4 py-2.5 text-sm font-bold text-[#667085]", children: [
              "/blog/",
              form.slug || "your-post-slug"
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setSlugTouched(true),
                className: "rounded-lg border border-[#D0D5DD] bg-white px-5 text-sm font-black text-[#344054] hover:border-[#FC9C44]",
                children: "Edit slug"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Focus Key Point" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              value: form.excerpt,
              onChange: (e) => updateField("excerpt", e.target.value),
              placeholder: "One or two sentences shown on cards and in search results.",
              rows: 2,
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-3 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-[200px_1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "Read time" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: form.readTime,
                onChange: (e) => updateField("readTime", e.target.value),
                placeholder: "5 min read",
                className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm font-bold text-[#344054] outline-none focus:border-[#FC9C44]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]", children: "SEO meta description" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: form.seoDescription,
                onChange: (e) => updateField("seoDescription", e.target.value),
                placeholder: "Shown in search engine results…",
                className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 self-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Featured image" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/*",
              className: "hidden",
              onChange: (e) => {
                handleImageFile(e.target.files?.[0]);
                e.target.value = "";
              }
            }
          ),
          imagePreview ? /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-lg border border-[#E4E7EC]", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: imagePreview,
                alt: imageFile?.name,
                className: "h-28 w-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 px-3 py-1.5", children: [
              /* @__PURE__ */ jsx("p", { className: "truncate text-[10px] font-bold text-white", children: imageFile?.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => fileInputRef.current?.click(),
                    className: "text-[10px] font-black text-white underline",
                    children: "Replace"
                  }
                ),
                /* @__PURE__ */ jsx(
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
          ] }) : /* @__PURE__ */ jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: () => fileInputRef.current?.click(),
              onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && fileInputRef.current?.click(),
              onDragOver: (e) => e.preventDefault(),
              onDrop: (e) => {
                e.preventDefault();
                handleImageFile(e.dataTransfer.files?.[0]);
              },
              className: "grid h-28 cursor-pointer place-items-center rounded-lg border border-dashed border-[#FC9C44] bg-[#FFF4E8] hover:bg-[#FFEBD6]",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    },
                    "aria-label": "Upload featured image",
                    className: "mb-1 grid h-7 w-7 place-items-center rounded-full bg-[#FC9C44] text-white hover:bg-[#E88933]",
                    children: /* @__PURE__ */ jsx("span", { className: "text-sm font-black leading-none", children: "+" })
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-[#C96A13]", children: "Upload featured image" }),
                /* @__PURE__ */ jsx("p", { className: "text-[10px] text-[#98A2B3]", children: "Recommended 1200×630" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Publish settings" }),
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-bold text-[#667085]", children: "Status" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => updateField("status", "DRAFT"),
                className: `rounded-full px-4 py-1.5 text-xs font-black transition ${form.status === "DRAFT" ? "bg-[#FFF4E8] text-[#C96A13]" : "bg-[#F2F4F7] text-[#475467]"}`,
                children: "Draft"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => updateField("status", "PUBLISHED"),
                className: `rounded-full px-4 py-1.5 text-xs font-black transition ${form.status === "PUBLISHED" ? "bg-[#FFF4E8] text-[#C96A13]" : "bg-[#F2F4F7] text-[#475467]"}`,
                children: "Published"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold text-[#667085]", children: "Featured" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => updateField("featured", !form.featured),
              className: "w-full rounded-lg border border-[#D0D5DD] px-4 py-2 text-left text-xs font-black text-[#667085]",
              children: form.featured ? "★ Featured" : "☆ Not featured"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          PostCategoryPicker,
          {
            categories,
            selected: form.category,
            onSelect: (category) => updateField("category", category),
            onAddCategory: handleAddCategory,
            storageKey: "admin.addBlog.categoryPanel"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-black text-[#06133D]", children: "Tags" }),
          /* @__PURE__ */ jsx(
            TagInput,
            {
              value: tagList,
              onChange: handleTagsChange,
              placeholder: "Add tags, press Enter…"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#FC9C44] bg-[#FFF4E8] p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#C96A13]", children: "Ready to publish?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-bold text-[#8A5A28]", children: "This will appear on the public blog page immediately." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "flex-1 rounded-lg border border-[#D0D5DD] bg-white py-2 text-xs font-black text-[#344054]",
                children: "Save as draft"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "flex-1 rounded-lg bg-[#FC9C44] py-2 text-xs font-black text-white",
                children: "Publish now"
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
const Route = createFileRoute("/admin/ad-leads")({
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
function getBestRow(rows2) {
  return [...rows2].sort((left, right) => {
    if (right.genuineLeads !== left.genuineLeads) return right.genuineLeads - left.genuineLeads;
    if (right.leadsGenerated !== left.leadsGenerated) {
      return right.leadsGenerated - left.leadsGenerated;
    }
    return right.visitors - left.visitors;
  })[0];
}
function AdminAdLeadsPage() {
  const [reportRows, setReportRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const metaRows = useMemo(
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
  useEffect(() => {
    void loadAdFunnelReport();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 px-6 py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-3 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsx(Megaphone, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Meta Visitors"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: metaVisitors }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          metaFormStarts,
          " form starts, ",
          metaLeadsGenerated,
          " leads generated"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Meta Genuine Leads"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: metaGenuineLeads }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          formatPercent(metaGenuineLeads, metaLeadsGenerated),
          " of generated Meta leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: "All Tracked Funnel" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-3xl font-black text-[#06133D]", children: totalVisitors }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: [
          totalFormStarts,
          " starts, ",
          totalLeadsGenerated,
          " leads, ",
          totalGenuineLeads,
          " genuine"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border border-[#E4E7EC] bg-white p-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]", children: [
          /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-[#FC9C44]" }),
          "Best Campaign / Ad"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg font-black text-[#06133D]", children: bestRow ? bestRow.leadCampaign : "No tracked ad activity yet" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: bestRow ? `${bestRow.leadAd} - ${bestRow.genuineLeads} genuine leads` : "Use UTM labels in your ad URL to start tracking." })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "overflow-hidden border border-[#E4E7EC] bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E7EC] px-5 py-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-black text-[#06133D]", children: "Ad funnel report" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs font-semibold text-[#667085]", children: "Visitors and form starts come from tracking events. Leads generated come from form submissions. Genuine means status is In Progress or Closed." })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => void loadAdFunnelReport(),
            disabled: isLoading,
            className: "inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: `h-4 w-4 ${isLoading ? "animate-spin" : ""}` }),
              "Refresh"
            ]
          }
        )
      ] }),
      isLoading ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[300px] place-items-center text-sm font-semibold text-[#667085]", children: "Loading ad funnel..." }) : reportRows.length === 0 ? /* @__PURE__ */ jsx("div", { className: "grid min-h-[300px] place-items-center px-6 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Megaphone, { className: "mx-auto h-10 w-10 text-[#98A2B3]" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-black text-[#06133D]", children: "No tracked ad activity yet" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md text-sm leading-6 text-[#667085]", children: "isitors will appear here after they arrive from Meta or another UTM-tagged ad URL." })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-[1180px] w-full border-collapse text-left", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Source" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Campaign" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Ad Set" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Ad" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Visitors" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Form Starts" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Leads Generated" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Genuine Leads" }),
          /* @__PURE__ */ jsx("th", { className: "px-5 py-3", children: "Latest Activity" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[#E4E7EC]", children: reportRows.map((row) => /* @__PURE__ */ jsxs("tr", { className: "align-top transition hover:bg-[#FFF9F3]", children: [
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsx("span", { className: "rounded-full bg-[#EAF2FF] px-3 py-1 text-xs font-black text-[#2359B8]", children: row.leadSource }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-black text-[#06133D]", children: /* @__PURE__ */ jsx("p", { className: "max-w-[220px]", children: row.leadCampaign }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: /* @__PURE__ */ jsx("p", { className: "max-w-[180px]", children: row.leadAdSet }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-semibold text-[#475467]", children: /* @__PURE__ */ jsx("p", { className: "max-w-[180px]", children: row.leadAd }) }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4 text-sm font-black text-[#06133D]", children: row.visitors }),
          /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.formStarts }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.formStarts, row.visitors),
              " of visitors"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.leadsGenerated }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.leadsGenerated, row.visitors),
              " of visitors"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("td", { className: "px-5 py-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#06133D]", children: row.genuineLeads }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-[#667085]", children: [
              formatPercent(row.genuineLeads, row.leadsGenerated),
              " of generated leads"
            ] })
          ] }),
          /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxs("p", { className: "flex min-w-[170px] items-center gap-2 text-xs font-semibold text-[#667085]", children: [
            /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4" }),
            formatDate(row.latestActivityAt)
          ] }) })
        ] }, row.key)) })
      ] }) })
    ] })
  ] });
}
const TermsOfServiceRoute = Route$x.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$y
});
const SitemapDotxmlRoute = Route$w.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$y
});
const ServicesRoute = Route$v.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$y
});
const PrivacyPolicyRoute = Route$u.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$y
});
const IndustriesRoute = Route$t.update({
  id: "/industries",
  path: "/industries",
  getParentRoute: () => Route$y
});
const FreeGrowthAuditRoute = Route$s.update({
  id: "/free-growth-audit",
  path: "/free-growth-audit",
  getParentRoute: () => Route$y
});
const CookiePolicyRoute = Route$r.update({
  id: "/cookie-policy",
  path: "/cookie-policy",
  getParentRoute: () => Route$y
});
const ContactRoute = Route$q.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$y
});
const CaseStudiesRoute = Route$p.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => Route$y
});
const BlogRoute = Route$o.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$y
});
const AdminRoute = Route$n.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$y
});
const AboutRoute = Route$m.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$y
});
const IndexRoute = Route$l.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$y
});
const CaseStudiesIndexRoute = Route$k.update({
  id: "/",
  path: "/",
  getParentRoute: () => CaseStudiesRoute
});
const BlogIndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const ServiceWordpressRoute = Route$i.update({
  id: "/service/wordpress",
  path: "/service/wordpress",
  getParentRoute: () => Route$y
});
const ServiceWebDevRoute = Route$h.update({
  id: "/service/web-dev",
  path: "/service/web-dev",
  getParentRoute: () => Route$y
});
const ServiceWebAppRoute = Route$g.update({
  id: "/service/web-app",
  path: "/service/web-app",
  getParentRoute: () => Route$y
});
const ServiceUiUxDesignRoute = Route$f.update({
  id: "/service/ui-ux-design",
  path: "/service/ui-ux-design",
  getParentRoute: () => Route$y
});
const ServiceSocialMedRoute = Route$e.update({
  id: "/service/social-med",
  path: "/service/social-med",
  getParentRoute: () => Route$y
});
const ServiceSeoRoute = Route$d.update({
  id: "/service/seo",
  path: "/service/seo",
  getParentRoute: () => Route$y
});
const ServicePpcRoute = Route$c.update({
  id: "/service/ppc",
  path: "/service/ppc",
  getParentRoute: () => Route$y
});
const ServiceGraphicDesignRoute = Route$b.update({
  id: "/service/graphic-design",
  path: "/service/graphic-design",
  getParentRoute: () => Route$y
});
const ServiceECommRoute = Route$a.update({
  id: "/service/e-comm",
  path: "/service/e-comm",
  getParentRoute: () => Route$y
});
const ServiceContentMarketingRoute = Route$9.update({
  id: "/service/content-marketing",
  path: "/service/content-marketing",
  getParentRoute: () => Route$y
});
const ServiceBrandingRoute = Route$8.update({
  id: "/service/branding",
  path: "/service/branding",
  getParentRoute: () => Route$y
});
const CaseStudiesSlugRoute = Route$7.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => CaseStudiesRoute
});
const BlogSlugRoute = Route$6.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const ApiGrowthAuditRoute = Route$5.update({
  id: "/api/growth-audit",
  path: "/api/growth-audit",
  getParentRoute: () => Route$y
});
const AdminGrowthLeadsRoute = Route$4.update({
  id: "/growth-leads",
  path: "/growth-leads",
  getParentRoute: () => AdminRoute
});
const AdminContactLeadsRoute = Route$3.update({
  id: "/contact-leads",
  path: "/contact-leads",
  getParentRoute: () => AdminRoute
});
const AdminBlogRoute = Route$2.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => AdminRoute
});
const AdminAddBlogRoute = Route$1.update({
  id: "/add-blog",
  path: "/add-blog",
  getParentRoute: () => AdminRoute
});
const AdminAdLeadsRoute = Route.update({
  id: "/ad-leads",
  path: "/ad-leads",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminAdLeadsRoute,
  AdminAddBlogRoute,
  AdminBlogRoute,
  AdminContactLeadsRoute,
  AdminGrowthLeadsRoute
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
const routeTree = Route$y._addFileChildren(rootRouteChildren)._addFileTypes();
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
  ShapeGrid as S,
  router as r
};
