import { useEffect, useRef, useState } from "react";
import { Target, GitMerge, BarChart2, Users, Database } from "lucide-react";

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

const pillars = [
  {
    icon: Target,
    title: "Strategy First",
    desc: "Every engagement starts with a deep audit of your business, goals and competitive landscape — before a single ad is run or keyword targeted.",
  },
  {
    icon: GitMerge,
    title: "Full Funnel Growth",
    desc: "We don't just drive traffic. We optimise every touchpoint from awareness to conversion to retention, so growth compounds.",
  },
  {
    icon: BarChart2,
    title: "Transparent Reporting",
    desc: "No black boxes. Real-time dashboards, weekly updates and monthly strategy calls so you always know exactly where your budget is going.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "You get a senior strategist, specialist practitioners and an account lead — not a junior coordinator managing your account from a playbook.",
  },
  {
    icon: Database,
    title: "Data-Driven Decisions",
    desc: "Every decision is backed by data. We test, measure, learn and iterate — turning insights into competitive advantages.",
  },
];

const staggerClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5"];

export function WhyHegxcorpSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="bg-white"
      style={{ paddingTop: "clamp(64px, 8vw, 120px)", paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className={`max-w-[640px] mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Why Hegxcorp
          </span>
          <h2
            className="mt-3 font-bold text-[#232323] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Built differently from most agencies
          </h2>
          <p
            className="mt-4 text-[#6B7280] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px" }}
          >
            We're not a traditional marketing agency. We operate as a growth partner — embedded in your team and accountable to your business outcomes.
          </p>
        </div>

        {/* Pillars — horizontal desktop, vertical mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#EAEAEA] border border-[#EAEAEA] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group flex flex-col gap-5 bg-white p-7 transition-colors duration-300 hover:bg-[#FFF4E8] ${visible ? `animate-fade-up ${staggerClasses[i]}` : "opacity-0"}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAEAEA] bg-[#F9FAFB] text-[#1D2742] transition-all duration-300 group-hover:bg-[#FC9C44] group-hover:text-white group-hover:border-transparent">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3
                  className="font-bold text-[#232323] leading-snug mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
