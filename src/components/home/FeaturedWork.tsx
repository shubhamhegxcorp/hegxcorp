import { useRef, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Zap, Search } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CaseStudyCursor } from "@/components/site/PremiumInteractions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Sample projects data representing high-quality digital products / growth cases
const projects = [
  {
    id: "Spirit Boosting Digital",
    isFeatured: true,
    title: "Spirit Boosting Digital",
    category: "SEO + Conversion Engineering",
    industry: "E-Commerce",
    url: "spiritboostingdigital.in",
    metric: "+280% Organic Revenue",
    browserColor: "#FFF4E8",
    screenshotType: "ecommerce",
  },
  {
    id: "launchscale",
    isFeatured: false,
    title: "Cultural Web Creation",
    category: "Full Funnel Performance Ads",
    industry: "B2B SaaS",
    url: "launchscale.com/analytics",
    metric: "5.2x Google & Meta ROAS",
    browserColor: "#E8F0FE",
    screenshotType: "saas",
  },
  {
    id: "healthfirst",
    isFeatured: false,
    title: "Environmental Brand Creation",
    category: "Local SEO & Platform Engineering",
    industry: "Healthcare",
    url: "healthfirst.in/booking",
    metric: "2x Qualified Leads",
    browserColor: "#F0FDF4",
    screenshotType: "healthcare",
  },
  {
    id: "fintechone",
    isFeatured: false,
    title: "FintechOne Portal",
    category: "Custom Web Application Development",
    industry: "FinTech",
    url: "fintechone.io/dashboard",
    metric: "Sub-second Load Times",
    browserColor: "#EAEAEA",
    screenshotType: "fintech",
  },
];

