import logoAsset from "@/assets/cropped-hegxcorp-logo-new-web.webp";
import {
  Linkedin, Twitter, Instagram, Facebook, Youtube, ArrowRight,
} from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Search Engine Optimisation", href: "/services/seo" },
    { label: "Paid Advertising (PPC)", href: "/services/ppc" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Social Media Marketing", href: "/services/social-media" },
    { label: "Branding & Design", href: "/services/branding" },
    { label: "Conversion Optimisation", href: "/services/cro" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
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

export function SiteFooter() {
  return (
    <footer style={{ background: "#1D2742" }}>
      {/* Main footer body */}
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
              A data-driven growth agency helping businesses generate more leads, sales and revenue through SEO, paid advertising and conversion optimisation.
            </p>
            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#1D2742] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#FC9C44", fontFamily: "'Inter', sans-serif" }}
            >
              Get Free Growth Audit <ArrowRight className="h-3.5 w-3.5" />
            </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
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
          <p
            className="text-xs text-white/35"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
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
    </footer>
  );
}
