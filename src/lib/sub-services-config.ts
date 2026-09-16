export interface SubServiceCapabilityItem {
  id: string;
  title: string;
  tag: string;
  hook: string;
  description: string;
  pills: string[];
  iconName?: string;
}

export interface SubServiceFaqItem {
  id: string;
  title: string;
  answer: string;
}

export interface SubServiceHeroSection {
  badge: string;
  title: string;
  description: string;
  pills?: string[];
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export interface SubServiceCapabilitiesSection {
  tagline: string;
  heading: string;
  description?: string;
  capabilities: SubServiceCapabilityItem[];
}

export interface SubServiceFaqSection {
  tagline: string;
  heading: string;
  description?: string;
  faqs: SubServiceFaqItem[];
}

export interface SubServiceCatalogEntry {
  slug: string;
  title: string;
  category: "Development" | "Marketing" | "Design";
  iconName: string;
  frontendUrl: string;
  description: string;
}

export const SUB_SERVICES_CATALOG: SubServiceCatalogEntry[] = [
  // Development
  {
    slug: "web-dev",
    title: "Website Development",
    category: "Development",
    iconName: "Code2",
    frontendUrl: "/service/web-dev",
    description: "Fast, responsive, conversion-focused websites engineered for speed, SEO, and business inquiries.",
  },
  {
    slug: "web-app",
    title: "Custom Web Applications",
    category: "Development",
    iconName: "LayoutDashboard",
    frontendUrl: "/service/web-app",
    description: "Custom SaaS products, portals, dashboards, admin panels, and scalable enterprise applications.",
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    category: "Development",
    iconName: "Globe2",
    frontendUrl: "/service/wordpress",
    description: "Enterprise WordPress architectures, custom WooCommerce builds, speed optimization, and security.",
  },
  {
    slug: "e-comm",
    title: "E-Commerce Development",
    category: "Development",
    iconName: "ShoppingCart",
    frontendUrl: "/service/e-comm",
    description: "Conversion-optimized storefronts with frictionless checkout, payment flows, and automated retention.",
  },

  // Marketing
  {
    slug: "seo",
    title: "SEO Services",
    category: "Marketing",
    iconName: "Search",
    frontendUrl: "/service/seo",
    description: "Technical SEO audits, keyword clustering, link authority, and organic revenue scaling.",
  },
  {
    slug: "ppc",
    title: "PPC Advertising",
    category: "Marketing",
    iconName: "BarChart3",
    frontendUrl: "/service/ppc",
    description: "Performance-driven ad campaigns that maximize ROI across Google Search, Performance Max, and Meta.",
  },
  {
    slug: "social-med",
    title: "Social Media Marketing",
    category: "Marketing",
    iconName: "Share2",
    frontendUrl: "/service/social-med",
    description: "Strategic content creation, founder positioning, audience scaling, and engagement.",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    category: "Marketing",
    iconName: "PenTool",
    frontendUrl: "/service/content-marketing",
    description: "Topical authority articles, industry whitepapers, research reports, and editorial storytelling.",
  },

  // Design
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    iconName: "Palette",
    frontendUrl: "/service/ui-ux-design",
    description: "Wireframes, user journey mapping, design systems, and modern intuitive digital interfaces.",
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    category: "Design",
    iconName: "Brush",
    frontendUrl: "/service/branding",
    description: "Distinctive brand identities, logos, typography systems, and visual guidelines engineered to last.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Design",
    iconName: "Image",
    frontendUrl: "/service/graphic-design",
    description: "High-impact social creatives, performance ads, pitch decks, brochures, and brand collateral.",
  },
];

export function getSubServiceBySlug(slug: string): SubServiceCatalogEntry | undefined {
  return SUB_SERVICES_CATALOG.find((s) => s.slug === slug);
}

// Built-in defaults for all 11 sub-services
const SUB_SERVICE_DEFAULTS: Record<
  string,
  {
    hero: SubServiceHeroSection;
    capabilities: SubServiceCapabilitiesSection;
    faq: SubServiceFaqSection;
  }
