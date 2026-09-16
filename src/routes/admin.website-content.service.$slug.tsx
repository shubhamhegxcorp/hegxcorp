import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ArrowUp,
  ArrowDown,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  Eye,
  ExternalLink,
  Sparkles,
  Layers,
  HelpCircle,
  Save,
  RotateCcw,
} from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import {
  SUB_SERVICES_CATALOG,
  getSubServiceBySlug,
  getDefaultSubServiceCms,
  type SubServiceHeroSection,
  type SubServiceCapabilitiesSection,
  type SubServiceFaqSection,
  type SubServiceCapabilityItem,
  type SubServiceFaqItem,
} from "@/lib/cms-config";
import { SeoEditorCard } from "@/components/admin/SeoEditorCard";
import { CmsLivePreviewModal } from "@/components/admin/CmsLivePreviewModal";
import { broadcastCmsDraft, registerCmsSyncResponder } from "@/lib/cms-preview-bridge";

const AVAILABLE_ICONS = [
  "Code2",
  "LayoutDashboard",
  "Globe2",
  "ShoppingCart",
  "Search",
  "BarChart3",
  "Share2",
  "PenTool",
  "Palette",
  "Brush",
  "Image",
  "Layers",
  "Sparkles",
  "Gauge",
  "ShieldCheck",
  "Target",
  "Rocket",
];

export const Route = createFileRoute("/admin/website-content/service/$slug")({
  component: AdminSubServiceCMS,
});

