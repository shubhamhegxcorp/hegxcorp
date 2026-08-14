import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/lib/content/blogs";
import { getFeaturedCaseStudies } from "@/lib/content/caseStudies";
import { ContentBlock, type Blog } from "@/data/blogs";
import ShapeGrid from "@/components/ShapeGrid";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  Mail,
  TrendingUp,
  Sparkles,
  Info,
  AlertCircle,
  Lightbulb,
  Check,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Route = createFileRoute("/blog/$slug")({
  // Loader can be async — TanStack Router waits for it before rendering,
  // so this is the right place to hit the database (unlike head/component
  // below, which need the already-resolved loaderData).
  loader: async ({ params }: { params: { slug: string } }) => {
    const article = await getPublishedBlogBySlug(params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  head: ({ params, loaderData }: { params: { slug: string }; loaderData?: { article: Blog } }) => {
    const article = loaderData?.article;
    const title = article ? article.seoTitle : "Insights | Hegxcorp";
    const description = article
      ? article.seoDescription
      : "In-depth growth breakdowns and strategic frameworks from Hegxcorp.";
    const currentUrl = `https://hegxcorp.com/blog/${params.slug}`;
    const ogImage = article
      ? `https://hegxcorp.com${article.featuredImage}`
      : "https://hegxcorp.com/og-default.jpg";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: currentUrl },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: currentUrl }],
    };
  },
  component: BlogDetailPage,
} as never);

interface TocItem {
  id: string;
  text: string;
}

