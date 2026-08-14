import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clapperboard,
  PenTool,
  Target,
  Users,
  Rocket,
  Layers3,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ZigZagGrowthStack } from "@/components/site/ZigZagGrowthStack";

export const Route = createFileRoute("/service/social-med")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Social media marketing services by Hegxcorp including strategy, content creation, social media management, paid campaigns, community growth, analytics, and brand engagement.",
      },
    ],
  }),
  component: SocialMediaPage,
} as never);

const socialCapabilities = [
  {
    icon: Target,
    title: "Social Media Strategy",
    tag: "Growth Roadmap",
    hook: "Turn platform activity into a clear brand growth system.",
    description:
      "We build a clear social media roadmap based on your audience, brand position, competitors, content pillars, and growth goals.",
    pills: ["Audience", "Pillars", "Positioning", "Goals"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75",
    visual:
      "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.7), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.1), rgba(6,19,61,0.44))",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    tag: "Creative Engine",
    hook: "Create posts that feel native to each platform.",
    description:
      "We create platform-ready posts, captions, creative concepts, short-form ideas, campaign themes, and visual directions that fit your brand.",
    pills: ["Captions", "Concepts", "Carousels", "Campaigns"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=75",
    visual:
      "radial-gradient(circle at 78% 18%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
  },
  {
    icon: CalendarDays,
    title: "Content Planning",
    tag: "Consistency",
    hook: "Keep every channel moving with a practical publishing rhythm.",
    description:
      "We organize posting calendars, campaign schedules, content themes, and publishing workflows so your brand stays consistent.",
    pills: ["Calendars", "Themes", "Workflow", "Scheduling"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=75",
    visual:
      "radial-gradient(circle at 22% 20%, rgba(252,156,68,0.58), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.4))",
  },
  {
    icon: Clapperboard,
    title: "Short-Form Video",
    tag: "Video Hooks",
    hook: "Build attention with sharper reels, shorts, and scripts.",
    description:
      "We plan reels, shorts, hooks, scripts, and video content ideas designed for attention, engagement, and brand recall.",
    pills: ["Reels", "Shorts", "Hooks", "Scripts"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=75",
    visual:
      "radial-gradient(circle at 72% 24%, rgba(252,156,68,0.64), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.04), rgba(6,19,61,0.46))",
  },
  {
    icon: Users,
    title: "Community Growth",
    tag: "Engagement",
    hook: "Make your audience feel seen, heard, and invited back.",
    description:
      "We help improve audience interaction through comments, engagement prompts, brand conversations, and community-focused content.",
    pills: ["Comments", "Prompts", "Conversations", "Loyalty"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=75",
    visual:
      "radial-gradient(circle at 20% 28%, rgba(252,156,68,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    tag: "Performance",
    hook: "Use social data to improve what gets created next.",
    description:
      "We track reach, engagement, follower growth, content performance, campaign results, and insights for continuous improvement.",
    pills: ["Reach", "Engagement", "Growth", "Insights"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
    visual:
      "radial-gradient(circle at 76% 20%, rgba(255,212,170,0.62), transparent 28%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))",
  },
];

const socialServices = [
  {
    title: "Social Media Management",
    answer:
      "We manage your social media presence with planned content, consistent posting, brand-aligned messaging, and performance review.",
  },
  {
    title: "Instagram Marketing",
    answer:
      "We create Instagram strategies for reels, carousels, stories, captions, profile optimisation, and audience engagement.",
  },
  {
    title: "Facebook Marketing",
    answer:
      "We help brands use Facebook pages, content, communities, and campaigns to improve visibility and customer connection.",
  },
  {
    title: "LinkedIn Marketing",
    answer:
      "We build LinkedIn content systems for founders, teams, and B2B brands that want stronger authority and lead generation.",
  },
  {
    title: "Creative Campaigns",
    answer:
      "We plan campaign ideas around launches, offers, events, seasonal promotions, and brand awareness goals.",
  },
  {
    title: "Paid Social Advertising",
    answer:
      "We create and optimise paid social campaigns for awareness, leads, traffic, retargeting, and conversion-focused objectives.",
  },
];

const socialGrowthStack = [
  {
    icon: Target,
    label: "Strategy First",
    title: "Audience & Platform Direction",
    copy: "We define who you need to reach, which platforms matter, what content pillars should lead, and how social activity supports real business goals.",
    detailTitle: "The roadmap behind every post",
    detailCopy:
      "Before content starts, we organize the brand voice, audience segments, platform priorities, competitor angle, and campaign rhythm so every post has a job.",
    detailPoints: ["Audience segments", "Platform priorities", "Content pillars"],
  },
  {
    icon: Clapperboard,
    label: "Creative System",
    title: "Content Built for Attention",
    copy: "Reels, carousels, captions, campaign ideas, and short-form hooks are planned as one repeatable creative engine instead of random posting.",
    detailTitle: "Creative that can keep moving",
    detailCopy:
      "We plan content formats that can be produced consistently, tested quickly, and adapted across Instagram, LinkedIn, Facebook, YouTube, and campaign launches.",
    detailPoints: ["Reels hooks", "Carousel flows", "Caption systems"],
  },
  {
    icon: BarChart3,
    label: "Growth Signals",
    title: "Measure, Learn, Improve",
    copy: "We read reach, engagement, saves, clicks, community response, and follower quality to improve the next content cycle with clearer decisions.",
    detailTitle: "A feedback loop for better content",
    detailCopy:
      "Performance data guides what to repeat, what to improve, and where to shift creative energy so social media becomes a learning system.",
    detailPoints: ["Engagement quality", "Content winners", "Next-cycle improvements"],
  },
];

const processItems = [
  {
    title: "Research",
    answer:
      "We study your brand, audience, competitors, platforms, current content, engagement patterns, and business objectives.",
  },
  {
    title: "Strategy",
    answer:
      "We define platform priorities, content pillars, tone of voice, campaign themes, growth goals, and reporting metrics.",
  },
  {
    title: "Create",
    answer:
      "We develop content ideas, captions, creative directions, video concepts, post formats, and campaign assets.",
  },
  {
    title: "Publish & Engage",
    answer:
      "We support consistent publishing, audience interaction, content scheduling, and community-focused communication.",
  },
  {
    title: "Measure & Improve",
    answer:
      "We review analytics, identify winning content, improve weak areas, and refine the plan for better performance.",
  },
  {
    title: "Social Media Audit",
    answer:
      "We review your current profiles, content quality, engagement, audience signals, competitor activity, and growth opportunities.",
  },
];

const faqs = [
  {
    question: "What are social media marketing services?",
    answer:
      "Social media marketing services help businesses plan, create, publish, manage, and improve content across platforms like Instagram, Facebook, LinkedIn, and more.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We can support Instagram, Facebook, LinkedIn, YouTube, and other platforms depending on your audience, industry, and goals.",
  },
  {
    question: "How long does social media marketing take to show results?",
    answer:
      "Early engagement improvements can appear within a few weeks, while stronger audience growth and lead generation usually need consistent work over 3 to 6 months.",
  },
  {
    question: "Do you create social media content?",
    answer:
      "Yes. We help with content ideas, captions, creative direction, post formats, reels concepts, campaign planning, and content calendars.",
  },
];

function SocialMediaPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeItem = socialCapabilities[activeCapability];
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

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
                Social Media Marketing
              </p>

              <h1
                className="max-w-3xl font-black leading-[1.02]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(46px, 6vw, 86px)",
                }}
              >
                Social Media
                <span className="block text-[#FC9C44]">That Builds Demand</span>
              </h1>

              <p
                className="mt-7 max-w-2xl text-white/72"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  lineHeight: 1.75,
                }}
              >
                Build a stronger brand presence with strategy, content planning, creative campaigns,
                community engagement, and performance-focused growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/free-growth-audit"
                  className="inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
                >
                  Plan My Social Growth
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
                        Brand Growth Console
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-white">
                        Social Performance System
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                      <Users size={22} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Reach Lift", "+248%"],
                      ["Engagement", "+186%"],
                      ["Content Score", "92"],
                      ["Community", "+64%"],
                    ].map(([label, value], index) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                          {label}
                        </p>
                        <p
                          className={`mt-3 text-3xl font-black ${index === 1 ? "text-[#FC9C44]" : "text-white"}`}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                      <span className="text-white/52">Weekly Content Mix</span>
                      <span className="text-[#FC9C44]">Live</span>
                    </div>

                    <div className="grid gap-3">
                      {[
                        ["Reels", "78%"],
                        ["Carousels", "64%"],
                        ["Community", "52%"],
                      ].map(([label, width]) => (
                        <div key={label}>
                          <div className="mb-2 flex justify-between text-xs text-white/58">
                            <span>{label}</span>
                            <span>{width}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]"
                              style={{ width }}
                            />
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
                <p className="seo-split-eyebrow">Social Media Capabilities</p>
                <h2 className="seo-split-heading">
                  Complete social media systems for brand growth
                </h2>
                <p className="seo-split-body">
                  Hover or select a capability to see how each part of the social media system
                  builds awareness, consistency, engagement, and measurable demand.
                </p>

                <div className="seo-service-list">
                  {socialCapabilities.map((item, index) => {
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

        <ZigZagGrowthStack
          eyebrow="Social Growth Stack"
          title="Social media works best when strategy, content, and community move together"
          description="Each layer of your social system should make the next one stronger, from audience insight to creative execution and performance learning."
          cards={socialGrowthStack}
        />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1050px] px-6 lg:px-10">
            <h2
              className="mb-20 text-center font-black leading-tight text-[#06133D]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 4.4vw, 64px)",
              }}
            >
              Services &amp; Process
            </h2>

            <div className="grid gap-x-24 gap-y-12 md:grid-cols-2">
              <div>
                {socialServices.map((item, index) => {
                  const isOpen = openService === index;

                  return (
                    <div key={item.title} className="border-b border-[#06133D]">
                      <button
                        type="button"
                        onClick={() => setOpenService(isOpen ? null : index)}
                        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                      >
                        <span className="text-lg font-semibold text-[#06133D]">{item.title}</span>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>

                      {isOpen && <p className="seo-disclosure-answer pb-7 pr-10">{item.answer}</p>}
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
                        <span className="text-lg font-semibold text-[#06133D]">{item.title}</span>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>

                      {isOpen && <p className="seo-disclosure-answer pb-7 pr-10">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
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
                  Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We
                  will help you turn it into a clear development roadmap.
                </p>
              </div>

              <div className="border-l border-white/15 pl-8">
                <Layers3 className="mb-5 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-2xl font-black">Ready to build?</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one
                  place.
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

        {/* <ServiceContactCTA
                    eyebrow="Connect With Us"
                    title="Ready to turn social attention into real growth?"
                    description="Share your goals with Hegxcorp and we will help you shape the next move for strategy, content, community, and measurable social media growth."
                    serviceName="Social Media Marketing"
                    primaryLabel="Start Social Growth"
                /> */}
      </main>

      <Footer />
    </div>
  );
}
