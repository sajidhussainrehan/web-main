import React from "react";
import Swiperactive from "./Swiperactive";
import HeadingAndPara from "./HeadingAndPara";

const Roadmapswiper = () => {
  return (
    <div id="roadmap" className=" bg-[#030203] px-3 pt-[60px]">
      <div className="mx-auto   w-full max-w-[300px] bg-[url('/private-sale/swiper-bg.png')] bg-cover bg-bottom  bg-no-repeat sm:max-w-[600px] md:max-w-[770px] lg:max-w-[900px] xxl:max-w-[1290px]">
        <HeadingAndPara
          para="Invest into the new standart of on-chain trading"
          paraClass="para"
          heading="Roadmap"
          headingClass="heading"
        />
        <div className=" pt-[90px] md:pb-[90px]">
          <Swiperactive />
        </div>
      </div>
    </div>
  );
};

export default Roadmapswiper;
