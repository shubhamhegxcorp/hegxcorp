import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  slug: string;
  title: string;
  desc: string;
  href: string;
  url: string;
  Visual: React.ComponentType;
}

interface ServicesMobilePageFlipProps {
  services: ServiceItem[];
}

export function ServicesMobilePageFlip({ services }: ServicesMobilePageFlipProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = services.length;

  // Track scroll through the compact mobile sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Sync scroll position -> currentIndex smoothly without jumping
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const clampedLatest = Math.max(0, Math.min(1, latest));
      const targetIndex = Math.min(total - 1, Math.floor(clampedLatest * total));
      if (targetIndex !== currentIndex) {
        setDirection(targetIndex > currentIndex ? 1 : -1);
        setCurrentIndex(targetIndex);
      }
    });
  }, [scrollYProgress, total, currentIndex]);

  // Turn to Next service
  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (currentIndex < total - 1) {
        setDirection(1);
        setCurrentIndex((prev) => Math.min(total - 1, prev + 1));
      }
    },
    [currentIndex, total],
  );

  // Turn to Previous service
  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
    },
    [currentIndex],
  );

  // Jump to specific index
  const handleJump = useCallback(
    (target: number) => {
      if (target === currentIndex) return;
      setDirection(target > currentIndex ? 1 : -1);
      setCurrentIndex(Math.max(0, Math.min(total - 1, target)));
    },
    [currentIndex, total],
  );

  // Card click handler: click RIGHT half -> Next; click LEFT half -> Previous
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isRightHalf = clickX > rect.width / 2;

    if (isRightHalf) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Touch swipe gestures
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Horizontal swipe threshold
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const currentService = services[currentIndex] || services[0];
  const nextService = services[currentIndex + 1];

  // 3D Page Flip Variants (Book page turning physics around left spine)
  const pageFlipVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 0 : -95,
      x: dir > 0 ? 0 : -35,
      scale: dir > 0 ? 0.94 : 1,
      opacity: dir > 0 ? 0.75 : 0,
      zIndex: dir > 0 ? 10 : 30,
    }),
    center: {
      rotateY: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20,
      transition: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -95 : 0,
      x: dir > 0 ? -35 : 0,
      scale: dir > 0 ? 1 : 0.94,
      opacity: dir > 0 ? 0 : 0.75,
      zIndex: dir > 0 ? 30 : 10,
      transition: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        // Compact scroll track (175vh) — smooth scroll progression with ZERO giant empty space!
        height: "175vh",
      }}
    >
      {/* Sticky book viewport */}
      <div className="sticky top-16 w-full flex flex-col items-center justify-center py-2">
        {/* Header HUD / Controls */}
        <div className="w-full max-w-[325px] px-1 mb-2.5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded-full bg-[#FC9C44]/15 text-[#FC9C44] font-bold text-[11px] shrink-0">
              0{currentIndex + 1} / 0{total}
            </span>
            <span className="text-[#4B5563] font-sans font-medium text-xs truncate">
              {currentService.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#1D2742] disabled:opacity-25 disabled:cursor-not-allowed shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Previous Service"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= total - 1}
              className="p-1.5 rounded-full bg-[#FC9C44] text-white disabled:opacity-25 disabled:cursor-not-allowed shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Next Service"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Segmented Progress Indicators (Tap dot to jump) */}
        <div className="w-full max-w-[325px] px-1 mb-3 flex gap-1.5">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleJump(i)}
              className="h-1.5 flex-1 rounded-full overflow-hidden bg-[#E5E7EB] transition-all cursor-pointer p-0"
              aria-label={`Jump to Service 0${i + 1}`}
            >
              <div
                className={`h-full transition-all duration-300 ${
                  i < currentIndex
                    ? "bg-[#1D2742]"
                    : i === currentIndex
                      ? "bg-[#FC9C44]"
                      : "bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>

        {/* 3D Book Page Flip Stage */}
        <div
          className="relative w-full flex items-center justify-center min-h-[465px] px-2"
          style={{ perspective: "1200px" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Subtle backing card depth hint (visible behind active card) */}
          {nextService && (
            <div
              className="absolute pointer-events-none rounded-2xl bg-white border border-[#E5E7EB] shadow-md"
              style={{
                width: 305,
                height: 455,
                transform: "translateY(8px) scale(0.95)",
                opacity: 0.65,
                zIndex: 5,
              }}
            />
          )}

          {/* Active 3D Flipping Card */}
          <div className="relative" style={{ width: 305, height: 455 }}>
            <AnimatePresence custom={direction} initial={false} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={pageFlipVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onClick={handleCardClick}
                className="absolute inset-0 select-none will-change-transform cursor-pointer"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  borderRadius: 16,
                  boxShadow: "0 10px 30px -8px rgba(0,0,0,0.12), 0 4px 12px -4px rgba(0,0,0,0.06)",
                }}
              >
                {/* Visual Service Card Structure — PIXEL PERFECT & UNIFORMLY ALIGNED */}
                <div className="flex flex-col h-full bg-white border border-[#EAEAEA] rounded-2xl shadow-lg overflow-hidden select-none">
                  {/* Browser chrome top bar (fixed 38px) */}
                  <div className="h-[38px] px-3.5 flex items-center justify-between bg-[#FAFAF8] border-b border-[#EAEAEA] shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#FC9C44]" />
                      <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
                      <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
                      <span className="ml-2 text-[9px] text-[#9CA3AF] font-mono truncate max-w-[155px]">
                        {currentService.url}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#FC9C44] px-1.5 py-0.5 rounded bg-[#FC9C44]/10">
                      0{currentIndex + 1}
                    </span>
                  </div>

                  {/* Visual / Graph Panel (fixed 175px) */}
                  <div className="h-[175px] relative overflow-hidden bg-[#FAFAF8] border-b border-[#F3F4F6] flex items-center justify-center p-3 shrink-0">
                    <currentService.Visual />
                  </div>

                  {/* Content panel (fixed heights for complete baseline alignment) */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-1.5">
                      {/* Badge & Capability label (fixed 24px) */}
                      <div className="h-[24px] flex items-center justify-between">
                        <span className="text-[9px] font-bold tracking-wider text-[#FC9C44] uppercase font-mono px-2 py-0.5 rounded-full bg-[#FC9C44]/10 border border-[#FC9C44]/20">
                          {currentService.slug}
                        </span>
                        <span className="text-[10px] font-mono text-[#9CA3AF]">
                          Capability 0{currentIndex + 1}
                        </span>
                      </div>

                      {/* Title (fixed 48px to prevent any layout shifts between 1-line & 2-line titles) */}
                      <div className="h-[48px] flex items-center">
                        <h3
                          className="font-bold text-[#1D2742] text-base leading-snug line-clamp-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {currentService.title}
                        </h3>
                      </div>

                      {/* Description (fixed 56px to ensure identical vertical alignment across all cards) */}
                      <div className="h-[56px] flex items-start">
                        <p
                          className="text-[#4B5563] text-xs leading-relaxed line-clamp-3"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {currentService.desc}
                        </p>
                      </div>
                    </div>

                    {/* Action footer (fixed 42px, relative z-30) */}
                    <div className="h-[42px] pt-2 border-t border-[#F3F4F6] flex items-center justify-between relative z-30">
                      {/* Left: Previous action */}
                      {currentIndex > 0 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4B5563] hover:text-[#1D2742] transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="h-3 w-3" />
                          <span>Prev</span>
                        </button>
                      ) : (
                        <span className="text-[10px] font-mono text-[#9CA3AF]">01 Start</span>
                      )}

                      {/* Center: Explore capability Link */}
                      <Link
                        to={currentService.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#FC9C44] active:opacity-75"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Explore</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>

                      {/* Right: Next action */}
                      {currentIndex < total - 1 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FC9C44] hover:text-[#e0852e] transition-colors cursor-pointer"
                        >
                          <span>Next</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      ) : (
                        <span className="text-[10px] font-mono font-bold text-[#FC9C44]">
                          06 End
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Left Tap Zone Button: Click anywhere on left half -> PREVIOUS */}
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous Service"
                  className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer disabled:cursor-default bg-transparent p-0 border-0 outline-none group"
                >
                  {currentIndex > 0 && (
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75 transition-opacity p-1.5 rounded-full bg-black/20 text-white shadow-sm">
                      <ChevronLeft className="h-4 w-4" />
                    </span>
                  )}
                </button>

                {/* Right Tap Zone Button: Click anywhere on right half -> NEXT */}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex >= total - 1}
                  aria-label="Next Service"
                  className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer disabled:cursor-default bg-transparent p-0 border-0 outline-none group"
                >
                  {currentIndex < total - 1 && (
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75 transition-opacity p-1.5 rounded-full bg-black/20 text-white shadow-sm">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  )}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Intuitive Tap & Scroll Hint */}
        <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-[#9CA3AF]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FC9C44] animate-pulse" />
          <span>Tap left ‹ Prev | Next › Tap right</span>
        </div>
      </div>
    </div>
  );
}

export default ServicesMobilePageFlip;
