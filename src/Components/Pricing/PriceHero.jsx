import React from "react";
import styled from "styled-components";

import { MainButton, PrimaryButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import { H1, P } from "../../Utils/Typograpyhy";
import { AdvancedCard, BasicCard, Executive, OnsiteCard } from "./ProgramCards";
const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="price-hero-head">
          <H1 fontWeight="500" mobileFontSize="2rem">
            Launch your Product
            <br />
            Management Career
          </H1>
          <div className="p-container">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            >
              For anyone just starting out to learn the required skills to
              become a Product Manager
            </P>
          </div>
        </div>
      </div>

      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">
          <BasicCard/>
          <OnsiteCard/>
          </div>
          <div className="mobile-view">
            <BasicCard/>
            <AdvancedCard/>
          </div>
        </div>
        <div className="card-block">
          <div className="desktop-view">
          <AdvancedCard/>
          <Executive/>
          </div>
          <div className="mobile-view">
            <OnsiteCard/>
            <Executive/>
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
    .p-container {
      width: 50%;
      align-self: center;
      @media (max-width: 768px) {
        width: 100%;
        P {
          font-size: 1rem;
          line-height: 110%;
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
