import { blogs } from "@/data/blogs";
import type { Blog } from "@/data/blogs";
import type { BlogDraft } from "@/lib/blog-drafts";
import {
  listPublishedBlogDrafts,
  getPublishedBlogDraftBySlug as fetchPublishedDraftBySlug,
} from "@/lib/blog-drafts";

export function getBlogs(): Blog[] {
  return blogs;
}

export function getFeaturedBlogs(): Blog[] {
  return blogs.filter((b) => b.featured);
}

export function getBlogBySlug(slug: string): Blog | null {
  if (!slug) return null;
  const clean = slug.trim().toLowerCase();
  return blogs.find((b) => b.slug === slug || b.slug.toLowerCase() === clean) ?? null;
}

export function getBlogsByCategory(category: string): Blog[] {
  if (!category || category.toLowerCase() === "all") {
    return blogs;
  }
  return blogs.filter((b) => b.category.toLowerCase() === category.toLowerCase());
}

function draftToBlogCard(draft: BlogDraft): Blog {
  return {
    id: `draft-${draft.id}`,
    slug: draft.slug,
    title: draft.title,
    excerpt: draft.excerpt,
    content: draft.content,
    category: draft.category[0] ?? "Uncategorized",
    readTime: draft.readTime,
    featuredImage: draft.featuredImage ?? "",
    previewImage: draft.featuredImage ?? "",
    author: { name: draft.authorname ?? "Hegxcorp Team", role: "Editor" },
    publishedAt: draft.updatedAt,
    seoTitle: draft.seotitle?.trim() ? draft.seotitle : draft.title,
    seoDescription: draft.seoDescription,
    featured: draft.featured,
  };
}

// Fetches published posts from the database and merges them with the
// hardcoded demo posts. Use this on the public /blog page instead of
// getBlogs() so real published posts actually show up.
export async function getPublishedBlogs(): Promise<Blog[]> {
  try {
    const drafts = await listPublishedBlogDrafts();
    const published = (drafts || []).map(draftToBlogCard);
    return [...published, ...blogs];
  } catch (error) {
    console.error(
      "Failed to load published blogs from database, falling back to static blogs:",
      error,
    );
    return blogs;
  }
}

export async function getPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;
  const cleanSlug = slug.trim();
  const lowerSlug = cleanSlug.toLowerCase();

  // 1. Check static blogs first (fast, completely resilient to database downtime)
  const staticMatch = blogs.find((b) => b.slug === cleanSlug || b.slug.toLowerCase() === lowerSlug);
  if (staticMatch) {
    return staticMatch;
  }

  // 2. Query database for published dynamic post
  try {
    const draft = await fetchPublishedDraftBySlug({ data: { slug: cleanSlug } });
    if (draft) {
      return draftToBlogCard(draft);
    }
  } catch (error) {
    console.error(`Failed to fetch published blog draft for slug "${cleanSlug}":`, error);
  }

  // 3. Fallback: check full list in case of slug normalization quirks
  try {
    const all = await getPublishedBlogs();
    return all.find((b) => b.slug === cleanSlug || b.slug.toLowerCase() === lowerSlug) ?? null;
  } catch {
    return null;
  }
}
