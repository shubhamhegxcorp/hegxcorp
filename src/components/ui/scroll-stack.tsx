import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  isValidElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export interface ScrollStackItem {
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: string;
  accent?: string;
}

export type ScrollStackVariant = "stack" | "deck" | "fade" | "flip" | "zoom" | "reveal";

export interface ScrollStackProps {
  items?: ScrollStackItem[];
  children?: ReactNode;
  variant?: ScrollStackVariant;
  scrollLength?: number;
  peek?: number;
  scaleStep?: number;
  blur?: number;
  dim?: number;
  smooth?: number;
  depth?: number;
  cardWidth?: number;
  cardHeight?: number;
  borderRadius?: number;
  perspective?: number;
  showProgress?: boolean;
  showCounter?: boolean;
  onIndexChange?: (index: number) => void;
  className?: string;
  header?: ReactNode;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const smoothstep = (x: number): number => x * x * (3 - 2 * x);

const getFilter = (progress: number, dim: number, blur: number): string => {
  const filters: string[] = [];
  if (blur > 0.01) filters.push(`blur(${(progress * blur).toFixed(2)}px)`);
  if (dim > 0.001) filters.push(`brightness(${(1 - progress * dim).toFixed(3)})`);
  return filters.length ? filters.join(" ") : "none";
};

interface TransformConfig {
  peek: number;
  scaleStep: number;
  blur: number;
  dim: number;
  radius: number;
  enter: number;
}

const getTransform = (
  variant: ScrollStackVariant,
  progress: number,
  index: number,
  config: TransformConfig,
) => {
  const clip = `inset(0 0 0 0 round ${config.radius}px)`;
  const direction = index % 2 === 0 ? 1 : -1;

  if (progress < 0) {
    const enterProgress = clamp(progress + 1, 0, 1);
    const ease = smoothstep(enterProgress);

    switch (variant) {
      case "fade":
        return {
          transform: `translate3d(0,0,0) scale(${(1.06 - 0.06 * ease).toFixed(4)})`,
          opacity: ease,
          filter: "none",
          clip,
        };
      case "flip":
        return {
          transform: `translate3d(0,${((1 - ease) * 26).toFixed(2)}%,0) rotateX(${(-((1 - ease) * 72)).toFixed(2)}deg)`,
          opacity: clamp(1.6 * ease, 0, 1),
          filter: "none",
          clip,
        };
      case "zoom":
        return {
          transform: `translate3d(0,0,0) scale(${(0.52 + 0.48 * ease).toFixed(4)})`,
          opacity: clamp(1.4 * ease, 0, 1),
          filter: config.blur > 0.01 ? `blur(${((1 - ease) * config.blur).toFixed(2)}px)` : "none",
          clip,
        };
      case "reveal":
        return {
          transform: "translate3d(0,0,0)",
          opacity: 1,
          filter: "none",
          clip: `inset(${((1 - enterProgress) * 100).toFixed(2)}% 0 0 0 round ${config.radius}px)`,
        };
      case "deck":
        return {
          transform: `translate3d(0,${((1 - enterProgress) * (config.enter + 6)).toFixed(2)}%,0) rotate(${((1 - ease) * 4 * direction).toFixed(2)}deg)`,
          opacity: 1,
          filter: "none",
          clip,
        };
      default: // stack
        return {
          transform: `translate3d(0,${((1 - enterProgress) * config.enter).toFixed(2)}%,0)`,
          opacity: 1,
          filter: "none",
          clip,
        };
    }
  }

  const coverEase = smoothstep(clamp(progress, 0, 1));
  switch (variant) {
    case "fade":
      return {
        transform: `translate3d(0,0,0) scale(${(1 - 0.06 * coverEase).toFixed(4)})`,
        opacity: 1 - coverEase,
        filter: getFilter(coverEase, config.dim, config.blur),
        clip,
      };
    case "flip":
      return {
        transform: `translate3d(0,${(-26 * coverEase).toFixed(2)}%,0) rotateX(${(72 * coverEase).toFixed(2)}deg)`,
        opacity: 1 - coverEase,
        filter: getFilter(coverEase, config.dim, 0),
        clip,
      };
    case "zoom":
      return {
        transform: `translate3d(0,0,0) scale(${(1 + 0.42 * coverEase).toFixed(4)})`,
        opacity: 1 - coverEase,
        filter:
          config.blur > 0.01 ? `blur(${(coverEase * config.blur * 1.4).toFixed(2)}px)` : "none",
        clip,
      };
    case "reveal":
      return {
        transform: `translate3d(0,${(-progress * config.peek * 0.5).toFixed(2)}px,0) scale(${(1 - progress * config.scaleStep * 0.7).toFixed(4)})`,
        opacity: 1,
        filter: getFilter(progress, config.dim, config.blur),
        clip,
      };
    case "deck":
      return {
        transform: `translate3d(0,${(-progress * config.peek * 0.75).toFixed(2)}px,0) rotate(${(4.5 * progress * direction).toFixed(2)}deg) scale(${(1 - progress * config.scaleStep * 0.85).toFixed(4)})`,
        opacity: 1,
        filter: getFilter(progress, config.dim, config.blur),
        clip,
      };
    default: // stack
      return {
        transform: `translate3d(0,${(-progress * config.peek).toFixed(2)}px,0) scale(${(1 - progress * config.scaleStep).toFixed(4)})`,
        opacity: 1,
        filter: getFilter(progress, config.dim, config.blur),
        clip,
      };
  }
};

export const DefaultScrollStackCard: React.FC<{
  item: ScrollStackItem;
  index: number;
  total: number;
  radius: number;
}> = ({ item, index, total, radius }) => (
  <article
    className="relative flex h-full w-full flex-col justify-end overflow-hidden border border-neutral-200 bg-neutral-100 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.45)] dark:border-neutral-800 dark:bg-neutral-900"
    style={{ borderRadius: `${radius}px` }}
  >
    {item.image && (
      <>
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      </>
    )}
    <span
      className={cn(
        "absolute right-5 top-5 text-[11px] font-medium tabular-nums tracking-widest sm:right-7 sm:top-7",
        item.image ? "text-white/55" : "text-neutral-400 dark:text-neutral-500",
      )}
    >
      {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
    </span>
    <div className="relative flex flex-col gap-3 p-6 sm:gap-4 sm:p-9">
      {item.eyebrow && (
        <span
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.2em]",
            !item.accent &&
            (item.image ? "text-white/70" : "text-neutral-500 dark:text-neutral-400"),
          )}
          style={item.accent ? { color: item.accent } : undefined}
        >
          {item.eyebrow}
        </span>
      )}
      {item.title && (
        <h3
          className={cn(
            "max-w-[22ch] text-balance text-2xl font-medium leading-[1.15] tracking-tight sm:text-3xl md:text-4xl",
            item.image ? "text-white" : "text-neutral-900 dark:text-white",
          )}
        >
          {item.title}
        </h3>
      )}
      {item.body && (
        <p
          className={cn(
            "max-w-[46ch] text-sm leading-relaxed sm:text-base",
            item.image ? "text-white/70" : "text-neutral-600 dark:text-neutral-400",
          )}
        >
          {item.body}
        </p>
      )}
    </div>
  </article>
);

