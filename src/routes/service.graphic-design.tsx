import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    BarChart3,
    Brush,
    Camera,
    CheckCircle2,
    ChevronRight,
    Clapperboard,
    FileText,
    Image,
    LayoutTemplate,
    Megaphone,
    Palette,
    Presentation,
    Target,
    Layers3,
    Rocket,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";
import { ZigZagGrowthStack } from "@/components/site/ZigZagGrowthStack";

export const Route = createFileRoute("/service/graphic-design")({
    head: () => ({
        meta: [
            { title: "Graphic Design Services | Hegxcorp" },
            {
                name: "description",
                content:
                    "Graphic design services by Hegxcorp including social media creatives, ad creatives, brochures, pitch decks, brand collateral, campaign visuals, packaging direction, and marketing design systems.",
            },
        ],
    }),
    component: GraphicDesignPage,
} as never);

const graphicCapabilities = [
    {
        icon: Image,
        title: "Social Media Creatives",
        tag: "Daily Visibility",
        hook: "Create scroll-stopping posts that still feel on-brand.",
        description:
            "We design social media posts, carousels, stories, profile banners, reel covers, launch posts, and reusable templates that help your brand stay active with visual consistency.",
        pills: ["Posts", "Carousels", "Stories", "Templates"],
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
        visual:
            "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.7), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.1), rgba(6,19,61,0.44))",
    },
    {
        icon: Megaphone,
        title: "Ad Creative Design",
        tag: "Campaign Assets",
        hook: "Turn offers into clear visual ads people can act on.",
        description:
            "We design static ads, carousel ads, offer graphics, retargeting visuals, lead magnet creatives, and campaign variants for Meta, Google Display, LinkedIn, and landing-page funnels.",
        pills: ["Meta ads", "Display ads", "Variants", "Offers"],
        image:
            "https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=75",
        visual:
            "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
    },
    {
        icon: FileText,
        title: "Brochures & Collateral",
        tag: "Sales Support",
        hook: "Make your services, offers, and proof easier to explain.",
        description:
            "We create brochures, flyers, one-pagers, company profiles, proposal covers, rate cards, event handouts, and printable assets that support real sales conversations.",
        pills: ["Brochures", "Flyers", "Profiles", "One-pagers"],
        image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=900&q=75",
        visual:
            "radial-gradient(circle at 22% 20%, rgba(252,156,68,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.4))",
    },
    {
        icon: Presentation,
        title: "Pitch Deck Design",
        tag: "Investor & Sales Decks",
        hook: "Package your story into polished slides that feel premium.",
        description:
            "We design pitch decks, sales decks, capability presentations, case study slides, report layouts, and visual storytelling systems that help teams present with confidence.",
        pills: ["Pitch decks", "Sales decks", "Reports", "Case studies"],
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=75",
        visual:
            "radial-gradient(circle at 72% 24%, rgba(252,156,68,0.64), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.04), rgba(6,19,61,0.46))",
    },
    {
        icon: Palette,
        title: "Brand Collateral",
        tag: "Identity Extension",
        hook: "Carry your visual identity into every everyday asset.",
        description:
            "We extend your brand into business cards, letterheads, email signatures, certificates, folders, templates, icons, stationery, and internal communication graphics.",
        pills: ["Stationery", "Templates", "Icons", "Documents"],
        image:
            "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=900&q=75",
        visual:
            "radial-gradient(circle at 20% 28%, rgba(252,156,68,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
    },
    {
        icon: Clapperboard,
        title: "Campaign Visual Systems",
        tag: "Creative Direction",
        hook: "Build a visual world for launches, offers, and events.",
        description:
            "We create campaign key visuals, launch graphics, event creatives, festive assets, sale campaigns, banner families, and creative rules so every campaign feels connected.",
        pills: ["Launches", "Events", "Banners", "Key visuals"],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=75",
        visual:
            "radial-gradient(circle at 76% 20%, rgba(255,212,170,0.62), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))",
    },
];

