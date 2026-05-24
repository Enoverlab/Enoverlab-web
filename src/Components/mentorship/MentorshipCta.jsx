import React from "react";
import styled from "styled-components";
import { mentorshipAssets } from "./mentorshipData";

const MentorshipCta = () => {
  const { ctaBanner } = mentorshipAssets;

  return (
    <StyledCta>
      <div className="mentorship-shell inner">
        <div className="cta-bar">
          <div className="cta-visual">
            <img src={ctaBanner} alt="" loading="lazy" />
          </div>
          <div className="cta-copy">
            <h2 className="cta-heading">
              Don&apos;t navigate your Product Manager Career journey alone
            </h2>
            <p className="cta-body">
              Join 500+ Product Managers who have accelerated their careers through
              1-on-1 mentorship.
            </p>
          </div>
        </div>
      </div>
    </StyledCta>
  );
};

export default MentorshipCta;

const StyledCta = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2.4rem, 5vw, 5rem) 0 clamp(4rem, 9vw, 9.6rem);

  .mentorship-shell.inner {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .cta-bar {
    background: #002890;
    border-radius: 23px;
    overflow: hidden;
    max-width: 1240px;
    margin: 0 auto;
    min-height: clamp(28.7rem, 42vw, 28.7rem);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: clamp(2.4rem, 4vw, 3.2rem);

    @media (min-width: 961px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 3.2rem 4rem 3.2rem clamp(10rem, 14vw, 15.4rem);
      min-height: 28.7rem;
    }
  }

  .cta-copy {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 34.3rem;
    order: 2;

    @media (min-width: 961px) {
      order: 1;
      flex: 0 1 34.3rem;
    }
  }

  .cta-heading {
    margin: 0;
    font-weight: 700;
    font-size: clamp(1.8rem, 2.2vw, 2rem);
    line-height: 1.5;
    max-width: 31.9rem;
  }

  .cta-body {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1.3rem, 1.35vw, 1.4rem);
    line-height: 1.91;
  }

  .cta-visual {
    order: 1;
    width: 100%;
    max-width: 51.8rem;
    border-radius: 12px;
    overflow: hidden;
    background: #dfdfdf;
    aspect-ratio: 518 / 223;
    margin-bottom: clamp(2.4rem, 5vw, 4.5rem);

    @media (min-width: 961px) {
      order: 2;
      flex: 0 1 51.8rem;
      margin-bottom: 0;
      align-self: center;
      max-height: 22.3rem;
    }

    img {
      display: block;
      width: 100%;
      height: 125%;
      object-fit: cover;
      object-position: center -20%;
    }
  }
`;
