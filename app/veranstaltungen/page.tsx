import { Header } from "@/components/ai-hub/Header";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";
import { EventsHero } from "@/components/ai-hub/veranstaltungen/EventsHero";
import { UpcomingEvents } from "@/components/ai-hub/veranstaltungen/UpcomingEvents";

export default function VeranstaltungenPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <EventsHero />
        <UpcomingEvents />
      </main>
      <SiteFooter />
    </div>
  );
}
