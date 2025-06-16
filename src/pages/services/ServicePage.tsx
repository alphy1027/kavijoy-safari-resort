import PageContainer from "@/components/section/PageContainer";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import { Link, useParams } from "react-router-dom";
import { services } from "@/data/servicesData";
import { getRouteImages } from "@/routes/routeImages";
import Banner from "@/components/section/Banner";
import SubTitle from "@/components/section/SubTitle";

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.link === id);
  const [BannerImage] = getRouteImages("/services/:id");

  if (!service) {
    return (
      <PageContainer>
        <SubTitle>Service Not Found.</SubTitle>
        <Link to="services">Back To Services</Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Banner image={BannerImage} title={service.title}>
        {""}
      </Banner>
      <SectionContainer className="flex flex-col justify-between gap-y-14">
        <section className="flex justify-between sm:flex-col md:flex-row gap-8">
          <div className="md:w-[60%] sm:w-[100%]">
            {" "}
            <SectionTitle>{service.title}</SectionTitle>
            <BodyText>{service.description}</BodyText>
          </div>
          <div className="flex flex-col gap-2 md:w-[40%] sm:w-[100%] ">
            <div className="bg-primary w-[100%] h-30"></div>
            <div className="bg-primary w-[100%] h-30"></div>
            <div className="bg-primary w-[100%] h-30"></div>
          </div>
        </section>
      </SectionContainer>
    </PageContainer>
  );
};

export default ServicePage;
