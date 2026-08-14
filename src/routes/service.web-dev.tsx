import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Database,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/service/web-dev")({
  head: () => ({
    meta: [
      { title: "Website Development Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Website development services by Hegxcorp including responsive websites, custom development, ecommerce websites, performance optimisation, CMS development, website redesign, integrations, and maintenance.",
      },
    ],
  }),
  component: WebsiteDevelopmentPage,
});

const growthMetrics = [
  {
    value: "100%",
    title: "Responsive Builds",
    description:
      "Every website is planned for mobile, tablet, laptop, and desktop so users get a smooth experience on any screen.",
  },
  {
    value: "90+",
    title: "Performance Target",
    description:
      "We focus on clean code, optimised assets, fast-loading pages, and better Core Web Vitals.",
  },
  {
    value: "360°",
    title: "Design To Launch",
    description:
      "From planning and UI design to development, testing, launch, and maintenance, we support the complete website journey.",
  },
  {
    value: "24/7",
    title: "Online Presence",
    description:
      "Your website keeps explaining your services, building trust, and capturing enquiries even when your team is offline.",
  },
];

const websiteCapabilities = [
  {
    icon: LayoutDashboard,
    title: "Custom Website Design",
    description:
      "We design clean, conversion-focused websites that communicate your brand clearly and guide visitors toward action.",
    points: [
      "Brand-focused visual direction",
      "Clear page layouts and section flow",
      "Service pages designed for enquiries",
    ],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "We build scalable websites with modern frontend and backend systems tailored to your business requirements.",
    points: [
      "Reusable components",
      "Clean frontend structure",
      "Custom features and business logic",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    description:
      "We create ecommerce websites with product pages, checkout flows, payment integrations, and conversion-focused shopping experiences.",
    points: [
      "Product listing and detail pages",
      "Cart, checkout, and payment setup",
      "Mobile-friendly shopping journeys",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    description:
      "We make sure your website works smoothly across mobile, tablet, and desktop screens with polished responsive layouts.",
    points: [
      "Mobile-first layouts",
      "Readable content on all devices",
      "Touch-friendly buttons and forms",
    ],
  },
  {
    icon: Gauge,
    title: "Speed Optimisation",
    description:
      "We optimise loading speed, Core Web Vitals, image delivery, code structure, and performance for better user experience.",
    points: ["Optimised images and assets", "Faster page loading", "Better technical foundation"],
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "We help keep your website secure, updated, backed up, and running reliably after launch.",
    points: ["Security and updates", "Bug fixes and improvements", "New page and content support"],
  },
];

const developmentServices = [
  {
    title: "Website Design",
    answer:
      "We create modern website layouts that match your brand, improve user experience, and support business goals like leads, sales, enquiries, and trust-building. Each page is planned with clear content hierarchy, strong visuals, and practical calls to action.",
  },
  {
    title: "Frontend Development",
    answer:
      "We develop fast and responsive interfaces using modern frontend technologies so your website feels smooth and professional across devices. We focus on reusable components, clean code, animations where useful, and reliable browser behaviour.",
  },
  {
    title: "Backend Development",
    answer:
      "We build backend systems for forms, dashboards, content management, APIs, user data, admin panels, and business workflows so your website can support real operations beyond static pages.",
  },
  {
    title: "CMS Development",
    answer:
      "We build editable websites where your team can update pages, blogs, images, service content, FAQs, banners, and basic website sections without developer help.",
  },
  {
    title: "Ecommerce Website",
    answer:
      "We build online stores with product listings, category pages, cart, checkout, payments, order handling, promotional sections, and conversion-focused product experiences.",
  },
  {
    title: "Landing Pages",
    answer:
      "We create campaign landing pages for ads, lead generation, service promotions, product launches, events, and special offers with focused messaging and strong CTAs.",
  },
  {
    title: "Website Redesign",
    answer:
      "We redesign outdated websites into cleaner, faster, more conversion-focused digital experiences with improved layout, structure, content flow, mobile usability, and trust signals.",
  },
  {
    title: "Maintenance & Support",
    answer:
      "We provide ongoing support for updates, bug fixes, backups, security checks, performance improvements, content changes, new sections, and technical help after launch.",
  },
];

const processItems = [
  {
    title: "Discovery",
    answer:
      "We understand your business, target audience, goals, competitors, required pages, features, brand direction, and conversion priorities before starting the build.",
  },
  {
    title: "Strategy",
    answer:
      "We plan the website structure, user journey, page flow, content direction, technology stack, integrations, and launch roadmap.",
  },
  {
    title: "Design & Development",
    answer:
      "We design the interface and develop the website with responsive layouts, clean code, integrations, forms, CMS support, and performance best practices.",
  },
  {
    title: "Testing & Launch",
    answer:
      "We test the website across devices, browsers, speed, forms, links, CTAs, content sections, and key user flows before launching it live.",
  },
  {
    title: "Improve & Maintain",
    answer:
      "After launch, we monitor performance, fix issues, improve conversion sections, add new pages, and keep the website updated as your business grows.",
  },
];

const proofPoints = [
  {
    icon: Target,
    title: "Conversion-Focused Pages",
    description:
      "We structure pages to explain your offer clearly, reduce confusion, and guide visitors toward enquiries, calls, purchases, or demo requests.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Foundation",
    description:
      "We build with clear headings, fast pages, readable structure, metadata readiness, and content sections that support future SEO growth.",
  },
  {
    icon: Users,
    title: "Better User Journey",
    description:
      "Navigation, content blocks, proof sections, service details, and CTAs are planned so users can find what they need quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Trust-Building Content",
    description:
      "We add proof sections, clear service details, credibility signals, and helpful answers so visitors feel confident before contacting you.",
  },
];

const techFeatures = [
  {
    icon: MonitorSmartphone,
    title: "Responsive UI",
    description:
      "Flexible layouts, readable text, balanced spacing, and smooth browsing across real device sizes.",
  },
  {
    icon: Database,
    title: "CMS & Dynamic Content",
    description:
      "Editable service pages, blogs, resources, FAQs, banners, images, and structured website content.",
  },
  {
    icon: Globe2,
    title: "Third-Party Integrations",
    description:
      "Lead forms, CRM connections, payment gateways, analytics, maps, chat tools, and API integrations.",
  },
  {
    icon: LineChart,
    title: "Tracking & Analytics",
    description:
      "Analytics, conversion tracking, event setup, and reporting foundations for better marketing decisions.",
  },
];

const industries = [
  "Corporate",
  "Healthcare",
  "Education",
  "Real Estate",
  "Ecommerce",
  "Manufacturing",
  "SaaS",
  "Hospitality",
  "Professional Services",
  "Logistics",
  "Finance",
  "Technology",
];

const faqs = [
  {
    question: "What are website development services?",
    answer:
      "Website development services include planning, designing, building, testing, launching, and maintaining a website for your business. It can include UI/UX design, frontend development, backend systems, CMS setup, ecommerce features, integrations, performance optimisation, and support.",
  },
  {
    question: "How long does website development take?",
    answer:
      "A basic business website can take 2 to 4 weeks. A custom website, CMS website, or ecommerce project can take 4 to 8 weeks or more depending on pages, features, content, integrations, approvals, and testing requirements.",
  },
  {
    question: "Do you build mobile responsive websites?",
    answer:
      "Yes. Every website is built to work properly across mobile, tablet, laptop, and desktop screens with responsive layouts, readable content, and touch-friendly interactions.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign your current website with better structure, speed, visuals, SEO basics, mobile usability, and conversion-focused sections.",
  },
  {
    question: "Can you build ecommerce websites?",
    answer:
      "Yes. We can build ecommerce websites with product catalogues, categories, product detail pages, cart, checkout, payment gateway setup, order flow, and mobile-friendly shopping experiences.",
  },
  {
    question: "Will I be able to update website content myself?",
    answer:
      "Yes, if CMS functionality is included. We can create editable pages, blogs, banners, service sections, images, FAQs, and other content areas your team can manage.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. Maintenance can include updates, bug fixes, backups, security checks, performance improvements, new page additions, content changes, and technical support.",
  },
  {
    question: "Why should a business invest in professional website development?",
    answer:
      "A professionally developed website improves credibility, user experience, speed, mobile usability, lead quality, campaign performance, and long-term scalability. It becomes the foundation for SEO, paid ads, social media, content marketing, and sales conversations.",
  },
];

function WebsiteDevelopmentPage() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openProcess, setOpenProcess] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#06133D]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#050B24] px-6 pb-24 pt-32 text-white lg:px-10">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 12% 18%, rgba(252,156,68,0.28), transparent 27%), radial-gradient(circle at 78% 16%, rgba(80,220,190,0.16), transparent 29%), radial-gradient(circle at 72% 78%, rgba(126,93,255,0.18), transparent 30%), linear-gradient(135deg, #050B24 0%, #081640 48%, #06133D 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.68) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.68) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#FC9C44] shadow-sm">
                <Globe2 className="h-4 w-4" />
                Website Development
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                Website Development Services
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
                Build a fast, responsive, and conversion-focused website that helps your business
                attract visitors, generate leads, build credibility, and grow online.
              </p>

              {/* <p className="mt-5 max-w-2xl text-base leading-8 text-[#344B6A]">
                                From custom website design and React development to CMS, ecommerce, integrations, speed optimisation, and maintenance, Hegxcorp creates websites that support real business outcomes.
                            </p> */}

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#E88C35]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-4 text-sm font-bold text-white transition hover:border-[#FC9C44] hover:bg-white/12"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#FC9C44]/20" />
              <div className="relative overflow-hidden rounded-[32px] bg-[#06133D] p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      Website System
                    </p>
                    <h2 className="mt-2 text-2xl font-black">Built For Growth</h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]">
                    <LayoutDashboard className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {[
                    "Responsive Layouts",
                    "Fast Loading Pages",
                    "Conversion Sections",
                    "CMS & Integrations",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <span className="font-bold">{item}</span>
                      <CheckCircle2 className="h-5 w-5 text-[#FC9C44]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-6 py-10 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
            {growthMetrics.map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <strong className="text-4xl font-black text-[#FC9C44]">{item.value}</strong>
                <p className="mt-2 font-bold text-[#06133D]">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Why It Matters
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Your website should do more than exist online
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                A strong website helps visitors understand your business, trust your expertise,
                compare your services, and take the next step. It supports SEO, paid ads, social
                media, email campaigns, sales conversations, and everyday brand credibility.
              </p>

              <p>
                We combine UI/UX design, content structure, clean development, speed, responsive
                behaviour, integrations, and ongoing support so your website becomes a practical
                growth asset, not just a digital brochure.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Website Capabilities
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Complete website systems for digital growth
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500">
                From first impression to final enquiry, every website section is planned to improve
                clarity, speed, trust, and conversion.
              </p>

              <div className="mt-8 border-y border-slate-200 py-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  Focus Areas
                </p>

                <div className="mt-5 grid gap-4">
                  {[
                    "Clear page structure",
                    "Strong service storytelling",
                    "Conversion-focused calls to action",
                    "Responsive layouts for every screen",
                    "Speed, SEO, and integration readiness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm font-bold leading-6 text-[#06133D]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FC9C44]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-500">
                The goal is to make your website easier to understand, easier to manage, and easier
                to scale as your business grows.
              </p>
            </div>

            <div>
              {websiteCapabilities.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === websiteCapabilities.length - 1;

                return (
                  <div
                    key={item.title}
                    className={`grid gap-5 py-7 md:grid-cols-[56px_1fr] ${
                      isLast ? "" : "border-b border-slate-200"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-sm font-bold text-[#06133D]"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FC9C44]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Services & Process
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                From idea to launch
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500">
                We turn your website requirement into a structured digital product through planning,
                design, development, testing, launch, and long-term improvement.
              </p>
            </div>

            <div className="grid overflow-hidden border-y border-slate-300 lg:grid-cols-2">
              <div className="bg-white py-4 pr-0 lg:pr-10">
                <h3 className="mb-4 text-2xl font-black">Services</h3>

                {developmentServices.map((item, index) => {
                  const isOpen = openService === index;

                  return (
                    <div key={item.title} className="border-b border-slate-200 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenService(isOpen ? null : index)}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="text-lg font-bold text-[#06133D]">{item.title}</span>

                        <ChevronRight
                          className={`h-5 w-5 shrink-0 text-[#FC9C44] transition ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <p className="pb-6 pr-8 text-sm leading-7 text-slate-500">{item.answer}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#06133D] p-6 text-white lg:p-8">
                <h3 className="mb-4 text-2xl font-black">Process</h3>

                {processItems.map((item, index) => {
                  const isOpen = openProcess === index;

                  return (
                    <div key={item.title} className="border-b border-white/10 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setOpenProcess(isOpen ? null : index)}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span className="flex items-center gap-4 text-lg font-bold">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC9C44] text-sm text-white">
                            {index + 1}
                          </span>
                          {item.title}
                        </span>

                        <ChevronRight
                          className={`h-5 w-5 shrink-0 text-[#FC9C44] transition ${
                            isOpen ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <p className="pb-6 pl-14 pr-8 text-sm leading-7 text-white/65">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Business Outcomes
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Built for trust, performance, and conversions
              </h2>

              <p className="mt-6 text-base leading-10 text-slate-500">
                Every important section is planned to make your offer easier to understand. The
                content helps visitors see your value, services, and trust signals clearly. Each
                page then guides them toward the next action with confidence.
              </p>
            </div>

            <div className="columns-1 gap-10 sm:columns-2">
              {proofPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="mb-8 flex break-inside-avoid items-start gap-4 border-b border-slate-200 pb-7"
                  >
                    <Icon className="mt-1 h-7 w-7 shrink-0 text-[#FC9C44]" />
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Development Stack
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Design, code, content, and integrations working together
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {techFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="border-l-2 border-[#FC9C44] pl-6">
                    <Icon className="mb-6 h-8 w-8 text-[#FC9C44]" />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Industries
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Website development for many business models
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500">
                We help different industries turn services, campaigns, products, and enquiries into
                a stronger online experience.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 border-b border-slate-200 pb-5 font-bold"
                >
                  <Building2 className="h-5 w-5 shrink-0 text-[#FC9C44]" />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Build",
                text: "Reliable code, stable forms, safe integrations, backups, and support after launch.",
              },
              {
                icon: Gauge,
                title: "Fast Performance",
                text: "Optimised assets, clean structure, smooth page loading, and performance-focused development.",
              },
              {
                icon: Smartphone,
                title: "Mobile Friendly",
                text: "Polished responsive layouts across phones, tablets, laptops, and desktop screens.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-slate-300 pt-7">
                  <Icon className="mb-6 h-8 w-8 text-[#FC9C44]" />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-10">
          <div className="pointer-events-none absolute left-[28%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#DCEBFF] blur-3xl" />
          <div className="pointer-events-none absolute left-[36%] top-[62%] h-56 w-56 rounded-full bg-[#FF8FA3]/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="max-w-xl text-5xl font-black leading-tight text-[#0B3F78] md:text-6xl">
                Frequently
                <br />
                Asked Questions
              </h2>

              <p className="mt-5 text-xl font-medium text-[#2E2E2E]">
                Find answers to the most common questions.
              </p>
            </div>

            <div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div key={faq.question} className="border-b border-[#BFD0DF]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="group flex w-full items-start gap-5 py-7 text-left"
                    >
                      <span className="mt-1 w-4 shrink-0 text-lg font-light leading-none text-[#9AB6CC]">
                        {isOpen ? "-" : "+"}
                      </span>

                      <span className="flex-1">
                        <span
                          className={`block text-lg font-semibold leading-7 ${
                            isOpen ? "text-[#0B3F78]" : "text-[#2F2F2F]"
                          }`}
                        >
                          {faq.question}
                        </span>

                        {isOpen && (
                          <span className="mt-7 block max-w-2xl text-base font-medium leading-7 text-[#72808E]">
                            {faq.answer}
                          </span>
                        )}
                      </span>
                    </button>
                  </div>
                );
              })}
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
                  Need a website built for real business growth?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Let us plan a website that explains your services clearly, improves trust,
                  supports campaigns, and gives visitors a smooth path to enquiry.
                </p>
              </div>

              <div className="border-l border-white/15 pl-8">
                <LayoutDashboard className="mb-5 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-2xl font-black">Ready to build?</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Get planning, UI, frontend, backend, integrations, testing, launch, and
                  maintenance in one place.
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
