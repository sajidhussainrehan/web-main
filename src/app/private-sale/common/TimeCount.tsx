/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TimeCountProps {
  label: string;
  value: number;
}

function TimeCount({ label, value }: TimeCountProps) {
  return (
    <div>
      <div className="flex flex-col items-center gap-[18px]">
        <b className="text-sm font-bold uppercase text-[#E8E8E8]">{label}</b>
        <div className="relative z-0 flex h-[100px] w-28 items-center justify-center rounded-md bg-[#0C0C0C]">
          <img
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/images/time-overly.svg"
            alt=""
          />
          <span className="block text-center text-[60px] font-bold">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimeCount;
