import BodyText from "@/components/UI-primitives/BodyText";
import type { ReactNode } from "react";

const FooterContact = ({ children, icon }: { icon: ReactNode; children: ReactNode }) => {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      <BodyText variant="sage" size="sm">
        {children}
      </BodyText>
    </div>
  );
};

export default FooterContact;
