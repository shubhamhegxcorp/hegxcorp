import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { blogArticles, BlogArticle } from "@/data/blogArticles";
import ShapeGrid from "@/components/ShapeGrid";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Bookmark } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const article = blogArticles.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ params }: { params: { slug: string } }) => {
    const article = blogArticles.find((a) => a.slug === params.slug);
    return {
      meta: [
        { title: article ? `${article.title} | Hegxcorp Insights` : "Insights | Hegxcorp" },
        {
          name: "description",
          content: article ? article.excerpt : "In-depth growth breakdowns and strategic frameworks from Hegxcorp.",
        },
      ],
    };
  },
  component: BlogDetailPage,
} as never);

interface TocItem {
  id: string;
  text: string;
}

function BlogDetailPage() {
  const { slug } = useParams({ strict: false });
  const article = blogArticles.find((a) => a.slug === slug);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  if (!article) {
    return null;
  }

  // ── READING PROGRESS BAR ──
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Find related articles (max 3, excluding current article)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // ── GENERATE TABLE OF CONTENTS DYNAMICALLY ──
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2");
      const extracted: TocItem[] = [];

      headings.forEach((h, index) => {
        const id = `toc-heading-${index}`;
        h.setAttribute("id", id);
        h.classList.add("scroll-mt-28"); // Offset for sticky header
        extracted.push({
          id,
          text: h.textContent || "",
        });
      });

      setToc(extracted);

      // Intersection Observer to track active section
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
      );

      headings.forEach((h) => observer.observe(h));

      return () => {
        headings.forEach((h) => observer.unobserve(h));
      };
    }
  }, [article.slug]);

  const handleTocClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Scroll-tracked Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#FC9C44] z-50 origin-left"
        style={{ scaleX }}
      />

      <div>
        <Header />

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-16 md:py-24">
          {/* Hexagon background motif */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none" style={{ opacity: 0.1 }}>
            <ShapeGrid
              shape="hexagon"
              squareSize={42}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={true}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
            {/* Back to Blog link */}
            <div className="mb-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Insights
              </Link>
            </div>

            <div className="max-w-[960px] mx-auto text-left space-y-6">
              {/* Meta tags */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider">
                <span className="bg-[#FFF4E8] px-2.5 py-1 rounded">{article.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
              </div>

              {/* Title */}
              <h1
                className="font-bold text-[#1D2742] tracking-tight leading-[1.1]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                }}
              >
                {article.title}
              </h1>

              {/* Author & Date Card */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#EAEAEA] mt-6">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[#FC9C44] text-white flex items-center justify-center font-bold text-sm">
                    {article.author.name.split(" ").map(n => n[0]).join("")}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D2742]">{article.author.name}</div>
                    <div className="text-[10px] text-[#9CA3AF] font-medium">{article.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                  <Calendar className="h-4 w-4 text-[#9CA3AF]" />
                  Published {article.publishedDate}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED IMAGE MOCKUP ── */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[960px] mx-auto">
              <div className="relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden">
                {/* Browser Chrome Header */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate">
                    {article.url}
                  </div>
                </div>

                {/* Mockup screen inside browser */}
                <div className="aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-12 flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" />
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5">
                      HEGXCORP RESEARCH
                    </span>
                    <Bookmark className="h-5 w-5 text-white/55" />
                  </div>

                  <div className="relative z-10 max-w-[640px] space-y-4 text-left">
                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/70 font-normal leading-relaxed max-w-[500px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      © {new Date().getFullYear()} Hegxcorp Consultancy
                    </span>
                    <span className="text-[10px] font-semibold text-[#FC9C44] uppercase tracking-wider">
                      Author: {article.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE CONTENT & TABLE OF CONTENTS ── */}
        <section className="py-12 bg-white pb-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 max-w-[960px] mx-auto">
              
              {/* Left Column: Sticky Table of Contents (3 cols) */}
              {toc.length > 0 && (
                <div className="hidden lg:block lg:col-span-3">
                  <nav className="sticky top-28 space-y-4 text-left">
                    <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-[0.15em] border-b border-[#EAEAEA] pb-3">
                      Table of Contents
                    </h4>
                    <ul className="space-y-3">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={`block text-xs font-semibold leading-relaxed transition-all duration-200 hover:text-[#FC9C44] ${
                              activeId === item.id
                                ? "text-[#FC9C44] border-l-2 border-[#FC9C44] pl-3"
                                : "text-[#9CA3AF] border-l border-[#EAEAEA] pl-3"
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Right Column: Long-form article text (9 cols or full grid if no ToC) */}
              <div className={`${toc.length > 0 ? "lg:col-span-9" : "lg:col-span-12"} text-left`}>
                <article
                  id="article-content"
                  ref={contentRef}
                  className="prose prose-slate max-w-[760px] mx-auto 
                    prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2
                    prose-p:text-[#4A5568] prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
                    prose-strong:text-[#1D2742] prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]
                    prose-li:leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Growth Audit CTA */}
                <div className="mt-16 p-8 rounded-xl bg-[#1D2742] relative overflow-hidden text-left shadow-lg text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.12),transparent_50%)]" />
                  <div className="relative z-10 space-y-6 max-w-[620px]">
                    <span className="text-[10px] font-bold text-[#FC9C44] tracking-widest uppercase bg-[#FC9C44]/10 px-3 py-1 rounded">
                      Strategy Execution
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Need help implementing these strategies?
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Our consultancy helps enterprise and high-growth brands engineering scalable SEO architectures, conversion rate pipelines, and paid acquisition funnels.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <Link
                        to="/free-growth-audit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3 text-xs font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all"
                      >
                        Get Free Growth Audit
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold hover:bg-white/10 transition-all"
                      >
                        Schedule Strategy Call
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-[#FAFAF8] border-t border-b border-[#EAEAEA]">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <div className="max-w-[960px] mx-auto space-y-12">
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                  <h3 className="text-xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Related Articles
                  </h3>
                  <Link
                    to="/blog"
                    className="text-xs font-bold text-[#FC9C44] hover:text-[#E88C35] transition-colors"
                  >
                    View All Articles →
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      to="/blog/$slug"
                      params={{ slug: rel.slug }}
                      className="block h-full group"
                    >
                      <div className="bg-white border border-[#EAEAEA] rounded-xl p-5 flex flex-col h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] transition-all duration-300">
                        <span className="text-[9px] font-bold text-[#FC9C44] uppercase tracking-wider mb-2 block">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors line-clamp-2 leading-snug mb-3 flex-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {rel.title}
                        </h4>
                        <div className="flex justify-between items-center text-[9px] text-[#9CA3AF] font-semibold border-t border-[#FAFAF8] pt-3">
                          <span>{rel.readTime}</span>
                          <span className="group-hover:text-[#FC9C44] transition-colors flex items-center gap-0.5">
                            Read <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

      </div>

      <Footer />
    </div>
  );
}
