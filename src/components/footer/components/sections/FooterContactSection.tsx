import FooterContact from "../FooterContact";
import FooterHeading from "../FooterHeading";
import LocationIcon from "@/assets/svgs/contact/LocationIcon";
import EmailIcon from "@/assets/svgs/contact/EmailIcon";
import PhoneIcon from "@/assets/svgs/contact/PhoneIcon";

const FooterContactSection = () => {
  return (
    <section className="flex flex-col sm:order-3 xl:order-2 gap-y-4 items-center">
      <FooterHeading>Contact</FooterHeading>
      <div className="flex flex-col gap-y-4">
        <FooterContact icon={<LocationIcon />}>Upper Kombewa, Kisumu City</FooterContact>
        <FooterContact icon={<PhoneIcon />}>+254 722250809</FooterContact>
        <FooterContact icon={<EmailIcon />}>Kavijoyresort@gmail.com</FooterContact>
      </div>
    </section>
  );
};

export default FooterContactSection;
