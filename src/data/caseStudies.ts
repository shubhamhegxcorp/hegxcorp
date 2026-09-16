export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  clientSubtitle?: string;
  aboutClient?: {
    description: string;
    founder?: string;
    founderTitle?: string;
    founderImage?: string;
    established?: string;
    locations?: string[];
    rating?: { score: string; count: string; source: string };
    websiteUrl?: string;
    externalProofUrl?: string;
    externalProofLabel?: string;
  };
  industry: string;
  services: string[];
  metricValue: string;
  metricLabel: string;
  summary: string;
  featuredImage: string;
  logo?: string;
  proofLabel?: string;
  proofDuration?: string;
  gallery?: string[];
  challenge: {
    title: string;
    description: string;
    points?: string[];
  };
  solution: {
    title: string;
    description: string;
    points?: string[];
  };
  whatWeDid?: {
    num: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  approach: {
    phase: string;
    title: string;
    description: string;
  }[];
  resultsTable?: {
    timeframe: string;
    rows: {
      metric: string;
      before: string;
      after: string;
      change?: string;
    }[];
    paidSearchHighlight?: string;
  };
  results: {
    metrics: { value: string; label: string }[];
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image?: string;
  };
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    slug: "tarkashastra",
    client: "Tarkashastra Academy",
    clientSubtitle: "Premier Entrance Coaching for CAT, MBA CET, IPMAT & Law",
    aboutClient: {
      description:
        "Tarkashastra Academy is a Pune-based coaching institute for MBA, BBA, Law, and MCA entrance exams (CAT, IPMAT, CLAT, NIMCET, MBA CET and others), offering both classroom and online programs. Founded in 2019 by Aditya Thakare — a former J.P. Morgan Chase team lead and 99.9 percentile scorer in CAT QA & DILR — the institute has grown into a multi-vertical exam-prep powerhouse with centres on JM Road and Balaji Nagar in Pune, and a stellar 4.8-star rating from over 1,200 verified Google reviews.",
      founder: "Aditya Thakare",
      founderTitle: "Founder & Lead Mentor (Ex-J.P. Morgan Chase | 99.9%ile CAT QA & DILR)",
      founderImage: "/case-studies/tarkashastra/aditya-thakare-founder.png",
      established: "2019",
      locations: ["JM Road, Pune", "Balaji Nagar, Pune"],
      rating: { score: "4.8", count: "1,200+ Reviews", source: "Google" },
      websiteUrl: "https://www.tarkashastra.co.in",
      externalProofUrl: "https://collegedunia.com/institute/590-tarkashastra-pune",
      externalProofLabel: "Verified on Collegedunia",
    },
    industry: "Education & EdTech",
    services: [
      "SEO & Content Architecture",
      "Local SEO (GBP)",
      "High-Intent Paid Search",
      "Off-Page Authority",
      "YouTube Channel Growth",
    ],
    metricValue: "+200%",
    metricLabel: "Organic Traffic (in 40 Days)",
    summary:
      "Re-engineered information architecture, local GBP authority, and Google Ads funnels to turn stagnant organic traffic into 1,151+ high-intent inbound inquiries in just 40 days.",
    featuredImage: "/case-studies/tarkashastra/tarkashastra-hero-preview.png",
    logo: "/case-studies/tarkashastra/tarkashastra-logo.png",
    proofLabel: "SEO, Local & Ads",
    proofDuration: "40 Days",
    gallery: [
      "/case-studies/tarkashastra/tarkashastra-hero-preview.png",
      "/case-studies/tarkashastra/tarkashastra-classroom.webp",
      "/case-studies/tarkashastra/tarkashastra-web-preview.png",
      "/case-studies/tarkashastra/tarkashastra-growth-graph.png",
    ],
    seoTitle: "Tarkashastra Case Study: +200% Organic Traffic & 1,151+ Calls in 40 Days | Hegxcorp",
    seoDescription:
      "See how Hegxcorp restructured Tarkashastra Academy's organic search architecture and PPC campaigns to generate 1,151 calls and 153 form submissions in 40 days.",
    featured: true,
    challenge: {
      title: "Organic Traffic Landing on Non-Converting PDF Downloads",
      description:
        "Tarkashastra's organic search traffic was landing almost entirely on the wrong pages — low-value PDF downloads (like book summaries) rather than the course and enquiry pages that actually drive admissions. The website was receiving visitors, but they dropped off without ever converting into qualified coaching inquiries or classroom walk-ins.",
    },
    solution: {
      title: "Commercial Intent Architecture, Local Authority & Focused Google Ads",
      description:
        "We executed a comprehensive 5-point growth strategy: rebuilding information architecture around actual student search intent, dominating local Google Business Profiles in Pune, authoring high-ranking Quora answers, scaling faculty-led YouTube content, and targeting high-intent Google Ads to capture seasonal demand efficiently.",
    },
    whatWeDid: [
      {
        num: "01",
        title: "SEO & Content Architecture",
        description:
          "Rebuilt the site's entire hierarchy around commercial student intent, mapping queries across the journey from exam awareness to course admissions.",
        deliverables: [
          "Rebuilt information architecture around transactional search intent",
          "Rewrote commercial and course pages with intent-specific keywords",
          "Implemented instant indexing protocols — pages indexed in under 48 hours",
          "Achieved first-page Google rankings across core commercial and informational URLs",
        ],
      },
      {
        num: "02",
        title: "Off-Page SEO & Authority Building",
        description:
          "Targeted high-intent community questions on platforms like Quora to capture students actively comparing entrance coaching in Pune.",
        deliverables: [
          "Identified top-intent questions ('best CAT/CLAT coaching institute in Pune')",
          "Published deeply authoritative, SEO-optimized answers by subject faculty",
          "Answers rank #1 at the top of relevant search threads, driving compounding referral traffic",
        ],
      },
      {
        num: "03",
        title: "Local SEO & Google Business Profile Dominance",
        description:
          "Optimized local listings for JM Road and Balaji Nagar centres to capture geographic coaching searches in Pune.",
        deliverables: [
          "Optimized GBP metadata with localized Pune exam keywords",
          "Maintained active posts, results announcements, and updates",
          "Ranks prominently for 'MBA coaching in Pune' and 'CAT coaching in Pune' alongside legacy institutes like T.I.M.E. and IMS",
        ],
      },
      {
        num: "04",
        title: "YouTube Channel Growth & Video SEO",
        description:
          "Restructured the Tarkashastra YouTube channel into a high-converting organic discovery engine for aspirants.",
        deliverables: [
          "Restructured channel with keyword-optimized metadata and organized course playlists",
          "Produced high-retention Shorts and long-form problem-solving sessions with faculty",
          "Significant lift in organic video impressions, watch time, and subscriber conversions",
        ],
      },
      {
        num: "05",
        title: "Paid Search (Google Ads Precision)",
        description:
          "Launched hyper-targeted search campaigns tailored to seasonal exam-prep demand spikes across Maharashtra.",
        deliverables: [
          "Demographic- and location-targeted campaigns tuned to seasonal exam calendars",
          "Keyword-level bidding strategies across all campaign types to tightly control cost per lead",
          "Generated 908+ unique phone leads and ~150 form submissions at an avg. CPC of ₹54.08",
        ],
      },
    ],
    approach: [
      {
        phase: "1",
        title: "Intent Audit",
        description:
          "Isolated low-value PDF crawl loops and mapped commercial intent gaps across CAT, CET, IPMAT, and Law.",
      },
      {
        phase: "2",
        title: "Architecture Rebuild",
        description:
          "Reconstructed course landing pages, implemented structured schema, and enabled rapid search indexing.",
      },
      {
        phase: "3",
        title: "Local & Content Push",
        description:
          "Optimized Pune GBP listings, deployed Quora answer dominance, and launched YouTube faculty video series.",
      },
      {
        phase: "4",
        title: "PPC Scaling",
        description:
          "Deployed granular keyword bidding on Google Ads, capturing high-intent inquiries at just ₹54.08 CPC.",
      },
    ],
    resultsTable: {
      timeframe: "In 40 Days",
      rows: [
        { metric: "Organic Search Traffic", before: "1%", after: "200%", change: "+199% Lift" },
        { metric: "Organic Leads Share", before: "10%", after: "80%", change: "8x Increase" },
        { metric: "Inbound Calls Received", before: "319", after: "1,151", change: "+260% Growth" },
        { metric: "Lead Form Submissions", before: "0–5", after: "153", change: "30x+ Increase" },
      ],
      paidSearchHighlight:
        "From Google Ads alone: 908+ unique phone call leads and ~150 form submissions, achieved at an average CPC of ₹54.08.",
    },
    results: {
      metrics: [
        { value: "200%", label: "Organic Traffic" },
        { value: "1,151", label: "Inbound Calls" },
        { value: "153", label: "Form Submissions" },
        { value: "₹54.08", label: "Avg. Google CPC" },
      ],
      description:
        "Within just 40 days of deployment, Tarkashastra reversed its traffic misalignment. Organic search visitors shifted from bouncing off PDFs to enrolling through dedicated course funnels, yielding 1,151 inbound phone inquiries, 153 online form submissions, and dominant local rankings across Pune.",
    },
    testimonial: {
      quote:
        "Hegxcorp completely transformed our digital funnel. They didn't just give us traffic; they engineered high-quality student inquiries that translated into actual classroom admissions within weeks.",
      author: "Aditya Thakare",
      role: "Founder & Lead Mentor, Tarkashastra Academy",
      image: "/case-studies/tarkashastra/aditya-thakare-founder.png",
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
    client: "Orra Fine Jewellery",
    clientSubtitle: "India's Leading Diamond & Platinum Retailer · 95 Boutiques Across 40 Cities",
    aboutClient: {
      description:
        "Orra is one of India's leading diamond and platinum jewellery retailers, founded in 2004 and headquartered in Mumbai. The brand operates 95 stores across 40 cities and has consistently been at the forefront of design leadership and product innovation with 5 global design centres in Tokyo, Hong Kong, Antwerp, Mumbai, and New York. Orra is known for its patented 73-faceted ORRA Crown Star diamond, launched in 2020, and sells both in-store and online at orra.co.in.",
      established: "2004",
      locations: ["Mumbai (HQ)", "Delhi", "Hyderabad", "Bangalore", "95+ Boutiques Nationwide"],
      rating: { score: "4.7", count: "8,500+ Reviews", source: "Google & Store Reviews" },
      websiteUrl: "https://orra.co.in",
      externalProofUrl: "https://orra.co.in/aboutus",
      externalProofLabel: "Verified on Orra Official",
    },
    industry: "Luxury Jewellery & E-Commerce",
    services: [
      "TV-to-Mobile Retargeting",
      "Competitor Audience Conquesting",
      "Programmatic Display & Video",
      "Facebook & YouTube Targeted IDs",
      "Hyperlocal Store Foot-Traffic Growth",
    ],
    metricValue: "1M+",
    metricLabel: "Unique Mobile Viewers Reached",
    summary:
      "Bridged offline TV viewership with precision mobile retargeting across a 40M+ smartphone device repository, achieving a 28% VTR and converting broadcast awareness into high-intent boutique visits.",
    featuredImage: "/case-studies/orra/orra-hero-preview.png",
    logo: "/case-studies/orra/orra-logo.png",
    proofLabel: "TV-to-Mobile Strategy",
    proofDuration: "35 Days",
    gallery: [
      "/case-studies/orra/orra-hero-preview.png",
      "/case-studies/orra/orra-main-banner-desktop.jpg",
      "/case-studies/orra/orra-jewellery-collection.png",
      "/case-studies/orra/orra-journey.jpg",
    ],
    seoTitle: "Orra Case Study: How Orra Boosted Digital Share of Voice via TV-to-Mobile Retargeting | Hegxcorp",
    seoDescription:
      "How Hegxcorp linked offline TV broadcast exposure to precision mobile retargeting for Orra Jewellery, reaching 1M+ verified TV viewers with a 28% video VTR in 35 days.",
    featured: true,
    challenge: {
      title: "Connecting Offline TV Broadcast Viewership to Mobile-First Jewellery Shoppers",
      description:
        "Orra's desktop e-commerce experience (built on Magento 2) was performing well, but the brand needed a stronger mobile play — jewellery shoppers were increasingly browsing and researching on their phones rather than desktop. Beyond just going mobile-first, Orra wanted to convert its competitors' TV ad exposure into its own digital advantage — a problem no one had cracked before: linking offline TV viewership data to online mobile targeting.",
    },
    solution: {
      title: "Three-Layer TV-to-Mobile Audience Targeting & Conquesting Engine",
      description:
        "We built a synchronized three-layer targeting architecture connecting offline TV viewership directly to mobile devices: (1) Complementing Orra's TV campaign by retargeting recent viewers of Orra's own commercials, (2) Competitor conquesting by reaching audiences who watched competitors' jewellery TV ads, and (3) Hyperlocal filtering focused strictly on metropolitan cities where Orra operates physical showrooms (Delhi, Hyderabad, Bangalore) so digital exposure could convert directly into in-store visits.",
    },
    whatWeDid: [
      {
        num: "01",
        title: "TV Viewership Data Ingestion (40M+ Smartphone Pool)",
        description:
          "Harnessed a repository of 40M+ profiled smartphone users to identify individuals actively exposed to jewellery TV commercials across national broadcast networks.",
        deliverables: [
          "Isolated smartphone IDs of consumers actively watching Orra and competitor TV ads",
          "Automated cross-device matching between television sets and personal mobile devices",
          "Excluded non-target demographics to protect media budget from broad waste",
          "Structured real-time audience segments for programmatic DSP and social sync",
        ],
      },
      {
        num: "02",
        title: "Cross-Platform Retargeting (Facebook, YouTube & Programmatic)",
        description:
          "Served high-impact video and banner creative across premium mobile apps, Facebook, and YouTube to identified TV viewers within their active browsing windows.",
        deliverables: [
          "Deployed coordinated Banner + Video creative formats across 35 campaign days",
          "Frequency-capped delivery to maximize brand recall without ad saturation",
          "Applied intelligent dayparting prioritizing afternoon slots and weekend spikes",
          "Targeted IDs mapped directly into programmatic DSP bidding rules",
        ],
      },
      {
        num: "03",
        title: "Hyperlocal Showroom Foot-Traffic Acceleration",
        description:
          "Geofenced media delivery around Orra's physical boutique network across high-density metro hubs to turn digital awareness into physical store walk-ins.",
        deliverables: [
          "Hyperlocal geotargeting concentrated on Delhi, Hyderabad, and Bangalore",
          "Dynamic showroom creative highlighting nearest boutique locations and directions",
          "Weekend-optimized pacing delivering +25% higher VTR and +7% higher CTR",
          "Prioritized the high-purchasing-intent 45–54 female demographic segment",
        ],
      },
    ],
    approach: [
      {
        phase: "1",
        title: "Audience Repository Mapping",
        description:
          "Queried 40M+ profiled smartphone users to identify viewers of Orra's commercials and competitor jewellery TV ads.",
      },
      {
        phase: "2",
        title: "Omnichannel Creative Deployment",
        description:
          "Launched synchronized banner and video campaigns across Programmatic DSPs, Facebook, and YouTube targeted IDs.",
      },
      {
        phase: "3",
        title: "Hyperlocal Metro Clustering",
        description:
          "Restricted ad spend to key showroom territories including Delhi, Hyderabad, and Bangalore for physical store conversion.",
      },
      {
        phase: "4",
        title: "Performance Optimization",
        description:
          "Scaled afternoon and weekend schedules, focusing media delivery on high-intent female (45–54) luxury jewellery shoppers.",
      },
    ],
    resultsTable: {
      timeframe: "35-Day Campaign",
      rows: [
        { metric: "Unique Mobile Viewers Reached", before: "0 (Siloed TV)", after: "1,000,000+", change: "1M+ Reached" },
        { metric: "Video View-Through-Rate (VTR)", before: "12% (Benchmark)", after: "28%", change: "+133% vs Benchmark" },
        { metric: "Female Audience CTR", before: "Standard CTR", after: "+57% Higher", change: "+57% vs Male" },
        { metric: "45–54 Demographic Lift", before: "Average", after: "+37% VTR / +13% CTR", change: "Top Intent Bracket" },
        { metric: "Weekend vs Weekday Lift", before: "Baseline", after: "+25% VTR / +7% CTR", change: "Peak Weekend Surge" },
      ],
      paidSearchHighlight:
        "Execution highlights: 1M+ unique individuals reached on mobile; 28% View-Through-Rate on video; female audiences delivered 57% higher CTR; afternoon slots generated 13% higher engagement.",
    },
    results: {
      metrics: [
        { value: "1M+", label: "Unique Mobile Reach" },
        { value: "28%", label: "Video View-Through-Rate" },
        { value: "+57%", label: "Female Audience CTR Lift" },
        { value: "35 Days", label: "Campaign Window" },
      ],
      description:
        "Over 1 million unique individuals who had recently watched jewellery TV commercials were successfully engaged on mobile devices. The campaign delivered an exceptional 28% View-Through-Rate, with female audiences delivering 57% higher CTR and the 45–54 age group driving +37% higher VTR, establishing a proven blueprint for turning offline broadcast viewership into measurable luxury store revenue.",
    },
    testimonial: {
      quote:
        "Hegxcorp solved what was previously impossible for our brand: turning competitors' TV commercials into our mobile customer acquisition advantage while driving foot traffic into our boutiques.",
      author: "Orra Marketing Leadership",
      role: "Brand & Digital Strategy, Orra Fine Jewellery",
      image: "/case-studies/orra/orra-logo.png",
    },
  },
  {
    id: "cs-006",
    slug: "nivesh",
    client: "Nivesh",
    clientSubtitle: "Digital-First Wealth Platform for Mutual Fund Distributors & Retail Investors",
    aboutClient: {
      description:
        "Nivesh is a digital-first wealth platform headquartered in India (originally Noida, founded in August 2016 by Anurag Garg and Sridhar Srinivasan under Providential Advisory Services). It started as a mass-market mutual fund investment platform aimed at under-penetrated Tier-2/Tier-3 Indian markets, and has since evolved into a comprehensive B2B2C platform serving both individual investors and mutual fund distributors/financial advisors — offering mutual funds, corporate bonds, fixed deposits, and digital gold. Nivesh has raised funding across multiple rounds (including a ₹3 crore seed round via LetsVenture backed by investors like Google India MD Rajan Anandan) and expanded through acquisitions, including wealth management firm Wealthzi in 2023, adding registered investment advisory (RIA) capability. Their site is live at nivesh.com.",
      founder: "Anurag Garg & Sridhar Srinivasan",
      founderTitle: "Co-Founders, Nivesh (Providential Advisory Services)",
      founderImage: "/case-studies/nivesh/Shridhar-DuSXL5On.png",
      established: "2016",
      locations: ["Noida (HQ)", "Mumbai", "Bangalore", "Tier-2 & Tier-3 City Network"],
      rating: { score: "4.8", count: "12,000+ Reviews", source: "Google & App Ratings" },
      websiteUrl: "https://nivesh.com",
      externalProofUrl: "https://nivesh.com/about-us",
      externalProofLabel: "Verified on Nivesh Official",
    },
    industry: "FinTech",
    services: [
      "SEO Information Architecture",
      "Commercial & Informational Content Clusters",
      "Instant Indexing Protocol",
      "Interactive Financial Calculators",
      "Internal Link Equity Funnels",
    ],
    metricValue: "+700%",
    metricLabel: "Organic Traffic (in 6 Months)",
    summary:
      "Restructured disorganized taxonomy into logical content clusters, deployed Google instant indexing APIs, and engineered interactive financial tools to grow organic traffic by 700% in 6 months.",
    featuredImage: "/case-studies/nivesh/nivesh-hero-preview.png",
    logo: "/case-studies/nivesh/nivesh-logo.png",
    proofLabel: "SEO & Content Architecture",
    proofDuration: "6 Months",
    gallery: [
      "/case-studies/nivesh/nivesh-hero-preview.png",
      "/case-studies/nivesh/dashboard_webImg-DP8Jk-Hx.jpeg",
      "/case-studies/nivesh/Website-Home-Page-Design-D7JLAhhb.png",
      "/case-studies/nivesh/OurStory-DIzP_d_f.png",
    ],
    seoTitle: "Nivesh Case Study: How Nivesh Grew Organic Traffic by 700% in 6 Months | Hegxcorp",
    seoDescription:
      "Learn how Hegxcorp rebuilt Nivesh's SEO information architecture, deployed content clusters, and added interactive calculators to achieve +700% organic growth in 6 months.",
    featured: true,
    challenge: {
      title: "Disorganized Information Architecture & 90% Shallow Page Indexing",
      description:
        "Nivesh's website had a disorganized information architecture, and roughly 90% of its pages carried very shallow SEO optimization. As a financial platform targeting first-time investors across hundreds of Indian cities, most of its content wasn't structured to actually rank or convert — commercial pages (fund categories, calculators, distributor tools) and informational content weren't distinguished or interlinked in a way search engines or users could navigate well.",
    },
    solution: {
      title: "Content Clusters, Instant Indexing APIs & Interactive Calculators",
      description:
        "We executed a comprehensive growth strategy focused squarely on the commercial and informational page clusters doing the heavy lifting: restructuring the fund and product taxonomy into clear content clusters, completely overhauling commercial and educational pages around actual search intent, deploying instant indexing APIs for rapid search engine discovery, and building interactive financial calculators to capture high-intent long-tail search traffic.",
    },
    whatWeDid: [
      {
        num: "01",
        title: "Rebuilt Site Information Architecture & Taxonomy",
        description:
          "Restructured the entire site around clear content clusters, grouping related commercial and informational pages so both users and search engines could navigate the fund and product taxonomy logically.",
        deliverables: [
          "Separated transactional product pages (mutual funds, corporate bonds, FDs) from educational guides",
          "Engineered category hierarchies reflecting AMFI mutual fund classifications and risk profiles",
          "Eliminated orphan URLs and crawl traps across legacy distributor subdirectories",
          "Mapped high-intent Hindi and English keywords across Tier-2 and Tier-3 investor search queries",
        ],
      },
      {
        num: "02",
        title: "Commercial & Informational Content Overhaul",
        description:
          "Rewrote and deployed SEO-friendly commercial category pages and educational financial planning guides to match actual investor search intent.",
        deliverables: [
          "Overhauled fund category pages with curated comparison tables and scheme returns data",
          "Authored comprehensive financial planning and investment education guides",
          "Created B2B2C distributor portal content showcasing RIA capabilities and partner onboarding",
          "Optimized semantic HTML, JSON-LD financial schemas, and conversion CTAs",
        ],
      },
      {
        num: "03",
        title: "Technical SEO, Instant Indexing & Interactive Calculators",
        description:
          "Integrated instant indexing protocols and built interactive wealth tools that serve as high-engagement, compounding organic growth assets.",
        deliverables: [
          "Implemented Google Instant Indexing API to get new and updated product pages indexed in hours",
          "Engineered interactive SIP, Lumpsum, SWP, and Tax-Saving (ELSS) calculators",
          "Rebuilt internal link equity flow to funnel authority toward target commercial conversion pages",
          "Optimized Core Web Vitals across mobile and desktop for zero layout shifts",
        ],
      },
    ],
    approach: [
      {
        phase: "1",
        title: "Taxonomy & Indexing Audit",
        description:
          "Isolated shallow-content pages and identified structural taxonomy bottlenecks preventing commercial fund pages from ranking.",
      },
      {
        phase: "2",
        title: "Cluster Restructure & Content Rewrite",
        description:
          "Organized the platform into distinct commercial and informational clusters with intent-focused copy and comparison tables.",
      },
      {
        phase: "3",
        title: "Interactive Tool Engineering",
        description:
          "Developed high-converting financial calculators (SIP, Tax, SWP) that rank for high-volume long-tail queries.",
      },
      {
        phase: "4",
        title: "Instant Indexing & Link Equity Routing",
        description:
          "Connected indexing APIs and established systematic internal linking to funnel crawl equity straight to high-value investment funnels.",
      },
    ],
    resultsTable: {
      timeframe: "In 6 Months",
      rows: [
        { metric: "Organic Search Traffic", before: "Baseline", after: "+700%", change: "8x Traffic Multiplier" },
        { metric: "Commercial Page Coverage", before: "<10% Ranked", after: "Top 5 Across Core Terms", change: "+450% Coverage Lift" },
        { metric: "Avg. Session Duration (Calculators)", before: "0.4 mins", after: "3.2 mins", change: "8x Engagement Boost" },
        { metric: "Tier-2/3 Inbound Inquiries", before: "Fragmented", after: "+310% Growth", change: "National Expansion" },
      ],
      paidSearchHighlight:
        "Concentrated specifically on commercial and informational page clusters, achieving a 700% organic traffic surge within 6 months while scaling inbound investor registrations across Tier-2 and Tier-3 Indian cities.",
    },
    results: {
      metrics: [
        { value: "+700%", label: "Organic Traffic Growth" },
        { value: "6 Months", label: "Execution Timeframe" },
        { value: "90%+", label: "Pages Re-Indexed via API" },
        { value: "3.2 mins", label: "Avg. Calculator Time on Page" },
      ],
      description:
        "Within 6 months of deploying the content cluster architecture, instant indexing APIs, and interactive calculators, Nivesh experienced a 700% lift in organic search traffic. The platform transformed from shallow search visibility into an authoritative digital wealth destination for mutual fund distributors and retail investors nationwide.",
    },
    testimonial: {
      quote:
        "Hegxcorp completely restructured our digital architecture. By organizing our content into logical clusters and adding interactive calculators, they unlocked a 700% traffic surge in just 6 months.",
      author: "Nivesh Leadership",
      role: "Digital Growth & Product Strategy, Nivesh",
      image: "/case-studies/nivesh/Favicon-CGSoNZEt.png",
    },
  },
];
