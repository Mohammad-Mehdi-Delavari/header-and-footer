import React from "react";
import Logo from "./utils/Logo";
import SocialMedia from "./utils/SocialMedia";
import TellWithUs from "../../components/TellWithUs";
import ShortHandSection from "./utils/ShortHandSection";

export default function footer() {
  return (
    <>
      <div className="h-2 md:w-3/11 mx-auto  bg-zar "></div>
      <footer className="bg-[#222] min-h-114.5 w-full py-11 px-10 lg:px-38">
        <div className="flex flex-col items-center md:flex-row justify-center md:justify-between  text-white text-sm/6 font-light">
          <div className="flex flex-col md:flex-row">
          <Logo />
          <p className="self-center pe-3 text-xs/6 font-medium max-md:mb-10">
            شرکت من، تأسیس شده در سال 1384، یکی از
            موفق‌ترین شرکت‌های معماری غرب آسیا است.<br className="hidden lg:block"></br> این شرکت با تمرکز
            بر توسعه پایدار و تعالی سازمانی، پروژه‌های مسکونی، تجاری و ورزشی را
            در منطقه اجرا می‌کند.
          </p>
          </div>
          <SocialMedia/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-12 text-white">
        <TellWithUs />
        <ShortHandSection />
        </div>
      </footer>
        <div className="bg-[#222] flex justify-center">
        <div className="bg-zar text-[13px] font-medium text-center py-3 w-full  md:w-180">تمامی حقوق این قالب برای  من محفوظ است.</div>
        </div>
    </>
  );
}
