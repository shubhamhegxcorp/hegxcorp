import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Hegxcorp" },
      {
        name: "description",
        content: "Learn how cookies and similar technologies may be used on the Hegxcorp website.",
      },
    ],
  }),
  component: CookiePolicyPage,
});

const sections = [
  {
    title: "What cookies are",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. Similar technologies may use local storage, pixels, or identifiers to support comparable functions.",
    ],
  },
  {
    title: "How we may use cookies",
    paragraphs: [
      "Hegxcorp may use cookies to operate core site features, remember preferences, measure website performance, understand visitor journeys, and improve content and campaigns.",
    ],
    items: [
      "Essential cookies help pages, forms, and security features work correctly.",
      "Preference cookies remember choices that make future visits more convenient.",
      "Analytics cookies help us understand aggregated traffic and website performance.",
      "Marketing cookies may help measure campaigns and show more relevant communications where permitted.",
    ],
  },
  {
    title: "Third-party technologies",
    paragraphs: [
      "Some analytics, embedded content, or marketing tools may set their own cookies. Those providers process information under their own privacy policies and controls.",
    ],
  },
  {
    title: "Managing cookies",
    paragraphs: [
      "Most browsers let you view, block, or delete cookies through privacy settings. You can also use private browsing or device-level controls.",
      "Disabling essential cookies may prevent some website features from working as expected.",
    ],
  },
  {
    title: "Policy updates",
    paragraphs: [
      "We may update this policy when the website adopts new technologies or when legal requirements change. The updated date at the top identifies the latest version.",
    ],
  },
];

function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      summary="This policy explains how cookies and similar technologies may support the Hegxcorp website and how you can control them."
      sections={sections}
    />
  );
}
