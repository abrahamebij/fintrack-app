import { TabsContextType } from "@/types";
import { createContext } from "react";

export const TabsContext = createContext<TabsContextType>({
  activeTab: "overview",
  setActiveTab: () => {}, // dummy default
});
