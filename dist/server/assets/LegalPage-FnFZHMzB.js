import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { H as Header, F as Footer } from "./router-Fvt5Lui3.js";
function LegalPage({ eyebrow, title, summary, sections }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F7F8FB] text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 pb-20 pt-28 text-white lg:px-10 lg:pb-24 lg:pt-36", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-[#FC9C44]",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back to home"
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-12 text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 max-w-4xl text-5xl font-black leading-[1.04] md:text-7xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-3xl text-lg leading-8 text-white/70", children: summary }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm font-semibold text-white/45", children: "Last updated: 13 July 2026" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-20 lg:px-10 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]", children: [
        /* @__PURE__ */ jsxs("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]", children: "On this page" }),
          /* @__PURE__ */ jsx("nav", { className: "mt-5 space-y-3", children: sections.map((section, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `#section-${index + 1}`,
              className: "block text-sm font-semibold text-slate-500 transition hover:text-[#06133D]",
              children: section.title
            },
            section.title
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
          sections.map((section, index) => /* @__PURE__ */ jsxs(
            "article",
            {
              id: `section-${index + 1}`,
              className: "scroll-mt-28 border-b border-slate-200 pb-12 last:border-b-0",
              children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-[#FC9C44]", children: String(index + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-black tracking-tight", children: section.title }),
                /* @__PURE__ */ jsx("div", { className: "mt-5 space-y-4 text-base leading-8 text-slate-600", children: section.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)) }),
                section.items && /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: section.items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-base leading-7 text-slate-600", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FC9C44]" }),
                  item
                ] }, item)) })
              ]
            },
            section.title
          )),
          /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white p-8 shadow-[0_18px_50px_-32px_rgba(6,19,61,0.35)] md:p-10", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-7 w-7 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-5 text-2xl font-black", children: "Questions about this policy?" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl leading-7 text-slate-600", children: "Contact Hegxcorp and we will help clarify how this policy applies to your use of our website or services." }),
            /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LegalPage as L
};
