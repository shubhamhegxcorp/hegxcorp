import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import type { ProcessSection, ProcessStepItem } from "@/lib/cms-config";

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

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.1,
    },
  }),
};

export function Process() {
  const { data } = useWebsiteSection<ProcessSection>("home.process");
  const tagline = data?.tagline || "How We Work";
  const heading = data?.heading || "From audit to scale in 5 steps";
  const steps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;

  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden border-b border-[#EAEAEA]"
      style={{
        paddingTop: "clamp(64px, 8vw, 110px)",
        paddingBottom: "clamp(64px, 8vw, 110px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* ── Section Header with Smooth In-View Animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 lg:mb-16"
        >
          <SectionHeading tagline={tagline} heading={heading} />
        </motion.div>

        {/* ── Editorial Staggered Process List (Exact Client Success Stories Pattern) ── */}
        <div className="divide-y divide-[#EAEAEA] border-t border-b border-[#EAEAEA]">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num || idx}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={rowVariant}
              className="group grid grid-cols-1 md:grid-cols-[140px_1fr_260px] lg:grid-cols-[180px_1fr_320px] gap-6 lg:gap-12 py-10 items-start transition-colors duration-200 hover:bg-white/60 -mx-4 px-4 rounded-xl"
            >
              {/* ── Left Column: Step Milestone Number & Badge ── */}
              <div className="shrink-0 flex items-center md:block gap-4">
                <div
                  className="text-[clamp(36px,5vw,56px)] font-black text-[#1D2742] group-hover:text-[#FC9C44] leading-none tracking-tight transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.num}
                </div>
                <div
                  className="md:mt-2 text-[11px] font-bold tracking-[0.12em] text-[#FC9C44] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Phase 0{idx + 1}
                </div>
              </div>

              {/* ── Middle Column: Title & Description ── */}
              <div className="space-y-3">
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] sm:text-[16px] text-[#4B5563] leading-relaxed max-w-[620px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>

              {/* ── Right Column: Deliverables Chips ── */}
              {step.deliverables && step.deliverables.length > 0 && (
                <div className="space-y-2.5">
                  <div
                    className="text-[10px] font-bold tracking-[0.14em] text-[#9CA3AF] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#EAEAEA] bg-white px-3 py-1.5 text-xs font-semibold text-[#1D2742] shadow-xs group-hover:border-[#FC9C44]/40 transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


