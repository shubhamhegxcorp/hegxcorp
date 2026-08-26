import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarClock,
  Eye,
  FileText,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import type { Blog } from "@/data/blogs";
import { getBlogs } from "@/lib/content/blogs";
import { deleteBlogDraft, listBlogDrafts, saveBlogDraft, type BlogDraft } from "@/lib/blog-drafts";

export const Route = createFileRoute("/admin/blog")({
  head: () => ({
    meta: [
      { title: "All Posts | Hegxcorp Admin" },
      {
        name: "description",
        content: "Private Hegxcorp admin blog post list.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminBlogPostsPage,
} as never);

type BlogPostStatus = "PUBLISHED" | "DRAFT" | "ARCHIVED";

type ManagedBlogPost = Blog & {
  adminStatus: BlogPostStatus;
  adminFeatured: boolean;
  draftId?: string;
};

function draftToBlog(draft: BlogDraft): Blog {
  return {
    id: `draft-${draft.id}`,
    slug: draft.slug,
    title: draft.title || "Untitled draft",
    excerpt: draft.excerpt,
    content: draft.content,
    category: draft.category[0] ?? "Uncategorized",
    readTime: draft.readTime,
    featuredImage: draft.featuredImage ?? "",
    author: {
      name: draft.authorname?.trim() ? draft.authorname : "Hegxcorp Team",
      role: "Editor",
    },
    publishedAt: draft.updatedAt,
    seoTitle: draft.seotitle?.trim() ? draft.seotitle : draft.title,
    seoDescription: draft.seoDescription,
    featured: draft.featured,
  };
}

const postsPerPage = 8;

const statusStyles: Record<BlogPostStatus, string> = {
  PUBLISHED: "bg-[#EAF8ED] text-[#287D3C]",
  DRAFT: "bg-[#FFF4E8] text-[#C96A13]",
  ARCHIVED: "bg-[#F2F4F7] text-[#475467]",
};

const statusLabels: Record<BlogPostStatus, string> = {
  PUBLISHED: "Published",
  DRAFT: "Draft",
  ARCHIVED: "Archived",
};

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getAuthorInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function AdminBlogPostsPage() {
  const staticPosts = useMemo(() => getBlogs(), []);
  const [drafts, setDrafts] = useState<BlogDraft[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Load server-stored drafts and merge them into the library list. Drafts
  // come first so freshly saved posts surface at the top.
  useEffect(() => {
    let active = true;
    listBlogDrafts()
      .then((rows) => {
        if (active) setDrafts(rows);
      })
      .catch((loadError) => {
        console.error("Failed to load blog drafts:", loadError);
      });
    return () => {
      active = false;
    };
  }, []);

  const sourcePosts = useMemo<Blog[]>(
    () => [...drafts.map(draftToBlog), ...staticPosts],
    [drafts, staticPosts],
  );

  // Map the synthesized blog id (`draft-<id>`) back to the raw draft id so
  // row actions (edit/view/delete) can address the real database record.
  const draftMetaByBlogId = useMemo(() => {
    const lookup: Record<string, BlogDraft> = {};
    for (const draft of drafts) {
      lookup[`draft-${draft.id}`] = draft;
    }
    return lookup;
  }, [drafts]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sourcePosts.map((post) => post.category)))],
    [sourcePosts],
  );

  // Status and featured now always come straight from the persisted draft
  // (or the static post's fixed defaults) — no local-only override, so what
  // you see here always matches what's actually saved in the database.
  const managedPosts = useMemo<ManagedBlogPost[]>(() => {
    return sourcePosts
      .map((post) => {
        const draft = draftMetaByBlogId[post.id];
        return {
          ...post,
          adminStatus: (draft?.status as BlogPostStatus) ?? "PUBLISHED",
          adminFeatured: draft?.featured ?? post.featured,
          draftId: draft?.id,
        };
      })
      .sort(
        (left, right) =>
          new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
      );
  }, [draftMetaByBlogId, sourcePosts]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return managedPosts.filter((post) => {
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [managedPosts, searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const firstVisiblePost = filteredPosts.length ? (safePage - 1) * postsPerPage + 1 : 0;
  const lastVisiblePost = Math.min(safePage * postsPerPage, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * postsPerPage,
    safePage * postsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Persists a status or featured change for a real database draft. Always
  // sends the draft's full current fields (this is an upsert — any field left
  // out would be overwritten with a blank default), only overriding the one
  // that changed.
  async function persistDraftUpdate(
    draft: BlogDraft,
    changes: Partial<Pick<BlogDraft, "status" | "featured">>,
  ) {
    setUpdatingId(draft.id);
    try {
      const updated = await saveBlogDraft({
        data: {
          id: draft.id,
          title: draft.title,
          slug: draft.slug,
          excerpt: draft.excerpt,
          content: draft.content,
          readTime: draft.readTime,
          seotitle: draft.seotitle,
          seoDescription: draft.seoDescription,
          status: changes.status ?? draft.status,
          featured: changes.featured ?? draft.featured,
          category: draft.category,
          tags: draft.tags,
          featuredImage: draft.featuredImage,
          authorname: draft.authorname ?? "",
        },
      });
      setDrafts((prev) => prev.map((d) => (d.id === draft.id ? updated : d)));
      return true;
    } catch (updateError) {
      console.error("Failed to update draft:", updateError);
      return false;
    } finally {
      setUpdatingId(null);
    }
  }

  async function handleStatusChange(post: ManagedBlogPost, status: BlogPostStatus) {
    if (!post.draftId) {
      toast.error("This demo post can't be changed here.");
      return;
    }
    const draft = drafts.find((d) => d.id === post.draftId);
    if (!draft) return;

    const ok = await persistDraftUpdate(draft, { status });
    if (ok) {
      toast.success(`Post marked as ${statusLabels[status].toLowerCase()}.`);
    } else {
      toast.error("Could not update status. Try again.");
    }
  }

  async function handleToggleFeatured(post: ManagedBlogPost) {
    if (!post.draftId) {
      toast.error("This demo post can't be changed here.");
      return;
    }
    const draft = drafts.find((d) => d.id === post.draftId);
    if (!draft) return;

    const nextFeatured = !draft.featured;
    const ok = await persistDraftUpdate(draft, { featured: nextFeatured });
    if (ok) {
      if (nextFeatured) {
        setDrafts((prev) => prev.map((d) => (d.id === draft.id ? d : { ...d, featured: false })));
      }
      toast.success("Featured setting updated.");
    } else {
      toast.error("Could not update featured status. Try again.");
    }
  }

  async function deleteDraft(draftId: string) {
    if (!window.confirm("Delete this draft permanently? This cannot be undone.")) {
      return;
    }
    try {
      await deleteBlogDraft({ data: { id: draftId } });
      setDrafts((prev) => prev.filter((draft) => draft.id !== draftId));
      toast.success("Draft deleted.");
    } catch (deleteError) {
      console.error("Failed to delete draft:", deleteError);
      toast.error("Could not delete the draft. Try again.");
    }
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      {/* Header row with New Post button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-black text-[#06133D]">Blog posts</h1>
          <p className="text-sm font-semibold text-[#667085]">
            Manage every post, published or in progress.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            // Full reload with no ?draft= param so add-blog mints a brand
            // new draft id and starts with a completely blank form.
            window.location.href = "/admin/add-blog";
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#E88933]"
        >
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 border border-[#E4E7EC] bg-white px-4 py-4">
        <div className="ml-auto flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-[#667085]">{filteredPosts.length} items</p>
        </div>
      </div>

      <div className="overflow-hidden border border-[#E4E7EC] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E4E7EC] px-5 py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#FC9C44]" />
            <h3 className="text-base font-black text-[#06133D]">Blog post library</h3>
            <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]">
              {filteredPosts.length} posts
            </span>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
            <label className="relative min-w-[230px] flex-1 sm:max-w-[360px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-lg border border-[#D0D5DD] bg-white py-2.5 pl-10 pr-3 text-sm font-semibold text-[#344054] outline-none transition focus:border-[#FC9C44] focus:ring-4 focus:ring-[#FC9C44]/10"
              />
            </label>

            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-2.5 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="grid min-h-[320px] place-items-center px-6 text-center">
            <div>
              <FileText className="mx-auto h-10 w-10 text-[#98A2B3]" />
              <h3 className="mt-4 text-lg font-black text-[#06133D]">No posts found</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#667085]">
                Clear the search or category filter to review the full blog library.
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1120px] w-full border-collapse text-left">
              <thead className="bg-[#F9FAFB] text-xs font-black uppercase tracking-[0.11em] text-[#667085]">
                <tr>
                  <th className="px-5 py-3">Post</th>
                  <th className="px-5 py-3">Author</th>
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Featured</th>
                  <th className="px-5 py-3">Published</th>
                  <th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E7EC]">
                {paginatedPosts.map((post) => {
                  const isUpdating = post.draftId != null && updatingId === post.draftId;

                  return (
                    <tr key={post.id} className="align-top transition hover:bg-[#FFF9F3]">
                      <td className="px-5 py-4">
                        <div className="flex min-w-[340px] gap-3">
                          <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-[#E4E7EC] bg-[#FFF4E8] text-[#FC9C44]">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="max-w-[360px] font-black leading-5 text-[#06133D]">
                              {post.title}
                            </p>
                            <p className="mt-2 max-w-[420px] text-sm leading-6 text-[#667085]">
                              {post.excerpt}
                            </p>
                            <p className="mt-2 text-xs font-bold text-[#98A2B3]">
                              /blog/{post.slug}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex min-w-[180px] items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#06133D] text-xs font-black text-white">
                            {getAuthorInitials(post.author.name)}
                          </span>
                          <div>
                            <p className="text-sm font-black text-[#06133D]">{post.author.name}</p>
                            <p className="text-xs font-semibold text-[#667085]">
                              {post.author.role}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs font-black text-[#475467]">
                          {post.category}
                        </span>
                        <p className="mt-3 text-xs font-bold text-[#98A2B3]">{post.readTime}</p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="grid gap-2">
                          <span
                            className={`w-fit rounded-full px-3 py-1 text-xs font-black ${statusStyles[post.adminStatus]}`}
                          >
                            {statusLabels[post.adminStatus]}
                          </span>
                          <select
                            value={post.adminStatus}
                            disabled={!post.draftId || isUpdating}
                            onChange={(event) =>
                              handleStatusChange(post, event.target.value as BlogPostStatus)
                            }
                            className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="PUBLISHED">Published</option>
                            <option value="DRAFT">Draft</option>
                            <option value="ARCHIVED">Archived</option>
                          </select>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() => handleToggleFeatured(post)}
                          disabled={!post.draftId || isUpdating}
                          aria-pressed={post.adminFeatured}
                          className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-50 ${
                            post.adminFeatured
                              ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                              : "border-[#D0D5DD] bg-white text-[#667085] hover:border-[#FC9C44]"
                          }`}
                        >
                          <Star
                            className={`h-4 w-4 ${post.adminFeatured ? "fill-[#FC9C44]" : ""}`}
                          />
                          {post.adminFeatured ? "Featured" : "Non feature"}
                        </button>
                      </td>
                      <td className="px-5 py-4">
                        <p className="flex min-w-[170px] items-center gap-2 text-sm font-semibold text-[#475467]">
                          <CalendarClock className="h-4 w-4 text-[#98A2B3]" />
                          {formatDate(post.publishedAt)}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex min-w-[150px] flex-wrap items-center gap-2">
                          {post.draftId ? (
                            <>
                              <a
                                href={`/admin/add-blog?draft=${encodeURIComponent(post.draftId)}`}
                                className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                                aria-label={`Edit ${post.title}`}
                                title="Edit"
                              >
                                <Pencil className="h-4 w-4" />
                              </a>
                              <a
                                href={`/admin/blog-preview?draft=${encodeURIComponent(post.draftId)}`}
                                className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                                aria-label={`View ${post.title}`}
                                title="View"
                              >
                                <Eye className="h-4 w-4" />
                              </a>
                              <button
                                type="button"
                                onClick={() => void deleteDraft(post.draftId!)}
                                className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-red-300 hover:text-red-600"
                                aria-label={`Delete ${post.title}`}
                                title="Delete"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </>
                          ) : (
                            <Link
                              to="/blog/$slug"
                              params={{ slug: post.slug }}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                              aria-label={`View ${post.title}`}
                              title="View (demo post)"
                            >
                              <Eye className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[#E4E7EC] px-5 py-4">
          <p className="text-sm font-semibold text-[#667085]">
            {firstVisiblePost}-{lastVisiblePost} of {filteredPosts.length} posts
          </p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous posts page"
            >
              ←
            </button>

            <span className="min-w-[78px] rounded-md border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-2 text-center text-xs font-black text-[#344054]">
              Page {safePage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              className="grid h-8 w-8 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next posts page"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="border border-[#E4E7EC] bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#FC9C44]">
              <Sparkles className="h-4 w-4" />
              Public blog source
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#667085]">
              This admin list is collected from the same blog data used by the public blog page.
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-4 py-2 text-sm font-bold text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
          >
            <Eye className="h-4 w-4" />
            Open public blog
          </Link>
        </div>
      </div>
    </section>
  );
}
