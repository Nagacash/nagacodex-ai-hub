import { KontaktContent } from "@/components/ai-hub/kontakt/KontaktContent";
import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";

export default function KontaktPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <KontaktContent />
      </main>
      <SiteFooter />
    </div>
  );
}
