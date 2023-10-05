import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/Upskill/PriceHero'
import Header from '../Components/Header'
import PricingAbout from '../Components/Upskill/PricingAbout'
import Testimonies from '../Components/Upskill/Testimonies'
import SuccessStories from '../Components/Upskill/SuccessStories'
import Footer from '../Components/Footer'
import PricingBanner from '../Components/Pricing/PricingBanner'


const Upskill = () => {
  return (
    <StyledPricing>
          <Header bgColor="#FFFDF7"  bgColorMobile="#FFFDF7"/>
          {/* <PricingBanner/> */}
        <PriceHero/>
        <PricingAbout/>
        <Testimonies/>
        <SuccessStories/>
        <Footer/>
    </StyledPricing>
  )
}

export default Upskill

const StyledPricing = styled.div``