import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

const visitorEventValueSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

export const visitorEventInputSchema = z.object({
  visitorId: z.string().min(1),
  eventName: z.string().min(1),
  path: z.string().min(1),
  pageTitle: z.string().optional(),
  referrer: z.string().optional(),
  params: z.record(visitorEventValueSchema).default({}),
  userAgent: z.string().optional(),
});

export type VisitorEventInput = z.infer<typeof visitorEventInputSchema>;

export const saveVisitorEvent = createServerFn({ method: "POST" })
  .validator(visitorEventInputSchema)
  .handler(async ({ data }) => {
    const { createVisitorEvent } = await import("./visitor-events.server");
    return createVisitorEvent(data);
  });
