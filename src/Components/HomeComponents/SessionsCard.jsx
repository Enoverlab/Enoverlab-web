import React from 'react'
import styled from 'styled-components'
import { P } from '../../Utils/Typograpyhy'

const SessionsCard = ({guestJob, guestName, bgUrl}) => {
  return (
    <StyledSessionCard bgUrl={bgUrl}>
        <div className="cardText">
                <P fontSize="0.8rem" 
                    fontWeight="400"
                    color="#fff"
                    textAlign="left"
                    lineHeight="0.8rem"
                    mobileFontSize="0.7rem"
                    className='text'>{guestName}</P>
                <P fontSize="0.6rem"
                    color='#fff' 
                    textAlign="left"
                    mobileFontSize='0.6rem'
                    lineHeight="0.8rem"
                 className='text'>{guestJob}</P>
                </div>    
    </StyledSessionCard>
  )
}

export default SessionsCard

const StyledSessionCard = styled.div`
    max-width: 19.625rem;
    background-image: url(${({bgUrl}) => bgUrl});
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 15.25rem;
    border-radius: 0em 0em 0.625rem 0.625rem;
    aspect-ratio: 1/1;

    @media (max-width: 768px){
        max-width: 10.625rem;
        height: 10.6875rem;
        margin-bottom: 1rem;
    }
    /* border: 1px solid #0000FF; */
    ::before{
        content: '';
        position: absolute;
        background-color: #0046FF;
        width: 100%;
        height: 20%;
        bottom: 0px;
        opacity: .8;
        /* border-radius: 0em 0em 0.625rem 0.625rem; */
        @media (max-width: 768px){
          bottom: 1px
        }
    }

    .cardText{
      height: 100%;
      position: absolute;
      transform: translate(1rem, 85%);

      @media (max-width: 768px){
        transform: translate(0.5rem, 80%);
      }
    }
`