import FamilyIcon from "@/assets/svgs/services-icons/FamilyIcon";
import FoodIcon from "@/assets/svgs/services-icons/FoodIcon";
import TeamBuildingIcon from "@/assets/svgs/services-icons/TeamBuildingIcon";
import WeddingIcon from "@/assets/svgs/services-icons/WeddingIcon";
import type { ReactNode } from "react";

type ServicesDataTypes = {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
};

export const services: ServicesDataTypes[] = [
  {
    title: "Wedding Venues & after party locations",
    link: "/services",
    image: "https://",
    icon: <WeddingIcon />,
    description:
      "At Kavijoy Safari Resort, we turn your dream event into a reality. Whether you're planning a grand wedding, an intimate engagement party, a lively birthday, or a private celebration, our beautifully landscaped outdoor grounds and lakeside views create the perfect setting.",
  },
  {
    title: "Family & Kids Amusement",
    link: "/services",
    image: "https://",
    icon: <FamilyIcon />,
    description:
      "At Kavijoy Safari Resort, we believe family time should be fun and unforgettable. Our resort offers a vibrant amusement zone designed with kids in mind — complete with bouncing castles, trampolines, water slides, and an open waterfront for light family fun.",
  },
  {
    title: "Authentic Local Cuisines",
    link: "/services",
    image: "https://",
    icon: <FoodIcon />,
    description:
      "At Kavijoy Safari Resort, food is more than just a meal — it's a cultural experience. Our menu is rooted in rich Luo culinary traditions, prepared fresh with love and local ingredients. From the savory taste of smoked tilapia and fried omena to mouth-watering nyama choma and traditional greens like osuga and apoth, every dish tells a story of our heritage.",
  },
  {
    title: "Team Building  & Corporate Retreats",
    link: "/services",
    image: "https://",
    icon: <TeamBuildingIcon />,
    description:
      "Kavijoy Safari Resort offers the ideal environment for corporate retreats, team-building experiences, and professional workshops. Our spacious, tranquil grounds provide a refreshing break from the office — perfect for groups looking to strengthen bonds, spark new ideas, ",
  },
];
