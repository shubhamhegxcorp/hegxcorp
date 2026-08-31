export type OrganizationSchemaProps = {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
};

export function OrganizationSchema({
  name = "Hegxcorp",
  url = "https://hegxcorp.com",
  logo = "https://hegxcorp.com/favicon/apple-touch-icon.png",
  description = "Data-driven digital growth agency providing SEO, paid media, high-performance web engineering, and conversion rate optimisation.",
  sameAs = [
    "https://twitter.com/hegxcorp",
    "https://linkedin.com/company/hegxcorp",
    "https://instagram.com/hegxcorp",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 836 920 7836",
      contactType: "Customer Support",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "10th Floor Building 4, Nesco IT Park, Western Express Highway, Goregaon (East)",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400063",
      addressCountry: "India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hegxcorp",
    url: "https://hegxcorp.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://hegxcorp.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `https://hegxcorp.com${crumb.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  authorRole?: string;
  image?: string;
};

export function ArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  authorName,
  image = "https://hegxcorp.com/favicon/apple-touch-icon.png",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    url,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Hegxcorp",
      logo: {
        "@type": "ImageObject",
        url: "https://hegxcorp.com/favicon/apple-touch-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export type ServiceSchemaProps = {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  image?: string;
};

export function ServiceSchema({
  serviceName,
  serviceType,
  description,
  url,
  image = "https://hegxcorp.com/favicon/apple-touch-icon.png",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType,
    description,
    url,
    image,
    provider: {
      "@type": "Organization",
      name: "Hegxcorp",
      url: "https://hegxcorp.com",
    },
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
