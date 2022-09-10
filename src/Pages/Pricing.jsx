import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/Pricing/PriceHero'
import Header from '../Components/Header'
import PricingAbout from '../Components/Pricing/PricingAbout'
import Testimonies from '../Components/Pricing/Testimonies'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Footer from '../Components/Footer'


const Pricing = () => {
  return (
    <StyledPricing>
          <Header/>
        <PriceHero/>
        <PricingAbout/>
        <Testimonies/>
        <SuccessStories/>
        <Footer/>
    </StyledPricing>
  )
}

export default Pricing

const StyledPricing = styled.div``