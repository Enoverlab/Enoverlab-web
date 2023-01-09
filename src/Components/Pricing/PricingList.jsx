import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Utils/Theme'
import { H3, P, H4, H1 } from '../../Utils/Typograpyhy'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const PricingList = ({ listText, listSubText, textColor}) => {
  return (
    <StyledPricingList>
      <div className="pricing-list-container">
        <div className="pricing-list">
          <div className="pricing-list-item">
            <div className="list-bullet">
            <H4 textAlign="left" color={textColor} mobileFontSize="1rem" fontWeight="700" fontSize="1.2rem">
               <AiOutlineCheckCircle/>  
            </H4>
            </div>
            <div className="text-container">
            <H4 fontSize="1.25rem" textAlign="left" color={textColor}  mobileFontSize="0.875rem" >
              {listText} 
            </H4>
            {/* <P paddingTop="0.25rem" fontSize="1rem" textAlign="left" color={textColor} mobileFontSize= "0.8rem" fontWeight={300} lineHeight="1.3125rem">
              {listSubText}
            </P> */}
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
    @media screen {
     margin-top: 1.175rem;
    }
    .pricing-list{
      .pricing-list-item{
        display: flex;
        column-gap: 2.375rem;
        margin-bottom: 2.1475rem;
        @media (max-width: 768px) {
          column-gap: 0.5rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
`