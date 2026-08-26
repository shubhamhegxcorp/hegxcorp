import { useState, useEffect } from "react";
import { getWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

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

  return { data, loading, refresh: fetchSection };
}
