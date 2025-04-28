import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane ,
} from "react-icons/fa";
import SocialMediaItems from './SocialMediaItems';

export default function SocialMedia() {
    let icons = [<FaFacebook/>,<FaTwitter/>,<FaYoutube/>,<FaGithub/>,<FaWhatsapp/>,<FaTelegramPlane />,]
  return (
    <div className='flex gap-1'>
        {icons.map((i,index)=>(
            <SocialMediaItems key={index} icon={i}/>
        ))}
    </div>
  )
}
