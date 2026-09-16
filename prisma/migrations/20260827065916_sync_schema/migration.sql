/*
  Warnings:

  - You are about to drop the column `authorname` on the `BlogDraft` table. All the data in the column will be lost.
  - You are about to drop the column `seotitle` on the `BlogDraft` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BlogDraft" DROP COLUMN "authorname",
DROP COLUMN "seotitle";

-- AlterTable
ALTER TABLE "ContactInquiry" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "services" DROP DEFAULT;

-- CreateTable
CREATE TABLE "WebsiteContent" (
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WebsiteContent_pkey" PRIMARY KEY ("key")
);
