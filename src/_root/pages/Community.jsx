import React from 'react'
import date from '../../assets/dateicon.png'
import advert from '../../assets/ADVERT.png'
import unknown from '../../assets/UnknownAvatars.png'
import ruby from '../../assets/Ruby.png'
import PostCard from '../../components/PostCard'
import community1 from '../../assets/Community1.png'
import radio1 from '../../assets/radio-button.png'


const Community = () => {
  return (
   <section className='grid grid-cols-4 gap-[25px] pr-[30px] '>

    
    <section className='pt-3 pl-6 col-span-4 xl:col-span-3 md:flex flex-1 overflow-y-scroll flex-col h-screen gap-6 '>
        <div className='mt-5 hidden md:block'>
            <h1 className='font-OxygenBold text-[#1E5296] text-xl'>Man and Science</h1>
            <div className='grid grid-cols-3 gap-1.5 max-w-[538px] mt-2'>
                <div className='relativ flex '>
                    {/* <div className=' absolute flex justify-end'>
                        <img src={radio1} alt="" className='w-5 h-5' />
                    </div> */}
                    
                    <div className=' border-[0.5px] border-[#000080B2] rounded-[10px]'>
                        <img src={community1} alt="" className='rounded-t-[10px]' />
                        <h1 className='text-center mt-2.5 font-Oxygen mb-2.5'>Laughing in school</h1>
                    </div>
                </div>


                <div className='relativ flex '>
                    {/* <div className=' absolute flex justify-end'>
                        <img src={radio1} alt="" className='w-5 h-5' />
                    </div> */}
                    
                    <div className=' border-[0.5px] border-[#FFC107] rounded-[10px]'>
                        <img src={community1} alt=""  className='rounded-t-[10px]'/>
                        <h1 className='text-center mt-2.5 font-Oxygen mb-2.5'>The hut of intellectuals</h1>
                    </div>
                </div>


                <div className='relativ flex '>
                    {/* <div className=' absolute flex justify-end'>
                        <img src={radio1} alt="" className='w-5 h-5' />
                    </div> */}
                    
                    <div className=' border-[0.5px] border-[#CF0F22] rounded-[10px]'>
                        <img src={community1} alt="" className='rounded-t-[10px]' />
                        <h1 className='text-center mt-2.5 font-Oxygen mb-2.5'>UNILAG Law Jambites...</h1>
                    </div>
                </div>
            </div>

        </div>
      <PostCard />

       
     

    </section>


    <section className='mt-3 overflow-hidden hidden xl:block  stick'>
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
  )
}

export default Community