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
}

export function BrowserPreview({
  children,
  src,
  alt = "Browser Preview",
  className,
  innerClassName,
  aspectRatio = "video",
  proofLabel,
  proofDuration,
  proofMetric,
}: BrowserPreviewProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_16px_36px_rgba(29,39,66,0.06)] overflow-hidden transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(29,39,66,0.1)] group",
        className
      )}
    >
      {/* Browser chrome header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]">
        {/* Subtle colored chrome control dots: ○ ○ ○ */}
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#FF5F56]/60 transition-all duration-300 ease-out group-hover:bg-[#FF5F56] group-hover:scale-[1.05]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/60 transition-all duration-300 ease-out group-hover:bg-[#FFBD2E] group-hover:scale-[1.05]" />
          <div className="h-2 w-2 rounded-full bg-[#27C93F]/60 transition-all duration-300 ease-out group-hover:bg-[#27C93F] group-hover:scale-[1.05]" />
        </div>
        
        {/* Minimal Address Bar */}
        <div className="flex-1 max-w-[280px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[9px] text-[#9CA3AF] font-mono text-center select-none truncate">
          www.hegxcorp-client.com
        </div>
      </div>

      {/* Browser contents */}
      <div
        className={cn(
          "overflow-hidden bg-[#FAFAF8] relative",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "square" && "aspect-square",
          aspectRatio === "auto" && "h-auto",
          innerClassName
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

        {/* Credibility proof overlay card */}
        {(proofLabel || proofDuration || proofMetric) && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-[#EAEAEA] rounded-lg p-3.5 shadow-lg flex items-center gap-4 max-w-[280px] z-10 transition-all duration-[350ms] ease-out group-hover:translate-y-[-3px] group-hover:shadow-2xl">
            <div className="flex-1 min-w-0">
              {proofMetric && (
                <div className="text-sm font-bold text-[#1D2742] tracking-tight truncate leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {proofMetric}
                </div>
              )}
              <div className="text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider mt-0.5 leading-none">
                {proofLabel}
              </div>
              {proofDuration && (
                <div className="text-[9px] text-[#6B7280] font-medium uppercase tracking-wider mt-1 leading-none">
                  Timeline: {proofDuration}
                </div>
              )}
            </div>

            {/* Sparkline Graphic */}
            <div className="w-16 h-8 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FC9C44" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FC9C44" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area */}
                <path
                  d="M 0 40 L 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2 L 100 40 Z"
                  fill="url(#sparkline-grad)"
                />
                {/* Line */}
                <path
                  d="M 0 35 L 20 28 L 40 32 L 60 18 L 80 12 L 100 2"
                  fill="none"
                  stroke="#FC9C44"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dot */}
                <circle cx="100" cy="2" r="2.5" fill="#FC9C44" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
