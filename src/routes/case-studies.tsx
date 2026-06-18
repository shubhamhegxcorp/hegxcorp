import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  component: () => <Outlet />,
} as never);
