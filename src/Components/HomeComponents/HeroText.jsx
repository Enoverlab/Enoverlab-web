import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { H1, H4 } from '../../Utils/Typograpyhy'
import { theme } from '../../Utils/Theme'
import gsap from 'gsap'

const HeroText = () => {
    useEffect(() => {
        let from = gsap.from(['.hero-text1', '.hero-text2', '.hero-text3', '.hero-text4'], 5, {
            opacity: 0,
            duration: 5,
            y: 80,
            ease: 'power3.out',
            stagger: {
                amount: 0.5
            },
            delay: 0,
            immediateRender: false,
        })
        
        return () => {
            from.kill()
        }
    })

  return (
    <StyledHeroText>
        <div className="hero-text-container">
            <div className="hero-row">
            <div className="hero-text1">
            <H1 lineHeight="4.5rem"
            color="#4B4B4B;" fontSize="4.5rem" fontWeight={"400"} textAlign={"left"} mobileFontSize="2rem">
           Launch your &nbsp; 
            </H1>
            </div>
            <div className="hero-text2">
            <H1 
            lineHeight="4.5rem"
            color="#4B4B4B;" fontSize="4.5rem" fontWeight={"400"} textAlign={"left"} mobileFontSize="2rem"
            >
            <span className="blue-span">
                Product
            </span>
            </H1>
            </div>
            </div>
            <div className="hero-row">
            <div className="hero-text3">
            <H1 
            lineHeight="4.5rem"
            color="#4B4B4B;" fontSize="4.5rem" fontWeight={"400"} textAlign={"left"} mobileFontSize="2rem"
            >
            <span className="blue-span">
             Management &nbsp; 
            </span>
            </H1>
            </div>
            <div className="hero-text4">
           <H1
            lineHeight="4.5rem"
            color="#4B4B4B;" fontSize="4.5rem" fontWeight={"400"} textAlign={"left"} mobileFontSize="2rem"
            >
            <span className=''>
                Career
            </span>
            </H1>
           </div>
            </div>
           
          
         
        </div>
    </StyledHeroText>
  )
}

export default HeroText

const StyledHeroText = styled.div`
     @keyframes slide-top {
        0% {
            -webkit-transform: translateY(100px);
                    transform: translateY(100px);
        }
        100% {
            -webkit-transform: translateY(0);
                    transform: translateY(0);
        }
    }

    .hero-text-container{
        .hero-row{
            display: flex;
        }
        H1{
            .blue-span{
                color: ${theme.color.primary};
            }

            /* .span1{
                animation: slide-top 1s ease-in-out 0.5s;
            }
            .span2{
                animation: slide-top 1s ease-in-out 0.7s;
            }
            .span3{
                animation: slide-top 1s ease-in-out 0.9s;
            } */
        }
    }

`