import BodyText from "@/components/UI-primitives/BodyText";
import Title from "@/components/UI-primitives/Title";

const FooterTitleSection = () => {
  return (
    <section className="flex flex-col gap-y-4">
      <Title className="color-background" />
      <BodyText variant="champagne" size="sm" className="max-w-[400px]">
        Kavijoy Safari Resort is more than just a venue — it’s an experience. Located at Upper Kombewa, Kisumu City,our
        resort offers a perfect blend of natural beauty, modern comfort, and cultural richness.
      </BodyText>
    </section>
  );
};

export default FooterTitleSection;
