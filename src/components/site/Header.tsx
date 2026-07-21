import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Globe,
  Phone,
  Menu,
  X,
  Code2,
  ShoppingCart,
  LayoutTemplate,
  Layers,
  Search,
  MousePointerClick,
  Share2,
  PenLine,
  Palette,
  Sparkles,
  TrendingUp,
  Image as ImageIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import logoAsset from "@/assets/cropped-hegxcorp-logo-new-web.webp";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ServiceItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  href: string;
};

const serviceColumns: { heading: string; items: ServiceItem[] }[] = [
  {
    heading: "Development",
    items: [
      {
        icon: Code2,
        title: "Web Development",
        desc: "Scalable, modern websites",
        href: "/service/web-dev",
      },
      {
        icon: Layers,
        title: "Custom Web Applications",
        desc: "Tailored platforms",
        href: "/service/web-app",
      },
      {
        icon: LayoutTemplate,
        title: "WordPress Development",
        desc: "Premium WP builds",
        href: "/service/wordpress",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce Development",
        desc: "Stores that convert",
        href: "/service/e-comm",
      },
    ],
  },
  {
    heading: "Marketing",
    items: [
      { icon: Search, title: "SEO", desc: "Rank where it matters", href: "/service/seo" },
      {
        icon: MousePointerClick,
        title: "PPC",
        desc: "Performance ad campaigns",
        href: "/service/ppc",
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        desc: "Engage & grow",
        href: "/service/social-med",
      },
      {
        icon: PenLine,
        title: "Content Marketing",
        desc: "Stories that scale",
        href: "/service/content-marketing",
      },
    ],
  },
  {
    heading: "Design",
    items: [
      {
        icon: Palette,
        title: "UI/UX Design",
        desc: "Human-centered design",
        href: "/service/ui-ux-design",
      },
      {
        icon: Sparkles,
        title: "Branding",
        desc: "Identities with intent",
        href: "/service/branding",
      },
      {
        icon: ImageIcon,
        title: "Graphic Design",
        desc: "Visual storytelling",
        href: "/service/graphic-design",
      },
    ],
  },
];

const countries = [
  { code: "in", flag: "IN", name: "India", region: "hegxcorp.in", domain: "https://hegxcorp.in" },
  {
    code: "us",
    flag: "US",
    name: "United States",
    region: "hegxcorp.us",
    domain: "https://hegxcorp.us",
  },
  {
    code: "uk",
    flag: "UK",
    name: "United Kingdom",
    region: "hegxcorp.uk",
    domain: "https://hegxcorp.uk",
  },
  { code: "ae", flag: "AE", name: "Dubai", region: "hegxcorp.ae", domain: "https://hegxcorp.ae" },
];

