import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentType } from "react";
import { useState } from "react";
import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    Boxes,
    CheckCircle2,
    ChevronDown,
    Crown,
    Eye,
    FileText,
    Fingerprint,
    Gem,
    Layers3,
    LayoutTemplate,
    Lightbulb,
    Megaphone,
    Palette,
    PenTool,
    ShieldCheck,
    Sparkles,
    Target,
    Type,
    Users,
    WandSparkles,
    Workflow,
    Rocket,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/service/branding")({
    head: () => ({
        meta: [
            { title: "Branding & Identity Design Services | Hegxcorp" },
            {
                name: "description",
                content:
                    "Branding and identity design services by Hegxcorp including brand strategy, logo systems, visual identity, messaging, design systems, brand guidelines, collateral, and launch-ready creative assets.",
            },
        ],
    }),
    component: BrandingServicePage,
});

type IconType = ComponentType<{ className?: string }>;

const proofMetrics = [
    {
        value: "360",
        label: "Brand system",
        copy: "Strategy, identity, voice, visuals, guidelines, and launch assets planned as one connected system.",
    },
    {
        value: "12+",
        label: "Core assets",
        copy: "Logo sets, colors, type, icon rules, social templates, pitch visuals, decks, and campaign direction.",
    },
    {
        value: "90-day",
        label: "Rollout plan",
        copy: "A practical path for updating website, social, sales, ads, documents, and customer touchpoints.",
    },
    {
        value: "Premium",
        label: "Positioning",
        copy: "A sharper market story that makes your offer easier to understand, trust, and choose.",
    },
];

const heroFeatures = [
    { icon: CheckCircle2, label: "Logo System" },
    { icon: Palette, label: "Color Palette" },
    { icon: Type, label: "Typography" },
    { icon: BookOpen, label: "Brand Guidelines" },
];

const capabilityCards: {
    icon: IconType;
    title: string;
    tag: string;
    hook: string;
    description: string;
    pills: string[];
    visual: string;
    image: string;
}[] = [
        {
            icon: Target,
            title: "Brand Strategy",
            tag: "Market Position",
            hook: "Define what your brand should own in the buyer's mind.",
            description: "We clarify audience, category, competitors...",
            pills: ["Audience", "Positioning", "Promise", "Proof"],
            visual: "radial-gradient(circle at 16% 20%...",
            image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80",
        },
        {
            icon: Fingerprint,
            title: "Logo & Identity",
            tag: "Visual Signature",
            hook: "Build a recognizable identity...",
            description: "We design logo marks...",
            pills: ["Logo", "Marks", "Lockups", "Usage"],
            visual: "radial-gradient(circle at 78% 18%...",
            image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80",
        },
        {
            icon: Type,
            title: "Typography & Color",
            tag: "Design Language",
            hook: "Give every screen, post...",
            description: "We define font pairings...",
            pills: ["Type scale", "Palette", "Contrast", "Hierarchy"],
            visual: "radial-gradient(circle at 20% 26%...",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        },
        {
            icon: Megaphone,
            title: "Messaging & Voice",
            tag: "Brand Story",
            hook: "Make your offer sound clear...",
            description: "We shape brand voice...",
            pills: ["Voice", "Headlines", "Value props", "Story"],
            visual: "radial-gradient(circle at 74% 24%...",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
        },
        {
            icon: LayoutTemplate,
            title: "Design System",
            tag: "Digital Consistency",
            hook: "Turn brand direction...",
            description: "We create reusable digital patterns...",
            pills: ["Components", "Templates", "Social", "Ads"],
            visual: "radial-gradient(circle at 18% 20%...",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
        },
        {
            icon: BookOpen,
            title: "Brand Guidelines",
            tag: "Team Playbook",
            hook: "Give every creator a clear rulebook...",
            description: "We package logo rules...",
            pills: ["Guidelines", "Assets", "Rules", "Rollout"],
            visual: "radial-gradient(circle at 78% 18%...",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
        },
    ];

