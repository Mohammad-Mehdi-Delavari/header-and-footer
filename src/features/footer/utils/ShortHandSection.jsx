import React from "react";
import ShortHands from "./ShortHands";

export default function ShortHandSection() {
  let value = [
    {
      title: "دسترسی سریع",
      child: [
        { link: "", text: "صفحه اصلی" },
        { link: "", text: "فروشگاه" },
        { link: "", text: "وبلاگ" },
      ],
    },
    {
      title: "خدمات مشتریان",
      child: [
        { link: "", text: "صفحه اصلی" },
        { link: "", text: "فروشگاه" },
        { link: "", text: "وبلاگ" },
      ],
    },
    {
      title: "دسته محصولات",
      child: [
        { link: "", text: "صفحه اصلی" },
        { link: "", text: "فروشگاه" },
        { link: "", text: "وبلاگ" },
      ],
    },
  ];
  return (
    <>
      {value.map((v, index) => (
        <ShortHands key={index} {...v} />
      ))}
    </>
  );
}
