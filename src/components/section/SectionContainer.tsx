import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const SectionContainer = ({ children, className }: SectionProps) => {
  return (
    <section className={twMerge("w-[92%] md:w-[90%] margin-auto max-w-[1200px] py-4", className)}>{children}</section>
  );
};

export default SectionContainer;
