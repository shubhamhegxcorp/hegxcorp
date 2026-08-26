import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Edit2, Check, X } from "lucide-react";
import { getWebsiteSection, saveWebsiteSection } from "@/lib/website-content";
import { DEFAULT_CMS_SECTIONS } from "@/lib/cms-config";

export const Route = createFileRoute("/admin/website-content/contact")({
  component: AdminContactCMS,
});

function AdminContactCMS() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [serviceGroups, setServiceGroups] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [heroData, detailsData, serviceGroupsData] = await Promise.all([
          getWebsiteSection({ data: { key: "contact.hero" } }),
          getWebsiteSection({ data: { key: "contact.details" } }),
          getWebsiteSection({ data: { key: "contact.serviceGroups" } }),
        ]);

        setHero(heroData || DEFAULT_CMS_SECTIONS["contact.hero"]);
        setDetails(detailsData || DEFAULT_CMS_SECTIONS["contact.details"]);
        setServiceGroups(serviceGroupsData || DEFAULT_CMS_SECTIONS["contact.serviceGroups"]);
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
          Manage and edit all frontend Contact page sections.
        </p>
      </div>

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
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.hero", hero)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
              >
                <Check className="h-3.5 w-3.5" /> Save
              </button>
              <button
                onClick={() => {
                  setActiveSection(null);
                  getWebsiteSection({ data: { key: "contact.hero" } }).then((res) => setHero(res));
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
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.details", details)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
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

      {/* --- SERVICE GROUPS SECTION --- */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#F2F4F7] pb-4">
          <div>
            <h3 className="text-lg font-black text-[#06133D]">Service Dropdown List</h3>
            <p className="text-xs text-slate-500">
              Manage categories and checklist of services in the contact form
            </p>
          </div>
          {activeSection !== "serviceGroups" ? (
            <button
              onClick={() => setActiveSection("serviceGroups")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
            >
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => void handleSave("contact.serviceGroups", serviceGroups)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#E88C35]"
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
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#D0D5DD] px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:bg-slate-50"
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
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
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
                    className="rounded border border-red-200 bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 ml-4 mt-4"
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
                      className="text-[10px] text-[#FC9C44] font-bold hover:underline"
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
                        className="text-red-500 hover:text-red-700 font-bold px-1"
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
    </div>
  );
}
