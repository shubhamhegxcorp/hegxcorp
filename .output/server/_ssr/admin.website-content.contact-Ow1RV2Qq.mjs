import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { g as getWebsiteSection, s as saveWebsiteSection } from "./router-CGOjT-Wf.mjs";
import { D as DEFAULT_CMS_SECTIONS } from "./cms-config-CJ9tlu-0.mjs";
import "../_libs/seroval.mjs";
import "../_libs/gsap__react.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { b7 as Pen, n as Check, X, at as Plus, aw as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./createSsrRpc-DcZ7Clyk.mjs";
import "./server-yv7ZiuMh.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-D6gaYuCP.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
function AdminContactCMS() {
  const [activeSection, setActiveSection] = reactExports.useState(null);
  const [hero, setHero] = reactExports.useState(null);
  const [details, setDetails] = reactExports.useState(null);
  const [serviceGroups, setServiceGroups] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[400px] items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-slate-500", children: "Loading website content..." }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#E4E7EC] pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Manage and edit all frontend Contact page sections." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Hero Section" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Intro headline and description copy" })
        ] }),
        activeSection !== "hero" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveSection("hero"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => void handleSave("contact.hero", hero), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.hero"
              }
            }).then((res) => setHero(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "hero" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: hero.tagline, onChange: (e) => setHero({
              ...hero,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Headline Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: hero.title, onChange: (e) => setHero({
              ...hero,
              title: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: hero.description, onChange: (e) => setHero({
            ...hero,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#06133D]", children: "Headline:" }),
          " ",
          hero.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          hero.description
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Contact Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Direct phone, email, and office location address info" })
        ] }),
        activeSection !== "details" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveSection("details"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => void handleSave("contact.details", details), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.details"
              }
            }).then((res) => setDetails(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "details" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: details.phone, onChange: (e) => setDetails({
              ...details,
              phone: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: details.email, onChange: (e) => setDetails({
              ...details,
              email: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Physical Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: details.address, onChange: (e) => setDetails({
            ...details,
            address: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#06133D]", children: "Phone:" }),
          " ",
          details.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#06133D]", children: "Email:" }),
          " ",
          details.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#06133D]", children: "Address:" }),
          " ",
          details.address
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Service Dropdown List" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Manage categories and checklist of services in the contact form" })
        ] }),
        activeSection !== "serviceGroups" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveSection("serviceGroups"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => void handleSave("contact.serviceGroups", serviceGroups), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "contact.serviceGroups"
              }
            }).then((res) => setServiceGroups(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "serviceGroups" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Service Group Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }),
            " Add Category"
          ] })
        ] }),
        serviceGroups.groups.map((group, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex-1 grid gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "CATEGORY TITLE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: group.title, onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].title = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              const groups = serviceGroups.groups.filter((_, i) => i !== idx);
              setServiceGroups({
                ...serviceGroups,
                groups
              });
            }, className: "rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-4 border-l-2 border-slate-200 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "SERVICES CHECKLIST ITEMS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
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
            group.services.map((srv, srvIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: srv.name, placeholder: "Service Name", onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].services[srvIdx].name = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: srv.desc, placeholder: "Short Description", onChange: (e) => {
                const groups = [...serviceGroups.groups];
                groups[idx].services[srvIdx].desc = e.target.value;
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                const groups = [...serviceGroups.groups];
                groups[idx].services = groups[idx].services.filter((_, i) => i !== srvIdx);
                setServiceGroups({
                  ...serviceGroups,
                  groups
                });
              }, className: "text-red-500 hover:text-red-700 font-bold px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
            ] }, srvIdx))
          ] })
        ] }, idx))
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-[#06133D] block", children: [
          "Services List Categories (",
          serviceGroups.groups.length,
          "):"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3", children: serviceGroups.groups.map((group, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-[#06133D] text-xs block", children: group.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-5 mt-1 text-[10px] text-slate-500 space-y-0.5", children: group.services.map((srv, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: srv.name }, i)) })
        ] }, idx)) })
      ] })
    ] })
  ] });
}
export {
  AdminContactCMS as component
};
