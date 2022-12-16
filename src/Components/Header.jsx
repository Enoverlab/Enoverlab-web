import React from "react";
import styled from "styled-components";
import { theme } from "../Utils/Theme";
import { P } from "../Utils/Typograpyhy";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../Utils/Buttons";
import logo from "../assets/enovLogo.png";
import mobileLogo from "../assets/mobileLogo.png";
import blueLogo from "../assets/blueLogo.png";
import menu from "../assets/menu.png";
import menuWhite from "../assets/menuWhite.png";
import { Link, useLocation, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
const Header = ({ bgColor, bgColorMobile, navColor, blueProps }) => {
  const [active, setActive] = React.useState(false);
  const [weightHome, setWeightHome] = React.useState("bold");
  const [weightPricing, setWeightPricing] = React.useState("normal");
  const [weightBlog, setWeightBlog] = React.useState("normal");
  const [weightResource, setWeightResource] = React.useState("normal");

  return (
    <StyledHeader bgColor={bgColor} bgColorMobile={bgColorMobile} navColor={navColor}>
      <div className="header-container">
        <div className="header-left">
          <div className="logo-container">
           {
              !blueProps ? (
                <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              ): (
                <Link to="/">
                <img src={blueLogo} alt="logo" />
              </Link>
              )
           }
          </div>
          <div className="menu-container">
            <div className={active ? "menu-item active" : "menu-item"}>
              <div className="mobile-logo-container">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <FaTimes className="times" onClick={() => setActive(!active)} />
              </div>
              <div className="menu-item-container">
                <NavLink
                  style={({ isActive }) => ({
                    fontWeight: isActive
                      ? setWeightHome("600")
                      : setWeightHome("300"),
                  })}
                  to="/"
                >
                  <P
                    color={bgColor === "#0046FF" ? "#FFFFFF" : theme.color.dark }
                    textAlign="left"
                    fontSize={"1.25rem"}
                    fontWeight={weightHome}
                  >
                    Home
                  </P>
                  <HiOutlineChevronRight className="icon" />
                </NavLink>
              </div>
              <div className="menu-item-container">
                <NavLink
                  style={({ isActive }) => ({
                    fontWeight: isActive
                      ? setWeightPricing("600")
                      : setWeightPricing("300"),
                  })}
                  to="/programs"
                >
                  <P
                    color={bgColor === "#0046FF" ? "#FFFFFF" : theme.color.dark}
                    textAlign="left"
                    fontSize={"1.25rem"}
                    fontWeight={weightPricing}
                  >
                    Programs
                  </P>
                  <HiOutlineChevronRight className="icon" />
                </NavLink>
              </div>
              <div className="menu-item-container">
                <NavLink
                  style={({ isActive }) => ({
                    fontWeight: isActive
                      ? setWeightBlog("600")
                      : setWeightBlog("300"),
                  })}
                  to="/blog"
                >
                  <P
                    color={bgColor === "#0046FF" ? "#FFFFFF" : theme.color.dark}
                    textAlign="left"
                    fontSize={"1.25rem"}
                    fontWeight={weightBlog}
                  >
                    Blog
                  </P>
                  <HiOutlineChevronRight className="icon" />
                </NavLink>
              </div>
              <div className="menu-item-container">
                <NavLink
                  style={({ isActive }) => ({
                    fontWeight: isActive
                      ? setWeightResource("600")
                      : setWeightResource("300"),
                  })}
                  to="/resource"
                >
                  <P
                    color={bgColor === "#0046FF" ? "#FFFFFF" : theme.color.dark}
                    textAlign="left"
                    fontSize={"1.25rem"}
                    fontWeight={weightResource}
                  >
                    Free Resources
                  </P>
                  <HiOutlineChevronRight className="icon" />
                </NavLink>
              </div>
              <div className="mobile-button-container">
                <SecondaryButton
                  textAlign="center"
                  to="/"
                  buttText="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-button-container">
            <TertiaryButton to="/" buttText="Contact Us" fontWeight={500} />
          </div>
          <div className="menu-icon-container">
           {
            !blueProps ?
            (
              <img onClick={() => setActive(!active)} src={menu} alt="menu" />
            ): 
            (
              <img onClick={() => setActive(!active)} src={menuWhite} alt="menu" />
            )
           }
          </div>
        </div>
      </div>
      <div
        onClick={() => setActive(!active)}
        className={active ? "overlay active" : "overlay"}
      ></div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  z-index: 5;
  background-color: ${(props) => (props ? props.bgColor : theme.color.light)};
  @media (max-width: 768px) {
    position: fixed;
  }
  .header-container {
    display: flex;
    width: 99%;
    justify-content: space-between;
    align-items: center;
    padding: 2.625rem 4%;
    @media (max-width: 768px) {
      padding: 1.25rem 4%;
    }
    .header-left {
      display: flex;
      align-items: center;
      column-gap: 7.875rem;
      .logo-container {
        display: flex;
        max-width: 14.0625rem;
        height: 2rem;
        align-items: center;
        img {
          width: 13.0625rem;
          height: 2.015rem;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          max-width: 5rem;
          img {
            width: 8.75rem;
            height: 1.5rem;
            object-fit: contain;
          }
        }
      }
      .menu-container {
        a {
          text-decoration: none;
          display: block;

          P {
            &:hover {
              color: ${theme.color.primary};
            }
          }
          .icon {
            display: none;

            @media (max-width: 768px) {
              display: block;
            }
          }
          @media (max-width: 768px) {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
          }
        }
        .menu-item {
          display: flex;
          align-items: center;
          column-gap: 2.875rem;
          .mobile-logo-container {
            display: none;
            @media (max-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
              max-width: 100%;
              /* margin-right: -0.5rem; */
              img {
                width: 9.125rem;
                /* align-self: flex-end; */
              }
              .times {
                font-size: 1.5rem;
                color: #4b4b4b;
              }
            }
          }
          .mobile-button-container {
            display: none;
            padding-bottom: 3rem;

            @media (max-width: 768px) {
              display: block;
              /* align-items: flex-end; */
              /* justify-content: flex-end; */
              width: 100%;
              margin-top: 1rem;
            }
          }
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            position: fixed;
            width: 100%;
            top: 0;
            width: 100%;

            height: 55vh;
            background-color: ${(props) =>
              props ? props.bgColorMobile : theme.color.light};
            z-index: 99;
            overflow-x: hidden;
            display: none;
            padding: 1.7rem 1.3rem;
            P {
              color: ${theme.color.dark};
            }
          }
          &.active {
            display: block;
            right: ${({ active }) => (!active ? "-0px" : "0")};
            transition: right ease-in-out 900ms;
          }
        }
      }
    }
    .header-right {
      width: 20%;
      @media (max-width: 768px) {
        width: 10%;
      }
      .header-button-container {
        width: 100%;
        @media (max-width: 768px) {
          display: none;
        }
      }
      .menu-icon-container {
        display: none;

        @media (max-width: 768px) {
          display: block;
          img {
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
      cursor: pointer;
      z-index: 3;
      display: none;

      &.active {
        display: block;
      }
    }
  }
  P {
    @media (max-width: 768px) {
      text-align: right;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }
`;
