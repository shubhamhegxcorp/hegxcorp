import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceContactCTA } from "@/components/site/ServiceContactCTA";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";
import { ZigZagGrowthStack } from "@/components/site/ZigZagGrowthStack";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  Gauge,
  Globe2,
  Layers,
  Link2,
  MapPin,
  PenTool,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Target,
  Youtube,
  Layers3,
  Rocket,
} from "lucide-react";

export const Route = createFileRoute("/service/seo")({
  head: () => ({
    meta: [
      { title: "SEO Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Hegxcorp SEO services in India for technical SEO, local SEO, international SEO, ecommerce SEO, content strategy, link authority, analytics and long-term organic growth.",
      },
    ],
  }),
  component: SeoServicePage,
} as never);

function SeoHero() {
  return (
    <section className="relative overflow-hidden bg-[#050B24] px-6 py-24 text-white lg:px-10 lg:pt-10 lg:pb-14 ">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(252,156,68,0.22), transparent 28%), radial-gradient(circle at 82% 28%, rgba(79,111,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)",
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
            SEO Growth Consulting
          </p>

          <h1
            className="max-w-3xl font-black leading-[0.9]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(46px, 6vw, 86px)",
            }}
          >
            Search Engine
            <span className="block text-[#FC9C44]">Optimisation</span>
            Built to Compound
          </h1>

          <p
            className="mt-7 max-w-2xl text-white/72"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 1.25vw, 19px)",
              lineHeight: 1.75,
            }}
          >
            Hegxcorp builds SEO systems for brands that want more than rankings. We improve
            technical health, search intent coverage, content authority, local visibility, and
            conversion paths so organic traffic turns into qualified enquiries and revenue.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/free-growth-audit"
              className="inline-flex items-center rounded-full bg-[#FC9C44] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E88C35] hover:shadow-[0_18px_36px_-18px_rgba(252,156,68,0.9)]"
            >
              Get Free SEO Audit
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
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44]">
                    Organic Growth Plan
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">Search Visibility Roadmap</h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FC9C44] text-white">
                  <BarChart3 size={22} strokeWidth={2} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                    Audit Signals
                  </p>
                  <p className="mt-3 text-4xl font-black text-white">80+</p>
                  <p className="mt-2 text-sm text-white/58">
                    Technical, content, and authority checks
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                    Intent Clusters
                  </p>
                  <p className="mt-3 text-4xl font-black text-[#FC9C44]">12+</p>
                  <p className="mt-2 text-sm text-white/58">Buyer journeys mapped to keywords</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                    Fix Priority
                  </p>
                  <p className="mt-3 text-3xl font-black text-white">90 days</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/48">
                    Reporting
                  </p>
                  <p className="mt-3 text-3xl font-black text-white">Weekly</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em]">
                  <span className="text-white/52">Compounding Visibility Path</span>
                  <span className="text-[#FC9C44]">Mapped</span>
                </div>

                <div className="flex h-28 items-end gap-2">
                  {[28, 36, 44, 52, 68, 76, 88, 100].map((height, index) => (
                    <div
                      key={height}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-[#FC9C44] to-[#FFD4AA]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.45 + index * 0.06,
                      }}
                    />
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

const seoCapabilities = [
  {
    icon: Gauge,
    title: "Technical SEO",
    tag: "Site Health",
    hook: "Fix what blocks growth before scaling content.",
    description:
      "We audit crawlability, indexation, site structure, Core Web Vitals, schema, internal links, redirects, canonicals, and the technical issues that stop organic growth.",
    pills: ["Crawlability", "Core Web Vitals", "Schema", "Canonicals"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=75",
  },
  {
    icon: Search,
    title: "Keyword Strategy",
    tag: "Search Demand",
    hook: "Target the terms your buyers already use.",
    description:
      "We identify high-intent keywords, commercial modifiers, local searches, competitor gaps, and topic clusters that connect directly to your services, products, and buyer journey.",
    pills: ["Intent mapping", "Competitors", "Clusters", "SERP gaps"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=75",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    tag: "Authority",
    hook: "Build pages that rank, educate, and convert.",
    description:
      "We plan SEO landing pages, blogs, service pages, FAQs, comparison pages, and content clusters that help search engines and buyers understand your authority.",
    pills: ["Landing pages", "Blogs", "Topic clusters", "FAQs"],
    image: "https://images.unsplash.com/photo-1542435503-ec7b0f4b96a5?w=900&q=75",
  },
  {
    icon: Link2,
    title: "Authority Building",
    tag: "Trust Signals",
    hook: "Earn the credibility search engines can measure.",
    description:
      "We strengthen organic trust through quality content, digital PR, backlink strategy, and credibility signals.",
    pills: ["Digital PR", "Backlinks", "Mentions", "Relevance"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=75",
  },
  {
    icon: BarChart3,
    title: "Ecommerce SEO",
    tag: "Revenue Pages",
    hook: "Turn product discovery into organic sales.",
    description:
      "We optimize category pages, product pages, filters, metadata, content depth, and technical architecture for ecommerce traffic.",
    pills: ["Categories", "Products", "Filters", "Metadata"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=75",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    tag: "Nearby Demand",
    hook: "Win searches from people ready to visit or call.",
    description:
      "We improve local search visibility through location pages, Google Business Profile optimization, citations, and review signals.",
    pills: ["GBP", "Reviews", "Citations", "Location pages"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=75",
  },
  {
    icon: Globe2,
    title: "International SEO",
    tag: "Global Reach",
    hook: "Make every market discover the right version of your site.",
    description:
      "We map country targeting, language intent, hreflang, localized landing pages, and search demand so growing brands can rank beyond one region.",
    pills: ["Hreflang", "Market pages", "Localized intent", "Global tracking"],
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900&q=75",
  },
  {
    icon: Settings,
    title: "AI Search Readiness",
    tag: "Future Visibility",
    hook: "Help your brand show up clearly in modern search experiences.",
    description:
      "We structure content, FAQs, entity signals, schema, and expert-led page depth so your site is easier for search engines and AI answer systems to understand.",
    pills: ["Entity clarity", "Structured content", "Schema", "Helpful answers"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=75",
  },
];

function SeoCapabilities() {
  const [activeCapability, setActiveCapability] = useState(0);
  const activeItem = seoCapabilities[activeCapability];
  const ActiveIcon = activeItem.icon;

  // useEffect(() => {
  //     const timer = window.setInterval(() => {
  //         setActiveCapability((current) => (current + 1) % seoCapabilities.length);
  //     }, 3200);

  //     return () => window.clearInterval(timer);
  // }, []);

  return (
    <section className="border-b border-neutral-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="seo-split-reveal">
          <div className="seo-split-left">
            <p className="seo-split-eyebrow">SEO Capabilities</p>
            <h2 className="seo-split-heading">Complete SEO systems for long-term organic growth</h2>
            <p className="seo-split-body">
              Hover or select a capability to see how each part of the SEO system compounds
              visibility, authority, and qualified demand.
            </p>

            <div className="seo-service-list">
              {seoCapabilities.map((item, index) => {
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
                  className="seo-slide-bg"
                  style={{ backgroundImage: `url(${activeItem.image})` }}
                />
                <div className="seo-slide-tint" />
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

const seoProofMetrics = [
  {
    value: "80+",
    label: "SEO checkpoints",
    copy: "Technical, content, UX, schema, local, and authority checks before the roadmap is finalized.",
  },
  {
    value: "12+",
    label: "Intent clusters",
    copy: "Search topics grouped by buyer stage so every important service has a ranking path.",
  },
  {
    value: "7-step",
    label: "Execution process",
    copy: "Audit, keyword research, on-page SEO, technical fixes, content, authority, and reporting.",
  },
  {
    value: "Weekly",
    label: "Visibility review",
    copy: "Search Console, analytics, rankings, leads, and content gaps reviewed with action priorities.",
  },
];

function SeoProofBand() {
  return (
    <section className="border-b border-[#EAEAEA] bg-[#FAFAF8] px-6 py-16 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
        {seoProofMetrics.map((metric) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="border border-[#E5E7EB] bg-white p-6 shadow-[0_18px_45px_-34px_rgba(6,19,61,0.45)]"
          >
            <p className="text-4xl font-black text-[#06133D]">{metric.value}</p>
            <h2 className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#FC9C44]">
              {metric.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5F6B7A]">{metric.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const seoServiceTracks = [
  {
    icon: MapPin,
    title: "Local SEO",
    copy: "Improve visibility for city, area, and near-me searches with Google Business Profile optimization, local landing pages, NAP consistency, review signals, and citation cleanup.",
    points: ["Google Business Profile", "Location pages", "Review strategy", "Local citations"],
  },
  {
    icon: Globe2,
    title: "International SEO",
    copy: "Reach buyers across countries with region-specific keyword research, localized content planning, hreflang hygiene, country targeting, and global performance tracking.",
    points: ["Hreflang strategy", "Country pages", "Localized keywords", "Global reporting"],
  },
  {
    icon: Building2,
    title: "B2B SEO Services",
    copy: "Build authority for complex buying journeys using problem-aware content, service comparison pages, thought leadership, LinkedIn-aligned topics, and lead-focused landing pages.",
    points: [
      "Lead-intent keywords",
      "Decision-stage pages",
      "Authority content",
      "Pipeline tracking",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    copy: "Optimize category pages, product descriptions, filters, schema, internal links, and content depth so shoppers can discover products and move confidently toward checkout.",
    points: ["Category SEO", "Product schema", "Faceted navigation", "Conversion paths"],
  },
  {
    icon: Gauge,
    title: "Technical SEO & Migrations",
    copy: "Protect rankings during redesigns, domain moves, CMS migrations, and architecture changes with crawl audits, redirect maps, index controls, speed checks, and launch QA.",
    points: ["Core Web Vitals", "Redirect mapping", "Indexation fixes", "Architecture QA"],
  },
  {
    icon: PenTool,
    title: "Content Marketing SEO",
    copy: "Create service pages, blogs, FAQs, comparison pages, and topic clusters that answer buyer questions while supporting rankings, internal linking, and conversion.",
    points: ["Content briefs", "Topic clusters", "Service pages", "Helpful FAQs"],
  },
  {
    icon: Link2,
    title: "Link Building & Authority",
    copy: "Strengthen trust with relevant backlinks, brand mentions, internal authority flow, digital PR opportunities, and content assets worth referencing.",
    points: ["Backlink strategy", "Digital PR", "Internal links", "Authority assets"],
  },
  {
    icon: Layers,
    title: "WordPress, Shopify & CMS SEO",
    copy: "Tune popular CMS platforms with plugin setup, metadata, sitemap health, theme performance, structured data, collection pages, and clean content architecture.",
    points: ["Plugin setup", "Sitemaps", "Theme speed", "Collection SEO"],
  },
  {
    icon: Youtube,
    title: "YouTube SEO",
    copy: "Support video discovery with keyword-led titles, descriptions, chapters, tags, thumbnails, playlist structure, transcripts, and landing page embeds.",
    points: ["Video keywords", "Descriptions", "Playlists", "Transcripts"],
  },
  {
    icon: Settings,
    title: "AI SEO & Search Answer Readiness",
    copy: "Prepare pages for modern search experiences with entity clarity, structured answers, schema, author credibility, content freshness, and stronger topical coverage.",
    points: ["Entity signals", "Answer blocks", "Schema", "Content freshness"],
  },
];

function SeoServiceDepth() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-6xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
            SEO Services in India
          </p>
          <h2
            className="text-[#06133D] font-black leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 4.8vw, 66px)",
            }}
          >
            Full-funnel SEO services for visibility, trust, and qualified leads
          </h2>
          <p className="mt-6 max-w-6xl text-base leading-8 text-[#5F6B7A]">
            Hegxcorp covers the practical SEO layers a growing brand needs: local, international,
            B2B, ecommerce, technical, content, authority, CMS, video, and AI-ready search
            optimization, helping every important page become easier to discover, understand, trust,
            and convert.{" "}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {seoServiceTracks.map((track, index) => {
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

const seoInvestmentPoints = [
  "SEO keeps building value after the first campaign cycle, while paid ads stop the moment spend pauses.",
  "A stronger technical foundation improves crawl efficiency, page experience, conversion paths, and analytics clarity.",
  "Content created around buyer intent can support rankings, sales conversations, remarketing audiences, and brand authority.",
  "Monthly reporting connects rankings and traffic to enquiries, form submissions, calls, and business outcomes.",
];

function SeoInvestmentSection() {
  return (
    <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
            Long-Term Growth
          </p>
          <h2
            className="font-black leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.6vw, 62px)",
            }}
          >
            Why SEO is one of the strongest investments for compounding demand
          </h2>
          <p className="mt-6 text-base leading-8 text-white/72">
            Paid campaigns are useful for speed, but SEO builds durable discovery. Hegxcorp connects
            organic search with website performance, brand trust, helpful content, and conversion
            optimization so your audience can find you before they are ready to talk to sales.
          </p>
        </div>

        <div className="grid gap-13">
          {seoInvestmentPoints.map((point) => (
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

const highlightedServices = [
  {
    title: "SEO Audit",
    answer:
      "Hegxcorp audits your website from the ground up: crawlability, indexation, metadata, Core Web Vitals, schema, content gaps, internal links, competitor visibility, conversion paths, analytics setup, and search demand. The output is a prioritized roadmap, not a generic checklist.",
  },
  {
    title: "Technical SEO",
    answer:
      "We fix the behind-the-scenes issues that restrict organic growth: slow pages, broken links, duplicate content, thin templates, redirect chains, incorrect canonical tags, sitemap errors, robots rules, JavaScript rendering issues, and poor mobile experience.",
  },
  {
    title: "Local SEO",
    answer:
      "For location-led businesses, we optimize Google Business Profile, service area pages, city pages, local citations, review signals, maps visibility, and local keyword targeting so nearby buyers can find and trust your brand faster.",
  },
  {
    title: "Content Marketing",
    answer:
      "Our content planning connects keyword research with buyer intent. We create page briefs, service copy, blogs, FAQs, comparison content, and internal linking plans that build topical authority while supporting enquiries and sales conversations.",
  },
  {
    title: "SEO Migrations",
    answer:
      "When you redesign, re-platform, or change domains, Hegxcorp protects your rankings with URL mapping, redirect strategy, metadata preservation, staging audits, indexation checks, analytics validation, and post-launch monitoring.",
  },
  {
    title: "Link Building",
    answer:
      "We focus on relevance and trust rather than volume. Authority work includes internal link architecture, digital PR opportunities, partner mentions, high-quality citations, linkable content assets, and competitor backlink gap analysis.",
  },
  {
    title: "Enterprise SEO",
    answer:
      "Enterprise SEO needs governance as much as execution. We help teams manage page templates, content workflows, technical priorities, multi-location architecture, reporting dashboards, and cross-functional growth roadmaps.",
  },
  {
    title: "eCommerce SEO",
    answer:
      "We optimize ecommerce stores through category structure, product schema, collection copy, filters, breadcrumbs, metadata, review markup, internal links, content blocks, and conversion-focused product discovery.",
  },
];

const seoGrowthStack = [
  {
    icon: Gauge,
    label: "Technical Foundation",
    title: "Search-Ready Site Health",
    copy: "Crawlability, speed, indexation, schema, internal links, and structure are tightened first so search engines can understand and trust the site.",
  },
  {
    icon: FileText,
    label: "Authority Content",
    title: "Pages That Rank and Convert",
    copy: "Service pages, landing pages, blogs, and topic clusters are planned around buyer intent so traffic grows with stronger conversion potential.",
  },
  {
    icon: BarChart3,
    label: "Performance Loop",
    title: "Measure, Refine, Compound",
    copy: "Rankings, traffic quality, leads, content gaps, and technical signals are reviewed continuously so the SEO system keeps improving over time.",
  },
];

const processItems = [
  {
    title: "Initial Consultation & Website Audit",
    answer:
      "We begin by understanding your business model, service priorities, current website health, competitors, analytics data, and lead goals. Then we audit technical SEO, content quality, indexation, rankings, user experience, and conversion paths.",
  },
  {
    title: "Keyword Research & Search Intent Mapping",
    answer:
      "We map keywords by intent: awareness, comparison, local, product, service, and ready-to-buy searches. This helps Hegxcorp build pages that attract the right visitors, not just more visitors.",
  },
  {
    title: "On-Page Optimization",
    answer:
      "We improve titles, headings, metadata, internal links, content depth, schema, image alt text, calls-to-action, FAQs, and page structure so every important page has a clear ranking and conversion purpose.",
  },
  {
    title: "Technical SEO Fixes",
    answer:
      "We prioritize crawl, speed, mobile, canonical, sitemap, redirect, broken link, structured data, and indexation issues so search engines can discover, understand, and trust the website.",
  },
  {
    title: "Content Development & Optimization",
    answer:
      "We create and improve service pages, blogs, location pages, comparison pages, FAQs, and supporting content. Every content asset is planned around search intent, internal linking, and business value.",
  },
  {
    title: "Authority Building & Off-Page SEO",
    answer:
      "We strengthen trust signals through relevant backlinks, citations, digital PR, brand mentions, review signals, and internal authority flow. The goal is sustainable credibility, not short-term link volume.",
  },
  {
    title: "Monitoring, Reporting & Continuous Improvement",
    answer:
      "SEO is reviewed continuously. We monitor Search Console, analytics, rankings, traffic quality, conversions, competitor movement, and new content opportunities, then refine the roadmap based on what the data shows.",
  },
];

const whyChooseCards = [
  {
    icon: Target,
    title: "Revenue-first SEO strategy",
    copy: "We connect keyword opportunities with your highest-value services, enquiry quality, customer journey, and sales goals so SEO supports real business outcomes.",
  },
  {
    icon: Settings,
    title: "Technical depth plus content clarity",
    copy: "Hegxcorp combines technical SEO, content strategy, analytics, and conversion thinking, which helps your website rank better and perform better after visitors arrive.",
  },
  {
    icon: Activity,
    title: "Transparent performance reporting",
    copy: "You see what changed, why it changed, what improved, and what should happen next across rankings, impressions, clicks, traffic quality, and enquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable, search-safe execution",
    copy: "We focus on clean site structure, useful content, strong UX, relevant links, and durable authority instead of risky shortcuts that can damage long-term growth.",
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement loop",
    copy: "SEO is not a one-time setup. We keep improving pages, fixing technical barriers, expanding content, and adapting to search behavior as your market changes.",
  },
  {
    icon: BarChart3,
    title: "SEO connected with CRO",
    copy: "Organic growth matters most when visitors take action. We review calls-to-action, page hierarchy, lead forms, trust signals, and user flow alongside rankings.",
  },
];

function WhyChooseHegxcorp() {
  return (
    <section className="border-y border-[#EAEAEA] bg-[#FAFAF8] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
              Why Choose Hegxcorp
            </p>
            <h2
              className="text-[#06133D] font-black leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(34px, 4.4vw, 60px)",
              }}
            >
              Search growth handled with strategy, engineering, and accountability
            </h2>
          </div>
          <div className="border border-[#E5E7EB] bg-white p-6 shadow-[0_22px_70px_-54px_rgba(6,19,61,0.45)]">
            <p className="text-base leading-8 text-[#5F6B7A]">
              Hegxcorp is built for businesses that want a practical SEO partner. We understand your
              website, audience, services, and growth goals before making recommendations. Our team
              strengthens content, improves technical SEO, and removes friction that blocks
              visibility. Every strategy is connected to measurable growth, qualified enquiries, and
              stronger search performance. We focus on long-term organic visibility instead of
              short-term ranking tricks. The result is an SEO system that keeps improving your
              website, traffic quality, and business outcomes.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Technical clarity", "Content direction", "Growth reporting"].map((item) => (
                <span
                  key={item}
                  className="border border-[#E5E7EB] bg-[#FAFAF8] px-4 py-3 text-sm font-black text-[#06133D]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.42, delay: index * 0.03 }}
                className="border border-[#E5E7EB] bg-white p-7"
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center bg-[#FC9C44] text-white">
                  <Icon size={21} strokeWidth={1.9} />
                </span>
                <h3 className="text-lg font-black text-[#06133D]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5F6B7A]">{card.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const seoIndustries = [
  {
    title: "B2B & SaaS",
    copy: "Rank for problem-aware, comparison, integration, and decision-stage searches that generate better-fit leads.",
  },
  {
    title: "Ecommerce & D2C",
    copy: "Improve category visibility, product discovery, rich results, review signals, and content-led shopping journeys.",
  },
  {
    title: "Healthcare & Clinics",
    copy: "Build trustworthy service pages, local visibility, FAQ depth, appointment intent, and patient education content.",
  },
  {
    title: "Education & Institutes",
    copy: "Capture course, location, admission, comparison, and career-focused search demand with structured content.",
  },
  {
    title: "Real Estate & Local Services",
    copy: "Strengthen city pages, map visibility, neighborhood intent, lead forms, and trust signals for local enquiries.",
  },
  {
    title: "Manufacturing & Industrial",
    copy: "Turn technical capabilities into searchable service pages, product categories, case studies, and B2B authority.",
  },
];

function SeoIndustries() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-6xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#FC9C44]">
            Industries We Optimize
          </p>
          <h2
            className="text-[#06133D] font-black leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4.4vw, 60px)",
            }}
          >
            SEO strategy adapted to your market, audience, and sales cycle
          </h2>
        </div>

        <div className="grid gap-px bg-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3">
          {seoIndustries.map((industry) => (
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

const faqs = [
  {
    question: "What are SEO services?",
    answer:
      "SEO services improve how your website appears, performs, and converts in organic search. A strong SEO plan includes technical SEO, keyword research, on-page optimization, content strategy, local SEO, link authority, analytics, and ongoing reporting.",
  },
  {
    question: "Why does my business need SEO?",
    answer:
      "SEO helps your business get discovered by people already searching for your services, products, or solutions. It can reduce dependence on paid ads, improve qualified traffic, strengthen credibility, and create long-term compounding growth.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes 3 to 6 months to show meaningful movement, depending on competition, website condition, content quality, technical health, and authority. Technical fixes can create earlier gains, while content and authority typically compound over time.",
  },
  {
    question: "What is included in SEO services?",
    answer:
      "Hegxcorp SEO services can include SEO audits, technical fixes, keyword research, on-page optimization, content planning, local SEO, international SEO, ecommerce SEO, link building, Search Console review, analytics setup, and monthly reporting.",
  },
  {
    question: "Do you offer local SEO for city or area searches?",
    answer:
      "Yes. Local SEO can include Google Business Profile optimization, service area pages, location pages, citation consistency, review strategy, map visibility improvements, and local keyword targeting.",
  },
  {
    question: "Can SEO help ecommerce websites?",
    answer:
      "Yes. Ecommerce SEO improves product discovery through optimized category pages, product metadata, structured data, internal links, filters, collection content, review markup, and conversion-focused product journeys.",
  },
  {
    question: "Will you create SEO content for my website?",
    answer:
      "Yes. We can plan and create service pages, blogs, FAQs, location pages, comparison pages, and topic clusters. Every content recommendation is tied to search intent, authority, and conversion value.",
  },
  {
    question: "How do you measure SEO success?",
    answer:
      "We track rankings, impressions, clicks, organic traffic, landing page quality, conversions, calls, form enquiries, Search Console data, technical health, and content growth. The exact dashboard depends on your business goals.",
  },
  {
    question: "Can you protect rankings during a website redesign?",
    answer:
      "Yes. For redesigns and migrations, we prepare redirect maps, preserve important metadata, audit staging environments, check indexation controls, validate analytics, monitor launch changes, and resolve post-launch crawl issues.",
  },
];

function SeoServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openService, setOpenService] = useState<number | null>(null);
  const [openProcess, setOpenProcess] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <style>{`
                .seo-split-reveal {
                    display: grid;
                    grid-template-columns: minmax(300px, 0.9fr) 1px minmax(420px, 1.1fr);
                    gap: 42px;
                    align-items: stretch;
                    min-height: 520px;
                    background: transparent;
                    border: 0;
                    border-radius: 0;
                    box-shadow: none;
                    overflow: visible;
                }

                .seo-split-left {
                    width: auto;
                    padding: 0;
                    background: transparent;
                    border: 0;
                    border-radius: 0;
                }

                .seo-split-divider {
                    width: 1px;
                    min-height: 100%;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(6, 19, 61, 0.16),
                        transparent
                    );
                }

                .seo-split-eyebrow {
                    margin-bottom: 14px;
                    color: #fc9c44;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .seo-split-heading {
                    max-width: 440px;
                    margin-bottom: 16px;
                    color: #06133d;
                    font-size: clamp(36px, 4vw, 56px);
                    font-weight: 800;
                    line-height: 1.08;
                }

                .seo-split-body {
                    max-width: 430px;
                    margin-bottom: 34px;
                    color: #5a6480;
                    font-size: 15px;
                    line-height: 1.75;
                }

                .seo-service-list {
                    border-top: 1px solid rgba(6, 19, 61, 0.12);
                }

                .seo-service-item {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    gap: 14px;
                    border: 0;
                    border-bottom: 1px solid rgba(6, 19, 61, 0.12);
                    background: transparent;
                    padding: 18px 0;
                    cursor: pointer;
                    text-align: left;
                    transition:
                        padding-left 240ms ease,
                        background-color 240ms ease;
                }

                .seo-service-item:hover,
                .seo-service-item.active {
                    padding-left: 12px;
                }

                .seo-service-icon {
                    display: flex;
                    width: 38px;
                    height: 38px;
                    flex-shrink: 0;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    background: #f3f5fb;
                    color: #536083;
                    transition:
                        background-color 240ms ease,
                        color 240ms ease,
                        transform 240ms ease;
                }

                .seo-service-item:hover .seo-service-icon,
                .seo-service-item.active .seo-service-icon {
                    background: #fc9c44;
                    color: #ffffff;
                    transform: scale(1.05);
                }

                .seo-service-copy {
                    display: grid;
                    gap: 2px;
                }

                .seo-service-name {
                    color: #06133d;
                    font-size: 16px;
                    font-weight: 750;
                    transition: color 220ms ease;
                }

                .seo-service-tag {
                    color: #7a849f;
                    font-size: 12px;
                }

                .seo-service-item:hover .seo-service-name,
                .seo-service-item.active .seo-service-name {
                    color: #fc9c44;
                }

                .seo-service-arrow {
                    margin-left: auto;
                    color: rgba(6, 19, 61, 0.28);
                    transition:
                        color 220ms ease,
                        transform 220ms ease;
                }

                .seo-service-item:hover .seo-service-arrow,
                .seo-service-item.active .seo-service-arrow {
                    color: #fc9c44;
                    transform: translateX(6px);
                }

                .seo-split-right {
                    position: relative;
                    min-width: 0;
                    min-height: 520px;
                    overflow: hidden;
                    border-radius: 0;
                    background: #06133d;
                }

                .seo-capability-slide {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 3rem;
                }

                .seo-slide-bg {
                    position: absolute;
                    inset: 0;
                    background-position: center;
                    background-size: cover;
                    background-blend-mode: normal;
                    transform: scale(1.02);
                    transition: transform 700ms ease, filter 700ms ease;
                }

                .seo-capability-slide:hover .seo-slide-bg {
                    transform: scale(1.08);
                    filter: saturate(1.08);
                }

                .seo-slide-tint {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(6, 19, 61, 0.78) 0%,
                        rgba(6, 19, 61, 0.38) 48%,
                        rgba(6, 19, 61, 0.1) 100%
                    );
                }

                .seo-slide-content {
                    position: relative;
                    z-index: 2;
                    max-width: 460px;
                }

                .seo-slide-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 14px;
                    border-radius: 999px;
                    background: #fc9c44;
                    padding: 6px 14px;
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                .seo-slide-title {
                    margin-bottom: 10px;
                    color: #ffffff;
                    font-size: clamp(34px, 4vw, 58px);
                    font-weight: 850;
                    line-height: 1.02;
                }

                .seo-slide-hook {
                    margin-bottom: 18px;
                    color: rgba(255, 255, 255, 0.78);
                    font-size: 15px;
                    font-style: italic;
                }

                .seo-slide-desc {
                    max-width: 430px;
                    margin-bottom: 22px;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 15px;
                    line-height: 1.75;
                }

                .seo-slide-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .seo-slide-pill {
                    border: 1px solid rgba(255, 255, 255, 0.28);
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.12);
                    padding: 6px 13px;
                    color: rgba(255, 255, 255, 0.84);
                    font-size: 12px;
                    font-weight: 650;
                }

                .seo-disclosure-answer {
                    color: #06133d;
                    font-size: 1.02rem;
                    font-weight: 700;
                    line-height: 1.75;
                }

                @media (max-width: 900px) {
                    .seo-split-reveal {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .seo-split-divider {
                        display: none;
                    }

                    .seo-split-right {
                        min-height: 440px;
                    }

                    .seo-capability-slide {
                        padding: 2rem;
                    }
                }
            `}</style>

      <main>
        <SeoHero />

        <SeoProofBand />

        <SeoCapabilities />

        <SeoServiceDepth />

        <ZigZagGrowthStack
          eyebrow="SEO Growth Stack"
          title="SEO works best when technical health, content, and measurement move together"
          description="Every SEO layer should support the next, turning a stronger website foundation into clearer authority, better rankings, and more qualified demand."
          cards={seoGrowthStack}
        />

        <SeoInvestmentSection />

        {/* Highlighted Services & Process */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1050px] px-6 lg:px-10">
            <h2
              className="text-center text-[#06133D] font-black leading-tight mb-20"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 4.4vw, 64px)",
              }}
            >
              Highlighted
              <br />
              Services &amp; Process
            </h2>

            <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
              <div className="space-y-0">
                {highlightedServices.map((item, index) => {
                  const isOpen = openService === index;

                  return (
                    <div key={item.title} className="border-b border-[#06133D]">
                      <button
                        type="button"
                        onClick={() => setOpenService(isOpen ? null : index)}
                        className="group w-full flex items-center justify-between gap-6 py-7 text-left"
                      >
                        <span
                          className="text-[#06133D] font-semibold"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "18px",
                          }}
                        >
                          {item.title}
                        </span>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
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
                            <p className="seo-disclosure-answer pb-7 pr-10">{item.answer}</p>
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
                        className="group w-full flex items-center justify-between gap-6 py-7 text-left"
                      >
                        <span
                          className="text-[#06133D] font-semibold"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "18px",
                          }}
                        >
                          {item.title}
                        </span>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 text-[#06133D] transition-transform ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
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

        <WhyChooseHegxcorp />

        <SeoIndustries />

        {/* {FAQ} */}
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

        {/* <ServiceLeadForm
                    eyebrow="Request an SEO Audit"
                    title="Tell us what you want your search growth to fix first"
                    description="Use this form to share your website, target locations, competitors, traffic goals, and SEO challenges. Hegxcorp will review the request and suggest the right starting point for technical SEO, local SEO, content, authority, or ecommerce growth."
                    serviceName="SEO"
                    focusOptions={[]}
                /> */}
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
                    title="Ready to build SEO growth that compounds?"
                    description="Share your search goals with Hegxcorp and we will help you map the right SEO audit, technical fixes, content priorities, and growth roadmap."
                    serviceName="SEO"
                    primaryLabel="Start SEO Growth"
                /> */}
      </main>

      <Footer />
    </div>
  );
}
