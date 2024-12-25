import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex h-screen w-[100vw]'>
        <div className='bg-black h-[100%] flex justify-center items-center w-[50%]'>
            <h1 className='text-white font-semibold'>Welcome TO Auth Project</h1>
        </div>

        <div className='w-[50%] h-[100%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout
