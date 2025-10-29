



import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Avatar from '../assets/Avatars.png'
import aaalogo2 from '../assets/aaalogo2.png'
import googleIcon from '../assets/GoogleIcon.png'
import twitterIcon from '../assets/TwitterIcon.png'

function SignUp() {
     const [credential, setCredential] = useState({
        firstName: '',
        lastName: '',
        email: '',
        school: '',
        faculty: '',
        department: '',
        password: '',
        confirmPassword: ''
     })

      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
        const handleChange = (e) =>{
            setCredential({
                ...credential,
                [e.target.name]: e.target.value
            })
    
        }

        const handleSubmit = async(e) => {
        e.preventDefault();

        if (
            !credential.firstName || !credential.lastName || !credential.email ||
            !credential.school || !credential.faculty || !credential.department ||
            !credential.password || !credential.confirmPassword
        ) {
            setError('All fields are required!');
            setSuccess('');
            return;
        }

        if (credential.password !== credential.confirmPassword) {
            setError('Passwords do not match');
            setSuccess('');
        } else {
            setError('');
            setSuccess('Account created successfully!');

            try {
                const response = await fetch('https://teekvillebackend.onrender.com/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credential),
                });

                const result = await response.json();

                if (result.success == true) {
                    const token = result.token
                    localStorage.setItem('token', token)
                    window.location.href='/home'

                    
                } else {
                    setError(result.error);
                }
            } catch (error) {
                console.error("Error:", error);
                setError("An error occurred while signing up.");
            }
        
        }
        
    };

        console.log(credential)
  return (
    <>

    {/* mobile view */}
    <section className='px-5 lg:hidden'>
    <img src={Logo} className='mt-[30px] w-[177px] h-[79px] flex mx-auto'/>
    <h1 className='font-PoppinsMedium text-center text-[16px]'>Sign up to Teekville</h1>

    <div className='mt-4 grid grid-cols-3 gap-x-[18px] gap-y-[15px]'>
                    <div className='col-span-3'>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px] '>First name</h1>
                        <input  name='firstName' type="text"  placeholder="John" className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1'  onChange={handleChange}/>
                    </div>
                     <div className='col-span-3'>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px]'>Last name</h1>
                        <input name='lastName' type="text"  placeholder="Doe" className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1'  onChange={handleChange}/>
                    </div>

                    <div className='col-span-3 '>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px]'>Email address</h1>
                        <input name='email' type="text" placeholder='Johndoe@gmail.com' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1' onChange={handleChange} />
                    </div>
                     <div className='col-span-3 '>
                        <label className='font-Poppins text-[#454F5B] text-[15px]'>School</label>
                        <select name='school' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1' onChange={handleChange}>
                            <option value="--">--</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Law">Law</option>
                        </select>
                    </div>

                    <div className='col-span-1'>
                        <label className='font-Poppins text-[#454F5B] text-[15px]'>Faculty</label>
                        <select name="faculty" id='' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1' onChange={handleChange}>
                            <option value="--">--</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Law">Law</option>
                        </select>
                    </div>
                    <div className='col-span-2'>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px]'>Department</h1>
                        <select name='department' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1' onChange={handleChange}>
                            <option value="--">--</option>
                            <option value="SystemsEngineering">Systems Engineering</option>
                            <option value="ElectricalEngineering">Electrical Engineering</option>
                            <option value="Microbiology">MicroBiology</option>
                        </select>
                    </div>

                    <div className='col-span-3 '>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px]'>Create password</h1>
                        <input name='password' type="password" placeholder='Enter at least eight characters' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1'  onChange={handleChange}/>
                    </div>

                    <div className='col-span-3 '>
                        <h1 className='font-Poppins text-[#454F5B] text-[15px]'>Confirm password</h1>
                        <input name="confirmPassword" type="password" placeholder='Re enter eight characters' className='rounded-lg border-[1px] border-[#D0D5DD] py-[15px] px-4 w-full mt-1' onChange={handleChange}/>
                    </div>
                    {/* Display Error Message */}
                    {error && <p className='text-red-500 mt-2'>{error}</p>}

                    <button className='py-4 bg-[#1E5296] text-white rounded-[10px] col-span-3 font-PoppinsMedium text-[16px] mt-[21px]' onClick={handleSubmit}>Continue</button>

                </div>

    <h1 className='mt-[11px] text-center font-Poppins text-[15px] text-[#9FA3A8]'>Already have an account?  <span className='text-[#1E5296]'>Login</span></h1>
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
                    <h1 className='font-OxygenBold text-4xl'>Create a new account</h1>
                    <p className='font-Oxygen text-sm mt-2 text-[#645D5D]'>Join thousands of students using teekville</p>
                </div>
                <div className='mt-4 grid grid-cols-2 gap-x-[18px] gap-y-4'>
                    <div>
                        <h1 className='font-OxygenBold text-sm'>First name</h1>
                        <input name="firstName" type="text" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onChange={handleChange} />
                    </div>
                     <div>
                        <h1 className='font-OxygenBold text-sm'>Last name</h1>
                        <input name='lastName' type="text" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onChange={handleChange} />
                    </div>

                    <div className='col-span-2 '>
                        <h1 className='font-OxygenBold text-sm'>Email address</h1>
                        <input name='email' type="text" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1'  onChange={handleChange}/>
                    </div>
                     <div className='col-span-2 '>
                        <label className='font-OxygenBold text-sm'>School</label>
                        <select id='' name='school'  className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onClick={handleChange}>
                            <option value="--">--</option>
                            <option value="Unilag">Unilag</option>
                            <option value="UI">University of Ibadan</option>
                            <option value="Yabatech">Yabatech</option>
                        </select>
                    </div>

                    <div className=''>
                        <h1 className='font-OxygenBold text-sm'>Faculty</h1>
                        <select name='faculty' type="text" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onClick={handleChange}>
                            <option value="--">--</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Law">Law</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                    <div className=''>
                        <h1 className='font-OxygenBold text-sm'>Department</h1>
                        <select name='department' type="text" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onClick={handleChange}>
                            <option value="--">--</option>
                            <option value="SystemsEngineering">Systems Engineering</option>
                            <option value="ElectricalEngineering">Electrical Engineering</option>
                            <option value="Microbiology">MicroBiology</option>
                        </select>
                    </div>

                    <div className='col-span-2 '>
                        <h1 className='font-OxygenBold text-sm'>Create password</h1>
                        <input name='password' type="password" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onChange={handleChange} />
                    </div>

                    <div className='col-span-2 '>
                        <h1 className='font-OxygenBold text-sm'>Confirm password</h1>
                        <input name='confirmPassword' type="password" className='rounded-md border-[1px] border-[#D0D5DD] py-[18px] px-4 w-full mt-1' onChange={handleChange} />
                    </div>
                    {error && <p className='text-red-500 mt-2'>{error}</p>}
                    <button onClick={handleSubmit} className='py-4 bg-[#1E5296] text-white rounded-md col-span-2 font-OxygenBold text-[16px]'>Sign Up</button>

                </div>
                

            </div>

        </div>


    </div>
    </>
  )
}

export default SignUp