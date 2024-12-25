import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductManager = () => {
  return (
    <div className='h-screen w-[100%]'>
      <div className='bg-red-500 h-[10%]'>
        <h1>This is Product Header</h1>
      </div>
      <div className='w-[100%] h-[90%] flex'>
        <div className='h-[100%] bg-black w-[15%]'>
            <h1 className='text-white'>This is Product Sidebar</h1>
        </div>
        <div className='w-[85%]'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProductManager
