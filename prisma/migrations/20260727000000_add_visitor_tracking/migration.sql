ALTER TABLE "ContactInquiry" ADD COLUMN "visitorId" TEXT;

ALTER TABLE "GrowthAuditInquiry" ADD COLUMN "visitorId" TEXT;

CREATE TABLE "VisitorEvent" (
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

CREATE INDEX "ContactInquiry_visitorId_idx" ON "ContactInquiry"("visitorId");
CREATE INDEX "GrowthAuditInquiry_visitorId_idx" ON "GrowthAuditInquiry"("visitorId");
CREATE INDEX "VisitorEvent_visitorId_idx" ON "VisitorEvent"("visitorId");
CREATE INDEX "VisitorEvent_eventName_idx" ON "VisitorEvent"("eventName");
CREATE INDEX "VisitorEvent_createdAt_idx" ON "VisitorEvent"("createdAt");
