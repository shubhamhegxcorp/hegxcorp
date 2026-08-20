import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

import { BlogPreview, blogDraftToPreview } from "@/components/admin/BlogPreview";
import { getBlogDraft, type BlogDraft } from "@/lib/blog-drafts";

export const Route = createFileRoute("/admin/blog-preview")({
  validateSearch: (search: Record<string, unknown>): { draft?: string } => ({
    draft: typeof search.draft === "string" ? search.draft : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Preview | Hegxcorp Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: BlogPreviewPage, 
} as never);

type LoadState = "loading" | "ready" | "notfound" | "error";

function BlogPreviewPage() {
  const { draft: draftId } = Route.useSearch() as { draft?: string };
  const [draft, setDraft] = useState<BlogDraft | null>(null);
  const [state, setState] = useState<LoadState>("loading");

  const backHref = draftId
    ? `/admin/add-blog?draft=${encodeURIComponent(draftId)}`
    : "/admin/add-blog";

  useEffect(() => {
    let active = true;
    if (!draftId) {
      setState("notfound");
      return;
    }
    setState("loading");
    getBlogDraft({ data: { id: draftId } })
      .then((result) => {
        if (!active) return;
        if (result) {
          setDraft(result);
          setState("ready");
        } else {
          setState("notfound");
        }
      })
      .catch((loadError) => {
        console.error("Preview draft failed to load:", loadError);
        if (active) setState("error");
      });
    return () => {
      active = false;
    };
  }, [draftId]);

  if (state === "ready" && draft) {
    return <BlogPreview data={blogDraftToPreview(draft)} backHref={backHref} />;
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white px-6 text-center">
      {state === "loading" ? (
        <div className="grid place-items-center gap-3 text-sm font-bold text-[#06133D]">
          <RefreshCw className="h-7 w-7 animate-spin text-[#FC9C44]" />
          Loading preview…
        </div>
      ) : (
        <div className="grid max-w-md place-items-center gap-3">
          <h1 className="text-xl font-black text-[#06133D]">
            {state === "error" ? "Preview could not load" : "Draft not found"}
          </h1>
          <p className="text-sm font-semibold text-[#667085]">
            {state === "error"
              ? "Something went wrong while loading this draft. Head back to the editor and try again."
              : "This draft may have been deleted, or it was never saved. Return to the editor to continue."}
          </p>
          <a
            href={backHref}
            className="mt-2 rounded-lg bg-[#FC9C44] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#E88933]"
          >
            Back to editor
          </a>
        </div>
      )}
    </div>
  );
}
