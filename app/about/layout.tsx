import type { Metadata } from "next";

const canonical = "https://ai.hamburg/de/about/";

export const metadata: Metadata = {
  title: "About | AI.HAMBURG",
  description:
    "AI.HAMBURG fördert das Wissen und den breiten Einsatz von künstlicher Intelligenz und insbesondere des maschinellen Lernens in Unternehmen der Region.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "About – AI.HAMBURG",
    description:
      "AI.HAMBURG fördert das Wissen und den breiten Einsatz von künstlicher Intelligenz und insbesondere des maschinellen Lernens in Unternehmen der Region.",
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
