import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Edit2, Check, X, Eye, FileText, Settings, Layers } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import {
  DEFAULT_CMS_SECTIONS,
  type ContactFormConfig,
  type ContactCustomField,
} from "@/lib/cms-config";
import { SeoEditorCard } from "@/components/admin/SeoEditorCard";
import { CmsLivePreviewModal } from "@/components/admin/CmsLivePreviewModal";
import { broadcastCmsDraft, registerCmsSyncResponder } from "@/lib/cms-preview-bridge";

export const Route = createFileRoute("/admin/website-content/contact")({
  component: AdminContactCMS,
});

function AdminContactCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [serviceGroups, setServiceGroups] = useState<any>(null);
  const [formConfig, setFormConfig] = useState<ContactFormConfig>(
    DEFAULT_CMS_SECTIONS["contact.form"] as ContactFormConfig,
  );

  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, detailsData, serviceGroupsData, formData] = await Promise.all([
          getWebsiteSection({ data: { key: "contact.hero" } }),
          getWebsiteSection({ data: { key: "contact.details" } }),
          getWebsiteSection({ data: { key: "contact.serviceGroups" } }),
          getWebsiteSection({ data: { key: "contact.form" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["contact.hero"]);
        setDetails(detailsData || DEFAULT_CMS_SECTIONS["contact.details"]);
        setServiceGroups(serviceGroupsData || DEFAULT_CMS_SECTIONS["contact.serviceGroups"]);
        setFormConfig(formData || (DEFAULT_CMS_SECTIONS["contact.form"] as ContactFormConfig));
      } catch (err) {
        console.error("Failed to load contact CMS data:", err);
        toast.error("Failed to load website content.");
      } finally {
        setLoading(false);
      }
    }
    void loadData();
  }, []);

  const handleSave = async (key: string, value: any) => {
    try {
      await saveWebsiteSection({ data: { key, value } });
      toast.success("Section updated successfully!");
      setActiveSection(null);
    } catch (err) {
      console.error("Save failed:", err);
      toast.error("Failed to save changes.");
    }
  };

  // Register responder for newly opened preview frames
  useEffect(() => {
    const unregister = registerCmsSyncResponder(() => ({
      "contact.hero": hero,
      "contact.details": details,
      "contact.serviceGroups": serviceGroups,
      "contact.form": formConfig,
    }));
    return unregister;
  }, [hero, details, serviceGroups, formConfig]);

  // Real-time broadcast on active section edits
  useEffect(() => {
    if (activeSection === "hero" && hero) broadcastCmsDraft("contact.hero", hero);
  }, [hero, activeSection]);
  useEffect(() => {
    if (activeSection === "details" && details) broadcastCmsDraft("contact.details", details);
  }, [details, activeSection]);
  useEffect(() => {
    if (activeSection === "serviceGroups" && serviceGroups)
      broadcastCmsDraft("contact.serviceGroups", serviceGroups);
  }, [serviceGroups, activeSection]);
  useEffect(() => {
    if (activeSection === "form" && formConfig)
      broadcastCmsDraft("contact.form", formConfig);
  }, [formConfig, activeSection]);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-sm font-bold text-slate-500">Loading website content...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E7EC] pb-4">
        <div>
          <h2 className="text-xl font-black text-[#06133D]">Contact Page Content</h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage and edit all frontend Contact page sections, form fields, and dropdown options.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0A1D54] transition shrink-0 cursor-pointer"
        >
          <Eye className="h-4 w-4 text-[#FC9C44]" />
          Live Preview
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </button>
      </div>

      {/* --- SEO & META TAGS CARD --- */}
      <SeoEditorCard
        sectionKey="contact.seo"
        pageName="Contact Page"
        canonicalUrl="https://hegxcorp.com/contact"
      />

      {/* --- HERO SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
            <p className="text-xs text-slate-500">Intro headline and description copy</p>
          </div>
          {activeSection !== "hero" ? (
            <button
              onClick={() => setActiveSection("hero")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35] cursor-pointer"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "contact.hero" } }).then((res) => setHero(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "hero" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={hero.tagline}
                  onChange={(e) => setHero({ ...hero, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Headline Title
                </span>
                <input
                  type="text"
                  value={hero.title}
                  onChange={(e) => setHero({ ...hero, title: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Description
              </span>
              <textarea
                rows={3}
                value={hero.description}
                onChange={(e) => setHero({ ...hero, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline:</span> {hero.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {hero.description}
            </div>
          </div>
        )}
      </div>

      {/* --- CONTACT DETAILS SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Contact Details</h3>
            <p className="text-xs text-slate-500">
              Direct phone, email, and office location address info
            </p>
          </div>
          {activeSection !== "details" ? (
            <button
              onClick={() => setActiveSection("details")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.details", details)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35] cursor-pointer"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "contact.details" } }).then((res) =>
                    setDetails(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "details" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone Number
                </span>
                <input
                  type="text"
                  value={details.phone}
                  onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Address
                </span>
                <input
                  type="email"
                  value={details.email}
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Physical Address
              </span>
              <input
                type="text"
                value={details.address}
                onChange={(e) => setDetails({ ...details, address: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Phone:</span> {details.phone}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Email:</span> {details.email}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Address:</span> {details.address}
            </div>
          </div>
        )}
      </div>

      {/* --- CONTACT FORM & CUSTOM FIELDS CMS (NEW) --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[#06133D]">Contact Form & Custom Fields</h3>
              <p className="text-xs text-slate-500">
                Edit form titles, core field labels & placeholders, dropdown options, and add/remove custom fields.
              </p>
            </div>
          </div>
          {activeSection !== "form" ? (
            <button
              onClick={() => setActiveSection("form")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit Form
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.form", formConfig)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35] cursor-pointer"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "contact.form" } }).then((res) =>
                    setFormConfig(res || DEFAULT_CMS_SECTIONS["contact.form"]),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "form" ? (
          <div className="mt-6 space-y-8">
            {/* 1. Header & Badge */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                1. Form Header & Action Button
              </span>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="grid gap-1">
                  <span className="text-xs font-bold text-slate-500">Form Title</span>
                  <input
                    type="text"
                    value={formConfig.title}
                    onChange={(e) => setFormConfig({ ...formConfig, title: e.target.value })}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-bold text-slate-500">Badge Label</span>
                  <input
                    type="text"
                    value={formConfig.badge}
                    onChange={(e) => setFormConfig({ ...formConfig, badge: e.target.value })}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-bold text-slate-500">Submit Button Text</span>
                  <input
                    type="text"
                    value={formConfig.submitButtonText}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, submitButtonText: e.target.value })
                    }
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>
            </div>

            {/* 2. Core Form Fields: Labels & Placeholders */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                2. Core Field Labels & Placeholders
              </span>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    Full Name Field
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Label</span>
                      <input
                        type="text"
                        value={formConfig.nameLabel}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, nameLabel: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                      <input
                        type="text"
                        value={formConfig.namePlaceholder}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, namePlaceholder: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    Phone Number Field
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Label</span>
                      <input
                        type="text"
                        value={formConfig.phoneLabel}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, phoneLabel: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Country Code</span>
                      <input
                        type="text"
                        value={formConfig.phoneCountryCode}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, phoneCountryCode: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                      <input
                        type="text"
                        value={formConfig.phonePlaceholder}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, phonePlaceholder: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>
                </div>

                {/* Business Email */}
                <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    Email Field
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Label</span>
                      <input
                        type="text"
                        value={formConfig.emailLabel}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, emailLabel: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                      <input
                        type="text"
                        value={formConfig.emailPlaceholder}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, emailPlaceholder: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>
                </div>

                {/* Services Dropdown */}
                <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    Services Field
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Label</span>
                      <input
                        type="text"
                        value={formConfig.servicesLabel}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, servicesLabel: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                      <input
                        type="text"
                        value={formConfig.servicesPlaceholder}
                        onChange={(e) =>
                          setFormConfig({ ...formConfig, servicesPlaceholder: e.target.value })
                        }
                        className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Message / Details Textarea */}
              <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  Message / Inquiries Textarea
                </span>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="grid gap-1">
                    <span className="text-[11px] font-semibold text-slate-600">Label</span>
                    <input
                      type="text"
                      value={formConfig.messageLabel}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, messageLabel: e.target.value })
                      }
                      className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                    <input
                      type="text"
                      value={formConfig.messagePlaceholder}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, messagePlaceholder: e.target.value })
                      }
                      className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* 3. Budget Options Manager (Add, Edit, Delete) */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                    3. Budget Options ({formConfig.budgetOptions?.length || 0})
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Options visible in the Budget dropdown.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const opts = [...(formConfig.budgetOptions || []), "New Budget Range"];
                    setFormConfig({ ...formConfig, budgetOptions: opts });
                  }}
                  className="inline-flex items-center gap-1 rounded bg-[#FFF4E8] px-2.5 py-1 text-xs font-bold text-[#C96A13] hover:bg-[#FFE8D1] transition cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Budget Option
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-[11px] font-semibold text-slate-600">Budget Field Label</span>
                  <input
                    type="text"
                    value={formConfig.budgetLabel}
                    onChange={(e) => setFormConfig({ ...formConfig, budgetLabel: e.target.value })}
                    className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-[11px] font-semibold text-slate-600">
                    Budget Field Placeholder
                  </span>
                  <input
                    type="text"
                    value={formConfig.budgetPlaceholder}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, budgetPlaceholder: e.target.value })
                    }
                    className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <div className="space-y-1.5 pt-1">
                {(formConfig.budgetOptions || []).map((opt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 w-5">
                      #{i + 1}
                    </span>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const opts = [...formConfig.budgetOptions];
                        opts[i] = e.target.value;
                        setFormConfig({ ...formConfig, budgetOptions: opts });
                      }}
                      className="flex-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs outline-none focus:border-[#FC9C44]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const opts = formConfig.budgetOptions.filter((_, idx) => idx !== i);
                        setFormConfig({ ...formConfig, budgetOptions: opts });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-1 text-red-600 hover:bg-red-100 transition cursor-pointer"
                      title="Delete Option"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Timeline Options Manager (Add, Edit, Delete) */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                    4. Timeline Options ({formConfig.timelineOptions?.length || 0})
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Options visible in the Timeline dropdown.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const opts = [...(formConfig.timelineOptions || []), "New Timeline Option"];
                    setFormConfig({ ...formConfig, timelineOptions: opts });
                  }}
                  className="inline-flex items-center gap-1 rounded bg-[#FFF4E8] px-2.5 py-1 text-xs font-bold text-[#C96A13] hover:bg-[#FFE8D1] transition cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Timeline Option
                </button>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-[11px] font-semibold text-slate-600">Timeline Field Label</span>
                  <input
                    type="text"
                    value={formConfig.timelineLabel}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, timelineLabel: e.target.value })
                    }
                    className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-[11px] font-semibold text-slate-600">
                    Timeline Field Placeholder
                  </span>
                  <input
                    type="text"
                    value={formConfig.timelinePlaceholder}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, timelinePlaceholder: e.target.value })
                    }
                    className="rounded border border-slate-200 bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <div className="space-y-1.5 pt-1">
                {(formConfig.timelineOptions || []).map((opt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 w-5">
                      #{i + 1}
                    </span>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const opts = [...formConfig.timelineOptions];
                        opts[i] = e.target.value;
                        setFormConfig({ ...formConfig, timelineOptions: opts });
                      }}
                      className="flex-1 rounded border border-slate-200 bg-white px-2.5 py-1 text-xs outline-none focus:border-[#FC9C44]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const opts = formConfig.timelineOptions.filter((_, idx) => idx !== i);
                        setFormConfig({ ...formConfig, timelineOptions: opts });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-1 text-red-600 hover:bg-red-100 transition cursor-pointer"
                      title="Delete Option"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Custom Dynamic Form Fields Manager (Add, Edit, Delete) */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                    5. Custom Form Fields ({formConfig.customFields?.length || 0})
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Add custom fields to the contact form (e.g. Website URL, Company Size, Current Ad Spend).
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newField: ContactCustomField = {
                      id: `custom_${Date.now()}`,
                      label: "Company Website",
                      placeholder: "e.g. https://yourcompany.com",
                      type: "text",
                      required: false,
                      enabled: true,
                    };
                    setFormConfig({
                      ...formConfig,
                      customFields: [...(formConfig.customFields || []), newField],
                    });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> Add New Field
                </button>
              </div>

              {(!formConfig.customFields || formConfig.customFields.length === 0) && (
                <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-xs text-slate-500">
                  No custom fields added yet. Click &ldquo;+ Add New Field&rdquo; above to append custom inputs to the contact form.
                </div>
              )}

              <div className="space-y-3">
                {(formConfig.customFields || []).map((field, fIdx) => (
                  <div
                    key={field.id}
                    className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-bold text-[#06133D]">
                        <span className="font-mono text-[10px] text-slate-400">#{fIdx + 1}</span>
                        {field.label || "Untitled Field"}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = formConfig.customFields.filter((_, idx) => idx !== fIdx);
                          setFormConfig({ ...formConfig, customFields: updated });
                        }}
                        className="rounded border border-red-200 bg-red-50 p-1.5 text-red-600 hover:bg-red-100 transition cursor-pointer"
                        title="Delete Field"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-semibold text-slate-600">Field Label</span>
                        <input
                          type="text"
                          value={field.label}
                          onChange={(e) => {
                            const list = [...formConfig.customFields];
                            list[fIdx] = { ...list[fIdx], label: e.target.value };
                            setFormConfig({ ...formConfig, customFields: list });
                          }}
                          className="rounded border border-slate-200 px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>

                      <label className="grid gap-1">
                        <span className="text-[11px] font-semibold text-slate-600">Placeholder</span>
                        <input
                          type="text"
                          value={field.placeholder}
                          onChange={(e) => {
                            const list = [...formConfig.customFields];
                            list[fIdx] = { ...list[fIdx], placeholder: e.target.value };
                            setFormConfig({ ...formConfig, customFields: list });
                          }}
                          className="rounded border border-slate-200 px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>

                      <label className="grid gap-1">
                        <span className="text-[11px] font-semibold text-slate-600">Field Type</span>
                        <select
                          value={field.type}
                          onChange={(e) => {
                            const list = [...formConfig.customFields];
                            list[fIdx] = {
                              ...list[fIdx],
                              type: e.target.value as any,
                              options: e.target.value === "select" ? ["Option 1", "Option 2"] : undefined,
                            };
                            setFormConfig({ ...formConfig, customFields: list });
                          }}
                          className="rounded border border-slate-200 px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        >
                          <option value="text">Text Input</option>
                          <option value="email">Email Input</option>
                          <option value="tel">Phone / Tel</option>
                          <option value="select">Dropdown Select</option>
                          <option value="textarea">Multi-line Textarea</option>
                        </select>
                      </label>
                    </div>

                    {/* If type is select, show option manager */}
                    {field.type === "select" && (
                      <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Dropdown Options
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const list = [...formConfig.customFields];
                              const opts = [...(list[fIdx].options || []), "New Option"];
                              list[fIdx] = { ...list[fIdx], options: opts };
                              setFormConfig({ ...formConfig, customFields: list });
                            }}
                            className="text-[10px] font-bold text-[#FC9C44] hover:underline cursor-pointer"
                          >
                            + Add Option
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          {(field.options || []).map((opt, oIdx) => (
                            <div key={oIdx} className="flex items-center gap-2">
                              <input
                                type="text"
                                value={opt}
                                onChange={(e) => {
                                  const list = [...formConfig.customFields];
                                  const opts = [...(list[fIdx].options || [])];
                                  opts[oIdx] = e.target.value;
                                  list[fIdx] = { ...list[fIdx], options: opts };
                                  setFormConfig({ ...formConfig, customFields: list });
                                }}
                                className="flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const list = [...formConfig.customFields];
                                  const opts = (list[fIdx].options || []).filter(
                                    (_, idx) => idx !== oIdx,
                                  );
                                  list[fIdx] = { ...list[fIdx], options: opts };
                                  setFormConfig({ ...formConfig, customFields: list });
                                }}
                                className="text-red-500 hover:text-red-700 font-bold px-1"
                              >
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-1">
                      <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={field.required ?? false}
                          onChange={(e) => {
                            const list = [...formConfig.customFields];
                            list[fIdx] = { ...list[fIdx], required: e.target.checked };
                            setFormConfig({ ...formConfig, customFields: list });
                          }}
                          className="rounded text-[#FC9C44] focus:ring-[#FC9C44]"
                        />
                        <span>Required Field</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Success Confirmation Screen Copy */}
            <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#06133D] block">
                6. Submission Success State
              </span>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1">
                  <span className="text-xs font-bold text-slate-500">Success Headline</span>
                  <input
                    type="text"
                    value={formConfig.successTitle}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, successTitle: e.target.value })
                    }
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-bold text-slate-500">Success Message</span>
                  <textarea
                    rows={2}
                    value={formConfig.successMessage}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, successMessage: e.target.value })
                    }
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Form Title</span>
                <span className="font-bold text-[#06133D] text-xs">{formConfig.title}</span>
                <span className="inline-block ml-2 rounded bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
                  {formConfig.badge}
                </span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Budget Options</span>
                <span className="font-bold text-[#06133D] text-xs">
                  {formConfig.budgetOptions?.length || 0} configured
                </span>
                <div className="text-[10px] text-slate-500 mt-1 truncate">
                  {formConfig.budgetOptions?.join(", ")}
                </div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Timeline Options</span>
                <span className="font-bold text-[#06133D] text-xs">
                  {formConfig.timelineOptions?.length || 0} configured
                </span>
                <div className="text-[10px] text-slate-500 mt-1 truncate">
                  {formConfig.timelineOptions?.join(", ")}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-500">
                Custom Fields Active:{" "}
                <span className="font-bold text-[#06133D]">
                  {formConfig.customFields?.length || 0}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setActiveSection("form")}
                className="text-xs font-bold text-[#FC9C44] hover:underline cursor-pointer"
              >
                Configure Form & Fields &rarr;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* --- SERVICE GROUPS SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Service Dropdown Checklist</h3>
            <p className="text-xs text-slate-500">
              Manage categories and checklist of services in the contact form dropdown
            </p>
          </div>
          {activeSection !== "serviceGroups" ? (
            <button
              onClick={() => setActiveSection("serviceGroups")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.serviceGroups", serviceGroups)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35] cursor-pointer"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "contact.serviceGroups" } }).then((res) =>
                    setServiceGroups(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50 cursor-pointer"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "serviceGroups" ? (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-sm font-black text-[#06133D]">Service Group Categories</span>
              <button
                type="button"
                onClick={() => {
                  const groups = [...serviceGroups.groups];
                  groups.push({
                    title: "New Group",
                    services: [{ name: "New Service", desc: "Short desc" }],
                  });
                  setServiceGroups({ ...serviceGroups, groups });
                }}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100 cursor-pointer"
              >
                <Plus className="h-3 w-3" /> Add Category
              </button>
            </div>

            {serviceGroups.groups.map((group: any, idx: number) => (
              <div
                key={idx}
                className="rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <label className="flex-1 grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">CATEGORY TITLE</span>
                    <input
                      type="text"
                      value={group.title}
                      onChange={(e) => {
                        const groups = [...serviceGroups.groups];
                        groups[idx].title = e.target.value;
                        setServiceGroups({ ...serviceGroups, groups });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const groups = serviceGroups.groups.filter((_: any, i: number) => i !== idx);
                      setServiceGroups({ ...serviceGroups, groups });
                    }}
                    className="rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4 cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="pl-4 border-l-2 border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400">
                      SERVICES CHECKLIST ITEMS
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const groups = [...serviceGroups.groups];
                        groups[idx].services.push({
                          name: "New Service Item",
                          desc: "Description",
                        });
                        setServiceGroups({ ...serviceGroups, groups });
                      }}
                      className="text-[10px] text-[#FC9C44] font-bold hover:underline cursor-pointer"
                    >
                      + Add Service Option
                    </button>
                  </div>

                  {group.services.map((srv: any, srvIdx: number) => (
                    <div key={srvIdx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={srv.name}
                        placeholder="Service Name"
                        onChange={(e) => {
                          const groups = [...serviceGroups.groups];
                          groups[idx].services[srvIdx].name = e.target.value;
                          setServiceGroups({ ...serviceGroups, groups });
                        }}
                        className="rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1"
                      />
                      <input
                        type="text"
                        value={srv.desc}
                        placeholder="Short Description"
                        onChange={(e) => {
                          const groups = [...serviceGroups.groups];
                          groups[idx].services[srvIdx].desc = e.target.value;
                          setServiceGroups({ ...serviceGroups, groups });
                        }}
                        className="rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none flex-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const groups = [...serviceGroups.groups];
                          groups[idx].services = groups[idx].services.filter(
                            (_: any, i: number) => i !== srvIdx,
                          );
                          setServiceGroups({ ...serviceGroups, groups });
                        }}
                        className="text-red-500 hover:text-red-700 font-bold px-1 cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <span className="font-bold text-[#06133D] block">
              Services List Categories ({serviceGroups.groups.length}):
            </span>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {serviceGroups.groups.map((group: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                  <span className="font-black text-[#06133D] text-xs block">{group.title}</span>
                  <ul className="list-disc pl-5 mt-1 text-[10px] text-slate-500 space-y-0.5">
                    {group.services.map((srv: any, i: number) => (
                      <li key={i}>{srv.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath="/contact"
        pageName="Contact Page"
        onSyncAllDrafts={() => {
          if (hero) broadcastCmsDraft("contact.hero", hero);
          if (details) broadcastCmsDraft("contact.details", details);
          if (serviceGroups) broadcastCmsDraft("contact.serviceGroups", serviceGroups);
          if (formConfig) broadcastCmsDraft("contact.form", formConfig);
        }}
      />
    </div>
  );
}
export default AdminContactCMS;
