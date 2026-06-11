/**
 * PremiumInteractions.tsx
 *
 * Shared interaction primitives used across the Hegxcorp site.
 *
 * Exports:
 *  - CaseStudyCursor  — floating "View Case Study →" label that only appears
 *                       inside the element it's rendered in. Uses GSAP lerp.
 *  - MagneticButton   — subtle magnetic spring wrapper (max 10px movement)
 *                       for CTA buttons. Uses CSS custom properties + rAF.
 */

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react";
import gsap from "gsap";

// ---------------------------------------------------------------------------
// Utility — respect prefers-reduced-motion
// ---------------------------------------------------------------------------
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ---------------------------------------------------------------------------
// CaseStudyCursor
// A container element that renders a custom floating cursor label inside it.
// Usage: wrap any case-study card with <CaseStudyCursor> … </CaseStudyCursor>
// ---------------------------------------------------------------------------
interface CaseStudyCursorProps {
  children: ReactNode;
  className?: string;
}

export function CaseStudyCursor({ children, className = "" }: CaseStudyCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const animate = useCallback(() => {
    if (!cursorRef.current) return;
    // Lerp: smooth follow with 0.12 coefficient (premium feel)
    posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
    posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;

    gsap.set(cursorRef.current, {
      x: posRef.current.x,
      y: posRef.current.y,
      xPercent: -50,
      yPercent: -50,
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetRef.current.x = e.clientX - rect.left;
      targetRef.current.y = e.clientY - rect.top;
    };

    const handleEnter = () => {
      setVisible(true);
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleLeave = () => {
      setVisible(false);
      cancelAnimationFrame(rafRef.current);
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ cursor: "none" }}>
      {children}

      {/* Custom floating label — positioned relative to the container */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 z-50"
        style={{
          willChange: "transform",
          transition: "opacity 200ms ease, transform 200ms ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.8)",
        }}
      >
        <div
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide whitespace-nowrap"
          style={{
            background: "#1D2742",
            color: "#FC9C44",
            boxShadow: "0 8px 24px -6px rgba(29,39,66,0.4)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          View Case Study →
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// MagneticButton
// Wraps any children with a subtle magnetic spring effect (max 10px).
// Usage: <MagneticButton> <Link …> … </Link> </MagneticButton>
// ---------------------------------------------------------------------------
interface MagneticButtonProps {
  children: ReactNode;
  strength?: number; // max displacement in px (default 10)
  className?: string;
}

export function MagneticButton({ children, strength = 10, className = "" }: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const lerpFactor = 0.18; // spring stiffness feel

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = wrapperRef.current;
    if (!el) return;

    const tick = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

      gsap.set(el, {
        x: currentPos.current.x,
        y: currentPos.current.y,
        force3D: true,
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      // Scale displacement to max `strength` px
      const maxDist = Math.max(rect.width, rect.height) / 2;
      targetPos.current.x = (distX / maxDist) * strength;
      targetPos.current.y = (distY / maxDist) * strength;
    };

    const handleLeave = () => {
      targetPos.current.x = 0;
      targetPos.current.y = 0;
    };

    const handleEnter = () => {
      rafRef.current = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} className={`inline-flex ${className}`} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
