import React from 'react'
import Hero from '../Components/Diaspora/Hero'
import Details from '../Components/Diaspora/Details'
import Coaching from '../Components/Diaspora/Coaching'
import PricingAbout from '../Components/Diaspora/About'
import AboutProg from '../Components/Diaspora/AboutProg'
import Testimonies from '../Components/Pricing/Testimonies'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Header from '../Components/DiasporaHeader'
import Footer from '../Components/Footer'
import Placement from '../Components/Diaspora/Placement'
import Started from '../Components/Diaspora/Started'
const Diaspora = () => {
  return (
    <div>
        <Header bgColor="#fff" bgColorMobile="#FFF" />
        <Hero/>
        <AboutProg/>
        <Details/>
        <Coaching/>
        <Placement/>
        <PricingAbout/>
        <Started/>
      /
    </div>
  )
}

export default Diaspora