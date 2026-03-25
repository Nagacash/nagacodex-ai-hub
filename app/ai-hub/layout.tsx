import type { Metadata } from "next";

const canonical = "https://ai.hamburg/de/ai-hub/";

export const metadata: Metadata = {
  title: "AI.HUB HAMBURG 2026 | AI.HAMBURG",
  description:
    "Die Hands-on-Workshops der AI.ACADEMY machen Ihre Teams fit für eine neue Arbeitswelt mit AI. Vom Buzzword zu konkretem Business Value!",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "AI.HUB",
    description:
      "Die Hands-on-Workshops der AI.ACADEMY machen Ihre Teams fit für eine neue Arbeitswelt mit AI. Vom Buzzword zu konkretem Business Value!",
    url: canonical,
    siteName: "AI.HAMBURG",
    images: [
      {
        url: "https://ai.hamburg/wp-content/uploads/2024/02/ai-hamburg-logo.jpg",
        width: 700,
        height: 400,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hamburg_ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: "AI.HUB HAMBURG 2026 | AI.HAMBURG",
      description:
        "Die Hands-on-Workshops der AI.ACADEMY machen Ihre Teams fit für eine neue Arbeitswelt mit AI. Vom Buzzword zu konkretem Business Value!",
      inLanguage: "de",
    },
  ],
};

export default function AiHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
