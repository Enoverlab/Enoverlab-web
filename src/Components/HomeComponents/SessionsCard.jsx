import React, {useState} from 'react'
 import styled from 'styled-components'
 import { H4, P } from '../../Utils/Typograpyhy'
 const SessionsCard = ({bgUrl, logo, logoWidth, role, name}) => {
    const [isHover, setIsHover] = useState(false)
    const mobileView = window.matchMedia('(max-width: 768px)').matches
  return (
    <SessionsCardContainer bgUrl={bgUrl} logoWidth={logoWidth}>
        <div className={`sessions-card-${isHover || mobileView ? 'hover' : 'not-hover'}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        >
            {
                isHover || mobileView  ? (
                    <div className="sessions-card-content">
                        <div className="overlay" />
                       <div className="details-container">
                        <div className="details-text">
                        <H4
                        textAlign="left"
                        color="#fff"
                        fontSize="1rem"
                        fontWeight="700"
                        mobileFontSize="0.75rem"
                        >
                          {name}
                        </H4>
                        <P
                         textAlign="left"
                         color="#fff"
                         fontSize="0.875rem"
                         fontWeight="400"
                          mobileFontSize="0.65rem"
                        >
                       {role}
                        </P>
                        </div>
                        <div className="details-logo">
                          <img src={logo} alt="logo" />
                        </div>
                       </div>
                    </div>
                ) : null
            }
        </div>
    </SessionsCardContainer>
  )
}

export default SessionsCard

const SessionsCardContainer = styled.div`
    .sessions-card-not-hover{
        width: 100%;
        height: 24.625em;
        background-image: url(${props => props.bgUrl ? props.bgUrl : null});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        filter: grayscale(0);
        transition: all 0.5s ease-in-out;

        @media (max-width: 768px){
            height: 15.445rem;
            filter: grayscale(0);
            width: 95%;
            margin: 0.5rem 0;
        }
        @media screen and (min-width: 2560px) {
            height: 40.625rem;
        }

    }
    .sessions-card-hover{
        width: 100%;
        height: 24.625em;
        background-image: url(${props => props.bgUrl ? props.bgUrl : null});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: grayscale(0);
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        @media screen and (max-width: 768px){
            height: 15.445rem;
            width: 95%;
            margin: 0.5rem 0;
        }
        @media screen and (min-width: 2560px) {
            height: 40.625rem;
        }
        .sessions-card-content{
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .overlay{
                position: absolute;
                width: 100%;
                height: 30%;
                bottom: 0;
                background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                    transform: matrix(1, 0, 0, -1, 0, 0);
                  z-index: 0;
            }
            .details-container{
                width: 100%;
                padding: 1.5rem 0.2rem 1.6875rem 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 1;
                .details-text{

                }
                .details-logo{
                    width: ${props => props.logoWidth ? props.logoWidth : '3.5rem'};
                    @media (max-width: 768px){
                      width:  calc(${props => props.logoWidth } / 1.5);
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
            }
        }
    }
   
`