import React from 'react'

export function AcheivementCard({img, heading, text}) {
  return (
    <div className='flex flex-row justify-between items-center gap-[15px]'>
                <img src={img} className='h-16 w-16' />
                <div>
                    <h1 className='font-OxygenBold text-sm text-[#262626]'>{heading}</h1>
                    <p className='font-Oxygen text-[12px] text-[#4C4C4D]'>{text}</p>
                </div>
    </div>
  )
}

export function AcheivementCardReverse({img, heading, text}) {
  return (
    <div className='flex flex-row-reverse justify-between items-center gap-[15px]'>
                <img src={img} className='h-16 w-16' />
                <div>
                    <h1 className='font-OxygenBold text-sm text-[#262626]'>{heading}</h1>
                    <p className='font-Oxygen text-[12px] text-[#4C4C4D]'>{text}</p>
                </div>
    </div>
  )
}

