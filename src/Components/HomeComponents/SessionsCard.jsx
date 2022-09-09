import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme' 
import { P } from '../../Utils/Typograpyhy'
import sessionPic from '../../assets/sessionPic.png'

const SessionsCard = () => {
  return (
    <StyledSessionCard>
        <div className="card-container">
            <div className="img-container">
                <img src={sessionPic} alt="session" />
            </div>
            <P color={theme.color.dark}  fontSize={"1.25rem"} fontWeight={500}>
            Kemi Ademide
            </P>
            <P color={theme.color.dark} fontSize={"1.125rem"} fontWeight={500}>
            Product Manger,Omnipresent
            </P>
        </div>
    </StyledSessionCard>
  )
}

export default SessionsCard

const StyledSessionCard = styled.div`
    max-width: 23.125rem;
    .card-container{
        padding: 2rem 1.5rem;
        @media (max-width: 768px) {
            padding: 2rem 1.5rem 2rem 3.5rem;
        }
        .img-container{
            position: relative;
            max-width: 23.125rem;
            img{
                width: 100%;
                border-radius: 50%;
                height: 100%;
                object-fit: contain;
                box-shadow: -16px -14px 0px 3px rgba(0,70,255,1);
                -webkit-box-shadow: -16px -14px 0px 3px rgba(0,70,255,1);
                -moz-box-shadow: -16px -14px 0px 3px rgba(0,70,255,1);
            }
        }
    }
`