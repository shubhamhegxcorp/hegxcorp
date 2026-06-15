import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

/* ─────────────────────────────────────────────────────────────
   BLUEPRINT CONNECTOR SVG — updated for 2+4 layout
   Row 1 (featured): SEO @ x=0.25, PPC @ x=0.75,  y ≈ 0.28
   Row 2 (standard): WEB @ x=0.125, CRO @ x=0.375,
                     BRAND @ x=0.625, SMM @ x=0.875, y ≈ 0.78
───────────────────────────────────────────────────────────── */
function SystemConnections() {
  const lines: [number, number, number, number][] = [
    // Featured row horizontal
    [0.25, 0.28, 0.75, 0.28],
    // Standard row horizontals
    [0.125, 0.78, 0.375, 0.78],
    [0.375, 0.78, 0.625, 0.78],
    [0.625, 0.78, 0.875, 0.78],
    // Verticals: featured → standard
    [0.25, 0.28, 0.25, 0.78],
    [0.75, 0.28, 0.75, 0.78],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#FC9C44"
          strokeWidth="1"
          opacity="0.08"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICE VISUAL PANELS
   Each returns bare JSX (no inner border/container).
   The card IS the browser frame — no nesting.
───────────────────────────────────────────────────────────── */

/** SEO — authority bars + compounding growth line */
function SEOVisual() {
  return (
    <div className="relative w-full flex flex-col gap-2">
      {/* Bar chart — keyword authority */}
      <div className="flex items-end gap-[3px] h-14">
        {[32, 50, 42, 64, 54, 74, 62, 82, 70, 92].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px] bg-[#FC9C44]"
            style={{ opacity: 0.12 + i * 0.09 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
              originY: "bottom",
            } as never}
          >
            <div
              className="w-full"
              style={{ height: `${h * 0.56}px`, transformOrigin: "bottom" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Growth curve */}
      <svg viewBox="0 0 200 36" className="w-full h-8" preserveAspectRatio="none">
        <defs>
          <linearGradient id="seo-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FC9C44" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FC9C44" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 34 C30 30, 60 22, 90 14 S140 5, 170 3 S190 2, 200 1 V36 H0 Z"
          fill="url(#seo-g)"
        />
        <motion.path
          d="M0 34 C30 30, 60 22, 90 14 S140 5, 170 3 S190 2, 200 1"
          fill="none"
          stroke="#FC9C44"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Proof point */}
      <div className="absolute -top-1 right-0 text-right">
        <div className="text-[20px] font-bold text-[#FC9C44] leading-none font-mono">
          +310%
        </div>
        <div className="text-[8px] text-[#9CA3AF] font-mono">Organic Growth</div>
      </div>
    </div>
  );
}

/** PPC — centred ROAS hero + two minimal channel bars */
function PPCVisual() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="text-center">
        <motion.div
          className="text-[40px] font-bold text-[#1D2742] leading-none font-mono"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          4.8<span className="text-[#FC9C44]">×</span>
        </motion.div>
        <div className="text-[8px] text-[#9CA3AF] font-mono uppercase tracking-widest mt-1.5">
          Average ROAS
        </div>
      </div>

      <div className="w-full space-y-2">
        {[
          { label: "Google", pct: 68 },
          { label: "Meta", pct: 52 },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2.5">
            <span className="text-[8px] text-[#C4C9D4] font-mono w-9 shrink-0">
              {b.label}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-[#F3F4F6] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#FC9C44]"
                initial={{ width: 0 }}
                whileInView={{ width: `${b.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </div>
            <span className="text-[8px] text-[#9CA3AF] font-mono shrink-0 w-5 text-right">
              {b.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Web Dev — dark code snippet + deploy status */
function WebDevVisual() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="rounded-lg bg-[#1D2742] px-3.5 py-3 font-mono space-y-1.5">
        <div className="text-[9px] text-[#FC9C44]">{"<GrowthEngine />"}</div>
        <div className="text-[9px] text-[#6B8DB5]">
          {"  performance: "}
          <span className="text-emerald-400">98</span>
        </div>
        <div className="text-[9px] text-[#6B8DB5]">
          {"  seo: "}
          <span className="text-emerald-400">100</span>
        </div>
        <div className="text-[9px] text-[#6B8DB5]">
          {"  edge: "}
          <span className="text-emerald-400">cached ✓</span>
        </div>
      </div>

      <div className="flex items-center gap-2 px-1">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
        <span className="text-[9px] text-emerald-600 font-mono font-medium">
          Deployment successful
        </span>
        <span className="ml-auto text-[8px] text-[#C4C9D4] font-mono">
          98 Lighthouse
        </span>
      </div>
    </div>
  );
}

/** CRO — minimal three-step conversion funnel */
function CROVisual() {
  const steps = [
    { label: "Visitors", w: "100%" },
    { label: "Leads", w: "44%" },
    { label: "Customers", w: "18%" },
  ];
  return (
    <div className="w-full flex flex-col gap-2">
      {steps.map((s, i) => (
        <div key={s.label} className="flex flex-col gap-1">
          {i > 0 && (
            <div className="text-[9px] text-[#E5E7EB] font-mono text-center leading-none select-none">
              ↓
            </div>
          )}
          <div className="flex items-center gap-2.5">
            <span className="text-[8px] font-mono text-[#9CA3AF] w-14 shrink-0">
              {s.label}
            </span>
            <div className="flex-1 h-3.5 rounded bg-[#F3F4F6] overflow-hidden">
              <motion.div
                className="h-full rounded bg-gradient-to-r from-[#FC9C44] to-[#ffb880]"
                style={{ width: s.w }}
                initial={{ width: 0 }}
                whileInView={{ width: s.w }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="text-right mt-0.5">
        <span className="text-[10px] font-bold text-[#FC9C44] font-mono">
          +184% Leads
        </span>
      </div>
    </div>
  );
}

/** Branding — colour swatches + type specimen */
function BrandVisual() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Colour system */}
      <div className="flex gap-1.5">
        {["#1D2742", "#FC9C44", "#ffb36b", "#F3F4F6", "#232323"].map((c) => (
          <div
            key={c}
            className="flex-1 h-9 rounded-md"
            style={{
              background: c,
              border: c === "#F3F4F6" ? "1px solid #EAEAEA" : undefined,
            }}
          />
        ))}
      </div>

      {/* Type specimen */}
      <div className="rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] px-3 py-2.5">
        <div
          className="text-[18px] font-bold text-[#232323] leading-none"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Aa
        </div>
        <div
          className="text-[9px] text-[#9CA3AF] mt-0.5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Brand identity system
        </div>
      </div>
    </div>
  );
}

/** Social Media — engagement curve + one stat */
function SMMVisual() {
  return (
    <div className="relative w-full flex flex-col gap-2">
      {/* Proof point */}
      <div className="flex items-start justify-between">
        <div className="text-[8px] text-[#9CA3AF] font-mono uppercase tracking-wider pt-1">
          Audience Growth
        </div>
        <div className="text-right">
          <div className="text-[20px] font-bold text-[#1D2742] leading-none font-mono">
            +38%
          </div>
          <div className="text-[8px] text-[#9CA3AF] font-mono">Engagement</div>
        </div>
      </div>

      {/* Engagement curve */}
      <svg
        viewBox="0 0 200 44"
        className="w-full h-10"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="smm-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E1306C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E1306C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 42 C20 40, 40 36, 60 28 S90 16, 120 10 S160 4, 200 1 V44 H0 Z"
          fill="url(#smm-g)"
        />
        <motion.path
          d="M0 42 C20 40, 40 36, 60 28 S90 16, 120 10 S160 4, 200 1"
          fill="none"
          stroke="#E1306C"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Platform dots */}
      <div className="flex items-center gap-3">
        {[
          { name: "Instagram", color: "#E1306C" },
          { name: "LinkedIn", color: "#0077B5" },
          { name: "YouTube", color: "#FF0000" },
        ].map((p) => (
          <span
            key={p.name}
            className="text-[8px] text-[#9CA3AF] font-mono flex items-center gap-1"
          >
            <span
              className="h-1.5 w-1.5 rounded-full inline-block shrink-0"
              style={{ background: p.color }}
            />
            {p.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICE DEFINITIONS
───────────────────────────────────────────────────────────── */
const services = [
  {
    slug: "SEO",
    title: "Search Engine Optimisation",
    desc: "A compounding growth asset. We engineer technical authority and content systems that make you the default answer in your market.",
    href: "/services",
    url: "hegxcorp › seo-engine",
    Visual: SEOVisual,
  },
  {
    slug: "PPC",
    title: "Paid Advertising",
    desc: "Every campaign optimised toward revenue, not clicks. Google, Meta and programmatic — unified by one metric: ROAS.",
    href: "/services",
    url: "hegxcorp › paid-ads",
    Visual: PPCVisual,
  },
  {
    slug: "WEB",
    title: "Web Development",
    desc: "Sites engineered to load fast, rank high and convert. Performance and conversion architecture are baked in from line one.",
    href: "/services",
    url: "hegxcorp › web-platform",
    Visual: WebDevVisual,
  },
  {
    slug: "CRO",
    title: "Conversion Optimisation",
    desc: "Turn existing traffic into more revenue. We map the funnel, find the leaks and close them with systematic data-led experiments.",
    href: "/services",
    url: "hegxcorp › cro-funnel",
    Visual: CROVisual,
  },
  {
    slug: "BRAND",
    title: "Branding & Design",
    desc: "A brand system that makes premium positioning visible at every touchpoint — identity, type, colour and creative assets built to last.",
    href: "/services",
    url: "hegxcorp › brand-system",
    Visual: BrandVisual,
  },
  {
    slug: "SMM",
    title: "Social Media Marketing",
    desc: "Audiences built with intent. Content systems that grow engaged communities and feed your wider growth funnel.",
    href: "/services",
    url: "hegxcorp › social-studio",
    Visual: SMMVisual,
  },
];

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
};

/* ─────────────────────────────────────────────────────────────
   SERVICE CARD
   size="featured"  — SEO + PPC: 2-col row, taller visual, larger title
   size="standard"  — WEB, CRO, BRAND, SMM: 4-col row, compact
───────────────────────────────────────────────────────────── */
function ServiceCard({
  s,
  i,
  size = "standard",
}: {
  s: (typeof services)[number];
  i: number;
  size?: "featured" | "standard";
}) {
  const isFeatured = size === "featured";

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariant}
      whileHover={{
        y: -5,
        borderColor: "rgba(252,156,68,0.45)",
        boxShadow:
          "0 0 0 1px rgba(252,156,68,0.12), 0 20px 40px -16px rgba(29,39,66,0.09)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group rounded-2xl border border-[#EAEAEA] bg-white overflow-hidden flex flex-col cursor-pointer"
    >
      <Link to={s.href} className="flex flex-col h-full">

        {/* Browser chrome = card top edge */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA] select-none shrink-0">
          <span className="h-2 w-2 rounded-full bg-[#FC9C44]/50" />
          <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
          <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
          <span className="ml-2 text-[8px] text-[#C4C9D4] font-mono truncate flex-1">
            {s.url}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#EAEAEA] group-hover:bg-emerald-400 transition-colors duration-300 shrink-0" />
        </div>

        {/* Visual panel — taller for featured, compact for standard */}
        <div
          className={`border-b border-[#F3F4F6] bg-white ${
            isFeatured ? "px-6 pt-6 pb-5" : "px-4 pt-4 pb-3"
          }`}
          style={{ minHeight: isFeatured ? "200px" : "140px" }}
        >
          <s.Visual />
        </div>

        {/* Text panel */}
        <div className={`flex flex-col flex-1 gap-2 ${ isFeatured ? "p-5" : "p-4" }`}>
          <span
            className="text-[10px] font-bold tracking-[0.14em] text-[#FC9C44]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {s.slug}
          </span>

          <h3
            className="font-bold text-[#232323] leading-snug"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: isFeatured ? "18px" : "14px",
            }}
          >
            {s.title}
          </h3>

          <p
            className={`text-[#6B7280] leading-relaxed flex-1 ${
              isFeatured ? "text-[13px]" : "text-[12px] line-clamp-2"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {s.desc}
          </p>

          {/* CTA — slides in on hover */}
          <div
            className="flex items-center gap-1.5 text-xs font-semibold text-[#FC9C44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-200 ease-out"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Learn more <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────────────────────── */
export function ServicesGrid() {
  const featured = services.slice(0, 2); // SEO + PPC
  const standard = services.slice(2);    // WEB, CRO, BRAND, SMM

  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <SectionHeading
            tagline="One Growth Engine · Six Capabilities"
            heading="Services built for growth"
            description="Not six separate services. One integrated system where every capability strengthens the next."
          />
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="shrink-0 mb-1">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid wrapper with blueprint connectors behind */}
        <div className="relative flex flex-col gap-5">

          {/* Blueprint SVG — behind both rows, desktop only */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
            <SystemConnections />
          </div>

          {/* ── Row 1: Featured — SEO + PPC (2 wide cards) ── */}
          <div className="relative z-10 grid sm:grid-cols-2 gap-5">
            {featured.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i} size="featured" />
            ))}
          </div>

          {/* ── Row 2: Standard — WEB, CRO, BRAND, SMM (4 compact cards) ── */}
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {standard.map((s, i) => (
              <ServiceCard key={s.slug} s={s} i={i + 2} size="standard" />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
