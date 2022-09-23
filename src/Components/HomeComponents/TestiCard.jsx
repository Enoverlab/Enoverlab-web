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
                    <img className="testi-man" src={testiMan} alt="testi" />
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
    max-width: 26.75rem;
    padding: 0rem 1rem;
    .testi-card-container{
        .testi-img-container{
            position: relative;
            max-width: 28.75rem;
            height: auto;
           .testi-man{
            &:hover{
                box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
                -webkit-box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
                -moz-box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
            transition: box-shadow 0.3s ease-in-out;
            }
           }
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

