import React from 'react'
import test from '../assets/testbg.png'
import testpic from '../assets/testpic.png'
const Apttest = () => {
  return (
    <section>
       

        <div style={{backgroundImage: `url(${test})`}} className='h-screen bg-cover'>
             <div className='bg-[#F6FBF4] flex flex-row py-2 justify-between px-5 lg:px-[200px]'>
                
            <div className='flex gap-1'>
                <div className='flex flex-row gap-2 items-center'>
                      <h2 className='font-Oxygen text-sm hidden md:block'>Question: </h2>
                      <div className='flex flex-row items-center'>
                        <div className='bg-[#9ADBCB] px-3 rounded-sm'>
                            <h1 className='font-OxgenBold text-sm'>1</h1>
                        </div>
                        <h1 className='ml-3 font-Oxygen text-[12px]'>of</h1>
                        <div className=' px-3 rounded-sm'>
                            <h1 className='font-OxgenBold text-sm'>10</h1>
                        </div>
                      </div>

                </div>
                <div className='bg-[#E5E5E5] px-[10px] flex items-center rounded-sm'>
                    <h1 className='font-OxygenBold text-sm'>Goto</h1>
                </div>
              
                

            </div>
            <div className='flex flex-row gap-1.5 '>
                <div className='hidden lg:block'>
                    <h1 className='font-Oxygen'>Time left:</h1>
                <h1 className='font-OxygenBold text-[#FF6A61]'>59:00</h1>
                </div>
                

                <button className='ml-10 font-OxygenBold text-sm'>
                    <h1>See result</h1>
                </button>
            </div>
        </div>


        {/* body */}
        <div className=' mt-4 lg:mt-[94px] flex flex-col lg:flex-row justify-center py-5 lg:py-[71px] px-3.5 mx-4 lg:px-11  items-center gap-12 bg-[#FFFFFF] lg:mx-[146px] shadow rounded-3xl'>
            <img src={testpic} className='lg:h-[430px] max-w-[315px] lg:w-[394px] object-contain rounded-[30px]' alt="" />
            <div>
                <h1 className='font-OxygenBold text-lg'>As light from a star spreads out and weakens, do gaps form between the photons?</h1>
                <div className='mt-7'>
                    <h1 className='font-OxygenBold text-lg'>Select answer</h1>
                    <h2 className='font-Oxygen text-lg'>a. Lamp & electric blanket</h2>
                    <h2 className='font-Oxygen text-lg'>b. Mp3 player & alarm clock</h2>
                    <h2 className='font-Oxygen text-lg'>c. Hair dryer & mircrowave</h2>
                    <h2 className='font-Oxygen text-lg'>d. Radio & flashlight</h2>
                </div>
                <div className='px-5 py-2 bg-[#C4C4C4] w-fit text-white mt-6 rounded-sm font-OxygenBold'>
                    Next
                </div>
            </div>

        </div>


        </div>
       
    </section>
  )
}

export default Apttest