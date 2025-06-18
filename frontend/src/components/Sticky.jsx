import React from 'react'
import Group from '../assets/frontend_assets/group_image.png';
import Everything from '../assets/frontend_assets/everything.png';
import Eco from '../assets/frontend_assets/Eco.png';
import Hassle from '../assets/frontend_assets/hassle.png';


const Sticky = () => {
  return (
    <div className='flex flex-col gap-4 font-Sans sticky'>
        <div className='w-full h-auto sticky top-[50px]'>
            <img className='w-full h-auto bg-cover' src={Group} alt="" />
        </div>

        <div className=' w-full h-auto sticky top-[50px]'>
            <img className='w-full h-auto bg-cover' src={Everything} alt="" />
        </div>

        <div className=' w-full h-auto sticky top-[50px]'>
            <img className='w-full h-auto bg-cover' src={Eco} alt="" />
        </div>

        <div className=' w-full h-auto sticky top-[50px]'>
            <img className='w-full h-auto bg-cover' src={Hassle} alt="" />
        </div>
    </div>
  )
}

export default Sticky
