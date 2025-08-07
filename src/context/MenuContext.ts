import { MenuContextType } from "@/types";
import { createContext } from "react";

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {}, // dummy default
});
