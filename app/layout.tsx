import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AI.HUB HAMBURG 2026 | AI.HAMBURG",
    template: "%s | AI.HAMBURG",
  },
  description:
    "Die Hands-on-Workshops der AI.ACADEMY machen Ihre Teams fit für eine neue Arbeitswelt mit AI. Vom Buzzword zu konkretem Business Value!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${jakarta.variable} ${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className="font-sans min-h-full text-zinc-800 [font-feature-settings:'ss01'_on,'cv11'_on] selection:bg-secondary/25 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