// ── RENDERER FOR DYNAMIC BLOCKS (FUTURE-PROOF CMS LAYOUT) ──
function ContentBlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-[#4A5568] leading-[1.85] text-base md:text-lg max-w-[720px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          case "heading":
            const HeadingTag = block.level === 2 ? "h2" : "h3";
            const headingClass =
              block.level === 2
                ? "text-2xl md:text-3xl font-bold text-[#1D2742] mt-12 mb-4 scroll-mt-28 border-b border-[#EAEAEA] pb-2"
                : "text-xl font-bold text-[#1D2742] mt-8 mb-3 scroll-mt-28";
            return (
              <HeadingTag
                key={index}
                className={headingClass}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {block.text}
              </HeadingTag>
            );
          case "list":
            return (
              <ul
                key={index}
                className="list-disc pl-6 space-y-3 text-[#4A5568] text-sm md:text-base max-w-[720px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-[#FC9C44] pl-6 py-2 my-8 italic text-[#1D2742] font-semibold text-lg max-w-[720px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <p className="mb-2">“{block.text}”</p>
                {block.author && (
                  <span className="text-xs text-[#6B7280] not-italic">— {block.author}</span>
                )}
              </blockquote>
            );
          case "pull-quote":
            return (
              <div
                key={index}
                className="my-10 py-6 border-y border-[#EAEAEA] text-center max-w-[760px] mx-auto"
              >
                <p
                  className="text-xl md:text-2xl font-bold text-[#1D2742] italic leading-relaxed"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  “{block.text}”
                </p>
              </div>
            );
          case "callout":
            const variantStyles = {
              info: "bg-blue-50/70 border-blue-200 text-blue-900",
              warning: "bg-amber-50/70 border-amber-200 text-amber-900",
              tip: "bg-[#FFF4E8]/60 border-[#FC9C44]/20 text-[#1D2742]",
            };
            const IconComponent =
              block.variant === "info"
                ? Info
                : block.variant === "warning"
                  ? AlertCircle
                  : Lightbulb;
            const iconColor =
              block.variant === "info"
                ? "text-blue-500"
                : block.variant === "warning"
                  ? "text-amber-600"
                  : "text-[#FC9C44]";
            return (
              <div
                key={index}
                className={`p-5 rounded-xl border ${variantStyles[block.variant]} my-6 max-w-[720px] flex items-start gap-4 text-left`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className={`shrink-0 mt-0.5 ${iconColor}`}>
                  <IconComponent className="h-5 w-5" />
                </span>
                <div>
                  {block.title && (
                    <h5 className="font-bold text-sm mb-1 text-[#1D2742]">{block.title}</h5>
                  )}
                  <p className="text-xs md:text-sm leading-relaxed">{block.text}</p>
                </div>
              </div>
            );
          case "statistics":
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] my-8 max-w-[720px] flex flex-col md:flex-row items-center gap-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div
                  className="text-4xl md:text-5xl font-black text-[#FC9C44] tracking-tight shrink-0"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {block.value}
                </div>
                <div className="text-left space-y-1">
                  <h5 className="font-bold text-[#1D2742] text-sm md:text-base leading-tight">
                    {block.label}
                  </h5>
                  {block.description && (
                    <p className="text-xs text-[#6B7280] leading-relaxed">{block.description}</p>
                  )}
                </div>
              </div>
            );
          case "image":
            return (
              <div key={index} className="my-8 space-y-2.5 max-w-[760px]">
                <img
                  src={block.src}
                  alt={block.alt || block.caption}
                  className="w-full rounded-xl border border-[#EAEAEA] shadow-sm"
                />
                {block.caption && (
                  <p className="text-xs text-[#9CA3AF] text-center italic">{block.caption}</p>
                )}
              </div>
            );
          case "divider":
            return <hr key={index} className="my-10 border-[#EAEAEA] max-w-[720px]" />;
          case "code":
            return (
              <pre
                key={index}
                className="p-4 rounded-xl bg-[#1D2742] text-white overflow-x-auto my-6 text-xs max-w-[720px] font-mono leading-relaxed"
              >
                <code>{block.code}</code>
              </pre>
            );
          case "table":
            return (
              <div
                key={index}
                className="overflow-x-auto my-6 border border-[#EAEAEA] rounded-xl max-w-[720px]"
              >
                <table className="w-full text-left text-xs md:text-sm text-[#4A5568] border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAF8] border-b border-[#EAEAEA]">
                      {block.headers.map((h, i) => (
                        <th key={i} className="p-3.5 font-bold text-[#1D2742]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-b border-[#EAEAEA]/60 last:border-0 hover:bg-[#FAFAF8]/50 transition-colors"
                      >
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="p-3.5 font-medium">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function BlogDetailPage() {
  // Article now comes from the async route loader (already resolved by the
  // time this component renders) instead of a synchronous getBlogBySlug call.
  const { article } = Route.useLoaderData();

  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [sidebarEmail, setSidebarEmail] = useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Related articles now come from the database + static list together,
  // loaded once on mount since this list isn't available synchronously.
  const [relatedArticles, setRelatedArticles] = useState<Blog[]>([]);

  useEffect(() => {
    let active = true;
    getPublishedBlogs()
      .then((all) => {
        if (!active) return;
        setRelatedArticles(all.filter((a) => a.slug !== article.slug).slice(0, 3));
      })
      .catch((loadError) => {
        console.error("Failed to load related articles:", loadError);
      });
    return () => {
      active = false;
    };
  }, [article.slug]);

  // ── READING PROGRESS & POSITION BAR ──
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const offsetTop = window.scrollY + rect.top;
        const currentScroll = window.scrollY - offsetTop;
        const maxScroll = elementHeight - window.innerHeight;

        if (maxScroll > 0) {
          const progress = (currentScroll / maxScroll) * 100;
          setReadingProgress(Math.min(100, Math.max(0, progress)));
        } else {
          setReadingProgress(window.scrollY > offsetTop ? 100 : 0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find related case studies (max 2)
  const relatedCaseStudies = getFeaturedCaseStudies().slice(0, 2);

  // ── DYNAMIC TABLE OF CONTENTS GENERATOR ──
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const extracted: TocItem[] = [];

      headings.forEach((h, index) => {
        const id = `toc-heading-${index}`;
        h.setAttribute("id", id);
        h.classList.add("scroll-mt-28");
        extracted.push({
          id,
          text: h.textContent || "",
        });
      });

      setToc(extracted);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -55% 0px", threshold: 0.2 },
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

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSidebarNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setSidebarEmail("");
      setTimeout(() => setSidebarSubscribed(false), 5000);
    }
  };

  const shareText = encodeURIComponent(article.title);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  // ── JSON-LD ARTICLE SCHEMA (FOR SEO EXCELLENCE) ──
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `https://hegxcorp.com${article.featuredImage}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Hegxcorp",
      logo: {
        "@type": "ImageObject",
        url: "https://hegxcorp.com/assets/cropped-hegxcorp-logo-new-web.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hegxcorp.com/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Dynamic JSON-LD structured script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#FC9C44] z-50 origin-left"
        style={{ scaleX }}
      />

      <div>
        <Header />

        {/* ── ARTICLE HEADER ── */}
        <header className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-14 md:py-20 text-left">
          {/* Subtle decoration grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none opacity-[0.08]"
          >
            <ShapeGrid
              shape="hexagon"
              squareSize={40}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={true}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[850px] mx-auto space-y-6">
              {/* Back breadcrumb */}
              <div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to Insights
                </Link>
              </div>

              {/* Tag / Category details */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider">
                <span className="bg-[#FFF4E8] px-2.5 py-1 rounded-md">{article.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {article.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#6B7280]">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h1
                className="font-bold text-[#1D2742] tracking-tight leading-[1.1]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(30px, 4.2vw, 52px)",
                }}
              >
                {article.title}
              </h1>

              {/* Excerpt */}
              <p
                className="text-base md:text-lg text-[#6B7280] leading-relaxed font-normal max-w-[780px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {article.excerpt}
              </p>

              {/* Author & Actions Section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAEAEA]">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-xs select-none">
                    {article.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D2742]">{article.author.name}</div>
                    <div className="text-[10px] text-[#9CA3AF] font-semibold">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                {/* Share actions in header */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                  <span className="text-[10px] uppercase font-bold tracking-wider mr-1.5">
                    Share article:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all"
                    aria-label="Share on X"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all relative flex items-center justify-center"
                    aria-label="Copy Article Link"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
                    ) : (
                      <Link2 className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── BROWSER MOCKUP HERO IMAGE ── */}
        <section className="py-8 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[850px] mx-auto">
              <div className="relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden">
                {/* Browser tab bars */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate">
                    hegxcorp.com/blog/{article.slug}
                  </div>
                </div>

                {/* Cover graphic */}
                <div className="aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" />

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5">
                      HEGXCORP RESEARCH PAPER
                    </span>
                    <Bookmark className="h-5 w-5 text-white/55" />
                  </div>

                  <div className="relative z-10 max-w-[620px] space-y-3.5 text-left">
                    <h3
                      className="text-xl md:text-3.5xl font-bold text-white leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-xs md:text-sm text-white/70 font-normal leading-relaxed max-w-[500px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-white/45 text-[9px] uppercase tracking-wider font-semibold">
                    <span>© {new Date().getFullYear()} Hegxcorp Systems</span>
                    <span className="text-[#FC9C44]">Author: {article.author.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TWO-COLUMN ARTICLE ENGINE ── */}
        <main className="py-10 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 max-w-[850px] mx-auto items-start">
              {/* Left Column: Article Body (~70% or 8/12) */}
              <div className="lg:col-span-8 text-left">
                <article ref={contentRef} className="max-w-none">
                  {article.blocks ? (
                    <ContentBlockRenderer blocks={article.blocks} />
                  ) : (
                    <div
                      id="article-content"
                      className="prose prose-slate max-w-none
                        prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2
                        prose-p:text-[#4A5568] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6
                        prose-strong:text-[#1D2742] prose-strong:font-bold
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]
                        prose-li:leading-relaxed"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  )}
                </article>
              </div>

              {/* Right Column: Sticky Sidebar (~30% or 4/12) */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left">
                {/* 1. Progress Indicator & Read time */}
                <div className="flex items-center gap-3 bg-[#FAFAF8] border border-[#EAEAEA] p-3.5 rounded-xl">
                  <div className="relative h-10 w-10 shrink-0">
                    <svg className="h-full w-full -rotate-90">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-[#EAEAEA]"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-[#FC9C44] transition-all duration-75"
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 16}
                        strokeDashoffset={2 * Math.PI * 16 * (1 - readingProgress / 100)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1D2742]">
                      {Math.round(readingProgress)}%
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-[#FC9C44] tracking-wider block">
                      Reading Progress
                    </span>
                    <span className="text-xs font-semibold text-[#1D2742]">
                      {article.readTime} est. time
                    </span>
                  </div>
                </div>

                {/* 2. Table of Contents (Desktop Only) */}
                {toc.length > 0 && (
                  <div className="hidden lg:block border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4">
                    <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-[0.15em] border-b border-[#EAEAEA] pb-2.5">
                      Outline
                    </h4>
                    <ul className="space-y-3">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={`block text-xs font-semibold leading-relaxed transition-all duration-200 hover:text-[#FC9C44] ${activeId === item.id
                                ? "text-[#FC9C44] border-l-2 border-[#FC9C44] pl-3"
                                : "text-[#9CA3AF] border-l border-[#EAEAEA] pl-3"
                              }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 3. Share actions */}
                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-white space-y-3">
                  <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-wider">
                    Share Article
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568] hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all"
                    >
                      <Twitter className="h-3.5 w-3.5" /> X
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568] hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="p-2 border border-[#EAEAEA] rounded-lg hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all flex items-center justify-center shrink-0"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-600 animate-pulse" />
                      ) : (
                        <Link2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* 4. Newsletter Sign Up */}
                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4 relative overflow-hidden">
                  <div className="space-y-1 relative z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44] mb-2">
                      <Mail className="h-4 w-4" />
                    </div>
                    <h4
                      className="text-sm font-bold text-[#1D2742]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Weekly Industry Reports
                    </h4>
                    <p className="text-[11px] text-[#6B7280] leading-relaxed">
                      Deep marketing experiments, performance methodologies, and growth frameworks
                      sent straight to your inbox.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSidebarNewsletterSubmit}
                    className="space-y-2 relative z-10"
                  >
                    <input
                      type="email"
                      required
                      placeholder="business@email.com"
                      value={sidebarEmail}
                      onChange={(e) => setSidebarEmail(e.target.value)}
                      className="w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#FC9C44] py-2 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all"
                    >
                      Subscribe
                    </button>
                  </form>
                  {sidebarSubscribed && (
                    <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-center">
                      ✓ Subscribed successfully!
                    </div>
                  )}
                </div>

                {/* 5. Business Growth CTA */}
                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-[#1D2742] text-white space-y-4 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.1),transparent_50%)] animate-pulse"
                    style={{ animationDuration: "6s" }}
                  />
                  <div className="space-y-1.5 relative z-10">
                    <h4
                      className="text-sm font-bold leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Need help growing your business?
                    </h4>
                    <p className="text-[11px] text-white/70 leading-relaxed">
                      Claim a free manual performance audit of acquisition loops and visual
                      conversion tracks.
                    </p>
                  </div>
                  <div className="relative z-10 pt-1">
                    <Link
                      to="/free-growth-audit"
                      className="w-full inline-flex justify-center items-center gap-1.5 rounded-lg bg-[#FC9C44] py-2 text-xs font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all"
                    >
                      Book Free Growth Audit <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        {/* ── END OF ARTICLE SECTION ── */}
        <section className="py-12 border-t border-[#EAEAEA] bg-[#FAFAF8]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[850px] mx-auto space-y-14">
              {/* 1. Author Card */}
              <div className="bg-white border border-[#EAEAEA] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left shadow-sm">
                <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg select-none shrink-0">
                  {article.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div className="space-y-3">
                  <div>
                    <h4
                      className="text-base font-bold text-[#1D2742]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {article.author.name}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] font-semibold">{article.author.role}</p>
                  </div>
                  {article.author.bio && (
                    <p
                      className="text-xs md:text-sm text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {article.author.bio}
                    </p>
                  )}
                </div>
              </div>

              {/* 2. Related Case Studies */}
              {relatedCaseStudies.length > 0 && (
                <div className="space-y-6 text-left">
                  <h3
                    className="text-xl font-bold text-[#1D2742]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Visual Proof: Related Case Studies
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedCaseStudies.map((cs) => (
                      <Link
                        key={cs.slug}
                        to="/case-studies/$slug"
                        params={{ slug: cs.slug }}
                        className="group block"
                      >
                        <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider bg-[#FFF4E8] px-2.5 py-1 rounded">
                                {cs.industry}
                              </span>
                              <span className="text-2xl font-black text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors">
                                {cs.metricValue}
                              </span>
                            </div>
                            <div>
                              <h4
                                className="text-base font-bold text-[#1D2742] leading-snug group-hover:text-[#FC9C44] transition-colors mb-1.5"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                              >
                                {cs.client}
                              </h4>
                              <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                                {cs.summary}
                              </p>
                            </div>
                          </div>
                          <div className="text-[10px] font-bold text-[#FC9C44] flex items-center gap-1 mt-6 border-t border-[#FAFAF8] pt-4">
                            View Case Study{" "}
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="space-y-6 text-left">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-xl font-bold text-[#1D2742]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Related Articles
                    </h3>
                    <Link
                      to="/blog"
                      className="text-xs font-bold text-[#FC9C44] hover:text-[#E88C35] transition-colors uppercase tracking-wider"
                    >
                      View All Insights →
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        to="/blog/$slug"
                        params={{ slug: rel.slug }}
                        className="block group"
                      >
                        <div className="bg-white border border-[#EAEAEA] rounded-xl p-5 flex flex-col h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                          <span className="text-[9px] font-bold text-[#FC9C44] uppercase tracking-wider mb-2 block">
                            {rel.category}
                          </span>
                          <h4
                            className="text-sm font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors line-clamp-2 leading-snug mb-3 flex-1"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {rel.title}
                          </h4>
                          <div className="flex justify-between items-center text-[9px] text-[#9CA3AF] font-semibold border-t border-[#FAFAF8] pt-3">
                            <span>{rel.readTime}</span>
                            <span className="group-hover:text-[#FC9C44] transition-colors flex items-center gap-0.5">
                              Read{" "}
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Final CTA */}
              <div className="rounded-2xl bg-[#1D2742] text-white p-8 md:p-12 relative overflow-hidden text-center shadow-lg border border-white/5">
                {/* Background glow effects */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.12),transparent_50%)] animate-pulse"
                  style={{ animationDuration: "8s" }}
                />
                <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#FC9C44]/5 blur-2xl" />

                <div className="relative z-10 max-w-[620px] mx-auto space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FC9C44]">
                    <Sparkles className="h-3 w-3 animate-pulse text-[#FC9C44]" />
                    Growth Execution
                  </span>

                  <h2
                    className="font-bold tracking-tight"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(26px, 3.5vw, 44px)",
                      lineHeight: 1.15,
                    }}
                  >
                    Ready to Grow Your Business?
                  </h2>

                  <p
                    className="text-xs md:text-sm text-white/70 leading-relaxed font-normal max-w-[500px] mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Partner with Hegxcorp to design, build, and optimize scalable acquisition
                    channels, conversion loops, and technical marketing systems.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center pt-2">
                    <Link
                      to="/free-growth-audit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-8 py-3.5 text-sm font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]"
                    >
                      Book Free Growth Audit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}