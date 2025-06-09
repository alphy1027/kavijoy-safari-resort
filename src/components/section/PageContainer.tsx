import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PageProps = {
  className?: string;
  children: ReactNode;
};

const PageContainer = ({ children, className }: PageProps) => {
  return <div className={twMerge("flex flex-col gap-y-8 bg-red-100", className)}>{children}</div>;
};

export default PageContainer;