> = {
  seo: {
    hero: {
      badge: "SEO Growth Consulting",
      title: "Search Engine Optimisation Built to Compound",
      description:
        "Data-driven SEO services: technical search architecture, content clusters, local & international SEO, link authority, and organic revenue scaling.",
      pills: ["Technical SEO", "Keyword Clusters", "Backlink Authority", "Core Web Vitals"],
      primaryButtonText: "Get Free SEO Audit",
      primaryButtonUrl: "/free-growth-audit",
      secondaryButtonText: "Discuss Strategy",
      secondaryButtonUrl: "/contact",
    },
    capabilities: {
      tagline: "Core Capabilities",
      heading: "Comprehensive Search Engine Growth Systems",
      description: "We resolve technical bottlenecks and build topical authority that dominates search results.",
      capabilities: [
        {
          id: "cap-seo-1",
          iconName: "Search",
          title: "Technical SEO Audits",
          tag: "Foundation",
          hook: "Fix crawl errors and indexation blocks.",
          description: "In-depth audits of site structure, canonicals, server responses, schema markup, and JavaScript rendering.",
          pills: ["Crawling", "Indexation", "Schema", "Page Speed"],
        },
        {
          id: "cap-seo-2",
          iconName: "Layers",
          title: "Topical Authority & Content Clusters",
          tag: "Ranking Engine",
          hook: "Dominate primary and long-tail search intent.",
          description: "Strategic topic clusters, pillar pages, internal linking models, and entity-optimized content.",
          pills: ["Topic Maps", "Content Briefs", "Internal Links", "Search Intent"],
        },
        {
          id: "cap-seo-3",
          iconName: "Globe2",
          title: "Enterprise & International SEO",
          tag: "Global Reach",
          hook: "Scale organic acquisition across countries and languages.",
          description: "Multi-regional architecture, hreflang verification, geotargeting, and scalable CMS taxonomy for global enterprises.",
          pills: ["Hreflang", "Multi-Currency", "Taxonomy", "Scale"],
        },
      ],
    },
    faq: {
      tagline: "Questions & Answers",
      heading: "Frequently Asked Questions About SEO Services",
      faqs: [
        {
          id: "faq-seo-1",
          title: "How long does it take to see results from SEO?",
          answer: "Most clients observe technical improvements and keyword movement in 30-60 days, with significant compounding organic traffic typically achieved within 3-6 months.",
        },
        {
          id: "faq-seo-2",
          title: "Do you guarantee #1 rankings on Google?",
          answer: "No reputable agency guarantees #1 rankings because algorithms evolve constantly. We guarantee disciplined technical excellence, intent-driven content, and measurable traffic and conversion growth.",
        },
        {
          id: "faq-seo-3",
          title: "What is included in the SEO audit?",
          answer: "Our audit covers 80+ signals including crawlability, indexation, Core Web Vitals, site architecture, canonicalization, backlink health, keyword cannibalization, and competitor gap analysis.",
        },
      ],
    },
  },

  "graphic-design": {
    hero: {
      badge: "Graphic Design Services",
      title: "Visual Design That Sells the Story",
      description:
        "Create premium marketing graphics, social creatives, ad visuals, brochures, decks, and campaign assets that make your brand easier to notice, understand, and trust.",
      pills: ["Social Creatives", "Ad Creatives", "Pitch Decks", "Brand Collateral"],
      primaryButtonText: "Plan My Creative Assets",
      primaryButtonUrl: "/free-growth-audit",
      secondaryButtonText: "View Results",
      secondaryButtonUrl: "/case-studies",
    },
    capabilities: {
      tagline: "Core Deliverables",
      heading: "Visual Communications That Drive Action",
      description: "From performance ads to high-stakes investor pitch decks, we design assets that command attention.",
      capabilities: [
        {
          id: "cap-gd-1",
          iconName: "Image",
          title: "Social Media Creatives",
          tag: "Daily Visibility",
          hook: "Create scroll-stopping posts that stay true to your brand.",
          description: "Carousels, story graphics, profile assets, and modular templates that streamline daily social production.",
          pills: ["Carousels", "Infographics", "Stories", "Templates"],
        },
        {
          id: "cap-gd-2",
          iconName: "BarChart3",
          title: "Ad Creative & Paid Media Design",
          tag: "Conversion",
          hook: "Turn ad spend into high-converting visual creative.",
          description: "Statics, split-screen hooks, comparison matrices, and value-prop graphics optimized for Meta and Google Performance Max.",
          pills: ["Paid Ads", "Hooks", "Banners", "A/B Variants"],
        },
        {
          id: "cap-gd-3",
          iconName: "Palette",
          title: "Sales Collateral & Pitch Decks",
          tag: "Authority",
          hook: "Empower sales teams and win institutional trust.",
          description: "Investor presentations, product whitepapers, case study PDFs, and one-pagers that make complex solutions intuitive.",
          pills: ["Pitch Decks", "Whitepapers", "Brochures", "Sales Sheets"],
        },
      ],
    },
    faq: {
      tagline: "Questions & Answers",
      heading: "Frequently Asked Questions About Graphic Design",
      faqs: [
        {
          id: "faq-gd-1",
          title: "What formats do you deliver final design files in?",
          answer: "We provide web-optimized formats (WEBP, PNG, SVG), vector files (AI, Figma, PDF), and editable templates when requested.",
        },
        {
          id: "faq-gd-2",
          title: "Can you follow our existing brand guidelines?",
          answer: "Yes, we work strictly within your typography, palette, and design tokens, or help expand and formalize them if needed.",
        },
      ],
    },
  },

  "web-dev": {
    hero: {
      badge: "Website Development",
      title: "Website Development Services",
      description:
        "Build a fast, responsive, and conversion-focused website that helps your business attract visitors, generate leads, build credibility, and grow online.",
      pills: ["Responsive Builds", "Speed & Core Web Vitals", "Custom Architecture", "CMS Driven"],
      primaryButtonText: "Get Started",
      primaryButtonUrl: "/contact",
      secondaryButtonText: "View Services",
      secondaryButtonUrl: "/services",
    },
    capabilities: {
      tagline: "Development Stack",
      heading: "Engineered for Performance and Conversion",
      description: "We combine modern frontend frameworks with robust CMS architecture for seamless content management.",
      capabilities: [
        {
          id: "cap-wd-1",
          iconName: "Code2",
          title: "Custom Responsive Websites",
          tag: "Frontend",
          hook: "Flawless rendering on desktop, tablet, and mobile screens.",
          description: "Tailored component architecture with clean semantic markup, fast load times, and fluid responsive design.",
          pills: ["React / TS", "Responsive", "Accessibility", "Clean Code"],
        },
        {
          id: "cap-wd-2",
          iconName: "LayoutDashboard",
          title: "Content Management & Admin Controls",
          tag: "Empowerment",
          hook: "Update text, images, and services without code.",
          description: "Custom admin CMS panels and structured schema to keep your marketing and content teams in total control.",
          pills: ["CMS Integration", "PostgreSQL", "Live Preview", "Fast Updates"],
        },
        {
          id: "cap-wd-3",
          iconName: "Gauge",
          title: "Speed Optimization & Core Web Vitals",
          tag: "Speed",
          hook: "Sub-second loading that boosts conversions and search rankings.",
          description: "Asset compression, modern image formats, server-side caching, and minimal payload weight for peak performance.",
          pills: ["90+ Scores", "Caching", "Asset Delivery", "Clean Vitals"],
        },
      ],
    },
    faq: {
      tagline: "Questions & Answers",
      heading: "Frequently Asked Questions About Website Development",
      faqs: [
        {
          id: "faq-wd-1",
          title: "How long does a website development project take?",
          answer: "Typical custom builds take 3-6 weeks depending on scope, custom design requirements, and integrations.",
        },
        {
          id: "faq-wd-2",
          title: "Will my website be mobile-friendly and fast?",
          answer: "Yes, every website Hegxcorp builds is mobile-first, responsive, and optimized for 90+ performance scores on Google Lighthouse.",
        },
      ],
    },
  },
};

