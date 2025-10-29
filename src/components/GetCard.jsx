import React from 'react'

function GetCard({img, title, para}) {
  return (
    
                    <div className=' border-[#F7F8FA] border-[1px] rounded-2xl shadow-2xl'>
                    <img src={img} className='rounded-t-2xl h-[350px] w-full object-cover'/>
                    <div className='mx-6 mt-5 mb-8'>
                        <h1 className='font-OxygenBold text-[19px]'>{title}</h1>
                        <p className='font-Oxygen text-[13px] text-[#4C4C4D] mt-3.5'>{para}</p>
                        <a href="" className='text-[#1E5296] font-OxygenBold text-sm/[20px] mt-3.5'>Learn More</a>
                    </div>
                    </div>
                
  )
}

export default GetCard