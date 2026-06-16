import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Info } from "lucide-react";
import ShapeGrid from "@/components/ShapeGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hegxcorp | Digital Transformation & Growth Partners" },
      {
        name: "description",
        content:
          "Learn more about Hegxcorp's core values, growth philosophy, and our embedded partnership model. Team overview coming soon.",
      },
    ],
  }),
  component: AboutComingSoon,
} as never);

function AboutComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Hexagon background motif (same as homepage) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none"
            style={{ opacity: 0.2 }}
          >
            <ShapeGrid
              shape="hexagon"
              squareSize={38}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={false}
              speed={0.2}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
            <div className="max-w-[640px] mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E8] text-[#FC9C44] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <Info className="h-3.5 w-3.5" />
                About Hegxcorp
              </span>
              <SectionHeading
                align="center"
                tagline="Coming Soon"
                heading="Meet the growth consultancy driving compounding value"
                description="We operate differently. We are senior strategists, content editors, and engineers working as an extension of your own team. Our dedicated profile page is on its way."
              />
              <div className="pt-4 flex justify-center gap-4">
                <Link
                  to="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] transition-all"
                >
                  Claim Growth Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#232323] border border-[#EAEAEA] bg-white hover:bg-[#FAFAF8] transition-all"
                >
                  Get in Touch
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
