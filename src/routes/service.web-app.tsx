import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Code2,
  Database,
  FileCheck2,
  Gauge,
  Globe2,
  LayoutDashboard,
  Layers3,
  MonitorSmartphone,
  PlugZap,
  Rocket,
  ServerCog,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/service/web-app")({
  head: () => ({
    meta: [
      { title: "Web Application Development Services | Hegxcorp" },
      {
        name: "description",
        content:
          "Web application development services by Hegxcorp including custom web apps, dashboards, portals, SaaS platforms, backend systems, API integrations, performance optimisation, and maintenance.",
      },
    ],
  }),
  component: WebApplicationPage,
});

const metrics = [
  { value: "100%", label: "Custom Build" },
  { value: "24/7", label: "Browser Access" },
  { value: "3x", label: "Faster Workflows" },
  { value: "360°", label: "Full Support" },
];

const services = [
  {
    icon: LayoutDashboard,
    title: "Custom Web Applications",
    text: "Business-specific web apps built around your workflows, users, data, and long-term growth goals.",
  },
  {
    icon: Code2,
    title: "Frontend Application Development",
    text: "Fast, responsive, and user-friendly interfaces for dashboards, portals, SaaS products, and internal tools.",
  },
  {
    icon: ServerCog,
    title: "Backend Development",
    text: "Secure backend systems for authentication, APIs, databases, user roles, business logic, and automation.",
  },
  {
    icon: ShoppingCart,
    title: "SaaS & Portal Development",
    text: "SaaS platforms, customer portals, admin panels, booking systems, CRM tools, and business web apps.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Application UI",
    text: "Interfaces that work smoothly across desktop, laptop, tablet, and mobile screens.",
  },
  {
    icon: Gauge,
    title: "Performance Optimisation",
    text: "Optimised loading, database queries, APIs, frontend code, and overall application performance.",
  },
];

const appTypes = [
  [
    "Business Dashboards",
    "Track users, enquiries, orders, reports, team activity, and key business data.",
  ],
  [
    "Customer Portals",
    "Give customers a secure place to manage requests, submit forms, and track updates.",
  ],
  [
    "Internal Tools",
    "Replace spreadsheets and manual processes with systems built around real operations.",
  ],
  [
    "Automation Systems",
    "Automate approvals, notifications, data movement, and repetitive admin tasks.",
  ],
];

const features = [
  "Custom web application development",
  "Admin dashboard and user portal",
  "SaaS platform development",
  "Authentication and user role management",
  "Backend API and database development",
  "Third-party API integrations",
  "Responsive application interface",
  "Performance, security, and maintenance",
];

const architecture = [
  {
    title: "Clean UI Layer",
    text: "Responsive screens, reusable components, navigation, forms, tables, filters, and user-friendly workflows.",
  },
  {
    title: "Secure Logic Layer",
    text: "Authentication, permissions, business rules, validations, protected routes, and safe API communication.",
  },
  {
    title: "Reliable Data Layer",
    text: "Database structure, records, user data, transactions, analytics, backups, and scalable data handling.",
  },
];

const process = [
  [
    "Discovery",
    "Understand your business process, users, required features, workflows, data needs, and goals.",
  ],
  [
    "Planning",
    "Plan the structure, roles, database, screens, backend logic, integrations, and roadmap.",
  ],
  [
    "UI Design",
    "Design practical application screens that make complex workflows simple for users.",
  ],
  [
    "Development",
    "Build frontend screens, backend systems, APIs, databases, authentication, and core features.",
  ],
  [
    "Testing & Launch",
    "Test features, responsiveness, security, forms, APIs, user flows, and deploy the app.",
  ],
];

const useCases = [
  "CRM and lead management systems",
  "Booking and appointment platforms",
  "Vendor, customer, and employee portals",
  "Inventory and order management tools",
  "Reporting and analytics dashboards",
  "Subscription-based SaaS products",
  "Approval and document workflows",
  "Learning, support, and service portals",
];

const integrations = [
  {
    icon: PlugZap,
    title: "API Integrations",
    text: "Connect CRMs, payment gateways, maps, email tools, WhatsApp, analytics, accounting software, and more.",
  },
  {
    icon: BellRing,
    title: "Notifications",
    text: "Add email, SMS, WhatsApp, dashboard alerts, status updates, reminders, and workflow notifications.",
  },
  {
    icon: FileCheck2,
    title: "Forms & Reports",
    text: "Capture data, generate reports, export records, review submissions, and manage business information clearly.",
  },
  {
    icon: UsersRound,
    title: "User Roles",
    text: "Create admins, staff users, customers, managers, and custom permission levels for controlled access.",
  },
];

