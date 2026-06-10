import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

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

const articles = [
  {
    id: 1,
    category: "SEO",
    title: "How to Build a Topical Authority Strategy That Drives Compounding Organic Traffic",
    excerpt:
      "Topical authority is the new ranking factor. Learn how to structure your content so Google sees you as the definitive source in your niche.",
    readTime: "8 min read",
    href: "/blog/topical-authority-strategy",
    date: "Jun 4, 2026",
  },
  {
    id: 2,
    category: "Paid Ads",
    title: "The Google Performance Max Playbook: How We Achieve 5× ROAS for E-Commerce Clients",
    excerpt:
      "PMax campaigns are powerful but misunderstood. Here's our exact setup, asset strategy and bidding approach that consistently outperforms manual campaigns.",
    readTime: "11 min read",
    href: "/blog/pmax-playbook",
    date: "May 28, 2026",
  },
  {
    id: 3,
    category: "CRO",
    title: "5 Landing Page Experiments That Boosted Our Client's Lead Volume by 140%",
    excerpt:
      "Most landing pages fail at the same things. We ran 5 structured A/B tests and found the exact changes that moved the needle significantly.",
    readTime: "7 min read",
    href: "/blog/landing-page-cro-experiments",
    date: "May 19, 2026",
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3"];

export function InsightsSection() {
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
              Growth Insights
            </span>
            <h2
              className="mt-3 font-bold text-[#232323] leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              From our growth lab
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200 shrink-0"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Read all articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <a
              key={a.id}
              href={a.href}
              className={`group flex flex-col rounded-2xl border border-[#EAEAEA] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(29,39,66,0.12)] ${visible ? `animate-fade-up ${staggerClasses[i]}` : "opacity-0"}`}
            >
              {/* Image placeholder — tonal block */}
              <div
                className="h-44 w-full flex items-center justify-center"
                style={{ background: i === 0 ? "#E8F0FE" : i === 1 ? "#FFF4E8" : "#F0FDF4" }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.1em]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: i === 0 ? "#4F7CFF" : i === 1 ? "#FC9C44" : "#22C55E",
                  }}
                >
                  {a.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                {/* Category + date */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {a.category}
                  </span>
                  <span className="text-[#EAEAEA]">·</span>
                  <span
                    className="text-[11px] text-[#9CA3AF]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {a.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[15px] font-bold text-[#232323] leading-snug group-hover:text-[#1D2742] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {a.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm text-[#6B7280] leading-relaxed line-clamp-3 flex-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {a.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mt-2 pt-4 border-t border-[#EAEAEA]">
                  <Clock className="h-3 w-3" />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>{a.readTime}</span>
                  <span className="ml-auto text-[#FC9C44] font-semibold group-hover:gap-2 transition-all">
                    Read →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
