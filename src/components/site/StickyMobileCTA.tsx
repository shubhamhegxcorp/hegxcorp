import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 600px (past hero)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#EAEAEA] bg-white/95 p-3 sm:p-3.5 shadow-[0_12px_30px_-8px_rgba(29,39,66,0.2)] backdrop-blur-md">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FC9C44] truncate">
                  Limited Slots
                </span>
                <span className="text-xs font-bold text-[#232323] truncate">Free Growth Audit</span>
              </div>
            </div>
            <Link
              to="/free-growth-audit"
              onClick={() =>
                trackEvent("cta_click", {
                  cta_name: "claim_audit",
                  cta_location: "sticky_mobile_cta",
                  destination: "/free-growth-audit",
                })
              }
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#FC9C44] px-4 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-all"
            >
              <span>Claim Audit</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
