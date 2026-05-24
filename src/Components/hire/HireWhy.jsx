import React from "react";
import styled from "styled-components";
import bullet from "../../assets/hire/bullet-triangle.svg";
import arrowIcon from "../../assets/hire/heading-arrow.svg";
import whyImg from "../../assets/hire/why-hire.svg";
import { hireWhySection } from "./hireData";

const HireWhy = () => {
  return (
    <StyledHireWhy>
      <div className="hire-shell inner">
        <div className="heading-row">
          <h2 className="section-title">{hireWhySection.heading}</h2>
          <img src={arrowIcon} alt="" className="heading-icon" aria-hidden />
        </div>

        <div className="grid">
          <div className="image-card">
            <div className="image-frame">
              <img src={whyImg} alt="Team collaborating" />
            </div>
          </div>
          <ul className="bullet-list">
            {hireWhySection.bullets.map((text) => (
              <li key={text} className="bullet-item">
                <img src={bullet} alt="" className="bullet-icon" aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledHireWhy>
  );
};

export default HireWhy;

const StyledHireWhy = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2rem, 6vw, 6rem) 0;

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 2.9rem;
  }

  .heading-row {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
  }

  .section-title {
    margin: 0;
    font-weight: 600;
    font-size: clamp(2.4rem, 3.2vw, 3.2rem);
    line-height: 1.25;
    color: #3d3d3d;
    max-width: 36rem;
  }

  .heading-icon {
    width: clamp(5rem, 8vw, 7.4rem);
    height: clamp(5rem, 8vw, 7.4rem);
    flex-shrink: 0;
    object-fit: contain;
  }

  .grid {
    display: flex;
    gap: clamp(2.4rem, 8vw, 15rem);
    align-items: start;
    flex-wrap: wrap;
  }

  .image-card {
    flex: 1 1 32rem;
    max-width: 64.4rem;
  }

  .image-frame {
    background: #F7FEFF;
    border-radius: 2rem;
    padding : 2.7rem 3rem ;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      object-fit: cover;
      border-radius: 2rem;

      @media (max-width: 960px) {
        height: 22rem;
      }
    }
    @media (max-width: 960px) {
      padding : 0rem;
    }
  }

  .bullet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1 1 28rem;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
  }

  .bullet-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    font-size: 1.6rem;
    line-height: 1.625;
    color: #3d3d3d;
    padding: 0.4rem;
  }

  .bullet-icon {
    width: 1.5rem;
    height: 1.2rem;
    margin-top: 0.35rem;
    flex-shrink: 0;
  }

  @media (max-width: 960px) {
    .grid {
      flex-direction: column;
    }

    .bullet-list {
      max-width: 100%;
      order: 2;
    }

    .image-card {
      order: 1;
      max-width: 100%;
      width: 100%;
    }
  }
`;
