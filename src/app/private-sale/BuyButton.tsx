/* eslint-disable @next/next/no-img-element */
import React from "react";

function BuyButton() {
  return (
    <div
      role="button"
      className="flex items-center justify-center gap-2.5 rounded-full bg-white px-10 py-[18px] text-base font-bold uppercase text-[#5200FF] shadow-sm"
    >
      <img src="/images/icon-park-solid_buy.svg" alt="" />
      <span>Buy Token</span>
    </div>
  );
}

export default BuyButton;
