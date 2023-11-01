import React from 'react'
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import HeroBg from '../../assets/diasporaHeroBg.png'
import { SecondaryButton } from '../../Utils/Buttons'
const Hero = () => {
  return (
    <StyledHero>
        <div className="hero-container">
            <div className="hero-inner-container">
                <H1
                color="#FFF"
                fontSize="4.5rem"
                mobileFontSize="2.3rem"
                >
               International Product Management Training Program
                </H1>

               <div className="p-container">
               <P
                color="#FFF"
                textAlign="center"
                fontSize="1.75rem"
                mobileFontSize="1.1rem"
                >
                To help International learners, Black Americans and Africans in Diaspora with professional backgrounds learn global product management tech skills
                </P>
               </div>
               <div  onClick={() => {
          window.open("https://bit.ly/enoverlabexclusive")
        }} className="button-container">
        <SecondaryButton to="#" buttText="Enrol Now"/>
        </div>
            </div>
        </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
 
  .hero-container{
    padding: 5%;
  background-color: #FFF;
  @media screen and (max-width: 768px){
    padding: 0%;
  }
    .hero-inner-container{
      padding: 74px 5% 155px 5%;
      background-image: url(${HeroBg});
      display: flex;
      flex-direction: column;
      align-items: center;
      .p-container{
        margin-top: 1.75rem;
      }
      .button-container{
        margin-top: 1.3125rem;

@media screen and (max-width: 768px){
    margin-top: 1.5rem;
}
      }
    }
  }
`