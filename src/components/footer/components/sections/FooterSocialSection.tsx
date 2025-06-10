import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import FooterHeading from "../FooterHeading";

const FooterSocialSection = () => {
  return (
    <section className="flex flex-col sm:order-1 xl:order-3 gap-y-4 items-center">
      <FooterHeading>Follow Us</FooterHeading>
      <SocialsGroup size={24} className="fill-accent" />
    </section>
  );
};

export default FooterSocialSection;
