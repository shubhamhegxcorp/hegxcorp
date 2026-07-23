import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Globe2, ArrowRight, ShoppingCart, CheckCircle2, ShoppingBag, CreditCard, PackageCheck, Smartphone, Gauge, BarChart3, Truck, ShieldCheck, Layers3, Rocket } from "lucide-react";
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
const services = [{
  icon: ShoppingCart,
  title: "Online Store Development",
  text: "Custom ecommerce websites built to sell products, manage orders, and create a smooth shopping experience."
}, {
  icon: ShoppingBag,
  title: "Product Page Design",
  text: "High-converting product pages with strong layouts, images, pricing, descriptions, variants, and CTAs."
}, {
  icon: CreditCard,
  title: "Cart & Checkout",
  text: "Simple cart and checkout flows with payment gateways, coupons, taxes, shipping, and order confirmation."
}, {
  icon: PackageCheck,
  title: "Order Management",
  text: "Systems for managing products, inventory, customers, payments, shipping, and order updates."
}, {
  icon: Smartphone,
  title: "Mobile Commerce",
  text: "Responsive ecommerce experiences that make browsing and buying easy on mobile, tablet, and desktop."
}, {
  icon: Gauge,
  title: "Speed Optimisation",
  text: "Fast-loading store pages, optimised images, clean code, caching, and performance-focused improvements."
}];
const features = ["Custom ecommerce website design", "Product listing and category pages", "Cart, checkout, and payment gateway setup", "Coupons, discounts, taxes, and shipping rules", "Customer accounts and order tracking", "Inventory and product management", "Mobile responsive shopping experience", "Analytics, SEO setup, and conversion tracking"];
const process = [{
  title: "Discovery",
  text: "We understand your products, customers, pricing, categories, shipping rules, payment needs, and business goals."
}, {
  title: "Store Planning",
  text: "We plan the store structure, product flow, checkout journey, integrations, admin system, and launch roadmap."
}, {
  title: "Design",
  text: "We design clean ecommerce pages for homepage, categories, products, cart, checkout, and key conversion sections."
}, {
  title: "Development",
  text: "We build the ecommerce website with responsive layouts, product management, payments, shipping, and order systems."
}, {
  title: "Testing & Launch",
  text: "We test products, checkout, payments, forms, responsiveness, speed, emails, and order flows before launch."
}];
const faqs = [{
  question: "What is e-commerce development?",
  answer: "E-commerce development is the process of designing and building an online store where customers can browse products, add items to cart, make payments, and place orders."
}, {
  question: "Can you build a custom online store?",
  answer: "Yes. We build custom ecommerce stores based on your products, brand, customer journey, payment needs, shipping rules, and business goals."
}, {
  question: "Do you integrate payment gateways?",
  answer: "Yes. We can integrate payment gateways for online payments, checkout, order confirmation, and transaction handling."
}, {
  question: "Will the store work on mobile?",
  answer: "Yes. Every ecommerce website is built to work smoothly across mobile, tablet, laptop, and desktop screens."
}, {
  question: "Do you provide ecommerce support after launch?",
  answer: "Yes. We provide ecommerce maintenance, bug fixes, product updates, performance improvements, security checks, and technical support."
}];
function EcommercePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 pb-20 pt-32 text-white lg:px-10", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0", style: {
          background: "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
        } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0 opacity-[0.08]", style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF3E8] px-4 py-2 text-sm font-bold text-[#FC9C44]", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" }),
              "E-Commerce Development"
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-7xl", children: "E-Commerce Development Services" }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-lg leading-8 text-white/74", children: "Build a fast, secure, and conversion-focused online store that helps your business sell products, manage orders, and grow revenue online." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
                "Get Started",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12", children: "View Services" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-[32px] border border-slate-200 bg-[#06133D] p-6 text-white shadow-2xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Store System" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-black", children: "Ecommerce Build" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FC9C44]", children: /* @__PURE__ */ jsx(ShoppingCart, { className: "h-6 w-6" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: ["Product Pages", "Cart & Checkout", "Payment Gateway", "Order Management"].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/10 p-5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-4 h-5 w-5 text-[#FC9C44]" }),
              /* @__PURE__ */ jsx("p", { className: "font-bold", children: item })
            ] }, item)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "What We Build" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Complete ecommerce solutions for online selling" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((service) => {
          const Icon = service.icon;
          return /* @__PURE__ */ jsxs("div", { className: "group rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: service.text })
          ] }, service.title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-28", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Store Features" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "Built for smooth shopping and better conversions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-slate-500", children: "We create ecommerce websites that make it easy for customers to find products, understand value, complete checkout, and return for future purchases." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-[#06133D] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#10215a]", children: [
            "Discuss Project",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: features.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-4 h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold leading-7 text-slate-600", children: item })
        ] }, item)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Work Process" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "How we build your online store" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/70", children: "We follow a clear ecommerce development process so your store is planned properly, tested carefully, and ready for real customer orders." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-5", children: process.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-[#06133D] p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#FC9C44] text-sm font-black text-white", children: index + 1 }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-black", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-white/65", children: item.text })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F8FAFC] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Conversion Focused" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Store pages are structured to support trust, product clarity, smooth checkout, and better sales." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200", children: [
          /* @__PURE__ */ jsx(Truck, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Shipping Ready" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Configure delivery options, shipping rules, order statuses, customer emails, and fulfilment workflows." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Secure Checkout" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Build customer trust with secure payment flow, reliable forms, stable integrations, and protected transactions." })
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
  EcommercePage as component
};
