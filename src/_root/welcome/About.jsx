import React from 'react'
import bacgroundImage from '../../assets/image_30.png'
import Acheivement from '../../components/Acheivement'

const About = () => {
  return (
    <section id='hero'>
        <div style={{backgroundImage: `url(${bacgroundImage})`}} className=' py-[29.5px] px-5 lg:py-[77px] lg:px-[90px]'>
            <h1 className='font-Inter italic text-2xl font-[700] lg:text-[52px]'> <span className='text-[#F56630]'>About</span> Teekville️</h1>
            <p className='mt-1 text-white text-[12.5px] lg:text-[16px] lg:max-w-[810px]'>Welcome to our platform, where  are passionate about educating individuals evaluate their and development. We provide courses designed equip l academic earners.</p>

        </div>
        <div className='py-9'>
        <Acheivement/>
        </div>
    </section>
    
  )
}

export default About