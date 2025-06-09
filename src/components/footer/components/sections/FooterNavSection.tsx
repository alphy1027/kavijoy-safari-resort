import { navLinks } from "@/routes/navLinks";
import FooterHeading from "../FooterHeading";
import { NavLink } from "react-router-dom";

const FooterNavSection = () => {
  return (
    <section className="flex sm:order-2 xl:order-1 flex-col gap-y-4 items-center">
      <FooterHeading>Links</FooterHeading>
      <div className="flex sm:flex-col items-center gap-x-6 gap-y-4">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.link}
            to={navLink.path}
            className={({ isActive }) =>
              `hover:scale-105 transition-all text-body-sm duration-200 ease-in color-secondary ${
                isActive ? "underline scale-105 font-semibold" : ""
              }`
            }
          >
            {navLink.link}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default FooterNavSection;
