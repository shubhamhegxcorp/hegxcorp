import { c as createServerRpc } from "./createServerRpc-wR5qPLW8.js";
import { c as createServerFn } from "./server-Bg4GKRDW.js";
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
const inquiryStatuses = ["NEW", "INPROGRESS", "CLOSED"];
const leadSourceDataSchema = z.object({
  leadSource: z.string().optional(),
  leadMedium: z.string().optional(),
  leadCampaign: z.string().optional(),
  leadAdSet: z.string().optional(),
  leadAd: z.string().optional(),
  leadLandingPage: z.string().optional(),
  leadReferrer: z.string().optional()
});
const contactInquiryInputSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name"
  }),
  email: z.string().email({
    message: "Please enter a valid email"
  }),
  phone: z.string().optional(),
  website: z.string().optional(),
  visitorId: z.string().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  source: z.string().optional(),
  services: z.array(z.string()).default([]),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, {
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
  } = await import("./contact-inquiries.server-B5fzIaLh.js");
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
  } = await import("./contact-inquiries.server-B5fzIaLh.js");
  return listSavedContactInquiries();
});
const updateContactInquiryStatus_createServerFn_handler = createServerRpc({
  id: "e5f62d0987cd72b7971c95c7c6335bfa7de34926eb1a8c4441bfc735781d5340",
  name: "updateContactInquiryStatus",
  filename: "src/lib/contact-inquiries.ts"
}, (opts) => updateContactInquiryStatus.__executeServer(opts));
const updateContactInquiryStatus = createServerFn({
  method: "POST"
}).validator(z.object({
  id: z.string().min(1),
  status: z.enum(inquiryStatuses)
})).handler(updateContactInquiryStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    updateSavedContactInquiryStatus
  } = await import("./contact-inquiries.server-B5fzIaLh.js");
  return updateSavedContactInquiryStatus(data.id, data.status);
});
export {
  listContactInquiries_createServerFn_handler,
  submitContactInquiry_createServerFn_handler,
  updateContactInquiryStatus_createServerFn_handler
};
