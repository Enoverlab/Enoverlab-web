import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";

import BookCard from "../Resources/BookCard";
import Timer from "./Timer";
import abc from "../../assets/resources/abc.jpg";
import CertiMarquee from "../HomeComponents/CertiMarquee";
import { BsDot } from "react-icons/bs";
const PriceHero = () => {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard3Hovered, setIsCard3Hovered] = useState(false);
  
 return (
    <StyledPriceHero
      isCard1Hovered={isCard1Hovered}
      isCard2Hovered={isCard2Hovered}
      isCard3Hovered={isCard3Hovered}
    >
      <div className="price-hero-container">
        <div className="left-container">
          <H1
            color="#131313"
            textAlign="left"
            fontSize="48px"
            lineHeight="110%"
          >
            Kickstart your career in Product Management
          </H1>
          <P textAlign="left" color="#131313" fontWeight={300}>
            Get familiar with what product management is and how you can become
            a skilled PM regardless of your background.
          </P>

          <div className="benefits-card">
            <div className="card-head">
              <P>Benefits of Being A Product Manager</P>
              <P></P>
            </div>
            <div
              className="card-1"
              onMouseEnter={() => setIsCard1Hovered(true)}
              onMouseLeave={() => setIsCard1Hovered(false)}
            >
              <div className="card-desc">
                <BsDot className="icon"/>
                <P>Leadership</P>
              </div>
            
              <P className="sub-1">
                Product managers inspire and guide their teams by setting a
                clear vision, aligning everyone towards common goals, and
                fostering a collaborative and motivated environment.
              </P>
            </div>
            <div
              className="card-2"
              onMouseEnter={() => setIsCard2Hovered(true)}
              onMouseLeave={() => setIsCard2Hovered(false)}
            >
              <div className="card-desc">
                <BsDot className="icon"/>
                <P>Execution</P>
              </div>
         
              <P className="sub-1">
              Responsible for the tactical aspects of bringing a product to life, overseeing project timelines, resource allocation, and ensuring that the team delivers high-quality outcomes.
              </P>
            </div>
            <div
              className="card-3"
              onMouseEnter={() => setIsCard3Hovered(true)}
              onMouseLeave={() => setIsCard3Hovered(false)} 
            >
               <div className="card-desc">
                <BsDot className="icon"/>
                <P>Product sense</P>
              </div>
            
              <P className="sub-1">
              Product managers  understand user needs, market trends, and competition to make informed decisions about the product's features, design, and strategy, ensuring it resonates and solves intended problem.
              </P>
            </div>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
      {/* <CertiMarquee/> */}
    
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledPriceHero = styled.div`
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  @media (max-width: 768px) {
  }
  .price-hero-container {
    padding: 5% 8% 5% 8%;
    .left-container {
      width: 50%;
      .benefits-card {
        margin-top: 40px;
        height: 488px;
        background-color: #e8f3fe;
        position: relative;
        overflow: hidden;
        border: 0.5px solid #000;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
        width: 70%;
        .card-head {
          padding: 15px 32px;

          P {
            text-align: left;
            color: #000;
            background-color: #e8f3fe;
            font-size: 28px;
            width: 80%;
          }
        }
        .card-1,
    .card-2,
    .card-3 {
      transition: height 0.3s ease;
      padding: 30px;
      .card-desc{
        display: flex;
        .icon{
          font-size: 35px;
          color: #FFF;
        }
        
      }
      .sub-1{
        font-size: 20px;
        line-height: 36px;
      }
    }
        .card-1 {
         
          background-color: #80a2ff;
          border-radius: 32px 32px 0px 0px;
          height: 144px;
          P {
            text-align: left;
            color: #fffdf7;
            font-size: 28px;
          }
          .sub-1 {
            display: none;
          }
          &:hover {
            height: 332px;
            .sub-1 {
              display: block;
            }
            ${(props) =>
              props.isCard1Hovered &&
              `
        + .card-2 {
          transform: translateY(-48px);
          height: 121px;
          position: relative;
        }
        ~ .card-3 {
          transform: translateY(-100px);
          height: 80px;
        }
      `}
          }
        }
        .card-2 {
          background-color: #2a65ff;
       
          width: 100%;
          border-radius: 32px 32px 0px 0px;
          height: 142px;
          z-index: 2;
          transform: translateY(-24px);
          position: relative;
          P {
            text-align: left;
            color: #fffdf7;
            font-size: 28px;
          }
          .sub-1 {
            display: none;
          }
          &:hover {
            height: 332px;
            transform: translateY(-100px);
            .sub-1 {
              display: block;
            }
            ${(props) =>
              props.isCard2Hovered &&
              `
              ~ .card-3 {
                transform: translateY(-150px) !important;  
                position: relative;
                height: 80px;
              }
      `}
      }
     
        }
        .card-3 {
          background-color: #003ad4;
          width: 100%;
         
          border-radius: 32px 32px 0px 0px;
          height: 168px;
          z-index: 5 !important;
          position: relative;
          transform: translateY(-48px);
          P {
            text-align: left;
            color: #fffdf7;
            font-size: 28px;
          }
          .sub-1 {
            display: none;
          }
          &:hover {
            height: 380px;
            transform: translateY(-250px);
            .sub-1 {
              display: block;
            }
          }
        }
       
      }
    }
    .right-container{
      
    }
  }

  
  
`;
