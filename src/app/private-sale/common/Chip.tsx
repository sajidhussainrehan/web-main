/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ChipProps {
  children?: React.ReactNode;
  icon?: string;
  className?: string;
}

function Chip({ children, icon, className }: ChipProps) {
  return (
    <div className="flex justify-center" aria-label="Chip">
      <div
        className={`flex  items-center justify-center gap-0.5 rounded-full border px-1.5  pr-2 ${className}`}
      >
        {icon && <img src={icon} alt="" />}
        <span className="text-[13px] font-semibold">{children}</span>
      </div>
    </div>
  );
}

export default Chip;
