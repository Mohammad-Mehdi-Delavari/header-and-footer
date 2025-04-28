import React from 'react'

export default function ({svg, title, subTitle,link}) {
  return (
        <a className='flex items-center gap-2' href={link}>
        <div className='size-10 bg-[#2f2f2f] text-zar flex justify-center items-center text-sm'>
          {svg}
        </div>
        <div className=''>
            <p className='text-[#bbb] text-sm'>{title}</p>
            <strong className='text-white text-sm'>{subTitle}</strong>
        </div>
        </a>
  )
}

