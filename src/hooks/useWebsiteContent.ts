import { useState, useEffect } from "react";
import { getWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";
import { subscribeToCmsDraft, requestCmsInitialSync } from "@/lib/cms-preview-bridge";

export function useWebsiteSection<T = any>(
  key: string,
  defaultValue?: T,
): { data: T; loading: boolean; refresh: () => Promise<void> } {
  const fallbackVal = defaultValue !== undefined ? defaultValue : (DEFAULT_CMS_SECTIONS[key] as T);
  const [data, setData] = useState<T>(fallbackVal);
  const [loading, setLoading] = useState(true);

  const fetchSection = async () => {
    try {
      const result = await getWebsiteSection({ data: { key } });
      if (result) {
        setData(result);
      }
    } catch (err) {
      console.error(`Error loading CMS section "${key}":`, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Real-time live preview draft subscription
  useEffect(() => {
    const unsubscribe = subscribeToCmsDraft(
      (updatedKey, updatedData) => {
        if (updatedKey === key && updatedData) {
          setData(updatedData);
        }
      },
      (drafts) => {
        if (drafts && drafts[key]) {
          setData(drafts[key]);
        }
      },
    );

    // If inside an iframe or preview mode, request current draft state
    if (typeof window !== "undefined") {
      requestCmsInitialSync();
    }

    return unsubscribe;
  }, [key]);

  return { data, loading, refresh: fetchSection };
}
