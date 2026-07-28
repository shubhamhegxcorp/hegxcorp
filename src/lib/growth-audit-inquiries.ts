import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

import { inquiryStatuses, type InquiryStatus } from "./contact-inquiries";
import type { LeadSourceData } from "./lead-source";

const leadSourceDataSchema = z.object({
  leadSource: z.string().optional(),
  leadMedium: z.string().optional(),
  leadCampaign: z.string().optional(),
  leadAdSet: z.string().optional(),
  leadAd: z.string().optional(),
  leadLandingPage: z.string().optional(),
  leadReferrer: z.string().optional(),
});

export const growthAuditInquiryInputSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid business email" }),
  website: z.string().min(4, { message: "Please enter your website" }),
  visitorId: z.string().optional(),
  leadSourceData: leadSourceDataSchema.default({}),
  revenueRange: z.string().min(1, { message: "Please select your annual revenue range" }),
  goal: z.string().min(1, { message: "Please select your primary growth target" }),
});

export type GrowthAuditInquiryInput = z.infer<typeof growthAuditInquiryInputSchema>;

export type GrowthAuditInquiry = Omit<GrowthAuditInquiryInput, "visitorId" | "leadSourceData"> & {
  id: string;
  visitorId: string | null;
  leadSource: string | null;
  leadMedium: string | null;
  leadCampaign: string | null;
  leadAdSet: string | null;
  leadAd: string | null;
  leadLandingPage: string | null;
  leadReferrer: string | null;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export type { LeadSourceData };

export const submitGrowthAuditInquiry = createServerFn({ method: "POST" })
  .validator(growthAuditInquiryInputSchema)
  .handler(async ({ data }) => {
    const { createGrowthAuditInquiry } = await import("./growth-audit-inquiries.server");
    return createGrowthAuditInquiry(data);
  });

export const listGrowthAuditInquiries = createServerFn({ method: "POST" }).handler(async () => {
  const { listSavedGrowthAuditInquiries } = await import("./growth-audit-inquiries.server");
  return listSavedGrowthAuditInquiries();
});

export const updateGrowthAuditInquiryStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().min(1),
      status: z.enum(inquiryStatuses),
    }),
  )
  .handler(async ({ data }) => {
    const { updateSavedGrowthAuditInquiryStatus } = await import("./growth-audit-inquiries.server");
    return updateSavedGrowthAuditInquiryStatus(data.id, data.status);
  });
