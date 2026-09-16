import React, { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import {
  AnimatedTestimonials,
  type AnimatedTestimonialItem,
} from "@/components/ui/animated-testimonials";

/* ── Default testimonials with verified result metrics ──────────── */
const defaultTestimonials: AnimatedTestimonialItem[] = [
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
    result: { value: "5.2x", label: "ROAS Delivered" },
    quote:
      "We were burning through ad spend with another agency and getting nowhere. Hegxcorp restructured our entire paid strategy in 30 days. Our ROAS went from 1.8x to 5.2x. I wish we'd found them sooner.",
    name: "James O'Connor",
    role: "Founder & CEO",
    company: "LaunchScale",
    industry: "SaaS",
    initials: "JO",
  },
  {
    id: 3,
    result: { value: "2x", label: "Qualified Leads" },
    quote:
      "The level of strategic thinking Hegxcorp brings is what sets them apart. They don't just execute — they think deeply about the business problem first. Our lead volume doubled in the first quarter.",
    name: "Meera Patel",
    role: "Director, Digital",
    company: "HealthFirst Clinics",
    industry: "Healthcare",
    initials: "MP",
  },
];

export function Testimonials() {
  const { data: sectionData } = useWebsiteSection<any>("home.testimonials");

  const tagline = sectionData?.tagline || "CLIENT STORIES";
  const heading = sectionData?.heading || "Results that speak for themselves.";

  // Normalize CMS data and fallback seamlessly
  const testimonials = useMemo<AnimatedTestimonialItem[]>(() => {
    if (sectionData?.testimonials && sectionData.testimonials.length > 0) {
      return sectionData.testimonials.map((t: any, idx: number) => ({
        id: t.id ?? idx + 1,
        quote: t.review || t.quote || "",
        name: t.name || "",
        role: t.designation || t.role || "",
        company: t.company || "",
        industry: t.industry || "",
        initials: t.initials || (t.name ? t.name.slice(0, 2).toUpperCase() : "HC"),
        result: {
          value: t.resultValue || t.result?.value || "+280%",
          label: t.resultLabel || t.result?.label || "Revenue Lift",
        },
      }));
    }
    return defaultTestimonials;
  }, [sectionData]);

  return (
    <section
      id="client-stories"
      className="relative bg-white overflow-hidden border-t border-[#EAEAEA]"
      style={{
        paddingTop: "clamp(36px, 5vw, 64px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-[#FC9C44]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-[#10B981]/5 blur-3xl"
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.16em] text-[#FC9C44] uppercase font-mono">
                {tagline}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#FC9C44]" />
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider">
                Audited Growth Outcomes
              </span>
            </div>
            <h2
              className="mt-3 text-[clamp(26px,3.8vw,42px)] font-bold text-[#1D2742] leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {heading}
            </h2>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] hover:text-[#e08933] shrink-0 group transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>See all case studies</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* ── Kinetic 3D Animated Client Stories Showcase ── */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} autoplayInterval={6500} />
      </div>
    </section>
  );
}
