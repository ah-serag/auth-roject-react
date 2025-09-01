import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     {/* <div className='w-full p-3 top-0 fixed flex items-center justify-center bg-emerald-400 '>
       <h1 className='font-bold text-2xl'>Authenticaton</h1>
     </div> */}
    <Outlet/>
    </>
  )
}

export default Layout












