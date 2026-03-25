import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";
import { EcosystemHero } from "@/components/ai-hub/ai-ecosystem/EcosystemHero";
import { HamburgEcosystem } from "@/components/ai-hub/ai-ecosystem/HamburgEcosystem";
import { StartupLandscape } from "@/components/ai-hub/ai-ecosystem/StartupLandscape";

export default function AiEcosystemPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <EcosystemHero />
        <HamburgEcosystem />
        <StartupLandscape />
      </main>
      <SiteFooter />
    </div>
  );
}
