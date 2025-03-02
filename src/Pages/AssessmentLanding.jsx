import React from 'react'
import Hero from '../Components/Assessment/Landing/Hero'
import Header from '../Components/Header'
import styled from 'styled-components'

const AssessmentLanding = () => {
  return (
    <StyledAssessmentLanding>
      <Header/>
      <Hero/>
    </StyledAssessmentLanding>
  )
}

export default AssessmentLanding

const StyledAssessmentLanding = styled.div`
  padding: 0 2.4rem;
  font-family: "Inter", serif;
  @media (min-width: 700px) {
    padding: 0rem 5.4rem;
  }
  @media (min-width: 1024px) {
    padding: 0rem 6.94vw;
  }
  
`
