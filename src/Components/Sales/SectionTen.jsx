import React from "react";
import styled from "styled-components";
import classSales from '../../assets/sales/classSales.png'
const SectionTen = () => {
  return (
    <StyledSectionTen>
      <div className="section-ten-container">
        <p>
          <span>As you can see,</span>
        </p>

        <p>
          Enoverlab and I have done it for many Professionals and we can do it
          for you too.
        </p>

        <p>
          If <span>ONLY</span> you'd take the right processes that I'll show you
          today and do <span>exactly</span> as I say.
        </p>

        <p>
          One thing I can tell you for sure is that Learning Product Management
          can be <span> overwhelming if you don’t have proper guidance</span>
        </p>

        <p>
          Many beginners who start out learning product management by themselves
          always get overwhelmed.
        </p>

        <p>
          Most people try to navigate different online resources in which 90% of
          those resources are always{" "}
          <span>
            too complicated, not designed to meet their needs or not practical.
          </span>
        </p>

        <p>
          While others keep trying to figure things out all alone
          <span> without any guidance </span>which always makes them end up
          being frustrated.
        </p>

        <p>Good for you that you're able to see this letter today</p>
        <p>Because I'm here to make life softer for you.</p>

        <div className="img-box">
            <img src={classSales} alt="" />
        </div>
      </div>
    </StyledSectionTen>
  );
};

export default SectionTen;

const StyledSectionTen = styled.div`
  .section-ten-container {
    padding: 2.9375rem 20% 2.9rem 5%;
    background: #fff;
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
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 3.6875rem;
      color: #0046ff;
      margin-top: 46px;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 2.1875rem;
      }
    }
    .img-box{
        width: 60%;
        height: auto;
        img{
            width: 100%;
            height: auto;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }
  }
`;
