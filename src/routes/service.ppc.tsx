import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Gauge,
  Globe2,
  Layers,
  LineChart,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  Users,
  Zap,
  Rocket,
  Layers3,
} from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";

export const Route = createFileRoute("/service/ppc")({
  head: () => ({
    meta: [
      { title: "PPC Advertising Services | Hegxcorp" },
      {
        name: "description",
        content:
          "PPC advertising services by Hegxcorp including Google Search Ads, Performance Max, Meta Ads, LinkedIn Ads, YouTube Ads, shopping ads, retargeting, conversion tracking, landing pages, and ROAS optimization.",
      },
    ],
  }),
  component: PpcServicePage,
} as never);

const ppcCapabilities = [
  {
    icon: Search,
    title: "Google Search Ads",
    tag: "High Intent",
    hook: "Capture buyers already searching for your offer.",
    description:
      "We build tightly structured Google Search campaigns around intent, match types, ad relevance, negative keywords, and conversion-ready landing pages.",
    pills: ["Search intent", "Ad groups", "Negatives", "Quality score"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75",
    visual:
      "radial-gradient(circle at 18% 22%, rgba(252,156,68,0.66), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.44))",
  },
  {
    icon: Zap,
    title: "Performance Max",
    tag: "Scale System",
    hook: "Give automation the right signals before asking it to scale.",
    description:
      "We structure asset groups, audience signals, product feeds, exclusions, and creative inputs so Performance Max can find profitable demand.",
    pills: ["Asset groups", "Feeds", "Signals", "Exclusions"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
    visual:
      "radial-gradient(circle at 78% 20%, rgba(255,212,170,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    tag: "Creative Testing",
    hook: "Turn creative learning into cheaper acquisition.",
    description:
      "We test hooks, audiences, placements, creatives, and retargeting journeys across Facebook and Instagram to improve cost per qualified action.",
    pills: ["Hooks", "Audiences", "Creatives", "Retargeting"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=75",
    visual:
      "radial-gradient(circle at 22% 24%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))",
  },
  {
    icon: Users,
    title: "LinkedIn ABM",
    tag: "B2B Demand",
    hook: "Reach decision-makers with sharper account-based campaigns.",
    description:
      "We build LinkedIn campaigns around firmographics, job roles, account lists, lead magnets, and founder-led positioning for B2B growth.",
    pills: ["ABM", "Lead magnets", "Job roles", "Firmographics"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75",
    visual:
      "radial-gradient(circle at 78% 18%, rgba(252,156,68,0.58), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.08), rgba(6,19,61,0.42))",
  },
  {
    icon: Target,
    title: "Retargeting Funnels",
    tag: "Second Chance",
    hook: "Bring back the people who were close to converting.",
    description:
      "We segment website visitors, video viewers, cart abandoners, and lead-stage audiences into retargeting flows that match their buying stage.",
    pills: ["Segments", "Sequences", "Cart recovery", "Lead stages"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75",
    visual:
      "radial-gradient(circle at 20% 26%, rgba(255,212,170,0.6), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.06), rgba(6,19,61,0.46))",
  },
  {
    icon: LineChart,
    title: "ROAS Analytics",
    tag: "Profit Control",
    hook: "Scale based on revenue clarity, not vanity metrics.",
    description:
      "We connect tracking, events, conversion values, dashboards, and reporting so budget decisions are based on return, margin, and pipeline quality.",
    pills: ["Tracking", "Events", "Dashboards", "Revenue"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=75",
    visual:
      "radial-gradient(circle at 74% 22%, rgba(252,156,68,0.62), transparent 30%), linear-gradient(135deg, rgba(6,19,61,0.05), rgba(6,19,61,0.44))",
  },
];

const ppcServices = [
  {
    title: "Google Ads Management",
    answer:
      "We manage search, Performance Max, display, shopping, YouTube, and lead-generation campaigns with clear account structure, conversion tracking, search term reviews, negative keywords, budget pacing, and weekly optimization.",
  },
  {
    title: "Paid Search Strategy",
    answer:
      "We map high-intent keywords, competitor pressure, CPC ranges, funnel stages, account architecture, landing page gaps, ad message, and budget priorities before spend is scaled.",
  },
  {
    title: "Meta & Instagram Ads",
    answer:
      "We plan audience testing, creative concepts, hooks, placements, retargeting flows, campaign objectives, offer angles, and conversion events for Facebook and Instagram campaigns.",
  },
  {
    title: "LinkedIn Advertising",
    answer:
      "We build B2B campaigns for account-based marketing, lead magnets, company targeting, job-role targeting, founder-led positioning, remarketing, and pipeline-focused demand generation.",
  },
  {
    title: "Conversion Tracking",
    answer:
      "We configure conversion events, value tracking, pixels, Google Tag Manager, GA4 goals, call tracking signals, lead form tracking, ecommerce events, and reporting so every campaign can be judged properly.",
  },
  {
    title: "Landing Page Alignment",
    answer:
      "We align ad message, search intent, landing page copy, offer clarity, trust signals, form friction, page speed, mobile layout, and call-to-action structure to improve lead quality and reduce wasted spend.",
  },
  {
    title: "Retargeting Campaigns",
    answer:
      "We create retargeting journeys for website visitors, warm audiences, abandoned carts, video viewers, high-intent page visitors, lead-stage prospects, and previous customer segments.",
  },
];

const processItems = [
  {
    title: "Account & Funnel Audit",
    answer:
      "We review account structure, spend allocation, conversion tracking, search terms, creative performance, landing pages, audiences, bidding strategy, competitor pressure, and wasted budget.",
  },
  {
    title: "Campaign Strategy & Media Plan",
    answer:
      "We define channel mix, campaign architecture, keyword priorities, audience plan, offer angles, conversion goals, budget pacing, testing cadence, and reporting model.",
  },
  {
    title: "Build, Tracking & QA",
    answer:
      "We create campaigns, ad groups, audiences, assets, ad copy, extensions, negative lists, tracking events, UTM structure, conversion imports, and launch-ready dashboards.",
  },
  {
    title: "Launch & Early Optimization",
    answer:
      "After launch, we monitor spend delivery, search terms, placements, audience quality, creative response, landing page behavior, lead quality, and tracking accuracy closely.",
  },
  {
    title: "Scale Winning Segments",
    answer:
      "We shift budget into profitable campaigns, expand winning keywords and audiences, test new segments, introduce fresh creative, and protect ROAS while increasing qualified volume.",
  },
  {
    title: "Reporting & Growth Reviews",
    answer:
      "We report on spend, conversions, cost per lead, ROAS, conversion quality, search intent, creative winners, landing page gaps, and the next decisions needed to improve results.",
  },
  {
    title: "Budget & Bid Optimization",
    answer:
      "We monitor bids, budgets, audiences, search terms, placements, device performance, dayparting, creative fatigue, conversion quality, and revenue signals to scale what works and cut waste.",
  },
];

const faqs = [
  {
    question: "What are PPC advertising services?",
    answer:
      "PPC advertising services help businesses plan, launch, manage, and optimize paid campaigns across platforms like Google, Meta, Instagram, LinkedIn, YouTube, shopping, display, and retargeting networks.",
  },
  {
    question: "Which PPC platforms do you manage?",
    answer:
      "We can support Google Search Ads, Performance Max, Meta Ads, Instagram Ads, LinkedIn Ads, YouTube Ads, shopping campaigns, display campaigns, remarketing, and lead-generation campaigns depending on your goals.",
  },
  {
    question: "How fast can PPC show results?",
    answer:
      "PPC can start generating traffic quickly after launch, but meaningful optimization usually needs a few weeks of conversion data, search term review, creative testing, and landing page learning.",
  },
  {
    question: "Do you handle landing pages and tracking?",
    answer:
      "Yes. PPC performance depends on the full funnel, so we can support landing page alignment, tracking setup, events, analytics, call tracking signals, ecommerce events, and reporting.",
  },
  {
    question: "How do you reduce wasted ad spend?",
    answer:
      "We reduce waste through search term pruning, negative keywords, audience exclusions, placement checks, bid adjustments, budget pacing, conversion-quality review, landing page improvements, and clearer campaign structure.",
  },
  {
    question: "Can PPC work with SEO and content marketing?",
    answer:
      "Yes. PPC data can reveal high-converting keywords, offers, audiences, and objections. Hegxcorp can use those insights to improve SEO pages, content topics, landing pages, and retargeting journeys.",
  },
  {
    question: "What budget do I need for PPC?",
    answer:
      "The right PPC budget depends on your industry, geography, CPCs, funnel, conversion rate, and lead value. We usually recommend starting with enough budget to collect meaningful conversion data before scaling.",
  },
  {
    question: "Do you manage ecommerce PPC campaigns?",
    answer:
      "Yes. Ecommerce PPC can include shopping campaigns, Performance Max, product feed improvements, category-level campaigns, dynamic retargeting, conversion value tracking, and ROAS-led reporting.",
  },
];

const ppcProofMetrics = [
  {
    value: "24/7",
    label: "Spend visibility",
    copy: "Campaign delivery, cost, leads, and conversion quality are monitored so spend does not drift quietly.",
  },
  {
    value: "6+",
    label: "Ad channels",
    copy: "Google Search, Performance Max, Meta, Instagram, LinkedIn, YouTube, shopping, display, and retargeting.",
  },
  {
    value: "30-day",
    label: "Learning cycle",
    copy: "Early campaign data is reviewed quickly to improve keywords, audiences, creatives, and landing pages.",
  },
  {
    value: "ROAS",
    label: "Growth lens",
    copy: "Budget decisions are connected to revenue, cost per lead, lead quality, and pipeline value.",
  },
];

function PpcProofBand() {
  return (
    <section className="border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
        {ppcProofMetrics.map((metric) => (
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

const ppcChannelServices = [
  {
    icon: Search,
    title: "Google Search Ads",
    copy: "High-intent search campaigns built around keyword groups, ad relevance, landing page intent, negatives, bid control, and conversion tracking.",
    points: ["Keyword mapping", "RSA copy", "Negatives", "Lead tracking"],
  },
  {
    icon: Zap,
    title: "Performance Max Campaigns",
    copy: "PMax structure for ecommerce and lead generation with audience signals, asset groups, feed hygiene, exclusions, search themes, and value-based goals.",
    points: ["Asset groups", "Feed checks", "Audience signals", "Exclusions"],
  },
  {
    icon: Megaphone,
    title: "Meta & Instagram Ads",
    copy: "Creative-led paid social campaigns with hooks, formats, audience tests, retargeting pools, offer angles, and conversion objective alignment.",
    points: ["Creative tests", "Hooks", "Retargeting", "Lead forms"],
  },
  {
    icon: Users,
    title: "LinkedIn B2B Campaigns",
    copy: "Account-based and role-based campaigns for B2B brands that need decision-maker reach, lead magnets, remarketing, and pipeline quality.",
    points: ["ABM", "Job roles", "Lead magnets", "Pipeline"],
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Ecommerce PPC",
    copy: "Product feed optimization, shopping campaigns, category budget control, dynamic remarketing, conversion value tracking, and ROAS reporting.",
    points: ["Product feeds", "Shopping ads", "Dynamic ads", "ROAS"],
  },
  {
    icon: Smartphone,
    title: "YouTube, Display & Remarketing",
    copy: "Awareness and retargeting campaigns that reconnect with visitors, video viewers, cart abandoners, and engaged audiences across the funnel.",
    points: ["Video ads", "Display", "Warm audiences", "Sequences"],
  },
];

function PpcChannelDepth() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
              PPC Management Services
            </p>
            <h2
              className="font-black leading-tight text-[#06133D]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 4.8vw, 66px)",
              }}
            >
              Paid media coverage for every high-intent acquisition channel
            </h2>
          </div>

          <div className="border border-[#E5E7EB] bg-[#FAFAF8] p-6 shadow-[0_22px_70px_-54px_rgba(6,19,61,0.5)]">
            <p className="text-base leading-8 text-[#5F6B7A]">
              Hegxcorp builds PPC systems across search, social, shopping, video, display, and
              retargeting so every channel has the right message, tracking, landing page, budget
              rule, and optimization rhythm before scale.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Search intent", "Paid social", "Shopping ads", "Retargeting"].map((item) => (
                <span
                  key={item}
                  className="border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-black text-[#06133D]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ppcChannelServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="border border-[#E5E7EB] bg-[#FAFAF8] p-7 transition hover:border-[#FC9C44]/45 hover:bg-white hover:shadow-[0_24px_65px_-42px_rgba(6,19,61,0.65)]"
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center bg-[#06133D] text-white">
                  <Icon size={22} strokeWidth={1.9} />
                </span>
                <h3 className="text-xl font-black text-[#06133D]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{service.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
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

const ppcWhyCards = [
  {
    icon: ShieldCheck,
    title: "Waste control from day one",
    copy: "Search terms, placements, negatives, audience quality, and conversion signals are checked early so budget does not disappear into poor-fit traffic.",
  },
  {
    icon: Gauge,
    title: "Tracking before scaling",
    copy: "We confirm events, values, forms, calls, ecommerce actions, and analytics flows before recommending heavier budget allocation.",
  },
  {
    icon: Layers,
    title: "Landing page alignment",
    copy: "Campaigns are reviewed with page speed, offer clarity, message match, trust elements, and conversion friction in mind.",
  },
  {
    icon: BarChart3,
    title: "Reporting that explains action",
    copy: "Reports show what changed, what improved, where budget moved, which tests mattered, and what should happen next.",
  },
];

function PpcWhySection() {
  return (
    <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
              Why Hegxcorp PPC
            </p>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(34px, 4.4vw, 60px)",
              }}
            >
              Paid campaigns built with control before scale
            </h2>
          </div>
          <div className="w-full max-w-3xl justify-self-end">
            <p className="text-base leading-8 text-white/72">
              PPC can create demand quickly, but it can also waste budget quickly. Hegxcorp focuses
              on clean setup, useful data, landing page alignment, and measured scaling so paid
              media has a stronger chance of becoming profitable without losing control of spend,
              tracking quality, or lead value.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Budget discipline", "Tracking clarity", "Landing page fit"].map((item) => (
                <div
                  key={item}
                  className="border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ppcWhyCards.map((card) => {
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

const ppcIndustries = [
  {
    icon: Building2,
    title: "B2B & SaaS",
    copy: "Lead-generation campaigns, LinkedIn ABM, high-intent Google Search, demo requests, lead magnets, and pipeline-quality reporting.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C",
    copy: "Shopping campaigns, Performance Max, dynamic remarketing, product feed improvements, ROAS tracking, and category-level budget strategy.",
  },
  {
    icon: MapPin,
    title: "Local Services",
    copy: "Call-focused campaigns, map intent, city targeting, service-area landing pages, lead forms, and retargeting for high-intent visitors.",
  },
  {
    icon: Globe2,
    title: "Education, Healthcare & Services",
    copy: "Inquiry campaigns, appointment or enrollment funnels, trust-led landing pages, audience segmentation, and lead quality review.",
  },
];

function PpcIndustries() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
            PPC Use Cases
          </p>
          <h2
            className="font-black leading-tight text-[#06133D]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 60px)",
            }}
          >
            Campaign planning adapted to industry, funnel, and lead quality
          </h2>
        </div>

        <div className="grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-4">
          {ppcIndustries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article key={industry.title} className="bg-white p-7 transition hover:bg-[#FAFAF8]">
                <Icon className="mb-6 h-7 w-7 text-[#FC9C44]" strokeWidth={1.9} />
                <h3 className="text-xl font-black text-[#06133D]">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{industry.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PpcHero() {
  return (
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
            PPC Advertising Services
          </p>

          <h1
            className="max-w-3xl font-black leading-[1.02]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(46px, 6vw, 86px)",
            }}
          >
            Paid Ads
            <span className="block text-[#FC9C44]">Built for ROAS</span>
          </h1>

          <p
            className="mt-7 max-w-2xl text-white/72"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.25vw, 19px)",
              lineHeight: 1.75,
            }}
          >
            Launch, optimize, and scale PPC campaigns across Google, Meta, LinkedIn, and retargeting
            channels with clear tracking and revenue-focused decisions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/free-growth-audit"
              className="inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
            >
              Get PPC Audit
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
                    Paid Growth Console
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">PPC Performance System</h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                  <MousePointerClick size={22} strokeWidth={2} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["ROAS", "4.8x"],
                  ["CPL Drop", "-42%"],
                  ["Lead Lift", "+176%"],
                  ["Waste Cut", "31%"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                      {label}
                    </p>
                    <p
                      className={`mt-3 text-3xl font-black ${index === 0 ? "text-[#FC9C44]" : "text-white"}`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                  <span className="text-white/52">Channel Allocation</span>
                  <span className="text-[#FC9C44]">Optimizing</span>
                </div>

                <div className="grid gap-3">
                  {[
                    ["Google Search", "74%"],
                    ["Performance Max", "58%"],
                    ["Meta Retargeting", "46%"],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs text-white/58">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#FC9C44] to-[#FFD4AA]"
                          initial={{ width: 0 }}
                          animate={{ width }}
                          transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
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
  );
}

function PpcCapabilities() {
  const [activeCapability, setActiveCapability] = useState(0);
  const activeItem = ppcCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="border-b border-neutral-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="seo-split-reveal">
          <div className="seo-split-left">
            <p className="seo-split-eyebrow">PPC Capabilities</p>
            <h2 className="seo-split-heading">Paid media systems for profitable acquisition</h2>
            <p className="seo-split-body">
              Hover or select a capability to see how each part of the PPC system improves
              targeting, conversion quality, spend control, and ROAS.
            </p>

            <div className="seo-service-list">
              {ppcCapabilities.map((item, index) => {
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
  );
}

function PpcPerformanceStack() {
  const cards = [
    {
      icon: DollarSign,
      title: "Budget Control",
      value: "Spend pacing",
      copy: "Every campaign is monitored by budget, conversion value, lead quality, and efficiency.",
    },
    {
      icon: Gauge,
      title: "Tracking Quality",
      value: "Clean events",
      copy: "Pixels, tags, conversion values, and CRM signals help us optimize toward real outcomes.",
    },
    {
      icon: BarChart3,
      title: "Scale Decisions",
      value: "ROAS first",
      copy: "Winning campaigns get more budget only when the data supports profitable acquisition.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[34%] opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="relative mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
            Performance Stack
          </p>
          <h2
            className="font-black leading-tight text-[#06133D]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4vw, 58px)",
            }}
          >
            PPC works best when media, tracking, and landing pages move together
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]">
            Each part of the paid growth system is built to protect budget, improve conversion
            quality, and scale only when performance is clear.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="group/card min-h-[340px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 shadow-[0_18px_48px_-30px_rgba(29,39,66,0.36)] transition-all duration-300 ease-out hover:rounded-tr-[48px] hover:rounded-br-[48px] hover:border-[#4C1688] hover:bg-[#4C1688] hover:shadow-[0_26px_68px_-28px_rgba(76,22,136,0.62)] lg:p-8"
              >
                <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72">
                  {card.value}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white">
                  {card.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90">
                  {card.copy}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PpcServicePage() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <PpcHero />
        <PpcProofBand />
        <PpcCapabilities />
        <PpcChannelDepth />
        <PpcPerformanceStack />
        <PpcWhySection />

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
                {ppcServices.map((item, index) => {
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
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
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
                            <p className="seo-disclosure-answer pb-7 pr-10">{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${isOpen ? "rotate-90" : "group-hover:translate-x-1"}`}
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
                            <p className="seo-disclosure-answer pb-7 pr-10">{item.answer}</p>
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

        <PpcIndustries />

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
                          className={`block text-lg font-semibold leading-7 ${
                            isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"
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

        {/* <ServiceLeadForm
                    eyebrow="Request a PPC Audit"
                    title="Tell us where your ad spend needs better control"
                    description="Share your website, current ad channels, monthly budget, conversion goals, and the PPC problems you want fixed. Hegxcorp will review your request and map the right starting point for campaign structure, tracking, landing pages, and ROAS improvement."
                    serviceName="PPC Advertising"
                    focusOptions={[]}
                /> */}

        {/* <ServiceContactCTA
                    eyebrow="Connect With Us"
                    title="Ready to scale paid campaigns with cleaner ROAS?"
                    description="Share your current ad goals with Hegxcorp and we will help you map the right campaign structure, tracking setup, landing page priorities, and budget plan."
                    serviceName="PPC Advertising"
                    primaryLabel="Start PPC Growth"
                /> */}
      </main>

      <Footer />
    </div>
  );
}
