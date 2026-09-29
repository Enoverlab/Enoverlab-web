import React from "react";
import styled, { keyframes } from "styled-components";
import FlexBtn from "./FlexBtn";
import useFlexReveal from "./useFlexReveal";
import { flexHero } from "./flexData";
import {
  flexColors,
  flexFont,
  flexMotion,
  flexReset,
  flexShell,
  pillLabel,
} from "./flexTheme";

const FlexHero = () => {
  const reveal = useFlexReveal({ margin: "0px" });

  return (
    <StyledHero {...reveal}>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <span className="badge reveal">{flexHero.badge}</span>
          {/* One span per line: the design breaks the headline into three fixed lines. */}
          <h1>
            <span className="reveal" style={{ "--i": 1 }}>
              {flexHero.titleLead}
            </span>{" "}
            <span className="accent reveal" style={{ "--i": 2 }}>
              {flexHero.titleAccent}
            </span>{" "}
            <span className="reveal" style={{ "--i": 3 }}>
              {flexHero.titleTail}
            </span>
          </h1>
          <p className="subtitle reveal" style={{ "--i": 4 }}>
            {flexHero.subtitle}
          </p>
          <div className="reveal" style={{ "--i": 5 }}>
            <FlexBtn to={flexHero.ctaLink}>{flexHero.ctaText}</FlexBtn>
          </div>
        </div>

        {/* Scale-only (no fade): the photo is the LCP element, so it must paint at once. */}
        <div className="hero-media reveal--media">
          {/* LCP image: eager + high priority. Lowercase attr because React 18 doesn't know fetchPriority. */}
          <img
            src={flexHero.image}
            alt={flexHero.imageAlt}
            width="1024"
            height="1024"
            fetchpriority="high"
          />
        </div>
      </div>
    </StyledHero>
  );
};

export default FlexHero;

const drift = keyframes`
  from { translate: 0 0; }
  to { translate: -1.2rem -1.6rem; }
`;

const StyledHero = styled.section`
  font-family: ${flexFont};
  background: ${flexColors.white};
  padding: clamp(2.4rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 5.6rem);
  overflow: hidden;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  .hero-inner {
    display: grid;
    gap: 3.2rem;
    align-items: center;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .badge {
    ${pillLabel}
    font-size: 1.8rem;
    padding: 0.9rem 2.4rem;
    margin-bottom: 1.6rem;
  }

  h1 {
    font-size: clamp(4.2rem, 4.4vw, 6rem);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: ${flexColors.title};

    span {
      display: block;
    }
  }

  .accent {
    color: ${flexColors.primary};
  }

  .subtitle {
    margin: 1.6rem 0 2.4rem;
    max-width: 60rem;
    font-size: clamp(1.5rem, 1.5vw, 2.4rem);
    line-height: 1.6;
    color: ${flexColors.body};
  }

  .hero-media {
    position: relative;

    /* Pale disc peeking out from behind the photo (bottom-right in the design). */
    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      right: 21%;
      bottom: -38%;
      height: 62%;
      width: 54%;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 0.8rem solid #eef2fb;
      background: #e5edfe;
      opacity: 0.6;
      animation: ${drift} 9s ease-in-out infinite alternate;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }

    img {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
      height: auto;
      border-radius: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    .hero-inner {
      grid-template-columns: 1fr 1fr;
      gap: clamp(4rem, 5vw, 8rem);
    }

    .hero-media::before {
      right: -22%;
      bottom: -18%;
      border: 1rem solid #eef2fb;
    }
  }
`;
