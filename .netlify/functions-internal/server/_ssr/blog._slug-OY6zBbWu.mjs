import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$b, d as getPublishedBlogs, H as Header, F as Footer } from "./router-aQpsgqE2.mjs";
import { S as ShapeGrid } from "./ShapeGrid-DOQi3hzo.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tiptap__extension-image.mjs";
import "../_libs/tiptap__extension-link.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/tiptap__starter-kit.mjs";
import { e as useScroll, d as useSpring, m as motion } from "../_libs/framer-motion.mjs";
import { a3 as ArrowLeft, aj as Clock, ak as Calendar, s as Check, al as Link2, am as Bookmark, i as Mail, A as ArrowRight, r as Sparkles, b5 as Info, b6 as CircleAlert, aF as Lightbulb } from "../_libs/lucide-react.mjs";
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
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function injectHeadingIds(html) {
  const headings = [];
  let index = 0;
  const parsedHtml = html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, content) => {
    const cleanText = content.replace(/<[^>]+>/g, "").trim();
    const id = `toc-heading-${index++}`;
    headings.push({
      id,
      text: cleanText
    });
    if (attrs.includes("id=")) {
      return match;
    }
    return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
  });
  return {
    parsedHtml,
    toc: headings
  };
}
function ContentBlockRenderer({
  blocks
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#4A5568] leading-[1.85] text-base md:text-lg max-w-[720px]", style: {
          fontFamily: "'Inter', sans-serif"
        }, dangerouslySetInnerHTML: {
          __html: block.text
        } }, index);
      case "heading": {
        const HeadingTag = block.level === 2 ? "h2" : "h3";
        const headingClass = block.level === 2 ? "text-2xl md:text-3xl font-bold text-[#1D2742] mt-12 mb-4 scroll-mt-28 border-b border-[#EAEAEA] pb-2" : "text-xl font-bold text-[#1D2742] mt-8 mb-3 scroll-mt-28";
        return /* @__PURE__ */ jsxRuntimeExports.jsx(HeadingTag, { id: slugify(block.text), className: headingClass, style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: block.text }, index);
      }
      case "list":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-6 space-y-3 text-[#4A5568] text-sm md:text-base max-w-[720px]", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: block.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { dangerouslySetInnerHTML: {
          __html: item
        } }, i)) }, index);
      case "quote":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "border-l-4 border-[#FC9C44] pl-6 py-2 my-8 italic text-[#1D2742] font-semibold text-lg max-w-[720px]", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2", children: [
            "“",
            block.text,
            "”"
          ] }),
          block.author && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-[#6B7280] not-italic", children: [
            "— ",
            block.author
          ] })
        ] }, index);
      case "pull-quote":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-10 py-6 border-y border-[#EAEAEA] text-center max-w-[760px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl font-bold text-[#1D2742] italic leading-relaxed", style: {
          fontFamily: "'Space Grotesk', sans-serif"
        }, children: [
          "“",
          block.text,
          "”"
        ] }) }, index);
      case "callout": {
        const variantStyles = {
          info: "bg-blue-50/70 border-blue-200 text-blue-900",
          warning: "bg-amber-50/70 border-amber-200 text-amber-900",
          tip: "bg-[#FFF4E8]/60 border-[#FC9C44]/20 text-[#1D2742]"
        };
        const IconComponent = block.variant === "info" ? Info : block.variant === "warning" ? CircleAlert : Lightbulb;
        const iconColor = block.variant === "info" ? "text-blue-500" : block.variant === "warning" ? "text-amber-600" : "text-[#FC9C44]";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-xl border ${variantStyles[block.variant]} my-6 max-w-[720px] flex items-start gap-4 text-left`, style: {
          fontFamily: "'Inter', sans-serif"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 mt-0.5 ${iconColor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            block.title && /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-sm mb-1 text-[#1D2742]", children: block.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm leading-relaxed", children: block.text })
          ] })
        ] }, index);
      }
      case "statistics":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] my-8 max-w-[720px] flex flex-col md:flex-row items-center gap-6", style: {
          fontFamily: "'Inter', sans-serif"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-black text-[#FC9C44] tracking-tight shrink-0", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: block.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-[#1D2742] text-sm md:text-base leading-tight", children: block.label }),
            block.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6B7280] leading-relaxed", children: block.description })
          ] })
        ] }, index);
      case "image":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-8 space-y-2.5 max-w-[760px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: block.src, alt: block.alt || block.caption, className: "w-full rounded-xl border border-[#EAEAEA] shadow-sm" }),
          block.caption && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#9CA3AF] text-center italic", children: block.caption })
        ] }, index);
      case "divider":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "my-10 border-[#EAEAEA] max-w-[720px]" }, index);
      case "code":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-4 rounded-xl bg-[#1D2742] text-white overflow-x-auto my-6 text-xs max-w-[720px] font-mono leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: block.code }) }, index);
      case "table":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto my-6 border border-[#EAEAEA] rounded-xl max-w-[720px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs md:text-sm text-[#4A5568] border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-[#FAFAF8] border-b border-[#EAEAEA]", children: block.headers.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3.5 font-bold text-[#1D2742]", children: h }, i)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: block.rows.map((row, rowIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-[#EAEAEA]/60 last:border-0 hover:bg-[#FAFAF8]/50 transition-colors", children: row.map((cell, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3.5 font-medium", children: cell }, cellIndex)) }, rowIndex)) })
        ] }) }, index);
      default:
        return null;
    }
  }) });
}
function BlogDetailPage() {
  const {
    article
  } = Route$b.useLoaderData();
  const {
    parsedHtml,
    toc
  } = reactExports.useMemo(() => {
    if (article.blocks) {
      const headings = [];
      article.blocks.forEach((block) => {
        if (block.type === "heading") {
          headings.push({
            id: slugify(block.text),
            text: block.text
          });
        }
      });
      return {
        parsedHtml: "",
        toc: headings
      };
    } else {
      return injectHeadingIds(article.content);
    }
  }, [article]);
  const [activeId, setActiveId] = reactExports.useState("");
  const [readingProgress, setReadingProgress] = reactExports.useState(0);
  const [copied, setCopied] = reactExports.useState(false);
  const [sidebarEmail, setSidebarEmail] = reactExports.useState("");
  const [sidebarSubscribed, setSidebarSubscribed] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  const [relatedArticles, setRelatedArticles] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let active = true;
    getPublishedBlogs().then((all) => {
      if (!active) return;
      setRelatedArticles(all.filter((a) => a.slug !== article.slug).slice(0, 3));
    }).catch((loadError) => {
      console.error("Failed to load related articles:", loadError);
    });
    return () => {
      active = false;
    };
  }, [article.slug]);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  reactExports.useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const offsetTop = window.scrollY + rect.top;
        const currentScroll = window.scrollY - offsetTop;
        const maxScroll = elementHeight - window.innerHeight;
        if (maxScroll > 0) {
          const progress = currentScroll / maxScroll * 100;
          setReadingProgress(Math.min(100, Math.max(0, progress)));
        } else {
          setReadingProgress(window.scrollY > offsetTop ? 100 : 0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      }, {
        rootMargin: "0px 0px -55% 0px",
        threshold: 0.2
      });
      headings.forEach((h) => observer.observe(h));
      return () => {
        headings.forEach((h) => observer.unobserve(h));
      };
    }
  }, [article.slug, toc]);
  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const lenis = window.lenis;
      if (lenis) {
        lenis.scrollTo(element, {
          offset: -110
        });
      } else {
        const yOffset = -110;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
      setActiveId(id);
    }
  };
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const handleSidebarNewsletterSubmit = (e) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setSidebarEmail("");
      setTimeout(() => setSidebarSubscribed(false), 5e3);
    }
  };
  const shareText = encodeURIComponent(article.title);
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage || "",
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "Hegxcorp",
      logo: {
        "@type": "ImageObject",
        url: "https://hegxcorp.com/assets/cropped-hegxcorp-logo-new-web.webp"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hegxcorp.com/blog/${article.slug}`
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdSchema)
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed top-0 left-0 right-0 h-1.5 bg-[#FC9C44] z-50 origin-left", style: {
      scaleX
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-14 md:py-20 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 select-none opacity-[0.08]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShapeGrid, { shape: "hexagon", squareSize: 40, borderColor: "rgba(29,39,66,0.3)", hoverFillColor: "transparent", hoverTrailAmount: 0, staticMode: true, className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[850px] mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
            " Back to Insights"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#FFF4E8] px-2.5 py-1 rounded-md", children: article.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
              " ",
              article.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[#6B7280]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
              new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-[#1D2742] tracking-tight leading-[1.1]", style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(30px, 4.2vw, 52px)"
          }, children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAEAEA]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-xs select-none", children: article.author.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#1D2742]", children: article.author.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#9CA3AF] font-semibold", children: article.author.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-[#6B7280]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold tracking-wider mr-1.5", children: "Share article:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`, target: "_blank", rel: "noopener noreferrer", className: "p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all flex items-center justify-center", "aria-label": "Share on WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", className: "h-3.5 w-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopyLink, className: "p-2 border border-[#EAEAEA] rounded-full hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all relative flex items-center justify-center", "aria-label": "Copy Article Link", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-emerald-600 animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5" }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[850px] mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FF5F56]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#27C93F]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate", children: [
            "hegxcorp.com/blog/",
            article.slug
          ] })
        ] }),
        article.featuredImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: article.featuredImage, alt: article.title, className: "aspect-video w-full object-cover transition-transform duration-500 hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex justify-between items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5", children: "HEGXCORP RESEARCH PAPER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "h-5 w-5 text-white/55" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-[620px] space-y-3.5 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-3.5xl font-bold text-white leading-tight", style: {
            fontFamily: "'Space Grotesk', sans-serif"
          }, children: article.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-white/45 text-[9px] uppercase tracking-wider font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Hegxcorp Systems"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#FC9C44]", children: [
              "Author: ",
              article.author.name
            ] })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 max-w-[850px] mx-auto items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { ref: contentRef, className: "max-w-none", children: article.blocks ? /* @__PURE__ */ jsxRuntimeExports.jsx(ContentBlockRenderer, { blocks: article.blocks }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "article-content", className: "prose prose-slate max-w-none\n                        prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight\n                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2\n                        prose-p:text-[#4A5568] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6\n                        prose-strong:text-[#1D2742] prose-strong:font-bold\n                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]\n                        prose-li:leading-relaxed", style: {
          fontFamily: "'Inter', sans-serif"
        }, dangerouslySetInnerHTML: {
          __html: parsedHtml
        } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-[#FAFAF8] border border-[#EAEAEA] p-3.5 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-10 w-10 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-full w-full -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "16", className: "stroke-[#EAEAEA]", strokeWidth: "3.5", fill: "transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "16", className: "stroke-[#FC9C44] transition-all duration-75", strokeWidth: "3.5", fill: "transparent", strokeDasharray: 2 * Math.PI * 16, strokeDashoffset: 2 * Math.PI * 16 * (1 - readingProgress / 100), strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1D2742]", children: [
                Math.round(readingProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-[#FC9C44] tracking-wider block", children: "Reading Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-[#1D2742]", children: [
                article.readTime,
                " est. time"
              ] })
            ] })
          ] }),
          toc.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-[0.15em] border-b border-[#EAEAEA] pb-2.5", children: "Outline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: toc.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${item.id}`, onClick: (e) => handleTocClick(e, item.id), className: `block text-xs font-semibold leading-relaxed transition-all duration-200 hover:text-[#FC9C44] ${activeId === item.id ? "text-[#FC9C44] border-l-2 border-[#FC9C44] pl-3" : "text-[#9CA3AF] border-l border-[#EAEAEA] pl-3"}`, children: item.text }) }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-white space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-[#1D2742] uppercase tracking-wider", children: "Share Article" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`, target: "_blank", rel: "noopener noreferrer", className: "flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568] hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor", className: "h-3.5 w-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" }) }),
                "WhatsApp"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopyLink, className: "p-2 border border-[#EAEAEA] rounded-lg hover:bg-[#FFF4E8] hover:text-[#FC9C44] transition-all flex items-center justify-center shrink-0", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-emerald-600 animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44] mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "Weekly Industry Reports" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-[#6B7280] leading-relaxed", children: "Deep marketing experiments, performance methodologies, and growth frameworks sent straight to your inbox." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSidebarNewsletterSubmit, className: "space-y-2 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "business@email.com", value: sidebarEmail, onChange: (e) => setSidebarEmail(e.target.value), className: "w-full rounded-lg border border-[#EAEAEA] bg-white px-3 py-2 text-xs text-[#232323] outline-none focus:border-[#FC9C44] transition-all" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-[#FC9C44] py-2 text-xs font-semibold text-white hover:bg-[#E88C35] transition-all", children: "Subscribe" })
            ] }),
            sidebarSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-center", children: "✓ Subscribed successfully!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[#EAEAEA] rounded-xl p-5 bg-[#1D2742] text-white space-y-4 relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.1),transparent_50%)] animate-pulse", style: {
              animationDuration: "6s"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold leading-tight", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: "Need help growing your business?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/70 leading-relaxed", children: "Claim a free manual performance audit of acquisition loops and visual conversion tracks." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "w-full inline-flex justify-center items-center gap-1.5 rounded-lg bg-[#FC9C44] py-2 text-xs font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all", children: [
              "Book Free Growth Audit ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
            ] }) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-[#EAEAEA] bg-[#FAFAF8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[850px] mx-auto space-y-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#EAEAEA] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg select-none shrink-0", children: article.author.name.split(" ").map((n) => n[0]).join("") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-[#1D2742]", style: {
                fontFamily: "'Space Grotesk', sans-serif"
              }, children: article.author.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#9CA3AF] font-semibold", children: article.author.role })
            ] }),
            article.author.bio && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-[#6B7280] leading-relaxed", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: article.author.bio })
          ] })
        ] }),
        relatedArticles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-[#1D2742]", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: "Related Articles" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-xs font-bold text-[#FC9C44] hover:text-[#E88C35] transition-colors uppercase tracking-wider", children: "View All Insights →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: relatedArticles.map((rel) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
            slug: rel.slug
          }, className: "block group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-[#EAEAEA] rounded-xl p-5 flex flex-col h-full hover:shadow-[0_12px_24px_rgba(29,39,66,0.04)] hover:-translate-y-0.5 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-[#FC9C44] uppercase tracking-wider mb-2 block", children: rel.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors line-clamp-2 leading-snug mb-3 flex-1", style: {
              fontFamily: "'Space Grotesk', sans-serif"
            }, children: rel.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9px] text-[#9CA3AF] font-semibold border-t border-[#FAFAF8] pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: rel.readTime }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "group-hover:text-[#FC9C44] transition-colors flex items-center gap-0.5", children: [
                "Read",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-1 transition-transform" })
              ] })
            ] })
          ] }) }, rel.slug)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1D2742] text-white p-8 md:p-12 relative overflow-hidden text-center shadow-lg border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.12),transparent_50%)] animate-pulse", style: {
            animationDuration: "8s"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#FC9C44]/5 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-[620px] mx-auto space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FC9C44]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse text-[#FC9C44]" }),
              "Growth Execution"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold tracking-tight", style: {
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              lineHeight: 1.15
            }, children: "Ready to Grow Your Business?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm text-white/70 leading-relaxed font-normal max-w-[500px] mx-auto", style: {
              fontFamily: "'Inter', sans-serif"
            }, children: "Partner with Hegxcorp to design, build, and optimize scalable acquisition channels, conversion loops, and technical marketing systems." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/free-growth-audit", className: "inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-8 py-3.5 text-sm font-bold text-[#1D2742] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]", children: [
                "Book Free Growth Audit",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all", children: "Contact Us" })
            ] })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogDetailPage as component
};
