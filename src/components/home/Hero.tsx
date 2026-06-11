import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, BarChart3, Zap, Globe, Sparkles } from "lucide-react";
import { motion, useInView, animate, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

const dashboardMetrics = [
  {
    label: "Organic Traffic Growth",
    value: 310,
    prefix: "+",
    suffix: "%",
    icon: TrendingUp,
    color: "text-[#FC9C44]",
  },
  {
    label: "Qualified Leads",
    value: 184,
    prefix: "+",
    suffix: "%",
    icon: Users,
    color: "text-[#EBB771]",
  },
  {
    label: "ROAS Achieved",
    value: 4.8,
    prefix: "",
    suffix: "x",
    icon: BarChart3,
    color: "text-[#FC9C44]",
    decimals: 1,
  },
  {
    label: "Client Satisfaction",
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

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #EAEAEA 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      {/* Right glow accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle at 80% 20%, #FC9C44 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#FC9C44] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" />
              Growth Consultancy &amp; Digital Transformation Partner
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-[#232323] leading-[1.08] tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(40px, 4.8vw, 68px)",
              }}
            >
              Generate More{" "}
              <span className="relative">
                Leads, Sales
                <span
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "#FC9C44", bottom: "-4px" }}
                />
              </span>{" "}
              &amp; Revenue
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[540px] text-[#6B7280] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.2vw, 19px)" }}
            >
              We design and execute data-driven growth marketing systems, custom engineering, and
              search optimization built to position enterprise firms for compounding scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/free-growth-audit"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-200 ease-out bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)]"
                id="hero-cta-audit"
              >
                Get Free Growth Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] bg-white px-7 py-3.5 text-sm font-semibold text-[#232323] transition-[background-color,border-color] duration-200 ease-out hover:bg-[#FFF4E8] hover:border-[#FC9C44]"
                id="hero-cta-case-studies"
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust line */}
            <div
              className="flex items-center gap-2 text-xs text-[#6B7280]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Globe className="h-3.5 w-3.5 text-[#FC9C44]" />
              <span>Trusted by enterprise companies across India, USA, UK &amp; UAE</span>
            </div>
          </motion.div>

          {/* Right — Browser Frame with SaaS growth dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            {/* Subtle floating motion using Framer Motion (subtle, enterprise feel) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              whileHover={{
                y: -10, // subtle lift on hover
                boxShadow: "0 32px 80px -20px rgba(29,39,66,0.16)",
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              className="relative rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-0.5 shadow-[0_24px_64px_-16px_rgba(29,39,66,0.12)] overflow-hidden"
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] rounded-t-2xl">
                {/* Dots */}
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                {/* Address bar */}
                <div className="flex-1 max-w-[340px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded-md py-1 px-3 text-[10px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1">
                  <span className="text-emerald-500 font-bold">https://</span>
                  <span>hegxcorp.com/growth-analytics</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-white p-6 rounded-b-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3
                      className="text-sm font-bold text-[#232323] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Hegxcorp Growth Engine
                    </h3>
                    <p className="text-[11px] text-[#6B7280]">Real-time Client Portfolio Metrics</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      System Active
                    </span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {dashboardMetrics.map((m, idx) => (
                    <motion.div
                      key={m.label}
                      custom={idx}
                      variants={cardVariants}
                      initial="initial"
                      animate={isMounted ? "animate" : "initial"}
                      whileHover="hover"
                      className="group rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-4 cursor-default"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-[#6B7280] uppercase tracking-wide">
                          {m.label}
                        </span>
                        <motion.div variants={iconVariants}>
                          <m.icon className="h-4 w-4 text-[#FC9C44]" />
                        </motion.div>
                      </div>
                      <div
                        className="text-2xl font-bold text-[#232323]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <HeroMetric
                          value={m.value}
                          prefix={m.prefix}
                          suffix={m.suffix}
                          decimals={m.decimals}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Chart Area */}
                <ChartArea />
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

// ChartArea helper with viewport entry reveal and snappy hover reactivity
function ChartArea() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-xl border border-[#EAEAEA] p-4 bg-white transition-[box-shadow] duration-200 ease-out hover:shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[#FC9C44]" />
          <span className="text-xs font-semibold text-[#232323]">
            Revenue Pipeline Growth (Average YoY)
          </span>
        </div>
        <span className="text-[11px] font-bold text-emerald-500">+247%</span>
      </div>

      {/* Animated Line Graph (SVG) */}
      <div className="relative h-28 w-full">
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          {/* Grid Lines */}
          <line
            x1="0"
            y1="25"
            x2="400"
            y2="25"
            stroke="#F3F4F6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="0"
            y1="50"
            x2="400"
            y2="50"
            stroke="#F3F4F6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="0"
            y1="75"
            x2="400"
            y2="75"
            stroke="#F3F4F6"
            strokeWidth="1"
            strokeDasharray="3"
          />

          {/* Area under the path (draws in from left to right) */}
          <motion.path
            d="M 0 100 L 0 80 L 40 85 L 80 65 L 120 75 L 160 50 L 200 55 L 240 35 L 280 40 L 320 20 L 360 25 L 400 5 L 400 100 Z"
            fill="url(#gradient-area)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          />

          {/* Path Line (draws on entry, thickens instantly on hover) */}
          <motion.path
            d="M 0 80 L 40 85 L 80 65 L 120 75 L 160 50 L 200 55 L 240 35 L 280 40 L 320 20 L 360 25 L 400 5"
            fill="none"
            stroke="#FC9C44"
            animate={{
              pathLength: isInView ? 1 : 0,
              strokeWidth: isHovered ? 4.5 : 3.5
            }}
            strokeLinecap="round"
            initial={{ pathLength: 0, strokeWidth: 3.5 }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.2, ease: "easeOut" },
              strokeWidth: { duration: 0.2, ease: "easeOut" }
            }}
          />

          {/* Interactive circles at points (scale in sequentially after line draws) */}
          <motion.circle
            cx="200"
            cy="55"
            r="4.5"
            fill="#FC9C44"
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
          />
          <motion.circle
            cx="320"
            cy="20"
            r="4.5"
            fill="#FC9C44"
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
          />
          <motion.circle
            cx="400"
            cy="5"
            r="4.5"
            fill="#FC9C44"
            stroke="#FFFFFF"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
          />

          <defs>
            <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FC9C44" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FC9C44" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex justify-between mt-2 text-[9px] text-[#6B7280] font-mono select-none">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
        <span className="text-[#FC9C44] font-bold">PROJECTED SCALE</span>
      </div>
    </motion.div>
  );
}

