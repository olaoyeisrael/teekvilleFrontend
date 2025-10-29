import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='flex flex-row '>
        <SideBar/>
        <section>
            <Outlet/>
        </section>
    </div>
  )
}

export default RootLayout