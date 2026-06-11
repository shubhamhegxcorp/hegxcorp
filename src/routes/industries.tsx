import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Layers } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Target Verticals & Industries | Hegxcorp" },
      {
        name: "description",
        content:
          "Learn about the core industries Hegxcorp partners with to deploy high-scale SEO and digital transformation. Industry deep-dives coming soon.",
      },
    ],
  }),
  component: IndustriesComingSoon,
} as never);

function IndustriesComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
            <div className="max-w-[640px] mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Layers className="h-3.5 w-3.5" />
                Target Industries
              </span>
              <SectionHeading
                align="center"
                tagline="Coming Soon"
                heading="Industry vertical solutions &amp; case benchmarks"
                description="We are structuring our digital growth playbooks tailored for E-commerce, B2B Enterprise SaaS, Healthcare, FinTech, and Professional Services sectors."
              />
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  to="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-all"
                >
                  Request Growth Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#232323] border border-[#EAEAEA] bg-white hover:bg-[#FAFAF8] transition-all"
                >
                  Contact Our Strategists
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
