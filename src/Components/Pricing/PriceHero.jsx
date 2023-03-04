import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import { AdvancedCard, BasicCard, Executive, OnsiteCard } from "./ProgramCards";
import Timer from "./Timer";
const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="price-hero-head">
          <div className="desktop-text">
          <H1 fontWeight="500" mobileFontSize="2rem" mobileLineHeight="2.5rem">  
          Learn the skills, make impact
          </H1>
          </div>
          <div className="mobile-text">
          <H1 fontWeight="500" mobileFontSize="2rem" mobileLineHeight="2.5rem">
          Learn the skills,<br/> make impact
          </H1>
          </div>
         
          <div className="p-container">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            
            >
             Discover how to solve problems and deliver value with technology while helping organisations drive business growth
            </P>
          </div>
        </div>
      </div>

      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">
         <div id="basic">
          <BasicCard/>
          </div>
          <div id="onsite">
          <OnsiteCard/>
          </div>
          </div>
          <div className="mobile-view">
          <div id="basic">
            <BasicCard/>
          </div>
          <div id="advanced">
            <AdvancedCard/>
          </div>
          {/* <div id="advanced">
            <Timer/>
          </div> */}
          </div>
        </div>
        <div className="card-block">
          <div className="desktop-view">
          <div  id="advanced">
          <AdvancedCard/>
          </div>
          {/* <div  id="advanced" className="timerDesktop">
          <Timer/>
          </div> */}
          <div id="executive">
          <Executive/>
          </div>
          </div>
          <div className="mobile-view">
            <div id="onsite">
            <OnsiteCard/>
          </div>
          <div id="executive">
            <Executive/>
            </div>
          </div>
        </div>
      </div>
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledPriceHero = styled.div`
  padding: 5% 8% 12% 8%;
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  @media (max-width: 768px) {
    padding: 5% 10% 15% 5%;
  }
  .price-hero-container {
    position: relative;
    margin-bottom: 8.5rem;
    @media (max-width: 768px) {
      margin-bottom: 6rem;
    }
  }
  .price-hero-head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;

    .desktop-text {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .mobile-text {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
    .p-container {
      width: 65%;
      align-self: center;
      @media (max-width: 768px) {
        width: 100%;
        P {
          font-size: 1rem;
          line-height: 120%;
        }
      }
    }
  }

  .pricing-card {
    position: relative;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.3125rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 5rem;
    }

    .card-block {
    

      @media (max-width: 768px) {
        row-gap: 5rem;
      }
      .desktop-view {
        display: flex;
      flex-direction: column;
      row-gap: 6.125rem;

      .timerDesktop{
        
      }
        @media (max-width: 768px) {
          display: none;
        }
      }
      .mobile-view {
        display: none;
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          row-gap: 5rem;
        }
      }
    }
  }
`;
