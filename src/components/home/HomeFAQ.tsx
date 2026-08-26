import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import { SectionHeading } from "@/components/site/SectionHeading";

export function HomeFAQ() {
  const { data: faqData } = useWebsiteSection("home.faq");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = faqData?.items || [];
  if (items.length === 0) return null;

  return (
    <section className="bg-[#FAFAF8] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeading
              tagline={faqData.tagline || "FAQ"}
              heading={faqData.heading || "Frequently Asked Questions"}
              description={
                faqData.description || "Everything you need to know about our growth services."
              }
            />
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="divide-y divide-[#EAEAEA] border-t border-[#EAEAEA] mt-4 lg:mt-0">
            {items.map((item: any, index: number) => {
              const isOpen = openIdx === index;
              return (
                <div key={index} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-[#1D2742] transition-colors hover:text-[#FC9C44]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px" }}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-4.5 w-4.5 text-[#FC9C44] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[640px]"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
