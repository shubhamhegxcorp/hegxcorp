import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import { ShaderCard } from "@/components/ui/shader-card";
import { ServicesMobilePageFlip } from "@/components/home/ServicesMobilePageFlip";

/* ─────────────────────────────────────────────────────────────
   SERVICE VISUAL PANELS
   Each returns bare JSX (no inner border/container).
   The card IS the browser frame — no nesting.
───────────────────────────────────────────────────────────── */

/** SEO — authority bars + compounding growth line */
function SEOVisual() {
  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Proof point header — dedicated top row so bars never overlap or cover +310% */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#9CA3AF] uppercase tracking-wider">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" />
          Keyword Authority
        </div>
        <div className="rounded-md border border-[#FC9C44]/20 bg-[#FFF8F2] px-2 py-0.5 text-right shadow-xs">
          <div className="text-[18px] font-bold text-[#FC9C44] leading-none font-mono">+310%</div>
          <div className="text-[8px] font-semibold text-[#C96A13] font-mono uppercase tracking-wider mt-0.5">
            Organic Growth
          </div>
        </div>
      </div>

      {/* Bar chart — keyword authority */}
      <div className="flex items-end gap-[3px] h-12">
        {[24, 38, 32, 48, 40, 56, 46, 62, 52, 68].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px] bg-[#FC9C44]"
            style={{ opacity: 0.12 + i * 0.09 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={
              {
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
                originY: "bottom",
              } as never
            }
          >
            <div
              className="w-full"
              style={{ height: `${h * 0.52}px`, transformOrigin: "bottom" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Growth curve */}
      <svg viewBox="0 0 200 32" className="w-full h-7" preserveAspectRatio="none">
        <defs>
          <linearGradient id="seo-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FC9C44" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FC9C44" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 C30 26, 60 18, 90 12 S140 4, 170 2 S190 1, 200 1 V32 H0 Z"
          fill="url(#seo-g)"
        />
        <motion.path
          d="M0 30 C30 26, 60 18, 90 12 S140 4, 170 2 S190 1, 200 1"
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
            <span className="text-[8px] text-[#C4C9D4] font-mono w-9 shrink-0">{b.label}</span>
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
        <span className="ml-auto text-[8px] text-[#C4C9D4] font-mono">98 Lighthouse</span>
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
            <span className="text-[8px] font-mono text-[#9CA3AF] w-14 shrink-0">{s.label}</span>
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
        <span className="text-[10px] font-bold text-[#FC9C44] font-mono">+184% Leads</span>
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
          <div className="text-[20px] font-bold text-[#1D2742] leading-none font-mono">+38%</div>
          <div className="text-[8px] text-[#9CA3AF] font-mono">Engagement</div>
        </div>
      </div>

      {/* Engagement curve */}
      <svg viewBox="0 0 200 44" className="w-full h-10" preserveAspectRatio="none">
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
    href: "/service/seo",
    url: "hegxcorp › seo-engine",
    Visual: SEOVisual,
  },
  {
    slug: "PPC",
    title: "Paid Advertising",
    desc: "Every campaign optimised toward revenue, not clicks. Google, Meta and programmatic — unified by one metric: ROAS.",
    href: "/service/ppc",
    url: "hegxcorp › paid-ads",
    Visual: PPCVisual,
  },
  {
    slug: "WEB",
    title: "Web Development",
    desc: "Sites engineered to load fast, rank high and convert. Performance and conversion architecture are baked in from line one.",
    href: "/service/web-dev",
    url: "hegxcorp › web-platform",
    Visual: WebDevVisual,
  },
  {
    slug: "CRO",
    title: "Conversion Optimisation",
    desc: "Turn existing traffic into more revenue. We map the funnel, find the leaks and close them with systematic data-led experiments.",
    href: "/service/ui-ux-design",
    url: "hegxcorp › cro-funnel",
    Visual: CROVisual,
  },
  {
    slug: "BRAND",
    title: "Branding & Design",
    desc: "A brand system that makes premium positioning visible at every touchpoint — identity, type, colour and creative assets built to last.",
    href: "/service/branding",
    url: "hegxcorp › brand-system",
    Visual: BrandVisual,
  },
  {
    slug: "SMM",
    title: "Social Media Marketing",
    desc: "Audiences built with intent. Content systems that grow engaged communities and feed your wider growth funnel.",
    href: "/service/social-med",
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
   SERVICE CARD (with WebGL Shader Fire effect on hover)
───────────────────────────────────────────────────────────── */
function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariant}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -6,
        borderColor: "rgba(252,156,68,0.6)",
        boxShadow:
          "0 0 0 1px rgba(252,156,68,0.25), 0 24px 50px -14px rgba(252,156,68,0.18), 0 12px 30px -10px rgba(29,39,66,0.1)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group rounded-2xl border border-[#EAEAEA] bg-white overflow-hidden flex flex-col cursor-pointer transition-colors duration-300 min-h-[490px]"
    >
      <Link to={s.href} className="flex flex-col h-full">
        {/* Browser chrome top bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#FAFAF8] border-b border-[#EAEAEA] select-none shrink-0">
          <span className="h-2 w-2 rounded-full bg-[#FC9C44]/70" />
          <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
          <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
          <span className="ml-2 text-[9px] text-[#9CA3AF] font-mono truncate flex-1">{s.url}</span>
          <span
            className={`h-2 w-2 rounded-full transition-colors duration-300 shrink-0 ${
              isHovered ? "bg-[#FC9C44] animate-pulse" : "bg-emerald-400"
            }`}
          />
        </div>

        {/* Visual / Graph Panel with WebGL Fire Shader on hover */}
        <div
          className={`relative overflow-hidden border-b border-[#F3F4F6] h-[215px] sm:h-[235px] shrink-0 transition-colors duration-500 ease-out ${
            isHovered ? "bg-[#0A0D14]" : "bg-[#FAFAF8]"
          }`}
        >
          {/* WebGL Animated Fire Shader (Reveals on Hover) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              visibility: isHovered ? "visible" : "hidden",
            }}
          >
            <ShaderCard
              hoverOnly={false}
              autoPlay={true}
              color="#FC9C44"
              speed={0.85}
              scale={2.6}
              positionY={0.25}
              effectRadius={0.95}
              effectBoost={0.7}
              branchIntensity={2.4}
              noiseScale={1.6}
              className="w-full h-full bg-transparent"
            />
            {/* Fiery ambient badge overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-radial from-transparent via-black/15 to-black/65 pointer-events-none">
              <div className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FC9C44]/60 text-[#FC9C44] text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-[#FC9C44] animate-ping" />
                <span>{s.slug} Acceleration</span>
              </div>
            </div>
          </div>

          {/* Default Graph / Visual Panel (Shown when not hovered, completely removed on hover) */}
          {!isHovered && (
            <div className="absolute inset-0 p-5 sm:p-6 flex items-center justify-center bg-white pointer-events-none z-0">
              <s.Visual />
            </div>
          )}
        </div>

        {/* Text panel — wider, taller, no line truncation */}
        <div className="flex flex-col flex-1 p-6 sm:p-7 gap-3 bg-white justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#FC9C44] uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#FC9C44]/10 border border-[#FC9C44]/20">
                {s.slug}
              </span>
              <span className="text-[11px] font-mono text-[#9CA3AF]">Capability 0{i + 1}</span>
            </div>

            <h3
              className="font-bold text-[#1D2742] leading-snug text-lg sm:text-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.title}
            </h3>

            <p
              className="text-[#4B5563] text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {s.desc}
            </p>
          </div>

          {/* CTA — slides in on hover */}
          <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D2742] group-hover:text-[#FC9C44] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>Explore capability</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#FC9C44]" />
            </span>

            <span className="text-[10px] font-mono text-[#9CA3AF]">Enterprise Ready</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────────────────────── */
const visualMap: Record<string, React.ComponentType> = {
  SEO: SEOVisual,
  PPC: PPCVisual,
  WEB: WebDevVisual,
  CRO: CROVisual,
  BRAND: BrandVisual,
  SMM: SMMVisual,
};

export function ServicesGrid() {
  const { data: sectionData } = useWebsiteSection("home.services");

  const mappedServices = (sectionData.services || []).map((item: any) => ({
    ...item,
    Visual: visualMap[item.slug] || WebDevVisual,
  }));

  return (
    <section
      id="services"
      className="bg-[#FAFAF8]"
      style={{
        paddingTop: "clamp(24px, 4vw, 48px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <SectionHeading
            tagline={sectionData.tagline}
            heading={sectionData.heading}
            description={sectionData.description}
          />
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mb-1"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Mobile View: 3D PageFlip Book (Scroll-driven & Click/Tap) ── */}
        <div className="block lg:hidden">
          <ServicesMobilePageFlip services={mappedServices} />
        </div>

        {/* ── Desktop View: 3-Column Wide & Tall Responsive Grid (6 Capabilities) ── */}
        <div className="relative z-10 hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {mappedServices.map((s: any, i: number) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
