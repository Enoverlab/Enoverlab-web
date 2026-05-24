import React from "react";
import styled from "styled-components";
import { mentorshipAssets } from "./mentorshipData";

const MentorshipHero = () => {
  const { heroArt } = mentorshipAssets;

  return (
    <StyledHero>
      <div className="mentorship-shell hero-inner">
        <div className="hero-copy">
          <div className="hero-lead-block">
            <div className="hero-title-wrap">
              <h1 className="hero-title">
                <span className="hero-title-plain">Get </span>
                <span className="hero-accent">1-on-1</span>
                <span className="hero-title-plain">
                  {" "}
                  Mentorship from Africa’s Top Product Managers
                </span>
              </h1>
            </div>
            <div className="hero-taglines">
              <p>Stop guessing!</p>
              <p>Stop doing trial and error!</p>
              <p>Stop struggling alone!</p>
            </div>
          </div>
          <div className="hero-blue-card" aria-labelledby="hero-cta-heading">
            <div className="hero-blue-copy">
              <p id="hero-cta-heading" className="hero-blue-heading">
                Book 1-on-1 mentorship sessions with an experienced Product
                Managers
              </p>
              <p className="hero-blue-sub">
                Get guidance that will take your PM career to the next level
              </p>
            </div>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-art">
            <img src={heroArt} alt="" className="hero-art-img" />
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default MentorshipHero;

const StyledHero = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2.4rem, 5vw, 6rem) 0 clamp(3.2rem, 6vw, 8rem);
  overflow: hidden;

  .mentorship-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .hero-inner {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(4.8rem, 5vw, 5.2rem);
    flex-wrap: wrap;

    @media (min-width: 961px) {
      align-items: center;
      gap: clamp(4.8rem, 6vw, 5.2rem);
    }
  }

  /* Figma desktop: ~663px text column vs gallery (1911:1559–1560). */
  .hero-copy {
    flex: 1 1 38rem;
    max-width: 66.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    color: #3d3d3d;
    align-items: flex-start;
  }

  .hero-lead-block {
    display: flex;
    flex-direction: column;
    gap: 4.6rem;
    width: 100%;
  }

  .hero-title-wrap {
    width: 100%;
  }

  .hero-title {
    margin: 0;
    font-weight: 700;
    font-size: clamp(3.6rem, 5.4vw, 6rem);
    line-height: 1.02;
    text-align: left;
    position: relative;
  }

  .hero-title-plain {
    color: #3d3d3d;
    position: relative;
    z-index: 1;
  }

  .hero-accent {
    position: relative;
    display: inline;
    padding: 0.15em 0.35em 0.1em;
    margin: 0 0.04em;
    border-radius: 1rem;
    background: #003ad4;
    color: #ffffff;
    font-style: italic;
    font-weight: 700;
    z-index: 1;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .hero-taglines {
    font-weight: 500;
    font-size: clamp(2rem, 2.8vw, 3.2rem);
    line-height: 1.45;
    color: #3d3d3d;
    text-align: left;
    & p {
      margin: 0;
    }
  }

  .hero-aside {
    flex: 0 1 52.2rem;
    width: min(52.2rem, 100%);
    align-self: center;
  }

  .hero-art {
    width: 100%;
    border-radius: clamp(13px, 1.68vw, 16.839px);
    overflow: hidden;
    line-height: 0;
    background: #f4f4f4;
  }

  .hero-art-img {
    display: block;
    width: 100%;
    height: auto;
  }

  .hero-blue-card {
    width: 100%;
    min-height: clamp(16rem, 20vw, 23.7rem);
    border-radius: 2rem;
    background: #003ad4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(2rem, 3vw, 2.8rem) clamp(1.6rem, 3vw, 2.4rem);
    box-sizing: border-box;
  }

  .hero-blue-copy {
    text-align: left;
    color: #ffffff;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    gap: clamp(1.4rem, 2vw, 1.8rem);
    width: 100%;
  }

  .hero-blue-heading {
    margin: 0;
    font-weight: 600;
    font-size: clamp(1.8rem, 2.2vw, 2.4rem);
    line-height: 1.5;
    max-width: 44.8rem;
  }

  .hero-blue-sub {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1.4rem, 1.6vw, 1.8rem);
    line-height: 1.74;
  }

  @media (max-width: 960px) {
    .hero-inner {
      flex-direction: column;
      align-items: stretch;
      gap: clamp(4rem, 8vw, 5.2rem);
    }

    .hero-copy {
      align-items: center;
      max-width: none;
      gap: clamp(3.8rem, 8vw, 4.8rem);
    }

    .hero-lead-block {
      align-items: center;
      gap: clamp(3.8rem, 8vw, 4.8rem);
    }

    .hero-title {
      font-size: clamp(3rem, 8.5vw, 4.2rem);
      line-height: 1.212;
      text-align: center;
    }

    .hero-taglines {
      text-align: center;
      font-size: clamp(2rem, 6vw, 2.4rem);
    }

    .hero-aside {
      max-width: 40.8rem;
      margin: 0 auto;
    }

    .hero-blue-copy {
      text-align: center;
      align-items: center;
    }

    .hero-blue-heading {
      max-width: 28.8rem;
    }

    .hero-blue-sub {
      max-width: 21.3rem;
    }
  }
`;
