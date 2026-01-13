import Image from "next/image";
import React from "react";
import {
  AccessToWhaleIcon,
  FeesReductionIcon,
  HighRefferalIcon,
  UnlockTheHighestIcon,
  VipInvestmentGroupIcon,
} from "../icons/Icons";
import { tokenUtilitiesData } from "./Helper";

const TokenUtilities = () => {
  return (
    <>
      <div
        id="ultilities"
        className="w-full bg-[#020202] bg-[url('/private-sale/navtab-bg.png')] bg-cover bg-center bg-no-repeat pb-[30px] pt-[50px] sm:pb-[96px] sm:pt-[60px]"
      >
        <div className="mx-auto flex flex-col gap-2 px-5 sm:gap-4 xl:px-0  ">
          <h1 className="text-center font-inter text-[28px] font-medium leading-[128%] text-white sm:text-[48px] sm:font-semibold sm:leading-[125%]">
            Token Utilities
          </h1>
          <h2 className="text-center font-inter text-sm font-normal leading-[142%] text-white sm:text-[21px]">
            Invest into the new standart of on-chain trading
          </h2>
        </div>
        <div className="px-5 xl:px-0">
          <div className="relative mx-auto mt-[79px] w-full max-w-[674px] bg-contain bg-center bg-no-repeat sm:h-[776px] sm:bg-[url('/private-sale/token-utilities.png')]">
            <Image
              src="/private-sale/mobile-img.png"
              width={374}
              height={670}
              alt="img"
              className="mx-auto"
            />
            <div className="absolute left-[-155px] top-[72px] flex w-fit items-center gap-[15px] max-lg:hidden xxl:left-[-212px]">
              <div className="flex w-[180px] flex-col gap-2 xxl:w-[260px]">
                <h2 className="text-right font-inter text-lg font-bold leading-normal text-white xl:text-[20px] ">
                  Higher referral tier
                </h2>
                <p className="text-right font-inter text-base font-normal leading-normal text-[rgba(255,255,255,0.70)] xl:text-[18px]">
                  Get higher fee share % and access more platform features
                </p>
              </div>
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] sm:bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                <HighRefferalIcon />
              </div>
            </div>
            <div className="absolute left-[-200px] top-[300px] flex w-fit items-center gap-[15px] max-lg:hidden xxl:left-[-300px]">
              <div className="flex w-[180px] flex-col gap-2 xxl:w-[261px]">
                <h2 className="text-right font-inter text-lg font-bold leading-normal text-white xl:text-[20px]">
                  Access to Whale Analytics
                </h2>
                <p className="text-right font-inter text-base font-normal leading-normal text-[rgba(255,255,255,0.70)] xl:text-[18px]">
                  Get access to smart whales moves and receive alerts
                </p>
              </div>
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] sm:bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                <AccessToWhaleIcon />
              </div>
            </div>
            <div className="absolute left-[-180px] top-[500px] flex w-fit items-center gap-[15px] max-lg:hidden xxl:left-[-250px]">
              <div className="flex w-[190px] flex-col gap-2 xxl:w-[261px]">
                <h2 className="text-right font-inter text-lg font-bold leading-normal text-white xl:text-[20px]">
                  VIP Investment Group
                </h2>
                <p className="text-right font-inter text-base font-normal leading-normal text-[rgba(255,255,255,0.70)] xl:text-[18px]">
                  Get access to early investment pools
                </p>
              </div>
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] sm:bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                <VipInvestmentGroupIcon />
              </div>
            </div>
            <div className="absolute right-[-170px] top-[155px] flex w-fit items-center gap-[15px] max-lg:hidden xxl:right-[-300px]">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] sm:bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                <UnlockTheHighestIcon />
              </div>
              <div className="flex w-[170px] flex-col gap-2 xxl:w-[307px]">
                <h2 className="text-left font-inter text-lg font-bold leading-normal text-white xl:text-[20px]">
                  Unlock the highest ROI% Vaults
                </h2>
                <p className="text-left font-inter text-base font-normal leading-normal text-[rgba(255,255,255,0.70)] xl:text-[18px]">
                  Unlock the highest ROI% Vaults
                </p>
              </div>
            </div>
            <div className="absolute right-[-170px] top-[370px] flex w-fit items-center gap-[15px] max-lg:hidden xxl:right-[-263px]">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] sm:bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                <FeesReductionIcon />
              </div>
              <div className="flex w-[170px] flex-col gap-2 xxl:w-[261px]">
                <h2 className="text-left font-inter text-lg font-bold leading-normal text-white xl:text-[20px]">
                  Fees Reduction
                </h2>
                <p className="text-left font-inter text-base font-normal leading-normal text-[rgba(255,255,255,0.70)] xl:text-[18px]">
                  Reduce service fees by staking the token
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-5 lg:hidden xl:px-0">
          {tokenUtilitiesData.map((item, index) => (
            <div key={index} className="flex w-[345px] items-center gap-[15px]">
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[60px] bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)]">
                {item.icon}
              </div>
              <div className="flex w-full max-w-[260px] flex-col gap-2">
                <h2 className="text-left font-inter text-[18px] font-bold leading-normal text-white sm:text-[20px] ">
                  {item.heading}
                </h2>
                <p className="text-left font-inter text-[18px] font-normal leading-normal text-[rgba(255,255,255,0.70)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TokenUtilities;
