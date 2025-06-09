import EmailIcon from "@/assets/svgs/contact/EmailIcon";
import PhoneIcon from "@/assets/svgs/contact/PhoneIcon";
import BodyText from "@/components/UI-primitives/BodyText";

const HeaderContactSection = () => {
  return (
    <section className="bg-primary text-accent flex px-6 py-1 justify-start gap-x-6">
      <div className="flex items-center gap-x-2">
        <PhoneIcon />{" "}
        <BodyText variant="sage" size="sm" className="font-medium">
          +254 722250809
        </BodyText>
      </div>
      <div className="flex items-center gap-x-2">
        <EmailIcon />{" "}
        <BodyText variant="sage" size="sm" className="font-medium">
          Kavijoyresort@gmail.com
        </BodyText>
      </div>
    </section>
  );
};

export default HeaderContactSection;
