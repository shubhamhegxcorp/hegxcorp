import { c as createServerRpc } from "./createServerRpc-BQO6VWzz.mjs";
import { c as createServerFn } from "./server-DDc6VQK7.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, c as arrayType, d as booleanType, e as enumType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
const blogDraftStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED"];
const blogDraftInputSchema = objectType({
  id: stringType().optional(),
  title: stringType().max(300).default(""),
  slug: stringType().max(300).default(""),
  excerpt: stringType().max(2e3).default(""),
  content: stringType().default(""),
  readTime: stringType().max(120).default(""),
  seotitle: stringType().max(300).default(""),
  seoDescription: stringType().max(2e3).default(""),
  status: enumType(blogDraftStatuses).default("DRAFT"),
  featured: booleanType().default(false),
  category: arrayType(stringType()).default([]),
  tags: arrayType(stringType()).default([]),
  featuredImage: stringType().nullable().optional(),
  authorname: stringType().default(" Hegxcorp Team")
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
  } = await import("./blog-drafts.server-qvy8BLxg.mjs");
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
  } = await import("./blog-drafts.server-qvy8BLxg.mjs");
  return list();
});
const getBlogDraft_createServerFn_handler = createServerRpc({
  id: "983218b694621fd4275bb2abecf27833c39f922ac3767b7fbddfb391a14430bb",
  name: "getBlogDraft",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => getBlogDraft.__executeServer(opts));
const getBlogDraft = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1)
})).handler(getBlogDraft_createServerFn_handler, async ({
  data
}) => {
  const {
    getBlogDraftById
  } = await import("./blog-drafts.server-qvy8BLxg.mjs");
  return getBlogDraftById(data.id);
});
const deleteBlogDraft_createServerFn_handler = createServerRpc({
  id: "b8a1f8b38c58c62ef64d82022b91f1c57107fa0816da76d5e4668dd2a2b59e6e",
  name: "deleteBlogDraft",
  filename: "src/lib/blog-drafts.ts"
}, (opts) => deleteBlogDraft.__executeServer(opts));
const deleteBlogDraft = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1)
})).handler(deleteBlogDraft_createServerFn_handler, async ({
  data
}) => {
  const {
    deleteBlogDraft: remove
  } = await import("./blog-drafts.server-qvy8BLxg.mjs");
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
  } = await import("./blog-drafts.server-qvy8BLxg.mjs");
  return list();
});
export {
  deleteBlogDraft_createServerFn_handler,
  getBlogDraft_createServerFn_handler,
  listBlogDrafts_createServerFn_handler,
  listPublishedBlogDrafts_createServerFn_handler,
  saveBlogDraft_createServerFn_handler
};
