import React from 'react'
import bgImage from '../../assets/image26.png'
import image from '../../assets/Rectangle80.png'
// import image2 from '../../assets/Rectangle802.png'
import image1 from '../../assets/Rectangle__831.png'
import image3 from '../../assets/Rectangle_831.png'
import image2 from '../../assets/Rectangle 831.png'
import AcademicsComponent, { AcademicsReverseComponent } from '../../components/AcademicsComponent'
const Academics = () => {
  return (
    <section id='hero' className='mb-[37px] lg:mb-0'>
        <div className='' style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
            <div className='py-[29px] px-5 lg:px-[86px] lg:pt-[115px] lg:pb-[95px]'>
                <h1 className='font-InterBold text-white text-2xl lg:text-[52px]'>Elevate your <span className='text-[#FFC107]'>Academics️</span></h1>
                <p className='mt-1 text-white text-[12.5px] lg:text-[16px] lg:max-w-[713px]'>Welcome to our platform, where we are passionate about educating individuals to evaluate academic world and development. We provide courses materials.</p>
            </div>

        </div>

        <div className='block lg:hidden'>

         <div className='flex flex-col gap-5 lg:gap-16 mt-9 bg-[#1E52960D] pt-5 px-5 pb-9 lg:pb-0 '>
            <div>
                <h1 className='font-PoppinsSemiBold text-2xl/[40px] lg:text-4xl text-center'>What you get with <span className='text-[#F56630]'>Teekville</span></h1>
                <p className='font-Oxygen text-[12px] text-center mt-1 lg:hidden'>We have all it takes to help you excel with our up-to-date resources, you have nothing to miss out on.</p>
            </div>
            <div className='bg-white px-2 py-2.5 rounded-2xl '>
                <img src = {image} className='mb-2 object-contain' />
                <div>
                    <h1 className='font-OxygenBold text-sm'>Take organized computer based practices tests.</h1>
                    <a href="#learnmore" className='text-[#1E5296] font-OxygenBold text-[12.5px]'>Learn More</a>
                </div>
            </div>

            
             {/* <div className='lg:grid grid-cols-3 gap-x-[31px] hidden'>
            <GetCard img={image1} title={'Take organized computer based practices tests at any time'} para={'find people that you share similar interest with Lorem ipsum is a placeholder text commonly us visual of document to rely  meaningful content.'}/>
            <GetCard img={image2} title={'You get access to unlimited course resources'} para={'You receive unlimited support from real humans,allowing you to take the courses out of running your business.'}/>
            <GetCard img={image3} title={'Calculate your grade without hassle'} para={'See how students are doing in past months and in real-time, so you can master your spending and make smarter decisions with your money.'}/>
            </div> */}
        </div>

        <button className='text-white bg-[#1E5296] flex justify-center mx-auto px-[72px] py-2 rounded-md font-OxygenBold text-sm mt-6'>Start Here</button>
        </div>


        <div className='bg-[#FFFFFF] pt-[60px] hidden lg:block'> 
            <h1 className='text-[#1E5296] text-center font-OxygenBold text-4xl'>We have all it takes to help you excel</h1>
            <div className=' flex flex-col mx-[87px] my-20 gap-[75px]'>
                <AcademicsComponent img={image2} text={ "Lorem ipsum is a placeholder text commonly us visual of document to rely  meaningful Wrem ipsum is a placeholder text commonly us visual of to rely  meaningful content. orem ipsum is a placeholder text  Commonly us visual of document to rely  meaningful content.find people that you share similar interest with  Lorem ipsu Holder text commonly us visual of document to rely  meaningful content." } heading={'Access to unlimited course resources'}/>

                <AcademicsReverseComponent img={image3} heading={"Organized computer based practices tests"} text={"People that you share similar interest with  Lorem ipsum is a placeholder  Commonly us visual of document to rely  meaningful content.find people that you share similar interest with  Lorem ipsum i Holder text commonly visual of document to rely  meaningful content. orem is a placeholder text commonly us visual Off to rely  meaningful content.commonly us visual of."}/>

                <AcademicsComponent img={image1} heading={"Calculate your grade without hassle"} text={"Commonly us visual of document to rely  meaningful content.find people that you share similar interest with  Lorem ipsum is Holder text commonly  visual of document to rely  meaningful content. orem ipsum is a placehold text commonly us visual Off to rely  meaningful content. orem ipsum is a placeholder text commonly us visual of document to rely  meaningful content."}/>
                
            </div>
            
        </div>
    </section>
  )
}

export default Academics