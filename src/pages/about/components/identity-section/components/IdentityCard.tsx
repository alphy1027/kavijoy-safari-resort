import BodyText from "@/components/UI-primitives/BodyText";
import type { ReactNode } from "react";

type CardProps = {
  variant?: "primary" | "secondary";
  title: string;
  children: ReactNode;
};

const IdentityCard = ({ variant }: CardProps) => {
  return (
    <article
      className={`${
        variant === "secondary" ? "bg-secondary" : "bg-primary"
      } md:px-14 md:py-12 p-10 text-center flex flex-col gap-y-6`}
    >
      <h3 className={`${variant === "secondary" ? " color-primary" : "color-secondary"} font-bold text-heading-base`}>
        Our Vision
      </h3>
      <BodyText variant={variant === "secondary" ? "bronze" : "cream"}>
        At Kavijoy Safari Resort, we envision to become the most cherished lakeside destination in Kenya,a resort where
        every guest feels at home, every event becomes a lasting memory, and the natural beauty of Kisumu is celebrated
        with pride and purpose. Through innovation, hospitality, and cultural richness, Kavijoy Safari Resort will grow
        into a beacon of relaxation, joy, and community.
      </BodyText>
    </article>
  );
};

export default IdentityCard;
