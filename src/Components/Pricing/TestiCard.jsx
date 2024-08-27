import React from 'react'
import styled from 'styled-components'
import playIcon from '../../assets/playIcon.png'
import {P} from '../../Utils/styled/Typograpyhy'
import {theme} from '../../Utils/Theme'
const TestiCard = ({testImg, testName, testRole, showButton, nameFontSize, nameMobileFontSize, roleFontSize, roleMobileFontSize, textAlign, filterImg}) => {
  return (
    <StyledTestiCard filterImg={filterImg}>
        <div className="testi-card-container">
                <div className="testi-img-container">
                    <img className="testi-man" src={testImg} alt="testi" />
                  {
                    showButton  && (
                        <div className="play-icon-container">
                        <img src={playIcon} alt="" className="play-icon" />
                        </div>
                    )
                  }
                </div>
                <div className="testi-text-container">
                    <P color textAlign={textAlign} fontSize={nameFontSize} fontWeight={500}
                    mobileFontSize={nameMobileFontSize}
                    >
                  {testName}
                    </P>
                    <P color={theme.color.light} textAlign={textAlign} fontSize={roleFontSize} fontWeight={400}
                    mobileFontSize={roleMobileFontSize}
                    >
                   {testRole}
                    </P>
                </div>
        </div>
    </StyledTestiCard>
  )
}

export default TestiCard

const StyledTestiCard = styled.div`
    width: 100%;
    .testi-card-container{
        padding: 0 0%;
        .testi-img-container{
            position: relative;
            width: 100%;
            max-width: 94.5rem;
            height: 150px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
               opacity: ${props => props.filterImg ? '0.5' : '1'};
            }
        }

        .testi-text-container{
            margin-top: 0.5rem;
            @media(max-width: 768px){
                P{
                    text-align: center;
                    opacity: ${props => props.filterImg ? '0.5' : '1'};
                }
            }
        }
       
    }
`

