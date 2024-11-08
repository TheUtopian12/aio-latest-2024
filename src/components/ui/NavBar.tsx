"use client";
import React from "react";

import requests from "../../utils/request";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="relative z-10 pt-5">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 
  sm:space-x-20 overflow-x-scroll no-scrollbar 
  "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <Link
            href={`/${url}`}
            className="last:pr-24 text-white cursor-pointer transition duration-100 transform hover:scale-125 hover:text-[#F26457]
            font-semibold
          active:text-red-500 "
            key={key}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
