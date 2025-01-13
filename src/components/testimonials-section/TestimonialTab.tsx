"use client";
import { tabs } from "@/utils/tab";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TestimonialTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Effect to switch tabs every 13 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 13000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-full">
      {/* Tab Headers */}
      <div className="max-w-[850px] h-[70px] mx-auto overflow-x-auto border-2 border-forcythe-blueDark2 rounded-[3rem] bg-transparent">
        <div className="flex items-center h-full justify-between gap-4 whitespace-nowrap">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`min-w-[150px] h-full flex items-center gap-2 px-5  cursor-pointer whitespace-nowrap 
                ${activeTab === index ? "bg-forcythe-blueDark2 text-white" : "bg-transparent text-gray-400"}`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={tab.label}
                alt={`Tab ${index}`}
                width={
                  tab.id === 0
                    ? 20
                    : tab.id === 1 || tab.id === 4
                    ? 120
                    : 80
                }
                height={40}
                className="shrink-0"
              />
              {tab.id === 0 && <span className="text-sm">Starks</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="w-full mt-4 pageMargin">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default TestimonialTab;
