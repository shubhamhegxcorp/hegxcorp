import { c as createSsrRpc } from "./createSsrRpc-DcZ7Clyk.js";
import { c as createServerFn } from "./server-yv7ZiuMh.js";
import * as z from "zod";
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
const submitContactInquiry = createServerFn({
  method: "POST"
}).validator(contactInquiryInputSchema).handler(createSsrRpc("da55d7ded5ee4959a94376bf4e29b09075cff657e0fe2ec81786040ca4ef0f63"));
const listContactInquiries = createServerFn({
  method: "POST"
}).handler(createSsrRpc("5e0b6e137933f6527f9d322a6d17bb28d1f7210af0ae0f8aa41e41919dc205e5"));
const updateContactInquiryStatus = createServerFn({
  method: "POST"
}).validator(z.object({
  id: z.string().min(1),
  status: z.enum(inquiryStatuses)
})).handler(createSsrRpc("e5f62d0987cd72b7971c95c7c6335bfa7de34926eb1a8c4441bfc735781d5340"));
export {
  inquiryStatuses as i,
  listContactInquiries as l,
  submitContactInquiry as s,
  updateContactInquiryStatus as u
};
