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
  const [ourStory, setOurStory] = useState<any>(null);
  const [ourMission, setOurMission] = useState<any>(null);
  const [ourValues, setOurValues] = useState<any>(null);
  const [cta, setCta] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          heroData,
          whoWeAreData,
          ourStoryData,
          ourMissionData,
          ourValuesData,
          ctaData,
        ] = await Promise.all([
          getWebsiteSection({ data: { key: "about.hero" } }),
          getWebsiteSection({ data: { key: "about.whoWeAre" } }),
          getWebsiteSection({ data: { key: "about.ourStory" } }),
          getWebsiteSection({ data: { key: "about.ourMission" } }),
          getWebsiteSection({ data: { key: "about.ourValues" } }),
          getWebsiteSection({ data: { key: "about.cta" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["about.hero"]);
        setWhoWeAre(whoWeAreData || DEFAULT_CMS_SECTIONS["about.whoWeAre"]);
        setOurStory(ourStoryData || DEFAULT_CMS_SECTIONS["about.ourStory"]);
        setOurMission(ourMissionData || DEFAULT_CMS_SECTIONS["about.ourMission"]);
        setOurValues(ourValuesData || DEFAULT_CMS_SECTIONS["about.ourValues"]);
        setCta(ctaData || DEFAULT_CMS_SECTIONS["about.cta"]);
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
                  value={whoWeAre.tagline || ""}
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
                  value={whoWeAre.title || ""}
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
                value={whoWeAre.description || ""}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Section Image URL
              </span>
              <input
                type="text"
                value={whoWeAre.imageUrl || ""}
                onChange={(e) => setWhoWeAre({ ...whoWeAre, imageUrl: e.target.value })}
                placeholder="https://... (Leave blank to use default built-in team photo)"
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
              <span className="text-[11px] text-slate-400">
                Direct image link (e.g. Unsplash, Cloudinary, AWS S3, or local asset path).
              </span>
            </label>
            {whoWeAre.imageUrl && (
              <div className="mt-2">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">Image Preview:</span>
                <img
                  src={whoWeAre.imageUrl}
                  alt="Who We Are Preview"
                  className="h-28 w-40 object-cover rounded-lg border border-slate-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Title:</span> {whoWeAre.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {whoWeAre.description}
            </div>
            {whoWeAre.imageUrl && (
              <div>
                <span className="font-bold text-[#06133D]">Custom Image:</span> {whoWeAre.imageUrl}
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Our Story</h3>
            <p className="text-xs text-slate-500">
              Founding journey narrative ("Where creativity meets strategy") and story image
            </p>
          </div>
          {activeSection !== "ourStory" ? (
            <button
              onClick={() => setActiveSection("ourStory")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("about.ourStory", ourStory)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.ourStory" } }).then((res) =>
                    setOurStory(res),
                  );
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
              >
                <X className="h-3.5 w-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {activeSection === "ourStory" ? (
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tagline
                </span>
                <input
                  type="text"
                  value={ourStory.tagline || ""}
                  onChange={(e) => setOurStory({ ...ourStory, tagline: e.target.value })}
                  placeholder="Our Story"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Title
                </span>
                <input
                  type="text"
                  value={ourStory.title || ""}
                  onChange={(e) => setOurStory({ ...ourStory, title: e.target.value })}
                  placeholder="Where creativity meets strategy."
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Story Narrative (Paragraphs)
              </span>
              <textarea
                rows={5}
                value={ourStory.description || ""}
                onChange={(e) => setOurStory({ ...ourStory, description: e.target.value })}
                placeholder="Founder Akshay Jadia started Hegxcorp in Mumbai in 2016..."
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Story Image URL
              </span>
              <input
                type="text"
                value={ourStory.imageUrl || ""}
                onChange={(e) => setOurStory({ ...ourStory, imageUrl: e.target.value })}
                placeholder="https://... (Leave blank to use default built-in team meeting image)"
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
              <span className="text-[11px] text-slate-400">
                Paste any web image URL (e.g. https://images.unsplash.com/... or your CDN URL)
              </span>
            </label>
            {ourStory.imageUrl && (
              <div className="mt-2">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">Image Preview:</span>
                <img
                  src={ourStory.imageUrl}
                  alt="Our Story Preview"
                  className="h-28 w-40 object-cover rounded-lg border border-slate-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Tagline:</span> {ourStory?.tagline}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Title:</span> {ourStory?.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Story Description:</span>{" "}
              <span className="line-clamp-2 text-slate-500">{ourStory?.description}</span>
            </div>
            {ourStory?.imageUrl && (
              <div>
                <span className="font-bold text-[#06133D]">Custom Image:</span> {ourStory.imageUrl}
              </div>
            )}
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
                  value={ourMission.tagline || ""}
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
                  value={ourMission.title || ""}
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
                value={ourMission.description || ""}
                onChange={(e) => setOurMission({ ...ourMission, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Mission Image URL
              </span>
              <input
                type="text"
                value={ourMission.imageUrl || ""}
                onChange={(e) => setOurMission({ ...ourMission, imageUrl: e.target.value })}
                placeholder="https://... (Leave blank to use default built-in global workshop image)"
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
              <span className="text-[11px] text-slate-400">
                Direct image link (e.g. Unsplash, Cloudinary, AWS S3, or local asset path).
              </span>
            </label>
            {ourMission.imageUrl && (
              <div className="mt-2">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">Image Preview:</span>
                <img
                  src={ourMission.imageUrl}
                  alt="Our Mission Preview"
                  className="h-28 w-40 object-cover rounded-lg border border-slate-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            )}
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
            {ourMission.imageUrl && (
              <div>
                <span className="font-bold text-[#06133D]">Custom Image:</span> {ourMission.imageUrl}
              </div>
            )}
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
                value={ourValues.description || ""}
                onChange={(e) => setOurValues({ ...ourValues, description: e.target.value })}
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Values Workspace Image URL
              </span>
              <input
                type="text"
                value={ourValues.imageUrl || ""}
                onChange={(e) => setOurValues({ ...ourValues, imageUrl: e.target.value })}
                placeholder="https://... (Leave blank to use default workspace photo)"
                className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
              />
              <span className="text-[11px] text-slate-400">
                Direct image link (e.g. Unsplash, Cloudinary, AWS S3, or local asset path).
              </span>
            </label>
            {ourValues.imageUrl && (
              <div className="mt-2">
                <span className="text-[11px] font-bold text-slate-500 block mb-1">Image Preview:</span>
                <img
                  src={ourValues.imageUrl}
                  alt="Values Workspace Preview"
                  className="h-28 w-40 object-cover rounded-lg border border-slate-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            )}

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

      {/* --- CTA / LET'S GROW TOGETHER BANNER CARD --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Let's Grow Together (CTA Banner)</h3>
            <p className="text-xs text-slate-500">
              Bottom conversion card ("Ready to turn your next idea into measurable growth?")
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
                onClick={() => void handleSave("about.cta", cta)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "about.cta" } }).then((res) => setCta(res));
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
                  Tagline
                </span>
                <input
                  type="text"
                  value={cta.tagline || ""}
                  onChange={(e) => setCta({ ...cta, tagline: e.target.value })}
                  placeholder="LET'S GROW TOGETHER"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Heading / Title
                </span>
                <input
                  type="text"
                  value={cta.title || ""}
                  onChange={(e) => setCta({ ...cta, title: e.target.value })}
                  placeholder="Ready to turn your next idea into measurable growth?"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Description / Subtitle
              </span>
              <textarea
                rows={3}
                value={cta.description || ""}
                onChange={(e) => setCta({ ...cta, description: e.target.value })}
                placeholder="Tell us where you want to go. We'll help you find the clearest digital path to get there."
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
                  value={cta.buttonText || ""}
                  onChange={(e) => setCta({ ...cta, buttonText: e.target.value })}
                  placeholder="Get a Free Growth Audit"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Primary Button URL
                </span>
                <input
                  type="text"
                  value={cta.buttonUrl || ""}
                  onChange={(e) => setCta({ ...cta, buttonUrl: e.target.value })}
                  placeholder="/free-growth-audit"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Secondary Button Label
                </span>
                <input
                  type="text"
                  value={cta.secondaryButtonText || ""}
                  onChange={(e) => setCta({ ...cta, secondaryButtonText: e.target.value })}
                  placeholder="Contact Us"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Secondary Button URL
                </span>
                <input
                  type="text"
                  value={cta.secondaryButtonUrl || ""}
                  onChange={(e) => setCta({ ...cta, secondaryButtonUrl: e.target.value })}
                  placeholder="/contact"
                  className="w-full rounded-lg border border-[#D0D5DD] px-3 py-2 text-sm outline-none focus:border-[#FC9C44]"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2 text-sm">
            <div>
              <span className="font-bold text-[#06133D]">Tagline:</span> {cta?.tagline}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Heading:</span> {cta?.title}
            </div>
            <div>
              <span className="font-bold text-[#06133D]">Description:</span> {cta?.description}
            </div>
            <div className="flex gap-4">
              <div>
                <span className="font-bold text-[#06133D]">Primary Button:</span> {cta?.buttonText}{" "}
                ({cta?.buttonUrl})
              </div>
              <div>
                <span className="font-bold text-[#06133D]">Secondary Button:</span>{" "}
                {cta?.secondaryButtonText} ({cta?.secondaryButtonUrl})
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
