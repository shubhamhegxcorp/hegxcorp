import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/site/PremiumInteractions";

export function FinalCTA() {
  return (
    <section
      className="relative bg-[#1D2742] overflow-hidden grain-overlay"
      style={{
        paddingTop: "clamp(40px, 4vw, 64px)",
        paddingBottom: "clamp(36px, 4vw, 56px)",
      }}
    >
      {/* Subtle animated background glow — absolutely positioned, does not affect section height */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.18] select-none overflow-hidden">
        <div
          className="absolute rounded-full bg-[#FC9C44] blur-[130px] animate-pulse"
          style={{ margin: "auto", width: "55vw", maxWidth: "650px", height: "55vw", animationDuration: "8s" }}
        />
        <div
          className="absolute rounded-full bg-[#EBB771] blur-[100px] animate-pulse"
          style={{ margin: "auto", width: "35vw", maxWidth: "450px", height: "35vw", animationDuration: "14s", animationDelay: "-3s", opacity: 0.6 }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 z-10">
        {/* Scroll Reveal Container (0.6s, y: 30 -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[800px] mx-auto text-center space-y-8"
        >
          {/* Eyebrow */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#EBB771]/30 bg-[#EBB771]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Free Strategy Session · No Commitment
            </span>
          </div>

          {/* Headline (Outcome-focused) */}
          <h2
            className="font-bold text-white leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
            }}
          >
            Let's identify what's limiting your growth.
          </h2>

          {/* Subheading */}
          <p
            className="text-white/75 max-w-[620px] mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" }}
          >
            Book a free strategy session and receive a practical growth roadmap tailored to your business. We'll review your website, acquisition channels, and conversion opportunities and show you the highest-impact next steps.
          </p>

          {/* CTAs with magnetic spring + snappy button hover elevations */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <MagneticButton strength={10}>
              <motion.div
                whileHover={{
                  y: -3,
                  boxShadow: "0 12px 28px -8px rgba(252,156,68,0.4)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-[#1D2742] bg-[#FC9C44] transition-colors duration-200 hover:bg-[#E88C35]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  id="final-cta-strategy-call"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </MagneticButton>

            <MagneticButton strength={10}>
              <motion.div
                whileHover={{
                  y: -3,
                  boxShadow: "0 12px 24px -10px rgba(255,255,255,0.15)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  to="/free-growth-audit"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  id="final-cta-free-audit"
                >
                  Get Free Growth Audit
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </MagneticButton>
          </div>

          {/* Trust Indicators */}
          <div 
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs text-white/50 pt-4" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44]" />
              <span>No sales pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EBB771]" />
              <span>30-minute strategy session</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44]" />
              <span>Actionable recommendations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

