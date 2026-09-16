import { useEffect } from "react";
import { useWebsiteSection } from "@/hooks/useWebsiteContent";
import type { PageSeoConfig } from "@/lib/cms-config";

type PageSEOProps = {
  sectionKey: string;
  fallbackTitle: string;
  fallbackDescription: string;
  fallbackOgImage?: string;
  canonicalUrl?: string;
};

function updateMetaTag(name: string, content: string, isProperty = false) {
  if (typeof document === "undefined" || !content) return;
  const attribute = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Dynamically synchronizes page SEO (Title, Description, Keywords, OpenGraph)
 * from the CMS to the active browser document.
 */
export function PageSEO({
  sectionKey,
  fallbackTitle,
  fallbackDescription,
  fallbackOgImage = "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
}: PageSEOProps) {
  const { data: seo } = useWebsiteSection<PageSeoConfig>(sectionKey);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const title = seo?.title || fallbackTitle;
    const description = seo?.description || fallbackDescription;
    const ogImage = seo?.ogImage || fallbackOgImage;
    const keywords = seo?.keywords;

    if (title) {
      document.title = title;
      updateMetaTag("og:title", title, true);
      updateMetaTag("twitter:title", title);
    }

    if (description) {
      updateMetaTag("description", description);
      updateMetaTag("og:description", description, true);
      updateMetaTag("twitter:description", description);
    }

    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
      updateMetaTag("twitter:image", ogImage);
    }

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
  }, [seo, fallbackTitle, fallbackDescription, fallbackOgImage]);

  return null;
}
