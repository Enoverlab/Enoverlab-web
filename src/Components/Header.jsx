import React from 'react'
import styled from 'styled-components'
import {theme} from '../Utils/Theme'
import { P } from '../Utils/Typograpyhy'
import { PrimaryButton, TertiaryButton } from '../Utils/Buttons'
import logo from '../assets/enovLogo.png'
import mobileLogo from '../assets/mobileLogo.png'
import menu from '../assets/menu.png'
import { Link, useLocation, NavLink } from 'react-router-dom'
const Header = () => {
  const [active, setActive] = React.useState(false)
  const [weightHome, setWeightHome] = React.useState('bold')
  const [weightPricing, setWeightPricing] = React.useState('normal')
  const [weightBlog, setWeightBlog] = React.useState('normal')




  return (
    <StyledHeader>
        <div className="header-container">
           <div className="header-left">
           <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu-container">
                <div className={active ? "menu-item active" : "menu-item"}>
                    <div className="mobile-logo-container">
                    <img src={mobileLogo} alt="logo" />
                    </div>
                    <NavLink 
                    style = {({isActive}) => ({
                        fontWeight: isActive ? setWeightHome("600") : setWeightHome("300")
                    })}
                    to="/">
                    <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={weightHome}>
                    Home
                    </P>
                    </NavLink>
                    <NavLink
                     style = {({isActive}) => ({
                      fontWeight: isActive ? setWeightPricing("600") : setWeightPricing("300")
                  })}
                    to="/pricing">
                    <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={weightPricing}>
                    Pricing
                    </P>
                    </NavLink>
                    <NavLink 
                      style = {({isActive}) => ({
                      fontWeight: isActive ? setWeightBlog("600") : setWeightBlog("300")
                      })}
                    to="/blog">
                    <P color={theme.color.dark} textAlign="left" fontSize={"1.25rem"} fontWeight={weightBlog}>
                    Blog
                    </P>
                    </NavLink>
                    <div className="mobile-button-container">
                      <PrimaryButton to="/" buttText="Apply Now"/>
                    </div>
                 </div>
           </div>
            </div>
            <div className="header-right">
                <div className="header-button-container">
                <TertiaryButton to="/" buttText="Apply Now"/>
                </div>
                <div className="menu-icon-container">
                    <img onClick={() => setActive(!active)}  src={menu} alt="menu"/>
                </div>
            </div>
        </div>
        <div onClick={() => setActive(!active)} className={active ? "overlay active" : "overlay"}></div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
   .header-container{
        display: flex;
        width: 99%;
        justify-content: space-between;
        align-items: center;
        padding: 2.625rem 5%;
        @media (max-width: 768px){
          padding: 1.25rem 5%;
        }
        .header-left{
            display: flex;
            align-items: center;
            column-gap: 7.875rem;
            .logo-container{
              max-width: 14.0625rem;
              img{
                width: 14.0625rem;
                height: 2.4375rem;
              }
              @media (max-width: 768px){
                  max-width: 5rem;
                  img{
                      width: 8.75rem;
                  }
                }
            }
            .menu-container{
            a{
              text-decoration: none;
              P{
                &:hover{
                  color: ${theme.color.primary};
                }
              }
              }
                .menu-item{
                  display: flex;
                  align-items: center;
                  column-gap: 2.875rem;
                  .mobile-logo-container{
                    display: none;
                    @media (max-width: 768px){
                        display: block;
                        max-width: 7.125rem;
                        margin-right: -0.5rem;
                        img{
                            width: 7.125rem;
                        }
                    }
                  }
                  .mobile-button-container{
                    display: none;
                   
                    @media (max-width: 768px){
                        display: block;
                        max-width: 8.5125rem;
                        margin-top: 1rem;
                    }
                  }
                  @media (max-width: 768px){
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      position: fixed;
                      width: 60%;
                      top: 0;
                      left: 0;
                      width: 6  0%;
                      height: 100vh;
                      background-color: ${theme.color.tertiary};
                      z-index: 3;
                      overflow-x: hidden;
                      display: none;
                      padding: 1.7rem 1.3rem;
                    P{
                      color: ${theme.color.light};
                    }
                  }
                  &.active{
                  display: block;
                }
                }
              
            }

        }
      .header-right{
        width: 14%;
        @media (max-width: 768px){
          width: 6%;
        }
          .header-button-container{
            width: 100%;
              @media (max-width: 768px){
                display: none;
              }
            }
            .menu-icon-container{
                display: none;
               
                @media (max-width: 768px){
                    display: block;
                    img{
                      width: 1.5rem;
                  }
                }
            }
          }
          
   } 

   .overlay {
        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, .4);
            cursor: pointer;
            z-index: 1;
            display: none;

            &.active {
                display: block;
            }
        }
    }
 
`