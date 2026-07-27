import { saveVisitorEvent } from "./visitor-events";

type TrackingEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const googleAdsConversionId = import.meta.env.VITE_GOOGLE_ADS_ID;
const googleAdsLeadLabel = import.meta.env.VITE_GOOGLE_ADS_LEAD_LABEL;
const visitorIdStorageKey = "hegxcorp_visitor_id";

function compactParams(params: TrackingEventParams) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );
}

function createVisitorId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
}

export function getVisitorId() {
  if (typeof window === "undefined") return "";

  const storedVisitorId = window.localStorage.getItem(visitorIdStorageKey);
  if (storedVisitorId) return storedVisitorId;

  const visitorId = createVisitorId();
  window.localStorage.setItem(visitorIdStorageKey, visitorId);
  return visitorId;
}

export function trackEvent(eventName: string, params: TrackingEventParams = {}) {
  if (typeof window === "undefined") return;

  const visitorId = getVisitorId();
  const eventParams = compactParams({
    visitor_id: visitorId,
    page_path: window.location.pathname,
    ...params,
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });

  window.gtag?.("event", eventName, eventParams);

  void saveVisitorEvent({
    data: {
      visitorId,
      eventName,
      path: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer,
      params: eventParams,
      userAgent: navigator.userAgent,
    },
  }).catch((error) => {
    console.error("Visitor event tracking failed:", error);
  });
}

export function trackLead(params: TrackingEventParams = {}) {
  const leadParams = {
    currency: "INR",
    value: 1,
    ...params,
  };

  trackEvent("generate_lead", leadParams);

  if (typeof window === "undefined") return;

  if (googleAdsConversionId && googleAdsLeadLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsConversionId}/${googleAdsLeadLabel}`,
      ...compactParams(leadParams),
    });
  }

  window.fbq?.("track", "Lead", compactParams(leadParams));
}

export function trackContactClick(method: "phone" | "email" | "whatsapp", label?: string) {
  trackEvent("contact_click", {
    contact_method: method,
    link_label: label,
  });
}
