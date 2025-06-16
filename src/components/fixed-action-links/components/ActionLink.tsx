import type { ReactNode } from "react";

type LinkProps = {
  children: string;
  icon: ReactNode;
  to: string;
};

const ActionLink = ({ children, icon, to }: LinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className="flex hover:scale-105 transition-all duration-200 ease-in-out gap-x-2 justify-center items-center py-1 w-full"
    >
      {icon}
      <span className="uppercase font-family-heading color-background text-heading-xs tracking-wider">{children}</span>
    </a>
  );
};

export default ActionLink;
