import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Search as SearchIcon, ArrowRight, BookOpen, Sparkles, Mail } from "lucide-react";
import ShapeGrid from "@/components/ShapeGrid";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { getBlogs } from "@/lib/content/blogs";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Growth Lab Insights - SEO, Paid Media & CRO | Hegxcorp" },
      {
        name: "description",
        content:
          "Strategic breakdowns of organic search systems, campaign performance optimization, and high-converting website engineering.",
      },
    ],
  }),
  component: BlogPage,
} as never);

function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const articlesPerPage = 4;

  // Filter categories and tags
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(getBlogs().map((a) => a.category)))];
  }, []);

  const popularTopics = [
    { label: "#TechnicalSEO", searchVal: "Technical SEO" },
    { label: "#CoreWebVitals", searchVal: "Core Web Vitals" },
    { label: "#PerformanceMax", searchVal: "Performance Max" },
    { label: "#GA4", searchVal: "GA4" },
    { label: "#LocalSEO", searchVal: "Local SEO" },
    { label: "#CRO", searchVal: "CRO" },
  ];

  // Filter logic
  const filteredArticles = useMemo(() => {
    return getBlogs().filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const matchesTag =
        !selectedTag ||
        article.title.toLowerCase().includes(selectedTag.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(selectedTag.toLowerCase()) ||
        article.content.toLowerCase().includes(selectedTag.toLowerCase());

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Featured article is always the AI Search Reshaping Traffic one, or the first matching item
  const featuredArticle = useMemo(() => {
    return getBlogs().find((a) => a.slug === "how-ai-search-reshapes-organic-traffic") || getBlogs()[0];
  }, []);

  // Filtered feed (excludes featured article to avoid duplication)
  const feedArticles = useMemo(() => {
    return filteredArticles.filter((a) => a.slug !== featuredArticle.slug);
  }, [filteredArticles, featuredArticle.slug]);

  // Paginated articles
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return feedArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [feedArticles, currentPage, articlesPerPage]);

  const totalPages = Math.ceil(feedArticles.length / articlesPerPage) || 1;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedTag("");
    setCurrentPage(1);
  };

  const handleTagClick = (tagVal: string) => {
    if (selectedTag === tagVal) {
      setSelectedTag(""); // Toggle clear
    } else {
      setSelectedTag(tagVal);
      setSelectedCategory("All"); // Categories off when tags filter
    }
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />

        {/* ── SECTION 1: HERO SECTION ── */}
        <section
          className="relative overflow-hidden bg-white border-b border-[#EAEAEA] flex items-center"
          style={{ minHeight: "50vh", paddingTop: "80px", paddingBottom: "80px" }}
        >
          {/* Hexagon background motif */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none" style={{ opacity: 0.2 }}>
            <ShapeGrid
              shape="hexagon"
              squareSize={38}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={false}
              speed={0.2}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 w-full text-center">
            <div className="max-w-[850px] mx-auto space-y-6">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Sparkles className="h-3 w-3 animate-pulse text-[#FC9C44]" />
                INSIGHTS
              </span>

              <h1
                className="font-bold text-[#232323] leading-[1.05] tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(38px, 5vw, 68px)",
                }}
              >
                Insights From The Field
              </h1>

              <div
                className="max-w-[680px] mx-auto text-[#6B7280] space-y-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.1vw, 18px)" }}
              >
                <p className="leading-relaxed">
                  Research, frameworks, experiments, and growth systems from real-world execution.
                </p>
                <p className="text-sm font-medium text-[#9CA3AF] leading-relaxed">
                  Practical breakdowns of SEO, performance marketing, website architecture, and conversion optimization.
                </p>
              </div>

              <div className="pt-6 flex justify-center gap-4">
                <button
                  onClick={() => {
                    document.getElementById("main-feed")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#1D2742] hover:bg-[#2D3A5D] transition-all cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Browse Articles
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] px-8 py-3.5 text-sm font-semibold text-[#1D2742] bg-[#FAFAF8] hover:bg-[#EAEAEA] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: FEATURED ARTICLE ── */}
        <section className="py-16 md:py-24 bg-[#FAFAF8] border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-12 shadow-sm relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(29,39,66,0.05)] transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Side: Featured Content */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  <span
                    className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    FEATURED ARTICLE
                  </span>

                  <div className="space-y-3">
                    <h2
                      className="text-3xl lg:text-4.5xl font-bold text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors duration-300 leading-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {featuredArticle.title}
                    </h2>
                    <div className="flex items-center gap-4 text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">
                      <span>{featuredArticle.category}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <p
                    className="text-[#6B7280] leading-relaxed text-sm md:text-base font-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: featuredArticle.slug }}
                      className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)] transition-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Mockup Browser */}
                <div className="lg:col-span-7 w-full">
                  <Link to="/blog/$slug" params={{ slug: featuredArticle.slug }} className="block">
                    <motion.div
                      whileHover="hover"
                      className="relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_16px_36px_rgba(29,39,66,0.06)] overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group"
                    >
                      {/* Browser Chrome Header */}
                      <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]">
                        <div className="flex gap-1.5">
                          <motion.span
                            className="h-2.5 w-2.5 rounded-full bg-[#EAEAEA]"
                            variants={{
                              hover: { backgroundColor: "#FC9C44", transition: { delay: 0, duration: 0.2 } },
                            }}
                          />
                          <motion.span
                            className="h-2.5 w-2.5 rounded-full bg-[#EAEAEA]"
                            variants={{
                              hover: { backgroundColor: "#FC9C44", transition: { delay: 0.1, duration: 0.2 } },
                            }}
                          />
                          <motion.span
                            className="h-2.5 w-2.5 rounded-full bg-[#EAEAEA]"
                            variants={{
                              hover: { backgroundColor: "#FC9C44", transition: { delay: 0.2, duration: 0.2 } },
                            }}
                          />
                        </div>

                        {/* Address Bar */}
                        <div className="flex-1 max-w-[280px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate">
                          hegxcorp.com/blog/{featuredArticle.slug}
                        </div>
                      </div>

                      {/* Mockup visual page preview inside browser */}
                      <div className="aspect-video bg-white p-8 flex flex-col justify-between overflow-hidden relative">
                        {/* Soft visual background glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFAF8] via-white to-[#FFF4E8]/20 -z-0" />
                        
                        <div className="relative z-10 space-y-6">
                          <span className="text-[10px] font-bold tracking-widest text-[#FC9C44] uppercase bg-[#FFF4E8] px-3 py-1 rounded">
                            {featuredArticle.category.toUpperCase()}
                          </span>
                          <div className="space-y-3">
                            <div className="h-6 w-[85%] bg-[#1D2742] rounded-md" />
                            <div className="h-6 w-[50%] bg-[#1D2742] rounded-md" />
                          </div>
                          
                          <div className="space-y-2 pt-2">
                            <div className="h-3 w-full bg-[#EAEAEA] rounded" />
                            <div className="h-3 w-[90%] bg-[#EAEAEA] rounded" />
                            <div className="h-3 w-[65%] bg-[#EAEAEA] rounded" />
                          </div>
                        </div>

                        <div className="relative z-10 flex justify-between items-end border-t border-[#FAFAF8] pt-4">
                          <div className="flex items-center gap-3">
                            <span className="h-8 w-8 rounded-full bg-[#FAFAF8] border border-[#EAEAEA] flex items-center justify-center font-bold text-xs text-[#FC9C44]">SS</span>
                            <div>
                              <div className="text-[10px] font-bold text-[#1D2742]">{featuredArticle.author.name}</div>
                              <div className="text-[9px] text-[#9CA3AF]">{featuredArticle.author.role}</div>
                            </div>
                          </div>
                          <div className="text-[10px] font-bold text-[#FC9C44] flex items-center gap-1">
                            Read Article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: EDITORIAL GRID & DISCOVERY PANEL ── */}
        <section id="main-feed" className="py-20 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* LEFT COLUMN: ARTICLES FEED (8 cols) */}
              <div className="lg:col-span-8 space-y-12">
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-5">
                  <h3 className="text-xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedCategory === "All" && !selectedTag ? "Latest Articles" : selectedCategory !== "All" ? `Category: ${selectedCategory}` : `Topic: #${selectedTag}`}
                  </h3>
                  <span className="text-xs font-semibold text-[#6B7280]">
                    Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
                  </span>
                </div>

                {/* Grid layout */}
                {paginatedArticles.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                      {paginatedArticles.map((article) => (
                        <Link
                          key={article.slug}
                          to="/blog/$slug"
                          params={{ slug: article.slug }}
                          className="block"
                        >
                          <motion.div
                            whileHover="hover"
                            className="group flex flex-col h-full rounded-xl border border-[#EAEAEA] bg-white overflow-hidden shadow-sm hover:shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-all duration-300"
                            style={{ transformOrigin: "center" }}
                            variants={{
                              hover: { y: -4 },
                            }}
                          >
                            {/* Browser Mockup Header */}
                            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA]">
                              <div className="flex gap-1">
                                <motion.span
                                  className="h-2 w-2 rounded-full bg-[#EAEAEA]"
                                  variants={{
                                    hover: { backgroundColor: "#FC9C44", transition: { delay: 0, duration: 0.15 } },
                                  }}
                                />
                                <motion.span
                                  className="h-2 w-2 rounded-full bg-[#EAEAEA]"
                                  variants={{
                                    hover: { backgroundColor: "#FC9C44", transition: { delay: 0.08, duration: 0.15 } },
                                  }}
                                />
                                <motion.span
                                  className="h-2 w-2 rounded-full bg-[#EAEAEA]"
                                  variants={{
                                    hover: { backgroundColor: "#FC9C44", transition: { delay: 0.16, duration: 0.15 } },
                                  }}
                                />
                              </div>
                              <div className="flex-1 max-w-[150px] mx-auto bg-white border border-[#EAEAEA] rounded py-0.5 px-2 text-[8px] text-[#9CA3AF] font-mono text-center select-none truncate">
                                text/blog
                              </div>
                            </div>

                            {/* Card Content Top (Simulated Visual Layout) */}
                            <div className="aspect-video bg-[#FAFAF8] p-6 flex flex-col justify-between border-b border-[#EAEAEA] relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFAF8] to-[#FFF4E8]/10" />
                              <div className="relative z-10 space-y-4">
                                <span className="inline-block text-[9px] font-bold text-[#FC9C44] uppercase tracking-wider bg-[#FFF4E8] px-2.5 py-0.5 rounded">
                                  {article.category}
                                </span>
                                <div className="space-y-1.5">
                                  <div className="h-3 w-[90%] bg-[#1D2742]/75 rounded" />
                                  <div className="h-3 w-[60%] bg-[#1D2742]/75 rounded" />
                                </div>
                              </div>
                              <div className="relative z-10 flex justify-between items-center text-[9px] font-semibold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA]/40 pt-3">
                                <span>{article.readTime}</span>
                                <span>{new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                              </div>
                            </div>

                            {/* Card Details Bottom */}
                            <div className="p-6 text-left flex-1 flex flex-col justify-between bg-white">
                              <div className="space-y-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FC9C44]">
                                  {article.category}
                                </span>
                                <h4
                                  className="text-base font-bold text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors duration-200 line-clamp-2 leading-snug"
                                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                  {article.title}
                                </h4>
                                <p
                                  className="text-xs text-[#6B7280] leading-relaxed line-clamp-2"
                                  style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                  {article.excerpt}
                                </p>
                              </div>

                              <div className="pt-5 flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-200 mt-auto">
                                <span>Read Article</span>
                                <motion.span
                                  variants={{
                                    hover: { x: 6 },
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </motion.span>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="border border-dashed border-[#EAEAEA] rounded-xl py-20 text-center space-y-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] mx-auto">
                      <BookOpen className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>No insights found</h4>
                      <p className="text-xs text-[#6B7280]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Try clearing search terms or modifying category selections.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                        setSelectedTag("");
                      }}
                      className="text-xs font-bold text-[#FC9C44] bg-[#FFF4E8] px-4 py-2 rounded-full hover:bg-[#FC9C44] hover:text-white transition-all cursor-pointer"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

                {/* ── PAGINATION ── */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 border-t border-[#EAEAEA] pt-10 mt-6">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous
                    </button>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`h-9 w-9 text-xs font-bold rounded-lg border transition-all ${
                            currentPage === i + 1
                              ? "bg-[#FC9C44] text-white border-[#FC9C44]"
                              : "bg-white text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: STICKY DISCOVERY PANEL (4 cols) */}
              <div className="lg:col-span-4">
                <aside className="space-y-10 lg:sticky lg:top-[120px] lg:h-fit">
                  
                  {/* Search Box */}
                  <div className="space-y-3 text-left">
                    <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Search Insights
                    </h4>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search insights..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-full rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] py-3 pl-10 pr-4 text-xs text-[#232323] outline-none focus:border-[#FC9C44] focus:bg-white transition-all placeholder:text-[#9CA3AF]"
                      />
                      <SearchIcon className="absolute left-3.5 top-3 h-4 w-4 text-[#9CA3AF]" />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="space-y-4 text-left">
                    <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategoryClick(cat)}
                          className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                            selectedCategory === cat
                              ? "bg-[#1D2742] text-white border-[#1D2742]"
                              : "bg-[#FAFAF8] text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]/30 hover:bg-[#FFF4E8]/20"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Topics */}
                  <div className="space-y-4 text-left">
                    <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Popular Topics
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {popularTopics.map((topic) => (
                        <button
                          key={topic.label}
                          onClick={() => handleTagClick(topic.searchVal)}
                          className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                            selectedTag === topic.searchVal
                              ? "bg-[#FC9C44] text-white border-[#FC9C44]"
                              : "bg-white text-[#4A5568] border-[#EAEAEA] hover:border-[#FC9C44]/20 hover:bg-[#FAFAF8]"
                          }`}
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup Card */}
                  <div className="rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-6 text-left relative overflow-hidden">
                    {/* Small visual decoration */}
                    <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#FFF4E8]/40 blur-xl" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
                        <Mail className="h-5 w-5" />
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          Get Weekly Growth Insights
                        </h4>
                        <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Get notified when new guides, frameworks, and digital systems analysis papers go live.
                        </p>
                      </div>

                      <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                        <input
                          type="email"
                          required
                          placeholder="business@email.com"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          className="w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2.5 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all placeholder:text-[#9CA3AF]"
                        />
                        <button
                          type="submit"
                          className="w-full rounded-lg bg-[#FC9C44] py-2.5 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all cursor-pointer"
                        >
                          Subscribe
                        </button>
                      </form>

                      <AnimatePresence>
                        {subscribed && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 text-center mt-2"
                          >
                            ✓ Subscribed! Check your inbox soon.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                </aside>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
