import React from 'react'

const AcademicsComponent = ({img, heading, text}) => {
  return (
    <div className='flex flex-row items-center gap-[77px]'>
                    <img src={img} className='w-[px] h-[300px] rounded-[20px] object-cover' alt="" />
                    <div>
                        <h1 className='font-InterSemiBold text-[28px]'>{heading}</h1>
                        <p className='font-Inter text-[#475367]'> {text}</p>
                    </div>
                </div>
  )
}

export default AcademicsComponent

export const AcademicsReverseComponent = ({img, heading, text}) => {
  return (
    <div className='flex flex-row-reverse items-center gap-[46px]'>
                    <img src={img} className='w-[px] h-[300px] rounded-[20px] object-cover' alt="" />
                    <div>
                        <h1 className='font-InterSemiBold text-[28px]'>{heading}</h1>
                        <p className='font-Inter text-[#475367]'>{text}</p>
                    </div>
                </div>
  )
}