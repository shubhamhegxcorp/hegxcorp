export interface CaseStudy {
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
  results: {
    metrics: { value: string; label: string }[];
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tarkashastra",
    client: "Tarkashastra",
    industry: "Education",
    services: ["SEO", "PPC", "Web Development"],
    metricValue: "2×",
    metricLabel: "Business Growth",
    summary: "Optimize keyword architecture and landing page conversion paths to double lead volume and drive massive revenue growth.",
    featuredImage: "/placeholders/tarkashastra-preview.svg",
    proofLabel: "SEO & PPC",
    proofDuration: "12 Months",
    challenge: {
      title: "Rising Ad Costs & Page 3 Search Rankings",
      description: "Tarkashastra, an elite coaching institute, struggled with low visibility for high-intent keywords, high cost-per-lead (CPL) on paid search, and a lack of systematic funnel conversions. Ed-tech aggregators with heavy funding dominated the space, driving PPC bids out of reach and resulting in over-inflated cost-per-clicks with a leaky funnel that dropped 80% of landing page visitors before verification."
    },
    solution: {
      title: "Intent-Matched Funnels & Schema Optimization",
      description: "We re-architected the technical SEO foundation using structured schemas and modular topic clusters. Simultaneously, we engineered lightning-fast landing pages with optimized copy, matching each PPC campaign directly to specific user intent, significantly reducing bounce rates and raising PPC ad quality scores."
    },
    results: {
      metrics: [
        { value: "2×", label: "Business Growth" },
        { value: "908", label: "Direct Phone Leads" },
        { value: "150", label: "Form Submissions" },
        { value: "-48%", label: "Reduction in CPL" }
      ],
      description: "Over a 12-month period, organic query visibility climbed to page 1 for core coaching search terms. Combined with intent-matched conversion landing pages, overall business volume doubled while paid acquisition efficiency was dramatically optimized."
    },
    testimonial: {
      quote: "Hegxcorp completely transformed our digital funnel. They didn't just give us traffic; they engineered high-quality inquiries that translated into actual enrollment growth.",
      author: "Amit Bose",
      role: "Founder, Tarkashastra"
    }
  },
  {
    slug: "g-pen",
    client: "G Pen",
    industry: "Education",
    services: ["SEO", "PPC", "Conversion Optimization"],
    metricValue: "+961%",
    metricLabel: "ROI Growth",
    summary: "Scaling return on ad spend and organic e-commerce revenue through semantic search restructuring and smart campaign bidding.",
    featuredImage: "/placeholders/gpen-preview.svg",
    proofLabel: "Google Ads",
    proofDuration: "12 Months",
    challenge: {
      title: "Ad Account Saturation & Weak SEO Visibility",
      description: "G Pen needed to transition away from expensive broad campaigns while addressing technical bottlenecks in their Shopify site structure that restricted organic crawling and category-page optimization."
    },
    solution: {
      title: "Dynamic Search Ads & Technical E-Commerce SEO",
      description: "We deployed highly segmented PPC campaigns with micro-budget allocation and custom audiences. In tandem, we executed a complete collection-page semantic markup overhaul and optimized index speeds to drive consistent rank gains."
    },
    results: {
      metrics: [
        { value: "+961%", label: "ROI Growth" },
        { value: "3.4x", label: "E-commerce ROAS" },
        { value: "+180%", label: "Category Rank Increase" },
        { value: "54k+", label: "Organic Transactions" }
      ],
      description: "Paid media scaling achieved compound returns, generating a massive boost in profitable search conversions, with organic traffic taking over as the primary source."
    },
    testimonial: {
      quote: "The outcome-first strategy Hegxcorp brought to our brand was unparalleled. Our numbers speak for themselves.",
      author: "Sarah Vance",
      role: "VP Growth, G Pen"
    }
  },
  {
    slug: "rollink",
    client: "Rollink",
    industry: "E-Commerce",
    services: ["SEO", "Content Architecture"],
    metricValue: "730K",
    metricLabel: "Organic Visitors",
    summary: "Scaling search traffic for a leading travel brand through programmatic content architecture and core web vitals optimization.",
    featuredImage: "/placeholders/rollink-preview.svg",
    proofLabel: "Organic Search",
    proofDuration: "18 Months",
    challenge: {
      title: "Lack of Search Presence for Non-Branded Queries",
      description: "Rollink dominated branded searches but had almost zero footprint for broader category terms, like travel suitcases, lightweight luggage, and folding bags."
    },
    solution: {
      title: "Programmatic Content Clusters & Speed Overhaul",
      description: "We mapped out travel intent guides and programmatic search collections. We optimized image load weights and resolved rendering blocking scripts to clear all Web Vitals performance benchmarks."
    },
    results: {
      metrics: [
        { value: "730K", label: "Organic Visitors" },
        { value: "+420%", label: "Search Impressions" },
        { value: "12+", label: "Top 3 Ranking Keywords" },
        { value: "24%", label: "Cart Conversion Rate Lift" }
      ],
      description: "Non-branded organic search traffic rapidly became a significant revenue driver, with page load optimization generating immediate drop-off reductions at checkout."
    }
  },
  {
    slug: "learning-tree",
    client: "Learning Tree",
    industry: "Education",
    services: ["Google Ads", "PPC Campaigns"],
    metricValue: "1341%",
    metricLabel: "Revenue Growth",
    summary: "Rebuilding enterprise Google Ads campaigns to focus on bottom-funnel conversion queries, resulting in massive scaling.",
    featuredImage: "/placeholders/learning-tree-preview.svg",
    proofLabel: "Google PPC",
    proofDuration: "6 Months",
    challenge: {
      title: "High Customer Acquisition Cost (CAC) on Broad Search",
      description: "Learning Tree was overspending on top-of-funnel informational queries that failed to capture actual high-intent leads, leading to high cost-per-conversion and budget waste."
    },
    solution: {
      title: "Bottom-Funnel Bid Restructure & Search Query Pruning",
      description: "We completely reorganized their search account. We excluded broad generic terms and focused exclusively on high-conversion intent keywords while using value-based bidding settings."
    },
    results: {
      metrics: [
        { value: "1341%", label: "Revenue Growth" },
        { value: "4.8x", label: "Google Ads ROAS" },
        { value: "-52%", label: "Acquisition Cost (CAC)" },
        { value: "2.8k+", label: "Qualified Enrollments" }
      ],
      description: "The restructuring lowered acquisition cost significantly, allowing campaigns to scale profitably with clean, bottom-funnel tracking."
    }
  },
  {
    slug: "orra",
    client: "Orra",
    industry: "Luxury Consumer Goods",
    services: ["Digital Strategy", "Audience Reach"],
    metricValue: "1M+",
    metricLabel: "Audience Reach",
    summary: "Establishing local search authority and luxury brand positioning for Orra’s premium collections across multiple retail outlets.",
    featuredImage: "/placeholders/orra-preview.svg",
    proofLabel: "Local Strategy",
    proofDuration: "9 Months",
    challenge: {
      title: "Fragmented Local Store Footprint Online",
      description: "Orra faced a fragmented search landscape where local branches competed against each other for organic jewelry searches rather than combining into a single dominant brand authority."
    },
    solution: {
      title: "Integrated Local Search Architecture & Premium Brand Storytelling",
      description: "We created an integrated localized SEO map structure with dynamic landing pages for each retail location, optimizing for high-intent nearby buyer searches."
    },
    results: {
      metrics: [
        { value: "1M+", label: "Audience Reach" },
        { value: "+210%", label: "Store Visit Inquiries" },
        { value: "18+", label: "Local Keywords Ranked #1" },
        { value: "3.2x", label: "Offline Store Traffic Growth" }
      ],
      description: "The localized map architecture combined with premium storytelling created localized search dominance for Orra branches across target Indian cities."
    }
  }
];
