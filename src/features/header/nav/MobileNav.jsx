import React, { useState } from "react";
import LogoBox from "../logoBox/LogoBox";
import Nav from "./Nav";
import TellWithUs from "../../../components/TellWithUs";

export default function MobileNav() {
  const [offCanvasFlag, setOffCanvasFlag] = useState(false);
  let offCanvasClass =
    "fixed top-0 z-40 h-screen p-4 overflow-y-auto transition bg-[#222222] w-80";
  return (
    <div className="relative lg:hidden">
      <div className="text-center">
        <button
          onClick={(e) => setOffCanvasFlag(true)}
          className="text-white bg-[#383737]  font-medium  text-sm p-2 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          offCanvasFlag
            ? `block fixed w-full h-full top-0 right-0 bg-[#222222] opacity-60`
            : `hidden`
        }
        onClick={() => setOffCanvasFlag(false)}
      ></div>
      <div
        className={
          offCanvasFlag
            ? ` ${offCanvasClass}  right-0`
            : `${offCanvasClass}  -right-80`
        }
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <LogoBox />
        </h5>
        <button
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-5 end-5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setOffCanvasFlag(false)}
        >
          <svg
            className="size-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="border-y-2 border-dotted border-white py-5  px-4 my-8">
          <Nav show addClass="flex flex-col !gap-5 !font-medium !font-lg "></Nav>
        </div>
        <div>
        <TellWithUs/>
        </div>
      </div>
    </div>
  );
}
