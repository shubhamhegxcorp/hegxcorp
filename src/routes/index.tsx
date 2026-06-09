import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { ArrowRight, Globe2, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEXGCORP — We Create Future" },
      { name: "description", content: "Global technology agency delivering premium web, marketing and design solutions across India, USA, Australia and Europe." },
      { property: "og:title", content: "HEXGCORP — We Create Future" },
      { property: "og:description", content: "Global technology agency delivering premium web, marketing and design solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero placeholder so the header has context */}
      <main>
        <section className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Global agency — India • USA • Australia • Europe
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
              Engineering the <span className="italic font-light">future</span> of global brands.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              HEXGCORP is a premium technology and design agency partnering with ambitious teams to build digital products, brands and growth systems that scale across continents.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90 transition">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition">
                Explore Services
              </button>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              { icon: Globe2, title: "Global Reach", desc: "Four regional offices serving clients across 30+ countries." },
              { icon: Shield, title: "Enterprise Grade", desc: "Secure, scalable architectures trusted by industry leaders." },
              { icon: Zap, title: "Built to Convert", desc: "Strategy, design and engineering aligned to measurable growth." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-white p-6">
                <f.icon className="h-5 w-5 text-foreground" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
