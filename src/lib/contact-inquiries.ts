import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const inquiryStatuses = ["NEW", "INPROGRESS", "CLOSED"] as const;

export const contactInquiryInputSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  website: z.string().optional(),
  source: z.string().optional(),
  services: z.array(z.string()).default([]),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, { message: "Please add a little more detail" }),
});

export type ContactInquiryInput = z.infer<typeof contactInquiryInputSchema>;
export type InquiryStatus = (typeof inquiryStatuses)[number];

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  website: string | null;
  source: string;
  services: string[];
  budget: string | null;
  timeline: string | null;
  message: string;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export const submitContactInquiry = createServerFn({ method: "POST" })
  .validator(contactInquiryInputSchema)
  .handler(async ({ data }) => {
    const { createContactInquiry } = await import("./contact-inquiries.server");
    return createContactInquiry(data);
  });

export const listContactInquiries = createServerFn({ method: "POST" })
  .handler(async () => {
    const { listSavedContactInquiries } = await import("./contact-inquiries.server");
    return listSavedContactInquiries();
  });

export const updateContactInquiryStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().min(1),
      status: z.enum(inquiryStatuses),
    }),
  )
  .handler(async ({ data }) => {
    const { updateSavedContactInquiryStatus } = await import("./contact-inquiries.server");
    return updateSavedContactInquiryStatus(data.id, data.status);
  });
