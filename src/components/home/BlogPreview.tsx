import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrowserPreview } from "@/components/site/BrowserPreview";
import aisearch from "@/assets/Blog/How AI Search Changes Rankings.png";
import { useState, useEffect, useMemo } from "react";
import { getPublishedBlogs } from "@/lib/content/blogs";
import type { Blog } from "@/data/blogs";

export function BlogPreview() {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    let active = true;
    getPublishedBlogs()
      .then((result) => {
        if (active) setAllBlogs(result);
      })
      .catch((loadError) => {
        console.error("Failed to load published blogs:", loadError);
      });
    return () => {
      active = false;
    };
  }, []);

  const featuredArticle = useMemo(() => {
    if (allBlogs.length === 0) return null;
    const featuredList = allBlogs.filter((a) => a.featured);
    if (featuredList.length > 0) {
      return featuredList.sort(
        (left, right) =>
          new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
      )[0];
    }
    return allBlogs.find((a) => a.slug === "how-ai-search-reshapes-organic-traffic") || allBlogs[0];
  }, [allBlogs]);

  // Fallbacks if blogs aren't loaded yet
  const title = featuredArticle?.title ?? "How AI Search Changes Rankings";
  const excerpt =
    featuredArticle?.excerpt ??
    "A technical breakdown of semantic search index shifts and how search algorithms evaluate topical authority inside generative answers.";
  const slug = featuredArticle?.slug ?? "how-ai-search-reshapes-organic-traffic";
  const imageSrc = featuredArticle?.featuredImage || aisearch;

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
            <SectionHeading
              tagline="INSIGHTS"
              heading="Ideas, Experiments & Growth Systems"
              description="Practical breakdowns of SEO, paid media, conversion optimisation, and digital growth systems used to help businesses scale."
            />
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

          {/* Editorial Feature Banner */}
          <div className="rounded-2xl border border-[#EAEAEA] bg-white p-8 lg:p-12 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-6 text-left">
                {/* <span
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                </span> */}

                <h3
                  className="text-3xl lg:text-4xl font-bold text-[#1D2742] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {title}
                </h3>

                <p
                  className="text-[#6B7280] leading-relaxed text-sm md:text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: slug }}
                    className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-colors"
                  >
                    View Blog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full">
                <BrowserPreview
                  aspectRatio="video"
                  url="hegxcorp.com/blog"
                  className="w-full shadow-lg"
                >
                  <Link to="/blog/$slug" params={{ slug: slug }}>
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                  </Link>
                </BrowserPreview>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
