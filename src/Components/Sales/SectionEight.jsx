import React from "react";
import styled from "styled-components";
const SectionEight = () => {
  return (
    <StyledSectionEight>
      <div className="section-eight-container">
        <h3>Now what is Product Management?</h3>
        <p>
          According to AIPMM, “Product Management is <span> the process of conceiving,
          planning, developing, testing, launching, delivering and withdrawing a
          product from the market.”</span>
        </p>

        <p>It is the end-to-end process of building and managing a product.</p>

        <p><span>And without any confusion,</span></p>

        <p>
          A Product Manager is the person who leads the development and delivery
          of products.A Product Manager ensures the products meet the
          users/customers need and achieve the business objectives for the
          organization.
        </p>

        <p>
          By the way, a Product in tech can be an app, a website, a software as
          a service (SAAS), web app, a wearable device like our smart watch
          etc. 
        </p>
        <p>
          Anything that uses some form of technology is a product. With these
          simple explanations above, you will see that I know my onions.
        </p>
      </div>
    </StyledSectionEight>
  );
};

export default SectionEight;

const StyledSectionEight = styled.div`
  .section-eight-container {
    padding: 2rem 20% 2.9rem 5%;
    background: #f0f5f7;
    @media (max-width: 768px) {
      padding: 2.5rem 5%;
    }

    p {
      color: #000000;
      font-size: 20px;
      line-height: 1.875rem;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 0.945rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
    }
    h3 {
      font-size: 1.75rem;
      font-weight: 600;
      line-height: 3.1875rem;
      color: #0046ff;
      margin-top: 46px;
      margin-bottom: 30px;
      text-decoration: underline;
      @media (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 2.1875rem;
      }
    }
  }
`;
