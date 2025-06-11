import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";
import SectionContainer from "@/components/section/SectionContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import LinkButton from "@/components/UI-primitives/LinkButton";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ServiceProps = {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
};

const ServiceCard = ({ icon, title, description, index, link }: ServiceProps) => {
  const reverse = index % 2;
  return (
    <SectionContainer
      className={`flex flex-col lg:gap-x-6 lg:items-center lg:flex-row gap-y-6 
    ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <figure
        className={`relative lg:flex-1  h-[250px] md:h-[343px] xl:h-[488px] 
        ${reverse ? "" : ""}`}
      >
        <div
          className={`bg-accent absolute top-0 bottom-0
        ${reverse ? " -right-10 md:-right-20 xl:-right-30 left-0" : " right-0 -left-10 md:-left-20 xl:-left-30"}`}
        />
        <figcaption className="sr-only">Kavijoy services image</figcaption>
      </figure>

      <article
        className={`h-fit flex lg:w-[350px] justify-center justify-self-center flex-col gap-y-4 xl:gap-y-8 xl:pl-0  ${
          reverse ? "" : ""
        }`}
      >
        <div className="flex flex-col gap-y-4 w-fit">
          {icon}
          <h3 className="color-primary font-semibold max-w-[380px] text-xl">{title}</h3>
        </div>
        <BodyText>{description}</BodyText>
        <LinkButton to={link} className="color-primary">
          Learn More
        </LinkButton>
      </article>
    </SectionContainer>
  );
};

export default ServiceCard;
