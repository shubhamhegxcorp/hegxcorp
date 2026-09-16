import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BrowserPreview } from "@/components/site/BrowserPreview";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/content/caseStudies";
import ShapeGrid from "@/components/ShapeGrid";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Star,
  MapPin,
  TrendingUp,
  Sparkles,
  Award,
  PhoneCall,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) {
      throw notFound();
    }
    return { study };
  },
  head: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug);
    const title = study ? `${study.seoTitle} | Hegxcorp Case Study` : "Case Study | Hegxcorp";
    const description = study
      ? study.seoDescription
      : "Detailed case history of performance growth, organic search architectures, and digital scaling engineered by Hegxcorp.";
    const currentUrl = `https://hegxcorp.com/case-studies/${params.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: currentUrl },
        { property: "og:image", content: study?.featuredImage || "https://hegxcorp.com/favicon/apple-touch-icon.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: study?.featuredImage || "https://hegxcorp.com/favicon/apple-touch-icon.png" },
      ],
      links: [{ rel: "canonical", href: currentUrl }],
    };
  },
  component: CaseStudyDetailPage,
});

const gridColsMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

function CaseStudyDetailPage() {
  const { slug } = useParams({ strict: false });
  const study = getCaseStudyBySlug(slug || "");

  if (!study) {
    return null;
  }

  // Find other relevant studies for the Related section (max 2)
  const relatedStudies = getCaseStudies()
    .filter((c) => c.slug !== study.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header />

        {/* ── HERO SECTION ── */}
        <section
          className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA]"
          style={{
            paddingTop: "clamp(64px, 8vw, 100px)",
            paddingBottom: "clamp(64px, 8vw, 100px)",
          }}
        >
          {/* Subtle ShapeGrid motif in bg */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none"
            style={{ opacity: 0.2 }}
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
                    <span>{study.services.slice(0, 3).join(" • ")}</span>
                  </div>

                  <div className="space-y-1">
                    <div
                      className="font-black text-[#1D2742] leading-none tracking-tight text-4xl sm:text-5xl lg:text-6xl"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {study.metricValue}
                    </div>
                    <div
                      className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#FC9C44] mt-1.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {study.metricLabel.toUpperCase()}
                    </div>
                  </div>

                  <div>
                    <h1
                      className="text-2xl sm:text-3xl font-bold text-[#1D2742] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Client Case Study: {study.client}
                    </h1>
                    {study.clientSubtitle && (
                      <p className="text-sm text-[#6B7280] font-medium mt-1">
                        {study.clientSubtitle}
                      </p>
                    )}
                  </div>
                </div>

                <p
                  className="text-[#4A5568] leading-relaxed text-base border-l-2 border-[#FC9C44] pl-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {study.summary}
                </p>

                {/* External links and live site badges */}
                {study.aboutClient?.websiteUrl && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={study.aboutClient.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EAEAEA] bg-white text-xs font-bold text-[#1D2742] hover:border-[#FC9C44] hover:text-[#FC9C44] transition-colors shadow-sm"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    {study.aboutClient?.externalProofUrl && (
                      <a
                        href={study.aboutClient.externalProofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EAEAEA] bg-white text-xs font-bold text-[#6B7280] hover:text-[#1D2742] hover:border-[#1D2742] transition-colors shadow-sm"
                      >
                        <Award className="h-3 w-3 text-[#FC9C44]" />
                        <span>{study.aboutClient.externalProofLabel || "Collegedunia Profile"}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Browser Preview Screenshot */}
              <div className="lg:col-span-6">
                <BrowserPreview
                  src={study.featuredImage}
                  alt={`${study.client} Case Study Screenshot`}
                  proofLabel={study.proofLabel}
                  proofDuration={study.proofDuration}
                  proofMetric={`${study.metricValue} Growth`}
                  url={
                    study.slug === "tarkashastra"
                      ? "tarkashastra.co.in"
                      : study.slug === "orra"
                        ? "orra.co.in"
                        : `${study.slug}.com`
                  }
                  className="w-full shadow-[0_24px_48px_rgba(29,39,66,0.08)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT THE CLIENT SECTION (Spotlight Card) ── */}
        {study.aboutClient && (
          <section className="py-16 bg-white border-b border-[#EAEAEA]">
            <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
              <div className="rounded-2xl border border-[#EAEAEA] bg-[#FAFAF8] p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-2 w-2 rounded-full bg-[#FC9C44]" />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.15em] text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    About The Client
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Client bio & founder */}
                  <div className="lg:col-span-7 space-y-6">
                    <p
                      className="text-[#4A5568] leading-relaxed text-sm sm:text-base"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {study.aboutClient.description}
                    </p>

                    {/* Founder Highlight */}
                    {study.aboutClient.founder && (
                      <div className="flex items-center gap-4 pt-4 border-t border-[#EAEAEA]">
                        {study.aboutClient.founderImage && (
                          <img
                            src={study.aboutClient.founderImage}
                            alt={study.aboutClient.founder}
                            className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        )}
                        <div>
                          <div
                            className="text-base font-bold text-[#1D2742]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {study.aboutClient.founder}
                          </div>
                          {study.aboutClient.founderTitle && (
                            <div className="text-xs text-[#6B7280] font-medium mt-0.5">
                              {study.aboutClient.founderTitle}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Verified Trust Signals */}
                  <div className="lg:col-span-5 space-y-3">
                    {study.aboutClient.rating && (
                      <div className="bg-white border border-[#EAEAEA] rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1D2742]">
                            {study.aboutClient.rating.score} / 5.0 Rating
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            Over {study.aboutClient.rating.count} on {study.aboutClient.rating.source}
                          </div>
                        </div>
                      </div>
                    )}

                    {study.aboutClient.locations && (
                      <div className="bg-white border border-[#EAEAEA] rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1D2742]">
                            Centres Across Pune
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            {study.aboutClient.locations.join(" & ")}
                          </div>
                        </div>
                      </div>
                    )}

                    {study.aboutClient.established && (
                      <div className="bg-white border border-[#EAEAEA] rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                          <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1D2742]">
                            Established {study.aboutClient.established}
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            Classroom & Live Online Programs
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── THE CHALLENGE & THE SOLUTION ── */}
        <section className="py-20 bg-white border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10">
            <div className="space-y-16">
              {/* Challenge */}
              <div className="space-y-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  01 / The Challenge
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {study.challenge.title}
                </h2>
                <div
                  className="text-[#4A5568] leading-relaxed text-base space-y-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p>{study.challenge.description}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  02 / The Solution
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {study.solution.title}
                </h2>
                <div
                  className="text-[#4A5568] leading-relaxed text-base space-y-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p>{study.solution.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DID (5 Strategic Pillars) ── */}
        {study.whatWeDid && study.whatWeDid.length > 0 ? (
          <section className="py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]">
            <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
              <div className="text-center max-w-[640px] mx-auto mb-16 space-y-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Execution Strategy
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  What We Did
                </h2>
                <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A multi-channel growth system built across technical architecture, local authority, and targeted demand capture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.whatWeDid.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="bg-white rounded-2xl border border-[#EAEAEA] p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xl font-bold text-[#FC9C44]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {pillar.num}
                        </span>
                        <Sparkles className="h-4 w-4 text-[#FC9C44] opacity-50" />
                      </div>
                      <h3
                        className="text-base font-bold text-[#1D2742]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="text-xs text-[#6B7280] leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {pillar.description}
                      </p>
                    </div>

                    {pillar.deliverables && (
                      <ul className="space-y-2 pt-3 border-t border-[#EAEAEA]">
                        {pillar.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-[#4A5568]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Approach Roadmap Fallback */
          study.approach && (
            <section className="py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]">
              <div className="mx-auto max-w-[960px] px-6 lg:px-10">
                <div className="text-center max-w-[640px] mx-auto mb-16 space-y-3">
                  <span
                    className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Methodology
                  </span>
                  <h2
                    className="text-3xl font-bold text-[#1D2742]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Our Approach &amp; Roadmap
                  </h2>
                  <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    A systematic workflow engineered to isolate scaling bottlenecks and build compounding loops.
                  </p>
                </div>

                <div className={`grid ${gridColsMap[study.approach?.length || 4] || "md:grid-cols-4"} gap-8 relative`}>
                  <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-[#EAEAEA] -z-0" />
                  {study.approach.map((step, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white p-6 rounded-xl border border-[#EAEAEA] text-center space-y-3 z-10 shadow-sm"
                    >
                      <div
                        className="mx-auto h-12 w-12 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-lg"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {step.phase}
                      </div>
                      <h3
                        className="font-bold text-[#1D2742] text-sm"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-xs text-[#6B7280] leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        )}

        {/* ── THE RESULTS: BEFORE VS AFTER COMPARISON TABLE ── */}
        {study.resultsTable ? (
          <section className="py-20 bg-white border-b border-[#EAEAEA]">
            <div className="mx-auto max-w-[1000px] px-6 lg:px-10 space-y-12">
              <div className="text-center max-w-[640px] mx-auto space-y-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  03 / Verified Results
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  The Transformation — {study.resultsTable.timeframe}
                </h2>
                <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Direct before-and-after performance metrics verified across Google Analytics, Search Console, and ad accounts.
                </p>
              </div>

              {/* Before vs After Matrix Table */}
              <div className="overflow-hidden rounded-2xl border border-[#EAEAEA] shadow-sm bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1D2742] text-white text-xs uppercase tracking-wider">
                        <th className="py-4 px-6 font-semibold">Key Growth Metric</th>
                        <th className="py-4 px-6 font-semibold text-white/70">Before Engagement</th>
                        <th className="py-4 px-6 font-semibold text-[#FC9C44]">After {study.resultsTable.timeframe}</th>
                        <th className="py-4 px-6 font-semibold text-right">Net Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAEAEA] text-sm">
                      {study.resultsTable.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FAFAF8] transition-colors">
                          <td className="py-4 px-6 font-bold text-[#1D2742]">
                            {row.metric}
                          </td>
                          <td className="py-4 px-6 text-[#6B7280] font-mono">
                            {row.before}
                          </td>
                          <td className="py-4 px-6 font-bold text-[#1D2742] font-mono">
                            <span className="text-[#FC9C44] font-black text-base">{row.after}</span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {row.change}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Paid Search Highlight Banner */}
                {study.resultsTable.paidSearchHighlight && (
                  <div className="bg-[#FFF7ED] border-t border-[#FC9C44]/20 p-5 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#FC9C44] text-white flex items-center justify-center shrink-0">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div className="flex-1 text-xs sm:text-sm text-[#1D2742] font-medium leading-relaxed">
                      <strong className="font-bold text-[#FC9C44]">Paid Search Efficiency: </strong>
                      {study.resultsTable.paidSearchHighlight}
                    </div>
                  </div>
                )}
              </div>

              {/* 4 Stat Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {study.results.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAFAF8] p-6 rounded-xl border border-[#EAEAEA] flex flex-col items-center justify-center text-center space-y-1 shadow-sm"
                  >
                    <span
                      className="text-3xl sm:text-4xl font-black text-[#FC9C44]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {metric.value}
                    </span>
                    <span
                      className="text-[11px] font-bold text-[#1D2742] uppercase tracking-wider"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="text-[#4A5568] leading-relaxed text-sm sm:text-base text-center max-w-[720px] mx-auto pt-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {study.results.description}
              </p>
            </div>
          </section>
        ) : (
          /* Standard Results Fallback */
          <section className="py-20 bg-white border-b border-[#EAEAEA]">
            <div className="mx-auto max-w-[960px] px-6 lg:px-10">
              <div className="text-center max-w-[640px] mx-auto mb-16 space-y-3">
                <span
                  className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  03 / Verified Results
                </span>
                <h2
                  className="text-3xl font-bold text-[#1D2742]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Documented Client Outcomes
                </h2>
                <p className="text-[#6B7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Concrete, measurable performance indices checked and verified post-deployment.
                </p>
              </div>

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
                    <span
                      className="text-[11px] font-bold text-[#1D2742] uppercase tracking-wider"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
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
        )}

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
              <div className="flex flex-col items-center justify-center space-y-2">
                {study.testimonial.image && (
                  <img
                    src={study.testimonial.image}
                    alt={study.testimonial.author}
                    className="h-12 w-12 rounded-full object-cover border-2 border-[#FC9C44] shadow-md"
                  />
                )}
                <div>
                  <p
                    className="font-bold text-[#FC9C44] text-base"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {study.testimonial.author}
                  </p>
                  <p
                    className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {study.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── VISUAL PROOF GALLERY ── */}
        <section className="py-20 bg-[#FAFAF8] border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 space-y-10">
            <div className="text-center max-w-[640px] mx-auto space-y-2">
              <span
                className="text-xs font-bold uppercase tracking-wider text-[#FC9C44]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Visual Proof
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#1D2742]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Client Assets &amp; Live Systems
              </h2>
              <p
                className="text-xs sm:text-sm text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Direct captures representing the live optimized site presence, classroom programs, and documented growth.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {study.gallery && study.gallery.length > 0 ? (
                study.gallery.map((img, idx) => (
                  <BrowserPreview
                    key={idx}
                    src={img}
                    alt={`${study.client} Visual Asset ${idx + 1}`}
                    aspectRatio="video"
                    url="tarkashastra.co.in"
                    className="w-full shadow-md"
                  />
                ))
              ) : (
                <div className="md:col-span-2 max-w-[800px] mx-auto w-full">
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
              )}
            </div>
          </div>
        </section>

        {/* ── FINAL GROWTH AUDIT CTA ── */}
        <section className="py-16 bg-white border-b border-[#EAEAEA]">
          <div className="mx-auto max-w-[960px] px-6 lg:px-10 text-center space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#1D2742]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to engineer predictable, data-driven revenue growth?
            </h3>
            <p className="text-[#6B7280] text-sm max-w-[560px] mx-auto">
              Get a custom teardown of your current SEO, advertising funnel, and conversion bottlenecks — completely free.
            </p>
            <div className="pt-2">
              <Link
                to="/free-growth-audit"
                className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white bg-[#FC9C44] hover:bg-[#E88C35] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Your Free Growth Audit</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── RELATED CASE STUDIES ── */}
        <section className="py-20 bg-[#FAFAF8]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <h3
              className="text-2xl font-bold text-[#1D2742] tracking-tight mb-12 text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Other Documented Growth Stories
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
                    proofLabel={item.proofLabel}
                    proofDuration={item.proofDuration}
                    proofMetric={item.metricValue}
                    className="w-full"
                  />
                  <div className="space-y-1">
                    <div
                      className="text-2xl font-bold text-[#FC9C44] tracking-tight"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.metricValue}
                    </div>
                    <div
                      className="text-lg font-bold text-[#1D2742]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item.client}
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FC9C44] pt-2">
                      Explore Study <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
