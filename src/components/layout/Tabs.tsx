import { TabsContext } from "@/context/TabsContext";
import { useContext } from "react";

const tabs = ["overview", "transactions"];

const Tabs = () => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <div className="mb-2 mt-7">
      <div className="flex gap-8 px-5">
        {tabs.map((tab) => (
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab);
            }}
            key={tab}
            className={`pb-2 transition-colors capitalize ${
              activeTab === tab
                ? "text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
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
  );
};

export default Tabs;
