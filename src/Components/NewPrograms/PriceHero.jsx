import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import HeroVidCover from "../../assets/newProgramsHero.png";
import BookCard from "../Resources/BookCard";
import Timer from "./Timer";
import abc from "../../assets/resources/abc.jpg";
import CertiMarquee from "../HomeComponents/CertiMarquee";
import { FaPlay } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
const PriceHero = () => {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard3Hovered, setIsCard3Hovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const iframeRef = useRef(null);
  const mobileIframe = useRef(null);
  const handleClicked = () => {
    setIsClicked(!isClicked);
    if (isClicked === true){
      const iframeWindow = iframeRef.current.contentWindow;
      iframeWindow.document.getElementById('video').play();
      const mobileIframeWindow = mobileIframe.current.contentWindow;
      mobileIframeWindow.document.getElementById('video').play();
    }else{
      const iframeWindow = iframeRef.current.contentWindow;
      iframeWindow.document.getElementById('video').pause();
    }
  }
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
            mobileFontSize="28px"
            mobileLineHeight="105%"
            fontWeight={600}
          >
            Kickstart your career in Product Management
          </H1>
          <P textAlign="left" color="#131313" fontWeight={300}
          fontSize="20px" mobileFontSize="12px" paddingTop="12px"
          >
            Get familiar with what product management is and how you can become
            a skilled PM regardless of your background.
          </P>
          <div className="video-box">
          {
            isClicked ? (
              <>
                <iframe width="100%" height="696px" src="https://www.youtube.com/embed/FgDC-w0zXcA?si=h3qjeJu-sujPjwDS" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullscreen
        autoPlay="true"
        id="video"
        ref={mobileIframe}
        ></iframe>
              </>
            ): (
              <>
             <div className="video-cover" onClick={handleClicked}>
              <img src={HeroVidCover} alt="video-cover" />
              <div className="play-button">
                <div className="play-triangle">
                  <FaPlay className="play-icon" />
                </div>
              </div>
            </div> 
              </>
            )
          }
          </div>
     
          <div className="benefits-card-container">
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
                <P>Impact</P>
              </div>
            
              <P className="sub-1">
              As a Product Manager, you will be involved in building products that can make significant impact in the lives of people by solving their problems and making their lives better.
              </P>
            </div>
            <div
              className="card-2"
              onMouseEnter={() => setIsCard2Hovered(true)}
              onMouseLeave={() => setIsCard2Hovered(false)}
            >
              <div className="card-desc">
                <BsDot className="icon"/>
                <P>Remote work</P>
              </div>
         
              <P className="sub-1">
              Being a Product Manager makes it easy for you to get remote work, both locally and internationally. Most companies hiring product managers give product managers opportunity to work remotely.
              </P>
            </div>
            <div
              className="card-3"
              onMouseEnter={() => setIsCard3Hovered(true)}
              onMouseLeave={() => setIsCard3Hovered(false)} 
            >
               <div className="card-desc">
                <BsDot className="icon"/>
                <P>Make plenty money</P>
              </div>
            
              <P className="sub-1">
              Product Managers are highly paid tech talents. A skilled product manager will earn an average of #300,000 - #500,000 or $3,000 - 5,000 monthly. More experienced product managers will earn even much more.
              </P>
            </div>
          </div>
          </div>
         
        </div>
        <div className="right-container">
          <div className="video-box">
          {
            isClicked ? (
              <>
                <iframe width="100%" height="696px" src="https://www.youtube.com/embed/FgDC-w0zXcA?si=h3qjeJu-sujPjwDS" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullscreen
        autoPlay="true"
        id="video"
        ref={iframeRef}
        ></iframe>
              </>
            ): (
              <>
             <div className="video-cover" onClick={handleClicked}>
              <img src={HeroVidCover} alt="video-cover" />
              <div className="play-button">
                <div className="play-triangle">
                  <FaPlay className="play-icon" />
                </div>
              </div>
            </div> 
              </>
            )
          }
          </div>
     
        </div>
      </div>
      {/* <CertiMarquee/> */}
    
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledPriceHero = styled.div`
  position: relative;
  /* margin-bottom: 10%; */
  background-color:#F4FCFE;
  @media (max-width: 768px) {
  }
  .price-hero-container {
    padding: 5% 8% 5% 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 5% 5% 5% 5%;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      row-gap: 3rem;
    }
    
    .left-container {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      .video-box{
     
        display: none;
        margin-top: 51px;
        padding-right: 2rem;
        iframe{
          border: 1.228px solid #111;
          box-shadow: 26px -25px 0px -2px rgba(0,70,255,0.18);
          @media (max-width: 768px) {
            height: 446px;
          }
        }
        @media (max-width: 768px) {
          display: block;
        }
      }

      .video-cover {
        position: relative;
        width: 100%;
        height: 696px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 26px -25px 0px -2px rgba(0,70,255,0.18);
        cursor: pointer;
        @media (max-width: 768px) {
          height: 500px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .play-button {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .play-triangle {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            .play-icon {
              font-size: 40px;
              color: #0046ff;
              
            }
          }
          @media (max-width: 768px) {
            .play-triangle {
              width: 60px;
              height: 60px;
              .play-icon {
                font-size: 30px;
              }
            }
          }
        }
      }

      .benefits-card-container {
        @media (max-width: 768px) {
          padding: 0px 10%;
        }
      }
      .benefits-card {
        margin-top: 40px;
        height: 488px;
        background-color: #e8f3fe;
        position: relative;
        overflow: hidden;
        border: 0.5px solid #000;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
        width: 70%;
        @media (max-width: 768px) {
          width: 100%;
        }
        .card-head {
          padding: 15px 32px;

          P {
            text-align: left;
            color: #000;
            background-color: #e8f3fe;
            font-size: 28px;
            width: 80%;
            @media (max-width: 768px) {
              font-size: 20px;
              width: 100%;
            }
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
          @media (max-width: 768px) {
            font-size: 25px;
          }
        }
        P{
          @media (max-width: 768px) {
            font-size: 13px;
          }
        }
        
      }
      .sub-1{
        font-size: 20px;
        line-height: 36px;
        @media (max-width: 768px) {
          font-size: 13px;
        }
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

            @media (max-width: 768px) {
              
            }
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
            @media (max-width: 768px) {
          font-size: 13px;
        }
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
      width: 40%;
      display: block;
      .video-box{
        border: 1.228px solid #111;
        box-shadow: 26px -25px 0px -2px rgba(0,70,255,0.18);

        iframe{
          @media (max-width: 768px) {
            height: 500px;
          }
        }

      }

      .video-cover {
        position: relative;
        width: 100%;
        height: 696px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @media (max-width: 768px) {
          height: 500px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .play-button {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          .play-triangle {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            .play-icon {
              font-size: 40px;
              color: #0046ff;
            }
          }
        }
      }

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 40px;
      display: none;
    }   
    }
  }

  
  
`;
