import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CodeComparisonSection from "@/components/code-comparison-section";
import FeaturesSection from "@/components/features-section";
import ProcessStepsSection from "@/components/process-steps-section";
import CTASection from "@/components/cta-section";
import { legacyCode, modernCode } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <CodeComparisonSection
          title="Legacy Code Converter"
          description="See how our AI transforms outdated code into clean, modern, maintainable solutions."
          leftTitle="Legacy Code (.NET)"
          rightTitle="Modern Code (.NET)"
          leftCode={legacyCode}
          rightCode={modernCode}
          showPartners={true}
        />

        <FeaturesSection />

        <ProcessStepsSection />

        <CodeComparisonSection
          title="Experience the transformation"
          description="Try our code converter with your own code and see the difference."
          leftCode={legacyCode}
          rightCode={modernCode}
        />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
