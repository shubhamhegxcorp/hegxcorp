import { c as createServerRpc } from "./createServerRpc-ZzyE7byC.js";
import { c as createServerFn } from "./server-yv7ZiuMh.js";
import * as z from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
const blogDraftStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED"];
const blogDraftInputSchema = z.object({
  id: z.string().optional(),
  title: z.string().max(300).default(""),
  slug: z.string().max(300).default(""),
  excerpt: z.string().max(2e3).default(""),
  content: z.string().default(""),
  readTime: z.string().max(120).default(""),
  seotitle: z.string().max(300).default(""),
  seoDescription: z.string().max(2e3).default(""),
  status: z.enum(blogDraftStatuses).default("DRAFT"),
  featured: z.boolean().default(false),
  category: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  featuredImage: z.string().nullable().optional(),
  authorname: z.string().default(" Hegxcorp Team")
});
const saveBlogDraft_createServerFn_handler = createServerRpc({
  id: "0e1779af80c894c113b1721c46d6885c222b484c508961600836e2d830b45254",
  name: "saveBlogDraft",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => saveBlogDraft.__executeServer(opts));
const saveBlogDraft = createServerFn({
  method: "POST"
}).validator(blogDraftInputSchema).handler(saveBlogDraft_createServerFn_handler, async ({
  data
}) => {
  const {
    saveBlogDraft: save
  } = await import("./blog-drafts.server-CCZtesrK.js");
  return save(data);
});
const listBlogDrafts_createServerFn_handler = createServerRpc({
  id: "f17c332ab77bfe4879fdbbf26b86d27d530df7b6fdc206532e1930e4719e95bc",
  name: "listBlogDrafts",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => listBlogDrafts.__executeServer(opts));
const listBlogDrafts = createServerFn({
  method: "POST"
}).handler(listBlogDrafts_createServerFn_handler, async () => {
  const {
    listBlogDrafts: list
  } = await import("./blog-drafts.server-CCZtesrK.js");
  return list();
});
const getBlogDraft_createServerFn_handler = createServerRpc({
  id: "983218b694621fd4275bb2abecf27833c39f922ac3767b7fbddfb391a14430bb",
  name: "getBlogDraft",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => getBlogDraft.__executeServer(opts));
const getBlogDraft = createServerFn({
  method: "POST"
}).validator(z.object({
  id: z.string().min(1)
})).handler(getBlogDraft_createServerFn_handler, async ({
  data
}) => {
  const {
    getBlogDraftById
  } = await import("./blog-drafts.server-CCZtesrK.js");
  return getBlogDraftById(data.id);
});
const deleteBlogDraft_createServerFn_handler = createServerRpc({
  id: "b8a1f8b38c58c62ef64d82022b91f1c57107fa0816da76d5e4668dd2a2b59e6e",
  name: "deleteBlogDraft",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => deleteBlogDraft.__executeServer(opts));
const deleteBlogDraft = createServerFn({
  method: "POST"
}).validator(z.object({
  id: z.string().min(1)
})).handler(deleteBlogDraft_createServerFn_handler, async ({
  data
}) => {
  const {
    deleteBlogDraft: remove
  } = await import("./blog-drafts.server-CCZtesrK.js");
  return remove(data.id);
});
const listPublishedBlogDrafts_createServerFn_handler = createServerRpc({
  id: "28b4a06d71f0eb130ad12a5fe7db87b119db7c6b041b1d063bf44d0f91630763",
  name: "listPublishedBlogDrafts",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => listPublishedBlogDrafts.__executeServer(opts));
const listPublishedBlogDrafts = createServerFn({
  method: "POST"
}).handler(listPublishedBlogDrafts_createServerFn_handler, async () => {
  const {
    listPublishedBlogDrafts: list
  } = await import("./blog-drafts.server-CCZtesrK.js");
  return list();
});
export {
  deleteBlogDraft_createServerFn_handler,
  getBlogDraft_createServerFn_handler,
  listBlogDrafts_createServerFn_handler,
  listPublishedBlogDrafts_createServerFn_handler,
  saveBlogDraft_createServerFn_handler
};
