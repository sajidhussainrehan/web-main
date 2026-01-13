import React from "react";
import Link from "next/link";
import { LinkData } from "./Helper";

const NavbarLinks = () => {
  return (
    <div className="scroll_hide mx-3 overflow-auto sm:mx-4">
      <div className="my-3 flex gap-6 sm:my-5 md:justify-center xl:px-0">
        {LinkData.map((item, index) => (
          <span key={index}>
            <Link
              key={index}
              href={item.link}
              className="font-Inter w-full whitespace-nowrap text-center text-lg font-semibold leading-[122%] text-white transition duration-300 ease-in-out hover:text-white/50 "
            >
              {item.linkname}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavbarLinks;
