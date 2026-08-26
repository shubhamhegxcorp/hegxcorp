import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

export const Route = createFileRoute("/admin/website-content/products")({
  component: AdminProductsCMS,
});

function AdminProductsCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [list, setList] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, listData] = await Promise.all([
          getWebsiteSection({ data: { key: "products.hero" } }),
          getWebsiteSection({ data: { key: "products.list" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["products.hero"]);
        setList(listData || DEFAULT_CMS_SECTIONS["products.list"]);
      } catch (err) {
        console.error("Failed to load products CMS data:", err);
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
          Manage and edit products, SaaS solutions, and visual assets listed on the Products page.
        </p>
      </div>

      {/* --- HERO SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
            <p className="text-xs text-slate-500">Intro headline and subtitle copy</p>
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
                onClick={() => void handleSave("products.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "products.hero" } }).then((res) => setHero(res));
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

      {/* --- PRODUCTS LIST SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Products List</h3>
            <p className="text-xs text-slate-500">
              Add, remove and manage pricing of dynamic software/SaaS products
            </p>
          </div>
          {activeSection !== "list" ? (
            <button
              onClick={() => setActiveSection("list")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("products.list", list)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "products.list" } }).then((res) => setList(res));
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "list" ? (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#06133D]">Products / SaaS items</span>
              <button
                type="button"
                onClick={() => {
                  const items = [...list.products];
                  items.push({
                    title: "New Product",
                    description: "Description of the product",
                    price: "Contact for pricing",
                    buttonText: "Request Access",
                    buttonUrl: "/contact",
                    features: ["Feature point 1"],
                  });
                  setList({ ...list, products: items });
                }}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                <Plus className="h-3 w-3" /> Add Product
              </button>
            </div>

            {list.products.map((item: any, idx: number) => (
              <div
                key={idx}
                className="rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#FC9C44] uppercase tracking-wider">
                    Product #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const items = list.products.filter((_: any, i: number) => i !== idx);
                      setList({ ...list, products: items });
                    }}
                    className="rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">PRODUCT NAME</span>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const items = [...list.products];
                        items[idx].title = e.target.value;
                        setList({ ...list, products: items });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">PRICE INFO</span>
                    <input
                      type="text"
                      value={item.price}
                      onChange={(e) => {
                        const items = [...list.products];
                        items[idx].price = e.target.value;
                        setList({ ...list, products: items });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">BUTTON LABEL</span>
                    <input
                      type="text"
                      value={item.buttonText}
                      onChange={(e) => {
                        const items = [...list.products];
                        items[idx].buttonText = e.target.value;
                        setList({ ...list, products: items });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">BUTTON URL</span>
                    <input
                      type="text"
                      value={item.buttonUrl}
                      onChange={(e) => {
                        const items = [...list.products];
                        items[idx].buttonUrl = e.target.value;
                        setList({ ...list, products: items });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                  <label className="sm:col-span-2 grid gap-1">
                    <span className="text-[10px] font-bold text-slate-400">DESCRIPTION</span>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => {
                        const items = [...list.products];
                        items[idx].description = e.target.value;
                        setList({ ...list, products: items });
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                    />
                  </label>
                </div>

                <div className="pl-4 border-l-2 border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400">PRODUCT FEATURES</span>
                    <button
                      type="button"
                      onClick={() => {
                        const items = [...list.products];
                        items[idx].features.push("New Feature");
                        setList({ ...list, products: items });
                      }}
                      className="text-[10px] text-[#FC9C44] font-bold hover:underline"
                    >
                      + Add Feature
                    </button>
                  </div>

                  {item.features.map((feature: string, fIdx: number) => (
                    <div key={fIdx} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const items = [...list.products];
                          items[idx].features[fIdx] = e.target.value;
                          setList({ ...list, products: items });
                        }}
                        className="flex-1 rounded border border-slate-200 bg-white px-2 py-1 text-xs outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const items = [...list.products];
                          items[idx].features = items[idx].features.filter(
                            (_: any, i: number) => i !== fIdx,
                          );
                          setList({ ...list, products: items });
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
        ) : (
          <div className="mt-4 space-y-3 text-sm">
            <span className="font-bold text-[#06133D] block">
              Products Grid Preview ({list.products.length}):
            </span>
            <div className="grid gap-3 sm:grid-cols-2">
              {list.products.map((item: any, idx: number) => (
                <div key={idx} className="rounded-lg border border-slate-100 p-3 bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#06133D] text-xs">{item.title}</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
