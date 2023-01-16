import React from "react";
import styled from "styled-components";
import { PrimaryButton, StyledPrimaryButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import { H3, P, H4 } from "../../Utils/Typograpyhy";
import AboutList from "../Corporate/AboutList";

const trainingList = [
  {
    listText: "Understanding different products",
  },
  {
    listText: "Market leading strategy",
  },
  {
    listText: "Building platform products",
  },
  {
    listText: "Understanding network effects",
  },
  {
    listText: "Team Leadership",
  },
  {
    listText:
      "Close support after training to help keep your team aligned for long term success",
  },
  {
    listText: "Scaling products from local to international markets",
  },
  {
    listText: "Defending product market share",
  },
  {
    listText: "Product Executive Certification",
  },
];

const TrainingCard = ({
  children,
  cardTitle,
  cardText,
  backgroundColor,
  textColor,
  backLeft,
}) => {
  return (
    <StyledTrainingCard>
      <div className="home-card-container">
        <div className="card-container-back"></div>
        <div className="card-container-front">
          <div className="card-front-text">
            <H3
              fontSize="2.25rem"
              textAlign={"left"}
              fontWeight={"500"}
              color={"#111111"}
              paddingBottom={"1rem"}
            >
              Executive Program
            </H3>
            <div className="p-container">
              <P
                fontSize="1.5rem"
                lineHeight="2.25rem"
                mobileFontSize="1rem"
                mobileLineHeight="1.5rem"
                textAlign={"left"}
                color={"#333333"}
                fontWeight={300}
              >
                For senior level professionals looking to get high-level
                knowledge to lead product teams, scale products and grow
                companies{" "}
              </P>
            </div>
            <div className="fees">
              <div className="fee">
                <H4
                  mobileFontSize="0.8rem"
                  fontSize="1rem"
                  color={"#333333"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  TUITION FEE
                </H4>
                <H3 color={"#333333"} textAlign={"left"} fontSize={"2.25rem"}>
                  ₦300,000
                </H3>
              </div>
              <div className="fee">
                <H4
                  mobileFontSize="0.8rem"
                  fontSize="1rem"
                  color={"#333333"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  DURATION
                </H4>
                <H3 color={"#333333"} textAlign={"left"} fontSize={"2.25rem"}>
                  6 weeks
                </H3>
              </div>
            </div>
            <div className="list-container">
              {trainingList.map((item, index) => {
                return (
                  <AboutList
                    key={index}
                    listText={item.listText}
                    textColor={textColor}
                    marginBottom="0.75rem"
                  />
                );
              })}
            </div>
          </div>
          <div className="card-front-bottom">
            <P
              fontSize="1.25rem"
              lineHeight="2.25rem"
              mobileFontSize="0.8rem"
              mobileLineHeight="1.6875rem"
              textAlign={"left"}
              color={"#FFFFFF"}
              fontWeight={500}
            >
              Train your team in 6weeks
            </P>

            <div className="button-container">
                <PrimaryButton to="/" buttText="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </StyledTrainingCard>
  );
};

export default TrainingCard;

const StyledTrainingCard = styled.div`
  position: relative;
  width: 100%;
  .home-card-container {
    position: relative;

    .card-container-back {
      position: absolute;
      top: -45px;
      left: ${(props) => (props.backLeft ? props.backLeft : "-45px")};
      width: 100%;
      height: 61.9375rem;
      z-index: 1;
      border: 1px solid ${theme.color.dark};
      background-color: #0046ff;
      @media (max-width: 768px) {
        width: 100%;
        height:  61.9375rem;
        left: -20px;
      }
    }
    .card-container-front {
      position: relative;
      width: 100%;
      height: 61.9375rem;
      z-index: 2;
      border: 1px solid #0000ff;
      background-color: #ffffff;
      @media (max-width: 768px) {
        height:  61.9375rem;
        width: 100%;
        padding: 1.5rem 0rem 0rem 0rem;
      }
      .fees {
        display: flex;
        justify-content: space-between;
        margin: 1.1rem 0;
      }
      .card-front-text {
        position: relative;
        width: 100%;
        height: 80%;
        background-color: #ffffff;
        padding: 3.5rem 4.5rem;

        @media (max-width: 768px) {
          padding: 1rem;
          height: 85%;
        }
        .p-container {
          margin-bottom: 1.5rem;
       

          @media (max-width: 768px) {
            padding: 0;
          }
        }
      }
      .card-front-bottom {
        position: relative;
        width: 100%;
        height: 20%;
        background-color: #0046ff;
        padding: 3.25rem 10%;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
          padding: 2.25rem 1rem;
          height: 15%;
        }

        .button-container {
            ${StyledPrimaryButton}{
              @media (max-width: 768px) {
                a{
                    span{
                        font-size: 0.5rem;
                    }
                }
              }
            }
        }
      }
    }
  }
`;
