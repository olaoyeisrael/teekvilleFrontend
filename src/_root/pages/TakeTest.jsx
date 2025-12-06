import React from 'react'
import test from '../../assets/testbg.png'
import { useNavigate } from 'react-router-dom'

const TakeTest = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/apttest')

  }
  return (
   
    <div>
       

    <section className=' bg-cover object-contain flex items-center justify-center h-screen' style={{backgroundImage: `url(${test})`}}>
      
      
       <div className='rounded-[15px] py-[151px] shadow px-[51px]  mx-20'>
       
        <div>
           <div className='bg-[#9747FF] px-4 w-fit rounded-3xl'>
          <h1 className='text-white'>Post Utme</h1>
          
          </div>
        <div className='mt-[22px]'>
            <h2 className='font-extrabold font-Oxygen text-sm'>Select discipline of choice</h2>
            <select name="" id=""  className='py-4 px-4 text-[#828CA9] border-1 border-[#C4C4C4] rounded-md text-sm font-Oxygen mt-2'>
              <option value="">Accountancy / Accounting</option>
              <option value="">Adult And Non-formal Education</option>
              <option value="">Adult Education</option>
              <option value="">Agriculture</option>
            
            </select>

          </div>
          <div className='mt-[22px]'>
            <h2 className='text-[#505258] font-Oxygen'>Difficulty</h2>
            <div className=' text-[#505258] flex flex-row gap-3 mt-4 '>
              <h1>Easy</h1>
              <h1>Medium</h1>
              <h1>Hard</h1>

            </div>

          </div>

          <div className='mt-[22px]'>
            <h2 className='text-[#000000] font-OxygenBold text-lg'>Test Description</h2>
            <p className='mt-2 text-[#505258] font-Oxygen'>This test covers all topics for UTME. Questions were retrieved from previous years and textbooks. Ensure you practice regularly</p>
            

          </div>

        


        </div>
        <button className='mt-6 px-6 py-4 text-white bg-[#9747FF] rounded-[5px]' onClick={handleClick}>Start Test</button>
       
       </div>
       
    </section>
    </div>
   

  )
}

export default TakeTest