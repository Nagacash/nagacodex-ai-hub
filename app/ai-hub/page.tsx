import { ExpertiseCarousel } from "@/components/ai-hub/ExpertiseCarousel";
import { FinalCta } from "@/components/ai-hub/FinalCta";
import { Header } from "@/components/ai-hub/Header";
import { Hero } from "@/components/ai-hub/Hero";
import { ImplementationSection } from "@/components/ai-hub/ImplementationSection";
import { IntroBenefits } from "@/components/ai-hub/IntroBenefits";
import { MembershipSection } from "@/components/ai-hub/MembershipSection";
import { ServicesGrid } from "@/components/ai-hub/ServicesGrid";
import { SiteFooter } from "@/components/ai-hub/SiteFooter";
import { SectionScrollNav } from "@/components/ai-hub/SectionScrollNav";
import { VideoCarousel } from "@/components/ai-hub/VideoCarousel";

export default function AiHubPage() {
  return (
    <div className="relative z-10 flex min-h-full flex-col mesh-page">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[min(92rem,calc(100%-1.5rem))] pt-6 md:max-w-[min(100rem,calc(100%-2.5rem))] md:pt-8">
          <Hero />
        </div>
        <IntroBenefits />
        <ServicesGrid />
        <VideoCarousel />
        <ImplementationSection />
        <MembershipSection />
        <ExpertiseCarousel />
        <FinalCta />
      </main>
      <SectionScrollNav />
      <SiteFooter />
    </div>
  );
}
