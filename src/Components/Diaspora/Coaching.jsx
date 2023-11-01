import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import CoachingBg from "../../assets/coachinBg.png";
import {AiOutlineCheckCircle} from 'react-icons/ai'
const coachData = [
  {
    coaching1: "Product networking /career events.",
    coaching2: "Negotiating salary offers",
  },
  {
    coaching1: "Signing up on strategic job boards",
    coaching2: "Portfolio building",
  },
  {
    coaching1: "CV Screening, review and recreation",
    coaching2: "Job application strategy",
  },
  {
    coaching1: "Interview preparation/mock ",
    coaching2: "Interview preparation/mock"
  },
  {
    coaching1: "LinkedIn profile optimization",
    coaching2: "Understanding job market."
  }
];

const Coaching = () => {
  return (
    <StyledCoaching>
      <div className="coaching-container">
        <div className="coaching-inner-container">
          <H1 textAlign="left" color="#111" fontSize="3rem" fontWeight="600"
          mobileFontSize="1.5rem"
          >
            Career Coaching
          </H1>
          <div className="coaching-list">
            {coachData.map((data, index) => (
              <div key={index} className="coaching-list-text">
                <div className="list-item">
                <AiOutlineCheckCircle className="icon" color="#111" />
                <P
                color="#111"
                fontSize="1.5rem"
                mobileFontSize="1rem"
                textAlign="left"
                >{data.coaching1}</P>
                </div>
                <div className="list-item">
                <AiOutlineCheckCircle className="icon" color="#111" />
                <P
                 color="#111"
                 fontSize="1.5rem"
                 mobileFontSize="1rem"
                 textAlign="left"
                >{data.coaching2}</P>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledCoaching>
  );
};

export default Coaching;

const StyledCoaching = styled.div`
  .coaching-container {
    background-image: url(${CoachingBg});
    padding: 5%;
    .coaching-inner-container {
      background-color: #fff;
      padding: 7.1875rem 6.3125rem;
      @media (max-width: 768px){
        padding: 1rem;
      }
      .coaching-list-text {
        display: inline-flex;
        padding: 40px 30px;
        border: 1px solid #d4d3d3;
        column-gap: 25px;
        justify-content: space-between;
        margin-bottom: 45px;
        @media (max-width: 768px){
        flex-direction: column;
        padding: 20px 15px;
        align-items: flex-start;
        row-gap: 1.5rem;
      }
        .list-item{
            display: flex;
            column-gap: 10px;
            align-items: center;
            @media (max-width: 768px){
                align-items: flex-start;
      }
            .icon{
                font-size: 1.2rem;
            }
        }
      }
    }
  }
`;
