import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import ahrefsLogo from "@/assets/about/ahrefs-logo.webp";
import hegxcorpStory from "@/assets/about/hegxcorp-story.webp";
import majesticLogo from "@/assets/about/majestic-logo.webp";
import mozLogo from "@/assets/about/moz-logo.webp";
import ourMission from "@/assets/about/our-mission.webp";
import ourStory from "@/assets/about/our-story.webp";
import ourValues from "@/assets/about/our-values.webp";
import searchEngineLandLogo from "@/assets/about/search-engine-land.webp";
import semrushLogo from "@/assets/about/appreciation-3.webp";
import similarwebLogo from "@/assets/about/similarweb-logo.webp";
import ShapeGrid from "@/components/ShapeGrid";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hegxcorp | Digital Transformation & Growth Partners" },
      {
        name: "description",
        content:
          "Meet Hegxcorp, a Mumbai-founded digital growth agency helping businesses turn technology, design, and marketing into measurable progress.",
      },
    ],
  }),
  component: AboutPage,
} as never);

const values = [
  {
    icon: Lightbulb,
    title: "Innovation for Growth",
    description:
      "We challenge familiar thinking and use technology, creativity, and insight to uncover better ways forward.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity in Every Pixel",
    description:
      "We communicate clearly, make responsible decisions, and build every partnership on trust and transparency.",
  },
  {
    icon: BadgeCheck,
    title: "Excellence in Execution",
    description:
      "We care about the details—from the first strategic decision to the final experience your customers receive.",
  },
  {
    icon: Handshake,
    title: "Collaboration Is Key",
    description:
      "The strongest outcomes come from working as one team, sharing context, and staying aligned from start to finish.",
  },
];

const appreciationLogos = [
  { src: semrushLogo, alt: "Semrush" },
  { src: mozLogo, alt: "Moz" },
  { src: similarwebLogo, alt: "Similarweb" },
  { src: searchEngineLandLogo, alt: "Search Engine Land" },
  { src: majesticLogo, alt: "Majestic" },
  { src: ahrefsLogo, alt: "Ahrefs" },
];

const valueIconMap: Record<number, React.ComponentType<any>> = {
  0: Lightbulb,
  1: ShieldCheck,
  2: BadgeCheck,
  3: Handshake,
};

