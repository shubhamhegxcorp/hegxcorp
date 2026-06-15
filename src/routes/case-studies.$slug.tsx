import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BrowserPreview } from "@/components/site/BrowserPreview";
import { caseStudies } from "@/data/caseStudies";
import ShapeGrid from "@/components/ShapeGrid";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) {
      throw notFound();
    }
    return { study };
  },
  head: ({ params }: { params: { slug: string } }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    return {
      meta: [
        { title: study ? `${study.client} Case Study: ${study.metricValue} ${study.metricLabel} | Hegxcorp` : "Case Study | Hegxcorp" },
        {
          name: "description",
          content: study ? study.summary : "Detailed case history of performance growth, organic search architectures, and digital scaling engineered by Hegxcorp.",
        },
      ],
    };
  },
  component: CaseStudyDetailPage,
} as never);

function CaseStudyDetailPage() {
  const { slug } = useParams({ strict: false });
  const study = caseStudies.find((c) => c.slug === slug);
  
  if (!study) {
    return null;
  }
  
  // Find other relevant studies for the Related section (max 2)
  const relatedStudies = caseStudies
    .filter((c) => c.slug !== study.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />

        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA]" style={{ paddingTop: "clamp(64px, 8vw, 100px)", paddingBottom: "clamp(64px, 8vw, 100px)" }}>
          {/* Subtle ShapeGrid motif in bg */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none"
            style={{ opacity: 0.1 }}
          >
            <ShapeGrid
              shape="hexagon"
              squareSize={42}
              borderColor="rgba(29,39,66,0.3)"
              hoverFillColor="transparent"
              hoverTrailAmount={0}
              staticMode={true}
              className="w-full h-full"
            />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
            {/* Back to Case Studies link */}
            <div className="mb-8">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] hover:text-[#FC9C44] transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
              </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Outcome Header Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#FC9C44] uppercase tracking-wider">
                    <span>{study.industry}</span>
                    <span>•</span>
                    <span>{study.services.join(" • ")}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div 
                      className="font-bold text-[#1D2742] leading-[0.95] tracking-tight"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(56px, 7vw, 100px)",
                      }}
                    >
                      {study.metricValue}
                    </div>
                    <div 
                      className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {study.metricLabel.toUpperCase()}
                    </div>
                  </div>
                  
                  <h2 
                    className="text-2xl font-bold text-[#6B7280]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Client Case Study: {study.client}
                  </h2>
                </div>

                <p 
                  className="text-[#4A5568] leading-relaxed text-base border-l-2 border-[#FC9C44] pl-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.summary}
                </p>
              </div>

              {/* Browser Preview Screenshot */}
              <div className="lg:col-span-6">
                <BrowserPreview 
                  src={study.featuredImage} 
                  alt={`${study.client} Case Study Screenshot`}
                  proofLabel={study.proofLabel}
                  proofDuration={study.proofDuration}
                  proofMetric={`${study.metricValue} Growth`}
                  className="w-full shadow-[0_24px_48px_rgba(29,39,66,0.08)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── THE CHALLENGE & THE SOLUTION ── */}
        <section className="py-20 bg-white border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10">
            <div className="space-y-16">
              
              {/* Challenge */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  01 / The Challenge
                </span>
                <h3 className="text-2xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {study.challenge.title}
                </h3>
                <div 
                  className="text-[#4A5568] leading-relaxed space-y-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p>{study.challenge.description}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  02 / The Solution
                </span>
                <h3 className="text-2xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {study.solution.title}
                </h3>
                <div 
                  className="text-[#4A5568] leading-relaxed space-y-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p>{study.solution.description}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── OUR APPROACH (STRATEGY TIMELINE) ── */}
        <section className="py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10">
            <div className="text-center max-w-[640px] mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Methodology
              </span>
              <h3 className="text-3xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Our Approach &amp; Roadmap
              </h3>
              <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                A systematic workflow engineered to isolate scaling bottlenecks and build compounding search and campaign loops.
              </p>
            </div>

            {/* Strategy Timeline Layout */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Horizontal connection line on desktop */}
              <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-[#EAEAEA] -z-0" />
              
              <div className="relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  1
                </div>
                <h4 className="font-bold text-[#1D2742] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Research</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Deep-dive audits into search query intent patterns, crawl limits, competitor bid landscapes, and conversion gaps.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  2
                </div>
                <h4 className="font-bold text-[#1D2742] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Planning</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Mapping user intent maps, structural page schemas, copy funnels, budget allocations, and analytics tracking parameters.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  3
                </div>
                <h4 className="font-bold text-[#1D2742] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Execution</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Overhauling schemas, launching targeted keyword landing pages, structuring negative lists, and refining ad copy.
                </p>
              </div>

              <div className="relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm">
                <div className="mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  4
                </div>
                <h4 className="font-bold text-[#1D2742] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Optimization</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Analyzing heatmaps, adjusting smart search bid triggers, conducting conversion tests, and scaling budget efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESULTS GRID ── */}
        <section className="py-20 bg-white border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10">
            <div className="text-center max-w-[640px] mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]" style={{ fontFamily: "'Inter', sans-serif" }}>
                03 / Verified Results
              </span>
              <h3 className="text-3xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Documented Client Outcomes
              </h3>
              <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Concrete, measurable performance indices checked and verified post-deployment.
              </p>
            </div>

            {/* Outcomes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAFAF8] p-6 rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center text-center space-y-2 shadow-sm"
                >
                  <span 
                    className="text-3xl md:text-4xl font-bold text-[#FC9C44]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-bold text-[#1D2742] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <p 
              className="text-[#4A5568] leading-relaxed text-sm text-center max-w-[720px] mx-auto mt-12"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {study.results.description}
            </p>
          </div>
        </section>

        {/* ── CLIENT TESTIMONIAL BLOCK ── */}
        {study.testimonial && (
          <section className="py-20 bg-[#1D2742] text-white">
            <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6">
              <MessageSquare className="h-8 w-8 text-[#FC9C44] mx-auto opacity-80" />
              <blockquote 
                className="text-xl md:text-2xl font-bold leading-relaxed italic"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <p className="font-bold text-[#FC9C44]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {study.testimonial.author}
                </p>
                <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {study.testimonial.role}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── VISUAL PROOF (GALLERY / PRIMARY PREVIEW) ── */}
        <section className="py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10 space-y-8">
            <div className="text-center max-w-[640px] mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Visual Proof
              </span>
              <h3 className="text-2xl font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Live System Preview
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Direct capture layout representing the client's optimized website presence. 
                <br /><span className="text-[10px] font-semibold text-[#9CA3AF]">(Placeholder graphic will be replaced with real analytics screenshots)</span>
              </p>
            </div>

            {/* Single Large Browser Preview displaying layout */}
            <div className="max-w-[800px] mx-auto">
              <BrowserPreview 
                src={study.featuredImage} 
                alt={`${study.client} Analytics Proof`} 
                proofLabel={study.proofLabel}
                proofDuration={study.proofDuration}
                proofMetric={`${study.metricValue} Growth`}
                aspectRatio="video"
                className="w-full shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ── RELATED CASE STUDIES ── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <h3 
              className="text-2xl font-bold text-[#1D2742] tracking-tight mb-12 text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Other Success Stories
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-[960px] mx-auto">
              {relatedStudies.map((item) => (
                <Link 
                  key={item.slug}
                  to="/case-studies/$slug"
                  params={{ slug: item.slug }}
                  className="group flex flex-col gap-4 text-left focus:outline-none"
                >
                  <BrowserPreview 
                    src={item.featuredImage} 
                    alt={`${item.client} Case Study`}
                    className="w-full"
                  />
                  <div className="space-y-1">
                    <span 
                      className="text-lg font-bold text-[#FC9C44] group-hover:text-[#E88C35] transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.metricValue} {item.metricLabel}
                    </span>
                    <h4 className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.client}
                    </h4>
                    <p className="text-xs text-[#6B7280] line-clamp-2 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER CALL TO ACTION (CTA) ── */}
        <section className="py-20 bg-[#FAFAF8] border-t border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-6">
            <ShieldCheck className="h-10 w-10 text-[#FC9C44] mx-auto" />
            
            <h3 
              className="text-3xl font-bold text-[#1D2742] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Want Similar Results?
            </h3>
            
            <p 
              className="text-[#6B7280] leading-relaxed max-w-[500px] mx-auto text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We'll audit your search visibility, PPC ad spend, and conversion funnel to uncover high-impact growth paths for your business.
            </p>
            
            <div className="pt-2">
              <Link
                to="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all"
              >
                Get Free Growth Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}
