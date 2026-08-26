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
const getWebsiteSection_createServerFn_handler = createServerRpc({
  id: "096eae861181842f6b9c58fdf329b679903d62e276f435e2d50c4de2148abd8f",
  name: "getWebsiteSection",
  filename: "src/lib/website-content.ts"
}, (opts) => getWebsiteSection.__executeServer(opts));
const getWebsiteSection = createServerFn({
  method: "POST"
}).validator(z.object({
  key: z.string()
})).handler(getWebsiteSection_createServerFn_handler, async ({
  data
}) => {
  const {
    getWebsiteSection: get
  } = await import("./website-content.server-DMtLWwi3.js");
  return get(data.key);
});
const saveWebsiteSection_createServerFn_handler = createServerRpc({
  id: "bd287953a9b9b285a2e93c5ade22438047a6fd33d89b4d08447dc39f567442b9",
  name: "saveWebsiteSection",
  filename: "src/lib/website-content.ts"
}, (opts) => saveWebsiteSection.__executeServer(opts));
const saveWebsiteSection = createServerFn({
  method: "POST"
}).validator(z.object({
  key: z.string(),
  value: z.any()
})).handler(saveWebsiteSection_createServerFn_handler, async ({
  data
}) => {
  const {
    saveWebsiteSection: save
  } = await import("./website-content.server-DMtLWwi3.js");
  return save(data.key, data.value);
});
const listWebsiteSections_createServerFn_handler = createServerRpc({
  id: "5426afc6adc66c89bf460964cdef01750ec1b7318a5ba8b72615e21c932f3d44",
  name: "listWebsiteSections",
  filename: "src/lib/website-content.ts"
}, (opts) => listWebsiteSections.__executeServer(opts));
const listWebsiteSections = createServerFn({
  method: "POST"
}).handler(listWebsiteSections_createServerFn_handler, async () => {
  const {
    listWebsiteSections: list
  } = await import("./website-content.server-DMtLWwi3.js");
  return list();
});
export {
  getWebsiteSection_createServerFn_handler,
  listWebsiteSections_createServerFn_handler,
  saveWebsiteSection_createServerFn_handler
};
