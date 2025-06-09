import { Link } from "react-router-dom";
import WhatsappIcon from "../WhatsappIcon";
import FacebookIcon from "../FacebookIcon";
import InstagramIcon from "../InstagramIcon";
import TiktokIcon from "../TiktokIcon";
import TwitterIcon from "../TwitterIcon";

type SocialsProps = {
  size?: number;
  className?: string;
};

const SocialsGroup = ({ size, className }: SocialsProps) => {
  return (
    <nav className="flex gap-x-3 items-center">
      <Link to="contact-us">
        <WhatsappIcon size={size} className={className} />
      </Link>
      <Link to="/">
        <FacebookIcon size={size} className={className} />
      </Link>
      <Link to="about">
        <TwitterIcon size={size} className={className} />
      </Link>
      <Link to="contact-us">
        <TiktokIcon size={size} className={className} />
      </Link>
      <Link to="services">
        <InstagramIcon size={size} className={className} />
      </Link>
    </nav>
  );
};

export default SocialsGroup;
