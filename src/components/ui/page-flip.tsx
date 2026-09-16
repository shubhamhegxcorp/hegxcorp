import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PageFlipLeaf {
  id?: string;
  front: string | React.ReactNode;
  back: string | React.ReactNode;
  frontAlt?: string;
  backAlt?: string;
}

export type PageFlipEase = "easeInOut" | "easeOut" | "circOut" | "backOut";

export interface PageFlipProps {
  pages?: PageFlipLeaf[];
  pageWidth?: number;
  pageHeight?: number;
  pageRadius?: number;
  pageColor?: string;
  perspective?: number;
  spineShift?: number;
  turnAngle?: number;
  peekAngle?: number;
  duration?: number;
  stagger?: number;
  ease?: PageFlipEase;
  shadow?: number;
  trigger?: "click" | "hover";
  closeOnLeave?: boolean;
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /* Controlled active turned count (for scroll-driven integration) */
  turnedCount?: number;
  onTurnChange?: (count: number) => void;
  /* Orientation: single-page mobile deck or dual-page open book */
  mode?: "book" | "single";
}

const easeCurves: Record<PageFlipEase, [number, number, number, number]> = {
  easeInOut: [0.42, 0, 0.58, 1],
  easeOut: [0, 0, 0.58, 1],
  circOut: [0, 0.55, 0.45, 1],
  backOut: [0.34, 1.56, 0.64, 1],
};

const defaultPages: PageFlipLeaf[] = [
  {
    id: "p1",
    front:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "p2",
    front:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "p3",
    front:
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=700&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=700&auto=format&fit=crop",
  },
];

interface LeafProps {
  index: number;
  total: number;
  front: string | React.ReactNode;
  back: string | React.ReactNode;
  frontAlt?: string;
  backAlt?: string;
  turned: boolean;
  peek: boolean;
  delay: number;
  width: number;
  height: number;
  radius: number;
  paper: string;
  turnAngle: number;
  peekAngle: number;
  duration: number;
  curve: [number, number, number, number];
  shadow: number;
  interactive: boolean;
  onSelect: (index: number) => void;
  onReach: (index: number) => void;
  onRelease: () => void;
}

const Leaf = memo(function Leaf({
  index,
  total,
  front,
  back,
  frontAlt = "",
  backAlt = "",
  turned,
  peek,
  delay,
  width,
  height,
  radius,
  paper,
  turnAngle,
  peekAngle,
  duration,
  curve,
  shadow,
  interactive,
  mode = "book",
  onSelect,
  onReach,
  onRelease,
}: LeafProps & { mode?: "book" | "single" }) {
  const rotateY = useMotionValue(0);

  // Dynamic z-index layering so leaves on left/right stack in proper book depth
  const zIndex = useTransform(rotateY, (val) =>
    mode === "single"
      ? val < -turnAngle / 2
        ? index
        : total - index
      : val < -turnAngle / 2
        ? total + index + 1
        : total - index,
  );

  const shadowStyle = useMemo(() => {
    if (shadow <= 0) return "none";
    const x = Math.round(4 * shadow);
    const y = Math.round(6 * shadow);
    const blur = Math.round(34 * shadow);
    const alpha = Math.min(0.75 * shadow, 1);
    return `${x}px ${y}px ${blur}px rgba(0,0,0,${alpha})`;
  }, [shadow]);

  const transition: Transition = {
    duration,
    delay,
    ease: curve,
  };

  const isStringFront = typeof front === "string";
  const isStringBack = typeof back === "string";

  const isSingle = mode === "single";

  return (
    <motion.div
      className="absolute top-0 left-0 select-none will-change-transform"
      style={{
        width,
        height,
        rotateY,
        zIndex,
        transformOrigin: isSingle ? "center center" : "left center",
        transformStyle: "preserve-3d",
        borderRadius: radius,
        cursor: interactive ? "pointer" : "default",
        boxShadow: shadowStyle,
        pointerEvents: isSingle && turned ? "none" : "auto",
      }}
      animate={{
        rotateY: turned ? -turnAngle : peek ? -peekAngle : 0,
        opacity: isSingle && turned ? 0 : 1,
        scale: isSingle && turned ? 0.94 : 1,
      }}
      transition={transition}
      onPointerEnter={() => onReach(index)}
      onPointerLeave={onRelease}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(index);
        }
      }}
      role={interactive ? "button" : undefined}
      aria-pressed={interactive ? turned : undefined}
      tabIndex={interactive ? 0 : -1}
    >
      {/* Front of leaf */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{
          background: paper,
          borderRadius: radius,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {isStringFront ? (
          <img
            src={front as string}
            alt={frontAlt}
            draggable={false}
            className="h-full w-full object-cover pointer-events-none select-none"
          />
        ) : (
          front
        )}
      </div>

      {/* Back of leaf (rotated 180 degrees) */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{
          background: paper,
          borderRadius: radius,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg) translateZ(1px)",
        }}
      >
        {isStringBack ? (
          <img
            src={back as string}
            alt={backAlt}
            draggable={false}
            className="h-full w-full object-cover pointer-events-none select-none"
          />
        ) : (
          back
        )}
      </div>
    </motion.div>
  );
});

