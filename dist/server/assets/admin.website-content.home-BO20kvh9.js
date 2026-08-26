import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Edit2, Check, X, Plus, ArrowUp, ArrowDown, Trash2 } from "lucide-react";
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
function AdminHomeCMS() {
  const [activeSection, setActiveSection] = useState(null);
  const [hero, setHero] = useState(null);
  const [services, setServices] = useState(null);
  const [features, setFeatures] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [faq, setFaq] = useState(null);
  const [cta, setCta] = useState(null);
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, servicesData, featuresData, testimonialsData, faqData, ctaData, footerData] = await Promise.all([getWebsiteSection({
          data: {
            key: "home.hero"
          }
        }), getWebsiteSection({
          data: {
            key: "home.services"
          }
        }), getWebsiteSection({
          data: {
            key: "home.features"
          }
        }), getWebsiteSection({
          data: {
            key: "home.testimonials"
          }
        }), getWebsiteSection({
          data: {
            key: "home.faq"
          }
        }), getWebsiteSection({
          data: {
            key: "home.cta"
          }
        }), getWebsiteSection({
          data: {
            key: "home.footer"
          }
        })]);
        setHero(heroData || DEFAULT_CMS_SECTIONS["home.hero"]);
        setServices(servicesData || DEFAULT_CMS_SECTIONS["home.services"]);
        setFeatures(featuresData || DEFAULT_CMS_SECTIONS["home.features"]);
        setTestimonials(testimonialsData || DEFAULT_CMS_SECTIONS["home.testimonials"]);
        setFaq(faqData || DEFAULT_CMS_SECTIONS["home.faq"]);
        setCta(ctaData || DEFAULT_CMS_SECTIONS["home.cta"]);
        setFooter(footerData || DEFAULT_CMS_SECTIONS["home.footer"]);
      } catch (err) {
        console.error("Failed to load CMS data:", err);
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
    /* @__PURE__ */ jsx("div", { className: "border-b border-[#E4E7EC] pb-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Manage and edit all frontend homepage sections. Your changes take effect immediately on the live website." }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Hero Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "First section at the top of the homepage" })
        ] }),
        activeSection !== "hero" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("hero"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.hero", hero), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.hero"
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
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Category Badge" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.badge, onChange: (e) => setHero({
              ...hero,
              badge: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Headline" }),
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
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Primary Button Label" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.buttonText, onChange: (e) => setHero({
              ...hero,
              buttonText: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Primary Button URL" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.buttonUrl, onChange: (e) => setHero({
              ...hero,
              buttonUrl: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Secondary Button Label" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.secondaryButtonText, onChange: (e) => setHero({
              ...hero,
              secondaryButtonText: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Secondary Button URL" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: hero.secondaryButtonUrl, onChange: (e) => setHero({
              ...hero,
              secondaryButtonUrl: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Badge:" }),
          " ",
          hero.badge
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline:" }),
          " ",
          hero.title
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          hero.description
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Primary Button:" }),
            " ",
            hero.buttonText,
            " ",
            "(",
            hero.buttonUrl,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Secondary Button:" }),
            " ",
            hero.secondaryButtonText,
            " (",
            hero.secondaryButtonUrl,
            ")"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Services Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Capabilities listing grid and text" })
        ] }),
        activeSection !== "services" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("services"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.services", services), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.services"
              }
            }).then((res) => setServices(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "services" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: services.tagline, onChange: (e) => setServices({
              ...services,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5 sm:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: services.heading, onChange: (e) => setServices({
              ...services,
              heading: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 2, value: services.description, onChange: (e) => setServices({
            ...services,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Service Items" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const newServices = [...services.services];
              newServices.push({
                slug: "NEW",
                title: "New Service",
                desc: "Description",
                href: "/service/seo",
                url: "hegxcorp › seo"
              });
              setServices({
                ...services,
                services: newServices
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add Service"
            ] })
          ] }),
          services.services.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5 justify-center", children: [
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === 0, onClick: () => {
                const items = [...services.services];
                const temp = items[idx];
                items[idx] = items[idx - 1];
                items[idx - 1] = temp;
                setServices({
                  ...services,
                  services: items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === services.services.length - 1, onClick: () => {
                const items = [...services.services];
                const temp = items[idx];
                items[idx] = items[idx + 1];
                items[idx + 1] = temp;
                setServices({
                  ...services,
                  services: items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 grid gap-4 sm:grid-cols-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "SLUG" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.slug, onChange: (e) => {
                  const items = [...services.services];
                  items[idx].slug = e.target.value;
                  setServices({
                    ...services,
                    services: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "TITLE" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.title, onChange: (e) => {
                  const items = [...services.services];
                  items[idx].title = e.target.value;
                  setServices({
                    ...services,
                    services: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "HREF" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.href, onChange: (e) => {
                  const items = [...services.services];
                  items[idx].href = e.target.value;
                  setServices({
                    ...services,
                    services: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "MOCKUP URL" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.url, onChange: (e) => {
                  const items = [...services.services];
                  items[idx].url = e.target.value;
                  setServices({
                    ...services,
                    services: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "sm:col-span-4 grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "DESCRIPTION" }),
                /* @__PURE__ */ jsx("textarea", { rows: 1, value: item.desc, onChange: (e) => {
                  const items = [...services.services];
                  items[idx].desc = e.target.value;
                  setServices({
                    ...services,
                    services: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const items = services.services.filter((_, i) => i !== idx);
              setServices({
                ...services,
                services: items
              });
            }, className: "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) }) })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          services.tagline,
          " ·",
          " ",
          services.heading
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          services.description
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block mb-2", children: [
            "Service Items (",
            services.services.length,
            "):"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-2 sm:grid-cols-2 md:grid-cols-3", children: services.services.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider block", children: item.slug }),
            /* @__PURE__ */ jsx("span", { className: "font-black text-[#06133D] text-xs block mt-1", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed", children: item.desc })
          ] }, idx)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Features Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: '"Why Hegxcorp" outcome-focused pillars' })
        ] }),
        activeSection !== "features" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("features"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.features", features), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.features"
              }
            }).then((res) => setFeatures(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "features" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: features.tagline, onChange: (e) => setFeatures({
              ...features,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5 sm:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: features.heading, onChange: (e) => setFeatures({
              ...features,
              heading: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 2, value: features.description, onChange: (e) => setFeatures({
            ...features,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Feature Items" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const newItems = [...features.items];
              newItems.push({
                title: "New Feature",
                description: "Details..."
              });
              setFeatures({
                ...features,
                items: newItems
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add Feature"
            ] })
          ] }),
          features.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5 justify-center", children: [
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === 0, onClick: () => {
                const items = [...features.items];
                const temp = items[idx];
                items[idx] = items[idx - 1];
                items[idx - 1] = temp;
                setFeatures({
                  ...features,
                  items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === features.items.length - 1, onClick: () => {
                const items = [...features.items];
                const temp = items[idx];
                items[idx] = items[idx + 1];
                items[idx + 1] = temp;
                setFeatures({
                  ...features,
                  items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "FEATURE TITLE" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.title, onChange: (e) => {
                  const items = [...features.items];
                  items[idx].title = e.target.value;
                  setFeatures({
                    ...features,
                    items
                  });
                }, className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "FEATURE DESCRIPTION" }),
                /* @__PURE__ */ jsx("textarea", { rows: 2, value: item.description, onChange: (e) => {
                  const items = [...features.items];
                  items[idx].description = e.target.value;
                  setFeatures({
                    ...features,
                    items
                  });
                }, className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const items = features.items.filter((_, i) => i !== idx);
              setFeatures({
                ...features,
                items
              });
            }, className: "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) }) })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          features.tagline,
          " ·",
          " ",
          features.heading
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          features.description
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block mb-2", children: [
            "Feature Pillars (",
            features.items.length,
            "):"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: features.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("span", { className: "font-black text-[#06133D] text-xs block", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 mt-1", children: item.description })
          ] }, idx)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Testimonials Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Customer feedback and outcome metrics" })
        ] }),
        activeSection !== "testimonials" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("testimonials"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.testimonials", testimonials), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.testimonials"
              }
            }).then((res) => setTestimonials(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "testimonials" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: testimonials.tagline, onChange: (e) => setTestimonials({
              ...testimonials,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5 sm:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: testimonials.heading, onChange: (e) => setTestimonials({
              ...testimonials,
              heading: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "Testimonials" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const newItems = [...testimonials.testimonials];
              newItems.push({
                name: "Customer Name",
                designation: "Designation",
                company: "Company",
                review: "Review...",
                rating: 5,
                resultValue: "+100%",
                resultLabel: "Metric",
                initials: "XX"
              });
              setTestimonials({
                ...testimonials,
                testimonials: newItems
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add Testimonial"
            ] })
          ] }),
          testimonials.testimonials.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 grid gap-4 sm:grid-cols-4", children: [
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "NAME" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.name, onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].name = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "DESIGNATION" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.designation, onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].designation = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "COMPANY" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.company || "", onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].company = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "INITIALS (2 CHARS)" }),
                /* @__PURE__ */ jsx("input", { type: "text", maxLength: 2, value: item.initials || "", onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].initials = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "RESULT VALUE (E.G. 5.2x)" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.resultValue || "", onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].resultValue = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "RESULT LABEL" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.resultLabel || "", onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].resultLabel = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "RATING (1-5)" }),
                /* @__PURE__ */ jsx("input", { type: "number", min: 1, max: 5, value: item.rating, onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].rating = parseInt(e.target.value) || 5;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "sm:col-span-4 grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "REVIEW QUOTE" }),
                /* @__PURE__ */ jsx("textarea", { rows: 2, value: item.review, onChange: (e) => {
                  const items = [...testimonials.testimonials];
                  items[idx].review = e.target.value;
                  setTestimonials({
                    ...testimonials,
                    testimonials: items
                  });
                }, className: "w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus:border-[#FC9C44]" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const items = testimonials.testimonials.filter((_, i) => i !== idx);
              setTestimonials({
                ...testimonials,
                testimonials: items
              });
            }, className: "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) }) })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          testimonials.tagline,
          " · ",
          testimonials.heading
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block mb-2", children: [
            "Testimonial Reviews (",
            testimonials.testimonials.length,
            "):"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.testimonials.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-black text-[#06133D]", children: item.name }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] bg-[#FC9C44]/10 text-[#C96A13] font-bold px-1.5 py-0.5 rounded", children: item.resultValue || "Rating: " + item.rating })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-slate-400 block mt-0.5", children: [
              item.designation,
              " at ",
              item.company
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-600 leading-relaxed mt-2 italic", children: [
              '"',
              item.review,
              '"'
            ] })
          ] }, idx)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "FAQ Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Accordion questions and answers on Home page" })
        ] }),
        activeSection !== "faq" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("faq"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.faq", faq), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.faq"
              }
            }).then((res) => setFaq(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "faq" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Tagline" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: faq.tagline, onChange: (e) => setFaq({
              ...faq,
              tagline: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5 sm:col-span-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: faq.heading, onChange: (e) => setFaq({
              ...faq,
              heading: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-t border-slate-100 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-[#06133D]", children: "FAQ Items" }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              const newItems = [...faq.items];
              newItems.push({
                question: "New Question",
                answer: "Answer details..."
              });
              setFaq({
                ...faq,
                items: newItems
              });
            }, className: "inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
              " Add FAQ"
            ] })
          ] }),
          faq.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5 justify-center", children: [
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === 0, onClick: () => {
                const items = [...faq.items];
                const temp = items[idx];
                items[idx] = items[idx - 1];
                items[idx - 1] = temp;
                setFaq({
                  ...faq,
                  items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsx("button", { type: "button", disabled: idx === faq.items.length - 1, onClick: () => {
                const items = [...faq.items];
                const temp = items[idx];
                items[idx] = items[idx + 1];
                items[idx + 1] = temp;
                setFaq({
                  ...faq,
                  items
                });
              }, className: "rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40", children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-3 w-3" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "QUESTION" }),
                /* @__PURE__ */ jsx("input", { type: "text", value: item.question, onChange: (e) => {
                  const items = [...faq.items];
                  items[idx].question = e.target.value;
                  setFaq({
                    ...faq,
                    items
                  });
                }, className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "grid gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400", children: "ANSWER" }),
                /* @__PURE__ */ jsx("textarea", { rows: 2, value: item.answer, onChange: (e) => {
                  const items = [...faq.items];
                  items[idx].answer = e.target.value;
                  setFaq({
                    ...faq,
                    items
                  });
                }, className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
              const items = faq.items.filter((_, i) => i !== idx);
              setFaq({
                ...faq,
                items
              });
            }, className: "rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) }) })
          ] }, idx))
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Headline info:" }),
          " ",
          faq.tagline,
          " ·",
          " ",
          faq.heading
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-[#06133D] block mb-2", children: [
            "FAQ Items (",
            faq.items.length,
            "):"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: faq.items.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-slate-100 p-3 bg-slate-50/50", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-black text-[#06133D] text-xs block", children: [
              "Q: ",
              item.question
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-500 mt-1", children: [
              "A: ",
              item.answer
            ] })
          ] }, idx)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "CTA Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: `"Let's identify what's limiting your growth" call-to-action banner` })
        ] }),
        activeSection !== "cta" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("cta"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.cta", cta), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.cta"
              }
            }).then((res) => setCta(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "cta" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Badge/Eyebrow" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: cta.badge, onChange: (e) => setCta({
              ...cta,
              badge: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Heading" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: cta.heading, onChange: (e) => setCta({
              ...cta,
              heading: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Description" }),
          /* @__PURE__ */ jsx("textarea", { rows: 3, value: cta.description, onChange: (e) => setCta({
            ...cta,
            description: e.target.value
          }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Button Label" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: cta.buttonText, onChange: (e) => setCta({
              ...cta,
              buttonText: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Button URL" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: cta.buttonUrl, onChange: (e) => setCta({
              ...cta,
              buttonUrl: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Eyebrow:" }),
          " ",
          cta.badge
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Heading:" }),
          " ",
          cta.heading
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Description:" }),
          " ",
          cta.description
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Button:" }),
          " ",
          cta.buttonText,
          " (",
          cta.buttonUrl,
          ")"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-[#F2F4F7] pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-[#06133D]", children: "Footer Section" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Copyright, Quick links, and contact text" })
        ] }),
        activeSection !== "footer" ? /* @__PURE__ */ jsxs("button", { onClick: () => setActiveSection("footer"), className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx(Edit2, { className: "h-3.5 w-3.5" }),
          " Edit"
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => void handleSave("home.footer", footer), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setActiveSection(null);
            getWebsiteSection({
              data: {
                key: "home.footer"
              }
            }).then((res) => setFooter(res));
          }, className: "inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
            " Cancel"
          ] })
        ] })
      ] }),
      activeSection === "footer" ? /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Copyright Text" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: footer.copyright, onChange: (e) => setFooter({
              ...footer,
              copyright: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Contact Phone" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: footer.phone, onChange: (e) => setFooter({
              ...footer,
              phone: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Contact Email" }),
            /* @__PURE__ */ jsx("input", { type: "email", value: footer.email, onChange: (e) => setFooter({
              ...footer,
              email: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "grid gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Contact Address" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: footer.address, onChange: (e) => setFooter({
              ...footer,
              address: e.target.value
            }), className: "w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]" })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Copyright:" }),
          " ",
          footer.copyright
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Phone:" }),
          " ",
          footer.phone
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Email:" }),
          " ",
          footer.email
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#06133D]", children: "Address:" }),
          " ",
          footer.address
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminHomeCMS as component
};
