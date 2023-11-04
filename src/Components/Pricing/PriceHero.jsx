import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import { AdvancedCard, BasicCard, Executive, OnsiteCard, TechnicalPM, GrowthPM, PMPCard } from "./ProgramCards";
import BookCard from "../Resources/BookCard";
import Timer from "./Timer";
import abc from "../../assets/resources/abc.jpg"
import CertiMarquee from "../HomeComponents/CertiMarquee";
const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="price-hero-head">
          <div className="desktop-text">
          <H1 fontWeight="500" fontSize="3.8rem" lineHeight="4.2rem" mobileFontSize="2rem" mobileLineHeight="2.5rem">  
          Kickstart your career in tech <br/> without coding
          </H1>
          </div>
          <div className="mobile-text">
          <H1 fontWeight="500" mobileFontSize="1.6rem" mobileLineHeight="2rem">
          {/* Learn the skills,<br/> make impact */}
          Kickstart your career in tech without coding
          </H1>
          </div>
         
          <div className="p-container">
          <div className="started-text-desktop">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            
            >
             {/* Discover how to solve problems and deliver value with technology while helping organisations drive business growth */}
             Learn how to become a skilled Product Manager <br/>regardless of your background

            </P>
            </div>
            <div className="started-text-mobile">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            
            >
             {/* Discover how to solve problems and deliver value with technology while helping organisations drive business growth */}
             Learn how to become a skilled Product Manager regardless of your background
            </P>
            </div>
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
           Go through the programs below <br/> to get started
            </P>
            </div>
           
       
          </div>
        
        </div>
        
      </div>
      <CertiMarquee/>
      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">
          
         <div id="basic">
          <BasicCard/>
          </div>

          <div id="onsite">
          <OnsiteCard/>
          </div>
         
          {/* <div id="growth">
         
          </div> */}

         
         
          </div>
          <div className="mobile-view">
          <div id="basic">
            <BasicCard/>
          </div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/jXR2CYoci_4?si=RQNw6ZY0L8XLO8il" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div id="advanced">
            <AdvancedCard/>
          </div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/CnlDAo2EHVU?si=iioex-ResHalig_y" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
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
            
          {/* <BookCard imgUrl={abc} bookUrl={'/abc.pdf'} maxHeight="100%" maxWidth="100%"/> */}
          <BookCard imgUrl={abc} bookUrl={'/abc.pdf'} maxHeight="100%" maxWidth="100%"/>
          </div>
       
          {/* <div id="onsite">
          <PMPCard/>
          </div> */}
         
          {/* <div  id="advanced">
          <GrowthPM/>
          <TechnicalPM/>
          </div> */}
          {/* <div  id="advanced">
         
          </div> */}

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
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/iPMxwnmj7sk?si=IIoJGezZSvZXKOUI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           {/* <div  id="advanced">
          <PMPCard/>
          </div> */}
          {/* <div  id="advanced">
          <TechnicalPM/>
          </div> */}
          {/* <div id="growth">
          <GrowthPM/>
          </div> */}
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
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  @media (max-width: 768px) {
   
  }
  .price-hero-container {
    padding: 5% 8% 0% 8%;
    position: relative;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      margin-bottom: 2rem;
      padding: 5% 10% 0% 5%;
    }
  }
  .pricing-card{
    padding: 5% 10% 15% 5%;
    @media(max-width: 768px){
      padding: 5% 10% 15% 5%;
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
      margin-bottom: 1rem;
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
        margin-bottom: 1rem;
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
