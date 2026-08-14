import aiSearchRankingsImage from "@/assets/Blog/How AI Search Changes Rankings.png";
import organic from "@/assets/Blog/organic.png";
import maximizing from "@/assets/Blog/maximizing.png";
import psycho from "@/assets/Blog/psycho.png";
import core from "@/assets/Blog/core.png";
import compound from "@/assets/Blog/compound.png";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; variant: "info" | "warning" | "tip"; text: string; title?: string }
  | { type: "statistics"; value: string; label: string; description?: string }
  | { type: "image"; src: string; caption?: string; alt?: string }
  | { type: "divider" }
  | { type: "code"; code: string; language?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "pull-quote"; text: string };

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  blocks?: ContentBlock[];
  category: string;
  readTime: string;
  featuredImage: string;
  previewImage?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string; // ISO 8601 string
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
}

export const blogs: Blog[] = [
  {
    id: "blog-001",
    slug: "how-ai-search-reshapes-organic-traffic",
    title: "How AI Search Is Reshaping Organic Traffic",
    category: "AI Search",
    readTime: "5 min read",
    excerpt:
      "Generative search engines are fundamentally shifting user search behavior. Learn how to optimize your content architecture for AI-driven query platforms.",
    publishedAt: "2026-06-14T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Principal Growth Strategist",
      bio: "Akshay Jadia is the Principal Growth Strategist at Hegxcorp. With over a decade of experience engineering search architectures and campaign performance pipelines, he helps enterprise brands scale their customer acquisition channels profitably.",
    },
    featuredImage: organic,
    previewImage: organic,
    seoTitle: "How AI Search Reshapes Organic Traffic | Hegxcorp Insights",
    seoDescription:
      "Generative search engines and LLM-powered answer bots are shifting user behavior. Learn how to construct a content architecture designed for AI-driven search models.",
    featured: true,
    content: `
      <h2>The Shift from Ten Blue Links to Generative Answers</h2>
      <p>Search engines are no longer just directories pointing users to other web destinations. With the rise of Search Generative Experience (SGE) and LLM-powered answer bots, users receive complete, multi-perspective summaries directly in the viewport. This shifts user behaviour from link-clicking to direct answer consumption.</p>
      
      <h2>Understanding Retrieval-Augmented Generation (RAG) in Search</h2>
      <p>Modern search engines crawl websites not just to rank keywords, but to ingest context for RAG systems. To rank inside AI summaries, your content must satisfy complex semantic queries rather than simple keyword matches. This requires a transition from keyword stuffing to robust concept mapping.</p>
      
      <h2>Structuring Content for AI Ingestion</h2>
      <p>To ensure your organic content is selected as a source by AI models, follow these three core parameters:</p>
      <ul>
        <li><strong>Factual Precision:</strong> State answers clearly at the top of headers. AI engines prefer concise sentences that are easy to parse into vector search databases.</li>
        <li><strong>Semantic Schemas:</strong> Use structured data (JSON-LD) to clearly delineate product features, FAQs, and definitions.</li>
        <li><strong>Expertise Signals (E-E-A-T):</strong> Link your arguments to real-world datasets, case studies, and proprietary research that search engines cannot easily hallucinate.</li>
      </ul>

      <h2>The Future of Organic CTR</h2>
      <p>While informational queries will see a reduction in click-through rates, high-intent transactional queries will become more valuable. Users visiting your site from generative summaries are pre-qualified and significantly closer to conversion. The websites that adapt their architecture to support LLM references will dominate search in the next decade.</p>
    `,
    blocks: [
      { type: "heading", level: 2, text: "The Shift from Ten Blue Links to Generative Answers" },
      {
        type: "paragraph",
        text: "Search engines are no longer just directories pointing users to other web destinations. With the rise of Search Generative Experience (SGE) and LLM-powered answer bots, users receive complete, multi-perspective summaries directly in the viewport. This shifts user behaviour from link-clicking to direct answer consumption.",
      },
      {
        type: "pull-quote",
        text: "The transition to generative answers shifts user behaviour from link-clicking to direct, in-viewport consumption.",
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding Retrieval-Augmented Generation (RAG) in Search",
      },
      {
        type: "paragraph",
        text: "Modern search engines crawl websites not just to rank keywords, but to ingest context for RAG systems. To rank inside AI summaries, your content must satisfy complex semantic queries rather than simple keyword matches. This requires a transition from keyword stuffing to robust concept mapping.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Technical Context: RAG Pipelines",
        text: "Retrieval-Augmented Generation processes match queries to multi-dimensional vector databases using cosine similarity, serving factual content sections to LLMs dynamically.",
      },
      { type: "heading", level: 2, text: "Structuring Content for AI Ingestion" },
      {
        type: "paragraph",
        text: "To ensure your organic content is selected as a source by AI models, follow these three core parameters:",
      },
      {
        type: "list",
        items: [
          "**Factual Precision:** State answers clearly at the top of headers. AI engines prefer concise sentences that are easy to parse into vector search databases.",
          "**Semantic Schemas:** Use structured data (JSON-LD) to clearly delineate product features, FAQs, and definitions.",
          "**Expertise Signals (E-E-A-T):** Link your arguments to real-world datasets, case studies, and proprietary research that search engines cannot easily hallucinate.",
        ],
      },
      {
        type: "statistics",
        value: "147%",
        label: "Conversion Lift for Semantic Content",
        description:
          "Transactional conversion rates saw massive increases when landing layouts optimized for direct answer retrieval.",
      },
      { type: "heading", level: 2, text: "The Future of Organic CTR" },
      {
        type: "paragraph",
        text: "While informational queries will see a reduction in click-through rates, high-intent transactional queries will become more valuable. Users visiting your site from generative summaries are pre-qualified and significantly closer to conversion. The websites that adapt their architecture to support LLM references will dominate search in the next decade.",
      },
    ],
  },
  {
    id: "blog-002",
    slug: "how-ai-search-changes-rankings",
    title: "How AI Search Changes Rankings",
    category: "SEO",
    readTime: "6 min read",
    excerpt:
      "A technical breakdown of semantic search index shifts and how search algorithms evaluate topical authority inside generative answers.",
    publishedAt: "2026-06-10T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Technical Director",
      bio: "Akshay Jadia is the Technical Director at Hegxcorp. He leads full-stack engineering initiatives and is an expert in search engine indexing mechanics, dense retrieval pipelines, and semantic schema architectures.",
    },
    featuredImage: aiSearchRankingsImage,
    previewImage: aiSearchRankingsImage,
    seoTitle: "How AI Search Changes SEO Rankings & Indexing | Hegxcorp",
    seoDescription:
      "A technical breakdown of dense vector search databases and how topical authority algorithms evaluate content collections inside modern search systems.",
    featured: false,
    content: `
      <h2>Semantic Overlays vs Vector Databases</h2>
      <p>The transition from lexical matching to dense vector search has changed how content is catalogued. Instead of matching exact string patterns, search engines map questions and answers into high-dimensional vector spaces, calculating relevance using cosine similarity. This means pages with completely different wording can rank if their semantic intent matches.</p>

      <h2>The Death of Page-Level Keyword Optimization</h2>
      <p>Traditional on-page SEO targeting isolated keywords is obsolete. Today's search engines group pages into topic clusters. If a cluster does not comprehensively cover a subject, individual articles will fail to rank. Topical coverage is now a heavier ranking weight than direct backlink counts.</p>

      <h2>Core Actions for Topic Authority</h2>
      <p>To survive the transition, teams should focus on building comprehensive guides that cover broad parent subjects, linked structurally to highly focused child articles. This signals deep topical coverage to vector indexes.</p>
    `,
  },
  {
    id: "blog-003",
    slug: "maximizing-performance-max-campaigns",
    title: "Maximizing Performance Max Campaigns",
    category: "Paid Media",
    readTime: "7 min read",
    excerpt:
      "How to structure asset groups, feed signals, and first-party customer audiences to scale Google Ads budgets profitably.",
    publishedAt: "2026-06-06T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Paid Media Lead",
      bio: "Akshay Jadia is the Paid Media Lead at Hegxcorp. He oversees multi-million dollar performance marketing portfolios, engineering custom audience models, feeds, and automation scripts across Google and Meta ad platforms.",
    },
    featuredImage: maximizing,
    previewImage: maximizing,
    seoTitle: "Optimizing Google Ads Performance Max Campaigns | Hegxcorp",
    seoDescription:
      "A tactical guide on structuring asset groups, audience signals, first-party data, and negatives to scale Performance Max ad budgets profitably.",
    featured: false,
    content: `
      <h2>The Black Box of PMax</h2>
      <p>Google's Performance Max is a highly automated campaign type that spans Search, YouTube, Display, Discover, and Maps. However, without strict constraints, PMax can waste budget on poor-quality display placements or brand bidding. Controlling PMax requires feeding it high-value data signals.</p>

      <h2>Asset Group Isolation & Audience Signals</h2>
      <p>Do not mix products or messaging within a single asset group. Instead, isolate asset groups by product category and provide specific search themes and customer match lists. This gives Google's bidding algorithm a baseline of what a high-converting user looks like.</p>

      <h2>Negative Keyword Exclusions</h2>
      <p>Ensure brand keywords are excluded from your PMax campaigns to prevent it from stealing credit from organic search. Set up account-level negative keyword lists to target strictly non-brand queries and maximize net incremental revenue.</p>
    `,
  },
  {
    id: "blog-004",
    slug: "psychology-of-high-converting-landing-pages",
    title: "The Psychology of High-Converting Landing Pages",
    category: "Conversion",
    readTime: "4 min read",
    excerpt:
      "A deep dive into cognitive load reduction, structural hierarchy, and decision-making frameworks that drive lower acquisition costs.",
    publishedAt: "2026-05-28T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "CRO Lead",
      bio: "Akshay Jadia is the Conversion Rate Optimisation Lead at Hegxcorp. She specializes in cognitive design frameworks, heuristic evaluations, and interactive A/B experimentation that drives down customer acquisition costs.",
    },
    featuredImage: psycho,
    previewImage: psycho,
    seoTitle: "High-Converting Landing Page UX & Psychology | Hegxcorp",
    seoDescription:
      "Analyze the psychological frameworks of page layouts. Discover how to reduce cognitive load and use visual trust cues to maximize landing page conversions.",
    featured: false,
    content: `
      <h2>Friction and Cognitive Load</h2>
      <p>Conversion optimization is less about adding elements and more about removing friction. Every input field, secondary navigation link, or visual distraction increases cognitive load, driving down overall conversion rate. A user should understand your offer within three seconds of landing.</p>

      <h2>The Principle of Choice Architecture</h2>
      <p>Limit the number of choices a user must make. If your page offers both an ebook download and a direct strategy call, they will often choose neither. Establish a singular, clear primary call to action (CTA) and keep secondary actions minimal and low contrast.</p>

      <h2>Social Proof Integration</h2>
      <p>Position trust metrics, customer logos, and testimonials directly next to conversion action points. When social proof is placed near CTA inputs, it alleviates immediate buyer anxiety and improves form completion rates.</p>
    `,
  },
  {
    id: "blog-005",
    slug: "core-web-vitals-and-organic-growth",
    title: "Core Web Vitals & Organic Growth",
    category: "Web Development",
    readTime: "5 min read",
    excerpt:
      "How sub-second rendering times, low cumulative layout shifts, and responsive interactions directly boost organic search positioning.",
    publishedAt: "2026-05-20T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Technical Web Engineer",
      bio: "Akshay Jadia is a Technical Web Engineer at Hegxcorp. He designs headless CMS integrations, static site rendering architectures, and performance-tuned front-ends that maintain sub-second LCP scores.",
    },
    featuredImage: core,
    previewImage: core,
    seoTitle: "Core Web Vitals Impact on Organic Search Rankings | Hegxcorp",
    seoDescription:
      "Examine how Cumulative Layout Shift, Largest Contentful Paint, and page responsiveness affect search engine index prioritization and organic search listings.",
    featured: false,
    content: `
      <h2>Speed as a Ranking Tie-Breaker</h2>
      <p>While content relevance is paramount, Google uses page experience metrics—specifically Core Web Vitals—as a critical ranking signal. If two pages cover a query with similar authority, the faster page with a stable visual layout will win the top slot.</p>

      <h2>Optimizing for LCP and CLS</h2>
      <p>Largest Contentful Paint (LCP) should occur within 2.5 seconds of page load. Ensure images above the fold are preloaded and that layout elements have pre-allocated aspect ratios to eliminate Cumulative Layout Shift (CLS).</p>

      <h2>Server-Side Rendering (SSR) Benefits</h2>
      <p>Using SSR frameworks like TanStack Start or Next.js ensures search engines receive pre-rendered HTML immediately, boosting crawl budget efficiency and search indexation speed.</p>
    `,
  },
  {
    id: "blog-006",
    slug: "engineering-compounding-growth-systems",
    title: "Engineering Compounding Growth Systems",
    category: "Growth Systems",
    readTime: "8 min read",
    excerpt:
      "Why isolated search campaigns fail, and how to build interconnected organic loops, paid acquisition, and conversion funnels.",
    publishedAt: "2026-05-12T08:00:00.000Z",
    author: {
      name: "Akshay Jadia",
      role: "Principal Growth Strategist",
      bio: "Akshay Jadia is the Principal Growth Strategist at Hegxcorp. With over a decade of experience engineering search architectures and campaign performance pipelines, he helps enterprise brands scale their customer acquisition channels profitably.",
    },
    featuredImage: compound,
    previewImage: compound,
    seoTitle: "Interconnected Growth Marketing Architecture | Hegxcorp",
    seoDescription:
      "Break down internal marketing silos. Design a compounding growth strategy linking organic SEO loops, PPC campaigns, and conversion optimization.",
    featured: false,
    content: `
      <h2>The Trap of Marketing Silos</h2>
      <p>Many businesses separate their SEO, PPC, and product development teams. This structure creates massive inefficiencies: PPC teams target high-cost terms that the SEO team could easily capture organically, and web developers build pages that destroy search authority.</p>

      <h2>Unified Audience Data Sharing</h2>
      <p>A true growth engine shares search query data across channels. High-performing search terms from paid campaigns should immediately seed the content pipeline for the SEO team. Organic search landers should be used to build retargeting audiences for paid social campaigns.</p>

      <h2>The Compounding Conversion Loop</h2>
      <p>By optimizing conversion funnels, you raise the value of every single visit. This increases your maximum bid capacity on PPC channels, enabling you to acquire competitive ad placements that competitors cannot afford, fueling further traffic and customer insights.</p>
    `,
  },
];
