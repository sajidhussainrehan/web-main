"use client";
import React, { useEffect } from "react";

const CountDown: React.FC = () => {
  useEffect(() => {
    const countdown = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const days = document
      .querySelector<HTMLElement>(".days")!
      .querySelector<HTMLElement>(".flip-card")!;
    const hours = document
      .querySelector<HTMLElement>(".hours")!
      .querySelector<HTMLElement>(".flip-card")!;
    const minutes = document
      .querySelector<HTMLElement>(".minutes")!
      .querySelector<HTMLElement>(".flip-card")!;
    const seconds = document
      .querySelector<HTMLElement>(".seconds")!
      .querySelector<HTMLElement>(".flip-card")!;

    function getTimeRemaining(countdown: Date) {
      const now = new Date();
      const diff = countdown.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      return {
        diff,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    function initializeClock(countdown: Date) {
      function updateClock() {
        const t = getTimeRemaining(countdown);
        addFlip(days, t.days);
        addFlip(hours, t.hours);
        addFlip(minutes, t.minutes);
        addFlip(seconds, t.seconds);
        if (t.diff <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    const addFlip = (card: HTMLElement, time: number) => {
      const currTime = card.querySelector<HTMLElement>(".top-half")!.innerText;
      if (time === parseInt(currTime)) return;
      let t = time <= 9 ? `0${time}` : time.toString();
      const topHalf = card.querySelector<HTMLElement>(".top-half")!;
      const bottomHalf = card.querySelector<HTMLElement>(".bottom-half")!;
      const topFlip = document.createElement("div");
      const bottomFlip = document.createElement("div");
      topFlip.classList.add("top-flip");
      topFlip.innerText = currTime;
      bottomFlip.classList.add("bottom-flip");
      topFlip.addEventListener("animationstart", () => {
        topHalf.innerText = t;
      });
      topFlip.addEventListener("animationend", () => {
        topFlip.remove();
        bottomFlip.innerText = t;
      });
      bottomFlip.addEventListener("animationend", () => {
        bottomHalf.innerText = t;
        bottomFlip.remove();
      });

      card.appendChild(topFlip);
      card.appendChild(bottomFlip);
    };
    initializeClock(countdown);
  }, []);

  return (
    <main className="countdown-timer font-bold">
      <div className="cards flex gap-[25px]">
        <div className="card days relative">
          <div className="flip-card">
            <div className="mb-[18px]">
              <p className="font-inter text-sm font-bold leading-normal text-white">
                Days
              </p>
            </div>
            <div className="top-half"> 00</div>
            <div className="bottom-half"> 00</div>
          </div>
          <div className="absolute left-[50%] top-[67%] flex translate-x-[-50%] items-start justify-center min-[700px]:top-[63%]">
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
            <div className="mt-[1.5px] h-[0.2px] w-[53px] bg-[#60676e] min-[700px]:w-[100px]"></div>
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
          </div>
        </div>
        <div className="card hours relative">
          <div className="flip-card">
            <div className="mb-[18px]">
              <p className="font-inter text-sm font-bold leading-normal text-white">
                Hours
              </p>
            </div>
            <div className="top-half">00</div>
            <div className="bottom-half">00</div>
          </div>
          <div className="absolute left-[50%] top-[67%] flex translate-x-[-50%] items-start justify-center min-[700px]:top-[63%]">
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
            <div className="mt-[1.5px] h-[0.2px] w-[53px] bg-[#60676e] min-[700px]:w-[100px]"></div>
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
          </div>
        </div>
        <div className="card minutes relative">
          <div className="flip-card">
            <div className="mb-[18px]">
              <p className="font-inter text-sm font-bold leading-normal text-white">
                Minutes
              </p>
            </div>
            <div className="top-half">00</div>
            <div className="bottom-half">00</div>
          </div>
          <div className="absolute left-[50%] top-[67%] flex translate-x-[-50%] items-start justify-center min-[700px]:top-[63%]">
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
            <div className="mt-[1.5px] h-[0.2px] w-[53px] bg-[#60676e] min-[700px]:w-[100px]"></div>
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
          </div>
        </div>
        <div className="card seconds relative">
          <div className="flip-card">
            <div className="mb-[18px]">
              <p className="font-inter text-sm font-bold leading-normal text-white">
                Seconds
              </p>
            </div>
            <div className="top-half">00</div>
            <div className="bottom-half ">00</div>
          </div>
          <div className="absolute left-[50%] top-[67%] flex translate-x-[-50%] items-start justify-center min-[700px]:top-[63%]">
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
            <div className="mt-[1.5px] h-[0.2px] w-[53px] bg-[#60676e] min-[700px]:w-[100px]"></div>
            <div className="h-1 w-[0.7px] rounded-[0.7px] bg-[#797b7d]"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountDown;
