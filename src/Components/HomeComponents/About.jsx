import React from 'react'
import styled from 'styled-components'
import enovAbout from '../../assets/enovAbout.png'
import { H2, P } from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'

const About = () => {
  return (
    <StyledAbout>
        <div className="about-container">
            <div className="about-image">
               <img src={enovAbout} alt=""/>
            </div>
            <div className="about-text">
                <H2 color={theme.color.light} fontWeight={"400"} textAlign={"left"}>
                Be empowered to build impactful products to the world
                </H2>
                <P paddingTop="0.5rem" color={theme.color.light} textAlign={"left"} fontWeight={300}>
                With a structured syllabus, practical training and exposure to real  life projects, you will be groomed with the knowledge, skills and tools to build and manage products that will deliver increasing value to users while also driving business value for organizations.
                </P>
            </div>
        </div>
    </StyledAbout>
  )
}

export default About

const StyledAbout = styled.div`
    margin-top: 3rem;
   .about-container{
         display: flex;
         @media(max-width: 768px){
            flex-direction: column-reverse;  
         }
   }
   .about-image{
    width: 50%;
    height: auto;
    @media(max-width: 768px){
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
   }
    .about-text{
        padding: 15% 5%;
        width: 50%;
        background-color: ${theme.color.secondary};
        margin: 0 auto;
        @media(max-width: 768px){
            width: 100%;
        }
    }
`   