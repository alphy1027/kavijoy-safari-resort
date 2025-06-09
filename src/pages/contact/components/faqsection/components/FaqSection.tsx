import SectionContainer from "@/components/section/SectionContainer";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqs from "@/data/faqs";
import SectionTitle from "@/components/section/SectionTitle";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionContainer className="text-center">
      <SectionTitle caption="FAQs" className="text-center margin-auto">
        Frequently Asked Questions
      </SectionTitle>

      <div className="flex flex-col w-[96%] md:w-[75%] xl:w-[65%] gap-y-6 margin-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden">
            <FAQItem {...faq} index={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FaqSection;
