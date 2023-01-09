import React from "react";
import styled from "styled-components";
import { theme } from "../Utils/Theme";
import { P, H4 } from "../Utils/Typograpyhy";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/enovLogo.png";
const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-left">
          <div className="container-left-1">
           <div className="logo-container">
              <img src={logo} alt="logo" />
           </div>
           <div className="slogan">
           <P
              lineHeight="28px"
              color={theme.color.dark}
              textAlign="left"
              fontSize="0.9rem"
              mobileFontSize="0.8rem"
            >
              Building product managers for today,
          tomorrow and the future
            </P>
           </div>
            
            <div className="icon-container">
            <div className="social-icon">
                <a href="https://www.linkedin.com/company/enoverlab/">
                  <FaFacebookSquare />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/enoverlab/">
                  <AiFillLinkedin classname="icon" />
                </a>
              </div>
          
              <div className="social-icon">
                <a href="https://twitter.com/enoverlabng">
                  <FaTwitter classname="icon"/>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://twitter.com/enoverlabng">
                  <FaYoutube classname="icon"/>
                </a>
              </div>
              <div className="social-icon">
                <a href="https://twitter.com/enoverlabng">
                  <FaInstagramSquare classname="icon"/>
                </a>
              </div>
            </div>
            {/* desktop */}
            <div className="footer-form">
              <div className="form">
                <div className="form-box">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="0.9rem"
                paddingTop="0.58rem"
              >
                Receive important product management info weekly
              </P>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="container-left-2">
          
              <H4
                fontSize="1.3125rem"
                color={theme.color.dark}
                textAlign="left"
                lineHeight="28px"
                fontWeight="500"
                mobileFontSize="1rem"
              >
                Programs
              </H4>
            
            <Link to="/programs">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Advanced Program
              </P>
            </Link>
            <Link to="/programs">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                LevelUP Program
              </P>
            </Link>
            <Link to="/executive">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Executive Program
              </P>
            </Link>
            <Link to="/">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Corporate Training
              </P>
            </Link>
            <Link to="/">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Onsite Training
              </P>
            </Link>
          </div>
          <div className="container-left-2">
            
              <H4
                fontSize="1.3125rem"
                color={theme.color.dark}
                textAlign="left"
                lineHeight="28px"
                fontWeight="500"
                mobileFontSize="1rem"
              >
                Free Resource
              </H4>
            
            <Link to="/blog">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Blog
              </P>
            </Link>
            <Link to="/resources">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                E-books
              </P>
            </Link>
            <Link to="/#">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Product Sessions
              </P>
            </Link>
            <Link to="/#">
              <P
                color={theme.color.dark}
                textAlign="left"
                fontSize="1rem"
                lineHeight="28px"
                mobileFontSize="0.8rem"
                fontWeight="300"
              >
                Career Advisor
              </P>
            </Link>
          </div>
          <div className="container-right-1">
            <H4
              fontSize="1.3125rem"
              color={theme.color.dark}
              textAlign="left"
              lineHeight="28px"
              fontWeight="500"
                mobileFontSize="1rem"
            >
              Company
            </H4>
            <Link to="/about">
            <P
              color={theme.color.dark}
              textAlign="left"
              fontSize="1rem"
              lineHeight="28px"
              mobileFontSize="0.8rem"
              fontWeight="300"
            >
              About Us
            </P>
            </Link>
            <Link to="/#">
            <P
              color={theme.color.dark}
              textAlign="left"
              fontSize="1rem"
              lineHeight="28px"
              mobileFontSize="0.8rem"
              fontWeight="300"
            >
              Our Team
            </P>
            </Link>

            <Link to="/#">
            <P
              color={theme.color.dark}
              textAlign="left"
              fontSize="1rem"
              lineHeight="28px"
              mobileFontSize="0.8rem"
              fontWeight="300"
            >
              Reviews
            </P>
            </Link>
            <Link to="/#">
            <P
              color={theme.color.dark}
              textAlign="left"
              fontSize="1rem"
              lineHeight="28px"
              mobileFontSize="0.8rem"
              fontWeight="300"
            >
              Community
            </P>
            </Link>
          </div>

          {/* mobile */}
          <div className="footer-form">
            <div className="form">
              <div className="form-box">
                <input type="text" name="" id="" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
            <P
              color={theme.color.dark}
              textAlign="left"
              fontSize="1rem"
              paddingTop="0.58rem"
            >
              Receive important product management info weekly
            </P>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <P
          mobileFontSize="0.7rem"
          paddingTop="2.5rem"
          color={theme.color.dark}
          textAlign="center"
          fontSize="1rem"
        >
          Copyright @ enoverlab 2022. All Rights Reserved.
        </P>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: ${theme.color.lightBlue};
  padding: 4% 8% 4% 8%;
  @media (max-width: 768px) {
    padding: 10% 5%;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 0% 0% 8% 0%;
    /* align-items: center; */
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .footer-left {
      display: flex;
      justify-content: space-between;
      width: 45%;
      @media (max-width: 768px) {
        width: 70%;
        /* justify-content: flex-start; */
        /* column-gap: 1.375rem; */
      }
      .container-left-1 {
        width: 70%;
        @media (max-width: 768px) {
          width: 100%;
        }
        .logo-container{
            width: 12.375rem;
            height: 2.125rem;
            margin-bottom: 1rem;
           img{
                width: 100%;
                height: 100%;
                object-fit: contain;
           }
           @media (max-width: 768px) {
            width: 7.25rem;
            height: 1.25rem;
            margin-bottom: 0.5rem;
            
           }
          
        }
        .icon-container {
          display: flex;
          column-gap: 1rem;
          margin-top: 0.8rem;
          a {
            color: ${theme.color.dark};
            text-decoration: none;
          }
          .social-icon {
            color: ${theme.color.dark};
            font-size: 1.25rem;
            cursor: pointer;
          }
          
        }
        .slogan{
            P{
              max-width: 16.25rem;
            }
        }
       
      }
     

      .footer-form {
        margin-top: 1.5rem;
        display: block;
        .form-box {
          display: flex;
        }
        input {
          padding: 1rem;
          border: none;
          width: 70%;
          outline: none;
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        button {
          padding: 1rem;
          border: none;
          width: 40%;
          outline: none;
          background-color: ${theme.color.tertiary};
          color: ${theme.color.light};
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          display: none;
          flex-direction: column;
          P {
            font-size: 0.8rem;
          }
          .form {
            display: flex;
            flex-direction: column;

            /* align-items: flex-end; */
            P {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .footer-right {
      display: flex;
      justify-content: space-between;
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 3.125rem;
        margin-top: 4rem;
      }
     
      .footer-form {
        margin-top: 1.5rem;
        display: none;
        .form-box {
          display: flex;
        }
        input {
          padding: 1rem;
          border: none;
          width: 70%;
          outline: none;
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        button {
          padding: 1rem;
          border: none;
          width: 40%;
          outline: none;
          background-color: ${theme.color.tertiary};
          color: ${theme.color.light};
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          margin-top: 0rem;
          .form-box{
            display: flex;
            flex-direction: column;
          }
          P {
            font-size: 0.8rem;
          }
          .form {
            display: flex;
            flex-direction: column;

            /* align-items: flex-end; */
            P {
              font-size: 1rem;
            }
          }
        }
    }
    .container-left-2, .container-right-1{
        P{
          &:hover{
            color: ${theme.color.primary};
          }
        }
      }
     
    }
    p {
      margin-bottom: 0.75rem;
    }
  }
  a {
    text-decoration: none;
  }
  .icon{
          font-size: 2rem;
        }
`;
