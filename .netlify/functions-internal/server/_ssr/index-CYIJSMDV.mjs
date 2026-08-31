import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, F as Footer, u as useWebsiteSection, S as SectionHeading, d as getPublishedBlogs, e as aisearch, t as trackEvent } from "./router-aQpsgqE2.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { B as BrowserPreview$1 } from "./BrowserPreview-BLvnbgxy.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { m as motion, A as AnimatePresence, u as useInView, a as animate, b as useMotionValue, c as useTransform, d as useSpring } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, j as Globe, t as TrendingUp, U as Users, c as ChartColumn, Z as Zap, aG as ChartNoAxesColumn, aH as GitMerge, T as Target, s as Check, l as ChevronDown, aI as CalendarCheck, r as Sparkles, o as Search } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./createSsrRpc-ET3YHIm-.mjs";
import "./server-DDc6VQK7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-DUyaO1gc.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./cms-config-CJ9tlu-0.mjs";
import "./contact-inquiries-Y3QmyFha.mjs";
import "../_libs/tiptap__extension-placeholder.mjs";
import "../_libs/tiptap__react.mjs";
import "../_libs/use-sync-external-store.mjs";
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
import "../_libs/fast-equals.mjs";
import "../_libs/linkifyjs.mjs";
import "../_libs/prosemirror-dropcursor.mjs";
import "../_libs/prosemirror-gapcursor.mjs";
import "../_libs/prosemirror-history.mjs";
import "../_libs/rope-sequence.mjs";
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
    icon: ChartColumn,
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
  const { data: heroData } = useWebsiteSection("home.hero");
  const [isMounted, setIsMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsMounted(true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-white",
      style: { paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 select-none",
            style: {
              opacity: 0.2
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, ease: "easeOut" },
              className: "space-y-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#FC9C44] shadow-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" }),
                  heroData.badge
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "font-bold text-[#232323] leading-[1.08] tracking-tight",
                    style: {
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(40px, 4.8vw, 68px)"
                    },
                    children: heroData.title.includes("Leads, Sales") ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Generate More",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                        "Leads, Sales",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "absolute bottom-0 left-0 right-0 h-[3px] rounded-full",
                            style: { background: "#FC9C44", bottom: "-4px" }
                          }
                        )
                      ] }),
                      " ",
                      "& Revenue"
                    ] }) : heroData.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "max-w-[540px] text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.2vw, 19px)" },
                    children: heroData.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: heroData.buttonUrl,
                      className: "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 ease-out bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)]",
                      id: "hero-cta-audit",
                      children: [
                        heroData.buttonText,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: heroData.secondaryButtonUrl,
                      className: "inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] bg-white px-7 py-3.5 text-sm font-semibold text-[#232323] transition-[background-color,border-color] duration-200 ease-out hover:bg-[#FFF4E8] hover:border-[#FC9C44]",
                      id: "hero-cta-case-studies",
                      children: heroData.secondaryButtonText
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-xs text-[#6B7280]",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trusted by enterprise companies across India, USA, UK & UAE" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 30 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              className: "w-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] rounded-t-2xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-[#FF5F56]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-[#FFBD2E]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3 rounded-full bg-[#27C93F]" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-[340px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded-md py-1 px-3 text-[10px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "https://" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "hegxcorp.com/growth-analytics" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-b-2xl", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "text-sm font-bold text-[#232323] tracking-tight",
                              style: { fontFamily: "'Space Grotesk', sans-serif" },
                              children: "Hegxcorp Growth Engine"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B7280]", children: "Real-time Client Portfolio Metrics" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                          "System Active"
                        ] }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: dashboardMetrics.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          custom: idx,
                          variants: cardVariants,
                          initial: "initial",
                          animate: isMounted ? "animate" : "initial",
                          whileHover: "hover",
                          className: "group rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-4 cursor-default",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-[#6B7280] uppercase tracking-wide", children: m.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: iconVariants, children: /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "h-4 w-4 text-[#FC9C44]" }) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "text-2xl font-bold text-[#232323]",
                                style: { fontFamily: "'Space Grotesk', sans-serif" },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartArea, {})
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
  const containerRef = reactExports.useRef(null);
  const [displayValue, setDisplayValue] = reactExports.useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const hasStarted = reactExports.useRef(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref: containerRef, className: "tabular-nums", children: [
    prefix,
    displayValue.toFixed(decimals),
    suffix
  ] });
}
function ChartArea() {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#FC9C44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[#232323]", children: "Revenue Pipeline Growth (Average YoY)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-emerald-500", children: "+247%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-28 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 400 100", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: "M 0 100 L 0 80 L 40 85 L 80 65 L 120 75 L 160 50 L 200 55 L 240 35 L 280 40 L 320 20 L 360 25 L 400 5 L 400 100 Z",
              fill: "url(#gradient-area)",
              initial: { pathLength: 0 },
              animate: isInView ? { pathLength: 1 } : { pathLength: 0 },
              transition: { duration: 1.4, delay: 0.2, ease: "easeOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gradient-area", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.22" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 text-[9px] text-[#6B7280] font-mono select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Q1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Q2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Q3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Q4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44] font-bold", children: "PROJECTED SCALE" })
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
const logo11 = "data:image/webp;base64,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";
const logo12 = "/assets/12-5-Dpuj0Kw4.webp";
const logo13 = "/assets/13-3-2ehNKuf3.webp";
const logo14 = "data:image/webp;base64,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";
const logo15 = "/assets/15-D1G8ZCM3.webp";
const logo16 = "/assets/16-DWwC_Xc-.webp";
const logo17 = "data:image/webp;base64,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";
const logo18 = "data:image/webp;base64,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";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-[#EAEAEA] bg-white py-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 mb-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "p",
      {
        className: "text-xs font-semibold uppercase tracking-[0.16em] text-[#6B7280]",
        style: { fontFamily: "'Inter', sans-serif" },
        children: [
          "Trusted by businesses across ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#fc9c44]", children: "India, USA, UK & UAE" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10",
          style: { background: "linear-gradient(to right, white 40%, transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10",
          style: { background: "linear-gradient(to left, white 40%, transparent)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 animate-marquee w-max", style: { willChange: "transform" }, children: track.map((logo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "client-logo-item shrink-0 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const [count, setCount] = reactExports.useState(0);
  const elementRef = reactExports.useRef(null);
  const obj = reactExports.useRef({ value: 0 });
  reactExports.useEffect(() => {
    if (!trigger) return;
    obj.current.value = 0;
    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsapWithCSS.to(obj.current, {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref: elementRef, className: "tabular-nums", children: [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1100px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: "Proven Results"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-24 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "font-black leading-none tracking-tight text-[#1D2742]",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(72px, 10vw, 130px)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { target: 310, prefix: "+", suffix: "%", decimals: 0, trigger: true })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 mb-4 h-[2px] w-14 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-[20px] font-bold text-[#232323] leading-snug mb-2",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: "Organic Traffic Growth"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[14px] text-[#6B7280] leading-relaxed mb-7 max-w-[340px]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Average increase across all SEO clients within 12 months of engagement."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/case-studies",
                      className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] group",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "See the case study",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              children: supporting.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-[46px] font-black leading-none text-[#1D2742] tracking-tight",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "text-sm font-bold text-[#232323] mt-1.5 mb-0.5",
                          style: { fontFamily: "'Space Grotesk', sans-serif" },
                          children: m.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs text-[#9CA3AF] leading-relaxed",
                          style: { fontFamily: "'Inter', sans-serif" },
                          children: m.sub
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: m.href,
                        className: "shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        "aria-label": `View ${m.label} results`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-[#FC9C44]" })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className: "absolute inset-0 w-full h-full pointer-events-none select-none",
      viewBox: "0 0 1 1",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      children: lines.map(([x1, y1, x2, y2], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-[3px] h-14", children: [32, 50, 42, 64, 54, 74, 62, 82, 70, 92].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-full",
            style: { height: `${h * 0.56}px`, transformOrigin: "bottom" }
          }
        )
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 36", className: "w-full h-8", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "seo-g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#FC9C44", stopOpacity: "0.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#FC9C44", stopOpacity: "0" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M0 34 C30 30, 60 22, 90 14 S140 5, 170 3 S190 2, 200 1 V36 H0 Z",
          fill: "url(#seo-g)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-1 right-0 text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[20px] font-bold text-[#FC9C44] leading-none font-mono", children: "+310%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono", children: "Organic Growth" })
    ] })
  ] });
}
function PPCVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "text-[40px] font-bold text-[#1D2742] leading-none font-mono",
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          children: [
            "4.8",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "×" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono uppercase tracking-widest mt-1.5", children: "Average ROAS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-2", children: [
      { label: "Google", pct: 68 },
      { label: "Meta", pct: 52 }
    ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-[#C4C9D4] font-mono w-9 shrink-0", children: b.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-[#F3F4F6] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full rounded-full bg-[#FC9C44]",
          initial: { width: 0 },
          whileInView: { width: `${b.pct}%` },
          viewport: { once: true },
          transition: { duration: 1, delay: 0.4, ease: "easeOut" }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] text-[#9CA3AF] font-mono shrink-0 w-5 text-right", children: [
        b.pct,
        "%"
      ] })
    ] }, b.label)) })
  ] });
}
function WebDevVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-[#1D2742] px-3.5 py-3 font-mono space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[#FC9C44]", children: "<GrowthEngine />" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  performance: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "98" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  seo: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "100" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-[#6B8DB5]", children: [
        "  edge: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "cached ✓" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-emerald-600 font-mono font-medium", children: "Deployment successful" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[8px] text-[#C4C9D4] font-mono", children: "98 Lighthouse" })
    ] })
  ] });
}
function CROVisual() {
  const steps2 = [
    { label: "Visitors", w: "100%" },
    { label: "Leads", w: "44%" },
    { label: "Customers", w: "18%" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col gap-2", children: [
    steps2.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
      i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[#E5E7EB] font-mono text-center leading-none select-none", children: "↓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-[#9CA3AF] w-14 shrink-0", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-3.5 rounded bg-[#F3F4F6] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-[#FC9C44] font-mono", children: "+184% Leads" }) })
  ] });
}
function BrandVisual() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["#1D2742", "#FC9C44", "#ffb36b", "#F3F4F6", "#232323"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] px-3 py-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-[18px] font-bold text-[#232323] leading-none",
          style: { fontFamily: "'Space Grotesk', sans-serif" },
          children: "Aa"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono uppercase tracking-wider pt-1", children: "Audience Growth" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[20px] font-bold text-[#1D2742] leading-none font-mono", children: "+38%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-[#9CA3AF] font-mono", children: "Engagement" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 44", className: "w-full h-10", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "smm-g", x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#E1306C", stopOpacity: "0.15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#E1306C", stopOpacity: "0" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M0 42 C20 40, 40 36, 60 28 S90 16, 120 10 S160 4, 200 1 V44 H0 Z",
          fill: "url(#smm-g)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: [
      { name: "Instagram", color: "#E1306C" },
      { name: "LinkedIn", color: "#0077B5" },
      { name: "YouTube", color: "#FF0000" }
    ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "text-[8px] text-[#9CA3AF] font-mono flex items-center gap-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.href, className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA] select-none shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#FC9C44]/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#E5E7EB]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#E5E7EB]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[8px] text-[#C4C9D4] font-mono truncate flex-1", children: s.url }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#EAEAEA] group-hover:bg-emerald-400 transition-colors duration-300 shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `border-b border-[#F3F4F6] bg-white ${isFeatured ? "px-6 pt-6 pb-5" : "px-4 pt-4 pb-3"}`,
            style: { minHeight: isFeatured ? "200px" : "140px" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Visual, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col flex-1 gap-2 ${isFeatured ? "p-5" : "p-4"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-bold tracking-[0.14em] text-[#FC9C44]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: s.slug
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-[#6B7280] leading-relaxed flex-1 ${isFeatured ? "text-[13px]" : "text-[12px] line-clamp-2"}`,
              style: { fontFamily: "'Inter', sans-serif" },
              children: s.desc
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 text-xs font-semibold text-[#FC9C44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200 ease-out",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                "Learn more ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const visualMap = {
  SEO: SEOVisual,
  PPC: PPCVisual,
  WEB: WebDevVisual,
  CRO: CROVisual,
  BRAND: BrandVisual,
  SMM: SMMVisual
};
function ServicesGrid() {
  const { data: sectionData } = useWebsiteSection("home.services");
  const mappedServices = (sectionData.services || []).map((item) => ({
    ...item,
    Visual: visualMap[item.slug] || WebDevVisual
  }));
  const featured = mappedServices.slice(0, 2);
  const standard = mappedServices.slice(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(10px, 2vw, 20px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  tagline: sectionData.tagline,
                  heading: sectionData.heading,
                  description: sectionData.description
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.2 },
                  className: "shrink-0 mb-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/services",
                      className: "inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "Explore all services ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 pointer-events-none hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SystemConnections, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid sm:grid-cols-2 gap-5", children: featured.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { s, i, size: "featured" }, s.slug)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: standard.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { s, i: i + 2, size: "standard" }, s.slug)) })
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
  const containerRef = reactExports.useRef(null);
  const cursorRef = reactExports.useRef(null);
  const rafRef = reactExports.useRef(0);
  const posRef = reactExports.useRef({ x: 0, y: 0 });
  const targetRef = reactExports.useRef({ x: 0, y: 0 });
  const [visible, setVisible] = reactExports.useState(false);
  const animate2 = reactExports.useCallback(() => {
    if (!cursorRef.current) return;
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;
    gsapWithCSS.set(cursorRef.current, {
      x: posRef.current.x,
      y: posRef.current.y,
      xPercent: -50,
      yPercent: -50
    });
    rafRef.current = requestAnimationFrame(animate2);
  }, []);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: `relative ${className}`, style: { cursor: "none" }, children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const wrapperRef = reactExports.useRef(null);
  const currentPos = reactExports.useRef({ x: 0, y: 0 });
  const rafRef = reactExports.useRef(0);
  const targetPos = reactExports.useRef({ x: 0, y: 0 });
  const lerpFactor = 0.18;
  reactExports.useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = wrapperRef.current;
    if (!el) return;
    const tick = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;
      gsapWithCSS.set(el, {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  gsapWithCSS.registerPlugin(ScrollTrigger);
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
  const sectionRef = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;
    const ctx = gsapWithCSS.context(() => {
      const getStepWidth = () => window.innerWidth * 0.5;
      const totalMove = (projects.length - 1) * getStepWidth();
      gsapWithCSS.set(`.project-card-0`, { scale: 1.02, opacity: 1, y: 0, filter: "blur(0px)" });
      for (let i = 1; i < projects.length; i++) {
        gsapWithCSS.set(`.project-card-${i}`, { scale: 0.92, opacity: 0.4, y: 20, filter: "blur(4px)" });
      }
      const tl = gsapWithCSS.timeline({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: sectionRef,
        className: "hidden md:flex relative h-screen w-full flex-col justify-between py-14 bg-white overflow-hidden select-none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] w-full px-6 lg:px-10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              tagline: "Client Success Stories",
              heading: "Visual proof of our engineering and growth capabilities"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 flex items-center justify-start overflow-hidden w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: trackRef,
              className: "flex flex-nowrap w-max gap-[6vw] items-center",
              style: {
                paddingLeft: "28vw",
                // Centers card 0 exactly in center of screen: 50vw - (44vw / 2)
                paddingRight: "28vw"
              },
              children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `project-card-${index} shrink-0 w-[44vw] origin-center`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudyCursor, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, index, isActive: activeIndex === index }) })
                },
                project.id
              ))
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 shrink-0" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block md:hidden bg-white pt-14 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          tagline: "Client Success Stories",
          heading: "Visual proof of our capabilities"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 py-4",
          style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          ` }),
            projects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw] max-w-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, index: 0, isMobile: true, isActive: true }) }, project.id))
          ]
        }
      )
    ] })
  ] });
}
function BrowserPreview({ type, isActive = false }) {
  if (type === "ecommerce") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-[#EAEAEA]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-[#1D2742] tracking-wider", children: "E-SHOP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-10 bg-[#EAEAEA] rounded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-6 bg-[#FC9C44] rounded" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 my-2 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 },
            transition: { duration: 0.4, ease: "easeOut" },
            className: "rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-[#FAFAF8] rounded flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-[#FC9C44] opacity-50" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#EAEAEA] rounded mt-1.5 w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#FC9C44] rounded mt-1 w-1/3" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 },
            transition: { duration: 0.4, delay: 0.1, ease: "easeOut" },
            className: "rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-[#FAFAF8] rounded flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-[#FC9C44] opacity-50" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#EAEAEA] rounded mt-1.5 w-2/3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#EBB771] rounded mt-1 w-1/4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#1D2742] rounded-sm w-full" })
    ] });
  }
  if (type === "saas") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-10 border-r border-[#EAEAEA] pr-1 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#1D2742] rounded w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-2/3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-[#FAFAF8] rounded w-1/2 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-full flex items-end gap-1 pb-1 border-b border-[#EAEAEA]", children: [30, 45, 20, 60, 55, 75, 90].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#FAFAF8] rounded w-1/3 mt-2" })
      ] })
    ] }) });
  }
  if (type === "healthcare") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-white p-4 flex flex-col justify-between select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-[#1D2742] rounded w-1/3 mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 my-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-[#FFF4E8] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-[#FC9C44]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#EAEAEA] rounded w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-[#EAEAEA] rounded w-1/2" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-[#EAEAEA] rounded p-2 bg-[#FAFAF8] flex justify-between gap-1", children: [1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[6px] text-[#9CA3AF] font-bold", children: [
          "D",
          d
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full bg-[#FAFAF8] p-4 flex flex-col justify-between select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-12 bg-[#1D2742] rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-6 bg-[#FC9C44] rounded" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-white border border-[#EAEAEA] rounded p-3 flex flex-col justify-center items-center gap-1.5 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: isActive ? { scale: [1, 1.15, 1], rotate: [0, 8, 0] } : { scale: 1, rotate: 0 },
          transition: { duration: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-[#FC9C44]" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-8 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-full h-full", viewBox: "0 0 100 30", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const [currentVal, setCurrentVal] = reactExports.useState(0);
  const valObj = reactExports.useRef({ value: 0 });
  reactExports.useEffect(() => {
    if (!parsed.hasNumber) return;
    if (trigger) {
      valObj.current.value = 0;
      setCurrentVal(0);
      gsapWithCSS.to(valObj.current, {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#EBB771] font-black text-xl md:text-2xl tracking-tight font-sans", children: metric });
  }
  const formattedNum = currentVal.toFixed(parsed.decimals);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#EBB771] font-black text-xl md:text-2xl tracking-tight block font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: parsed.prefix }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: formattedNum }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: parsed.suffix }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6B7280] font-medium text-xs md:text-sm ml-2 inline-block normal-case", children: parsed.label.trim() })
  ] });
}
function ProjectCard({
  project,
  index,
  isMobile = false,
  isActive = false
}) {
  const cardRef = reactExports.useRef(null);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#FF5F56]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[#27C93F]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-[240px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-2 text-[9px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1 overflow-hidden truncate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "https://" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.url })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex-1 relative overflow-hidden flex items-stretch border-b border-[#EAEAEA]",
            style: { backgroundColor: project.browserColor },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-44 md:h-52 self-center p-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-full w-full rounded-lg shadow-sm border border-[#EAEAEA] overflow-hidden preview-inner-${index}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scale-110 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.14]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { type: project.screenshotType, isActive }) })
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: [
              project.industry,
              " · ",
              project.category
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-lg font-bold text-[#1D2742]",
                style: { fontFamily: "'Space Grotesk', sans-serif" },
                children: project.title
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1 min-h-[32px] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedMetric, { metric: project.metric, trigger: isActive }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-[#EAEAEA] flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/case-studies",
              className: "group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FC9C44] transition-colors",
              children: [
                "Explore Case Study",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" })
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
const iconMap = {
  0: Target,
  1: GitMerge,
  2: ChartNoAxesColumn,
  3: Users,
  4: TrendingUp
};
function WhyHegxcorp() {
  const { data: sectionData } = useWebsiteSection("home.features");
  const mappedPillars = (sectionData.items || []).map((item, idx) => ({
    ...item,
    icon: iconMap[idx % 5] || Target,
    desc: item.description
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: { paddingTop: "clamp(10px, 2vw, 20px)", paddingBottom: "clamp(72px, 9vw, 128px)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10 space-y-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-80px" },
            custom: 0,
            variants: fadeUp,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                tagline: sectionData.tagline,
                heading: sectionData.heading,
                description: sectionData.description
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            custom: 1,
            variants: fadeUp,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto rounded-2xl border border-[#EAEAEA] shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[560px] border-collapse text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: "w-1/2 px-7 py-5 text-left font-semibold border-b border-[#FC9C44]/30 bg-[#FFF4E8]",
                      style: {
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "13px",
                        letterSpacing: "0.02em",
                        color: "#c97a1e"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "group transition-colors duration-200 hover:bg-[#FAFAF8]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-7 py-4 text-[#9CA3AF] ${i < rows.length - 1 ? "border-b border-[#EAEAEA]" : ""}`,
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "shrink-0 h-4 w-4 text-[#D1D5DB]",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-7 py-4 font-medium text-[#1D2742] bg-[#FFF4E8] ${i < rows.length - 1 ? "border-b border-[#FC9C44]/20" : ""}`,
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "shrink-0 h-4 w-4 text-[#FC9C44]",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden", children: mappedPillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] text-[#1D2742] transition-all duration-300 group-hover:bg-[#FC9C44] group-hover:text-white group-hover:border-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold text-[#232323] leading-snug mb-2",
                    style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" },
                    children: p.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-[#1D2742] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#EBB771]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: "Featured Case Study"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 mt-8 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-[#EBB771] pl-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771] mb-1",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "The Challenge"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-white/70 text-sm leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "A fast-growing e-commerce brand was struggling with stagnant organic traffic and heavy reliance on paid ads. Their ROAS was declining and CAC was climbing quarter over quarter."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-[#FC9C44] pl-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-xs font-semibold uppercase tracking-[0.12em] text-[#FC9C44] mb-1",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "Our Solution"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-white/70 text-sm leading-relaxed",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "We deployed a full-funnel strategy combining technical SEO, content architecture, and conversion-rate optimisation — reducing paid dependency while compounding organic results."
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.03 },
                    transition: { duration: 0.2 },
                    className: "inline-block",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/case-studies",
                        className: "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35]",
                        children: [
                          "View Full Case Study ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                        ]
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: 15 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: i * 0.1 },
                    className: "rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-200",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-xs text-white/50 mb-1",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: r.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-[42px] font-black text-white leading-none",
                            style: { fontFamily: "'Space Grotesk', sans-serif" },
                            children: r.value
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-xs text-white/40",
                            style: { fontFamily: "'Inter', sans-serif" },
                            children: "Timeframe"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: ["E-Commerce", "SEO", "Content", "CRO", "India"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const containerRef = reactExports.useRef(null);
  const [scrollProgress, setScrollProgress] = reactExports.useState(0);
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const [mobileActive, setMobileActive] = reactExports.useState(0);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        className: "hidden md:block relative bg-[#FAFAF8]",
        style: { height: "260vh" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] w-full px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { tagline: "How We Work", heading: "From audit to scale in 5 steps" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.2fr_1.8fr] gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex gap-8 pl-4 py-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[3px] bg-[#EAEAEA] rounded-full self-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute top-0 w-full bg-[#FC9C44] rounded-full origin-top",
                  style: { height: `${scrollProgress * 100}%` },
                  transition: { type: "tween", ease: "easeOut" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 py-2", children: steps.map((s, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4 cursor-default select-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[13px] z-10 -translate-x-1/2 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          animate: {
                            backgroundColor: isActive || isCompleted ? "#FC9C44" : "#FFFFFF",
                            borderColor: isActive || isCompleted ? "#FC9C44" : "#EAEAEA",
                            scale: isActive ? 1.25 : 1
                          },
                          className: "h-4 w-4 rounded-full border-2 flex items-center justify-center text-[7px] text-white",
                          children: isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5 stroke-[3px]" })
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          animate: {
                            opacity: isActive ? 1 : isCompleted ? 0.7 : 0.35,
                            x: isActive ? 6 : 0
                          },
                          transition: { duration: 0.3 },
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-xs  ${isActive ? "text-[#FC9C44]" : "text-[#6B7280]"}`,
                                style: { fontFamily: "'Space Grotesk', sans-serif" },
                                children: s.num
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-12 min-h-[300px] flex flex-col justify-center shadow-[0_12px_40px_-20px_rgba(29,39,66,0.06)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -15 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "space-y-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-3xl font-bold text-[#1D2742]",
                      style: { fontFamily: "'Space Grotesk', sans-serif" },
                      children: steps[activeStep].title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[#6B7280] leading-relaxed max-w-[500px]",
                      style: { fontFamily: "'Inter', sans-serif", fontSize: "16px" },
                      children: steps[activeStep].desc
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-3",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: "Deliverables"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: steps[activeStep].deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "block md:hidden bg-[#FAFAF8]",
        style: {
          paddingTop: "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(64px, 8vw, 120px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { tagline: "How We Work", heading: "From audit to scale in 5 steps" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setMobileActive(i),
              className: `flex items-center gap-2.5 rounded-xl px-4 py-3 shrink-0 transition-all duration-300 ${mobileActive === i ? "bg-[#1D2742] text-white shadow-md" : "bg-white border border-[#EAEAEA] text-[#6B7280]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] font-bold ${mobileActive === i ? "text-[#EBB771]" : "text-[#FC9C44]"}`,
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: s.num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.25 },
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-bold text-[#1D2742]",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: steps[mobileActive].title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm text-[#6B7280] leading-relaxed",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: steps[mobileActive].desc
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-2.5",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: "Deliverables"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: steps[mobileActive].deliverables.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  const { data: sectionData } = useWebsiteSection("home.testimonials");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-white overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: sectionData.tagline
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "mt-3 text-[clamp(24px,3.5vw,36px)] font-bold text-[#1D2742] leading-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: sectionData.heading
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/case-studies",
                  className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] shrink-0 group",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    "See all case studies",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[#EAEAEA]", children: (sectionData.testimonials || []).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            custom: i,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" },
            variants: rowVariant,
            className: "group grid grid-cols-1 md:grid-cols-[160px_1fr_200px] lg:grid-cols-[200px_1fr_240px] gap-6 lg:gap-12 py-10 items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-[clamp(36px,5vw,52px)] font-black text-[#1D2742] leading-none tracking-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: t.resultValue
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mt-1.5 text-[11px] font-bold tracking-[0.1em] text-[#FC9C44] uppercase",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: t.resultLabel
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-[15px] lg:text-[16px] text-[#374151] leading-relaxed",
                  style: { fontFamily: "'Inter', sans-serif" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C4C9D4] mr-0.5 font-serif text-[18px]", children: '"' }),
                    t.review,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#C4C9D4] ml-0.5 font-serif text-[18px]", children: '"' })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white select-none",
                      style: { background: "#1D2742", fontFamily: "'Space Grotesk', sans-serif" },
                      children: t.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-sm font-bold text-[#232323]",
                        style: { fontFamily: "'Space Grotesk', sans-serif" },
                        children: t.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-xs text-[#9CA3AF]",
                        style: { fontFamily: "'Inter', sans-serif" },
                        children: t.designation
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs text-[#6B7280]",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: t.company
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#EAEAEA]", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.3 },
            className: "mt-12 pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#6B7280]", style: { fontFamily: "'Inter', sans-serif" }, children: [
                "Join ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#232323]", children: "100+ businesses" }),
                " scaling with Hegxcorp across India, USA, UK & Dubai."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.03 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
function BlogPreview() {
  const [allBlogs, setAllBlogs] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let active = true;
    getPublishedBlogs().then((result) => {
      if (active) setAllBlogs(result);
    }).catch((loadError) => {
      console.error("Failed to load published blogs:", loadError);
    });
    return () => {
      active = false;
    };
  }, []);
  const featuredArticle = reactExports.useMemo(() => {
    if (allBlogs.length === 0) return null;
    const featuredList = allBlogs.filter((a) => a.featured);
    if (featuredList.length > 0) {
      return featuredList.sort(
        (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
      )[0];
    }
    return allBlogs.find((a) => a.slug === "how-ai-search-reshapes-organic-traffic") || allBlogs[0];
  }, [allBlogs]);
  const title = featuredArticle?.title ?? "How AI Search Changes Rankings";
  const excerpt = featuredArticle?.excerpt ?? "A technical breakdown of semantic search index shifts and how search algorithms evaluate topical authority inside generative answers.";
  const slug = featuredArticle?.slug ?? "how-ai-search-reshapes-organic-traffic";
  const imageSrc = featuredArticle?.featuredImage || aisearch;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "bg-[#FAFAF8] overflow-hidden",
      style: {
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "space-y-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SectionHeading,
                {
                  tagline: "INSIGHTS",
                  heading: "Ideas, Experiments & Growth Systems",
                  description: "Practical breakdowns of SEO, paid media, conversion optimisation, and digital growth systems used to help businesses scale."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  whileHover: { scale: 1.03 },
                  transition: { duration: 0.2 },
                  className: "shrink-0 mb-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/blog",
                      className: "inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200",
                      style: { fontFamily: "'Inter', sans-serif" },
                      children: [
                        "Read all articles ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-12 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-3xl lg:text-4xl font-bold text-[#1D2742] tracking-tight",
                    style: { fontFamily: "'Space Grotesk', sans-serif" },
                    children: title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[#6B7280] leading-relaxed text-sm md:text-base",
                    style: { fontFamily: "'Inter', sans-serif" },
                    children: excerpt
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/blog/$slug",
                    params: { slug },
                    className: "inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-colors",
                    children: [
                      "View Blog",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                BrowserPreview$1,
                {
                  aspectRatio: "video",
                  url: "hegxcorp.com/blog",
                  className: "w-full shadow-lg",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: { slug }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: title, className: "w-full h-full object-cover" }) })
                }
              ) })
            ] }) })
          ]
        }
      ) })
    }
  );
}
function HomeFAQ() {
  const { data: faqData } = useWebsiteSection("home.faq");
  const [openIdx, setOpenIdx] = reactExports.useState(null);
  const items = faqData?.items || [];
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#FAFAF8] py-20 sm:py-24 lg:py-28 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            tagline: faqData.tagline || "FAQ",
            heading: faqData.heading || "Frequently Asked Questions",
            description: faqData.description || "Everything you need to know about our growth services."
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[#EAEAEA] border-t border-[#EAEAEA] mt-4 lg:mt-0", children: items.map((item, index) => {
      const isOpen = openIdx === index;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenIdx(isOpen ? null : index),
            className: "flex w-full items-center justify-between gap-4 text-left font-bold text-[#1D2742] transition-colors hover:text-[#FC9C44]",
            style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `h-4.5 w-4.5 text-[#FC9C44] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[640px]",
                style: { fontFamily: "'Inter', sans-serif" },
                children: item.answer
              }
            )
          }
        ) })
      ] }, index);
    }) })
  ] }) }) });
}
function FinalCTA() {
  const { data: ctaData } = useWebsiteSection("home.cta");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-[#1D2742] overflow-hidden grain-overlay pt-10 pb-28 md:pt-12 md:pb-12 lg:pt-16 lg:pb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.18] select-none overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" },
        className: "max-w-[800px] mx-auto text-center space-y-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-2 rounded-full border border-[#EBB771]/30 bg-[#EBB771]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771]",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-3.5 w-3.5" }),
                ctaData.badge
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-bold text-white leading-tight",
              style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 5vw, 64px)"
              },
              children: ctaData.heading
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-white/75 max-w-[620px] mx-auto leading-relaxed",
              style: { fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" },
              children: ctaData.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { strength: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: {
                  y: -3,
                  boxShadow: "0 12px 28px -8px rgba(252,156,68,0.4)"
                },
                transition: { duration: 0.2, ease: "easeOut" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: ctaData.buttonUrl,
                    onClick: () => trackEvent("cta_click", {
                      cta_name: "book_free_strategy_call",
                      cta_location: "final_cta",
                      destination: ctaData.buttonUrl
                    }),
                    className: "group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-[#1D2742] bg-[#FC9C44] transition-colors duration-200 hover:bg-[#E88C35]",
                    style: { fontFamily: "'Inter', sans-serif" },
                    id: "final-cta-strategy-call",
                    children: [
                      ctaData.buttonText,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" })
                    ]
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { strength: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                whileHover: {
                  y: -3,
                  boxShadow: "0 12px 24px -10px rgba(255,255,255,0.15)"
                },
                transition: { duration: 0.2, ease: "easeOut" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" })
                    ]
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap justify-center gap-6 md:gap-10 text-xs text-white/50 pt-4",
              style: { fontFamily: "'Inter', sans-serif" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No sales pressure" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#EBB771]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "30-minute strategy session" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FC9C44]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Actionable recommendations" })
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
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 },
      transition: { duration: 0.3, ease: "easeOut" },
      className: "fixed bottom-4 left-4 right-4 z-40 md:hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-[#EAEAEA] bg-white/95 p-3.5 shadow-[0_12px_30px_-8px_rgba(29,39,66,0.2)] backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]", children: "Limited Slots" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[#232323]", children: "Free Growth Audit" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
            ]
          }
        )
      ] })
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClientLogos, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsMetrics, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedWork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyHegxcorp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedCaseStudy, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeFAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, {})
  ] });
}
export {
  Index as component
};
