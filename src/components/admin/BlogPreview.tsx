import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  Mail,
  Sparkles,
} from "lucide-react";

import type { BlogFormState } from "@/routes/admin.add-blog";
import type { BlogDraft } from "@/lib/blog-drafts";

/** Normalized shape the preview layout renders from. */
export type BlogPreviewData = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  slug: string;
  content: string;
  featuredImage: string | null;
  authorname: string | null;
};

/** Build preview data from the live (unsaved) editor form. */
export function blogFormToPreview(
  form: BlogFormState,
  imagePreview?: string | null,
): BlogPreviewData {
  return {
    title: form.title,
    excerpt: form.excerpt,
    category: form.category[0] ?? "",
    readTime: form.readTime,
    slug: form.slug,
    content: form.content,
    featuredImage: imagePreview ?? null,
    authorname: form.authorname ?? "Hegxcorp Team",
  };
}

/** Build preview data from a persisted server draft. */
export function blogDraftToPreview(draft: BlogDraft): BlogPreviewData {
  return {
    title: draft.title,
    excerpt: draft.excerpt,
    category: draft.category[0] ?? "",
    readTime: draft.readTime,
    slug: draft.slug,
    content: draft.content,
    featuredImage: draft.featuredImage,
    authorname: draft.authorname,
  };
}

type BlogPreviewProps = {
  data: BlogPreviewData;
  /** Where the back / exit controls navigate to (the editing page). */
  backHref: string;
};

/**
 * Read-only replica of the public /blog/$slug detail page, rendered from
 * normalized preview data. Used as a full page at /admin/blog-preview so it
 * can be opened in a new tab (Ctrl/Cmd+click) and refreshed independently.
 */
