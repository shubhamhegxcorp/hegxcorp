import { blogs, Blog } from "@/data/blogs";

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
