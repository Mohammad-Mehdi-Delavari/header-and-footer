import React from "react";
import Nav from "./nav/Nav";
import LogoBox from "./logoBox/LogoBox";
import ZarBtn from "../../components/ZarBtn";
import MobileNav from "./nav/MobileNav";

export default function Header() {
  return (
    <header className="py-6 lg:px-38 px-5 h-22.5 w-full flex justify-between bg-[#222222]">
      <div className="flex gap-10 xl:gap-22">
        <LogoBox />
        <Nav />
      </div>
      <ZarBtn show link="/" text="مشاوره رایگان" />
      <MobileNav />
    </header>
  );
}
