import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import { navLinks } from "@/routes/navLinks";
import { NavLink } from "react-router-dom";
import Title from "../UI-primitives/Title";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";

type SideBarProps = {
  closeSidebar: () => void;
};

const asideVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    x: -10000,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      type: "tween",
    },
  },
};

const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Aside = ({ closeSidebar }: SideBarProps) => {
  return (
    <motion.aside
      variants={asideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`
        fixed top-0 flex flex-col justify-between py-12 items-center left-0 h-full w-[75%] bg-primary z-50
        transition-all duration-300 ease-in-out
      `}
    >
      <motion.div
        exit={{ opacity: 0 }}
        onClick={closeSidebar}
        className="absolute top-0 right-0 bottom-0 w-full translate-x-full transform bg-black/40"
      />
      <Title className="color-secondary" />
      <motion.nav
        variants={navVariants}
        className="flex flex-col gap-y-2 px-2 sm:px-8 text-center divide-y divide-accent"
      >
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.link}
            to={navLink.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `py-4 px-6 font-semibold uppercase text-xl font-family-heading tracking-widest ${
                isActive ? "color-secondary" : "color-accent"
              }`
            }
          >
            {navLink.link}
          </NavLink>
        ))}
      </motion.nav>
      <SocialsGroup size={20} className="fill-accent" />{" "}
    </motion.aside>
  );
};

export default Aside;
