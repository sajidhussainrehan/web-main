import Image from "next/image";
import React from "react";
import HeadingAndPara from "./HeadingAndPara";
import { LogoIcon, RightIcon } from "../icons/Icons";

const SmartWhales = () => {
  return (
    <div id="about" className="relative">
      <div className="absolute left-1/2 top-0 z-[-1] mx-auto h-[169px] w-full max-w-[500px] -translate-x-1/2  bg-[rgba(82,0,255,0.60)] blur-[150px]"></div>

      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-8 px-4 max-lg:flex-col sm:gap-[76px] lg:items-start lg:gap-5 xl:px-0">
        <div className="flex w-full max-w-[711px] items-center justify-evenly gap-4 bg-[linear-gradient(180deg,rgba(13,13,13,0.20)0%,rgba(13,13,13,0.06)100%)] py-5 max-sm:flex-col xl:gap-[46px]">
          <div className="flex flex-col justify-center">
            <div className="mx-auto flex items-center gap-2 max-sm:justify-center">
              <LogoIcon />
              <h1 className="font-Outfit text-[26px] font-normal leading-[120%] text-white max-md:text-center ">
                smart
                <span className="text-[rgba(255,255,255,0.70)] ">whales</span>
                <span className="text-xs font-normal leading-[124%] text-[#5200FF]">
                  .ai
                </span>
              </h1>
            </div>
            <h2 className="font-Inter mt-5 h-[66px] text-[48px] font-semibold uppercase leading-[60px] text-[#5200FF] sm:mt-7 ">
              Get early
            </h2>
            <h2 className="bg-gradient-to-b from-white to-white/50 bg-clip-text  text-[64px] font-semibold  uppercase leading-[60px] text-transparent">
              Access
            </h2>
          </div>
          <Image
            className="max-xl:w-[245px] "
            src="/private-sale/mobile.png"
            height={387}
            width={323}
            alt="mobile-img"
          />
        </div>

        <div className="w-full max-w-[448px]">
          <HeadingAndPara
            heading="SmartWhales brings a new standard of on-chain trading "
            para=" Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since."
            paraClass="sub-para max-sm:text-center"
            headingClass="subheading max-sm:text-center"
          />
          <button
            type="submit"
            className="mt-[30px] flex h-12 w-full max-w-[143px] items-center justify-center gap-1 rounded-[30px] border-[2px] border-[#5200FF] bg-[#5200FF] text-base leading-[146%] text-white duration-300 hover:bg-transparent max-sm:mx-auto sm:mt-12 "
          >
            Read more
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartWhales;
