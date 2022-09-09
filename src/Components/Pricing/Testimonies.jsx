import React from 'react'
import {H3, P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import Slider from 'react-slick'
import testImage from '../../assets/PricingTestimonial1.png'
import testImage2 from '../../assets/PricingTestimonial2.png'
import testImage3 from '../../assets/PricingTestimonial3.png'
import styled from 'styled-components'
import PricingTestimonialCard from './PricingTestimonialCard'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowBlue.png'


const Testimonies = () => {
    const slider = React.useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    }
  return (
            <StyledTestimonies>
                <div className="testimonies-container">
                    <div className="testimonies-header">
                        <P textAlign="left" color={theme.color.dark}
                        fontSize="1rem"
                        paddingBottom="0.5rem"
                        mobileFontSize="0.8rem"
                        >Testimonials</P>
                        <H3 textAlign="left" color={theme.color.dark} fontWeight={500}
                        paddingBottom="0.5rem"
                        
                        >
                        Hear what our trained PMs have to say
                        about their experience learning at Enoverlab
                        </H3>
                        <P textAlign="left" color={theme.color.dark}
                        mobileFontSize="0.8rem"
                        >
                        We are glad to equip individuals with the digital skills to  accelerate their career as certified product managers that are competent . Learn how product managers enjoyed learning with enoverlab.
                        </P>
                    </div>
                    <div className="testimonies-flex">
                        <PricingTestimonialCard imgSrc={testImage}/>
                        <PricingTestimonialCard imgSrc={testImage2}/>
                        <PricingTestimonialCard imgSrc={testImage3}/>
                    </div>
                        <div className="testimonial-slider">
                        <Slider {...settings} ref={slider}>
                        <PricingTestimonialCard imgSrc={testImage}/>
                        <PricingTestimonialCard imgSrc={testImage2}/>
                        <PricingTestimonialCard imgSrc={testImage3}/>
                        </Slider>
                        <div className="slide-arrow-container">
                            <img src={arrowLeft} alt="arrow" className="arrow"  onClick={()=> slider?.current?.slickPrev()} />
                            <img src={arrowRight} alt="arrow" className="arrow"  onClick={()=> slider?.current?.slickNext()} />
                        </div>
                    </div>
                </div>
            </StyledTestimonies>    
  )
}

export default Testimonies

export const StyledTestimonies = styled.div`
   
    .testimonies-container{
        position: relative;
        padding: 5% 5%; 
        background-color: ${theme.color.tertiary};
        @media (max-width: 768px){
            padding: 10% 5%;
        }
        .testimonies-header{
            max-width: 60%;
            margin-bottom: 2rem;
            @media (max-width: 768px){
                max-width: 100%;
            }
        }
        .testimonies-flex{
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;

            @media (max-width: 768px){
                display: none;
            }
        }

        .testimonial-slider{
            display: none;

            @media (max-width: 768px){
                display: block;
            }
            .slide-arrow-container{
                display: flex;
                position: absolute;
                top: 2%;
                right: 5%;
            }
        }

      
    }
`