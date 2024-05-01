import React from 'react'
import styled from 'styled-components'
import heroImage from '../../assets/exclusive/heroImage.png'
import {H1, P} from '../../Utils/styled/Typograpyhy'
import logo from '../../assets/enovLogo.png'
import { SecondaryButton } from '../../Utils/styled/Buttons'

const Hero = () => {
  return (
    <StyledHero>
        {/* <div className="bg-image">
            <img src={heroImage} alt="" />
        </div> */}
        <div className="logo-center">
            <img src={logo} alt="" />
        </div>
        <div className="content">

            <div className="content-box">
                <div className="heading-content">
                <H1 color="#FFF" fontSize="3.0625rem"  mobileFontSize="25px" mobileLineHeight="25px" lineHeight="3.8125rem">An Exclusive Product </H1>
            <H1 color="#FFF" fontSize="3.0625rem"  mobileFontSize="25px" mobileLineHeight="25px" lineHeight="3.8125rem">Management training experience</H1>
                </div>
            
            <div className="p-container">
            <P  color="#FFF" fontSize="27.72px"  mobileFontSize="14px" mobileLineHeight="16px">Learn Product Management skills in a premium learning environment, connect with outstanding professionals, and take your career to the next level</P>
            </div>

            <div  onClick={() => {
          window.open("https://bit.ly/enoverlabexclusive")
        }} className="button-container">
        <SecondaryButton to="#" buttText="Enrol Now"/>
        </div>
            </div>
          
        </div>
     
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background-image: url(${heroImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 768px){
        max-height: 55vh;
        padding: 0 1.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 6rem;


    }


    .logo-center{
        position: absolute;
        top: 2rem;
        left: 40%;
        right: 0;
        width: 14.0625rem;
        @media screen and (max-width: 768px){
            position: relative;
            left: 0;
            width:  6.7344rem;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-self: center;
            align-self: center;

            img{
                width: 100%;
                height: 100%;

            }
        }
    }
    

    .content{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        @media screen and (max-width: 768px){
            align-items: flex-start;
        }
        H1{
            color: #fff;
            text-align: center;
        }
        .content-box{
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media screen and (max-width: 768px){
                align-items: center;
                row-gap: .5rem;

            }
            .p-container{
                width: 80%;
            }
            .button-container{
                margin-top: 1.3125rem;

                @media screen and (max-width: 768px){
                    margin-top: 1.5rem;
                }
            }
        }
        
        @media screen and (max-width: 768px){
            .content-box{
                width: 100%;
               .heading-content{
                H1{
                    text-align: center;
                }
               }
                .p-container{
                    width: 100%;
                    P{
                        text-align: center;
                     
                    }
                }
            }
        }
    }

    /* .bg-image {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
           
        }
    } */
`