import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";
import { AboutHero } from "@/components/ai-hub/about/AboutHero";
import { AiForHamburg } from "@/components/ai-hub/about/AiForHamburg";
import { FocusAreas } from "@/components/ai-hub/about/FocusAreas";
import { BlogHighlights } from "@/components/ai-hub/about/BlogHighlights";
import { AboutCta } from "@/components/ai-hub/about/AboutCta";

export default function AboutPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AiForHamburg />
        <FocusAreas />
        <BlogHighlights />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}
