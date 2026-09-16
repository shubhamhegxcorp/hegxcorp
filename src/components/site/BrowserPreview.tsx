import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserPreviewProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  innerClassName?: string;
  aspectRatio?: "video" | "auto" | "square";
  proofLabel?: string;
  proofDuration?: string;
  proofMetric?: string;
  hideProofOverlay?: boolean;
  proofBadgeSize?: "compact" | "normal" | "minimal" | "none";
  proofBadgePosition?: "bottom-right" | "bottom-left" | "top-right";
  proofBadgeClassName?: string;
  url?: string;
}

export function BrowserPreview({
  children,
  alt = "Browser Preview",
  className,
  innerClassName,
  aspectRatio = "video",
  proofLabel,
  proofDuration,
  proofMetric,
  hideProofOverlay = false,
  proofBadgeSize = "compact",
  proofBadgePosition = "bottom-right",
  proofBadgeClassName,
  url,
  ...rest
}: BrowserPreviewProps & { src?: string }) {
  const src = rest.src;
  const isMinimal = proofBadgeSize === "minimal";
  const isHidden = hideProofOverlay || proofBadgeSize === "none";

  const positionClasses = {
    "bottom-right": "bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5",
    "bottom-left": "bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5",
    "top-right": "top-1.5 right-1.5 sm:top-2.5 sm:right-2.5",
  }[proofBadgePosition];

  return (
    <div
      className={cn(
        "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_16px_36px_rgba(29,39,66,0.06)] overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group",
        className,
      )}
    >
      {/* Browser chrome header */}
      <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border-b border-[#EAEAEA]">
        {/* Subtle colored chrome control dots: ○ ○ ○ */}
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#FF5F56]/60 transition-all duration-300 ease-out group-hover:bg-[#FF5F56] group-hover:scale-[1.05]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/60 transition-all duration-300 ease-out group-hover:bg-[#FFBD2E] group-hover:scale-[1.05]" />
          <div className="h-2 w-2 rounded-full bg-[#27C93F]/60 transition-all duration-300 ease-out group-hover:bg-[#27C93F] group-hover:scale-[1.05]" />
        </div>

        {/* Minimal Address Bar */}
        <div className="flex-1 max-w-[280px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[9px] text-[#9CA3AF] font-mono text-center select-none truncate">
          {url || "www.hegxcorp-client.com"}
        </div>
      </div>

      {/* Browser contents */}
      <div
        className={cn(
          "overflow-hidden bg-[#FAFAF8] relative",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "auto" && "h-auto",
          innerClassName,
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-[350ms] ease-out group-hover:scale-[1.01]">
            {children}
          </div>
        )}

        {/* Credibility proof overlay card — sleek, adjustable, and mobile compatible */}
        {(proofLabel || proofDuration || proofMetric) && !isHidden && (
          <div
            className={cn(
              "absolute z-10 select-none bg-white/95 backdrop-blur-md border border-[#EAEAEA] shadow-sm transition-all duration-[350ms] ease-out group-hover:translate-y-[-2px] group-hover:shadow-md",
              positionClasses,
              isMinimal
                ? "rounded-full px-2.5 py-1 flex items-center gap-1.5"
                : "rounded-md sm:rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 max-w-[125px] sm:max-w-[185px]",
              proofBadgeClassName,
            )}
          >
            <div className="flex-1 min-w-0">
              {proofMetric && (
                <div
                  className="text-[9.5px] sm:text-xs font-bold text-[#1D2742] tracking-tight truncate leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {proofMetric}
                </div>
              )}
              {proofLabel && !isMinimal && (
                <div className="text-[7.5px] sm:text-[8.5px] font-bold text-[#FC9C44] uppercase tracking-wider mt-0.5 leading-none truncate">
                  {proofLabel}
                </div>
              )}
              {proofDuration && !isMinimal && (
                <div className="text-[6.5px] sm:text-[7.5px] text-[#6B7280] font-medium uppercase tracking-wider mt-0.5 leading-none truncate hidden xs:block">
                  {proofDuration}
                </div>
              )}
            </div>

            {/* Sparkline Graphic */}
            <div className="hidden xs:block w-4 sm:w-8 h-2.5 sm:h-4 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FC9C44" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FC9C44" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 40 L 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2 L 100 40 Z"
                  fill="url(#sparkline-grad)"
                />
                <path
                  d="M 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2"
                  fill="none"
                  stroke="#FC9C44"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="100" cy="2" r="2.5" fill="#FC9C44" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
