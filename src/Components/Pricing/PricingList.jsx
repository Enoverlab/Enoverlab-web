import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Utils/Theme'
import { H3, P, H4, H1 } from '../../Utils/Typograpyhy'
const PricingList = ({index, listText, listSubText}) => {
  return (
    <StyledPricingList>
      <div className="pricing-list-container">
        <div className="pricing-list">
          <div className="pricing-list-item">
            <div className="list-bullet">
            <H4 textAlign="left" color={theme.color.dark} mobileFontSize="1rem">
              {index + 1}
            </H4>
            </div>
            <div className="text-container">
            <H4 textAlign="left" color={theme.color.dark}  mobileFontSize="1rem">
              {listText} 
            </H4>
            <P paddingTop="0.25rem" textAlign="left" color={theme.color.dark} mobileFontSize= "0.8rem">
              {listSubText}
            </P>
            </div>
          </div>
        </div>
      </div>
    </StyledPricingList>
  )
}

export default PricingList

const StyledPricingList = styled.div`
  .pricing-list-container {
    margin-top: 2.375rem;
    .pricing-list{
      .pricing-list-item{
        display: flex;
        column-gap: 2.375rem;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
          column-gap: 1rem;
        }
      }
    }
  }
`