"use client"

import React, { useState } from "react";
import CtaTabContent from "./CtaTabContent";
import { ctaTabsData } from "@/utils/tab";

const CtaTab = () => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <div className="pageMargin">
      <div className="flex bg-transparent border-2 border-forcythe-blueLight2 max-w-[500px] rounded-[3rem] items-center justify-between p-4 overflow-x-auto">
        {/* Tab buttons */}
        {ctaTabsData.map((tab) => (
          <button
            key={tab.id}
            className={`py-4 px-6 text-[1rem] cursor-pointer transition-colors duration-300 
              ${activeTab === tab.id ? "bg-forcythe-blueLight2 rounded-[3rem] text-forcythe-darkBg" : "text-white hover:text-forcythe-blueLight2"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="p-6 mt-4">
        {ctaTabsData[activeTab] && ctaTabsData[activeTab].content }
      </div>
    </div>
  );
};

export default CtaTab;