const serviceHighlights = [
    {
        title: "Brand Strategy & Positioning",
        answer:
            "We define who the brand is for, what the audience should remember, why the offer matters, how the market is currently framed, and which position gives the business the strongest advantage.",
    },
    {
        title: "Visual Identity Design",
        answer:
            "We build a complete visual identity with logo systems, color palettes, typography, visual motifs, icon direction, image treatment, spacing rules, and usage logic for digital and offline channels.",
    },
    {
        title: "Logo System & Usage Rules",
        answer:
            "We create practical logo versions for websites, social profiles, presentations, packaging, favicons, dark backgrounds, light backgrounds, small sizes, and responsive layouts.",
    },
    {
        title: "Brand Voice & Messaging",
        answer:
            "We write the core brand story, tagline direction, headline system, service messaging, short pitch, proof language, and tone rules so the brand sounds consistent everywhere.",
    },
    {
        title: "Website & Social Brand Direction",
        answer:
            "We translate identity into hero layouts, social post templates, ad direction, landing page modules, CTA styles, visual rhythm, and image guidance that marketing teams can actually use.",
    },
    {
        title: "Brand Guidelines",
        answer:
            "We assemble the identity into a clear brand book that explains how to use the logo, colors, typography, voice, layouts, imagery, icons, and templates without guesswork.",
    },
];

const processSteps = [
    {
        icon: Eye,
        label: "01 Discovery",
        title: "Audit the current brand and market reality",
        copy:
            "We study your offer, competitors, website, social presence, sales conversations, visual assets, audience segments, category language, and trust signals before design starts.",
        points: ["Brand audit", "Competitor scan", "Audience clarity"],
    },
    {
        icon: Target,
        label: "02 Strategy",
        title: "Choose the position the identity should support",
        copy:
            "We define messaging pillars, brand personality, tone, value proposition, proof points, market angle, and the experience your audience should feel at every touchpoint.",
        points: ["Positioning", "Messaging pillars", "Offer clarity"],
    },
    {
        icon: WandSparkles,
        label: "03 Identity",
        title: "Design a visual system with enough range to grow",
        copy:
            "We explore logo routes, color worlds, type systems, graphic devices, layout principles, icon style, and sample applications until the brand has a strong signature.",
        points: ["Logo system", "Visual routes", "Design language"],
    },
    {
        icon: LayoutTemplate,
        label: "04 Application",
        title: "Apply the system to real marketing surfaces",
        copy:
            "We test the identity across website sections, social templates, pitch decks, ads, email headers, proposal pages, business cards, and launch creatives.",
        points: ["Website direction", "Social templates", "Sales assets"],
    },
    {
        icon: BookOpen,
        label: "05 Guidelines",
        title: "Package the rules so your team can stay consistent",
        copy:
            "We deliver organized files, brand rules, examples, usage notes, rollout priorities, and practical guidance for designers, marketers, founders, and partners.",
        points: ["Brand guide", "Asset library", "Rollout notes"],
    },
];

const deliverableGroups = [
    {
        icon: Fingerprint,
        title: "Identity Core",
        text: "Logo suite, wordmark, symbol, spacing rules, color versions, favicon direction, profile icons, and brand signature options.",
        items: ["Primary logo", "Secondary marks", "Icon set", "Usage rules"],
    },
    {
        icon: Palette,
        title: "Visual Language",
        text: "A complete design language for colors, typography, layouts, patterns, image treatment, illustration direction, and digital styling.",
        items: ["Color system", "Type scale", "Graphic motifs", "Image style"],
    },
    {
        icon: PenTool,
        title: "Voice & Copy",
        text: "Messaging blocks that help website, sales, ads, and social content sound clear and on-brand from day one.",
        items: ["Tagline routes", "Elevator pitch", "Headlines", "CTA language"],
    },
    {
        icon: Boxes,
        title: "Launch Assets",
        text: "Templates and high-priority surfaces that help the new identity show up quickly across your customer journey.",
        items: ["Social templates", "Deck cover", "Proposal cover", "Ad direction"],
    },
];

const brandSystemLayers = [
    {
        icon: Crown,
        title: "Positioning",
        copy: "The market role your brand should own and defend.",
    },
    {
        icon: Gem,
        title: "Identity",
        copy: "The visual signature people recognize before they read.",
    },
    {
        icon: Megaphone,
        title: "Voice",
        copy: "The language and tone that make the offer feel human.",
    },
    {
        icon: Workflow,
        title: "Rollout",
        copy: "The templates, rules, and handover process that keep it consistent.",
    },
];

const audienceFit = [
    { icon: Sparkles, label: "Startups preparing for launch" },
    { icon: ShieldCheck, label: "Service brands that need more trust" },
    { icon: Users, label: "Founder-led companies becoming teams" },
    { icon: Layers3, label: "Growing businesses with scattered visuals" },
    { icon: FileText, label: "Brands rebuilding decks, site, and sales assets" },
    { icon: BadgeCheck, label: "Premium offers that need sharper positioning" },
];

