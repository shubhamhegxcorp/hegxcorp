import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/cropped-hegxcorp-logo-new-web.webp";
import { Linkedin, Twitter, Instagram, Facebook, ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Search Engine Optimisation", to: "/service/seo" as const },
    { label: "Paid Advertising (PPC)", to: "/service/ppc" as const },
    { label: "Web Development", to: "/service/web-dev" as const },
    { label: "Social Media Marketing", to: "/service/social-med" as const },
    { label: "Branding & Design", to: "/service/branding" as const },
    { label: "Conversion Optimisation", to: "/service/ui-ux-design" as const },
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
  // { icon: Youtube, href: "https://youtube.com/@hegxcorp", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#1D2742] relative overflow-hidden grain-overlay">
      {/*
        ── Watermark —
        Positioned bottom-centre, sized so it sits squarely behind the
        column grid, not above it. translateY(35%) pushes the bulk of
        the lettering below the visible footer content, creating a
        receding brand anchor rather than a floating headline.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%) translateY(38%)",
            whiteSpace: "nowrap",
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontSize: "clamp(100px, 16vw, 280px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
            userSelect: "none",
            /* Fade edges so it blends cleanly into the navy */
            maskImage:
              "linear-gradient(to right, transparent 0%, white 18%, white 82%, transparent 100%), linear-gradient(to top, white 0%, white 50%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, white 18%, white 82%, transparent 100%), linear-gradient(to top, white 0%, white 50%, transparent 100%)",
            WebkitMaskComposite: "source-in",
          }}
        >
          HEGXCORP
        </div>
      </div>

      {/* Warm radial glow — top-centre, very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            width: "60vw",
            maxWidth: "800px",
            height: "100%",
            background:
              "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(252,156,68,0.04) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── All content: sits above watermark and glow ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/*
          Top separator — very subtle, distinguishes footer from CTA
          while maintaining the shared dark navy surface.
        */}
        <div className="border-t border-white/[0.06]" />

        {/* Main column grid — minimal top padding since CTA already provides breathing room */}
        <div
          className="mx-auto max-w-[1280px] px-6 lg:px-10"
          style={{
            paddingTop: "clamp(32px, 3.5vw, 48px)",
            paddingBottom: "clamp(32px, 3.5vw, 48px)",
          }}
        >
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-10 gap-y-10 items-start">
            {/* ── Brand column ── */}
            <div className="flex flex-col gap-5">
              <Link to="/" className="self-start" aria-label="Hegxcorp home">
                <img
                  src={logoAsset}
                  alt="Hegxcorp"
                  className="h-8 w-auto brightness-0 invert"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </Link>
              <p
                className="text-white/50 text-[13px] leading-[1.7] max-w-[250px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                A data-driven growth consultancy helping businesses generate more leads, sales, and
                revenue through SEO, paid advertising, and conversion optimisation.
              </p>

            {/* CTA pill */}
            <Link
              to="/free-growth-audit"
              className="self-start inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold text-[#1D2742] bg-[#FC9C44] hover:bg-[#E88C35] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get Free Growth Audit <ArrowRight className="h-3 w-3" />
            </Link>

            {/* Social icons */}
            <div className="flex gap-1.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.09] text-white/35 transition-all duration-200 hover:bg-white/[0.08] hover:text-white/80 hover:border-white/20"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-3.5">
              <h4
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {group}
              </h4>
              <div className="w-5 h-px bg-white/10" />
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {"to" in link ? (
                      <Link
                        to={link.to}
                        className="group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                          {link.label}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex text-[13px] text-white/55 transition-all duration-200 hover:text-white"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
                          {link.label}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-4 pb-28 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[11px] text-white/30 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Hegxcorp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" as const },
              { label: "Terms of Service", to: "/terms-of-service" as const },
              { label: "Cookie Policy", to: "/cookie-policy" as const },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}
