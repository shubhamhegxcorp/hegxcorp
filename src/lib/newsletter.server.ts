import { randomUUID } from "node:crypto";
import { assertAdminSession } from "./admin-auth.server";
import { getDbClient, type SqlClient } from "./db.server";
import { sendGreetingEmail, sendAdminNewSubscriberAlert } from "./email.server";
import type { NewsletterSubscriber, SubscribeInput, SubscriberStatus } from "./newsletter";

type SubscriberRow = {
  id: string;
  email: string;
  source: string;
  status: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

type GlobalWithNewsletterReady = typeof globalThis & {
  hegxcorpNewsletterTableReady?: Promise<void>;
};

/**
 * Ensures the "NewsletterSubscriber" table exists in PostgreSQL.
 * Cached on globalThis so the DDL statement only runs once per server process.
 */
async function ensureNewsletterTable(sql: SqlClient) {
  const globalForNewsletter = globalThis as GlobalWithNewsletterReady;
  if (!globalForNewsletter.hegxcorpNewsletterTableReady) {
    globalForNewsletter.hegxcorpNewsletterTableReady = (async () => {
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS "NewsletterSubscriber" (
            "id" TEXT NOT NULL,
            "email" TEXT NOT NULL,
            "source" TEXT NOT NULL DEFAULT 'blog',
            "status" TEXT NOT NULL DEFAULT 'ACTIVE',
            "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "NewsletterSubscriber_pkey" PRIMARY KEY ("id")
          )
        `;
        await sql`
          CREATE UNIQUE INDEX IF NOT EXISTS "NewsletterSubscriber_email_key"
          ON "NewsletterSubscriber" ("email")
        `.catch(() => {});
        await sql`
          CREATE INDEX IF NOT EXISTS "NewsletterSubscriber_status_idx"
          ON "NewsletterSubscriber" ("status")
        `.catch(() => {});
        await sql`
          CREATE INDEX IF NOT EXISTS "NewsletterSubscriber_createdAt_idx"
          ON "NewsletterSubscriber" ("createdAt")
        `.catch(() => {});
      } catch (error) {
        console.error("Failed to ensure NewsletterSubscriber table:", error);
      }
    })();
  }
  return globalForNewsletter.hegxcorpNewsletterTableReady;
}

function mapSubscriber(row: SubscriberRow): NewsletterSubscriber {
  return {
    id: row.id,
    email: row.email,
    source: row.source,
    status: row.status as SubscriberStatus,
    createdAt: new Date(row.createdAt).toISOString(),
    updatedAt: new Date(row.updatedAt).toISOString(),
  };
}

/**
 * Subscribes an email address to the newsletter.
 * Handles deduplication and re-subscribing gracefully.
 */
export async function subscribeEmail(input: SubscribeInput): Promise<{
  success: boolean;
  alreadySubscribed: boolean;
  message: string;
}> {
  const sql = getDbClient();
  await ensureNewsletterTable(sql);

  const cleanEmail = input.email.trim().toLowerCase();
  const cleanSource = input.source?.trim() || "blog";

  // Check if subscriber already exists
  const existing = await sql<SubscriberRow[]>`
    SELECT "id", "email", "source", "status", "createdAt", "updatedAt"
    FROM "NewsletterSubscriber"
    WHERE LOWER("email") = LOWER(${cleanEmail})
    LIMIT 1
  `;

  if (existing.length > 0) {
    const sub = existing[0];
    if (sub.status === "ACTIVE") {
      return {
        success: true,
        alreadySubscribed: true,
        message: "You are already subscribed to Hegxcorp Growth Insights!",
      };
    }

    // Re-activate previously unsubscribed contact
    await sql`
      UPDATE "NewsletterSubscriber"
      SET "status" = 'ACTIVE', "source" = ${cleanSource}, "updatedAt" = now()
      WHERE "id" = ${sub.id}
    `;

    // Fire greeting email in background
    void sendGreetingEmail(cleanEmail).catch((err) =>
      console.error("Failed to send welcome email:", err),
    );

    return {
      success: true,
      alreadySubscribed: false,
      message: "Welcome back! Your subscription has been reactivated.",
    };
  }

  // Insert new subscriber
  await sql`
    INSERT INTO "NewsletterSubscriber" ("id", "email", "source", "status", "createdAt", "updatedAt")
    VALUES (${randomUUID()}, ${cleanEmail}, ${cleanSource}, 'ACTIVE', now(), now())
  `;

  // Send greeting email in background
  void sendGreetingEmail(cleanEmail).catch((err) =>
    console.error("Failed to send greeting email to new subscriber:", err),
  );

  // Send admin alert in background
  void sendAdminNewSubscriberAlert(cleanEmail, cleanSource).catch((err) =>
    console.error("Failed to send admin subscriber alert:", err),
  );

  return {
    success: true,
    alreadySubscribed: false,
    message: "Subscribed! Check your inbox for our welcome note.",
  };
}

/**
 * Lists all subscribers for the admin panel. Requires active admin session.
 */
export async function listAllSubscribers(): Promise<NewsletterSubscriber[]> {
  await assertAdminSession();
  const sql = getDbClient();
  await ensureNewsletterTable(sql);

  const rows = await sql<SubscriberRow[]>`
    SELECT "id", "email", "source", "status", "createdAt", "updatedAt"
    FROM "NewsletterSubscriber"
    ORDER BY "createdAt" DESC
    LIMIT 1000
  `;

  return rows.map(mapSubscriber);
}

/**
 * Fetches all active subscriber email addresses (internal use for notifications).
 */
export async function listActiveSubscriberEmails(): Promise<string[]> {
  const sql = getDbClient();
  await ensureNewsletterTable(sql);

  const rows = await sql<{ email: string }[]>`
    SELECT "email"
    FROM "NewsletterSubscriber"
    WHERE "status" = 'ACTIVE'
  `;

  return rows.map((r) => r.email);
}

/**
 * Updates a subscriber's status. Requires active admin session.
 */
export async function updateSubscriberStatus(id: string, status: SubscriberStatus) {
  await assertAdminSession();
  const sql = getDbClient();
  await ensureNewsletterTable(sql);

  const rows = await sql<SubscriberRow[]>`
    UPDATE "NewsletterSubscriber"
    SET "status" = ${status}, "updatedAt" = now()
    WHERE "id" = ${id}
    RETURNING "id", "email", "source", "status", "createdAt", "updatedAt"
  `;

  if (!rows[0]) {
    throw new Error("Subscriber not found.");
  }

  return mapSubscriber(rows[0]);
}

/**
 * Deletes a subscriber record. Requires active admin session.
 */
export async function deleteSubscriber(id: string) {
  await assertAdminSession();
  const sql = getDbClient();
  await ensureNewsletterTable(sql);

  await sql`
    DELETE FROM "NewsletterSubscriber"
    WHERE "id" = ${id}
  `;

  return { success: true };
}
