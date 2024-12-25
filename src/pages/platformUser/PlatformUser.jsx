import React from 'react'
import { Outlet } from 'react-router-dom'

const PlatformUser = () => {
  return (
    <div className='flex h-[100%] w-[100%]'>
      <div className='bg-red-500 h-[10%]'>
        <h1>This is Platform User Header</h1>
      </div>
      <div className='w-[100%] h-[90%] flex'>
        <div className='h-[100%] bg-black w-[15%]'>
            <h1 className='text-white'>This is Platform User Sidebar</h1>
        </div>
        <div className='w-[85%]'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PlatformUser
