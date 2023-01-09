import React from 'react'
import styled, {keyframes} from 'styled-components'
import HeroImg from '../../assets/heroImage.png'
import HeroImg1 from '../../assets/heroImage1.png'
import HeroImg2 from '../../assets/heroImage2.png'
import {  SecondaryButton } from '../../Utils/Buttons'
import { theme } from '../../Utils/Theme'
import { H1, H4 } from '../../Utils/Typograpyhy'
import Slider from 'react-slick'
import HeroText from './HeroText'


const Hero = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                
            }
        ]
    }
  return (
    <StyledHero>
        <div className="hero-container">
            <HeroText/>
            <H4 fontSize='1.75rem' mobileFontSize="1rem" mobileLineHeight="1.3125rem" color={"#4B4B4B"} fontWeight={"300"} lineHeight="2.264375rem" textAlign={"left"}
            paddingTop="0.5rem"
            >
            Get the knowledge and skills you need to become an impactful product manager
            </H4>
            <div className="button-container">             
                <SecondaryButton  to="/programs" buttText="Start Here"/>
            </div>
        </div>
        <div className="hero-img"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
        
        >
            <Slider {...settings}>
            <img src={HeroImg} alt=""/>
            <img src={HeroImg2} alt=""/>
            <img src={HeroImg1} alt=""/>
            </Slider>
        </div>
    </StyledHero>
  )
}

export default Hero

const animate = keyframes`
    from {
        transform: scale(.95);
    }

    to {
        transform: scale(1);
    }
`

const StyledHero = styled.div`
   
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 12rem 5% 5rem  5%;
    background-color: #FFFFFF;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1.4375rem;
        padding: 6rem 5% 5rem  5%;
    }
    .hero-container{
        max-width: 60%;
        margin-top: 4rem;
        H4{
            max-width: 44.0625rem;
        }
        @media(max-width: 768px){
            max-width: 100%;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
        .button-container{
            display: flex;
            column-gap: 2rem;
            margin-top: 2rem;
            animation: ${animate} 1s ease-in-out infinite; 
       
           
        }
    }
    .hero-img{
        width: 35%;
        height: auto;
        @media(max-width: 768px){
            width: 100%;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

            ${SecondaryButton}{
                animation: ${animate} 1s ease-in-out infinite; 
            }
`