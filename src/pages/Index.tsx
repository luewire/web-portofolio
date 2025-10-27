import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ScrollingText } from "@/components/ScrollingText";
import { AboutSection } from "@/components/AboutSection";
import { HowToBuySection } from "@/components/HowToBuySection";
import { WhereToBuySection } from "@/components/WhereToBuySection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScrollingText />
      <AboutSection />
      <HowToBuySection />
      <WhereToBuySection />
      <ScrollingText />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
