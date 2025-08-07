import { useContext } from "react";
import NavLink from "../ui/NavLink";
import { MenuContext } from "@/context/MenuContext";

const Sidebar = () => {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <nav
      className={`z-20 flex flex-col gap-3 fixed left-0 top-0 pt-20 w-1/3 min-w-[200px] max-w-3xs py-4 bg-white duration-300 ${
        !isMenuOpen && "-translate-x-[300px]"
      } h-lvh`}
    >
      <NavLink title="Dashboard" active />
      <NavLink title="Transactions" />
      <NavLink title="Reports" />
      <NavLink title="Settings" />
    </nav>
  );
};

export default Sidebar;
