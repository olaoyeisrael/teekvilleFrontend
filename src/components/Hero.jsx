import React from 'react'
import HeroImage from '../assets/Frame1171273020.png'
import HeroImage2 from '../assets/HEADERFOTO.png'
import chat from '../assets/CHAT1.png'
import image from '../assets/Rectangle80.png'
import image2 from '../assets/Rectangle802.png'
import image1 from '../assets/Rectangle801.png'
import image3 from '../assets/Rectangle803.png'
import GetCard from './GetCard'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <>
    <section className='pt-7 lg:pt-10 px-5 lg:px-28 bg-[#F7F8FA] flex flex-col lg:flex-row lg:gap-[50px] lg:justify-between lg:items-center block1'>
        <div>
            <h1 className='text-3xl font-RobotoBlack text-center lg:text-left lg:text-6xl lg:text-shadow-lg lg:font-OxygenBold'>Find a <span className='text-[#0F973D]'>community.</span> Take a <span className='text-[#EB5017]'>test.</span> Calculate <span className='text-[#0D5EBA]'>grade.</span></h1>
            <p className='text-center font-Roboto text-sm mt-3.5 text-[#59595A] lg:text-left'>Meet fellow scholars from around the globe. Join teams smart minds business experts. Meet fellow scholars from around the globe</p>
            <Link to='/home'>
            <button className='py-2.5 px-[51px] bg-[#1E5296] text-white rounded-xl flex  mx-auto lg:mx-0 mt-3.5'>Get Started </button> </Link>
        </div>
        <img src={HeroImage} className='mt-8 mb-2 block lg:hidden'/>
        <img src={HeroImage2} className='hidden lg:block  h-[530px] object-con' />
    </section>

    <section className='px-2.5 lg:px-[7.9%] my-16 lg:my-24'>
        <h1 className='containe text-center text-2xl lg:text-4xl font-PoppinsSemiBold'>Join the <span className='text-[#1E5296]'>conversation</span> <span className='hidden lg:inline'>, share your story with like minds</span></h1>
        <div className='mt-2 lg:mt-14'>
            <img src={chat}/>
        </div>

    </section>
    

    <section className='px-5 lg:px-[101px] pt-2.5  pb-6 block1'>
        <div className='lg:px-2.5 '>
        <div className='flex flex-col gap-5 lg:gap-16 '>
            <div>
                <h1 className='font-PoppinsSemiBold text-2xl lg:text-4xl text-center'>What you get with <span className='text-[#F56630]'>Teekville</span></h1>
                <p className='font-Oxygen text-[12px] text-center mt-1 lg:hidden'>We have all it takes to help you excel with our up-to-date resources, you have nothing to miss out on.</p>
            </div>
            <div className='bg-white px-2 py-2.5 rounded-2xl lg:hidden'>
                <img src = {image} className='mb-2 object-contain' />
                <div>
                    <h1 className='font-OxygenBold text-sm'>Take organized computer based practices tests.</h1>
                    <a href="#learnmore" className='text-[#1E5296] font-OxygenBold text-[12.5px]'>Learn More</a>
                </div>
            </div>
             <div className='lg:grid grid-cols-3 gap-x-[31px] hidden'>
            <GetCard img={image1} title={'Take organized computer based practices tests at any time'} para={'find people that you share similar interest with Lorem ipsum is a placeholder text commonly us visual of document to rely  meaningful content.'}/>
            <GetCard img={image2} title={'You get access to unlimited course resources'} para={'You receive unlimited support from real humans,allowing you to take the courses out of running your business.'}/>
            <GetCard img={image3} title={'Calculate your grade without hassle'} para={'See how students are doing in past months and in real-time, so you can master your spending and make smarter decisions with your money.'}/>
            </div>
        </div>
        </div>

    </section>
    </>
  )
}

export default Hero