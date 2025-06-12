import EmailIcon from "@/assets/svgs/contact/EmailIcon";
import LocationIcon from "@/assets/svgs/contact/LocationIcon";
import PhoneIcon from "@/assets/svgs/contact/PhoneIcon";
import SubTitle from "@/components/section/SubTitle";
import AddressInfo from "./AddressInfo";
import SectionContainer from "@/components/section/SectionContainer";
import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import ContactForm from "../contact-form/ContactForm";
import SectionTitle from "@/components/section/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";

const ContactCard = () => {
  return (
    <SectionContainer>
      <div className="py-10">
        <SectionTitle caption="Contact Us">Get in touch with us</SectionTitle>
        <BodyText className="max-w-[568px]">
          Send us a message in case of any enquiry and we’ll get back to you as soon as possible. We are eager to get
          your feedback and make our services better to make your experiences better.
        </BodyText>
      </div>
      <section className="margin-auto md:border max-w-[918px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 grid-rows-2 border-secondary rounded-sm overflow-hidden">
        <div className="sm:px-10 px-4 row-span-2 md:row-span-1 col-span-2 flex justify-center items-center">
          <ContactForm />
        </div>

        <div className="bg-primary md:px-8 gap-y-10 flex-1 flex flex-col justify-between px-4 pt-8 pb-4 items-center">
          <SubTitle>Contact Information</SubTitle>
          <div className="flex flex-col gap-y-[1px] bg-accent">
            <AddressInfo icon={<LocationIcon />}>Upper Kombewa, Kisumu City</AddressInfo>
            <AddressInfo icon={<PhoneIcon />}>+254 722250809</AddressInfo>
            <AddressInfo icon={<EmailIcon />}>Kavijoyresort@gmail.com</AddressInfo>
          </div>

          <SocialsGroup size={24} className="fill-accent" />
        </div>
      </section>
    </SectionContainer>
  );
};

export default ContactCard;
