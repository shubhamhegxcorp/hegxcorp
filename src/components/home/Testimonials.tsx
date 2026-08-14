import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/* ── Testimonials with result metrics attached ──────────── */
const testimonials = [
  {
    id: 1,
    result: { value: "+280%", label: "Organic Revenue" },
    quote:
      "Hegxcorp's SEO strategy drove a 280% increase in organic revenue within 10 months. What impressed us most was the transparency — we always knew exactly what was being done and why.",
    name: "Priya Sharma",
    role: "Head of Marketing",
    company: "RetailBrand India",
    industry: "E-Commerce",
    initials: "PS",
  },
  {
    id: 2,
    result: { value: "5.2×", label: "ROAS Delivered" },
    quote:
      "We were burning through ad spend with another agency and getting nowhere. Hegxcorp restructured our entire paid strategy in 30 days. Our ROAS went from 1.8× to 5.2×. I wish we'd found them sooner.",
    name: "James O'Connor",
    role: "Founder & CEO",
    company: "LaunchScale",
    industry: "SaaS",
    initials: "JO",
  },
  {
    id: 3,
    result: { value: "2×", label: "Qualified Leads" },
    quote:
      "The level of strategic thinking Hegxcorp brings is what sets them apart. They don't just execute — they think deeply about the business problem first. Our lead volume doubled in the first quarter.",
    name: "Meera Patel",
    role: "Director, Digital",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    initials: "MP",
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

export function Testimonials() {
  return (
    <section
      className="bg-white overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      {/* Wider container — editorial feel */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <span
              className="text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Client Stories
            </span>
            <h2
              className="mt-3 text-[clamp(24px,3.5vw,36px)] font-bold text-[#1D2742] leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Results that speak
              <br className="hidden sm:block" /> for themselves.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] shrink-0 group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See all case studies
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* ── Editorial strip — full-width rows, divided by rules ── */}
        <div className="divide-y divide-[#EAEAEA]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={rowVariant}
              className="group grid grid-cols-1 md:grid-cols-[160px_1fr_200px] lg:grid-cols-[200px_1fr_240px] gap-6 lg:gap-12 py-10 items-start"
            >
              {/* ── Left: result metric ── */}
              <div className="shrink-0">
                <div
                  className="text-[clamp(36px,5vw,52px)] font-black text-[#1D2742] leading-none tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t.result.value}
                </div>
                <div
                  className="mt-1.5 text-[11px] font-bold tracking-[0.1em] text-[#FC9C44] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t.result.label}
                </div>
              </div>

              {/* ── Centre: quote ── */}
              <div>
                <p
                  className="text-[15px] lg:text-[16px] text-[#374151] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="text-[#C4C9D4] mr-0.5 font-serif text-[18px]">"</span>
                  {t.quote}
                  <span className="text-[#C4C9D4] ml-0.5 font-serif text-[18px]">"</span>
                </p>
              </div>

              {/* ── Right: author ── */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {/* Monogram avatar */}
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white select-none"
                    style={{ background: "#1D2742", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-[#232323]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-[#9CA3AF]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs text-[#6B7280]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.company}
                  </span>
                  <span className="text-[#EAEAEA]">·</span>
                  <span
                    className="rounded-full border border-[#EAEAEA] px-2 py-0.5 text-[10px] font-semibold text-[#9CA3AF]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-4"
        >
          <p className="text-sm text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Join <span className="font-semibold text-[#232323]">100+ businesses</span> scaling with
            Hegxcorp across India, USA, UK &amp; Dubai.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Read full case studies →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
