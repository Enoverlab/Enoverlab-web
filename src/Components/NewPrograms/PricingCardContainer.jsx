import React from 'react'
import styled from "styled-components";
import {
    AdvancedCard,
    OnsiteCard,
  } from "./ProgramCards";
export const PricingCardContainer = () => {
  return (
   <StyledPriceContainer>
      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">
         
            <div id="onsite">
              <OnsiteCard />
            </div>
         
          </div>
          <div className="mobile-view">
           
            <div id="advanced">
              <AdvancedCard />
            </div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CnlDAo2EHVU?si=iioex-ResHalig_y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="card-block">
          <div className="desktop-view">
            <div id="advanced">
              <AdvancedCard />
            </div>
          </div>
          <div className="mobile-view">
            <div id="onsite">
              <OnsiteCard />
            </div>
          
           
          </div>
        </div>
      </div>
   </StyledPriceContainer>
  )
}

const StyledPriceContainer = styled.div`
    .pricing-card {
    padding: 5% 10% 5% 10%;
    @media (max-width: 768px) {
      padding: 5% 5% 5% 5%;
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

        .timerDesktop {
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
`
