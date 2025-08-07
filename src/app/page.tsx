"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Summary from "@/components/layout/Summary";
import TransactionTable from "@/components/layout/TransactionTable";
import WalletLedger from "@/components/layout/WalletLedger";
import { MenuContext } from "@/context/MenuContext";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useSearchParams();
  const router = useRouter();
  const tabs = ["overview", "transactions"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getInitialTab = () => {
    const rawTab = params.get("tab");
    return tabs.includes(rawTab || "") ? rawTab! : "overview";
  };
  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const rawTab = params.get("tab");
    if (tabs.includes(rawTab || "")) {
      setActiveTab(rawTab!);
    }
  }, [params]);

  const value = { isMenuOpen, setIsMenuOpen };

  return (
    <MenuContext.Provider value={value}>
      <div className="px-3 sm:px-5 pb-10 grid gap-10 container mx-auto">
        <Sidebar />
        <Header />
        <WalletLedger />

        <div className="mb-2 mt-7">
          <div className="flex gap-8 px-5">
            {tabs.map((tab) => (
              <Link
                href={`/?tab=${tab}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab);
                  router.push(`/?tab=${tab}`, { scroll: false });
                }}
                key={tab}
                className={`pb-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>
          <div className="relative w-full py-0.5 rounded-full overflow-hidden bg-gray">
            <div
              className={`w-28 py-0.5 absolute ${
                activeTab === "overview" ? "left-0" : "left-28"
              } top-0 rounded-full duration-300 bg-primary`}
            ></div>
          </div>
        </div>
        {activeTab === "transactions" ? <TransactionTable /> : <Summary />}
      </div>
    </MenuContext.Provider>
  );
}
