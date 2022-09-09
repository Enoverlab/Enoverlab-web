import React, {useRef} from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import { H3, P } from '../../Utils/Typograpyhy'
import Slider from 'react-slick'
import SessionsCard from './SessionsCard'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowBlue.png'

    const Sessions = () => {
        const slider = useRef(null)
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,

                }
            }
        ]
    }
  return (
    <StyledSession>
        <div className="session-contaner">
            <div className="session-text-container">
                <P color={theme.color.dark} textAlign="left"  fontSize={"1.25rem"} fontWeight={400}>
                    Learn from the best
                </P>
                <H3 color={theme.color.dark} fontSize={"1.5rem"} textAlign="left" fontWeight={500}>
                    Product Sessions
                </H3>
                <P color={theme.color.dark} textAlign="left"  fontSize={"1.25rem"} fontWeight={400}>
                Learn from expert Product Management mentors
                </P>
            </div>
        <div className='session-slider-container'>
        <Slider {...Settings} ref={slider}>
        <SessionsCard/>
        <SessionsCard/>
        <SessionsCard/>
        <SessionsCard/>
        <SessionsCard/>
        </Slider>
        <div className="slide-container">
           <div className="slide-arrow">
                <img src={arrowLeft} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickPrev()} />
                <img src={arrowRight} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickNext()} />
            </div>
           </div>
       </div>
        
        
        </div>
   
    </StyledSession>
  )
}

export default Sessions

const StyledSession = styled.div`
    padding: 5% 2% 5% 5%;
    @media (max-width: 768px) {
        padding: 5% 2% 5% 2%;
    }
    background-color: ${theme.color.quaternary};
    .session-contaner{
        position: relative;
    }
    .session-slider-container{
        padding: 2rem 0rem 2rem 0rem;
       
    }
    .slide-container{
        position: absolute;
        top: 3rem;
        right: 6rem;
        @media(max-width: 768px){
        top: 0.8rem;
        right: 0.8rem;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
        }
    }
`