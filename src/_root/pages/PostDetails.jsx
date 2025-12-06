import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import avatar from '../../assets/Avatarsdash.png'
import date from '../../assets/dateicon.png'
import advert from '../../assets/ADVERT.png'
import unknown from '../../assets/UnknownAvatars.png'
import ruby from '../../assets/Ruby.png'
import PostCard from '../../components/PostCard'
import { useSelector } from 'react-redux'
import logo from '../../assets/Logo1.png'
import PostDetailsCard from '../../components/PostDetailsCard'


const PostDetails = () => {

    return (





  <section className='grid grid-cols-4 gap-x-[25px] md:pr-[30px] p-2 '>
    <div className='col-span-4 flex justify-between mt-2.5 md:hidden'>
      <img src={logo} alt="logo"  className='w-[111px] h-7'/>
      <img src={avatar} alt="" className='w-7 h-7' />
    </div>
    
    <section className='md:pt-3 md:pl-6  col-span-4 xl:col-span-3 flex flex-1 overflow-y-scroll flex-col h-screen gap-6   '>
  
     <PostDetailsCard/>

      
     

    </section>


    <section className='mt-3 overflow-hidden hidden xl:block stick'>
      <div className='bg-white border-[1px] border-[#E4E7EC] py-4 px-5 flex flex-row gap-3 items-center rounded-xl justify-center mx-4'>
        <img src={date} alt="" className='h-10 w-10' />
        <div>
          <h1 className='text-[#475467] font-Inter text-[12px]'>Today’s Date</h1>
          <h1 className='font-InterSemiBold text-[#344054]'>1st July, 2023</h1>

        </div>
      </div>

      <img src={advert} alt="" className='mt-4 ' />

      <div className='mt-4 pt-4 bg-white rounded-xl'>
        <div className='py-[6px] px-2'>
           <h1 className='font-InterMedium text-lg text-[#344054]'>Updates</h1>
        </div>
        <div className='mt-4 '>
          <div className='py-2 px-3 flex flex-row gap-3'>
            <img src={ruby} alt="" className='w-8 h-8' />
            <div>
              <div>
                <h1 className='font-InterMedium text-sm text-[#344054]'>Ruby Mars</h1>
                <h1 className='font-Inter text-sm text-[#475367]'>is requesting approval</h1>
              </div>
              <div className='flex gap-3 mt-3'>
                <button className='bg-[#1E5296] text-white py-2 px-3 rounded-md font-InterSemiBold text-sm'>Accept</button>
                <button className='bg-white text-[#1E5296] py-2 px-3 rounded-md border-[1.5px] border-[#1E5296] font-InterSemiBold text-sm'>Decline</button>
              </div>
              <h1 className='mt-3 text-[#98A2B3] font-Inter text-sm'>2 mins ago</h1>
            </div>
          </div>

        </div>

        <div className='mt-3 '>
          <div className='py-2 px-3 flex flex-row gap-3'>
            <img src={ruby} alt="" className='w-8 h-8' />
            <div>
              <div>
                <h1 className='font-InterMedium text-sm text-[#344054]'>Ruby Mars</h1>
                <h1 className='font-Inter text-sm text-[#475367]'>Invited Lana to the team</h1>
              </div>
             
              <h1 className='mt-3 text-[#98A2B3] font-Inter text-sm'>Yesterday</h1>
            </div>
          </div>

        </div>

         <div className='mt-3 '>
          <div className='py-2 px-3 flex flex-row gap-3 items-center'>
            <img src={unknown} alt="" className='w-10 h-10' />
            <div>
              <div className=' flex flex-row gap-1'>
                <h1 className='font-InterMedium text-sm text-[#344054]'>Oluseyi</h1>
                <h1 className='font-Inter text-sm text-[#475367]'>left a comment</h1>
              </div>
             
              <h1 className='mt-2 text-[#98A2B3] font-Inter text-sm'>June 3</h1>
            </div>
          </div>

        </div>

         <div className='mt-3 '>
          <div className='py-2 px-3 flex flex-row gap-3 items-center'>
            <img src={unknown} alt="" className='w-10 h-10' />
            <div>
              <div className=' flex flex-row gap-1'>
                <h1 className='font-InterMedium text-sm text-[#344054]'>Oluseyi</h1>
                <h1 className='font-Inter text-sm text-[#475367]'>left a comment</h1>
              </div>
             
              <h1 className='mt-2 text-[#98A2B3] font-Inter text-sm'>June 12</h1>
            </div>
          </div>

        </div>
       
      </div>


    </section>

  </section>

    // section for post
    
  
  )
}

export default PostDetails