import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, ArrowRight, Database, CheckCircle2, LayoutDashboard, Code2, ServerCog, ShoppingCart, MonitorSmartphone, Gauge, PlugZap, BellRing, FileCheck2, UsersRound, Layers3, Rocket } from "lucide-react";
import { H as Header, F as Footer } from "./router-CVTG3WII.js";
import "@tanstack/react-query";
import "lenis";
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "zod";
import "sonner";
import "./contact-inquiries-TJom85B0.js";
import "./server-BjMtisnP.js";
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
  label: "Custom Build"
}, {
  value: "24/7",
  label: "Browser Access"
}, {
  value: "3x",
  label: "Faster Workflows"
}, {
  value: "360°",
  label: "Full Support"
}];
const services = [{
  icon: LayoutDashboard,
  title: "Custom Web Applications",
  text: "Business-specific web apps built around your workflows, users, data, and long-term growth goals."
}, {
  icon: Code2,
  title: "Frontend Application Development",
  text: "Fast, responsive, and user-friendly interfaces for dashboards, portals, SaaS products, and internal tools."
}, {
  icon: ServerCog,
  title: "Backend Development",
  text: "Secure backend systems for authentication, APIs, databases, user roles, business logic, and automation."
}, {
  icon: ShoppingCart,
  title: "SaaS & Portal Development",
  text: "SaaS platforms, customer portals, admin panels, booking systems, CRM tools, and business web apps."
}, {
  icon: MonitorSmartphone,
  title: "Responsive Application UI",
  text: "Interfaces that work smoothly across desktop, laptop, tablet, and mobile screens."
}, {
  icon: Gauge,
  title: "Performance Optimisation",
  text: "Optimised loading, database queries, APIs, frontend code, and overall application performance."
}];
const appTypes = [["Business Dashboards", "Track users, enquiries, orders, reports, team activity, and key business data."], ["Customer Portals", "Give customers a secure place to manage requests, submit forms, and track updates."], ["Internal Tools", "Replace spreadsheets and manual processes with systems built around real operations."], ["Automation Systems", "Automate approvals, notifications, data movement, and repetitive admin tasks."]];
const features = ["Custom web application development", "Admin dashboard and user portal", "SaaS platform development", "Authentication and user role management", "Backend API and database development", "Third-party API integrations", "Responsive application interface", "Performance, security, and maintenance"];
const architecture = [{
  title: "Clean UI Layer",
  text: "Responsive screens, reusable components, navigation, forms, tables, filters, and user-friendly workflows."
}, {
  title: "Secure Logic Layer",
  text: "Authentication, permissions, business rules, validations, protected routes, and safe API communication."
}, {
  title: "Reliable Data Layer",
  text: "Database structure, records, user data, transactions, analytics, backups, and scalable data handling."
}];
const process = [["Discovery", "Understand your business process, users, required features, workflows, data needs, and goals."], ["Planning", "Plan the structure, roles, database, screens, backend logic, integrations, and roadmap."], ["UI Design", "Design practical application screens that make complex workflows simple for users."], ["Development", "Build frontend screens, backend systems, APIs, databases, authentication, and core features."], ["Testing & Launch", "Test features, responsiveness, security, forms, APIs, user flows, and deploy the app."]];
const useCases = ["CRM and lead management systems", "Booking and appointment platforms", "Vendor, customer, and employee portals", "Inventory and order management tools", "Reporting and analytics dashboards", "Subscription-based SaaS products", "Approval and document workflows", "Learning, support, and service portals"];
const integrations = [{
  icon: PlugZap,
  title: "API Integrations",
  text: "Connect CRMs, payment gateways, maps, email tools, WhatsApp, analytics, accounting software, and more."
}, {
  icon: BellRing,
  title: "Notifications",
  text: "Add email, SMS, WhatsApp, dashboard alerts, status updates, reminders, and workflow notifications."
}, {
  icon: FileCheck2,
  title: "Forms & Reports",
  text: "Capture data, generate reports, export records, review submissions, and manage business information clearly."
}, {
  icon: UsersRound,
  title: "User Roles",
  text: "Create admins, staff users, customers, managers, and custom permission levels for controlled access."
}];
const faqs = [{
  question: "What is web application development?",
  answer: "Web application development is the process of building interactive software that runs in a browser, such as dashboards, portals, SaaS platforms, booking systems, CRM tools, and internal business applications."
}, {
  question: "Do you build custom web applications?",
  answer: "Yes. We build custom web applications based on your business workflow, users, features, data structure, integrations, and long-term goals."
}, {
  question: "Can you build dashboards and admin panels?",
  answer: "Yes. We build dashboards, admin panels, customer portals, analytics views, user management systems, and internal tools."
}, {
  question: "Will my web application be secure?",
  answer: "Yes. We build web applications with secure authentication, user roles, protected routes, safe API structure, and reliable backend practices."
}, {
  question: "Can you integrate third-party APIs?",
  answer: "Yes. We can connect your web application with CRMs, payment gateways, analytics tools, email systems, maps, WhatsApp tools, accounting software, and other APIs."
}, {
  question: "Do you provide support after launch?",
  answer: "Yes. We provide maintenance, bug fixes, feature improvements, performance optimisation, updates, and technical support after launch."
}];
function WebApplicationPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-[#06133D]", children: [
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
              "Web Application"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-6xl", children: [
              "Web Application ",
              " Services"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-base leading-8 text-white/74 md:text-lg", children: "Build a secure, scalable, and high-performance web application that simplifies business operations, improves user experience, and supports long-term growth." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E88C35]", children: [
                "Get Started",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12", children: "View Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#FC9C44]/20" }),
            /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[32px] bg-[#06133D] p-6 text-white shadow-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Application Stack" }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black", children: "Modern App Build" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6" }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-7 space-y-5", children: ["User Dashboards", "Backend Systems", "API Integration", "Secure Login"].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: item }),
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#FC9C44]" })
              ] }, item)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "border-y border-slate-200 bg-white px-6 py-10 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-8 md:grid-cols-4", children: metrics.map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-4xl font-black text-[#FC9C44]", children: item.value }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-bold text-[#06133D]", children: item.label })
      ] }, item.label)) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "What We Build" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Complete web application solutions for modern businesses" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "Instead of forcing your team into ready-made software, we build browser-based systems that match your exact workflow, data structure, approval process, reporting needs, user roles, and daily operations." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-8 text-slate-500", children: "Every module is planned to reduce manual work, improve visibility, and give your team a cleaner way to manage tasks, customers, requests, and business information from one secure application." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base leading-8 text-slate-500", children: "Whether you need a dashboard, customer portal, SaaS platform, booking system, CRM workflow, or internal management tool, the application is shaped around how your business actually runs." })
        ] }),
        /* @__PURE__ */ jsx("div", { children: services.map((service, index) => {
          const Icon = service.icon;
          const isLast = index === services.length - 1;
          return /* @__PURE__ */ jsxs("div", { className: `grid gap-5 py-7 md:grid-cols-[56px_1fr] ${isLast ? "" : "border-b border-slate-200"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: service.text })
            ] })
          ] }, service.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "App Types" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Built around your workflow, not generic templates" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-10 md:grid-cols-2", children: appTypes.map(([title, text], index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 border-t border-slate-300 pt-7", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-5xl font-black text-[#FC9C44]/40", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 leading-8 text-slate-500", children: text })
          ] })
        ] }, title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Applications built for workflows, users, and scale" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/70", children: "We create web applications that are easy to use, secure, scalable, fast, and structured around the way your team and customers actually work." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
            "Discuss Project",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "columns-1 gap-10 sm:columns-2", children: features.map((item) => /* @__PURE__ */ jsxs("div", { className: "mb-5 flex break-inside-avoid items-start gap-3 border-b border-white/10 pb-5", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold leading-7 text-white/80", children: item })
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Architecture" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Strong structure behind every screen" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "Good web applications need more than attractive screens. We plan the interface, logic, database, security, integrations, and future improvements together." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative border-l-2 border-slate-200 pl-8", children: architecture.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "relative pb-10 last:pb-0", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full bg-[#FC9C44] text-xs font-black text-white", children: index + 1 }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-sm leading-7 text-slate-500", children: item.text })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Integrations" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Connect your app with the tools your business already uses" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-300 border-y border-slate-300", children: integrations.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "grid gap-5 py-7 md:grid-cols-[56px_0.45fr_1fr] md:items-center", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-slate-500", children: item.text })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Use Cases" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Web apps for real business operations" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "We help businesses move important workflows into reliable digital systems that are easier to manage, measure, and improve." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-x-8 gap-y-5 sm:grid-cols-2", children: useCases.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-slate-200 pb-5 font-bold", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-[#FC9C44]" }),
          item
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Work Process" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "How we develop your web application" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-y border-slate-300", children: process.map(([title, text], index) => /* @__PURE__ */ jsxs("div", { className: "grid gap-4 border-b border-slate-300 py-7 last:border-b-0 md:grid-cols-[90px_0.35fr_1fr]", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-3xl font-black text-[#FC9C44]", children: [
            "0",
            index + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-7 text-slate-500", children: text })
        ] }, title)) })
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
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a secure web application built for real business workflows?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We will help you turn it into a clear development roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(Layers3, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one place." }),
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
  WebApplicationPage as component
};
