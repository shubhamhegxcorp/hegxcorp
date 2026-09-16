import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Info,
  KeyRound,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UserCheck,
  UserPlus,
  UsersRound,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";

import {
  createAdminUser,
  deleteAdminUser,
  listAdminUsers,
  updateAdminUser,
  type AdminAccessLevel,
  type AdminUser,
} from "@/lib/admin-users";
import { formatAdminDate } from "@/lib/admin-leads";

export const Route = createFileRoute("/admin/admins")({
  head: () => ({
    meta: [
      { title: "Add & Manage Admins | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminUsersPage,
} as never);

type AdminFormState = {
  name: string;
  email: string;
  password: string;
  accessLevel: AdminAccessLevel;
};

const emptyForm: AdminFormState = {
  name: "",
  email: "",
  password: "",
  accessLevel: "FULL",
};

function accessLabel(accessLevel: AdminAccessLevel) {
  return accessLevel === "FULL" ? "Full Access" : "Minimum Access";
}

function AdminUsersPage() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [form, setForm] = useState<AdminFormState>(emptyForm);
  const [passwordById, setPasswordById] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [savingId, setSavingId] = useState("");
  const [error, setError] = useState("");

  async function loadAdmins() {
    setIsLoading(true);
    setError("");
    try {
      const data = await listAdminUsers();
      setAdmins(data);
    } catch (loadError) {
      const message = loadError instanceof Error ? loadError.message : "Admins could not load.";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadAdmins();
  }, []);

  function updateForm<K extends keyof AdminFormState>(key: K, value: AdminFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateAdminRow<K extends keyof AdminUser>(id: string, key: K, value: AdminUser[K]) {
    setAdmins((current) =>
      current.map((admin) => (admin.id === id ? { ...admin, [key]: value } : admin)),
    );
  }

  async function handleCreateAdmin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setIsCreating(true);
    setError("");
    try {
      const created = await createAdminUser({ data: form });
      setAdmins((current) => [created, ...current]);
      setForm(emptyForm);
      toast.success(`Admin added successfully: ${created.email}`);
    } catch (createError) {
      const message =
        createError instanceof Error ? createError.message : "Admin could not be added.";
      setError(message);
      toast.error(message);
    } finally {
      setIsCreating(false);
    }
  }

  async function handleUpdateAdmin(admin: AdminUser) {
    const newPassword = passwordById[admin.id]?.trim();
    if (newPassword && newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long.");
      return;
    }

    setSavingId(admin.id);
    setError("");
    try {
      const updated = await updateAdminUser({
        data: {
          id: admin.id,
          name: admin.name,
          accessLevel: admin.accessLevel,
          password: newPassword || undefined,
        },
      });
      setAdmins((current) => current.map((item) => (item.id === updated.id ? updated : item)));
      setPasswordById((current) => ({ ...current, [admin.id]: "" }));
      toast.success(`Updated ${updated.email}`);
    } catch (updateError) {
      const message =
        updateError instanceof Error ? updateError.message : "Admin could not be updated.";
      setError(message);
      toast.error(message);
    } finally {
      setSavingId("");
    }
  }

  async function handleDeleteAdmin(admin: AdminUser) {
    if (!window.confirm(`Are you sure you want to delete admin "${admin.email}"?`)) return;

    setSavingId(admin.id);
    setError("");
    try {
      await deleteAdminUser({ data: { id: admin.id } });
      setAdmins((current) => current.filter((item) => item.id !== admin.id));
      toast.success(`Deleted admin: ${admin.email}`);
    } catch (deleteError) {
      const message =
        deleteError instanceof Error ? deleteError.message : "Admin could not be deleted.";
      setError(message);
      toast.error(message);
    } finally {
      setSavingId("");
    }
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      {/* Top Metrics Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-xs">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
            <UsersRound className="h-4 w-4 text-[#FC9C44]" />
            Total Administrators
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">{admins.length}</p>
          <p className="mt-1 text-xs text-[#98A2B3]">Active accounts registered in database</p>
        </div>

        <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-5 shadow-xs">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#C96A13]">
            <ShieldCheck className="h-4 w-4" />
            Full Access
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">
            {admins.filter((admin) => admin.accessLevel === "FULL").length}
          </p>
          <p className="mt-1 text-xs text-[#C96A13]/80">Leads, CMS, Blogs & Admin Management</p>
        </div>

        <div className="rounded-xl border border-[#B9D3FF] bg-[#EAF2FF] p-5 shadow-xs">
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#2359B8]">
            <KeyRound className="h-4 w-4" />
            Minimum Access
          </p>
          <p className="mt-2 text-3xl font-black text-[#06133D]">
            {admins.filter((admin) => admin.accessLevel === "MINIMUM").length}
          </p>
          <p className="mt-1 text-xs text-[#2359B8]/80">Inquiries only (Contact, Growth, Ads)</p>
        </div>
      </div>

      {/* Permissions Breakdown Callout */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-5 shadow-xs">
        <div className="flex items-center gap-2 border-b border-[#EAECF0] pb-3 text-sm font-black text-[#06133D]">
          <Info className="h-4 w-4 text-[#FC9C44]" />
          Access Level Guidelines
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[#FED7AA]/60 bg-[#FFFDF9] p-3.5">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#FFF4E8] px-2 py-0.5 text-xs font-black text-[#C96A13]">
                Full Access
              </span>
              <span className="text-xs font-bold text-[#344054]">Super Admin Permissions</span>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs text-[#475467]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>Manage all Contact Leads, Growth Leads, Ad Leads & Subscribers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>Create, edit, delete and publish Blog posts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>Edit Website Content CMS (Home, About, Services, Sub-services)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>Add new admins, change access levels & reset passwords</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-[#B9D3FF]/60 bg-[#F8FAFF] p-3.5">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#EAF2FF] px-2 py-0.5 text-xs font-black text-[#2359B8]">
                Minimum Access
              </span>
              <span className="text-xs font-bold text-[#344054]">
                Inquiry Responder Permissions
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs text-[#475467]">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>View Contact Leads, Growth Leads, Ad Leads & Subscribers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12B76A] shrink-0" />
                <span>Update status (New, In Progress, Closed) and export CSV</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#98A2B3]">
                <ShieldAlert className="h-3.5 w-3.5 text-[#F04438] shrink-0" />
                <span>Restricted from editing Blog, Website CMS & Admin users</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      {/* Add New Admin Form */}
      <div className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-xs">
        <div className="flex items-center gap-2 border-b border-[#EAECF0] pb-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
            <UserPlus className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-black text-[#06133D]">Add New Administrator</h2>
            <p className="text-xs text-[#667085]">
              Create an administrator account and select their access level
            </p>
          </div>
        </div>

        <form onSubmit={handleCreateAdmin} className="mt-5 grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="grid gap-1.5">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
                Full Name
              </span>
              <input
                value={form.name}
                onChange={(event) => updateForm("name", event.target.value)}
                required
                className="rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#06133D] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/15"
                placeholder="e.g. Rahul Sharma"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
                Email Address
              </span>
              <input
                value={form.email}
                onChange={(event) => updateForm("email", event.target.value)}
                required
                type="email"
                className="rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#06133D] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/15"
                placeholder="admin@hegxcorp.com"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
                Password (min. 6 characters)
              </span>
              <input
                value={form.password}
                onChange={(event) => updateForm("password", event.target.value)}
                required
                minLength={6}
                type="password"
                className="rounded-lg border border-[#D0D5DD] px-3.5 py-2.5 text-sm font-semibold text-[#06133D] outline-none transition focus:border-[#FC9C44] focus:ring-2 focus:ring-[#FC9C44]/15"
                placeholder="••••••••"
              />
            </label>
          </div>

          <div className="grid gap-2">
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#475467]">
              Select Access Level
            </span>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => updateForm("accessLevel", "FULL")}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                  form.accessLevel === "FULL"
                    ? "border-[#FC9C44] bg-[#FFF8F2] ring-2 ring-[#FC9C44]/20"
                    : "border-[#D0D5DD] bg-white hover:border-[#FC9C44]/50"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    form.accessLevel === "FULL"
                      ? "border-[#FC9C44] bg-[#FC9C44] text-white"
                      : "border-[#D0D5DD]"
                  }`}
                >
                  {form.accessLevel === "FULL" && <div className="h-2 w-2 rounded-full bg-white" />}
                </div>
                <div>
                  <span className="block text-sm font-black text-[#06133D]">Full Access</span>
                  <span className="text-xs text-[#667085]">
                    Full access to leads, blog publishing, website content CMS, and admin
                    management.
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => updateForm("accessLevel", "MINIMUM")}
                className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                  form.accessLevel === "MINIMUM"
                    ? "border-[#2359B8] bg-[#F5F8FF] ring-2 ring-[#2359B8]/20"
                    : "border-[#D0D5DD] bg-white hover:border-[#2359B8]/50"
                }`}
              >
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    form.accessLevel === "MINIMUM"
                      ? "border-[#2359B8] bg-[#2359B8] text-white"
                      : "border-[#D0D5DD]"
                  }`}
                >
                  {form.accessLevel === "MINIMUM" && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <span className="block text-sm font-black text-[#06133D]">Minimum Access</span>
                  <span className="text-xs text-[#667085]">
                    View and manage customer lead inquiries only. Cannot edit site content or manage
                    admins.
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isCreating}
              className="inline-flex items-center gap-2 rounded-lg bg-[#06133D] px-6 py-2.5 text-sm font-black text-white transition hover:bg-[#102159] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCreating ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <UserPlus className="h-4 w-4" />
              )}
              {isCreating ? "Adding Administrator..." : "Add Administrator"}
            </button>
          </div>
        </form>
      </div>

      {/* Admins Table */}
      <div className="overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-6 py-4">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-[#FC9C44]" />
            <div>
              <h2 className="text-base font-black text-[#06133D]">Current Administrators</h2>
              <p className="text-xs text-[#667085]">
                Manage existing admin accounts, update permissions, or reset passwords
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => void loadAdmins()}
            disabled={isLoading}
            className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2 text-xs font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:opacity-60"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {isLoading ? (
          <div className="grid min-h-[260px] place-items-center text-sm font-semibold text-[#667085]">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 animate-spin text-[#FC9C44]" />
              Loading administrators...
            </div>
          </div>
        ) : admins.length === 0 ? (
          <div className="grid min-h-[260px] place-items-center px-6 text-center">
            <div>
              <UsersRound className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">No administrators found</h3>
              <p className="mt-1 text-sm text-[#667085]">Use the form above to add an admin.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-left">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                <tr>
                  <th className="px-6 py-3.5">Administrator</th>
                  <th className="px-6 py-3.5">Access Level</th>
                  <th className="px-6 py-3.5">Reset Password</th>
                  <th className="px-6 py-3.5">Last Updated</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {admins.map((admin) => {
                  const isSaving = savingId === admin.id;
                  return (
                    <tr key={admin.id} className="align-middle transition hover:bg-[#FFFDF9]">
                      <td className="px-6 py-4">
                        <input
                          value={admin.name}
                          onChange={(event) => updateAdminRow(admin.id, "name", event.target.value)}
                          className="w-full max-w-[220px] rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-sm font-bold text-[#06133D] outline-none transition focus:border-[#FC9C44]"
                          placeholder="Admin Name"
                        />
                        <p className="mt-1.5 text-xs font-semibold text-[#667085]">{admin.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={admin.accessLevel}
                          onChange={(event) =>
                            updateAdminRow(
                              admin.id,
                              "accessLevel",
                              event.target.value as AdminAccessLevel,
                            )
                          }
                          className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-1.5 text-xs font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]"
                        >
                          <option value="FULL">Full Access</option>
                          <option value="MINIMUM">Minimum Access</option>
                        </select>
                        <span
                          className={`mt-1.5 block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-wide uppercase ${
                            admin.accessLevel === "FULL"
                              ? "bg-[#FFF4E8] text-[#C96A13]"
                              : "bg-[#EAF2FF] text-[#2359B8]"
                          }`}
                        >
                          {accessLabel(admin.accessLevel)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <input
                          value={passwordById[admin.id] ?? ""}
                          onChange={(event) =>
                            setPasswordById((current) => ({
                              ...current,
                              [admin.id]: event.target.value,
                            }))
                          }
                          type="password"
                          minLength={6}
                          className="w-full max-w-[200px] rounded-lg border border-[#D0D5DD] px-3 py-1.5 text-xs font-semibold outline-none transition focus:border-[#FC9C44]"
                          placeholder="New password (min 6)"
                        />
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-[#667085]">
                        {formatAdminDate(admin.updatedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => void handleUpdateAdmin(admin)}
                            disabled={isSaving}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#FC9C44] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#E88C35] disabled:opacity-60"
                          >
                            {isSaving && <RefreshCw className="h-3 w-3 animate-spin" />}
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => void handleDeleteAdmin(admin)}
                            disabled={isSaving}
                            aria-label={`Delete admin ${admin.email}`}
                            className="grid h-8 w-8 place-items-center rounded-lg border border-[#D0D5DD] text-[#98A2B3] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:opacity-60"
                            title="Delete Admin"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
