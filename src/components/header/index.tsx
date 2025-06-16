import SocialsGroup from "@/assets/svgs/socials/components/SocialsGroup";
import SectionContainer from "../section/SectionContainer";
import HeaderContactSection from "./components/sections/HeaderContactSection";
import NavBar from "./components/NavBar";
import Title from "../UI-primitives/Title";
import Button from "../UI-primitives/Button";
import MenuIcon from "@/assets/svgs/actions/MenuIcon";
import CloseIcon from "@/assets/svgs/actions/CloseIcon";

type HeaderProps = {
  openSidebar: () => void;
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

const Header = ({ openSidebar, isSidebarOpen, closeSidebar }: HeaderProps) => {
  return (
    <header className="flex flex-col">
      <HeaderContactSection />
      <SectionContainer className="flex flex-col py-0">
        <div className="flex items-center justify-between py-4">
          <div className="hidden md:block">
            <SocialsGroup size={20} className="fill-foreground" />
          </div>
          <Title className="color-primary" />
          <Button className="hidden lg:block">Book Now</Button>
          {isSidebarOpen ? (
            <Button
              variant="outline"
              rightIcon={<CloseIcon />}
              className="border-none p-2 lg:hidden"
              onClick={closeSidebar}
            />
          ) : (
            <Button
              variant="outline"
              rightIcon={<MenuIcon />}
              className="border-none p-2 lg:hidden"
              onClick={openSidebar}
            />
          )}
        </div>
        <NavBar />
      </SectionContainer>
    </header>
  );
};

export default Header;
