import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tagline,
  heading,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center max-w-[720px] mx-auto" : "max-w-[640px]",
        className,
      )}
    >
      <span
        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FC9C44]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {tagline}
      </span>
      <h2
        className="font-bold text-[#232323] leading-tight"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(28px, 3.5vw, 48px)",
        }}
      >
        {heading}
      </h2>
      {description && (
        <p
          className="text-[#6B7280] leading-relaxed mt-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 1.1vw, 17px)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
