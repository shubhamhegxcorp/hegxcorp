import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SplitText({ text, className, style }: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const lines = text.split("\n");

  useGSAP(
    () => {
      gsap.fromTo(
        ".split-line-inner",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12, // 120ms delay between lines
          force3D: true,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <h1 ref={containerRef} className={className} style={style}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden relative pb-2 -mb-2">
          <span className="split-line-inner inline-block">
            {line === "Real Results." ? (
              <span className="relative inline-block">
                {line}
                <span
                  className="absolute bottom-0 left-0 right-0 h-[4px] rounded-full bg-[#FC9C44]"
                  style={{ bottom: "-6px" }}
                />
              </span>
            ) : (
              line
            )}
          </span>
        </span>
      ))}
    </h1>
  );
}
