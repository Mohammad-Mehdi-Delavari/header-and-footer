import React from 'react'
import { Link } from 'react-router-dom'

export default function ZarBtn({text,link,show}) {
    let classAdd='w-25.5 h-11 bg-zar text-black text-sm font-semibold justify-center items-center';
  return (
    <Link className={show ? `${classAdd} hidden lg:flex` : `${classAdd} flex`  } to={link}>{text}</Link>
  )
}