function AdminSubServiceCMS() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const subService = getSubServiceBySlug(slug);

  const heroKey = `service.${slug}.hero`;
  const capsKey = `service.${slug}.capabilities`;
  const faqKey = `service.${slug}.faq`;
  const seoKey = `service.${slug}.seo`;

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hero, setHero] = useState<SubServiceHeroSection | null>(null);
  const [capabilities, setCapabilities] = useState<SubServiceCapabilitiesSection | null>(null);
  const [faq, setFaq] = useState<SubServiceFaqSection | null>(null);

  const [editingCapabilityIdx, setEditingCapabilityIdx] = useState<number | null>(null);
  const [editingFaqIdx, setEditingFaqIdx] = useState<number | null>(null);
  const [newHeroPill, setNewHeroPill] = useState("");
  const [newCapPill, setNewCapPill] = useState("");

  const [loading, setLoading] = useState(true);
  const [savingSection, setSavingSection] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    async function loadData() {
      try {
        const defaults = getDefaultSubServiceCms(slug);
        const [heroRes, capsRes, faqRes] = await Promise.all([
          getWebsiteSection({ data: { key: heroKey } }),
          getWebsiteSection({ data: { key: capsKey } }),
          getWebsiteSection({ data: { key: faqKey } }),
        ]);

        if (!isMounted) return;

        setHero(heroRes || defaults.hero);
        setCapabilities(capsRes || defaults.capabilities);
        setFaq(faqRes || defaults.faq);
      } catch (err) {
        console.error("Failed to load sub-service CMS data:", err);
        if (isMounted) {
          const defaults = getDefaultSubServiceCms(slug);
          setHero(defaults.hero);
          setCapabilities(defaults.capabilities);
          setFaq(defaults.faq);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    void loadData();

    return () => {
      isMounted = false;
    };
  }, [slug, heroKey, capsKey, faqKey]);

  useEffect(() => {
    return registerCmsSyncResponder(() => ({
      [heroKey]: hero,
      [capsKey]: capabilities,
      [faqKey]: faq,
    }));
  }, [heroKey, capsKey, faqKey, hero, capabilities, faq]);

  useEffect(() => {
    if (activeSection === "hero" && hero) {
      broadcastCmsDraft(heroKey, hero);
    }
  }, [hero, activeSection, heroKey]);

  useEffect(() => {
    if (activeSection === "capabilities" && capabilities) {
      broadcastCmsDraft(capsKey, capabilities);
    }
  }, [capabilities, activeSection, capsKey]);

  useEffect(() => {
    if (activeSection === "faq" && faq) {
      broadcastCmsDraft(faqKey, faq);
    }
  }, [faq, activeSection, faqKey]);

  const handleSave = async (key: string, value: unknown, sectionName: string) => {
    setSavingSection(sectionName);
    try {
      await saveWebsiteSection({ data: { key, value } });
      toast.success(`${sectionName} saved successfully to database!`);
      setActiveSection(null);
      setEditingCapabilityIdx(null);
      setEditingFaqIdx(null);
    } catch (err) {
      console.error("Save error:", err);
      toast.error(`Failed to save ${sectionName}.`);
    } finally {
      setSavingSection(null);
    }
  };

  const handleResetToDefault = (sectionType: "hero" | "capabilities" | "faq") => {
    const defaults = getDefaultSubServiceCms(slug);
    if (sectionType === "hero") setHero(defaults.hero);
    if (sectionType === "capabilities") setCapabilities(defaults.capabilities);
    if (sectionType === "faq") setFaq(defaults.faq);
    toast.info(`Reset to default content. Click "Save Changes" to commit.`);
  };

  if (!subService) {
    return (
      <div className="p-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
          <h2 className="text-lg font-bold">Sub-service Not Found</h2>
          <p className="mt-1 text-sm">
            Slug &quot;{slug}&quot; does not match any configured sub-service in the catalog.
          </p>
          <Link
            to="/admin/website-content/services"
            className="mt-4 inline-block font-semibold underline"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-sm font-semibold text-[#667085]">Loading sub-service CMS...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-10">
      {/* Top Navigation & Sub-service Quick Switcher */}
      <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-xs">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#FFF4E8] px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#C96A13]">
                {subService.category}
              </span>
              <span className="text-xs font-semibold text-[#98A2B3]">/service/{subService.slug}</span>
            </div>
            <h1 className="mt-2 text-2xl font-black text-[#06133D]">{subService.title} CMS</h1>
            <p className="mt-1 text-sm text-[#667085]">{subService.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#06133D] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#102159]"
            >
              <Eye className="h-4 w-4 text-[#FC9C44]" />
              Live Preview
            </button>
            <a
              href={subService.frontendUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-4 py-2.5 text-sm font-bold text-[#344054] shadow-xs transition hover:bg-[#F9FAFB]"
            >
              <ExternalLink className="h-4 w-4 text-[#667085]" />
              View Live Page
            </a>
          </div>
        </div>

        {/* Quick Switcher Buttons */}
        <div className="mt-6 border-t border-[#F2F4F7] pt-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#98A2B3]">
            Switch Sub-Service:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {SUB_SERVICES_CATALOG.map((item) => {
              const isSelected = item.slug === slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    void navigate({
                      to: "/admin/website-content/service/$slug",
                      params: { slug: item.slug },
                    });
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    isSelected
                      ? "bg-[#FC9C44] text-white shadow-xs"
                      : "bg-[#F2F4F7] text-[#475467] hover:bg-[#E4E7EC] hover:text-[#101828]"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEO Editor Card */}
      <SeoEditorCard
        sectionKey={seoKey}
        pageName={`${subService.title} Service`}
        canonicalUrl={`https://hegxcorp.com${subService.frontendUrl}`}
      />

      {/* Hero Section Card */}
      {hero && (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAECF0] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
                <p className="text-xs text-[#667085]">Headline, badge, intro copy, and call-to-actions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleResetToDefault("hero")}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-xs font-semibold text-[#475467] hover:bg-[#F9FAFB]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Defaults
              </button>
              <button
                type="button"
                onClick={() => void handleSave(heroKey, hero, "Hero Section")}
                disabled={savingSection === "Hero Section"}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#E88C35] disabled:opacity-60"
              >
                <Save className="h-3.5 w-3.5" />
                {savingSection === "Hero Section" ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                Badge / Tagline
              </label>
              <input
                type="text"
                value={hero.badge}
                onChange={(e) => {
                  setActiveSection("hero");
                  setHero({ ...hero, badge: e.target.value });
                }}
                className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                Main Headline
              </label>
              <input
                type="text"
                value={hero.title}
                onChange={(e) => {
                  setActiveSection("hero");
                  setHero({ ...hero, title: e.target.value });
                }}
                className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-bold text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                Description / Body Copy
              </label>
              <textarea
                rows={3}
                value={hero.description}
                onChange={(e) => {
                  setActiveSection("hero");
                  setHero({ ...hero, description: e.target.value });
                }}
                className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#101828] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/20"
              />
            </div>

            {/* Hero Pills */}
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                Feature Badges / Highlights
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {(hero.pills || []).map((pill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] bg-[#F8F9FC] px-3 py-1 text-xs font-semibold text-[#344054]"
                  >
                    {pill}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSection("hero");
                        const updated = [...(hero.pills || [])];
                        updated.splice(idx, 1);
                        setHero({ ...hero, pills: updated });
                      }}
                      className="text-[#98A2B3] hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="mt-2 flex max-w-md gap-2">
                <input
                  type="text"
                  placeholder="Add badge (e.g. 24/7 Support)"
                  value={newHeroPill}
                  onChange={(e) => setNewHeroPill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newHeroPill.trim()) {
                      e.preventDefault();
                      setActiveSection("hero");
                      setHero({ ...hero, pills: [...(hero.pills || []), newHeroPill.trim()] });
                      setNewHeroPill("");
                    }
                  }}
                  className="flex-1 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-xs text-[#101828] outline-none focus:border-[#FC9C44]"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!newHeroPill.trim()) return;
                    setActiveSection("hero");
                    setHero({ ...hero, pills: [...(hero.pills || []), newHeroPill.trim()] });
                    setNewHeroPill("");
                  }}
                  className="rounded-lg bg-[#06133D] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#102159]"
                >
                  Add
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#EAECF0] bg-[#F8F9FC] p-4">
                <div className="mb-2 text-xs font-bold text-[#06133D]">Primary Action Button</div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Button Text"
                    value={hero.primaryButtonText || ""}
                    onChange={(e) => {
                      setActiveSection("hero");
                      setHero({ ...hero, primaryButtonText: e.target.value });
                    }}
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Button URL (e.g. /contact)"
                    value={hero.primaryButtonUrl || ""}
                    onChange={(e) => {
                      setActiveSection("hero");
                      setHero({ ...hero, primaryButtonUrl: e.target.value });
                    }}
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-mono"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-[#EAECF0] bg-[#F8F9FC] p-4">
                <div className="mb-2 text-xs font-bold text-[#06133D]">Secondary Action Button</div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Button Text"
                    value={hero.secondaryButtonText || ""}
                    onChange={(e) => {
                      setActiveSection("hero");
                      setHero({ ...hero, secondaryButtonText: e.target.value });
                    }}
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Button URL (e.g. /services)"
                    value={hero.secondaryButtonUrl || ""}
                    onChange={(e) => {
                      setActiveSection("hero");
                      setHero({ ...hero, secondaryButtonUrl: e.target.value });
                    }}
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Capabilities Section Card */}
      {capabilities && (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAECF0] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#06133D]">Capabilities & Services</h3>
                <p className="text-xs text-[#667085]">
                  Detailed capability cards, tags, value hooks, and deliverables
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleResetToDefault("capabilities")}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-xs font-semibold text-[#475467] hover:bg-[#F9FAFB]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Defaults
              </button>
              <button
                type="button"
                onClick={() => void handleSave(capsKey, capabilities, "Capabilities Section")}
                disabled={savingSection === "Capabilities Section"}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#E88C35] disabled:opacity-60"
              >
                <Save className="h-3.5 w-3.5" />
                {savingSection === "Capabilities Section" ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                  Section Tagline
                </label>
                <input
                  type="text"
                  value={capabilities.tagline}
                  onChange={(e) => {
                    setActiveSection("capabilities");
                    setCapabilities({ ...capabilities, tagline: e.target.value });
                  }}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#101828] outline-none focus:border-[#FC9C44]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={capabilities.heading}
                  onChange={(e) => {
                    setActiveSection("capabilities");
                    setCapabilities({ ...capabilities, heading: e.target.value });
                  }}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-bold text-[#101828] outline-none focus:border-[#FC9C44]"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                Section Description (Optional)
              </label>
              <input
                type="text"
                value={capabilities.description || ""}
                onChange={(e) => {
                  setActiveSection("capabilities");
                  setCapabilities({ ...capabilities, description: e.target.value });
                }}
                className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
              />
            </div>

            {/* Capability Items List */}
            <div className="mt-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475467]">
                  Capability Items ({capabilities.capabilities.length})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection("capabilities");
                    const newItem: SubServiceCapabilityItem = {
                      id: `cap-${slug}-${Date.now()}`,
                      title: "New Capability",
                      tag: "Service",
                      hook: "High-impact value proposition",
                      description: "Detailed description of this capability and what clients receive.",
                      pills: ["Strategy", "Execution"],
                      iconName: "Code2",
                    };
                    const updated = [...capabilities.capabilities, newItem];
                    setCapabilities({ ...capabilities, capabilities: updated });
                    setEditingCapabilityIdx(updated.length - 1);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#06133D] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#102159]"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Capability
                </button>
              </div>

              <div className="space-y-4">
                {capabilities.capabilities.map((item, idx) => {
                  const isEditing = editingCapabilityIdx === idx;
                  return (
                    <div
                      key={item.id || idx}
                      className="rounded-xl border border-[#EAECF0] bg-[#F8F9FC] p-4 transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF4E8] text-xs font-black text-[#C96A13]">
                            {idx + 1}
                          </span>
                          <div>
                            <span className="rounded bg-white px-2 py-0.5 text-[10px] font-bold text-[#667085] border border-[#E4E7EC]">
                              {item.tag || "Capability"}
                            </span>
                            <h4 className="font-bold text-[#06133D]">{item.title}</h4>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => {
                              setActiveSection("capabilities");
                              const updated = [...capabilities.capabilities];
                              const temp = updated[idx];
                              updated[idx] = updated[idx - 1];
                              updated[idx - 1] = temp;
                              setCapabilities({ ...capabilities, capabilities: updated });
                            }}
                            className="rounded p-1.5 text-[#667085] hover:bg-white disabled:opacity-30"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === capabilities.capabilities.length - 1}
                            onClick={() => {
                              setActiveSection("capabilities");
                              const updated = [...capabilities.capabilities];
                              const temp = updated[idx];
                              updated[idx] = updated[idx + 1];
                              updated[idx + 1] = temp;
                              setCapabilities({ ...capabilities, capabilities: updated });
                            }}
                            className="rounded p-1.5 text-[#667085] hover:bg-white disabled:opacity-30"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingCapabilityIdx(isEditing ? null : idx)}
                            className={`rounded p-1.5 transition ${
                              isEditing ? "bg-[#06133D] text-white" : "text-[#667085] hover:bg-white"
                            }`}
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveSection("capabilities");
                              const updated = [...capabilities.capabilities];
                              updated.splice(idx, 1);
                              setCapabilities({ ...capabilities, capabilities: updated });
                              if (editingCapabilityIdx === idx) setEditingCapabilityIdx(null);
                            }}
                            className="rounded p-1.5 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {isEditing && (
                        <div className="mt-4 border-t border-[#EAECF0] pt-4 space-y-3">
                          <div className="grid gap-3 sm:grid-cols-3">
                            <div className="sm:col-span-2">
                              <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                                Title
                              </label>
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) => {
                                  setActiveSection("capabilities");
                                  const updated = [...capabilities.capabilities];
                                  updated[idx] = { ...updated[idx], title: e.target.value };
                                  setCapabilities({ ...capabilities, capabilities: updated });
                                }}
                                className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-bold"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                                Tag / Category
                              </label>
                              <input
                                type="text"
                                value={item.tag}
                                onChange={(e) => {
                                  setActiveSection("capabilities");
                                  const updated = [...capabilities.capabilities];
                                  updated[idx] = { ...updated[idx], tag: e.target.value };
                                  setCapabilities({ ...capabilities, capabilities: updated });
                                }}
                                className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs"
                              />
                            </div>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-3">
                            <div className="sm:col-span-2">
                              <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                                Value Hook / Summary
                              </label>
                              <input
                                type="text"
                                value={item.hook}
                                onChange={(e) => {
                                  setActiveSection("capabilities");
                                  const updated = [...capabilities.capabilities];
                                  updated[idx] = { ...updated[idx], hook: e.target.value };
                                  setCapabilities({ ...capabilities, capabilities: updated });
                                }}
                                className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                                Icon
                              </label>
                              <select
                                value={item.iconName || "Code2"}
                                onChange={(e) => {
                                  setActiveSection("capabilities");
                                  const updated = [...capabilities.capabilities];
                                  updated[idx] = { ...updated[idx], iconName: e.target.value };
                                  setCapabilities({ ...capabilities, capabilities: updated });
                                }}
                                className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-mono"
                              >
                                {AVAILABLE_ICONS.map((icon) => (
                                  <option key={icon} value={icon}>
                                    {icon}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                              Description
                            </label>
                            <textarea
                              rows={2}
                              value={item.description}
                              onChange={(e) => {
                                setActiveSection("capabilities");
                                const updated = [...capabilities.capabilities];
                                updated[idx] = { ...updated[idx], description: e.target.value };
                                setCapabilities({ ...capabilities, capabilities: updated });
                              }}
                              className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs"
                            />
                          </div>

                          {/* Capability Pills */}
                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                              Deliverable Pills
                            </label>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {(item.pills || []).map((pill, pillIdx) => (
                                <span
                                  key={pillIdx}
                                  className="inline-flex items-center gap-1 rounded bg-white px-2 py-0.5 text-[11px] font-medium border border-[#D0D5DD]"
                                >
                                  {pill}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setActiveSection("capabilities");
                                      const updatedPills = [...(item.pills || [])];
                                      updatedPills.splice(pillIdx, 1);
                                      const updated = [...capabilities.capabilities];
                                      updated[idx] = { ...updated[idx], pills: updatedPills };
                                      setCapabilities({ ...capabilities, capabilities: updated });
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X className="h-2.5 w-2.5" />
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="mt-1.5 flex max-w-sm gap-2">
                              <input
                                type="text"
                                placeholder="Add pill (e.g. Audit)"
                                value={newCapPill}
                                onChange={(e) => setNewCapPill(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" && newCapPill.trim()) {
                                    e.preventDefault();
                                    setActiveSection("capabilities");
                                    const updatedPills = [...(item.pills || []), newCapPill.trim()];
                                    const updated = [...capabilities.capabilities];
                                    updated[idx] = { ...updated[idx], pills: updatedPills };
                                    setCapabilities({ ...capabilities, capabilities: updated });
                                    setNewCapPill("");
                                  }
                                }}
                                className="flex-1 rounded border border-[#D0D5DD] bg-white px-2.5 py-1 text-xs outline-none"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (!newCapPill.trim()) return;
                                  setActiveSection("capabilities");
                                  const updatedPills = [...(item.pills || []), newCapPill.trim()];
                                  const updated = [...capabilities.capabilities];
                                  updated[idx] = { ...updated[idx], pills: updatedPills };
                                  setCapabilities({ ...capabilities, capabilities: updated });
                                  setNewCapPill("");
                                }}
                                className="rounded bg-[#06133D] px-2.5 py-1 text-xs font-bold text-white hover:bg-[#102159]"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section Card */}
      {faq && (
        <div className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAECF0] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#FC9C44]">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#06133D]">Frequently Asked Questions</h3>
                <p className="text-xs text-[#667085]">
                  Questions and comprehensive answers specific to this service
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleResetToDefault("faq")}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-xs font-semibold text-[#475467] hover:bg-[#F9FAFB]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Defaults
              </button>
              <button
                type="button"
                onClick={() => void handleSave(faqKey, faq, "FAQ Section")}
                disabled={savingSection === "FAQ Section"}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-[#E88C35] disabled:opacity-60"
              >
                <Save className="h-3.5 w-3.5" />
                {savingSection === "FAQ Section" ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                  Section Tagline
                </label>
                <input
                  type="text"
                  value={faq.tagline}
                  onChange={(e) => {
                    setActiveSection("faq");
                    setFaq({ ...faq, tagline: e.target.value });
                  }}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#101828] outline-none focus:border-[#FC9C44]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#475467]">
                  Section Heading
                </label>
                <input
                  type="text"
                  value={faq.heading}
                  onChange={(e) => {
                    setActiveSection("faq");
                    setFaq({ ...faq, heading: e.target.value });
                  }}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-bold text-[#101828] outline-none focus:border-[#FC9C44]"
                />
              </div>
            </div>

            {/* FAQ Items List */}
            <div className="mt-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475467]">
                  FAQ Items ({faq.faqs.length})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSection("faq");
                    const newItem: SubServiceFaqItem = {
                      id: `faq-${slug}-${Date.now()}`,
                      title: "New Question?",
                      answer: "Detailed answer explaining the process or delivery timeline.",
                    };
                    const updated = [...faq.faqs, newItem];
                    setFaq({ ...faq, faqs: updated });
                    setEditingFaqIdx(updated.length - 1);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#06133D] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#102159]"
                >
                  <Plus className="h-3.5 w-3.5" /> Add FAQ
                </button>
              </div>

              <div className="space-y-4">
                {faq.faqs.map((item, idx) => {
                  const isEditing = editingFaqIdx === idx;
                  return (
                    <div
                      key={item.id || idx}
                      className="rounded-xl border border-[#EAECF0] bg-[#F8F9FC] p-4 transition"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFF4E8] text-xs font-black text-[#C96A13]">
                            Q{idx + 1}
                          </span>
                          <h4 className="font-bold text-[#06133D]">{item.title}</h4>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => {
                              setActiveSection("faq");
                              const updated = [...faq.faqs];
                              const temp = updated[idx];
                              updated[idx] = updated[idx - 1];
                              updated[idx - 1] = temp;
                              setFaq({ ...faq, faqs: updated });
                            }}
                            className="rounded p-1.5 text-[#667085] hover:bg-white disabled:opacity-30"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === faq.faqs.length - 1}
                            onClick={() => {
                              setActiveSection("faq");
                              const updated = [...faq.faqs];
                              const temp = updated[idx];
                              updated[idx] = updated[idx + 1];
                              updated[idx + 1] = temp;
                              setFaq({ ...faq, faqs: updated });
                            }}
                            className="rounded p-1.5 text-[#667085] hover:bg-white disabled:opacity-30"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingFaqIdx(isEditing ? null : idx)}
                            className={`rounded p-1.5 transition ${
                              isEditing ? "bg-[#06133D] text-white" : "text-[#667085] hover:bg-white"
                            }`}
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveSection("faq");
                              const updated = [...faq.faqs];
                              updated.splice(idx, 1);
                              setFaq({ ...faq, faqs: updated });
                              if (editingFaqIdx === idx) setEditingFaqIdx(null);
                            }}
                            className="rounded p-1.5 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {isEditing && (
                        <div className="mt-4 border-t border-[#EAECF0] pt-4 space-y-3">
                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                              Question Title
                            </label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => {
                                setActiveSection("faq");
                                const updated = [...faq.faqs];
                                updated[idx] = { ...updated[idx], title: e.target.value };
                                setFaq({ ...faq, faqs: updated });
                              }}
                              className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs font-bold"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-[11px] font-bold text-[#475467]">
                              Answer
                            </label>
                            <textarea
                              rows={3}
                              value={item.answer}
                              onChange={(e) => {
                                setActiveSection("faq");
                                const updated = [...faq.faqs];
                                updated[idx] = { ...updated[idx], answer: e.target.value };
                                setFaq({ ...faq, faqs: updated });
                              }}
                              className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-xs"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath={subService.frontendUrl}
        pageName={subService.title}
      />
    </div>
  );
}
