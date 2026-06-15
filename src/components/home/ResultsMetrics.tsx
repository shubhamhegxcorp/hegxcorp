import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

/* ── Supporting metrics (stack beside the hero) ─────────── */
const supporting = [
  {
    id: "leads",
    prefix: "+",
    value: 184,
    suffix: "%",
    label: "Qualified Leads",
    sub: "More pipeline through conversion-optimised funnels",
    decimals: 0,
    href: "/case-studies",
  },
  {
    id: "roas",
    prefix: "",
    value: 4.8,
    suffix: "×",
    label: "Average ROAS",
    sub: "Return on ad spend across Google, Meta & programmatic",
    decimals: 1,
    href: "/case-studies",
  },
  {
    id: "satisfaction",
    prefix: "",
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    sub: "Senior-led accounts — no handoff to juniors after onboarding",
    decimals: 0,
    href: "/about",
  },
];

export function ResultsMetrics() {
  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      {/* Narrow container — creates density contrast vs adjacent sections */}
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">

        {/* Tagline label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="mb-12 lg:mb-16"
        >
          <span
            className="text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Proven Results
          </span>
          <h2
            className="mt-3 text-[28px] font-bold text-[#1D2742] leading-snug"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Numbers that prove we deliver.
          </h2>
        </motion.div>

        {/* ── Two-column: hero left, stack right ── */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-24 items-center">

          {/* Hero metric — dominant, anchored left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="relative"
          >
            {/* Ghost numeral — sits behind at near-zero opacity */}
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-6 -left-4 leading-none text-[#EAEAEA] font-black"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(120px, 17vw, 210px)",
                zIndex: 0,
              }}
            >
              310
            </div>

            {/* Actual counter */}
            <div className="relative z-10">
              <div
                className="font-black leading-none tracking-tight text-[#1D2742]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(72px, 10vw, 130px)",
                }}
              >
                <AnimatedCounter
                  target={310}
                  prefix="+"
                  suffix="%"
                  decimals={0}
                  trigger={true}
                />
              </div>

              {/* Brand accent bar */}
              <div className="mt-5 mb-4 h-[2px] w-14 rounded-full bg-[#FC9C44]" />

              <div
                className="text-[20px] font-bold text-[#232323] leading-snug mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Organic Traffic Growth
              </div>
              <p
                className="text-[14px] text-[#6B7280] leading-relaxed mb-7 max-w-[340px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Average increase across all SEO clients within 12 months of engagement.
              </p>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                See the case study
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Supporting metrics — clean editorial stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
              delay: 0.12,
            }}
            className="divide-y divide-[#EAEAEA]"
          >
            {supporting.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number,number,number,number],
                }}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Metric number */}
                    <div
                      className="text-[46px] font-black leading-none text-[#1D2742] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <AnimatedCounter
                        target={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        decimals={m.decimals}
                        trigger={true}
                      />
                    </div>
                    {/* Label */}
                    <div
                      className="text-sm font-bold text-[#232323] mt-1.5 mb-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {m.label}
                    </div>
                    {/* Sub-text */}
                    <p
                      className="text-xs text-[#9CA3AF] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {m.sub}
                    </p>
                  </div>

                  {/* Hover arrow — appears on row hover */}
                  <Link
                    to={m.href}
                    className="shrink-0 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label={`View ${m.label} results`}
                  >
                    <ArrowRight className="h-4 w-4 text-[#FC9C44]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
