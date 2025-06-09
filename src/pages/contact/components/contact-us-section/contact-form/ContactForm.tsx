import SubTitle from "@/components/section/SubTitle";
import Input from "./Input";
import Button from "@/components/UI-primitives/Button";
import SubmitIcon from "@/assets/svgs/actions/SubmitIcon";

const ContactForm = () => {
  return (
    <form className="flex flex-col py-8 w-full gap-y-6 max-w-[466px]">
      <SubTitle className="color-foreground">Send us a message</SubTitle>
      <div className="flex flex-col gap-y-3">
        <Input label="Full Name:" name="name" placeholder="Enter your name" />
        <Input label="Email:" type="email" name="email" placeholder="Enter your email" />
        <Input label="Message:" type="message" name="message" placeholder="Enter your message " className="h-[100px]" />
      </div>

      <Button variant="secondary" rightIcon={<SubmitIcon />} className="self-end" />
    </form>
  );
};

export default ContactForm;
