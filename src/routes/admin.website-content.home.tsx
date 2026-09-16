import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X, Eye } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";
import { SeoEditorCard } from "@/components/admin/SeoEditorCard";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { CaseStudyFileManager } from "@/components/admin/CaseStudyFileManager";
import { CmsLivePreviewModal } from "@/components/admin/CmsLivePreviewModal";
import { broadcastCmsDraft, registerCmsSyncResponder } from "@/lib/cms-preview-bridge";

export const Route = createFileRoute("/admin/website-content/home")({
  component: AdminHomeCMS,
});

function AdminHomeCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // --- States for each section ---
  const [hero, setHero] = useState<any>(null);
  const [metrics, setMetrics] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
  const [featuredWork, setFeaturedWork] = useState<any>(null);
  const [features, setFeatures] = useState<any>(null);
  const [process, setProcess] = useState<any>(null);
  const [testimonials, setTestimonials] = useState<any>(null);
  const [blogPreview, setBlogPreview] = useState<any>(null);
  const [faq, setFaq] = useState<any>(null);
  const [cta, setCta] = useState<any>(null);
  const [footer, setFooter] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Load all sections on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [
          heroData,
          metricsData,
          servicesData,
          featuredWorkData,
          featuresData,
          processData,
          testimonialsData,
          blogPreviewData,
          faqData,
          ctaData,
          footerData,
        ] = await Promise.all([
          getWebsiteSection({ data: { key: "home.hero" } }),
          getWebsiteSection({ data: { key: "home.metrics" } }),
          getWebsiteSection({ data: { key: "home.services" } }),
          getWebsiteSection({ data: { key: "home.featuredWork" } }),
          getWebsiteSection({ data: { key: "home.features" } }),
          getWebsiteSection({ data: { key: "home.process" } }),
          getWebsiteSection({ data: { key: "home.testimonials" } }),
          getWebsiteSection({ data: { key: "home.blogPreview" } }),
          getWebsiteSection({ data: { key: "home.faq" } }),
          getWebsiteSection({ data: { key: "home.cta" } }),
          getWebsiteSection({ data: { key: "home.footer" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["home.hero"]);
        setMetrics(metricsData || DEFAULT_CMS_SECTIONS["home.metrics"]);
        setServices(servicesData || DEFAULT_CMS_SECTIONS["home.services"]);
        setFeaturedWork(featuredWorkData || DEFAULT_CMS_SECTIONS["home.featuredWork"]);
        setFeatures(featuresData || DEFAULT_CMS_SECTIONS["home.features"]);
        setProcess(processData || DEFAULT_CMS_SECTIONS["home.process"]);
        setTestimonials(testimonialsData || DEFAULT_CMS_SECTIONS["home.testimonials"]);
        setBlogPreview(blogPreviewData || DEFAULT_CMS_SECTIONS["home.blogPreview"]);
        setFaq(faqData || DEFAULT_CMS_SECTIONS["home.faq"]);
        setCta(ctaData || DEFAULT_CMS_SECTIONS["home.cta"]);
        setFooter(footerData || DEFAULT_CMS_SECTIONS["home.footer"]);
      } catch (err) {
        console.error("Failed to load CMS data:", err);
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
      "home.hero": hero,
      "home.metrics": metrics,
      "home.services": services,
      "home.featuredWork": featuredWork,
      "home.features": features,
      "home.process": process,
      "home.testimonials": testimonials,
      "home.blogPreview": blogPreview,
      "home.faq": faq,
      "home.cta": cta,
      "home.footer": footer,
    }));
    return unregister;
  }, [
    hero,
    metrics,
    services,
    featuredWork,
    features,
    process,
    testimonials,
    blogPreview,
    faq,
    cta,
    footer,
  ]);

  // Real-time broadcast on active section edits
  useEffect(() => {
    if (activeSection === "hero" && hero) broadcastCmsDraft("home.hero", hero);
  }, [hero, activeSection]);
  useEffect(() => {
    if (activeSection === "metrics" && metrics) broadcastCmsDraft("home.metrics", metrics);
  }, [metrics, activeSection]);
  useEffect(() => {
    if (activeSection === "services" && services) broadcastCmsDraft("home.services", services);
  }, [services, activeSection]);
  useEffect(() => {
    if (activeSection === "featuredWork" && featuredWork)
      broadcastCmsDraft("home.featuredWork", featuredWork);
  }, [featuredWork, activeSection]);
  useEffect(() => {
    if (activeSection === "features" && features) broadcastCmsDraft("home.features", features);
  }, [features, activeSection]);
  useEffect(() => {
    if (activeSection === "process" && process) broadcastCmsDraft("home.process", process);
  }, [process, activeSection]);
  useEffect(() => {
    if (activeSection === "testimonials" && testimonials)
      broadcastCmsDraft("home.testimonials", testimonials);
  }, [testimonials, activeSection]);
  useEffect(() => {
    if (activeSection === "blogPreview" && blogPreview)
      broadcastCmsDraft("home.blogPreview", blogPreview);
  }, [blogPreview, activeSection]);
  useEffect(() => {
    if (activeSection === "faq" && faq) broadcastCmsDraft("home.faq", faq);
  }, [faq, activeSection]);
  useEffect(() => {
    if (activeSection === "cta" && cta) broadcastCmsDraft("home.cta", cta);
  }, [cta, activeSection]);
  useEffect(() => {
    if (activeSection === "footer" && footer) broadcastCmsDraft("home.footer", footer);
  }, [footer, activeSection]);

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
          <h2 className="text-xl font-black text-[#06133D]">Homepage Content</h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage and edit all frontend homepage sections. Your changes take effect immediately on
            the live website.
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
        sectionKey="home.seo"
        pageName="Home Page"
        canonicalUrl="https://hegxcorp.com"
      />

      {/* --- HERO SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
            <p className="text-xs text-slate-500">First section at the top of the homepage</p>
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
                onClick={() => void handleSave("home.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  // Reload original data
                  getWebsiteSection({ data: { key: "home.hero" } }).then((res) => setHero(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "hero" ? (
          <div className="mt-6 space-y-6">
            {/* Left Column Controls */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#06133D]">
                Left Side — Headline &amp; Call-to-Actions
              </h4>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Category Badge
                  </span>
                  <input
                    type="text"
                    value={hero.badge || ""}
                    onChange={(e) => setHero({ ...hero, badge: e.target.value })}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Headline
                  </span>
                  <input
                    type="text"
                    value={hero.title || ""}
                    onChange={(e) => setHero({ ...hero, title: e.target.value })}
                    placeholder="e.g. Generate More [highlight]Leads, Sales[/highlight] & Revenue"
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                  <span className="text-[11px] text-slate-400">
                    Tip: Wrap words in{" "}
                    <code className="bg-slate-100 px-1 py-0.5 rounded text-[#FC9C44] font-mono">
                      [highlight]words[/highlight]
                    </code>{" "}
                    to add the orange underline.
                  </span>
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Description / Subheadline
                </span>
                <textarea
                  rows={3}
                  value={hero.description || ""}
                  onChange={(e) => setHero({ ...hero, description: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-4">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Primary Button Label
                  </span>
                  <input
                    type="text"
                    value={hero.buttonText || ""}
                    onChange={(e) => setHero({ ...hero, buttonText: e.target.value })}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Primary Button URL
                  </span>
                  <input
                    type="text"
                    value={hero.buttonUrl || ""}
                    onChange={(e) => setHero({ ...hero, buttonUrl: e.target.value })}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Secondary Button Label
                  </span>
                  <input
                    type="text"
                    value={hero.secondaryButtonText || ""}
                    onChange={(e) => setHero({ ...hero, secondaryButtonText: e.target.value })}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Secondary Button URL
                  </span>
                  <input
                    type="text"
                    value={hero.secondaryButtonUrl || ""}
                    onChange={(e) => setHero({ ...hero, secondaryButtonUrl: e.target.value })}
                    className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Trust Line (Under Buttons)
                </span>
                <input
                  type="text"
                  value={hero.trustText || ""}
                  onChange={(e) => setHero({ ...hero, trustText: e.target.value })}
                  placeholder="Trusted by enterprise companies across India, USA, UK & UAE"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Right Column Controls (Interactive Dashboard) */}
            <div className="rounded-lg border border-[#EAECF0] bg-slate-50 p-5 space-y-4">
              <div className="border-b border-[#EAECF0] pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#06133D]">
                  Right Side — Interactive Growth Engine Dashboard
                </h4>
                <p className="text-[11px] text-slate-500">
                  Configure the live browser mockup, 4 metric cards, and bottom chart
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Dashboard Title</span>
                  <input
                    type="text"
                    value={hero.dashboardTitle || ""}
                    onChange={(e) => setHero({ ...hero, dashboardTitle: e.target.value })}
                    placeholder="Hegxcorp Growth Engine"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Subtitle</span>
                  <input
                    type="text"
                    value={hero.dashboardSubtitle || ""}
                    onChange={(e) => setHero({ ...hero, dashboardSubtitle: e.target.value })}
                    placeholder="Real-time Client Portfolio Metrics"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Status Badge</span>
                  <input
                    type="text"
                    value={hero.dashboardBadge || ""}
                    onChange={(e) => setHero({ ...hero, dashboardBadge: e.target.value })}
                    placeholder="System Active"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold text-slate-500">Browser Address Bar URL</span>
                <input
                  type="text"
                  value={hero.dashboardUrl || ""}
                  onChange={(e) => setHero({ ...hero, dashboardUrl: e.target.value })}
                  placeholder="hegxcorp.com/growth-analytics"
                  className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>

              {/* 4 Metrics in Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Dashboard Metric Cards (4 Cards)
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    hero.dashboardMetrics || [
                      {
                        label: "Organic Traffic Growth",
                        value: 310,
                        prefix: "+",
                        suffix: "%",
                        decimals: 0,
                      },
                      {
                        label: "Qualified Leads",
                        value: 184,
                        prefix: "+",
                        suffix: "%",
                        decimals: 0,
                      },
                      { label: "ROAS Achieved", value: 4.8, prefix: "", suffix: "x", decimals: 1 },
                      {
                        label: "Client Satisfaction",
                        value: 98,
                        prefix: "+",
                        suffix: "%",
                        decimals: 0,
                      },
                    ]
                  ).map((dm: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-[#EAECF0] bg-white p-3 space-y-2"
                    >
                      <div className="text-[11px] font-bold text-slate-400">
                        Card #{idx + 1}: {dm.label}
                      </div>
                      <label className="grid gap-1">
                        <span className="text-[10px] font-bold text-slate-500">Metric Label</span>
                        <input
                          type="text"
                          value={dm.label || ""}
                          onChange={(e) => {
                            const updated = [
                              ...(hero.dashboardMetrics || [
                                {
                                  label: "Organic Traffic Growth",
                                  value: 310,
                                  prefix: "+",
                                  suffix: "%",
                                  decimals: 0,
                                },
                                {
                                  label: "Qualified Leads",
                                  value: 184,
                                  prefix: "+",
                                  suffix: "%",
                                  decimals: 0,
                                },
                                {
                                  label: "ROAS Achieved",
                                  value: 4.8,
                                  prefix: "",
                                  suffix: "x",
                                  decimals: 1,
                                },
                                {
                                  label: "Client Satisfaction",
                                  value: 98,
                                  prefix: "+",
                                  suffix: "%",
                                  decimals: 0,
                                },
                              ]),
                            ];
                            updated[idx] = { ...updated[idx], label: e.target.value };
                            setHero({ ...hero, dashboardMetrics: updated });
                          }}
                          className="rounded border border-[#D0D5DD] px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        <label className="grid gap-1">
                          <span className="text-[10px] font-bold text-slate-500">Prefix</span>
                          <input
                            type="text"
                            value={dm.prefix || ""}
                            onChange={(e) => {
                              const updated = [
                                ...(hero.dashboardMetrics || [
                                  {
                                    label: "Organic Traffic Growth",
                                    value: 310,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "Qualified Leads",
                                    value: 184,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "ROAS Achieved",
                                    value: 4.8,
                                    prefix: "",
                                    suffix: "x",
                                    decimals: 1,
                                  },
                                  {
                                    label: "Client Satisfaction",
                                    value: 98,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                ]),
                              ];
                              updated[idx] = { ...updated[idx], prefix: e.target.value };
                              setHero({ ...hero, dashboardMetrics: updated });
                            }}
                            placeholder="+"
                            className="rounded border border-[#D0D5DD] px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                          />
                        </label>
                        <label className="grid gap-1 col-span-2">
                          <span className="text-[10px] font-bold text-slate-500">Value</span>
                          <input
                            type="number"
                            step="any"
                            value={dm.value ?? 0}
                            onChange={(e) => {
                              const updated = [
                                ...(hero.dashboardMetrics || [
                                  {
                                    label: "Organic Traffic Growth",
                                    value: 310,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "Qualified Leads",
                                    value: 184,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "ROAS Achieved",
                                    value: 4.8,
                                    prefix: "",
                                    suffix: "x",
                                    decimals: 1,
                                  },
                                  {
                                    label: "Client Satisfaction",
                                    value: 98,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                ]),
                              ];
                              updated[idx] = { ...updated[idx], value: Number(e.target.value) };
                              setHero({ ...hero, dashboardMetrics: updated });
                            }}
                            className="rounded border border-[#D0D5DD] px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                          />
                        </label>
                        <label className="grid gap-1">
                          <span className="text-[10px] font-bold text-slate-500">Suffix</span>
                          <input
                            type="text"
                            value={dm.suffix || ""}
                            onChange={(e) => {
                              const updated = [
                                ...(hero.dashboardMetrics || [
                                  {
                                    label: "Organic Traffic Growth",
                                    value: 310,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "Qualified Leads",
                                    value: 184,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                  {
                                    label: "ROAS Achieved",
                                    value: 4.8,
                                    prefix: "",
                                    suffix: "x",
                                    decimals: 1,
                                  },
                                  {
                                    label: "Client Satisfaction",
                                    value: 98,
                                    prefix: "+",
                                    suffix: "%",
                                    decimals: 0,
                                  },
                                ]),
                              ];
                              updated[idx] = { ...updated[idx], suffix: e.target.value };
                              setHero({ ...hero, dashboardMetrics: updated });
                            }}
                            placeholder="%"
                            className="rounded border border-[#D0D5DD] px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Controls */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-[#EAECF0]">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Chart Title</span>
                  <input
                    type="text"
                    value={hero.chartTitle || ""}
                    onChange={(e) => setHero({ ...hero, chartTitle: e.target.value })}
                    placeholder="Revenue Pipeline Growth (Average YoY)"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Chart Growth Metric</span>
                  <input
                    type="text"
                    value={hero.chartMetric || ""}
                    onChange={(e) => setHero({ ...hero, chartMetric: e.target.value })}
                    placeholder="+247%"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-xs text-slate-600">
            <div>
              <span className="font-bold text-[#06133D]">Badge:</span> {hero.badge}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Headline:</span> {hero.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {hero.description}
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Primary CTA:</span> {hero.buttonText} (
                {hero.buttonUrl})
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Secondary CTA:</span>{" "}
                {hero.secondaryButtonText} ({hero.secondaryButtonUrl})
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="font-bold text-[#06133D] mb-1">
                Right Side Dashboard: {hero.dashboardTitle || "Hegxcorp Growth Engine"} (
                {hero.dashboardBadge || "System Active"})
              </div>
              <div className="text-slate-500 text-[11px]">
                URL: https://{hero.dashboardUrl || "hegxcorp.com/growth-analytics"} · Chart:{" "}
                {hero.chartMetric || "+247%"} {hero.chartTitle || "Revenue Pipeline Growth"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- PROVEN RESULTS / METRICS SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Proven Results & Metrics</h3>
            <p className="text-xs text-slate-500">
              Hero headline metric (e.g. +310%) and supporting growth numbers
            </p>
          </div>
          {activeSection !== "metrics" ? (
            <button
              onClick={() => setActiveSection("metrics")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.metrics", metrics)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.metrics" } }).then((res) =>
                    setMetrics(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "metrics" ? (
          <div className="mt-6 space-y-6">
            {/* Tagline & Heading */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={metrics.tagline || ""}
                  onChange={(e) => setMetrics({ ...metrics, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Section Heading
                </span>
                <input
                  type="text"
                  value={metrics.heading || ""}
                  onChange={(e) => setMetrics({ ...metrics, heading: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Dominant Hero Metric (Left Column) */}
            <div className="rounded-lg border border-[#EAECF0] bg-slate-50 p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAECF0] pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#06133D]">
                  Dominant Hero Metric (Left Side)
                </h4>
              </div>

              <div className="grid gap-4 sm:grid-cols-4">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Prefix</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.prefix || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, prefix: e.target.value },
                      })
                    }
                    placeholder="+"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Target Value</span>
                  <input
                    type="number"
                    value={metrics.heroMetric?.value ?? 310}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: {
                          ...metrics.heroMetric,
                          value: Number(e.target.value),
                        },
                      })
                    }
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Suffix</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.suffix || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, suffix: e.target.value },
                      })
                    }
                    placeholder="%"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Ghost Background Num</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.ghostNumber || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, ghostNumber: e.target.value },
                      })
                    }
                    placeholder="310"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Metric Title</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.title || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, title: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Description</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.description || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, description: e.target.value },
                      })
                    }
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">CTA Link Text</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.linkText || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, linkText: e.target.value },
                      })
                    }
                    placeholder="See the case study"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">CTA Link URL</span>
                  <input
                    type="text"
                    value={metrics.heroMetric?.linkUrl || ""}
                    onChange={(e) =>
                      setMetrics({
                        ...metrics,
                        heroMetric: { ...metrics.heroMetric, linkUrl: e.target.value },
                      })
                    }
                    placeholder="/case-studies"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>
            </div>

            {/* Supporting Metrics List (Right Column) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAECF0] pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Supporting Metrics Stack ({metrics.supporting?.length || 0})
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    const newItem = {
                      id: `metric-${Date.now()}`,
                      prefix: "+",
                      value: 100,
                      suffix: "%",
                      label: "New Metric",
                      sub: "Description of the result",
                      decimals: 0,
                      href: "/case-studies",
                    };
                    setMetrics({
                      ...metrics,
                      supporting: [...(metrics.supporting || []), newItem],
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FC9C44] hover:underline"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Metric Card
                </button>
              </div>

              <div className="space-y-3">
                {metrics.supporting?.map((m: any, index: number) => (
                  <div
                    key={m.id || index}
                    className="rounded-lg border border-[#EAECF0] bg-slate-50 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        Metric #{index + 1}:{" "}
                        <span className="text-[#06133D] font-bold">
                          {m.prefix}
                          {m.value}
                          {m.suffix} {m.label}
                        </span>
                      </span>
                      <div className="flex items-center gap-1">
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...metrics.supporting];
                              const temp = updated[index];
                              updated[index] = updated[index - 1];
                              updated[index - 1] = temp;
                              setMetrics({ ...metrics, supporting: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Up"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {index < metrics.supporting.length - 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...metrics.supporting];
                              const temp = updated[index];
                              updated[index] = updated[index + 1];
                              updated[index + 1] = temp;
                              setMetrics({ ...metrics, supporting: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Down"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            const updated = metrics.supporting.filter(
                              (_: any, i: number) => i !== index,
                            );
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          className="rounded p-1 text-red-500 hover:bg-red-50"
                          title="Delete Metric"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-4">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Prefix</span>
                        <input
                          type="text"
                          value={m.prefix || ""}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].prefix = e.target.value;
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          placeholder="+"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Number Value</span>
                        <input
                          type="number"
                          value={m.value ?? 0}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].value = Number(e.target.value);
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Suffix</span>
                        <input
                          type="text"
                          value={m.suffix || ""}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].suffix = e.target.value;
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          placeholder="%"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Decimals</span>
                        <input
                          type="number"
                          value={m.decimals ?? 0}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].decimals = Number(e.target.value);
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                    </div>

                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Label</span>
                        <input
                          type="text"
                          value={m.label || ""}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].label = e.target.value;
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1 sm:col-span-2">
                        <span className="text-[11px] font-bold text-slate-500">
                          Description Subtitle
                        </span>
                        <input
                          type="text"
                          value={m.sub || ""}
                          onChange={(e) => {
                            const updated = [...metrics.supporting];
                            updated[index].sub = e.target.value;
                            setMetrics({ ...metrics, supporting: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-xs text-slate-600">
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Tagline:</span> {metrics?.tagline}
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Heading:</span> {metrics?.heading}
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3">
              <div className="font-bold text-[#06133D] mb-1">
                Dominant Hero:{" "}
                <span className="text-[#FC9C44]">
                  {metrics?.heroMetric?.prefix}
                  {metrics?.heroMetric?.value}
                  {metrics?.heroMetric?.suffix}
                </span>{" "}
                — {metrics?.heroMetric?.title}
              </div>
              <div className="text-slate-500 text-[11px]">{metrics?.heroMetric?.description}</div>
            </div>
            <div>
              <span className="font-bold text-[#06133D]">
                Supporting Metrics ({metrics?.supporting?.length || 0}):
              </span>{" "}
              {metrics?.supporting
                ?.map((s: any) => `${s.prefix || ""}${s.value}${s.suffix || ""} ${s.label}`)
                .join(" · ")}
            </div>
          </div>
        )}
      </div>

      {/* --- SERVICES SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Services Section</h3>
            <p className="text-xs text-slate-500">Capabilities listing grid and text</p>
          </div>
          {activeSection !== "services" ? (
            <button
              onClick={() => setActiveSection("services")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.services", services)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.services" } }).then((res) =>
                    setServices(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "services" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={services.tagline}
                  onChange={(e) => setServices({ ...services, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={services.heading}
                  onChange={(e) => setServices({ ...services, heading: e.target.value })}
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
                value={services.description}
                onChange={(e) => setServices({ ...services, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Service Items</span>
                <button
                  type="button"
                  onClick={() => {
                    const newServices = [...services.services];
                    newServices.push({
                      slug: "NEW",
                      title: "New Service",
                      desc: "Description",
                      href: "/service/seo",
                      url: "hegxcorp › seo",
                    });
                    setServices({ ...services, services: newServices });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Service
                </button>
              </div>

              {services.services.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4"
                >
                  <div className="flex flex-col gap-1.5 justify-center">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => {
                        const items = [...services.services];
                        const temp = items[idx];
                        items[idx] = items[idx - 1];
                        items[idx - 1] = temp;
                        setServices({ ...services, services: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowUp className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === services.services.length - 1}
                      onClick={() => {
                        const items = [...services.services];
                        const temp = items[idx];
                        items[idx] = items[idx + 1];
                        items[idx + 1] = temp;
                        setServices({ ...services, services: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowDown className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="flex-1 grid gap-4 sm:grid-cols-4">
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">SLUG</span>
                      <input
                        type="text"
                        value={item.slug}
                        onChange={(e) => {
                          const items = [...services.services];
                          items[idx].slug = e.target.value;
                          setServices({ ...services, services: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">TITLE</span>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const items = [...services.services];
                          items[idx].title = e.target.value;
                          setServices({ ...services, services: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">HREF</span>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) => {
                          const items = [...services.services];
                          items[idx].href = e.target.value;
                          setServices({ ...services, services: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">MOCKUP URL</span>
                      <input
                        type="text"
                        value={item.url}
                        onChange={(e) => {
                          const items = [...services.services];
                          items[idx].url = e.target.value;
                          setServices({ ...services, services: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="sm:col-span-4 grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">DESCRIPTION</span>
                      <textarea
                        rows={1}
                        value={item.desc}
                        onChange={(e) => {
                          const items = [...services.services];
                          items[idx].desc = e.target.value;
                          setServices({ ...services, services: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        const items = services.services.filter((_: any, i: number) => i !== idx);
                        setServices({ ...services, services: items });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span> {services.tagline} ·{" "}
              {services.heading}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {services.description}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                Service Items ({services.services.length}):
              </span>
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {services.services.map((item: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                    <span className="text-[10px] font-bold text-[#FC9C44] uppercase tracking-wider block">
                      {item.slug}
                    </span>
                    <span className="font-black text-[#06133D] text-xs block mt-1">
                      {item.title}
                    </span>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- FEATURED WORK / CLIENT SUCCESS STORIES SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Featured Work & Case Studies</h3>
            <p className="text-xs text-slate-500">
              Interactive browser mockups, project stats, and client success stories carousel
            </p>
          </div>
          {activeSection !== "featuredWork" ? (
            <button
              onClick={() => setActiveSection("featuredWork")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.featuredWork", featuredWork)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.featuredWork" } }).then((res) =>
                    setFeaturedWork(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "featuredWork" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={featuredWork.tagline || ""}
                  onChange={(e) => setFeaturedWork({ ...featuredWork, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={featuredWork.heading || ""}
                  onChange={(e) => setFeaturedWork({ ...featuredWork, heading: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Projects List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAECF0] pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Project Cards ({featuredWork.projects?.length || 0})
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    const newProject = {
                      id: `project-${Date.now()}`,
                      isFeatured: false,
                      title: "New Project Case Study",
                      category: "SEO + Conversion Engineering",
                      industry: "E-Commerce",
                      url: "example.com",
                      metric: "+150% Revenue Growth",
                      browserColor: "#FFF4E8",
                      screenshotType: "ecommerce",
                      image: "",
                      linkUrl: "/case-studies",
                    };
                    setFeaturedWork({
                      ...featuredWork,
                      projects: [...(featuredWork.projects || []), newProject],
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FC9C44] hover:underline"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Project Card
                </button>
              </div>

              <div className="space-y-4">
                {featuredWork.projects?.map((proj: any, index: number) => (
                  <div
                    key={proj.id || index}
                    className="rounded-lg border border-[#EAECF0] bg-slate-50 p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        Card #{index + 1}:{" "}
                        <span className="text-[#06133D] font-bold">{proj.title}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...featuredWork.projects];
                              const temp = updated[index];
                              updated[index] = updated[index - 1];
                              updated[index - 1] = temp;
                              setFeaturedWork({ ...featuredWork, projects: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Up"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {index < featuredWork.projects.length - 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...featuredWork.projects];
                              const temp = updated[index];
                              updated[index] = updated[index + 1];
                              updated[index + 1] = temp;
                              setFeaturedWork({ ...featuredWork, projects: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Down"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            const updated = featuredWork.projects.filter(
                              (_: any, i: number) => i !== index,
                            );
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          className="rounded p-1 text-red-500 hover:bg-red-50"
                          title="Delete Card"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Project Title</span>
                        <input
                          type="text"
                          value={proj.title || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].title = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Industry</span>
                        <input
                          type="text"
                          value={proj.industry || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].industry = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          placeholder="e.g. E-Commerce"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Category Tag</span>
                        <input
                          type="text"
                          value={proj.category || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].category = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          placeholder="e.g. SEO + Conversion"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">
                          Website URL Label
                        </span>
                        <input
                          type="text"
                          value={proj.url || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].url = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          placeholder="e.g. brand.in"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">
                          Result Metric Pill
                        </span>
                        <input
                          type="text"
                          value={proj.metric || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].metric = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          placeholder="+280% Organic Revenue"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">
                          Case Study Link URL
                        </span>
                        <input
                          type="text"
                          value={proj.linkUrl || ""}
                          onChange={(e) => {
                            const updated = [...featuredWork.projects];
                            updated[index].linkUrl = e.target.value;
                            setFeaturedWork({ ...featuredWork, projects: updated });
                          }}
                          placeholder="/case-studies/client"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                    </div>

                    {/* Integrated File Manager for Case Study Screenshot / Image */}
                    <CaseStudyFileManager
                      value={proj.image || ""}
                      onChange={(newImage) => {
                        const updated = [...featuredWork.projects];
                        updated[index].image = newImage;
                        setFeaturedWork({ ...featuredWork, projects: updated });
                      }}
                      screenshotType={proj.screenshotType || "ecommerce"}
                      onScreenshotTypeChange={(newType) => {
                        const updated = [...featuredWork.projects];
                        updated[index].screenshotType = newType;
                        setFeaturedWork({ ...featuredWork, projects: updated });
                      }}
                      browserColor={proj.browserColor || "#FFF4E8"}
                      onBrowserColorChange={(newColor) => {
                        const updated = [...featuredWork.projects];
                        updated[index].browserColor = newColor;
                        setFeaturedWork({ ...featuredWork, projects: updated });
                      }}
                      projectTitle={proj.title || "Project"}
                      projectUrl={proj.url || "client.com"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-xs text-slate-600">
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Tagline:</span> {featuredWork?.tagline}
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Heading:</span> {featuredWork?.heading}
              </div>
            </div>
            <div>
              <span className="font-bold text-[#06133D]">
                Projects ({featuredWork?.projects?.length || 0}):
              </span>{" "}
              {featuredWork?.projects?.map((p: any) => `${p.title} (${p.metric})`).join(" · ")}
            </div>
          </div>
        )}
      </div>

      {/* --- FEATURES SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Features Section</h3>
            <p className="text-xs text-slate-500">"Why Hegxcorp" outcome-focused pillars</p>
          </div>
          {activeSection !== "features" ? (
            <button
              onClick={() => setActiveSection("features")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.features", features)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.features" } }).then((res) =>
                    setFeatures(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "features" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={features.tagline}
                  onChange={(e) => setFeatures({ ...features, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={features.heading}
                  onChange={(e) => setFeatures({ ...features, heading: e.target.value })}
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
                value={features.description}
                onChange={(e) => setFeatures({ ...features, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Feature Items</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItems = [...features.items];
                    newItems.push({ title: "New Feature", description: "Details..." });
                    setFeatures({ ...features, items: newItems });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Feature
                </button>
              </div>

              {features.items.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4"
                >
                  <div className="flex flex-col gap-1.5 justify-center">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => {
                        const items = [...features.items];
                        const temp = items[idx];
                        items[idx] = items[idx - 1];
                        items[idx - 1] = temp;
                        setFeatures({ ...features, items: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowUp className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === features.items.length - 1}
                      onClick={() => {
                        const items = [...features.items];
                        const temp = items[idx];
                        items[idx] = items[idx + 1];
                        items[idx + 1] = temp;
                        setFeatures({ ...features, items: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowDown className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-3">
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">FEATURE TITLE</span>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const items = [...features.items];
                          items[idx].title = e.target.value;
                          setFeatures({ ...features, items: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        FEATURE DESCRIPTION
                      </span>
                      <textarea
                        rows={2}
                        value={item.description}
                        onChange={(e) => {
                          const items = [...features.items];
                          items[idx].description = e.target.value;
                          setFeatures({ ...features, items: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        const items = features.items.filter((_: any, i: number) => i !== idx);
                        setFeatures({ ...features, items: items });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span> {features.tagline} ·{" "}
              {features.heading}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {features.description}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                Feature Pillars ({features.items.length}):
              </span>
              <div className="space-y-2">
                {features.items.map((item: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                    <span className="font-black text-[#06133D] text-xs block">{item.title}</span>
                    <p className="text-[11px] text-slate-500 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- PROCESS (HOW WE WORK) SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Process (How We Work)</h3>
            <p className="text-xs text-slate-500">
              Interactive 5-step growth workflow with milestone deliverables
            </p>
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
                onClick={() => void handleSave("home.process", process)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.process" } }).then((res) =>
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
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={process.tagline || ""}
                  onChange={(e) => setProcess({ ...process, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Section Heading
                </span>
                <input
                  type="text"
                  value={process.heading || ""}
                  onChange={(e) => setProcess({ ...process, heading: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Steps List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAECF0] pb-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Workflow Steps ({process.steps?.length || 0})
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    const nextNum = String((process.steps?.length || 0) + 1).padStart(2, "0");
                    const newStep = {
                      num: nextNum,
                      title: "New Step",
                      desc: "Description of what happens during this step of the engagement.",
                      deliverables: ["Deliverable 1", "Deliverable 2"],
                    };
                    setProcess({
                      ...process,
                      steps: [...(process.steps || []), newStep],
                    });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FC9C44] hover:underline"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Step
                </button>
              </div>

              <div className="space-y-4">
                {process.steps?.map((step: any, index: number) => (
                  <div
                    key={step.num || index}
                    className="rounded-lg border border-[#EAECF0] bg-slate-50 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        Step {step.num}:{" "}
                        <span className="text-[#06133D] font-bold">{step.title}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...process.steps];
                              const temp = updated[index];
                              updated[index] = updated[index - 1];
                              updated[index - 1] = temp;
                              setProcess({ ...process, steps: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Up"
                          >
                            <ArrowUp className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {index < process.steps.length - 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...process.steps];
                              const temp = updated[index];
                              updated[index] = updated[index + 1];
                              updated[index + 1] = temp;
                              setProcess({ ...process, steps: updated });
                            }}
                            className="rounded p-1 text-slate-400 hover:bg-slate-200"
                            title="Move Down"
                          >
                            <ArrowDown className="h-3.5 w-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            const updated = process.steps.filter(
                              (_: any, i: number) => i !== index,
                            );
                            setProcess({ ...process, steps: updated });
                          }}
                          className="rounded p-1 text-red-500 hover:bg-red-50"
                          title="Delete Step"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-4">
                      <label className="grid gap-1">
                        <span className="text-[11px] font-bold text-slate-500">Step Number</span>
                        <input
                          type="text"
                          value={step.num || ""}
                          onChange={(e) => {
                            const updated = [...process.steps];
                            updated[index].num = e.target.value;
                            setProcess({ ...process, steps: updated });
                          }}
                          placeholder="01"
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                      <label className="grid gap-1 sm:col-span-3">
                        <span className="text-[11px] font-bold text-slate-500">Step Title</span>
                        <input
                          type="text"
                          value={step.title || ""}
                          onChange={(e) => {
                            const updated = [...process.steps];
                            updated[index].title = e.target.value;
                            setProcess({ ...process, steps: updated });
                          }}
                          className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                        />
                      </label>
                    </div>

                    <label className="grid gap-1">
                      <span className="text-[11px] font-bold text-slate-500">Description</span>
                      <textarea
                        rows={2}
                        value={step.desc || ""}
                        onChange={(e) => {
                          const updated = [...process.steps];
                          updated[index].desc = e.target.value;
                          setProcess({ ...process, steps: updated });
                        }}
                        className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>

                    <label className="grid gap-1">
                      <span className="text-[11px] font-bold text-slate-500">
                        Deliverables (comma-separated list)
                      </span>
                      <input
                        type="text"
                        value={
                          Array.isArray(step.deliverables)
                            ? step.deliverables.join(", ")
                            : step.deliverables || ""
                        }
                        onChange={(e) => {
                          const updated = [...process.steps];
                          updated[index].deliverables = e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter(Boolean);
                          setProcess({ ...process, steps: updated });
                        }}
                        placeholder="Competitor Analysis, Funnel Review, Analytics Audit"
                        className="rounded border border-[#D0D5DD] bg-white px-2.5 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-xs text-slate-600">
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Tagline:</span> {process?.tagline}
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Heading:</span> {process?.heading}
              </div>
            </div>
            <div>
              <span className="font-bold text-[#06133D]">
                Steps ({process?.steps?.length || 0}):
              </span>{" "}
              {process?.steps?.map((s: any) => `${s.num}. ${s.title}`).join(" → ")}
            </div>
          </div>
        )}
      </div>

      {/* --- TESTIMONIALS SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Testimonials Section</h3>
            <p className="text-xs text-slate-500">Customer feedback and outcome metrics</p>
          </div>
          {activeSection !== "testimonials" ? (
            <button
              onClick={() => setActiveSection("testimonials")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.testimonials", testimonials)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.testimonials" } }).then((res) =>
                    setTestimonials(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "testimonials" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={testimonials.tagline}
                  onChange={(e) => setTestimonials({ ...testimonials, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={testimonials.heading}
                  onChange={(e) => setTestimonials({ ...testimonials, heading: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Testimonials</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItems = [...testimonials.testimonials];
                    newItems.push({
                      name: "Customer Name",
                      designation: "Designation",
                      company: "Company",
                      review: "Review...",
                      rating: 5,
                      resultValue: "+100%",
                      resultLabel: "Metric",
                      initials: "XX",
                    });
                    setTestimonials({ ...testimonials, testimonials: newItems });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Testimonial
                </button>
              </div>

              {testimonials.testimonials.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4"
                >
                  <div className="flex-1 grid gap-4 sm:grid-cols-4">
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">NAME</span>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].name = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">DESIGNATION</span>
                      <input
                        type="text"
                        value={item.designation}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].designation = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">COMPANY</span>
                      <input
                        type="text"
                        value={item.company || ""}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].company = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        INITIALS (2 CHARS)
                      </span>
                      <input
                        type="text"
                        maxLength={2}
                        value={item.initials || ""}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].initials = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>

                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        RESULT VALUE (E.G. 5.2x)
                      </span>
                      <input
                        type="text"
                        value={item.resultValue || ""}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].resultValue = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">RESULT LABEL</span>
                      <input
                        type="text"
                        value={item.resultLabel || ""}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].resultLabel = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">RATING (1-5)</span>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={item.rating}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].rating = parseInt(e.target.value) || 5;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
                      />
                    </label>

                    <label className="sm:col-span-4 grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">REVIEW QUOTE</span>
                      <textarea
                        rows={2}
                        value={item.review}
                        onChange={(e) => {
                          const items = [...testimonials.testimonials];
                          items[idx].review = e.target.value;
                          setTestimonials({ ...testimonials, testimonials: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        const items = testimonials.testimonials.filter(
                          (_: any, i: number) => i !== idx,
                        );
                        setTestimonials({ ...testimonials, testimonials: items });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span>{" "}
              {testimonials.tagline} · {testimonials.heading}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                Testimonial Reviews ({testimonials.testimonials.length}):
              </span>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.testimonials.map((item: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#06133D]">{item.name}</span>
                      <span className="text-[9px] bg-[#FC9C44]/10 text-[#C96A13] font-bold px-1.5 py-0.5 rounded">
                        {item.resultValue || "Rating: " + item.rating}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {item.designation} at {item.company}
                    </span>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-2 italic">
                      "{item.review}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- INSIGHTS / BLOG PREVIEW SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Insights & Blog Preview</h3>
            <p className="text-xs text-slate-500">
              Editorial feature banner, insights heading, and articles link
            </p>
          </div>
          {activeSection !== "blogPreview" ? (
            <button
              onClick={() => setActiveSection("blogPreview")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.blogPreview", blogPreview)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.blogPreview" } }).then((res) =>
                    setBlogPreview(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "blogPreview" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={blogPreview.tagline || ""}
                  onChange={(e) => setBlogPreview({ ...blogPreview, tagline: e.target.value })}
                  placeholder="INSIGHTS"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={blogPreview.heading || ""}
                  onChange={(e) => setBlogPreview({ ...blogPreview, heading: e.target.value })}
                  placeholder="Ideas, Experiments & Growth Systems"
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
                value={blogPreview.description || ""}
                onChange={(e) => setBlogPreview({ ...blogPreview, description: e.target.value })}
                placeholder="Practical breakdowns of SEO, paid media, conversion optimisation..."
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  "Read All" Link Text
                </span>
                <input
                  type="text"
                  value={blogPreview.allArticlesText || ""}
                  onChange={(e) =>
                    setBlogPreview({ ...blogPreview, allArticlesText: e.target.value })
                  }
                  placeholder="Read all articles"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  "Read All" Link URL
                </span>
                <input
                  type="text"
                  value={blogPreview.allArticlesUrl || ""}
                  onChange={(e) =>
                    setBlogPreview({ ...blogPreview, allArticlesUrl: e.target.value })
                  }
                  placeholder="/blog"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Banner Button Text
                </span>
                <input
                  type="text"
                  value={blogPreview.buttonText || ""}
                  onChange={(e) => setBlogPreview({ ...blogPreview, buttonText: e.target.value })}
                  placeholder="View Blog"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            {/* Custom Override Box */}
            <div className="rounded-lg border border-[#EAECF0] bg-slate-50 p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAECF0] pb-2">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#06133D]">
                    Custom Featured Article Override (Optional)
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Leave blank to automatically display the latest featured post from the Blog CMS
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Custom Title</span>
                  <input
                    type="text"
                    value={blogPreview.customTitle || ""}
                    onChange={(e) =>
                      setBlogPreview({ ...blogPreview, customTitle: e.target.value })
                    }
                    placeholder="Leave blank to use featured blog title"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-xs font-bold text-slate-500">Custom Blog Slug</span>
                  <input
                    type="text"
                    value={blogPreview.customSlug || ""}
                    onChange={(e) => setBlogPreview({ ...blogPreview, customSlug: e.target.value })}
                    placeholder="e.g. how-ai-search-reshapes-organic-traffic"
                    className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                  />
                </label>
              </div>

              <label className="grid gap-1.5">
                <span className="text-xs font-bold text-slate-500">Custom Excerpt</span>
                <textarea
                  rows={2}
                  value={blogPreview.customExcerpt || ""}
                  onChange={(e) =>
                    setBlogPreview({ ...blogPreview, customExcerpt: e.target.value })
                  }
                  placeholder="Leave blank to use featured blog excerpt"
                  className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>

              <ImageUploadField
                label="Custom Featured Image Override"
                value={blogPreview.customImage || ""}
                onChange={(val) => setBlogPreview({ ...blogPreview, customImage: val })}
                helpText="Directly upload an image or enter an image URL to override the featured blog post's cover thumbnail on the homepage."
              />
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-xs text-slate-600">
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Tagline:</span> {blogPreview?.tagline}
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Heading:</span> {blogPreview?.heading}
              </div>
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span>{" "}
              {blogPreview?.description}
            </div>
            <div className="flex gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Read All:</span>{" "}
                {blogPreview?.allArticlesText} ({blogPreview?.allArticlesUrl})
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Button:</span> {blogPreview?.buttonText}
              </div>
            </div>
            {blogPreview?.customTitle && (
              <div className="rounded bg-slate-50 p-2 text-slate-500">
                <span className="font-bold text-[#06133D]">Custom Override:</span>{" "}
                {blogPreview.customTitle}
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- FAQ SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">FAQ Section</h3>
            <p className="text-xs text-slate-500">Accordion questions and answers on Home page</p>
          </div>
          {activeSection !== "faq" ? (
            <button
              onClick={() => setActiveSection("faq")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.faq", faq)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.faq" } }).then((res) => setFaq(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "faq" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={faq.tagline}
                  onChange={(e) => setFaq({ ...faq, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={faq.heading}
                  onChange={(e) => setFaq({ ...faq, heading: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">FAQ Items</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItems = [...faq.items];
                    newItems.push({ question: "New Question", answer: "Answer details..." });
                    setFaq({ ...faq, items: newItems });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add FAQ
                </button>
              </div>

              {faq.items.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4"
                >
                  <div className="flex flex-col gap-1.5 justify-center">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => {
                        const items = [...faq.items];
                        const temp = items[idx];
                        items[idx] = items[idx - 1];
                        items[idx - 1] = temp;
                        setFaq({ ...faq, items: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowUp className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === faq.items.length - 1}
                      onClick={() => {
                        const items = [...faq.items];
                        const temp = items[idx];
                        items[idx] = items[idx + 1];
                        items[idx + 1] = temp;
                        setFaq({ ...faq, items: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowDown className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-3">
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">QUESTION</span>
                      <input
                        type="text"
                        value={item.question}
                        onChange={(e) => {
                          const items = [...faq.items];
                          items[idx].question = e.target.value;
                          setFaq({ ...faq, items: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">ANSWER</span>
                      <textarea
                        rows={2}
                        value={item.answer}
                        onChange={(e) => {
                          const items = [...faq.items];
                          items[idx].answer = e.target.value;
                          setFaq({ ...faq, items: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        const items = faq.items.filter((_: any, i: number) => i !== idx);
                        setFaq({ ...faq, items: items });
                      }}
                      className="rounded border border-red-200 bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Headline info:</span> {faq.tagline} ·{" "}
              {faq.heading}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                FAQ Items ({faq.items.length}):
              </span>
              <div className="space-y-2">
                {faq.items.map((item: any, idx: number) => (
                  <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                    <span className="font-black text-[#06133D] text-xs block">
                      Q: {item.question}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">A: {item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- CTA SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">CTA Section</h3>
            <p className="text-xs text-slate-500">
              "Let's identify what's limiting your growth" call-to-action banner
            </p>
          </div>
          {activeSection !== "cta" ? (
            <button
              onClick={() => setActiveSection("cta")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.cta", cta)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.cta" } }).then((res) => setCta(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "cta" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Badge/Eyebrow
                </span>
                <input
                  type="text"
                  value={cta.badge}
                  onChange={(e) => setCta({ ...cta, badge: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={cta.heading}
                  onChange={(e) => setCta({ ...cta, heading: e.target.value })}
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
                value={cta.description}
                onChange={(e) => setCta({ ...cta, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Button Label
                </span>
                <input
                  type="text"
                  value={cta.buttonText}
                  onChange={(e) => setCta({ ...cta, buttonText: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Button URL
                </span>
                <input
                  type="text"
                  value={cta.buttonUrl}
                  onChange={(e) => setCta({ ...cta, buttonUrl: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Eyebrow:</span> {cta.badge}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Heading:</span> {cta.heading}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {cta.description}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Button:</span> {cta.buttonText} (
              {cta.buttonUrl})
            </div>
          </div>
        )}
      </div>

      {/* --- FOOTER SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Footer Section</h3>
            <p className="text-xs text-slate-500">Copyright, Quick links, and contact text</p>
          </div>
          {activeSection !== "footer" ? (
            <button
              onClick={() => setActiveSection("footer")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("home.footer", footer)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "home.footer" } }).then((res) => setFooter(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "footer" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Copyright Text
                </span>
                <input
                  type="text"
                  value={footer.copyright}
                  onChange={(e) => setFooter({ ...footer, copyright: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contact Phone
                </span>
                <input
                  type="text"
                  value={footer.phone}
                  onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contact Email
                </span>
                <input
                  type="email"
                  value={footer.email}
                  onChange={(e) => setFooter({ ...footer, email: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Contact Address
                </span>
                <input
                  type="text"
                  value={footer.address}
                  onChange={(e) => setFooter({ ...footer, address: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Copyright:</span> {footer.copyright}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Phone:</span> {footer.phone}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Email:</span> {footer.email}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Address:</span> {footer.address}
            </div>
          </div>
        )}
      </div>

      {/* Live Preview Modal */}
      <CmsLivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        previewPath="/"
        pageName="Homepage"
        onSyncAllDrafts={() => {
          if (hero) broadcastCmsDraft("home.hero", hero);
          if (metrics) broadcastCmsDraft("home.metrics", metrics);
          if (services) broadcastCmsDraft("home.services", services);
          if (featuredWork) broadcastCmsDraft("home.featuredWork", featuredWork);
          if (features) broadcastCmsDraft("home.features", features);
          if (process) broadcastCmsDraft("home.process", process);
          if (testimonials) broadcastCmsDraft("home.testimonials", testimonials);
          if (blogPreview) broadcastCmsDraft("home.blogPreview", blogPreview);
          if (faq) broadcastCmsDraft("home.faq", faq);
          if (cta) broadcastCmsDraft("home.cta", cta);
          if (footer) broadcastCmsDraft("home.footer", footer);
        }}
      />
    </div>
  );
}