const graphicServices = [
    {
        title: "Social Media Post Design",
        answer:
            "We design polished social media posts, carousels, stories, covers, reel thumbnails, profile banners, launch posts, and reusable templates that match your brand and content goals.",
    },
    {
        title: "Ad Creatives",
        answer:
            "We create ad visuals for Meta, Google Display, LinkedIn, retargeting, lead magnets, product offers, and conversion campaigns with clear hierarchy and strong CTAs.",
    },
    {
        title: "Brochure & Flyer Design",
        answer:
            "We design brochures, company profiles, one-pagers, event flyers, service sheets, product sheets, and printable marketing assets that explain your offer clearly.",
    },
    {
        title: "Presentation & Pitch Decks",
        answer:
            "We turn your story, proof, services, numbers, and case studies into clean slide decks for sales meetings, investor conversations, proposals, and internal reports.",
    },
    {
        title: "Brand Collateral",
        answer:
            "We create business cards, letterheads, email signatures, certificates, folders, icon sets, internal templates, and branded documents for everyday business use.",
    },
    {
        title: "Campaign & Launch Design",
        answer:
            "We build visual directions for campaigns, product launches, festive promotions, events, announcements, offers, and seasonal marketing moments.",
    },
    {
        title: "Print & Digital Adaptations",
        answer:
            "We adapt core designs across digital banners, print formats, social dimensions, website sections, email headers, WhatsApp creatives, and sales documents.",
    },
    {
        title: "Creative Design Audit",
        answer:
            "We review your existing graphics, brand consistency, layout quality, message clarity, content hierarchy, format usage, and opportunities to improve visual trust.",
    },
];

const graphicServiceTracks = [
    {
        icon: Image,
        title: "Social Media Creative Design",
        copy:
            "Daily posts, carousel systems, stories, reel covers, launch posts, profile banners, and campaign templates designed so your social presence looks active, premium, and consistent.",
        points: ["Posts", "Carousels", "Stories", "Templates"],
    },
    {
        icon: Megaphone,
        title: "Paid Ad Creative Design",
        copy:
            "Static ads, offer creatives, carousel ads, retargeting visuals, lead magnet graphics, and A/B creative variants built around message clarity and campaign action.",
        points: ["Meta ads", "Google Display", "LinkedIn", "Variants"],
    },
    {
        icon: FileText,
        title: "Brochures, Flyers & One-Pagers",
        copy:
            "Sales-ready collateral for services, offers, products, events, company profiles, rate cards, handouts, and printable marketing assets that explain value quickly.",
        points: ["Brochures", "Flyers", "Profiles", "One-pagers"],
    },
    {
        icon: Presentation,
        title: "Pitch Deck & Presentation Design",
        copy:
            "Investor decks, sales presentations, proposal decks, case study slides, reports, training decks, and visual storytelling systems for stronger business conversations.",
        points: ["Pitch decks", "Sales decks", "Reports", "Case studies"],
    },
    {
        icon: Palette,
        title: "Brand Collateral & Identity Assets",
        copy:
            "Business cards, letterheads, email signatures, certificates, folders, stationery, icon sets, brand templates, and internal documents that keep your identity consistent.",
        points: ["Stationery", "Icons", "Documents", "Templates"],
    },
    {
        icon: Clapperboard,
        title: "Campaign Visual Systems",
        copy:
            "Key visuals, launch graphics, festive campaigns, event assets, offer banners, announcement kits, and format families that make every campaign feel connected.",
        points: ["Key visuals", "Launches", "Events", "Banners"],
    },
    {
        icon: LayoutTemplate,
        title: "Reusable Design Templates",
        copy:
            "Editable visual systems for social, ads, presentations, sales assets, and internal communication so your team can move faster without losing brand quality.",
        points: ["Editable files", "Layouts", "Rules", "Handoff"],
    },
    {
        icon: Camera,
        title: "Website, Email & Digital Graphics",
        copy:
            "Hero graphics, section visuals, email headers, blog graphics, landing page assets, thumbnails, banners, and digital campaign visuals for stronger online presentation.",
        points: ["Hero assets", "Email headers", "Banners", "Thumbnails"],
    },
];

