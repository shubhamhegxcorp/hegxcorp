import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X, Eye } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";
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
  "Megaphone",
  "ShieldCheck",
  "Layers",
  "Sparkles",
  "Cpu",
  "Wrench",
  "Smartphone",
  "Gauge",
];

export const Route = createFileRoute("/admin/website-content/services")({
  component: AdminServicesCMS,
});

function AdminServicesCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [directory, setDirectory] = useState<any>(null);
  const [benefits, setBenefits] = useState<any>(null);
  const [process, setProcess] = useState<any>(null);
  const [activeDirectoryCategoryIdx, setActiveDirectoryCategoryIdx] = useState(0);

  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, directoryData, benefitsData, processData] = await Promise.all([
          getWebsiteSection({ data: { key: "services.hero" } }),
          getWebsiteSection({ data: { key: "services.directory" } }),
          getWebsiteSection({ data: { key: "services.benefits" } }),
          getWebsiteSection({ data: { key: "services.process" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["services.hero"]);
        setDirectory(directoryData || DEFAULT_CMS_SECTIONS["services.directory"]);
        setBenefits(benefitsData || DEFAULT_CMS_SECTIONS["services.benefits"]);
        setProcess(processData || DEFAULT_CMS_SECTIONS["services.process"]);
      } catch (err) {
        console.error("Failed to load services CMS data:", err);
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
      "services.hero": hero,
      "services.directory": directory,
      "services.benefits": benefits,
      "services.process": process,
    }));
    return unregister;
  }, [hero, directory, benefits, process]);

  // Real-time broadcast on active section edits
  useEffect(() => {
    if (activeSection === "hero" && hero) broadcastCmsDraft("services.hero", hero);
  }, [hero, activeSection]);
  useEffect(() => {
    if (activeSection === "directory" && directory)
      broadcastCmsDraft("services.directory", directory);
  }, [directory, activeSection]);
  useEffect(() => {
    if (activeSection === "benefits" && benefits) broadcastCmsDraft("services.benefits", benefits);
  }, [benefits, activeSection]);
  useEffect(() => {
    if (activeSection === "process" && process) broadcastCmsDraft("services.process", process);
  }, [process, activeSection]);

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
          <h2 className="text-xl font-black text-[#06133D]">Services Page Content</h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage and edit all frontend Services page sections.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0A1D54] transition shrink-0"
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
        sectionKey="services.seo"
        pageName="Services Page"
        canonicalUrl="https://hegxcorp.com/services"
      />

      {/* --- HERO SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
            <p className="text-xs text-slate-500">Intro headline and sub-text</p>
          </div>
          {activeSection !== "hero" ? (
            <button
              onClick={() => setActiveSection("hero")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("services.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "services.hero" } }).then((res) => setHero(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
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

      {/* --- SERVICE DIRECTORY SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Service Directory</h3>
            <p className="text-xs text-slate-500">
              Interactive categories, services list, descriptions and links
            </p>
          </div>
          {activeSection !== "directory" ? (
            <button
              onClick={() => setActiveSection("directory")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("services.directory", directory)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "services.directory" } }).then((res) =>
                    setDirectory(res || DEFAULT_CMS_SECTIONS["services.directory"]),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "directory" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Section Tagline
                </span>
                <input
                  type="text"
                  value={directory?.tagline || ""}
                  onChange={(e) => setDirectory({ ...directory, tagline: e.target.value })}
                  placeholder="Service Directory"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Headline Title
                </span>
                <input
                  type="text"
                  value={directory?.heading || ""}
                  onChange={(e) => setDirectory({ ...directory, heading: e.target.value })}
                  placeholder="Choose the right digital solution for your next stage."
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Categories and Services Manager */}
            <div className="border-t border-slate-100 pt-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-black text-[#06133D]">
                  Directory Categories & Services
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newId = `cat-${Date.now()}`;
                    const newCat = {
                      id: newId,
                      label: "New Category",
                      iconName: "Layers",
                      services: [],
                    };
                    const cats = [...(directory?.categories || []), newCat];
                    setDirectory({ ...directory, categories: cats });
                    setActiveDirectoryCategoryIdx(cats.length - 1);
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Category
                </button>
              </div>

              {/* Category Tab Buttons */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                {(directory?.categories || []).map((cat: any, cIdx: number) => {
                  const isTabActive = cIdx === activeDirectoryCategoryIdx;
                  return (
                    <button
                      key={cat.id || cIdx}
                      type="button"
                      onClick={() => setActiveDirectoryCategoryIdx(cIdx)}
                      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-bold transition ${
                        isTabActive
                          ? "bg-[#06133D] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      <span>{cat.label || `Category ${cIdx + 1}`}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                          isTabActive ? "bg-[#FC9C44] text-[#06133D]" : "bg-white text-slate-500"
                        }`}
                      >
                        {cat.services?.length || 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Category Details */}
              {directory?.categories && directory.categories[activeDirectoryCategoryIdx] && (
                <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/40 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
                    <div className="grid flex-1 gap-3 sm:grid-cols-2">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Category Name
                        </span>
                        <input
                          type="text"
                          value={directory.categories[activeDirectoryCategoryIdx].label}
                          onChange={(e) => {
                            const cats = [...directory.categories];
                            cats[activeDirectoryCategoryIdx].label = e.target.value;
                            setDirectory({ ...directory, categories: cats });
                          }}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#06133D] outline-none focus:border-[#FC9C44]"
                        />
                      </label>

                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Category Icon
                        </span>
                        <select
                          value={
                            directory.categories[activeDirectoryCategoryIdx].iconName || "Code2"
                          }
                          onChange={(e) => {
                            const cats = [...directory.categories];
                            cats[activeDirectoryCategoryIdx].iconName = e.target.value;
                            setDirectory({ ...directory, categories: cats });
                          }}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-[#06133D] outline-none focus:border-[#FC9C44]"
                        >
                          {AVAILABLE_ICONS.map((icon) => (
                            <option key={icon} value={icon}>
                              {icon}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    {directory.categories.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (
                            confirm(
                              `Delete category "${directory.categories[activeDirectoryCategoryIdx].label}" and all its services?`,
                            )
                          ) {
                            const cats = directory.categories.filter(
                              (_: any, i: number) => i !== activeDirectoryCategoryIdx,
                            );
                            setDirectory({ ...directory, categories: cats });
                            setActiveDirectoryCategoryIdx(
                              Math.max(0, activeDirectoryCategoryIdx - 1),
                            );
                          }
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-bold text-red-600 transition hover:bg-red-100 self-end"
                      >
                        <Trash2 className="h-3 w-3" /> Delete Category
                      </button>
                    )}
                  </div>

                  {/* Service Items for this Category */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Services in {directory.categories[activeDirectoryCategoryIdx].label} (
                        {directory.categories[activeDirectoryCategoryIdx].services?.length || 0})
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const cats = [...directory.categories];
                          const services = cats[activeDirectoryCategoryIdx].services || [];
                          const nextNum = String(services.length + 1).padStart(2, "0");
                          const newService = {
                            id: `s-${Date.now()}`,
                            number: nextNum,
                            iconName: "Palette",
                            title: "New Service",
                            text: "Description explaining how this service helps clients scale their business.",
                            href: "/services",
                          };
                          cats[activeDirectoryCategoryIdx].services = [...services, newService];
                          setDirectory({ ...directory, categories: cats });
                        }}
                        className="inline-flex items-center gap-1 rounded-lg bg-[#FC9C44]/10 px-2.5 py-1 text-xs font-bold text-[#C96A13] transition hover:bg-[#FC9C44]/20"
                      >
                        <Plus className="h-3 w-3" /> Add Service
                      </button>
                    </div>

                    {(!directory.categories[activeDirectoryCategoryIdx].services ||
                      directory.categories[activeDirectoryCategoryIdx].services.length === 0) && (
                      <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-xs font-semibold text-slate-400">
                        No services in this category yet. Click "+ Add Service" above to create one.
                      </div>
                    )}

                    {(directory.categories[activeDirectoryCategoryIdx].services || []).map(
                      (svc: any, sIdx: number) => (
                        <div
                          key={svc.id || sIdx}
                          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3"
                        >
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                            <div className="flex items-center gap-2">
                              <span className="rounded bg-[#FFF0DC] px-2 py-0.5 font-mono text-xs font-black text-[#FC9C44]">
                                #{svc.number || String(sIdx + 1).padStart(2, "0")}
                              </span>
                              <span className="text-xs font-black text-[#06133D]">
                                {svc.title || "Untitled Service"}
                              </span>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                disabled={sIdx === 0}
                                onClick={() => {
                                  const cats = [...directory.categories];
                                  const list = [...cats[activeDirectoryCategoryIdx].services];
                                  const temp = list[sIdx - 1];
                                  list[sIdx - 1] = list[sIdx];
                                  list[sIdx] = temp;
                                  cats[activeDirectoryCategoryIdx].services = list;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30"
                              >
                                <ArrowUp className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                disabled={
                                  sIdx ===
                                  directory.categories[activeDirectoryCategoryIdx].services.length -
                                    1
                                }
                                onClick={() => {
                                  const cats = [...directory.categories];
                                  const list = [...cats[activeDirectoryCategoryIdx].services];
                                  const temp = list[sIdx + 1];
                                  list[sIdx + 1] = list[sIdx];
                                  list[sIdx] = temp;
                                  cats[activeDirectoryCategoryIdx].services = list;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-30"
                              >
                                <ArrowDown className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services = cats[
                                    activeDirectoryCategoryIdx
                                  ].services.filter((_: any, i: number) => i !== sIdx);
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded p-1 text-red-500 hover:bg-red-50 hover:text-red-700"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-4">
                            <label className="grid gap-1">
                              <span className="text-[10px] font-bold text-slate-400">NUMBER</span>
                              <input
                                type="text"
                                value={svc.number || ""}
                                onChange={(e) => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services[sIdx].number =
                                    e.target.value;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded border border-slate-200 px-2.5 py-1 text-xs outline-none focus:border-[#FC9C44]"
                              />
                            </label>

                            <label className="sm:col-span-2 grid gap-1">
                              <span className="text-[10px] font-bold text-slate-400">
                                SERVICE TITLE
                              </span>
                              <input
                                type="text"
                                value={svc.title || ""}
                                onChange={(e) => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services[sIdx].title =
                                    e.target.value;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded border border-slate-200 px-2.5 py-1 text-xs font-bold text-[#06133D] outline-none focus:border-[#FC9C44]"
                              />
                            </label>

                            <label className="grid gap-1">
                              <span className="text-[10px] font-bold text-slate-400">ICON</span>
                              <select
                                value={svc.iconName || "Palette"}
                                onChange={(e) => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services[sIdx].iconName =
                                    e.target.value;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                              >
                                {AVAILABLE_ICONS.map((icon) => (
                                  <option key={icon} value={icon}>
                                    {icon}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-3">
                            <label className="sm:col-span-2 grid gap-1">
                              <span className="text-[10px] font-bold text-slate-400">
                                DESCRIPTION
                              </span>
                              <textarea
                                rows={2}
                                value={svc.text || ""}
                                onChange={(e) => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services[sIdx].text =
                                    e.target.value;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                className="rounded border border-slate-200 px-2.5 py-1 text-xs outline-none focus:border-[#FC9C44]"
                              />
                            </label>

                            <label className="grid gap-1">
                              <span className="text-[10px] font-bold text-slate-400">LINK URL</span>
                              <input
                                type="text"
                                value={svc.href || ""}
                                onChange={(e) => {
                                  const cats = [...directory.categories];
                                  cats[activeDirectoryCategoryIdx].services[sIdx].href =
                                    e.target.value;
                                  setDirectory({ ...directory, categories: cats });
                                }}
                                placeholder="/service/ui-ux-design"
                                className="rounded border border-slate-200 px-2.5 py-1 text-xs outline-none focus:border-[#FC9C44]"
                              />
                            </label>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4 text-sm">
            <div className="grid gap-2 sm:grid-cols-2">
              <div>
                <span className="font-bold text-[#06133D]">Tagline:</span>{" "}
                <span className="text-slate-600">{directory?.tagline}</span>
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Headline:</span>{" "}
                <span className="text-slate-600">{directory?.heading}</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Categories & Services ({directory?.categories?.length || 0} categories)
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {directory?.categories?.map((cat: any) => (
                  <div
                    key={cat.id}
                    className="rounded-lg border border-slate-100 bg-slate-50/50 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#06133D] text-xs">{cat.label}</span>
                      <span className="rounded-full bg-[#FFF0DC] px-2 py-0.5 text-[10px] font-bold text-[#FC9C44]">
                        {cat.services?.length || 0} services
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {cat.services?.map((svc: any) => (
                        <li
                          key={svc.id || svc.title}
                          className="text-xs text-slate-500 truncate flex items-center gap-1.5"
                        >
                          <span className="font-mono text-[10px] font-bold text-slate-400">
                            {svc.number}
                          </span>
                          <span className="truncate">{svc.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- BENEFITS SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Benefits Section</h3>
            <p className="text-xs text-slate-500">Bullet points of benefits on the services page</p>
          </div>
          {activeSection !== "benefits" ? (
            <button
              onClick={() => setActiveSection("benefits")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("services.benefits", benefits)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "services.benefits" } }).then((res) =>
                    setBenefits(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "benefits" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={benefits.tagline}
                  onChange={(e) => setBenefits({ ...benefits, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading Title
                </span>
                <input
                  type="text"
                  value={benefits.title}
                  onChange={(e) => setBenefits({ ...benefits, title: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Description
              </span>
              <textarea
                rows={2}
                value={benefits.description}
                onChange={(e) => setBenefits({ ...benefits, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="space-y-3 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Benefits Bullet Points</span>
                <button
                  type="button"
                  onClick={() => {
                    const list = [...benefits.benefits];
                    list.push("New Benefit Point");
                    setBenefits({ ...benefits, benefits: list });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Point
                </button>
              </div>

              {benefits.benefits.map((point: string, idx: number) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={point}
                    onChange={(e) => {
                      const list = [...benefits.benefits];
                      list[idx] = e.target.value;
                      setBenefits({ ...benefits, benefits: list });
                    }}
                    className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const list = benefits.benefits.filter((_: any, i: number) => i !== idx);
                      setBenefits({ ...benefits, benefits: list });
                    }}
                    className="rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span> {benefits.tagline} ·{" "}
              {benefits.title}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-1">Benefits List:</span>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                {benefits.benefits.map((pt: string, i: number) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* --- PROCESS SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Process Steps</h3>
            <p className="text-xs text-slate-500">Methodology / timeline phases of delivery</p>
          </div>
          {activeSection !== "process" ? (
            <button
              onClick={() => setActiveSection("process")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("services.process", process)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "services.process" } }).then((res) =>
                    setProcess(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "process" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={process.tagline}
                  onChange={(e) => setProcess({ ...process, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading Title
                </span>
                <input
                  type="text"
                  value={process.title}
                  onChange={(e) => setProcess({ ...process, title: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Process Steps</span>
                <button
                  type="button"
                  onClick={() => {
                    const steps = [...process.steps];
                    steps.push({ title: "New Step", points: ["First detail point"] });
                    setProcess({ ...process, steps });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Step
                </button>
              </div>

              {process.steps.map((step: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <label className="flex-1 grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        STEP {idx + 1} TITLE
                      </span>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const steps = [...process.steps];
                          steps[idx].title = e.target.value;
                          setProcess({ ...process, steps });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const steps = process.steps.filter((_: any, i: number) => i !== idx);
                        setProcess({ ...process, steps });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="pl-4 border-l-2 border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400">DETAILS POINTS</span>
                      <button
                        type="button"
                        onClick={() => {
                          const steps = [...process.steps];
                          steps[idx].points.push("New Detail");
                          setProcess({ ...process, steps });
                        }}
                        className="text-[10px] text-[#FC9C44] font-bold hover:underline"
                      >
                        + Add Detail
                      </button>
                    </div>

                    {step.points.map((pt: string, ptIdx: number) => (
                      <div key={ptIdx} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={pt}
                          onChange={(e) => {
                            const steps = [...process.steps];
                            steps[idx].points[ptIdx] = e.target.value;
                            setProcess({ ...process, steps });
                          }}
                          className="flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const steps = [...process.steps];
                            steps[idx].points = steps[idx].points.filter(
                              (_: any, i: number) => i !== ptIdx,
                            );
                            setProcess({ ...process, steps });
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span> {process.tagline} ·{" "}
              {process.title}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                Process Steps ({process.steps.length}):
              </span>
              <div className="space-y-3">
                {process.steps.map((step: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                    <span className="font-black text-[#06133D] text-xs block">
                      Step {idx + 1}: {step.title}
                    </span>
                    <ul className="list-disc pl-5 mt-1 text-[11px] text-slate-500 space-y-0.5">
                      {step.points.map((pt: string, i: number) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath="/services"
        pageName="Services Page"
        onSyncAllDrafts={() => {
          if (hero) broadcastCmsDraft("services.hero", hero);
          if (benefits) broadcastCmsDraft("services.benefits", benefits);
          if (process) broadcastCmsDraft("services.process", process);
        }}
      />
    </div>
  );
}
