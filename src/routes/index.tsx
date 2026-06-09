import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEXGCORP — We Create Future" },
      { name: "description", content: "Global technology agency delivering premium web, marketing and design solutions across India, USA, Australia and Europe." },
      { property: "og:title", content: "HEXGCORP — We Create Future" },
      { property: "og:description", content: "Global technology agency delivering premium web, marketing and design solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
    </div>
  );
}
