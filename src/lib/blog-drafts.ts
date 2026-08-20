import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const blogDraftStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED"] as const;
export type BlogDraftStatus = (typeof blogDraftStatuses)[number];

export const blogDraftInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().max(300).default(""),
  slug: z.string().max(300).default(""),
  excerpt: z.string().max(2000).default(""),
  content: z.string().default(""),
  readTime: z.string().max(120).default(""),
  seotitle: z.string().max(300).default(""),
  seoDescription: z.string().max(2000).default(""),
  status: z.enum(blogDraftStatuses).default("DRAFT"),
  featured: z.boolean().default(false),
  category: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  featuredImage: z.string().nullable().optional(),
  authorname: z.string().default(" Hegxcorp Team"),
});

export type BlogDraftInput = z.infer<typeof blogDraftInputSchema>;

export type BlogDraft = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  seotitle: string;
  seoDescription: string;
  status: BlogDraftStatus;
  featured: boolean;
  category: string[];
  tags: string[];
  featuredImage: string | null;
  createdAt: string;
  updatedAt: string;
  authorname: string | null;
};

export const saveBlogDraft = createServerFn({ method: "POST" })
  .validator(blogDraftInputSchema)
  .handler(async ({ data }) => {
    const { saveBlogDraft: save } = await import("./blog-drafts.server");
    return save(data);
  });

export const listBlogDrafts = createServerFn({ method: "POST" }).handler(async () => {
  const { listBlogDrafts: list } = await import("./blog-drafts.server");
  return list();
});

export const getBlogDraft = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data }) => {
    const { getBlogDraftById } = await import("./blog-drafts.server");
    return getBlogDraftById(data.id);
  });

export const deleteBlogDraft = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data }) => {
    const { deleteBlogDraft: remove } = await import("./blog-drafts.server");
    return remove(data.id);
  });
export const listPublishedBlogDrafts = createServerFn({ method: "POST" }).handler(async () => {
  const { listPublishedBlogDrafts: list } = await import("./blog-drafts.server");
  return list();
});
