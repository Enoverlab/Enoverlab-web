import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Hero from '../Components/About/Hero'
const About = () => {
  return (
    <StyledAbout>
       <Header/>
       <Hero/>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div``