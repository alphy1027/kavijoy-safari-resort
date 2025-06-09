import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";

const LocationSection = () => {
  return (
    <SectionContainer className="text-center">
      <SectionTitle caption="Location">We Are Located At</SectionTitle>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kavijoy Safari Resort Google MapLocation"
        ></iframe>
      </section>
    </SectionContainer>
  );
};

export default LocationSection;
