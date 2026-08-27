import { c as createServerRpc } from "./createServerRpc-DIBZHYh5.mjs";
import { c as createServerFn } from "./server-B1L2_7yQ.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { u as unionType, s as stringType, n as numberType, d as booleanType, f as nullType, o as objectType, r as recordType } from "../_libs/zod.mjs";
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
const visitorEventValueSchema = unionType([stringType(), numberType(), booleanType(), nullType()]);
const visitorEventInputSchema = objectType({
  visitorId: stringType().min(1),
  eventName: stringType().min(1),
  path: stringType().min(1),
  pageTitle: stringType().optional(),
  referrer: stringType().optional(),
  params: recordType(visitorEventValueSchema).default({}),
  userAgent: stringType().optional()
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
  } = await import("./visitor-events.server-m9FOLQBN.mjs");
  return createVisitorEvent(data);
});
export {
  saveVisitorEvent_createServerFn_handler
};
