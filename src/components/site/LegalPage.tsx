import { Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, summary, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F7F8FB] text-[#06133D]">
      <Header />

      <main>
        <section className="bg-[#06133D] px-6 pb-20 pt-28 text-white lg:px-10 lg:pb-24 lg:pt-36">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-[#FC9C44]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <p className="mt-12 text-sm font-bold uppercase tracking-[0.22em] text-[#FC9C44]">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.04] md:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">{summary}</p>
            <p className="mt-8 text-sm font-semibold text-white/45">Last updated: 13 July 2026</p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[220px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
                On this page
              </p>
              <nav className="mt-5 space-y-3">
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block text-sm font-semibold text-slate-500 transition hover:text-[#06133D]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-28 border-b border-slate-200 pb-12 last:border-b-0"
                >
                  <p className="text-sm font-black text-[#FC9C44]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.items && (
                    <ul className="mt-6 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FC9C44]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}

              <div className="rounded-[28px] bg-white p-8 shadow-[0_18px_50px_-32px_rgba(6,19,61,0.35)] md:p-10">
                <Mail className="h-7 w-7 text-[#FC9C44]" />
                <h2 className="mt-5 text-2xl font-black">Questions about this policy?</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Contact Hegxcorp and we will help clarify how this policy applies to your use of
                  our website or services.
                </p>
                <a
                  href="mailto:hegxcorp@gmail.com"
                  className="mt-7 inline-flex rounded-full bg-[#06133D] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#10215a]"
                >
                  hegxcorp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