const faqs = [
    {
        question: "What is included in branding services?",
        answer:
            "Branding can include strategy, positioning, logo design, typography, color palette, visual identity, messaging, social templates, website direction, marketing collateral, and a practical brand guideline document.",
    },
    {
        question: "Can Hegxcorp redesign an existing brand?",
        answer:
            "Yes. We can refresh or rebuild an existing identity by auditing what works, removing inconsistency, improving visual quality, clarifying the message, and preparing a better rollout system.",
    },
    {
        question: "Do you only create logos?",
        answer:
            "No. A logo is only one part of the brand. We build the wider system around it so your website, social posts, presentations, ads, proposals, and sales assets feel connected.",
    },
    {
        question: "Will we get brand guidelines?",
        answer:
            "Yes. Guidelines are included because they protect consistency. Your team gets rules for logo usage, color, type, layouts, imagery, tone, examples, and practical asset handling.",
    },
    {
        question: "Can you also design website sections after branding?",
        answer:
            "Yes. We can extend the brand into website UI direction, landing pages, social media creatives, decks, campaign assets, and other marketing surfaces.",
    },
    {
        question: "How long does a branding project take?",
        answer:
            "A focused identity project can move quickly, while full strategy, visual system, messaging, templates, and guidelines usually need a more structured timeline. We recommend the right path after reviewing your scope.",
    },
];

