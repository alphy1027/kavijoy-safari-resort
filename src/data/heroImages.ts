import foodImage from "@/assets/images/food.jpg";
import kidsPoolImage from "@/assets/images/kids-pool.jpg";
import weddingImage from "@/assets/images/wedding.jpg";
import conferenceRoomImage from "@/assets/images/conference-room.jpg";

type HeroImage = {
  home: string[];
  services: string;
  about: string;
  contact: string;
};

const heroImage: HeroImage = {
  home: [foodImage, kidsPoolImage, weddingImage, conferenceRoomImage],
  services: "",
  about: "",
  contact: "",
};

export default heroImage;
