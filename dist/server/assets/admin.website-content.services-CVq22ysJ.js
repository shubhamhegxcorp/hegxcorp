import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Edit2, Check, X, Plus, Trash2 } from "lucide-react";
import { g as getWebsiteSection, s as saveWebsiteSection } from "./router-CGOjT-Wf.js";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
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
import "framer-motion";
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
function AdminServicesCMS() {
  const [activeSection, setActiveSection] = useState(null);
  const [hero, setHero] = useState(null);
  const [benefits, setBenefits] = useState(null);
  const [process, setProcess] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, benefitsData, processData] = await Promise.all([getWebsiteSection({
          data: {
            key: "services.hero"
          }
        }), getWebsiteSection({
          data: {
            key: "services.benefits"
          }
        }), getWebsiteSection({
          data: {
            key: "services.process"
          }
        })]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["services.hero"]);
        setBenefits(benefitsData || DEFAULT_CMS_SECTIONS["services.benefits"]);
        setProcess(processData || DEFAULT_CMS_SECTIONS["services.process"]);
      } catch (err) {
        console.error("Failed to load services CMS data:", err);
        toast.error("Failed to load website content.");
      } finally {
        setLoading(false);
      }
    }
    void loadData();
  }, []);
  const handleSave = async (key, value) => {
    try {
      await saveWebsiteSection({
        data: {
          key,
          value
        }
      });
      toast.success("Section updated successfully!");
      setActiveSection(null);
    } catch (err) {
      console.error("Save failed:", err);
      toast.error("Failed to save changes.");
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-[400px] items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-500", children: "Loading website content..." }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 p-6 lg:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-[#E4E7EC] pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Manage and edit all frontend Services page sections." }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Hero Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Intro headline and sub-text" })
        ] }),
        activeSection !== "hero" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("hero"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("services.hero", hero), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "services.hero"
              }
            }).then((res) => setHero(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "hero" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.tagline, onChange: (e) => setHero({
              ...hero,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Headline Title" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.title, onChange: (e) => setHero({
              ...hero,
              title: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 3, value: hero.description, onChange: (e) => setHero({
            ...hero,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline:" }),
          " ",
          hero.title
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          hero.description
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Benefits Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Bullet points of benefits on the services page" })
        ] }),
        activeSection !== "benefits" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("benefits"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("services.benefits", benefits), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "services.benefits"
              }
            }).then((res) => setBenefits(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "benefits" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: benefits.tagline, onChange: (e) => setBenefits({
              ...benefits,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading Title" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: benefits.title, onChange: (e) => setBenefits({
              ...benefits,
              title: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 2, value: benefits.description, onChange: (e) => setBenefits({
            ...benefits,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Benefits Bullet Points" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const list = [...benefits.benefits];
              list.push("New Benefit Point");
              setBenefits({
                ...benefits,
                benefits: list
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add Point"
            ] })
          ] }),
          benefits.benefits.map((point, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsx("input", { type: "text", value: point, onChange: (e) => {
              const list = [...benefits.benefits];
              list[idx] = e.target.value;
              setBenefits({
                ...benefits,
                benefits: list
              });
            }, className: "flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const list = benefits.benefits.filter((_, i) => i !== idx);
              setBenefits({
                ...benefits,
                benefits: list
              });
            }, className: "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          benefits.tagline,
          " ·",
          " ",
          benefits.title
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D] block mb-1", children: "Benefits List:" }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 text-xs text-slate-600 space-y-1", children: benefits.benefits.map((pt, i) => /* @__PURE__ */ jsx("li", { children: pt }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Process Steps" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Methodology / timeline phases of delivery" })
        ] }),
        activeSection !== "process" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("process"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("services.process", process), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "services.process"
              }
            }).then((res) => setProcess(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "process" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: process.tagline, onChange: (e) => setProcess({
              ...process,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5 sm:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading Title" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: process.title, onChange: (e) => setProcess({
              ...process,
              title: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Process Steps" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const steps = [...process.steps];
              steps.push({
                title: "New Step",
                points: ["First detail point"]
              });
              setProcess({
                ...process,
                steps
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add Step"
            ] })
          ] }),
          process.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("label", { className: "flex-1 grid gap-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold text-slate-400", children: [
                  "STEP ",
                  idx + 1,
                  " TITLE"
                ] }),
                /* @__PURE__ */ jsx("input", { type: "text", value: step.title, onChange: (e) => {
                  const steps = [...process.steps];
                  steps[idx].title = e.target.value;
                  setProcess({
                    ...process,
                    steps
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
              ] }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                const steps = process.steps.filter((_, i) => i !== idx);
                setProcess({
                  ...process,
                  steps
                });
              }, className: "rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pl-4 border-l-2 border-slate-200 space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "DETAILS POINTS" }),
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                  const steps = [...process.steps];
                  steps[idx].points.push("New Detail");
                  setProcess({
                    ...process,
                    steps
                  });
                }, className: "text-[10px] text-[#FC9C44] font-bold hover:underline", children: "+ Add Detail" })
              ] }),
              step.points.map((pt, ptIdx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
                /* @__PURE__ */ jsx("input", { type: "text", value: pt, onChange: (e) => {
                  const steps = [...process.steps];
                  steps[idx].points[ptIdx] = e.target.value;
                  setProcess({
                    ...process,
                    steps
                  });
                }, className: "flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs" }),
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                  const steps = [...process.steps];
                  steps[idx].points = steps[idx].points.filter((_, i) => i !== ptIdx);
                  setProcess({
                    ...process,
                    steps
                  });
                }, className: "text-red-500 hover:text-red-700", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
              ] }, ptIdx))
            ] })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          process.tagline,
          " ·",
          " ",
          process.title
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block mb-2", children: [
            "Process Steps (",
            process.steps.length,
            "):"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: process.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-black text-[#06133D] text-xs block", children: [
              "Step ",
              idx + 1,
              ": ",
              step.title
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 mt-1 text-[11px] text-slate-500 space-y-0.5", children: step.points.map((pt, i) => /* @__PURE__ */ jsx("li", { children: pt }, i)) })
          ] }, idx)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminServicesCMS as component
};
