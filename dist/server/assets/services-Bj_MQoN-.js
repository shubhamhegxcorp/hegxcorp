import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Code2, LayoutDashboard, Globe2, ShoppingCart, Search, BarChart3, Share2, PenTool, Megaphone, Palette, Brush, Image, ArrowRight, Wrench, CheckCircle2, Smartphone, ShieldCheck, Gauge } from "lucide-react";
import { H as Header, F as Footer } from "./router-CVTG3WII.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@tanstack/react-query";
import "lenis";
import "clsx";
import "tailwind-merge";
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
const categories = [
  {
    id: "development",
    label: "Development",
    icon: Code2,
    services: [
      {
        number: "01",
        icon: Code2,
        title: "Website Development",
        text: "Fast, responsive, conversion-focused websites built to represent your brand and generate business enquiries.",
        href: "/service/web-dev"
      },
      {
        number: "02",
        icon: LayoutDashboard,
        title: "Custom Web Application",
        text: "Custom dashboards, portals, SaaS products, admin panels, and business web applications.",
        href: "/service/web-app"
      },
      {
        number: "03",
        icon: Globe2,
        title: "WordPress Development",
        text: "Editable WordPress websites, custom themes, WooCommerce stores, plugin setup, speed, and security support.",
        href: "/service/wordpress"
      },
      {
        number: "04",
        icon: ShoppingCart,
        title: "E-Commerce Development",
        text: "Online stores with product pages, cart, checkout, payments, order handling, and conversion-focused shopping flows.",
        href: "/service/e-comm"
      }
    ]
  },
  {
    id: "growth",
    label: "Growth",
    icon: Megaphone,
    services: [
      {
        number: "05",
        icon: Search,
        title: "SEO Services",
        text: "SEO structure, keyword optimisation, technical fixes, content improvements, and search visibility growth.",
        href: "/service/seo"
      },
      {
        number: "06",
        icon: BarChart3,
        title: "PPC",
        text: "Performance-driven ad campaigns that maximize ROI, generate quality leads, and grow your business faster.",
        href: "/service/ppc"
      },
      {
        number: "07",
        icon: Share2,
        title: "Social Media Marketing",
        text: "Build your brand, engage your audience, and grow your online community across every major platform.",
        href: "/service/social-med"
      },
      {
        number: "08",
        icon: PenTool,
        title: "Content Marketing",
        text: "Create compelling content and brand stories that attract, educate, and convert your ideal customers.",
        href: "/service/content-marketing"
      }
      // {
      //   number: "06",
      //   icon: Megaphone,
      //   title: "Digital Marketing",
      //   text: "Campaign strategy, lead generation, paid ads, social media marketing, and performance tracking.",
      //   href: "/services",
      // },
      // {
      //   number: "07",
      //   icon: Megaphone,
      //   title: "Digital Marketing",
      //   text: "Campaign strategy, lead generation, paid ads, social media marketing, and performance tracking.",
      //   href: "/services",
      // },
    ]
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    services: [
      {
        number: "09",
        icon: Palette,
        title: "UI/UX Design",
        text: "Clean interfaces, user journeys, wireframes, landing pages, dashboards, and digital product design.",
        href: "/service/ui-ux-design"
      },
      {
        number: "10",
        icon: Brush,
        title: "Branding",
        text: "Craft memorable brand identities with purpose, consistency, and a lasting impression across every touchpoint.",
        href: "/service/branding"
      },
      {
        number: "12",
        icon: Image,
        title: "Graphic Design",
        text: "Creative visuals, marketing assets, and brand graphics that communicate your message with impact.",
        href: "/service/graphic-design"
      }
    ]
  }
  // {
  //   id: "support",
  //   label: "Support",
  //   icon: ShieldCheck,
  //   services: [
  //     {
  //       number: "08",
  //       icon: ShieldCheck,
  //       title: "Website Maintenance",
  //       text: "Updates, bug fixes, backups, security checks, performance improvements, and ongoing support.",
  //       href: "/services",
  //     },
  //   ],
  // },
];
const panelVariants = {
  exit: { opacity: 0, x: -20, scale: 0.97, transition: { duration: 0.2 } },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 0.68, 0, 1.1] }
  },
  initial: { opacity: 0, x: -20, scale: 0.97 }
};
const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.055, ease: "easeOut" }
  })
};
function ServiceDirectory() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];
  return /* @__PURE__ */ jsx("section", { className: "bg-[#F8F9FC] px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[320px_1fr]", children: [
    /* @__PURE__ */ jsxs("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Service Directory" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl font-black leading-tight text-[#06133D]", children: "Choose the right digital solution for your next stage." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-2 rounded-2xl bg-white p-2", children: categories.map((category) => {
        const Icon = category.icon;
        const isActive = category.id === activeId;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveId(category.id),
            className: `group relative flex w-full items-center gap-4 rounded-xl border-l-[3px] py-3 pl-4 pr-3 text-left transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px ${isActive ? "border-l-[#FC9C44] bg-[#FFF8F0]" : "border-l-transparent bg-white hover:border-l-[#FC9C44]/40 hover:bg-[#FFFCF8]"}`,
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-[1.08] ${isActive ? "bg-[#06133D] text-[#FC9C44]" : "bg-[#F8F9FC] text-[#06133D]"}`,
                  children: isActive ? /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      className: "flex",
                      initial: { rotateY: 90 },
                      animate: { rotateY: 0 },
                      transition: { duration: 0.35, ease: "easeOut" },
                      children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
                    },
                    activeId
                  ) : /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "flex-1", children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `relative inline-block text-sm transition-colors duration-200 ease-out ${isActive ? "font-bold text-[#06133D]" : "font-semibold text-slate-500 group-hover:text-[#06133D]"}`,
                  children: [
                    category.label,
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute -bottom-1 left-0 h-[1.5px] bg-[#FC9C44] transition-all duration-200 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `rounded-full px-2.5 py-1 text-xs font-bold transition-colors duration-200 ease-out ${isActive ? "bg-[#FFF0DC] text-[#FC9C44]" : "bg-slate-100 text-slate-400 group-hover:bg-[#FFF0DC] group-hover:text-[#FC9C44]"}`,
                  children: category.services.length
                }
              )
            ]
          },
          category.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-slate-200 bg-white", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: panelVariants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
        className: "divide-y divide-slate-200",
        children: activeCategory.services.map((service, index) => {
          const Icon = service.icon;
          return /* @__PURE__ */ jsxs(
            motion.article,
            {
              custom: index,
              variants: rowVariants,
              initial: "hidden",
              animate: "visible",
              className: "group relative grid gap-6 py-9 pl-6 pr-6 transition-colors duration-[180ms] ease-out hover:bg-[#FFFAF5] md:grid-cols-[90px_1fr_180px] md:items-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[#FC9C44] transition-transform duration-[180ms] ease-out group-hover:scale-y-100" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 md:block", children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-6 w-6 items-center justify-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inset-0 scale-0 rounded-full bg-[#FFF0DC] opacity-0 transition-all duration-[180ms] ease-out group-hover:scale-100 group-hover:opacity-100" }),
                    /* @__PURE__ */ jsx("p", { className: "relative text-xs font-bold text-[#FC9C44] transition-transform duration-[180ms] ease-out group-hover:scale-[1.2]", children: service.number })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06133D] shadow-sm transition-all duration-[180ms] ease-out group-hover:scale-110 group-hover:border-[#FC9C44] group-hover:bg-[#FFF4E8] group-hover:text-[#FC9C44] md:mt-5", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl font-black leading-tight text-[#06133D]", children: service.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-base leading-8 text-slate-500", children: service.text })
                ] }),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: service.href,
                    className: "inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#06133D] transition-all duration-[180ms] ease-out group-hover:border-[#FC9C44] group-hover:bg-[#FFF4E8] group-hover:text-[#FC9C44]",
                    children: [
                      "Learn More",
                      /* @__PURE__ */ jsx("span", { className: "flex transition-transform duration-200 ease-out group-hover:translate-x-1", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }) })
                    ]
                  }
                )
              ]
            },
            service.title
          );
        })
      },
      activeId
    ) }) })
  ] }) });
}
const benefits = ["Business-focused digital strategy", "Modern responsive design", "Scalable frontend and backend systems", "SEO-friendly page structure", "Performance and speed optimisation", "Secure development practices", "Clear communication and support", "Launch-ready testing and maintenance"];
const process = ["Discover business goals", "Plan digital structure", "Design user experience", "Build and integrate", "Test, launch, improve"];
function OurServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#F7F8FB] text-[#06133D]", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "bg-[#F7F8FB] px-6 pb-16 pt-32 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FC9C44] shadow-sm", children: [
            /* @__PURE__ */ jsx(Wrench, { className: "h-4 w-4" }),
            "Our Services"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "max-w-5xl text-5xl font-black leading-[1.02] tracking-normal md:text-7xl", children: "Digital services built for business growth" }),
            /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-3xl text-lg leading-8 text-slate-600", children: "From websites and web applications to ecommerce, WordPress, SEO, marketing, and maintenance, Hegxcorp helps businesses build a stronger digital presence." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-4 border-y border-slate-200 py-6 md:grid-cols-4", children: [["Websites", "Development"], ["Apps", "Dashboards"], ["Stores", "E-Commerce"], ["Growth", "SEO & Marketing"]].map(([top, bottom]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "h-3 w-3 rounded-full bg-[#FC9C44]" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg font-black", children: top }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-slate-500", children: bottom })
          ] })
        ] }, top)) })
      ] }) }),
      /* @__PURE__ */ jsx(ServiceDirectory, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-[#06133D] px-6 py-24 text-white lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Why Hegxcorp" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-6xl", children: "Practical digital systems, not repeated templates." }),
          /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-xl text-base leading-8 text-white/70", children: "We focus on building digital solutions that are useful, scalable, fast, and easy to improve after launch." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-9 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]", children: [
            "Discuss Your Project",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-px overflow-hidden rounded-[32px] bg-white/15 sm:grid-cols-2", children: benefits.map((benefit) => /* @__PURE__ */ jsxs("div", { className: "bg-[#06133D] p-6", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "mb-5 h-5 w-5 text-[#FC9C44]" }),
          /* @__PURE__ */ jsx("p", { className: "text-base font-bold leading-7 text-white/85", children: benefit })
        ] }, benefit)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.8fr_1.2fr]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Our Process" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "From first discussion to launch." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-0", children: process.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[70px_1fr] border-t border-slate-200 py-7 last:border-b", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-black text-[#FC9C44]", children: [
              "0",
              index + 1
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: item }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-slate-300" })
            ] })
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-20 grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8", children: [
            /* @__PURE__ */ jsx(Smartphone, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Responsive Experience" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Every digital solution is planned for smooth use across mobile, tablet, laptop, and desktop screens." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Secure Foundation" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "We build with stable structure, reliable forms, protected flows, and maintainable code." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8", children: [
            /* @__PURE__ */ jsx(Gauge, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-black", children: "Performance Focus" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-slate-500", children: "Speed, clean structure, strong UX, and conversion-focused sections are considered from the start." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F7F8FB] px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 border-y border-slate-200 py-14 lg:grid-cols-[1fr_auto] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]", children: "Start Your Project" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl", children: "Need a digital solution built for real business growth?" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#06133D] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#10215a]", children: [
          "Contact Us",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  OurServicesPage as component
};
