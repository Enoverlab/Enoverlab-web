import React from 'react'
import styled from 'styled-components'
import testiMan from '../../assets/testiMan.png'
import playIcon from '../../assets/playIcon.png'
import {P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
const TestiCard = () => {
  return (
    <StyledTestiCard>
        <div className="testi-card-container">
                <div className="testi-img-container">
                    <img src={testiMan} alt="testi" />
                   <div className="play-icon-container">
                   <img src={playIcon} alt="" className="play-icon" />
                   </div>
                </div>
                <div className="testi-text-container">
                    <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={400}>
                    Kemi Ademide
                    </P>
                    <P color={theme.color.dark} textAlign="left" fontSize={"1.125rem"} fontWeight={500}>
                    Product Manger,Omnipresent
                    </P>
                </div>
        </div>
    </StyledTestiCard>
  )
}

export default TestiCard

const StyledTestiCard = styled.div`
    max-width: 20rem;
    .testi-card-container{
        .testi-img-container{
            position: relative;
            max-width: 20rem;
            height: auto;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            .play-icon-container{
                position: absolute;
                bottom: 30%;
                right: 40%;
                z-index: 2;
            }
        }
    }
`

