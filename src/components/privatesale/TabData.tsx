"use client";
import React, { useState } from "react";
import Image from "next/image";
import { inputData } from "./Helper";

interface InputData {
  id: string;
  placeholder: string;
  label: string;
  icon: JSX.Element;
}

interface TabDataProps {
  usdt: string;
  setUsdt: (value: string) => void;
  whale: string;
  setWhale: (value: string) => void;
}

const TabData: React.FC<TabDataProps> = ({
  usdt,
  setUsdt,
  whale,
  setWhale,
}) => {
  const handleUsdtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const usdtValue = event.target.value;
    setUsdt(usdtValue);
    setWhale((Number(usdtValue) / 0.035).toString()); // Update Whale based on USDT
  };

  const handleWhaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const whaleValue = event.target.value;
    setWhale(whaleValue);
    setUsdt((Number(whaleValue) * 0.035).toFixed(4).toString()); // Update USDT based on Whale
  };

  return (
    <div className="flex flex-col gap-[30px] sm:gap-10">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-center gap-5">
          {inputData.map((item: InputData, index: number) => (
            <div className="w-full max-w-[411px]" key={index}>
              <label
                htmlFor={item.id}
                className="font-inter text-xs font-medium leading-normal text-white"
              >
                {item.label}
              </label>
              <div className="flex w-full items-center justify-between gap-2 rounded-[5px] bg-[rgba(255,255,255,0.20)] p-2.5">
                <input
                  type="number"
                  name={item.id}
                  id={item.id}
                  placeholder={item.placeholder}
                  value={item.id === "usdtpay" ? usdt : whale}
                  onChange={
                    item.id === "usdtpay" ? handleUsdtChange : handleWhaleChange
                  }
                  className="w-full bg-transparent font-inter text-sm font-medium leading-normal text-white outline-none placeholder:font-inter placeholder:text-sm placeholder:font-medium placeholder:leading-normal placeholder:text-white"
                />
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabData;
