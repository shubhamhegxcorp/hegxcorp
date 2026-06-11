import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/home/Hero";
import { ClientLogos } from "@/components/home/ClientLogos";
import { ResultsMetrics } from "@/components/home/ResultsMetrics";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WhyHegxcorp } from "@/components/home/WhyHegxcorp";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";

export const Route = createFileRoute("/")({
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
} as never);

function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Navigation ──────────────────────── */}
      <Header />

      {/* ── Section 1: Hero ─────────────────── */}
      <Hero />

      {/* ── Section 2: Client Logos ─────────── */}
      <ClientLogos />

      {/* ── Section 3: Results Metrics ──────── */}
      <ResultsMetrics />

      {/* ── Section 4: Services Grid ────────── */}
      <ServicesGrid />

      {/* ── Section 4.5: Featured Work ──────── */}
      <FeaturedWork />

      {/* ── Section 5: Why Hegxcorp ─────────── */}
      <WhyHegxcorp />

      {/* ── Section 6: Featured Case Study ──── */}
      <FeaturedCaseStudy />

      {/* ── Section 7: Process ──────────────── */}
      <Process />

      {/* ── Section 8: Testimonials ─────────── */}
      <Testimonials />

      {/* ── Section 9: Insights / Blog ──────── */}
      <BlogPreview />

      {/* ── Section 10: Final CTA ───────────── */}
      <FinalCTA />

      {/* ── Footer ──────────────────────────── */}
      <Footer />

      {/* ── Sticky Mobile CTA ───────────────── */}
      <StickyMobileCTA />
    </div>
  );
}
