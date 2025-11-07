import HeroSection from "@/components/hero-section";
import Features from "@/components/features-3";
import IntegrationsSection from "@/components/integrations-7";
import StatsSection from "@/components/stats-4";
import TeamSection from "@/components/team";
import FAQsThree from "@/components/faqs-3";
export default function Home() {
  return (
    <div> 
      <HeroSection/>
      <Features/>
      <IntegrationsSection/>
      <StatsSection/>
      <TeamSection/>
      <FAQsThree/>
      
    </div>
  );
}
