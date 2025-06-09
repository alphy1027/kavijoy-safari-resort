import ArrowRightIcon from "@/assets/svgs/actions/ArrowRightIcon";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type LinkProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "foreground" | "background";
  className?: string;
};

const LinkButton = ({ children, to, className, variant = "primary" }: LinkProps) => {
  return (
    <Link
      to={to}
      className={twMerge(
        `color-${variant} flex items-center gap-x-2 w-fit py-2 uppercase text-body-base font-semibold hover:underline hover:scale-105 transition-all duration-200 ease-in`,
        className
      )}
    >
      <span>{children}</span> <ArrowRightIcon variant={variant} />
    </Link>
  );
};

export default LinkButton;
