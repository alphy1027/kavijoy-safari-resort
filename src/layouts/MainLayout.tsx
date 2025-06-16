import FixedActionLinks from "@/components/fixed-action-links/FixedActionLinks";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ScrollToTop } from "@/components/ScrollTop/ScrollToTop";
import PageCtaContainer from "@/components/section/PageCtaContainer";
import Sidebar from "@/components/side-bar/Sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <FixedActionLinks />
      <AnimatePresence>{isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}</AnimatePresence>
      <Header isSidebarOpen={isSidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <ScrollToTop />
      <main className="flex-1">
        <Outlet />
        <PageCtaContainer />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
