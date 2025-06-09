import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const SubTitle = ({ children, className }: TitleProps) => {
  return <h3 className={twMerge("color-background text-xl font-semibold", className)}>{children}</h3>;
};

export default SubTitle;
