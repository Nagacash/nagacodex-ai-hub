import type { Metadata } from "next";

const canonical = "https://ai.hamburg/kontakt";

export const metadata: Metadata = {
  title: "Kontakt & Anmeldung | AI.HAMBURG",
  description:
    "Kontaktieren Sie AI.HAMBURG: allgemeine Anfragen, Workshops, Inhouse-Schulungen, Newsletter und Community.",
  alternates: { canonical },
  openGraph: {
    locale: "de_DE",
    type: "website",
    title: "Kontakt & Anmeldung – AI.HAMBURG",
    description: "Kontaktformular, Adresse, Telefon und E-Mail der AI for Hamburg GmbH.",
    url: canonical,
    siteName: "AI.HAMBURG",
  },
  robots: { index: true, follow: true },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
