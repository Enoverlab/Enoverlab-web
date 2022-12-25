import React, {useRef} from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import { H3, P } from '../../Utils/Typograpyhy'
import Slider from 'react-slick'
import SessionsCard from './SessionsCard'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowBlue.png'
import topCornerSessions from '../../assets/topCornerSessions.png'
import { SessionObject } from './SessionObjects'

    const Sessions = () => {
        const slider = useRef(null)
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        rows: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        infinite: true,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    cssEase: "linear",
                    autoplay: true,
                    rows: 3
            },
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    arrows: false,
                    infinite: true,
                    cssEase: "linear",
                    autoplay: true,
                    rows: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    arrows: false,
                    infinite: true,
                    cssEase: "linear",
                    autoplay: true,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    cssEase: "linear",
                    autoplay: true,
                    rows: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    cssEase: "linear",
                    autoplay: true,
                    rows: 2
                }
            }
        ]
    }
  return (
    <StyledSession>
        <img src={topCornerSessions} className="topCorner" alt="" />
        <div className="session-container">
            <div className="session-text-container">
                <P color={theme.color.dark} textAlign="center"  fontSize={"1rem"} fontWeight={300}>
                    Learn from the best
                </P>
                <H3 color={theme.color.dark} fontSize={"1.5rem"} textAlign="center" fontWeight={500}>
                Our Product Mentors
                </H3>
                <P  lineHeight="1.5125rem" color={theme.color.dark} textAlign="center"  fontSize={"1rem"} fontWeight={300}>
                The amazing product managers from tech companies all over the world who have been part of our product sessions
                </P>
            </div>

             <div className='slider-container'>
                <Slider ref={slider} {...Settings}>
                    {SessionObject.map((item, index) => {
                        return(
                            <SessionsCard key={index} guestName={item.name} guestJob={item.role} logo={item.company} bgUrl={item.bgImage} logoWidth={item.width}/>
                        )
                    })
                    }
                </Slider>
            </div> 

       
     
        </div>
   
    </StyledSession>
  )
}

export default Sessions

const StyledSession = styled.div`
    padding: 5% 0% 2% 0%;
    position: relative;
    height: 150%;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 5% 2% 5% 5%;
        max-height: 80vh;
        margin-bottom: 10%;
    }
    /* @media(max-height: 667px){
        max-height: 100vh;
    } */
    background-color: ${theme.color.lightBlue};
    .topCorner{
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        z-index: 1; 
        filter: grayscale(100%);
        opacity: 100%;
        }
    .session-container{
        position: relative;
        margin-top: 5%;
       
        .session-text-container{
            margin-bottom: 5rem;
            P{
                margin-bottom: 0.5rem;
            }
            H3{
                margin-bottom: 1rem;
            }
            @media (max-width: 768px) {
                margin-bottom: 2rem;
               P{
                text-align: left;
                font-size: 0.8rem;
               }
               H3{
                text-align: left;
               }
            }
        }
    }
   
    .slider-container{
        position: relative !important; 
    padding: 0rem 2% 0rem 3%;
    
    @media (max-width: 768px) {
        padding: 0rem 2% 0rem 0rem;
    }
    }

   
     

   
`