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
const visitorEventValueSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const visitorEventInputSchema = z.object({
  visitorId: z.string().min(1),
  eventName: z.string().min(1),
  path: z.string().min(1),
  pageTitle: z.string().optional(),
  referrer: z.string().optional(),
  params: z.record(visitorEventValueSchema).default({}),
  userAgent: z.string().optional()
});
const saveVisitorEvent_createServerFn_handler = createServerRpc({
  id: "83f6aed03b3ca362ab36ece6f2445ae8c877362afd4e531cd65e59875a74e12f",
  name: "saveVisitorEvent",
  filename: "src/lib/visitor-events.ts"
}, (opts) => saveVisitorEvent.__executeServer(opts));
const saveVisitorEvent = createServerFn({
  method: "POST"
}).validator(visitorEventInputSchema).handler(saveVisitorEvent_createServerFn_handler, async ({
  data
}) => {
  const {
    createVisitorEvent
  } = await import("./visitor-events.server-m9FOLQBN.js");
  return createVisitorEvent(data);
});
export {
  saveVisitorEvent_createServerFn_handler
};
