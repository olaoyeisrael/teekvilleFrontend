
import './App.css'


import Login from './_auth/login'

import SignUp from './_auth/signUp'
import { Navigate, Route, Router, Routes } from 'react-router-dom'

import RootLayout from './_root/RootLayout'
import TakeTest from './_root/pages/TakeTest'
import CalculateCGPA from './_root/pages/CalculateCGPA'
import Home from './_root/pages/Home'
import Community from './_root/pages/Community'
import Schedule from './_root/pages/Schedule'
import RootLayoutLand from './_root/RootLayoutLand'
import Landing from './_root/landing'
import Academics from './_root/welcome/Academics'
import About from './_root/welcome/About'
import { Testimonial } from './_root/welcome/Testimonial'
import Contact from './_root/Contact'
import Blog from './_root/welcome/Blog'
import Apttest from './_root/Apttest'
import Profile from './_root/pages/Profile'
import Help from './_root/pages/Help'
import Invite from './_root/pages/Invite'
import PostDetails from './_root/pages/PostDetails'
import ProtectedRoute from './components/ProtectedRoute'






function App() {
  const token = localStorage.getItem('token')


  return (
   
    <main className='fle'>
    
    <Routes>
      {/* public pages */}
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>



      <Route index element={<Landing/>}/>

      <Route element={<RootLayoutLand/>}>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Testimonial' element={<Testimonial/>}/>
        <Route path='/blogpost' element={<Blog/>}/>

      </Route>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/apttest' element={<Apttest/>}/>
     
      

      {/* private pages */}
      
     

      <Route element={<ProtectedRoute/>}>
      <Route path='/' element={ <RootLayout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/taketest' element={<TakeTest/>}/>
        <Route path='/calculatecgpa' element={<CalculateCGPA/>}/>
        <Route path='/community' element={<Community/> }/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/profile' element={<Profile/> }/>
        <Route path='/help' element={<Help/> }/>
        <Route path='/invite' element={ <Invite/> }/>
        <Route path='/postDetails/:id' element={<PostDetails/>}/>

      </Route>

      </Route>
    </Routes>
    
  
 
       </main>
   
  
  )
}

export default App
