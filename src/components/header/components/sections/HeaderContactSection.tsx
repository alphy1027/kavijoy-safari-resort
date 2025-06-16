import LocationIcon from "@/assets/svgs/contact/LocationIcon";
import BodyText from "@/components/UI-primitives/BodyText";

const HeaderContactSection = () => {
  return (
    <section className="bg-primary text-accent flex px-6 py-1 gap-x-6">
      <div className="flex items-center gap-x-2">
        <LocationIcon />{" "}
        <BodyText variant="sage" size="sm" className="font-medium">
          Upper Kombewa, Kisumu City
        </BodyText>
      </div>
    </section>
  );
};

export default HeaderContactSection;
