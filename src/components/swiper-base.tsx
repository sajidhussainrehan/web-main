"use client";

import TweetEmbed from "react-tweet-embed";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperBase = () => {
  const tweetEmbedOptions = { theme: "dark" };

  return (
    <Swiper
      style={{ minHeight: "68px" }}
      navigation={true}
      modules={[Navigation]}
      className="lg:!hidden"
    >
      <SwiperSlide>
        <div className="flex justify-center">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1756235842228494765"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1760382247641756160"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1762170264475914480"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={tweetEmbedOptions}
              tweetId="1677828720290086913"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center px-[60px]">
          <div className="w-full max-w-[550px]">
            <TweetEmbed
              options={{ ...tweetEmbedOptions, cards: "hidden" }}
              tweetId="1681964143799336960"
            />
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};
