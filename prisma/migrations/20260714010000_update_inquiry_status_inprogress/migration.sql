-- Replace CONTACTED/QUALIFIED with INPROGRESS for admin lead status tracking.
CREATE TYPE "InquiryStatus_new" AS ENUM ('NEW', 'IN PROGRESS', 'CLOSED');

ALTER TABLE "ContactInquiry" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "GrowthAuditInquiry" ALTER COLUMN "status" DROP DEFAULT;

ALTER TABLE "ContactInquiry"
  ALTER COLUMN "status" TYPE "InquiryStatus_new"
  USING (
    CASE
      WHEN "status"::text IN ('CONTACTED', 'QUALIFIED') THEN 'INPROGRESS'
      ELSE "status"::text
    END
  )::"InquiryStatus_new";

ALTER TABLE "GrowthAuditInquiry"
  ALTER COLUMN "status" TYPE "InquiryStatus_new"
  USING (
    CASE
      WHEN "status"::text IN ('CONTACTED', 'QUALIFIED') THEN 'INPROGRESS'
      ELSE "status"::text
    END
  )::"InquiryStatus_new";

DROP TYPE "InquiryStatus";
ALTER TYPE "InquiryStatus_new" RENAME TO "InquiryStatus";

ALTER TABLE "ContactInquiry" ALTER COLUMN "status" SET DEFAULT 'NEW';
ALTER TABLE "GrowthAuditInquiry" ALTER COLUMN "status" SET DEFAULT 'NEW';
