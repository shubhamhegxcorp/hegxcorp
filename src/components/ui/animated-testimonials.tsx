import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SimpleGraph, type DataPoint } from "@/components/ui/simple-graph";
import { cn } from "@/lib/utils";

export interface AnimatedTestimonialItem {
  id: string | number;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  initials: string;
  src?: string;
  result?: {
    value: string;
    label: string;
  };
  linkUrl?: string;
}

export interface AnimatedTestimonialsProps {
  testimonials: AnimatedTestimonialItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

// Client story specific graph curves & milestone definitions
interface StoryGraphConfig {
  title: string;
  data: DataPoint[];
  lineGradient: { from: string; to: string };
  milestones: string[];
}

const clientStoryGraphs: Record<string | number, StoryGraphConfig> = {
  1: {
    title: "Organic Revenue Compounding",
    data: [
      { value: 100, label: "Month 1 (Audit & Baseline)" },
      { value: 145, label: "Month 3 (Architecture & Core Web Vitals)" },
      { value: 215, label: "Month 6 (Editorial Growth Engine)" },
      { value: 295, label: "Month 8 (Top 3 Commercial Keyword Rank)" },
      { value: 380, label: "Month 10 (+280% Revenue Peak)" },
    ],
    lineGradient: { from: "#10B981", to: "#06B6D4" },
    milestones: ["01 (Start)", "M03", "M06", "M08", "+280% Peak"],
  },
  2: {
    title: "Paid ROAS Pipeline Velocity",
    data: [
      { value: 1.8, label: "Day 1 (1.8x ROAS Baseline)" },
      { value: 2.6, label: "Day 10 (Full Funnel Restructure)" },
      { value: 3.5, label: "Day 18 (Creative Scaling)" },
      { value: 4.4, label: "Day 24 (Lookalike Audiences)" },
      { value: 5.2, label: "Day 30 (5.2x Verified ROAS)" },
    ],
    lineGradient: { from: "#FC9C44", to: "#10B981" },
    milestones: ["1.8x", "Day 10", "Day 18", "Day 24", "5.2x ROAS"],
  },
  3: {
    title: "Patient Inbound Conversion",
    data: [
      { value: 320, label: "Quarter 1 (320 Qualified Inquiries)" },
      { value: 410, label: "Quarter 2 (Local SEO & Booking Portal)" },
      { value: 495, label: "Quarter 3 (Telehealth Funnel Optimization)" },
      { value: 570, label: "Quarter 4 (HIPAA Compliant Inbound)" },
      { value: 640, label: "Year 1 (640 / 2x Qualified Leads)" },
    ],
    lineGradient: { from: "#06B6D4", to: "#10B981" },
    milestones: ["Baseline", "Q2", "Q3", "Q4", "2x Leads"],
  },
};

const defaultGraphConfig: StoryGraphConfig = {
  title: "Growth Impact Trajectory",
  data: [
    { value: 100, label: "Baseline" },
    { value: 160, label: "Phase 1" },
    { value: 220, label: "Phase 2" },
    { value: 290, label: "Phase 3" },
    { value: 360, label: "Scale" },
  ],
  lineGradient: { from: "#10B981", to: "#06B6D4" },
  milestones: ["01 (Start)", "Phase 1", "Phase 2", "Phase 3", "Target"],
};

// Helper to parse metric value e.g. "+280%" -> { prefix: "+", value: 280, suffix: "%", decimals: 0 }
function parseMetric(val: string) {
  const match = val.match(/^([^\d]*)([\d.]+)([^\d\s]*)(.*)$/);
  if (!match) {
    return { hasNumber: false, text: val, prefix: "", value: 0, suffix: "", decimals: 0 };
  }
  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  return { hasNumber: true, text: val, prefix, value: num, suffix, decimals };
}

function AnimatedCounter({ value, triggerKey }: { value: string; triggerKey: any }) {
  const parsed = parseMetric(value);
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!parsed.hasNumber) return;
    let startTime: number | null = null;
    const duration = 900; // ms
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplayVal(ease * parsed.value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, triggerKey, parsed.hasNumber, parsed.value]);

  if (!parsed.hasNumber) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {parsed.prefix}
      {displayVal.toFixed(parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}

// Preset aesthetic card rotations for the 3D stack
const STACK_ROTATIONS = [-4, 5, -2, 3];

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  autoplayInterval = 7000,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with timer and pause on hover
  useEffect(() => {
    if (!autoplay || total <= 1 || isHovered) return;
    const timer = setInterval(handleNext, autoplayInterval);
    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, total, isHovered, handleNext]);

  const current = testimonials[active] || testimonials[0];

  return (
    <div
      className={cn("relative w-full select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Top Client Selector Tabs with Live Progress Rail (All 3 visible on mobile, no sliding) ── */}
      <div className="w-full grid grid-cols-3 gap-1.5 sm:flex sm:w-auto sm:items-center sm:gap-3 sm:overflow-x-auto pb-2 sm:pb-4 mb-8 sm:mb-12 scrollbar-none">
        {testimonials.map((item, idx) => {
          const isActiveTab = idx === active;
          // Clean display name on narrow mobile screens so all 3 fit gracefully
          const mobileCompany =
            item.company === "RetailBrand India"
              ? "RetailBrand"
              : item.company === "HealthFirst Clinics"
                ? "HealthFirst"
                : item.company;

          return (
            <button
              key={item.id ?? idx}
              type="button"
              onClick={() => setActive(idx)}
              className={cn(
                "relative group flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 px-1.5 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer w-full sm:w-auto sm:shrink-0 border overflow-hidden",
                isActiveTab
                  ? "bg-[#1D2742] text-white border-[#1D2742] shadow-sm"
                  : "bg-[#FAFAF8] text-[#6B7280] hover:text-[#1D2742] hover:bg-[#F3F4F6] border-[#EAEAEA]",
              )}
            >
              {/* Tab Header (Number + Company Name) */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 min-w-0 max-w-full">
                <span className="font-mono text-[9px] sm:text-[10px] opacity-60 shrink-0">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="font-bold text-[10px] sm:text-xs truncate">
                  <span className="sm:hidden">{mobileCompany}</span>
                  <span className="hidden sm:inline">{item.company}</span>
                </span>
              </div>

              {/* Verified Result Metric Badge */}
              {item.result && (
                <span
                  className={cn(
                    "text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-full shrink-0 leading-tight",
                    isActiveTab
                      ? "bg-[#FC9C44] text-white"
                      : "bg-[#EAEAEA] text-[#1D2742] group-hover:bg-[#FC9C44]/20 group-hover:text-[#FC9C44]",
                  )}
                >
                  {item.result.value}
                </span>
              )}

              {/* Autoplay Progress Bar on Active Tab */}
              {isActiveTab && autoplay && !isHovered && (
                <motion.div
                  key={`progress-${active}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: autoplayInterval / 1000, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[2.5px] bg-[#FC9C44]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Main Dual-Stage Kinetic Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* ── Left Stage: 3D Stacked Outcome Deck (5 Cols) ── */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="relative w-full max-w-[430px] h-[390px] sm:h-[440px]"
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="popLayout">
              {testimonials.map((item, index) => {
                const isActiveCard = index === active;
                // Compute visual stack position: 0 is active, 1 is next, 2 is after
                const stackPos = (index - active + total) % total;
                const isStacked = stackPos <= 2;

                if (!isStacked) return null;

                const rotation = isActiveCard
                  ? 0
                  : STACK_ROTATIONS[stackPos % STACK_ROTATIONS.length];
                const yOffset = stackPos * 16;
                const scale = 1 - stackPos * 0.05;
                const zIndex = 20 - stackPos;

                const graphConfig = clientStoryGraphs[item.id] || defaultGraphConfig;

                return (
                  <motion.div
                    key={item.id ?? index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: -40,
                      rotate: rotation,
                    }}
                    animate={{
                      opacity: isActiveCard ? 1 : 0.7 - stackPos * 0.15,
                      scale,
                      y: yOffset,
                      rotate: rotation,
                      zIndex,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                      y: 50,
                      rotate: rotation * 1.5,
                      transition: { duration: 0.35 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    onClick={() => setActive(index)}
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-white border border-[#EAEAEA] p-5 sm:p-7 flex flex-col justify-between cursor-pointer origin-bottom transition-shadow duration-300",
                      isActiveCard
                        ? "shadow-[0_24px_55px_-12px_rgba(29,39,66,0.16)] ring-1 ring-[#1D2742]/10"
                        : "shadow-md hover:opacity-90",
                    )}
                  >
                    {/* Top verified badge */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#F3F4F6]">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-bold tracking-wider uppercase font-mono shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Verified Case Outcome</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                        {item.industry}
                      </span>
                    </div>

                    {/* Middle: Interactive Growth Graph Dashboard (Hero Section SimpleGraph) */}
                    <div className="my-2 py-3 px-3.5 rounded-xl bg-[#FAFAF8] border border-[#EAEAEA] relative overflow-hidden">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#1D2742] mb-1.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600 shrink-0">
                            <TrendingUp className="h-3 w-3" />
                          </div>
                          <span
                            className="truncate font-semibold text-[11px] text-[#1D2742]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {graphConfig.title}
                          </span>
                        </div>
                        <span className="font-mono text-emerald-600 font-bold text-xs shrink-0 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                          {item.result?.value}
                        </span>
                      </div>

                      {/* Animated Line Graph w/ React Bits Pro SimpleGraph */}
                      <div className="w-full relative py-1">
                        <SimpleGraph
                          key={`graph-${item.id}-${isActiveCard ? "active" : "inactive"}`}
                          data={graphConfig.data}
                          lineColor={graphConfig.lineGradient.to}
                          dotColor={graphConfig.lineGradient.to}
                          lineGradient={graphConfig.lineGradient}
                          height={125}
                          animationDuration={1.3}
                          showGrid={true}
                          gridStyle="dashed"
                          gridLines="horizontal"
                          gridLineThickness={1}
                          showDots={true}
                          dotSize={5}
                          dotHoverGlow={true}
                          curved={true}
                          gradientFade={true}
                          graphLineThickness={3.5}
                          calculatePercentageDifference={true}
                          animateOnScroll={false}
                          animateOnce={false}
                          className="w-full"
                        />
                      </div>

                      {/* Milestone Axis */}
                      <div className="flex justify-between text-[9px] font-mono select-none font-semibold pt-1 border-t border-[#EAEAEA] text-[#6B7280]">
                        <span className="text-emerald-700 font-bold">
                          {graphConfig.milestones[0]}
                        </span>
                        {graphConfig.milestones.slice(1, -1).map((m, i) => (
                          <span key={i} className="hidden sm:inline-block opacity-75">
                            {m}
                          </span>
                        ))}
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {graphConfig.milestones[graphConfig.milestones.length - 1]}
                        </span>
                      </div>
                    </div>

                    {/* Bottom: Client Profile & Verified Shield */}
                    <div className="flex items-center gap-3 pt-2.5 border-t border-[#EAEAEA]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D2742] text-xs font-bold text-white shadow-sm ring-2 ring-[#FC9C44]/40 font-mono">
                        {item.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-[#1D2742] truncate">{item.name}</h4>
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        </div>
                        <p className="text-xs text-[#6B7280] truncate">
                          {item.role} ·{" "}
                          <span className="font-semibold text-[#1D2742]">{item.company}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Right Stage: Hero Metric & Word-by-Word Quote Reveal (7 Cols) ── */}
        <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6">
          {/* Big Electric Result Metric */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex text-[#FC9C44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                Verified Strategic Impact
              </span>
            </div>

            <div className="flex items-baseline gap-3 pt-2">
              <span
                className="text-[clamp(42px,6vw,68px)] font-black text-[#1D2742] leading-none tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <AnimatedCounter value={current.result?.value || "+280%"} triggerKey={active} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#FC9C44] uppercase font-mono">
                {current.result?.label || "Organic Revenue"}
              </span>
            </div>
          </div>

          {/* Word-by-Word Animated Quote Reveal */}
          <div className="relative min-h-[120px] sm:min-h-[140px] flex items-center">
            <Quote className="absolute -top-4 -left-3 h-8 w-8 text-[#FC9C44]/20 -z-10" />
            <motion.p
              key={active}
              className="text-base sm:text-xl lg:text-2xl text-[#1D2742] font-medium leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {current.quote.split(" ").map((word, index) => (
                <motion.span
                  key={`${active}-${index}`}
                  initial={{
                    filter: "blur(8px)",
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.24,
                    ease: "easeOut",
                    delay: index * 0.016,
                  }}
                  className="inline-block mr-[0.26em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Navigation Controls & Direct CTA */}
          <div className="pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Prev / Next & Counter */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous client story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAEAEA] bg-white text-[#1D2742] shadow-sm transition-all duration-200 hover:border-[#1D2742] hover:bg-[#1D2742] hover:text-white cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next client story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAEAEA] bg-white text-[#1D2742] shadow-sm transition-all duration-200 hover:border-[#1D2742] hover:bg-[#1D2742] hover:text-white cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="font-mono text-xs font-semibold text-[#6B7280] ml-2">
                <span className="text-[#1D2742]">{String(active + 1).padStart(2, "0")}</span>
                <span className="mx-1 text-[#D1D5DB]">/</span>
                <span>{String(total).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Link to Case Study */}
            <Link
              to="/case-studies"
              className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D2742] hover:text-[#FC9C44] transition-colors"
            >
              <span>Explore {current.company} case study</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 text-[#FC9C44]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
