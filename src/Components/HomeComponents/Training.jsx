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
        
        <HomeCard cardTitle={"Basic Program"} textColor={theme.color.light} cardText={"To understand the fundamentals of product management and kickstart your product manager career"} backgroundColor={theme.color.primary} >
        <div className="button-container">
        <PrimaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Advanced Program"}  textColor={theme.color.dark} cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"}  backLeft="20px"
        >
        <div className="button-container">
        <SecondaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard>

        
        <HomeCard cardTitle={"LevelUP Program"} textColor={theme.color.dark} cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"}>
        <div className="button-container">
        <SecondaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Cooperate Training"} textColor={theme.color.light} cardText={"To understand the fundamentals of product management and kickstart your product manager career"} backgroundColor={theme.color.primary} backLeft="20px"
        >
        <div className="button-container">
        <PrimaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard>
        
        </div>

        <div className="mobile-container">
      
        <HomeCard cardTitle={"Basic Program" }  textColor={theme.color.dark} cardText={"To understand the fundamentals of product management and kickstart your product manager career"}  backLeft="20px"
        >
        <div className="button-container">
        <SecondaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard>

        <HomeCard cardTitle={"Advanced Program"} textColor={theme.color.light} cardText={ "To learn the required knowledge, skills and tools to fully take up the role of a product manager"} backgroundColor={theme.color.primary} >
        <div className="button-container">
        <PrimaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard> 

        
        <HomeCard cardTitle={"LevelUP Program"} textColor={theme.color.dark} cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"}>
        <div className="button-container">
        <SecondaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Cooperate Training"} textColor={theme.color.light} cardText={"To understand the fundamentals of product management and kickstart your product manager career"} backgroundColor={theme.color.primary} backLeft="20px"
        >
        <div className="button-container">
        <PrimaryButton to="/pricing" buttText="Learn More"/>
        </div>
        </HomeCard>
        
        </div>
       
    </StyledTraining>
  )
}

export default Training

const StyledTraining = styled.div`
    background-color: #FFFDF7;
    height: 100%;
    min-height: 100%;
    position: relative;
    padding: 10% 0% 5% 0%;
    @media (max-width: 768px){
      height: 100%;
      min-height: 155vh;
      padding-bottom: 25%;
    }
    @media (max-height: 667px){
      min-height: 200vh;
    }
    .cardContainer{
      position: relative;
      padding: 5rem 10% 5rem 10%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 4.4375rem;
      position: relative;
      @media (max-width: 768px) {
        display: none;
      }
    }

    .mobile-container{
      display: none;
      @media (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        height: 100vh;
        grid-gap: 3rem;
        padding: 5rem 5% 0rem 9%;
       
      }
    }

    .button-container{
        position: absolute;
        bottom: 3.84375rem;
        margin-top: 3rem;
        width: 35%;
        @media(max-width: 768px){
          width:45%;
          bottom: 1.7rem;

        }
    }
`