import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ServiceLeadForm } from "@/components/site/ServiceLeadForm";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Gauge,
  Globe2,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Truck,
  Rocket,
  Layers3,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/service/e-comm")({
  head: () => ({
    meta: [
      { title: "E-Commerce Development Services | Hegxcorp" },
      {
        name: "description",
        content:
          "E-commerce development services by Hegxcorp including online store design, product pages, cart, checkout, payment integration, WooCommerce, Shopify, performance optimisation, and ecommerce maintenance.",
      },
    ],
  }),
  component: EcommercePage,
});

const services = [
  {
    icon: ShoppingCart,
    title: "Online Store Development",
    text: "Custom ecommerce websites built to sell products, manage orders, and create a smooth shopping experience.",
  },
  {
    icon: ShoppingBag,
    title: "Product Page Design",
    text: "High-converting product pages with strong layouts, images, pricing, descriptions, variants, and CTAs.",
  },
  {
    icon: CreditCard,
    title: "Cart & Checkout",
    text: "Simple cart and checkout flows with payment gateways, coupons, taxes, shipping, and order confirmation.",
  },
  {
    icon: PackageCheck,
    title: "Order Management",
    text: "Systems for managing products, inventory, customers, payments, shipping, and order updates.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    text: "Responsive ecommerce experiences that make browsing and buying easy on mobile, tablet, and desktop.",
  },
  {
    icon: Gauge,
    title: "Speed Optimisation",
    text: "Fast-loading store pages, optimised images, clean code, caching, and performance-focused improvements.",
  },
];

const features = [
  "Custom ecommerce website design",
  "Product listing and category pages",
  "Cart, checkout, and payment gateway setup",
  "Coupons, discounts, taxes, and shipping rules",
  "Customer accounts and order tracking",
  "Inventory and product management",
  "Mobile responsive shopping experience",
  "Analytics, SEO setup, and conversion tracking",
];

const process = [
  {
    title: "Discovery",
    text: "We understand your products, customers, pricing, categories, shipping rules, payment needs, and business goals.",
  },
  {
    title: "Store Planning",
    text: "We plan the store structure, product flow, checkout journey, integrations, admin system, and launch roadmap.",
  },
  {
    title: "Design",
    text: "We design clean ecommerce pages for homepage, categories, products, cart, checkout, and key conversion sections.",
  },
  {
    title: "Development",
    text: "We build the ecommerce website with responsive layouts, product management, payments, shipping, and order systems.",
  },
  {
    title: "Testing & Launch",
    text: "We test products, checkout, payments, forms, responsiveness, speed, emails, and order flows before launch.",
  },
];

const faqs = [
  {
    question: "What is e-commerce development?",
    answer:
      "E-commerce development is the process of designing and building an online store where customers can browse products, add items to cart, make payments, and place orders.",
  },
  {
    question: "Can you build a custom online store?",
    answer:
      "Yes. We build custom ecommerce stores based on your products, brand, customer journey, payment needs, shipping rules, and business goals.",
  },
  {
    question: "Do you integrate payment gateways?",
    answer:
      "Yes. We can integrate payment gateways for online payments, checkout, order confirmation, and transaction handling.",
  },
  {
    question: "Will the store work on mobile?",
    answer:
      "Yes. Every ecommerce website is built to work smoothly across mobile, tablet, laptop, and desktop screens.",
  },
  {
    question: "Do you provide ecommerce support after launch?",
    answer:
      "Yes. We provide ecommerce maintenance, bug fixes, product updates, performance improvements, security checks, and technical support.",
  },
];

function EcommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#06133D]">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[#050B24] px-6 pb-20 pt-32 text-white lg:px-10">
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

          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FFF3E8] px-4 py-2 text-sm font-bold text-[#FC9C44]">
                <Globe2 className="h-4 w-4" />
                E-Commerce Development
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                E-Commerce Development Services
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">
                Build a fast, secure, and conversion-focused online store that helps your business
                sell products, manage orders, and grow revenue online.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FC9C44] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e8872d]"
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
              {/* <div className="absolute -right-4 -top-4 h-full w-full rounded-[32px] bg-[#FC9C44]" /> */}
              <div className="relative rounded-[32px] border border-slate-200 bg-[#06133D] p-6 text-white shadow-2xl">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      Store System
                    </p>
                    <h2 className="mt-2 text-2xl font-black">Ecommerce Build</h2>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#FC9C44]">
                    <ShoppingCart className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {["Product Pages", "Cart & Checkout", "Payment Gateway", "Order Management"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/10 p-5"
                      >
                        <CheckCircle2 className="mb-4 h-5 w-5 text-[#FC9C44]" />
                        <p className="font-bold">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                What We Build
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Complete ecommerce solutions for online selling
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06133D] text-white transition group-hover:bg-[#FC9C44]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-black">{service.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Store Features
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Built for smooth shopping and better conversions
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500">
                We create ecommerce websites that make it easy for customers to find products,
                understand value, complete checkout, and return for future purchases.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#06133D] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#10215a]"
              >
                Discuss Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-[#FC9C44]" />
                  <p className="text-sm font-semibold leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#06133D] px-6 py-24 text-white lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
                Work Process
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                How we build your online store
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                We follow a clear ecommerce development process so your store is planned properly,
                tested carefully, and ready for real customer orders.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-5">
              {process.map((item, index) => (
                <div key={item.title} className="bg-[#06133D] p-6">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#FC9C44] text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <BarChart3 className="mb-6 h-8 w-8 text-[#FC9C44]" />
              <h3 className="text-xl font-black">Conversion Focused</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Store pages are structured to support trust, product clarity, smooth checkout, and
                better sales.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <Truck className="mb-6 h-8 w-8 text-[#FC9C44]" />
              <h3 className="text-xl font-black">Shipping Ready</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Configure delivery options, shipping rules, order statuses, customer emails, and
                fulfilment workflows.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <ShieldCheck className="mb-6 h-8 w-8 text-[#FC9C44]" />
              <h3 className="text-xl font-black">Secure Checkout</h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Build customer trust with secure payment flow, reliable forms, stable integrations,
                and protected transactions.
              </p>
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

        {/* <ServiceLeadForm
                    eyebrow="Request an E-Commerce Audit"
                    title="Tell us what you want your online store to improve first"
                    description="Use this form to share your store, product catalog, platform, checkout goals, payment needs, shipping rules, and ecommerce challenges. Hegxcorp will review the request and suggest the right starting point for store design, product pages, checkout, integrations, or conversion growth."
                    serviceName="E-Commerce"
                    focusOptions={[]}
                /> */}

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
