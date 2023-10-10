import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/PMP/PriceHero'
import Header from '../Components/Header'
import PricingAbout from '../Components/Pricing/PricingAbout'
import Testimonies from '../Components/Pricing/Testimonies'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Footer from '../Components/Footer'
import PricingBanner from '../Components/Pricing/PricingBanner'


const PMP = () => {
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

export default PMP

const StyledPricing = styled.div``