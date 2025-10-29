import React from 'react'
import iconContainer from '../assets/IconContainer.png'
import iconContainer2 from '../assets/IconContainer2.png'
import iconContainer3 from '../assets/IconContainer3.png'
import iconContainer4 from '../assets/IconContainer4.png'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import goal1 from '../assets/goal1.png'
import goal2 from '../assets/goal2.png'
import goal3 from '../assets/goal3.png'
import goal4 from '../assets/goal4.png'
import goal11 from '../assets/goal11.png'
import goal12 from '../assets/goal12.png'
import goal13 from '../assets/goal13.png'
import goal14 from '../assets/goal14.png'
import {AcheivementCard, AcheivementCardReverse} from './AcheivementCard'
import { TeamCard } from './TeamCard'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'
import AcheivementCard2 from './AcheivementCard2'

function Acheivement() {
  return (
    <>
    <section className='pb-1 px-[19px] lg:px-[111px] block1'>
        <div className='hidden lg:block'>
        <h1 className='text-center font-OxygenBold text-4xl/[150%]'>About <span className='text-[#EB5017]'>Teekville </span></h1>
        <p className='text-[16px] text-center'>Welcome to our platform, where we are passionate about educating individuals to evaluate their academic world and development. We provide courses materials designed to equip learners with the knowledge needed to succeed in their various academic fields.</p>
        </div>
        <div className='lg:mt-[70px]'>
            <h1 className='font-OxygenBold text-2xl lg:text-3xl text-center lg:text-left'>Our <span className='text-[#EB5017] lg:text-black'>Achievements</span></h1>
            <p className='font-Oxygen text-[11.9px]/[150%] lg:text-[16px] text-center lg:text-left'>Our commitment to excellence has led us to achieve significant along our journey. Here are some of our notable achievements</p>
        </div>

        <div className='lg:grid grid-cols-2 gap-x-5 gap-y-5 hidden'>
            <AcheivementCard2 image={icon1} title={'Trusted by Thousands'} para={'We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.'}/>

            <AcheivementCard2 image={icon2} title={'Award-Winning Course Contents'} para={'Our courses have received recognition and accolades in the industry for their quality, depth of content, effective teaching methodologies.'}/>
            <AcheivementCard2 image={icon3} title={'Positive Student Feedback'} para={'We take pride in the positive feedback we receive from  students, who appreciate the practicality and relevance of our course materials.'}/>
            <AcheivementCard2 image={icon4} title={'Industry Partnerships'} para={'We have established strong partnerships with leaders, help us to provide our students with access to the latest tools and technologies'}/>
        </div>

        <div className='mt-7 flex flex-col gap-10 lg:hidden'>
            <AcheivementCard img={iconContainer} heading={'Award-Winning Course Contents'}  text={'Our course have received recognition accolade in the industry for their quality depth of content effective teaching methodologies.'}/>
            <AcheivementCardReverse img={iconContainer2} heading={'Positive Student Feedback'} text={'We take pride in the positive feedback receive from  students, who appreciate the practicality and relevance of our course materials.'}/>
            <AcheivementCard img={iconContainer3} heading={'Industry Partnerships'} text={'We have established strong partnerships with leaders, help us to provide our students with access to the latest tools and technologies'} />
            <AcheivementCardReverse img={iconContainer4} heading={'Trusted by Thousands'} text={'We have successfully served thousands student helping them unlock their potential and achieve their career goals.'}/>
        </div>
        

    </section>


    <section className='pt-16 lg:pt-[70px] px-5 lg:px-[111px]'>
        <div className='mb-[15px] lg:mb-[60px]'>
            <h1 className='text-center lg:text-left font-OxygenBold text-2xl lg:text-3xl'>Our <span className='text-[#715DEF] lg:text-black'>Dedicated</span> Team </h1>
            <p className='font-Oxygen text-[11px] text-center lg:hidden text-[#59595A]'>Meet committed teams members who are dedicated to the course.</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-[9px] gap-y-5 lg:gap-x-[26px]'>
            <TeamCard image={team1} name={'Tochukwu Odeme '} position={'Project Manager'}/>
            <TeamCard image={team2} name={'Dami Ola  '} position={'Project UI Designer'}/>
            <TeamCard image={team3} name={'Timileyin Chubby '} position={'Community Leader'}/>
            <TeamCard image={team4} name={'Tunde Musty  '} position={'Technical Writer'}/>
        </div>

        <div className='mt-16 lg:mt-[70px] block1'>
            <div>
                <h1 className='font-OxygenBold text-2xl lg:text-3xl text-center lg:text-left'>Our <span className='text-[#034592] lg:text-black'>Goals</span></h1>
                <p className='text-[11.9px] text-center font-Oxygen lg:text-left lg:hidden text-[#59595A]'>At Teekville, our goal to empower individuals, we believe that education should be accessible and transformative.</p>
                <p className='hidden lg:block text-[16px] font-Oxygen  text-[#59595A]'>At Teekville, our goal is to empower individuals from all backgrounds to thrive in their academic lives. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact in. Through our carefully selected courses, online tests and overall academic lives.</p>
            </div>

            <div className='lg:grid grid-cols-2 gap-x-5 gap-y-5 hidden'>
            <AcheivementCard2 image={goal11} title={'Provide Practical Mock Tests'} para={'We focus on delivering practical mock test that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.'}/>

            <AcheivementCard2 image={goal12} title={'Foster Creative Problem-Solving'} para={'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.'}/>
            <AcheivementCard2 image={goal13} title={'Promote Collaboration and Community'} para={'We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.'}/>
            <AcheivementCard2 image={goal14} title={'Stay Ahead of your Academics'} para={'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.'}/>
        </div>

            <div className='flex gap-10 flex-col mt-5 lg:hidden'>
                <AcheivementCard img={goal1} heading={'Provide Practical Mock Tests '} text={'We focus on delivering practical mock test that are relevant to current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.'}/>
                <AcheivementCardReverse img={goal2} heading={'Foster Creative Problem-Solving'} text={'We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.'}/>
                <AcheivementCard img={goal3} heading={'Promote Collaboration and Community'} text={'We believe in the power of collaboration and peer learning. Our platform foster a supportive and inclusive community where learners can connect, share insights, and grow together.'} />
                <AcheivementCardReverse img={goal4} heading={'Stay Ahead of your Academics'} text={'The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trend. We regularly update our course content to ensure our students receive latest knowledge and skills.'} />

            </div>
        </div>
    </section>

   



    </>
  )
}

export default Acheivement