const graphicValuePoints = [
    "Consistent design makes every touchpoint feel like one brand instead of scattered one-off creatives.",
    "Reusable templates reduce turnaround time for social posts, ads, decks, campaign graphics, and sales assets.",
    "Better hierarchy helps people understand the offer faster, especially in ads, carousels, brochures, and pitch decks.",
    "Creative variants give campaigns more room to test hooks, CTAs, formats, and visual directions without starting from zero.",
];

const graphicGrowthStack = [
    {
        icon: Target,
        label: "Creative Direction",
        title: "Design With a Clear Communication Goal",
        copy:
            "We define what each asset needs to communicate, who it is for, where it will be used, and which action it should support before visuals are created.",
        detailTitle: "The brief behind every visual",
        detailCopy:
            "Creative direction keeps design from becoming random decoration. It aligns message, format, audience, offer, hierarchy, and brand tone.",
        detailPoints: ["Audience context", "Message hierarchy", "Channel purpose"],
    },
    {
        icon: Brush,
        label: "Visual System",
        title: "Create Assets That Feel Connected",
        copy:
            "Social posts, ads, brochures, decks, and banners are built from shared visual rules so every touchpoint feels like the same brand.",
        detailTitle: "Consistency across daily marketing",
        detailCopy:
            "We use typography, color, spacing, image treatment, layout rhythm, and component patterns to make creative output faster and more recognizable.",
        detailPoints: ["Reusable templates", "Brand styling", "Format families"],
    },
    {
        icon: BarChart3,
        label: "Creative Learning",
        title: "Improve What Gets Seen, Saved, and Clicked",
        copy:
            "Campaign and social performance signals help us refine layouts, hooks, formats, CTAs, and visual directions for the next creative cycle.",
        detailTitle: "Design that keeps getting sharper",
        detailCopy:
            "We learn from engagement, ad performance, sales feedback, content usage, and team needs so future assets are easier to produce and more useful.",
        detailPoints: ["Creative variants", "CTA testing", "Format improvements"],
    },
];

const processItems = [
    {
        title: "Creative Brief",
        answer:
            "We understand your brand, audience, message, offer, format requirements, platform sizes, usage context, campaign goals, and references before design begins.",
    },
    {
        title: "Direction",
        answer:
            "We define the visual route, hierarchy, copy placement, image treatment, typography, color usage, CTA emphasis, and asset family structure.",
    },
    {
        title: "Design",
        answer:
            "We create the first creative set with polished layouts, brand consistency, clear message hierarchy, responsive format thinking, and platform-ready details.",
    },
    {
        title: "Refine",
        answer:
            "We refine visuals based on feedback, readability, brand fit, audience clarity, campaign priority, and practical use across digital or print channels.",
    },
    {
        title: "Deliver",
        answer:
            "We prepare final files, size adaptations, editable versions where needed, export formats, naming, and handover notes for your team or campaigns.",
    },
];

const faqs = [
    {
        question: "What are graphic design services?",
        answer:
            "Graphic design services help businesses create visual assets for marketing, sales, social media, ads, print, presentations, campaigns, and brand communication.",
    },
    {
        question: "Do you design social media creatives?",
        answer:
            "Yes. We design posts, carousels, stories, reel covers, campaign creatives, launch posts, profile banners, and reusable social media templates.",
    },
    {
        question: "Can you design ads for Meta, Google, and LinkedIn?",
        answer:
            "Yes. We can create ad creative families with different formats, messages, CTAs, offer angles, and platform sizes for paid campaign testing.",
    },
    {
        question: "Do you create brochures and pitch decks?",
        answer:
            "Yes. We design brochures, company profiles, pitch decks, sales decks, one-pagers, case study decks, and proposal visuals for business communication.",
    },
    {
        question: "Can you match our existing brand style?",
        answer:
            "Yes. We can follow your existing guidelines or help clean up inconsistent visual usage so new assets look more professional and connected.",
    },
    {
        question: "Can you create reusable graphic templates?",
        answer:
            "Yes. We can design editable templates for social media, ads, presentations, documents, banners, and campaign assets so your team can produce future creatives faster.",
    },
    {
        question: "Do you provide print-ready and digital files?",
        answer:
            "Yes. We can prepare files for digital use, social platforms, ads, presentations, and print production, including size adaptations and export formats based on your needs.",
    },
    {
        question: "Can graphic design improve ad and social performance?",
        answer:
            "Good design can improve clarity, trust, readability, CTA visibility, and format fit. We create visual variants so campaigns and content have stronger creative options to test.",
    },
];

