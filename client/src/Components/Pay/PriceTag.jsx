import React from 'react'
import styled from 'styled-components'
import {H3, H4} from '../../Utils/styled/Typograpyhy'
const PriceTag = ({tuitionFee, duration, textColor}) => {
  return (
    <StyledPriceTag>
          <div className="fees">
                        <div className="fee">
                          <H4 mobileFontSize="0.8rem" fontSize="1rem" color={textColor} fontWeight={"700"} textAlign={"left"}>
                            TUITION FEE
                          </H4>
                           <H3 color={textColor} textAlign={"left"} fontSize={"2.25rem"}>
                               {tuitionFee}
                            </H3>    
                        </div>
                        <div className="fee">
                            <H4 mobileFontSize="0.8rem" fontSize="1rem" color={textColor}fontWeight={"700"} textAlign={"left"}>
                                DURATION
                            </H4>
                            <H3 color={textColor} textAlign={"left"} fontSize={"2.25rem"}>
                                {duration}
                            </H3>
                    </div>
                    </div>
    </StyledPriceTag>
    )
}

export default PriceTag

const StyledPriceTag = styled.div`
      
      .fees{
                display: flex;
                justify-content: space-between;
                margin: 2rem 0;
                
            }
`