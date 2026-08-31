import { c as createSsrRpc } from "./createSsrRpc-ET3YHIm-.mjs";
import { c as createServerFn } from "./server-DDc6VQK7.mjs";
import { o as objectType, s as stringType, c as arrayType, d as booleanType, e as enumType } from "../_libs/zod.mjs";
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
const saveBlogDraft = createServerFn({
  method: "POST"
}).validator(blogDraftInputSchema).handler(createSsrRpc("0e1779af80c894c113b1721c46d6885c222b484c508961600836e2d830b45254"));
const listBlogDrafts = createServerFn({
  method: "POST"
}).handler(createSsrRpc("f17c332ab77bfe4879fdbbf26b86d27d530df7b6fdc206532e1930e4719e95bc"));
const getBlogDraft = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1)
})).handler(createSsrRpc("983218b694621fd4275bb2abecf27833c39f922ac3767b7fbddfb391a14430bb"));
const deleteBlogDraft = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1)
})).handler(createSsrRpc("b8a1f8b38c58c62ef64d82022b91f1c57107fa0816da76d5e4668dd2a2b59e6e"));
const listPublishedBlogDrafts = createServerFn({
  method: "POST"
}).handler(createSsrRpc("28b4a06d71f0eb130ad12a5fe7db87b119db7c6b041b1d063bf44d0f91630763"));
export {
  listBlogDrafts as a,
  blogDraftStatuses as b,
  deleteBlogDraft as d,
  getBlogDraft as g,
  listPublishedBlogDrafts as l,
  saveBlogDraft as s
};
