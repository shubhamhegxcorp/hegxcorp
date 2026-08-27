import { c as createServerRpc } from "./createServerRpc-Cabk98qx.mjs";
import { c as createServerFn } from "./server-CykgQuO0.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
const listAdFunnelReport_createServerFn_handler = createServerRpc({
  id: "f08ca2ced5afa418ebc61986ca8a389f8d75019bdfd71cc709c3f0a0e806a15b",
  name: "listAdFunnelReport",
  filename: "src/lib/ad-funnel.ts"
}, (opts) => listAdFunnelReport.__executeServer(opts));
const listAdFunnelReport = createServerFn({
  method: "POST"
}).handler(listAdFunnelReport_createServerFn_handler, async () => {
  const {
    listSavedAdFunnelReport
  } = await import("./ad-funnel.server-DysMX5sT.mjs");
  return listSavedAdFunnelReport();
});
export {
  listAdFunnelReport_createServerFn_handler
};
