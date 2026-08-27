import { c as createSsrRpc } from "./createSsrRpc-BcQoR-tP.mjs";
import { c as createServerFn } from "./server-BWEBlKlL.mjs";
import { o as objectType, s as stringType, c as arrayType, e as enumType } from "../_libs/zod.mjs";
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
const submitContactInquiry = createServerFn({
  method: "POST"
}).validator(contactInquiryInputSchema).handler(createSsrRpc("da55d7ded5ee4959a94376bf4e29b09075cff657e0fe2ec81786040ca4ef0f63"));
const listContactInquiries = createServerFn({
  method: "POST"
}).handler(createSsrRpc("5e0b6e137933f6527f9d322a6d17bb28d1f7210af0ae0f8aa41e41919dc205e5"));
const updateContactInquiryStatus = createServerFn({
  method: "POST"
}).validator(objectType({
  id: stringType().min(1),
  status: enumType(inquiryStatuses)
})).handler(createSsrRpc("e5f62d0987cd72b7971c95c7c6335bfa7de34926eb1a8c4441bfc735781d5340"));
export {
  inquiryStatuses as i,
  listContactInquiries as l,
  submitContactInquiry as s,
  updateContactInquiryStatus as u
};
