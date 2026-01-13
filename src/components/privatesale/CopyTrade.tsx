import React from "react";
// import Timer from "./Timer";
import Image from "next/image";
import { cryptoimage } from "./Helper";
import HeadingAndPara from "./HeadingAndPara";
import CountDown from "./CountDown";

const CopyTrade = () => {
  return (
    <>
      <div
        id="home"
        className="relative mt-[60px] h-full w-full bg-[url('/private-sale/hero-bg-img.png')] bg-cover bg-center  bg-no-repeat pb-[70px] md:mt-[120px]"
      >
        <div className="px-4 ">
          <HeadingAndPara
            heading="Copy-trade most successful crypto whales."
            para="Invest together with Binance Labs, Pantera Capital,  and a16z."
            paraClass="sub-para text-center"
            headingClass="sup-heading max-w-[828px] w-full mx-auto px-4 lg:px-0"
          />

          <div className="mx-auto mt-12 flex justify-center gap-[30px] max-sm:gap-6">
            {cryptoimage.map((item, index) => (
              <Image
                key={index}
                className="cursor-pointer duration-200 hover:scale-110 max-sm:h-[30px] max-sm:w-[30px]"
                src={item.img}
                height={40}
                width={40}
                alt="image"
              />
            ))}
          </div>
          <div className="py-10 sm:py-12">
            <button
              type="submit"
              className="font-Inter mx-auto flex h-[60px] w-full max-w-[207px] items-center justify-center gap-[10px] rounded-[30px] border-[2px] border-white bg-white text-base font-bold uppercase text-[#5200FF] shadow-[0px_4px_50px_0px_#BD9EFF] duration-300 hover:bg-transparent hover:text-white"
            >
              BUY TOKEN
            </button>
          </div>
        </div>
        <CountDown />
        <div className="absolute bottom-0 z-[-1] mx-auto h-[169px] w-full max-w-[1070px] bg-[rgba(82,0,255,0.60)] blur-[150px]"></div>
      </div>
    </>
  );
};

export default CopyTrade;
