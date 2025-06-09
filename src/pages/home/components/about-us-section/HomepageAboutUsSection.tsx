import SectionContainer from "@/components/section/SectionContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import LinkButton from "@/components/UI-primitives/LinkButton";

const HomepageAboutUsSection = () => {
  return (
    <div className="bg-primary lg:bg-background lg:py-28 xl:py-20">
      <SectionContainer className="relative">
        <figure className="rounded-sm overflow-hidden w-full">
          <img src="none" alt="" className="h-[248px] md:h-[318px] xl:h-[420px] bg-accent" />
          <figcaption className="sr-only">Kavijoy Safari Resort Premise photo</figcaption>
        </figure>
        <div className="lg:absolute rounded-sm top-1/2 right-[10%] lg:-translate-y-1/2 flex-col flex gap-y-6 py-6 lg:py-14 px-4 lg:px-6 lg:bg-primary lg:w-[380px] xl:[434px]">
          <div className="flex flex-col w-fit ">
            <p className="text-body-sm color-secondary">About Us</p>
            <h2 className="font-bold text-heading-base color-background">
              A Destination Made for <br /> Moments That Matter
            </h2>
          </div>
          <BodyText variant="sage">
            Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of
            Lake Victoria in Kisumu, we bring together the beauty of nature, the warmth of Luo culture, and a variety of
            services tailored for unforgettable moments. Whether you're here to celebrate love on our stunning wedding
            grounds, indulge in authentic Luo delicacies like smoked fish and nyama choma, or simply enjoy a fun-filled
            day with family, we've got something for everyone.
          </BodyText>
          <LinkButton to="/about" variant="secondary">
            Learn More
          </LinkButton>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HomepageAboutUsSection;
