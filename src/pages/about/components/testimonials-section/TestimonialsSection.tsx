import SectionTitle from "@/components/section/SectionTitle";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./components/TestimonialCard";
import Button from "@/components/UI-primitives/Button";
import ArrowLeftIcon from "@/assets/svgs/actions/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="flex flex-col items-center overflow-hidden">
      <SectionTitle caption="Testimonials" className="flex flex-col items-center">
        {" "}
        What Our Clients Are Saying
      </SectionTitle>

      <div className="embla py-2 px-4 flex flex-col items-center">
        <div ref={emblaRef} className="embla__viewport min-h-fit">
          <section className="embla__container min-h-fit w-fit flex items-center gap-x-2 pt-6 pb-14">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                selectedIndex={selectedIndex}
                key={index}
                index={index}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                image={testimonial.image}
              />
            ))}
          </section>
        </div>

        <div className="flex items-center gap-x-4 pt-4 md:pt-8 lg:pt-10">
          <Button variant="outline" leftIcon={<ArrowLeftIcon />} onClick={scrollPrev} />
          <Button variant="outline" rightIcon={<ArrowRightIcon />} onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
