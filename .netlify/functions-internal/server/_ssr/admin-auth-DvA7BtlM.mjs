import { c as createServerRpc } from "./createServerRpc-BpNztQyT.mjs";
import { c as createServerFn } from "./server-BWEBlKlL.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
const adminLoginSchema = objectType({
  email: stringType().trim().email("Enter a valid email address").max(200),
  password: stringType().min(1, "Enter your password").max(200)
});
const getAdminSession_createServerFn_handler = createServerRpc({
  id: "5657035a0ee6556f722dba234784a0e3c2460389c82b35f94de2f5440bef5f56",
  name: "getAdminSession",
  filename: "src/lib/admin-auth.ts"
}, (opts) => getAdminSession.__executeServer(opts));
const getAdminSession = createServerFn({
  method: "GET"
}).handler(getAdminSession_createServerFn_handler, async () => {
  const {
    readAdminSession
  } = await import("./admin-auth.server-DMVuAZKi.mjs");
  return readAdminSession();
});
const loginAdmin_createServerFn_handler = createServerRpc({
  id: "b30f690c7c4db6ee5c0d491cd43f1c8eb07322a9bac537eba1f13ddbb4f26745",
  name: "loginAdmin",
  filename: "src/lib/admin-auth.ts"
}, (opts) => loginAdmin.__executeServer(opts));
const loginAdmin = createServerFn({
  method: "POST"
}).validator(adminLoginSchema).handler(loginAdmin_createServerFn_handler, async ({
  data
}) => {
  const {
    createAdminSession
  } = await import("./admin-auth.server-DMVuAZKi.mjs");
  return createAdminSession(data.email, data.password);
});
const logoutAdmin_createServerFn_handler = createServerRpc({
  id: "714b8bdd6e41622ea8c921b2022f0a7efd279b2c04f4ab839072930e553f0a5c",
  name: "logoutAdmin",
  filename: "src/lib/admin-auth.ts"
}, (opts) => logoutAdmin.__executeServer(opts));
const logoutAdmin = createServerFn({
  method: "POST"
}).handler(logoutAdmin_createServerFn_handler, async () => {
  const {
    destroyAdminSession
  } = await import("./admin-auth.server-DMVuAZKi.mjs");
  return destroyAdminSession();
});
export {
  getAdminSession_createServerFn_handler,
  loginAdmin_createServerFn_handler,
  logoutAdmin_createServerFn_handler
};
