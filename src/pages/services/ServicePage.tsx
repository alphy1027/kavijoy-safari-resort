import PageContainer from "@/components/section/PageContainer";
import SectionContainer from "@/components/section/SectionContainer";
import Breadcrumb from "@/components/UI-primitives/BreadCrumb";
import HeroImage from "@/assets/images/heroimage.avif";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import { useParams } from "react-router-dom";
import { services } from "@/data/servicesData";

const ServicePage = () => {
  const { id } = useParams();
  const service = services.find((s) => s.link === id);

  if (!service) {
    return (
      <PageContainer>
        <h2 className="text-center text-xl mt-10">Service not found.</h2>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <section className=" bg-cover bg-center h-[250px]" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="flex flex-col items-center justify-center gap-y-6 p-12">
          <span className=" text-center text-background  font-semibold ">Services</span>
          <Breadcrumb />
        </div>
      </section>
      <SectionContainer className="flex flex-col justify-between gap-y-14">
        <section className="flex justify-between sm:flex-col md:flex-row gap-8">
          <div className="md:w-3/4 sm:w-[100%]">
            {" "}
            <SectionTitle>{service.title}</SectionTitle>
            <BodyText className="w-3/4">{service.description}</BodyText>
          </div>
          <div className="flex flex-col gap-4 md:w-1/4 sm:w-[100%]">
            <div className="bg-primary w-[100%] h-30"></div>
            <div className="bg-primary w-[100%] h-30"></div>
            <div className="bg-primary w-[100%] h-30"></div>
          </div>
        </section>
        <figure className="w-[100%] bg-primary h-72">
          <img src={service.image} alt={service.title} className="max-w-[100%]" />
          <figcaption>{service.title}</figcaption>
        </figure>
      </SectionContainer>
    </PageContainer>
  );
};

export default ServicePage;
