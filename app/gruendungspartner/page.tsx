import { GruendungspartnerContent } from "@/components/ai-hub/gruendungspartner/GruendungspartnerContent";
import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";

export default function GruendungspartnerPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <GruendungspartnerContent />
      </main>
      <SiteFooter />
    </div>
  );
}