export function BlogPreview({ data, backHref }: BlogPreviewProps) {
  const title = data.title || "Untitled post";
  const excerpt = data.excerpt || "Your focus key Pharse / excerpt will appear here.";
  const category = data.category || "Uncategorized";
  const readTime = data.readTime || "5 min read";
  const slug = data.slug || "your-post-slug";
  const content = data.content || "<p>Start writing your post…</p>";
  const imagePreview = data.featuredImage;
  const authorName = data.authorname || "Hegxcorp Team";
  const authorRole = "Editorial";

  // const author = { name: "Hegxcorp Team", role: "Editorial" };
  const authorInitials = authorName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const publishedLabel = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] overflow-y-auto bg-white overscroll-contain"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      {/* Floating preview banner + back to editor */}
      <div className="sticky top-0 z-[110] flex items-center justify-between border-b border-[#EAEAEA] bg-[#1D2742] px-4 py-2.5 text-white">
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FC9C44]">
          <Sparkles className="h-3.5 w-3.5" /> Preview mode — not published
        </span>
        <a
          href={backHref}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold hover:bg-white/20 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to editor
        </a>
      </div>

      <div className="min-h-screen bg-white flex flex-col justify-between">
        {/* ── ARTICLE HEADER ── */}
        <header className="relative overflow-hidden bg-[#FAFAF8] border-b border-[#EAEAEA] py-14 md:py-20 text-left">
          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[850px] mx-auto space-y-6">
              <div>
                <a
                  href={backHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider transition hover:text-[#1D2742]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to editor
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#FC9C44] uppercase tracking-wider">
                <span className="bg-[#FFF4E8] px-2.5 py-1 rounded-md">{category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#6B7280]">
                  <Calendar className="h-3.5 w-3.5" />
                  {publishedLabel}
                </span>
              </div>

              <h1
                className="font-bold text-[#1D2742] tracking-tight leading-[1.1]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(30px, 4.2vw, 52px)",
                }}
              >
                {title}
              </h1>

              <p
                className="text-base md:text-lg text-[#6B7280] leading-relaxed font-normal max-w-[780px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAEAEA]">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-[#1D2742] text-white flex items-center justify-center font-bold text-xs select-none">
                    {authorInitials}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D2742]">{authorName}</div>
                    <div className="text-[10px] text-[#9CA3AF] font-semibold">{authorRole}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                  <span className="text-[10px] uppercase font-bold tracking-wider mr-1.5">
                    Share article:
                  </span>
                  <span className="p-2 border border-[#EAEAEA] rounded-full">
                    <Twitter className="h-3.5 w-3.5" />
                  </span>
                  <span className="p-2 border border-[#EAEAEA] rounded-full">
                    <Linkedin className="h-3.5 w-3.5" />
                  </span>
                  <span className="p-2 border border-[#EAEAEA] rounded-full">
                    <Link2 className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── BROWSER MOCKUP HERO ── */}
        <section className="py-8 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="max-w-[850px] mx-auto">
              <div className="relative rounded-xl border border-[#EAEAEA] bg-[#FAFAF8] shadow-[0_24px_48px_rgba(29,39,66,0.06)] overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-[#EAEAEA]">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 max-w-[320px] mx-auto bg-[#FAFAF8] border border-[#EAEAEA] rounded py-0.5 px-3 text-[10px] text-[#9CA3AF] font-mono text-center select-none truncate">
                    hegxcorp.com/blog/{slug}
                  </div>
                </div>

                {imagePreview ? (
                  <img src={imagePreview} alt={title} className="aspect-video w-full object-cover" />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-[#1D2742] to-[#2D3A5D] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,156,68,0.15),transparent_40%)]" />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#FC9C44] uppercase border border-[#FC9C44]/30 px-3 py-1 rounded bg-[#FC9C44]/5">
                        HEGXCORP RESEARCH PAPER
                      </span>
                      <Bookmark className="h-5 w-5 text-white/55" />
                    </div>
                    <div className="relative z-10 max-w-[620px] space-y-3.5 text-left">
                      <h3
                        className="text-xl md:text-3xl font-bold text-white leading-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-xs md:text-sm text-white/70 font-normal leading-relaxed max-w-[500px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {excerpt}
                      </p>
                    </div>
                    <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-white/45 text-[9px] uppercase tracking-wider font-semibold">
                      <span>© {new Date().getFullYear()} Hegxcorp Systems</span>
                      <span className="text-[#FC9C44]">Author: {authorName}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <main className="py-10 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-12 max-w-[850px] mx-auto items-start">
              <div className="lg:col-span-8 text-left">
                <article className="max-w-none">
                  <div
                    className="prose prose-slate max-w-none
                      prose-headings:font-bold prose-headings:text-[#1D2742] prose-headings:tracking-tight
                      prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4
                      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:border-b prose-h2:border-[#EAEAEA] prose-h2:pb-2
                      prose-p:text-[#4A5568] prose-p:leading-[1.8] prose-p:text-base prose-p:mb-6
                      prose-strong:text-[#1D2742] prose-strong:font-bold
                      prose-a:text-[#C96A13]
                      prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2 prose-ul:text-sm prose-ul:text-[#4A5568]
                      prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                      prose-blockquote:border-l-4 prose-blockquote:border-[#FC9C44] prose-blockquote:pl-6 prose-blockquote:italic
                      prose-img:rounded-lg
                      prose-li:leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </article>
              </div>

              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-left">
                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-white space-y-3">
                  <h4 className="text-xs font-bold text-[#1D2742] uppercase tracking-wider">
                    Share Article
                  </h4>
                  <div className="flex gap-2">
                    <span className="flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568]">
                      <Twitter className="h-3.5 w-3.5" /> X
                    </span>
                    <span className="flex-1 flex justify-center items-center gap-1.5 py-2 border border-[#EAEAEA] rounded-lg text-xs font-semibold text-[#4A5568]">
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </span>
                  </div>
                </div>

                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-[#FAFAF8] space-y-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF4E8] text-[#FC9C44]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4
                    className="text-sm font-bold text-[#1D2742]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Weekly Industry Reports
                  </h4>
                  <p className="text-[11px] text-[#6B7280] leading-relaxed">
                    Deep marketing experiments and growth frameworks sent to your inbox.
                  </p>
                  <div className="w-full rounded-lg bg-[#FC9C44] py-2 text-center text-xs font-semibold text-white">
                    Subscribe
                  </div>
                </div>

                <div className="border border-[#EAEAEA] rounded-xl p-5 bg-[#1D2742] text-white space-y-4">
                  <h4
                    className="text-sm font-bold leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Need help growing your business?
                  </h4>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Claim a free manual performance audit of your acquisition loops.
                  </p>
                  <span className="w-full inline-flex justify-center items-center gap-1.5 rounded-lg bg-[#FC9C44] py-2 text-xs font-bold text-[#1D2742]">
                    Book Free Growth Audit <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
