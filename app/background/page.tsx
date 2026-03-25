import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";
import { BackgroundHero } from "@/components/ai-hub/background/BackgroundHero";
import { GlobalRace } from "@/components/ai-hub/background/GlobalRace";
import { EuropeanOpportunity } from "@/components/ai-hub/background/EuropeanOpportunity";
import { BlogHighlights } from "@/components/ai-hub/about/BlogHighlights";

export default function BackgroundPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BackgroundHero />
        <GlobalRace />
        <EuropeanOpportunity />
        <BlogHighlights />
      </main>
      <SiteFooter />
    </div>
  );
}
