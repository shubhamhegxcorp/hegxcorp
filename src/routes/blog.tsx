import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Growth Lab Blog & Marketing Insights | Hegxcorp" },
      {
        name: "description",
        content:
          "Read the latest research from Hegxcorp's growth labs. In-depth guides on SEO authority, paid acquisition campaigns, and conversion optimizations.",
      },
    ],
  }),
  component: BlogComingSoon,
} as never);

function BlogComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
            <div className="max-w-[640px] mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="h-3.5 w-3.5" />
                Growth Lab Insights
              </span>
              <SectionHeading
                align="center"
                tagline="Coming Soon"
                heading="Compiling our latest guides and analysis papers"
                description="We are currently writing detailed case guides, organic search algorithms tracking reports, and landing page wireframe reviews. They will launch soon."
              />
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  to="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-all"
                >
                  Get Free Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#232323] border border-[#EAEAEA] bg-white hover:bg-[#FAFAF8] transition-all"
                >
                  Schedule strategy call
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