const faqs = [
  {
    question: "What is web application development?",
    answer:
      "Web application development is the process of building interactive software that runs in a browser, such as dashboards, portals, SaaS platforms, booking systems, CRM tools, and internal business applications.",
  },
  {
    question: "Do you build custom web applications?",
    answer:
      "Yes. We build custom web applications based on your business workflow, users, features, data structure, integrations, and long-term goals.",
  },
  {
    question: "Can you build dashboards and admin panels?",
    answer:
      "Yes. We build dashboards, admin panels, customer portals, analytics views, user management systems, and internal tools.",
  },
  {
    question: "Will my web application be secure?",
    answer:
      "Yes. We build web applications with secure authentication, user roles, protected routes, safe API structure, and reliable backend practices.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We can connect your web application with CRMs, payment gateways, analytics tools, email systems, maps, WhatsApp tools, accounting software, and other APIs.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide maintenance, bug fixes, feature improvements, performance optimisation, updates, and technical support after launch.",
  },
];

function WebApplicationPage() {
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
                Web Application
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl">
                Web Application {/* Development */} Services
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
                Build a secure, scalable, and high-performance web application that simplifies
                business operations, improves user experience, and supports long-term growth.
              </p>

              {/* <p className="mt-5 max-w-2xl text-base leading-8 text-[#344B6A]">
                                From dashboards and portals to SaaS products, automation systems,
                                API integrations, and internal business tools, Hegxcorp builds
                                practical web apps that help teams work faster.
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
                      Application Stack
                    </p>
                    <h2 className="mt-2 text-2xl font-black">Modern App Build</h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC9C44]">
                    <Database className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {["User Dashboards", "Backend Systems", "API Integration", "Secure Login"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-white/10 pb-5 last:border-0 last:pb-0"
                      >
                        <span className="font-bold">{item}</span>
                        <CheckCircle2 className="h-5 w-5 text-[#FC9C44]" />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-6 py-10 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <strong className="text-4xl font-black text-[#FC9C44]">{item.value}</strong>
                <p className="mt-2 font-bold text-[#06133D]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                What We Build
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Complete web application solutions for modern businesses
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-500">
                Instead of forcing your team into ready-made software, we build browser-based
                systems that match your exact workflow, data structure, approval process, reporting
                needs, user roles, and daily operations.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-500">
                Every module is planned to reduce manual work, improve visibility, and give your
                team a cleaner way to manage tasks, customers, requests, and business information
                from one secure application.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-500">
                Whether you need a dashboard, customer portal, SaaS platform, booking system, CRM
                workflow, or internal management tool, the application is shaped around how your
                business actually runs.
              </p>
            </div>

            <div>
              {services.map((service, index) => {
                const Icon = service.icon;
                const isLast = index === services.length - 1;

                return (
                  <div
                    key={service.title}
                    className={`grid gap-5 py-7 md:grid-cols-[56px_1fr] ${
                      isLast ? "" : "border-b border-slate-200"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06133D] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">{service.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                App Types
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Built around your workflow, not generic templates
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {appTypes.map(([title, text], index) => (
                <div key={title} className="flex gap-6 border-t border-slate-300 pt-7">
                  <span className="text-5xl font-black text-[#FC9C44]/40">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-3 leading-8 text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Capabilities
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Applications built for workflows, users, and scale
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                We create web applications that are easy to use, secure, scalable, fast, and
                structured around the way your team and customers actually work.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
              >
                Discuss Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="columns-1 gap-10 sm:columns-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="mb-5 flex break-inside-avoid items-start gap-3 border-b border-white/10 pb-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#FC9C44]" />
                  <p className="text-sm font-semibold leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Architecture
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Strong structure behind every screen
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-500">
                Good web applications need more than attractive screens. We plan the interface,
                logic, database, security, integrations, and future improvements together.
              </p>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-8">
              {architecture.map((item, index) => (
                <div key={item.title} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full bg-[#FC9C44] text-xs font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Integrations
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Connect your app with the tools your business already uses
              </h2>
            </div>

            <div className="divide-y divide-slate-300 border-y border-slate-300">
              {integrations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-5 py-7 md:grid-cols-[56px_0.45fr_1fr] md:items-center"
                  >
                    <Icon className="h-8 w-8 text-[#FC9C44]" />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-500">{item.text}</p>
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
                Use Cases
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Web apps for real business operations
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-500">
                We help businesses move important workflows into reliable digital systems that are
                easier to manage, measure, and improve.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-slate-200 pb-5 font-bold"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FC9C44]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Work Process
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                How we develop your web application
              </h2>
            </div>

            <div className="overflow-hidden border-y border-slate-300">
              {process.map(([title, text], index) => (
                <div
                  key={title}
                  className="grid gap-4 border-b border-slate-300 py-7 last:border-b-0 md:grid-cols-[90px_0.35fr_1fr]"
                >
                  <span className="text-3xl font-black text-[#FC9C44]">0{index + 1}</span>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="text-sm leading-7 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
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
                  Need a secure web application built for real business workflows?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Share your idea, workflow, dashboard requirement, portal concept, or SaaS plan. We
                  will help you turn it into a clear development roadmap.
                </p>
              </div>

              <div className="border-l border-white/15 pl-8">
                <Layers3 className="mb-5 h-8 w-8 text-[#FC9C44]" />
                <h3 className="text-2xl font-black">Ready to build?</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Get planning, UI, frontend, backend, APIs, testing, launch, and maintenance in one
                  place.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
                >
                  Contact Us
                  <Rocket className="h-4 w-4" />
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
