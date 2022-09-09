import React from 'react'
import styled from 'styled-components'
import {theme} from '../Utils/Theme'
import { P } from '../Utils/Typograpyhy'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookMessenger, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
        <div className="footer-container">
            <div className="footer-left">
            <div className="container-left-1">
            <P fontSize="1.3125rem" color={theme.color.light} textAlign="left" mobilefontSize="1rem">
                    enoverlab
                </P>
                <P lineHeight="28px" color={theme.color.light} textAlign="left" fontSize="1rem" mobileFontSize="0.8rem">
                Building product managers today,tomorrow nd the future
                </P>
                <div className="icon-container">
                    <div className="social-icon">
                        <AiFillLinkedin/>
                    </div>
                    <div className="social-icon">
                        <FaFacebookMessenger/>
                    </div>
                    <div className="social-icon">
                        <FaTwitter/>
                    </div>
                </div>
            </div>
            <div className="container-left-2">
                <P fontSize="1.3125rem" color={theme.color.light} textAlign="left" lineHeight="28px">
                    Company
                </P>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" lineHeight="28px" mobileFontSize="0.8rem">
                    Programs
                </P>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" lineHeight="28px" mobileFontSize="0.8rem">
                    Blog
                </P>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" lineHeight="28px" mobileFontSize="0.8rem">
                    About us
                </P>
            </div>
            </div>
            <div className="footer-right">
            <div className="container-right-1">
                <P fontSize="1.3125rem" color={theme.color.light} textAlign="left" lineHeight="28px" >
                    Support
                </P>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" lineHeight="28px" mobileFontSize="0.8rem">
                    Community
                </P>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" lineHeight="28px" mobileFontSize="0.8rem">
                    Resources
                </P>
            </div>

            <div className="container-right-2">
                <div className='form'>
                    <P fontSize="1.3125rem" color={theme.color.light} textAlign="left" paddingBottom="0.58rem">
                        Launch your PM Career
                    </P>
                    <input type="text" name="" id="" />
                    <button type="submit">Subscribe</button>
                </div>
                <P color={theme.color.light} textAlign="left" fontSize="1rem" paddingTop="0.58rem">Receive important product management info weekly</P>
            </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <P paddingTop="1rem" color={theme.color.light} textAlign="center">
            Copyright @ enoverlab 2022. All Rights Reserved.
            </P>
        </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
    background-color: ${theme.color.primary};
    padding: 5% 5%;
    @media  (max-width: 768px) {
        padding: 10% 10%;
    }
    .footer-container{
        display: flex;
        justify-content: space-between;
        padding: 0% 0% 5% 0%;
        /* align-items: center; */
        @media (max-width: 768px){
            flex-direction: column;
        }
        .footer-left{
            display: flex;
            justify-content: space-between;
            width: 35%;
            @media (max-width: 768px){
                width: 100%;
                justify-content: flex-start;
                column-gap: 1.375rem;
            }
            .container-left-1{
                width: 15.8125rem;
                .icon-container{
                    display: flex;
                    column-gap: 1rem;
                    margin-top: 0.8rem;
                    .social-icon{
                        color: ${theme.color.light};
                    }
                }

                @media (max-width: 768px){
                    max-width: 9.6875rem;
                }
            }
            .container-left-2{

            }
           
        }
        .footer-right{
            display: flex;
            justify-content: space-between;
            width: 55%;
            @media (max-width: 768px){
                width: 100%;
                justify-content: space-between;
                column-gap: 5.9375rem;
                
            }
            .container-right-1{

            }
            .container-right-2{
               
                
                input{
                    padding: 1rem;
                    border: none;
                    width:50%;
                    outline: none;
                    @media (max-width: 768px){
                        width: 100%;
                    }
                }
                button{
                    padding: 1rem;
                    border: none;
                    width: 30%;
                    outline: none;
                    background-color: ${theme.color.tertiary};
                    color: ${theme.color.light};
                    @media (max-width: 768px){
                        width: 80%;
                    }
                }
                @media (max-width: 768px){
                    display: flex;
                    flex-direction: column;
                    P{
                        font-size: 0.8rem;
                    }
                 .form{
                        display: flex;
                        flex-direction: column;
                        /* align-items: flex-end; */
                        P{
                            font-size: 1rem;
                        }
                      
                 }
                }
        }
    }
    }
`