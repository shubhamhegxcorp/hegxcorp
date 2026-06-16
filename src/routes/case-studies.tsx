import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Sparkles, PhoneCall, FileText, Percent, ShieldCheck } from "lucide-react";
import ShapeGrid from "@/components/ShapeGrid";
import { BrowserPreview } from "@/components/site/BrowserPreview";
import { caseStudies } from "@/data/caseStudies";
import SplitText from "@/components/ui/SplitText";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Client Success & Growth Case Studies | Hegxcorp" },
      {
        name: "description",
        content:
          "Discover how Hegxcorp helps leading B2B and E-commerce brands scale organic revenue, optimize PPC campaigns, and achieve measurable growth.",
      },
    ],
  }),
  component: CaseStudiesPage,
} as never);

function EditorialDivider() {
  return (
    <div className="flex items-center justify-center my-16 md:my-24 max-w-[1280px] mx-auto px-6 lg:px-10">
      <div className="h-[1px] w-full bg-[#EAEAEA]" />
      <div className="mx-4 text-[#FC9C44] rotate-45 select-none font-bold text-xs">♦</div>
      <div className="h-[1px] w-full bg-[#EAEAEA]" />
    </div>
  );
}

function CaseStudiesPage() {
  // Tarkashastra is our featured case study
  const featuredStudy = caseStudies.find((c) => c.slug === "tarkashastra") || caseStudies[0];
  
  // Specific case studies lookup to build the editorial rhythm
  const gpen = caseStudies.find((c) => c.slug === "g-pen") || caseStudies[1];
  const rollink = caseStudies.find((c) => c.slug === "rollink") || caseStudies[2];
  const learningTree = caseStudies.find((c) => c.slug === "learning-tree") || caseStudies[3];
  const orra = caseStudies.find((c) => c.slug === "orra") || caseStudies[4];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />
        
        {/* ── SECTION 1: HERO SECTION ── */}
        <section className="relative overflow-hidden bg-white border-b border-[#EAEAEA]" style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}>
          {/* Hexagon background motif (moving, no fade) */}
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
            <div className="max-w-[800px] mx-auto space-y-8">
              <span 
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FC9C44] shadow-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Sparkles className="h-3 w-3 animate-pulse" />
                Case Studies
              </span>
              
              <SplitText
                text={"Real Brands.\nReal Growth.\nReal Results."}
                className="font-bold text-[#232323] leading-[1.1] tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(42px, 5.2vw, 76px)",
                }}
              />
              
              <p 
                className="max-w-[600px] mx-auto text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.2vw, 20px)" }}
              >
                Explore how strategy, execution and data-driven systems helped businesses achieve measurable growth.
              </p>
              
              <div className="pt-4 flex justify-center">
                <Link
                  to="/free-growth-audit"
                  className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.5)] transition-[background-color,transform,box-shadow] duration-200 ease-out"
                >
                  Get Free Growth Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: CREDIBILITY BAR ── */}
        <section className="bg-[#FC9C44] py-8 border-b border-[#E88C35]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 text-white">
              
              {/* Column 1 */}
              <div className="flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  80+
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Clients Served
                </span>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/20">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  13+
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Years Experience
                </span>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col items-center justify-center text-center p-4 border-t border-white/20 md:border-t-0 md:border-l border-white/20">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  International
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Markets Served
                </span>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col items-center justify-center text-center p-4 border-l border-t border-white/20 md:border-t-0 border-white/20">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  SEO • PPC • Web
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-white/90 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Growth Systems
                </span>
              </div>
              
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FEATURED CASE STUDY (TARKASHASTRA) ── */}
        <section className="py-20 md:py-32 bg-[#FAFAF8] relative">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Left Column - Outcome Text */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span 
                    className="text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Featured Case Study
                  </span>
                  
                  {/* Metric Value Hero (2-3x Larger than client name) */}
                  <div className="space-y-1">
                    <div 
                      className="font-bold text-[#1D2742] leading-[0.95] tracking-tight"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(56px, 7vw, 100px)",
                      }}
                    >
                      {featuredStudy.metricValue}
                    </div>
                    <div 
                      className="text-xs font-bold uppercase tracking-[0.2em] text-[#FC9C44] mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {featuredStudy.metricLabel.toUpperCase()}
                    </div>
                  </div>

                  <h3 
                    className="text-2xl font-bold text-[#6B7280] tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {featuredStudy.client}
                  </h3>
                  
                  {/* Subtle proof labels / Trust Signals */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider">
                    <span>{featuredStudy.industry}</span>
                    <span>•</span>
                    <span>Google Ads</span>
                    <span>•</span>
                    <span>Search Console</span>
                    <span>•</span>
                    <span>GA4</span>
                  </div>
                </div>

                {/* Challenge & Solution summaries */}
                <div className="space-y-6 pt-6 border-t border-[#EAEAEA] text-[#4A5568]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2742]">The Challenge</h4>
                    <p className="mt-1.5 text-sm leading-relaxed">{featuredStudy.challenge.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D2742]">Our Solution</h4>
                    <p className="mt-1.5 text-sm leading-relaxed">{featuredStudy.solution.description}</p>
                  </div>
                </div>

                {/* Tarkashastra Supporting Result Chips - Visible Immediately */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm">
                    <PhoneCall className="h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" />
                    <div className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>908</div>
                    <div className="text-[8px] font-bold text-[#6B7280] uppercase tracking-wider">Phone Leads</div>
                  </div>
                  
                  <div className="bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm">
                    <FileText className="h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" />
                    <div className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>150</div>
                    <div className="text-[8px] font-bold text-[#6B7280] uppercase tracking-wider">Form Subs</div>
                  </div>

                  <div className="bg-white border border-[#EAEAEA] p-3 rounded-lg text-center space-y-0.5 shadow-sm">
                    <Percent className="h-3.5 w-3.5 mx-auto text-[#FC9C44] opacity-80" />
                    <div className="text-sm font-bold text-[#1D2742]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>-48%</div>
                    <div className="text-[8px] font-bold text-[#6B7280] uppercase tracking-wider">Lower CPL</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: featuredStudy.slug }}
                    className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white bg-[#1D2742] hover:bg-[#2C3B60] transition-colors duration-200"
                  >
                    View Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Large Browser Preview */}
              <div className="lg:col-span-7">
                <Link to="/case-studies/$slug" params={{ slug: featuredStudy.slug }}>
                  <BrowserPreview 
                    src={featuredStudy.featuredImage} 
                    alt={`${featuredStudy.client} Growth Result`}
                    proofLabel={featuredStudy.proofLabel}
                    proofDuration={featuredStudy.proofDuration}
                    proofMetric={`${featuredStudy.metricValue} Growth`}
                    className="w-full shadow-[0_32px_64px_rgba(29,39,66,0.1)]"
                  />
                </Link>
              </div>
              
            </div>
          </div>
        </section>

        {/* Separator Divider */}
        <EditorialDivider />

        {/* ── SECTION 4: CASE STUDY COLLECTION ── */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            
            {/* Upgrade Archive Section Header */}
            <div className="max-w-[700px] mb-20 space-y-4">
              <span 
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Archive
              </span>
              <h2 
                className="font-bold text-[#232323] leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(32px, 4vw, 54px)",
                }}
              >
                Documented Growth Outcomes
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Documented case histories of performance bidding, organic architectures, and local reach integrations built to deliver scalable pipelines.
              </p>
            </div>

            {/* EDITORIAL RHYTHM LAYOUT GRID */}
            <div className="space-y-24">
              
              {/* ROW 1: Two standard studies side-by-side (GPen & Rollink) */}
              <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                
                {/* G Pen */}
                <Link 
                  to="/case-studies/$slug"
                  params={{ slug: gpen.slug }}
                  className="group flex flex-col gap-6 text-left focus:outline-none"
                >
                  <BrowserPreview 
                    src={gpen.featuredImage} 
                    alt={`${gpen.client} Performance Outcomes`}
                    proofLabel={gpen.proofLabel}
                    proofDuration={gpen.proofDuration}
                    proofMetric={gpen.metricValue}
                    className="w-full"
                  />

                  <div className="space-y-4">
                    <div className="space-y-1">
                      {/* Metric Value Hero */}
                      <div className="flex flex-col">
                        <span 
                          className="text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {gpen.metricValue}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {gpen.metricLabel.toUpperCase()}
                        </span>
                      </div>
                      <h3 
                        className="text-xl font-bold text-[#1D2742] tracking-tight mt-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {gpen.client}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4A5568] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {gpen.summary}
                    </p>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3">
                      <span>{gpen.industry}</span>
                      <span>•</span>
                      <span>Google Ads</span>
                      <span>•</span>
                      <span>GA4</span>
                      <span>•</span>
                      <span>CRO</span>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5">
                        Read Study <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Rollink */}
                <Link 
                  to="/case-studies/$slug"
                  params={{ slug: rollink.slug }}
                  className="group flex flex-col gap-6 text-left focus:outline-none"
                >
                  <BrowserPreview 
                    src={rollink.featuredImage} 
                    alt={`${rollink.client} Performance Outcomes`}
                    proofLabel={rollink.proofLabel}
                    proofDuration={rollink.proofDuration}
                    proofMetric={rollink.metricValue}
                    className="w-full"
                  />

                  <div className="space-y-4">
                    <div className="space-y-1">
                      {/* Metric Value Hero */}
                      <div className="flex flex-col">
                        <span 
                          className="text-4xl md:text-5xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {rollink.metricValue}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {rollink.metricLabel.toUpperCase()}
                        </span>
                      </div>
                      <h3 
                        className="text-xl font-bold text-[#1D2742] tracking-tight mt-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {rollink.client}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4A5568] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {rollink.summary}
                    </p>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-3">
                      <span>{rollink.industry}</span>
                      <span>•</span>
                      <span>SEO</span>
                      <span>•</span>
                      <span>Search Console</span>
                      <span>•</span>
                      <span>Vitals Overhaul</span>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5">
                        Read Study <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" />
                      </span>
                    </div>
                  </div>
                </Link>

              </div>

              {/* Editorial Divider */}
              <div className="h-[1px] w-full bg-[#EAEAEA]" />

              {/* ROW 2: One wider study (Learning Tree - Full Width Grid) */}
              <div className="bg-[#FAFAF8] p-8 md:p-12 rounded-2xl border border-[#EAEAEA]">
                <Link 
                  to="/case-studies/$slug"
                  params={{ slug: learningTree.slug }}
                  className="group grid lg:grid-cols-12 gap-12 items-center text-left focus:outline-none"
                >
                  {/* Left Side: Browser Preview */}
                  <div className="lg:col-span-7">
                    <BrowserPreview 
                      src={learningTree.featuredImage} 
                      alt={`${learningTree.client} Performance`}
                      proofLabel={learningTree.proofLabel}
                      proofDuration={learningTree.proofDuration}
                      proofMetric={learningTree.metricValue}
                      className="w-full shadow-md"
                    />
                  </div>

                  {/* Right Side: Details & Huge Metric */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Featured Performance Story</span>
                      
                      <div className="flex flex-col">
                        <span 
                          className="text-5xl md:text-6xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {learningTree.metricValue}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FC9C44] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {learningTree.metricLabel.toUpperCase()}
                        </span>
                      </div>

                      <h3 
                        className="text-2xl font-bold text-[#1D2742]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {learningTree.client}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4A5568] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {learningTree.summary}
                    </p>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-4">
                      <span>{learningTree.industry}</span>
                      <span>•</span>
                      <span>Google Ads</span>
                      <span>•</span>
                      <span>PPC Bid Optimization</span>
                      <span>•</span>
                      <span>Funnel Audit</span>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5">
                        Read Study <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Editorial Divider */}
              <div className="h-[1px] w-full bg-[#EAEAEA]" />

              {/* ROW 3: Remaining study (Orra - centered/wide layout) */}
              <div className="bg-white">
                <Link 
                  to="/case-studies/$slug"
                  params={{ slug: orra.slug }}
                  className="group grid lg:grid-cols-12 gap-12 items-center text-left focus:outline-none"
                >
                  {/* Left Side: Details & Huge Metric */}
                  <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Localized Brand Authority</span>
                      
                      <div className="flex flex-col">
                        <span 
                          className="text-5xl md:text-6xl font-bold text-[#FC9C44] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {orra.metricValue}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#FC9C44] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {orra.metricLabel.toUpperCase()}
                        </span>
                      </div>

                      <h3 
                        className="text-2xl font-bold text-[#1D2742]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {orra.client}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4A5568] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {orra.summary}
                    </p>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider border-t border-[#EAEAEA] pt-4">
                      <span>{orra.industry}</span>
                      <span>•</span>
                      <span>SEO Local architecture</span>
                      <span>•</span>
                      <span>Digital Strategy</span>
                      <span>•</span>
                      <span>Map Dominance</span>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D2742] group-hover:text-[#FC9C44] transition-colors duration-[250ms] ease-out border-b border-[#1D2742]/10 group-hover:border-[#FC9C44]/20 pb-0.5">
                        Read Study <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[250ms] ease-out group-hover:translate-x-[6px]" />
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Browser Preview */}
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <BrowserPreview 
                      src={orra.featuredImage} 
                      alt={`${orra.client} Performance`}
                      proofLabel={orra.proofLabel}
                      proofDuration={orra.proofDuration}
                      proofMetric={orra.metricValue}
                      className="w-full shadow-md"
                    />
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Editorial Divider */}
        <EditorialDivider />

        {/* ── SECTION 9: IMPROVED CTA SECTION ── */}
        <section className="py-24 bg-[#FAFAF8] border-t border-b border-[#EAEAEA] relative overflow-hidden">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center space-y-8 relative z-10">
            <ShieldCheck className="h-12 w-12 text-[#FC9C44] mx-auto animate-pulse" />
            
            <h3 
              className="text-3xl md:text-4xl font-bold text-[#1D2742] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let's Build Your Next Growth Story.
            </h3>
            
            <p 
              className="text-[#6B7280] leading-relaxed max-w-[540px] mx-auto text-sm md:text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get a Free Growth Audit and Strategic Roadmap tailored to your business goals.
            </p>
            
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/free-growth-audit"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-[0_12px_28px_-8px_rgba(252,156,68,0.4)]"
              >
                Get Free Growth Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-[#1D2742] bg-white border border-[#EAEAEA] hover:border-[#FC9C44] hover:bg-[#FFF4E8] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}
