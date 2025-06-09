import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";

const AboutSection = () => {
  return (
    <SectionContainer className="flex flex-col items-center gap-y-2">
      <SectionTitle caption="About Us" className="text-center">
        Our Story
      </SectionTitle>
      <figure className="rounded-sm overflow-hidden w-full">
        <img src="none" alt="" className="h-[248px] md:h-[318px] xl:h-[420px] bg-accent" />
        <figcaption className="sr-only">Kavijoy Safari Resort Premise photo</figcaption>
      </figure>
      <BodyText className="py-10 md:px-10 lg:px-24">
        Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of Lake
        Victoria in Kisumu, we bring together the beauty of nature, the warmth of Luo culture, and a variety of services
        tailored for unforgettable moments. Whether you're here to celebrate love on our stunning wedding grounds,
        indulge in authentic Luo delicacies like smoked fish and nyama choma, or simply enjoy a fun-filled day with
        family, we've got something for everyone. Kavijoy Safari Resort is more than just a venue — it’s an experience.
        Located along the serene shores of Lake Victoria in Kisumu, we bring together the beauty of nature, the warmth
        of Luo culture, and a variety of services tailored for unforgettable moments. Whether you're here to celebrate
        love on our stunning wedding grounds, indulge in authentic Luo delicacies like smoked fish and nyama choma, or
        simply enjoy a fun-filled day with family, we've got something for everyone.
      </BodyText>
    </SectionContainer>
  );
};

export default AboutSection;
