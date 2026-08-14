import { c as createServerRpc } from "./createServerRpc-wR5qPLW8.js";
import { c as createServerFn } from "./server-Bg4GKRDW.js";
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
  } = await import("./ad-funnel.server-DRUXSdQ-.js");
  return listSavedAdFunnelReport();
});
export {
  listAdFunnelReport_createServerFn_handler
};
