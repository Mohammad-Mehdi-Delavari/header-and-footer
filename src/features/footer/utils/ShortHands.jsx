import React from 'react'
import { Link } from "react-router-dom";

export default function ShortHands({title,child}) {
  return (
    <div className='max-md:mt-10 last:mt-5'>
        <h3 className='text-zar font-bold mb-5'>{title}</h3>
        <ul>
        {child.map((v,index)=>(
            <li key={index}><Link to={v.link} className=' hover:text-zar text-xs font-medium '>{v.text}</Link></li>
        ))}
        </ul>
    </div>
  )
}
