import React from "react";

export default function Logo() {
  return (
    <div className="flex self-center max-md:mb-5 items-center h-16">
      <img
        className="block min-w-12.5 max-w-13"
        src="./src/assets/images/cropped-logo-1.png"
        alt="logo"
      />
      <div className="border-e-2 hidden md:block border-[#57585a] h-16 mx-5"></div>
    </div>
  );
}
