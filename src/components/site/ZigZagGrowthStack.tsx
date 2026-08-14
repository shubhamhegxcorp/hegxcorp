import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

type ZigZagStackCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  copy: string;
  detailTitle?: string;
  detailCopy?: string;
  detailPoints?: string[];
};

type ZigZagGrowthStackProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: ZigZagStackCard[];
};

export function ZigZagGrowthStack({ eyebrow, title, description, cards }: ZigZagGrowthStackProps) {
  const [activeReveal, setActiveReveal] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#F7F8FB] px-6 py-24 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[34%] opacity-[0.08]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #06133D 0 1px, transparent 1px 12px)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[330px] hidden h-[calc(100%-420px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#06133D]/12 to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FC9C44]">
            {eyebrow}
          </p>
          <h2
            className="font-black leading-tight text-[#06133D]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 4vw, 58px)",
            }}
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#4F5B76]">{description}</p>
        </div>

        <div className="grid gap-8 lg:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const alignRight = index % 2 === 0;
            const hasDetails = Boolean(
              card.detailTitle || card.detailCopy || card.detailPoints?.length,
            );
            const isRevealOpen = activeReveal === index;

            return (
              <motion.div
                key={card.title}
                className={
                  hasDetails
                    ? `flex flex-col gap-4 lg:items-stretch ${
                        alignRight ? "lg:flex-row-reverse" : "lg:flex-row"
                      }`
                    : `flex ${alignRight ? "justify-end" : "justify-start"}`
                }
                initial={{ opacity: 0, x: alignRight ? 46 : -46, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.58, delay: index * 0.08, ease: "easeOut" }}
              >
                <motion.article
                  onMouseEnter={() => {
                    if (hasDetails) setActiveReveal(index);
                  }}
                  onMouseLeave={() => {
                    if (hasDetails) setActiveReveal(null);
                  }}
                  onFocus={() => {
                    if (hasDetails) setActiveReveal(index);
                  }}
                  onBlur={() => {
                    if (hasDetails) setActiveReveal(null);
                  }}
                  tabIndex={hasDetails ? 0 : undefined}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group/card min-h-[230px] w-full max-w-[640px] rounded-[8px] border border-[#DFE3EA] bg-white p-7 shadow-[0_18px_48px_-30px_rgba(29,39,66,0.36)] outline-none transition-all duration-300 ease-out hover:rounded-tr-[44px] hover:rounded-br-[44px] hover:border-[#4C1688] hover:bg-[#ebc671] hover:shadow-[0_26px_68px_-28px_rgba(76,22,136,0.62)] focus-visible:ring-2 focus-visible:ring-[#FC9C44] sm:p-8"
                >
                  <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4C1688] text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-[#4C1688]">
                    <Icon size={23} strokeWidth={2} />
                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FC9C44] transition-colors duration-300 group-hover/card:text-white/72">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#06133D] transition-colors duration-300 group-hover/card:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#06133D] transition-colors duration-300 group-hover/card:text-white/90">
                    {card.copy}
                  </p>
                </motion.article>

                {hasDetails && (
                  <aside
                    aria-hidden={!isRevealOpen}
                    className={`overflow-hidden rounded-[8px] border border-[#DFE3EA] bg-white/88 shadow-[0_18px_48px_-34px_rgba(29,39,66,0.32)] backdrop-blur-sm transition-all duration-300 ease-out lg:pointer-events-none ${
                      isRevealOpen
                        ? `opacity-100 lg:max-w-[430px] ${
                            alignRight ? "lg:translate-x-0" : "lg:translate-x-0"
                          }`
                        : `max-h-0 opacity-0 lg:max-h-none lg:max-w-0 ${
                            alignRight ? "lg:translate-x-5" : "lg:-translate-x-5"
                          }`
                    }`}
                  >
                    <div className="min-w-0 p-6 lg:w-[430px]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FC9C44]">
                        More Detail
                      </p>
                      {card.detailTitle && (
                        <h4 className="mt-3 text-xl font-black leading-tight text-[#06133D]">
                          {card.detailTitle}
                        </h4>
                      )}
                      {card.detailCopy && (
                        <p className="mt-4 text-sm leading-7 text-[#4F5B76]">{card.detailCopy}</p>
                      )}
                      {card.detailPoints?.length ? (
                        <div className="mt-5 grid gap-2">
                          {card.detailPoints.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-[#DFE3EA] bg-[#F7F8FB] px-4 py-2 text-xs font-bold text-[#06133D]"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </aside>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
