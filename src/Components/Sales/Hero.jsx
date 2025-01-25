import React from 'react'
import styled from 'styled-components'
import heroArrows from '../../assets/sales/heroArrows.png'
import {theme} from '../../Utils/Theme'
const Hero = () => {
  return (
    <HeroStyled>
        <div className="heading">
            <h4>
            Attention to ALL Professionals who want to Transition Into Tech <span> Without Coding In 2023…</span>
            </h4>
        </div>
        <div className="hero-section">
            <div className="hero-arrows-container">
                <img src={heroArrows} alt=""/>
            </div>

            <div className="hero-text">
                <h1 className="desktop">
                You can Now Start Getting International 
                </h1>
                <h1 className="desktop">
                Tech roles That are High in Demand
                </h1>
                <h1 className="blue-bg desktop"> 
                Without Any knowledge of coding.
                </h1>
                <h1 className="mobile">
                You can Now Start Getting  
                </h1>
                <h1 className="mobile">
                International Tech roles That
                </h1>
                <h1 className="mobile">
                Are High in Demand Without
                </h1>
                <h1 className="blue-bg mobile"> 
                Any knowledge of coding. 
                </h1>                      
                <p>
                If only you will be patient enough to read in between without skipping any lines.
                </p>
            </div>

            
        </div>
    </HeroStyled>
  )
}

export default Hero

const HeroStyled = styled.div`

.heading{
    background: #202020;
    padding: 2.9375rem 5%;
    color: #FFFFFF;
    h4{
        font-weight: 500;
        font-size: 1.25rem;

        span{
            font-weight: 800;
            text-decoration: underline;
        }

        @media screen and (max-width: 768px){
            font-size: .75rem;
            line-height: .945rem;
        }
    }
}
    .hero-section{
        padding: 2.9375rem 5%;

        .hero-arrows-container{
            width: 223px;
            height:auto;
            margin-bottom: 1.3544rem;
            @media screen and (max-width: 768px){
                width: 7.5625rem;
                margin-bottom: 1.3125rem;
            }
            img{
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        .hero-text{
            .desktop{
                display: block;
                @media screen and (max-width: 768px){
                    display: none !important;
                }
            }
            .mobile{
                display: none !important;
                @media screen and (max-width: 768px){
                    display: inline-flex !important;
                }
            }
            h1{
                font-size: 2.75rem;
                line-height: 3.8125rem;
                font-weight: 800;

                @media screen and (max-width: 768px){
                    font-size: 1.3rem;
                    line-height: 1.875rem;
                }
            }
            .blue-bg{
                    background-color: ${theme.color.primary};
                    color: #FFFFFF;
                    display: inline-flex;
                    padding: 0.5rem 1rem;
                    
            }
            p{
                font-size: .9375rem;
                margin-top: .9375rem;
                font-size: 1rem;
                @media screen and (max-width: 768px){
                    font-size: .75rem;
                }
            }
        }
    }
`