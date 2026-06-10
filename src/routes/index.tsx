import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ClientLogosSection } from "@/components/client-logos-section";
import { ResultsMetricsSection } from "@/components/results-metrics-section";
import { ServicesGridSection } from "@/components/services-grid-section";
import { WhyHegxcorpSection } from "@/components/why-hegxcorp-section";
import { FeaturedCaseStudySection } from "@/components/featured-case-study-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { InsightsSection } from "@/components/insights-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        name: "description",
        content:
          "Hegxcorp helps businesses generate more leads, sales and revenue through data-driven SEO, paid advertising, web development and conversion optimisation. Serving India, USA, UK and Dubai.",
      },
      { property: "og:title", content: "Hegxcorp — Data-Driven Growth Marketing Agency" },
      {
        property: "og:description",
        content:
          "Generate more leads, sales and revenue through data-driven growth marketing. SEO, Paid Ads, Web Development and CRO.",
      },
      {
        name: "keywords",
        content:
          "digital marketing agency, SEO agency India, PPC agency, web development, growth marketing, Hegxcorp",
      },
    ],
  }),
  component: Index,
} as never));

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Navigation ──────────────────────── */}
      <SiteHeader />

      {/* ── Section 1: Hero ─────────────────── */}
      <HeroSection />

      {/* ── Section 2: Client Logos ─────────── */}
      <ClientLogosSection />

      {/* ── Section 3: Results Metrics ──────── */}
      <ResultsMetricsSection />

      {/* ── Section 4: Services Grid ────────── */}
      <ServicesGridSection />

      {/* ── Section 5: Why Hegxcorp ─────────── */}
      <WhyHegxcorpSection />

      {/* ── Section 6: Featured Case Study ──── */}
      <FeaturedCaseStudySection />

      {/* ── Section 7: Process ──────────────── */}
      <ProcessSection />

      {/* ── Section 8: Testimonials ─────────── */}
      <TestimonialsSection />

      {/* ── Section 9: Insights / Blog ──────── */}
      <InsightsSection />

      {/* ── Section 10: Final CTA ───────────── */}
      <FinalCtaSection />

      {/* ── Footer ──────────────────────────── */}
      <SiteFooter />
    </div>
  );
}
