import { c as createServerRpc } from "./createServerRpc-ZzyE7byC.mjs";
import { c as createServerFn } from "./server-yv7ZiuMh.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, c as arrayType, e as enumType } from "../_libs/zod.mjs";
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
const inquiryStatuses = ["NEW", "INPROGRESS", "CLOSED"];
const leadSourceDataSchema = objectType({
  leadSource: stringType().optional(),
  leadMedium: stringType().optional(),
  leadCampaign: stringType().optional(),
  leadAdSet: stringType().optional(),
  leadAd: stringType().optional(),
  leadLandingPage: stringType().optional(),
  leadReferrer: stringType().optional()
});
const contactInquiryInputSchema = objectType({
  name: stringType().min(2, {
    message: "Please enter your full name"
  }),
  email: stringType().email({
    message: "Please enter a valid email"
  }),
  phone: stringType().optional(),
  website: stringType().optional(),
  visitorId: stringType().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  source: stringType().optional(),
  services: arrayType(stringType()).default([]),
  budget: stringType().optional(),
  timeline: stringType().optional(),
  message: stringType().min(10, {
    message: "Please add a little more detail"
  })
});
const submitContactInquiry_createServerFn_handler = createServerRpc({
  id: "da55d7ded5ee4959a94376bf4e29b09075cff657e0fe2ec81786040ca4ef0f63",
  name: "submitContactInquiry",
  filename: "src/lib/contact-inquiries.ts"
}, (opts) => submitContactInquiry.__executeServer(opts));
const submitContactInquiry = createServerFn({
  method: "POST"
}).validator(contactInquiryInputSchema).handler(submitContactInquiry_createServerFn_handler, async ({
  data
}) => {
  const {
    createContactInquiry
  } = await import("./contact-inquiries.server-BQjGq9zw.mjs");
  return createContactInquiry(data);
});
const listContactInquiries_createServerFn_handler = createServerRpc({
  id: "5e0b6e137933f6527f9d322a6d17bb28d1f7210af0ae0f8aa41e41919dc205e5",
  name: "listContactInquiries",
  filename: "src/lib/contact-inquiries.ts"
}, (opts) => listContactInquiries.__executeServer(opts));
const listContactInquiries = createServerFn({
  method: "POST"
}).handler(listContactInquiries_createServerFn_handler, async () => {
  const {
    listSavedContactInquiries
  } = await import("./contact-inquiries.server-BQjGq9zw.mjs");
  return listSavedContactInquiries();
});
const updateContactInquiryStatus_createServerFn_handler = createServerRpc({
  id: "e5f62d0987cd72b7971c95c7c6335bfa7de34926eb1a8c4441bfc735781d5340",
  name: "updateContactInquiryStatus",
  filename: "src/lib/contact-inquiries.ts"
}, (opts) => updateContactInquiryStatus.__executeServer(opts));
const updateContactInquiryStatus = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1),
  status: enumType(inquiryStatuses)
})).handler(updateContactInquiryStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    updateSavedContactInquiryStatus
  } = await import("./contact-inquiries.server-BQjGq9zw.mjs");
  return updateSavedContactInquiryStatus(data.id, data.status);
});
export {
  listContactInquiries_createServerFn_handler,
  submitContactInquiry_createServerFn_handler,
  updateContactInquiryStatus_createServerFn_handler
};
