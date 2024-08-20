import React from 'react'
import styled from 'styled-components'
import PriceHero from '../Components/Pricing/PriceHero'
import Header from '../Components/Header'
import Testimonies from '../Components/Pricing/Testimonies'
// import SuccessStories from '../Components/Pricing/SuccessStories'
import Footer from '../Components/Footer'
import StandardProgram from '../Components/Pricing/StandardProgram'
import { ClassTools } from '../Components/Pricing/ClassTools'
import Explore from '../Components/Pricing/Explore'
import { FaqSection } from '../Components/Pricing/FaqSection'
// import StandardOptions from '../Components/Pricing/StandardOptions'
import Testimonials from '../Components/Pricing/Testi'
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'
const Pricing = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (<div>
   {loading ? <LoadingScreen2/> : <div>
   <Header bg="#FFFDF7"/>
    <StyledPricing>
        <PriceHero/>
        <StandardProgram/>
        <ClassTools/>
        {/* <StandardOptions/> */}
        <Explore/>
        <Testimonials/>
        <Testimonies/>
        <FaqSection/>
    </StyledPricing>
    <Footer p="5rem 9.6rem"/>
    </div>}
  </div>)
}

export default Pricing

const StyledPricing = styled.div`
  background: #FFFDF7;
    @media (min-width: 1024px) {
      /* padding: 0 9.6rem; */
    }
`