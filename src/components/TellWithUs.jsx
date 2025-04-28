import React from "react";
import TellWithUsItems from "./TellWithUsItems";
import PhonIcon from "./icons/PhonIcon";
import LetterIcon from "./icons/LetterIcon";
import ChatIcon from "./icons/ChatIcon";

export default function TellWithUs() {
  let value = [
    {
      svg: <PhonIcon />,
      title: "تلفن پشتیبانی",
      subTitle: "09123456789",
      link: "/",
    },
    {
      svg: <LetterIcon />,
      title: "ایمیل:",
      subTitle: "contact@gmail.com",
      link: "/",
    },
    { svg: <ChatIcon />, title: "تلگرام:", subTitle: "t.me/myTell", link: "/" },
  ];
  return (
    <div className="space-y-7">
      {value.map(( v,index) => (
        <TellWithUsItems key={index} {...v} />
      ))}
    </div>
  );
}
