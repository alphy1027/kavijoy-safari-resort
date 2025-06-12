import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

import SubTitle from "@/components/section/SubTitle";
import Input from "./Input";
import Button from "@/components/UI-primitives/Button";
import SubmitIcon from "@/assets/svgs/actions/SubmitIcon";

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    emailjs.init("sqlVEIsWI5psNTm43"); // Public key
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    if (!formRef.current) return;

    const serviceID = "service_tcsdoci";
    const templateID = "template_3sk466f";

    emailjs
      .sendForm(serviceID, templateID, formRef.current)
      .then(() => {
        console.log("Email sent successfully!", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };
  console.log(submitted);
  return (
    <form ref={formRef} className="flex flex-col py-8 w-full gap-y-6 max-w-[466px]" onSubmit={handleSubmit}>
      <SubTitle className="color-foreground">Send us a message</SubTitle>

      <div className="flex flex-col gap-y-3">
        <Input
          label="Full Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {/* Use a native textarea if your Input doesn't support multiline */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="h-[100px] p-3 border border-gray-300 rounded-md resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <Button type="submit" variant="secondary" rightIcon={<SubmitIcon />} className="self-end"></Button>
    </form>
  );
};

export default ContactForm;
