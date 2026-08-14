import { blogs } from "@/data/blogs";
import type { Blog } from "@/data/blogs";
import { listBlogDrafts } from "@/lib/blog-drafts";
import type { BlogDraft } from "@/lib/blog-drafts";

export function getBlogs(): Blog[] {
  return blogs;
}

export function getFeaturedBlogs(): Blog[] {
  return blogs.filter((b) => b.featured);
}

export function getBlogBySlug(slug: string): Blog | null {
  return blogs.find((b) => b.slug === slug) ?? null;
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
    seoTitle: draft.title,
    seoDescription: draft.seoDescription,
    featured: draft.featured,
  };
}

// Fetches published posts from the database and merges them with the
// hardcoded demo posts. Use this on the public /blog page instead of
// getBlogs() so real published posts actually show up.
export async function getPublishedBlogs(): Promise<Blog[]> {
  const drafts = await listBlogDrafts();
  const published = drafts
    .filter((d) => d.status === "PUBLISHED")
    .map(draftToBlogCard);

  return [...published, ...blogs]; // real posts + demo posts together
}

export async function getPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  const all = await getPublishedBlogs();
  return all.find((b) => b.slug === slug) ?? null;
}
