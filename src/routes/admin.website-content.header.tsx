import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Edit2, Check, X, Eye, Phone, Globe, Menu, Sparkles } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS, type HeaderNavConfig } from "@/lib/cms-config";
import { broadcastCmsDraft, registerCmsSyncResponder } from "@/lib/cms-preview-bridge";
import { CmsLivePreviewModal } from "@/components/admin/CmsLivePreviewModal";

export const Route = createFileRoute("/admin/website-content/header")({
  component: AdminHeaderCMS,
});

function AdminHeaderCMS() {
  const [header, setHeader] = useState<HeaderNavConfig>(
    DEFAULT_CMS_SECTIONS["site.header"] as HeaderNavConfig,
  );
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Load section on mount
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getWebsiteSection({ data: { key: "site.header" } });
        if (data) {
          setHeader(data);
        }
      } catch (err) {
        console.error("Failed to load header CMS data:", err);
      } finally {
        setLoading(false);
      }
    }
    void loadData();
  }, []);

  // Register responder for newly opened preview frames
  useEffect(() => {
    const unregister = registerCmsSyncResponder(() => ({
      "site.header": header,
    }));
    return unregister;
  }, [header]);

  const updateField = (field: keyof HeaderNavConfig, value: string) => {
    const updated = { ...header, [field]: value };
    setHeader(updated);
    // Instantly broadcast draft to active live preview frames & windows
    broadcastCmsDraft("site.header", updated);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveWebsiteSection({ data: { key: "site.header", value: header } });
      toast.success("Header & Navigation updated successfully!");
    } catch (err) {
      console.error("Failed to save header:", err);
      toast.error("Failed to save header changes.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-sm font-bold text-slate-500">Loading header settings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-8">
      {/* Top action header with Live Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-5">
        <div>
          <h2 className="text-xl font-black text-[#06133D]">Header &amp; Navigation</h2>
          <p className="text-xs text-slate-500 mt-1">
            Edit main menu labels, top utility hotline, global presence copy, and CTA buttons.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0A1D54] transition"
          >
            <Eye className="h-4 w-4 text-[#FC9C44]" />
            Live Preview
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </button>

          <button
            type="button"
            disabled={saving}
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#E88C35] transition disabled:opacity-50"
          >
            <Check className="h-3.5 w-3.5" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Live Sync Tip */}
      <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-xs text-emerald-900">
        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Sparkles className="h-2 w-2" />
        </span>
        <p>
          <strong className="font-black">Dynamic Live Preview enabled:</strong> As you edit any
          label below (e.g. changing <em>Services</em> to <em>Service</em>), the live preview
          updates immediately in real time without refreshing the page or saving to the database!
        </p>
      </div>

      {/* Main Navigation Labels Card */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-[#F2F4F7] pb-3 flex items-center gap-2">
          <Menu className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-base font-black text-[#06133D]">Main Navbar Menu Items</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Services Menu Label
            </span>
            <input
              type="text"
              value={header.servicesLabel || ""}
              onChange={(e) => updateField("servicesLabel", e.target.value)}
              placeholder="Services"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">
              The dropdown trigger for mega menu (desktop &amp; mobile).
            </span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Case Studies Label
            </span>
            <input
              type="text"
              value={header.caseStudiesLabel || ""}
              onChange={(e) => updateField("caseStudiesLabel", e.target.value)}
              placeholder="Case Studies"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Links to /case-studies</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              About Us Label
            </span>
            <input
              type="text"
              value={header.aboutLabel || ""}
              onChange={(e) => updateField("aboutLabel", e.target.value)}
              placeholder="About Us"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Links to /about</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Blog Label
            </span>
            <input
              type="text"
              value={header.blogLabel || ""}
              onChange={(e) => updateField("blogLabel", e.target.value)}
              placeholder="Blog"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Links to /blog</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Contact Label
            </span>
            <input
              type="text"
              value={header.contactLabel || ""}
              onChange={(e) => updateField("contactLabel", e.target.value)}
              placeholder="Contact"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Links to /contact</span>
          </label>
        </div>
      </div>

      {/* Top Utility Bar & Hotline Card */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-[#F2F4F7] pb-3 flex items-center gap-2">
          <Phone className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-base font-black text-[#06133D]">Top Utility Bar &amp; Hotline</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Phone Hotline
            </span>
            <input
              type="text"
              value={header.phone || ""}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+91 836 920 7836"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Displayed in top bar and hotline dialer.</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Support Text
            </span>
            <input
              type="text"
              value={header.supportText || ""}
              onChange={(e) => updateField("supportText", e.target.value)}
              placeholder="24/7 Support"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Top bar status badge text.</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Global Presence Text
            </span>
            <input
              type="text"
              value={header.globalPresenceText || ""}
              onChange={(e) => updateField("globalPresenceText", e.target.value)}
              placeholder="India • USA • Australia • Dubai"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Top bar presence summary line.</span>
          </label>
        </div>
      </div>

      {/* Header CTA Button Card */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-[#F2F4F7] pb-3 flex items-center gap-2">
          <Globe className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-base font-black text-[#06133D]">Primary Action Button (Navbar CTA)</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              CTA Button Label
            </span>
            <input
              type="text"
              value={header.ctaText || ""}
              onChange={(e) => updateField("ctaText", e.target.value)}
              placeholder="Connect With Us"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Pill button on right side of navbar.</span>
          </label>

          <label className="grid gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              CTA Button Target URL
            </span>
            <input
              type="text"
              value={header.ctaUrl || ""}
              onChange={(e) => updateField("ctaUrl", e.target.value)}
              placeholder="/contact"
              className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-sm outline-none focus:border-[#FC9C44]"
            />
            <span className="text-[11px] text-slate-400">Relative link or full external URL.</span>
          </label>
        </div>
      </div>

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath="/"
        pageName="Website Header (Homepage)"
        onSyncAllDrafts={() => broadcastCmsDraft("site.header", header)}
      />
    </div>
  );
}
