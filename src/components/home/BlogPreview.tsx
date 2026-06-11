import { Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";

const articles = [
  {
    id: 1,
    category: "SEO",
    title: "How to Build a Topical Authority Strategy That Drives Compounding Organic Traffic",
    excerpt:
      "Topical authority is the new ranking factor. Learn how to structure your content so Google sees you as the definitive source in your niche.",
    readTime: "8 min read",
    to: "/blog" as const,
    date: "Jun 4, 2026",
  },
  {
    id: 2,
    category: "Paid Ads",
    title: "The Google Performance Max Playbook: How We Achieve 5× ROAS for E-Commerce Clients",
    excerpt:
      "PMax campaigns are powerful but misunderstood. Here's our exact setup, asset strategy and bidding approach that consistently outperforms manual campaigns.",
    readTime: "11 min read",
    to: "/blog" as const,
    date: "May 28, 2026",
  },
  {
    id: 3,
    category: "CRO",
    title: "5 Landing Page Experiments That Boosted Our Client's Lead Volume by 140%",
    excerpt:
      "Most landing pages fail at the same things. We ran 5 structured A/B tests and found the exact changes that moved the needle significantly.",
    readTime: "7 min read",
    to: "/blog" as const,
    date: "May 19, 2026",
  },
];

export function BlogPreview() {
  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Scroll Reveal Container (0.6s, y: 30 -> 0) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-14"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading tagline="Growth Insights" heading="From our growth lab" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 mb-1"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Read all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -4, // -4px lift on hover
                  borderColor: "#FC9C44",
                  boxShadow: "0 16px 40px -16px rgba(29,39,66,0.08)",
                }}
                className="rounded-2xl border border-[#EAEAEA] bg-white cursor-pointer overflow-hidden transition-colors duration-300"
              >
                <Link to={a.to} className="group flex flex-col h-full">
                  {/* Image placeholder — tonal block */}
                  <div
                    className="h-44 w-full flex items-center justify-center select-none"
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
                      <span className="ml-auto text-[#FC9C44] font-semibold group-hover:translate-x-0.5 transition-all">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
