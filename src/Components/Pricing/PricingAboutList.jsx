import React from 'react'
import styled from 'styled-components'
import check from '../../assets/darkMark.svg'
import { theme } from '../../Utils/Theme'
import { P } from '../../Utils/Typograpyhy'
const PricingAboutList = ({listText, key}) => {
  return (
    <StyledPricingAboutList key={key}>
        <div className="pricing-about-list-container">
          <div className="check-container">
            <img src={check} alt="check" />
          </div>
          <div className="list-text">
            <P lineHeight="2.0625em" color="#4B4B4B" textAlign="left" mobileFontSize="0.8rem">{listText}</P>
          </div>
        </div>
    </StyledPricingAboutList>
  )
}

export default PricingAboutList

export const StyledPricingAboutList = styled.div`
    .pricing-about-list-container{
        display: flex;
        align-items: center;
        column-gap: 0.98125rem;
        margin-bottom: 1.5rem;
        
        .check-container{
          width: 1.575rem;
          height: 1.575rem;
          /* margin-top: 2rem; */
          img{
            width: 1.5rem;
            height: 1.575rem;
          }
          @media(max-width: 768px){
             
              img{
                width: 1.0rem;
                height: 1.0rem;
                object-fit: contain;
              }
          }
        }
    }
`