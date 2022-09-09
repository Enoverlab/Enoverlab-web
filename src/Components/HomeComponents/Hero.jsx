import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../assets/heroImage.png'
import { PrimaryButton, SecondaryButton } from '../../Utils/Buttons'
import { theme } from '../../Utils/Theme'
import { H1, H4 } from '../../Utils/Typograpyhy'

const Hero = () => {
  return (
    <StyledHero>
        <div className="hero-container">
            <H1 color="#4B4B4B;" fontWeight={"400"} textAlign={"left"} mobileFontSize="2rem">
            Launch your <span>Product Management </span> Career
            </H1>
            <H4 color={theme.color.dark} fontWeight={"400"} textAlign={"left"}>
            Get the knowledge, skills and tools  you need to function effectively in the  role of a product manager
            </H4>
            <div className="button-container">             
                <SecondaryButton  to="/" buttText="Apply Now"/>
                <PrimaryButton to="/" buttText="Join our Community" />  
            </div>
        </div>
        <div className="hero-img">
            <img src={HeroImg} alt=""/>
        </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5%;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 4.4375rem;
    }
    .hero-container{
        max-width: 60%;
        @media(max-width: 768px){
            max-width: 100%;
            H1{
                line-height: 3rem;
            }
        }
        .button-container{
            display: flex;
            column-gap: 2rem;
            margin-top: 2rem;
        }
    }
    .hero-img{
        width: 40%;
        height: auto;
        @media(max-width: 768px){
            width: 100%;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`