"use client";
import React, { useState } from "react";
import BuyBefore from "./BuyBefore";

const BuyToken = () => {
  const [hideData, setHideData] = useState(false);
  return (
    <div
      id="buy-token"
      className={`w-full bg-[#020202] bg-[url('/private-sale/navtab-bg.png')] bg-cover bg-center bg-no-repeat pb-[30px] pt-[50px] sm:pb-[96px] sm:pt-[120px] ${
        hideData ? "h-[594px]" : "h-full"
      }`}
    >
      <div
        className={`mx-auto flex flex-col gap-2 px-5 sm:gap-4 xl:px-0 ${
          hideData ? "hidden" : "flex"
        } `}
      >
        <h1 className="text-center font-inter text-[28px] font-medium leading-[128%] text-white sm:text-[48px] sm:font-semibold sm:leading-[125%]">
          Buy $SWHALE token
        </h1>
        <h2 className="text-sm: text-center font-inter font-normal leading-[142%] text-white sm:text-[21px]">
          Invest into the new standart of on-chain trading
        </h2>
      </div>
      <div className="mt-20 w-full sm:px-5 xl:px-0">
        <BuyBefore hideData={hideData} setHideData={setHideData} />
      </div>
    </div>
  );
};

export default BuyToken;
