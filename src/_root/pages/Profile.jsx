import React from 'react'

const Profile = () => {
  return (
    <section className='md:px-5  py-2.5 px-2'>
        <h1 className='text-[#1E5296] font-OxygenBold text-2xl'>Settings</h1>
        <p className='text-[#667185] font-Inter'>Control your profile setup: Note that changes are only allowed once a month </p>
        <div className='mt-2.5 px-4 py-4'>
            <h1 className='font-InterBold text-[#1E5296] text-sm'>Profile</h1>
        </div>
        <div className='bg-[#FFFFFF] pt-8 md:px-16  '>
            <div>
                <div className='py-4 border-[1px] border-[#D0D5DD] w-fit px-4 rounded-[10px]'>
                    <h1>Update Profile Image</h1>
                </div>

                <div className='grid grid-cols-2 mt-2 w-full gap-4'>
                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Full name</h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Bio</h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Phone Number </h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Matric number </h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Username</h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                    <div className='grid grid-cols-2 gap-x-2'>
                        <div className='w-full'>
                            <h1 className='font-OxygenBold text-sm text-[#262626]'>Department </h1>
                            {/* <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1' /> */}
                            <select name="" id="" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full'>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <h1 className='font-OxygenBold text-sm text-[#262626]'>Faculty </h1>
                            {/* <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1' /> */}
                            <select name="" id="" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full'>
                                <option value=""></option>
                            </select>
                        </div>
                        
                    </div>

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Email address</h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>
                     <div className='w-full'>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>School</h1>
                        
                        <select name="" id="" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full'>
                                <option value=""></option>
                            </select>
                    </div>
                    <div className='grid grid-cols-2 gap-x-2'>
                     <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Date</h1>
                     
                        <select name="" id="" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full'>
                                <option value=""></option>
                            </select>
                    </div>
                     <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Month</h1>
                     
                        <select name="" id="" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full'>
                                <option value=""></option>
                            </select>
                    </div>
                    </div>
                    

                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Add Interest</h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>
                    <div>
                        <h1 className='font-OxygenBold text-sm text-[#262626]'>Year </h1>
                        <input type="text" className='border-[1px] border-[#D0D5DD] rounded-[6px] px-4 py-3 mt-1 w-full' />
                    </div>

                </div>
            </div>

        </div>
        <div className='flex items-center justify-center '>
            <h1 className='bg-[#FFD969D9] w-fit mt-7 px-3 rounded-[5px]'>Changes are only allowed once a month</h1>
        </div>
        

    </section>
  )
}

export default Profile