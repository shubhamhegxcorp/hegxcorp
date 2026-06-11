import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

const metrics = [
  {
    id: "organic",
    prefix: "+",
    value: 310,
    suffix: "%",
    label: "Organic Traffic Growth",
    description: "Average increase across all SEO clients in 12 months",
    cta: "See the case study",
  },
  {
    id: "leads",
    prefix: "+",
    value: 184,
    suffix: "%",
    label: "Qualified Leads Generated",
    description: "More qualified pipeline through conversion-optimised funnels",
    cta: "View lead gen results",
  },
  {
    id: "roas",
    prefix: "",
    value: 4.8,
    suffix: "×",
    label: "Average ROAS Delivered",
    description: "Return on ad spend across Google, Meta & programmatic campaigns",
    cta: "Explore PPC results",
    decimals: 1,
  },
];

export function ResultsMetrics() {
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
          className="space-y-14"
        >
          {/* Heading */}
          <SectionHeading tagline="Proven Results" heading="Numbers that prove we deliver" />

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {metrics.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -4, // -4px lift on hover
                  borderColor: "#EBB771",
                  boxShadow: "0 20px 48px -16px rgba(235, 183, 113, 0.2)",
                }}
                className="group rounded-2xl p-8 border border-[#EAEAEA] bg-[#FAFAF8] cursor-default transition-all duration-300"
              >
                {/* Big number */}
                <div
                  className="text-[64px] font-black leading-none tracking-tight text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <AnimatedCounter
                    target={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                    trigger={true}
                  />
                </div>

                {/* Accent bar */}
                <div className="mt-4 mb-4 h-0.5 w-12 rounded-full bg-[#EBB771]" />

                {/* Label */}
                <div
                  className="text-base font-bold text-[#232323] leading-snug mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {m.label}
                </div>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed mb-5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {m.description}
                </p>

                {/* CTA link (Button scale on hover: 1 -> 1.03) */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {m.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
