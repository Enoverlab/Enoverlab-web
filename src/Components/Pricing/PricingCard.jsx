import React from 'react'
import styled, {keyframes} from 'styled-components'
import {theme} from '../../Utils/Theme'
import {H3, P, H4} from '../../Utils/styled/Typograpyhy'
// import Switch from 'react-switch'
import {IoLocationSharp} from 'react-icons/io5'

const PricingCard = ({children, cardTitle, cardText, backgroundColor, textColor, tuitionFee, duration, height, mobileHeight, backLeft, lineThrough, discountPrice, showSwitch, tabValue, switchTab}) => {
  return (
    <StyledPricingCard backgroundColor={backgroundColor} height={height} mobileHeight={mobileHeight} backLeft={backLeft} lineThrough={lineThrough} tabValue={tabValue}>
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
                    {
                        showSwitch && (
                            <>
                            <div
                            className="switch-box">
                                <div
                               className="text-switch"
                               onClick={()=>switchTab("tabActive")}
                               > 
                               <H4 mobileFontSize="0.8rem" fontSize="1rem" 
                                color={tabValue === "tabActive" ? "#FFF" : "#000"} 
                               fontWeight={"700"} textAlign={"left"}>
                           LEKKI    
                           </H4>
                           </div>
   
                               <div
                               className="text-switch-second"
                               onClick={()=>switchTab("tabInactive")}
                               >
                               <H4 mobileFontSize="0.8rem" fontSize="1rem" color={tabValue === "tabInactive" ? "#FFF" : "#000"} fontWeight={"700"} textAlign={"left"}>
                                       IBADAN
                               </H4>
                               </div>
                               <div
                               className="text-switch-third"
                               onClick={()=>switchTab("abujaActive")}
                               >
                               <H4 mobileFontSize="0.8rem" fontSize="1rem" color={tabValue === "abujaActive" ? "#FFF" : "#000"} fontWeight={"700"} textAlign={"left"}>
                                    ABUJA
                               </H4>
                               </div>
                               <div
                               className="text-switch-fourth"
                               onClick={()=>switchTab("bergActive")}
                               >
                               <H4 mobileFontSize="0.8rem" fontSize="1rem" color={tabValue === "bergActive" ? "#FFF" : "#000"} fontWeight={"700"} textAlign={"left"}>
                                       BERGER
                               </H4>
                               </div>
                           </div>

                            <P
                            fontSize="1.125rem"
                            textAlign="left"
                            color={theme.color.dark}
                            mobileFontSize="1rem"
                            paddingTop="1.5rem"
                            >
                           <IoLocationSharp/> {
  tabValue === "tabActive"
    ? "Lekki Gateview Plaza, Admiralty way, Lekki Phase 1"
    : tabValue === "tabInactive"
    ? "Cafe One, Palms Mall, Ring Road, Ibadan"
    : tabValue === "abujaActive"
    ? "22 Kumasi Cres, Wuse 2, Abuja"
    : "75b Ogunnusi Rd, Isheri, Ojodu Berger, Lagos Berger"
}
                            </P>
                            </>
                        )
                    }
                   

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
const pulse = keyframes`
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.9);
    }
`
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

                .card-front-text{
                
                }
            }
            .switch-box{
                display: flex;
                column-gap: 1rem;
                margin-top: 1rem;
                cursor: pointer;
                align-items: center;
                @media(max-width: 768px){
                    flex-wrap: wrap;
                } 
                        .text-switch{
                            background: ${props => props.tabValue === "tabActive" ? "#0046FF" : "#FFF"};
                            padding: 1rem;
                            border: 0.01rem solid ${theme.color.primary};
                            animation: ${pulse} 2s ease-in-out infinite;
                        }
                        .text-switch-second{
                            background: ${props => props.tabValue === "tabInactive" ? "#0046FF" : "#FFF"};
                            padding: 1rem;
                            border: 0.01rem solid ${theme.color.primary};
                            animation: ${pulse} 2s ease-in-out infinite;

                        }
                        .text-switch-third{
                            background: ${props => props.tabValue === "abujaActive" ? "#0046FF" : "#FFF"};
                            padding: 1rem;
                            border: 0.01rem solid ${theme.color.primary};
                            animation: ${pulse} 2s ease-in-out infinite;
                        }
                        .text-switch-fourth{
                            background: ${props => props.tabValue === "bergActive" ? "#0046FF" : "#FFF"};
                            padding: 1rem;
                            border: 0.01rem solid ${theme.color.primary};
                            animation: ${pulse} 2s ease-in-out infinite;
                            @media(max-width: 768px){
                                margin-top: 8px;
                            }
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
                   H4{
                    text-decoration: line-through;
                   }
                  
                  }
                   
                   
                }
            }
        }

       
`