import React from 'react'
import Hero from '../Components/Diaspora/Hero'
import Details from '../Components/Diaspora/Details'
import Coaching from '../Components/Diaspora/Coaching'
// import PricingAbout from '../Components/Diaspora/About'
import AboutProg from '../Components/Diaspora/AboutProg'
import Testimonies from '../Components/Pricing/Testimonies'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Placement from '../Components/Diaspora/Placement'
import Started from '../Components/Diaspora/Started'
const Diaspora = () => {
  return (
    <div>
        <Header  />
        <Hero/>
        <AboutProg/>
        <Details/>
        <Coaching/>
        <Placement/>
        <Testimonies/>
        <SuccessStories/>
        {/* <PricingAbout/> */}
        <Started/>
        <Footer/>
    </div>
  )
}

export default Diaspora