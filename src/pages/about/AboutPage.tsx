import WhyChooseUs from "./components/why-us-section/WhyChooseUs";
import AboutSection from "./components/our-story-section/AboutSection";
import FaqSection from "../contact/components/faqsection/components/FaqSection";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import IdentitySection from "./components/identity-section/IdentitySection";
import PageContainer from "@/components/section/PageContainer";
import { getRouteImages } from "@/routes/routeImages";
import Banner from "@/components/section/Banner";

const AboutPage = () => {
  const [HeroImage] = getRouteImages("/about");
  return (
    <PageContainer className="flex flex-col overflow-x-hidden">
      <Banner image={HeroImage} title="About Us">
        {""}
      </Banner>
      <AboutSection />
      <IdentitySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </PageContainer>
  );
};

export default AboutPage;
