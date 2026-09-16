import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Edit2,
  Check,
  Eye,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Link as LinkIcon,
  Shield,
  Share2,
  Plus,
  Trash2,
  RotateCcw,
} from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS, type FooterConfig, type FooterLinkItem } from "@/lib/cms-config";
import { broadcastCmsDraft, registerCmsSyncResponder } from "@/lib/cms-preview-bridge";
import { CmsLivePreviewModal } from "@/components/admin/CmsLivePreviewModal";

export const Route = createFileRoute("/admin/website-content/footer")({
  component: AdminFooterCMS,
});

function AdminFooterCMS() {
  const [footer, setFooter] = useState<FooterConfig>(
    DEFAULT_CMS_SECTIONS["site.footer"] as FooterConfig,
  );
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Load section on mount
  useEffect(() => {
    async function loadData() {
      try {
        const data = await getWebsiteSection({ data: { key: "site.footer" } });
        if (data) {
          setFooter((prev) => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error("Failed to load footer CMS data:", err);
      } finally {
        setLoading(false);
      }
    }
    void loadData();
  }, []);

  // Register responder for newly opened preview frames
  useEffect(() => {
    const unregister = registerCmsSyncResponder(() => ({
      "site.footer": footer,
      "home.footer": footer,
    }));
    return unregister;
  }, [footer]);

  const updateField = <K extends keyof FooterConfig>(field: K, value: FooterConfig[K]) => {
    const updated = { ...footer, [field]: value };
    setFooter(updated);
    broadcastCmsDraft("site.footer", updated);
    broadcastCmsDraft("home.footer", updated);
  };

  const updateLinkItem = (
    groupKey: "servicesLinks" | "companyLinks" | "regionsLinks",
    index: number,
    field: "label" | "href" | "to",
    value: string,
  ) => {
    const list = [...footer[groupKey]];
    list[index] = { ...list[index], [field]: value };
    updateField(groupKey, list);
  };

  const addLinkItem = (groupKey: "servicesLinks" | "companyLinks" | "regionsLinks") => {
    const list = [...footer[groupKey], { label: "New Link", to: "/" }];
    updateField(groupKey, list);
  };

  const removeLinkItem = (
    groupKey: "servicesLinks" | "companyLinks" | "regionsLinks",
    index: number,
  ) => {
    const list = footer[groupKey].filter((_, i) => i !== index);
    updateField(groupKey, list);
  };

  const handleResetDefaults = () => {
    const defaults = DEFAULT_CMS_SECTIONS["site.footer"] as FooterConfig;
    setFooter(defaults);
    broadcastCmsDraft("site.footer", defaults);
    toast.info("Reset to default footer configuration.");
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await saveWebsiteSection({ data: { key: "site.footer", value: footer } });
      // Also update home.footer alias in DB for backwards compatibility
      await saveWebsiteSection({ data: { key: "home.footer", value: footer } }).catch(() => {});
      toast.success("Global Footer updated successfully!");
    } catch (err) {
      console.error("Failed to save footer:", err);
      toast.error("Failed to save footer changes.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-sm font-bold text-slate-500">Loading footer settings...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-8 max-w-[1200px] mx-auto">
      {/* Top action header with Live Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-[#FC9C44]/15 text-[#FC9C44] text-[10px] font-mono font-bold uppercase tracking-wider">
              Global Site Component
            </span>
          </div>
          <h2 className="text-xl font-black text-[#06133D] mt-1">Footer Configuration</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage global footer branding, contact details, social links, column navigation, and
            compliance copy across every page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-semibold text-[#344054] hover:bg-slate-50 transition"
            title="Reset to default values"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>

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
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#E88C35] disabled:opacity-60 transition"
          >
            <Check className="h-4 w-4" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* ── Section 1: Brand & Identity ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <Sparkles className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Brand &amp; Watermark</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Brand Name</label>
            <input
              type="text"
              value={footer.brandName || ""}
              onChange={(e) => updateField("brandName", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="Hegxcorp"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">
              Watermark Background Text
            </label>
            <input
              type="text"
              value={footer.watermarkText || ""}
              onChange={(e) => updateField("watermarkText", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm font-mono outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="HEGXCORP"
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Displays as an architectural outline watermark across the bottom of the footer.
            </p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#344054] mb-1">
              Brand Description (Optional bio)
            </label>
            <textarea
              rows={2}
              value={footer.brandDescription || ""}
              onChange={(e) => updateField("brandDescription", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="A data-driven growth consultancy helping businesses generate more leads..."
            />
          </div>
        </div>
      </div>

      {/* ── Section 2: Contact & Presence ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <Phone className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Contact &amp; Global Presence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1 flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-slate-400" /> Phone Hotline
            </label>
            <input
              type="text"
              value={footer.phone || ""}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="+91 836 920 7836"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1 flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-slate-400" /> Email Address
            </label>
            <input
              type="email"
              value={footer.email || ""}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="contact@hegxcorp.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1 flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-slate-400" /> Address / Regions
            </label>
            <input
              type="text"
              value={footer.address || ""}
              onChange={(e) => updateField("address", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="India • USA • UK • Dubai"
            />
          </div>
        </div>
      </div>

      {/* ── Section 3: Call To Action Pill ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <Edit2 className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Footer CTA Button</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Button Label</label>
            <input
              type="text"
              value={footer.ctaText || ""}
              onChange={(e) => updateField("ctaText", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="Get Free Growth Audit"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Destination URL</label>
            <input
              type="text"
              value={footer.ctaUrl || ""}
              onChange={(e) => updateField("ctaUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="/free-growth-audit"
            />
          </div>
        </div>
      </div>

      {/* ── Section 4: Social Profiles ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <Share2 className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Social Profiles</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">LinkedIn Profile</label>
            <input
              type="url"
              value={footer.linkedinUrl || ""}
              onChange={(e) => updateField("linkedinUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="https://linkedin.com/company/hegxcorp"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">X (Twitter) Handle</label>
            <input
              type="url"
              value={footer.twitterUrl || ""}
              onChange={(e) => updateField("twitterUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="https://x.com/thehegxcorp"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Instagram Profile</label>
            <input
              type="url"
              value={footer.instagramUrl || ""}
              onChange={(e) => updateField("instagramUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="https://instagram.com/hegxcorp"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Facebook Page</label>
            <input
              type="url"
              value={footer.facebookUrl || ""}
              onChange={(e) => updateField("facebookUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="https://facebook.com/hegxcorp"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">YouTube Channel (Optional)</label>
            <input
              type="url"
              value={footer.youtubeUrl || ""}
              onChange={(e) => updateField("youtubeUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="https://youtube.com/@hegxcorp"
            />
          </div>
        </div>
      </div>

      {/* ── Section 5: Column Navigation Links ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <LinkIcon className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Footer Navigation Links</h3>
        </div>

        {/* Services Links Column */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Services Column Links ({footer.servicesLinks?.length || 0})
            </span>
            <button
              type="button"
              onClick={() => addLinkItem("servicesLinks")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#FC9C44] hover:text-[#e0852e]"
            >
              <Plus className="h-3.5 w-3.5" /> Add Link
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {footer.servicesLinks?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50"
              >
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) =>
                    updateLinkItem("servicesLinks", idx, "label", e.target.value)
                  }
                  className="flex-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-medium"
                  placeholder="Label"
                />
                <input
                  type="text"
                  value={item.to || item.href || ""}
                  onChange={(e) =>
                    updateLinkItem("servicesLinks", idx, "to", e.target.value)
                  }
                  className="w-32 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono"
                  placeholder="/service/..."
                />
                <button
                  type="button"
                  onClick={() => removeLinkItem("servicesLinks", idx)}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Company Links Column */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Company Column Links ({footer.companyLinks?.length || 0})
            </span>
            <button
              type="button"
              onClick={() => addLinkItem("companyLinks")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#FC9C44] hover:text-[#e0852e]"
            >
              <Plus className="h-3.5 w-3.5" /> Add Link
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {footer.companyLinks?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50"
              >
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) =>
                    updateLinkItem("companyLinks", idx, "label", e.target.value)
                  }
                  className="flex-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-medium"
                  placeholder="Label"
                />
                <input
                  type="text"
                  value={item.to || item.href || ""}
                  onChange={(e) =>
                    updateLinkItem("companyLinks", idx, "to", e.target.value)
                  }
                  className="w-32 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono"
                  placeholder="/about"
                />
                <button
                  type="button"
                  onClick={() => removeLinkItem("companyLinks", idx)}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Websites Column */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Regional Domains ({footer.regionsLinks?.length || 0})
            </span>
            <button
              type="button"
              onClick={() => addLinkItem("regionsLinks")}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#FC9C44] hover:text-[#e0852e]"
            >
              <Plus className="h-3.5 w-3.5" /> Add Region
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {footer.regionsLinks?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-slate-50"
              >
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) =>
                    updateLinkItem("regionsLinks", idx, "label", e.target.value)
                  }
                  className="flex-1 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-medium"
                  placeholder="Region Name"
                />
                <input
                  type="text"
                  value={item.href || item.to || ""}
                  onChange={(e) =>
                    updateLinkItem("regionsLinks", idx, "href", e.target.value)
                  }
                  className="w-40 rounded border border-slate-300 bg-white px-2 py-1 text-xs font-mono"
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={() => removeLinkItem("regionsLinks", idx)}
                  className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 6: Legal & Compliance ── */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 border-b border-[#F2F4F7] pb-3">
          <Shield className="h-4 w-4 text-[#FC9C44]" />
          <h3 className="text-sm font-bold text-[#06133D]">Legal &amp; Compliance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-[#344054] mb-1">
              Copyright Notice
            </label>
            <input
              type="text"
              value={footer.copyrightText || ""}
              onChange={(e) => updateField("copyrightText", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="© 2026 Hegxcorp. All rights reserved."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Privacy Policy URL</label>
            <input
              type="text"
              value={footer.privacyPolicyUrl || ""}
              onChange={(e) => updateField("privacyPolicyUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm font-mono outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="/privacy-policy"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Terms of Service URL</label>
            <input
              type="text"
              value={footer.termsUrl || ""}
              onChange={(e) => updateField("termsUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm font-mono outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="/terms-of-service"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#344054] mb-1">Cookie Policy URL</label>
            <input
              type="text"
              value={footer.cookiePolicyUrl || ""}
              onChange={(e) => updateField("cookiePolicyUrl", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm font-mono outline-none focus:border-[#FC9C44] focus:ring-1 focus:ring-[#FC9C44]"
              placeholder="/cookie-policy"
            />
          </div>
        </div>
      </div>

      {/* Floating Save Bar */}
      <div className="flex items-center justify-between border-t border-[#E4E7EC] pt-4">
        <p className="text-xs text-slate-500">
          Changes take effect globally across all pages upon saving.
        </p>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#E88C35] disabled:opacity-60 transition cursor-pointer"
        >
          <Check className="h-4 w-4" />
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath="/"
        pageName="Global Footer (Homepage)"
        onSyncAllDrafts={() => {
          broadcastCmsDraft("site.footer", footer);
          broadcastCmsDraft("home.footer", footer);
        }}
      />
    </div>
  );
}
export default AdminFooterCMS;
