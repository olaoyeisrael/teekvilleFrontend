import React, { useEffect, useState} from 'react'
import Logo from '../assets/Logo.png'
import Avatar from '../assets/Avatars.png'
import aaalogo2 from '../assets/aaalogo2.png'
import googleIcon from '../assets/GoogleIcon.png'
import twitterIcon from '../assets/TwitterIcon.png'
import { Link, Navigate, NavLink, redirect, useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, updateUser, } from '../store/userActions'

import data from '../assets/Parrot.json'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const firstName = useSelector((state)=> state.userDetails.firstName)
    const [loading, setLoading] = useState(false)
  

    

   
  



    const [credential, setCredential] = useState({})

    const [error, setError] = useState('')
    const handleChange = (e) =>{
        setCredential({
            ...credential,
            [e.target.name]: e.target.value
        })

    }
   

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credential.email || !credential.password) {
            setError('Both fields are required!');
            return;
        }
    try {
        setLoading(true)
    
        // Make the API request using fetch
        const response = await fetch('https://teekvillebackend.onrender.com/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(credential)
        });

        // Parse the response as JSON
        const result = await response.json();
        console.log(result);

        

        if (result.success === true) {
            // Dispatch the action to update the Redux store
            dispatch(updateUser({
                firstName: result.user.firstName, 
                lastName: result.user.lastName,
                email: result.user.email,
                token: result.token
            }));
           

            // Save the token to local storage and redirect to home
            localStorage.setItem('token', result.token);
            setLoading(false);
            navigate('/home');





            // const token = result.token;
            // localStorage.setItem('token', token);
          
            
             
            // setLoading(false)
            // navigate('/home')
            
        } else {
            setError(result.message);  // Set error message if login fails
        }
    } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while logging in.");  // Handle network or other errors
    }
};
  return (
    <>

    {/* mobile view */}
    
    <div className='px-5 lg:hidden'>
      
    <img src={Logo} className='mt-[70px] w-[177px] h-[79px] flex mx-auto'/>
    <h1 className='font-PoppinsMedium text-center text-[16px]'>Login to your account</h1>

    <div className='mt-14  '>
        <h1 className='font-Poppins text-[15px] '>Email</h1>
        <input type="text" name='email' placeholder='johndoe@gmail.com' className='py-3.5 pl-[9px] border-[1px] border-[#9FA3A8] w-full mt-[5px] rounded-lg' onChange={handleChange} />
    </div>
    <div className='mt-5  '>
        <h1 className='font-Poppins text-[15px]'>Password</h1>
        <input type="password" name='password' className='py-3.5 pl-[9px] border-[1px] border-[#9FA3A8] w-full mt-[5px] rounded-lg' onChange={handleChange}/>
    </div>
    {error && <h1>{error}</h1>}

    <h1 className='mt-3.5 flex justify-end text-[#1E5296]'>Forget Password</h1>
    {
        loading ? (
                <div className="flex flex-col items-center py-6">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-300 border-t-transparent mb-4"></div>
                <h1 className="text-lg font-OxygenBold text-gray-700">
                    Warming things up...
                </h1>
                <p className="text-sm text-gray-500 mt-1 text-center">
                    Our servers might be waking up. This usually takes just a moment.
                </p>
                </div>
                    
                ) :
   
            <button className='mt-3.5 py-2.5 bg-[#1E5296] text-white   w-full rounded-lg' onClick={handleLogin}>Login</button>
    }


    <NavLink to='/signup' className='mt-[11px] text-center font-Poppins text-[15px]'>Don’t have an account? <span className='text-[#1E5296]'>Sign up</span></NavLink>
    </div>


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
                    <h1 className='font-OxygenBold text-4xl'>Welcome back!</h1>
               
                    <div className='flex flex-row mt-2 gap-1' >
                        <p className='font-Oxygen text-[#645D5D] text-sm'>Don’t have an account?</p> 
                     <a href='/signup' className='font-OxygenBold text-[#1E5296] text-sm'>Sign Up</a>

                    </div>
                    

                </div>

                <div>
                     <div className='mt-8 w-full'>
                        <h1 className='font-OxygenBold text-sm '>Email Address</h1>
                        <input type="text" placeholder='johndoe@gmail.com' className='py-3.5 pl-[9px] border-[1px] border-[#9FA3A8] w-full mt-[5px] rounded-lg' onChange={handleChange} name='email' />
                    </div>
                    <div className='mt-4  '>
                        <h1 className='font-OxygenBold text-sm'>Password</h1>
                        <input type="password" placeholder='password' className='py-3.5 pl-[9px] border-[1px] border-[#9FA3A8] w-full mt-[5px] rounded-lg' onChange={handleChange} name='password'/>
                    </div>
                </div>
                    {error && <h1 className='text-red-500'>{error}</h1>}
                
                <div className='mt-8'>
                    {
                        loading ? (
                            <div className="flex flex-col items-center py-6">
                            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-300 border-t-transparent mb-4"></div>
                            <h1 className="text-lg font-OxygenBold text-gray-700">
                                Warming things up...
                            </h1>
                            <p className="text-sm text-gray-500 mt-1 text-center">
                                Our servers might be waking up. This usually takes just a moment.
                            </p>
                            </div>
                        
                        ) :
                        (<button className='mt-3.5 py-4 bg-[#1E5296] text-white   w-full rounded-lg font-OxygenBold text-' onClick={handleLogin}>Login</button>)
                    }

                    <div className='flex flex-row mt-[26px] gap-1 justify-center'>
                        <p className='font-Oxygen text-sm text-[#645D5D] '> Forgot Password?</p>
                        <a href="" className='text-[#1E5296] font-OxygenBold text-sm'>Recover</a>
                    </div>
                </div>


                <div className='mt-8'>
                    <h1 className='text-center font-OxygenBold text-sm'>Or</h1>
                    <div className='grid grid-cols-2 mt-6 gap-3'>
                        <div className='border-[1px] border-[#D0D5DD] py-4 flex justify-center rounded-[6px] shadow-sm gap-2 items-center' >
                            <img src={googleIcon} className='w-5 h-5' alt="" />
                            <h1 className='font-InterSemiBold'> Google</h1>
                        </div>
                        <div className='border-[1px] border-[#D0D5DD] py-4 flex justify-center rounded-[6px] shadow-sm gap-2 items-center' >
                            <img src={twitterIcon} className='w-5 h-5' alt="" />
                            <h1 className='font-InterSemiBold'> Twitter</h1>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>


    </div>
    </>
  )
}

export default Login