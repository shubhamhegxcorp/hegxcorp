import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Globe, Search, Sparkles, Check, ChevronDown, RefreshCw, Eye } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS, type PageSeoConfig } from "@/lib/cms-config";
import { ImageUploadField } from "./ImageUploadField";

type SeoEditorCardProps = {
  sectionKey: string;
  pageName: string;
  canonicalUrl: string;
};

export function SeoEditorCard({ sectionKey, pageName, canonicalUrl }: SeoEditorCardProps) {
  const defaultSeo = (DEFAULT_CMS_SECTIONS[sectionKey] as PageSeoConfig) || {
    title: `${pageName} | Hegxcorp`,
    description: "Data-driven growth marketing, SEO, paid media, and web development.",
    canonicalUrl,
    ogImage: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
  };

  const [seo, setSeo] = useState<PageSeoConfig>(defaultSeo);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let active = true;
    async function loadSeo() {
      try {
        const saved = await getWebsiteSection({ data: { key: sectionKey } });
        if (active && saved) {
          setSeo({ ...defaultSeo, ...saved });
        }
      } catch (err) {
        console.error(`Failed to load SEO for ${sectionKey}:`, err);
      } finally {
        if (active) setLoading(false);
      }
    }
    void loadSeo();
    return () => {
      active = false;
    };
  }, [sectionKey]);

  async function handleSave() {
    setSaving(true);
    try {
      await saveWebsiteSection({ data: { key: sectionKey, value: seo } });
      toast.success(`${pageName} SEO & Meta tags updated successfully!`);
    } catch (err) {
      console.error("Failed to save SEO:", err);
      toast.error("Failed to save SEO settings.");
    } finally {
      setSaving(false);
    }
  }

  const titleLength = (seo.title || "").length;
  const descLength = (seo.description || "").length;

  return (
    <div className="rounded-xl border border-[#E4E7EC] bg-white overflow-hidden shadow-xs mb-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E4E7EC] bg-[#FAFAF8] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-[#06133D]">
                SEO & Search Engine Metadata
              </h3>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                Live Google Preview
              </span>
            </div>
            <p className="text-xs text-[#667085]">
              Customize the browser title, meta description, and social share card for the {pageName}.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          aria-label="Toggle SEO panel"
        >
          <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="p-6 space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-8 text-xs font-bold text-slate-500">
              <RefreshCw className="h-4 w-4 animate-spin text-[#FC9C44] mr-2" />
              Loading SEO settings...
            </div>
          ) : (
            <>
              {/* Google SERP Live Preview Box */}
              <div className="rounded-xl border border-slate-200 bg-[#F8F9FA] p-5">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Search className="h-3.5 w-3.5 text-[#FC9C44]" />
                  Google Search Snippet Preview
                </div>

                <div className="max-w-xl rounded-lg border border-slate-200 bg-white p-4 font-sans text-left shadow-xs">
                  {/* Google Breadcrumb */}
                  <div className="flex items-center gap-2 mb-1 text-xs text-[#202124]">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-black text-[#06133D]">
                      H
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-normal leading-tight text-[#202124]">
                        Hegxcorp
                      </span>
                      <span className="text-[10px] text-[#5f6368] leading-tight truncate">
                        {canonicalUrl}
                      </span>
                    </div>
                  </div>

                  {/* Google Title */}
                  <h4 className="text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug line-clamp-1">
                    {seo.title || "Page Title — Hegxcorp"}
                  </h4>

                  {/* Google Description */}
                  <p className="text-xs text-[#4d5156] mt-1 leading-relaxed line-clamp-2">
                    {seo.description || "Add a meta description to see how Google search results will display your website link."}
                  </p>
                </div>
              </div>

              {/* Input Fields Grid */}
              <div className="grid gap-5">
                {/* Meta Title */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      SEO Page Title
                    </label>
                    <span
                      className={`text-[11px] font-bold ${
                        titleLength > 60 ? "text-amber-600" : "text-slate-400"
                      }`}
                    >
                      {titleLength} / 60 recommended characters
                    </span>
                  </div>
                  <input
                    type="text"
                    value={seo.title || ""}
                    onChange={(e) => setSeo({ ...seo, title: e.target.value })}
                    placeholder="Enter strategic title for Google..."
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20 font-medium"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Appears in browser tabs and as the blue clickable title on Google search results.
                  </p>
                </div>

                {/* Meta Description */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      SEO Meta Description
                    </label>
                    <span
                      className={`text-[11px] font-bold ${
                        descLength > 160 ? "text-amber-600" : "text-slate-400"
                      }`}
                    >
                      {descLength} / 160 recommended characters
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={seo.description || ""}
                    onChange={(e) => setSeo({ ...seo, description: e.target.value })}
                    placeholder="Write a compelling 2-sentence summary that encourages clicks on search engines..."
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20 leading-relaxed"
                  />
                </div>

                {/* Focus Keywords */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 block">
                    Focus Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={seo.keywords || ""}
                    onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
                    placeholder="e.g. growth marketing agency, SEO services, PPC audit"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
                  />
                </div>

                {/* OpenGraph Social Image */}
                <div>
                  <ImageUploadField
                    label="Social Media Share Card Image (OpenGraph / Twitter)"
                    value={seo.ogImage || ""}
                    onChange={(newImg) => setSeo({ ...seo, ogImage: newImg })}
                    helperText="Recommended dimension: 1200 x 630 pixels (displays when shared on LinkedIn, Twitter, WhatsApp, etc.)"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex items-center justify-end pt-3 border-t border-slate-100">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void handleSave()}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#102159] disabled:opacity-60 cursor-pointer shadow-xs"
                >
                  {saving ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Check className="h-3.5 w-3.5 text-[#FC9C44]" />
                  )}
                  {saving ? "Saving SEO..." : "Save SEO Settings"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
