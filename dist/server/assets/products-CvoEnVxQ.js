import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { u as useWebsiteSection, H as Header, S as ShapeGrid, F as Footer } from "./router-CGOjT-Wf.js";
import "@tanstack/react-query";
import "sonner";
import "react";
import "./createSsrRpc-DcZ7Clyk.js";
import "./server-yv7ZiuMh.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
import "./lead-source-C0KU7OxF.js";
import "lenis";
import "./blog-drafts-D6gaYuCP.js";
import "clsx";
import "tailwind-merge";
import "./cms-config-CJ9tlu-0.js";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./contact-inquiries-JN2Pe8Z0.js";
import "gsap";
import "gsap/ScrollTrigger";
import "@gsap/react";
import "@tiptap/extension-image";
import "@tiptap/extension-link";
import "@tiptap/extension-placeholder";
import "@tiptap/react";
import "@tiptap/starter-kit";
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F7F8FB] text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative isolate min-h-[500px] overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
          opacity: 0.2
        }, children: /* @__PURE__ */ jsx(ShapeGrid, { shape: "hexagon", squareSize: 38, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: false, speed: 0.2, className: "h-full w-full" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[640px] lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm", children: [
            /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }),
            heroData.tagline
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl", children: heroData.title }),
          /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-base leading-8 text-[#52607A] sm:text-lg", children: heroData.description })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 sm:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: (listData.products || []).map((product, idx) => /* @__PURE__ */ jsxs(motion.div, { custom: idx, initial: "hidden", whileInView: "show", viewport: {
        once: true,
        margin: "-60px"
      }, variants: cardVariant, whileHover: {
        y: -6,
        borderColor: "rgba(252,156,68,0.45)",
        boxShadow: "0 24px 48px -16px rgba(29,39,66,0.08)"
      }, className: "flex flex-col justify-between rounded-3xl border border-[#EAEAEA] bg-white p-8 transition-all duration-300 lg:p-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[#1D2742]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: product.title }) }),
            /* @__PURE__ */ jsx("span", { className: "shrink-0 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]", children: product.price })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-[#6B7280]", style: {
            fontFamily: "'Inter', sans-serif"
          }, children: product.description }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] block", children: "Included Features" }),
            /* @__PURE__ */ jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: (product.features || []).map((feature, fIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-[#232323]", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: feature })
            ] }, fIdx)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-slate-100", children: /* @__PURE__ */ jsxs(Link, { to: product.buttonUrl, className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#06133D] py-3 text-sm font-bold text-white transition hover:bg-[#FC9C44] hover:text-[#06133D]", children: [
          product.buttonText,
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }, idx)) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ProductsPage as component
};
