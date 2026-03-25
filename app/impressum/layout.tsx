import type { Metadata } from "next";

const canonical = "https://ai.hamburg/impressum";

export const metadata: Metadata = {
  title: "Impressum | AI.HAMBURG",
  description:
    "Impressum und rechtliche Angaben der AI for Hamburg GmbH, Hamburg – Kontakt, Vertretung, Register, Haftung.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "website",
    title: "Impressum – AI.HAMBURG",
    description: "Impressum der AI for Hamburg GmbH.",
    url: canonical,
    siteName: "AI.HAMBURG",
  },
  robots: { index: true, follow: true },
};

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
