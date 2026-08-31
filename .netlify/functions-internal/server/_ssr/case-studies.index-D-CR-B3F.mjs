import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer, f as getCaseStudies } from "./router-aQpsgqE2.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import { B as BrowserPreview } from "./BrowserPreview-BLvnbgxy.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { r as Sparkles, A as ArrowRight, aJ as PhoneCall, F as FileText, aK as Percent, _ as ShieldCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./createSsrRpc-ET3YHIm-.mjs";
import "./server-DDc6VQK7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function SplitText({ text, className, style }) {
  const containerRef = reactExports.useRef(null);
  const lines = text.split("\n");
  useGSAP(
    () => {
      gsapWithCSS.fromTo(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { ref: containerRef, className, style, children: lines.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block overflow-hidden relative pb-2 -mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "split-line-inner inline-block", children: line === "Real Results." ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
    line,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute bottom-0 left-0 right-0 h-[4px] rounded-full bg-[#FC9C44]",
        style: { bottom: "-6px" }
      }
    )
  ] }) : line }) }, index)) });
}
function EditorialDivider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center my-16 md:my-24 max-w-[1280px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 text-[#FC9C44] rotate-45 select-none font-bold text-xs", children: "♦" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" })
  ] });
}
function CaseStudiesPage() {
  const studies = getCaseStudies();
  const featuredStudy = studies.find((c) => c.slug === "tarkashastra") || studies[0];
  const gpen = studies.find((c) => c.slug === "g-pen") || studies[1];
  const rollink = studies.find((c) => c.slug === "rollink") || studies[2];
  const learningTree = studies.find((c) => c.slug === "learning-tree") || studies[3];
  const orra = studies.find((c) => c.slug === "orra") || studies[4];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white border-b border-[#EAEAEA]", style: {
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(80px, 10vw, 140px)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
          opacity: 0.2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 38, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: false, speed: 0.2, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[800px] mx-auto space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse" }),
            "Case Studies"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SplitText, { text: "Real Brands.\nReal Growth.\nReal Results.", className: "font-bold text-[#232323] leading-[1.1] tracking-tight", style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(42px, 5.2vw, 76px)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[600px] mx-auto text-[#6B7280] leading-relaxed", style: {
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.2vw, 20px)"
          }, children: "Explore how strategy, execution and data-driven systems helped businesses achieve measurable growth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)] transition-[background-color,transform,box-shadow] duration-200 ease-out", children: [
            "Get Free Growth Audit",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#FC9C44] py-8 border-b border-[#E88C35]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "80+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Clients Served" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-l border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "13+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Years Experience" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-t border-white/20 md:border-t-0 md:border-l border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-none", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "International" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Markets Served" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-4 border-l border-t border-white/20 md:border-t-0 border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-none", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "SEO • PPC • Web" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Growth Systems" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-32 bg-[#FAFAF8] relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "Featured Case Study" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#1D2742] leading-[0.95] tracking-tight", style: {
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(56px, 7vw, 100px)"
              }, children: featuredStudy.metricValue }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: featuredStudy.metricLabel.toUpperCase() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#6B7280] tracking-tight", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: featuredStudy.client }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: featuredStudy.industry }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Google Ads" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search Console" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GA4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CRO" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-6 border-t border-[#EAEAEA] text-[#4A5568]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-[#1D2742]", children: "The Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed", children: featuredStudy.challenge.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-[#1D2742]", children: "Our Solution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed", children: featuredStudy.solution.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "908" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Phone Leads" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "150" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Form Subs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Percent, { className: "h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "-48%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-bold text-[#6B7280] uppercase tracking-wider", children: "Lower CPL" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
            slug: featuredStudy.slug
          }, className: "inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white bg-[#1D2742] hover:bg-[#2C3B60] transition-colors duration-200", children: [
            "View Full Case Study",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/case-studies/$slug", params: {
          slug: featuredStudy.slug
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: featuredStudy.featuredImage, alt: `${featuredStudy.client} Growth Result`, proofLabel: featuredStudy.proofLabel, proofDuration: featuredStudy.proofDuration, proofMetric: `${featuredStudy.metricValue} Growth`, className: "w-full shadow-[0_32px_64px_rgba(29,39,66,0.1)]" }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditorialDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[700px] mb-20 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Archive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-[#232323] leading-tight", style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)"
          }, children: "Documented Growth Outcomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] leading-relaxed text-sm", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Documented case histories of performance bidding, organic architectures, and local reach integrations built to deliver scalable pipelines." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
              slug: gpen.slug
            }, className: "group flex flex-col gap-6 text-left focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: gpen.featuredImage, alt: `${gpen.client} Performance Outcomes`, proofLabel: gpen.proofLabel, proofDuration: gpen.proofDuration, proofMetric: gpen.metricValue, className: "w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5", style: {
                      fontFamily: "'Space Grotesk', sans-serif"
                    }, children: gpen.metricValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5", style: {
                      fontFamily: "'Inter', sans-serif"
                    }, children: gpen.metricLabel.toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1", style: {
                    fontFamily: "'Space Grotesk', sans-serif"
                  }, children: gpen.client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4A5568] leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: gpen.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: gpen.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Google Ads" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GA4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CRO" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                  "Read Study",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
              slug: rollink.slug
            }, className: "group flex flex-col gap-6 text-left focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: rollink.featuredImage, alt: `${rollink.client} Performance Outcomes`, proofLabel: rollink.proofLabel, proofDuration: rollink.proofDuration, proofMetric: rollink.metricValue, className: "w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5", style: {
                      fontFamily: "'Space Grotesk', sans-serif"
                    }, children: rollink.metricValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5", style: {
                      fontFamily: "'Inter', sans-serif"
                    }, children: rollink.metricLabel.toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1", style: {
                    fontFamily: "'Space Grotesk', sans-serif"
                  }, children: rollink.client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4A5568] leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: rollink.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rollink.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SEO" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search Console" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vitals Overhaul" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                  "Read Study",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-[#EAEAEA]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 lg:gap-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
              slug: learningTree.slug
            }, className: "group flex flex-col gap-6 text-left focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: learningTree.featuredImage, alt: `${learningTree.client} Performance`, proofLabel: learningTree.proofLabel, proofDuration: learningTree.proofDuration, proofMetric: learningTree.metricValue, className: "w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: "Featured Performance Story" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5", style: {
                      fontFamily: "'Space Grotesk', sans-serif"
                    }, children: learningTree.metricValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5", style: {
                      fontFamily: "'Inter', sans-serif"
                    }, children: learningTree.metricLabel.toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1", style: {
                    fontFamily: "'Space Grotesk', sans-serif"
                  }, children: learningTree.client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4A5568] leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: learningTree.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: learningTree.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Google Ads" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PPC Bid Optimization" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Funnel Audit" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                  "Read Study",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
              slug: orra.slug
            }, className: "group flex flex-col gap-6 text-left focus:outline-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: orra.featuredImage, alt: `${orra.client} Performance`, proofLabel: orra.proofLabel, proofDuration: orra.proofDuration, proofMetric: orra.metricValue, className: "w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#6B7280]", children: "Localized Brand Authority" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5", style: {
                      fontFamily: "'Space Grotesk', sans-serif"
                    }, children: orra.metricValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5", style: {
                      fontFamily: "'Inter', sans-serif"
                    }, children: orra.metricLabel.toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742] tracking-tight mt-1", style: {
                    fontFamily: "'Space Grotesk', sans-serif"
                  }, children: orra.client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4A5568] leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: orra.summary }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: orra.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SEO Local architecture" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Digital Strategy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Map Dominance" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5", children: [
                  "Read Study",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" })
                ] }) })
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EditorialDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-[#FAFAF8] border-t border-b border-[#EAEAEA] relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-12 w-12 text-[#FC9C44] mx-auto animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold text-[#1D2742] tracking-tight", style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: "Let's Build Your Next Growth Story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] leading-relaxed max-w-[540px] mx-auto text-sm md:text-base", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: "Get a Free Growth Audit and Strategic Roadmap tailored to your business goals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]", children: [
            "Get Free Growth Audit",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-[#1D2742] bg-white border border-[#EAEAEA] hover:border-[#FC9C44] hover:bg-[#FFF4E8] hover:-translate-y-0.5 transition-all duration-200 shadow-sm", children: "Schedule Strategy Call" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CaseStudiesPage as component
};
