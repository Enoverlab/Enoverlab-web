import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme' 
import { P } from '../../Utils/Typograpyhy'
import sessionPic from '../../assets/sessionPic.png'

const SessionsCard = ({guestJob, guestName, bgUrl}) => {
  return (
    <StyledSessionCard bgUrl={bgUrl}>
        <div className="cardText">
                <P fontSize="0.8rem" 
                    fontWeight="400"
                    color="#fff"
                    mobileFontSize="0.5rem"
                    className='text'>{guestName}</P>
                <P fontSize="0.4rem"
                    color='#fff' 
                    mobileFontSize='0.3rem'
                 className='text'>{guestJob}</P>
                </div>    
    </StyledSessionCard>
  )
}

export default SessionsCard

const StyledSessionCard = styled.div`
    max-width: 15.68rem;
    background-image: url(${({bgUrl}) => bgUrl});
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 15.25rem;
    border-radius: 0em 0em 0.625rem 0.625rem;
    aspect-ratio: 1/1;

    @media (max-width: 768px){
        max-width: 10.625rem;
        height: 9.6875rem;
    }
    /* border: 1px solid #0000FF; */
    ::before{
        content: '';
        position: absolute;
        background-color: #0046FF;
        width: 100%;
        height: 20%;
        bottom: 15px;
        opacity: .8;
        /* border-radius: 0em 0em 0.625rem 0.625rem; */
    }

    .cardText{
      height: 100%;
      position: absolute;
      transform: translate(1rem, 80%);

      @media (max-width: 768px){
        transform: translate(0.5rem, 75%);
      }
    }
`