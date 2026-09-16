import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, BarChart3, Zap, Globe, Sparkles } from "lucide-react";
import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import ShapeGrid from "@/components/ShapeGrid";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import { SimpleGraph, type DataPoint } from "@/components/ui/simple-graph";

const revenueGraphData: DataPoint[] = [
  { value: 20, label: "01 • Baseline (Start)" },
  { value: 68, label: "02 • SEO Setup" },
  { value: 120, label: "03 • Paid Scale" },
  { value: 182, label: "04 • Conversion Engine" },
  { value: 247, label: "05 • Projected (+247%)" },
];

const dashboardMetrics = [
  {
    label: "Organic Traffic Growth",
    value: 700,
    prefix: "+",
    suffix: "%",
    icon: TrendingUp,
    color: "text-[#FC9C44]",
  },
  {
    label: "Unique Mobile Reach",
    value: 1,
    prefix: "",
    suffix: "M+",
    icon: Users,
    color: "text-[#EBB771]",
  },
  {
    label: "Phone & Form Inquiries",
    value: 1151,
    prefix: "+",
    suffix: "",
    icon: BarChart3,
    color: "text-[#FC9C44]",
  },
  {
    label: "Client Retention",
    value: 98,
    prefix: "+",
    suffix: "%",
    icon: Zap,
    color: "text-[#EBB771]",
  },
];

// Card Animation Variants for Snappy, Premium Feel
const cardVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3 + idx * 0.1, ease: "easeOut" },
  }),
  hover: {
    y: -4,
    borderColor: "#FC9C44",
    boxShadow: "0 12px 24px -8px rgba(29, 39, 66, 0.06)",
    backgroundColor: "rgba(255, 244, 232, 0.2)",
    transition: { duration: 0.2, ease: "easeOut" }, // snappier 200ms transition
  },
};

const iconVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 2,
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }, // 200ms snappy response
  },
};

function renderHeroHeadline(title: string) {
  if (!title) return "Generate More Leads, Sales & Revenue";

  // If user used [highlight]words[/highlight] in CMS
  if (title.includes("[highlight]") && title.includes("[/highlight]")) {
    const parts = title.split(/\[highlight\](.*?)\[\/highlight\]/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="relative inline-block">
          {part}
          <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full" style={{}} />
        </span>
      ) : (
        part
      ),
    );
  }

  // If default title, give it the signature orange underline on "Leads, Sales"
  if (title === "Generate More Leads, Sales & Revenue") {
    return (
      <>
        Generate More{" "}
        <span className="relative inline-block">
          Leads, Sales
          <span
            className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
            style={{ background: "#FC9C44", bottom: "-4px" }}
          />
        </span>{" "}
        &amp; Revenue
      </>
    );
  }

  // Otherwise, render whatever custom title the user saved in the CMS directly
  return title;
}

