import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/website-content/")({
  beforeLoad: () => {
    throw redirect({
      to: "/admin/website-content/services",
    });
  },
});
