import React from 'react'
import styled from 'styled-components'
import PriceTestimonialImage from '../../assets/PricingTestimonial1.png'
import playIcon from '../../assets/playIcon.png'
import { P } from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
const PricingTestimonialCard = ({imgSrc}) => {
  return (
    <StyledPricingTestimonialCard>
        <div className="pricing-testimonial-card-container">
            <div className="price-image-container">
                <img src={imgSrc} alt="testimonial" />
                <div className="play-icon-container">
                   <img src={playIcon} alt="" className="play-icon" />
                </div>
            </div>
            <div className="price-text-container">
                <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={400}>
                Kemi Ademide
                </P>
                <P color={theme.color.dark} textAlign="left" fontSize={"1.125rem"} fontWeight={500}>
                Nigeria 
                </P>
            </div>
        </div>
    </StyledPricingTestimonialCard>
  )
}

export default PricingTestimonialCard

const StyledPricingTestimonialCard = styled.div`
    .pricing-testimonial-card-container{
        .price-image-container{
            position: relative;
            max-width: 20rem;
            height: auto;
            
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
                border: 2px solid ${theme.color.dark};
            }
            .play-icon-container{
                position: absolute;
                bottom: 45%;
                right: 40%;
                z-index: 2;
        }
    } 
  }
`
