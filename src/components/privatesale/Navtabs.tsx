"use client";
import React, { useState } from "react";
import { tabColors } from "./Functions";

interface buyTokenProps {
  item: any;
  value: number;
}

const Navtabs: React.FC<buyTokenProps> = ({ item, value }) => {
  const [tab, setTab] = useState("tab1");
  const { textColor, bgColor, borderColor } = tabColors({ value });
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center gap-[5px]">
        <div className="h-10">
          <div
            className="flex items-center justify-center gap-0.5 rounded-[30px] border px-1 py-1 text-center max-lg:h-[25px] md:px-[5px] md:py-[3px] lg:px-[7px]"
            style={{ borderColor: borderColor, backgroundColor: bgColor }}
          >
            <div>{item.icon}</div>
            <p
              className="font-inter text-[10px] font-semibold leading-[90%] lg:text-sm lg:leading-normal"
              style={{ color: textColor }}
            >
              {item.btn}
            </p>
          </div>
        </div>
        <button
          onClick={() => setTab(item.tabname)}
          type="submit"
          className={`md:leding-[137%] h-[42px] w-full border font-inter text-[10px] font-normal leading-[100%] text-white max-sm:h-[42px] sm:h-[64px] sm:text-sm sm:leading-[157%] md:text-base lg:h-[42px] ${
            tab === item.tabname
              ? "border-[#D97D24] bg-[#D97D24]"
              : "border-[rgba(255,255,255,0.20)] bg-transparent"
          }`}
        >
          {item.tab}
        </button>
        <div className="h-[42px] px-5 py-2.5">
          <p className="smtext-base text-center font-inter text-sm font-medium leading-[157%] text-[#D97D24] sm:text-xl sm:font-bold sm:leading-[137%] md:leading-[110%]">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navtabs;
