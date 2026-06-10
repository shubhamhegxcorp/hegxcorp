import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1800,
  trigger,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) { setCount(0); return; }
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
      setCount(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return <>{prefix}{count}{suffix}</>;
}

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
    value: 48,
    suffix: "×",
    label: "Average ROAS Delivered",
    description: "Return on ad spend across Google, Meta & programmatic campaigns",
    cta: "Explore PPC results",
    displayOverride: "4.8×",
  },
];

export function ResultsMetricsSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="bg-white"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`mb-14 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Proven Results
          </span>
          <h2
            className="mt-3 font-bold text-[#232323] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Numbers that prove we deliver
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <div
              key={m.id}
              className={`group rounded-2xl p-8 border border-[#EAEAEA] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-16px_rgba(235,183,113,0.35)] hover:border-[#EBB771]/60 ${visible ? `animate-fade-up stagger-${i + 2}` : "opacity-0"}`}
              style={{ background: "#FFF9F0" }}
            >
              {/* Big number */}
              <div
                className="text-[64px] font-black leading-none tracking-tight text-[#1D2742]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {m.displayOverride ? (
                  visible ? m.displayOverride : "0"
                ) : (
                  <AnimatedCounter
                    target={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    trigger={visible}
                    duration={1800}
                  />
                )}
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

              {/* CTA link */}
              <a
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FC9C44] hover:gap-2.5 transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {m.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
