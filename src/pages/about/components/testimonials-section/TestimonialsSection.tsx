import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./components/TestimonialCard";
import Button from "@/components/UI-primitives/Button";
import ArrowLeftIcon from "@/assets/svgs/actions/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <SectionContainer className="flex flex-col items-center">
      <SectionTitle caption="Testimonials" className="flex flex-col items-center">
        {" "}
        What Our Clients Are Saying
      </SectionTitle>

      <div className="embla" ref={emblaRef}>
        <section className="embla__container gap-x-4 px-4 pt-6 pb-14">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              image={testimonial.image}
            />
          ))}
        </section>
      </div>
      <div className="flex items-center gap-x-4 pt-12">
        <Button variant="outline" leftIcon={<ArrowLeftIcon />} />
        <Button variant="outline" rightIcon={<ArrowRightIcon />} />
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
