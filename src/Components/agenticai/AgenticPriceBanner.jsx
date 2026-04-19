import React from "react";
import styled from "styled-components";
import AgenticBtn from "./AgenticBtn";
import { agenticPrice } from "./agenticData";

const AgenticPriceBanner = () => {
  return (
    <StyledPriceBanner>
      <div className="inner">
        <div className="price-wrap">
          <h3>
            {agenticPrice.amount} <span>({agenticPrice.crossed})</span>
          </h3>
          <p>({agenticPrice.label})</p>
        </div>
        <AgenticBtn to={agenticPrice.ctaLink} text={agenticPrice.ctaText} bg="#ffffff" color="#3d3d3d" />
      </div>
    </StyledPriceBanner>
  );
};

export default AgenticPriceBanner;

const StyledPriceBanner = styled.section`
  font-family: 'Inter', sans-serif;
  background: #1037b8;
  margin-top: 1.2rem;
  padding: 3.2rem 2.4rem;

  .inner {
    max-width: 84rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
  }

  .price-wrap {
    text-align: center;
  }

  h3 {
    margin: 0;
    font-size: clamp(2.8rem, 6.2vw, 4.8rem);
    line-height: 1.2;
    font-weight: 700;
  }

  h3 span {
    opacity: 0.9;
    font-size: 0.85em;
  }

  p {
    margin: 0.4rem 0 0;
    font-size: clamp(1.4rem, 3.3vw, 2rem);
    letter-spacing: 0.02em;
  }

  @media (min-width: 1024px) {
    padding: 4.4rem 5.5rem;
    margin: 7.7rem 0;

    .inner {
      flex-direction: row;
      justify-content: center;
      gap: 5.8rem;
    }

    .price-wrap {
      text-align: center;
    }
  }
`;
