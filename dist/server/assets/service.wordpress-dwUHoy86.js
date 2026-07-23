import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, ArrowRight, Database, CheckCircle2, LayoutDashboard, Code2, ServerCog, ShoppingCart, MonitorSmartphone, Gauge, BarChart3, LockKeyhole, Boxes, Cpu, PlugZap, BellRing, FileCheck2, UsersRound, Workflow, ShieldCheck, Layers3, Rocket } from "lucide-react";
import { H as Header, F as Footer } from "./router-CIxUsq07.js";
import "@tanstack/react-query";
import "lenis";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "zod";
import "sonner";
import "./contact-inquiries-D8v4ql2R.js";
import "./server-D_LdMuXC.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "gsap";
import "gsap/ScrollTrigger";
import "@gsap/react";
const metrics = [{
  value: "100%",
  label: "Editable CMS",
  text: "Built so your team can update pages, images, blogs, and content without developer help."
}, {
  value: "24/7",
  label: "Online Presence",
  text: "A reliable WordPress website that keeps supporting enquiries, sales, and brand trust."
}, {
  value: "3x",
  label: "Faster Updates",
  text: "Manage content, landing pages, blogs, products, and website sections more easily."
}, {
  value: "360°",
  label: "Full Support",
  text: "Planning, UI, WordPress setup, development, optimisation, launch, and maintenance."
}];
const services = [{
  icon: LayoutDashboard,
  title: "Custom WordPress Websites",
  text: "We build custom WordPress websites tailored to your brand, pages, services, content needs, and business goals."
}, {
  icon: Code2,
  title: "WordPress Theme Development",
  text: "We create clean, responsive, and brand-focused WordPress themes with practical layouts and reusable sections."
}, {
  icon: ServerCog,
  title: "CMS Setup & Configuration",
  text: "We configure pages, menus, blogs, media, user roles, settings, forms, and editable content areas properly."
}, {
  icon: ShoppingCart,
  title: "WooCommerce Development",
  text: "We build WooCommerce stores with product pages, categories, cart, checkout, payment setup, and order flow."
}, {
  icon: MonitorSmartphone,
  title: "Responsive WordPress Design",
  text: "Your WordPress website will work smoothly across desktop, laptop, tablet, and mobile screens."
}, {
  icon: Gauge,
  title: "Speed Optimisation",
  text: "We optimise WordPress loading speed, images, caching, scripts, database usage, and overall performance."
}];
const appTypes = [{
  icon: BarChart3,
  title: "Business Websites",
  text: "Professional WordPress websites for company profiles, service pages, landing pages, and lead generation."
}, {
  icon: LockKeyhole,
  title: "Membership Websites",
  text: "Secure login areas, gated content, member dashboards, user roles, and protected WordPress sections."
}, {
  icon: Boxes,
  title: "Content Websites",
  text: "Blogs, resources, news portals, knowledge bases, and content-heavy websites that are easy to manage."
}, {
  icon: Cpu,
  title: "WooCommerce Stores",
  text: "Online stores for products, categories, payments, coupons, order management, and customer journeys."
}];
const features = ["Custom WordPress website development", "Theme setup and theme customisation", "WooCommerce store development", "Page builder setup and reusable sections", "Blog, CMS, and media management", "Forms, plugins, and third-party integrations", "Responsive website interface", "Performance, security, and maintenance"];
const architecture = [{
  title: "Content Layer",
  text: "Pages, blogs, service sections, media, menus, forms, reusable blocks, and editable content areas."
}, {
  title: "WordPress Logic Layer",
  text: "Themes, plugins, custom fields, user roles, settings, WooCommerce logic, and backend configuration."
}, {
  title: "Performance Layer",
  text: "Caching, image optimisation, clean structure, plugin review, security checks, backups, and hosting readiness."
}];
const process = [{
  title: "Discovery",
  text: "We understand your business, required pages, content needs, brand direction, plugins, integrations, and goals."
}, {
  title: "Planning",
  text: "We plan the sitemap, page structure, CMS sections, theme approach, plugin stack, and launch roadmap."
}, {
  title: "UI Design",
  text: "We design clean WordPress page layouts that match your brand and make content easy to scan."
}, {
  title: "Development",
  text: "We build pages, themes, editable sections, forms, WooCommerce features, plugin setups, and integrations."
}, {
  title: "Testing & Launch",
  text: "We test responsiveness, speed, forms, links, plugins, checkout flow, content, security basics, and launch setup."
}];
const useCases = ["Corporate WordPress websites", "Service business websites", "WooCommerce online stores", "Blogs and resource websites", "Landing pages for campaigns", "Membership and gated content sites", "Portfolio and agency websites", "WordPress redesign and migration"];
const integrations = [{
  icon: PlugZap,
  title: "Plugin Integrations",
  text: "Connect forms, SEO tools, analytics, CRM tools, payment gateways, chat widgets, email tools, and more."
}, {
  icon: BellRing,
  title: "Marketing Tools",
  text: "Set up lead forms, newsletter tools, conversion tracking, pixels, WhatsApp buttons, and campaign landing pages."
}, {
  icon: FileCheck2,
  title: "Forms & CMS",
  text: "Create enquiry forms, quote forms, editable service sections, blog structures, FAQs, and reusable content blocks."
}, {
  icon: UsersRound,
  title: "User Roles",
  text: "Configure admins, editors, authors, customers, shop managers, and custom WordPress permission levels."
}];
const outcomes = ["Easy content updates", "Better website speed", "Improved SEO foundation", "Secure admin access", "Cleaner page management", "Stronger lead generation"];
const faqs = [{
  question: "What is WordPress development?",
  answer: "WordPress development is the process of building, customising, optimising, and maintaining websites using WordPress. It can include custom themes, editable pages, blogs, WooCommerce stores, plugin setup, forms, integrations, speed optimisation, and security support."
}, {
  question: "Do you build custom WordPress websites?",
  answer: "Yes. We build custom WordPress websites based on your brand, business goals, page requirements, content structure, features, and long-term website needs."
}, {
  question: "Can you build WooCommerce websites?",
  answer: "Yes. We build WooCommerce websites with product pages, categories, cart, checkout, payment gateways, coupons, order management, and mobile-friendly shopping flows."
}, {
  question: "Will I be able to update my WordPress website myself?",
  answer: "Yes. WordPress is built for content management, and we can create editable pages, blogs, images, banners, service sections, FAQs, and other areas your team can manage."
}, {
  question: "Can you optimise my existing WordPress website?",
  answer: "Yes. We can improve speed, layout, plugin usage, Core Web Vitals, mobile responsiveness, security basics, SEO structure, forms, and content organisation."
}, {
  question: "Do you provide WordPress maintenance after launch?",
  answer: "Yes. We provide WordPress updates, plugin checks, backups, bug fixes, security reviews, performance improvements, content changes, and technical support after launch."
}];
function WordPressDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F8FAFC] text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 pb-24 pt-32 text-white lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0", style: {
          background: "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0 opacity-[0.08]", style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FC9C44] shadow-sm", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" }),
              "WordPress Development"
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-6xl", children: "WordPress Development Services" }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-lg leading-8 text-white/74", children: "Build a fast, secure, responsive, and easy-to-manage WordPress website that helps your business look professional, generate enquiries, and grow online." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E88C35]", children: [
                "Get Started",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12", children: "View Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rounded-[30px] border border-slate-200 bg-white p-5 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[24px] bg-[#06133D] p-6 text-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "WordPress System" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black", children: "Modern CMS Build" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex h-12 w-12 items-center justify-center rounded-g-[#FC9C44]", children: [
                "xl b",
                /* @__PURE__ */ jsx(Database, { className: "h-6 w-6" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: ["Editable Pages", "Theme Setup", "WooCommerce", "Secure Admin"].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/10 bg-white/10 p-4", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-3 h-5 w-5 text-[#FC9C44]" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: item })
            ] }, item)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-14 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4", children: metrics.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-[26px] bg-[#F8FAFC] p-7 ring-1 ring-slate-200", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-4xl font-black text-[#FC9C44]", children: item.value }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-black", children: item.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: item.text })
      ] }, item.label)) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "What We Build" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Complete WordPress development solutions for modern businesses" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3", children: services.map((service) => {
          const Icon = service.icon;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: service.text })
          ] }, service.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Website Types" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Built around your content, customers, and growth plans" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: appTypes.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "group rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: item.text })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "WordPress websites built for content, speed, and conversions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/70", children: "We create WordPress websites that are easy to manage, secure, responsive, fast, and structured around your services, content, products, and marketing goals." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
            "Discuss Project",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: features.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/10 p-5", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-4 h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold leading-7 text-white/80", children: item })
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Structure" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Strong WordPress foundation behind every page" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "A good WordPress website needs more than a theme. We plan the content structure, CMS setup, plugins, security, speed, forms, SEO basics, and future updates together." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-5", children: architecture.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-5 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FC9C44] text-sm font-black text-white", children: index + 1 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: item.text })
          ] })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Integrations" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Connect WordPress with the tools your business already uses" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: integrations.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200", children: [
            /* @__PURE__ */ jsx(Icon, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: item.text })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Use Cases" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "WordPress websites for real business needs" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "We help businesses move their brand, content, services, products, campaigns, and enquiries into a reliable WordPress system that is easier to manage and improve." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: useCases.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-5 font-bold ring-1 ring-slate-200", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-[#FC9C44]" }),
          item
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Work Process" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "How we develop your WordPress website" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "We follow a clear process so your WordPress website is planned properly, built cleanly, tested carefully, and launched with confidence." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-5", children: process.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#FC9C44] text-sm font-black text-white", children: index + 1 }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: item.text })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[32px] bg-[#06133D] p-8 text-white md:p-10", children: [
          /* @__PURE__ */ jsx(Workflow, { className: "mb-7 h-10 w-10 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black leading-tight", children: "Turn your website into an easy content management system" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/70", children: "Whether your team handles blogs, service pages, landing pages, products, media, campaigns, or forms, we can structure WordPress so updates feel simple and organised." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: outcomes.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-5 font-bold ring-1 ring-slate-200", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-[#FC9C44]" }),
          item
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-[#FC9C44] bg-white p-7 shadow-sm", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Secure WordPress Setup" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "We configure secure admin access, trusted plugins, backups, updates, and basic hardening for a healthier website." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-[#FC9C44] bg-white p-7 shadow-sm", children: [
          /* @__PURE__ */ jsx(Gauge, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Fast Performance" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "We focus on caching, image optimisation, clean plugin usage, lighter pages, and smoother loading experiences." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-[#FC9C44] bg-white p-7 shadow-sm", children: [
          /* @__PURE__ */ jsx(MonitorSmartphone, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Responsive Experience" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Your WordPress website is designed to feel clear and usable across desktop, tablet, and mobile devices." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl", children: [
              "Frequently",
              /* @__PURE__ */ jsx("br", {}),
              "Asked Questions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-xl font-medium text-[#2E2E2E]", children: "Find answers to the most common questions." })
          ] }),
          /* @__PURE__ */ jsx("div", { children: faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return /* @__PURE__ */ jsx("div", { className: "border-b border-[#BFD0DF]", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpenFaq(isOpen ? null : index), className: "group flex w-full items-start gap-5 py-7 text-left", children: [
              /* @__PURE__ */ jsx("span", { className: "mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]", children: isOpen ? "-" : "+" }),
              /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("span", { className: `block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"}`, children: faq.question }),
                isOpen && /* @__PURE__ */ jsx("span", { className: "mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]", children: faq.answer })
              ] })
            ] }) }, faq.question);
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden rounded-[32px] bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a WordPress website built for real business growth?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your website idea, redesign requirement, WooCommerce plan, blog structure, or content management need. We will help turn it into a clear WordPress development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[24px] border border-white/10 bg-white/10 p-6", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, WordPress setup, theme development, WooCommerce, plugins, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
            "Contact Us",
            /* @__PURE__ */ jsx(Rocket, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  WordPressDevelopmentPage as component
};
