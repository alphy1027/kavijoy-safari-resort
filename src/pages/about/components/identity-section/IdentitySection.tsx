import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";

const IdentitySection = () => {
  return (
    <section className="flex flex-col items-center">
      <SectionTitle caption="Our Goals" className="text-center">
        Our Identity
      </SectionTitle>
      <div className="flex md:flex-row lg:flex-row flex-col">
        <article className="bg-primary md:p-20 p-10 text-center flex flex-col gap-y-6">
          <h3 className="font-bold text-heading-base color-secondary md:py-14 py-10">Our Mission</h3>
          <BodyText variant="cream">
            At Kavijoy Safari Resort, our mission is to create unforgettable experiences by blending nature, culture,
            and community. We strive to be Kisumu leading destination for relaxation, celebration, and connection.
            Whether you're hosting a wedding, enjoying a traditional meal, or spending time with family, we are
            committed to delivering excellence with authenticity, safety, and care.
          </BodyText>
        </article>
        <article className="bg-secondary text-foreground md:p-20 p-10 text-center flex flex-col gap-y-6">
          <h3 className="font-bold text-heading-base color-primary md:py-14 py-10">Our Vision</h3>
          <BodyText>
            At Kavijoy Safari Resort, we envision to become the most cherished lakeside destination in Kenya,a resort
            where every guest feels at home, every event becomes a lasting memory, and the natural beauty of Kisumu is
            celebrated with pride and purpose. Through innovation, hospitality, and cultural richness, Kavijoy Safari
            Resort will grow into a beacon of relaxation, joy, and community.
          </BodyText>
        </article>
      </div>
    </section>
  );
};

export default IdentitySection;
