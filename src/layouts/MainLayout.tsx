import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionContainer from "@/components/section/SectionContainer";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
        <SectionContainer className="py-16">
          <div className="bg-blue-900 px-4 py-6 rounded-sm flex flex-col gap-4 items-center justify-center">
            <h4 className="color-secondary text-heading-sm font-semibold">
              Ready to experience Kavijoy Safari Resort?
            </h4>
            <BodyText variant="cream" className="max-w-[550px] text-center">
              Plan your next event, escape, or family outing by the lake. We’re here to make every moment unforgettable
              — let’s make it happen together.
            </BodyText>
            <Button variant="secondary">Book Now</Button>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
