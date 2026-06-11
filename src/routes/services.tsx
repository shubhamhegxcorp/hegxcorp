import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Search,
  MousePointerClick,
  Code2,
  Share2,
  Palette,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Enterprise Growth Consultancy Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Explore Hegxcorp's premium digital growth services including enterprise SEO, paid media campaigns, custom web engineering, conversion optimization, and brand transformation.",
      },
      { property: "og:title", content: "Growth Consultancy Services | Hegxcorp" },
      {
        property: "og:description",
        content:
          "Partner with Hegxcorp to scale revenue through data-backed engineering and growth optimization.",
      },
    ],
  }),
  component: ServicesPage,
} as never);

const detailedServices = [
  {
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    desc: "Gain compounding organic visibility. We build robust technical foundations, editorial content strategies, and high-authority link architectures that ensure your business ranks where it matters most.",
    deliverables: [
      "Technical & Core Web Vitals Audits",
      "Semantic Keyword Strategy",
      "Editorial Content Development",
      "High-Quality Digital PR & Backlinks",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Performance Advertising (PPC)",
    desc: "ROAS-focused campaigns across search, social, and programmatic channels. We design, deploy, and continuously optimize ads to secure high-intent lead flow and maximize yield on ad spend.",
    deliverables: [
      "Google Search & Performance Max",
      "Meta (Facebook & Instagram) Campaigns",
      "LinkedIn Account-Based Marketing (ABM)",
      "Creative Asset Testing & Scaling",
    ],
  },
  {
    icon: Code2,
    title: "Enterprise Web Development",
    desc: "Speed, security, and conversion are built into our DNA. We engineer scalable web platforms, customized web applications, and headless architectures designed to convert visitors into customers.",
    deliverables: [
      "Custom React & Next.js Platforms",
      "Headless CMS Implementations",
      "Conversion-Ready Wordpress Builds",
      "Speed & Security Optimization",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build authority and engage your audience directly. We create high-quality organic social assets and community-building strategies to convert brand followers into loyal brand advocates.",
    deliverables: [
      "B2B Thought Leadership Strategies",
      "Creative Visual Storytelling",
      "Community Moderation & Engagement",
      "Influencer Outreach & Partnerships",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Identity Design",
    desc: "Position your brand as the premium choice. We build cohesive brand identity systems, custom design languages, and digital brand guidelines designed to command market attention.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Visual Identity & Logo Systems",
      "UX/UI Design Systems",
      "Marketing Collateral & Guidelines",
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization (CRO)",
    desc: "Scale your revenue without increasing your traffic budget. We run scientific A/B tests, qualitative user recordings analysis, and copy reviews to remove conversion barriers across your funnel.",
    deliverables: [
      "User Session & Heatmap Analysis",
      "Structured A/B & Multivariate Testing",
      "Landing Page Copywriting & Re-design",
      "Checkout Flow Optimization",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#FAFAF8] py-20 border-b border-[#EAEAEA]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 relative z-10">
          <div className="max-w-[760px] space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#FC9C44] shadow-sm">
              <Zap className="h-3.5 w-3.5" />
              Outcome-Based Solutions
            </div>
            <h1
              className="font-bold text-[#232323] leading-tight tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
              }}
            >
              Consulting capabilities built for enterprise scale
            </h1>
            <p
              className="text-[#6B7280] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.25vw, 19px)" }}
            >
              We don't sell activities; we build outcomes. Every digital capability we deploy is
              aligned to your company's leads, sales, and revenue pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid List */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {detailedServices.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="space-y-6 flex flex-col justify-between p-8 rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] hover:border-[#FC9C44]/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon container */}
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#EAEAEA] text-[#1D2742]">
                    <s.icon className="h-6 w-6 text-[#FC9C44]" />
                  </span>
                  <h2
                    className="text-xl font-bold text-[#232323]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="text-sm text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.desc}
                  </p>

                  {/* Deliverables list */}
                  <div className="pt-4 space-y-2">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FC9C44]">
                      Core Focus Areas
                    </span>
                    <ul className="grid grid-cols-1 gap-2">
                      {s.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-[#232323]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#EBB771]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/free-growth-audit"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FC9C44] hover:gap-3 transition-all duration-200"
                  >
                    Discuss this capability <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle CTA row */}
      <section className="bg-[#1D2742] py-20 text-white text-center">
        <div className="mx-auto max-w-[800px] px-6 space-y-6">
          <SectionHeading
            align="center"
            tagline="Not sure where to start?"
            heading="Get a customized growth audit of your current channels"
            className="text-white"
          />
          {/* Proactively align taglines / colors inside SectionHeading inside Navy blocks */}
          <div className="pt-4">
            <Link
              to="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35] hover:shadow-[0_8px_20px_-8px_rgba(252,156,68,0.35)] transition-all duration-300"
            >
              Get Free Growth Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
