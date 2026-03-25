import type { Metadata } from "next";

const canonical = "https://ai.hamburg/de/background/";

export const metadata: Metadata = {
  title: "Background | AI.HAMBURG",
  description:
    "Mit dem Vormarsch der künstlichen Intelligenz haben wir die Möglichkeit, unsere Intelligenz massiv zu erweitern.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "Background – AI.HAMBURG",
    description:
      "Mit dem Vormarsch der künstlichen Intelligenz haben wir die Möglichkeit, unsere Intelligenz massiv zu erweitern.",
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

export default function BackgroundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
