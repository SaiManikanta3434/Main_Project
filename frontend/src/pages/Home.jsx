import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Sticky from '../components/Sticky'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Slider/>
        <LatestCollection/>

        <Sticky />
        <BestSeller/>
        <OurPolicy/>
        <NewsletterBox/>
      
    </div>
  )
}

export default Home