export function Hero() {
  const { data: heroData } = useWebsiteSection("home.hero");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const badge = heroData?.badge || "Growth Consultancy & Digital Transformation Partner";
  const title = heroData?.title || "Generate More Leads, Sales & Revenue";
  const description =
    heroData?.description ||
    "We design and execute data-driven growth marketing systems, custom engineering, and search optimization built to position enterprise firms for compounding scale.";
  const buttonText = heroData?.buttonText || "Get Free Growth Audit";
  const buttonUrl = heroData?.buttonUrl || "/free-growth-audit";
  const secondaryButtonText = heroData?.secondaryButtonText || "Explore Case Studies";
  const secondaryButtonUrl = heroData?.secondaryButtonUrl || "/case-studies";
  const trustText =
    heroData?.trustText || "Trusted by enterprise companies across India, USA, UK & UAE";

  const dashboardUrl = heroData?.dashboardUrl || "hegxcorp.com/growth-analytics";
  const dashboardTitle = heroData?.dashboardTitle || "Hegxcorp Growth Engine";
  const dashboardSubtitle = heroData?.dashboardSubtitle || "Real-time Client Portfolio Metrics";
  const dashboardBadge = heroData?.dashboardBadge || "System Active";
  const metrics =
    heroData?.dashboardMetrics && heroData.dashboardMetrics.length > 0
      ? heroData.dashboardMetrics
      : dashboardMetrics;
  const chartTitle = heroData?.chartTitle || "Revenue Pipeline Growth (Average YoY)";
  const chartMetric = heroData?.chartMetric || "+280%";

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "clamp(48px, 6vw, 110px)", paddingBottom: "clamp(48px, 6vw, 110px)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          opacity: 0.2,
        }}
      >
        <ShapeGrid
          shape="hexagon"
          squareSize={38}
          borderColor="rgba(29,39,66,0.3)"
          hoverFillColor="transparent"
          hoverTrailAmount={0}
          staticMode={false}
          speed={0.2}
          className="w-full h-full"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.06em] sm:tracking-[0.1em] text-[#FC9C44] shadow-sm max-w-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse shrink-0" />
              <span className="leading-snug">{badge}</span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-[#232323] leading-[1.14] sm:leading-[1.08] tracking-tight break-words [overflow-wrap:anywhere]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 6.5vw, 68px)",
              }}
            >
              {renderHeroHeadline(title)}
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[540px] text-[#6B7280] leading-relaxed text-sm sm:text-base lg:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to={buttonUrl}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 rounded-full px-6 sm:px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 ease-out bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)] active:scale-98"
                id="hero-cta-audit"
              >
                <span>{buttonText}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link
                to={secondaryButtonUrl}
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] bg-white px-6 sm:px-7 py-3.5 text-sm font-semibold text-[#232323] transition-[background-color,border-color] duration-200 ease-out hover:bg-[#FFF4E8] hover:border-[#FC9C44] active:scale-98"
                id="hero-cta-case-studies"
              >
                {secondaryButtonText}
              </Link>
            </div>

            {/* Trust line */}
            <div
              className="flex items-start sm:items-center gap-2 text-[11px] sm:text-xs text-[#6B7280] leading-snug"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Globe className="h-3.5 w-3.5 text-[#FC9C44] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-snug">{trustText}</span>
            </div>
          </motion.div>

          {/* Right — Browser Frame with SaaS growth dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-full overflow-hidden"
          >
            {/* Subtle floating motion using Framer Motion */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              whileHover={{
                y: -10,
                boxShadow: "0 32px 80px -20px rgba(29,39,66,0.16)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-0.5 shadow-[0_24px_64px_-16px_rgba(29,39,66,0.12)] overflow-hidden"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-b border-[#EAEAEA] rounded-t-2xl">
                {/* Dots */}
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27C93F]" />
                </div>
                {/* Address bar */}
                <div className="flex-1 min-w-0 max-w-[340px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded-md py-1 px-2.5 text-[10px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1 truncate">
                  <span className="text-emerald-500 font-bold shrink-0">https://</span>
                  <span className="truncate">{dashboardUrl}</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-white p-4 sm:p-6 rounded-b-2xl">
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
                  <div className="min-w-0">
                    <h3
                      className="text-xs sm:text-sm font-bold text-[#232323] tracking-tight truncate"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {dashboardTitle}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#6B7280] truncate">
                      {dashboardSubtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {dashboardBadge}
                    </span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-6">
                  {metrics.map((m: any, idx: number) => {
                    const iconMap = [TrendingUp, Users, BarChart3, Zap];
                    const IconComp = iconMap[idx % iconMap.length];
                    return (
                      <motion.div
                        key={m.label || idx}
                        custom={idx}
                        variants={cardVariants}
                        initial="initial"
                        animate={isMounted ? "animate" : "initial"}
                        whileHover="hover"
                        className="group rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-2.5 sm:p-4 cursor-default"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] sm:text-[10px] font-medium text-[#6B7280] uppercase tracking-wide truncate pr-1">
                            {m.label}
                          </span>
                          <motion.div variants={iconVariants}>
                            <IconComp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FC9C44] shrink-0" />
                          </motion.div>
                        </div>
                        <div
                          className="text-lg sm:text-2xl font-bold text-[#232323]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          <HeroMetric
                            value={Number(m.value) || 0}
                            prefix={m.prefix || ""}
                            suffix={m.suffix || ""}
                            decimals={m.decimals || 0}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Interactive Chart Area */}
                <ChartArea title={chartTitle} metric={chartMetric} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Component to handle counting animation of hero metrics on viewport entry (once)
interface HeroMetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function HeroMetric({ value, prefix = "", suffix = "", decimals = 0 }: HeroMetricProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      const controls = animate(0, value, {
        duration: 1.4, // duration in 1.2–1.5s range
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// ChartArea helper with React Bits Pro Simple Graph and re-animation on scroll-back
function ChartArea({
  title = "Revenue Pipeline Growth (Average YoY)",
  metric = "+247%",
}: {
  title?: string;
  metric?: string;
}) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] p-3.5 sm:p-5 bg-white shadow-[0_4px_24px_-4px_rgba(29,39,66,0.08)]">
      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#F3F4F6]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 border border-emerald-500/25 shrink-0">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <span
              className="text-xs sm:text-sm font-bold text-[#1D2742] block truncate"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </span>
            <span className="text-[10px] text-[#6B7280]">Compounding Client Growth Model</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold font-mono shadow-xs shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {metric}
        </div>
      </div>

      {/* Animated Line Graph w/ React Bits Pro Simple Graph */}
      <div className="w-full relative">
        <SimpleGraph
          data={revenueGraphData}
          lineColor="#10B981"
          dotColor="#10B981"
          lineGradient={{ from: "#10B981", to: "#06B6D4" }}
          height={155}
          animationDuration={2.2}
          loop={true}
          loopDelay={2.0}
          showGrid={true}
          gridStyle="dashed"
          gridLines="horizontal"
          gridLineThickness={1}
          showDots={true}
          dotSize={6}
          dotHoverGlow={true}
          curved={true}
          gradientFade={true}
          graphLineThickness={4.5}
          calculatePercentageDifference={true}
          animateOnScroll={true}
          animateOnce={false}
          className="w-full"
        />
      </div>

      <div className="flex justify-between items-center mt-2.5 px-0.5 text-[9px] sm:text-[10px] text-[#4B5563] font-mono select-none font-semibold">
        <span className="text-emerald-700 font-bold">01 (Start)</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span className="text-emerald-600 font-bold tracking-tight text-right flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          PROJECTED (+247%)
        </span>
      </div>
    </div>
  );
}
