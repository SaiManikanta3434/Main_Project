import React from 'react' 
import Main_image from '../assets/frontend_assets/Home.jpg'
const Hero = () => { 
    return ( 
        <div className='flex flex-col sm:flex-row border border-gray-400'> 
            {/* Hero Left Side */} 
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gradient-to-r from-blue-400 to-blue-400 via-white'> 
                <div className='text-[#414141]'> 
                    <div className='flex items-center gap-2'> 
                        <p className='w-8 md:w-11 h-[2px] bg-blue-300'></p> 
                        <p className='font-medium text-sm md:text-base '>OUR BESTSELLERS</p> 
                    </div> 
                    <h1 className='font-bold text-5xl sm:py-3 lg:text-5xl leading-relaxed bg-gradient-to-r from-blue-600 to-pink-700 via-orange-600 bg-clip-text text-transparent'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-pink-500'></p>
                    </div>
                </div> 
            </div> 
            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={Main_image} alt="" />
        </div> 
    ) 
} 
export default Hero