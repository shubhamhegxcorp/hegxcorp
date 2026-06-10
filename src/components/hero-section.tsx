import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Users, BarChart3, Zap } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const dashboardMetrics = [
  { label: "Organic Traffic", value: "+310%", icon: TrendingUp, color: "text-emerald-500" },
  { label: "Qualified Leads", value: "+184%", icon: Users, color: "text-blue-500" },
  { label: "ROAS Achieved", value: "4.8×", icon: BarChart3, color: "text-orange-500" },
  { label: "Projects Delivered", value: "300+", icon: Zap, color: "text-violet-500" },
];

export function HeroSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #EAEAEA 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      {/* Right glow accent — very subtle */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle at 80% 20%, #FC9C44 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left — copy */}
          <div className={`space-y-8 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#FC9C44] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" />
              Data-Driven Growth Agency
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-[#232323] leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 5.5vw, 72px)" }}
            >
              Generate More{" "}
              <span className="relative">
                Leads, Sales
                <span
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                  style={{ background: "#FC9C44", bottom: "-4px" }}
                />
              </span>{" "}
              &amp; Revenue
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[520px] text-[#6B7280] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.25vw, 19px)" }}
            >
              SEO, Paid Ads, Websites and Growth Systems designed to scale
              businesses through data-driven strategy and measurable outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)]"
                style={{ background: "#FC9C44" }}
                id="hero-cta-audit"
              >
                Get Free Growth Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] bg-white px-7 py-3.5 text-sm font-semibold text-[#232323] transition-all duration-300 hover:bg-[#FFF4E8] hover:border-[#FC9C44]"
                id="hero-cta-case-studies"
              >
                View Case Studies
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Trusted by 100+ companies across India, USA, Australia &amp; Europe
            </p>
          </div>

          {/* Right — dashboard card */}
          <div className={`${visible ? "animate-fade-up stagger-3" : "opacity-0"}`}>
            <div
              className="relative rounded-2xl border border-[#EAEAEA] bg-white p-6 shadow-[0_20px_60px_-20px_rgba(29,39,66,0.14)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-sm font-semibold text-[#232323]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Growth Dashboard
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">12 months rolling average</div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {dashboardMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-[#EAEAEA] p-4 transition-all duration-200 hover:border-[#FC9C44]/30 hover:bg-[#FFF4E8]/40"
                  >
                    <m.icon className={`h-4 w-4 ${m.color} mb-2`} />
                    <div
                      className="text-2xl font-bold text-[#232323] leading-none"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-[#6B7280] mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Fake sparkline bar chart */}
              <div>
                <div className="flex items-end gap-1 h-14">
                  {[40, 55, 48, 70, 62, 85, 72, 90, 80, 95, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-80"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#FC9C44" : i >= 8 ? "#FCB76A" : "#EAEAEA",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5 text-[10px] text-[#6B7280]">
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
                  <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span>
                  <span>Mar</span><span>Apr</span><span>May</span><span className="text-[#FC9C44] font-semibold">Jun</span>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="mt-4 rounded-lg bg-[#1D2742] px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-white/70">Avg. client revenue growth</span>
                <span className="text-sm font-bold text-[#FC9C44]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  +247% YoY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
