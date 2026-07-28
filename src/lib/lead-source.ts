export type LeadSourceData = {
  leadSource?: string;
  leadMedium?: string;
  leadCampaign?: string;
  leadAdSet?: string;
  leadAd?: string;
  leadLandingPage?: string;
  leadReferrer?: string;
};

export function cleanLeadSourceData(input: LeadSourceData = {}): LeadSourceData {
  return Object.fromEntries(
    Object.entries(input)
      .map(([key, value]) => [key, value?.trim()])
      .filter(([, value]) => Boolean(value)),
  );
}
