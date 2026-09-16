import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe2,
  LayoutDashboard,
  Megaphone,
  Palette,
  Search,
  ShieldCheck,
  ShoppingCart,
  BarChart3,
  Share2,
  PenTool,
  Brush,
  Image,
  Layers,
  Sparkles,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import { DEFAULT_CMS_SECTIONS, type ServiceDirectorySection } from "@/lib/cms-config";

export const serviceDirectoryIconMap: Record<string, LucideIcon> = {
  Code2,
  LayoutDashboard,
  Globe2,
  ShoppingCart,
  Search,
  BarChart3,
  Share2,
  PenTool,
  Palette,
  Brush,
  Image,
  Megaphone,
  ShieldCheck,
  Layers,
  Sparkles,
  Cpu,
};

export function getServiceDirectoryIcon(name?: string, fallback: LucideIcon = Code2): LucideIcon {
  if (!name) return fallback;
  return serviceDirectoryIconMap[name] || fallback;
}

const panelVariants: Variants = {
  exit: { opacity: 0, x: -20, scale: 0.97, transition: { duration: 0.2 } },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 0.68, 0, 1.1] },
  },
  initial: { opacity: 0, x: -20, scale: 0.97 },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.055, ease: "easeOut" },
  }),
};

export function ServiceDirectory() {
  const { data: sectionData } = useWebsiteSection<ServiceDirectorySection>(
    "services.directory",
    DEFAULT_CMS_SECTIONS["services.directory"] as ServiceDirectorySection,
  );

  const categories =
    sectionData?.categories && sectionData.categories.length > 0
      ? sectionData.categories
      : (DEFAULT_CMS_SECTIONS["services.directory"] as ServiceDirectorySection).categories;

  const [activeId, setActiveId] = useState<string>(categories[0]?.id || "development");

  useEffect(() => {
    if (!categories.some((c) => c.id === activeId) && categories.length > 0) {
      setActiveId(categories[0].id);
    }
  }, [categories, activeId]);

  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section className="bg-[#F8F9FC] px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
            {sectionData?.tagline || "Service Directory"}
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#06133D]">
            {sectionData?.heading || "Choose the right digital solution for your next stage."}
          </h2>

          <div className="mt-8 space-y-2 rounded-2xl bg-white p-2 shadow-sm border border-slate-100">
            {categories.map((category) => {
              const Icon = getServiceDirectoryIcon(category.iconName, Code2);
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`group relative flex w-full items-center gap-4 rounded-xl border-l-[3px] py-3 pl-4 pr-3 text-left transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px ${
                    isActive
                      ? "border-l-[#FC9C44] bg-[#FFF8F0]"
                      : "border-l-transparent bg-white hover:border-l-[#FC9C44]/40 hover:bg-[#FFFCF8]"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-[1.08] ${
                      isActive ? "bg-[#06133D] text-[#FC9C44]" : "bg-[#F8F9FC] text-[#06133D]"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        key={activeId}
                        className="flex"
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`relative inline-block text-sm transition-colors duration-200 ease-out ${
                        isActive
                          ? "font-bold text-[#06133D]"
                          : "font-semibold text-slate-500 group-hover:text-[#06133D]"
                      }`}
                    >
                      {category.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#FC9C44] transition-all duration-200 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors duration-200 ease-out ${
                      isActive
                        ? "bg-[#FFF0DC] text-[#FC9C44]"
                        : "bg-slate-100 text-slate-400 group-hover:bg-[#FFF0DC] group-hover:text-[#FC9C44]"
                    }`}
                  >
                    {category.services?.length || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              variants={panelVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="divide-y divide-slate-200"
            >
              {(activeCategory?.services || []).map((service, index) => {
                const Icon = getServiceDirectoryIcon(service.iconName, Palette);

                return (
                  <motion.article
                    key={service.id || service.title}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    className="group relative grid gap-6 py-9 pl-6 pr-6 transition-colors duration-[180ms] ease-out hover:bg-[#FFFAF5] md:grid-cols-[90px_1fr_180px] md:items-center"
                  >
                    <span className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[#FC9C44] transition-transform duration-[180ms] ease-out group-hover:scale-y-100" />

                    <div className="flex items-center gap-4 md:block">
                      <span className="relative flex h-6 w-6 items-center justify-center">
                        <span className="absolute inset-0 scale-0 rounded-full bg-[#FFF0DC] opacity-0 transition-all duration-[180ms] ease-out group-hover:scale-100 group-hover:opacity-100" />
                        <p className="relative text-xs font-bold text-[#FC9C44] transition-transform duration-[180ms] ease-out group-hover:scale-[1.2]">
                          {service.number}
                        </p>
                      </span>

                      <div className="mt-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06133D] shadow-sm transition-all duration-[180ms] ease-out group-hover:scale-110 group-hover:border-[#FC9C44] group-hover:bg-[#FFF4E8] group-hover:text-[#FC9C44] md:mt-5">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black leading-tight text-[#06133D]">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-500">
                        {service.text}
                      </p>
                    </div>

                    <Link
                      to={service.href}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#06133D] transition-all duration-[180ms] ease-out group-hover:border-[#FC9C44] group-hover:bg-[#FFF4E8] group-hover:text-[#FC9C44]"
                    >
                      Learn More
                      <span className="flex transition-transform duration-200 ease-out group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
