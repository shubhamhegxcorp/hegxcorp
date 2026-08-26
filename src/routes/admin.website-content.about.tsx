import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

export const Route = createFileRoute("/admin/website-content/about")({
  component: AdminAboutCMS,
});

function AdminAboutCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [whoWeAre, setWhoWeAre] = useState<any>(null);
  const [ourMission, setOurMission] = useState<any>(null);
  const [ourValues, setOurValues] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, whoWeAreData, ourMissionData, ourValuesData] = await Promise.all([
          getWebsiteSection({ data: { key: "about.hero" } }),
          getWebsiteSection({ data: { key: "about.whoWeAre" } }),
          getWebsiteSection({ data: { key: "about.ourMission" } }),
          getWebsiteSection({ data: { key: "about.ourValues" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["about.hero"]);
        setWhoWeAre(whoWeAreData || DEFAULT_CMS_SECTIONS["about.whoWeAre"]);
        setOurMission(ourMissionData || DEFAULT_CMS_SECTIONS["about.ourMission"]);
        setOurValues(ourValuesData || DEFAULT_CMS_SECTIONS["about.ourValues"]);
      } catch (err) {
        console.error("Failed to load about CMS data:", err);
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
        <p className="text-sm text-slate-500">Manage and edit all frontend About page sections.</p>
      </div>

      {/* --- HERO SECTION CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Hero Section</h3>
            <p className="text-xs text-slate-500">Hero introduction banner</p>
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
                onClick={() => void handleSave("about.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.hero" } }).then((res) => setHero(res));
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
              <span className="font-bold text-[#06133D]">Headline:</span> {hero.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {hero.description}
            </div>
          </div>
        )}
      </div>

      {/* --- WHO WE ARE SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Who We Are</h3>
            <p className="text-xs text-slate-500">Overview copy with team image reference</p>
          </div>
          {activeSection !== "whoWeAre" ? (
            <button
              onClick={() => setActiveSection("whoWeAre")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("about.whoWeAre", whoWeAre)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.whoWeAre" } }).then((res) =>
                    setWhoWeAre(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "whoWeAre" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={whoWeAre.tagline}
                  onChange={(e) => setWhoWeAre({ ...whoWeAre, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Title
                </span>
                <input
                  type="text"
                  value={whoWeAre.title}
                  onChange={(e) => setWhoWeAre({ ...whoWeAre, title: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Description
              </span>
              <textarea
                rows={4}
                value={whoWeAre.description}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Title:</span> {whoWeAre.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {whoWeAre.description}
            </div>
          </div>
        )}
      </div>

      {/* --- OUR MISSION SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Our Mission</h3>
            <p className="text-xs text-slate-500">Overview copy with mission image reference</p>
          </div>
          {activeSection !== "ourMission" ? (
            <button
              onClick={() => setActiveSection("ourMission")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("about.ourMission", ourMission)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.ourMission" } }).then((res) =>
                    setOurMission(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "ourMission" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={ourMission.tagline}
                  onChange={(e) => setOurMission({ ...ourMission, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Title
                </span>
                <input
                  type="text"
                  value={ourMission.title}
                  onChange={(e) => setOurMission({ ...ourMission, title: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Description
              </span>
              <textarea
                rows={4}
                value={ourMission.description}
                onChange={(e) => setOurMission({ ...ourMission, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Title:</span> {ourMission.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span>{" "}
              {ourMission.description}
            </div>
          </div>
        )}
      </div>

      {/* --- OUR VALUES SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Our Values Section</h3>
            <p className="text-xs text-slate-500">Company standards grid list</p>
          </div>
          {activeSection !== "ourValues" ? (
            <button
              onClick={() => setActiveSection("ourValues")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("about.ourValues", ourValues)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.ourValues" } }).then((res) =>
                    setOurValues(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "ourValues" ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={ourValues.tagline}
                  onChange={(e) => setOurValues({ ...ourValues, tagline: e.target.value })}
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading
                </span>
                <input
                  type="text"
                  value={ourValues.title}
                  onChange={(e) => setOurValues({ ...ourValues, title: e.target.value })}
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
                value={ourValues.description}
                onChange={(e) => setOurValues({ ...ourValues, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#06133D]">Values list</span>
                <button
                  type="button"
                  onClick={() => {
                    const newItems = [...ourValues.values];
                    newItems.push({ title: "New Value", description: "Details..." });
                    setOurValues({ ...ourValues, values: newItems });
                  }}
                  className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Plus className="h-3 w-3" /> Add Value
                </button>
              </div>

              {ourValues.values.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-xl border border-[#F2F4F7] bg-slate-50/50 p-4"
                >
                  <div className="flex flex-col gap-1.5 justify-center">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => {
                        const items = [...ourValues.values];
                        const temp = items[idx];
                        items[idx] = items[idx - 1];
                        items[idx - 1] = temp;
                        setOurValues({ ...ourValues, values: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowUp className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === ourValues.values.length - 1}
                      onClick={() => {
                        const items = [...ourValues.values];
                        const temp = items[idx];
                        items[idx] = items[idx + 1];
                        items[idx + 1] = temp;
                        setOurValues({ ...ourValues, values: items });
                      }}
                      className="rounded border border-slate-200 bg-white p-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-40"
                    >
                      <ArrowDown className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="flex-1 space-y-3">
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">VALUE TITLE</span>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const items = [...ourValues.values];
                          items[idx].title = e.target.value;
                          setOurValues({ ...ourValues, values: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                    <label className="grid gap-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        VALUE DESCRIPTION
                      </span>
                      <textarea
                        rows={2}
                        value={item.description}
                        onChange={(e) => {
                          const items = [...ourValues.values];
                          items[idx].description = e.target.value;
                          setOurValues({ ...ourValues, values: items });
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#FC9C44]"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => {
                        const items = ourValues.values.filter((_: any, i: number) => i !== idx);
                        setOurValues({ ...ourValues, values: items });
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
              <span className="font-bold text-[#06133D]">Headline info:</span> {ourValues.tagline} ·{" "}
              {ourValues.title}
            </div>
            <div className="border-t border-slate-100 pt-2">
              <span className="font-bold text-[#06133D] block mb-2">
                Values list ({ourValues.values.length}):
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                {ourValues.values.map((item: any, idx: number) => (
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
    </div>
  );
}
