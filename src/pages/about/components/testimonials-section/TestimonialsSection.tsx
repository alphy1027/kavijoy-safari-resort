import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/section/SectionTitle";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./components/TestimonialCard";
import Button from "@/components/UI-primitives/Button";
import ArrowLeftIcon from "@/assets/svgs/actions/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";

const TestimonialsSection = () => {
  return (
    <SectionContainer className="flex flex-col items-center">
      <SectionTitle caption="Testimonials" className="flex flex-col items-center">
        {" "}
        What Our Clients Are Saying
      </SectionTitle>

      <section className="flex gap-x-4 w-full justify-center px-4 py-6">
        {testimonials.slice(2).map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
            image={testimonial.image}
          />
        ))}
      </section>
      <div className="flex items-center gap-x-4 pt-12">
        <Button variant="outline" leftIcon={<ArrowLeftIcon />} />
        <Button variant="outline" rightIcon={<ArrowRightIcon />} />
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
