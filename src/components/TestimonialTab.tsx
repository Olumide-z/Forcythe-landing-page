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
  }, [activeTab]);

  return (
    <div>
      {/* Tab Headers */}
      <div className="overflow-x-auto">
        {/* Flex container that holds all the tabs */}
        <div className="flex gap-4 h-[70px] bg-transparent mb-4 rounded-[3rem] whitespace-nowrap border border-[#1e3158] items-center justify-start min-w-[500px]">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`flex items-center justify-center text-white px-5 py-2.5 cursor-pointer h-full ${activeTab === index ? 'bg-forcythe-blueDark2' : 'bg-transparent'} border-none`}
              onClick={() => setActiveTab(index)}
            >
              {tab.id === 0 ? (
                <>
                  <Image src={tab.label} alt="company logo" width={20} height={20} className="object-contain" />
                  <span className="ml-2 text-[1rem]">Starks</span>
                </>
              ) : tab.id === 1 || tab.id === 4 ? (
                <>
                  <Image src={tab.label} alt="company logo" width={120} height={40} className="object-contain" />
                </>
              ) : (
                <Image src={tab.label} alt="company logo" width={80} height={40} className="object-contain" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="w-full relative">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default TestimonialTab;
