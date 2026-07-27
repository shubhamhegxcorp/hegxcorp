import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";

const scrollDepthBuckets = [25, 50, 75, 90, 100];
const scrollTrackDelayMs = 700;

function getScrollPercent() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (documentHeight <= 0) return 100;

  return Math.min(100, Math.round((scrollTop / documentHeight) * 100));
}

function getScrollDepthBucket(scrollPercent: number) {
  return scrollDepthBuckets.reduce(
    (highestBucket, bucket) => (scrollPercent >= bucket ? bucket : highestBucket),
    0,
  );
}

export function VisitorTracking() {
  const location = useLocation();
  const highestScrollDepthRef = useRef(0);
  const scrollTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    highestScrollDepthRef.current = 0;

    trackEvent("page_view", {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  useEffect(() => {
    function sendHighestScrollDepth() {
      if (highestScrollDepthRef.current <= 0) return;

      trackEvent("scroll_depth", {
        scroll_percent: highestScrollDepthRef.current,
        page_path: location.pathname,
      });
    }

    function handleScroll() {
      const scrollDepth = getScrollDepthBucket(getScrollPercent());
      if (scrollDepth <= highestScrollDepthRef.current) return;

      highestScrollDepthRef.current = scrollDepth;

      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = window.setTimeout(sendHighestScrollDepth, scrollTrackDelayMs);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  return null;
}
