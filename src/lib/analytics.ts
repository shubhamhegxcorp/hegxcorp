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

function compactParams(params: TrackingEventParams): Record<string, string | number | boolean> {
  // The filter strips undefined/null/"" values, so the surviving entries are
  // always string | number | boolean. TypeScript can't narrow through
  // Array.filter, so assert the post-filter value type explicitly.
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  ) as Record<string, string | number | boolean>;
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

export type LeadUserData = {
  email?: string;
  phone?: string;
};

// Normalizes a raw phone string to E.164 (e.g. "+919876543210"). Enhanced
// Conversions match rates collapse if the number has spaces or is missing a
// country code, so strip non-digits and assume +91 for bare 10-digit numbers.
function normalizePhoneE164(rawPhone: string | undefined): string | undefined {
  if (!rawPhone) return undefined;

  let digits = rawPhone.replace(/\D/g, "");
  if (!digits) return undefined;

  if (digits.length === 10) digits = `91${digits}`;

  return `+${digits}`;
}

// Builds the `user_data` object Google expects for Enhanced Conversions.
// Values are sent as PLAINTEXT to the dataLayer; GTM's tag SHA-256-hashes them
// before transmission. Never write these into the VisitorEvent table or into
// GA4 / Meta event params.
function buildLeadUserData(userData: LeadUserData): Record<string, string> | undefined {
  const result: Record<string, string> = {};

  const email = userData.email?.trim().toLowerCase();
  if (email) result.email_address = email;

  const phone = normalizePhoneE164(userData.phone);
  if (phone) result.phone_number = phone;

  return Object.keys(result).length > 0 ? result : undefined;
}

export function trackLead(params: TrackingEventParams = {}, userData: LeadUserData = {}) {
  const leadParams = {
    currency: "INR",
    value: 1,
    ...params,
  };

  const leadUserData = buildLeadUserData(userData);

  // Enhanced Conversions: expose plaintext PII to GTM via a dedicated dataLayer
  // push immediately BEFORE the conversion event, so the `user_data` Data Layer
  // Variable resolves when the Google Ads tag fires. GTM hashes it. We keep raw
  // PII out of GA4 params and out of our own VisitorEvent table on purpose.
  if (typeof window !== "undefined" && leadUserData) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ user_data: leadUserData });
  }

  trackEvent("generate_lead", leadParams);

  if (typeof window === "undefined") return;

  if (googleAdsConversionId && googleAdsLeadLabel) {
    // Direct gtag.js Enhanced Conversions path (used when gtag.js loads without
    // GTM). Harmless when GTM is the one firing the conversion.
    if (leadUserData) {
      window.gtag?.("set", "user_data", leadUserData);
    }

    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsConversionId}/${googleAdsLeadLabel}`,
      ...compactParams(leadParams),
    });
  }

  // Meta: do NOT pass raw email/phone here. Advanced matching must be hashed and
  // supplied via fbq('init', id, {...}). This stays a non-PII conversion signal.
  window.fbq?.("track", "Lead", compactParams(leadParams));
}

export function trackContactClick(method: "phone" | "email" | "whatsapp", label?: string) {
  trackEvent("contact_click", {
    contact_method: method,
    link_label: label,
  });
}
