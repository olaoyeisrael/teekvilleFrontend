import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import hamburger from '../assets/Frame1618868618.png'
import cancel from '../assets/cancel.png'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
//    <nav className='container px-4 flex flex-row justify-between items-center top-0 bg-[#FFFFFF]'>
//     <img src={logo} className='w-[177px]'/>
//     <img src={hamburger} className='h-6 w-6'/>
//    </nav>

   <nav className='px-4 xl:px-[98.5px] fixed top-0 z-50 bg-[#F7F8FA] w-screen'>
    <div className='lg:py-6 py-4.5 flex justify-between items-center'>
      <Link to='/'>
        <img  src={logo} className='w-[157px] h-[56px]'/>
        </Link>
        <div className='lg:flex justify-between gap-10 hidden'>
            <div className='py-4 flex justify-between gap-2.5 xl:gap-6'>
                <NavLink to='/about' className='font-PoppinsSemiBold'> About</NavLink>
                <NavLink to='/academics' className='font-PoppinsSemiBold'>Academics</NavLink>
                <NavLink to='/' className='font-PoppinsSemiBold'>Community</NavLink>
                <NavLink to='/BlogPost' className='font-PoppinsSemiBold'>Blog Post</NavLink>
                <NavLink to='/testimonial' className='font-PoppinsSemiBold'>Testimonials</NavLink>
                <NavLink to='/contactus' className='font-PoppinsSemiBold'>Contact Us</NavLink>
            </div>
            <div className='flex justify-between gap-5'>
               
                <NavLink to='/login' className='px-6 py-4 text-[#1E5296] rounded-[6px] border-[1px] border-[#1E5296] hover:bg-[#1E5296] hover:text-white font-PoppinsSemiBold'>Login</NavLink>
                <NavLink to='signup' className='bg-[#1E5296] px-6 py-4 rounded-[6px] text-white hover:bg-white hover:text-[#1E5296] font-PoppinsSemiBold'>SignUp</NavLink>
            </div>
        </div>
     {!isMenuOpen&&<img src={hamburger} className='h-6 w-6 lg:hidden' onClick={handleMenuToggle}/>}
     {isMenuOpen && <img src={cancel} className='h-6 w-6 lg:hidden' onClick={handleMenuToggle} />}
    </div>
    {isMenuOpen&&(
      <ul className='absolut z-50 bg-[#F7F8FA] w-screen flex flex-col gap-6 pb-4  '>
        
        
        <NavLink to='/academics' className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>Academics</NavLink>
        <NavLink to='/testimonial' className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>Testimonials</NavLink>
        <NavLink className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>Community</NavLink>
        <NavLink to= '/contactus' className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>Contact Us</NavLink>
        <NavLink to='/about' className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}> About Us</NavLink>
        <NavLink className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>FAQs</NavLink>
        <NavLink to='/login' className='font-PoppinsSemiBold' onClick={()=> setIsMenuOpen(false)}>Login</NavLink>
        <NavLink to='/signup' className='font-PoppinsSemiBold bg-[#1E5296] text-white py-2.5 rounded-xl text-center px-10 flex  mx-auto ' onClick={()=> setIsMenuOpen(false)}>Create an account</NavLink>


    </ul>)}
   

   </nav>
  )
}

export default NavBar