import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  className?: string;
  children: ReactNode;
  caption?: string;
};

const SectionTitle = ({ className, children, caption }: TitleProps) => {
  return (
    <div className={twMerge("flex flex-col py-8 w-fit ", className)}>
      <p className="text-body-sm color-secondary font-family-caption tracking-wide">{caption}</p>
      <h2 className="font-semibold tracking-wide uppercase text-heading-base font-family-heading color-primary">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
