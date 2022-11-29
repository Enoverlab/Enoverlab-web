import React from 'react'
import styled from 'styled-components'
import { H1, H4, P } from '../../Utils/Typograpyhy'

const Hero = () => {
  return (
    <StyledHero>
     <div className="about-hero-container">
            <div className="about-hero-head">
                <H1 fontWeight="400" mobileFontSize="2rem" >
                The Story of Enoverlab
                <br />
             
                </H1>
                <div className="a-container">
                <P fontSize="1.5rem" lineHeight="2.25rem" fontWeight={300} color="#4B4B4B">
                A product school designed to create confident and innovative product leaders
                </P>
                </div>
            </div>
          </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
  padding: 0 10%;
  background-color: #FFFDF7;
    .about-hero-container{
        position: relative;
        margin-bottom: 8.5rem;
        @media(max-width: 768px){
            margin-bottom: 3rem;
            padding-top: 25%;
        }
    }

.about-hero-head{
        display: flex;
       justify-content: center;
       flex-direction: column;
       max-width: 100%;
         .a-container{
                width: 50%;
                align-self: center;
                @media (max-width: 768px){
                    width: 100%;
                    P{
                        font-size: 0.8rem;
                        line-height: 110%;
                    }
                }
         }
 }
`