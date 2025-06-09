import HeroImage from "@/assets/images/heroimage.avif";
import ContactCard from "./components/contact-us-section/contact-card/ContactCard";
import FaqSection from "./components/faqsection/components/FaqSection";
import Breadcrumb from "@/components/UI-primitives/BreadCrumb";
import LocationSection from "./components/location-section/LocationSection";
import PageContainer from "@/components/section/PageContainer";

const ContactPage = () => {
  return (
    <PageContainer>
      <section className=" bg-cover bg-center h-[250px]" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="flex flex-col items-center justify-center gap-y-6 p-12">
          <span className=" text-center text-background  font-semibold ">Contact Us</span>
          <Breadcrumb />
        </div>
      </section>

      <ContactCard />
      <LocationSection />
      <FaqSection />
    </PageContainer>
  );
};

export default ContactPage;
