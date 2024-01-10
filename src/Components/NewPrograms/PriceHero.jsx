import React from "react";
import styled, {keyframes} from "styled-components";
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
        <div className="left-container">
        <H1 color="#131313" textAlign="left" fontSize="48px" lineHeight="110%">
        Kickstart your career in Product Management
        </H1>
        <P textAlign="left" color="#131313" fontWeight={400}>Get familiar with what product management is and how you can become a skilled PM regardless of your background.</P>

        <div className="benefits-card">
          <div className="card-head">
            <P>
            Benefits of Being A Product Manager
            </P>
            <P>
              
            </P>
          </div>
          <div className="card-1">
            <P>
            Leadership
            </P>
            <P className="sub-1">
            Product managers inspire and guide their teams by setting a clear vision, aligning everyone towards common goals, and fostering a collaborative and motivated environment.
            </P>
          </div>
          <div className="card-2">
            <P>
            Execution
            </P>
            <P className="sub-1">
            Responsible for the tactical aspects of bringing a product to life, overseeing project timelines, resource allocation, and ensuring that the team delivers high-quality outcomes.
            </P>
          </div>
          <div className="card-3">
            <P>
            Product sense
            </P>
            <P className="sub-1">
            Product managers  understand user needs, market trends, and competition to make informed decisions about the product's features, design, and strategy, ensuring it resonates and solves intended problem.
            </P>
          </div>
        </div>


        </div>
        <div className="right-container">

        </div>
      </div>
      {/* <CertiMarquee/> */}
      <div className="pricing-card">
        <div className="card-block">
          <div className="desktop-view">     
         {/* <div id="basic">
          <BasicCard/>
          </div> */}
          <div id="onsite">
          <OnsiteCard/>
          </div>
          {/* <div id="growth">
          </div> */}
              {/* <div>
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
          </div> */}

          </div>
          <div className="mobile-view">
          {/* <div id="basic">
            <BasicCard/>
          </div> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jXR2CYoci_4?si=RQNw6ZY0L8XLO8il" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
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
          {/* <div>
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
          </div> */}
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

 
// const slideDown = keyframes`
//   from {
//     transform: translateY(-100%);
//   }
//   to {
//     transform: translateY(0);
//   }
// `;
/* 
const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;
 */
/* 
const hoverCard1 = keyframes`
  0% {
    animation: ${slideUp} 0.5s forwards;
  }
  100% {
    animation: ${slideDown} 0.5s forwards;
  }
`; */
/* 
const hoverCard2 = keyframes`
  0% {
    animation: ${slideUp} 0.5s forwards;
  }
  100% {
    animation: ${slideDown} 0.5s forwards;
  }
`; */
/* 
const hoverCard3 = keyframes`
  0% {
    animation: ${slideUp} 0.5s forwards;
  }
  100% {
    animation: ${slideDown} 0.5s forwards;
  }
`; */

const StyledPriceHero = styled.div`
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  @media (max-width: 768px) {
   
  }
  .price-hero-container {
    padding: 5% 8% 5% 8%;
    .left-container{
      width: 50%;
      .benefits-card{
        height:488px;
        background-color: #E8F3FE;
        position: relative;
        overflow: hidden;
        .card-head{
          padding: 15px 32px;
         
          P{
            text-align: left;
            color: #000;
            background-color: #E8F3FE;
            font-size: 28px;
            width: 50%
          }
        }
        .card-1{
          padding: 40px;
          background-color: #80A2FF;
          border-radius: 32px 32px 0px 0px;
          height: 144px;
          P{
            text-align: left;
            color: #FFFDF7;
            font-size: 28px;
          }  

          .sub-1{
            display:none;
          }
        
        }
        .card-2{
          background-color: #2A65FF;
           padding: 40px;
           border-radius: 32px 32px 0px 0px;
           height: 142px;
           z-index: 2;
          transform: translateY(-24px);
          P{
            text-align: left;
            color: #FFFDF7;
            font-size: 28px;
          }  
          .sub-1{
            display:none;
          }
         
        }
        .card-3{
          background-color: #003AD4;
           padding: 40px;
         border-radius: 32px 32px 0px 0px;
         height: 148px;
          z-index: 2;
          transform: translateY(-48px);
          P{
            text-align: left;
            color: #FFFDF7;
            font-size: 28px;

          }  
          .sub-1{
            display:none;
          }
         
        }
    

      }
    }
  }
    
  
  .pricing-card{
    padding: 5% 10% 5% 10%;
    @media(max-width: 768px){
      padding: 5% 5% 5% 5%;
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
