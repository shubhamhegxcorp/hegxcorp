import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useWebsiteSection, H as Header, S as ShapeGrid, F as Footer } from "./router-CGOjT-Wf.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/gsap__react.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { aQ as ShoppingBag, K as CircleCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./createSsrRpc-DcZ7Clyk.mjs";
import "./server-yv7ZiuMh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-D6gaYuCP.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./cms-config-CJ9tlu-0.mjs";
import "../_libs/react-hook-form.mjs";
import "../_libs/hookform__resolvers.mjs";
import "./contact-inquiries-JN2Pe8Z0.mjs";
import "../_libs/gsap.mjs";
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
const cardVariant = {
  hidden: {
    opacity: 0,
    y: 24
  },
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
function ProductsPage() {
  const {
    data: heroData
  } = useWebsiteSection("products.hero");
  const {
    data: listData
  } = useWebsiteSection("products.list");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#F7F8FB] text-[#06133D]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate min-h-[500px] overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
          opacity: 0.2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 38, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: false, speed: 0.2, className: "h-full w-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[640px] lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
            heroData.tagline
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl", children: heroData.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-base leading-8 text-[#52607A] sm:text-lg", children: heroData.description })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2", children: (listData.products || []).map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { custom: idx, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-60px"
      }, variants: cardVariant, whileHover: {
        y: -6,
        borderColor: "rgba(252,156,68,0.45)",
        boxShadow: "0 24px 48px -16px rgba(29,39,66,0.08)"
      }, className: "flex flex-col justify-between rounded-3xl border border-[#EAEAEA] bg-white p-8 transition-all duration-300 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-[#1D2742]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: product.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]", children: product.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-[#6B7280]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] block", children: "Included Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: (product.features || []).map((feature, fIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-[#232323]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-emerald-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
            ] }, fIdx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: product.buttonUrl, className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#06133D] py-3 text-sm font-bold text-white transition hover:bg-[#FC9C44] hover:text-[#06133D]", children: [
          product.buttonText,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }, idx)) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ProductsPage as component
};
