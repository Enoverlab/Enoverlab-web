import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import { AdvancedCard, BasicCard, Executive, OnsiteCard } from "./ProgramCards";
import BookCard from "../Resources/BookCard";
import Timer from "./Timer";
import abc from "../../assets/resources/abc.jpg"

const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="price-hero-head">
          <div className="desktop-text">
          <H1 fontWeight="500" fontSize="3.8rem" lineHeight="4.2rem" mobileFontSize="2rem" mobileLineHeight="2.5rem">  
          Welcome to an Indepth Product Management learning experience 
          </H1>
          </div>
          <div className="mobile-text">
          <H1 fontWeight="500" mobileFontSize="1.6rem" mobileLineHeight="2rem">
          {/* Learn the skills,<br/> make impact */}
          Welcome to an Indepth Product Management learning experience 
          </H1>
          </div>
         
          <div className="p-container">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            
            >
             {/* Discover how to solve problems and deliver value with technology while helping organisations drive business growth */}
             Here, you will get the knowledge, skills and tools you need to become an impactful product manager
            </P>
            <div className="started-text-desktop">
            <P
             fontSize="1.5rem"
             lineHeight="2.25rem"
             fontWeight={300}
             color="#4B4B4B"
            >
            Go through the programs below to get started
            </P>
            </div>
            <div className="started-text-mobile">
            <P
             fontSize="1.5rem"
             lineHeight="2.25rem"
             fontWeight={300}
             color="#4B4B4B"
           
            >
            Go through the programs below to <br/> get started
            </P>
            </div>
           
          
          </div>
        </div>
      </div>

      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">
          
         <div id="basic">
          <BasicCard/>
          </div>
          <div>
            <P
             fontSize="1.3rem"
             fontWeight="600"
             color="#000"
             paddingBottom="1rem"
            >
            Not sure if product management is for you?
            </P>
            <P
            fontSize="1.3rem"
            fontWeight="600"
            color="#000"
            paddingBottom="1rem"
            >
            Download "The ABC of Product Management" below
            </P>
            
          <BookCard imgUrl={abc} bookUrl={'/abc.pdf'} maxHeight="100%" maxWidth="100%"/>
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
          <div id="onsite">
          <OnsiteCard/>
          </div>
          {/* <div  id="advanced" className="timerDesktop">
          <Timer/>
          </div> */}
          {/* <div id="executive">
          <Executive/>
          </div> */}
          </div>
          <div className="mobile-view">
            <div id="onsite">
            <OnsiteCard/>
          </div>
          <div>
          <P
             fontSize="1.2rem"
             fontWeight="600"
             color="#000"
             paddingBottom="1rem"
            >
            Not sure if product management is for you?
            </P>
          <P
            fontSize="1.2rem"
            fontWeight="600"
            color="#000"
            paddingBottom="1rem"
            >
            Download "The ABC of Product Management" below
            </P>
            
          <BookCard imgUrl={abc} bookUrl={'/abc.pdf'} maxHeight="100%" maxWidth="100%"/>
          </div>
          {/* <div id="executive">
            <Executive/>
            </div> */}
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

    @media (max-width: 768px){
     
    }

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
          padding-top: 0.8rem;
        }
      }
      .started-text-desktop {
        width: 100%;
        display: block;
        @media (max-width: 768px) {
          width: 100%;
          display: none;

          P{
          font-size: 1rem;
          line-height: 120%;
          width: 100%;
        }
        }
      }
      .started-text-mobile {
        display: none;

        @media (max-width: 768px) {
          display: block;
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
