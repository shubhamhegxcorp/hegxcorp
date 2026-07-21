import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Check } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We analyse your current digital footprint — SEO health, ad performance, website UX, and competitive landscape — to identify the highest-impact opportunities.",
    deliverables: ["Competitor Analysis", "Funnel Review", "Analytics Audit", "Opportunity Mapping"],
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We build a 90-day growth roadmap with clear KPIs, channel allocation, and milestones. No generic playbooks — every strategy is bespoke to your business.",
    deliverables: ["Channel Plan", "Growth Roadmap", "KPI Design", "90-Day Blueprint"],
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our specialist team activates across SEO, paid media, content, and development simultaneously — moving fast without sacrificing quality.",
    deliverables: ["SEO Setup", "Paid Campaigns", "Content Activation", "Web Deployment"],
  },
  {
    num: "04",
    title: "Optimisation",
    desc: "We continuously test, analyse and refine every campaign and touchpoint. Data informs every decision, week over week.",
    deliverables: ["A/B Tests", "Weekly Reports", "CRO Experiments", "Bid Strategy"],
  },
  {
    num: "05",
    title: "Scale",
    desc: "Once we've found what works, we double down. Proven channels get more budget, winning creative gets expanded, and growth compounds.",
    deliverables: ["Budget Expansion", "New Channels", "Market Entry", "Creative Scaling"],
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the scroll position relative to the container
      const start = rect.top; // Distance from top of viewport to top of container
      const totalHeight = rect.height - windowHeight;

      if (totalHeight <= 0) return;

      // Progress is 0 when the top of the container reaches the top of the viewport
      // Progress is 1 when the bottom of the container reaches the bottom of the viewport
      const currentScroll = -start;
      const rawProgress = currentScroll / totalHeight;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(progress);

      // Determine active step based on progress thresholds
      // 5 steps -> divide progress by 0.2 intervals
      const stepIndex = Math.min(Math.floor(progress * 5), 4);
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to set starting progress
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Version (Scroll Driven Sticky Timeline) ── */}
      <div
        ref={containerRef}
        className="hidden md:block relative bg-[#FAFAF8]"
        style={{ height: "260vh" }} // Tall container to provide scroll space
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          <div className="mx-auto max-w-[1280px] w-full px-6 lg:px-10">
            {/* Header */}
            <div className="mb-14">
              <SectionHeading tagline="How We Work" heading="From audit to scale in 5 steps" />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-[1.2fr_1.8fr] gap-16 items-center">
              {/* Left Side: Sticky Progress Bar and Step Labels */}
              <div className="relative flex gap-8 pl-4 py-6">
                {/* Vertical Progress Bar Track */}
                <div className="relative w-[3px] bg-[#EAEAEA] rounded-full self-stretch">
                  {/* Fill progress line */}
                  <motion.div
                    className="absolute top-0 w-full bg-[#FC9C44] rounded-full origin-top"
                    style={{ height: `${scrollProgress * 100}%` }}
                    transition={{ type: "tween", ease: "easeOut" }}
                  />
                </div>

                {/* Step Labels Stack */}
                <div className="space-y-6 py-2">
                  {steps.map((s, idx) => {
                    const isActive = idx === activeStep;
                    const isCompleted = idx < activeStep;
                    const isMuted = idx > activeStep;

                    return (
                      <div
                        key={s.num}
                        className="flex items-center gap-4 cursor-default select-none"
                      >
                        {/* Dot indicator on the line */}
                        <div className="absolute left-[13px] z-10 -translate-x-1/2 flex items-center justify-center">
                          <motion.div
                            animate={{
                              backgroundColor: isActive || isCompleted ? "#FC9C44" : "#FFFFFF",
                              borderColor: isActive || isCompleted ? "#FC9C44" : "#EAEAEA",
                              scale: isActive ? 1.25 : 1,
                            }}
                            className="h-4 w-4 rounded-full border-2 flex items-center justify-center text-[7px] text-white"
                          >
                            {isCompleted && <Check className="h-2.5 w-2.5 stroke-[3px]" />}
                          </motion.div>
                        </div>

                        {/* Label Content */}
                        <motion.div
                          animate={{
                            opacity: isActive ? 1 : isCompleted ? 0.7 : 0.35,
                            x: isActive ? 6 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={`text-xs  ${isActive ? "text-[#FC9C44]" : "text-[#6B7280]"
                              }`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {s.num}
                          </span>
                          <span
                            className={`text-base font-bold ${isActive ? "text-[#1D2742]" : "text-[#6B7280]"
                              }`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {s.title}
                          </span>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Content Panel (fades and slides on step change) */}
              <div className="rounded-2xl border border-[#EAEAEA] bg-white p-12 min-h-[300px] flex flex-col justify-center shadow-[0_12px_40px_-20px_rgba(29,39,66,0.06)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-5"
                  >
                    <div
                      className="text-8xl font-black text-[#fcb044] leading-none select-none tracking-tight"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        // WebkitTextStroke: "1px #EAEAEA",
                      }}
                    >
                      {steps[activeStep].num}
                    </div>
                    <h3
                      className="text-3xl font-bold text-[#1D2742]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {steps[activeStep].title}
                    </h3>
                    <p
                      className="text-[#6B7280] leading-relaxed max-w-[500px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
                    >
                      {steps[activeStep].desc}
                    </p>

                    {/* Deliverable chips */}
                    <div className="mt-6">
                      <div
                        className="text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Deliverables
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {steps[activeStep].deliverables.map((d) => (
                          <span
                            key={d}
                            className="inline-block rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-3 py-1 text-[11px] font-medium text-[#6B7280]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Version (Interactive Click Timeline) ── */}
      <section
        className="block md:hidden bg-[#FAFAF8]"
        style={{
          paddingTop: "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Header */}
          <div className="mb-10">
            <SectionHeading tagline="How We Work" heading="From audit to scale in 5 steps" />
          </div>

          {/* Timeline Tab Bar */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setMobileActive(i)}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 shrink-0 transition-all duration-300 ${mobileActive === i
                  ? "bg-[#1D2742] text-white shadow-md"
                  : "bg-white border border-[#EAEAEA] text-[#6B7280]"
                  }`}
              >
                <span
                  className={`text-[10px] font-bold ${mobileActive === i ? "text-[#EBB771]" : "text-[#FC9C44]"
                    }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step details panel */}
          <div className="rounded-2xl border border-[#EAEAEA] bg-white p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileActive}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div
                  className="text-6xl font-black text-[#FAFAF8] leading-none select-none"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    WebkitTextStroke: "1px #EAEAEA",
                  }}
                >
                  {steps[mobileActive].num}
                </div>
                <h3
                  className="text-xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {steps[mobileActive].title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {steps[mobileActive].desc}
                </p>

                {/* Mobile deliverable chips */}
                <div className="mt-5">
                  <div
                    className="text-[9px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase mb-2.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Deliverables
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {steps[mobileActive].deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-block rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-2.5 py-1 text-[10px] font-medium text-[#6B7280]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
