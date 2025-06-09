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
      <p className="text-body-sm color-secondary">{caption}</p>
      <h2 className="font-bold text-heading-base color-primary">{children}</h2>
    </div>
  );
};

export default SectionTitle;
