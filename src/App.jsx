
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
     
      

      {/* private pages */}
      
     

      <Route  element={ <RootLayout/>}>
        <Route path='/home' element={token ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/taketest' element={token ? <TakeTest/> : <Navigate to='/login'/>}/>
        <Route path='/calculatecgpa' element={token ? <CalculateCGPA/> : <Navigate to='/login'/>}/>
        <Route path='/community' element={ token ? <Community/> : <Navigate to='/login'/>}/>
        <Route path='/Schedule' element={token ? <Schedule/> : <Navigate to='/login'/>}/>

      </Route>
    </Routes>
    
  
 
       </main>
   
  
  )
}

export default App
