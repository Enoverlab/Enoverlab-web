import React from 'react'
import styled from 'styled-components'
import HomeCard from './HomeCard'
import {theme} from '../../Utils/Theme'
import { SecondaryButton, PrimaryButton } from '../../Utils/Buttons'
import { H3, H4 } from '../../Utils/Typograpyhy'

const Training = () => {
  return (
    <StyledTraining>
       <H3 fontWeight={"500"} color={theme.color.dark}>
       Our Training Programs
       </H3>
       <H4 fontWeight={"300"} color={theme.color.dark}>
       to become a skilled product manager
       </H4>
        <div className="cardContainer">
        
        <HomeCard cardTitle={"Basic Class"} textColor={theme.color.dark} cardText={"To understand the fundamentals of product management and kickstart your product manager career"}>
        <div className="button-container">
        <SecondaryButton to="/" buttText="View Basic Class"/>
        </div>
        </HomeCard>
     
        
        <HomeCard cardTitle={"Advanced Class"} textColor={theme.color.dark} cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"} backgroundColor={theme.color.tertiary}
        backLeft="20px"
        >
        <div className="button-container">
        <PrimaryButton to="/" buttText="View Advanced Class"/>
        </div>
        </HomeCard>
        </div>
       
    </StyledTraining>
  )
}

export default Training

const StyledTraining = styled.div`
    margin-top: 3rem;
    background-color: #FFFDF7;
    min-height: 100vh;
    position: relative;
    padding: 5% 0% 5% 0%;
    @media (max-width: 768px){
      padding-bottom: 20%;
    }
    .cardContainer{
      position: relative;
      padding: 5rem 5% 5rem 15%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        height: 100vh;
        grid-gap: 3rem;
        padding: 5rem 10%;
      }
    }
    .button-container{
        margin-top: 3rem;
        width: 50%;

        @media(max-width: 768px){
          width:70%;
        }
    }
`