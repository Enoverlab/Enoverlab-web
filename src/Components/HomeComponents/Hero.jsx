import React from 'react'
import styled from 'styled-components'
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
            <H4 mobileFontSize="0.875rem" mobileLineHeight="1.3125rem" color={"#4B4B4B"} fontWeight={"300"} textAlign={"left"}>
            Get the knowledge, skills and tools  you need to function effectively in the  role of a product manager
            </H4>
            <div className="button-container">             
                <SecondaryButton  to="/pricing" buttText="Start Here"/>
                {/* <PrimaryButton to="/" buttText="Join our Community" />   */}
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

const StyledHero = styled.div`
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(100px);
                    transform: translateY(100px);
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
    }



    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 2rem 5%;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 4.4375rem;
    }
    .hero-container{
        max-width: 60%;
        margin-top: 4rem;
        H1{
           
            .blue-span{
        color: ${theme.color.primary};
            }
            .span1{
                animation: slide-top 1s ease-in both;
                display: inline-block;
            }
            .span2{
                animation: slide-top 1s ease-in 0.5s both;
                display: inline-block;
            }
            .span3{
                animation: slide-top 1s ease-in 1s both;
                display: inline-block;
            }
        }
        H4{
            max-width: 37.75rem;
        }
        @media(max-width: 768px){
            max-width: 100%;
            margin-bottom: 1.5rem;
            H1{
                line-height: 3rem;
            }
        }
        .button-container{
            display: flex;
            column-gap: 2rem;
            margin-top: 2rem;
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
`