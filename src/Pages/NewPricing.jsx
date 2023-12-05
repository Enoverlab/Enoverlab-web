import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/NewPrograms/PriceHero'
import Header from '../Components/Header'
import PricingAbout from '../Components/NewPrograms/PricingAbout'
import Testimonies from '../Components/NewPrograms/Testimonies'
import SuccessStories from '../Components/NewPrograms/SuccessStories'
import Footer from '../Components/Footer'
// import PricingBanner from '../Components/NewPrograms/PricingBanner'
import Testimonials from '../Components/NewPrograms/Testimonials'
import Banner from '../Components/NewPrograms/Banner'
import {ClassTools} from '../Components/NewPrograms/ClassTools'
const Pricing = () => {
  return (
    <StyledPricing>
          <Header bgColor="#FFFDF7"  bgColorMobile="#FFFDF7"/>
          {/* <PricingBanner/> */}
        <PriceHero/>
       <ClassTools/>
        <Testimonials/>
        <Banner/>
        <PricingAbout/>
        <Testimonies/>
        <SuccessStories/>
        <Footer/>
    </StyledPricing>
  )
}

export default Pricing

const StyledPricing = styled.div``