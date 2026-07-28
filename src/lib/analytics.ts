import { saveVisitorEvent } from "./visitor-events";
import { cleanLeadSourceData, type LeadSourceData } from "./lead-source";

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
const leadSourceStorageKey = "hegxcorp_lead_source";
const excludedTrackingPaths = ["/admin"];

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

function shouldTrackCurrentPage() {
  if (typeof window === "undefined") return false;

  return !excludedTrackingPaths.some(
    (path) => window.location.pathname === path || window.location.pathname.startsWith(`${path}/`),
  );
}

function readStoredLeadSource(): LeadSourceData {
  try {
    const savedValue = window.localStorage.getItem(leadSourceStorageKey);
    if (!savedValue) return {};

    const parsedValue = JSON.parse(savedValue) as unknown;
    if (!parsedValue || typeof parsedValue !== "object") return {};

    return cleanLeadSourceData(parsedValue as LeadSourceData);
  } catch {
    return {};
  }
}

function getSearchValue(searchParams: URLSearchParams, names: string[]) {
  for (const name of names) {
    const value = searchParams.get(name)?.trim();
    if (value) return value;
  }

  return undefined;
}

function inferLeadSource(searchParams: URLSearchParams, referrer: string) {
  const utmSource = searchParams.get("utm_source")?.trim();
  const sourceValue = (utmSource ?? "").toLowerCase();
  const referrerValue = referrer.toLowerCase();

  if (
    searchParams.has("fbclid") ||
    sourceValue.includes("meta") ||
    sourceValue.includes("facebook") ||
    sourceValue.includes("instagram") ||
    referrerValue.includes("facebook.com") ||
    referrerValue.includes("instagram.com")
  ) {
    return "Meta Ads";
  }

  if (sourceValue) return utmSource;

  if (referrer) {
    try {
      return new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      return "Referral";
    }
  }

  return "Direct";
}

function captureLeadSource() {
  if (typeof window === "undefined") return {};

  const storedLeadSource = readStoredLeadSource();
  const searchParams = new URLSearchParams(window.location.search);
  const hasAdClick =
    searchParams.has("fbclid") ||
    Array.from(searchParams.keys()).some((key) => key.toLowerCase().startsWith("utm_"));

  if (!hasAdClick && Object.keys(storedLeadSource).length > 0) {
    return storedLeadSource;
  }

  if (!hasAdClick && !document.referrer) {
    return storedLeadSource;
  }

  const nextLeadSource = cleanLeadSourceData({
    leadSource: inferLeadSource(searchParams, document.referrer),
    leadMedium: getSearchValue(searchParams, ["utm_medium"]),
    leadCampaign: getSearchValue(searchParams, ["utm_campaign", "campaign", "campaign_name"]),
    leadAdSet: getSearchValue(searchParams, ["utm_term", "adset", "adset_name"]),
    leadAd: getSearchValue(searchParams, ["utm_content", "ad", "ad_name"]),
    leadLandingPage: `${window.location.pathname}${window.location.search}`,
    leadReferrer: document.referrer,
  });

  window.localStorage.setItem(leadSourceStorageKey, JSON.stringify(nextLeadSource));
  return nextLeadSource;
}

export function getVisitorId() {
  if (typeof window === "undefined") return "";

  const storedVisitorId = window.localStorage.getItem(visitorIdStorageKey);
  if (storedVisitorId) return storedVisitorId;

  const visitorId = createVisitorId();
  window.localStorage.setItem(visitorIdStorageKey, visitorId);
  return visitorId;
}

export function getLeadSourceData(): LeadSourceData {
  if (typeof window === "undefined") return {};

  return captureLeadSource();
}

export function trackEvent(eventName: string, params: TrackingEventParams = {}) {
  if (typeof window === "undefined" || !shouldTrackCurrentPage()) return;

  const visitorId = getVisitorId();
  const leadSourceData = getLeadSourceData();
  const eventParams = compactParams({
    visitor_id: visitorId,
    page_path: window.location.pathname,
    lead_source: leadSourceData.leadSource,
    lead_medium: leadSourceData.leadMedium,
    lead_campaign: leadSourceData.leadCampaign,
    lead_ad_set: leadSourceData.leadAdSet,
    lead_ad: leadSourceData.leadAd,
    lead_landing_page: leadSourceData.leadLandingPage,
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
