import QuoteIcon from "@/assets/svgs/about/QuoteIcon";
import BodyText from "@/components/UI-primitives/BodyText";
import type { Testimonial } from "@/data/testimonials";

interface CardProps extends Testimonial {
  selectedIndex: number;
  index: number;
}

const TestimonialCard = ({ image, testimonial, name, selectedIndex, index }: CardProps) => {
  return (
    <div
      className={`embla__slide ${
        selectedIndex === index ? "bg-primary" : "bg-transparent border-2 scale-80 border-secondary"
      } transition-all duration-200 ease-in-out  gap-y-2 max-w-[536px] xl:max-w-[636px] relative flex flex-col pb-14 items-center p-4 rounded-sm`}
    >
      <QuoteIcon />
      <BodyText variant="sage" className="text-center tracking-wide font-family-caption">
        {testimonial}
      </BodyText>

      <div className="flex flex-col items-center  absolute -bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2">
        <figure className="">
          <img src={image} alt="" className="w-14 h-14 bg-accent rounded-full" />
          <figcaption className="sr-only">{name}</figcaption>
        </figure>
        <p
          className={`${
            selectedIndex === index ? "color-foreground" : "color-accent"
          } font-semibold font-family-caption tracking-wide`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
