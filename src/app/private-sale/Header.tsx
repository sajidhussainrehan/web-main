/* eslint-disable @next/next/no-img-element */
"use client";
import BuyButton from "./BuyButton";
import TimeCount from "./common/TimeCount";
import React from "react";
import Countdown from "react-countdown";

const brands = [
  "/images/optimism-ethereum-op-logo 1.svg",
  "/images/arbitrum-arb-logo 1.svg",
  "/images/bnb-chain-binance-smart-chain-logo 1.svg",
  "/images/oasis-network-rose-logo 1.svg",
  "/images/ETH.svg",
];

function Header() {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="mx-auto max-w-[832px]">
          <div className="mb-12">
            <div className="text-center">
              <h1 className="text-linear  mb-4 bg-gradient-to-t from-white/50 to-white text-[60px] font-semibold leading-[1.2]">
                Copy-trade most successful crypto whales.
              </h1>
              <p className="text-lg leading-[1.66]">
                Invest together with Binance Labs, Pantera Capital, and a16z.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="flex items-center gap-[30px]">
                {brands.map((brand, index) => (
                  <img role="button" src={brand} alt="" key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <BuyButton />
            </div>
          </div>
          <div>
            <div className="relative z-0">
              <img
                className="-translate-y-1/5 absolute top-0 -z-10 blur-[100px] "
                src="/images/Shadow Behind Main Dash.png"
                alt=""
              />
              <div className="flex justify-center">
                <Countdown
                  date={Date.now() + 500000000}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="flex gap-4">
                      <TimeCount label="Days" value={days} />
                      <TimeCount label="HOURS" value={hours} />
                      <TimeCount label="MINUTES" value={minutes} />
                      <TimeCount label="SECONDS" value={seconds} />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
