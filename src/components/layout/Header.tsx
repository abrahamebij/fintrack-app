import Img from "../ui/Img";
import { FiMenu, FiSearch, FiGrid } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between text-xl py-4 px-2">
      {/* L.H.S */}
      <div className="flex gap-4 sm:gap-6 items-center">
        {/* Hamburger Button */}
        <button>
          <FiMenu />
        </button>
        <Link href={"#"} className="text-primary flex items-center gap-2">
          <Img src="logo.svg" className="bg-transparent" alt="Logo" />
          <p className="font-semibold">FinTrack</p>
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
  );
};

export default Header;
