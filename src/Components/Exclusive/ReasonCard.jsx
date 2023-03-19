import React from 'react'
import styled from 'styled-components'
import {H4, P} from '../../Utils/Typograpyhy'
import reason1 from '../../assets/exclusive/reasonImage1.png'


const ReasonCard = ({image, title, description}) => {
  return (
    <StyledReasonCard  image={image}>
      <div className="card-overlay" />
       <div className="reason-card-content">
          <div className="reason-card-text">
            <H4 textAlign="left" paddingBottom="1rem" color="#fff"  fontSize="1.25rem" fontWeight="700" mobileFontSize="0.75rem">
              {title}
            </H4>
            <P textAlign="left" color="#fff" fontSize="0.875rem" fontWeight="300" mobileFontSize="0.65rem">
             {description}
            </P>
          </div>
       </div>
    </StyledReasonCard>
  )
}

export default ReasonCard

const StyledReasonCard = styled.div`
    background-image: url(${props => props.image ? props.image : reason1});
    background-size: cover;
    height: 27.8125rem;
    width: 100%;
   
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    box-shadow: -10px 14px 0px 0px rgba(0,70,255,1);
    box-sizing: border-box;
    @media(max-width: 768px){
      height: 19.75rem;
    min-width: 17.25rem;
    }

  

    .card-overlay{
      background:  linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom:0;
    }

    .reason-card-content{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      padding-left: 24px;
      width: 70%;

      @media(max-width: 768px){
        height: 40%;
      }
    
    }

    .reason-card {
        width: 100%;
    }
`
