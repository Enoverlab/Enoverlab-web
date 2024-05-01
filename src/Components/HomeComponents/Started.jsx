import React from 'react'
import styled from 'styled-components'
import startedBg from '../../assets/startedBg.png'
import { H1 } from '../../Utils/styled/Typograpyhy'
import {theme} from '../../Utils/Theme'
import { BlackButton} from '../../Utils/styled/Buttons'
const Started = () => {
  return (
    <StyledStarted>
        <div className="started-container">
           <H1 mdfs="3.17vw" mdlh="6.8rem" lh="4.8rem" color= {theme.color.light} fs="7.47vw" fontWeight={600} >
           Launch  your Product Managment career today</H1>
            <div className="button-container">
                <BlackButton to="/programs" Text="Get Started"  />
            </div>
        </div>
    </StyledStarted>
  )
}

export default Started

const StyledStarted = styled.div`
    position: relative;
    padding: 5rem 2.3rem;
    .started-container{
        background-image: url(${startedBg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius:1rem;
        padding: 7.6rem 3.5rem;
        
        text-align: center;
        .button-container{
            display: flex;
            justify-content: center;
            margin-top: 4.9375rem;
        }
    }
    @media (min-width: 1024px) {
        padding: 7rem 10.25vw;
        .started-container{
            width: 79.36vw;
        padding: 9.6rem 17.92vw;
        }
    }
`