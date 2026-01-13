import React from "react";

export const BuildWithParent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex h-[93px] items-center justify-center rounded-[10px] bg-gradient-to-b from-white/5 to-white/0 py-[25px] sm:h-[165px] lg:py-[45px]">
      <div className="absolute inset-0 rounded-[10px] border border-[#5200FF66]" />
      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black" />
      <div className="relative">{children}</div>
    </div>
  );
};
