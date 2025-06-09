import BodyText from "@/components/UI-primitives/BodyText";
import type { ReactNode } from "react";

const AboutFeatures = ({ children, icon, title }: { icon: ReactNode; children: ReactNode; title: string }) => {
  return (
    <div className="flex gap-y-2 flex-col bg-background px-2 py-4">
      <div className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center">{icon}</div>
      <h4 className="font-semibold text-heading-xs color-foreground">{title}</h4>
      <BodyText size="sm">{children}</BodyText>
    </div>
  );
};

export default AboutFeatures;
