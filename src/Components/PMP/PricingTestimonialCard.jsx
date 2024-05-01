import React from 'react'
import styled from 'styled-components'
import { P } from '../../Utils/styled/Typograpyhy'
import {theme} from '../../Utils/Theme'
const PricingTestimonialCard = ({vidSrc, flag, name, country}) => {
  return (
    <StyledPricingTestimonialCard>
        <div className="pricing-testimonial-card-container">
            <div className="price-image-container">
            <iframe src={vidSrc} title="youtube player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="play-icon-container">
               
                   {/* <img src={playIcon} alt="" className="play-icon" /> */}
                </div>
            </div>
            <div className="price-text-container">
                <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={400}>
               {name}
                </P>
                <P color={theme.color.dark} textAlign="left" fontSize={"1.125rem"} fontWeight={500}>
                {country} {flag}
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
            width: 26.0625rem;
            height: 35.4375rem;
            @media (max-width: 768px){
                width: 100%;
                height:35.4375rem;

            }
            iframe{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border: 2px solid ${theme.color.dark};
                
                @media (max-width: 768px){
                    width: 100%;
                height:35.4375rem;
                }
            }
            .play-icon-container{
                position: absolute;
                bottom: 45%;
                right: 40%;
                z-index: 2;

                img{
                    border: 0px solid ${theme.color.dark};
                    box-shadow: 0px 0px 0px 0px;
                }
        }
    } 
    .price-text-container{
        margin-top: 1.125rem;
        @media (max-width: 768px){
            margin-top:1rem;
        }
    }
  }
`
