import Footer from "@/components/footer";
import Header from "@/components/header";
import PageCtaContainer from "@/components/section/PageCtaContainer";
import SideBar from "@/components/sidebar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <AnimatePresence>{isSidebarOpen && <SideBar closeSidebar={closeSidebar} />}</AnimatePresence>
      <Header isSidebarOpen={isSidebarOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <main className="flex-1">
        <Outlet />
        <PageCtaContainer />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