export function getDefaultSubServiceCms(slug: string) {
  if (SUB_SERVICE_DEFAULTS[slug]) {
    return SUB_SERVICE_DEFAULTS[slug];
  }

  const catalog = getSubServiceBySlug(slug);
  const title = catalog ? catalog.title : slug.toUpperCase();

  return {
    hero: {
      badge: `${title} Services`,
      title: `${title} Built for Measurable Growth`,
      description: `Data-driven ${title.toLowerCase()} services engineered to increase conversion, brand authority, and measurable business revenue.`,
      pills: ["Strategic Consulting", "Custom Execution", "Measurable ROI"],
      primaryButtonText: "Get Started",
      primaryButtonUrl: "/contact",
      secondaryButtonText: "Free Audit",
      secondaryButtonUrl: "/free-growth-audit",
    },
    capabilities: {
      tagline: "Core Capabilities",
      heading: `Full-Spectrum ${title} Deliverables`,
      description: `Comprehensive deliverables and strategic execution designed specifically for ${title.toLowerCase()}.`,
      capabilities: [
        {
          id: `cap-${slug}-1`,
          iconName: catalog?.iconName || "Code2",
          title: `Strategic ${title} Roadmapping`,
          tag: "Planning",
          hook: "Define your competitive edge before execution.",
          description: `We audit your current capabilities, competitive landscape, and objectives to build a clear execution blueprint for ${title.toLowerCase()}.`,
          pills: ["Audit", "Roadmap", "Milestones"],
        },
        {
          id: `cap-${slug}-2`,
          iconName: "Layers",
          title: "Execution & Implementation",
          tag: "Execution",
          hook: "Disciplined delivery with high craftsmanship.",
          description: `End-to-end execution of ${title.toLowerCase()} deliverables with transparent milestones and quality control.`,
          pills: ["Delivery", "Quality Control", "Handoff"],
        },
        {
          id: `cap-${slug}-3`,
          iconName: "BarChart3",
          title: "Performance & Scaling",
          tag: "Optimization",
          hook: "Iterate continuously based on real business signals.",
          description: "Post-launch measurement, iteration, and continuous refinement to ensure sustained growth.",
          pills: ["Metrics", "Optimization", "Compounding"],
        },
      ],
    },
    faq: {
      tagline: "Questions & Answers",
      heading: `Frequently Asked Questions About ${title}`,
      faqs: [
        {
          id: `faq-${slug}-1`,
          title: `What is the timeline for a ${title.toLowerCase()} project?`,
          answer: "Engagements typically range from 2 to 6 weeks depending on project scope, complexity, and custom deliverables.",
        },
        {
          id: `faq-${slug}-2`,
          title: "How do you measure project success?",
          answer: "We define measurable KPIs (conversions, speed, lead quality, organic rankings, or cost-per-action) before beginning any work.",
        },
      ],
    },
  };
}
