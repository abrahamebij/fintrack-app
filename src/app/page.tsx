"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Summary from "@/components/layout/Summary";
import Tabs from "@/components/layout/Tabs";
import TransactionTable from "@/components/layout/TransactionTable";
import WalletLedger from "@/components/layout/WalletLedger";
import { MenuContext } from "@/context/MenuContext";
import { TabsContext } from "@/context/TabsContext";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const menuValue = { isMenuOpen, setIsMenuOpen };
  const tabsValue = { activeTab, setActiveTab };

  return (
    <div className="px-3 sm:px-5 pb-10 grid gap-10 container mx-auto">
      <MenuContext.Provider value={menuValue}>
        <Sidebar />
        <Header />
      </MenuContext.Provider>

      <WalletLedger />

      <TabsContext.Provider value={tabsValue}>
        <Tabs />
      </TabsContext.Provider>

      {activeTab === "transactions" ? <TransactionTable /> : <Summary />}
    </div>
  );
}
