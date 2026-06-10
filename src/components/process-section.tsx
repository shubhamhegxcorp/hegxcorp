import { useEffect, useRef, useState } from "react";

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

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We analyse your current digital footprint — SEO health, ad performance, website UX, and competitive landscape — to identify the highest-impact opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We build a 90-day growth roadmap with clear KPIs, channel allocation, and milestones. No generic playbooks — every strategy is bespoke to your business.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our specialist team activates across SEO, paid media, content, and development simultaneously — moving fast without sacrificing quality.",
  },
  {
    num: "04",
    title: "Optimisation",
    desc: "We continuously test, analyse and refine every campaign and touchpoint. Data informs every decision, week over week.",
  },
  {
    num: "05",
    title: "Scale",
    desc: "Once we've found what works, we double down. Proven channels get more budget, winning creative gets expanded, and growth compounds.",
  },
];

export function ProcessSection() {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref}
      style={{
        background: "#F9FAFB",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`mb-14 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            How We Work
          </span>
          <h2
            className="mt-3 font-bold text-[#232323] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            From audit to scale in 5 steps
          </h2>
        </div>

        {/* Desktop: horizontal step nav + content */}
        <div className={`${visible ? "animate-fade-up stagger-2" : "opacity-0"}`}>
          {/* Step selector */}
          <div className="flex gap-1 mb-10 overflow-x-auto pb-2">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-xl px-5 py-3.5 shrink-0 transition-all duration-300 text-left ${
                  active === i
                    ? "bg-[#1D2742] text-white shadow-[0_8px_24px_-8px_rgba(29,39,66,0.4)]"
                    : "bg-white border border-[#EAEAEA] text-[#6B7280] hover:border-[#FC9C44]/40 hover:text-[#232323]"
                }`}
              >
                <span
                  className={`text-xs font-bold ${active === i ? "text-[#EBB771]" : "text-[#FC9C44]"}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div className="rounded-2xl border border-[#EAEAEA] bg-white p-10">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Left */}
              <div className="lg:col-span-2 space-y-4">
                <div
                  className="text-[80px] font-black text-[#EAEAEA] leading-none select-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {steps[active].num}
                </div>
                <h3
                  className="text-2xl font-bold text-[#232323]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {steps[active].title}
                </h3>
                <p
                  className="text-[#6B7280] leading-relaxed max-w-[500px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
                >
                  {steps[active].desc}
                </p>
              </div>
              {/* Right — progress visual */}
              <div className="space-y-2.5">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full shrink-0 transition-all duration-300 ${
                        i <= active ? "bg-[#FC9C44] scale-125" : "bg-[#EAEAEA]"
                      }`}
                    />
                    <div
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        i < active ? "bg-[#FC9C44]" : i === active ? "bg-[#EBB771]" : "bg-[#EAEAEA]"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${i <= active ? "text-[#232323]" : "text-[#9CA3AF]"}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
