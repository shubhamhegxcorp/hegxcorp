import { createServerFn } from "@tanstack/react-start";

export type AdFunnelReportRow = {
  key: string;
  leadSource: string;
  leadCampaign: string;
  leadAdSet: string;
  leadAd: string;
  visitors: number;
  formStarts: number;
  leadsGenerated: number;
  genuineLeads: number;
  newLeads: number;
  latestActivityAt: string;
};

export const listAdFunnelReport = createServerFn({ method: "POST" }).handler(async () => {
  const { listSavedAdFunnelReport } = await import("./ad-funnel.server");
  return listSavedAdFunnelReport();
});
