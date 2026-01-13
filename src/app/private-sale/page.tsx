import InfiniteScroll from "@/components/common/InfiniteScroll";
import { LogoIcon2 } from "@/components/icons/Icons";
import BuildWith from "@/components/privatesale/BuildWith";
import BuildWithAllCards from "@/components/privatesale/BuildWithAllCards";
import BuyToken from "@/components/privatesale/BuyToken";
import CopyTrade from "@/components/privatesale/CopyTrade";
import Navbar from "@/components/privatesale/Navbar";
import NavbarLinks from "@/components/privatesale/NavbarLinks";
import PageSEO from "@/components/privatesale/PageSEO";
import Roadmapswiper from "@/components/privatesale/Roadmapswiper";
import ScrollToTopButton from "@/components/privatesale/ScrollToTopButton";
import SmartWhales from "@/components/privatesale/SmartWhales";
import TokenUtilities from "@/components/privatesale/TokenUtilities";
import TokenoMi from "@/components/privatesale/TokenoMi";
import { socialLinks } from "@/lib/constants";
import Link from "next/link";

export default function PrivateSale() {
  return (
    <>
      <PageSEO title="Private Sale" />
      <ScrollToTopButton />
      <Navbar />
      <div className="sticky top-0 z-50 mx-auto w-full rounded-lg bg-[#020202] bg-opacity-60 shadow-2xl backdrop-blur-lg">
        <NavbarLinks />
      </div>
      <CopyTrade />
      <main className="mb-[70px] flex flex-col items-center justify-center bg-transparent pt-5  ">
        <div className="relative w-full">
          <InfiniteScroll />
          <div className="absolute left-0 top-0 z-10 h-full w-10 bg-[linear-gradient(to_right,rgb(0_0_0_/_0.6)_0%,transparent_100%)]"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-10 bg-[linear-gradient(to_left,rgb(0_0_0_/_0.6)_0%,transparent_100%)]"></div>
        </div>
      </main>
      <SmartWhales />
      <BuyToken />
      <Roadmapswiper />
      <TokenoMi />
      <TokenUtilities />
      <div className="mx-auto mt-[60px] flex w-full max-w-[1266px] flex-col gap-y-[30px] px-4 sm:px-10 md:py-[50px] lg:pb-[120px] lg:pt-[60px] xl:px-0">
        <BuildWith />
        <div className="grid grid-cols-2 gap-5 gap-y-[48px] sm:gap-[48px] lg:grid-cols-3 lg:gap-y-[30px] xl:grid-cols-4">
          <BuildWithAllCards />
        </div>
      </div>
      <footer className="mt-[60px] px-5 lg:mt-20">
        <div className="mt-[18px] flex flex-col items-center justify-center gap-10 border-t border-white/10 py-[18px] sm:flex-row sm:justify-between lg:mt-[78px] lg:py-[24.5px]">
          <span>
            <LogoIcon2 />
          </span>
          <div className="inline-flex w-full justify-between gap-x-4 text-[#8A8F98] sm:w-fit">
            {socialLinks.map(({ icon: Icon, link }, key) => (
              <Link key={key} href={link} target="_blank">
                <Icon />
              </Link>
            ))}
          </div>
          <span className="lg  text-xs leading-[22px] text-white/40 ">
            @ {new Date().getFullYear()} smartwhales.ai All right reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
