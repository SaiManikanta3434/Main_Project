import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Stay ahead of the curve by subscribing to our newsletter! Be the first to discover new arrivals, exclusive offers, and special discounts—delivered straight to your inbox. Join our community of savvy shoppers and never miss out on the latest trends, limited-time deals, and insider updates from Codedale. Sign up now and enjoy a seamless shopping experience with perks made just for you!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-l-lg' >
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-lg'>SUBSCRIBE</button>
        </form>      
    </div>
  )
}

export default NewsletterBox
