import SectionContainer from "../section/SectionContainer";
import BodyText from "../UI-primitives/BodyText";
import FooterContactSection from "./components/sections/FooterContactSection";
import FooterSocialSection from "./components/sections/FooterSocialSection";
import FooterNavSection from "./components/sections/FooterNavSection";
import FooterTitleSection from "./components/sections/FooterTitleSection";

const Footer = () => {
  return (
    <footer className="bg-primary pt-6">
      <SectionContainer className="flex flex-col xl:flex-row gap-x-6 gap-y-12">
        <FooterTitleSection />

        <section className="flex flex-col sm:flex-row gap-8 justify-around flex-1">
          <FooterNavSection />
          <FooterContactSection />
          <FooterSocialSection />
        </section>
      </SectionContainer>

      <BodyText variant="sage" size="sm" className="text-center py-8">
        @ 2025 Kavijoy Safari Resort. All rights reserved.
      </BodyText>
    </footer>
  );
};

export default Footer;
