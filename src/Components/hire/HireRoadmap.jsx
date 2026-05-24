import React from "react";
import styled from "styled-components";
import bullet from "../../assets/hire/bullet-triangle.svg";
import roadmapImg from "../../assets/hire/seven-two.svg";
import { hireRoadmap } from "./hireData";

const HireRoadmap = () => {
  return (
    <StyledRoadmap>
      <div className="hire-shell inner">
        <div className="content-block">
          <div className="titles">
            <h2 className="section-title">{hireRoadmap.title}</h2>
            <p className="subtitle">{hireRoadmap.subtitle}</p>
          </div>
          <div className="steps">
            {hireRoadmap.steps.map((step) => (
              <div key={step.lead} className="step-row">
                <img src={bullet} alt="" className="bullet" aria-hidden />
                <p className="step-text">
                  <strong>{step.lead}</strong>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="visual">
          <div className="image-frame">
            <img src={roadmapImg} alt="Professionals in a meeting" />
          </div>
        </div>
      </div>
    </StyledRoadmap>
  );
};

export default HireRoadmap;

const StyledRoadmap = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2rem, 6vw, 6rem) 0 clamp(5rem, 10vw, 10rem);

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .inner {
    display: flex;
    gap: clamp(3rem, 10vw, 17.6rem);
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .content-block {
    flex: 1 1 32rem;
    max-width: 45rem;
  }

  .titles {
    margin-bottom: 3.3rem;
  }

  .section-title {
    margin: 0 0 1.5rem;
    font-weight: 600;
    font-size: clamp(2.4rem, 3.2vw, 3.2rem);
    line-height: 1.2;
    color: #3d3d3d;
    max-width: 33rem;
  }

  .subtitle {
    margin: 0;
    font-size: clamp(1.6rem, 1.9vw, 1.8rem);
    font-weight: 400;
    color: #3d3d3d;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
  }

  .step-row {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;

    strong {
      font-weight: 600;
    }

    .bullet {
      width: 1.5rem;
      height: 1.2rem;
      flex-shrink: 0;
      margin-top: 0.3rem;
    }

    .step-text {
      margin: 0;
      font-size: clamp(1.4rem, 1.55vw, 1.6rem);
      line-height: 1.625;
      color: #3d3d3d;
      flex: 1;
    }
  }

  .visual {
    flex: 1 1 38rem;
    max-width: 63.8rem;
    width: 100%;
  }

  .image-frame {
    background: #f7feff;
    border-radius: 2rem;
    padding : 2.7rem 3rem ;
    overflow: hidden;
    min-height: 28rem;

    img {
      display: block;
      width: 100%;
      border-radius: 2rem;
      object-fit: cover;
      transform: scaleX(-1);

      @media (max-width: 960px) {
        height: 24rem;
      }
    }
    @media (max-width: 960px) {
      padding : 0rem;
    }
  }

  @media (max-width: 960px) {
    .inner {
      flex-direction: column;
    }

    .content-block {
      order: 1;
      max-width: 100%;
    }

    .visual {
      order: 2;
      max-width: 100%;
    }
  }
`;
