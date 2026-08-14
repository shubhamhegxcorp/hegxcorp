import postgres from 'postgres';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}

const sql = postgres(DATABASE_URL, { max: 1 });

try {
  const result = await sql`SELECT current_database(), current_user`;
  console.log('Connected to:', result[0]);
  
  // Check if BlogDraft table exists
  const tables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = 'BlogDraft'
  `;
  
  if (tables.length > 0) {
    console.log('BlogDraft table already exists');
  } else {
    console.log('BlogDraft table does not exist, creating...');
    
    await sql`
      CREATE TABLE "BlogDraft" (
        "id" TEXT NOT NULL,
        "title" TEXT NOT NULL,
        "slug" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "category" TEXT NOT NULL,
        "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
        "imageUrl" TEXT,
        "status" TEXT NOT NULL DEFAULT 'DRAFT',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "BlogDraft_pkey" PRIMARY KEY ("id")
      )
    `;
    
    await sql`CREATE INDEX "BlogDraft_slug_idx" ON "BlogDraft"("slug")`;
    await sql`CREATE INDEX "BlogDraft_status_idx" ON "BlogDraft"("status")`;
    await sql`CREATE INDEX "BlogDraft_createdAt_idx" ON "BlogDraft"("createdAt" DESC)`;
    
    console.log('BlogDraft table created successfully');
  }
  
  await sql.end();
} catch (err) {
  console.error('Database error:', err);
  process.exit(1);
}
