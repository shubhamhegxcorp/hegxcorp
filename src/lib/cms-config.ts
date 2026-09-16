export interface HeroDashboardMetric {
  label: string;
  value: number;
  prefix: string;
  suffix: string;
  decimals?: number;
}

export interface HeroSection {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
  trustText?: string;
  // Right side dashboard fields
  dashboardUrl?: string;
  dashboardTitle?: string;
  dashboardSubtitle?: string;
  dashboardBadge?: string;
  dashboardMetrics?: HeroDashboardMetric[];
  chartTitle?: string;
  chartMetric?: string;
  chartMetricLabel?: string;
  imageUrl?: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  desc: string;
  href: string;
  url: string;
}

export interface ServicesSection {
  tagline: string;
  heading: string;
  description: string;
  services: ServiceItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesSection {
  tagline: string;
  heading: string;
  description: string;
  items: FeatureItem[];
}

export interface TestimonialItem {
  name: string;
  designation: string;
  review: string;
  rating: number;
  company?: string;
  industry?: string;
  initials?: string;
  resultValue?: string;
  resultLabel?: string;
}

export interface TestimonialsSection {
  tagline: string;
  heading: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  tagline: string;
  heading: string;
  description: string;
  items: FAQItem[];
}

export interface CTASection {
  badge: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface SupportingMetricItem {
  id: string;
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  decimals: number;
  href: string;
}

export interface ResultsMetricsSection {
  tagline: string;
  heading: string;
  heroMetric: {
    ghostNumber: string;
    prefix: string;
    value: number;
    suffix: string;
    decimals: number;
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
  };
  supporting: SupportingMetricItem[];
}

export interface FeaturedWorkItem {
  id: string;
  isFeatured?: boolean;
  title: string;
  category: string;
  industry: string;
  url: string;
  metric: string;
  browserColor: string;
  screenshotType: "ecommerce" | "saas" | "healthcare" | "fintech" | "custom" | string;
  linkUrl?: string;
  image?: string;
}

export interface FeaturedWorkSection {
  tagline: string;
  heading: string;
  projects: FeaturedWorkItem[];
}

export interface ProcessStepItem {
  num: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export interface ProcessSection {
  tagline: string;
  heading: string;
  steps: ProcessStepItem[];
}

export interface BlogPreviewSection {
  tagline: string;
  heading: string;
  description: string;
  allArticlesText: string;
  allArticlesUrl: string;
  buttonText: string;
  customTitle?: string;
  customExcerpt?: string;
  customSlug?: string;
  customImage?: string;
}

export interface FooterSection {
  logoUrl?: string;
  copyright: string;
  phone: string;
  email: string;
  address: string;
}

export interface AboutHeroSection {
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
}

export interface AboutTextSection {
  tagline: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface AboutValuesSection {
  tagline: string;
  title: string;
  description: string;
  imageUrl?: string;
  values: { title: string; description: string }[];
}

export interface AboutStorySection {
  tagline: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface AboutCTASection {
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
}

export interface ServicesHeroSection {
  tagline: string;
  title: string;
  description: string;
}

export interface ServicesBenefitsSection {
  tagline: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface ServicesProcessSection {
  tagline: string;
  title: string;
  description: string;
  steps: { title: string; points: string[] }[];
}

export interface ServiceDirectoryItem {
  id: string;
  number: string;
  title: string;
  text: string;
  href: string;
  iconName?: string;
}

export interface ServiceDirectoryCategory {
  id: string;
  label: string;
  iconName?: string;
  services: ServiceDirectoryItem[];
}

export interface ServiceDirectorySection {
  tagline: string;
  heading: string;
  categories: ServiceDirectoryCategory[];
}

export interface ProductsHeroSection {
  tagline: string;
  title: string;
  description: string;
}

export interface ProductItem {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonUrl: string;
  features: string[];
  imageUrl?: string;
}

export interface ProductsListSection {
  products: ProductItem[];
}

export interface ContactHeroSection {
  tagline: string;
  title: string;
  description: string;
}

export interface ContactDetailsSection {
  phone: string;
  email: string;
  address: string;
}

export interface ContactServiceGroupItem {
  title: string;
  services: { name: string; desc: string }[];
}

export interface ContactServiceGroupsSection {
  groups: ContactServiceGroupItem[];
}

export interface ContactCustomField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  enabled?: boolean;
}

export interface ContactFormConfig {
  badge: string;
  title: string;
  description?: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phoneCountryCode: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  servicesLabel: string;
  servicesPlaceholder: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetOptions: string[];
  timelineLabel: string;
  timelinePlaceholder: string;
  timelineOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitButtonText: string;
  successTitle: string;
  successMessage: string;
  customFields: ContactCustomField[];
}

export interface HeaderNavConfig {
  servicesLabel: string;
  caseStudiesLabel: string;
  aboutLabel: string;
  blogLabel: string;
  contactLabel: string;
  supportText: string;
  phone: string;
  globalPresenceText: string;
  ctaText: string;
  ctaUrl: string;
}

export interface FooterLinkItem {
  label: string;
  href?: string;
  to?: string;
}

export interface FooterConfig {
  brandName: string;
  brandTagline: string;
  brandDescription: string;
  watermarkText: string;
  phone: string;
  email: string;
  address: string;
  ctaText: string;
  ctaUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  servicesLinks: FooterLinkItem[];
  companyLinks: FooterLinkItem[];
  regionsLinks: FooterLinkItem[];
  copyrightText: string;
  privacyPolicyText: string;
  privacyPolicyUrl: string;
  termsText: string;
  termsUrl: string;
  cookiePolicyText: string;
  cookiePolicyUrl: string;
}

export const DEFAULT_CMS_SECTIONS: Record<string, any> = {
  // --- SITE HEADER & NAVIGATION ---
  "site.header": {
    servicesLabel: "Services",
    caseStudiesLabel: "Case Studies",
    aboutLabel: "About Us",
    blogLabel: "Blog",
    contactLabel: "Contact",
    supportText: "24/7 Support",
    phone: "+91 836 920 7836",
    globalPresenceText: "India • USA • Australia • Dubai",
    ctaText: "Connect With Us",
    ctaUrl: "/contact",
  } as HeaderNavConfig,

  // --- SITE FOOTER (GLOBAL) ---
  "site.footer": {
    brandName: "Hegxcorp",
    brandTagline: "Data-Driven Growth Marketing Agency",
    brandDescription:
      "A data-driven growth consultancy helping businesses generate more leads, sales, and revenue through SEO, paid advertising, web development, and conversion optimisation.",
    watermarkText: "HEGXCORP",
    phone: "+91 836 920 7836",
    email: "contact@hegxcorp.com",
    address: "India • USA • UK • Dubai",
    ctaText: "Get Free Growth Audit",
    ctaUrl: "/free-growth-audit",
    linkedinUrl: "https://linkedin.com/company/hegxcorp",
    twitterUrl: "https://x.com/thehegxcorp",
    instagramUrl: "https://www.instagram.com/hegxcorp?igsi=MWx3aXlsOWp5bWV5dg==",
    facebookUrl: "https://www.facebook.com/hegxcorp",
    youtubeUrl: "https://youtube.com/@hegxcorp",
    servicesLinks: [
      { label: "Search Engine Optimisation", to: "/service/seo" },
      { label: "Paid Advertising (PPC)", to: "/service/ppc" },
      { label: "Web Development", to: "/service/web-dev" },
      { label: "Conversion Optimisation", to: "/service/ui-ux-design" },
      { label: "Branding & Design", to: "/service/branding" },
      { label: "Social Media Marketing", to: "/service/social-med" },
    ],
    companyLinks: [
      { label: "About Us", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog & Insights", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
    regionsLinks: [
      { label: "India (hegxcorp.com)", href: "https://hegxcorp.com" },
      { label: "United States", href: "https://hegxcorp.us" },
      { label: "United Kingdom", href: "https://hegxcorp.uk" },
      { label: "Dubai & UAE", href: "https://hegxcorp.ae" },
    ],
    copyrightText: "© 2026 Hegxcorp. All rights reserved.",
    privacyPolicyText: "Privacy Policy",
    privacyPolicyUrl: "/privacy-policy",
    termsText: "Terms of Service",
    termsUrl: "/terms-of-service",
    cookiePolicyText: "Cookie Policy",
    cookiePolicyUrl: "/cookie-policy",
  } as FooterConfig,

  // --- HOME PAGE ---
  "home.hero": {
    badge: "Growth Consultancy & Digital Transformation Partner",
    title: "Generate More Leads, Sales & Revenue",
    description:
      "We design and execute data-driven growth marketing systems, custom engineering, and search optimization built to position enterprise firms for compounding scale.",
    buttonText: "Get Free Growth Audit",
    buttonUrl: "/free-growth-audit",
    secondaryButtonText: "Explore Case Studies",
    secondaryButtonUrl: "/case-studies",
    trustText: "Trusted by enterprise companies across India, USA, UK & UAE",
    dashboardUrl: "hegxcorp.com/growth-analytics",
    dashboardTitle: "Hegxcorp Growth Engine",
    dashboardSubtitle: "Real-time Client Portfolio Metrics",
    dashboardBadge: "System Active",
    dashboardMetrics: [
      {
        label: "Organic Traffic Growth",
        value: 700,
        prefix: "+",
        suffix: "%",
        decimals: 0,
      },
      {
        label: "Unique Mobile Reach",
        value: 1,
        prefix: "",
        suffix: "M+",
        decimals: 0,
      },
      {
        label: "Phone & Form Inquiries",
        value: 1151,
        prefix: "+",
        suffix: "",
        decimals: 0,
      },
      {
        label: "Client Retention",
        value: 98,
        prefix: "+",
        suffix: "%",
        decimals: 0,
      },
    ],
    chartTitle: "Performance Trajectory",
    chartMetric: "+280%",
    chartMetricLabel: "Revenue Velocity",
  } as HeroSection,

  "home.metrics": {
    tagline: "Proven Results",
    heading: "Numbers that prove we deliver.",
    heroMetric: {
      ghostNumber: "700",
      prefix: "+",
      value: 700,
      suffix: "%",
      decimals: 0,
      title: "Peak Organic Traffic Growth",
      description: "Achieved in 6 months through technical SEO taxonomy restructuring, content clusters, and indexing automation.",
      linkText: "See the Nivesh case study",
      linkUrl: "/case-studies/nivesh",
    },
    supporting: [
      {
        id: "mobile-reach",
        prefix: "",
        value: 1,
        suffix: "M+",
        label: "Unique Mobile Reach",
        sub: "Orra Fine Jewellery · TV-to-Mobile retargeting & programmatic ads",
        decimals: 0,
        href: "/case-studies/orra",
      },
      {
        id: "leads",
        prefix: "+",
        value: 1151,
        suffix: "",
        label: "Inbound Phone Inquiries",
        sub: "Tarkashastra Academy · Local GBP dominance & transactional MBA PPC",
        decimals: 0,
        href: "/case-studies/tarkashastra",
      },
      {
        id: "roas",
        prefix: "",
        value: 4.8,
        suffix: "×",
        label: "Average ROAS",
        sub: "Return on ad spend across Google, Meta & programmatic DSP",
        decimals: 1,
        href: "/case-studies",
      },
      {
        id: "satisfaction",
        prefix: "",
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
        sub: "Senior partner-led execution — no handoff to juniors after onboarding",
        decimals: 0,
        href: "/about",
      },
    ],
  } as ResultsMetricsSection,

  "home.services": {
    tagline: "One Growth Engine · Six Capabilities",
    heading: "Services built for growth",
    description:
      "Not six separate services. One integrated system where every capability strengthens the next.",
    services: [
      {
        slug: "SEO",
        title: "Search Engine Optimisation",
        desc: "A compounding growth asset. We engineer technical authority and content systems that make you the default answer in your market.",
        href: "/service/seo",
        url: "hegxcorp › seo-engine",
      },
      {
        slug: "PPC",
        title: "Paid Advertising",
        desc: "Every campaign optimised toward revenue, not clicks. Google, Meta and programmatic — unified by one metric: ROAS.",
        href: "/service/ppc",
        url: "hegxcorp › paid-ads",
      },
      {
        slug: "WEB",
        title: "Web Development",
        desc: "Sites engineered to load fast, rank high and convert. Performance and conversion architecture are baked in from line one.",
        href: "/service/web-dev",
        url: "hegxcorp › web-platform",
      },
      {
        slug: "CRO",
        title: "Conversion Optimisation",
        desc: "Turn existing traffic into more revenue. We map the funnel, find the leaks and close them with systematic data-led experiments.",
        href: "/service/ui-ux-design",
        url: "hegxcorp › cro-funnel",
      },
      {
        slug: "BRAND",
        title: "Branding & Design",
        desc: "A brand system that makes premium positioning visible at every touchpoint — identity, type, colour and creative assets built to last.",
        href: "/service/branding",
        url: "hegxcorp › brand-system",
      },
      {
        slug: "SMM",
        title: "Social Media Marketing",
        desc: "Audiences built with intent. Content systems that grow engaged communities and feed your wider growth funnel.",
        href: "/service/social-med",
        url: "hegxcorp › social-studio",
      },
    ],
  } as ServicesSection,

  "home.featuredWork": {
    tagline: "Client Success Stories",
    heading: "Visual proof of our engineering and growth capabilities",
    projects: [
      {
        id: "orra",
        isFeatured: true,
        title: "Orra Fine Jewellery",
        category: "TV-to-Mobile Retargeting + Programmatic Ads",
        industry: "Luxury Jewellery & Retail",
        url: "orra.co.in",
        metric: "1M+ Unique Mobile Reach",
        browserColor: "#FAF7F2",
        screenshotType: "custom",
        image: "/case-studies/orra/orra-hero-preview.png",
        linkUrl: "/case-studies/orra",
      },
      {
        id: "nivesh",
        isFeatured: true,
        title: "Nivesh",
        category: "SEO Architecture + Content Clusters",
        industry: "FinTech",
        url: "nivesh.com",
        metric: "+700% Organic Traffic",
        browserColor: "#F8FAFC",
        screenshotType: "custom",
        image: "/case-studies/nivesh/nivesh-hero-preview.png",
        linkUrl: "/case-studies/nivesh",
      },
      {
        id: "tarkashastra",
        isFeatured: true,
        title: "Tarkashastra Academy",
        category: "SEO Architecture + Local GBP + Paid Ads",
        industry: "Education & EdTech",
        url: "tarkashastra.co.in",
        metric: "+200% Organic Traffic",
        browserColor: "#FFF7ED",
        screenshotType: "custom",
        image: "/case-studies/tarkashastra/tarkashastra-hero-preview.png",
        linkUrl: "/case-studies/tarkashastra",
      },
    ],
  } as FeaturedWorkSection,

  "home.features": {
    tagline: "WHY CLIENTS SWITCH TO HEGXCORP",
    heading: "Most agencies run campaigns. We build growth systems.",
    description:
      "The difference isn't the channels we use. It's how we connect strategy, execution, reporting and optimisation into one growth engine.",
    items: [
      {
        title: "Diagnosis Before Prescription",
        description:
          "Before touching a channel, we audit your full funnel — gaps, leaks and hidden wins. You get a strategy grounded in your actual business, not a recycled template.",
      },
      {
        title: "Channels That Compound",
        description:
          "SEO builds authority that makes paid ads cheaper. Paid ads fund the data that sharpens SEO. We wire the channels together so every pound spent does double the work.",
      },
      {
        title: "Outcomes, Not Vanity Metrics",
        description:
          "Traffic reports don't pay salaries. We tie every KPI back to pipeline and revenue so you always know which activity is making you money.",
      },
      {
        title: "Senior Talent, Always On",
        description:
          "Your account is run by senior strategists — never handed to a junior coordinator after onboarding. The people who pitch the plan are the people who execute it.",
      },
      {
        title: "Built to Scale With You",
        description:
          "As your business grows, the system scales with it. New channels, new markets and new products plug into an existing growth engine instead of starting from scratch.",
      },
    ],
  } as FeaturesSection,

  "home.process": {
    tagline: "How We Work",
    heading: "From audit to scale in 5 steps",
    steps: [
      {
        num: "01",
        title: "Audit",
        desc: "We analyse your current digital footprint SEO health, ad performance, website UX, and competitive landscape to identify the highest-impact opportunities.",
        deliverables: [
          "Competitor Analysis",
          "Funnel Review",
          "Analytics Audit",
          "Opportunity Mapping",
        ],
      },
      {
        num: "02",
        title: "Strategy",
        desc: "We build a 90-day growth roadmap with clear KPIs, channel allocation, and milestones. No generic playbooks every strategy is bespoke to your business.",
        deliverables: ["Channel Plan", "Growth Roadmap", "KPI Design", "90-Day Blueprint"],
      },
      {
        num: "03",
        title: "Execution",
        desc: "Our specialist team activates across SEO, paid media, content, and development simultaneously moving fast without sacrificing quality.",
        deliverables: ["SEO Setup", "Paid Campaigns", "Content Activation", "Web Deployment"],
      },
      {
        num: "04",
        title: "Optimisation",
        desc: "We continuously test, analyse and refine every campaign and touchpoint. Data informs every decision, week over week.",
        deliverables: ["A/B Tests", "Weekly Reports", "CRO Experiments", "Bid Strategy"],
      },
      {
        num: "05",
        title: "Scale",
        desc: "Once we've found what works, we double down. Proven channels get more budget, winning creative gets expanded, and growth compounds.",
        deliverables: ["Budget Expansion", "New Channels", "Market Entry", "Creative Scaling"],
      },
    ],
  } as ProcessSection,

  "home.testimonials": {
    tagline: "Client Stories",
    heading: "Results that speak for themselves.",
    description:
      "See how we help businesses double their pipeline, optimize paid channels, and compound search authority.",
    testimonials: [
      {
        name: "Priya Sharma",
        designation: "Head of Marketing",
        company: "RetailBrand India",
        industry: "E-Commerce",
        review:
          "Hegxcorp's SEO strategy drove a 280% increase in organic revenue within 10 months. What impressed us most was the transparency — we always knew exactly what was being done and why.",
        rating: 5,
        resultValue: "+280%",
        resultLabel: "Organic Revenue",
        initials: "PS",
      },
      {
        name: "James O'Connor",
        designation: "Founder & CEO",
        company: "LaunchScale",
        industry: "SaaS",
        review:
          "We were burning through ad spend with another agency and getting nowhere. Hegxcorp restructured our entire paid strategy in 30 days. Our ROAS went from 1.8x to 5.2x. I wish we'd found them sooner.",
        rating: 5,
        resultValue: "5.2x",
        resultLabel: "ROAS Delivered",
        initials: "JO",
      },
      {
        name: "Meera Patel",
        designation: "Director, Digital",
        company: "HealthFirst Clinics",
        industry: "Healthcare",
        review:
          "The level of strategic thinking Hegxcorp brings is what sets them apart. They don't just execute — they think deeply about the business problem first. Our lead volume doubled in the first quarter.",
        rating: 5,
        resultValue: "2x",
        resultLabel: "Qualified Leads",
        initials: "MP",
      },
    ],
  } as TestimonialsSection,

  "home.blogPreview": {
    tagline: "INSIGHTS",
    heading: "Ideas, Experiments & Growth Systems",
    description:
      "Practical breakdowns of SEO, paid media, conversion optimisation, and digital growth systems used to help businesses scale.",
    allArticlesText: "Read all articles",
    allArticlesUrl: "/blog",
    buttonText: "View Blog",
    customTitle: "",
    customExcerpt: "",
    customSlug: "",
    customImage: "",
  } as BlogPreviewSection,

  "home.faq": {
    tagline: "FAQ",
    heading: "Frequently Asked Questions",
    description:
      "Get answers to common queries about our growth methodologies, platform capabilities, and process.",
    items: [
      {
        question: "How do you measure success in your growth campaigns?",
        answer:
          "We focus entirely on outcomes rather than vanity metrics. We track business pipeline, qualified leads, and ROAS. Success is defined by revenue generated, not impressions or clicks.",
      },
      {
        question: "Do you offer custom service packages?",
        answer:
          "Yes, we construct custom growth roadmaps tailored to your specific market challenges, user journeys, and pipeline goals.",
      },
      {
        question: "Who will manage our account on a day-to-day basis?",
        answer:
          "Your partnership is managed by senior strategists from start to finish. We do not pass our work off to junior coordinators.",
      },
    ],
  } as FAQSection,

  "home.cta": {
    badge: "Free Strategy Session · No Commitment",
    heading: "Let's identify what's limiting your growth.",
    description:
      "Book a free strategy session and receive a practical growth roadmap tailored to your business. We'll review your website, acquisition channels, and conversion opportunities and show you the highest-impact next steps.",
    buttonText: "Book a Free Strategy Call",
    buttonUrl: "/contact",
  } as CTASection,

  "home.footer": {
    copyright: "© 2026 Hegxcorp Systems. All rights reserved.",
    phone: "+91 836 920 7836",
    email: "growth@hegxcorp.com",
    address:
      "10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East) Mumbai, Maharashtra 400063",
  } as FooterSection,

  // --- ABOUT PAGE ---
  "about.hero": {
    tagline: "About Hegxcorp",
    title: "One partner for digital growth, built to help you stand out.",
    description:
      "We bring technology, design, and marketing together to help ambitious businesses build stronger brands, reach more people, and create lasting momentum.",
    buttonText: "Claim Your Growth Audit",
    buttonUrl: "/free-growth-audit",
    secondaryButtonText: "Explore Our Services",
    secondaryButtonUrl: "/services",
  } as AboutHeroSection,

  "about.whoWeAre": {
    tagline: "Who We Are",
    title: "A team of builders, designers and growth marketers.",
    description:
      "Hegxcorp was founded to bridge the gap between creative design, deep technical development, and digital marketing. We operate as an extension of your internal team, focused on compounding returns and business metrics.",
  } as AboutTextSection,

  "about.ourMission": {
    tagline: "Our Mission",
    title: "Creating progress, not vanity metrics.",
    description:
      "We believe digital campaigns should do more than generate reports. Our mission is to engineer high-performance systems and content clusters that establish clear topical authority and drive sustainable revenue expansion.",
  } as AboutTextSection,

  "about.ourValues": {
    tagline: "Values",
    title: "Standards we live and build by.",
    description:
      "These principles guide every strategy we draft, line of code we write, and client relationship we construct.",
    values: [
      {
        title: "Innovation for Growth",
        description:
          "We challenge familiar thinking and use technology, creativity, and insight to uncover better ways forward.",
      },
      {
        title: "Integrity in Every Pixel",
        description:
          "We communicate clearly, make responsible decisions, and build every partnership on trust and transparency.",
      },
      {
        title: "Excellence in Execution",
        description:
          "We care about the details—from the first strategic decision to the final experience your customers receive.",
      },
      {
        title: "Collaboration Is Key",
        description:
          "The strongest outcomes come from working as one team, sharing context, and staying aligned from start to finish.",
      },
    ],
  } as AboutValuesSection,

  "about.ourStory": {
    tagline: "Our Story",
    title: "Where creativity meets strategy.",
    description:
      "Founder Akshay Jadia started Hegxcorp in Mumbai in 2016 with a focused mission: help small and medium-sized businesses navigate the fast-changing world of digital marketing and design.\n\nFrom the beginning, the goal has been to make high-quality digital services more accessible and affordable—without losing the strategic thinking and care that create meaningful results.",
    imageUrl: "",
  } as AboutStorySection,

  "about.cta": {
    tagline: "LET'S GROW TOGETHER",
    title: "Ready to turn your next idea into measurable growth?",
    description:
      "Tell us where you want to go. We'll help you find the clearest digital path to get there.",
    buttonText: "Get a Free Growth Audit",
    buttonUrl: "/free-growth-audit",
    secondaryButtonText: "Contact Us",
    secondaryButtonUrl: "/contact",
  } as AboutCTASection,

  // --- SERVICES PAGE ---
  "services.hero": {
    tagline: "Our Services",
    title: "Digital services built for business growth",
    description:
      "From websites and web applications to ecommerce, WordPress, SEO, marketing, and maintenance, Hegxcorp helps businesses build a stronger digital presence.",
  } as ServicesHeroSection,

  "services.benefits": {
    tagline: "Why Us",
    title: "Engineered for durability & outcomes",
    description:
      "Every service we deliver is unified by high standards of performance and clear focus on compounding business scale.",
    benefits: [
      "Business-focused digital strategy",
      "Modern responsive design",
      "Scalable frontend and backend systems",
      "SEO-friendly page structure",
      "Performance and speed optimisation",
      "Secure development practices",
      "Clear communication and support",
      "Launch-ready testing and maintenance",
    ],
  } as ServicesBenefitsSection,

  "services.process": {
    tagline: "Our Process",
    title: "How we build and optimize",
    description:
      "A disciplined, multi-phase method that ensures transparency, speed, and high-quality results from start to finish.",
    steps: [
      {
        title: "Discover business goals",
        points: [
          "Understand your business, users, and goals",
          "Review competitors and your current digital presence",
          "Define what success looks like for the project",
        ],
      },
      {
        title: "Plan digital structure",
        points: [
          "Map site architecture and user flows",
          "Choose the right tech stack for your needs",
          "Set a clear timeline and project milestones",
        ],
      },
      {
        title: "Design user experience",
        points: [
          "Wireframe key pages and user journeys",
          "Design a visual identity and UI components",
          "Refine the design based on your feedback",
        ],
      },
      {
        title: "Build and integrate",
        points: [
          "Develop the frontend and backend systems",
          "Integrate APIs, payments, and third-party tools",
          "Set up CMS and content workflows",
        ],
      },
      {
        title: "Test, launch, improve",
        points: [
          "Test across devices, browsers, and edge cases",
          "Launch with monitoring and support in place",
          "Track performance and iterate after launch",
        ],
      },
    ],
  } as ServicesProcessSection,

  "services.directory": {
    tagline: "Service Directory",
    heading: "Choose the right digital solution for your next stage.",
    categories: [
      {
        id: "development",
        label: "Development",
        iconName: "Code2",
        services: [
          {
            id: "s-dev-1",
            number: "01",
            iconName: "Code2",
            title: "Website Development",
            text: "Fast, responsive, conversion-focused websites built to represent your brand and generate business enquiries.",
            href: "/service/web-dev",
          },
          {
            id: "s-dev-2",
            number: "02",
            iconName: "LayoutDashboard",
            title: "Custom Web Application",
            text: "Custom dashboards, portals, SaaS products, admin panels, and business web applications.",
            href: "/service/web-app",
          },
          {
            id: "s-dev-3",
            number: "03",
            iconName: "Globe2",
            title: "WordPress Development",
            text: "Editable WordPress websites, custom themes, WooCommerce stores, plugin setup, speed, and security support.",
            href: "/service/wordpress",
          },
          {
            id: "s-dev-4",
            number: "04",
            iconName: "ShoppingCart",
            title: "E-Commerce Development",
            text: "Online stores with product pages, cart, checkout, payments, order handling, and conversion-focused shopping flows.",
            href: "/service/e-comm",
          },
        ],
      },
      {
        id: "growth",
        label: "Marketing",
        iconName: "Megaphone",
        services: [
          {
            id: "s-mkt-1",
            number: "05",
            iconName: "Search",
            title: "SEO Services",
            text: "SEO structure, keyword optimisation, technical fixes, content improvements, and search visibility growth.",
            href: "/service/seo",
          },
          {
            id: "s-mkt-2",
            number: "06",
            iconName: "BarChart3",
            title: "PPC",
            text: "Performance-driven ad campaigns that maximize ROI, generate quality leads, and grow your business faster.",
            href: "/service/ppc",
          },
          {
            id: "s-mkt-3",
            number: "07",
            iconName: "Share2",
            title: "Social Media Marketing",
            text: "Build your brand, engage your audience, and grow your online community across every major platform.",
            href: "/service/social-med",
          },
          {
            id: "s-mkt-4",
            number: "08",
            iconName: "PenTool",
            title: "Content Marketing",
            text: "Create compelling content and brand stories that attract, educate, and convert your ideal customers.",
            href: "/service/content-marketing",
          },
        ],
      },
      {
        id: "design",
        label: "Design",
        iconName: "Palette",
        services: [
          {
            id: "s-des-1",
            number: "09",
            iconName: "Palette",
            title: "UI/UX Design",
            text: "Clean interfaces, user journeys, wireframes, landing pages, dashboards, and digital product design.",
            href: "/service/ui-ux-design",
          },
          {
            id: "s-des-2",
            number: "10",
            iconName: "Brush",
            title: "Branding",
            text: "Craft memorable brand identities with purpose, consistency, and a lasting impression across every touchpoint.",
            href: "/service/branding",
          },
          {
            id: "s-des-3",
            number: "12",
            iconName: "Image",
            title: "Graphic Design",
            text: "Creative visuals, marketing assets, and brand graphics that communicate your message with impact.",
            href: "/service/graphic-design",
          },
        ],
      },
    ],
  } as ServiceDirectorySection,

  // --- PRODUCTS PAGE ---
  "products.hero": {
    tagline: "Products & Solutions",
    title: "Premium software products & custom systems",
    description:
      "Explore our collection of custom-engineered business tools, scalable SaaS solutions, and marketing automation products built to accelerate operations.",
  } as ProductsHeroSection,

  "products.list": {
    products: [
      {
        title: "Hegxcorp LeadCRM",
        description:
          "A custom lead tracking and marketing automation platform built for enterprise firms to capture, score, and nurture inbound opportunities.",
        price: "Contact for Pricing",
        buttonText: "Schedule Demo",
        buttonUrl: "/contact",
        features: [
          "Real-time lead alerts",
          "UTM & Attribution tracking",
          "Email & SMS automation sequence",
          "Custom pipeline views",
        ],
      },
      {
        title: "Topical Authority SEO Engine",
        description:
          "An AI-powered keyword mapping and content cluster planner that helps content marketing teams design search structures that rank.",
        price: "Custom Deployments Only",
        buttonText: "Request Access",
        buttonUrl: "/contact",
        features: [
          "Competitor backlink gap maps",
          "Entity schema planning",
          "Internal link structure mapping",
          "Topical cluster blueprints",
        ],
      },
    ],
  } as ProductsListSection,

  // --- CONTACT PAGE ---
  "contact.hero": {
    tagline: "Connect With Us",
    title: "Let's build something remarkable together.",
    description:
      "Get in touch with Hegxcorp's digital transformation consultants. Let's discuss your growth targets, SEO opportunities, and ad performance audit.",
  } as ContactHeroSection,

  "contact.details": {
    phone: "+91 836 920 7836",
    email: "growth@hegxcorp.com",
    address:
      "10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East) Mumbai, Maharashtra 400063",
  } as ContactDetailsSection,

  "contact.serviceGroups": {
    groups: [
      {
        title: "Development",
        services: [
          { name: "Web Development", desc: "Scalable, modern websites" },
          { name: "Custom Web Applications", desc: "Tailored platforms" },
          { name: "WordPress Development", desc: "Premium WP builds" },
          { name: "Ecommerce Development", desc: "Stores that convert" },
        ],
      },
      {
        title: "Marketing",
        services: [
          { name: "SEO", desc: "Rank where it matters" },
          { name: "PPC", desc: "Performance ad campaigns" },
          { name: "Social Media Marketing", desc: "Engage and grow" },
          { name: "Content Marketing", desc: "Stories that scale" },
        ],
      },
      {
        title: "Design",
        services: [
          { name: "UI/UX Design", desc: "Human-centered design" },
          { name: "Branding", desc: "Identities with intent" },
          { name: "Graphic Design", desc: "Visual storytelling" },
        ],
      },
    ],
  } as ContactServiceGroupsSection,

  "contact.form": {
    badge: "Fast reply",
    title: "Send a secure message",
    description: "",
    nameLabel: "Full Name",
    namePlaceholder: "e.g. Priya Sharma",
    phoneLabel: "Phone Number",
    phoneCountryCode: "+91",
    phonePlaceholder: "8369207836",
    emailLabel: "Business Email",
    emailPlaceholder: "e.g. priya@retailbrand.in",
    servicesLabel: "Services Required",
    servicesPlaceholder: "Choose one or more services",
    budgetLabel: "Budget",
    budgetPlaceholder: "Select budget",
    budgetOptions: [
      "Under Rs. 25,000",
      "Rs. 25,000 - Rs. 50,000",
      "Rs. 50,000 - Rs. 1,00,000",
      "Above Rs. 1,00,000",
    ],
    timelineLabel: "Timeline",
    timelinePlaceholder: "Select timeline",
    timelineOptions: ["Urgent", "1-2 weeks", "1 month", "Flexible"],
    messageLabel: "How can we help?",
    messagePlaceholder:
      "Tell us about your digital platforms, your timeline, and your specific growth targets...",
    submitButtonText: "Submit Message",
    successTitle: "Thank you! Message Received",
    successMessage:
      "We've logged your request. One of our growth advisors will reach out to you via email within the next business day.",
    customFields: [],
  } as ContactFormConfig,

  // --- SEO & META SETTINGS ---
  "home.seo": {
    title: "Hegxcorp — Data-Driven Growth Marketing Agency",
    description:
      "Hegxcorp helps businesses generate more leads, sales and revenue through data-driven SEO, paid advertising, web development and conversion optimisation. Serving India, USA, UK and Dubai.",
    keywords:
      "digital marketing agency, SEO agency India, PPC agency, web development, growth marketing, Hegxcorp",
    ogTitle: "Hegxcorp — Data-Driven Growth Marketing Agency",
    ogDescription:
      "Generate more leads, sales and revenue through data-driven growth marketing. SEO, Paid Ads, Web Development and CRO.",
    ogImage: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
    canonicalUrl: "https://hegxcorp.com",
  } as PageSeoConfig,

  "about.seo": {
    title: "About Hegxcorp — Digital Transformation & Growth Engineering",
    description:
      "Meet Hegxcorp, a digital growth consultancy helping ambitious companies scale through data-driven SEO, paid media, high-performance web systems, and brand strategy.",
    keywords: "about hegxcorp, growth consultancy, digital agency founders, engineering team",
    ogTitle: "About Hegxcorp — Digital Transformation & Growth Engineering",
    ogDescription:
      "Meet Hegxcorp, a digital growth consultancy helping ambitious companies scale through data-driven SEO, paid media, high-performance web systems, and brand strategy.",
    ogImage: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
    canonicalUrl: "https://hegxcorp.com/about",
  } as PageSeoConfig,

  "services.seo": {
    title: "Growth Engineering & Marketing Services — Hegxcorp",
    description:
      "End-to-end digital capabilities designed to compound enterprise value across SEO, paid media, full-stack web development, CRO, and brand engineering.",
    keywords: "growth services, SEO services, PPC agency, custom web development, CRO agency",
    ogTitle: "Growth Engineering & Marketing Services — Hegxcorp",
    ogDescription:
      "End-to-end digital capabilities designed to compound enterprise value across SEO, paid media, full-stack web development, CRO, and brand engineering.",
    ogImage: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
    canonicalUrl: "https://hegxcorp.com/services",
  } as PageSeoConfig,

  "contact.seo": {
    title: "Contact Hegxcorp — Schedule a Growth Consultation",
    description:
      "Get in touch with Hegxcorp's digital transformation consultants. Let's discuss your growth targets, SEO opportunities, and ad performance audit.",
    keywords:
      "contact hegxcorp, hire marketing agency, schedule growth audit, consulting consultation",
    ogTitle: "Contact Hegxcorp — Schedule a Growth Consultation",
    ogDescription:
      "Get in touch with Hegxcorp's digital transformation consultants. Let's discuss your growth targets, SEO opportunities, and ad performance audit.",
    ogImage: "https://hegxcorp.com/cropped-hegxcorp-logo-new-web.webp",
    canonicalUrl: "https://hegxcorp.com/contact",
  } as PageSeoConfig,
};

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export * from "./sub-services-config";
