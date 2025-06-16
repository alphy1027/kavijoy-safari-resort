import type { ReactNode } from "react";
import HeroSlider from "./components/HeroSlider";
import heroImage from "@/data/heroImages";

type HeroProps = {
  isSlider?: boolean;
  image?: string;
  content?: ReactNode;
};

const HeroSection = ({ isSlider = false, image, content }: HeroProps) => {
  return (
    <div>
      {isSlider ? (
        <HeroSlider images={heroImage.home} />
      ) : (
        <figure className="rounded-sm overflow-hidden w-full">
          <img src={image ? image : ""} alt="" className="h-[248px] md:h-[318px] xl:h-[420px] bg-accent" />
          <figcaption className="sr-only">Kavijoy scenery photo</figcaption>
        </figure>
      )}
      <div className="">{content}</div>
    </div>
  );
};

export default HeroSection;
