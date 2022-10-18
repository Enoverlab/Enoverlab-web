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
        
        <HomeCard cardTitle={"Advanced Program"} textColor={theme.color.light} cardText={"If you have taken any basic online product management training and you are looking to upskill and be better equipped to take up a product manager role,this program is for you"} backgroundColor={theme.color.primary} >
        <div className="button-container">
        <PrimaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"LevelUP Program"}  textColor={theme.color.dark} cardText={"This program is for you if you are just starting out and want to get all the required knowledge, skills, tools and experience you need to fully take up the role of a product manager globally"}  backLeft="20px"
        >
        <div className="button-container">
        <SecondaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard>

        
        <HomeCard cardTitle={"Executive Program"} textColor={theme.color.dark} cardText={"This is a personalized training for senior level professionals and experienced product managers looking to expand their product management skills to become product leaderss"}>
        <div className="button-container">
        <SecondaryButton to="/programs" buttText="Learn More"/>
        </div>
        </HomeCard> 

        <HomeCard cardTitle={"Corperate Training"} textColor={theme.color.light} cardText={"To equip a company’s product team with the specific product management skills to build and deliver their products successfully and achieve their business goals"} backgroundColor={theme.color.primary} backLeft="20px"
        >
        <div className="button-container">
        <PrimaryButton to="/programs" buttText="Learn More"/>
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
      min-height: 155vh;
      padding-bottom: 25%;
    }
    @media (max-height: 667px){
      min-height: 200vh;
    }
    .cardContainer{
      position: relative;
      padding: 5rem 5% 5rem 15%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 4.4375rem;
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