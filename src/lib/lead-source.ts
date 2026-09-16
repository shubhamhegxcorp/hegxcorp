import * as z from "zod";

export const leadSourceDataSchema = z.object({
  leadSource: z.string().optional(),
  leadMedium: z.string().optional(),
  leadCampaign: z.string().optional(),
  leadAdSet: z.string().optional(),
  leadAd: z.string().optional(),
  leadLandingPage: z.string().optional(),
  leadReferrer: z.string().optional(),
});

export type LeadSourceData = z.infer<typeof leadSourceDataSchema>;

export function cleanLeadSourceData(input: LeadSourceData = {}): LeadSourceData {
  return Object.fromEntries(
    Object.entries(input)
      .map(([key, value]) => [key, value?.trim()])
      .filter(([, value]) => Boolean(value)),
  ) as LeadSourceData;
}
