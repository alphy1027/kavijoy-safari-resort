import PageContainer from "@/components/section/PageContainer";
import TestimonialsSection from "../about/components/testimonials-section/TestimonialsSection";
import WhyChooseUs from "../about/components/why-us-section/WhyChooseUs";
import ContactCard from "../contact/components/contact-us-section/contact-card/ContactCard";
import FaqSection from "../contact/components/faqsection/components/FaqSection";
import HomepageAboutUsSection from "./components/about-us-section/HomepageAboutUsSection";
import IntroSection from "./components/IntroSection";
import HomeServicesSection from "./components/home-services-section/HomeServicesSectiion";
import HeroSection from "@/components/hero/HeroSection";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection isSlider />
      <IntroSection />
      <HomepageAboutUsSection />
      <HomeServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactCard />
      <FaqSection />
    </PageContainer>
  );
};

export default HomePage;
