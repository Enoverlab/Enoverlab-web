import React from 'react'
import styled from 'styled-components'
import { H2,H3,H4 } from '../../Utils/styled/Typograpyhy';
import fastTracking from "../../assets/icon/fastTracking.svg";
import privateCoaching from "../../assets/icon/private.svg"
import { PrimaryButton } from '../../Utils/styled/Buttons';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const StandardOptions = () => {
  return (
    <StyledStandardOptions>
        <header>
        <H2 tA="center" fs="5.60vw" w="75%" >
        Other Options for Standard Program
        </H2>
        </header>
        <Swiper
        modules={[Autoplay,Pagination]}
        pagination={{
            el: ".very",
            clickable: true,
          }}
        autoplay
      breakpoints={
        {
            320 : {
                slidesPerView : 1,
                spaceBetween: 25,
                autoplay : {
                    delay : 3000,
                }
            },
            640:{
                slidesPerView : 1,
                autoplay : {
                    delay : 5000
                }
            },
            1024: {
                slidesPerView : 2,
                spaceBetween: 55,
                autoplay : {
                    delay : 5000
                }
            }
        }
      }
        >
            <SwiperSlide>
                <div className='card'>
                    <img src={fastTracking} alt="Fast Tracking" />
                    <H3 fs="4.2vw">Fast-Track</H3>
                </div>
                <H4>
                This is for individuals who want to complete the standard program in 5 - 10 weeks instead of 18 - 20 weeks.
                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='card'>
                    <img src={privateCoaching} alt="private Coaching" />
                    <H3 fs="4.2vw">Executive Coaching</H3>
                </div>
                <H4 mdfs="">
                This is for high-level professionals who want a one-on-one coaching to get personal mentorship and support.
                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More"/>
                </div>
            </SwiperSlide>
            <div className="very"></div>
        </Swiper>
        
    </StyledStandardOptions>
  )
}

export default StandardOptions

const StyledStandardOptions = styled.div`
   background: #E8F3FE;
   header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
   }
   h2,h3{
    color: var(--Title-Text);
   }
   h3{
    margin-top: 2.4rem;
   }
   h4{
    margin-top: 2.4rem;
    color: var(--Body-Text);
    font-weight: 400;
    line-height: 28px; 
   }
   main{
    margin: 2.4rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
   }
   .card{
    background-color: #BAEAFA;
    padding: 4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .learnContainer{
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    margin-left : 10px;
   }
   padding: 3.2rem 2.4rem;
   @media (min-width: 1024px) {
    padding: 8rem 12rem;
    margin-bottom: 9.7rem;
    header{
        margin-bottom: 4rem;
    }
   section{
    width: 50%;
    max-width: 58.4rem;
   }
    .card{
    background-color: #BAEAFA;
    padding: 4.2rem;
    border-radius: 2.4rem;
   }
   h4{
    font-size: clamp(1.6rem,1.1904vw,1.9rem);
   }
   .learnContainer{
    justify-content: center;
   }
   }
`
