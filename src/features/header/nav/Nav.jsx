import React from "react";
import NavItems from "./NavItems";

export default function ({show ,addClass}) {
   let styles = `text-white font-extrabold  lg:flex gap-8 my-auto text-sm ${addClass}`
  return (
    <>
      <nav className={show ? `${styles}` :`hidden ${styles}` }>
        <NavItems title="صفحه اصلی" link="/"/>
        <NavItems title="بلاگ" link="/blog" icon/>
        <NavItems title="درباره ما" link="/aboutUs"/>
        <NavItems title="تماس با ما" link="/tellToUs"/>
      </nav>
    </>
  );
}
