import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as getPublishedBlogs, H as Header, F as Footer } from "./router-aQpsgqE2.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { r as Sparkles, A as ArrowRight, g as BookOpen, o as Search, i as Mail } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./createSsrRpc-ET3YHIm-.mjs";
import "./server-DDc6VQK7.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./lead-source-C0KU7OxF.mjs";
import "../_libs/lenis.mjs";
import "./blog-drafts-DUyaO1gc.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./cms-config-CJ9tlu-0.mjs";
import "./contact-inquiries-Y3QmyFha.mjs";
import "../_libs/tiptap__extension-placeholder.mjs";
import "../_libs/tiptap__react.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/tiptap__core.mjs";
import "../_libs/prosemirror-transform.mjs";
import "../_libs/prosemirror-model.mjs";
import "../_libs/orderedmap.mjs";
import "../_libs/prosemirror-commands.mjs";
import "../_libs/prosemirror-state.mjs";
import "../_libs/prosemirror-schema-list.mjs";
import "../_libs/prosemirror-view.mjs";
import "../_libs/prosemirror-keymap.mjs";
import "../_libs/w3c-keyname.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/linkifyjs.mjs";
import "../_libs/prosemirror-dropcursor.mjs";
import "../_libs/prosemirror-gapcursor.mjs";
import "../_libs/prosemirror-history.mjs";
import "../_libs/rope-sequence.mjs";
import "../_libs/tiptap__extension-blockquote.mjs";
import "../_libs/tiptap__extension-bold.mjs";
import "../_libs/tiptap__extension-code.mjs";
import "../_libs/tiptap__extension-code-block.mjs";
import "../_libs/tiptap__extension-document.mjs";
import "../_libs/tiptap__extension-hard-break.mjs";
import "../_libs/tiptap__extension-heading.mjs";
import "../_libs/@tiptap/extension-horizontal-rule+[...].mjs";
import "../_libs/tiptap__extension-italic.mjs";
import "../_libs/tiptap__extension-list.mjs";
import "../_libs/tiptap__extension-paragraph.mjs";
import "../_libs/tiptap__extension-strike.mjs";
import "../_libs/tiptap__extension-text.mjs";
import "../_libs/tiptap__extension-underline.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function BlogPage() {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [selectedTag, setSelectedTag] = reactExports.useState("");
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const [emailInput, setEmailInput] = reactExports.useState("");
  const [allBlogs, setAllBlogs] = reactExports.useState([]);
  const [blogsLoaded, setBlogsLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let active = true;
    getPublishedBlogs().then((result) => {
      if (!active) return;
      setAllBlogs(result);
      setBlogsLoaded(true);
    }).catch((loadError) => {
      console.error("Failed to load published blogs:", loadError);
      if (active) setBlogsLoaded(true);
    });
    return () => {
      active = false;
    };
  }, []);
  const articlesPerPage = 4;
  const categories = reactExports.useMemo(() => {
    return ["All", ...Array.from(new Set(allBlogs.map((a) => a.category)))];
  }, [allBlogs]);
  const popularTopics = [{
    label: "#TechnicalSEO",
    searchVal: "Technical SEO"
  }, {
    label: "#CoreWebVitals",
    searchVal: "Core Web Vitals"
  }, {
    label: "#PerformanceMax",
    searchVal: "Performance Max"
  }, {
    label: "#GA4",
    searchVal: "GA4"
  }, {
    label: "#LocalSEO",
    searchVal: "Local SEO"
  }, {
    label: "#CRO",
    searchVal: "CRO"
  }];
  const filteredArticles = reactExports.useMemo(() => {
    return allBlogs.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesTag = !selectedTag || article.title.toLowerCase().includes(selectedTag.toLowerCase()) || article.excerpt.toLowerCase().includes(selectedTag.toLowerCase()) || article.content.toLowerCase().includes(selectedTag.toLowerCase());
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [allBlogs, searchQuery, selectedCategory, selectedTag]);
  const featuredArticle = reactExports.useMemo(() => {
    const featuredList = allBlogs.filter((a) => a.featured);
    if (featuredList.length > 0) {
      return featuredList.sort((left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime())[0];
    }
    return allBlogs.find((a) => a.slug === "how-ai-search-reshapes-organic-traffic") || allBlogs[0];
  }, [allBlogs]);
  reactExports.useMemo(() => {
    if (!featuredArticle) return [];
    return allBlogs.filter((a) => a.slug !== featuredArticle.slug).slice(0, 4);
  }, [allBlogs, featuredArticle]);
  const feedArticles = reactExports.useMemo(() => {
    return filteredArticles;
  }, [filteredArticles]);
  const paginatedArticles = reactExports.useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return feedArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [feedArticles, currentPage, articlesPerPage]);
  const totalPages = Math.ceil(feedArticles.length / articlesPerPage) || 1;
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5e3);
    }
  };
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedTag("");
    setCurrentPage(1);
  };
  const handleTagClick = (tagVal) => {
    if (selectedTag === tagVal) {
      setSelectedTag("");
    } else {
      setSelectedTag(tagVal);
      setSelectedCategory("All");
    }
    setCurrentPage(1);
  };
  const scrollToLatestArticles = () => {
    window.requestAnimationFrame(() => {
      const target = document.getElementById("latest-articles");
      if (!target) return;
      const headerOffset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  };
  if (!blogsLoaded || !featuredArticle) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center py-40 text-sm font-semibold text-[#6B7280]", children: "Loading articles…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-white border-b border-[#EAEAEA] flex items-center ", style: {
        minHeight: "85vh",
        paddingTop: "80px",
        paddingBottom: "80px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none", style: {
          opacity: 0.2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 38, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: false, speed: 0.2, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid w-full max-w-[1280px] gap-10 px-6 text-center lg:min-h-[500px] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] lg:items-center lg:px-10 lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[720px] space-y-6 lg:mx-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse text-[#FC9C44]" }),
              "INSIGHTS"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-[#232323] leading-[1.05] tracking-tight", style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(38px, 5vw, 68px)"
            }, children: "Insights From The Field" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[680px] text-[#6B7280] lg:mx-0", style: {
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(15px, 1.1vw, 18px)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: "Data-driven marketing strategies. Explore in-depth articles on SEO, performance marketing, website architecture, and conversion optimization to build digital experiences that deliver measurable results." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 pt-4 lg:justify-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                document.getElementById("latest-articles")?.scrollIntoView({
                  behavior: "smooth"
                });
              }, className: "inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#2D3A5D] transition-all cursor-pointer", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "Browse Articles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2.5 rounded-full border border-[#EAEAEA] px-8 py-3.5 text-sm font-semibold text-[#1D2742] bg-[#FAFAF8] hover:bg-[#EAEAEA] transition-all", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "Contact Team" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
            slug: featuredArticle.slug
          }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { className: "overflow-hidden rounded-xl border border-[#EAEAEA] bg-white text-left shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group/image aspect-video overflow-hidden bg-[#FAFAF8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredArticle.featuredImage, alt: featuredArticle.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/text space-y-4 border-t border-[#EAEAEA] p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FC9C44]", children: "Featured Article" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: featuredArticle.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: featuredArticle.readTime })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold leading-tight text-[#1D2742] transition-colors duration-200 group-hover/text:text-[#FC9C44] md:text-2xl", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: featuredArticle.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-sm leading-relaxed text-[#6B7280]", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: featuredArticle.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-bold text-[#1D2742] transition-colors duration-200 group-hover/text:text-[#FC9C44]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Article" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover/text:translate-x-1" })
              ] })
            ] })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "main-feed", className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "latest-articles", className: "scroll-mt-28 lg:col-span-8 space-y-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#EAEAEA] pb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: selectedCategory === "All" && !selectedTag ? "Latest Articles" : selectedCategory !== "All" ? `Category: ${selectedCategory}` : `Topic: #${selectedTag}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-[#6B7280]", children: [
              "Showing ",
              feedArticles.length,
              " ",
              feedArticles.length === 1 ? "article" : "articles"
            ] })
          ] }),
          paginatedArticles.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: paginatedArticles.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
            slug: article.slug
          }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: "hover", className: "group flex flex-col h-full rounded-xl border border-[#EAEAEA] bg-white overflow-hidden shadow-sm hover:shadow-[0_16px_36px_rgba(29,39,66,0.06)] transition-all duration-300", style: {
            transformOrigin: "center"
          }, variants: {
            hover: {
              y: -4
            }
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-2.5 bg-[#FAFAF8] border-b border-[#EAEAEA]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "h-2 w-2 rounded-full bg-[#EAEAEA]", variants: {
                  hover: {
                    backgroundColor: "#FC9C44",
                    transition: {
                      delay: 0,
                      duration: 0.15
                    }
                  }
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "h-2 w-2 rounded-full bg-[#EAEAEA]", variants: {
                  hover: {
                    backgroundColor: "#FC9C44",
                    transition: {
                      delay: 0.08,
                      duration: 0.15
                    }
                  }
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "h-2 w-2 rounded-full bg-[#EAEAEA]", variants: {
                  hover: {
                    backgroundColor: "#FC9C44",
                    transition: {
                      delay: 0.16,
                      duration: 0.15
                    }
                  }
                } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 max-w-[150px] mx-auto bg-white border border-[#EAEAEA] rounded py-0.5 px-2 text-[8px] text-[#9CA3AF] font-mono text-center select-none truncate", children: "text/blog" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden border-b border-[#EAEAEA] bg-[#FAFAF8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: article.previewImage || article.featuredImage, alt: article.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-left flex-1 flex flex-col justify-between bg-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#FC9C44]", children: article.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-[#1D2742] tracking-tight group-hover:text-[#FC9C44] transition-colors duration-200 line-clamp-2 leading-snug", style: {
                  fontFamily: "'Space Grotesk', sans-serif"
                }, children: article.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed line-clamp-2", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: article.excerpt })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-5 flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-200 mt-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Article" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: {
                  hover: {
                    x: 6
                  }
                }, transition: {
                  duration: 0.2
                }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" }) })
              ] })
            ] })
          ] }) }, article.slug)) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-dashed border-[#EAEAEA] rounded-xl py-20 text-center space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4E8] text-[#FC9C44] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "No insights found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280]", style: {
                fontFamily: "'Inter', sans-serif"
              }, children: "Try clearing search terms or modifying category selections." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedTag("");
            }, className: "text-xs font-bold text-[#FC9C44] bg-[#FFF4E8] px-4 py-2 rounded-full hover:bg-[#FC9C44] hover:text-white transition-all cursor-pointer", children: "Clear Filters" })
          ] }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 border-t border-[#EAEAEA] pt-10 mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: currentPage === 1, onClick: () => {
              setCurrentPage((p) => Math.max(1, p - 1));
              scrollToLatestArticles();
            }, className: "px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: "← Previous" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: Array.from({
              length: totalPages
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setCurrentPage(i + 1);
              scrollToLatestArticles();
            }, className: `h-9 w-9 text-xs font-bold rounded-lg border transition-all ${currentPage === i + 1 ? "bg-[#FC9C44] text-white border-[#FC9C44]" : "bg-white text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]"}`, children: i + 1 }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: currentPage === totalPages, onClick: () => {
              setCurrentPage((p) => Math.min(totalPages, p + 1));
              scrollToLatestArticles();
            }, className: "px-4 py-2.5 text-xs font-bold text-[#1D2742] border border-[#EAEAEA] bg-[#FAFAF8] rounded-lg hover:bg-[#EAEAEA] disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: "Next →" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-10 lg:sticky lg:top-[120px] lg:h-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "Search Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search insights...", value: searchQuery, onChange: (e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }, className: "w-full rounded-lg border border-[#EAEAEA] bg-[#FAFAF8] py-3 pl-10 pr-4 text-xs text-[#232323] outline-none focus:border-[#FC9C44] focus:bg-white transition-all placeholder:text-[#9CA3AF]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-3 h-4 w-4 text-[#9CA3AF]" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "Categories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleCategoryClick(cat), className: `px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${selectedCategory === cat ? "bg-[#1D2742] text-white border-[#1D2742]" : "bg-[#FAFAF8] text-[#6B7280] border-[#EAEAEA] hover:border-[#FC9C44]/30 hover:bg-[#FFF4E8]/20"}`, children: cat }, cat)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.1em]", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "Popular Topics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: popularTopics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleTagClick(topic.searchVal), className: `px-3 py-1.5 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${selectedTag === topic.searchVal ? "bg-[#FC9C44] text-white border-[#FC9C44]" : "bg-white text-[#4A5568] border-[#EAEAEA] hover:border-[#FC9C44]/20 hover:bg-[#FAFAF8]"}`, children: topic.label }, topic.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] p-6 text-left relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#FFF4E8]/40 blur-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-[#1D2742]", style: {
                  fontFamily: "'Space Grotesk', sans-serif"
                }, children: "Get Weekly Growth Insights" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed", style: {
                  fontFamily: "'Inter', sans-serif"
                }, children: "Get notified when new guides, frameworks, and digital systems analysis papers go live." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubscribe, className: "space-y-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "business@email.com", value: emailInput, onChange: (e) => setEmailInput(e.target.value), className: "w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2.5 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all placeholder:text-[#9CA3AF]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-[#FC9C44] py-2.5 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all cursor-pointer", children: "Subscribe" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: subscribed && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
                opacity: 0,
                y: 10
              }, animate: {
                opacity: 1,
                y: 0
              }, exit: {
                opacity: 0
              }, className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 text-center mt-2", children: "✓ Subscribed! Check your inbox soon." }) })
            ] })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white px-6 py-20 sm:py-24 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#06133D] px-6 py-14 text-center text-white sm:px-12 sm:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FC9C44]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#3A65FF]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]", children: "Keep Learning With Hegxcorp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl", children: "Want sharper ideas for your next stage of growth?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70", children: "Read more practical insights from our team, or talk with us about turning what you learn into a focused digital plan." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:bg-[#ffad63]", children: [
            "Get a Free Growth Audit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10", children: "Contact Us" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPage as component
};
