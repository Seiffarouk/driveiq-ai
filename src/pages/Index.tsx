import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformOverview from "@/components/PlatformOverview";
import MLPipeline from "@/components/MLPipeline";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlatformOverview />
      <MLPipeline />
      <Features />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
