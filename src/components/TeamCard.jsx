import React from 'react'

export function TeamCard({image, name, position}) {
  return (
    <div>
         <img src = {image} className='rounded-lg ImageReveal'/>
         <div className='mt-1 lg:mt-2.5'>
            <h1 className='font-OxygenBold text-[13px] lg:text-[16px]'>{name} </h1>
            <h2 className='font-Oxygen text-[11px] lg:text[12px]'>{position}</h2>
        </div>
    </div>
  )
}