export function PageFlip({
  pages = defaultPages,
  pageWidth = 220,
  pageHeight = 320,
  pageRadius = 6,
  pageColor = "#ffffff",
  perspective = 1200,
  spineShift = 110,
  turnAngle = 180,
  peekAngle = 10,
  duration = 0.55,
  stagger = 0.08,
  ease = "easeInOut",
  shadow = 0.3,
  trigger = "click",
  closeOnLeave = false,
  interactive = true,
  className,
  style,
  turnedCount: controlledTurnedCount,
  onTurnChange,
  mode = "book",
}: PageFlipProps) {
  const leafList = useMemo(() => (pages.length > 0 ? pages : defaultPages), [pages]);
  const total = leafList.length;

  const [internalTurnedCount, setInternalTurnedCount] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isResetting, setIsResetting] = useState(false);

  // Synchronize controlled vs uncontrolled turned count
  const isControlled = controlledTurnedCount !== undefined;
  const turnedCount = isControlled ? controlledTurnedCount : internalTurnedCount;

  const setTurned = useCallback(
    (updater: number | ((prev: number) => number)) => {
      const nextVal = typeof updater === "function" ? updater(turnedCount) : updater;
      const clamped = Math.max(0, Math.min(total, nextVal));
      if (!isControlled) {
        setInternalTurnedCount(clamped);
      }
      onTurnChange?.(clamped);
    },
    [turnedCount, total, isControlled, onTurnChange],
  );

  const curve = useMemo(() => easeCurves[ease] ?? easeCurves.easeInOut, [ease]);

  // Click on a leaf: if clicking an unturned leaf, turn it. If clicking already turned leaf, flip it back!
  const handleSelect = useCallback(
    (index: number) => {
      if (!interactive) return;
      setIsResetting(false);
      setTurned((prev) => (index < prev ? index : index + 1));
    },
    [interactive, setTurned],
  );

  const handleReach = useCallback(
    (index: number) => {
      if (!interactive) return;
      setHoveredIndex(index);
      if (trigger === "hover") {
        setIsResetting(false);
        setTurned(index + 1);
      }
    },
    [interactive, trigger, setTurned],
  );

  const handleRelease = useCallback(() => {
    setHoveredIndex(-1);
  }, []);

  const handleReset = useCallback(() => {
    setIsResetting(true);
    setTurned(0);
  }, [setTurned]);

  // Touch gesture swipe support for mobile
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

    // Horizontal swipe threshold (ignore vertical scrolling)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        // Swipe left -> Turn next leaf
        setTurned((prev) => Math.min(total, prev + 1));
      } else {
        // Swipe right -> Turn back previous leaf
        setTurned((prev) => Math.max(0, prev - 1));
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-visible select-none",
        className,
      )}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onPointerLeave={() => {
        setHoveredIndex(-1);
        if (closeOnLeave) handleReset();
      }}
    >
      {/* Book Spine Container */}
      <motion.div
        className="relative"
        style={{
          width: pageWidth,
          height: pageHeight,
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          x: mode === "single" ? 0 : turnedCount > 0 ? spineShift : 0,
        }}
        transition={{
          duration: Math.max(0.8 * duration, 0.1),
          ease: "easeOut",
        }}
      >
        {leafList.map((leaf, index) => {
          const isTurned = index < turnedCount;
          const isPeeking =
            interactive && !isTurned && hoveredIndex === index && index === turnedCount;
          const delay = isResetting && !isTurned ? (total - 1 - index) * stagger : 0;

          return (
            <Leaf
              key={leaf.id ?? `${index}`}
              index={index}
              total={total}
              front={leaf.front}
              back={leaf.back}
              frontAlt={leaf.frontAlt}
              backAlt={leaf.backAlt}
              turned={isTurned}
              peek={isPeeking}
              delay={delay}
              width={pageWidth}
              height={pageHeight}
              radius={pageRadius}
              paper={pageColor}
              turnAngle={turnAngle}
              peekAngle={peekAngle}
              duration={duration}
              curve={curve}
              shadow={shadow}
              interactive={interactive}
              mode={mode}
              onSelect={handleSelect}
              onReach={handleReach}
              onRelease={handleRelease}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default PageFlip;
