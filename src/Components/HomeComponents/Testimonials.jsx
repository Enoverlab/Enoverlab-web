import React from 'react'
import styled from 'styled-components'
import {H3, P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import topCornerStripe from '../../assets/topCornerStripes.png'
import bottomCornerStripe from '../../assets/bottomCornerStripes.png'
import TestiVideo from './TestiVideo'


const Testimonials = () => {
  return (
    <StyledTestimonials>
        <img className='topCorner' src={topCornerStripe} alt="top corner stripe" />
        <img className='bottomCorner' src={bottomCornerStripe} alt="bottom corner stripe" />
        <div className="testimonials-container">
            <div className="testimonials-text-container">
            {/* <P mobileFontSize="0.6875rem" color={theme.color.light} fontSize={"1.25rem"} fontWeight={500}>Project Presentation</P>     */}
            <H3 mobileFontSize="1.5rem" color={theme.color.light} fontWeight={500}>
            See the results of our training
            </H3>
            <P lineHeight="1.5125rem" mobileFontSize="1rem" color={theme.color.light} fontSize={"1.25rem"} fontWeight={400}>
            Hear what our trained PMs have to say
            </P>
            </div>
         <>
         <TestiVideo/>
         </>  
       
        </div>
     
    </StyledTestimonials>
  )
}

export default Testimonials

const StyledTestimonials = styled.div`
    padding: 5% 0% 1% 0%;
    position: relative;
    background-color: ${theme.color.tertiary};
    z-index: 1;
    /* height: 150vh; */
    
    @media (max-width: 768px) {
        height: 100%;
        padding: 10% 0% 5% 0%;
    }
       .topCorner{
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        z-index: -1; 
        filter: grayscale(100%);
        opacity: 20%;
        }
        .bottomCorner{
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 20%;
        width: 30%;
        filter: grayscale(100%)
        }
    
    .testimonials-container{
        position: relative;
        margin-bottom: 2.5rem;
        z-index: 3;

        @media (max-width: 768px) {
            margin-bottom: 3rem;
        }
      
    }
    .testimonials-text-container{
        /* margin-bottom: 4.9375rem; */
        @media (max-width: 768px) {
            /* margin-bottom: 1.9375rem; */
            padding: 0 1.5rem;
        }
        P{
            margin-bottom: 0.5rem;
        }
        H3{
            margin-bottom: 0.2rem;
        }
    }
    .testi-slider{
        padding: 0 0% 0 0%;
    }
    /* .slide-container{
        position: absolute;
        bottom: -4rem;
        right: 45%;
        display: none;
        @media (max-width: 768px){
            display: block;
            bottom: -4rem;
            right: 35%;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            img{
                cursor: pointer;
                width:3.5rem;
                height: 1rem;
            }
            .arrow{
                cursor: pointer;
            }
        }
    } */
`