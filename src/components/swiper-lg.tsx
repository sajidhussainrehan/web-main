"use client";

import TweetEmbed from "react-tweet-embed";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperLg = () => {
  const tweetEmbedOptions = { theme: "dark" };
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="!hidden lg:!block"
    >
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-[30px] px-[60px]">
          <div>
            <TweetEmbed
              tweetId="1756235842228494765"
              options={tweetEmbedOptions}
            />
          </div>
          <div className="gap-[30px] pt-[68px]">
            <TweetEmbed
              tweetId="1760382247641756160"
              options={tweetEmbedOptions}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-3 gap-[30px] px-[60px]">
          <div>
            <TweetEmbed
              tweetId="1762170264475914480"
              options={{ ...tweetEmbedOptions, cards: "hidden" }}
            />
          </div>
          {/* <div className="gap-[30px] pt-[68px]">
            <TweetEmbed
              tweetId="1681843994186387457"
              options={tweetEmbedOptions}
            />
          </div>
          <div>
            <TweetEmbed
              tweetId="1677828720290086913"
              options={tweetEmbedOptions}
            />
          </div> */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
