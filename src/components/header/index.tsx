import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import SectionContainer from "../section/SectionContainer";
import HeaderContactSection from "./components/sections/HeaderContactSection";
import NavBar from "./components/NavBar";
import Title from "../UI-primitives/Title";
import Button from "../UI-primitives/Button";
import MenuIcon from "@/assets/svgs/actions/MenuIcon";

const Header = () => {
  return (
    <header className="flex flex-col">
      <HeaderContactSection />
      <SectionContainer className="flex flex-col py-0">
        <div className="flex items-center justify-between py-4">
          <div className="hidden md:block">
            <SocialsGroup size={20} className="fill-foreground" />
          </div>
          <Title />
          <Button size="sm" className="hidden lg:block">
            Book Now
          </Button>
          <Button variant="outline" rightIcon={<MenuIcon />} className="border-none p-2 lg:hidden"></Button>
        </div>
        <NavBar />
      </SectionContainer>
    </header>
  );
};

export default Header;
