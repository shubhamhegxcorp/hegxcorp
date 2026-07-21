import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "./server-BjMtisnP.js";
import * as z from "zod";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const inquiryStatuses = ["NEW", "INPROGRESS", "CLOSED"];
const contactInquiryInputSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name"
  }),
  email: z.string().email({
    message: "Please enter a valid email"
  }),
  phone: z.string().optional(),
  website: z.string().optional(),
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
  createSsrRpc as c,
  inquiryStatuses as i,
  listContactInquiries as l,
  submitContactInquiry as s,
  updateContactInquiryStatus as u
};
