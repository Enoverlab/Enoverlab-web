import React from 'react'
import Hero from '../Components/Assessment/Landing/Hero'
import Header from '../Components/Header'
import styled from 'styled-components'
import Expect from '../Components/Assessment/Landing/Expect'
import Area from '../Components/Assessment/Landing/Area'
import { useState } from 'react'
import UserDataPop from '../Components/Assessment/Landing/Modal'

const AssessmentLanding = () => {
  const [popupIsOpen, setPopupIsOpen]= useState(false)
  function handleSwitch(){
    setPopupIsOpen(!popupIsOpen)
  }
  return (
    <StyledAssessmentLanding>
      <Header/>
      <Hero handleSwitch={handleSwitch}/>
      <Expect/>
      <Area handleSwitch={handleSwitch}/>
      <UserDataPop open={popupIsOpen} requestClose={handleSwitch}/>
    </StyledAssessmentLanding>
  )
}

export default AssessmentLanding

const StyledAssessmentLanding = styled.div`
  padding: 0 2.4rem 4.1rem 2.4rem;
  font-family: "Inter", serif;
  @media (min-width: 700px) {
    padding: 0rem 5.4rem;
  }
  @media (min-width: 1024px) {
    padding: 0rem 6.94vw 9rem 6.94vw;
  }
  
`
