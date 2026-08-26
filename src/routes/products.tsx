import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import ShapeGrid from "@/components/ShapeGrid";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Solutions | Hegxcorp" },
      {
        name: "description",
        content:
          "Explore custom-engineered software platforms, CRM integrations, and performance marketing automation systems built by Hegxcorp.",
      },
    ],
  }),
  component: ProductsPage,
});

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
};

function ProductsPage() {
  const { data: heroData } = useWebsiteSection("products.hero");
  const { data: listData } = useWebsiteSection("products.list");

  return (
    <div className="min-h-screen bg-[#F7F8FB] text-[#06133D]">
      <Header />

      <main>
        {/* --- Hero Section --- */}
        <section className="relative isolate min-h-[500px] overflow-hidden bg-white">
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

          <div className="relative mx-auto flex min-h-[500px] max-w-[1280px] items-center px-6 py-20 lg:min-h-[640px] lg:px-10">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#EAEAEA] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44] shadow-sm">
                <ShoppingBag className="h-4 w-4" />
                {heroData.tagline}
              </span>

              <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#06133D] sm:text-5xl lg:text-7xl">
                {heroData.title}
              </h1>

              <p className="max-w-3xl text-base leading-8 text-[#52607A] sm:text-lg">
                {heroData.description}
              </p>
            </div>
          </div>
        </section>

        {/* --- Products Grid --- */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2">
              {(listData.products || []).map((product: any, idx: number) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={cardVariant}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(252,156,68,0.45)",
                    boxShadow: "0 24px 48px -16px rgba(29,39,66,0.08)",
                  }}
                  className="flex flex-col justify-between rounded-3xl border border-[#EAEAEA] bg-white p-8 transition-all duration-300 lg:p-10"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-2xl font-bold text-[#1D2742]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {product.title}
                        </h3>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#FFF4E8] px-3 py-1 text-xs font-bold text-[#C96A13]">
                        {product.price}
                      </span>
                    </div>

                    <p
                      className="text-sm leading-relaxed text-[#6B7280]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {product.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] block">
                        Included Features
                      </span>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {(product.features || []).map((feature: string, fIdx: number) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-[#232323]"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      to={product.buttonUrl}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#06133D] py-3 text-sm font-bold text-white transition hover:bg-[#FC9C44] hover:text-[#06133D]"
                    >
                      {product.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
