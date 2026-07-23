import { useState } from "react";
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
  type LucideIcon,
} from "lucide-react";

type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "development",
    label: "Development",
    icon: Code2,
    services: [
      {
        number: "01",
        icon: Code2,
        title: "Website Development",
        text: "Fast, responsive, conversion-focused websites built to represent your brand and generate business enquiries.",
        href: "/service/web-dev",
      },
      {
        number: "02",
        icon: LayoutDashboard,
        title: "Custom Web Application",
        text: "Custom dashboards, portals, SaaS products, admin panels, and business web applications.",
        href: "/service/web-app",
      },
      {
        number: "03",
        icon: Globe2,
        title: "WordPress Development",
        text: "Editable WordPress websites, custom themes, WooCommerce stores, plugin setup, speed, and security support.",
        href: "/service/wordpress",
      },
      {
        number: "04",
        icon: ShoppingCart,
        title: "E-Commerce Development",
        text: "Online stores with product pages, cart, checkout, payments, order handling, and conversion-focused shopping flows.",
        href: "/service/e-comm",
      },
    ],
  },
  {
    id: "growth",
    label: "Marketing",
    icon: Megaphone,
    services: [
      {
        number: "05",
        icon: Search,
        title: "SEO Services",
        text: "SEO structure, keyword optimisation, technical fixes, content improvements, and search visibility growth.",
        href: "/service/seo",
      },
      {
        number: "06",
        icon: BarChart3,
        title: "PPC",
        text: "Performance-driven ad campaigns that maximize ROI, generate quality leads, and grow your business faster.",
        href: "/service/ppc",
      },
      {
        number: "07",
        icon: Share2,
        title: "Social Media Marketing",
        text: "Build your brand, engage your audience, and grow your online community across every major platform.",
        href: "/service/social-med",
      },
      {
        number: "08",
        icon: PenTool,
        title: "Content Marketing",
        text: "Create compelling content and brand stories that attract, educate, and convert your ideal customers.",
        href: "/service/content-marketing",
      },
      // {
      //   number: "06",
      //   icon: Megaphone,
      //   title: "Digital Marketing",
      //   text: "Campaign strategy, lead generation, paid ads, social media marketing, and performance tracking.",
      //   href: "/services",
      // },
      // {
      //   number: "07",
      //   icon: Megaphone,
      //   title: "Digital Marketing",
      //   text: "Campaign strategy, lead generation, paid ads, social media marketing, and performance tracking.",
      //   href: "/services",
      // },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    services: [
      {
        number: "09",
        icon: Palette,
        title: "UI/UX Design",
        text: "Clean interfaces, user journeys, wireframes, landing pages, dashboards, and digital product design.",
        href: "/service/ui-ux-design",
      },
      {
        number: "10",
        icon: Brush,
        title: "Branding",
        text: "Craft memorable brand identities with purpose, consistency, and a lasting impression across every touchpoint.",
        href: "/service/branding",
      },
      {
        number: "12",
        icon: Image,
        title: "Graphic Design",
        text: "Creative visuals, marketing assets, and brand graphics that communicate your message with impact.",
        href: "/service/graphic-design",
      },
    ],
  },
  // {
  //   id: "support",
  //   label: "Support",
  //   icon: ShieldCheck,
  //   services: [
  //     {
  //       number: "08",
  //       icon: ShieldCheck,
  //       title: "Website Maintenance",
  //       text: "Updates, bug fixes, backups, security checks, performance improvements, and ongoing support.",
  //       href: "/services",
  //     },
  //   ],
  // },
];

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
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section className="bg-[#F8F9FC] px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
            Service Directory
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-[#06133D]">
            Choose the right digital solution for your next stage.
          </h2>

          <div className="mt-8 space-y-2 rounded-2xl bg-white p-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeId;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`group relative flex w-full items-center gap-4 rounded-xl border-l-[3px] py-3 pl-4 pr-3 text-left transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px ${isActive
                      ? "border-l-[#FC9C44] bg-[#FFF8F0]"
                      : "border-l-transparent bg-white hover:border-l-[#FC9C44]/40 hover:bg-[#FFFCF8]"
                    }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-[1.08] ${isActive ? "bg-[#06133D] text-[#FC9C44]" : "bg-[#F8F9FC] text-[#06133D]"
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
                      className={`relative inline-block text-sm transition-colors duration-200 ease-out ${isActive
                          ? "font-bold text-[#06133D]"
                          : "font-semibold text-slate-500 group-hover:text-[#06133D]"
                        }`}
                    >
                      {category.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#FC9C44] transition-all duration-200 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      />
                    </span>
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors duration-200 ease-out ${isActive
                        ? "bg-[#FFF0DC] text-[#FC9C44]"
                        : "bg-slate-100 text-slate-400 group-hover:bg-[#FFF0DC] group-hover:text-[#FC9C44]"
                      }`}
                  >
                    {category.services.length}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              variants={panelVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="divide-y divide-slate-200"
            >
              {activeCategory.services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
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
                      <h3 className="text-3xl font-black leading-tight text-[#06133D]">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                        {service.text}
                      </p>
                    </div>

                    <Link
                      to={service.href}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#06133D] transition-all duration-[180ms] ease-out group-hover:border-[#FC9C44] group-hover:bg-[#FFF4E8] group-hover:text-[#FC9C44]"
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