export function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Only run horizontal pinning scroll on desktop viewports (md and above)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Step width is: 44vw card width + 6vw gap = 50vw step
      const getStepWidth = () => window.innerWidth * 0.50;
      const totalMove = (projects.length - 1) * getStepWidth();

      // Set initial visual states for cards (inactive cards are y-lifted, scaled down, faded, and blurred)
      gsap.set(`.project-card-0`, { scale: 1.02, opacity: 1, y: 0, filter: "blur(0px)" });
      for (let i = 1; i < projects.length; i++) {
        gsap.set(`.project-card-${i}`, { scale: 0.92, opacity: 0.4, y: 20, filter: "blur(4px)" });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projects.length * 110}%`, // scroll length
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (projects.length - 1));
            setActiveIndex(index);
          },
        },
      });

      // 1. Linearly translate the track container from right to left
      tl.to(trackRef.current, {
        x: () => -totalMove,
        ease: "none",
        duration: 1,
      }, 0);

      // 2. Animate active center scaling, opacity, vertical lift, and inner parallax
      projects.forEach((_, index) => {
        // Inner image parallax (moves in opposite direction)
        tl.fromTo(
          `.preview-inner-${index}`,
          { x: -30 },
          { x: 30, ease: "none", duration: 1 },
          0
        );



        if (index > 0) {
          const startTime = (index - 1) / (projects.length - 1);
          const segmentDuration = 1 / (projects.length - 1);

          // Previous card scales down, fades to inactive, shifts down, and blurs
          tl.to(
            `.project-card-${index - 1}`,
            {
              scale: 0.92,
              opacity: 0.4,
              y: 20,
              filter: "blur(4px)",
              ease: "power2.inOut",
              duration: segmentDuration,
            },
            startTime
          );

          // Current card scales up, fades in, lifts up (y: 0), and unblurs
          tl.to(
            `.project-card-${index}`,
            {
              scale: 1.02,
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power2.inOut",
              duration: segmentDuration,
            },
            startTime
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Desktop Horizontal Pinned Scroll Track ── */}
      <div
        ref={sectionRef}
        className="hidden md:flex relative h-screen w-full flex-col justify-between py-14 bg-white overflow-hidden select-none"
      >
        {/* Heading */}
        <div className="mx-auto max-w-[1280px] w-full px-6 lg:px-10 shrink-0">
          <SectionHeading
            tagline="Client Success Stories"
            heading="Visual proof of our engineering and growth capabilities"
          />
        </div>

        {/* Horizontal Track Viewport: justify-start layout aligns left padding accurately at 0px */}
        <div className="relative flex-1 flex items-center justify-start overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex flex-nowrap w-max gap-[6vw] items-center"
            style={{
              paddingLeft: "28vw", // Centers card 0 exactly in center of screen: 50vw - (44vw / 2)
              paddingRight: "28vw",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card-${index} shrink-0 w-[44vw] origin-center`}
              >
                <CaseStudyCursor>
                  <ProjectCard
                    project={project}
                    index={index}
                    isActive={activeIndex === index}
                  />
                </CaseStudyCursor>
              </div>
            ))}
          </div>
        </div>

        {/* Layout bottom spacer */}
        <div className="h-6 shrink-0" />
      </div>

      {/* ── Mobile Fallback (Swipeable horizontal snap cards) ── */}
      <div className="block md:hidden bg-white pt-14 pb-16">
        <div className="mx-auto max-w-[1280px] px-6 mb-8">
          <SectionHeading
            tagline="Client Success Stories"
            heading="Visual proof of our capabilities"
          />
        </div>

        {/* Scroll snap container */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 py-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {projects.map((project) => (
            <div key={project.id} className="snap-center shrink-0 w-[85vw] max-w-[320px]">
              <ProjectCard project={project} index={0} isMobile isActive />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Subcomponent: Browser Mockup Preview based on Screenshot Type with Active state animations
function BrowserPreview({ type, isActive = false }: { type: string; isActive?: boolean }) {
  if (type === "ecommerce") {
    return (
      <div className="h-full w-full bg-white p-4 flex flex-col justify-between select-none">
        {/* Mock Store Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#EAEAEA]">
          <span className="text-[10px] font-bold text-[#1D2742] tracking-wider">E-SHOP</span>
          <div className="flex gap-2">
            <div className="h-2 w-10 bg-[#EAEAEA] rounded" />
            <div className="h-2 w-6 bg-[#FC9C44] rounded" />
          </div>
        </div>
        {/* Mock Product Grid */}
        <div className="grid grid-cols-2 gap-3 my-2 flex-1">
          <motion.div
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white"
          >
            <div className="h-10 bg-[#FAFAF8] rounded flex items-center justify-center">
              <Zap className="h-4 w-4 text-[#FC9C44] opacity-50" />
            </div>
            <div className="h-2 bg-[#EAEAEA] rounded mt-1.5 w-3/4" />
            <div className="h-2 bg-[#FC9C44] rounded mt-1 w-1/3" />
          </motion.div>
          <motion.div
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="rounded border border-[#EAEAEA] p-1 flex flex-col justify-between bg-white"
          >
            <div className="h-10 bg-[#FAFAF8] rounded flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-[#FC9C44] opacity-50" />
            </div>
            <div className="h-2 bg-[#EAEAEA] rounded mt-1.5 w-2/3" />
            <div className="h-2 bg-[#EBB771] rounded mt-1 w-1/4" />
          </motion.div>
        </div>
        {/* Mock Footer Strip */}
        <div className="h-2 bg-[#1D2742] rounded-sm w-full" />
      </div>
    );
  }

  if (type === "saas") {
    return (
      <div className="h-full w-full bg-white p-4 flex flex-col justify-between select-none">
        {/* Mock SaaS Sidebar + Header */}
        <div className="flex gap-3 flex-1">
          <div className="w-10 border-r border-[#EAEAEA] pr-1 space-y-1.5">
            <div className="h-2 bg-[#1D2742] rounded w-full" />
            <div className="h-1.5 bg-[#EAEAEA] rounded w-3/4" />
            <div className="h-1.5 bg-[#EAEAEA] rounded w-2/3" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="h-3 bg-[#FAFAF8] rounded w-1/2 mb-2" />
            {/* Sparkline chart */}
            <div className="h-10 w-full flex items-end gap-1 pb-1 border-b border-[#EAEAEA]">
              {[30, 45, 20, 60, 55, 75, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "0%" }}
                  animate={isActive ? { height: `${h}%` } : { height: "0%" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    backgroundColor: i === 6 ? "#FC9C44" : "#EAEAEA",
                  }}
                />
              ))}
            </div>
            <div className="h-2 bg-[#FAFAF8] rounded w-1/3 mt-2" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "healthcare") {
    return (
      <div className="h-full w-full bg-white p-4 flex flex-col justify-between select-none">
        {/* Clinic UI Header */}
        <div className="h-3 bg-[#1D2742] rounded w-1/3 mb-2" />
        <div className="flex gap-3 my-2 items-center">
          <div className="h-8 w-8 rounded-full bg-[#FFF4E8] flex items-center justify-center">
            <Search className="h-4 w-4 text-[#FC9C44]" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 bg-[#EAEAEA] rounded w-3/4" />
            <div className="h-1.5 bg-[#EAEAEA] rounded w-1/2" />
          </div>
        </div>
        {/* Calendar schedule representation */}
        <div className="border border-[#EAEAEA] rounded p-2 bg-[#FAFAF8] flex justify-between gap-1">
          {[1, 2, 3, 4, 5].map((d) => (
            <div key={d} className="flex-1 text-center space-y-1">
              <div className="text-[6px] text-[#9CA3AF] font-bold">D{d}</div>
              <motion.div
                initial={{ backgroundColor: "#FFFFFF", scale: 0.9 }}
                animate={isActive && d === 3 ? { backgroundColor: "#FC9C44", scale: 1 } : { backgroundColor: "#FFFFFF", scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-2.5 rounded-sm border border-[#EAEAEA]"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // default to fintech / general portal layout
  return (
    <div className="h-full w-full bg-[#FAFAF8] p-4 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center mb-2">
        <div className="h-3 w-12 bg-[#1D2742] rounded" />
        <div className="h-2 w-6 bg-[#FC9C44] rounded" />
      </div>
      <div className="flex-1 bg-white border border-[#EAEAEA] rounded p-3 flex flex-col justify-center items-center gap-1.5 overflow-hidden">
        <motion.div
          animate={isActive ? { scale: [1, 1.15, 1], rotate: [0, 8, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TrendingUp className="h-5 w-5 text-[#FC9C44]" />
        </motion.div>
        {/* Simple SVG Chart Line drawing */}
        <div className="w-full h-8 mt-1">
          <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
            <motion.path
              d="M 0 25 Q 25 5, 50 20 T 100 5"
              fill="none"
              stroke="#EBB771"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Helper utility to parse metric strings
function parseMetric(metric: string) {
  const match = metric.match(/^([^\d]*)([\d.]+)([^\d\s]*)(.*)$/);
  if (!match) {
    return { hasNumber: false, text: metric, prefix: "", numberVal: 0, suffix: "", label: metric, decimals: 0 };
  }
  const prefix = match[1];
  const numberVal = parseFloat(match[2]);
  const suffix = match[3];
  const label = match[4];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

  return {
    hasNumber: true,
    prefix,
    numberVal,
    suffix,
    label,
    decimals,
  };
}

// Component to handle counting animation of metrics
function AnimatedMetric({ metric, trigger = false }: { metric: string; trigger?: boolean }) {
  const parsed = parseMetric(metric);
  const [currentVal, setCurrentVal] = useState(0);
  const valObj = useRef({ value: 0 });

  useEffect(() => {
    if (!parsed.hasNumber) return;

    if (trigger) {
      valObj.current.value = 0;
      setCurrentVal(0);

      gsap.to(valObj.current, {
        value: parsed.numberVal,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          setCurrentVal(valObj.current.value);
        },
      });
    }
  }, [trigger, parsed.hasNumber, parsed.numberVal]);

  if (!parsed.hasNumber) {
    return (
      <span className="text-[#EBB771] font-black text-xl md:text-2xl tracking-tight font-sans">
        {metric}
      </span>
    );
  }

  const formattedNum = currentVal.toFixed(parsed.decimals);

  return (
    <span className="text-[#EBB771] font-black text-xl md:text-2xl tracking-tight block font-sans">
      <span>{parsed.prefix}</span>
      <span className="tabular-nums">{formattedNum}</span>
      <span>{parsed.suffix}</span>
      <span className="text-[#6B7280] font-medium text-xs md:text-sm ml-2 inline-block normal-case">
        {parsed.label.trim()}
      </span>
    </span>
  );
}

// Individual card component
function ProjectCard({
  project,
  index,
  isMobile = false,
  isActive = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isMobile?: boolean;
  isActive?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);

  const rotateX = useTransform(yVal, [-1, 1], [3, -3]);
  const rotateY = useTransform(xVal, [-1, 1], [-3, 3]);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to [-1, 1]
    const normX = (mouseX / rect.width) * 2 - 1;
    const normY = (mouseY / rect.height) * 2 - 1;

    xVal.set(normX);
    yVal.set(normY);
  };

  const handleMouseLeave = () => {
    xVal.set(0);
    yVal.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group rounded-2xl border border-[#EAEAEA] bg-white cursor-pointer overflow-hidden flex flex-col justify-between transition-[box-shadow] duration-300 hover:shadow-[0_24px_48px_-12px_rgba(29,39,66,0.08)] ${isMobile ? "w-full min-h-[400px]" : "w-full min-h-[460px]"
        }`}
    >
      {/* ── Mock Browser Frame Header ── */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-[#EAEAEA] select-none">
        {/* Red, Yellow, Green Window Dots */}
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2 w-2 rounded-full bg-[#FF5F56]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
          <div className="h-2 w-2 rounded-full bg-[#27C93F]" />
        </div>
        {/* Address / URL Bar */}
        <div className="flex-1 max-w-[240px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-2 text-[9px] text-[#6B7280] font-mono text-center flex items-center justify-center gap-1 overflow-hidden truncate">
          <span className="text-emerald-500 font-bold">https://</span>
          <span>{project.url}</span>
        </div>
      </div>

      {/* ── Browser Page Content / Screenshot Area ── */}
      <div
        className="flex-1 relative overflow-hidden flex items-stretch border-b border-[#EAEAEA]"
        style={{ backgroundColor: project.browserColor }}
      >
        <div className="w-full h-44 md:h-52 self-center p-6 overflow-hidden">
          {/* Parallax target class applied here */}
          <div className={`h-full w-full rounded-lg shadow-sm border border-[#EAEAEA] overflow-hidden preview-inner-${index}`}>
            <div className="scale-110 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.14]">
              <BrowserPreview type={project.screenshotType} isActive={isActive} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Content Metadata ── */}
      <div className="p-6 space-y-4 bg-white">
        <div className="space-y-2">
          {/* Industry and Category labels */}
          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
            {project.industry} · {project.category}
          </span>
          <h3
            className="text-lg font-bold text-[#1D2742]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Primary Result Metric (Animated counters on entry) */}
        <div className="py-1 min-h-[32px] flex items-center">
          <AnimatedMetric metric={project.metric} trigger={isActive} />
        </div>

        {/* Link / CTA (Subtle arrow animation) */}
        <div className="pt-3 border-t border-[#EAEAEA] flex items-center justify-between">
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FC9C44] transition-colors"
          >
            Explore Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}



