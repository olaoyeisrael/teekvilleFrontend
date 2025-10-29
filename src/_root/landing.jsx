import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Network from '../components/Network'
import Acheivement from '../components/Acheivement'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Landing() {

  const firstName = useSelector((state)=> state.userDetails.firstName)
  return (
    <main className='flex flex-col'>
 
    <NavBar/>
      <Hero/>
      <Network/>
      <div className='pt-16 lg:pt-24'>
        <Acheivement/>
         <div className='grid grid-cols-3 px-5 lg:px-[60px] lg:mx-[111px] py-11 lg:py-[77px] items-center gap-x-12 mb-16 '>
        <div className='col-span-2'>
            <h1 className='font-OxygenBold text-sm lg:text-4xl'>Together, let's shape the future of digital education.</h1>
            <p className='font-Oxygen text-[10px] lg:text-[16px]'>Join us on this exciting learning journey and unlock your full academic potential.</p>
        </div>
        <Link to='/login'>
        <button className='px-2.5 bg-[#1E5296] py-1.5 lg:py-3.5 text-[12px] font-PoppinsMedium text-white rounded-lg '>Get Started</button> </Link>
    </div>
      </div>
      
      <Footer/>
      </main>
  )
}

export default Landing