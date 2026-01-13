"use client";
import React, { useEffect, useState } from "react";

interface CircularProgressBarProps {
  percentage: number;
}

const Cirle: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const [progressOffset, setProgressOffset] = useState(0);

  useEffect(() => {
    const offset = ((100 - percentage) / 100) * 126 * Math.PI;
    setProgressOffset(offset);
  }, [percentage]);

  return (
    <svg className="h-[400px] w-[500px] bg-red-800">
      <circle
        className="text-gray-300 dark:text-gray-700"
        cx="8"
        cy="8"
        r="7"
        strokeWidth="2"
        fill="none"
      />
      <circle
        className="text-blue-500 dark:text-blue-400"
        cx="8"
        cy="8"
        r="7"
        strokeWidth="2"
        fill="none"
        strokeDasharray="126"
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
      />
      <text
        className="text-center text-sm text-gray-600 dark:text-gray-400"
        x="8"
        y="9"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default Cirle;
