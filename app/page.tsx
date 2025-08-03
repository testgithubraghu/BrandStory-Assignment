import DubaiServicesMap from "@/components/home/dubai-services-map";
import Hero from "@/components/home/hero";
import SEOCTASection from "@/components/home/seo-cta-section";
import SEOFAQSection from "@/components/home/seo-faq-sections";
import SEOImportanceSection from "@/components/home/seo-importance-section";
import SEOPartnerSection from "@/components/home/seo-partner-section";
import SEOProcessSection from "@/components/home/seo-process-section";
import SEOServicesSection from "@/components/home/seo-services-section";
import SocialMediaSection from "@/components/home/social-media-section";
import TestimonialSlider from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <SEOImportanceSection />
      <SEOServicesSection />
      <SEOPartnerSection />
      <SEOProcessSection />
      <TestimonialSlider />
      <SocialMediaSection />
      <DubaiServicesMap />
      <SEOCTASection />
      <SEOFAQSection />
    </div>
  );
}
