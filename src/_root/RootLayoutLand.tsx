import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayoutLand = () => {
  return (
    <div className=''>
        <NavBar/>
        <section>
            <Outlet />
        </section>

        <Footer/>

    </div>
    
  )
}

export default RootLayoutLand