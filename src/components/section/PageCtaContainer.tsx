import SectionContainer from "./SectionContainer";
import BodyText from "../UI-primitives/BodyText";
import Button from "../UI-primitives/Button";

const PageCtaContainer = () => {
  return (
    <SectionContainer className="py-16">
      <div className="bg-accent px-4 py-6 rounded-sm flex flex-col gap-4 items-center justify-center">
        <h4 className="color-primary max-w-[250px] text-center text-heading-sm tracking-wider font-family-heading uppercase font-semibold">
          Ready to experience Kavijoy Safari Resort?
        </h4>
        <BodyText variant="bronze" size="sm" className="max-w-[550px] text-center">
          Plan your next event, escape, or family outing by the lake.We’re here to make every moment unforgettable —
          let’s make it happen together.
        </BodyText>
        <Button variant="outline">Book Now</Button>
      </div>
    </SectionContainer>
  );
};

export default PageCtaContainer;
