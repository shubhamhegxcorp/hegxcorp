ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadSource" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadMedium" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadCampaign" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadAdSet" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadAd" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadLandingPage" TEXT;
ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "leadReferrer" TEXT;

ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadSource" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadMedium" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadCampaign" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadAdSet" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadAd" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadLandingPage" TEXT;
ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "leadReferrer" TEXT;

CREATE INDEX IF NOT EXISTS "ContactInquiry_leadSource_idx" ON "ContactInquiry"("leadSource");
CREATE INDEX IF NOT EXISTS "ContactInquiry_leadCampaign_idx" ON "ContactInquiry"("leadCampaign");
CREATE INDEX IF NOT EXISTS "GrowthAuditInquiry_leadSource_idx" ON "GrowthAuditInquiry"("leadSource");
CREATE INDEX IF NOT EXISTS "GrowthAuditInquiry_leadCampaign_idx" ON "GrowthAuditInquiry"("leadCampaign");
