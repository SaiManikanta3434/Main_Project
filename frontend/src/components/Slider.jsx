import React, {useEffect, useState} from 'react'
import Summer from '../assets/frontend_assets/summer.jpg'
import Cool from '../assets/frontend_assets/fifty.jpg'
import Fashion from '../assets/frontend_assets/Stylish.jpg'
import Look from '../assets/frontend_assets/Newlook.jpg'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



const Slider = () => {

    const slides = [Summer, Cool, Fashion, Look]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1)

    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length - 1
        setCurrentIndex(isLastSlide ? 0 : currentIndex + 1)

    }

    useEffect(()=>{
        const interval = setInterval(() =>{
            nextSlide()
        }, 3000)
        return() => clearInterval(interval)
    },[currentIndex])
 
    

  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        <img
          src={slides[currentIndex]}
          alt='slide'
          className='w-full h-full object-fill rounded-2xl duration-500'
        />
      </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10'
        onClick={prevSlide}>
            <FaArrowLeft size={30} />
        </div>

        {/* Right Arrow */}
        <div
        className='hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-10'
        onClick={nextSlide}
      >
        <FaArrowRight size={30} />
      </div>
      
    </div>
  )
}

export default Slider
