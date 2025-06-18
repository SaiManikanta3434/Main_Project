import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-36 h-auto ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Codedale is your one-stop online destination for modern, reliable, and affordable products across a wide range of categories. Built with passion and precision, our e-commerce store blends technology with customer convenience to deliver a smooth and enjoyable shopping experience. Whether you're looking for the latest fashion trends, lifestyle accessories, or tech essentials, Codedale offers carefully curated collections that cater to every need. With a focus on quality, secure transactions, and responsive support, we’re committed to making your online shopping simple, smart, and satisfying.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 mt-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 mt-10'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 mt-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 mt-10'>
                    <li>+91 7036143077</li>
                    <li>saivarikuti3434@gmail.com</li>
                </ul>
            </div>
            
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ SaiManikanta_Varikuti - All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
