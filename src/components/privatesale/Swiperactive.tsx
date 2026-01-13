"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { ArrowIcon } from "../icons/Icons";
import { profilecard } from "./Helper";

export default function Swiperactive() {
  const [activeSlide, setActiveSlide] = useState(3);
  const onTransitionStart = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };
  return (
    <>
      <Swiper
        onSlideChange={onTransitionStart}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper w-full gap-5"
      >
        {profilecard.map((items, index) => (
          <SwiperSlide key={index}>
            <div
              className={` mx-auto flex flex-col items-center justify-center  rounded-[20px] border border-[#5200FF] px-2 sm:mx-0 sm:ml-auto lg:mx-auto lg:ml-0 xxl:mx-0  xxl:ml-auto   ${
                activeSlide === index
                  ? " h-[337px] w-[269px]"
                  : "mt-9 h-[263px] w-[207px] opacity-60"
              }`}
            >
              <div className=" flex h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[linear-gradient(180deg,#5200FF_0%,rgba(82,0,255,0.10)_100%)] p-[10px]">
                {items.icon}
              </div>
              <div className="mt-[15px] flex flex-col gap-2 text-center">
                <h2 className="font-inter text-[20px] font-bold text-white">
                  {items.name}
                </h2>
                <p className="line-clamp-4 font-inter text-[18px] font-normal text-[rgba(255,255,255,0.70)]">
                  {items.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev-btn absolute !left-[0%] !top-20 z-50 w-fit sm:!left-[27%] md:!left-[33%] lg:!left-[33%] xxl:!left-[40%]">
          <div className="rounded-full bg-white">
            <ArrowIcon />
          </div>
        </div>
        <div className="next-btn absolute !left-[89%] !top-20 z-50 w-fit sm:!left-[72%] md:!left-[68%] lg:!left-[63%] xxl:!left-[60%]">
          <div className="rotate-180 rounded-full bg-white">
            <ArrowIcon />
          </div>
        </div>
      </Swiper>
    </>
  );
}
