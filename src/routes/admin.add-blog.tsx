import { useEffect, useRef, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PostCategoryPicker } from "@/components/admin/Categorysidebar";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { TagInput } from "@/components/admin/TAginput";
import { getBlogDraft, saveBlogDraft } from "@/lib/blog-drafts";
import { generateId } from "@/lib/id";

function extractFirstImageFromContent(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}
export const Route = createFileRoute("/admin/add-blog")({
  head: () => ({
    meta: [
      { title: "Create Blog Post | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): { draft?: string } => ({
    draft: typeof search.draft === "string" ? search.draft : undefined,
  }),
  component: CreateBlogPage,
} as never);

export const DEFAULT_CATEGORIES = ["Web development", "Tutorials", "News"];

export type BlogFormState = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  seoDescription: string;
  seotitle: string;
  authorname: string;
  status: "DRAFT" | "PUBLISHED";
  featured: boolean;
  category: string[];
  tags: string;
};

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function CreateBlogPage() {
  const [form, setForm] = useState<BlogFormState>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    readTime: "",
    seoDescription: "",
    status: "DRAFT",
    featured: false,
    category: [],
    tags: "",
    seotitle: "",
    authorname: "",
  });
  const [slugTouched, setSlugTouched] = useState(false);

  // Stable draft id for this editing session. If we arrived with ?draft=<id>
  // we reuse it (so Preview → Back keeps editing the same row); otherwise we
  // mint a fresh id that the first save will persist under.
  const search = Route.useSearch() as { draft?: string };
  const [draftId] = useState<string>(() => search.draft ?? generateId());
  const [saving, setSaving] = useState(false);

  // featured image upload
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // categories — PostCategoryPicker owns persistence; this just needs to
  // accept restored names into the list without changing what's selected.
  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);

  function handleCategoriesRestored(names: string[]) {
    setCategories((prev) => Array.from(new Set([...prev, ...names])));
  }

  function updateField<K extends keyof BlogFormState>(key: K, value: BlogFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleTitleChange(value: string) {
    updateField("title", value);
    if (!slugTouched) {
      updateField("slug", slugify(value));
    }
  }

  async function handlePublishClick() {
    if (!validateForm()) return;

    updateField("status", "PUBLISHED");
    setSaving(true);
    try {
      await saveBlogDraft({ data: { ...buildPayload(), status: "PUBLISHED" } });
      toast.success("Published successfully!");
    } catch (publishError) {
      console.error("Failed to publish:", publishError);
      toast.error("Could not publish. Please try again.");
    } finally {
      setSaving(false);
    }
  }
  function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleImageFile(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) return;
    setImageFile(file);
    // Read the picked file as a base64 data URL rather than an object URL.
    // A blob: object URL is revoked on reload and cannot be serialized into
    // the saved draft, so it would break after save/refresh. The data URL is
    // stored on the form (via buildPayload's featuredImage) and survives.
    // TODO: when a storage/upload API exists, POST the file and use the
    // returned URL here instead of the data URL.
    try {
      const dataUrl = await readFileAsDataUrl(file);
      setImagePreview(dataUrl);
    } catch (readError) {
      console.error("Failed to read image file:", readError);
      alert("Could not read that image. Please try another file.");
    }
  }

  function handleAddCategory(name: string) {
    if (categories.includes(name)) {
      updateField("category", [...form.category, name]);
      return;
    }
    setCategories((prev) => [...prev, name]);
    updateField("category", [...form.category, name]);
  }

  function handleDeleteCategory(name: string) {
    setCategories((prev) => prev.filter((c) => c !== name));

    if (form.category.includes(name)) {
      updateField(
        "category",
        form.category.filter((c) => c !== name),
      );
    }
  }

  // Tags: form.tags stays a comma-separated string (unchanged shape for
  // whatever submits this form), but the chip UI works off an array.
  const tagList = form.tags
    ? form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  function handleTagsChange(nextTags: string[]) {
    updateField("tags", nextTags.join(", "));
  }

  // Rehydrate the form when opened with ?draft=<id> (e.g. coming back from the
  // preview page). Runs once per draft id.
  useEffect(() => {
    if (!search.draft) return;
    let cancelled = false;
    getBlogDraft({ data: { id: search.draft } })
      .then((draft) => {
        if (cancelled || !draft) return;
        setForm({
          title: draft.title,
          slug: draft.slug,
          excerpt: draft.excerpt,
          content: draft.content,
          readTime: draft.readTime,
          seoDescription: draft.seoDescription,
          status: draft.status,
          featured: draft.featured,
          category: draft.category,
          tags: draft.tags.join(", "),
          seotitle: draft.seotitle,
          authorname: draft.authorname,
        });
        setSlugTouched(Boolean(draft.slug));
        if (draft.category.length) handleCategoriesRestored(draft.category);
        if (draft.featuredImage) setImagePreview(draft.featuredImage);
      })
      .catch((loadError) => {
        console.error("Failed to load draft:", loadError);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.draft]);

  // Builds the full payload the server expects, using the stable draft id.
  function buildPayload() {
    const fallbackImage = imagePreview ?? extractFirstImageFromContent(form.content);

    return {
      id: draftId,
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      readTime: form.readTime,
      seoDescription: form.seoDescription,
      seotitle: form.seotitle,
      authorname: form.authorname,
      status: form.status,
      featured: form.featured,
      category: form.category,
      tags: tagList,
      featuredImage: fallbackImage,
    };
  }
  function validateForm(): boolean {
    if (!form.title.trim()) {
      toast.error("Title is required before you can save or publish.");
      return false;
    }
    return true;
  }

  // Persists the current form to the server. Returns true on success.
  async function saveNow() {
    if (!validateForm()) return false;

    setSaving(true);
    try {
      await saveBlogDraft({ data: buildPayload() });
      return true;
    } catch (saveError) {
      console.error("Failed to save draft:", saveError);
      return false;
    } finally {
      setSaving(false);
    }
  }

  // Preview: save everything first, then open the preview page for this draft.
  async function handlePreviewClick() {
    const ok = await saveNow();
    if (!ok) {
      alert("Could not save the draft. Check your connection and try again.");
      return;
    }
    window.location.href = `/admin/blog-preview?draft=${encodeURIComponent(draftId)}`;
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4">
        <div className="flex items-center gap-6">
          <Link
            to="/admin/blog"
            className="text-xs font-black text-[#98A2B3] transition hover:text-[#344054]"
          >
            ← Back to library
          </Link>
          <h1 className="text-lg font-black text-[#06133D]">Create blog post</h1>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handlePreviewClick}
            disabled={saving}
            className="rounded-lg border border-[#D0D5DD] bg-white px-5 py-2 text-sm font-black text-[#344054] transition hover:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Saving…" : "Preview"}
          </button>

          <button
            type="button"
            onClick={handlePublishClick}
            disabled={saving}
            className="rounded-lg bg-[#FC9C44] px-5 py-2 text-sm font-black text-white transition hover:bg-[#E88933] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Publishing…" : "Publish post"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_416px] ">
        {/* LEFT COLUMN */}
        <div className="grid gap-6 ">
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Title
            </label>
            <input
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-3 text-base font-semibold text-[#101828] outline-none focus:border-[#FC9C44]"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Content
            </label>
            <RichTextEditor
              value={form.content}
              onChange={(html) => updateField("content", html)}
              placeholder="Start writing your post…"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Slug
            </label>
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] px-4 py-5 text-sm font-bold text-[#667085]">
                {form.slug}
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Focus Key Pharse
            </label>
            <textarea
              value={form.excerpt}
              onChange={(e) => updateField("excerpt", e.target.value)}
              rows={1}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Seo title
            </label>
            <input
              value={form.seotitle}
              onChange={(e) => updateField("seotitle", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm font-bold text-[#344054] outline-none focus:border-[#FC9C44]"
            />
          </div>
          {/* <div className="grid gap-6 sm:grid-cols-[200px_1fr]"> */}

          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              SEO meta description
            </label>
            <input
              value={form.seoDescription}
              onChange={(e) => updateField("seoDescription", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wide text-[#667085]">
              Author Name
            </label>
            <input
              value={form.authorname}
              onChange={(e) => updateField("authorname", e.target.value)}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-sm text-[#101828] outline-none focus:border-[#FC9C44]"
            />
          </div>
        </div>
        {/* </div> */}

        {/* RIGHT COLUMN — sidebar cards */}
        <div className="grid gap-6 self-start">
          <div className="rounded-xl border border-[#E4E7EC] p-5">
            <h3 className="mb-4 text-sm font-black text-[#06133D]">Featured image</h3>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                void handleImageFile(e.target.files?.[0]);
                e.target.value = "";
              }}
            />

            {imagePreview ? (
              <div className="relative overflow-hidden rounded-lg border border-[#E4E7EC]">
                <img
                  src={imagePreview}
                  alt={imageFile?.name}
                  className="h-28 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 px-3 py-1.5">
                  <p className="truncate text-[10px] font-bold text-white">{imageFile?.name}</p>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[10px] font-black text-white underline"
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="text-[10px] font-black text-white underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                role="button"
                tabIndex={0}
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && fileInputRef.current?.click()
                }
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  void handleImageFile(e.dataTransfer.files?.[0]);
                }}
                className="grid h-28 cursor-pointer place-items-center rounded-lg border border-dashed border-[#FC9C44] bg-[#FFF4E8] hover:bg-[#FFEBD6]"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  aria-label="Upload featured image"
                  className="mb-1 grid h-7 w-7 place-items-center rounded-full bg-[#FC9C44] text-white hover:bg-[#E88933]"
                >
                  <span className="text-sm font-black leading-none">+</span>
                </button>
                <p className="text-xs font-black text-[#C96A13]">Upload featured image</p>
                <p className="text-[10px] text-[#98A2B3]">Recommended 1200×630</p>
              </div>
            )}
          </div>

          {/* Publish settings */}
          {/* <div className="rounded-xl border border-[#E4E7EC] p-5">
            <h3 className="mb-4 text-sm font-black text-[#06133D]">Publish settings</h3>

            <p className="mb-2 text-xs font-bold text-[#667085]">Status</p>
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                onClick={() => updateField("status", "DRAFT")}
                className={`rounded-full px-4 py-1.5 text-xs font-black transition ${form.status === "DRAFT"
                  ? "bg-[#FFF4E8] text-[#C96A13]"
                  : "bg-[#F2F4F7] text-[#475467]"}`}
              >
                Draft
              </button>
              <button
                type="button"
                onClick={() => updateField("status", "PUBLISHED")}
                className={`rounded-full px-4 py-1.5 text-xs font-black transition ${form.status === "PUBLISHED"
                  ? "bg-[#FFF4E8] text-[#C96A13]"
                  : "bg-[#F2F4F7] text-[#475467]"}`}
              >
                Published
              </button>
            </div>

            <label className="mb-2 block text-xs font-bold text-[#667085]">Featured</label>
            <button
              type="button"
              onClick={() => updateField("featured", !form.featured)}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2 text-left text-xs font-black text-[#667085]"
            >
              {form.featured ? "★ Featured" : "☆ Not featured"}
            </button>
          </div> */}

          {/* Category — checkbox-list UI, single select */}
          <PostCategoryPicker
            categories={categories}
            selected={form.category}
            onSelect={(categories) => updateField("category", categories)}
            onAddCategory={handleAddCategory}
            onDeleteCategory={handleDeleteCategory}
            onCategoriesRestored={handleCategoriesRestored}
            storageKey="admin.addBlog.categories"
          />

          {/* Tags — type + Enter turns each into a removable chip */}
          <div className="rounded-xl border border-[#E4E7EC] p-5">
            <h3 className="mb-4 text-sm font-black text-[#06133D]">Tags</h3>
            <TagInput
              value={tagList}
              onChange={handleTagsChange}
              placeholder="Add tags, press Enter…"
            />
          </div>

          {/* Bottom CTA */}
          <div className="rounded-xl border border-[#FC9C44] bg-[#FFF4E8] p-5">
            <p className="text-sm font-black text-[#C96A13]">Ready to publish?</p>
            <p className="mt-1 text-xs font-bold text-[#8A5A28]">
              This will appear on the public blog page immediately.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={async () => {
                  const ok = await saveNow();
                  alert(ok ? "Draft saved." : "Could not save the draft. Try again.");
                }}
                disabled={saving}
                className="flex-1 rounded-lg border border-[#D0D5DD] bg-white py-2 text-xs font-black text-[#344054] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save as draft"}
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/admin/add-blog";
                }}
                className="flex-1 rounded-lg bg-[#FC9C44] py-2 text-xs font-black text-white"
              >
                Start a New Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
