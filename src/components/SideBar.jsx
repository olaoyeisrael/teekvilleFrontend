import React, { useState } from 'react'
import Logo from '../assets/Logo1.png'
import avatar from '../assets/Avatarsdash.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import home from '../assets/home-alt.png'
import calculator from '../assets/ion_calculator-outline.png'
import laptop from '../assets/laptop.png'
import users from '../assets/users.png'
import alarm from '../assets/alarm-clock.png'
import pencil from '../assets/pencil.png'
import user from '../assets/user-circle.png'
import headset from '../assets/headset.png'
import gift from '../assets/gift.png'
import signout from '../assets/sign-out.png'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../store/userActions'
import { use } from 'react'
import PostModal from '../_root/PostModal'
import Modal from './Modal'




const SideBar = () => {
    const [showPostModal, setShowPostModal] = useState(false);
   

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firstName = useSelector((state)=> state.userDetails.firstName)
    const lastName = useSelector((state)=> state.userDetails.lastName)
    const email = useSelector((state)=> state.userDetails.email)
    const navDetails = [
    { to: '/home', icon: home, label: 'Home' },
    { to: '/taketest', icon: laptop, label: 'Take a Test' },
    { to: '/calculatecgpa', icon: calculator, label: 'Calculate CGPA' },
    { to: '/community', icon: users, label: 'Community' },
    { to: '/schedule', icon: alarm, label: 'Schedule' },
    { to:'', icon: pencil, label: 'Make a Post' },
]


 


const handleLogout = () =>{

    
    localStorage.clear()

    dispatch(updateUser({
        lastName: '',
        firstName: '',
        email: ''
    }))
    navigate('/login')

}

  return (
    <nav className='flex flex-col min-w-[200px] xl:min-w-[272px] bg-white pt-6' >
        <img src={Logo} className='w-[200px] h-[50p]' />
        <div className='px-2 mt-[18px]'>
            <div className='pb-4'>
                {navDetails.map((item)=>(
                        <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={(e) => {
                if (item.label === 'Make a Post') {
                  e.preventDefault(); // Prevent the navigation
                  setShowPostModal(true); // Show the modal
                }
              }}
                        className={({isActive})=>`py-3 px-4 flex flex-row items-center gap-3 transition-colors ${
                            isActive
                            ? 'text-[#1E5296] font-OxygenBold bg-[#1E529626] border-[#1E5296] border-[1px] rounded-sm'
                            : 'text-gray-700 font-Oxygen hover:text-[#1E5296]'
                            }`}
                        >
                        
                            <img src={item.icon} className="w-5 h-5" alt="" />
                            <h1 className="text-sm">{item.label}</h1>   
                        </NavLink>

                    ))}

               
                {/* <NavLink to='/home' >
                <div className='py-3 flex flex-row items-center gap-3' >
                    <img src={home} className='w-5 h-5'/> 
                    <h1 className='font-OxygenBold text-sm'>Home</h1>
                </div>
            
                </NavLink>
                <Link to='/taketest'>
                <div className='py-3 flex flex-row items-center gap-3'>
                    <img src={laptop} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Take a Test</h1>
                </div>
                </Link>
                <Link to='/calculatecgpa'>
                <div className='py-3 flex flex-row items-center gap-3'>
                    <img src={calculator} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Calculate CGPA</h1>
                </div>
                </Link>
                <Link to='/community'>
                <div className='py-3 flex flex-row items-center gap-3'>
                    <img src={users} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Community</h1>
                </div>
                </Link>
                <Link to='/schedule'>
                 <div className='py-3 flex flex-row items-center gap-3'>
                    <img src={alarm} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm '>Schedule</h1>
                </div>
                </Link>
                <Link>
                 <div className='py-3 flex flex-row items-center gap-3'>
                    <img src={pencil} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Make a post</h1>
                </div>
                </Link> */}

            </div>
            {/* <ul className='flex flex-col gap-[3px] pb-4'>
                <a href="" className='font-OxygenBold text-sm'>Home</a>
                <a href="" className='font-OxygenBold text-sm'>Take a Test</a>
                <a href="" className='font-OxygenBold text-sm'>Calculate CGPA</a>
                <a href="" className='font-OxygenBold text-sm'>Community</a>
                <a href="" className='font-OxygenBold text-sm'>Schedule</a>
                <a href="" className='font-OxygenBold text-sm'>Make a post</a>
            </ul> */}

        </div>
        

        <div className='mt-[186px]'>
            <div className='px-2 pb-3'>
                <div className='py-3 px-4 flex flex-row items-center gap-3'>
                    <img src={user} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Profile Settings</h1>
                </div>
                <div className='py-3 px-4 flex flex-row items-center gap-3'>
                    <img src={headset} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Help Center</h1>
                </div>
                <div className='py-3 px-4 flex flex-row items-center gap-3'>
                    <img src={gift} className='w-5 h-5'/> 
                    <h1 className='font-Oxygen text-sm'>Invite friends</h1>
                </div>
           
            </div>
           
            <div className='mt-[10px] py-2'>
                <div className='py-3 px-4 flex xl:justify-between items-center flex-col xl:flex-row'>
                    <div className='flex flex-row gap-1  xl:gap-3'>
                        <img src={avatar} className='w-10 h-10' alt="" />
                        <div className=''>
                            <h1 className='font-OxygenBold text-sm'>{firstName} {lastName}</h1>
                            <h2 className='font-Inter text-sm text-[#475367]'>{email}</h2>

                        </div>
                        
                    </div>
                    <button onClick={handleLogout}>
                    <img src={signout} alt="" className='w-5 h-5' />
                    </button>

                </div>

            </div>

        </div>








       


        { showPostModal && 
        <Modal open={showPostModal} onClose={()=>setShowPostModal(false)}>
            <PostModal onClose={()=>setShowPostModal(false)}/>
          
        </Modal>

    }
        
        

    </nav>
  )
}

export default SideBar