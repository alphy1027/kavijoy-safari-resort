import Aside from "./Aside";

type SidebarProps = {
  closeSidebar: () => void;
};

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  return (
    //Sidebar overlay, wrapper to both the backdrop and the sidebar
    <div className="fixed inset-0 z-40 lg:hidden">
      <Aside closeSidebar={closeSidebar} />
    </div>
  );
};

export default Sidebar;
