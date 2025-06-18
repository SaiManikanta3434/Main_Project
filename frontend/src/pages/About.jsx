import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title  text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Codedale, we're more than just an online store. We're a curated digital marketplace built by developers, for everyone. Whether you're hunting for the latest tech gadgets, trendy apparel, or daily essentials, our mission is to provide a seamless shopping experience powered by modern web technologies.</p>
            <p>we're redefining the e-commerce experience with the power of clean code and smart design. Built by developers with a passion for performance and precision, Codedale isn’t just a store — it’s a digital experience crafted for the modern shopper.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Codedale, our mission is to simplify and enhance the online shopping experience through innovation, efficiency, and trust.Deliver high-quality products that customers love and rely on and Create a seamless and enjoyable shopping journey — from discovery to delivery.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col gap-2 md:gap-2 md:flex-row text-sm mb-20'>
        <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 hover:scale-105 transition-transform ease-in-out duration-300'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Codedale, quality is at the heart of everything we do. From the products we offer to the platform we’ve built, our commitment to excellence ensures that every detail is checked, tested, and optimized. We work closely with trusted suppliers and vendors to source products that meet our high standards for durability, functionality, and value.</p>
        </div>
        <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 hover:scale-105 transition-transform ease-in-out duration-300'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Codedale, convenience isn’t just a feature — it’s a priority. We’ve designed every aspect of our online store to make your shopping experience as smooth, fast, and hassle-free as possible. From intuitive navigation and smart search to secure payments and streamlined checkout, everything is built to save you time and effort.</p>
        </div>
        <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 hover:scale-105 transition-transform ease-in-out duration-300'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Codedale, we believe that great service builds lasting trust. Our customer support team is dedicated to providing timely, thoughtful, and effective assistance — every step of the way. Whether you have a question before a purchase, need help with your order, or require post-sale support, we’re here to ensure your experience is smooth and satisfying.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
