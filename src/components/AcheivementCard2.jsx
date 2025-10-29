import React from 'react'

function AcheivementCard2({image, title, para}) {
  return (
     <div className='pt-10 px-10 pb-16'>
                <img src={image} className='h-14 w-14' />
                <div className='mt-6'>
                    <h1 className='font-OxygenBold text-xl'>{title}</h1>
                    <p className='font-Oxygen text-[16px] mt-2.5'>{para}</p>
                </div>
    
            </div>
  )
}

export default AcheivementCard2