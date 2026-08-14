export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  metricValue: string;
  metricLabel: string;
  summary: string;
  featuredImage: string;
  proofLabel?: string;
  proofDuration?: string;
  gallery?: string[];
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  approach: {
    phase: string;
    title: string;
    description: string;
  }[];
  results: {
    metrics: { value: string; label: string }[];
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    slug: "tarkashastra",
    client: "Tarkashastra",
    industry: "Education",
    services: ["SEO", "PPC", "Web Development"],
    metricValue: "2×",
    metricLabel: "Business Growth",
    summary:
      "Optimize keyword architecture and landing page conversion paths to double lead volume and drive massive revenue growth.",
    featuredImage: "/placeholders/tarkashastra-preview.svg",
    proofLabel: "SEO & PPC",
    proofDuration: "12 Months",
    gallery: ["/placeholders/tarkashastra-preview.svg", "/placeholders/gpen-preview.svg"],
    seoTitle: "Tarkashastra Case Study: 2x Lead Volume & PPC Optimization | Hegxcorp",
    seoDescription:
      "Explore how Hegxcorp re-engineered Tarkashastra's organic search visibility and PPC ad campaigns to double business conversions and lower acquisition costs.",
    featured: true,
    challenge: {
      title: "Rising Ad Costs & Page 3 Search Rankings",
      description:
        "Tarkashastra, an elite coaching institute, struggled with low visibility for high-intent keywords, high cost-per-lead (CPL) on paid search, and a lack of systematic funnel conversions. Ed-tech aggregators with heavy funding dominated the space, driving PPC bids out of reach and resulting in over-inflated cost-per-clicks with a leaky funnel that dropped 80% of landing page visitors before verification.",
    },
    solution: {
      title: "Intent-Matched Funnels & Schema Optimization",
      description:
        "We re-architected the technical SEO foundation using structured schemas and modular topic clusters. Simultaneously, we engineered lightning-fast landing pages with optimized copy, matching each PPC campaign directly to specific user intent, significantly reducing bounce rates and raising PPC ad quality scores.",
    },
    approach: [
      {
        phase: "1",
        title: "Audit & Scraping",
        description:
          "Mapped keyword intent gaps, scraped competitor ad bids, and isolated rendering-blocking scripts in the legacy student portal.",
      },
      {
        phase: "2",
        title: "Cluster Rebuild",
        description:
          "Constructed structured markup schemas for coaching categories and designed separate transactional PPC landing pages.",
      },
      {
        phase: "3",
        title: "Funnels & Launch",
        description:
          "Deployed the optimized React client, integrated first-party user verification hooks, and launched granular search query campaigns.",
      },
      {
        phase: "4",
        title: "Bid Scaling",
        description:
          "Analyzed scroll heatmaps, pruned loose negative match types, and automated Google Ads smart bidding parameters.",
      },
    ],
    results: {
      metrics: [
        { value: "2×", label: "Business Growth" },
        { value: "908", label: "Direct Phone Leads" },
        { value: "150", label: "Form Submissions" },
        { value: "-48%", label: "Reduction in CPL" },
      ],
      description:
        "Over a 12-month period, organic query visibility climbed to page 1 for core coaching search terms. Combined with intent-matched conversion landing pages, overall business volume doubled while paid acquisition efficiency was dramatically optimized.",
    },
    testimonial: {
      quote:
        "Hegxcorp completely transformed our digital funnel. They didn't just give us traffic; they engineered high-quality inquiries that translated into actual enrollment growth.",
      author: "Amit Bose",
      role: "Founder, Tarkashastra",
    },
  },
  {
    id: "cs-002",
    slug: "g-pen",
    client: "G Pen",
    industry: "Education",
    services: ["SEO", "PPC", "Conversion Optimization"],
    metricValue: "+961%",
    metricLabel: "ROI Growth",
    summary:
      "Scaling return on ad spend and organic e-commerce revenue through semantic search restructuring and smart campaign bidding.",
    featuredImage: "/placeholders/gpen-preview.svg",
    proofLabel: "Google Ads",
    proofDuration: "12 Months",
    gallery: ["/placeholders/gpen-preview.svg", "/placeholders/rollink-preview.svg"],
    seoTitle: "G Pen Case Study: +961% ROI & Google Ads Scaling | Hegxcorp",
    seoDescription:
      "How Hegxcorp restructured e-commerce search semantic architecture and optimized Smart bidding groups to scale ROAS to 3.4x for G Pen.",
    featured: true,
    challenge: {
      title: "Ad Account Saturation & Weak SEO Visibility",
      description:
        "G Pen needed to transition away from expensive broad campaigns while addressing technical bottlenecks in their Shopify site structure that restricted organic crawling and category-page optimization.",
    },
    solution: {
      title: "Dynamic Search Ads & Technical E-Commerce SEO",
      description:
        "We deployed highly segmented PPC campaigns with micro-budget allocation and custom audiences. In tandem, we executed a complete collection-page semantic markup overhaul and optimized index speeds to drive consistent rank gains.",
    },
    approach: [
      {
        phase: "1",
        title: "Crawl Diagnostic",
        description:
          "Identified nested Shopify index blocks and duplicate pagination loops hurting search engine bot crawls.",
      },
      {
        phase: "2",
        title: "Semantic Restructure",
        description:
          "Implemented nested Product schema strings and organized product listing structures around core search intents.",
      },
      {
        phase: "3",
        title: "Audience Feed Sync",
        description:
          "Wired first-party customer checkout variables straight into Google Ads conversion tracking triggers.",
      },
      {
        phase: "4",
        title: "Budget Optimization",
        description:
          "Moved legacy broad match budgets into high-intent long-tail keywords and localized PMax campaigns.",
      },
    ],
    results: {
      metrics: [
        { value: "+961%", label: "ROI Growth" },
        { value: "3.4x", label: "E-commerce ROAS" },
        { value: "+180%", label: "Category Rank Increase" },
        { value: "54k+", label: "Organic Transactions" },
      ],
      description:
        "Paid media scaling achieved compound returns, generating a massive boost in profitable search conversions, with organic traffic taking over as the primary source.",
    },
    testimonial: {
      quote:
        "The outcome-first strategy Hegxcorp brought to our brand was unparalleled. Our numbers speak for themselves.",
      author: "Sarah Vance",
      role: "VP Growth, G Pen",
    },
  },
  {
    id: "cs-003",
    slug: "rollink",
    client: "Rollink",
    industry: "E-Commerce",
    services: ["SEO", "Content Architecture"],
    metricValue: "730K",
    metricLabel: "Organic Visitors",
    summary:
      "Scaling search traffic for a leading travel brand through programmatic content architecture and core web vitals optimization.",
    featuredImage: "/placeholders/rollink-preview.svg",
    proofLabel: "Organic Search",
    proofDuration: "18 Months",
    gallery: ["/placeholders/rollink-preview.svg", "/placeholders/learning-tree-preview.svg"],
    seoTitle: "Rollink Case Study: 730k Visitors via Organic SEO | Hegxcorp",
    seoDescription:
      "Discover how Hegxcorp developed programmatic content clusters and resolved core web vitals speed blocks to scale organic visitors for Rollink.",
    featured: false,
    challenge: {
      title: "Lack of Search Presence for Non-Branded Queries",
      description:
        "Rollink dominated branded searches but had almost zero footprint for broader category terms, like travel suitcases, lightweight luggage, and folding bags.",
    },
    solution: {
      title: "Programmatic Content Clusters & Speed Overhaul",
      description:
        "We mapped out travel intent guides and programmatic search collections. We optimized image load weights and resolved rendering blocking scripts to clear all Web Vitals performance benchmarks.",
    },
    approach: [
      {
        phase: "1",
        title: "Gap Mapping",
        description:
          "Uncovered non-branded high-volume category queries that competitors were overlooking.",
      },
      {
        phase: "2",
        title: "Cluster Engineering",
        description:
          "Programmed dynamic guide structures referencing travel definitions, product specifications, and comparisons.",
      },
      {
        phase: "3",
        title: "WebVitals Audit",
        description:
          "Reduced average Largest Contentful Paint (LCP) from 4.8s to 1.9s by refactoring heavy javascript scripts.",
      },
      {
        phase: "4",
        title: "Keyword Ingestion",
        description:
          "Monitored initial indexing and established deep internal links to pass equity to high-intent transactional collections.",
      },
    ],
    results: {
      metrics: [
        { value: "730K", label: "Organic Visitors" },
        { value: "+420%", label: "Search Impressions" },
        { value: "12+", label: "Top 3 Ranking Keywords" },
        { value: "24%", label: "Cart Conversion Rate Lift" },
      ],
      description:
        "Non-branded organic search traffic rapidly became a significant revenue driver, with page load optimization generating immediate drop-off reductions at checkout.",
    },
  },
  {
    id: "cs-004",
    slug: "learning-tree",
    client: "Learning Tree",
    industry: "Education",
    services: ["Google Ads", "PPC Campaigns"],
    metricValue: "1341%",
    metricLabel: "Revenue Growth",
    summary:
      "Rebuilding enterprise Google Ads campaigns to focus on bottom-funnel conversion queries, resulting in massive scaling.",
    featuredImage: "/placeholders/learning-tree-preview.svg",
    proofLabel: "Google PPC",
    proofDuration: "6 Months",
    gallery: ["/placeholders/learning-tree-preview.svg", "/placeholders/orra-preview.svg"],
    seoTitle: "Learning Tree Case Study: +1341% Revenue via Search PPC | Hegxcorp",
    seoDescription:
      "See how Hegxcorp restructured Google Ads query bidding models to slash CAC by 52% and drive enrollments for Learning Tree.",
    featured: false,
    challenge: {
      title: "High Customer Acquisition Cost (CAC) on Broad Search",
      description:
        "Learning Tree was overspending on top-of-funnel informational queries that failed to capture actual high-intent leads, leading to high cost-per-conversion and budget waste.",
    },
    solution: {
      title: "Bottom-Funnel Bid Restructure & Search Query Pruning",
      description:
        "We completely reorganized their search account. We excluded broad generic terms and focused exclusively on high-conversion intent keywords while using value-based bidding settings.",
    },
    approach: [
      {
        phase: "1",
        title: "Query Sorting",
        description:
          "Isolated keyword lists to identify queries driving actual enrollments vs informational clicks.",
      },
      {
        phase: "2",
        title: "Negative Pruning",
        description:
          "Created comprehensive account-level lists to drop generic search trends wasting client ad budget.",
      },
      {
        phase: "3",
        title: "Value Setup",
        description:
          "Wired dynamic conversion values back to the bidding algorithm based on downstream classroom pricing.",
      },
      {
        phase: "4",
        title: "Bid Scaling",
        description:
          "Moved to Maximize Conversions with a strict target CPA threshold, safely expanding ad exposure.",
      },
    ],
    results: {
      metrics: [
        { value: "1341%", label: "Revenue Growth" },
        { value: "4.8x", label: "Google Ads ROAS" },
        { value: "-52%", label: "Acquisition Cost (CAC)" },
        { value: "2.8k+", label: "Qualified Enrollments" },
      ],
      description:
        "The restructuring lowered acquisition cost significantly, allowing campaigns to scale profitably with clean, bottom-funnel tracking.",
    },
  },
  {
    id: "cs-005",
    slug: "orra",
    client: "Orra",
    industry: "Luxury Consumer Goods",
    services: ["Digital Strategy", "Audience Reach"],
    metricValue: "1M+",
    metricLabel: "Audience Reach",
    summary:
      "Establishing local search authority and luxury brand positioning for Orra’s premium collections across multiple retail outlets.",
    featuredImage: "/placeholders/orra-preview.svg",
    proofLabel: "Local Strategy",
    proofDuration: "9 Months",
    gallery: ["/placeholders/orra-preview.svg", "/placeholders/tarkashastra-preview.svg"],
    seoTitle: "Orra Case Study: Luxury Brand Local Search Dominance | Hegxcorp",
    seoDescription:
      "How Hegxcorp designed a unified local SEO listing architecture to boost physical store foot traffic by 3.2x across Orra luxury outlets.",
    featured: false,
    challenge: {
      title: "Fragmented Local Store Footprint Online",
      description:
        "Orra faced a fragmented search landscape where local branches competed against each other for organic jewelry searches rather than combining into a single dominant brand authority.",
    },
    solution: {
      title: "Integrated Local Search Architecture & Premium Brand Storytelling",
      description:
        "We created an integrated localized SEO map structure with dynamic landing pages for each retail location, optimizing for high-intent nearby buyer searches.",
    },
    approach: [
      {
        phase: "1",
        title: "Map Sync",
        description:
          "Analyzed address, description, and contact info records across 40 physical locations to resolve local list duplicates.",
      },
      {
        phase: "2",
        title: "Site Architecture",
        description:
          "Built distinct, localized directory pages linked together under a centralized domain authority.",
      },
      {
        phase: "3",
        title: "Reviews Loop",
        description:
          "Wired an automated request system to prompt post-purchase customers to rate their location online.",
      },
      {
        phase: "4",
        title: "Local Lift",
        description:
          "Tracked call directions and nearby navigation queries to monitor store foot traffic increases.",
      },
    ],
    results: {
      metrics: [
        { value: "1M+", label: "Audience Reach" },
        { value: "+210%", label: "Store Visit Inquiries" },
        { value: "18+", label: "Local Keywords Ranked #1" },
        { value: "3.2x", label: "Offline Store Traffic Growth" },
      ],
      description:
        "The localized map architecture combined with premium storytelling created localized search dominance for Orra branches across target Indian cities.",
    },
  },
];
