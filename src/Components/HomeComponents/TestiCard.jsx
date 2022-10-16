import React from 'react'
import styled from 'styled-components'
import testiMan from '../../assets/testiMan.png'
import playIcon from '../../assets/playIcon.png'
import {P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
const TestiCard = ({testImg, testName, testRole}) => {
  return (
    <StyledTestiCard>
        <div className="testi-card-container">
                <div className="testi-img-container">
                    <img className="testi-man" src={testImg} alt="testi" />
                   <div className="play-icon-container">
                   <img src={playIcon} alt="" className="play-icon" />
                   </div>
                </div>
                <div className="testi-text-container">
                    <P color={theme.color.light} textAlign="center" fontSize={"1.25rem"} fontWeight={400}>
                  {testName}
                    </P>
                    <P color={theme.color.light} textAlign="center" fontSize={"1.125rem"} fontWeight={500}>
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
    padding: 0rem 0%;
    .testi-card-container{
        padding: 0 0%;
        .testi-img-container{
            position: relative;
            width: 100%;
            max-width: 94.5rem;
            height: auto;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .play-icon-container{
                position: absolute;
                bottom: 45%;
                right: 45%;
                z-index: 2;

                @media (max-width: 768px) {
                    bottom: 40%;
                    right: 40%;
                }
            }
        }

        .testi-text-container{
            margin-top: 1.375rem;
            @media(max-width: 768px){
                P{
                    text-align: center;
                }
            }
        }
       
    }
`

