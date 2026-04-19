import React from "react";
import styled from "styled-components";
import AgenticBtn from "./AgenticBtn";
import { agenticHero, agenticPrice } from "./agenticData";

const AgenticFinalCta = () => {
  return (
    <StyledFinalCta>
      <div className="content">
        <h2>{agenticHero.title}</h2>
        <h3>A 6 weeks Advanced AI Training</h3>
        <h4>
          {agenticPrice.amount} <span>({agenticPrice.crossed})</span>
        </h4>
        <p>({agenticPrice.label})</p>
        <AgenticBtn to={agenticPrice.ctaLink} text={agenticPrice.ctaText} bg="#ffffff" color="#3d3d3d" />
        <small>For more inquiries, please call 07053395509 / 09063124595</small>
      </div>
    </StyledFinalCta>
  );
};

export default AgenticFinalCta;

const StyledFinalCta = styled.section`
  font-family: 'Inter', sans-serif;
  background: #003ad4;
  padding: 6rem 2.4rem;
  margin : 0rem 2.4rem;
  border-radius: 2.4rem 2.4rem 0 0;

  .content {
    max-width: 72rem;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }

  h2 {
    margin: 0;
    font-size: clamp(3rem, 6vw, 4.8rem);
    font-weight: 700;
    line-height: 1.2;
  }

  h3 {
    margin: 1.8rem 0 2rem;
    font-size: clamp(1.8rem, 3.4vw, 2.4rem);
    line-height: 1.4;
    font-weight: 400;
  }

  h4 {
    margin: 0;
    font-size: clamp(2.8rem, 5.5vw, 4rem);
    line-height: 1.3;
    font-weight: 700;
  }

  h4 span {
    opacity: 0.85;
    font-size: 0.85em;
  }

  p {
    margin: 0.6rem 0 2.8rem;
    font-size: 1.6rem;
    letter-spacing: 0.02em;
  }

  small {
    display: block;
    margin-top: 2.4rem;
    font-size: 1.6rem;
    line-height: 1.8;
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: clamp(3rem, 6vw, 5.8rem);
    }
  }
`;
