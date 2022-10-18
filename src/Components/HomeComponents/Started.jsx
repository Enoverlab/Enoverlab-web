import React from 'react'
import styled from 'styled-components'
import startedBg from '../../assets/startedBg.png'
import { H1 } from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import { SecondaryButton } from '../../Utils/Buttons'
const Started = () => {
  return (
    <StyledStarted>
        <div className="started-container">
           <H1 mobileFontSize="1.2rem" color= {theme.color.light} fontSize="3.25rem" fontWeight={400} >
           Launch  your Product <br/> Managment career today</H1>
            <div className="button-container">
                <SecondaryButton to="/programs" buttText="Get Started"  />
            </div>
        </div>
    </StyledStarted>
  )
}

export default Started

const StyledStarted = styled.div`
    padding: 5% 10% 5% 10%;
    position: relative;
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
        border-radius: 0.5rem;
        /* width: 100%; */
        H1{
            @media(max-width: 768px){
                line-height: 2rem;
            }
        }
        .button-container{
            display: flex;
            justify-content: center;
            margin-top: 4.9375rem;
            @media(max-width: 768px){
                margin-top: 2rem;
            }
        }
    }
`