const navLinks = [
  { label: "Case Studies", to: "/case-studies" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

function StatCounter({
  target,
  suffix = "",
  duration = 1200,
  trigger,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smoother counter animation: easeOutQuad
      const easedProgress = progress * (2 - progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState("in");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false);
  const [hasMegaOpened, setHasMegaOpened] = useState(false);

  useEffect(() => {
    if (megaOpen) {
      setHasMegaOpened(true);
    }
  }, [megaOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const active = countries.find((c) => c.code === activeCountry)!;

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block bg-[#1D2742] text-white/80 text-xs">
        <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-white/60" />
            <span className="font-medium tracking-wide text-white/90">Global Presence:</span>
            <span className="text-white/60">India • USA • Australia • Europe</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">24/7 Support</span>
            <span className="text-white/20">|</span>
            <a
              href="tel:+918369207836"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 836 920 7836
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white border-b border-[#EAEAEA]/60 transition-all duration-300",
          scrolled && "shadow-[0_4px_24px_-12px_rgba(17,24,39,0.12)]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-300",
            scrolled ? "h-[65px]" : "h-[90px]",
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="HEXGCORP home">
            <img
              src={logoAsset}
              alt="HEXGCORP"
              className={cn("w-auto transition-all duration-300", scrolled ? "h-11" : "h-[54px]")}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services with mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                to="/services"
                className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]"
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    megaOpen && "rotate-180",
                  )}
                />
                <span className="absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              {/* Mega menu */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[1180px] max-w-[calc(100vw-3rem)]",
                  "transition-all duration-200",
                  megaOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none",
                )}
              >
                <div className="rounded-2xl border border-[#EAEAEA]/60 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(17,24,39,0.18)]">
                  <div className="grid grid-cols-4 gap-6">
                    {serviceColumns.map((col) => (
                      <div key={col.heading}>
                        <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]">
                          {col.heading}
                        </h4>
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                to={item.href}
                                className="group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-300 hover:bg-[#FFF4E8] hover:-translate-y-[3px]"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white border border-[#EAEAEA] text-foreground/70 group-hover:text-[#FC9C44] group-hover:border-[#FC9C44]/25 transition-all duration-200">
                                  <item.icon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-medium text-foreground">
                                    {item.title}
                                  </span>
                                  <span className="block text-xs text-muted-foreground">
                                    {item.desc}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Featured card */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={megaOpen ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4 }}
                      className="rounded-xl bg-[#FC9C44] p-6 text-white flex flex-col justify-between"
                    >
                      <div className="space-y-5">
                        {/* Primary Statistic */}
                        <div className="space-y-1">
                          <div className="text-5xl font-black tracking-tight text-white leading-none">
                            <StatCounter target={300} suffix="+" trigger={hasMegaOpened} />
                          </div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/60">
                            Projects Delivered
                          </div>
                        </div>

                        {/* Headline & Description */}
                        <div className="space-y-2">
                          <h5 className="text-base font-bold leading-snug">
                            Building Modern Digital Experiences
                          </h5>
                          <p className="text-xs text-white/75 leading-relaxed font-normal">
                            We help businesses build scalable websites, digital products, and
                            growth-focused solutions that drive measurable results.
                          </p>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="w-full mt-6"
                      >
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-xs xl:text-sm font-semibold text-foreground hover:bg-white/90 transition-colors whitespace-nowrap"
                        >
                          Schedule a Strategy Call
                          <ArrowRight className="h-4 w-4 shrink-0" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-[250ms]"
              >
                {l.label}
                <span className="absolute left-4 right-4 bottom-1 h-px scale-x-0 origin-left bg-[#FC9C44] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {/* Country selector — desktop */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setCountryOpen(true)}
              onMouseLeave={() => setCountryOpen(false)}
            >
              <button
                className="flex items-center gap-2 rounded-full border border-[#EAEAEA]/80 px-3.5 py-2 text-sm font-medium text-foreground/80 hover:bg-[#FFF4E8] hover:text-foreground transition-colors"
                aria-haspopup="true"
                aria-expanded={countryOpen}
              >
                <Globe className="h-4 w-4" />
                <span className="text-base leading-none">{active.flag}</span>
                <span className="hidden xl:inline">{active.name}</span>
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform", countryOpen && "rotate-180")}
                />
              </button>

              <div
                className={cn(
                  "absolute right-0 top-full pt-2 w-72 transition-all duration-200",
                  countryOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none",
                )}
              >
                <div className="rounded-xl border border-[#EAEAEA]/60 bg-white p-2 shadow-[0_20px_50px_-20px_rgba(17,24,39,0.2)]">
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Select your region
                  </div>
                  {countries.map((c) => (
                    <a
                      key={c.code}
                      href={c.domain}
                      onClick={() => {
                        setActiveCountry(c.code);
                        setCountryOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#FFF4E8]",
                        activeCountry === c.code && "bg-[#FFF4E8]",
                      )}
                    >
                      <span className="text-xl leading-none">{c.flag}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-foreground">{c.name}</span>
                        <span className="block text-xs text-muted-foreground">{c.region}</span>
                      </span>
                      {activeCountry === c.code && <Check className="h-4 w-4 text-[#FC9C44]" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(252,156,68,0.35)] hover:bg-[#E88C35] hover:shadow-[0_12px_24px_-8px_rgba(252,156,68,0.45)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Connect With Us
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/free-growth-audit"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FC9C44] text-white shadow-[0_4px_12px_-4px_rgba(252,156,68,0.5)]"
              aria-label="Get Free Growth Audit"
            >
              <TrendingUp className="h-4 w-4" />
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
        <aside
          className={cn(
            "absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-24 items-center justify-between border-b border-border px-5">
            <img src={logoAsset} alt="HEXGCORP" className="h-20 w-auto" />
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {/* Services accordion */}
            <button
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mb-2 ml-2 mt-1 space-y-3 border-l border-[#EAEAEA] pl-3">
                {serviceColumns.map((col) => (
                  <div key={col.heading}>
                    <div className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FC9C44]">
                      {col.heading}
                    </div>
                    {col.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-[#FFF4E8]"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]"
              >
                {l.label}
              </Link>
            ))}

            {/* Countries accordion */}
            <button
              className="mt-2 flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium hover:bg-[#FFF4E8]"
              onClick={() => setMobileCountriesOpen((v) => !v)}
            >
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Countries
              </span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", mobileCountriesOpen && "rotate-180")}
              />
            </button>
            {mobileCountriesOpen && (
              <div className="ml-2 mt-1 space-y-1 border-l border-[#EAEAEA] pl-3">
                {countries.map((c) => (
                  <a
                    key={c.code}
                    href={c.domain}
                    onClick={() => {
                      setActiveCountry(c.code);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-[#FFF4E8]",
                      activeCountry === c.code && "bg-[#FFF4E8] font-medium",
                    )}
                  >
                    <span className="text-lg">{c.flag}</span>
                    {c.name}
                    {activeCountry === c.code && (
                      <Check className="ml-auto h-4 w-4 text-[#FC9C44]" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <div className="border-t border-[#EAEAEA] p-4 space-y-3">
            <Link
              to="/free-growth-audit"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FC9C44] px-5 py-3 hover:bg-[#E88C35] text-sm font-semibold text-white"
            >
              Get Free Growth Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918369207836"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Phone className="h-4 w-4" /> Support: +91 836 920 7836
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
