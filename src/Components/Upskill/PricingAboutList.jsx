import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Utils/Theme'
import { P } from '../../Utils/Typograpyhy'
import { AiOutlineCheck } from 'react-icons/ai'
const PricingAboutList = ({listText, listText2, key}) => {
  return (
    <StyledPricingAboutList key={key}>
        <div className="pricing-about-list-container">
          <div className="check-container">
            <AiOutlineCheck className='check-icon' />
          </div>
          <div className="list-text">
            <P lineHeight="2.0625rem" fontSIze="1.375rem" color="#4B4B4B" textAlign="left" mobileFontSize="1rem">{listText}</P>
            <P lineHeight="2.0625rem" fontSIze="1.375rem" color="#4B4B4B" textAlign="left" mobileFontSize="1rem">{listText2}</P>
          </div>
        </div>
    </StyledPricingAboutList>
  )
}

export default PricingAboutList

export const StyledPricingAboutList = styled.div`
    .pricing-about-list-container{
        display: flex;
        /* align-items: center; */
        column-gap: 0.98125rem;
        margin-bottom: 1rem;
        @media(max-width: 768px){
          margin-bottom: 0.75rem;
          column-gap: 0.53125rem;
        }
        .check-container{
          margin-top: 0.4rem;
          .check-icon{
            font-size: 1.6875rem;
            /* line-height: 2.6625rem; */
            color: ${theme.color.dark};

            @media(max-width: 768px){
              font-size: 1rem;
            }
          }
        }
    }
`