import type { Metadata } from "next";

const canonical = "https://ai.hamburg/de/ai-ecosystem/";

export const metadata: Metadata = {
  title: "AI Ecosystem | AI.HAMBURG",
  description:
    "Übersicht über das AI Ecosystem in der Metropolregion Hamburg – AI-Firmen, Startups und Dienstleister.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "AI Ecosystem – AI.HAMBURG",
    description:
      "Übersicht über das AI Ecosystem in der Metropolregion Hamburg – AI-Firmen, Startups und Dienstleister.",
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

export default function AiEcosystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
