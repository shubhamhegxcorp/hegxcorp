import { ArrowRight, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const results = [
  { label: "Organic Traffic", value: "+310%", period: "12 months" },
  { label: "Lead Volume", value: "+184%", period: "Q1–Q3" },
  { label: "Revenue Growth", value: "+$1.2M", period: "Year 1" },
];

export function FeaturedCaseStudy() {
  return (
    <section
      className="bg-[#1D2742] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Scroll Reveal Container (0.6s, y: 30 -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EBB771]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Featured Case Study
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-8 items-start">
            {/* Left — story */}
            <div className="space-y-8">
              <h2
                className="font-bold text-white leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                }}
              >
                How we grew an e-commerce brand by 340% in organic traffic
              </h2>

              {/* Challenge / Solution */}
              <div className="space-y-5">
                <div className="border-l-2 border-[#EBB771] pl-5">
                  <div
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    The Challenge
                  </div>
                  <p
                    className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    A fast-growing e-commerce brand was struggling with stagnant organic traffic and
                    heavy reliance on paid ads. Their ROAS was declining and CAC was climbing
                    quarter over quarter.
                  </p>
                </div>

                <div className="border-l-2 border-[#FC9C44] pl-5">
                  <div
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FC9C44] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Our Solution
                  </div>
                  <p
                    className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    We deployed a full-funnel strategy combining technical SEO, content
                    architecture, and conversion-rate optimisation — reducing paid dependency while
                    compounding organic results.
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote className="h-5 w-5 text-[#EBB771] mb-3" />
                <p
                  className="text-white/85 text-sm leading-relaxed italic mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "They operate like an extension of our team. The work is sharp, the reporting is
                  honest, and the numbers speak for themselves."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#EBB771] flex items-center justify-center text-[#1D2742] text-xs font-bold font-sans">
                    AK
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Arjun K.
                    </div>
                    <div className="text-xs text-white/50">Founder, E-Commerce Brand</div>
                  </div>
                </div>
              </div> */}

              {/* Button Scale on Hover: 1 -> 1.03 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35]"
                >
                  View Full Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right — results */}
            <div className="space-y-4">
              {results.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                >
                  <div>
                    <div
                      className="text-xs text-white/50 mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {r.label}
                    </div>
                    <div
                      className="text-[42px] font-black text-white leading-none"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {r.value}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-xs text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Timeframe
                    </div>
                    <div
                      className="text-sm font-semibold text-[#EBB771] mt-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {r.period}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Industry tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["E-Commerce", "SEO", "Content", "CRO", "India"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/60"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
