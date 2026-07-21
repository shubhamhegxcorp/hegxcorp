import { Target, GitMerge, BarChart2, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";

/* ── Comparison table data ─────────────────────────────────── */
const rows = [
  { agency: "Reports activity", hegx: "Reports business outcomes" },
  { agency: "SEO, PPC & Web teams operate separately", hegx: "Unified growth strategy" },
  { agency: "Generic service packages", hegx: "Custom growth roadmaps" },
  { agency: "Monthly reporting", hegx: "Continuous optimisation" },
  { agency: "Traffic-focused KPIs", hegx: "Revenue-focused KPIs" },
  { agency: "Vendor relationship", hegx: "Extension of your team" },
];

/* ── Outcome-focused pillars ───────────────────────────────── */
const pillars = [
  {
    icon: Target,
    title: "Diagnosis Before Prescription",
    desc: "Before touching a channel, we audit your full funnel — gaps, leaks and hidden wins. You get a strategy grounded in your actual business, not a recycled template.",
  },
  {
    icon: GitMerge,
    title: "Channels That Compound",
    desc: "SEO builds authority that makes paid ads cheaper. Paid ads fund the data that sharpens SEO. We wire the channels together so every pound spent does double the work.",
  },
  {
    icon: BarChart2,
    title: "Outcomes, Not Vanity Metrics",
    desc: "Traffic reports don't pay salaries. We tie every KPI back to pipeline and revenue so you always know which activity is making you money.",
  },
  {
    icon: Users,
    title: "Senior Talent, Always On",
    desc: "Your account is run by senior strategists — never handed to a junior coordinator after onboarding. The people who pitch the plan are the people who execute it.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale With You",
    desc: "As your business grows, the system scales with it. New channels, new markets and new products plug into an existing growth engine instead of starting from scratch.",
  },
];

/* ── Framer Motion variants ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.07,
    },
  }),
};

export function WhyHegxcorp() {
  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden"
      style={{ paddingTop: "clamp(10px, 2vw, 20px)", paddingBottom: "clamp(72px, 9vw, 128px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 space-y-16">

        {/* ── Intro ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <SectionHeading
            tagline="WHY CLIENTS SWITCH TO HEGXCORP"
            heading="Most agencies run campaigns. We build growth systems."
            description="The difference isn't the channels we use. It's how we connect strategy, execution, reporting and optimisation into one growth engine."
          />
        </motion.div>

        {/* ── Comparison Table ──────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
          variants={fadeUp}
        >
          <div className="relative">
            <div className="w-full overflow-x-auto rounded-2xl border border-[#EAEAEA] shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)]">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                {/* Column headers */}
                <thead>
                  <tr>
                    <th
                      className="w-1/2 px-7 py-5 text-left font-semibold text-[#6B7280] border-b border-[#EAEAEA] bg-[#FAFAF8]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.02em" }}
                    >
                      Traditional Agency
                    </th>
                    <th
                      className="w-1/2 px-7 py-5 text-left font-semibold border-b border-[#FC9C44]/30 bg-[#FFF4E8]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", letterSpacing: "0.02em", color: "#c97a1e" }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="inline-block h-2 w-2 rounded-full bg-[#FC9C44]"
                          aria-hidden="true"
                        />
                        Hegxcorp
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="group transition-colors duration-200 hover:bg-[#FAFAF8]"
                    >
                      {/* Agency column */}
                      <td
                        className={`px-7 py-4 text-[#9CA3AF] ${i < rows.length - 1 ? "border-b border-[#EAEAEA]" : ""}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="flex items-center gap-3">
                          {/* Cross mark */}
                          <svg
                            className="shrink-0 h-4 w-4 text-[#D1D5DB]"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 4l8 8M12 4l-8 8"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                          {row.agency}
                        </span>
                      </td>

                      {/* Hegxcorp column — subtle orange tint */}
                      <td
                        className={`px-7 py-4 font-medium text-[#1D2742] bg-[#FFF4E8] ${i < rows.length - 1 ? "border-b border-[#FC9C44]/20" : ""}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="flex items-center gap-3">
                          {/* Check mark */}
                          <svg
                            className="shrink-0 h-4 w-4 text-[#FC9C44]"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 8l4 4 6-7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {row.hegx}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Scroll hint gradient — right edge, mobile only */}
            <div
              aria-hidden="true"
              className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-10 rounded-r-2xl"
              style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
            />
          </div>
        </motion.div>

        {/* ── Five outcome pillars ──────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeUp}
              whileHover={{
                y: -4,
                zIndex: 10,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)",
                transition: { duration: 0.22, ease: "easeOut" },
              }}
              className="group flex flex-col gap-5 bg-white p-7 cursor-default transition-colors duration-300 hover:bg-[#FFF4E8]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] text-[#1D2742] transition-all duration-300 group-hover:bg-[#FC9C44] group-hover:text-white group-hover:border-transparent">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3
                  className="font-bold text-[#232323] leading-snug mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
