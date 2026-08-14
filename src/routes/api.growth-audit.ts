import { createFileRoute } from "@tanstack/react-router";

import { growthAuditInquiryInputSchema } from "@/lib/growth-audit-inquiries";

export const Route = createFileRoute("/api/growth-audit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;

        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body." }, { status: 400 });
        }

        const parsed = growthAuditInquiryInputSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            {
              error: "Validation failed.",
              fields: parsed.error.flatten().fieldErrors,
            },
            { status: 400 },
          );
        }

        const { createGrowthAuditInquiry } = await import("@/lib/growth-audit-inquiries.server");
        const inquiry = await createGrowthAuditInquiry(parsed.data);

        return Response.json(
          {
            message: "Growth audit inquiry created.",
            inquiry,
          },
          { status: 201 },
        );
      },
    },
  },
});
