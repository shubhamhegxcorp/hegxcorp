import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./router-aQpsgqE2.mjs";
import { a3 as ArrowLeft, i as Mail } from "../_libs/lucide-react.mjs";
function LegalPage({ eyebrow, title, summary, sections }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#F7F8FB] text-[#06133D]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#06133D] px-6 pb-20 pt-28 text-white lg:px-10 lg:pb-24 lg:pt-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-[#FC9C44]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back to home"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-12 text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 max-w-4xl text-5xl font-black leading-[1.04] md:text-7xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-3xl text-lg leading-8 text-white/70", children: summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm font-semibold text-white/45", children: "Last updated: 13 July 2026" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-20 lg:px-10 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "On this page" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-5 space-y-3", children: sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `#section-${index + 1}`,
              className: "block text-sm font-semibold text-slate-500 transition hover:text-[#06133D]",
              children: section.title
            },
            section.title
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
          sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              id: `section-${index + 1}`,
              className: "scroll-mt-28 border-b border-slate-200 pb-12 last:border-b-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-[#FC9C44]", children: String(index + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-black tracking-tight", children: section.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4 text-base leading-8 text-slate-600", children: section.paragraphs.map((paragraph) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: paragraph }, paragraph)) }),
                section.items && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-base leading-7 text-slate-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FC9C44]" }),
                  item
                ] }, item)) })
              ]
            },
            section.title
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[28px] bg-white p-8 shadow-[0_18px_50px_-32px_rgba(6,19,61,0.35)] md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-7 w-7 text-[#FC9C44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-black", children: "Questions about this policy?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl leading-7 text-slate-600", children: "Contact Hegxcorp and we will help clarify how this policy applies to your use of our website or services." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:hegxcorp@gmail.com",
                className: "mt-7 inline-flex rounded-full bg-[#06133D] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#10215a]",
                children: "hegxcorp@gmail.com"
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  LegalPage as L
};
