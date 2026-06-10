import { useEffect, useRef, useState } from "react";
import { ArrowRight, Quote } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const results = [
  { label: "Organic Traffic", value: "+340%", period: "12 months" },
  { label: "Lead Volume", value: "+220%", period: "Q1–Q3" },
  { label: "Revenue Growth", value: "+$1.2M", period: "Year 1" },
];

export function FeaturedCaseStudySection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      style={{
        background: "#1D2742",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className={`${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#EBB771]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Featured Case Study
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-8 items-start">
          {/* Left — story */}
          <div className={`space-y-8 ${visible ? "animate-fade-up stagger-1" : "opacity-0"}`}>
            <h2
              className="font-bold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)" }}
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
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A fast-growing e-commerce brand was struggling with stagnant organic traffic and heavy reliance on paid ads. Their ROAS was declining and CAC was climbing quarter over quarter.
                </p>
              </div>

              <div className="border-l-2 border-[#FC9C44] pl-5">
                <div
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FC9C44] mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our Solution
                </div>
                <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We deployed a full-funnel strategy combining technical SEO, content architecture, and conversion-rate optimisation — reducing paid dependency while compounding organic results.
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Quote className="h-5 w-5 text-[#EBB771] mb-3" />
              <p
                className="text-white/85 text-sm leading-relaxed italic mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "Hegxcorp completely transformed our digital presence. Within 12 months, organic became our #1 revenue channel. The team's strategic depth is unlike any agency we've worked with."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#EBB771] flex items-center justify-center text-[#1D2742] text-xs font-bold">
                  AK
                </div>
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {/* TODO: Replace with real client name */}
                    Arjun K.
                  </div>
                  <div className="text-xs text-white/50">Founder, E-Commerce Brand</div>
                </div>
              </div>
            </div>

            <a
              href="/case-studies"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-[#1D2742] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]"
              style={{ background: "#FC9C44" }}
            >
              View Full Case Study <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — results */}
          <div className={`space-y-4 ${visible ? "animate-fade-up stagger-3" : "opacity-0"}`}>
            {results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
              >
                <div>
                  <div className="text-xs text-white/50 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                  <div className="text-xs text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Timeframe
                  </div>
                  <div className="text-sm font-semibold text-[#EBB771] mt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {r.period}
                  </div>
                </div>
              </div>
            ))}

            {/* Industry tag */}
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
      </div>
    </section>
  );
}
