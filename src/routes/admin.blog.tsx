import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  FileText,
  Pencil,
  Search,
  Sparkles,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import type { Blog } from "@/data/blogs";
import { getBlogs } from "@/lib/content/blogs";
import { deleteBlogDraft, listBlogDrafts, type BlogDraft } from "@/lib/blog-drafts";

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
type BlogPostFilter = BlogPostStatus | "ALL" | "FEATURED";

type ManagedBlogPost = Blog & {
  adminStatus: BlogPostStatus;
  adminFeatured: boolean;
  draftId?: string;
};

const draftAuthor = {
  name: "Hegxcorp Admin",
  role: "Editor",
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
    author: draftAuthor,
    publishedAt: draft.updatedAt,
    seoTitle: draft.title,
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

function getInitialStatus(post: Blog): BlogPostStatus {
  return post.publishedAt ? "PUBLISHED" : "DRAFT";
}

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

  // Map the synthesized blog id (`draft-<id>`) back to the raw draft id and its
  // real status so row actions (edit/preview/delete) can address the server
  // record and the status column reflects the stored value.
  const draftMetaByBlogId = useMemo(() => {
    const lookup: Record<string, { id: string; status: BlogPostStatus }> = {};
    for (const draft of drafts) {
      lookup[`draft-${draft.id}`] = { id: draft.id, status: draft.status };
    }
    return lookup;
  }, [drafts]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDateRange, setSelectedDateRange] = useState("All");
  const [selectedBulkAction, setSelectedBulkAction] = useState("");
  const [activeFilter, setActiveFilter] = useState<BlogPostFilter>("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [postState, setPostState] = useState<
    Record<string, { status: BlogPostStatus; featured: boolean }>
  >(() =>
    Object.fromEntries(
      sourcePosts.map((post) => [
        post.id,
        {
          status: getInitialStatus(post),
          featured: post.featured,
        },
      ]),
    ),
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sourcePosts.map((post) => post.category)))],
    [sourcePosts],
  );

  const managedPosts = useMemo<ManagedBlogPost[]>(() => {
    return sourcePosts
      .map((post) => {
        const draftMeta = draftMetaByBlogId[post.id];
        return {
          ...post,
          adminStatus: postState[post.id]?.status ?? draftMeta?.status ?? getInitialStatus(post),
          adminFeatured: postState[post.id]?.featured ?? post.featured,
          draftId: draftMeta?.id,
        };
      })
      .sort(
        (left, right) =>
          new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
      );
  }, [draftMetaByBlogId, postState, sourcePosts]);

  const stats = useMemo(
    () => ({
      all: managedPosts.length,
      published: managedPosts.filter((post) => post.adminStatus === "PUBLISHED").length,
      drafts: managedPosts.filter((post) => post.adminStatus === "DRAFT").length,
      archived: managedPosts.filter((post) => post.adminStatus === "ARCHIVED").length,
      featured: managedPosts.filter((post) => post.adminFeatured).length,
    }),
    [managedPosts],
  );

  const dateFilteredPosts = useMemo(() => {
    const now = Date.now();
    const ranges: Record<string, number> = {
      "7": 7 * 24 * 60 * 60 * 1000,
      "30": 30 * 24 * 60 * 60 * 1000,
      "90": 90 * 24 * 60 * 60 * 1000,
    };

    if (selectedDateRange === "All") {
      return managedPosts;
    }

    const range = ranges[selectedDateRange];
    return managedPosts.filter((post) => {
      const publishedTime = new Date(post.publishedAt).getTime();
      return Number.isFinite(publishedTime) && now - publishedTime <= range;
    });
  }, [managedPosts, selectedDateRange]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return dateFilteredPosts.filter((post) => {
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      const matchesStatus =
        activeFilter === "ALL" ||
        (activeFilter === "FEATURED" && post.adminFeatured) ||
        post.adminStatus === activeFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [activeFilter, dateFilteredPosts, searchQuery, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const firstVisiblePost = filteredPosts.length ? (safePage - 1) * postsPerPage + 1 : 0;
  const lastVisiblePost = Math.min(safePage * postsPerPage, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * postsPerPage,
    safePage * postsPerPage,
  );

  const filterTabs: Array<{ id: BlogPostFilter; label: string; count: number }> = [
    // { id: "ALL", label: "All", count: stats.all },
    // { id: "PUBLISHED", label: "Published", count: stats.published },
    // { id: "DRAFT", label: "Drafts", count: stats.drafts },
    // { id: "ARCHIVED", label: "Archived", count: stats.archived },
    // { id: "FEATURED", label: "Featured", count: stats.featured },
  ];

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery, selectedCategory, selectedDateRange]);

  function updatePostStatus(postId: string, status: BlogPostStatus) {
    setPostState((current) => ({
      ...current,
      [postId]: {
        status,
        featured: current[postId]?.featured ?? false,
      },
    }));
    toast.success(`Post marked as ${statusLabels[status].toLowerCase()}.`);
  }

  function toggleFeatured(postId: string, currentStatus: BlogPostStatus) {
    setPostState((current) => {
      const nextFeatured = !(current[postId]?.featured ?? false);

      return {
        ...current,
        [postId]: {
          status: current[postId]?.status ?? currentStatus,
          featured: nextFeatured,
        },
      };
    });
    toast.success("Featured setting updated.");
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

  function applyBulkAction(action = selectedBulkAction) {
    if (!action) {
      toast.info("Choose a bulk action first.");
      return;
    }

    if (filteredPosts.length === 0) {
      toast.info("No visible posts match this filter.");
      return;
    }

    const visiblePostIds = new Set(filteredPosts.map((post) => post.id));

    setPostState((current) => {
      const nextState = { ...current };

      for (const post of sourcePosts) {
        if (!visiblePostIds.has(post.id)) {
          continue;
        }

        const currentPostState = nextState[post.id] ?? {
          status: getInitialStatus(post),
          featured: post.featured,
        };

        if (action === "PUBLISHED") {
          nextState[post.id] = { ...currentPostState, status: "PUBLISHED" };
        }

        if (action === "DRAFT") {
          nextState[post.id] = { ...currentPostState, status: "DRAFT" };
        }

        if (action === "ARCHIVED") {
          nextState[post.id] = { ...currentPostState, status: "ARCHIVED" };
        }

        if (action === "FEATURED") {
          nextState[post.id] = { ...currentPostState, featured: true };
        }

        if (action === "UNFEATURED") {
          nextState[post.id] = { ...currentPostState, featured: false };
        }
      }

      return nextState;
    });

    toast.success(`Bulk action applied to ${filteredPosts.length} visible posts.`);
    setSelectedBulkAction("");
  }

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDateRange("All");
    setActiveFilter("ALL");
    setCurrentPage(1);
  }

  function getTabClass(tabId: BlogPostFilter) {
    const isActive = activeFilter === tabId;

    if (tabId === "ALL") {
      return isActive
        ? "border-[#06133D] bg-[#06133D] text-white shadow-md"
        : "border-[#E4E7EC] bg-white text-[#101828]";
    }

    const styles: Record<Exclude<BlogPostFilter, "ALL">, string> = {
      PUBLISHED: "border-[#B8E0C0] bg-[#F0FBF3] text-[#101828]",
      DRAFT: "border-[#FED7AA] bg-[#FFF7ED] text-[#101828]",
      ARCHIVED: "border-[#D0D5DD] bg-[#F2F4F7] text-[#101828]",
      FEATURED: "border-[#B9D3FF] bg-[#EAF2FF] text-[#101828]",
    };

    return `${styles[tabId]} ${isActive ? "ring-2 ring-[#06133D]/15 shadow-md" : ""}`;
  }

  return (
    <section className="grid gap-6 px-6 py-8 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-5">
        {filterTabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            aria-pressed={activeFilter === tab.id}
            className={`border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${getTabClass(tab.id)}`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-[0.12em] ${activeFilter === tab.id && tab.id === "ALL" ? "text-white/70" : "text-[#667085]"
                }`}
            >
              {tab.label}
            </p>
            <p
              className={`mt-2 text-3xl font-black ${activeFilter === tab.id && tab.id === "ALL" ? "text-white" : "text-[#06133D]"
                }`}
            >
              {tab.count}
            </p>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 border border-[#E4E7EC] bg-white px-4 py-4">
        {/* <select
          value={selectedBulkAction}
          onChange={(event) => {
            const action = event.target.value;
            setSelectedBulkAction(action);
            if (action) {
              applyBulkAction(action);
            }
          }}
          className="min-h-10 min-w-[160px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]"
          aria-label="Bulk actions"
        >
          <option value="">Bulk actions</option>
          <option value="PUBLISHED">Publish visible posts</option>
          <option value="DRAFT">Move visible to draft</option>
          <option value="ARCHIVED">Archive visible posts</option>
          <option value="FEATURED">Feature visible posts</option>
          <option value="UNFEATURED">Remove visible featured</option>
        </select> */}

        {/* <select
          value={selectedDateRange}
          onChange={(event) => setSelectedDateRange(event.target.value)}
          className="min-h-10 min-w-[150px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]"
          aria-label="Date filter"
        >
          <option value="All">All dates</option>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select> */}

        {/* <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="min-h-10 min-w-[170px] rounded-lg border border-[#D0D5DD] bg-white px-3 text-sm font-bold text-[#344054] outline-none transition hover:border-[#FC9C44] focus:border-[#FC9C44]"
          aria-label="Category filter"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All Categories" : category}
            </option>
          ))}
        </select> */}

        {/* <button
          type="button"
          onClick={() => {
            setCurrentPage(1);
            toast.success("Filters applied.");
          }}
          className="min-h-10 rounded-lg border border-[#FC9C44] bg-white px-4 text-sm font-black text-[#FC9C44] transition hover:bg-[#FC9C44] hover:text-white"
        >
          Filter
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="min-h-10 rounded-lg border border-[#D0D5DD] bg-white px-4 text-sm font-bold text-[#667085] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
        >
          Clear
        </button> */}

        <div className="ml-auto flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-[#667085]">{filteredPosts.length} items</p>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              disabled={safePage === 1}
              className="grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="First posts page"
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous posts page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: Math.min(totalPages, 3) }).map((_, index) => {
              const page = index + 1;

              return (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 min-w-9 rounded-md border px-3 text-sm font-black transition ${safePage === page
                      ? "border-[#FC9C44] bg-white text-[#FC9C44]"
                      : "border-[#D0D5DD] bg-white text-[#344054] hover:border-[#FC9C44] hover:text-[#FC9C44]"
                    }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              className="grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next posts page"
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(totalPages)}
              disabled={safePage === totalPages}
              className="grid h-9 w-9 place-items-center rounded-md border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Last posts page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
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
                Clear the search, category, or status filter to review the full blog library.
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
                {paginatedPosts.map((post) => (
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
                          <p className="mt-2 text-xs font-bold text-[#98A2B3]">/blog/{post.slug}</p>
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
                          <p className="text-xs font-semibold text-[#667085]">{post.author.role}</p>
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
                          onChange={(event) =>
                            updatePostStatus(post.id, event.target.value as BlogPostStatus)
                          }
                          className="rounded-lg border border-[#D0D5DD] bg-white px-3 py-2 text-sm font-bold text-[#344054] outline-none transition focus:border-[#FC9C44]"
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
                        onClick={() => toggleFeatured(post.id, post.adminStatus)}
                        aria-pressed={post.adminFeatured}
                        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-black transition ${post.adminFeatured
                            ? "border-[#FC9C44] bg-[#FFF4E8] text-[#C96A13]"
                            : "border-[#D0D5DD] bg-white text-[#667085] hover:border-[#FC9C44]"
                          }`}
                      >
                        <Star className={`h-4 w-4 ${post.adminFeatured ? "fill-[#FC9C44]" : ""}`} />
                        {post.adminFeatured ? "Featured" : "Not featured"}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <p className="flex min-w-[170px] items-center gap-2 text-sm font-semibold text-[#475467]">
                        <CalendarClock className="h-4 w-4 text-[#98A2B3]" />
                        {formatDate(post.publishedAt)}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex min-w-[190px] flex-wrap items-center gap-2">
                        {post.draftId ? (
                          <>
                            <a
                              href={`/admin/add-blog?draft=${encodeURIComponent(post.draftId)}`}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                              aria-label={`Edit ${post.title}`}
                              title="Edit draft"
                            >
                              <Pencil className="h-4 w-4" />
                            </a>
                            <a
                              href={`/admin/blog-preview?draft=${encodeURIComponent(post.draftId)}`}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                              aria-label={`Preview ${post.title}`}
                              title="Preview draft"
                            >
                              <Eye className="h-4 w-4" />
                            </a>
                            <button
                              type="button"
                              onClick={() => void deleteDraft(post.draftId!)}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-red-300 hover:text-red-600"
                              aria-label={`Delete ${post.title}`}
                              title="Delete draft"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/blog/$slug"
                              params={{ slug: post.slug }}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                              aria-label={`View ${post.title}`}
                            >
                              <Eye className="h-4 w-4" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => updatePostStatus(post.id, "PUBLISHED")}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-green-300 hover:text-green-700"
                              aria-label={`Publish ${post.title}`}
                            >
                              <CheckCircle2 className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => updatePostStatus(post.id, "DRAFT")}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-[#FC9C44] hover:text-[#FC9C44]"
                              aria-label={`Move ${post.title} to draft`}
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => updatePostStatus(post.id, "ARCHIVED")}
                              className="grid h-9 w-9 place-items-center rounded-lg border border-[#D0D5DD] bg-white text-[#344054] transition hover:border-red-300 hover:text-red-600"
                              aria-label={`Archive ${post.title}`}
                            >
                              <Archive className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
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
              <ChevronLeft className="h-4 w-4" />
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
              <ChevronRight className="h-4 w-4" />
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
