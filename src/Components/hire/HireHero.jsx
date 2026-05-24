import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { hireHero } from "./hireData";

const HireHero = () => {
  return (
    <StyledHireHero>
      <div className="hire-shell hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            {hireHero.titleLines.map((line) => (
              <span key={line} className="hero-title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{hireHero.subtitle}</p>
          <p className="hero-body">{hireHero.description}</p>
          <div className="hero-cta">
            <StyledPrimaryBtn smooth to={hireHero.primaryCtaTarget}>
              {hireHero.primaryCta}
            </StyledPrimaryBtn>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true" />
      </div>
    </StyledHireHero>
  );
};

export default HireHero;

const StyledPrimaryBtn = styled(HashLink)`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #0030af;
  color: #ffffff;
  font-size: clamp(1.6rem, 1.8vw, 1.8rem);
  font-weight: 500;
  min-height: 5.6rem;
  min-width: 20.4rem;
  padding: 0 2.4rem;
  border-radius: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
    color: #ffffff;
  }
`;

const StyledHireHero = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2.4rem, 6vw, 8rem) 0 clamp(3.2rem, 8vw, 6rem);
  overflow: hidden;

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .hero-inner {
    display: flex;
    align-items: center;
    gap: clamp(2.4rem, 5vw, 6.9rem);
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .hero-copy {
    flex: 1 1 34rem;
    max-width: 71.4rem;
    color: #3d3d3d;
  }

  .hero-title {
    margin: 0 0 2.9rem;
    font-weight: 700;
    font-size: clamp(3.2rem, 5vw, 4.8rem);
    line-height: 1.15;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .hero-title-line {
    display: block;
  }

  .hero-sub {
    margin: 0 0 1.8rem;
    font-size: clamp(1.8rem, 2.2vw, 2.4rem);
    font-weight: 400;
    line-height: 1.35;
    max-width: 48rem;
  }

  .hero-body {
    margin: 0 0 2.8rem;
    font-size: clamp(1.4rem, 1.5vw, 1.6rem);
    line-height: 1.75;
    font-weight: 400;
    max-width: 37.6rem;
  }

  .hero-visual {
    flex: 0 1 47rem;
    width: 100%;
    max-width: 47rem;
    aspect-ratio: 470 / 383;
    background: #c3d3ff;
    border-radius: 2.4rem;
  }

  @media (max-width: 960px) {
    .hero-inner {
      flex-direction: column;
      align-items: stretch;
    }

    .hero-visual {
      max-width: 100%;
      min-height: 22rem;
    }
  }
`;
