-- CreateTable
CREATE TABLE "GrowthAuditInquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "revenueRange" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "status" "InquiryStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GrowthAuditInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GrowthAuditInquiry_status_idx" ON "GrowthAuditInquiry"("status");

-- CreateIndex
CREATE INDEX "GrowthAuditInquiry_createdAt_idx" ON "GrowthAuditInquiry"("createdAt");
