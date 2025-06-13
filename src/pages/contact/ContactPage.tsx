import ContactCard from "./components/contact-us-section/contact-card/ContactCard";
import FaqSection from "./components/faqsection/components/FaqSection";
import LocationSection from "./components/location-section/LocationSection";
import PageContainer from "@/components/section/PageContainer";
import { getRouteImages } from "@/routes/routeImages";
import Banner from "@/components/section/Banner";

const ContactPage = () => {
  const [BannerImage] = getRouteImages("/contact-us");

  return (
    <PageContainer>
      <Banner image={BannerImage} title="Contact Us"></Banner>

      <ContactCard />
      <LocationSection />
      <FaqSection />
    </PageContainer>
  );
};

export default ContactPage;
