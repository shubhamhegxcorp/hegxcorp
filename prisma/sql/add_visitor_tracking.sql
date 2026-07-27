ALTER TABLE "ContactInquiry" ADD COLUMN IF NOT EXISTS "visitorId" TEXT;

ALTER TABLE "GrowthAuditInquiry" ADD COLUMN IF NOT EXISTS "visitorId" TEXT;

CREATE TABLE IF NOT EXISTS "VisitorEvent" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "pageTitle" TEXT,
    "referrer" TEXT,
    "params" JSONB NOT NULL DEFAULT '{}'::jsonb,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VisitorEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ContactInquiry_visitorId_idx" ON "ContactInquiry"("visitorId");
CREATE INDEX IF NOT EXISTS "GrowthAuditInquiry_visitorId_idx" ON "GrowthAuditInquiry"("visitorId");
CREATE INDEX IF NOT EXISTS "VisitorEvent_visitorId_idx" ON "VisitorEvent"("visitorId");
CREATE INDEX IF NOT EXISTS "VisitorEvent_eventName_idx" ON "VisitorEvent"("eventName");
CREATE INDEX IF NOT EXISTS "VisitorEvent_createdAt_idx" ON "VisitorEvent"("createdAt");
