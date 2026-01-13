"use client";

import { useState } from "react";
import ChartSectors from "./ChartSectors";

export const Tokenomics = () => {
  const [activeSectorIndex, setActiveSectorIndex] = useState(1);

  return (
    <div className="bg-[#020202] py-[60px] max-xl:px-3 max-sm:px-0">
      <div className="flex flex-col items-center justify-center gap-7 sm:gap-[73px]">
        {/* header */}
        <div className="flex flex-col items-center justify-center gap-2 font-inter max-sm:px-3 sm:gap-4">
          <span className="text-[28px] font-semibold leading-[125%] text-white sm:text-5xl">
            Tokenomics
          </span>
          <span className="text-center text-sm font-normal leading-[142%] text-white sm:text-[21px]">
            Invest into the new standard of on-chain trading
          </span>
        </div>

        {/* chart sectors */}
        <ChartSectors
          activeSectorIndex={activeSectorIndex}
          setActiveSectorIndex={setActiveSectorIndex}
        />
      </div>
    </div>
  );
};
