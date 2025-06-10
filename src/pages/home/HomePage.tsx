import PageContainer from "@/components/section/PageContainer";
import TestimonialsSection from "../about/components/testimonials-section/TestimonialsSection";
import WhyChooseUs from "../about/components/why-us-section/WhyChooseUs";
import ContactCard from "../contact/components/contact-us-section/contact-card/ContactCard";
import FaqSection from "../contact/components/faqsection/components/FaqSection";
import ServicesSection from "../services/components/service-card/ServicesSection";
import HomepageAboutUsSection from "./components/about-us-section/HomepageAboutUsSection";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <IntroSection />
      <HomepageAboutUsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactCard />
      <FaqSection />
    </PageContainer>
  );
};

export default HomePage;
