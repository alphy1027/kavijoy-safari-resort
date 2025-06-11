import type { ReactNode } from "react";

const FooterHeading = ({ children }: { children: ReactNode }) => {
  return <h4 className="color-secondary font-semibold text-heading-xs">{children}</h4>;
};

export default FooterHeading;
