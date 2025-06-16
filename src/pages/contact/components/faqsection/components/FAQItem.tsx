import ChevronDownIcon from "@/assets/svgs/actions/ChevronDownIcon";
import BodyText from "@/components/UI-primitives/BodyText";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
};

const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }: FAQItemProps) => {
  const isOpen = openIndex === index;

  const toggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border border-foreground rounded-sm transition-all duration-300">
      <button onClick={toggle} className="w-full flex p-4 justify-between items-center text-left">
        <BodyText className="font-medium">{question}</BodyText>
        <div className={`transition-all duration-75 ease-in-out ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDownIcon />
        </div>
      </button>

      {isOpen && (
        <div className="pb-2 px-3">
          <BodyText size="sm" className="text-left relative text-gray-600 max-w-[95%] py-1 px-4">
            <span className="absolute top-0 bottom-0 left-0 bg-primary rounded-xs w-1 h-full"></span>
            {answer}
          </BodyText>
        </div>
      )}
    </div>
  );
};
export default FAQItem;
