/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

const LineImg = "/line.png";

interface CountdownProps {
  targetDate: Date;
  initialTimeLeft?: TimeLeft; // Add optional initialTimeLeft prop
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  initialTimeLeft,
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as TimeLeft; // Cast timeLeft as TimeLeft
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    initialTimeLeft || calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className=" mt-5 flex items-start space-x-2 text-3xl font-bold lg:space-x-6">
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Days</p>
        <div className="relative min-w-[66px] rounded bg-black bg-opacity-75 p-3 text-white">
          {`${addLeadingZero(timeLeft?.days as number)}`}
          <img
            className="absolute left-0 top-[50%] mx-auto h-[4px] w-[100px] -translate-y-1/2 px-2"
            src={LineImg}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Hours</p>

        <div className="relative min-w-[66px] rounded bg-black bg-opacity-75 p-3 text-white">
          {`${addLeadingZero(timeLeft?.hours as number)}`}
          <img
            className="absolute left-0 top-[50%] mx-auto h-[4px] w-[100px] -translate-y-1/2 px-2"
            src={LineImg}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Minutes</p>

        <div className="relative min-w-[66px] rounded bg-black bg-opacity-75 p-3 text-white">
          {`${addLeadingZero(timeLeft?.minutes as number)}`}
          <img
            className="absolute left-0 top-[50%] mx-auto h-[4px] w-[100px] -translate-y-1/2 px-2"
            src={LineImg}
            alt="line"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="pb-4 text-xs uppercase">Seconds</p>

        <div className="relative min-w-[66px] rounded bg-black bg-opacity-75 p-3 text-white">
          {`${addLeadingZero(timeLeft?.seconds as number)}`}
          <img
            className="absolute left-0 top-[50%] mx-auto h-[4px] w-[100px] -translate-y-1/2 px-2"
            src={LineImg}
            alt="line"
          />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
