import React from "react";
import {
  CrossIcon,
  DiscordIcon,
  LogoIcon,
  ReditIcon,
  TeligramIcon,
  WalletIcon,
  X2Icon,
  XIcon,
} from "../icons/Icons";
import Link from "next/link";
import { LinkData } from "./Helper";
import { ConnectWalletButton } from "@/components/connect-wallet";
interface SidebarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<SidebarProps> = ({ setSidebar }) => {
  return (
    <div className="overflow-auto bg-[#020202] sm:hidden ">
      <div className="px-5 pb-[30px]">
        <div className="flex flex-col gap-[30px] border-b-[2px] border-b-[rgba(255,255,255,0.20)] py-[10px] pb-5">
          <div className="flex justify-between">
            <LogoIcon />
            <div
              className="cursor-pointer"
              onClick={() => setSidebar((prev) => !prev)}
            >
              <CrossIcon />
            </div>
          </div>
          <ConnectWalletButton className="font-Inter group flex w-full justify-center gap-[10px] rounded-[30px] px-5 py-[10px] text-sm font-bold capitalize leading-normal duration-300sm:py-3" />
        </div>
        <div className="flex w-full justify-between py-[30px]">
          <div className="opacity-80 hover:scale-110">
            <XIcon />
          </div>
          <div className="opacity-80 hover:scale-110">
            <X2Icon />
          </div>
          <div className="opacity-80 hover:scale-110">
            <ReditIcon />
          </div>
          <div className="opacity-80 hover:scale-110">
            <DiscordIcon />
          </div>
          <div className="opacity-80 hover:scale-110">
            <TeligramIcon />
          </div>
        </div>
        <p className="font-Inter text-xs font-medium uppercase leading-normal text-[rgba(255,255,255,0.40)] ">
          Main
        </p>
        <div className="mt-[10px] flex flex-col gap-[30px]">
          {LinkData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-Inter text-center text-xl font-semibold capitalize leading-[110%] text-white transition duration-300 ease-in-out hover:text-white/50"
            >
              {item.linkname}
            </Link>
          ))}
          <button
            type="submit"
            className="font-Inter mx-auto h-8 w-full max-w-[128px] rounded-[30px] border-[2px] border-[#5200FF] bg-[#5200FF] text-xs font-medium leading-[166%] text-white duration-300 hover:bg-transparent"
          >
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
