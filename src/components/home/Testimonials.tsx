import { Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Head of Marketing",
    company: "RetailBrand India",
    industry: "E-Commerce",
    stars: 5,
    quote:
      "Hegxcorp's SEO strategy drove a 280% increase in organic revenue within 10 months. What impressed us most was the transparency — we always knew exactly what was being done and why.",
  },
  {
    id: 2,
    name: "James O'Connor",
    role: "Founder & CEO",
    company: "LaunchScale",
    industry: "SaaS",
    stars: 5,
    quote:
      "We were burning through ad spend with another agency and getting nowhere. Hegxcorp restructured our entire paid strategy in 30 days. Our ROAS went from 1.8x to 5.2x. I wish we'd found them sooner.",
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Director, Digital",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    stars: 5,
    quote:
      "The level of strategic thinking Hegxcorp brings is what sets them apart. They don't just execute — they think deeply about the business problem first. Our lead volume doubled in the first quarter.",
  },
];

export function Testimonials() {
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
          {/* Header */}
          <SectionHeading
            tagline="Client Stories"
            heading="Trusted by ambitious teams"
            description="Real results from real clients across industries."
            align="center"
          />

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -4, // -4px lift on hover
                  borderColor: "#EBB771",
                  boxShadow: "0 20px 48px -16px rgba(29,39,66,0.08)",
                }}
                className="group flex flex-col gap-5 rounded-2xl border border-[#EAEAEA] bg-white p-7 cursor-default transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-[#EBB771] text-[#EBB771]" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="flex-1 text-[15px] text-[#374151] leading-relaxed font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "{t.quote}"
                </p>

                {/* Divider */}
                <div className="h-px bg-[#EAEAEA]" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white font-sans"
                    style={{ background: "#1D2742" }}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-sm font-bold text-[#232323] truncate"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-[#6B7280] truncate"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <span
                    className="ml-auto shrink-0 rounded-full border border-[#EAEAEA] px-2.5 py-1 text-[10px] font-semibold text-[#6B7280]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t.industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom trust strip */}
          <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] px-8 py-6 flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Join <span className="font-semibold text-[#232323]">100+ businesses</span> scaling
              with Hegxcorp across India, USA, UK &amp; Dubai
            </p>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:underline"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                See all case studies →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
