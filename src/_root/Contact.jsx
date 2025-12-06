import React, { useState } from 'react'
import Footer from '../components/Footer'
import bg from '../assets/contactbg.png'

const Contact = () => {
  const [message, setMessage] = useState({})
  const [error,setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) =>{
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })

  }
  console.log(message)

  const handleSend = async () =>{

    try{

      const res = await fetch('https://teekvillebackend.onrender.com/api/contactus', {
      method: "POST",
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(message)
    })

    const response = await res.json()
    if (response.success === true) {
      setSuccess('Message Sent Succcessfully')

    }
    else{
      setError(response.message)
    }
    }
    catch(error){
      setError("Something went wrong. Please try again later.")
    }
    
  }

  return (
    <main className=''>
      {/* hero background */}
      <div style={{backgroundImage:`url(${bg})` }} className='py-[136.5px] px-22 object-contain hidden lg:block'>
        <h1 className='text-white font-InterBold text-[52px]'>We long to <span className='text-[#1E5296]'> hear</span> from you  </h1>
      </div>

      <div className='lg:px-[87px] lg:pt-[66px] lg:fle lg:flex-row'>
      <section className='px-5'>
        <div>
          <div className='flex flex-row '>
            <img src="" alt="" />
            <h1 className='text-[#1E5296] text-xl lg:text-4xl font-OxygenBold'>Contact Us</h1>
          </div>

          <h2 className='text-[#4C4C4D] text-[12px]/[20px] lg:text-lg font-Oxygen'>With bookkeeping solution your business deserves.</h2>
        </div>

        <div className=' flex flex-col mt-3 gap-[18px]'>
          <div className=''>
            <h1 className='font-Poppins text-[#454F5B] mb-[2px] text-[15px]'>Full Name</h1>
            <input type="text" name='fullName' placeholder='John Abed' className='px-4 border-[1px] border-[#9FA3A8] rounded-lg py-3 w-full'  onChange={handleChange}/>
          </div>

          <div className=''>
            <h1 className='font-Poppins text-[#454F5B] mb-[2px] text-[15px]'>Email Address</h1>
            <input type="text" name='email' placeholder='johndoe@gmail.com' className='px-4 border-[1px] border-[#9FA3A8] rounded-lg py-3 w-full' onChange={handleChange} />
          </div>

          <div className=''>
            <h1 className='font-Poppins text-[#454F5B] mb-[2px] text-[15px]'>Phone Number</h1>
            <input type="text" name='phone' placeholder='90909783664' className='px-4 border-[1px] border-[#9FA3A8] rounded-lg py-3 w-full' onChange={handleChange} />
          </div>

          <div className=''>
            <h1 className='font-Poppins text-[#454F5B] mb-[2px] text-[15px]'>Category</h1>
            <select name='category' type="text"  className='px-4 border-[1px] border-[#9FA3A8] rounded-lg py-3 w-full' onChange={handleChange} >
              <option value="--">--</option>
              <option value="Tutors">Tutors</option>
              <option value="Payment">Payment</option>
            </select>
          </div>

          <div className=''>
            <h1 className='font-Poppins text-[#454F5B] mb-[2px] text-[15px]'>Your message</h1>
            <textarea name='message' type="text" placeholder='Enter at least eight characters' className='px-4 border-[1px] border-[#9FA3A8] rounded-lg py-3 w-full' onChange={handleChange} />
          </div>

        </div>
        {success&& (
          <h1 className='text-green-500'>{success}</h1>
        )}

        {error&& (
          <h1 className='text-red-400'>{error}</h1>
        )}


        <button className='mt-7 bg-[#1E5296] text-white w-full rounded-[10px] py-2.5 font-PoppinsMedium mb-6' onClick={handleSend}>Send Message</button>
      </section>


      </div>

      <Footer/>
    </main>
    
  )
}

export default Contact