import React from 'react'
import styled from 'styled-components'
import ExecutiveAbout from '../Components/Executive/ExecutiveAbout'
import Hero from '../Components/Executive/Hero'
import Training from '../Components/Executive/Training'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Started from '../Components/HomeComponents/Started'
const Executive = () => {
  return (
    <StyledExecutive>
        <Header bgColor="#FFFDF7"  bgColorMobile="#FFFDF7"/>
        <Hero/>
        <ExecutiveAbout/>
        <Training/>
        <Started/>
        <Footer/>
    </StyledExecutive>
  )
}

export default Executive

const StyledExecutive = styled.div``