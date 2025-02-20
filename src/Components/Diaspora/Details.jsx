import React from "react";
import styled, { keyframes } from "styled-components";
import { H1,P, H4 } from "../../Utils/styled/Typograpyhy";
import { theme } from "../../Utils/Theme";
import { BsCheckCircle } from "react-icons/bs";
import { detailsData, detailsListData } from "./DetailsData";
import Figma from "../../assets/figma.png";
// import gmailIcon from "../../assets/gmailIcon.png";
import googleAnalytics from "../../assets/googleAnalytics.png";
// import googleDocs from "../../assets/googleDocs.png";
import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
// import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import {SecondaryButton} from "../../Utils/styled/Buttons";
import DetailsImg from "../../assets/diaspora/detailsImg.png";

const Details = () => {
  const color = theme.color;
  return (
    <StyledDetails>
      <div className="details-container">
        <div className="details-identity-container">
          <H1
            color={"#FFFFFF"}
            mdfs="4.8rem"
            lh="3.75rem"
            fs="1.5rem"
            tA="left"
          >
            Course Details
          </H1>
          <div className="details-content">
              {detailsData.map((item, index) => (
                <div key={index} className="details-content-text">
                  <H4
                    color={color.light}
                    mdfs="1.6rem"
                    fs="1.2rem"
                    fw="700"
                    tA="left"
                  >
                    {item.text}
                  </H4>
                  <P
                    color={color.light}
                    mdfs="3.6rem"
                    fs="2.4rem"
                    fw="500"
                    tA="left"
                  >
                    {item.value}
                  </P>
                </div>
              ))}
            </div>
            <P color="white" fs="1rem" mdfs="1.2rem">*Instalment payment is available</P>
        </div>

        <div className="details-content-container">
          <header>
          What you will learn
          </header>
          <div className="detailsListContainer">
            
            <div className="list">
              {detailsListData.map((item, index) => (
                <div key="index" className="list-item">
                  <div className="icon">
                    <BsCheckCircle
                      color={color.dark}
                      size="2rem"
                      fontWeight={"700"}
                    />
                  </div>
                  <div className="text">
                    <P
                      color={color.dark}
                      mdfs="2rem"
                      fs="1.4rem"
                      fw={700}
                      tA="left"
                    >
                      {item}
                    </P>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          <div className="class-tools-container">
            <H4 mdfs="2.4rem" fs='1.6rem' tA="center" fw={700} color='#333'>
              Class Tools
            </H4>
            <div className="class-tools-icon-container">
                <div className="class-tools-icon">
                  <img src={Figma} alt="google-docs-icon" />
                  Figma
                </div>
                <div className="class-tools-icon">
                  <img src={Jira} alt="slack-icon" />
                  Jira Software
                </div>

                <div className="class-tools-icon">
                  <img src={googleAnalytics} alt="slack-icon" />
                  Product Plan
                </div>
                <div className="class-tools-icon">
                  <img src={trello} alt="slack-icon" />
                  Trello
                </div>
                <div className="class-tools-icon">
                  <img src={productPlan} alt="slack-icon" />
                  Product Plan
                </div>
                <div className="class-tools-icon">
                  <img src={hotJar} alt="slack-icon" />
                  Hotjar
                </div>
            </div>
            <div className="button-box">
              <div className="button-flex">
                <div
                  onClick={() => {
                    window.open("https://forms.gle/CU5EXw9V5P5UL8dK7");
                  }}
                  className="button-container"
                >
                  <SecondaryButton to="#" Text="Enroll Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;

const animate = keyframes`
    from {
        transform: scale(.95);
    }

    to {
        transform: scale(1);
    }
`;

const StyledDetails = styled.div`
  padding: 9.1875rem 5%;

  @media (max-width: 768px) {
    padding: 2.875rem 5%;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    column-gap: 48px;
    @media (max-width: 768px) {
      flex-direction: column;
      row-gap: 2rem;
    }
        .details-identity-container{
          background-image: url(${DetailsImg});
          padding: 2.4rem;
          padding-right: 2.7rem;
          padding-top: 21rem;
          h1{
            padding-bottom: 2.4rem;
            font-weight: 600;
          }
          @media (max-width: 768px) {
            padding-top: 3rem;
            h1{
                display: none;
            }
              
          }
          
        }
        .details-content {
          display: grid;
          grid-template-columns: repeat(2, 200px);
          column-gap: 20rem;
          row-gap: 5rem;
          @media (max-width: 768px) {
            padding-top: 50px;
            column-gap: 2rem;
            row-gap: 2rem;
              }

          .details-content-text {
            H4 {
              @media (max-width: 768px) {
                font-weight: 500;
              }
            }
          }
        }
      }

      
    .details-content-container {
      width: 100%;
      header{
        text-align: center;
        font-size: 3.4rem;
        font-weight: 600;
        margin-top: 40px;
      }
      @media (max-width: 768px) {
        header{
        font-size: 2.8rem;
        margin-top: 20px;
        }
      }
    }
    .detailsListContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 4.8rem;
      @media (max-width: 768px) {
        padding: 4% 3%;
        align-items: flex-start;
        margin-top: 2.8rem;
      }
      .list-title {
        padding: 1rem 0;
      }
      .list {
        max-height: 480px;
        display: grid;
        grid-template-columns: repeat(2,auto);
        row-gap: 3.2rem;
        column-gap: 22rem;
        @media (max-width: 768px) {
          grid-template-columns: repeat(1,auto);
          row-gap: 1.5625rem;
        }
        .list-item {
          display: flex;
          gap: 3rem;
          align-items: center;
          @media (max-width: 768px) {
            gap: 2rem;
        }
          .text {
            @media (max-width: 768px) {
              P {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
    .class-tools-container {
      margin: 3rem 0px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 30%;

      @media (max-width: 768px) {
        flex-direction: column;
      align-items: center;
        margin: 10rem 0px 0 0;
        padding: 0 2%;
      }
    }
    .class-tools-icon-container {
      display: grid;
      width: 100%;
      grid-template-columns:repeat(3, auto);
      place-items: center;
      column-gap: 4rem;
      row-gap: 2rem;
      margin: 2rem 0;
        .class-tools-icon {
          display: flex;
          align-items: center;
          column-gap: 1rem;
          font-size: 1.6rem;
          font-weight: 700;

          @media (max-width: 768px) {
            column-gap: 1rem;
            font-size: 1.3rem;
            img {
              width: 1.9rem;
            }
          }
        }
        @media (max-width: 768px) {
            column-gap: 1rem;
            font-size: 1.3rem;
          }
      }


  .button-container {
    margin-top: 3rem;
    width: 35%;
    animation: ${animate} 1s ease-in-out infinite;
    @media (max-width: 768px) {
      min-width: 47%;
      bottom: 1.7rem;
    }
  }

  ${SecondaryButton} {
    animation: ${animate} 1s ease-in-out infinite;
  }

  .button-box {
    /* width: 100%; */
    margin-top: 1rem;
    .button-flex {
      display: flex;
      /* width: 100%; */
      column-gap: 1rem;
      justify-content: center;
      @media (max-width: 768px) {
        /* flex-direction: column; */
        columnn-gap: 0.2rem;
      }
      .button-container {
        width: 35%;
        /* position: absolute; */
        bottom: 5%;
        @media (max-width: 768px) {
          position: relative;
          width: 50%;
          /* margin-top: 3.2rem; */
        }
      }
    }

    .download-text-url {
      margin-top: 1.5rem;
      a {
        color: ${theme.color.primary};
      }
      @media (max-width: 768px) {
        margin-top: 2rem;
        padding-bottom: 3rem;
      }
    }
    .white-download {
      a {
        color: #fff;
      }
    }
  }
`;
