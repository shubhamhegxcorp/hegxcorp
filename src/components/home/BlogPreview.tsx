import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrowserPreview } from "@/components/site/BrowserPreview";
import { Skeleton } from "@/components/ui/skeleton";

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
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Coming Soon
                </span>

                <h3
                  className="text-3xl lg:text-4xl font-bold text-[#1D2742] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Insights From The Field
                </h3>

                <p
                  className="text-[#6B7280] leading-relaxed text-sm md:text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We're documenting the SEO frameworks, paid media systems, website optimisation strategies, and growth experiments used across client engagements. Launching soon.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-colors"
                  >
                    Get Updates
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full">
                <BrowserPreview
                  aspectRatio="video"
                  url="hegxcorp.com/insights"
                  className="w-full shadow-lg"
                >
                  <div className="p-8 bg-white h-full flex flex-col justify-center gap-6 select-none">
                    {/* Row 1 */}
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-[75%]" />
                      <Skeleton className="h-2.5 w-[45%]" />
                    </div>
                    {/* Row 2 */}
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-[60%]" />
                      <Skeleton className="h-2.5 w-[35%]" />
                    </div>
                    {/* Row 3 */}
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-[85%]" />
                      <Skeleton className="h-2.5 w-[50%]" />
                    </div>
                  </div>
                </BrowserPreview>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
