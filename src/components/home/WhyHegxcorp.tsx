import { Target, GitMerge, BarChart2, Users, Database } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";

const pillars = [
  {
    icon: Target,
    title: "Strategy First",
    desc: "Every engagement starts with a deep audit of your business, goals and competitive landscape — before a single ad is run or keyword targeted.",
  },
  {
    icon: GitMerge,
    title: "Full Funnel Growth",
    desc: "We don't just drive traffic. We optimise every touchpoint from awareness to conversion to retention, so growth compounds.",
  },
  {
    icon: BarChart2,
    title: "Transparent Reporting",
    desc: "No black boxes. Real-time dashboards, weekly updates and monthly strategy calls so you always know exactly where your budget is going.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "You get a senior strategist, specialist practitioners and an account lead — not a junior coordinator managing your account from a playbook.",
  },
  {
    icon: Database,
    title: "Data-Driven Decisions",
    desc: "Every decision is backed by data. We test, measure, learn and iterate — turning insights into competitive advantages.",
  },
];

export function WhyHegxcorp() {
  return (
    <section
      className="bg-white overflow-hidden"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Scroll Reveal Container (0.6s, y: 30 -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Header */}
          <SectionHeading
            tagline="Why Hegxcorp"
            heading="Built differently from most agencies"
            description="We're not a traditional marketing agency. We operate as a growth partner — embedded in your team and accountable to your business outcomes."
          />

          {/* Pillars — horizontal desktop, vertical mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  y: -4, // -4px lift on hover
                  zIndex: 10,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.08)",
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
        </motion.div>
      </div>
    </section>
  );
}
