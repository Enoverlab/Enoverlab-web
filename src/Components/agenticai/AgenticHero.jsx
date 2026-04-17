import React from "react";
import styled from "styled-components";
import { H1, H3, H4 } from "../../Utils/styled/Typograpyhy";
import AgenticBtn from "./AgenticBtn";
import heroRobo from "../../assets/agentic/hero-robo.png";
import circlesBg from "../../assets/agentic/circles.png";
import { agenticHero } from "./agenticData";

const AgenticHero = () => {
  return (
    <StyledAgenticHero>
      <div className="hero-shell">
        <img src={circlesBg} alt="" className="circles-bg" />
        <div className="hero-content">
          <H1 fs="4.6rem" mdfs="4.1vw" mdlh="6.8rem" color="#ffffff">
            {agenticHero.title}
          </H1>
          <H3 fs="2.8rem" mdfs="2.2vw" fw="500" color="#ffffff" className="subtitle" mb="2.4rem">
            {agenticHero.subtitle}
          </H3>
          <H4 fs="1.6rem" mdfs="1.8rem" fw="500" color="#ffffff">
            {agenticHero.note}
          </H4>
          <div className="cta-wrap">
            <AgenticBtn to={agenticHero.ctaLink} text={agenticHero.ctaText} bg="#ffffff" color="#3d3d3d" />
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={heroRobo} alt="Agentic AI hero" className="hero-image" />
        </div>
      </div>
    </StyledAgenticHero>
  );
};

export default AgenticHero;

const StyledAgenticHero = styled.section`
  padding: 1.2rem 1.2rem 0;

  .hero-shell {
    background: #002076;
    border-radius: 2.4rem 2.4rem 0 0;
    padding: 4rem 2.4rem 0;
    overflow: hidden;
    position: relative;
  }

  .circles-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(100%, 60rem);
    height: auto;
    pointer-events: none;
    z-index: 1;
    opacity: 0.55;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 76rem;
  }

  .cta-wrap {
    margin-top: 3rem;
  }

  .hero-image-wrap {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .hero-image {
    width: min(100%, 52rem);
    height: auto;
  }

  @media (min-width: 1024px) {
    padding: 4.2rem 5.5rem 0;

    .hero-shell {
      min-height: 54.8rem;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 4rem;
      padding: 8.4rem 8.2rem 0;
      border-radius: 3rem 3rem 0 0;
    }

    .circles-bg {
      width: min(100%, 90rem);
    }

    .hero-image-wrap {
      margin-top: 0;
      justify-content: flex-end;
    }

    .hero-image {
      width: clamp(38rem, 30vw, 52rem);
    }

    h3.subtitle {
        margin: 2.6rem 0;
        
    }
  }
`;
