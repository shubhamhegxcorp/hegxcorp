import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Briefcase,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    Cloud,
    Cross,
    FileText,
    Gauge,
    GraduationCap,
    Handshake,
    House,
    Layers,
    LayoutTemplate,
    MousePointerClick,
    Palette,
    Rocket,
    Search,
    Settings,
    Sparkles,
    ShoppingCart,
    Target,
    Layers3
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";
import { ZigZagGrowthStack } from "@/components/site/ZigZagGrowthStack";

export const Route = createFileRoute("/service/ui-ux-design")({
    head: () => ({
        meta: [
            { title: "UI/UX Design Services | Hegxcorp" },
            {
                name: "description",
                content:
                    "Premium UI/UX design services by Hegxcorp for websites, SaaS products, mobile apps, landing pages, design systems, user research, wireframes, prototypes, and conversion-focused digital experiences.",
            },
            { property: "og:title", content: "UI/UX Design Services | Hegxcorp" },
            {
                property: "og:description",
                content:
                    "Design digital experiences that feel premium, reduce friction, and convert visitors into qualified leads and customers.",
            },
        ],
    }),
    component: UiUxDesignPage,
} as never);

const uxCapabilities = [
    {
        icon: Search,
        title: "UX Research",
        tag: "User Clarity",
        hook: "Design decisions should come from real behavior, not assumptions.",
        description:
            "We study your audience, business goals, competitors, analytics, user journeys, objections, and conversion friction so the experience starts from evidence.",
        pills: ["Personas", "Journey maps", "Heuristic review", "Analytics"],
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=75",
    },
    {
        icon: LayoutTemplate,
        title: "Wireframes",
        tag: "Structure",
        hook: "Map the experience before visual polish hides the weak points.",
        description:
            "We create page flows, information architecture, section hierarchy, low-fidelity wireframes, content blocks, and decision paths before moving into final UI.",
        pills: ["IA", "User flows", "Layouts", "Content hierarchy"],
        image:
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=900&q=75",
    },
    {
        icon: Palette,
        title: "Visual UI Design",
        tag: "Premium Interface",
        hook: "Make the product look trustworthy before the user reads a word.",
        description:
            "We design polished screens with typography, spacing, colour systems, component states, interaction cues, and brand-aligned visual direction.",
        pills: ["Art direction", "Typography", "Components", "States"],
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=75",
    },
    {
        icon: MousePointerClick,
        title: "Conversion UX",
        tag: "Lead Flow",
        hook: "Every important click should feel obvious, useful, and low-friction.",
        description:
            "We improve CTA hierarchy, form UX, trust placement, landing page flow, microcopy, proof sections, and mobile decision moments to increase qualified actions.",
        pills: ["CTA paths", "Forms", "Trust cues", "Landing pages"],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
    },
    {
        icon: Layers,
        title: "Design Systems",
        tag: "Scale",
        hook: "Your next page should not need a redesign from zero.",
        description:
            "We build reusable design systems with components, grids, tokens, responsive rules, documentation, and handoff notes for faster production.",
        pills: ["Tokens", "Components", "Guidelines", "Handoff"],
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=75",
    },
    {
        icon: Gauge,
        title: "Usability Optimization",
        tag: "Friction Removal",
        hook: "A premium interface should also be fast, clear, and easy to finish.",
        description:
            "We review navigation, accessibility, responsive behavior, visual clarity, task completion, content density, and interaction friction across key screens.",
        pills: ["Accessibility", "Mobile UX", "Navigation", "QA"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75",
    },
];

const proofStats = [
    ["8+", "Core experience layers reviewed before final UI"],
    ["40%", "Fewer confusing decisions through cleaner flow planning"],
    ["3x", "More reusable components for faster future pages"],
    ["100%", "Responsive design handoff with interaction states"],
];

const blueprintSteps = [
    {
        icon: Search,
        label: "01",
        title: "Discover the buying journey",
        copy:
            "We study your current website, target users, market positioning, analytics signals, call-to-action paths, competitor pages, and the objections stopping people from taking the next step.",
    },
    {
        icon: FileText,
        label: "02",
        title: "Shape structure and content priority",
        copy:
            "We define information architecture, page hierarchy, core messages, trust signals, form moments, content density, and conversion paths before we add visual styling.",
    },
    {
        icon: Palette,
        label: "03",
        title: "Design the premium interface system",
        copy:
            "We create polished screens with typography, colour, spacing, cards, states, visual rhythm, responsive rules, and brand-led interaction details that feel intentional.",
    },
    {
        icon: Settings,
        label: "04",
        title: "Prepare build-ready handoff",
        copy:
            "We package components, annotations, responsive behavior, edge states, copy notes, and design QA guidance so developers can ship the experience accurately.",
    },
];

const uxGrowthStack = [
    {
        icon: Target,
        label: "Strategy",
        title: "Positioning-led experience design",
        copy:
            "We connect your service promise, customer motivation, proof points, and business goal into a clear experience strategy before screens are designed.",
        detailTitle: "The interface starts with the offer.",
        detailCopy:
            "A beautiful page cannot fix unclear positioning. We clarify what the user should understand, trust, compare, and do at every important point.",
        detailPoints: ["Audience logic", "Offer clarity", "Conversion intent"],
    },
    {
        icon: Layers,
        label: "System",
        title: "Reusable UI foundations",
        copy:
            "We build visual systems that keep every landing page, dashboard, and campaign screen consistent without slowing down future production.",
        detailTitle: "Every component gets a job.",
        detailCopy:
            "Buttons, sections, form blocks, cards, badges, icons, modals, and navigation states are designed as reusable patterns instead of one-off decoration.",
        detailPoints: ["Design tokens", "Component states", "Responsive rules"],
    },
    {
        icon: MousePointerClick,
        label: "Conversion",
        title: "Decision paths that remove hesitation",
        copy:
            "We organize pages so prospects see the right value, proof, pricing context, objections, and contact options before friction makes them leave.",
        detailTitle: "Premium UX still has to sell.",
        detailCopy:
            "We improve CTA placement, form length, reassurance copy, social proof, comparison blocks, and page rhythm around the action you want users to take.",
        detailPoints: ["Lead forms", "CTA hierarchy", "Trust cues"],
    },
    {
        icon: Gauge,
        label: "Performance",
        title: "Fast, responsive, accessible interfaces",
        copy:
            "We design for mobile behavior, readable density, performance-minded media, accessible contrast, tap targets, and clean handoff for front-end build.",
        detailTitle: "A polished UI should not become heavy.",
        detailCopy:
            "We consider how each design decision affects loading, scanning, implementation effort, and long-term maintainability.",
        detailPoints: ["Mobile QA", "Accessibility", "Build-ready specs"],
    },
];

const serviceItems = [
    {
        title: "Website UI/UX Design",
        answer:
            "We design premium website experiences for service businesses, SaaS brands, ecommerce companies, agencies, consultants, and enterprise teams. This includes homepage design, service pages, landing pages, pricing pages, product pages, case study layouts, contact flows, navigation, footer systems, and reusable section libraries.",
    },
    {
        title: "Landing Page UX & Conversion Design",
        answer:
            "We improve landing page structure, offer clarity, hero messaging, above-the-fold CTA paths, proof placement, form experience, objection handling, content sequencing, and responsive layout so campaigns have a stronger chance to convert traffic into leads.",
    },
    {
        title: "SaaS & Web App Interface Design",
        answer:
            "We design dashboards, onboarding flows, empty states, data tables, filters, settings screens, account pages, product navigation, feature flows, and interaction states for software teams that need clean and scalable user interfaces.",
    },
    {
        title: "Mobile App UX/UI",
        answer:
            "We design mobile app flows for discovery, onboarding, account setup, browsing, booking, checkout, messaging, profile management, notifications, and repeat engagement with careful attention to tap targets, flow depth, and small-screen clarity.",
    },
    {
        title: "Design System & Component Library",
        answer:
            "We create component libraries, UI tokens, typography scales, colour systems, grids, button states, cards, form fields, modals, navigation patterns, usage notes, and responsive behavior documentation for faster design and development.",
    },
    {
        title: "UX Audit & Redesign Roadmap",
        answer:
            "We review your current experience for unclear hierarchy, poor messaging, broken responsive layouts, weak trust cues, form friction, navigation problems, accessibility issues, and conversion leaks, then turn findings into a prioritized redesign roadmap.",
    },
];

const processItems = [
    {
        title: "Experience Audit",
        answer:
            "We review your current digital experience, analytics signals, primary pages, conversion paths, mobile behavior, navigation, forms, content clarity, design consistency, and competitor benchmarks.",
    },
    {
        title: "UX Strategy & Page Architecture",
        answer:
            "We define target users, primary actions, page goals, information architecture, content blocks, user flows, CTA hierarchy, proof requirements, and the structure of the design system.",
    },
    {
        title: "Wireframes & Interaction Planning",
        answer:
            "We map page sections, screen flows, states, form steps, content order, navigation logic, and interaction behavior before detailed visual design begins.",
    },
    {
        title: "High-Fidelity UI Design",
        answer:
            "We create polished desktop and mobile designs with typography, colour, spacing, imagery direction, cards, icons, component states, motion notes, and brand-aligned visual treatment.",
    },
    {
        title: "Prototype, Feedback & Refinement",
        answer:
            "We use prototypes and review rounds to test flow clarity, stakeholder feedback, mobile layout, content hierarchy, CTA visibility, and user confidence before handoff.",
    },
    {
        title: "Developer Handoff & Design QA",
        answer:
            "We prepare build notes, component guidance, responsive states, spacing rules, asset notes, and QA feedback so the implemented experience matches the approved design.",
    },
];

const deliverables = [
    "UX audit and friction report",
    "User journey and page-flow mapping",
    "Information architecture and wireframes",
    "High-fidelity desktop and mobile UI screens",
    "Interactive prototype for review",
    "Landing page and lead form optimization",
    "Design system foundations and component states",
    "Developer handoff notes and design QA support",
    "Includes UX structure, premium UI, responsive layouts, and optimized conversion paths",
    "Designed for websites, SaaS products, mobile apps, and landing pages",
];

const industries = [
    { icon: Handshake, label: "B2B services" },
    { icon: Cloud, label: "SaaS platforms" },
    { icon: ShoppingCart, label: "Ecommerce brands" },
    { icon: Cross, label: "Healthcare and clinics" },
    { icon: GraduationCap, label: "Education and coaching" },
    { icon: House, label: "Real estate and local services" },
    { icon: Briefcase, label: "Finance and professional services" },
    { icon: Rocket, label: "Startups and founder-led brands" },
];

const faqs = [
    {
        question: "What are UI/UX design services?",
        answer:
            "UI/UX design services help businesses plan, structure, design, and improve digital experiences. This can include research, wireframes, user flows, visual interface design, prototypes, design systems, landing pages, websites, mobile apps, SaaS dashboards, and conversion-focused redesigns.",
    },
    {
        question: "Can you redesign my existing website or app?",
        answer:
            "Yes. We can audit your current experience, identify friction, rebuild the page structure, improve visual quality, redesign key screens, create a new component system, and support handoff for implementation.",
    },
    {
        question: "Do you design only visuals or also user journeys?",
        answer:
            "We handle both. The visual layer matters, but the strongest results come from clear user journeys, content hierarchy, action paths, trust signals, mobile behavior, and conversion structure.",
    },
    {
        question: "Can UI/UX design improve lead generation?",
        answer:
            "Yes. Better UX can improve clarity, reduce form friction, improve CTA visibility, build trust faster, and make key actions easier. For lead-focused pages, we design around the full decision path rather than only making the page look good.",
    },
    {
        question: "Do you provide developer handoff?",
        answer:
            "Yes. We can provide responsive screen designs, component states, spacing guidance, copy notes, asset direction, interaction notes, and design QA feedback so development teams can implement the approved UI accurately.",
    },
    {
        question: "How long does a UI/UX design project take?",
        answer:
            "A landing page or small website redesign can often move quickly in one to three weeks. Larger websites, SaaS platforms, mobile apps, and design systems may take longer depending on the number of screens, research depth, and review cycles.",
    },
];

function UiUxHero() {
    return (
        <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb:14">
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

            <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                >
                    <p className=" inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
                        <Sparkles size={10} strokeWidth={2} />
                        Premium UI/UX Design
                    </p>

                    <h1
                        className="max-w-4xl font-black leading-[1.02]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(46px, 6vw, 86px)",
                        }}
                    >
                        Digital experiences
                        <span className="block text-[#FC9C44]">people trust, use,</span>
                        and act on
                    </h1>

                    <p
                        className="mt-7 max-w-2xl text-white/74"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "clamp(16px, 1.25vw, 19px)",
                            lineHeight: 1.75,
                        }}
                    >
                        Hegxcorp designs websites, SaaS interfaces, mobile app flows, landing pages, and design systems that feel premium, guide users clearly, and support measurable business growth.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
                        >
                            Start a Design Project
                            <ArrowRight size={16} strokeWidth={2} />
                        </a>

                        <a
                            href="/case-studies"
                            className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12"
                        >
                            Explore Case Studies
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 28, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="rounded-[28px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_34px_90px_-42px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                        <div className="rounded-[22px] border border-white/10 bg-[#071333]/92 p-6">
                            <div className="mb-7 flex items-center justify-between gap-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]">
                                        Experience Blueprint
                                    </p>
                                    <h2 className="mt-2 text-2xl font-black text-white">
                                        UI/UX Design System
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                                    <Palette size={22} strokeWidth={2} />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                                        Screen Flow
                                    </p>
                                    <div className="mt-5 grid gap-3">
                                        {["Discover", "Compare", "Trust", "Contact"].map((step, index) => (
                                            <div key={step} className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FC9C44] text-[10px] font-black text-white">
                                                    {index + 1}
                                                </span>
                                                <span className="text-sm font-bold text-white/82">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                                            Interface Health
                                        </p>
                                        <span className="rounded-full bg-[#FC9C44]/18 px-3 py-1 text-[11px] font-black text-[#FC9C44]">
                                            Mapped
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            ["Visual hierarchy", "92%"],
                                            ["Form clarity", "86%"],
                                            ["Mobile flow", "94%"],
                                        ].map(([label, value]) => (
                                            <div key={label}>
                                                <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.1em]">
                                                    <span className="text-white/58">{label}</span>
                                                    <span className="text-white">{value}</span>
                                                </div>
                                                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]"
                                                        style={{ width: value }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                                {["Wireframes", "Prototype", "Handoff"].map((item) => (
                                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                                        <CheckCircle2 className="mb-4 h-5 w-5 text-[#FC9C44]" />
                                        <p className="text-sm font-black text-white">{item}</p>
                                        <p className="mt-2 text-xs leading-5 text-white/54">
                                            Planned with responsive states and conversion flow.
                                        </p>
                                    </div>
                                ))}
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
        <section className="border-y border-[#EAEAEA] bg-white px-6 py-10 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
                {proofStats.map(([value, label]) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="border border-[#EAEAEA] bg-[#FAFAF8] p-5"
                    >
                        <p className="text-4xl font-black text-[#06133D]">{value}</p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-[#5F6B7A]">{label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function UxCapabilities() {
    const [activeCapability, setActiveCapability] = useState(0);
    const activeItem = uxCapabilities[activeCapability];

    return (
        <section className="bg-[#F7F8FB] px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]">
                        UI/UX Capabilities
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4.4vw, 64px)",
                        }}
                    >
                        Design that makes the next action feel natural
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]">
                        Every design layer is planned to reduce confusion, make value easier to understand, and support a stronger conversion path across desktop and mobile.
                    </p>
                </div>

                <div className="seo-split-reveal">
                    <div className="seo-split-left">
                        <p className="seo-split-eyebrow">Experience Layers</p>
                        <h3 className="seo-split-heading">From user insight to build-ready interface</h3>
                        <p className="seo-split-body">
                            We combine research, structure, interface design, conversion thinking, and system documentation into one practical design workflow.
                        </p>

                        <div className="seo-service-list">
                            {uxCapabilities.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = activeCapability === index;

                                return (
                                    <button
                                        key={item.title}
                                        type="button"
                                        onMouseEnter={() => setActiveCapability(index)}
                                        onFocus={() => setActiveCapability(index)}
                                        onClick={() => setActiveCapability(index)}
                                        className={`seo-service-item ${isActive ? "active" : ""}`}
                                    >
                                        <span className="seo-service-icon">
                                            <Icon size={17} strokeWidth={2} />
                                        </span>
                                        <span className="seo-service-copy">
                                            <span className="seo-service-name">{item.title}</span>
                                            <span className="seo-service-tag">{item.tag}</span>
                                        </span>
                                        <ChevronRight className="seo-service-arrow" size={16} strokeWidth={2} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="seo-split-right">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={activeItem.title}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.99 }}
                                transition={{ duration: 0.42, ease: "easeOut" }}
                                className="seo-capability-slide"
                            >
                                <div
                                    className="seo-slide-bg service-slide-bg"
                                    style={{ backgroundImage: `url("${activeItem.image}")` }}
                                />
                                <div className="seo-slide-tint service-slide-tint" />
                                <div className="seo-slide-content">
                                    <span className="seo-slide-kicker">{activeItem.tag}</span>
                                    <h3 className="seo-slide-title">{activeItem.title}</h3>
                                    <p className="seo-slide-hook">"{activeItem.hook}"</p>
                                    <p className="seo-slide-desc">{activeItem.description}</p>
                                    <div className="seo-slide-pills">
                                        {activeItem.pills.map((pill) => (
                                            <span key={pill} className="seo-slide-pill">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceBlueprint() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 grid gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12">
                    <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]">
                            Experience Blueprint
                        </p>
                        <h2
                            className="font-black leading-tight text-[#06133D]"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "clamp(34px, 4.4vw, 62px)",
                            }}
                        >
                            A complete design process for serious digital growth
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-[#5F6B7A]">
                        Strong UI/UX design is not only a screen mockup. It is a working system of page logic, user psychology, visual hierarchy, responsive behavior, and handoff detail that helps your team move faster.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {blueprintSteps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.article
                                key={step.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-90px" }}
                                transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                                className="group border border-[#E2E6EF] bg-[#FAFAF8] p-7 transition hover:-translate-y-1 hover:border-[#FC9C44]/55 hover:bg-white hover:shadow-[0_24px_68px_-48px_rgba(6,19,61,0.5)]"
                            >
                                <div className="mb-8 flex items-start justify-between gap-5">
                                    <span className="flex h-14 w-14 items-center justify-center bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]">
                                        <Icon size={23} strokeWidth={2} />
                                    </span>
                                    <span className="text-5xl font-black leading-none text-[#E3E7EF] transition group-hover:text-[#FC9C44]/22">
                                        {step.label}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black leading-tight text-[#06133D]">{step.title}</h3>
                                <p className="mt-5 text-base leading-8 text-[#4F5B76]">{step.copy}</p>
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
        <section className="relative overflow-hidden bg-[#06133D] px-6 py-24 text-white lg:px-10">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "52px 52px",
                }}
            />

            <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.76fr_1fr] lg:items-start lg:gap-24">
                <div>
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]">
                        What You Get
                    </p>
                    <h2
                        className="font-black leading-tight"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4.4vw, 62px)",
                        }}
                    >
                        Detailed design assets your team can actually build from
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                        We keep deliverables practical. The goal is not a pretty file that sits unused. The goal is a clear experience system that helps marketing, design, and development ship better pages faster.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:pt-1">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, delay: index * 0.035, ease: "easeOut" }}
                            className="flex items-start gap-3 border border-white/10 bg-white/[0.06] p-4"
                        >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FC9C44]" />
                            <span className="text-sm font-bold leading-6 text-white/86">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function IndustriesSection() {
    return (
        <section className="bg-[#FAFAF8] px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#FC9C44]">
                        Who It Helps
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4.4vw, 62px)",
                        }}
                    >
                        UI/UX design for brands that need clarity, trust, and action
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5F6B7A]">
                        Whether you are rebuilding a service website, improving a product flow, or launching a campaign page, the design should make your value easier to understand and easier to choose.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <motion.div
                                key={industry.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.42, delay: index * 0.035, ease: "easeOut" }}
                                className="group border border-[#E2E6EF] bg-white p-5 transition hover:-translate-y-1 hover:border-[#FC9C44]/60 hover:shadow-[0_18px_48px_-36px_rgba(6,19,61,0.38)]"
                            >
                                <span className="mb-5 flex h-11 w-11 items-center justify-center bg-[#FFF4E8] text-[#FC9C44] transition group-hover:bg-[#FC9C44] group-hover:text-white">
                                    <Icon size={19} strokeWidth={2} />
                                </span>
                                <p className="text-base font-black text-[#06133D]">{industry.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function UiUxDesignPage() {
    const [openService, setOpenService] = useState<number | null>(null);
    const [openProcess, setOpenProcess] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <UiUxHero />

                <ProofBand />

                <UxCapabilities />

                <ExperienceBlueprint />

                <ZigZagGrowthStack
                    eyebrow="UI/UX Growth Stack"
                    title="Premium design works best when strategy, interface, and conversion move together"
                    description="A stronger digital experience connects business goals, user needs, visual clarity, component systems, and measurable conversion behavior."
                    cards={uxGrowthStack}
                />

                <DeliverablesSection />

                <section className="bg-white py-20">
                    <div className="mx-auto max-w-[1050px] px-6 lg:px-10">
                        <h2
                            className="mb-20 text-center font-black leading-tight text-[#ebc671]"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "clamp(36px, 4.4vw, 64px)",
                            }}
                        >
                            Highlighted
                            <br />
                            Services &amp; Process
                        </h2>

                        <div className="grid gap-x-24 gap-y-12 md:grid-cols-2">
                            <div className="space-y-0">
                                {serviceItems.map((item, index) => {
                                    const isOpen = openService === index;

                                    return (
                                        <div key={item.title} className="border-b border-[#06133D]">
                                            <button
                                                type="button"
                                                onClick={() => setOpenService(isOpen ? null : index)}
                                                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                                            >
                                                <span className="text-lg font-semibold text-[#06133D]">
                                                    {item.title}
                                                </span>

                                                <ChevronRight
                                                    className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"
                                                        }`}
                                                />
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, y: -6 }}
                                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: -6 }}
                                                        transition={{ duration: 0.24, ease: "easeOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="seo-disclosure-answer pb-7 pr-10">
                                                            {item.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="space-y-0">
                                {processItems.map((item, index) => {
                                    const isOpen = openProcess === index;

                                    return (
                                        <div key={item.title} className="border-b border-[#06133D]">
                                            <button
                                                type="button"
                                                onClick={() => setOpenProcess(isOpen ? null : index)}
                                                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                                            >
                                                <span className="text-lg font-semibold text-[#06133D]">
                                                    {item.title}
                                                </span>

                                                <ChevronRight
                                                    className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"
                                                        }`}
                                                />
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, y: -6 }}
                                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: -6 }}
                                                        transition={{ duration: 0.24, ease: "easeOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="seo-disclosure-answer pb-7 pr-10">
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
                    </div>
                </section>

                <IndustriesSection />

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


            </main>

            <Footer />
        </div>
    );
}