function BrandingHero() {
    return (
        <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14">
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)",
                }}
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative mx-auto grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full min-w-0 max-w-[calc(100vw-3rem)] lg:max-w-none"
                >
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FC9C44] shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        Branding & Identity Design
                    </p>

                    <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                        Branding Services
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">
                        Build a premium, consistent, and memorable brand identity that helps customers understand your value, trust your business, and recognize you across every touchpoint.
                    </p>

                    <div className="mt-9 grid gap-4 sm:flex sm:flex-wrap">
                        <Link
                            to="/contact"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06133D] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10215a] sm:w-auto"
                        >
                            Start Brand Project
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            to="/services"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-[#06133D] transition hover:border-[#FC9C44] sm:w-auto"
                        >
                            View Services
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
                    className="relative w-full min-w-0 max-w-[calc(100vw-3rem)] rounded-[30px] border border-slate-200 bg-white p-5 shadow-xl lg:max-w-none"
                >
                    <motion.div
                        aria-hidden="true"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-5 -top-5 hidden rounded-2xl border border-[#FC9C44]/20 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44] shadow-lg md:block"
                    >
                        Premium
                    </motion.div>

                    <div className="min-w-0 rounded-[24px] bg-[#06133D] p-6 text-white">
                        <div className="mb-7 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                                    Brand System
                                </p>
                                <h2 className="mt-3 text-2xl font-black">Identity Command Center</h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]">
                                <Palette className="h-6 w-6" />
                            </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {heroFeatures.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <motion.div
                                        key={feature.label}
                                        initial={false}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                                        className="rounded-xl border border-white/10 bg-white/10 p-4"
                                    >
                                        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-[#FC9C44] text-[#FC9C44]">
                                            <Icon className="h-3.5 w-3.5" />
                                        </div>
                                        <h3 className="text-sm font-black">{feature.label}</h3>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4">
                            <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em]">
                                <span className="text-white/50">Launch Readiness</span>
                                <span className="text-[#FC9C44]">86%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[86%] rounded-full bg-[#FC9C44]" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProofBand() {
    return (
        <section className="border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
                {proofMetrics.map((metric, index) => (
                    <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="border border-[#E5E7EB] bg-white p-6"
                    >
                        <p className="text-4xl font-black text-[#06133D]">{metric.value}</p>
                        <h2 className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]">
                            {metric.label}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-[#5F6B7A]">{metric.copy}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

function BrandCapabilities() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = capabilityCards[activeIndex];
    const ActiveIcon = active.icon;

    return (
        <section className="overflow-hidden bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                            What We Build
                        </p>
                        <h2 className="mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl">
                            A complete branding system for trust, recall, and growth
                        </h2>
                    </motion.div>

                    <p className="text-base leading-8 text-[#5F6B7A]">
                        Hover or select a branding layer to see how strategy, visuals, voice, and guidelines work together. The goal is not just a better logo. It is a brand your team can use with confidence.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="grid gap-3">
                        {capabilityCards.map((capability, index) => {
                            const Icon = capability.icon;
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={capability.title}
                                    type="button"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onFocus={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group border p-5 text-left transition ${isActive
                                        ? "border-[#FC9C44] bg-[#FFF4E8]"
                                        : "border-[#E5E7EB] bg-white hover:border-[#FC9C44]/50"
                                        }`}
                                >
                                    <span className="flex items-start gap-4">
                                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-[#FC9C44] text-white" : "bg-[#06133D] text-white"
                                            }`}>
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <span>
                                            <span className="block text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                                                {capability.tag}
                                            </span>
                                            <span className="mt-2 block text-lg font-black text-[#06133D]">
                                                {capability.title}
                                            </span>
                                            <span className="mt-2 block text-sm leading-6 text-[#5F6B7A]">
                                                {capability.hook}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="relative min-h-[560px] overflow-hidden border border-[#E5E7EB] bg-[#06133D] p-6 text-white shadow-[0_28px_80px_-55px_rgba(6,19,61,0.9)] lg:p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.title}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -14 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative z-10 flex h-full flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-8 overflow-hidden border border-white/10 bg-white/5">
                                        <div className="relative h-145 overflow-hidden">
                                            <img
                                                src={active.image}
                                                alt={`${active.title} branding reference`}
                                                className="h-full w-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0"
                                                style={{ background: active.visual }}
                                            />
                                            <div className="absolute inset-0 bg-[#06133D]/35" />
                                            <motion.div
                                                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute bottom-5 left-5 grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/14 text-[#FC9C44] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] backdrop-blur"
                                            >
                                                <ActiveIcon className="h-8 w-8" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FC9C44]">
                                        {active.tag}
                                    </p>
                                    <h3 className="mt-3 text-3xl font-black">{active.title}</h3>
                                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                                        {active.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {active.pills.map((pill) => (
                                        <span
                                            key={pill}
                                            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/72"
                                        >
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceHighlights() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#FAFAF8] px-6 py-24 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="lg:sticky lg:top-28"
                >
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                        Branding Coverage
                    </p>
                    <h2 className="mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl">
                        Every part of the brand gets a clear job
                    </h2>
                    <p className="mt-6 text-base leading-8 text-[#5F6B7A]">
                        Strong branding turns scattered design into a repeatable identity. These are the layers Hegxcorp can plan, design, refine, and hand over as one usable brand system.
                    </p>

                    <div className="mt-9 grid gap-3">
                        {[
                            ["Strategy-led", "Every identity choice is tied to market position, audience trust, and business goals."],
                            // ["Launch-ready", "Your brand assets are prepared for website, social, sales, ads, documents, and presentations."],
                            // ["Team-friendly", "Clear rules help designers, marketers, founders, and partners use the brand consistently."],
                        ].map(([label, copy]) => (
                            <div key={label} className="border border-[#E5E7EB] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(6,19,61,0.45)]">
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                                    {label}
                                </p>
                                <p className="mt-2 text-sm font-semibold leading-6 text-[#516070]">
                                    {copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="border border-[#E5E7EB] bg-white">
                    {serviceHighlights.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={item.title} className="border-b border-[#E5E7EB] last:border-b-0">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                                >
                                    <span className="text-lg font-black text-[#06133D]">{item.title}</span>
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44]">
                                        <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-7 text-base font-semibold leading-8 text-[#516070]">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function BrandProcess() {
    return (
        <section className="relative overflow-hidden bg-[#06133D] px-6 py-24 text-white lg:px-10">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "58px 58px",
                }}
            />

            <div className="relative mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                        Our Branding Process
                    </p>
                    <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                        From unclear identity to a launch-ready brand system
                    </h2>
                    <p className="mt-6 text-base leading-8 text-white/68">
                        We move from insight to execution with enough structure for quality and enough flexibility for creative direction. Each stage gives the next stage better inputs.
                    </p>
                </div>

                <div className="grid gap-5">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.article
                                key={step.label}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                className="grid gap-6 border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:grid-cols-[190px_1fr] md:items-start"
                            >
                                <div>
                                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44] text-white">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]">
                                        {step.label}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-black">{step.title}</h3>
                                    <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{step.copy}</p>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {step.points.map((point) => (
                                            <span
                                                key={point}
                                                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70"
                                            >
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function DeliverablesSection() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                            Deliverables
                        </p>
                        <h2 className="mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl">
                            Practical assets your brand can use immediately
                        </h2>
                    </div>

                    <p className="text-base leading-8 text-[#5F6B7A]">
                        The output is designed for real business use. Your team gets clear creative direction, organized files, and templates that make the new identity easier to apply every day.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {deliverableGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.article
                                key={group.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.48, delay: index * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/50 hover:bg-white hover:shadow-[0_24px_70px_-50px_rgba(6,19,61,0.45)]"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-black text-[#06133D]">{group.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{group.text}</p>
                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="flex items-center gap-2 text-sm font-bold text-[#06133D]">
                                            <CheckCircle2 className="h-4 w-4 text-[#FC9C44]" />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function BrandSystemSection() {
    return (
        <section className="overflow-hidden bg-[#FAFAF8] px-6 py-24 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                        Brand Operating System
                    </p>
                    <h2 className="mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl">
                        Consistency is designed before the brand goes live
                    </h2>
                    <p className="mt-6 text-base leading-8 text-[#5F6B7A]">
                        A premium brand should not depend on one designer remembering every detail. We define repeatable rules for messaging, visuals, templates, and rollout so every new asset feels connected.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {["Website", "Social media", "Sales decks", "Ads", "Email", "Documents"].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#06133D]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {brandSystemLayers.map((layer, index) => {
                        const Icon = layer.icon;

                        return (
                            <motion.article
                                key={layer.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="border border-[#E5E7EB] bg-white p-6"
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3.4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF4E8] text-[#FC9C44]"
                                >
                                    <Icon className="h-7 w-7" />
                                </motion.div>
                                <h3 className="text-xl font-black text-[#06133D]">{layer.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">{layer.copy}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function AudienceSection() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#FC9C44]">
                        Who This Is For
                    </p>
                    <h2 className="mt-4 text-4xl font-black leading-tight text-[#06133D] md:text-5xl">
                        Branding for teams that need to look as strong as they are
                    </h2>
                </div>

                <div className="grid gap-px overflow-hidden border border-[#E5E7EB] bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3">
                    {audienceFit.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.04 }}
                                className="bg-[#FAFAF8] p-7"
                            >
                                <Icon className="mb-6 h-8 w-8 text-[#FC9C44]" />
                                <h3 className="text-xl font-black leading-8 text-[#06133D]">{item.label}</h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.section
            className="relative overflow-hidden bg-white px-6 py-24 lg:px-10"
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            viewport={{ amount: 0.28 }}
        >
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 0.16, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="pointer-events-none absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1600&q=80)",
                        }}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="pointer-events-none absolute inset-0 bg-white/88"
                    />
                )}
            </AnimatePresence>

            <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-10">
                <div className="pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" />
                <div className="pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h2 className="max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl">
                            Frequently
                            <br />
                            Asked Questions
                        </h2>

                        <p className="mt-5 text-xl font-medium text-[#2E2E2E]">
                            Find answers to the most common questions.
                        </p>
                    </div>

                    <div>
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div key={faq.question} className="border-b border-[#BFD0DF]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="group flex w-full items-start gap-5 py-7 text-left"
                                    >
                                        <span className="mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]">
                                            {isOpen ? "-" : "+"}
                                        </span>

                                        <span className="flex-1">
                                            <span
                                                className={`block text-lg font-semibold leading-7 ${isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"
                                                    }`}
                                            >
                                                {faq.question}
                                            </span>

                                            {isOpen && (
                                                <span className="mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]">
                                                    {faq.answer}
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </motion.section>
    );
}

function ProjectContactCTA() {
    return (
        <section className="bg-white px-6 py-20 lg:px-10">
            <div className="mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl">
                <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                            Start Your Project
                        </p>
                        <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight">
                            Need a secure web application built for real business workflows?
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                            Share your idea, workflow, dashboard requirement, portal
                            concept, or SaaS plan. We will help you turn it into a clear
                            development roadmap.
                        </p>
                    </div>

                    <div className="border-l border-white/15 pl-8">
                        <Layers3 className="mb-5 h-8 w-8 text-[#FC9C44]" />
                        <h3 className="text-2xl font-black">Ready to build?</h3>
                        <p className="mt-3 text-sm leading-7 text-white/65">
                            Get planning, UI, frontend, backend, APIs, testing, launch,
                            and maintenance in one place.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
                        >
                            Contact Us
                            <Rocket className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BrandingServicePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <BrandingHero />
                <ProofBand />
                <BrandCapabilities />
                <ServiceHighlights />
                <BrandProcess />
                <DeliverablesSection />
                <BrandSystemSection />
                <AudienceSection />
                <FAQSection />
                <ProjectContactCTA />
            </main>

            <Footer />
        </div>
    );
}
