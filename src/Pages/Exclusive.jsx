import React from 'react'
import Details from '../Components/Exclusive/Details'
import Hero from '../Components/Exclusive/Hero'
import Reason from '../Components/Exclusive/Reason'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Videosect from '../Components/Exclusive/Videosect'
import Footer from '../Components/Footer'

const Exclusive = () => {
  return (
    <div>
        <Hero />
        <Reason/>
        <Details/>
        <Videosect/>
        <SuccessStories/>
        <Footer/>
    </div>
  )
}

export default Exclusive