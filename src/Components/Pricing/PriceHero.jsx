import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { H1, H4,P } from "../../Utils/styled/Typograpyhy";
import HeroVidCover from "../../assets/icon/programsCover.png";
import { AiOutlineShrink as Shrink } from "react-icons/ai";
import { FaExpandAlt as Expand } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay} from "swiper/modules";
// import BookCard from "../Resources/BookCard";
// import Timer from "./Timer";
// import abc from "../../assets/resources/abc.jpg";
// import CertiMarquee from "../HomeComponents/CertiMarquee";
import * as data from "../../constants/index"
import { FaPlay } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { Flex } from "../HomeComponents/ProductSection";
const PriceHero = () => {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [card1Clicked, setCard1Clicked] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [card2Clicked, setCard2Clicked] = useState(false);
  const [isCard3Hovered, setIsCard3Hovered] = useState(false);
  const [card3Clicked, setCard3Clicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const iframeRef = useRef(null);
  const mobileIframe = useRef(null);
  const handleClicked = () => {
    setIsClicked(!isClicked);
    if (isClicked === true){
      const iframeWindow = iframeRef.current
      iframeWindow.play();
      const mobileIframeWindow = mobileIframe.current
      mobileIframeWindow.play();
    }else{
      const iframeWindow = iframeRef.current
      iframeWindow.pause();
    }
  }
 return (
    <StyledPriceHero
      isCard1Hovered={isCard1Hovered}
      isCard2Hovered={isCard2Hovered}
      isCard3Hovered={isCard3Hovered}
      card3Clicked={card3Clicked}
      card2Clicked={card2Clicked}
      card1Clicked={card1Clicked}
    >
      <div className="price-hero-container">
        <div className="left-container">
          <section className="textContainer">
          {/* <H1
            color="#131313"
            textAlign="left"
            mdfs="4rem"
            fs="6vw"
            mdlh="5.8rem"
            lh="3.3rem"
            pb="1rem"
          >
            Learn Product Management Skills in the next 3 months 
          </H1> */}
          <H1
            color="#131313"
            textAlign="left"
            mdfs="3.5rem"
            fs="5.3vw"
            mdlh="5.9rem"
            lh="3rem"
            pb="1rem"
          >
            In 2024, our top alumni’s earned an average of N700,000 monthly 
          </H1>
          <H4 color="var(--Body-Text)" mdlh="3rem" lh="2.5rem" fs="1.8rem" mdfs="2.3rem" mdwidth="85%">
          Our decent alumni’s earned an average of N312,500 monthly
          </H4>
          <H4 color="var(--Body-Text)" mdlh="3rem" lh="2.5rem" fs="1.8rem" mdfs="2.3rem" mdwidth="85%">
          Our International alumni’s earned an average of $6,500 monthly
          </H4>
          <H4 color="var(--Body-Text)" mdlh="3rem" lh="2.5rem" fs="1.8rem" mdfs="2.3rem" mdwidth="85%">
          You can also earn like this too if you start learning with Enoverlab today
          </H4>
          </section>
          <div className="video-box">
          {
            isClicked ? (
              <>
                <iframe width="100%" height="696px" src="https://www.youtube.com/embed/BGUOtO0yLJM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullscreen
                autoPlay="true"
                id="video"
                ref={mobileIframe}
              >

              </iframe>
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
              <P>Benefits of Becoming A Product Manager</P>
              <P></P>
            </div>
            <div
              className="card-1"
              onMouseEnter={() => setIsCard1Hovered(true)}
              onMouseLeave={() => setIsCard1Hovered(false)}
            >
              <div className="card-desc">
                <div className="card-desci">
                <BsDot className="icon"/>
                <P>Impact</P>
                </div>
                <div className="mobctrl" onClick={()=>setCard1Clicked(!card1Clicked)}>
                  {card1Clicked ? <Shrink/> : <Expand/>}
                </div>
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
                <div className="card-desci">
                <BsDot className="icon"/>
                <P>Remote work</P>
                </div>
                <div className="mobctrl" onClick={()=>setCard2Clicked(!card2Clicked)}>
                  {card2Clicked ? <Shrink/> : <Expand/>}
                </div>
              </div>
         
              <P className="sub-1">
              Many companies hiring product managers gibe them  opportunity to work remotely or hybrid. Becoming a PM will make it easy to get remote or hybrid work, both locally and internationally.
              </P>
            </div>
            <div
              className="card-3"
              onMouseEnter={() => setIsCard3Hovered(true)}
              onMouseLeave={() => setIsCard3Hovered(false)}
            >
               <div className="card-desc">
                <div className="card-desci">
                <BsDot className="icon"/>
                <P>Make plenty money</P>
                </div>
                <div className="mobctrl" onClick={()=>setCard3Clicked(!card3Clicked)}>
                  {card3Clicked ? <Shrink/> : <Expand/>}
                </div>
              </div>
            
              <P className="sub-1">
              A skilled product manager will earn an average of ₦500,000 or $5,000 per month. More experienced product managers will earn even much more.
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
                <iframe width="100%" height="696px" src="https://www.youtube.com/embed/rio-ntLkhSU" 
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
      <StyledSwiper>
      <H4 color="rgba(75, 75, 75, 0.89)" mdfs="2.4rem" fw="500">Physical Locations</H4>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
        }}
        > 
        
          <SwiperSlide>
            <Flex mdgap="1.4vw" gap="7.7px">
            {
              data.programLocale1.map((image, idx) => <img src={image} key={`set0ne${idx}`} alt="Lekki"/>)
            }
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
            {
              data.programLocale2.map((image,idx) => <img src={image} key={`set0${idx}`} alt="Lekki"/>)
            }
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
            {
              data.programLocale3.map((image, idx) => <img src={image} key={`set1${idx}`} alt="Lekki"/>)
            }
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
            {
              data.programLocale4.map((image,idx) => <img src={image} key={`set2${idx}`} alt="Lekki"/>)
            }
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
            {
              data.programLocale5.map((image, idx) => <img src={image} key={`set3${idx}`} alt="Lekki"/>)
            }
            </Flex>
          </SwiperSlide>
        </Swiper>

      </StyledSwiper>
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledSwiper = styled.div`
  h4{
    display: none;
    padding-bottom: 3.2rem;
  }
  padding: 3.2rem 0;
  img{
    width : 23.7vw;
  }
  @media (min-width: 1024px) {
    padding: 5.4rem 9.6rem;
    h4{
      display: block;
    }
    img{
      width: 20.63vw;
    }
  }
`

export const breathing = keyframes`
  0%,100%{
    transform: scale(1)
  }
  50%{
    transform: scale(1.1);
  }
`

const StyledPriceHero = styled.div`
  position: relative;
  /* margin-bottom: 10%; */
  background-color:#FFFDF7;
  .price-hero-container {
    padding: 0 9.6rem;
    padding-top:8.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 0;
      padding-top: 3.8rem;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      row-gap: 3rem;
    }
    
    .left-container {
      width: 50%;
      .textContainer{
        br{
          display: none;
        }
        h4{
          margin-top: 1rem;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        .textContainer{
          padding: 0 2.4rem 0 2.4rem ;
          padding-bottom: 3.9rem;
          br{
            display: block;
          }
        }
      }
      .video-box{
        display: none;
        margin-top: 51px;
        padding-right: 2rem;
        iframe{
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
          animation: ${breathing} 1.5s ease-in-out infinite;
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
          padding: 0px 2.4rem;
        }
      }
      .benefits-card {
        margin-top: 40px;
        height: 488px;
        background-color: #e8f3fe;
        position: relative;
        overflow: hidden;
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
              font-size: 22px;
              width: 100%;
            }
          }
        }
        .card-1,
    .card-2,
    .card-3 {
      cursor: pointer;
      transition: 1s ease;
      padding: 30px;
      .card-desc{
        display: flex;
        justify-content: space-between;
        .card-desci{
          display: flex;
        }
        .mobctrl{
          display: none;
        }
        @media (max-width: 768px) {
          .mobctrl{
          display: block;
        }
        }
        .icon{
          font-size: 35px;
          color: #FFF;
        }
        @media (max-width: 768px) {
            .icon{
              font-size: 35px;
            }
            .mobctrl{
              font-size: 25px;
              color: #FFF;
            }
          }
        P{
          @media (max-width: 768px) {
            font-size: 20px;
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
          }
          .sub-1 {
            display: none;
          }
          @media (max-width: 786px) {
            
            ${(props) =>
              props.card1Clicked &&
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
        .sub-1 {
              display: block;
            }
            height: 332px;
      `}
          }
          @media (min-width: 1024px) {
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
          @media (max-width: 786px) {
            ${(props) =>
              props.card2Clicked &&
              `
              ~ .card-3 {
                height: 160px;
          z-index: 5 !important;
          position: relative;
          transform: translateY(-158px);
              }
              height: 332px;
            transform: translateY(-100px);
            .sub-1 {
              display: block;
              
            }
      `}
          }
          @media (min-width: 1024px ){
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
                height: 168px;
          z-index: 5 !important;
          position: relative;
          transform: translateY(-150px);
              }
      `}
      }
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
          @media (max-width: 786px) {
            ${props => props.card3Clicked && `
            ~ .card-2 {
                height: 568px;
          z-index: 5 !important;
          transform: translateY(-548px);
            }
            height: 380px;
              transform: translateY(-250px);
            .sub-1 {
              display: block;
            }
            
            `}
          }
          @media (min-width: 1024px) {
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
          animation: ${breathing} 1.5s ease-in-out infinite;
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


