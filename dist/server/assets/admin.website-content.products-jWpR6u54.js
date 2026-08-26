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
function AdminProductsCMS() {
  const [activeSection, setActiveSection] = useState(null);
  const [hero, setHero] = useState(null);
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, listData] = await Promise.all([getWebsiteSection({
          data: {
            key: "products.hero"
          }
        }), getWebsiteSection({
          data: {
            key: "products.list"
          }
        })]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["products.hero"]);
        setList(listData || DEFAULT_CMS_SECTIONS["products.list"]);
      } catch (err) {
        console.error("Failed to load products CMS data:", err);
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
    /* @__PURE__ */ jsx("div", { className: "border-b border-[#E4E7EC] pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Manage and edit products, SaaS solutions, and visual assets listed on the Products page." }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Hero Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Intro headline and subtitle copy" })
        ] }),
        activeSection !== "hero" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("hero"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("products.hero", hero), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "products.hero"
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
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Products List" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Add, remove and manage pricing of dynamic software/SaaS products" })
        ] }),
        activeSection !== "list" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("list"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("products.list", list), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "products.list"
              }
            }).then((res) => setList(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "list" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Products / SaaS items" }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
            const items = [...list.products];
            items.push({
              title: "New Product",
              description: "Description of the product",
              price: "Contact for pricing",
              buttonText: "Request Access",
              buttonUrl: "/contact",
              features: ["Feature point 1"]
            });
            setList({
              ...list,
              products: items
            });
          }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
            " Add Product"
          ] })
        ] }),
        list.products.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-black text-[#FC9C44] uppercase tracking-wider", children: [
              "Product #",
              idx + 1
            ] }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const items = list.products.filter((_, i) => i !== idx);
              setList({
                ...list,
                products: items
              });
            }, className: "rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "PRODUCT NAME" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: item.title, onChange: (e) => {
                const items = [...list.products];
                items[idx].title = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "PRICE INFO" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: item.price, onChange: (e) => {
                const items = [...list.products];
                items[idx].price = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "BUTTON LABEL" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: item.buttonText, onChange: (e) => {
                const items = [...list.products];
                items[idx].buttonText = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "BUTTON URL" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: item.buttonUrl, onChange: (e) => {
                const items = [...list.products];
                items[idx].buttonUrl = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "sm:col-span-2 grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "DESCRIPTION" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: item.description, onChange: (e) => {
                const items = [...list.products];
                items[idx].description = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pl-4 border-l-2 border-slate-200 space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "PRODUCT FEATURES" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                const items = [...list.products];
                items[idx].features.push("New Feature");
                setList({
                  ...list,
                  products: items
                });
              }, className: "text-[10px] text-[#FC9C44] font-bold hover:underline", children: "+ Add Feature" })
            ] }),
            item.features.map((feature, fIdx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("input", { type: "text", value: feature, onChange: (e) => {
                const items = [...list.products];
                items[idx].features[fIdx] = e.target.value;
                setList({
                  ...list,
                  products: items
                });
              }, className: "flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                const items = [...list.products];
                items[idx].features = items[idx].features.filter((_, i) => i !== fIdx);
                setList({
                  ...list,
                  products: items
                });
              }, className: "text-red-500 hover:text-red-700", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
            ] }, fIdx))
          ] })
        ] }, idx))
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block", children: [
          "Products Grid Preview (",
          list.products.length,
          "):"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: list.products.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-black text-[#06133D] text-xs", children: item.title }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded", children: item.price })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 leading-relaxed mt-1", children: item.description })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
export {
  AdminProductsCMS as component
};
