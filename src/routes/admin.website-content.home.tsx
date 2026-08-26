import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

export const Route = createFileRoute("/admin/website-content/home")({
  component: AdminHomeCMS,
});

function AdminHomeCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // --- States for each section ---
  const [hero, setHero] = useState<any>(null);
  const [services, setServices] = useState<any>(null);
  const [features, setFeatures] = useState<any>(null);
  const [testimonials, setTestimonials] = useState<any>(null);
  const [faq, setFaq] = useState<any>(null);
  const [cta, setCta] = useState<any>(null);
  const [footer, setFooter] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  // Load all sections on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [
          heroData,
          servicesData,
          featuresData,
          testimonialsData,
          faqData,
          ctaData,
          footerData,
        ] = await Promise.all([
          getWebsiteSection({ data: { key: "home.hero" } }),
          getWebsiteSection({ data: { key: "home.services" } }),
          getWebsiteSection({ data: { key: "home.features" } }),
          getWebsiteSection({ data: { key: "home.testimonials" } }),
          getWebsiteSection({ data: { key: "home.faq" } }),
          getWebsiteSection({ data: { key: "home.cta" } }),
          getWebsiteSection({ data: { key: "home.footer" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["home.hero"]);
        setServices(servicesData || DEFAULT_CMS_SECTIONS["home.services"]);
        setFeatures(featuresData || DEFAULT_CMS_SECTIONS["home.features"]);
        setTestimonials(testimonialsData || DEFAULT_CMS_SECTIONS["home.testimonials"]);
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

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-sm font-bold text-slate-500">Loading website content...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 lg:p-8">
      <div className="border-b border-[#E4E7EC] pb-4">
        <p className="text-sm text-slate-500">
          Manage and edit all frontend homepage sections. Your changes take effect immediately on
          the live website.
        </p>
      </div>

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
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Category Badge
                </span>
                <input
                  type="text"
                  value={hero.badge}
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

            <div className="grid gap-4 sm:grid-cols-4">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Primary Button Label
                </span>
                <input
                  type="text"
                  value={hero.buttonText}
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
                  value={hero.buttonUrl}
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
                  value={hero.secondaryButtonText}
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
                  value={hero.secondaryButtonUrl}
                  onChange={(e) => setHero({ ...hero, secondaryButtonUrl: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Badge:</span> {hero.badge}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Headline:</span> {hero.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {hero.description}
            </div>
            <div className="flex gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Primary Button:</span> {hero.buttonText}{" "}
                ({hero.buttonUrl})
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Secondary Button:</span>{" "}
                {hero.secondaryButtonText} ({hero.secondaryButtonUrl})
              </div>
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
    </div>
  );
}
