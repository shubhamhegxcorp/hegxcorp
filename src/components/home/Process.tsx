import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import type { ProcessSection, ProcessStepItem } from "@/lib/cms-config";
import { ScrollStack } from "@/components/ui/scroll-stack";

const defaultSteps: ProcessStepItem[] = [
  {
    num: "01",
    title: "Audit",
    desc: "We analyse your current digital footprint — SEO health, ad performance, website UX, and competitive landscape — to identify the highest-impact opportunities.",
    deliverables: [
      "Competitor Analysis",
      "Funnel Review",
      "Analytics Audit",
      "Opportunity Mapping",
    ],
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
  const { data } = useWebsiteSection<ProcessSection>("home.process");
  const tagline = data?.tagline || "How We Work";
  const heading = data?.heading || "From audit to scale in 5 steps";
  const steps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;

  return (
    <section
      id="how-we-work"
      className="relative bg-[#FAFAF8] border-b border-[#EAEAEA] scroll-mt-20"
    >
      {/* Anchor for alternate url fragments */}
      <div id="process" className="absolute -top-20" />

      <ScrollStack
        variant="stack"
        scrollLength={0.85}
        peek={26}
        scaleStep={0.065}
        blur={3}
        dim={0.2}
        smooth={0.16}
        depth={3}
        cardWidth={920}
        cardHeight={0.62}
        borderRadius={24}
        perspective={1400}
        showProgress={true}
        showCounter={true}
        className="w-full"
        header={
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#EAEAEA]/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC9C44]/10 border border-[#FC9C44]/20 text-[#FC9C44] text-xs font-bold uppercase tracking-[0.14em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FC9C44] animate-pulse" />
                {tagline}
              </div>
              <h2
                className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D2742] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {heading}
              </h2>
            </div>
            {/* <p className="text-xs sm:text-sm font-medium text-[#6B7280] hidden md:block">
              Scroll down to explore each phase ↓
            </p> */}
          </div>
        }
      >
        {steps.map((step, idx) => (
          <div
            key={step.num || idx}
            className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_24px_50px_-15px_rgba(29,39,66,0.12)] transition-all duration-300"
          >
            {/* Subtle brand glow accent */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-radial from-[#FC9C44]/12 via-transparent to-transparent blur-2xl" />

            {/* Top row: Numeral & Phase Badge */}
            <div className="relative flex items-center justify-between border-b border-[#F3F4F6] pb-4 sm:pb-5">
              <div className="flex items-center gap-4">
                <span
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1D2742] leading-none tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.num}
                </span>
                <div className="flex flex-col">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Phase 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">
                    Step {idx + 1} of {steps.length}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs font-semibold text-[#1D2742]">
                <span className="h-2 w-2 rounded-full bg-[#FC9C44]" />
                Methodology
              </span>
            </div>

            {/* Middle row: Phase Title & Description */}
            <div className="relative my-auto py-4 sm:py-6 space-y-3">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2742] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[15px] sm:text-[17px] text-[#4B5563] leading-relaxed max-w-[680px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {step.desc}
              </p>
            </div>

            {/* Bottom row: Deliverables Chips */}
            {step.deliverables && step.deliverables.length > 0 && (
              <div className="relative border-t border-[#F3F4F6] pt-4 sm:pt-5 space-y-2.5">
                <div
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9CA3AF]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAFAF8] px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-[#1D2742] transition-colors hover:border-[#FC9C44]/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </ScrollStack>
    </section>
  );
}

export default Process;
