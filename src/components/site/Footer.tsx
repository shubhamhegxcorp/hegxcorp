import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/cropped-hegxcorp-logo-new-web.webp";
import { Linkedin, Twitter, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Search Engine Optimisation", to: "/services" as const },
    { label: "Paid Advertising (PPC)", to: "/services" as const },
    { label: "Web Development", to: "/services" as const },
    { label: "Social Media Marketing", to: "/services" as const },
    { label: "Branding & Design", to: "/services" as const },
    { label: "Conversion Optimisation", to: "/services" as const },
  ],
  Company: [
    { label: "About Us", to: "/about" as const },
    { label: "Case Studies", to: "/case-studies" as const },
    { label: "Blog & Insights", to: "/blog" as const },
    { label: "Contact", to: "/contact" as const },
  ],
  Regions: [
    { label: "India (hegxcorp.in)", href: "https://hegxcorp.in" },
    { label: "United States", href: "https://hegxcorp.us" },
    { label: "United Kingdom", href: "https://hegxcorp.uk" },
    { label: "Dubai & UAE", href: "https://hegxcorp.ae" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/hegxcorp", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/hegxcorp", label: "X (Twitter)" },
  { icon: Instagram, href: "https://instagram.com/hegxcorp", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/hegxcorp", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@hegxcorp", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#1D2742] relative overflow-hidden">

      {/* ── Brand Watermark ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontSize: "clamp(180px, 28vw, 450px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.055)",
            opacity: 1,
            whiteSpace: "nowrap",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.8) 85%, transparent 100%), linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 60%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,0.8) 85%, transparent 100%), linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 60%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            userSelect: "none",
          }}
        >
          HEGXCORP
        </span>
      </div>

      {/* Main footer body + bottom bar — sits above watermark */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <div
        className="mx-auto max-w-[1280px] px-6 lg:px-10"
        style={{ paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}
      >
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <img src={logoAsset} alt="Hegxcorp" className="h-10 w-auto brightness-0 invert" />
            <p
              className="text-white/55 text-sm leading-relaxed max-w-[280px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A data-driven growth consultancy helping businesses generate more leads, sales and
              revenue through SEO, paid advertising and conversion optimisation.
            </p>
            {/* CTA */}
            <Link
              to="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#1D2742] transition-all duration-300 hover:-translate-y-0.5 bg-[#FC9C44] hover:bg-[#E88C35]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get Free Growth Audit <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/25"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-bold uppercase tracking-[0.14em] text-white/40 mb-5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"to" in link ? (
                      <Link
                        to={link.to}
                        className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Hegxcorp. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-white/35 hover:text-white/70 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
