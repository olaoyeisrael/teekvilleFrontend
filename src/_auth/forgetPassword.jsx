import React from 'react'
import Logo from '../assets/Logo.png'
import Avatar from '../assets/Avatars.png'
import aaalogo2 from '../assets/aaalogo2.png'
import googleIcon from '../assets/GoogleIcon.png'
import twitterIcon from '../assets/TwitterIcon.png'

function ForgetPassword() {
  return (
    <>
    {/* mobile view */}
        <section className='px-5 lg:hidden'>
        <img src={Logo} className='mt-[70px] w-[177px] h-[79px] flex mx-auto'/>
        <h1 className='font-PoppinsMedium text-center text-[16px]'>Forgotten Password?</h1>

        <p className='mt-5 text-center font-Poppins text-sm text-[#645D5D]'>Enter the email address linked with your account, you’ll get a code to reset your password</p>
    
        <div className='mt-14  '>
            <h1 className='font-Poppins text-[15px] '>Email</h1>
            <input type="text" placeholder='Enter your email address' className='py-3.5 pl-[9px] border-[1px] border-[#9FA3A8] w-full mt-[5px] rounded-lg' />
        </div>
    
        <div className='flex flex-row mt-[15px] gap-1'>
            <p className='font-Oxygen text-sm text-[#645D5D]'> Remember Password?</p>
            <a href="" className='text-[#1E5296] font-Poppins text-sm'>Login</a>
        </div>
        <button className='mt-5 py-2.5 bg-[#1E5296] text-white font-PoppinsMedium   w-full rounded-lg'>Send</button>
        </section>
    
    
        {/* laptop view */}
        <div className='hidden lg:block px-[101px] pt-10'>
            <div className='grid grid-cols-2 gap-[70px] items-center'>
                <div className='bg-[#1E5296] rounded-[30px] px-[50px] pt-[63px]'>
                    <img src={aaalogo2} className='w-[188px] h-[55px]' />
                    <div className='mt-[75px] lg:w-[420px '>
                        <h1 className='text-white font-OxygenBold text-[40px]/[110%] -tracking-[2%]'>Elevate your academic life with Teekville</h1>
                        <p className='mt-[25px] text-white font-OxygenBold '>Our comprehensive computer based tests system offers you an unparalleled range of questions, sparking creative mind and boosting efficiency.</p>
                    </div>
    
                    <div className='mt-24 bg-[#3E3838] py-6 px-6 mb-[72px] rounded-[20px]'>
                        <p className='font-Inter text-[16px]/[24px] text-white'>Teekville has transformed the way I approach exams. The sheer range of course materials and the smooth interpretation of the questions into our tests is a game changers. </p>
                        <div className='mt-5 flex flex-row items-center gap-3'>
                            <img src={Avatar} className='w-10 h-10' />
                            <div>
                                <h1 className='text-white'>Ariana Grande</h1>
                                <p className='text-white'>Visual Designer, Google</p>
                            </div>
                        </div>
                    </div>
    
    
    
                </div>
    
                <div className=''>
                    <div>
                        <h1 className='font-OxygenBold text-4xl'>Forgot your password?</h1>
                        <p className='text-[#645D5D] font-Oxygen text-sm mt-2'>Enter the email address linked to this account to receive a reset code</p>
                    </div>

                    <div className='mt-8'>
                        <h1 className='font-OxygenBold text-sm'>Email Address</h1>
                        <input type="text" name="" id="" className='mt-1 py-[18px] w-full rounded-[6px] px-4 border-[1px] border-[#D0D5DD]' />
                    </div>

                    <div className='mt-8'>
                    <button className='mt-3.5 py-4 bg-[#1E5296] text-white   w-full rounded-lg font-OxygenBold text-'>Send</button>
                    <div className='flex flex-row mt-[26px] gap-1 justify-center'>
                        <p className='font-Oxygen text-sm text-[#645D5D]'> Remember Password?</p>
                        <a href="" className='text-[#1E5296] font-OxygenBold text-sm'>Login</a>
                    </div>
                </div>
    
                </div>
    
            </div>
    
    
        </div>
        </>
  )
}

export default ForgetPassword