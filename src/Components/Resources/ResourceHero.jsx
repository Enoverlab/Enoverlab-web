import React from "react";
import styled from "styled-components";
import { H3, P } from "../../Utils/Typograpyhy";
import WhiteArrow from "../../assets/ArrowWhite.png"
import Enover from "../../assets/resources/Enover.png";
import FigmaLogo from "../../assets/resources/Figma.png";
const ResourceHero = () => {
  return (
    <StyledResourceHero>
      <div className="resource-hero-container">
      <div className="resource-content">
      <H3 fontSize="4rem" fontWeight="500" mobileFontSize="2.5rem">
          Enoverlab Free Resource Library
        </H3>
        <P fontSize="1.75rem" paddingTop="1rem" color=" #4B4B4B" fontWeight={400} lineHeight={"2.625rem"} mobileFontSize="1rem">
          keeping you updated with vital resources to make you a competent
          product manager
        </P>
        {/* <div className="email-input">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe
            <img src={WhiteArrow} alt="arrow" />
          </button>
        </div> */}
      </div>
        <div className="resource-image">
            <img src={Enover} alt="enover" />
        </div>
        <div className="resource-image-right">
            <img src={Enover} alt="enover" />
        </div>
        <div className="fig-image">
            <img src={FigmaLogo} alt="figma" />
        </div>
        <div className="fig-image-right">
            <img src={FigmaLogo} alt="figma" />
        </div>
      </div>
    </StyledResourceHero>
  );
};

export default ResourceHero;

const StyledResourceHero = styled.div`
  position: relative;
  background-color: #FFFDF7;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  .resource-hero-container {
    position: relative;
    width: 100%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
   
    .resource-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        H3 {
      max-width: 50%;
      @media (max-width: 768px){
        max-width: 100%;
      }
    }
    P{
        max-width: 65%;
        @media (max-width: 768px){
        max-width: 100%;
        }
    }
    .email-input {
        display: flex;
        margin-top: 3rem;

        @media (max-width: 768px) {
            flex-direction: column;
            width: 100%;
          
        }
        input{
            height: 3.5rem;
            width: 23.75rem;
            padding: 1.5rem;
            font-size: 1.25rem;
            border: none;
            background-color: #F5F5F5;

        @media (max-width: 768px) {
            width: 100%;
            font-size: 1rem;
        }
        }
        button{
            background-color: #0088FF;
            padding: 0rem 2rem;
            font-size: 1.5rem;
            color: #E5ECFF;
            border: none;

            @media (max-width: 768px) {
                font-size: 1rem;
                margin-top: 1.5rem;
                padding: 0.5rem 1rem;
                color: #FFFFFF;
            }

            img{
                margin-left: 1rem;
                width: 2.875rem;
            }
        }
    }
    }
    .resource-image{
        position: absolute;
        top: 30%;
        left: 10%;
        z-index: 1;
        @media (max-width: 768px) {
            top: 30%;
            left: 5%;
            width: 2rem;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
    }

    .fig-image{
        position: absolute;
        top: 60%;
        left: 20%;
        z-index: 1;
        @media (max-width: 768px) {
            top: 15%;
            left: 10%;
            width: 1.5rem;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
    }

    .resource-image-right{
        position: absolute;
        top: 10%;
        right: 5%;
        z-index: 1;
        @media (max-width: 768px) {
            top: 15%;
            right: 5%;
            width: 2rem;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
    }
    .fig-image-right{
        position: absolute;
        top: 30%;
        right: 10%;
        z-index: 1;
        @media (max-width: 768px) {
            top: 30%;
            right: 10%;
            width: 1.5rem;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
    }
  }
`;
