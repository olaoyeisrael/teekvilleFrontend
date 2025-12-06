import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='grid grid-cols-[52px_minmax(300px,_1fr)] md:grid-cols-[200px_minmax(300px,_1fr)] lg:grid-cols-[270px_minmax(300px,_1fr)] bg-[#F9FAFB]'>
      <div className=''>
        <SideBar/>
        </div>
        <section>
            <Outlet/>
        </section>
    </div>
  )
}

export default RootLayout