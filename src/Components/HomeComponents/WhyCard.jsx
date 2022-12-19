import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import {P, H3} from '../../Utils/Typograpyhy'


const WhyCard = ({bgColor, title, content, imgSrc}) => {
  return (
     <StyledWhyCard bgColor={bgColor}>
    <div className="card-container">
        <H3 textAlign="left" fontWeight="500">
        {title}
        </H3>
        <P mobileFontSize="0.875rem" lineHeight="1.875rem" textAlign="left" fontWeight="300" color={theme.color.dark}>
        {content}
        </P>
        <div className="card-img">
            <img src={imgSrc} alt="bulb-img"/>
        </div>
    </div>
    </StyledWhyCard>
    
  )
}

export default WhyCard

const StyledWhyCard = styled.div`
    position: relative;
    background: ${props => props.bgColor ? props.bgColor : theme.color.quaternary};
    padding: 3rem;
    border: 0.0625rem solid ${theme.color.primary}; 
    @media(max-width: 768px){
        margin: 1rem 0rem;
        padding: 2rem;
    }
    .card-container{
        height: 30.875em;
        .card-img{
            z-index: 2;
            margin: 0.5rem;
            @media (max-width: 768px){
                width: 50%;
                height: auto;
            }
            img{
                position: absolute;
                right: -5rem;
                /* background-color: red; */
                bottom: 0;
                height: 50%;
                width: 90%;
                object-fit: contain;
                z-index: 1;
                filter: grayscale(100%);
                opacity: 70%;
                @media (max-width: 768px) {
                    width: 80%;
                    height: 40%;
                }
                
            }
        }
        @media (max-width: 768px){
            height: 23rem;
        }
    }
`