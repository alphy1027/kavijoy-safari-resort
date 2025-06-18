import type { ReactNode } from "react";
import HeroSlider from "./components/HeroSlider";
import heroImage from "@/data/heroImages";

type HeroProps = {
  isSlider?: boolean;
  image?: string;
  children?: ReactNode;
};

const HeroSection = ({ isSlider = false, image, children }: HeroProps) => {
  return (
    <div className="relative">
      {isSlider ? (
        <HeroSlider images={heroImage.home} />
      ) : (
        <figure className="w-full">
          <img src={image ? image : ""} alt="" className="h-[80vh] w-full object-cover" />
          <figcaption className="sr-only">Kavijoy scenery photo</figcaption>
        </figure>
      )}
      <div className="absolute left-1/2 top-[6%] rounded-sm -translate-x-1/2">{children}</div>
    </div>
  );
};

export default HeroSection;
