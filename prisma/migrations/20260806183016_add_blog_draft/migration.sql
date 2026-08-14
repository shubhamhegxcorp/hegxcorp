-- CreateTable
CREATE TABLE "BlogDraft" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "excerpt" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "readTime" TEXT NOT NULL DEFAULT '',
    "seoDescription" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT[],
    "tags" TEXT[],
    "featuredImage" TEXT,
      "authorname" TEXT NOT NULL DEFAULT 'Hegxcorp Team',
    "seotitle" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
  

    CONSTRAINT "BlogDraft_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BlogDraft_updatedAt_idx" ON "BlogDraft"("updatedAt");