export function ScrollStack({
  items,
  children,
  variant = "stack",
  scrollLength = 1,
  peek = 26,
  scaleStep = 0.07,
  blur = 4,
  dim = 0.28,
  smooth = 0.16,
  depth = 3,
  cardWidth = 880,
  cardHeight = 0.68,
  borderRadius = 22,
  perspective = 1400,
  showProgress = true,
  showCounter = true,
  onIndexChange,
  className,
  header,
}: ScrollStackProps) {
  const childElements = useMemo(
    () => Children.toArray(children).filter((c) => isValidElement(c)),
    [children],
  );
  const cardItems = childElements.length > 0 ? childElements : items || [];
  const totalCards = cardItems.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const currentScrollProgress = useRef(0);
  const lastTimeRef = useRef(0);
  const rafIdRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const lastActiveIndex = useRef(-1);
  const onIndexChangeRef = useRef(onIndexChange);

  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    onIndexChangeRef.current = onIndexChange;
  }, [onIndexChange]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  const config = useMemo<TransformConfig>(
    () => ({
      peek: Math.max(0, peek),
      scaleStep: clamp(scaleStep, 0, 0.4),
      blur: prefersReducedMotion ? 0 : Math.max(0, blur),
      dim: clamp(dim, 0, 1),
      radius: Math.max(0, borderRadius),
      enter: ((1 + 1 / clamp(cardHeight, 0.2, 0.95)) / 2) * 100 + 3,
    }),
    [peek, scaleStep, blur, dim, borderRadius, prefersReducedMotion, cardHeight],
  );

  const applyTransforms = useCallback(
    (progress: number) => {
      const maxDepth = Math.max(1, Math.round(depth));
      for (let i = 0; i < totalCards; i += 1) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const relativeProgress = progress - i;
        if (relativeProgress < -1.0005 || relativeProgress > maxDepth) {
          if (card.style.visibility !== "hidden") card.style.visibility = "hidden";
          continue;
        }
        if (card.style.visibility === "hidden") card.style.visibility = "";
        const transformStyles = getTransform(variant, relativeProgress, i, config);
        card.style.transform = transformStyles.transform;
        card.style.opacity = transformStyles.opacity.toFixed(4);
        card.style.filter = transformStyles.filter;
        card.style.clipPath = transformStyles.clip;
      }

      if (progressBarRef.current && totalCards > 1) {
        const progressScale = clamp(progress / (totalCards - 1), 0, 1);
        progressBarRef.current.style.transform = `scaleX(${progressScale.toFixed(4)})`;
      }

      const active = clamp(Math.round(progress), 0, totalCards - 1);
      if (active !== lastActiveIndex.current) {
        lastActiveIndex.current = active;
        setActiveIndex(active);
        onIndexChangeRef.current?.(active);
      }
    },
    [totalCards, depth, config, variant],
  );

  const getTargetScrollProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el || totalCards < 1) return 0;
    const win = el.ownerDocument.defaultView;
    const viewHeight = win ? win.innerHeight : 0;
    const rect = el.getBoundingClientRect();
    const scrollableDistance = rect.height - viewHeight;
    if (scrollableDistance <= 0) return 0;
    return clamp(-rect.top / scrollableDistance, 0, 1) * (totalCards - 1);
  }, [totalCards]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const doc = el.ownerDocument;
    const win = doc.defaultView;
    if (!win) return;

    const damping = prefersReducedMotion ? 0 : clamp(smooth, 0, 0.95);

    const stepAnimation = (now: number) => {
      const prevTime = lastTimeRef.current || now;
      const deltaTime = Math.min(0.05, Math.max(0, (now - prevTime) / 1000));
      lastTimeRef.current = now;

      const target = getTargetScrollProgress();
      const current = currentScrollProgress.current;
      const factor = damping > 0 ? 1 - Math.pow(1 - damping, 60 * deltaTime) : 1;
      const next = current + (target - current) * factor;

      currentScrollProgress.current = next;
      applyTransforms(next);

      if (Math.abs(target - next) > 0.0004) {
        rafIdRef.current = win.requestAnimationFrame(stepAnimation);
      } else {
        currentScrollProgress.current = target;
        applyTransforms(target);
        isAnimatingRef.current = false;
      }
    };

    const handleScrollOrResize = () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        lastTimeRef.current = 0;
        rafIdRef.current = win.requestAnimationFrame(stepAnimation);
      }
    };

    currentScrollProgress.current = getTargetScrollProgress();
    applyTransforms(currentScrollProgress.current);

    win.addEventListener("scroll", handleScrollOrResize, { passive: true });
    doc.addEventListener("scroll", handleScrollOrResize, { passive: true, capture: true });
    win.addEventListener("resize", handleScrollOrResize);

    const observer = new ResizeObserver(handleScrollOrResize);
    observer.observe(el);

    return () => {
      win.cancelAnimationFrame(rafIdRef.current);
      isAnimatingRef.current = false;
      win.removeEventListener("scroll", handleScrollOrResize);
      doc.removeEventListener("scroll", handleScrollOrResize, { capture: true });
      win.removeEventListener("resize", handleScrollOrResize);
      observer.disconnect();
    };
  }, [getTargetScrollProgress, applyTransforms, smooth, prefersReducedMotion]);

  const totalHeightVh = 100 + Math.max(0, totalCards - 1) * Math.max(0.2, scrollLength) * 100;

  return (
    <section
      ref={containerRef}
      aria-label="Scrolling card stack"
      className={cn("relative w-full", className)}
      style={{ height: `${totalHeightVh}vh` }}
    >
      <div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-8"
        style={{ perspective: `${Math.max(200, perspective)}px` }}
      >
        {header && <div className="mb-4 sm:mb-6 shrink-0 z-20 w-full max-w-[920px]">{header}</div>}
        <div
          className="relative w-full"
          style={{
            maxWidth: `${Math.max(200, cardWidth)}px`,
            height: `${100 * clamp(cardHeight, 0.2, 0.95)}vh`,
          }}
        >
          {cardItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d] [will-change:transform,opacity]"
              style={{ zIndex: index }}
            >
              {childElements.length > 0 ? (
                (item as ReactNode)
              ) : (
                <DefaultScrollStackCard
                  item={item as ScrollStackItem}
                  index={index}
                  total={totalCards}
                  radius={config.radius}
                />
              )}
            </div>
          ))}
        </div>

        {/* {(showProgress || showCounter) && totalCards > 1 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-4 px-6 sm:bottom-8">
            {showProgress && (
              <span className="relative h-1 w-32 overflow-hidden rounded-full bg-neutral-200 sm:w-48 dark:bg-neutral-800">
                <span
                  ref={progressBarRef}
                  className="absolute inset-0 origin-left rounded-full bg-[#FC9C44]"
                  style={{ transform: "scaleX(0)" }}
                />
              </span>
            )}
            {showCounter && (
              <span className="text-xs font-semibold tabular-nums tracking-widest text-[#1D2742]/70 dark:text-neutral-400">
                {String(activeIndex + 1).padStart(2, "0")} / {String(totalCards).padStart(2, "0")}
              </span>
            )}
          </div>
        )} */}
      </div>
    </section>
  );
}

export default ScrollStack;
