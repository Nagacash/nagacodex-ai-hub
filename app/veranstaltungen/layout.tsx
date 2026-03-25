import type { Metadata } from "next";

const canonical = "https://ai.hamburg/de/veranstaltungen/";

export const metadata: Metadata = {
  title: "Veranstaltungen | AI.HAMBURG",
  description:
    "Anstehende Events von AI.HAMBURG – Workshops, Konferenzen und Networking-Events rund um Künstliche Intelligenz in der Metropolregion Hamburg.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "Veranstaltungen – AI.HAMBURG",
    description:
      "Anstehende Events von AI.HAMBURG – Workshops, Konferenzen und Networking-Events rund um Künstliche Intelligenz.",
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

export default function VeranstaltungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
