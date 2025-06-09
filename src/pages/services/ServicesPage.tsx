import Breadcrumb from "@/components/UI-primitives/BreadCrumb";
import HeroImage from "@/assets/images/heroimage.avif";
import ServicesSection from "./components/service-card/ServicesSection";
import PageContainer from "@/components/section/PageContainer";

const ServicesPage = () => {
  return (
    <PageContainer>
      <section className=" bg-cover bg-center h-[250px]" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="flex flex-col items-center justify-center gap-y-6 p-12">
          <span className=" text-center text-background  font-semibold ">Services</span>
          <Breadcrumb />
        </div>
      </section>

      <ServicesSection />
    </PageContainer>
  );
};

export default ServicesPage;
