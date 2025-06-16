// components/common/Banner.tsx
import type { ReactNode } from "react";
import Breadcrumb from "../UI-primitives/BreadCrumb";

interface BannerProps {
  image: string;
  title?: string;
  children?: ReactNode;
  height?: string; 
}

const Banner = ({ image, title, height = "86vh" }: BannerProps) => {
  return (
    <section
      className="relative bg-cover bg-center w-full flex justify-center py-30 text-white"
      style={{
        backgroundImage: `url(${image})`,
        height,
      }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center gap-y-4 text-center">
        {title && (
          <h1 className="text-heading-xl font-family-heading color-primary max-w-[250px] font-bold">{title}</h1>
        )}
        <Breadcrumb />
      </div>
    </section>
  );
};

export default Banner;
