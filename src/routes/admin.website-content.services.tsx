import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

export const Route = createFileRoute("/admin/website-content/services")({
  component: AdminServicesCMS,
});

function AdminServicesCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [benefits, setBenefits] = useState<any>(null);
  const [process, setProcess] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, benefitsData, processData] = await Promise.all([
          getWebsiteSection({ data: { key: "services.hero" } }),
          getWebsiteSection({ data: { key: "services.benefits" } }),
          getWebsiteSection({ data: { key: "services.process" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["services.hero"]);
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
          Manage and edit all frontend Services page sections.
        </p>
      </div>

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
    </div>
  );
}
