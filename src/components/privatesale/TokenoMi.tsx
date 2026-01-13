"use client";
import React, { useRef, useState } from "react";
import ChartSectors from "./ChartSectors";
import { ChartIcon2 } from "../icons/Icons";
import HeadingAndPara from "./HeadingAndPara";

interface HelloData {
  id: number;
}
const TokenoMi = () => {
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(1);
  const helloRef = useRef<HTMLDivElement>(null);

  const hello = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  const handleItemHover = (itemId: number | null) => {
    setHoveredItemId(itemId);
    if (itemId !== null && helloRef.current) {
      const itemIndex = hello.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        helloRef.current.children[itemIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="mt-[73px] md:mt-0" id="tokenomics">
      <HeadingAndPara
        heading="Tokenomics"
        para="Invest into the new standart of on-chain trading"
        paraClass="para"
        headingClass="heading"
      />
      <div className="mx-auto mt-[30px] flex w-full max-w-[1240px] flex-col items-center justify-around gap-5 rounded-[20px]  bg-[url('/private-sale/diamond-bg.png')] bg-cover bg-center bg-no-repeat px-3 py-7 sm:py-[75px] md:mt-[73px] md:gap-20  lg:h-[595px] lg:flex-row lg:gap-10 lg:px-0 xl:gap-[78px]">
        <div className="flex items-center justify-center max-sm:h-[280px] md:items-start lg:w-[551px]">
          <div className="relative  w-fit">
            <ChartIcon2
              handle={handleItemHover}
              hoveredItemId={hoveredItemId}
            />
            <p
              className={`absolute -top-9 left-5 flex w-20 flex-col text-[10px] sm:left-10 sm:w-[140px] sm:text-sm   ${
                10 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">15%</span>
              <span className="text-white/60">Rewards for Vault Creators</span>
            </p>
            <p
              className={`absolute -top-7 left-1/2 flex w-20 flex-col text-[10px] sm:-top-9 sm:w-[140px] sm:text-sm   ${
                11 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">1%</span>
              <span className="text-white/60">Early bird</span>
            </p>
            <p
              className={`absolute -top-3 left-3/4 flex w-20 flex-col text-[10px] sm:w-[140px] sm:text-sm   ${
                0 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">12%</span>
              <span className="text-white/60">Seed</span>
            </p>
            <p
              className={`absolute -right-14 top-16 flex w-14 flex-col text-[10px] sm:-right-32 sm:top-28  sm:w-[140px] sm:text-sm   ${
                1 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">12%</span>
              <span className="text-white/60">Private Round</span>
            </p>
            <p
              className={`absolute -right-16 bottom-16 flex w-[70px] flex-col text-[10px] sm:-right-32 sm:bottom-32 sm:w-20 sm:text-sm md:w-[140px]   ${
                2 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">4%</span>
              <span className="text-white/60">Public Round</span>
            </p>
            <p
              className={`absolute -right-14 bottom-6 flex w-20 flex-col text-[10px] sm:-right-28 sm:bottom-14 sm:w-[140px] sm:text-sm   ${
                3 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">8%</span>
              <span className="text-white/60">Team</span>
            </p>
            <p
              className={`absolute -bottom-3 -right-5 flex w-20 flex-col text-[10px] sm:-right-9 sm:w-[140px] sm:text-sm   ${
                4 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">5%</span>
              <span className="text-white/60">Advisors</span>
            </p>
            <p
              className={`absolute -bottom-7 right-10 flex w-20 flex-col text-[10px] sm:-bottom-10 sm:right-14 sm:w-[140px] sm:text-sm   ${
                5 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">8%</span>
              <span className="text-white/60">Marketing</span>
            </p>
            <p
              className={`absolute -bottom-5 left-1/4 flex w-20 flex-col text-[10px] sm:text-sm md:-bottom-6 md:w-[140px]   ${
                6 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">6%</span>
              <span className="text-white/60">Liquidity</span>
            </p>
            <p
              className={`absolute -left-8 bottom-7 flex w-20 flex-col text-[10px] sm:bottom-10 sm:text-sm md:-left-6 md:w-[140px]   ${
                7 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">10%</span>
              <span className="text-white/60">Operational</span>
            </p>
            <p
              className={`absolute -left-10 bottom-1/3 flex w-20 flex-col text-[10px] sm:-left-14 sm:text-sm md:w-[140px]   ${
                8 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">5%</span>
              <span className="text-white/60">Airdrops</span>
            </p>
            <p
              className={`absolute -left-10 top-1/4 flex w-20 flex-col text-[10px] sm:-left-12 sm:text-sm md:w-[140px]   ${
                9 === hoveredItemId ? "font-bold" : "font-normal "
              }`}
            >
              <span className="text-white">10%</span>
              <span className="text-white/60">Treasure</span>
            </p>
          </div>
        </div>
        <ChartSectors
          activeSectorIndex={hoveredItemId}
          setActiveSectorIndex={setHoveredItemId}
        />
      </div>
    </div>
  );
};

export default TokenoMi;
