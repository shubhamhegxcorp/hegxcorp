import { c as createServerRpc } from "./createServerRpc-BrLXtsiI.js";
import { c as createServerFn } from "./server-D_LdMuXC.js";
import * as z from "zod";
import { i as inquiryStatuses } from "./contact-inquiries-D8v4ql2R.js";
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
const growthAuditInquiryInputSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name"
  }),
  email: z.string().email({
    message: "Please enter a valid business email"
  }),
  website: z.string().min(4, {
    message: "Please enter your website"
  }),
  revenueRange: z.string().min(1, {
    message: "Please select your annual revenue range"
  }),
  goal: z.string().min(1, {
    message: "Please select your primary growth target"
  })
});
const submitGrowthAuditInquiry_createServerFn_handler = createServerRpc({
  id: "0ddfc30b57f5fdc4738ee0434dff6b90e395d964e15a36b156b349ee83673a67",
  name: "submitGrowthAuditInquiry",
  filename: "src/lib/growth-audit-inquiries.ts"
}, (opts) => submitGrowthAuditInquiry.__executeServer(opts));
const submitGrowthAuditInquiry = createServerFn({
  method: "POST"
}).validator(growthAuditInquiryInputSchema).handler(submitGrowthAuditInquiry_createServerFn_handler, async ({
  data
}) => {
  const {
    createGrowthAuditInquiry
  } = await import("./growth-audit-inquiries.server-CK6hVU2m.js");
  return createGrowthAuditInquiry(data);
});
const listGrowthAuditInquiries_createServerFn_handler = createServerRpc({
  id: "0a749c920f3ff82cb75ca65d248a3d0005331af64fb4b47bd0b4248ba2986b34",
  name: "listGrowthAuditInquiries",
  filename: "src/lib/growth-audit-inquiries.ts"
}, (opts) => listGrowthAuditInquiries.__executeServer(opts));
const listGrowthAuditInquiries = createServerFn({
  method: "POST"
}).handler(listGrowthAuditInquiries_createServerFn_handler, async () => {
  const {
    listSavedGrowthAuditInquiries
  } = await import("./growth-audit-inquiries.server-CK6hVU2m.js");
  return listSavedGrowthAuditInquiries();
});
const updateGrowthAuditInquiryStatus_createServerFn_handler = createServerRpc({
  id: "52de78cfc2ef0447325f4709a52d1693596e35786b45728b298c52f041d7fb95",
  name: "updateGrowthAuditInquiryStatus",
  filename: "src/lib/growth-audit-inquiries.ts"
}, (opts) => updateGrowthAuditInquiryStatus.__executeServer(opts));
const updateGrowthAuditInquiryStatus = createServerFn({
  method: "POST"
}).validator(z.object({
  id: z.string().min(1),
  status: z.enum(inquiryStatuses)
})).handler(updateGrowthAuditInquiryStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    updateSavedGrowthAuditInquiryStatus
  } = await import("./growth-audit-inquiries.server-CK6hVU2m.js");
  return updateSavedGrowthAuditInquiryStatus(data.id, data.status);
});
export {
  listGrowthAuditInquiries_createServerFn_handler,
  submitGrowthAuditInquiry_createServerFn_handler,
  updateGrowthAuditInquiryStatus_createServerFn_handler
};
