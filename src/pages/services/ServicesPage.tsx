import ServicesSection from "./components/service-card/ServicesSection";
import PageContainer from "@/components/section/PageContainer";
import { getRouteImages } from "@/routes/routeImages";
import Banner from "@/components/section/Banner";

const ServicesPage = () => {
  const [BannerImage] = getRouteImages("/services");
  return (
    <PageContainer>
      <Banner image={BannerImage} title="Services">
        {""}
      </Banner>

      <ServicesSection />
    </PageContainer>
  );
};

export default ServicesPage;
