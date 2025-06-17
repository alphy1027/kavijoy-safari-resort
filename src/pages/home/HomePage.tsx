import PageContainer from "@/components/section/PageContainer";
import TestimonialsSection from "../about/components/testimonials-section/TestimonialsSection";
import WhyChooseUs from "../about/components/why-us-section/WhyChooseUs";
import ContactCard from "../contact/components/contact-us-section/contact-card/ContactCard";
import FaqSection from "../contact/components/faqsection/components/FaqSection";
import HomepageAboutUsSection from "./components/about-us-section/HomepageAboutUsSection";
import IntroSection from "./components/IntroSection";
import HomeServicesSection from "./components/home-services-section/HomeServicesSectiion";
import HeroSection from "@/components/hero/HeroSection";
import hutImage from "@/assets/images/huts.jpg";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection image={hutImage}>
        <h1 className="text-heading-lg lg:text-heading-xl text-center font-family-heading color-primary max-w-[290px] font-bold">
          More than just a stay, - A story
        </h1>
      </HeroSection>
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