function GraphicServiceDepth() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 max-w-4xl">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                        Graphic Design Services
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(36px, 4.8vw, 66px)",
                        }}
                    >
                        Creative assets for every place your brand needs to look sharp
                    </h2>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-[#5F6B7A]">
                        Hegxcorp builds graphic design as a usable creative system, not just single files. Your social posts, ads, brochures, decks, templates, campaign visuals, and digital graphics should all carry the same level of clarity and brand confidence.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {graphicServiceTracks.map((track, index) => {
                        const Icon = track.icon;

                        return (
                            <motion.article
                                key={track.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-90px" }}
                                transition={{ duration: 0.45, delay: index * 0.03 }}
                                className="border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]"
                            >
                                <div className="mb-5 flex items-start gap-4">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#06133D] text-white">
                                        <Icon size={22} strokeWidth={1.9} />
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-black text-[#06133D]">{track.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">{track.copy}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {track.points.map((point) => (
                                        <span
                                            key={point}
                                            className="border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#536083]"
                                        >
                                            {point}
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

function GraphicValueSection() {
    return (
        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div>
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                        Design That Compounds
                    </p>
                    <h2
                        className="font-black leading-tight"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4.6vw, 62px)",
                        }}
                    >
                        Strong graphic design makes marketing easier to recognize, reuse, and improve
                    </h2>
                    <p className="mt-6 text-base leading-8 text-white/72">
                        A good creative system helps your team publish faster, run better campaigns, and keep visual quality consistent across every sales and marketing touchpoint.
                    </p>
                </div>

                <div className="grid gap-4">
                    {graphicValuePoints.map((point) => (
                        <div key={point} className="flex gap-4 border border-white/12 bg-white/[0.06] p-5">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" />
                            <p className="text-sm leading-7 text-white/78">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GraphicDesignPage() {
    const [activeCapability, setActiveCapability] = useState(0);
    const [openService, setOpenService] = useState<number | null>(null);
    const [openProcess, setOpenProcess] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const activeItem = graphicCapabilities[activeCapability];
    const ActiveIcon = activeItem.icon;

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:py-28">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.24), transparent 28%), radial-gradient(circle at 84% 24%, rgba(69,102,255,0.2), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)",
                        }}
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                            backgroundSize: "52px 52px",
                        }}
                    />

                    <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
                        <motion.div
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                        >
                            <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
                                Graphic Design Services
                            </p>

                            <h1
                                className="max-w-3xl font-black leading-[1.02]"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: "clamp(46px, 6vw, 86px)",
                                }}
                            >
                                Visual Design
                                <span className="block text-[#FC9C44]">That Sells the Story</span>
                            </h1>

                            <p
                                className="mt-7 max-w-2xl text-white/72"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(16px, 1.25vw, 19px)",
                                    lineHeight: 1.75,
                                }}
                            >
                                Create premium marketing graphics, social creatives, ad visuals, brochures, decks, and campaign assets that make your brand easier to notice, understand, and trust.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href="/free-growth-audit"
                                    className="inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
                                >
                                    Plan My Creative Assets
                                </a>

                                <a
                                    href="/case-studies"
                                    className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12"
                                >
                                    View Results
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
                                    <div className="mb-7 flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]">
                                                Creative Production Console
                                            </p>
                                            <h2 className="mt-2 text-2xl font-black text-white">
                                                Visual Asset System
                                            </h2>
                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                                            <Palette size={22} strokeWidth={2} />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            ["Creative Formats", "18+"],
                                            ["Asset Variants", "4x"],
                                            ["Brand Consistency", "94"],
                                            ["Turnaround Flow", "Fast"],
                                        ].map(([label, value], index) => (
                                            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                                                    {label}
                                                </p>
                                                <p className={`mt-3 text-3xl font-black ${index === 1 ? "text-[#FC9C44]" : "text-white"}`}>
                                                    {value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                                        <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                                            <span className="text-white/52">Monthly Design Mix</span>
                                            <span className="text-[#FC9C44]">Ready</span>
                                        </div>

                                        <div className="grid gap-3">
                                            {[
                                                ["Social creatives", "82%"],
                                                ["Ad variants", "68%"],
                                                ["Sales collateral", "56%"],
                                            ].map(([label, width]) => (
                                                <div key={label}>
                                                    <div className="mb-2 flex justify-between text-xs text-white/58">
                                                        <span>{label}</span>
                                                        <span>{width}</span>
                                                    </div>
                                                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                                        <div className="h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]" style={{ width }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="border-b border-neutral-200 bg-white px-6 py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="seo-split-reveal">
                            <div className="seo-split-left">
                                <p className="seo-split-eyebrow">Graphic Design Capabilities</p>
                                <h2 className="seo-split-heading">
                                    Complete creative systems for marketing, sales, and brand recall
                                </h2>
                                <p className="seo-split-body">
                                    Hover or select a capability to see how each design layer helps your brand show up clearly across social, ads, presentations, print, and campaigns.
                                </p>

                                <div className="seo-service-list">
                                    {graphicCapabilities.map((item, index) => {
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
                                                aria-pressed={isActive}
                                            >
                                                <span className="seo-service-icon">
                                                    <Icon size={17} strokeWidth={1.9} />
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

                            <div className="seo-split-divider" aria-hidden="true" />

                            <div className="seo-split-right">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeItem.title}
                                        className="seo-capability-slide"
                                        initial={{ opacity: 0, x: 24, scale: 0.98 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: -18, scale: 0.98 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div
                                            className="seo-slide-bg service-slide-bg"
                                            style={{ backgroundImage: `${activeItem.visual}, url(${activeItem.image})` }}
                                        />
                                        <div className="seo-slide-tint service-slide-tint" />
                                        <div className="seo-slide-content">
                                            <span className="seo-slide-kicker">
                                                <ActiveIcon size={14} strokeWidth={2} />
                                                {activeItem.tag}
                                            </span>
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
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>

                <GraphicServiceDepth />

                <ZigZagGrowthStack
                    eyebrow="Creative Growth Stack"
                    title="Graphic design works best when direction, assets, and learning move together"
                    description="Each layer of your creative system should make the next one stronger, from clear communication goals to consistent design output and better campaign performance."
                    cards={graphicGrowthStack}
                />

                <GraphicValueSection />

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





                {/* <ServiceLeadForm
                    eyebrow="Request a Design Plan"
                    title="Tell us what creative assets your brand needs next"
                    description="Share your website, brand style, marketing goals, campaign needs, and the design formats you need. Hegxcorp will review your request and suggest the right starting point for social creatives, ads, brochures, decks, and brand collateral."
                    serviceName="Graphic Design"
                    focusOptions={[
                        "Social, ad, brochure, deck, and campaign asset planning",
                        "Reusable templates and creative systems for faster publishing",
                        "Brand-consistent design support for digital and print formats",
                    ]}
                />

                <ServiceContactCTA
                    eyebrow="Connect With Us"
                    title="Ready to make every brand touchpoint look sharper?"
                    description="Share your creative needs with Hegxcorp and we will help you build a practical design system for social, ads, campaigns, presentations, print, and sales assets."
                    serviceName="Graphic Design"
                    primaryLabel="Start Graphic Design"
                /> */}
            </main>

            <Footer />
        </div>
    );
}
