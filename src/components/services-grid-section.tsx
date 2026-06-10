import { useEffect, useRef, useState } from "react";
import {
  Search, MousePointerClick, Code2, Share2, Palette, TrendingUp, ArrowRight,
} from "lucide-react";

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

const services = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    slug: "SEO",
    desc: "Rank where it matters. Sustainable organic growth that compounds over time.",
    href: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising (PPC)",
    slug: "PPC",
    desc: "Google, Meta & programmatic campaigns engineered for maximum ROAS.",
    href: "/services/ppc",
  },
  {
    icon: Code2,
    title: "Web Development",
    slug: "WEB",
    desc: "Fast, conversion-optimised websites and web applications built to scale.",
    href: "/services/web-development",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    slug: "SMM",
    desc: "Build engaged communities and turn followers into loyal customers.",
    href: "/services/social-media",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    slug: "BRAND",
    desc: "Identities, visual systems and creative assets that command attention.",
    href: "/services/branding",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    slug: "CRO",
    desc: "Turn more of your existing traffic into revenue with data-led CRO.",
    href: "/services/cro",
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6"];

export function ServicesGridSection() {
  const { ref, visible } = useReveal();

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
        <div className={`mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              What We Do
            </span>
            <h2
              className="mt-3 font-bold text-[#232323] leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Services built for growth
            </h2>
            <p
              className="mt-3 text-[#6B7280] max-w-[460px] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
            >
              Every service is tied to a business outcome — not just an activity.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200 shrink-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore all services <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <a
              key={s.slug}
              href={s.href}
              className={`group relative flex flex-col gap-5 rounded-2xl border border-[#EAEAEA] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FC9C44]/30 hover:shadow-[0_16px_40px_-16px_rgba(29,39,66,0.14)] ${visible ? `animate-fade-up ${staggerClasses[i]}` : "opacity-0"}`}
            >
              {/* Slug badge */}
              <span
                className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.12em] text-[#FC9C44]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.slug}
              </span>

              {/* Icon */}
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-[#F9FAFB] text-[#1D2742] transition-all duration-300 group-hover:bg-[#1D2742] group-hover:text-white group-hover:border-[#1D2742]">
                <s.icon className="h-5 w-5" />
              </span>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-base font-bold text-[#232323] mb-2 leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FC9C44] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
