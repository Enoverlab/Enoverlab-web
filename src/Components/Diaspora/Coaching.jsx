import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/styled/Typograpyhy";
import DetailsImg from "../../assets/diaspora/eliteDigestLogo.svg";
import LineImg from "../../assets/diaspora/bottomLine.svg";
import { AiOutlineCheckCircle } from "react-icons/ai";
const coachData = [
  {
    coaching1: "Product networking /career events.",
  },
  {
    coaching1: "Signing up on strategic job boards",
  },
  {
    coaching1: "CV Screening, review and recreation",
  },
  {
    coaching1: "Interview preparation/mock ",
  },
  {
    coaching1: "LinkedIn profile optimization",
  },
];

const coachData2 = [
  {
    coaching2: "Negotiating salary offers",
  },
  {
    coaching2: "Portfolio building",
  },
  {
    coaching2: "Job application strategy",
  },
  {
    coaching2: "Interview preparation/mock",
  },
  {
    coaching2: "Understanding job market.",
  },
];

const Coaching = () => {
  return (
    <StyledCoaching>
      <div className="coaching-container">
        <div className="coaching-inner-container">
          <div className="title-container">
            <div className="title-text">
              <H1
                textAlign="left"
                color="#111"
                fontSize="1.5rem"
                fontWeight={600}
                mobileFontSize=".75rem"
              >
                Career coaching powered by EliteDigest
              </H1>
              <img src={DetailsImg} alt="" />
            </div>
            <img className="lineImg" src={LineImg} alt="lineimg" />
          </div>
          <div className="head-text">
            <H1
              color="#333"
              fontSize="48px"
              fontWeight={700}
              mobileFontSize="30px"
            >
              Learn. Build. Grow.
            </H1>
            <P
              color="#000"
              fontSize="20px"
              fontWeight={400}
              mobileFontSize="14px"
              
            >
              Our personalized approach empowers you to uncover your true
              potential, develop in-demand skills, whether you're seeking a
              career change, aiming for development, or more, our expert
              guidance will help you achieve your aspirations.
            </P>
          </div>

          <div className="coaching-cards">
            <div className="coaching-card card-left">
              <div className="coach-title">
                <P fontSize="36px" color="#FFF" textAlign="left">
                  JOB SEARCH <br /> STRATEGY
                </P>
              </div>
              <div className="coaching-list">
                {coachData.map((data, index) => (
                  <div key={index} className="coaching-list-text">
                    <div className="list-item">
                      <AiOutlineCheckCircle className="icon" color="#FFF" />
                      <P
                        color="#FFF"
                        fontSize="1.25rem"
                        mobileFontSize=".875rem"
                        textAlign="left"
                      >
                        {data.coaching1}
                      </P>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="coaching-card card-right">
              <div className="coach-title">
                <P fontSize="36px" color="#FFF" textAlign="left">
                  CAREER <br />
                  ADVANCEMENT SKILLS
                </P>
              </div>
              <div className="coaching-list">
                {coachData2.map((data, index) => (
                  <div key={index} className="coaching-list-text">
                    <div className="list-item">
                      <AiOutlineCheckCircle className="icon" color="#FFF" />
                      <P
                        color="#FFF"
                        fontSize="1.25rem"
                        mobileFontSize="1rem"
                        textAlign="left"
                      >
                        {data.coaching2}
                      </P>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCoaching>
  );
};

export default Coaching;

const StyledCoaching = styled.div`
  .coaching-container {
    background-color: #e6ecff;
    padding: 5%;
    @media (max-width: 768px) {
      padding: 2%;
    }
    .coaching-inner-container {
      .title-container {
        .title-text {
          display: flex;
          column-gap: 10px;

          @media (max-width: 768px) {
            img{
              width: 2.3125rem;
            }
          }
        }
        .lineImg {
          transform: translateY(-20px);
        }
      }
      /* background-color: #fff; */
      @media (max-width: 768px) {
        padding: 1rem;
      }
      .head-text {
        margin-bottom: 67px;
        padding: 0 15%;

        @media (max-width: 768px) {
          margin-bottom: 1rem;
          padding: 0;
          P{
            text-align: left;
          }
        }
      }
      .coaching-cards {
        display: flex;
        column-gap: 10%;
        @media (max-width: 768px) {
          flex-direction: column;
          row-gap: 2rem;
          padding: 0 3%;
        }
        .coaching-card {
          padding: 88px 37px 137px 64px;
          background-color: #3e3975;
          border-radius: 8px;
          border: 1px solid #000;
          width: 100%;
          @media(max-width: 768px) {
            padding: 1.5rem 1.25rem;
          }
          .coach-title {
            margin-bottom: 40px;
            @media(max-width: 768px) {
              margin-bottom: 1rem;
              
            }
          }
          .coaching-list {
            display: flex;
            flex-direction: column;
            row-gap: 2rem;
            @media(max-width: 768px) {
              row-gap: 1.5rem;
              
            }
          }
        }
        .card-right {
          background-color: #140f35;
        }
      }
      .coaching-list-text {
        /* column-gap: 25px; */
        /* justify-content: space-between; */

        @media (max-width: 768px) {
          flex-direction: column;
          /* padding: 20px 15px; */
          /* align-items: flex-start; */
          /* row-gap: 1.5rem; */
        }
        .list-item {
          display: flex;
          column-gap: 10px;
          align-items: center;
          @media (max-width: 768px) {
            align-items: flex-start;
          }
          .icon {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
