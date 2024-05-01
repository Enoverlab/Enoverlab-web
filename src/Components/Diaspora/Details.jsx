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
import { SecondaryButton, TransparentButton } from "../../Utils/styled/Buttons";
import DetailsImg from "../../assets/diaspora/detailsImg.png";

const Details = () => {
  const color = theme.color;
  return (
    <StyledDetails>
      <div className="details-container">
        <div className="details-images-container">
          <div className="img-box">
            <img src={DetailsImg} alt="" className="details-head" />
          </div>
          <div className="text-layout">
            <div className="head-text">
              <div className="desktop-head">
                <H1
                  color={"#FFFFFF"}
                  fontSize="3rem"
                  lineHeight="3.75rem"
                  mobileFontSize="1.5rem"
                  fontWeight="600"
                  paddingBottom={".875rem"}
                  textAlign="left"
                >
                  Program Details
                </H1>
              </div>
            </div>
            <div className="details-content">
              {detailsData.map((item, index) => (
                <div key={index} className="details-content-text">
                  <H4
                    color={color.light}
                    fontSize="1.25rem"
                    mobileFontSize=".625rem"
                    fontWeight="400"
                    textAlign="left"
                  >
                    {item.text}
                  </H4>
                  <P
                    color={color.light}
                    fontSize="1.5rem"
                    mobileFontSize=".875rem"
                    fontWeight="500"
                    textAlign="left"
                  >
                    {item.value}
                  </P>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="details-content-container">
          <div className="detailsListContainer">
            <div className="list">
              {detailsListData.map((item, index) => (
                <div key="index" className="list-item">
                  <div className="icon">
                    <BsCheckCircle
                      color={color.dark}
                      size="1rem"
                      fontWeight={"700"}
                    />
                  </div>
                  <div className="text">
                    <P
                      color={color.dark}
                      fontSize="1.25rem"
                      mobileFontSize="14px"
                      fontWeight={700}
                      textAlign="left"
                    >
                      {item}
                    </P>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="class-tools-container">
            <H4 fontSize="1.5rem" textAlign="center" color={theme.color.dark}>
              Class Tools
            </H4>
            <div className="class-tools-icon-container">
              <div
                className="class-tools-icon-vert"
                style={{
                  color: theme.color.dark,
                }}
              >
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
              </div>

              <div
                className="class-tools-icon-vert"
                style={{
                  color: theme.color.dark,
                }}
              >
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
            </div>
            <div className="button-box">
              <div className="button-flex">
                <div
                  onClick={() => {
                    window.open("https://forms.gle/CU5EXw9V5P5UL8dK7");
                  }}
                  className="button-container"
                >
                  <SecondaryButton to="#" buttText="Pay Now" />
                </div>
                <div
                  className="button-container"
                  onClick={() => {
                    window.open("https://forms.gle/CU5EXw9V5P5UL8dK7");
                  }}
                >
                  <TransparentButton to="#" buttText="Sign Up" />
                </div>
              </div>
              {/* <div className="download-text-url">
            <a href="https://birdsend.page/forms/6444/va9wSykY3B">
              <p>Download Syllabus</p>
            </a>
          </div> */}
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
  /* padding: 9.1875rem 5%; */

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

    .details-images-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      position: relative;
      padding: 0 5%;
      margin-top: 3rem;

      @media (max-width: 768px) {
        margin-top: 0;
        padding: 0 1%;
      }

      .img-box {
        width: 100%;
        position: relative;

        img {
          width: 100%;
          object-fit: contain;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
      }

      .text-layout {
        padding: 24px;
        position: absolute;
        bottom: 0;
        @media (max-width: 768px) {
          padding: 14px;
        }
        .head-text {
          .desktop-head {
            display: block;
            H1 {
              display: block;
              @media (max-width: 768px) {
                display: none;
              }
            }
          }
        }
        .details-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;

          .details-content-text {
            H4 {
              @media (max-width: 768px) {
                font-weight: 500;
              }
            }
          }
        }
      }

      .details-image {
        width: 100%;
        height: 26.5rem;

        @media (max-width: 768px) {
          height: 17.25rem;
        }

        img {
          /* width: 100%; */
          height: 100%;
          box-shadow: -10px 14px 0px 0px rgba(0, 70, 255, 1);
        }
      }
    }
    .details-content-container {
      width: 100%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .detailsListContainer {
      padding: 4% 13%;
      @media (max-width: 768px) {
        padding: 4% 3%;
      }
      .list-title {
        padding: 1rem 0;
      }
      .list {
        max-height: 480px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        row-gap: 32px;
        justify-content: space-between;
        column-gap: 20%;

        @media (max-width: 768px) {
          flex-wrap: nowrap;
          max-height: 100%;
          row-gap: 1.5625rem;
        }
        .list-item {
          /* margin-bottom: 1rem; */
          display: flex;
          column-gap: 1rem;
          align-items: center;
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
        padding: 0 2%;
      }
    }
    .class-tools-icon-container {
      display: flex;
      justify-content: space-between;
      /* max-width: 80%; */
      margin: 2rem 0;

      .class-tools-icon-vert {
        gap: 2.125rem;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          gap: 1.75rem;
        }
        .class-tools-icon {
          display: flex;
          align-items: center;
          column-gap: 1rem;
          font-size: 1rem;
          font-weight: 700;

          .class-icon {
            width: 2.5rem;
            height: 2.5rem;
            object-fit: contain;
          }
          @media (max-width: 768px) {
            gap: 0.3rem;
            font-size: 0.85rem;
            img {
              width: 1.9rem;
            }
          }
        }
      }
      @media (max-width: 768px) {
        max-width: 90%;
      }
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
