import { services } from "@/data/servicesData";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import ServiceCard from "@/pages/services/components/service-card/ServiceCard";

const HomeServicesSection = () => {
  return (
    <div className="">
      <SectionContainer>
        <SectionTitle caption="Services">What we offer</SectionTitle>
        <BodyText className="max-w-[750px]">
          At Kavijoy Safari Resort, we go beyond just providing a space — we create memorable experiences. Nestled along
          the serene waterfront of Kisumu, our resort is designed to offer an unmatched blend of comfort, culture, and
          celebration. Whether you’re planning a vibrant wedding, a family day out, or simply indulging in authentic Luo
          cuisine, our goal is to deliver exceptional service in a beautiful natural setting. From captivating event
          venues to thrilling kids’ amusement and signature local dishes, every service we offer is rooted in our
          passion for hospitality, community, and Kenyan culture.
        </BodyText>
      </SectionContainer>

      <section className="flex flex-col gap-y-10 py-12 overflow-x-hidden">
        {services.map((service, index) => (
          <ServiceCard
            index={index}
            key={index}
            description={service.description}
            title={service.title}
            icon={service.icon}
            link={`/services/${service.link}`}
          />
        ))}
      </section>
    </div>
  );
};

export default HomeServicesSection;
