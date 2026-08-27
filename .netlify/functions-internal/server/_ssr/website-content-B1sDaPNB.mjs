import { c as createServerRpc } from "./createServerRpc-Cabk98qx.mjs";
import { c as createServerFn } from "./server-CykgQuO0.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, b as anyType } from "../_libs/zod.mjs";
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
const getWebsiteSection_createServerFn_handler = createServerRpc({
  id: "096eae861181842f6b9c58fdf329b679903d62e276f435e2d50c4de2148abd8f",
  name: "getWebsiteSection",
  filename: "src/lib/website-content.ts"
}, (opts) => getWebsiteSection.__executeServer(opts));
const getWebsiteSection = createServerFn({
  method: "POST"
}).validator(objectType({
  key: stringType()
})).handler(getWebsiteSection_createServerFn_handler, async ({
  data
}) => {
  const {
    getWebsiteSection: get
  } = await import("./website-content.server-C466bgYS.mjs");
  return get(data.key);
});
const saveWebsiteSection_createServerFn_handler = createServerRpc({
  id: "bd287953a9b9b285a2e93c5ade22438047a6fd33d89b4d08447dc39f567442b9",
  name: "saveWebsiteSection",
  filename: "src/lib/website-content.ts"
}, (opts) => saveWebsiteSection.__executeServer(opts));
const saveWebsiteSection = createServerFn({
  method: "POST"
}).validator(objectType({
  key: stringType(),
  value: anyType()
})).handler(saveWebsiteSection_createServerFn_handler, async ({
  data
}) => {
  const {
    saveWebsiteSection: save
  } = await import("./website-content.server-C466bgYS.mjs");
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
  } = await import("./website-content.server-C466bgYS.mjs");
  return list();
});
export {
  getWebsiteSection_createServerFn_handler,
  listWebsiteSections_createServerFn_handler,
  saveWebsiteSection_createServerFn_handler
};
