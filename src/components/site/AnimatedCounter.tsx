import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  trigger?: boolean;
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals = 0,
  trigger = true,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const obj = useRef({ value: 0 });

  useEffect(() => {
    if (!trigger) return;

    // Set initial value
    obj.current.value = 0;
    setCount(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(obj.current, {
            value: target,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
              setCount(obj.current.value);
            },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration, trigger]);

  const displayValue = count.toFixed(decimals);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
