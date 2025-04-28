import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex gap-2">
      <div>
        <Link to="/">
          <img
            className="size-10"
            src="./src/assets/images/cropped-logo-1.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="">
        <h2 className="text-zar font-black">کمپانی من</h2>
        <p className="text-white text-sm font-light tracking-tight">
          ساخت و ساز حرفه ای
        </p>
      </div>
    </div>
  );
}
