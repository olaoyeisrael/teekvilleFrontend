import React from 'react'
import networkImage from '../assets/STACK1.png'
import { Link, useNavigate } from 'react-router-dom'

function Network() {
  const navigate = useNavigate
  const handleClick = () =>{
    navigate('/home')

  }
  return (
    <section className='px-5 lg:px-[110px] pt-6 lg:pt-24 pb-[38.5px] lg:pb-0 block2'>
        <div>
            <h1 className=' container text-center font-OxygenBold mb-5 lg:text-4xl text-2xl'>Expand Your <span className='text-[#68D585]'>Network</span></h1>
            <p className='font-Oxygen text-[16px] text-center hidden lg:block'>Meet fellow scholars from around the globe. Join star teams of smart minds business experts. </p>
            <div className='lg:mt-12 grid lg:grid-cols-2 lg:items-center lg:gap-[55px]'>
                <img src={networkImage} className='h-[270.58p] w-full' />
                <div>
                <p className='font-Oxygen lg:font-OxygenBold lg:text-3xl mt-3.5 lg:mt-0 text-lg text-center lg:text-left'>Meet new friends. Share your ideas. Create a safe space.</p>
                <p className='mt-3 hidden lg:block font-Oxygen text-sm'>find people that you share similar interest with and graphic design, Lm ipsum is a placeholder. find people that you share similar interest with sand graphic design, Lorem ipsum is a placeholder.</p>
                <Link to='/home'><button onClick={handleClick} className='font-PoppinsMedium text-white bg-[#1E5296] rounded-[10px] px-5 py-3.5 lg:flex mt-6 hidden '>Find a community</button> </Link>
                </div>
            </div>
            
            <button className='font-PoppinsMedium text-white bg-[#1E5296] lg:hidden rounded-[10px] px-[51px] py-2.5 flex mt-6 mx-auto'>Get Started </button>
        </div>

    </section>
  )
}

export default Network