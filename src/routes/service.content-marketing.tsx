import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { WheelEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    BarChart3,
    BookOpen,
    CalendarDays,
    ChevronDown,
    ChevronRight,
    FileText,
    Layers,
    Mail,
    MessageSquareText,
    PenTool,
    Search,
    ShieldCheck,
    Target,
    Users,
    Rocket,
    Layers3
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";

export const Route = createFileRoute("/service/content-marketing")({
    head: () => ({
        meta: [
            { title: "Content Marketing Services | Hegxcorp" },
            {
                name: "description",
                content:
                    "Content marketing services by Hegxcorp including content strategy, SEO blogs, website copywriting, content calendars, social media content, email content, brand storytelling, thought leadership, and performance optimization.",
            },
        ],
    }),
    component: ContentMarketingPage,
} as never);

const contentCapabilities = [
    {
        icon: BookOpen,
        title: "Content Strategy",
        tag: "Editorial Direction",
        hook: "Plan content around the questions your buyers already ask.",
        description:
            "We plan content around your audience, business goals, search demand, and conversion journey.",
        pills: ["Audience", "Topics", "Funnels", "Keywords"],
        image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=75",
        visual:
            "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
    },
    {
        icon: FileText,
        title: "SEO Blog Writing",
        tag: "Organic Reach",
        hook: "Publish articles that earn attention and search demand.",
        description:
            "Search-friendly articles built to attract qualified traffic and answer real customer questions.",
        pills: ["Blogs", "Briefs", "Search intent", "Clusters"],
        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=75",
        visual:
            "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.6), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.44))",
    },
    {
        icon: PenTool,
        title: "Website Copywriting",
        tag: "Conversion Copy",
        hook: "Turn service and landing pages into clearer buying paths.",
        description:
            "Clear, persuasive website content for landing pages, service pages, product pages, and product descriptions.",
        pills: ["Landing pages", "Service pages", "Offers", "CTAs"],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=75",
        visual:
            "radial-gradient(circle at 20% 26%, rgba(252,156,68,0.58), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.42))",
    },
    {
        icon: MessageSquareText,
        title: "Social Media Content",
        tag: "Platform Voice",
        hook: "Keep your brand active with ideas people can respond to.",
        description:
            "Platform-ready captions, ideas, and messaging that keep your brand active and consistent.",
        pills: ["Captions", "Post ideas", "Campaigns", "Messaging"],
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
        visual:
            "radial-gradient(circle at 74% 24%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))",
    },
    {
        icon: Mail,
        title: "Email Content",
        tag: "Retention",
        hook: "Nurture prospects and customers with useful messages.",
        description:
            "Newsletters, nurture emails, launch campaigns, and retention content written to drive action.",
        pills: ["Newsletters", "Nurture", "Launches", "Retention"],
        image:
            "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=75",
        visual:
            "radial-gradient(circle at 18% 20%, rgba(255,212,170,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.44))",
    },
    {
        icon: CalendarDays,
        title: "Brand Storytelling",
        tag: "Brand Memory",
        hook: "Make your expertise easier to understand and remember.",
        description:
            "Messaging that communicates your value, personality, expertise, and trust in a memorable way.",
        pills: ["Voice", "Narrative", "Trust", "Positioning"],
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=75",
        visual:
            "radial-gradient(circle at 78% 18%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
    },
];

const highlightedServices = [
    {
        title: "Content Strategy",
        answer:
            "We build a clear content direction based on audience research, search demand, funnel stages, brand voice, competitors, offers, content gaps, publishing capacity, and conversion goals.",
    },
    {
        title: "SEO Blog Writing",
        answer:
            "We write optimized blog content that answers real customer questions, targets search intent, supports topic clusters, strengthens internal linking, and improves long-term organic visibility.",
    },
    {
        title: "Website Copywriting",
        answer:
            "We create clear, persuasive website copy for service pages, landing pages, product pages, comparison sections, FAQs, trust blocks, offers, and conversion-focused user journeys.",
    },
    {
        title: "Content Marketing",
        answer:
            "We combine strategy, writing, SEO, design direction, publishing guidance, repurposing, and performance reviews to help your brand attract, educate, nurture, and convert the right audience.",
    },
    {
        title: "Social Media Content",
        answer:
            "We prepare platform-ready captions, post ideas, carousel outlines, reel hooks, founder-led posts, campaign themes, and messaging that keep your brand consistent across channels.",
    },
    {
        title: "Email Content",
        answer:
            "We write newsletters, nurture sequences, promotional emails, launch emails, lead magnet follow-ups, customer education emails, and retention messages designed to encourage action.",
    },

];

const contentStepScrollerSteps = [
    {
        icon: BookOpen,
        label: "01 Strategy",
        title: "Map the message before writing",
        copy:
            "We study your audience, search demand, buyer questions, brand voice, competitors, and conversion goals before a single content asset is planned.",
        points: ["Audience insight", "Keyword direction", "Content pillars"],
    },
    {
        icon: PenTool,
        label: "02 Creation",
        title: "Build content that earns attention",
        copy:
            "Blogs, landing pages, website copy, social content, email sequences, and campaign messaging are created with structure, clarity, and intent.",
        points: ["SEO briefs", "Conversion copy", "Platform-ready assets"],
    },
    {
        icon: CalendarDays,
        label: "03 Optimization",
        title: "Publish, measure, and compound",
        copy:
            "We refine content using performance signals, readability, internal linking, publishing rhythm, engagement data, and conversion opportunities.",
        points: ["Content calendar", "Performance review", "Continuous improvement"],
    },
];

const processItems = [
    {
        title: "Audience, Offer & Search Research",
        answer:
            "We study your brand, audience, competitors, offers, current content, keyword demand, sales conversations, objections, and business goals to find the content opportunities worth building first.",
    },
    {
        title: "Messaging & Content Strategy",
        answer:
            "We create a content plan with topics, formats, channels, keywords, messaging direction, conversion goals, repurposing paths, publishing priorities, and measurement signals.",
    },
    {
        title: "Writing, Editing & Creative Direction",
        answer:
            "We write useful, polished, on-brand content for your website, blog, social media, email, and campaigns, then refine structure, tone, proof, CTAs, and readability before publishing.",
    },
    {
        title: "SEO, Conversion & Repurposing",
        answer:
            "We refine content for SEO, readability, structure, internal linking, engagement, conversion opportunities, social snippets, email reuse, and campaign alignment.",
    },
    {
        title: "Performance Review & Content Refresh",
        answer:
            "We review rankings, engagement, traffic quality, leads, assisted conversions, content decay, and audience response, then improve weak assets and expand the content system.",
    },
    {
        title: "Brand Storytelling",
        answer:
            "We shape your messaging so your brand communicates value, trust, personality, proof, differentiation, founder perspective, and expertise in a memorable way.",
    },
];

const contentProofMetrics = [
    {
        value: "10+",
        label: "Content formats",
        copy: "Blogs, service pages, emails, social posts, landing pages, FAQs, case studies, and campaign assets.",
    },
    {
        value: "3x",
        label: "Repurposing logic",
        copy: "Core ideas are planned so they can support SEO, social, email, sales, and paid campaigns.",
    },
    {
        value: "90-day",
        label: "Editorial roadmap",
        copy: "Priority topics, owners, publishing cadence, optimization tasks, and refresh cycles are mapped clearly.",
    },
    {
        value: "Intent",
        label: "Conversion lens",
        copy: "Every asset is connected to awareness, education, comparison, trust, or action.",
    },
];

function ContentProofBand() {
    return (
        <section className="border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10">
            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
                {contentProofMetrics.map((metric) => (
                    <motion.article
                        key={metric.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45 }}
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

const contentFormats = [
    {
        icon: Search,
        title: "SEO Topic Clusters",
        copy:
            "Keyword-led blog clusters, pillar pages, FAQs, and internal links that help your site build authority around important subjects.",
        points: ["Pillar pages", "Blog clusters", "FAQs", "Internal links"],
    },
    {
        icon: PenTool,
        title: "Website & Landing Page Copy",
        copy:
            "Service pages, landing pages, offer pages, product descriptions, comparison sections, and CTA copy built for clarity and conversion.",
        points: ["Service pages", "Landing pages", "Offers", "CTAs"],
    },
    {
        icon: MessageSquareText,
        title: "Social Media Content",
        copy:
            "Carousels, captions, reels hooks, founder posts, campaign ideas, and platform-specific messaging that keep the brand active.",
        points: ["Captions", "Carousels", "Reels", "Founder posts"],
    },
    {
        icon: Mail,
        title: "Email & Nurture Content",
        copy:
            "Newsletters, nurture sequences, promotional emails, product education, onboarding notes, and retention messages.",
        points: ["Newsletters", "Nurture", "Launches", "Retention"],
    },
    {
        icon: BookOpen,
        title: "Thought Leadership",
        copy:
            "Expert POVs, founder articles, LinkedIn pieces, industry explainers, and trust-building content that makes expertise visible.",
        points: ["POV posts", "Founder voice", "Guides", "Expertise"],
    },
    {
        icon: Layers,
        title: "Sales Enablement Content",
        copy:
            "Case studies, pitch copy, objection-handling assets, one-pagers, comparison content, and lead magnets that support sales teams.",
        points: ["Case studies", "One-pagers", "Lead magnets", "Comparisons"],
    },
];

function ContentFormatDepth() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 max-w-3xl">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                        Content Marketing Services
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(36px, 4.8vw, 66px)",
                        }}
                    >
                        Content formats built for search, social, email, and sales
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F6B7A]">
                        Hegxcorp plans content as a connected system. One strong idea can become a ranking page, a blog, a social post, an email, a sales asset, and a campaign message when the strategy is clear.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {contentFormats.map((format, index) => {
                        const Icon = format.icon;

                        return (
                            <motion.article
                                key={format.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-90px" }}
                                transition={{ duration: 0.45, delay: index * 0.03 }}
                                className="border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]"
                            >
                                <span className="mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white">
                                    <Icon size={22} strokeWidth={1.9} />
                                </span>
                                <h3 className="text-xl font-black text-[#06133D]">{format.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{format.copy}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {format.points.map((point) => (
                                        <span key={point} className="border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-bold text-[#536083]">
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

const contentWhyCards = [
    {
        icon: Target,
        title: "Strategy before writing",
        copy:
            "We define audience intent, content pillars, funnel stage, keyword role, distribution use, and conversion goal before creating assets.",
    },
    {
        icon: ShieldCheck,
        title: "Clear, useful, trust-led copy",
        copy:
            "Content is written to help the reader understand, compare, trust, and act, not just to fill a publishing calendar.",
    },
    {
        icon: BarChart3,
        title: "Performance review loop",
        copy:
            "We review rankings, clicks, engagement, assisted conversions, lead quality, and decay so content keeps improving.",
    },
    {
        icon: Users,
        title: "Built for real buyers",
        copy:
            "Messaging reflects objections, customer questions, decision criteria, proof points, and the practical language your buyers use.",
    },
];

function ContentWhySection() {
    return (
        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14">
                    <div>
                        <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                            Why Hegxcorp Content
                        </p>
                        <h2
                            className="font-black leading-tight"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "clamp(34px, 4.4vw, 60px)",
                            }}
                        >
                            Content that teaches, ranks, and moves people closer to action
                        </h2>
                    </div>
                    <div className="w-full border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.75)]">
                        <p className="text-base leading-8 text-white/72">
                            Good content is not just writing. It is research, structure, positioning, search intent, proof, publishing rhythm, repurposing, and continuous improvement working together so every piece has a clear job in the customer journey.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {["Search intent", "Buyer questions", "Content reuse"].map((item) => (
                                <span key={item} className="border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-black text-white/86">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {contentWhyCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <article key={card.title} className="border border-white/12 bg-white/[0.06] p-6">
                                <span className="mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white">
                                    <Icon size={21} strokeWidth={1.9} />
                                </span>
                                <h3 className="text-lg font-black text-white">{card.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-white/72">{card.copy}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const contentIndustries = [
    {
        title: "B2B & SaaS",
        copy: "Thought leadership, comparison pages, solution pages, onboarding content, and lead magnets for complex buying journeys.",
    },
    {
        title: "Ecommerce & D2C",
        copy: "Category copy, buying guides, product education, email campaigns, social content, and seasonal campaign messaging.",
    },
    {
        title: "Healthcare & Education",
        copy: "Trust-led service pages, FAQs, appointment or enrollment content, patient or student guides, and local SEO content.",
    },
    {
        title: "Local & Professional Services",
        copy: "Service pages, city pages, case studies, review-led content, FAQs, and practical guides that support enquiries.",
    },
];

function ContentIndustries() {
    return (
        <section className="bg-white px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
                        Content Use Cases
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4.4vw, 60px)",
                        }}
                    >
                        Editorial planning shaped around your audience and sales cycle
                    </h2>
                </div>

                <div className="grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4">
                    {contentIndustries.map((industry) => (
                        <article key={industry.title} className="bg-white p-7 transition hover:bg-[#FAFAF8]">
                            <h3 className="text-xl font-black text-[#06133D]">{industry.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{industry.copy}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContentStepScroller() {
    const [activeStep, setActiveStep] = useState(0);

    const activeItem = contentStepScrollerSteps[activeStep];
    const ActiveIcon = activeItem.icon;



    const setStepFromControl = (index: number) => {
        if (index === activeStep) return;
        setActiveStep(index);
    };

    return (
        <section className="relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10">
            <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-[34%] opacity-[0.08]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)",
                }}
            />

            <div className="relative mx-auto max-w-6xl">
                <div className="mx-auto mb-14 max-w-4xl text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
                        Content Growth Steps
                    </p>
                    <h2
                        className="font-black leading-tight text-[#06133D]"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(34px, 4vw, 58px)",
                        }}
                    >
                        Content marketing grows when every step feeds the next one
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]">
                        Click a step to move through the content. Each step opens with a smooth top-down transition.</p >
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                    <div className="lg:sticky lg:top-28">
                        <div className="rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]">
                            <div className="rounded-[22px] bg-[#06133D] p-6 text-white">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]">
                                    Step {String(activeStep + 1).padStart(2, "0")} / {String(contentStepScrollerSteps.length).padStart(2, "0")}
                                </p>
                                <h3 className="mt-3 text-3xl font-black leading-tight">
                                    {activeItem.title}
                                </h3>
                                <p className="mt-4 text-sm leading-7 text-white/64">
                                    {activeItem.copy}
                                </p>

                                <div className="mt-8 grid gap-3">
                                    {contentStepScrollerSteps.map((step, index) => {
                                        const isActive = index === activeStep;

                                        return (
                                            <button
                                                key={step.label}
                                                type="button"
                                                onClick={() => setStepFromControl(index)}
                                                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${isActive
                                                    ? "border-[#FC9C44] bg-[#FC9C44] text-white"
                                                    : "border-white/10 bg-white/[0.05] text-white/58 hover:border-white/24 hover:bg-white/[0.08]"
                                                    }`}
                                            >
                                                <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-white" : "bg-white/28"}`} />
                                                <span className="text-xs font-bold uppercase tracking-[0.12em]">
                                                    {step.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-[#DFE3EA] bg-white p-5 shadow-[0_26px_70px_-44px_rgba(29,39,66,0.45)]">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={activeItem.title}
                                initial={{ opacity: 0, y: -56, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 36, scale: 0.98 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 130,
                                    damping: 18,
                                    mass: 0.75,
                                }}
                                className="group/card min-h-[390px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 transition-all duration-300 hover:rounded-tr-[56px] hover:rounded-br-[56px] hover:border-[#4C1688] hover:bg-[#4C1688] sm:p-8"
                            >
                                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]">
                                    <ActiveIcon size={23} strokeWidth={2} />
                                </span>

                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72">
                                    {activeItem.label}
                                </p>
                                <h3 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white">
                                    {activeItem.title}
                                </h3>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90">
                                    {activeItem.copy}
                                </p>

                                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                    {activeItem.points.map((point) => (
                                        <span
                                            key={point}
                                            className="rounded-full border border-[#DFE3EA] bg-[#F7F8FB] px-4 py-2 text-center text-xs font-bold text-[#06133D] transition-colors duration-300 group-hover/card:border-white/24 group-hover/card:bg-white/10 group-hover/card:text-white"
                                        >
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

const faqs = [
    {
        question: "What are content marketing services?",
        answer:
            "Content marketing services help businesses plan, create, optimize, publish, repurpose, and improve content that attracts the right audience, builds trust, supports SEO, and helps conversions.",
    },
    {
        question: "Why does my business need content marketing?",
        answer:
            "Content marketing helps your business show up before customers are ready to buy. It improves visibility, educates your audience, answers objections, supports sales, and makes your brand easier to trust.",
    },
    {
        question: "How long does content marketing take to show results?",
        answer:
            "Some content can support campaigns immediately, especially landing pages, emails, and social content. SEO-driven content usually takes 3 to 6 months to show stronger organic results.",
    },
    {
        question: "What is included in content marketing services?",
        answer:
            "Content marketing can include strategy, blog writing, website copy, SEO content, social media content, email content, content calendars, thought leadership, case studies, lead magnets, and performance improvement.",
    },
    {
        question: "Can you create SEO content for my website?",
        answer:
            "Yes. We can plan and write SEO blogs, service pages, location pages, FAQs, comparison content, buying guides, and topic clusters based on keyword research and buyer intent.",
    },
    {
        question: "Do you help with content calendars?",
        answer:
            "Yes. We can prepare monthly or quarterly calendars with topics, formats, keywords, publishing dates, channels, campaign notes, repurposing ideas, and review dates.",
    },
    {
        question: "Can content marketing support social media?",
        answer:
            "Yes. A strong content strategy can turn website topics, guides, case studies, and campaign messages into captions, carousels, founder posts, reels hooks, newsletters, and paid ad angles.",
    },
    {
        question: "How do you measure content performance?",
        answer:
            "We review rankings, impressions, clicks, organic traffic, engagement, scroll behavior, leads, assisted conversions, internal link performance, content decay, and audience response.",
    },
];

function ContentMarketingPage() {
    const [activeCapability, setActiveCapability] = useState(0);
    const [openService, setOpenService] = useState<number | null>(null);
    const [openProcess, setOpenProcess] = useState<number | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const activeItem = contentCapabilities[activeCapability];
    const ActiveIcon = activeItem.icon;

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-28 lg:pb-14">
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
                                Content Marketing
                            </p>

                            <h1
                                className="max-w-3xl font-black leading-[1.02]"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: "clamp(46px, 6vw, 86px)",
                                }}
                            >
                                Content That
                                <span className="block text-[#FC9C44]">Compounds Trust</span>
                            </h1>

                            <p
                                className="mt-7 max-w-2xl text-white/72"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(16px, 1.25vw, 19px)",
                                    lineHeight: 1.75,
                                }}
                            >
                                Build trust, improve visibility, and turn ideas into strategic content that attracts, educates, and converts your ideal customers.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href="/free-growth-audit"
                                    className="inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
                                >
                                    Build My Content Plan
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
                                                Editorial Growth Engine
                                            </p>
                                            <h2 className="mt-2 text-2xl font-black text-white">
                                                Content Performance Map
                                            </h2>
                                        </div>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                                            <BookOpen size={22} strokeWidth={2} />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {[
                                            ["Organic Lift", "+214%"],
                                            ["Lead Pages", "38"],
                                            ["Content ROI", "4.2x"],
                                            ["Brief Quality", "96"],
                                        ].map(([label, value], index) => (
                                            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                                                    {label}
                                                </p>
                                                <p className={`mt-3 text-3xl font-black ${index === 2 ? "text-[#FC9C44]" : "text-white"}`}>
                                                    {value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                                        <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                                            <span className="text-white/52">Pipeline Status</span>
                                            <span className="text-[#FC9C44]">Active</span>
                                        </div>

                                        <div className="grid gap-3">
                                            {[
                                                ["Strategy", "Complete"],
                                                ["SEO Briefs", "In Review"],
                                                ["Publishing", "Scheduled"],
                                            ].map(([label, status]) => (
                                                <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                                                    <span className="text-sm font-semibold text-white/80">{label}</span>
                                                    <span className="rounded-full bg-[#FC9C44]/16 px-3 py-1 text-xs font-bold text-[#FC9C44]">
                                                        {status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <ContentProofBand />

                <section className="border-b border-neutral-200 bg-white px-6 py-24">
                    <div className="mx-auto max-w-6xl">
                        <div className="seo-split-reveal">
                            <div className="seo-split-left">
                                <p className="seo-split-eyebrow">Content Marketing Capabilities</p>
                                <h2 className="seo-split-heading">
                                    Content built for visibility, trust, and conversion
                                </h2>
                                <p className="seo-split-body">
                                    Hover or select a capability to see how each part of the content system answers questions, strengthens brand voice, and moves buyers closer to choosing you.
                                </p>

                                <div className="seo-service-list">
                                    {contentCapabilities.map((item, index) => {
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
                                <motion.article
                                    key={activeItem.title}
                                    initial={{ y: -42, opacity: 1 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.24,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="group/card min-h-[390px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 transition-all duration-200 hover:rounded-tr-[56px] hover:rounded-br-[56px] hover:border-[#4C1688] hover:bg-[#4C1688] sm:p-8"
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
                                </motion.article>
                            </div>
                        </div>
                    </div>
                </section>

                <ContentFormatDepth />

                <ContentStepScroller />

                <ContentWhySection />

                <section className="bg-white py-20">
                    <div className="mx-auto max-w-[1050px] px-6 lg:px-10">
                        <h2
                            className="mb-20 text-center font-black leading-tight text-[#06133D]"
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
                            <div>
                                {highlightedServices.map((item, index) => {
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

                                            {isOpen && (
                                                <p className="seo-disclosure-answer pb-7 pr-10">
                                                    {item.answer}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div>
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

                                            {isOpen && (
                                                <p className="seo-disclosure-answer pb-7 pr-10">
                                                    {item.answer}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <ContentIndustries />

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
                {/* <ServiceLeadForm
                    eyebrow="Request a Content Plan"
                    title="Tell us what your content needs to achieve next"
                    description="Share your website, audience, content goals, target channels, and the topics you want to own. Hegxcorp will review your request and suggest the right starting point for SEO blogs, website copy, social content, email content, and editorial planning."
                    serviceName="Content Marketing"
                    focusOptions={[]}
                />

                <ServiceContactCTA
                    eyebrow="Connect With Us"
                    title="Ready to build content that earns trust and demand?"
                    description="Tell us what you want your content to achieve and we will help you map the right strategy, topics, publishing plan, and conversion path."
                    serviceName="Content Marketing"
                    primaryLabel="Start Content Growth"
                /> */}
            </main>

            <Footer />
        </div >
    );
}
