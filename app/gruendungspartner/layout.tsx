import type { Metadata } from "next";

const canonical = "https://ai.hamburg/gruendungspartner";

export const metadata: Metadata = {
  title: "Gründungspartner | AI.HAMBURG",
  description:
    "Die Initiative AI for Hamburg (AI.HAMBURG) wurde 2019 von den Smaato-Gründern Petra Vorsteher & Ragnar Kruse gegründet – gemeinsam mit Hamburg@work, TUTECH, Hamburger Universitäten und städtischen Partnern.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "article",
    title: "Gründungspartner – AI.HAMBURG",
    description:
      "Gründungspartner von AI.HAMBURG: Petra Vorsteher & Ragnar Kruse, Hamburg@work, Tutech, TUHH und weitere Partner der Metropolregion.",
    url: canonical,
    siteName: "AI.HAMBURG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hamburg_ai",
  },
};

export default function GruendungspartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
