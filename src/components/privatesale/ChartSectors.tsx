import React, { useEffect, useState } from "react";
import { ChartSectorArrowIcon } from "../icons/Icons";
import { sectorData } from "./Helper";

interface ChartSectorProps {
  activeSectorIndex: any;
  setActiveSectorIndex: any;
}

const ChartSectors: React.FC<ChartSectorProps> = ({
  activeSectorIndex,
  setActiveSectorIndex,
}) => {
  const [prevSector, setPrevSector] = useState(
    sectorData[activeSectorIndex - 1]
  );
  const [currentSector, setCurrentSector] = useState(
    sectorData[activeSectorIndex]
  );
  const [nextSector, setNextSector] = useState(
    sectorData[activeSectorIndex + 1]
  );

  useEffect(() => {
    setPrevSector(
      sectorData[
        (activeSectorIndex - 1 + sectorData.length) % sectorData.length
      ]
    );
    setCurrentSector(sectorData[activeSectorIndex]);
    setNextSector(
      sectorData[
        (activeSectorIndex + 1 + sectorData.length) % sectorData.length
      ]
    );
  }, [activeSectorIndex]);

  const handleSectorChange = (number: number) => {
    setActiveSectorIndex(
      (prevState: any) =>
        (prevState + number + sectorData.length) % sectorData.length
    );
  };

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center gap-11 font-inter sm:mt-12 md:mt-0">
        {/* previous sector */}
        <div className="flex w-[295px] items-center justify-start overflow-hidden rounded-[6px] border-[2px] border-dotted border-[#554c9e] bg-[#221d2d] max-lg:hidden sm:w-[353px]">
          <div
            className="w-[10px] self-stretch"
            style={{ backgroundColor: `${prevSector.sectorColor}` }}
          ></div>
          <div className="flex items-center justify-start gap-[10px] py-[18px] pl-[10px] pr-5">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: `${prevSector.sectorColor}` }}
            ></div>
            <span className="text-xl font-bold text-white">
              {prevSector.sectorPercentage}%
            </span>
            <span className="line-clamp-1 text-xl font-medium text-white">
              {prevSector.sectorHeading}
            </span>
          </div>
        </div>

        {/* centered sector */}
        <div className="flex w-[290px] justify-start overflow-hidden rounded-[6px] border-[2px] border-dotted border-[#554c9e] sm:w-[353px] md:w-[317px]  lg:mr-[83px] lg:w-[353px]">
          <div
            className="w-[10px] self-stretch"
            style={{ backgroundColor: `${currentSector.sectorColor}` }}
          ></div>

          <div className="w-full">
            {/* heading */}
            <div className="flex items-center justify-start gap-[10px] bg-[#3f3559] p-3 sm:py-[18px] sm:pl-[10px] sm:pr-5">
              <div
                className="h-3 w-3 flex-shrink-0 rounded-full"
                style={{ backgroundColor: `${currentSector.sectorColor}` }}
              ></div>
              <span className="text-xl font-bold text-white">
                {currentSector.sectorPercentage}%
              </span>
              <span className="line-clamp-1 text-xl font-medium text-white">
                {currentSector.sectorHeading}
              </span>
            </div>

            {/* content */}
            <div className="flex flex-col items-start justify-center gap-5 bg-[#372b56] p-3 sm:py-5 sm:pl-[25px] sm:pr-5">
              <div className="flex items-center justify-start gap-4">
                <span className="text-[rgba(255,255,255,0.70)] max-sm:text-sm">
                  Linear Monthly Vesting
                </span>
                <span className="text-base font-medium text-white max-sm:text-sm">
                  {currentSector.linearMonthlyVesting} months
                </span>
              </div>

              <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex items-center justify-start gap-5">
                  <span className="text-[rgba(255,255,255,0.70)] max-sm:text-sm">
                    Cliff
                  </span>
                  <span className="text-base font-medium text-white max-sm:text-sm">
                    {currentSector.cliff} month cliff
                  </span>
                </div>
                {Boolean(currentSector.price) && (
                  <div className="flex items-center justify-start gap-5">
                    <span className="text-[rgba(255,255,255,0.70)] max-sm:text-sm">
                      Price
                    </span>
                    <span className="text-base font-medium text-white max-sm:text-sm">
                      {currentSector.price}$
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* next sector */}
        <div className="flex w-[295px] items-center justify-start overflow-hidden rounded-[6px] border-[2px] border-dotted border-[#554c9e] bg-[#221d2d] max-lg:hidden sm:w-[353px]">
          <div
            className="w-[10px] self-stretch"
            style={{ backgroundColor: `${nextSector.sectorColor}` }}
          ></div>
          <div className="flex items-center justify-start gap-[10px] py-[18px] pl-[10px] pr-5">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: `${nextSector.sectorColor}` }}
            ></div>
            <span className="text-xl font-bold text-white">
              {nextSector.sectorPercentage}%
            </span>
            <span className="line-clamp-1 text-xl font-medium text-white">
              {nextSector.sectorHeading}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[18px] md:mt-5 md:hidden">
        {/* left button */}
        <div
          onClick={() => handleSectorChange(-1)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] transition-all duration-200 ease-in-out hover:border-[#5200FF] hover:bg-[#5200FF]"
        >
          <ChartSectorArrowIcon />
        </div>

        {/* right button */}
        <div
          onClick={() => handleSectorChange(1)}
          className="flex h-8 w-8 rotate-180 transform cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] transition-all duration-200 ease-in-out hover:border-[#5200FF] hover:bg-[#5200FF]"
        >
          <ChartSectorArrowIcon />
        </div>
      </div>
    </>
  );
};

export default ChartSectors;
