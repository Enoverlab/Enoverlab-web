import React from 'react'
import styled from 'styled-components'
import startedBg from '../../assets/startedBg.png'
import { H1 } from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import { SecondaryButton } from '../../Utils/Buttons'
import { StyledSecondaryButton } from '../../Utils/Buttons'
const Started = () => {
  return (
    <StyledStarted>
        <div className="started-container">
           <H1 mobileFontSize="1.05rem" color= {theme.color.light} fontSize="3.25rem" fontWeight={500} >
           Want to become an <br/>impactful Product Manager?</H1>
            <div className="button-container">
                <SecondaryButton to="/programs" buttText="Get Started"  />
            </div>
        </div>
    </StyledStarted>
  )
}

export default Started

const StyledStarted = styled.div`
    padding: 5% 12% 5% 12%;
    position: relative;
    /* height: 150vh; */
    /* min-height: 70vh; */
    @media(max-width: 768px){
        min-height: 35vh;
    }
    .started-container{
        background-image: url(${startedBg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 5% 5% 5% 5%;
        border-radius:1rem;
        /* width: 100%; */
        H1{
            line-height: 4rem;
            @media(max-width: 768px){
                line-height: 2rem;
            }
        }
        .button-container{
            display: flex;
            justify-content: center;
            margin-top: 4.9375rem;

            ${StyledSecondaryButton}{
                @media(max-width: 768px){
                    a{
                        span{
                            font-size: 0.875rem;
                        }
                    }
                }
            }
            @media(max-width: 768px){
                margin-top: 2rem;
            }
        }
    }
`