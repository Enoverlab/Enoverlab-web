import React from 'react'
import styled from 'styled-components'
import {H3} from '../../Utils/styled/Typograpyhy'
import TestiVideo from './TestiVideo'


const Testimonials = () => {
  return (
    <StyledTestimonials>
        <div className="testimonials-container">
            <div className="testimonials-text-container">
                <H3 mdfs="2.38vw" fs="5.60vw" mb="5rem" color="var(--Body-Text)" tA="center" fw={700} width="70%">
                What People Say About Enoverlab
                </H3>
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
    z-index: 1;
    @media (max-width: 768px) {
        height: 100%;
        padding: 10% 0% 5% 0%;
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
        display: flex;
        justify-content: center;
        @media (max-width: 768px) {
            padding: 0 1.5rem;
        }
    }
    .testi-slider{
        padding: 0 0% 0 0%;
    }
`