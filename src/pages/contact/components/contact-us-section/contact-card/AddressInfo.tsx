import BodyText from "@/components/UI-primitives/BodyText";
import type { ReactNode } from "react";

const AddressInfo = ({ children, icon }: { icon: ReactNode; children: ReactNode }) => {
  return (
    <div className="flex gap-x-2 items-center bg-primary py-4">
      {icon}
      <BodyText variant="sage" size="sm">
        {children}
      </BodyText>
    </div>
  );
};

export default AddressInfo;
