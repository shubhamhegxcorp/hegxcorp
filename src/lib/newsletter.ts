import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const subscriberStatuses = ["ACTIVE", "UNSUBSCRIBED"] as const;
export type SubscriberStatus = (typeof subscriberStatuses)[number];

export const subscribeInputSchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }),
  source: z.string().trim().default("blog"),
});

export type SubscribeInput = z.infer<typeof subscribeInputSchema>;

export type NewsletterSubscriber = {
  id: string;
  email: string;
  source: string;
  status: SubscriberStatus;
  createdAt: string;
  updatedAt: string;
};

/**
 * Public server function to register a new subscriber from the blog or site.
 */
export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator(subscribeInputSchema)
  .handler(async ({ data }) => {
    const { subscribeEmail } = await import("./newsletter.server");
    return subscribeEmail(data);
  });

/**
 * Admin server function to list all subscribers.
 */
export const listNewsletterSubscribers = createServerFn({ method: "POST" }).handler(async () => {
  const { listAllSubscribers } = await import("./newsletter.server");
  return listAllSubscribers();
});

/**
 * Admin server function to update subscriber status (ACTIVE / UNSUBSCRIBED).
 */
export const updateNewsletterSubscriberStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().min(1),
      status: z.enum(subscriberStatuses),
    }),
  )
  .handler(async ({ data }) => {
    const { updateSubscriberStatus } = await import("./newsletter.server");
    return updateSubscriberStatus(data.id, data.status);
  });

/**
 * Admin server function to permanently remove a subscriber.
 */
export const deleteNewsletterSubscriber = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    const { deleteSubscriber } = await import("./newsletter.server");
    return deleteSubscriber(data.id);
  });
