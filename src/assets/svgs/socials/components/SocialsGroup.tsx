import WhatsappIcon from "../WhatsappIcon";
import FacebookIcon from "../FacebookIcon";
import InstagramIcon from "../InstagramIcon";
import TiktokIcon from "../TiktokIcon";
import TwitterIcon from "../TwitterIcon";
import { info } from "@/data/info";

type SocialsProps = {
  size?: number;
  className?: string;
};

const SocialsGroup = ({ size, className }: SocialsProps) => {
  return (
    <nav className="flex gap-x-4 items-center">
      <a href={info.whatsapp} target="_blank" rel="noreferrer noopener">
        <WhatsappIcon size={size} className={className} />
      </a>

      <a href={info.facebook} target="_blank" rel="noreferrer noopener">
        <FacebookIcon size={size} className={className} />
      </a>

      <a href={info.twitter} target="_blank" rel="noreferrer noopener">
        <TwitterIcon size={size} className={className} />
      </a>

      <a href={info.tiktok} target="_blank" rel="noreferrer noopener">
        <TiktokIcon size={size} className={className} />
      </a>

      <a href={info.instagram} target="_blank" rel="noreferrer noopener">
        <InstagramIcon size={size} className={className} />
      </a>
    </nav>
  );
};

export default SocialsGroup;