function AboutPage() {
  const { data: heroData } = useWebsiteSection("about.hero");
  const { data: whoWeAreData } = useWebsiteSection("about.whoWeAre");
  const { data: ourMissionData } = useWebsiteSection("about.ourMission");
  const { data: ourValuesData } = useWebsiteSection("about.ourValues");
  return (
    <div className="min-h-screen  bg-white text-[#06133D]">
      <Header />

      <main>
        <section className="relative isolate min-h-[560px] overflow-hidden bg-white lg:min-h-[640px]">
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
              className="h-full w-full"
            />
          </div>
          <div className="relative mx-auto flex min-h-[560px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[800px] lg:px-10">
            <div className="max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm">
                <Sparkles className="h-4 w-4" />
                {heroData.tagline}
              </span>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl">
                {heroData.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#52607A] sm:text-lg">
                {heroData.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to={heroData.buttonUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:-translate-y-0.5 hover:bg-[#ffad63]"
                >
                  {heroData.buttonText} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={heroData.secondaryButtonUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-white px-6 py-3.5 text-sm font-semibold text-[#06133D] shadow-sm transition hover:bg-[#FAFAF8]"
                >
                  {heroData.secondaryButtonText}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#FFF4E8]" />
              <img
                src={hegxcorpStory}
                alt="Hegxcorp team collaborating on a global digital strategy"
                className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_24px_70px_rgba(6,19,61,0.16)]"
              />
              {/* <div className="absolute -bottom-3 right-5 rounded-2xl bg-[#06133D] px-6 py-5 text-white shadow-xl sm:right-8">
                <p className="text-3xl font-bold text-[#FC9C44]">2016</p>
                <p className="mt-1 text-sm text-white/70">Founded in Mumbai</p>
              </div> */}
            </div>

            <div className="pt-8 lg:pt-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]">
                {whoWeAreData.tagline}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {whoWeAreData.title}
              </h2>
              <div
                className="mt-6 text-base leading-8 text-[#52607A] sm:text-lg space-y-4"
                dangerouslySetInnerHTML={{
                  __html: whoWeAreData.description.replace(/\n/g, "<br/>"),
                }}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E8ECF5] bg-[#F8F9FC] p-5">
                  <Target className="h-6 w-6 text-[#FC9C44]" />
                  <p className="mt-3 font-semibold">Strategy with purpose</p>
                </div>
                <div className="rounded-2xl border border-[#E8ECF5] bg-[#F8F9FC] p-5">
                  <Award className="h-6 w-6 text-[#FC9C44]" />
                  <p className="mt-3 font-semibold">Work built to perform</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F8FB] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]">
                Our Story
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                Where creativity meets strategy.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#52607A] sm:text-lg">
                Founder Akshay Jadia started Hegxcorp in Mumbai in 2016 with a focused mission: help
                small and medium-sized businesses navigate the fast-changing world of digital
                marketing and design.
              </p>
              <p className="mt-4 text-base leading-8 text-[#52607A] sm:text-lg">
                From the beginning, the goal has been to make high-quality digital services more
                accessible and affordable—without losing the strategic thinking and care that create
                meaningful results.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={ourStory}
                alt="A team discussing global digital opportunities"
                className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[0_24px_70px_rgba(6,19,61,0.14)]"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#06133D] py-20 text-white sm:py-24 lg:py-28">
          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#FC9C44]/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
            <div>
              <img
                src={ourMission}
                alt="A connected world illustrating Hegxcorp's global mission"
                className="aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-2xl ring-1 ring-white/10"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]">
                {ourMissionData.tagline}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {ourMissionData.title}
              </h2>
              <div
                className="mt-6 text-base leading-8 text-white/70 sm:text-lg space-y-4"
                dangerouslySetInnerHTML={{
                  __html: ourMissionData.description.replace(/\n/g, "<br/>"),
                }}
              />
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FFB36E] transition hover:text-white"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]">
                {ourValuesData.tagline}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {ourValuesData.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#52607A] sm:text-lg">
                {ourValuesData.description}
              </p>
            </div>

            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <img
                src={ourValues}
                alt="A creative workspace representing Hegxcorp's values"
                className="h-full min-h-[420px] w-full rounded-[1.75rem] object-cover"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                {(ourValuesData.values || []).map(({ title, description }: any, index: number) => {
                  const Icon = valueIconMap[index % 4] || Lightbulb;
                  return (
                    <article
                      key={title}
                      className="group rounded-[1.5rem] border border-[#E7EAF2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FC9C44]/60 hover:shadow-[0_20px_50px_rgba(6,19,61,0.1)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1E3] text-[#E87922] transition group-hover:bg-[#FC9C44] group-hover:text-[#06133D]">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-sm font-bold text-[#06133D]/25">0{index + 1}</span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#647089]">{description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8ECF5] bg-[#F7F8FB] py-16 sm:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E87922]">
                Appreciations
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Recognized across the digital landscape
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {appreciationLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex min-h-40 items-center justify-center rounded-2xl border border-[#E5E9F2] bg-white px-5 py-6"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    className="h-25 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 sm:py-24 lg:px-10">
          <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-[#06133D] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#FC9C44]/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-[#3A65FF]/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFB36E]">
                Let&apos;s Grow Together
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Ready to turn your next idea into measurable growth?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
                Tell us where you want to go. We&apos;ll help you find the clearest digital path to
                get there.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-6 py-3.5 text-sm font-semibold text-[#06133D] transition hover:bg-[#ffad63]"
                >
                  Get a Free Growth Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
