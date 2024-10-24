import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Hero from '../Components/About/Hero'
import Footer from '../Components/Footer'
import WhoWeAre from '../Components/About/WhoWeAre'
import Provides from '../Components/About/Provides'
import Empowering from '../Components/About/Empowering'
import News from '../Components/About/News'
const About = () => {
  return (
    <StyledAbout>
       <Header bgColor="#FFFDF7"  bgColorMobile="#FFFDF7" />
       <Hero/>
       <WhoWeAre/>
       <Provides/>
       <Empowering/>
       <News/>
       <Footer p="5rem 9.6rem 0 9.6rem"/>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div`
background-color: #FFFDF7;
`