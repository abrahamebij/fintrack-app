// "use client"
// import { useState } from "react";
import NavLink from "../ui/NavLink";

const Sidebar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="z-20 flex flex-col gap-3 fixed left-0 top-20 w-1/3 min-w-[200px] max-w-3xs py-4">
        <NavLink title="Dashboard" />
        <NavLink title="Dashboard" active />
        <NavLink title="Dashboard" />
        <NavLink title="Dashboard" />
      </nav>
      {/* Empty overlay screen */}
      {/* <div className="fixed flex bg-black/20 w-full h-lvh"></div> */}
    </>
  );
};

export default Sidebar;
