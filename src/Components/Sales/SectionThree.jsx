import React from "react";
import styled from "styled-components";
import salesChat from "../../assets/sales/salesChat.png";
const SectionThree = () => {
  return (
    <StyledSectionThree>
      <div className="styled-section-three">
        <p>An example is Jimmy:</p>
        <div className="sales-chat-image">
          <img src={salesChat} alt="" />
        </div>
        <p>
          I just showed you that because I can help you achieve this goal easily
          without any knowledge of coding just like Jimmy.
        </p>
        <p>
          <span>You see, </span>
        </p>
        <p>
          It is no surprise that many companies today are Now building with
          Technology in mind.
        </p>

        <p>
          From the old companies who are evolving everything they do with
          Technology 
        </p>
        <p>
          To the startups who are building technology products from ground up.
        </p>
      </div>
    </StyledSectionThree>
  );
};

export default SectionThree;

const StyledSectionThree = styled.div`
  .styled-section-three {
    padding: 2.9375rem 20% 2.9rem 5%;
    background: #f0f5f7;
    @media (max-width: 768px) {
      padding: 2.5rem 5%;
    }
    .sales-chat-image {
      margin: 2rem 0;
      width: 576px;
      height: 338px;
      @media (max-width: 768px) {
        width: 288px;
        height: 170px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    p {
      color: #000000;
      font-size: 1.25rem;
      line-height: 1.875rem;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 0.945rem;
      }
      span {
        color: #000000;
        font-size: 1.5rem;
        font-weight: 500;
        @media (max-width: 768px){
                    font-size: .875rem;
                }
      }
    }
  }
`;
