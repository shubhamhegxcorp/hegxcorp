import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

// TODO: Replace with real verified client testimonials before launch
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

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3"];

export function TestimonialsSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="bg-white"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`mb-14 text-center ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Client Stories
          </span>
          <h2
            className="mt-3 font-bold text-[#232323] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Trusted by ambitious teams
          </h2>
          <p
            className="mt-4 text-[#6B7280] max-w-[480px] mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          >
            Real results from real clients across industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`group flex flex-col gap-5 rounded-2xl border border-[#EAEAEA] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-16px_rgba(29,39,66,0.12)] hover:border-[#EBB771]/40 ${visible ? `animate-fade-up ${staggerClasses[i]}` : "opacity-0"}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-[#EBB771] text-[#EBB771]" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="flex-1 text-[15px] text-[#374151] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-[#EAEAEA]" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "#1D2742" }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
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
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div
          className={`mt-12 rounded-2xl border border-[#EAEAEA] bg-[#F9FAFB] px-8 py-6 flex flex-wrap items-center justify-between gap-6 ${visible ? "animate-fade-up stagger-4" : "opacity-0"}`}
        >
          <p className="text-sm text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Join <span className="font-semibold text-[#232323]">100+ businesses</span> scaling with Hegxcorp across India, USA, UK &amp; Dubai
          </p>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:underline"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See all case studies →
          </a>
        </div>
      </div>
    </section>
  );
}
