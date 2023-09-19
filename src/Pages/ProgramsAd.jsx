import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/ProgramsAd/PriceHero'
import Header from '../Components/Header'
import PricingAbout from '../Components/ProgramsAd/PricingAbout'
import Testimonies from '../Components/ProgramsAd/Testimonies'
import SuccessStories from '../Components/ProgramsAd/SuccessStories'
import Footer from '../Components/Footer'
import PricingBanner from '../Components/Pricing/PricingBanner'


const ProgramsAd = () => {
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

export default ProgramsAd

const StyledPricing = styled.div``