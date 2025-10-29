import React from 'react'
import backgroundImage from '../../assets/image_46.png'
import networkImage from '../../assets/STACK1.png'
import { NavLink } from 'react-router-dom'

export const Testimonial = () => {
  return (
   <section id='hero'>
    <div style={{backgroundImage: `url(${backgroundImage})`}} className='py-14 lg:py-[128px] lg:px-[90px] object-contain'>
        <h1 className='font-InterBold text-2xl lg:text-[52px] mx-5 text-white'><span className='text-[#31619F] italic'>Community</span> strives here</h1>
    </div>

    <div className='my-9 mx-5 lg:hidden'>
        <h1 className='font-OxygenBold text-2xl text-center'>Expand Your <span className='text-[#68D585]'>Network</span></h1>
        <div className='mt-2.5'>
            <div className='flex flex-col gap-3.5'>
                <img src={networkImage} alt="" />
                <h2 className='font-Oxygen text-lg text-center '>Meet new friends. Share your ideas. Create a safe space.</h2>
            </div>

            <button className='mt-6 text-white bg-[#1E5296] flex justify-center mx-auto px-[51px] py-2.5 rounded-[10px] font-PoppinsMedium'>Get Started </button>

        </div>
        
    </div>

    <div className='px-[109.5px] py-[100px] hidden lg:block'>
        <div className='grid grid-cols-2 items-center'>
            <div className='flex flex-col gap-[45px]'> 
               <div className='max-w-[486px]'>
                <h1 className='font-OxygenBold text-3xl'>Meet new friends. Share your ideas. Create a safe space.</h1>
                <p className=' text-[#435270B2] mt-3'>find people that you share similar interest with and graphic design, Lm ipsum is a placeholder. find people that you share similar interest with sand graphic design, Lorem ipsum is a placeholder.</p>
               </div>
               <NavLink className='text-white bg-[#1E5296] px-5 max-w-[210px] py-[14px] text-xl rounded-md font-OxygenBold'>Find a community</NavLink>
            </div>
            <img src={networkImage} alt="" />

        </div>

    </div>
   </section>
  )
}
