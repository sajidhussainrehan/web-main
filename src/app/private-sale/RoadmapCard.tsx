/* eslint-disable @next/next/no-img-element */
import React from "react";

interface RoadmapCardProps {}

function RoadmapCard(props: RoadmapCardProps) {
  return (
    <div className="flex min-h-[365px] translate-x-1 items-center justify-center border border-transparent px-2.5">
      <div
        className={`border-linear roadmap-card my-1 flex w-full flex-col items-center justify-center rounded-[20px] p-1 text-center`}
      >
        <div className="mb-4">
          <img src="/images/Frame 1171275087.svg" alt="" />
        </div>
        <b className="mb-2 block text-xl font-bold">Q2 2024</b>
        <p className="text-lg text-white/70">
          MVP Launch: Tier Levels & reward system for traders
        </p>
      </div>
    </div>
  );
}

export default RoadmapCard;
