import React from 'react'

const Help = () => {
  return (
    <section >
        <h1 className='text-2xl font-OxygenBold text-[#1E5296] mt-9'>Help Center</h1>
        <div className='mt-5 flex flex-row gap-5'>
            <div className='w-[246px] pt-6 shadow rounded-xl px-3'>
                <h1 className='font-OxygenBold text-[#1E5296]'>FAQ</h1>
                <div className='mt-3.5 mb-[170px] flex flex-col gap-5'>
                    <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Blog Post</h1>
                    </div>
                    <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Community</h1>
                    </div>
                    <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Invite Friends</h1>
                    </div>
                     <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Profile Settings</h1>
                    </div>
                     <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Test and Calculations</h1>
                    </div>
                    <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Schedules and Activities</h1>
                    </div>
                    <div className='px-4 py-2.5 '>
                        <h1 className='font-Oxygen text-sm'>Cumulative Grade Calculation</h1>
                    </div>

                </div>

            </div>

            <div className='border-[1px] border-[#1E5296] rounded-[10px] md: lg:max-w-[480px] xl:max-w-[698px] pt-9 px-14'>
                <div>
                    <div className='flex flex-col justify-center text-center'>
                        <h1 className='font-OxygenBold text-2xl text-[#262626]'>Frequently Asked Questions (FAQs)</h1>
                        <h2 className='text-[12px] text-[#59595A]'>Do you have a question about Teekville? You can find some helpful answers to frequently asked questions (FAQ)</h2>
                    </div>
                    <div className='mt-3.5'>
                        <input type="text" placeholder='Search here...'  className='border-[1px] border-[#262626] rounded-[10px] w-full py-3.5 px-2 text-sm'/>

                    </div>
                </div>
                <h1 className='mt-7'>At vero eos et accusam et justo duo dolores et?</h1>

                



            </div>

        </div>

    </section>
  )
}

export default Help