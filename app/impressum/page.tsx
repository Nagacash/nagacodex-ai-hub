import { ImpressumContent } from "@/components/ai-hub/impressum/ImpressumContent";
import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";

export default function ImpressumPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ImpressumContent />
      </main>
      <SiteFooter />
    </div>
  );
}
