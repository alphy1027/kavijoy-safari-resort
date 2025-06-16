import SectionTitle from "@/components/section/SectionTitle";
import IdentityCard from "./components/IdentityCard";

const IdentitySection = () => {
  return (
    <section className="flex flex-col items-center pb-12 lg:pb-16">
      <SectionTitle caption="Our Goals" className="text-center">
        Our Identity
      </SectionTitle>
      <div className="flex md:flex-row lg:flex-row flex-col">
        <IdentityCard title="Our Mission">
          At Kavijoy Safari Resort, our mission is to create unforgettable experiences by blending nature, culture, and
          community. We strive to be Kisumu leading destination for relaxation, celebration, and connection. Whether
          you're hosting a wedding, enjoying a traditional meal, or spending time with family, we are committed to
          delivering excellence with authenticity, safety, and care.
        </IdentityCard>

        <IdentityCard title="Our Vision" variant="secondary">
          At Kavijoy Safari Resort, we envision to become the most cherished lakeside destination in Kenya,a resort
          where every guest feels at home, every event becomes a lasting memory, and the natural beauty of Kisumu is
          celebrated with pride and purpose. Through innovation, hospitality, and cultural richness, Kavijoy Safari
          Resort will grow into a beacon of relaxation, joy, and community.
        </IdentityCard>
      </div>
    </section>
  );
};

export default IdentitySection;
