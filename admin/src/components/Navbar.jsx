import React from 'react'
import Brand from '../assets/admin_assets/codelogo.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-white'>
        <img className='w-[max(10%, 80px)] h-24' src={Brand} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>LogOut</button>
      
    </div>
  )
}

export default Navbar
