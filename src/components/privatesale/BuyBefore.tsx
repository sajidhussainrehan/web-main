import React, { FC, useState } from "react";
import TabData from "./TabData";
import Navtabs from "./Navtabs";
import BuyBtn from "./BuyBtn";
import { navtabsData } from "./Helper";

interface buyTokenProps {
  hideData: any;
  setHideData: any;
}

const BuyBefore: React.FC<buyTokenProps> = ({ hideData, setHideData }) => {
  const [usdt, setUsdt] = useState<string>("");
  const [whale, setWhale] = useState<string>("");

  return (
    <div
      className={`mx-auto w-full max-w-[963px] flex-col gap-[30px] rounded-[20px] bg-[#1e172c] px-5 py-[30px] sm:gap-10 sm:px-[60px] sm:py-[70px] ${
        hideData ? "hidden" : "flex"
      }`}
    >
      <h2 className="text-center font-inter text-lg font-normal leading-[166%] text-white sm:text-[28px] sm:leading-[107%]">
        Buy in before price increases!
      </h2>
      <div className="grid w-full max-w-[843px] grid-cols-5 items-center justify-center gap-[5px]">
        {navtabsData.map((item, index) => (
          <Navtabs item={item} value={index} key={index} />
        ))}
      </div>
      <>
        <TabData
          usdt={usdt}
          setUsdt={setUsdt}
          whale={whale}
          setWhale={setWhale}
        />
      </>
      <>
        <BuyBtn
          hideData={hideData}
          setHideData={setHideData}
          usdtAmount={usdt}
        />
      </>
    </div>
  );
};

export default BuyBefore;
