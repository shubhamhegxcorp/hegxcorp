import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Smartphone, Wrench } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServiceDirectory } from "@/components/site/ServiceDirectory";
import ShapeGrid from "@/components/ShapeGrid";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Explore Hegxcorp services including website development, web application development, ecommerce development, WordPress development, SEO, digital marketing, UI/UX design, branding, and maintenance.",
      },
    ],
  }),
  component: OurServicesPage,
});

const benefits = [
  "Business-focused digital strategy",
  "Modern responsive design",
  "Scalable frontend and backend systems",
  "SEO-friendly page structure",
  "Performance and speed optimisation",
  "Secure development practices",
  "Clear communication and support",
  "Launch-ready testing and maintenance",
];

const process = [
  "Discover business goals",
  "Plan digital structure",
  "Design user experience",
  "Build and integrate",
  "Test, launch, improve",
];

function OurServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FB] text-[#06133D]">
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

          <div className="relative mx-auto flex min-h-[560px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[760px] lg:px-10">
            <div className="max-w-4xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm">
                <Wrench className="h-4 w-4" />
                Our Services
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl">
                Digital services built for business growth
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#52607A] sm:text-lg">
                From websites and web applications to ecommerce, WordPress, SEO, marketing, and
                maintenance, Hegxcorp helps businesses build a stronger digital presence.
              </p>

              <div className="mt-10 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["Websites", "Development"],
                  ["Apps", "Dashboards"],
                  ["Stores", "E-Commerce"],
                  ["Growth", "SEO & Marketing"],
                  ["Automation", "Ai Agents & Solutions"],
                ].map(([top, bottom]) => (
                  <div key={top} className="flex items-center gap-4">
                    <span className="h-3 w-3 rounded-full bg-[#FC9C44]" />
                    <div>
                      <p className="text-lg font-black text-[#06133D]">{top}</p>
                      <p className="text-sm font-semibold text-slate-500">{bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceDirectory />

        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Why Hegxcorp
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Practical digital systems, not repeated templates.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70">
                We focus on building digital solutions that are useful, scalable, fast, and easy to
                improve after launch.
              </p>

              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[32px] bg-white/15 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-[#06133D] p-6">
                  <CheckCircle2 className="mb-5 h-5 w-5 text-[#FC9C44]" />
                  <p className="text-base font-bold leading-7 text-white/85">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                  Our Process
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  From first discussion to launch.
                </h2>
              </div>

              <div className="space-y-0">
                {process.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[70px_1fr] border-t border-slate-200 py-7 last:border-b"
                  >
                    <p className="text-sm font-black text-[#FC9C44]">0{index + 1}</p>

                    <div className="flex items-center justify-between gap-6">
                      <h3 className="text-2xl font-black">{item}</h3>
                      <ArrowRight className="h-5 w-5 text-slate-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-4 md:grid-cols-3">
              <div className="border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8">
                <Smartphone className="mb-6 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-xl font-black">Responsive Experience</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Every digital solution is planned for smooth use across mobile, tablet, laptop,
                  and desktop screens.
                </p>
              </div>

              <div className="border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8">
                <ShieldCheck className="mb-6 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-xl font-black">Secure Foundation</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  We build with stable structure, reliable forms, protected flows, and maintainable
                  code.
                </p>
              </div>

              <div className="border-t-4 border-[#FC9C44] bg-[#F7F8FB] p-8">
                <Gauge className="mb-6 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-xl font-black">Performance Focus</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Speed, clean structure, strong UX, and conversion-focused sections are considered
                  from the start.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-10">
          <div className="mx-auto overflow-hidden bg-[#06133D] text-white lg:max-w-6xl">
            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                  Start Your Project
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight">
                  Need a digital solution built for real business growth?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Share your goals, website needs, app idea, ecommerce plan, or growth challenge. We
                  will help you choose the right service path and next steps.
                </p>
              </div>

              <div className="border-l border-white/15 pl-8">
                <h3 className="text-2xl font-black">Ready to start?</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Get strategy, design, development, marketing, launch, and support in one focused
                  team.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
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
