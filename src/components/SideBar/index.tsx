import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import { navLinks } from "@/routes/navLinks";
import { NavLink } from "react-router-dom";
import Title from "../UI-primitives/Title";

type SideBarProps = {
  openSideBar: boolean;
  closeSideBar: () => void;
};

const SideBar = ({ openSideBar, closeSideBar }: SideBarProps) => {
  return (
    <div
      className={`
        fixed top-0 flex flex-col justify-between py-4 items-center left-0 h-full w-[75%] bg-primary z-50
        transition-transform duration-400 ease-in-out
        ${openSideBar ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <Title className="color-secondary" />
      <nav className="flex flex-col gap-y-2 px-2 sm:px-8 text-center">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.link}
            to={navLink.path}
            onClick={closeSideBar}
            className="text-accent py-4 px-6 font-semibold uppercase text-xl font-family-heading tracking-wider"
          >
            {navLink.link}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center">
        <SocialsGroup size={20} className="fill-accent" />{" "}
      </div>
    </div>
  );
};

export default SideBar;
