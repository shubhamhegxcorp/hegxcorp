import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, ArrowRight, LayoutDashboard, CheckCircle2, Code2, ShoppingCart, Smartphone, Gauge, ShieldCheck, ChevronRight, Target, Search, Users, MonitorSmartphone, Database, LineChart, Building2 } from "lucide-react";
import { H as Header, F as Footer } from "./router-Fvt5Lui3.js";
import "@tanstack/react-query";
import "./contact-inquiries-7TK3gyta.js";
import "./server-Bg4GKRDW.js";
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
import "clsx";
import "tailwind-merge";
import "framer-motion";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "sonner";
import "gsap";
import "gsap/ScrollTrigger";
import "@gsap/react";
const growthMetrics = [{
  value: "100%",
  title: "Responsive Builds",
  description: "Every website is planned for mobile, tablet, laptop, and desktop so users get a smooth experience on any screen."
}, {
  value: "90+",
  title: "Performance Target",
  description: "We focus on clean code, optimised assets, fast-loading pages, and better Core Web Vitals."
}, {
  value: "360°",
  title: "Design To Launch",
  description: "From planning and UI design to development, testing, launch, and maintenance, we support the complete website journey."
}, {
  value: "24/7",
  title: "Online Presence",
  description: "Your website keeps explaining your services, building trust, and capturing enquiries even when your team is offline."
}];
const websiteCapabilities = [{
  icon: LayoutDashboard,
  title: "Custom Website Design",
  description: "We design clean, conversion-focused websites that communicate your brand clearly and guide visitors toward action.",
  points: ["Brand-focused visual direction", "Clear page layouts and section flow", "Service pages designed for enquiries"]
}, {
  icon: Code2,
  title: "Custom Development",
  description: "We build scalable websites with modern frontend and backend systems tailored to your business requirements.",
  points: ["Reusable components", "Clean frontend structure", "Custom features and business logic"]
}, {
  icon: ShoppingCart,
  title: "Ecommerce Development",
  description: "We create ecommerce websites with product pages, checkout flows, payment integrations, and conversion-focused shopping experiences.",
  points: ["Product listing and detail pages", "Cart, checkout, and payment setup", "Mobile-friendly shopping journeys"]
}, {
  icon: Smartphone,
  title: "Responsive Experience",
  description: "We make sure your website works smoothly across mobile, tablet, and desktop screens with polished responsive layouts.",
  points: ["Mobile-first layouts", "Readable content on all devices", "Touch-friendly buttons and forms"]
}, {
  icon: Gauge,
  title: "Speed Optimisation",
  description: "We optimise loading speed, Core Web Vitals, image delivery, code structure, and performance for better user experience.",
  points: ["Optimised images and assets", "Faster page loading", "Better technical foundation"]
}, {
  icon: ShieldCheck,
  title: "Website Maintenance",
  description: "We help keep your website secure, updated, backed up, and running reliably after launch.",
  points: ["Security and updates", "Bug fixes and improvements", "New page and content support"]
}];
const developmentServices = [{
  title: "Website Design",
  answer: "We create modern website layouts that match your brand, improve user experience, and support business goals like leads, sales, enquiries, and trust-building. Each page is planned with clear content hierarchy, strong visuals, and practical calls to action."
}, {
  title: "Frontend Development",
  answer: "We develop fast and responsive interfaces using modern frontend technologies so your website feels smooth and professional across devices. We focus on reusable components, clean code, animations where useful, and reliable browser behaviour."
}, {
  title: "Backend Development",
  answer: "We build backend systems for forms, dashboards, content management, APIs, user data, admin panels, and business workflows so your website can support real operations beyond static pages."
}, {
  title: "CMS Development",
  answer: "We build editable websites where your team can update pages, blogs, images, service content, FAQs, banners, and basic website sections without developer help."
}, {
  title: "Ecommerce Website",
  answer: "We build online stores with product listings, category pages, cart, checkout, payments, order handling, promotional sections, and conversion-focused product experiences."
}, {
  title: "Landing Pages",
  answer: "We create campaign landing pages for ads, lead generation, service promotions, product launches, events, and special offers with focused messaging and strong CTAs."
}, {
  title: "Website Redesign",
  answer: "We redesign outdated websites into cleaner, faster, more conversion-focused digital experiences with improved layout, structure, content flow, mobile usability, and trust signals."
}, {
  title: "Maintenance & Support",
  answer: "We provide ongoing support for updates, bug fixes, backups, security checks, performance improvements, content changes, new sections, and technical help after launch."
}];
const processItems = [{
  title: "Discovery",
  answer: "We understand your business, target audience, goals, competitors, required pages, features, brand direction, and conversion priorities before starting the build."
}, {
  title: "Strategy",
  answer: "We plan the website structure, user journey, page flow, content direction, technology stack, integrations, and launch roadmap."
}, {
  title: "Design & Development",
  answer: "We design the interface and develop the website with responsive layouts, clean code, integrations, forms, CMS support, and performance best practices."
}, {
  title: "Testing & Launch",
  answer: "We test the website across devices, browsers, speed, forms, links, CTAs, content sections, and key user flows before launching it live."
}, {
  title: "Improve & Maintain",
  answer: "After launch, we monitor performance, fix issues, improve conversion sections, add new pages, and keep the website updated as your business grows."
}];
const proofPoints = [{
  icon: Target,
  title: "Conversion-Focused Pages",
  description: "We structure pages to explain your offer clearly, reduce confusion, and guide visitors toward enquiries, calls, purchases, or demo requests."
}, {
  icon: Search,
  title: "SEO-Friendly Foundation",
  description: "We build with clear headings, fast pages, readable structure, metadata readiness, and content sections that support future SEO growth."
}, {
  icon: Users,
  title: "Better User Journey",
  description: "Navigation, content blocks, proof sections, service details, and CTAs are planned so users can find what they need quickly."
}, {
  icon: ShieldCheck,
  title: "Trust-Building Content",
  description: "We add proof sections, clear service details, credibility signals, and helpful answers so visitors feel confident before contacting you."
}];
const techFeatures = [{
  icon: MonitorSmartphone,
  title: "Responsive UI",
  description: "Flexible layouts, readable text, balanced spacing, and smooth browsing across real device sizes."
}, {
  icon: Database,
  title: "CMS & Dynamic Content",
  description: "Editable service pages, blogs, resources, FAQs, banners, images, and structured website content."
}, {
  icon: Globe2,
  title: "Third-Party Integrations",
  description: "Lead forms, CRM connections, payment gateways, analytics, maps, chat tools, and API integrations."
}, {
  icon: LineChart,
  title: "Tracking & Analytics",
  description: "Analytics, conversion tracking, event setup, and reporting foundations for better marketing decisions."
}];
const industries = ["Corporate", "Healthcare", "Education", "Real Estate", "Ecommerce", "Manufacturing", "SaaS", "Hospitality", "Professional Services", "Logistics", "Finance", "Technology"];
const faqs = [{
  question: "What are website development services?",
  answer: "Website development services include planning, designing, building, testing, launching, and maintaining a website for your business. It can include UI/UX design, frontend development, backend systems, CMS setup, ecommerce features, integrations, performance optimisation, and support."
}, {
  question: "How long does website development take?",
  answer: "A basic business website can take 2 to 4 weeks. A custom website, CMS website, or ecommerce project can take 4 to 8 weeks or more depending on pages, features, content, integrations, approvals, and testing requirements."
}, {
  question: "Do you build mobile responsive websites?",
  answer: "Yes. Every website is built to work properly across mobile, tablet, laptop, and desktop screens with responsive layouts, readable content, and touch-friendly interactions."
}, {
  question: "Can you redesign my existing website?",
  answer: "Yes. We can redesign your current website with better structure, speed, visuals, SEO basics, mobile usability, and conversion-focused sections."
}, {
  question: "Can you build ecommerce websites?",
  answer: "Yes. We can build ecommerce websites with product catalogues, categories, product detail pages, cart, checkout, payment gateway setup, order flow, and mobile-friendly shopping experiences."
}, {
  question: "Will I be able to update website content myself?",
  answer: "Yes, if CMS functionality is included. We can create editable pages, blogs, banners, service sections, images, FAQs, and other content areas your team can manage."
}, {
  question: "Do you provide website maintenance after launch?",
  answer: "Yes. Maintenance can include updates, bug fixes, backups, security checks, performance improvements, new page additions, content changes, and technical support."
}, {
  question: "Why should a business invest in professional website development?",
  answer: "A professionally developed website improves credibility, user experience, speed, mobile usability, lead quality, campaign performance, and long-term scalability. It becomes the foundation for SEO, paid ads, social media, content marketing, and sales conversations."
}];
function WebsiteDevelopmentPage() {
  const [openService, setOpenService] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);
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
              "Website Development"
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-6xl", children: "Website Development Services" }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-base leading-8 text-white/74 md:text-lg", children: "Build a fast, responsive, and conversion-focused website that helps your business attract visitors, generate leads, build credibility, and grow online." }),
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
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Website System" }),
                  /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black", children: "Built For Growth" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]", children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "h-6 w-6" }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-7 space-y-5", children: ["Responsive Layouts", "Fast Loading Pages", "Conversion Sections", "CMS & Integrations"].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: item }),
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#FC9C44]" })
              ] }, item)) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "border-y border-slate-200 bg-white px-6 py-10 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-8 md:grid-cols-4", children: growthMetrics.map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-4xl font-black text-[#FC9C44]", children: item.value }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-bold text-[#06133D]", children: item.title })
      ] }, item.title)) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Why It Matters" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Your website should do more than exist online" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-base leading-8 text-slate-600", children: [
          /* @__PURE__ */ jsx("p", { children: "A strong website helps visitors understand your business, trust your expertise, compare your services, and take the next step. It supports SEO, paid ads, social media, email campaigns, sales conversations, and everyday brand credibility." }),
          /* @__PURE__ */ jsx("p", { children: "We combine UI/UX design, content structure, clean development, speed, responsive behaviour, integrations, and ongoing support so your website becomes a practical growth asset, not just a digital brochure." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-28 lg:self-start", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Website Capabilities" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Complete website systems for digital growth" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "From first impression to final enquiry, every website section is planned to improve clarity, speed, trust, and conversion." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 border-y border-slate-200 py-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.18em] text-slate-400", children: "Focus Areas" }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-4", children: ["Clear page structure", "Strong service storytelling", "Conversion-focused calls to action", "Responsive layouts for every screen", "Speed, SEO, and integration readiness"].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm font-bold leading-6 text-[#06133D]", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#FC9C44]" }),
              item
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "The goal is to make your website easier to understand, easier to manage, and easier to scale as your business grows." })
        ] }),
        /* @__PURE__ */ jsx("div", { children: websiteCapabilities.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === websiteCapabilities.length - 1;
          return /* @__PURE__ */ jsxs("div", { className: `grid gap-5 py-7 md:grid-cols-[56px_1fr] ${isLast ? "" : "border-b border-slate-200"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { size: 22, strokeWidth: 1.8 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: item.description }),
              /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-3 sm:grid-cols-3", children: item.points.map((point) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm font-bold text-[#06133D]", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0 text-[#FC9C44]" }),
                point
              ] }, point)) })
            ] })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Services & Process" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "From idea to launch" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500", children: "We turn your website requirement into a structured digital product through planning, design, development, testing, launch, and long-term improvement." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid overflow-hidden border-y border-slate-300 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white py-4 pr-0 lg:pr-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-black", children: "Services" }),
            developmentServices.map((item, index) => {
              const isOpen = openService === index;
              return /* @__PURE__ */ jsxs("div", { className: "border-b border-slate-200 last:border-b-0", children: [
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpenService(isOpen ? null : index), className: "group flex w-full items-center justify-between gap-6 py-6 text-left", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-[#06133D]", children: item.title }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: `h-5 w-5 shrink-0 text-[#FC9C44] transition ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}` })
                ] }),
                isOpen && /* @__PURE__ */ jsx("p", { className: "pb-6 pr-8 text-sm leading-7 text-slate-500", children: item.answer })
              ] }, item.title);
            })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#06133D] p-6 text-white lg:p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-black", children: "Process" }),
            processItems.map((item, index) => {
              const isOpen = openProcess === index;
              return /* @__PURE__ */ jsxs("div", { className: "border-b border-white/10 last:border-b-0", children: [
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpenProcess(isOpen ? null : index), className: "group flex w-full items-center justify-between gap-6 py-6 text-left", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-4 text-lg font-bold", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#FC9C44] text-sm text-white", children: index + 1 }),
                    item.title
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: `h-5 w-5 shrink-0 text-[#FC9C44] transition ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}` })
                ] }),
                isOpen && /* @__PURE__ */ jsx("p", { className: "pb-6 pl-14 pr-8 text-sm leading-7 text-white/65", children: item.answer })
              ] }, item.title);
            })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Business Outcomes" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Built for trust, performance, and conversions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-10 text-slate-500", children: "Every important section is planned to make your offer easier to understand. The content helps visitors see your value, services, and trust signals clearly. Each page then guides them toward the next action with confidence." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "columns-1 gap-10 sm:columns-2", children: proofPoints.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "mb-8 flex break-inside-avoid items-start gap-4 border-b border-slate-200 pb-7", children: [
            /* @__PURE__ */ jsx(Icon, { className: "mt-1 h-7 w-7 shrink-0 text-[#FC9C44]" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-slate-500", children: item.description })
            ] })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Development Stack" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Design, code, content, and integrations working together" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: techFeatures.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-[#FC9C44] pl-6", children: [
            /* @__PURE__ */ jsx(Icon, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-white/65", children: item.description })
          ] }, item.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Industries" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Website development for many business models" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "We help different industries turn services, campaigns, products, and enquiries into a stronger online experience." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-x-8 gap-y-5 sm:grid-cols-2", children: industries.map((industry) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-slate-200 pb-5 font-bold", children: [
          /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 shrink-0 text-[#FC9C44]" }),
          industry
        ] }, industry)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-8 md:grid-cols-3", children: [{
        icon: ShieldCheck,
        title: "Secure Build",
        text: "Reliable code, stable forms, safe integrations, backups, and support after launch."
      }, {
        icon: Gauge,
        title: "Fast Performance",
        text: "Optimised assets, clean structure, smooth page loading, and performance-focused development."
      }, {
        icon: Smartphone,
        title: "Mobile Friendly",
        text: "Polished responsive layouts across phones, tablets, laptops, and desktop screens."
      }].map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-300 pt-7", children: [
          /* @__PURE__ */ jsx(Icon, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: item.text })
        ] }, item.title);
      }) }) }),
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
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-2xl text-4xl font-black leading-tight", children: "Need a website built for real business growth?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/65", children: "Let us plan a website that explains your services clearly, improves trust, supports campaigns, and gives visitors a smooth path to enquiry." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-white/15 pl-8", children: [
          /* @__PURE__ */ jsx(LayoutDashboard, { className: "mb-5 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: "Ready to build?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: "Get planning, UI, frontend, backend, integrations, testing, launch, and maintenance in one place." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
            "Contact Us",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  WebsiteDevelopmentPage as component
};
