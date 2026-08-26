export interface HeroSection {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  secondaryButtonText: string;
  secondaryButtonUrl: string;
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
}

export interface AboutValuesSection {
  tagline: string;
  title: string;
  description: string;
  values: { title: string; description: string }[];
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

export const DEFAULT_CMS_SECTIONS: Record<string, any> = {
  // --- HOME PAGE ---
  "home.hero": {
    badge: "Growth Consultancy & Digital Transformation Partner",
    title: "Generate More Leads, Sales & Revenue",
    description:
      "We design and execute data-driven growth marketing systems, custom engineering, and search optimization built to position enterprise firms for compounding scale.",
    buttonText: "Browse Articles",
    buttonUrl: "/blog",
    secondaryButtonText: "Contact Team",
    secondaryButtonUrl: "/contact",
  } as HeroSection,

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
    phone: "+91 98765 43210",
    email: "growth@hegxcorp.com",
    address: "Mumbai, Maharashtra, India",
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
    phone: "+91 98765 43210",
    email: "growth@hegxcorp.com",
    address: "Mumbai, Maharashtra, India",
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
};
