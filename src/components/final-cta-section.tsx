import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";

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

export function FinalCtaSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      style={{
        background: "#1D2742",
        paddingTop: "clamp(72px, 9vw, 140px)",
        paddingBottom: "clamp(72px, 9vw, 140px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className={`${visible ? "animate-fade-up" : "opacity-0"}`}>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[#EBB771]/30 bg-[#EBB771]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#EBB771]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Free Strategy Call · No Commitment
            </span>
          </div>

          {/* Headline */}
          <h2
            className={`font-bold text-white leading-tight ${visible ? "animate-fade-up stagger-1" : "opacity-0"}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Ready to grow your business?
          </h2>

          {/* Sub */}
          <p
            className={`text-white/65 max-w-[560px] mx-auto leading-relaxed ${visible ? "animate-fade-up stagger-2" : "opacity-0"}`}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.2vw, 18px)" }}
          >
            Book a 30-minute strategy call with our team. We'll audit your current growth stack, identify your biggest opportunities, and give you a prioritised action plan — completely free.
          </p>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 justify-center pt-2 ${visible ? "animate-fade-up stagger-3" : "opacity-0"}`}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-[#1D2742] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-8px_rgba(252,156,68,0.55)]"
              style={{ background: "#FC9C44", fontFamily: "'Inter', sans-serif" }}
              id="final-cta-strategy-call"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              style={{ fontFamily: "'Inter', sans-serif" }}
              id="final-cta-free-audit"
            >
              Get Free Growth Audit
            </a>
          </div>

          {/* Micro trust signal */}
          <p
            className={`text-xs text-white/35 pt-2 ${visible ? "animate-fade-up stagger-4" : "opacity-0"}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            No spam. No pushy sales pitch. Just real strategic value.
          </p>
        </div>
      </div>
    </section>
  );
}
