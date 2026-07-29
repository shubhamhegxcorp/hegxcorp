import { createFileRoute } from "@tanstack/react-router";

import { getBlogs } from "@/lib/content/blogs";
import { getCaseStudies } from "@/lib/content/caseStudies";

const siteUrl = "https://hegxcorp.com";

const pages = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.8" },
  { path: "/service/web-dev", changefreq: "weekly", priority: "0.8" },
  { path: "/service/web-app", changefreq: "weekly", priority: "0.8" },
  { path: "/service/wordpress", changefreq: "weekly", priority: "0.8" },
  { path: "/service/e-comm", changefreq: "weekly", priority: "0.8" },
  { path: "/service/seo", changefreq: "weekly", priority: "0.8" },
  { path: "/service/ppc", changefreq: "weekly", priority: "0.8" },
  { path: "/service/social-med", changefreq: "weekly", priority: "0.8" },
  { path: "/service/content-marketing", changefreq: "weekly", priority: "0.8" },
  { path: "/service/ui-ux-design", changefreq: "weekly", priority: "0.8" },
  { path: "/service/branding", changefreq: "weekly", priority: "0.8" },
  { path: "/service/graphic-design", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/free-growth-audit", changefreq: "monthly", priority: "0.9" },
  { path: "/case-studies", changefreq: "weekly", priority: "0.6" },
  { path: "/industries", changefreq: "monthly", priority: "0.5" },
  { path: "/about", changefreq: "monthly", priority: "0.5" },
  { path: "/blog", changefreq: "weekly", priority: "0.6" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.3" },
] as const;

function renderUrl({
  path,
  changefreq,
  priority,
  lastmod,
}: {
  path: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}) {
  return `  <url>
    <loc>${siteUrl}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  loader: () => {
    const blogPages = getBlogs().map((blog) => ({
      path: `/blog/${blog.slug}`,
      changefreq: "monthly",
      priority: "0.6",
      lastmod: blog.publishedAt.slice(0, 10),
    }));

    const caseStudyPages = getCaseStudies().map((study) => ({
      path: `/case-studies/${study.slug}`,
      changefreq: "monthly",
      priority: "0.6",
    }));

    const urls = [...pages, ...blogPages, ...caseStudyPages].map(renderUrl).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
});
