import { info } from "@/data/info";
import ActionLink from "./components/ActionLink";
import ActionEmailIcon from "./components/svg/ActionEmailIcon";
import ActionPhoneIcon from "./components/svg/ActionPhoneIcon";
import ActionWhatsappIcon from "./components/svg/ActionWhatsappIcon";

const FixedActionLinks = () => {
  return (
    <nav className="bg-primary border border-background lg:max-w-[500px] p-2 bottom-0 divide-accent divide-x left-0 right-0 fixed z-40 flex gap-x-2 justify-around items-center">
      <ActionLink to={info.email} icon={<ActionEmailIcon />}>
        Email Us
      </ActionLink>
      <ActionLink to={info.phone} icon={<ActionPhoneIcon />}>
        Call Us
      </ActionLink>
      <ActionLink to={info.whatsapp} icon={<ActionWhatsappIcon />}>
        Whatsapp
      </ActionLink>
    </nav>
  );
};

export default FixedActionLinks;
