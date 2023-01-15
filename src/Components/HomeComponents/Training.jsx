import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../../Utils/Buttons'
import { theme } from '../../Utils/Theme'
import { H3, H4 } from '../../Utils/Typograpyhy'
import HomeCard from './HomeCard'

const Training = () => {
  return (
    <StyledTraining>
       <H3 fontWeight={"500"} color={theme.color.dark} mobileLineHeight="100%">
       Our Training Programs
       </H3>
       <H4 fontWeight={"300"} color={theme.color.dark} paddingTop="0.5rem" mobileFontSize="1.125rem" mobileLineHeight="100%">
       to become a skilled product manager
        </H4>
        <div className="cardContainer">
        <HomeCard cardTitle={"Basic Program"}  textColor={theme.color.light} cardText={"This is an introductory training for anyone trying to understand the basics of product management"}   height="26.625rem"
        backgroundColor={theme.color.primary}
        >
        <div className="button-container">
        <PrimaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard>

        <HomeCard cardTitle={"Advanced Program"} textColor={theme.color.dark} cardText={"This program is for anyone just starting out in product management to learn the required knowledge, skills & tools to become a skilled Product Manager"}  height="26.625rem"
        backLeft="20px"
        >
        <div className="button-container">
        <SecondaryButton to="/programs" buttText="Learn More"/>
       
        </div>
        </HomeCard> 

       

        
        <HomeCard cardTitle={"Executive Coaching"} textColor={theme.color.dark} cardText={"This is for senior level professionals looking to get high-level product management knowledge to lead product teams, scale products and grow companies"}
         height="26.625rem"
        >
        <div className="button-container">
        <SecondaryButton to="/executive" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Corporate Training"} textColor={theme.color.light} cardText={"This is for companies looking to train their internal team with the product management skills to build and deliver their products successfully and achieve their business objectives"} backgroundColor={theme.color.primary} height="26.625rem" backLeft="20px"
        >
        <div className="button-container">
        <PrimaryButton to="/corporate" buttText="Learn More"/>
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
    padding: 10% 0 5% 0;
    @media (max-width: 768px){
      height: 100%;
      min-height: 120vh;
      /* padding-bottom: 10%; */
    }
    @media (max-height: 667px){
      min-height: 200vh;
    }
    .cardContainer{
      position: relative;
      padding: 5rem 5% 5rem 5%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 4.4375rem;
      column-gap: 1.5625rem;
      position: relative;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 5rem 5% 5rem 10%;
        row-gap: 2.4375rem;
        
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