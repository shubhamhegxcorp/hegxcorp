import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  MousePointerClick,
  Code2,
  Share2,
  Palette,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    slug: "SEO",
    desc: "Rank where it matters. Sustainable organic growth that compounds over time.",
    href: "/services",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising (PPC)",
    slug: "PPC",
    desc: "Google, Meta & programmatic campaigns engineered for maximum ROAS.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Web Development",
    slug: "WEB",
    desc: "Fast, conversion-optimised websites and web applications built to scale.",
    href: "/services",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    slug: "SMM",
    desc: "Build engaged communities and turn followers into loyal customers.",
    href: "/services",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    slug: "BRAND",
    desc: "Identities, visual systems and creative assets that command attention.",
    href: "/services",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    slug: "CRO",
    desc: "Turn more of your existing traffic into revenue with data-led CRO.",
    href: "/services",
  },
];

export function ServicesGrid() {
  return (
    <section
      className="bg-[#FAFAF8] overflow-hidden"
      style={{
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              tagline="What We Do"
              heading="Services built for growth"
              description="Every service is tied to a business outcome — not just an activity."
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 mb-1"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FC9C44] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(252,156,68,0.65)",
                  boxShadow:
                    "0 0 0 1px rgba(252,156,68,0.20), 0 20px 48px -16px rgba(29,39,66,0.12)",
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                className="rounded-2xl border border-[#EAEAEA] bg-white cursor-pointer"
              >
                <Link to={s.href} className="group relative flex flex-col h-full gap-5 p-7">
                  {/* Slug badge */}
                  <span
                    className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.12em] text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.slug}
                  </span>

                  {/* Icon wrapper — rotates 4° on hover, inverts color */}
                  <motion.span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-[#1D2742]"
                    style={{
                      transformOrigin: "center",
                      border: "1px solid #EAEAEA",
                      backgroundColor: "#FAFAF8",
                    }}
                    whileHover={{
                      rotate: 4,
                      backgroundColor: "#1D2742",
                      borderColor: "#1D2742",
                      transition: { duration: 0.22, ease: "easeOut" },
                    }}
                  >
                    <s.icon
                      className="h-5 w-5 transition-colors duration-200 group-hover:text-white"
                    />
                  </motion.span>

                  {/* Text */}
                  <div className="flex-1">
                    <h3
                      className="text-base font-bold text-[#232323] mb-2 leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* Arrow — slides in from left on group hover */}
                  <div
                    className={[
                      "flex items-center gap-1.5 text-xs font-semibold text-[#FC9C44]",
                      "opacity-0 -translate-x-2",
                      "group-hover:opacity-100 group-hover:translate-x-0",
                      "transition-[opacity,transform] duration-200 ease-out",
                    ].join(" ")}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
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
