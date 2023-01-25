import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import {H3, P, H4} from '../../Utils/Typograpyhy'



const PricingCard = ({children, cardTitle, cardText, backgroundColor, textColor, tuitionFee, duration, height, mobileHeight, backLeft, lineThrough, discountPrice}) => {
  return (
    <StyledPricingCard backgroundColor={backgroundColor} height={height} mobileHeight={mobileHeight} backLeft={backLeft} lineThrough={lineThrough} >
        <div className="pricing-card-container">
        <div className="card-container-back">
            </div>
            <div className="card-container-front">
                <div className="card-front-text">
                    <H3  fontSize="2rem"  textAlign={"left"} fontWeight={"500"} color={textColor} paddingBottom={"0.5rem"}>
                        {cardTitle}
                    </H3>
                    <P lineHeight="1.5rem" mobileFontSize="1rem" textAlign={"left"} color={textColor} fontWeight="300" fontSize="0.993125rem" >
                        {cardText}
                    </P>
                    <div className="fees">
                        <div className="fee-tution">
                          <H4 mobileFontSize="0.8rem" fontSize="1rem" color={textColor} fontWeight={"700"} textAlign={"left"}>
                            TUITION FEE
                          </H4>
                            <div className="tution-price">
                            <H3 color={textColor} textAlign={"left"} fontSize={"2rem"}>
                               {tuitionFee}
                            </H3> 
                            <H4 mobileFontSize="0.8rem" fontSize="1.15rem" color={textColor} fontWeight={"700"} textAlign={"left"}>
                                {discountPrice}
                            </H4>   
                            </div>
                          
                        </div>
                        <div className="fee">
                            <H4 mobileFontSize="0.8rem" fontSize="1rem" color={textColor}fontWeight={"700"} textAlign={"left"}>
                                DURATION
                            </H4>
                            <H3 color={textColor} textAlign={"left"} fontSize={"2rem"}>
                                {duration}
                            </H3>
                    </div>
                    </div>
            </div>
         {children}
        </div>
        </div>
    </StyledPricingCard>
  )
}

export default PricingCard

const StyledPricingCard = styled.div`
        position: relative;
        width: 100%;
        .pricing-card-container{
            position: relative;

            .card-container-back{
                position: absolute;
                top: -50px;
                left: ${props => props.backLeft ?  props.backLeft : "-20px"};
                width: 100%;
                height: ${props => props.height ? props.height : "150rem"};
                z-index: 1;
                border: 1px solid ${theme.color.dark};
                background-color: ${props => props.backgroundColor ? props.backgroundColor : '#DBF5FF'};
                @media (max-width: 768px){
                    width: 100%;
                    height:  ${props => props.mobileHeight ? props.mobileHeight : "150rem"};
                    left: 20px;
                    top: -30px;
                }
            }
            .card-container-front{
                position: relative;
                width: 100%;
                height:  ${props => props.height ? props.height : "150rem"};
                z-index: 2;
                padding: 3rem;
                border: 1px solid ${theme.color.dark};
                background-color: ${props => props.backgroundColor ? props.backgroundColor : '#DBF5FF'};
                @media(max-width: 768px){
                    height:  ${props => props.mobileHeight ? props.mobileHeight : "150rem"};
                    width: 100%;
                    padding: 3rem 1.3rem;
                }
            }

            .fees{
                display: flex;
                justify-content: space-between;
                margin: 2rem 0;

                .fee-tution{
                  .tution-price{
                    display: flex;
                    align-items: baseline;
                    column-gap: 0.3rem;
                    H3{
                    text-decoration: ${props => props.lineThrough ? "line-through" : "none"};
                   }
                  
                  }
                   
                   
                }
            }
        }
`