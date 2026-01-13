import React from "react";
import Image from "next/image";
import oasis from "public/private-sale/oasis-network-rose-logo.png";
import dex from "public/private-sale/dexguru_logotype.png";
import lookOnChain from "public/look-on-chain.png";
import odos from "public/private-sale/odos-img.png";

import {
  BitqueryIcon,
  BubbleMapsIcon,
  MoralisIcon,
  OasisIcon,
  SpotOnChainIcon,
} from "../icons/Icons";
import { BuildWithParent } from "./BuildWithParent";
const BuildWithAllCards = () => {
  return (
    <>
      <BuildWithParent>
        <div className="h-7 lg:h-10">
          <SpotOnChainIcon />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className="flex h-7 items-center gap-2.5 lg:h-10">
          <Image
            className="h-[26px] w-[26px] object-contain sm:h-full sm:w-auto"
            src={oasis}
            alt="Oasis logo"
            quality={100}
          />
          <span className="hidden text-[23px] font-normal uppercase leading-[30px] sm:block">
            Oasis network
          </span>
          <span className="sm:hidden">
            <OasisIcon />
          </span>
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className="h-10 max-sm:h-7">
          <Image
            className="h-full max-h-10 w-full object-cover max-sm:max-w-[174px]"
            src={dex}
            alt="Dex logo"
            quality={100}
          />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className="max-sm:h-7">
          <Image
            className="h-full w-full max-w-[174px] object-cover"
            src={lookOnChain}
            alt="look logo"
            quality={100}
          />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className=" h-7 lg:h-10">
          <MoralisIcon />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className=" h-7 lg:h-10">
          <BitqueryIcon />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className=" h-10 lg:h-[63px]">
          <Image
            className="h-[35px] w-full max-w-[176px] object-contain sm:h-full sm:w-auto"
            src={odos}
            alt="look logo"
            quality={100}
          />
        </div>
      </BuildWithParent>
      <BuildWithParent>
        <div className=" h-7 lg:h-10">
          <BubbleMapsIcon />
        </div>
      </BuildWithParent>
    </>
  );
};

export default BuildWithAllCards;
