import { c as createServerRpc } from "./createServerRpc-ZzyE7byC.mjs";
import { c as createServerFn } from "./server-yv7ZiuMh.mjs";
import { i as inquiryStatuses } from "./contact-inquiries-JN2Pe8Z0.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
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
import "./createSsrRpc-DcZ7Clyk.mjs";
const leadSourceDataSchema = objectType({
  leadSource: stringType().optional(),
  leadMedium: stringType().optional(),
  leadCampaign: stringType().optional(),
  leadAdSet: stringType().optional(),
  leadAd: stringType().optional(),
  leadLandingPage: stringType().optional(),
  leadReferrer: stringType().optional(),
});
const growthAuditInquiryInputSchema = objectType({
  name: stringType().min(2, {
    message: "Please enter your full name",
  }),
  email: stringType().email({
    message: "Please enter a valid business email",
  }),
  website: stringType().min(4, {
    message: "Please enter your website",
  }),
  visitorId: stringType().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  revenueRange: stringType().min(1, {
    message: "Please select your annual revenue range",
  }),
  goal: stringType().min(1, {
    message: "Please select your primary growth target",
  }),
});
const submitGrowthAuditInquiry_createServerFn_handler = createServerRpc(
  {
    id: "0ddfc30b57f5fdc4738ee0434dff6b90e395d964e15a36b156b349ee83673a67",
    name: "submitGrowthAuditInquiry",
    filename: "src/lib/growth-audit-inquiries.ts",
  },
  (opts) => submitGrowthAuditInquiry.__executeServer(opts),
);
const submitGrowthAuditInquiry = createServerFn({
  method: "POST",
})
  .validator(growthAuditInquiryInputSchema)
  .handler(submitGrowthAuditInquiry_createServerFn_handler, async ({ data }) => {
    const { createGrowthAuditInquiry } =
      await import("./growth-audit-inquiries.server-CZxN0BUo.mjs");
    return createGrowthAuditInquiry(data);
  });
const listGrowthAuditInquiries_createServerFn_handler = createServerRpc(
  {
    id: "0a749c920f3ff82cb75ca65d248a3d0005331af64fb4b47bd0b4248ba2986b34",
    name: "listGrowthAuditInquiries",
    filename: "src/lib/growth-audit-inquiries.ts",
  },
  (opts) => listGrowthAuditInquiries.__executeServer(opts),
);
const listGrowthAuditInquiries = createServerFn({
  method: "POST",
}).handler(listGrowthAuditInquiries_createServerFn_handler, async () => {
  const { listSavedGrowthAuditInquiries } =
    await import("./growth-audit-inquiries.server-CZxN0BUo.mjs");
  return listSavedGrowthAuditInquiries();
});
const updateGrowthAuditInquiryStatus_createServerFn_handler = createServerRpc(
  {
    id: "52de78cfc2ef0447325f4709a52d1693596e35786b45728b298c52f041d7fb95",
    name: "updateGrowthAuditInquiryStatus",
    filename: "src/lib/growth-audit-inquiries.ts",
  },
  (opts) => updateGrowthAuditInquiryStatus.__executeServer(opts),
);
const updateGrowthAuditInquiryStatus = createServerFn({
  method: "POST",
})
  .validator(
    objectType({
      id: stringType().min(1),
      status: enumType(inquiryStatuses),
    }),
  )
  .handler(updateGrowthAuditInquiryStatus_createServerFn_handler, async ({ data }) => {
    const { updateSavedGrowthAuditInquiryStatus } =
      await import("./growth-audit-inquiries.server-CZxN0BUo.mjs");
    return updateSavedGrowthAuditInquiryStatus(data.id, data.status);
  });
export {
  listGrowthAuditInquiries_createServerFn_handler,
  submitGrowthAuditInquiry_createServerFn_handler,
  updateGrowthAuditInquiryStatus_createServerFn_handler,
};
