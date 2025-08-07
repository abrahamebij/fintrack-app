import Img from "../ui/Img";
import { FiMenu, FiSearch, FiGrid } from "react-icons/fi";
import Link from "next/link";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  // Disable to check menu state
  // console.log(isMenuOpen);

  return (
    <>
      <header className="flex items-center justify-between text-xl py-4 px-2">
        {/* L.H.S */}
        <div className="flex gap-4 sm:gap-6 items-center">
          {/* Hamburger Button */}
          <button onClick={() => setIsMenuOpen(true)}>
            <FiMenu />
          </button>
          <Link href={"#"} className="text-primary flex items-center gap-2">
            <Img src="logo.svg" className="bg-transparent" alt="Logo" />
            <p className="font-timmana translate-y-1.5 text-xl">FinTrack</p>
          </Link>
        </div>
        {/* R.H.S */}
        <div className="flex gap-3 sm:gap-5 items-center">
          <button>
            <FiSearch />
          </button>
          <button>
            <FiGrid />
          </button>
          <button>
            <Img
              src="user_1.jpg"
              className="w-10 h-10 rounded-full"
              alt="Avatar"
            />
          </button>
        </div>
      </header>
      {/* Empty overlay screen */}
      {isMenuOpen && (
        <div
          className={`fixed flex bg-black/20 w-full duration-500 h-lvh opacity-0 ${
            isMenuOpen && "opacity-100"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
