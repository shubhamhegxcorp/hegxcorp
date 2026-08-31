import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as useParams, L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as getCaseStudyBySlug, f as getCaseStudies, H as Header, F as Footer } from "./router-aQpsgqE2.mjs";
import { B as BrowserPreview } from "./BrowserPreview-BLvnbgxy.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { a3 as ArrowLeft, b4 as MessageSquare, _ as ShieldCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const gridColsMap = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5"
};
function CaseStudyDetailPage() {
  const {
    slug
  } = useParams({
    strict: false
  });
  const study = getCaseStudyBySlug(slug || "");
  if (!study) {
    return null;
  }
  const relatedStudies = getCaseStudies().filter((c) => c.slug !== study.slug).slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA]", style: {
        paddingTop: "clamp(64px, 8vw, 100px)",
        paddingBottom: "clamp(64px, 8vw, 100px)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
          opacity: 0.2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 42, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: true, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
            " Back to Case Studies"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs font-bold text-[#FC9C44] uppercase tracking-wider", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: study.industry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: study.services.join(" • ") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#1D2742] leading-[0.95] tracking-tight", style: {
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(56px, 7vw, 100px)"
                  }, children: study.metricValue }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1", style: {
                    fontFamily: "'Inter', sans-serif"
                  }, children: study.metricLabel.toUpperCase() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-[#6B7280]", style: {
                  fontFamily: "'Space Grotesk', sans-serif"
                }, children: [
                  "Client Case Study: ",
                  study.client
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] leading-relaxed text-base border-l-2 border-[#FC9C44] pl-4", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: study.summary })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: study.featuredImage, alt: `${study.client} Case Study Screenshot`, proofLabel: study.proofLabel, proofDuration: study.proofDuration, proofMetric: `${study.metricValue} Growth`, className: "w-full shadow-[0_24px_48px_rgba(29,39,66,0.08)]" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "01 / The Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#1D2742]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: study.challenge.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#4A5568] leading-relaxed space-y-4", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: study.challenge.description }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "02 / The Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#1D2742]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: study.solution.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#4A5568] leading-relaxed space-y-4", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: study.solution.description }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-16 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Methodology" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-[#1D2742]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "Our Approach & Roadmap" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] text-sm", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "A systematic workflow engineered to isolate scaling bottlenecks and build compounding search and campaign loops." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid ${gridColsMap[study.approach?.length || 4] || "md:grid-cols-4"} gap-8 relative`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-[#EAEAEA] -z-0" }),
          study.approach?.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: step.phase }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-[#1D2742] text-sm", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: step.description })
          ] }, idx))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-16 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "03 / Verified Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-[#1D2742]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "Documented Client Outcomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] text-sm", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Concrete, measurable performance indices checked and verified post-deployment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: study.results.metrics.map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAFAF8] p-6 rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center text-center space-y-2 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl md:text-4xl font-bold text-[#FC9C44]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: metric.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-[#1D2742] uppercase tracking-wider", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: metric.label })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] leading-relaxed text-sm text-center max-w-[720px] mx-auto mt-12", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: study.results.description })
      ] }) }),
      study.testimonial && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#1D2742] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-8 w-8 text-[#FC9C44] mx-auto opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-xl md:text-2xl font-bold leading-relaxed italic", style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: [
          "“",
          study.testimonial.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#FC9C44]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: study.testimonial.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#9CA3AF] font-medium uppercase tracking-wider", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: study.testimonial.role })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[960px] px-6 lg:px-10 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-[640px] mx-auto mb-10 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-[#FC9C44]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: "Visual Proof" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#1D2742]", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: "Live System Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-[#6B7280] leading-relaxed", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: [
            "Direct capture layout representing the client's optimized website presence.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-[#9CA3AF]", children: "(Placeholder graphic will be replaced with real analytics screenshots)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-[960px] mx-auto", children: study.gallery && study.gallery.length > 0 ? study.gallery.map((img, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: img, alt: `${study.client} Gallery Screen ${idx + 1}`, aspectRatio: "video", className: "w-full shadow-md" }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 max-w-[800px] mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: study.featuredImage, alt: `${study.client} Analytics Proof`, proofLabel: study.proofLabel, proofDuration: study.proofDuration, proofMetric: `${study.metricValue} Growth`, aspectRatio: "video", className: "w-full shadow-md" }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#1D2742] tracking-tight mb-12 text-center", style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: "Other Success Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-12 max-w-[960px] mx-auto", children: relatedStudies.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
          slug: item.slug
        }, className: "group flex flex-col gap-4 text-left focus:outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserPreview, { src: item.featuredImage, alt: `${item.client} Case Study`, className: "w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-[#FC9C44] group-hover:text-[#E88C35] transition-colors", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: [
              item.metricValue,
              " ",
              item.metricLabel
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#1D2742]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: item.client }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] line-clamp-2 leading-relaxed", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: item.summary })
          ] })
        ] }, item.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-[#FAFAF8] border-t border-b border-[#EAEAEA]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-10 w-10 text-[#FC9C44] mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-[#1D2742] tracking-tight", style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: "Want Similar Results?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#6B7280] leading-relaxed max-w-[500px] mx-auto text-sm", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: "We'll audit your search visibility, PPC ad spend, and conversion funnel to uncover high-impact growth paths for your business." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all", children: [
          "Get Free Growth Audit",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CaseStudyDetailPage as component
};
