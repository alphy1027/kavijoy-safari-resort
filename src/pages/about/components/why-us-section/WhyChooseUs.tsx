import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import AboutFeatures from "./AboutFeatures";
import PersonalizedIcon from "@/assets/svgs/about/PersonalizedIcon";
import AffordableIcon from "@/assets/svgs/about/AffordableIcon";
import CuisineIcon from "@/assets/svgs/about/CuisineIcon";

const WhyChooseUs = () => {
  return (
    <SectionContainer className="flex gap-x-6">
      <figure className="hidden lg:block relative rounded-sm overflow-hidden w-full flex-1">
        <img src="none" alt="" className="bg-accent absolute inset-y-4 inset-x-14" />
        <figcaption className="sr-only">Kavijoy Safari Resort picture</figcaption>
      </figure>
      <div className="px-4 pb-2 flex flex-col gap-y-2 lg:w-[50%]">
        <SectionTitle caption="Why Us?" className="py-2">
          {" "}
          Why Choose Kavijoy
        </SectionTitle>
        <BodyText variant="bronze">
          Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of Lake
          Victoria in Kisumu, we bring together the beauty of nature, the warmth of Luo culture, and a variety of
          services
        </BodyText>
        <div className="flex flex-col gap-y-[1px] w-[95%] sm:w-[90%] margin-auto bg-secondary ">
          <AboutFeatures icon={<PersonalizedIcon />} title="Peronalized Services">
            Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of
            Lake.
          </AboutFeatures>

          <AboutFeatures icon={<AffordableIcon />} title="Affordable Prices">
            Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of
            Lake
          </AboutFeatures>

          <AboutFeatures icon={<CuisineIcon />} title="Traditional Cuisine">
            Kavijoy Safari Resort is more than just a venue — it’s an experience. Located along the serene shores of
            Lake.
          </AboutFeatures>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUs;
