import Breadcrumb from "@/components/UI-primitives/BreadCrumb";
import HeroImage from "@/assets/images/heroimage.avif";
import WhyChooseUs from "./components/why-us-section/WhyChooseUs";
import AboutSection from "./components/our-story-section/AboutSection";
import FaqSection from "../contact/components/faqsection/components/FaqSection";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import IdentitySection from "./components/identity-section/IdentitySection";
import PageContainer from "@/components/section/PageContainer";

const AboutPage = () => {
  return (
    <PageContainer className="flex flex-col gap-y-40 overflow-x-hidden">
      <section className=" bg-cover bg-center h-[90vh]" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="flex flex-col items-center justify-center gap-y-6 p-12">
          <span className=" text-center text-background  font-semibold ">About Us</span>
          <Breadcrumb />
        </div>
      </section>{" "}
      <AboutSection />
      <IdentitySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </PageContainer>
  );
};

export default AboutPage;
