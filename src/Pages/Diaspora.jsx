import React from 'react'
import Hero from '../Components/Diaspora/Hero'
import Details from '../Components/Diaspora/Details'
import Coaching from '../Components/Diaspora/Coaching'
import PricingAbout from '../Components/Diaspora/About'
import AboutProg from '../Components/Diaspora/AboutProg'
import Testimonies from '../Components/Pricing/Testimonies'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Diaspora = () => {
  return (
    <div>
        <Header bgColor="#fff" bgColorMobile="#FFF" />
        <Hero/>
        <AboutProg/>
        <Details/>
        <Coaching/>
        <PricingAbout/>
        <Testimonies/>
        <SuccessStories/>
        <Footer/>
    </div>
  )
}

export default Diaspora