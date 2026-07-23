import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, ArrowRight, Palette, CheckCircle2, Type, BookOpen, Target, Fingerprint, Megaphone, LayoutTemplate, ChevronDown, Eye, WandSparkles, PenTool, Boxes, Crown, Gem, Workflow, ShieldCheck, Users, Layers3, FileText, BadgeCheck, Rocket } from "lucide-react";
import { H as Header, F as Footer } from "./router-CIxUsq07.js";
import "@tanstack/react-query";
import "lenis";
import "clsx";
import "tailwind-merge";
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
const proofMetrics = [{
  value: "360",
  label: "Brand system",
  copy: "Strategy, identity, voice, visuals, guidelines, and launch assets planned as one connected system."
}, {
  value: "12+",
  label: "Core assets",
  copy: "Logo sets, colors, type, icon rules, social templates, pitch visuals, decks, and campaign direction."
}, {
  value: "90-day",
  label: "Rollout plan",
  copy: "A practical path for updating website, social, sales, ads, documents, and customer touchpoints."
}, {
  value: "Premium",
  label: "Positioning",
  copy: "A sharper market story that makes your offer easier to understand, trust, and choose."
}];
const heroFeatures = [{
  icon: CheckCircle2,
  label: "Logo System"
}, {
  icon: Palette,
  label: "Color Palette"
}, {
  icon: Type,
  label: "Typography"
}, {
  icon: BookOpen,
  label: "Brand Guidelines"
}];
const capabilityCards = [{
  icon: Target,
  title: "Brand Strategy",
  tag: "Market Position",
  hook: "Define what your brand should own in the buyer's mind.",
  description: "We clarify audience, category, competitors...",
  pills: ["Audience", "Positioning", "Promise", "Proof"],
  visual: "radial-gradient(circle at 16% 20%...",
  image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80"
}, {
  icon: Fingerprint,
  title: "Logo & Identity",
  tag: "Visual Signature",
  hook: "Build a recognizable identity...",
  description: "We design logo marks...",
  pills: ["Logo", "Marks", "Lockups", "Usage"],
  visual: "radial-gradient(circle at 78% 18%...",
  image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80"
}, {
  icon: Type,
  title: "Typography & Color",
  tag: "Design Language",
  hook: "Give every screen, post...",
  description: "We define font pairings...",
  pills: ["Type scale", "Palette", "Contrast", "Hierarchy"],
  visual: "radial-gradient(circle at 20% 26%...",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
}, {
  icon: Megaphone,
  title: "Messaging & Voice",
  tag: "Brand Story",
  hook: "Make your offer sound clear...",
  description: "We shape brand voice...",
  pills: ["Voice", "Headlines", "Value props", "Story"],
  visual: "radial-gradient(circle at 74% 24%...",
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
}, {
  icon: LayoutTemplate,
  title: "Design System",
  tag: "Digital Consistency",
  hook: "Turn brand direction...",
  description: "We create reusable digital patterns...",
  pills: ["Components", "Templates", "Social", "Ads"],
  visual: "radial-gradient(circle at 18% 20%...",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
}, {
  icon: BookOpen,
  title: "Brand Guidelines",
  tag: "Team Playbook",
  hook: "Give every creator a clear rulebook...",
  description: "We package logo rules...",
  pills: ["Guidelines", "Assets", "Rules", "Rollout"],
  visual: "radial-gradient(circle at 78% 18%...",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"
}];
const serviceHighlights = [{
  title: "Brand Strategy & Positioning",
  answer: "We define who the brand is for, what the audience should remember, why the offer matters, how the market is currently framed, and which position gives the business the strongest advantage."
}, {
  title: "Visual Identity Design",
  answer: "We build a complete visual identity with logo systems, color palettes, typography, visual motifs, icon direction, image treatment, spacing rules, and usage logic for digital and offline channels."
}, {
  title: "Logo System & Usage Rules",
  answer: "We create practical logo versions for websites, social profiles, presentations, packaging, favicons, dark backgrounds, light backgrounds, small sizes, and responsive layouts."
}, {
  title: "Brand Voice & Messaging",
  answer: "We write the core brand story, tagline direction, headline system, service messaging, short pitch, proof language, and tone rules so the brand sounds consistent everywhere."
}, {
  title: "Website & Social Brand Direction",
  answer: "We translate identity into hero layouts, social post templates, ad direction, landing page modules, CTA styles, visual rhythm, and image guidance that marketing teams can actually use."
}, {
  title: "Brand Guidelines",
  answer: "We assemble the identity into a clear brand book that explains how to use the logo, colors, typography, voice, layouts, imagery, icons, and templates without guesswork."
}];
const processSteps = [{
  icon: Eye,
  label: "01 Discovery",
  title: "Audit the current brand and market reality",
  copy: "We study your offer, competitors, website, social presence, sales conversations, visual assets, audience segments, category language, and trust signals before design starts.",
  points: ["Brand audit", "Competitor scan", "Audience clarity"]
}, {
  icon: Target,
  label: "02 Strategy",
  title: "Choose the position the identity should support",
  copy: "We define messaging pillars, brand personality, tone, value proposition, proof points, market angle, and the experience your audience should feel at every touchpoint.",
  points: ["Positioning", "Messaging pillars", "Offer clarity"]
}, {
  icon: WandSparkles,
  label: "03 Identity",
  title: "Design a visual system with enough range to grow",
  copy: "We explore logo routes, color worlds, type systems, graphic devices, layout principles, icon style, and sample applications until the brand has a strong signature.",
  points: ["Logo system", "Visual routes", "Design language"]
}, {
  icon: LayoutTemplate,
  label: "04 Application",
  title: "Apply the system to real marketing surfaces",
  copy: "We test the identity across website sections, social templates, pitch decks, ads, email headers, proposal pages, business cards, and launch creatives.",
  points: ["Website direction", "Social templates", "Sales assets"]
}, {
  icon: BookOpen,
  label: "05 Guidelines",
  title: "Package the rules so your team can stay consistent",
  copy: "We deliver organized files, brand rules, examples, usage notes, rollout priorities, and practical guidance for designers, marketers, founders, and partners.",
  points: ["Brand guide", "Asset library", "Rollout notes"]
}];
const deliverableGroups = [{
  icon: Fingerprint,
  title: "Identity Core",
  text: "Logo suite, wordmark, symbol, spacing rules, color versions, favicon direction, profile icons, and brand signature options.",
  items: ["Primary logo", "Secondary marks", "Icon set", "Usage rules"]
}, {
  icon: Palette,
  title: "Visual Language",
  text: "A complete design language for colors, typography, layouts, patterns, image treatment, illustration direction, and digital styling.",
  items: ["Color system", "Type scale", "Graphic motifs", "Image style"]
}, {
  icon: PenTool,
  title: "Voice & Copy",
  text: "Messaging blocks that help website, sales, ads, and social content sound clear and on-brand from day one.",
  items: ["Tagline routes", "Elevator pitch", "Headlines", "CTA language"]
}, {
  icon: Boxes,
  title: "Launch Assets",
  text: "Templates and high-priority surfaces that help the new identity show up quickly across your customer journey.",
  items: ["Social templates", "Deck cover", "Proposal cover", "Ad direction"]
}];
const brandSystemLayers = [{
  icon: Crown,
  title: "Positioning",
  copy: "The market role your brand should own and defend."
}, {
  icon: Gem,
  title: "Identity",
  copy: "The visual signature people recognize before they read."
}, {
  icon: Megaphone,
  title: "Voice",
  copy: "The language and tone that make the offer feel human."
}, {
  icon: Workflow,
  title: "Rollout",
  copy: "The templates, rules, and handover process that keep it consistent."
}];
const audienceFit = [{
  icon: Sparkles,
  label: "Startups preparing for launch"
}, {
  icon: ShieldCheck,
  label: "Service brands that need more trust"
}, {
  icon: Users,
  label: "Founder-led companies becoming teams"
}, {
  icon: Layers3,
  label: "Growing businesses with scattered visuals"
}, {
  icon: FileText,
  label: "Brands rebuilding decks, site, and sales assets"
}, {
  icon: BadgeCheck,
  label: "Premium offers that need sharper positioning"
}];
const faqs = [{
  question: "What is included in branding services?",
  answer: "Branding can include strategy, positioning, logo design, typography, color palette, visual identity, messaging, social templates, website direction, marketing collateral, and a practical brand guideline document."
}, {
  question: "Can Hegxcorp redesign an existing brand?",
  answer: "Yes. We can refresh or rebuild an existing identity by auditing what works, removing inconsistency, improving visual quality, clarifying the message, and preparing a better rollout system."
}, {
  question: "Do you only create logos?",
  answer: "No. A logo is only one part of the brand. We build the wider system around it so your website, social posts, presentations, ads, proposals, and sales assets feel connected."
}, {
  question: "Will we get brand guidelines?",
  answer: "Yes. Guidelines are included because they protect consistency. Your team gets rules for logo usage, color, type, layouts, imagery, tone, examples, and practical asset handling."
}, {
  question: "Can you also design website sections after branding?",
  answer: "Yes. We can extend the brand into website UI direction, landing pages, social media creatives, decks, campaign assets, and other marketing surfaces."
}, {
  question: "How long does a branding project take?",
  answer: "A focused identity project can move quickly, while full strategy, visual system, messaging, templates, and guidelines usually need a more structured timeline. We recommend the right path after reviewing your scope."
}];
function BrandingHero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0", style: {
      background: "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)"
    } }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0 opacity-[0.08]", style: {
      backgroundImage: "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
      backgroundSize: "48px 48px"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: false, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.7,
        ease: "easeOut"
      }, className: "w-full min-w-0 max-w-[calc(100vw-3rem)] lg:max-w-none", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FC9C44] shadow-sm", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
          "Branding & Identity Design"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "max-w-4xl text-5xl font-black leading-tight md:text-6xl", children: "Branding Services" }),
        /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-2xl text-lg leading-8 text-white/74", children: "Build a premium, consistent, and memorable brand identity that helps customers understand your value, trust your business, and recognize you across every touchpoint." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-9 grid gap-4 sm:flex sm:flex-wrap", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06133D] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10215a] sm:w-auto", children: [
            "Start Brand Project",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-[#06133D] transition hover:border-[#FC9C44] sm:w-auto", children: "View Services" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: false, animate: {
        opacity: 1,
        x: 0,
        scale: 1
      }, transition: {
        duration: 0.75,
        delay: 0.08,
        ease: "easeOut"
      }, className: "relative w-full min-w-0 max-w-[calc(100vw-3rem)] rounded-[30px] border border-slate-200 bg-white p-5 shadow-xl lg:max-w-none", children: [
        /* @__PURE__ */ jsx(motion.div, { "aria-hidden": "true", animate: {
          y: [0, -10, 0]
        }, transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "absolute -right-5 -top-5 hidden rounded-2xl border border-[#FC9C44]/20 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44] shadow-lg md:block", children: "Premium" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 rounded-[24px] bg-[#06133D] p-6 text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-7 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-white/50", children: "Brand System" }),
              /* @__PURE__ */ jsx("h2", { className: "mt-3 text-2xl font-black", children: "Identity Command Center" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]", children: /* @__PURE__ */ jsx(Palette, { className: "h-6 w-6" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: heroFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return /* @__PURE__ */ jsxs(motion.div, { initial: false, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.45,
              delay: 0.18 + index * 0.08
            }, className: "rounded-xl border border-white/10 bg-white/10 p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-[#FC9C44] text-[#FC9C44]", children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-black", children: feature.label })
            ] }, feature.label);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 rounded-2xl border border-white/10 bg-white/10 p-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white/50", children: "Launch Readiness" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#FC9C44]", children: "86%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx("div", { className: "h-full w-[86%] rounded-full bg-[#FC9C44]" }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ProofBand() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-5 md:grid-cols-4", children: proofMetrics.map((metric, index) => /* @__PURE__ */ jsxs(motion.article, { initial: {
    opacity: 0,
    y: 18
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.45,
    delay: index * 0.05
  }, className: "border border-[#E5E7EB] bg-white p-6", children: [
    /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-[#06133D]", children: metric.value }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]", children: metric.label }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-[#5F6B7A]", children: metric.copy })
  ] }, metric.label)) }) });
}
function BrandCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilityCards[activeIndex];
  const ActiveIcon = active.icon;
  return /* @__PURE__ */ jsx("section", { className: "overflow-hidden bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.5
      }, children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "What We Build" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl", children: "A complete branding system for trust, recall, and growth" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-[#5F6B7A]", children: "Hover or select a branding layer to see how strategy, visuals, voice, and guidelines work together. The goal is not just a better logo. It is a brand your team can use with confidence." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.85fr_1.15fr]", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: capabilityCards.map((capability, index) => {
        const Icon = capability.icon;
        const isActive = activeIndex === index;
        return /* @__PURE__ */ jsx("button", { type: "button", onMouseEnter: () => setActiveIndex(index), onFocus: () => setActiveIndex(index), onClick: () => setActiveIndex(index), className: `group border p-5 text-left transition ${isActive ? "border-[#FC9C44] bg-[#FFF4E8]" : "border-[#E5E7EB] bg-white hover:border-[#FC9C44]/50"}`, children: /* @__PURE__ */ jsxs("span", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-[#FC9C44] text-white" : "bg-[#06133D] text-white"}`, children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: capability.tag }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 block text-lg font-black text-[#06133D]", children: capability.title }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 block text-sm leading-6 text-[#5F6B7A]", children: capability.hook })
          ] })
        ] }) }, capability.title);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "relative min-h-[560px] overflow-hidden border border-[#E5E7EB] bg-[#06133D] p-6 text-white shadow-[0_28px_80px_-55px_rgba(6,19,61,0.9)] lg:p-8", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -14
      }, transition: {
        duration: 0.35,
        ease: "easeOut"
      }, className: "relative z-10 flex h-full flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8 overflow-hidden border border-white/10 bg-white/5", children: /* @__PURE__ */ jsxs("div", { className: "relative h-145 overflow-hidden", children: [
            /* @__PURE__ */ jsx("img", { src: active.image, alt: `${active.title} branding reference`, className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
              background: active.visual
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#06133D]/35" }),
            /* @__PURE__ */ jsx(motion.div, { animate: {
              y: [0, -8, 0],
              rotate: [0, 2, 0]
            }, transition: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }, className: "absolute bottom-5 left-5 grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/14 text-[#FC9C44] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] backdrop-blur", children: /* @__PURE__ */ jsx(ActiveIcon, { className: "h-8 w-8" }) })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-[0.2em] text-[#FC9C44]", children: active.tag }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-3xl font-black", children: active.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-base leading-8 text-white/70", children: active.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: active.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/72", children: pill }, pill)) })
      ] }, active.title) }) })
    ] })
  ] }) });
}
function ServiceHighlights() {
  const [openIndex, setOpenIndex] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "bg-[#FAFAF8] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 18
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.5
    }, className: "lg:sticky lg:top-28", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "Branding Coverage" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl", children: "Every part of the brand gets a clear job" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-[#5F6B7A]", children: "Strong branding turns scattered design into a repeatable identity. These are the layers Hegxcorp can plan, design, refine, and hand over as one usable brand system." }),
      /* @__PURE__ */ jsx("div", { className: "mt-9 grid gap-3", children: [
        ["Strategy-led", "Every identity choice is tied to market position, audience trust, and business goals."]
        // ["Launch-ready", "Your brand assets are prepared for website, social, sales, ads, documents, and presentations."],
        // ["Team-friendly", "Clear rules help designers, marketers, founders, and partners use the brand consistently."],
      ].map(([label, copy]) => /* @__PURE__ */ jsxs("div", { className: "border border-[#E5E7EB] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(6,19,61,0.45)]", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]", children: label }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold leading-6 text-[#516070]", children: copy })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border border-[#E5E7EB] bg-white", children: serviceHighlights.map((item, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#E5E7EB] last:border-b-0", children: [
        /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setOpenIndex(isOpen ? null : index), className: "flex w-full items-center justify-between gap-5 px-6 py-6 text-left", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-black text-[#06133D]", children: item.title }),
          /* @__PURE__ */ jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 transition ${isOpen ? "rotate-180" : ""}` }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(motion.div, { initial: {
          height: 0,
          opacity: 0
        }, animate: {
          height: "auto",
          opacity: 1
        }, exit: {
          height: 0,
          opacity: 0
        }, transition: {
          duration: 0.28,
          ease: "easeOut"
        }, className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "px-6 pb-7 text-base font-semibold leading-8 text-[#516070]", children: item.answer }) }) })
      ] }, item.title);
    }) })
  ] }) });
}
function BrandProcess() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-[#06133D] px-6 py-24 text-white lg:px-10", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0 opacity-[0.08]", style: {
      backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
      backgroundSize: "58px 58px"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "Our Branding Process" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight md:text-5xl", children: "From unclear identity to a launch-ready brand system" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-white/68", children: "We move from insight to execution with enough structure for quality and enough flexibility for creative direction. Each stage gives the next stage better inputs." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5", children: processSteps.map((step, index) => {
        const Icon = step.icon;
        return /* @__PURE__ */ jsxs(motion.article, { initial: {
          opacity: 0,
          x: index % 2 === 0 ? -24 : 24
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true,
          margin: "-80px"
        }, transition: {
          duration: 0.5,
          delay: index * 0.04
        }, className: "grid gap-6 border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:grid-cols-[190px_1fr] md:items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44] text-white", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]", children: step.label })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-base leading-8 text-white/68", children: step.copy }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: step.points.map((point) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70", children: point }, point)) })
          ] })
        ] }, step.label);
      }) })
    ] })
  ] });
}
function DeliverablesSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "Deliverables" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl", children: "Practical assets your brand can use immediately" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-8 text-[#5F6B7A]", children: "The output is designed for real business use. Your team gets clear creative direction, organized files, and templates that make the new identity easier to apply every day." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: deliverableGroups.map((group, index) => {
      const Icon = group.icon;
      return /* @__PURE__ */ jsxs(motion.article, { initial: {
        opacity: 0,
        y: 22
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.48,
        delay: index * 0.05
      }, whileHover: {
        y: -6
      }, className: "border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/50 hover:bg-white hover:shadow-[0_24px_70px_-50px_rgba(6,19,61,0.45)]", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-[#06133D]", children: group.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-7 text-[#5F6B7A]", children: group.text }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: group.items.map((item) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-sm font-bold text-[#06133D]", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-[#FC9C44]" }),
          item
        ] }, item)) })
      ] }, group.title);
    }) })
  ] }) });
}
function BrandSystemSection() {
  return /* @__PURE__ */ jsx("section", { className: "overflow-hidden bg-[#FAFAF8] px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 18
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.5
    }, children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "Brand Operating System" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl", children: "Consistency is designed before the brand goes live" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-[#5F6B7A]", children: "A premium brand should not depend on one designer remembering every detail. We define repeatable rules for messaging, visuals, templates, and rollout so every new asset feels connected." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: ["Website", "Social media", "Sales decks", "Ads", "Email", "Documents"].map((item) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#06133D]", children: item }, item)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: brandSystemLayers.map((layer, index) => {
      const Icon = layer.icon;
      return /* @__PURE__ */ jsxs(motion.article, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.5,
        delay: index * 0.06
      }, className: "border border-[#E5E7EB] bg-white p-6", children: [
        /* @__PURE__ */ jsx(motion.div, { animate: {
          y: [0, -5, 0]
        }, transition: {
          duration: 3.4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsx(Icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-black text-[#06133D]", children: layer.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-[#5F6B7A]", children: layer.copy })
      ] }, layer.title);
    }) })
  ] }) });
}
function AudienceSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-24 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 max-w-3xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]", children: "Who This Is For" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl", children: "Branding for teams that need to look as strong as they are" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-px overflow-hidden border border-[#E5E7EB] bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3", children: audienceFit.map((item, index) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.45,
        delay: index * 0.04
      }, className: "bg-[#FAFAF8] p-7", children: [
        /* @__PURE__ */ jsx(Icon, { className: "mb-6 h-8 w-8 text-[#FC9C44]" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-black leading-8 text-[#06133D]", children: item.label })
      ] }, item.label);
    }) })
  ] }) });
}
function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isInView, setIsInView] = useState(false);
  return /* @__PURE__ */ jsxs(motion.section, { className: "relative overflow-hidden bg-white px-6 py-24 lg:px-10", onViewportEnter: () => setIsInView(true), onViewportLeave: () => setIsInView(false), viewport: {
    amount: 0.28
  }, children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isInView && /* @__PURE__ */ jsx(motion.div, { "aria-hidden": "true", initial: {
      opacity: 0,
      scale: 1.04
    }, animate: {
      opacity: 0.16,
      scale: 1
    }, exit: {
      opacity: 0,
      scale: 1.04
    }, transition: {
      duration: 0.45,
      ease: "easeOut"
    }, className: "pointer-events-none absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1600&q=80)"
    } }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isInView && /* @__PURE__ */ jsx(motion.div, { "aria-hidden": "true", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, transition: {
      duration: 0.35
    }, className: "pointer-events-none absolute inset-0 bg-white/88" }) }),
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
    ] })
  ] });
}
function ProjectContactCTA() {
  return /* @__PURE__ */ jsx("section", { className: "bg-white px-6 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center", children: [
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
  ] }) }) });
}
function BrandingServicePage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(BrandingHero, {}),
      /* @__PURE__ */ jsx(ProofBand, {}),
      /* @__PURE__ */ jsx(BrandCapabilities, {}),
      /* @__PURE__ */ jsx(ServiceHighlights, {}),
      /* @__PURE__ */ jsx(BrandProcess, {}),
      /* @__PURE__ */ jsx(DeliverablesSection, {}),
      /* @__PURE__ */ jsx(BrandSystemSection, {}),
      /* @__PURE__ */ jsx(AudienceSection, {}),
      /* @__PURE__ */ jsx(FAQSection, {}),
      /* @__PURE__ */ jsx(ProjectContactCTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BrandingServicePage as component
};
