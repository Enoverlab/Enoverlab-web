import React from 'react'
import AboutCorporate from '../Components/Corporate/AboutCorporate'
import Hero from '../Components/Corporate/Hero'
import Training from '../Components/Corporate/Training'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Started from '../Components/HomeComponents/Started'

const Corporate = () => {
  return (
    <div>
        <Header bgColor={"#0046FF"} navColor="#FFFFFF" bgColorMobile="#FFFDF7" blueProps/>
        <Hero />
        <AboutCorporate/>
        <Training/>
        <Started/>
        <Footer />
    </div>
  )
}

export default Corporate