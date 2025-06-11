import { NavLink } from "react-router-dom";
import { navLinks } from "@/routes/navLinks";

const NavBar = () => {
  return (
    <nav className="md:flex flex-row hidden border-t border-secondary gap-x-4 justify-center p-2 items-center color-foreground">
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.link}
          to={navLink.path}
          className={({ isActive }) =>
            `hover:scale-105 transition-all tracking-wider py-2 font-medium font-family-heading px-4 uppercase duration-200 ease-in ${
              isActive ? "color-primary" : "color-foreground"
            }`
          }
        >
          {navLink.link}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
