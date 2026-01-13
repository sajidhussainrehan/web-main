"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Sidebar from "./Sidebar";
import {
  DiscordIcon,
  LogoIcon,
  MenuIcon,
  TeligramIcon,
  WalletIcon,
  X2Icon,
  XIcon,
} from "../icons/Icons";
import { ConnectWalletButton } from "@/components/connect-wallet";

const Navbar = ({}) => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebar]);
  return (
    <>
      <div className="relative h-full  bg-[#020202]">
        <div className="mx-auto w-full max-w-[1240px] px-4 py-[20px] sm:border-b-[2px] sm:border-b-[rgba(255,255,255,0.10)] xl:px-0">
          <div className="flex items-center justify-between">
            <Link href="/private-sale" className="flex items-center gap-2">
              <LogoIcon />
              <h1 className="font-Outfit text-[26px] font-normal leading-[120%] text-white ">
                smart
                <span className="text-[rgba(255,255,255,0.70)] ">whales</span>
                <span className="text-xs font-normal leading-[124%] text-[#5200FF]">
                  .ai
                </span>
              </h1>
            </Link>
            <div className="flex items-center gap-5">
              <div className="flex gap-4 max-sm:hidden">
                <Link
                  href="https://twitter.com/SmartwhalesAI"
                  target="_blank"
                  className="transition duration-300 ease-in-out hover:scale-110"
                >
                  <XIcon />
                </Link>
                <Link
                  href="https://medium.com/@SmartWhales"
                  target="_blank"
                  className="transition duration-300 ease-in-out hover:scale-110"
                >
                  <X2Icon />
                </Link>
                {/* <Link
                  href=""
                  className="transition duration-300 ease-in-out hover:scale-110"
                >
                  <ReditIcon />
                </Link> */}
                <Link
                  href="https://discord.com/invite/FmN33cR925"
                  target="_blank"
                  className="transition duration-300 ease-in-out hover:scale-110"
                >
                  <DiscordIcon />
                </Link>
                <Link
                  href="https://t.me/+zg-qnzMC-xE0OTZk"
                  target="_blank"
                  className="transition duration-300 ease-in-out hover:scale-110"
                >
                  <TeligramIcon />
                </Link>
              </div>
              <div className="sm:hidden" onClick={() => setSidebar(!sidebar)}>
                <MenuIcon />
              </div>
              <Link
                href="https://smartwhales.craft.me/smartwhales"
                target="_blank"
              >
                <button
                  type="submit"
                  className="font-Inter group rounded-[30px] border-[2px] border-[#5200FF] bg-[#5200FF] px-5 py-3 text-sm font-bold capitalize leading-normal text-white duration-300 hover:bg-transparent max-lg:hidden"
                >
                  Documentation
                </button>
              </Link>
              <ConnectWalletButton className="font-Inter group flex items-center justify-center gap-[10px] rounded-[30px] px-5 py-3 text-sm font-bold capitalize leading-normal duration-300 max-lg:hidden" />
            </div>
          </div>
          <div className="mt-[30px] flex justify-between gap-4 sm:mt-5 sm:justify-center sm:gap-5 lg:hidden">
            <button
              type="submit"
              className="font-Inter group w-full max-w-[128px] rounded-[30px] border-[2px] border-[#5200FF] bg-[#5200FF] py-[6px] text-xs font-bold capitalize leading-normal text-white duration-300 hover:bg-transparent sm:max-w-[158px] sm:py-3 sm:text-sm "
            >
              Documentation
            </button>
            <ConnectWalletButton className="font-Inter group flex w-full max-w-[161px] items-center justify-center gap-[10px] rounded-[30px] py-[6px] text-sm font-bold capitalize leading-normal duration-300 sm:max-w-[180px] sm:py-3 sm:text-sm" />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 z-10 w-full ${
          sidebar ? "left-0 sm:left-[-110%]" : "left-[-110%]"
        }`}
      >
        <Sidebar setSidebar={setSidebar} />
      </div>
    </>
  );
};

export default Navbar;
