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
function AdminContactCMS() {
  const [activeSection, setActiveSection] = useState(null);
  const [hero, setHero] = useState(null);
  const [details, setDetails] = useState(null);
  const [serviceGroups, setServiceGroups] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, detailsData, serviceGroupsData] = await Promise.all([getWebsiteSection({
          data: {
            key: "contact.hero"
          }
        }), getWebsiteSection({
          data: {
            key: "contact.details"
          }
        }), getWebsiteSection({
          data: {
            key: "contact.serviceGroups"
          }
        })]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["contact.hero"]);
        setDetails(detailsData || DEFAULT_CMS_SECTIONS["contact.details"]);
        setServiceGroups(serviceGroupsData || DEFAULT_CMS_SECTIONS["contact.serviceGroups"]);
      } catch (err) {
        console.error("Failed to load contact CMS data:", err);
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
    /* @__PURE__ */ jsx("div", { className: "border-b border-[#E4E7EC] pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Manage and edit all frontend Contact page sections." }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Hero Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Intro headline and description copy" })
        ] }),
        activeSection !== "hero" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("hero"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("contact.hero", hero), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.hero"
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
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Contact Details" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Direct phone, email, and office location address info" })
        ] }),
        activeSection !== "details" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("details"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("contact.details", details), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.details"
              }
            }).then((res) => setDetails(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "details" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Phone Number" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: details.phone, onChange: (e) => setDetails({
              ...details,
              phone: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Email Address" }),
            /* @__PURE__ */ jsx("input", { type: "email", value: details.email, onChange: (e) => setDetails({
              ...details,
              email: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Physical Address" }),
          /* @__PURE__ */ jsx("input", { type: "text", value: details.address, onChange: (e) => setDetails({
            ...details,
            address: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Phone:" }),
          " ",
          details.phone
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Email:" }),
          " ",
          details.email
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Address:" }),
          " ",
          details.address
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Service Dropdown List" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Manage categories and checklist of services in the contact form" })
        ] }),
        activeSection !== "serviceGroups" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("serviceGroups"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("contact.serviceGroups", serviceGroups), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.serviceGroups"
              }
            }).then((res) => setServiceGroups(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "serviceGroups" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 pb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Service Group Categories" }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
            const groups = [...serviceGroups.groups];
            groups.push({
              title: "New Group",
              services: [{
                name: "New Service",
                desc: "Short desc"
              }]
            });
            setServiceGroups({
              ...serviceGroups,
              groups
            });
          }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
            " Add Category"
          ] })
        ] }),
        serviceGroups.groups.map((group, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex-1 grid gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "CATEGORY TITLE" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: group.title, onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].title = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const groups = serviceGroups.groups.filter((_, i) => i !== idx);
              setServiceGroups({
                ...serviceGroups,
                groups
              });
            }, className: "rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pl-4 border-l-2 border-slate-200 space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "SERVICES CHECKLIST ITEMS" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                const groups = [...serviceGroups.groups];
                groups[idx].services.push({
                  name: "New Service Item",
                  desc: "Description"
                });
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "text-[10px] text-[#FC9C44] font-bold hover:underline", children: "+ Add Service Option" })
            ] }),
            group.services.map((srv, srvIdx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsx("input", { type: "text", value: srv.name, placeholder: "Service Name", onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].services[srvIdx].name = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: srv.desc, placeholder: "Short Description", onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].services[srvIdx].desc = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
                const groups = [...serviceGroups.groups];
                groups[idx].services = groups[idx].services.filter((_, i) => i !== srvIdx);
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "text-red-500 hover:text-red-700 font-bold px-1", children: /* @__PURE__ */ jsx(Trash2, { className: "h-3 w-3" }) })
            ] }, srvIdx))
          ] })
        ] }, idx))
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block", children: [
          "Services List Categories (",
          serviceGroups.groups.length,
          "):"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3", children: serviceGroups.groups.map((group, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
          /* @__PURE__ */ jsx("span", { className: "font-black text-[#06133D] text-xs block", children: group.title }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 mt-1 text-[10px] text-slate-500 space-y-0.5", children: group.services.map((srv, i) => /* @__PURE__ */ jsx("li", { children: srv.name }, i)) })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
export {
  AdminContactCMS as component
};
