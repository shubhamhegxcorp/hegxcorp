import React, { useId, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DataPoint {
  value: number;
  label?: string;
}

export interface SimpleGraphProps {
  data: DataPoint[];
  lineColor?: string;
  dotColor?: string;
  lineGradient?: { from: string; to: string };
  width?: string | number;
  height?: number;
  animationDuration?: number;
  showGrid?: boolean;
  gridStyle?: "solid" | "dashed" | "dotted";
  gridLines?: "vertical" | "horizontal" | "both";
  gridLineThickness?: number;
  showDots?: boolean;
  dotSize?: number;
  dotHoverGlow?: boolean;
  curved?: boolean;
  gradientFade?: boolean;
  graphLineThickness?: number;
  calculatePercentageDifference?: boolean;
  animateOnScroll?: boolean;
  animateOnce?: boolean;
  loop?: boolean;
  loopDelay?: number;
  className?: string;
}

export function SimpleGraph({
  data = [],
  lineColor = "#10B981",
  dotColor = "#10B981",
  lineGradient,
  width = "100%",
  height = 300,
  animationDuration = 2.2,
  showGrid = true,
  gridStyle = "solid",
  gridLines = "both",
  gridLineThickness = 1,
  showDots = true,
  dotSize = 6,
  dotHoverGlow = false,
  curved = true,
  gradientFade = false,
  graphLineThickness = 3,
  calculatePercentageDifference = false,
  animateOnScroll = false,
  animateOnce = false,
  loop = true,
  loopDelay = 2,
  className,
}: SimpleGraphProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipTilt, setTooltipTilt] = useState(0);
  const [tooltipShift, setTooltipShift] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wasVisibleRef = useRef(false);
  const gradientId = useId();

  const isHovered = hoveredIndex !== null;
  const isHoveredRef = useRef(false);
  isHoveredRef.current = isHovered;

  const isInView = useInView(containerRef, { once: animateOnce, amount: 0.15 });
  const isVisible = !animateOnScroll || isInView;

  // When scrolling back into view, immediately reset and start drawing
  React.useEffect(() => {
    if (isInView && !wasVisibleRef.current) {
      setIsFadingOut(false);
      setAnimationKey((prev) => prev + 1);
    }
    wasVisibleRef.current = isInView;
  }, [isInView]);

  // Continuous loop while in view; pauses/stops when user scrolls away
  React.useEffect(() => {
    if (!loop || !isInView || !isVisible) {
      setIsFadingOut(false);
      return;
    }

    const drawAndHoldMs = (animationDuration + loopDelay) * 1000;
    const fadeMs = 400;

    const fadeTimer = setTimeout(() => {
      if (isHoveredRef.current) return;
      setIsFadingOut(true);
    }, drawAndHoldMs);

    const restartTimer = setTimeout(() => {
      if (isHoveredRef.current) return;
      setIsFadingOut(false);
      setAnimationKey((prev) => prev + 1);
    }, drawAndHoldMs + fadeMs);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(restartTimer);
    };
  }, [isInView, isVisible, loop, animationDuration, loopDelay, animationKey]);

  const { points, pathD } = useMemo(() => {
    if (!data || data.length === 0) return { points: [], pathD: "" };
    const values = data.map((d) => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    // Tighter padding so the curve reaches the top and starts at bottom
    const yMin = min - 0.05 * range;
    const yMax = max + 0.05 * range;
    const yRange = yMax - yMin;

    // Span from x: 12 (far left) to x: 788 (far right)
    // Span from y: 380 (bottom) to y: 25 (top)
    const mappedPoints = data.map((item, idx) => ({
      x: 12 + (idx / (data.length - 1 || 1)) * 776,
      y: 380 - ((item.value - yMin) / yRange) * 355,
      value: item.value,
      label: item.label,
    }));

    let path = "";
    if (mappedPoints.length > 0) {
      if (curved && mappedPoints.length > 1) {
        path = `M ${mappedPoints[0].x},${mappedPoints[0].y}`;
        for (let i = 0; i < mappedPoints.length - 1; i++) {
          const p0 = mappedPoints[i];
          const p1 = mappedPoints[i + 1];
          const cpX = p0.x + (p1.x - p0.x) * 0.5;
          path += ` C ${cpX},${p0.y} ${cpX},${p1.y} ${p1.x},${p1.y}`;
        }
      } else {
        path = mappedPoints.map((p, idx) => `${idx === 0 ? "M" : "L"} ${p.x},${p.y}`).join(" ");
      }
    }

    return { points: mappedPoints, pathD: path };
  }, [data, curved]);

  const areaD = useMemo(() => {
    if (!gradientFade || points.length === 0) return "";
    let d = `M ${points[0].x},400 L ${points[0].x},${points[0].y}`;
    if (curved && points.length > 1) {
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const cpX = p0.x + (p1.x - p0.x) * 0.5;
        d += ` C ${cpX},${p0.y} ${cpX},${p1.y} ${p1.x},${p1.y}`;
      }
    } else {
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x},${points[i].y}`;
      }
    }
    return d + ` L ${points[points.length - 1].x},400 Z`;
  }, [points, curved, gradientFade]);

  const handleMouseMove = (e: React.MouseEvent<SVGGElement>, idx: number) => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) return;
    const svgPoint = pt.matrixTransform(screenCTM.inverse());
    const pointX = points[idx].x;
    const diffX = svgPoint.x - pointX;
    setTooltipTilt(Math.max(-15, Math.min(15, 0.2 * diffX)));
    setTooltipShift(Math.max(-20, Math.min(20, 0.15 * diffX)));
  };

  const containerWidth = typeof width === "number" ? `${width}px` : width;
  const strokeColor = lineGradient ? `url(#${gradientId}-line)` : lineColor;
  const areaGradientColorFrom = lineGradient?.from || lineColor;
  const areaGradientColorTo = lineGradient?.to || lineColor;

  return (
    <div
      ref={containerRef}
      className={cn("relative text-gray-900 dark:text-gray-100", className)}
      style={{ width: containerWidth, height: `${height}px` }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        className="w-full h-full text-gray-900 dark:text-gray-100"
        style={{ overflow: "visible" }}
      >
        <defs>
          {lineGradient && (
            <linearGradient id={`${gradientId}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={lineGradient.from} />
              <stop offset="100%" stopColor={lineGradient.to} />
            </linearGradient>
          )}

          <linearGradient
            id={`${gradientId}-area`}
            x1="0"
            y1="20"
            x2="0"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={areaGradientColorFrom} stopOpacity="0.32" />
            <stop offset="50%" stopColor={areaGradientColorTo} stopOpacity="0.12" />
            <stop offset="100%" stopColor={areaGradientColorTo} stopOpacity="0" />
          </linearGradient>

          <filter id={`${gradientId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor={areaGradientColorFrom}
              floodOpacity="0.45"
            />
          </filter>

          {/* Reveal clip path for the area gradient in lockstep with the line */}
          <clipPath id={`${gradientId}-reveal`}>
            <motion.rect
              x="0"
              y="0"
              height="450"
              initial={{ width: 0 }}
              animate={{ width: isVisible && !isFadingOut ? 800 : 0 }}
              transition={{
                duration: animationDuration,
                ease: "easeInOut",
              }}
            />
          </clipPath>
        </defs>

        {/* Background Grid */}
        {showGrid && (
          <g opacity="0.1">
            {(gridLines === "horizontal" || gridLines === "both") &&
              [0, 1, 2, 3, 4].map((i) => (
                <line
                  key={`h-${i}`}
                  x1="10"
                  y1={25 + (355 * i) / 4}
                  x2="790"
                  y2={25 + (355 * i) / 4}
                  stroke="currentColor"
                  strokeWidth={gridLineThickness}
                  strokeDasharray={
                    gridStyle === "dashed" ? "5,5" : gridStyle === "dotted" ? "1,3" : undefined
                  }
                />
              ))}
            {(gridLines === "vertical" || gridLines === "both") &&
              points.map((pt, i) => (
                <line
                  key={`v-${i}`}
                  x1={pt.x}
                  y1="25"
                  x2={pt.x}
                  y2="380"
                  stroke="currentColor"
                  strokeWidth={gridLineThickness}
                  strokeDasharray={
                    gridStyle === "dashed" ? "5,5" : gridStyle === "dotted" ? "1,3" : undefined
                  }
                />
              ))}
          </g>
        )}

        {/* Animated Graph Group with Smooth Reset and Loop Control */}
        <motion.g
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible && !isFadingOut ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Gradient fill under line */}
          {gradientFade && (
            <motion.path
              d={areaD}
              fill={`url(#${gradientId}-area)`}
              clipPath={`url(#${gradientId}-reveal)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible && !isFadingOut ? 1 : 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />
          )}

          {/* Main graph path */}
          <motion.path
            d={pathD}
            fill="none"
            stroke={strokeColor}
            strokeWidth={graphLineThickness}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: `drop-shadow(0 4px 12px ${areaGradientColorFrom}66)`,
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isVisible && !isFadingOut ? 1 : 0 }}
            transition={{ duration: animationDuration, ease: "easeInOut" }}
          />

          {/* Interactive Dots */}
          {showDots &&
            points.map((pt, idx) => (
              <g
                key={idx}
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                  setTooltipTilt(0);
                  setTooltipShift(0);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                style={{ cursor: "pointer" }}
              >
                {/* Invisible large hit area */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="50"
                  fill="transparent"
                  style={{ pointerEvents: "all" }}
                />

                {/* Hover Glow */}
                {dotHoverGlow && hoveredIndex === idx && (
                  <motion.circle
                    cx={pt.x}
                    cy={pt.y}
                    r={dotSize * 2.8}
                    fill={dotColor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.45 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ filter: "blur(8px)", pointerEvents: "none" }}
                  />
                )}

                {/* Projected Pulse Glow on the final milestone dot */}
                {idx === points.length - 1 && isVisible && !isFadingOut && (
                  <motion.circle
                    cx={pt.x}
                    cy={pt.y}
                    r={dotSize * 2.4}
                    fill="none"
                    stroke={dotColor}
                    strokeWidth="1.8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.9, 2.0, 0.9],
                      opacity: [0.85, 0, 0.85],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: animationDuration,
                    }}
                    style={{ pointerEvents: "none" }}
                  />
                )}

                {/* Visual Dot */}
                <motion.circle
                  cx={pt.x}
                  cy={pt.y}
                  r={dotSize}
                  fill={dotColor}
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  style={{ pointerEvents: "none" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredIndex === idx ? 1.6 : 1,
                    opacity: isVisible && !isFadingOut ? 1 : 0,
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 400, damping: 25 },
                    opacity: {
                      duration: 0.3,
                      delay: isVisible ? (idx / (points.length - 1 || 1)) * animationDuration : 0,
                    },
                  }}
                />
              </g>
            ))}
        </motion.g>

        {/* Floating Tooltip */}
        <AnimatePresence>
          {hoveredIndex !== null &&
            points[hoveredIndex] &&
            !(calculatePercentageDifference && hoveredIndex === 0) && (
              <foreignObject
                x={Math.max(10, Math.min(630, points[hoveredIndex].x - 80))}
                y={Math.max(10, points[hoveredIndex].y - 88)}
                width="160"
                height="88"
                style={{ overflow: "visible", pointerEvents: "none" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: tooltipShift,
                    rotate: tooltipTilt,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.15,
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    rotate: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                  className="flex items-center justify-center"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="relative">
                    <div className="bg-[#1D2742] text-white px-3 py-1.5 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
                      {calculatePercentageDifference && hoveredIndex > 0 ? (
                        (() => {
                          const current = data[hoveredIndex].value;
                          const prev = data[hoveredIndex - 1]?.value || 1;
                          const diff = current - prev;
                          const percentage = Math.abs((diff / Math.abs(prev)) * 100);
                          const isIncrease = diff >= 0;
                          return (
                            <div className="flex items-center gap-1.5">
                              {isIncrease ? (
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <TrendingDown className="w-4 h-4 text-rose-400" />
                              )}
                              <span
                                className={cn(
                                  "text-xs font-bold font-mono",
                                  isIncrease ? "text-emerald-400" : "text-rose-400",
                                )}
                              >
                                {isIncrease ? "+" : "-"}
                                {percentage.toFixed(1)}%
                              </span>
                            </div>
                          );
                        })()
                      ) : (
                        <div className="text-xs font-bold font-mono text-emerald-400">
                          {points[hoveredIndex].value.toFixed(0)}
                        </div>
                      )}
                      {data[hoveredIndex].label && (
                        <div className="text-[10px] text-gray-300 mt-0.5 text-center font-medium">
                          {data[hoveredIndex].label}
                        </div>
                      )}
                    </div>
                    {/* Tooltip Downward Arrow */}
                    <div
                      className="absolute left-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#1D2742]"
                      style={{ bottom: "-4px", transform: "translateX(-50%)" }}
                    />
                  </div>
                </motion.div>
              </foreignObject>
            )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

export default SimpleGraph;
