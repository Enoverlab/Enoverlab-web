import React from "react";
import styled from "styled-components";
import person1 from "../../assets/executive/person1.png";
import person2 from "../../assets/executive/person2.png";
import person3 from "../../assets/executive/person3.png";
import person4 from "../../assets/corporate/person4.png";
import { PrimaryButton, SecondaryButton } from "../../Utils/Buttons";
import { H1, P } from "../../Utils/Typograpyhy";
const Hero = () => {
  return (
    <StyledHero>
      <div className="content">
        <div className="text-container">
         <div className="h-container">
         <H1
            fontSize="4rem"
            mobileFontSize="1.7rem"
            color="#0000FF"
            fontWeight="500"
            lineHeight="6rem"
          >
          The proven way to upskill as an Executive PM
          </H1>
         </div>
          <div className="p-container">
            <P
              fontSize="1.5rem"
              mobileFontSize="1rem"
              color="#4B4B4B"
              fontWeight="300"
              lineHeight="2.25rem"
            >
Team structure development to enhance colloboration and drive efficient work delivery
            </P>
          </div>
        </div>
        <div className="button-container">
            <SecondaryButton to="/" buttText="Start Here" />
        </div>
      </div>
      <div className="image-slide">
        <div className="hero-images">
          <div className="hero-image">
            <img src={person1} alt="" />
          </div>
          <div className="hero-image">
            <img src={person2} alt="" />
          </div>
          <div className="hero-image">
            <img src={person3} alt="" />
          </div>
          {/* <div className="hero-image">
            <img src={person4} alt="" />
          </div> */}
        </div>
        <div className="cirular-bezel">
          <div className="circle"></div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  background-color: #FFFDF7;
  padding: 8.3125rem 8.5rem;
  position: relative;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5.4375em;
    @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
    .text-container{
        .h-container{
            display: flex;
            justify-content: center;
            align-items: center;
            H1{
                max-width: 95%;
                @media (max-width: 768px) {
                    max-width: 100%;
                    line-height: 2.625rem;
                }
            }
        }
        .p-container{
            display: flex;
            justify-content: center;
            align-items: center;
            P{
                max-width: 45.9375rem;
                margin-top: 1.75rem;
            }
        }
    }
    .button-container{
        margin-top: 1.875rem;
    }
  }
  .image-slide {
    position: relative;
  
   
    .hero-images {
      display: flex;
      column-gap: 2rem;
      position: relative;
      z-index: 1;
      @media (max-width: 768px) {
        overflow-x: scroll;
        column-gap: 0;
    }
      .hero-image {
        width: 100%;
        height: 22.875rem;
        @media (max-width: 768px) {
            min-width: 19.46375rem;
            height: 22.875rem;
            margin-left: 1.5625rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          @media (max-width: 768px) {
            object-fit: cover;
            
          }
        }
      }
    }
    .cirular-bezel {
      .circle {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 7.25em;
        border-radius: 40%;
        background-color: #FFFDF7;
        top: 90%;
        @media (max-width: 768px) {
            border-radius: 5%;
        }
      }
    }
  }
`;
