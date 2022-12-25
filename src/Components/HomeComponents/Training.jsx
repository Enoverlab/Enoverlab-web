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
       <H4 fontWeight={"300"} color={theme.color.dark} paddingTop="1rem">
       to become a skilled product manager
        </H4>
        <div className="cardContainer">
        
        <HomeCard cardTitle={"Advanced Program"} textColor={theme.color.light} cardText={"This program is for anyone just starting out in product management to learn the required knowledge, skills & tools to become a skilled Product Manager"} backgroundColor={theme.color.primary} height="26.625rem">
        <div className="button-container">
        <PrimaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"LevelUP Program"}  textColor={theme.color.dark} cardText={"This program is for working product managers looking to LevelUP their product management skills to scale products to the next level"}  backLeft="20px" height="26.625rem"
        >
        <div className="button-container">
        <SecondaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard>

        
        <HomeCard cardTitle={"Executive Program"} textColor={theme.color.dark} cardText={"This is for senior level professionals looking to get high-level product management knowledge to lead product teams, scale products and grow companies"}
        backLeft="20px" height="26.625rem"
        >
        <div className="button-container">
        <SecondaryButton to="/executive" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Corporate Training"} textColor={theme.color.light} cardText={"This is for companies looking to train their internal team with the product management skills to build and deliver their products successfully and achieve their business objectives"} backgroundColor={theme.color.primary} height="26.625rem"
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
      padding: 5rem 6% 5rem 6%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 4.4375rem;
      column-gap: 3.5625rem;
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