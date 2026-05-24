import React from "react";
import styled from "styled-components";
import cowrywiseMark from "../../assets/hire/cowry.svg";
import moniePart1 from "../../assets/hire/moniepoint.svg";
import opayMark from "../../assets/hire/opay.svg";
import mtn from "../../assets/hire/mtn.svg";
import { hireCompaniesHeading } from "./hireData";

const logoRowOne = [
  { key: "cw", img: cowrywiseMark, alt: "Cowrywise", plain: true, w: "auto", h: "4rem" },
  { key: "mp", mono: true, alt: "Moniepoint", w: "16.5rem", h: "4.1rem" },
  { key: "op", img: opayMark, alt: "OPay", plain: true, w: "auto", h: "4rem" },
  { key: "mtn", img: mtn, alt: "MTN", w: "10.4rem", h: "5.2rem" },
];

function MonieLogo() {
  return (
    <div className="monie-slot" aria-label="Moniepoint">
      <img src={moniePart1} alt="" className="monie-a" />
    </div>
  );
}

const HireCompanyLogos = () => {
  /** Two identical sequences for seamless 50%-width marquee loop */
  const sequence = [...logoRowOne, ...logoRowOne];

  return (
    <StyledHireLogos>
      <div className="hire-shell">
        <p className="logos-heading">{hireCompaniesHeading}</p>
        <div className="logos-banner">
          <div className="logos-marquee">
            <div className="logos-track">
              {sequence.map((logo, idx) =>
                logo.mono ? (
                  <MonieLogo key={`${logo.key}-${idx}`} />
                ) : (
                  <div
                    key={`${logo.key}-${idx}`}
                    className={`logo-wrap${logo.plain ? " is-plain" : ""}`}
                  >
                    <img
                      src={logo.img}
                      alt={logo.alt}
                      style={{ width: logo.w, height: logo.h }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledHireLogos>
  );
};

export default HireCompanyLogos;

const StyledHireLogos = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: 0 0 clamp(4rem, 8vw, 8rem);

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .logos-heading {
    margin: 0 auto 2.8rem;
    text-align: center;
    font-weight: 600;
    font-size: clamp(2rem, 2.8vw, 3.2rem);
    line-height: 1.25;
    color: #3d3d3d;
    max-width: 90rem;
  }

  .logos-banner {
    background: #003ad4;
    border-radius: 2rem;
    box-shadow:
      0.3rem 2.4rem 5.3rem rgba(208, 221, 240, 0.1),
      0.3rem 2.4rem 5.3rem rgba(208, 221, 240, 0.09),
      0.3rem 2.4rem 5.3rem rgba(208, 221, 240, 0.05),
      0.3rem 2.4rem 5.3rem rgba(208, 221, 240, 0.01);
    overflow: hidden;
    min-height: clamp(17rem, 22vw, 20.1rem);
    display: flex;
    align-items: center;
    padding: 3.2rem 0;
  }

  .logos-marquee {
    width: 100%;
    overflow: hidden;
  }

  .logos-track {
    display: flex;
    gap: clamp(4rem, 8vw, 10rem);
    align-items: center;
    justify-content: center;
    animation: hire-logo-scroll 42s linear infinite;
    width: max-content;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
      filter: brightness(0) invert(1);
      max-height: 5.6rem;
      width: auto !important;
      height: auto !important;
      max-width: 21rem;
    }

    &.is-plain img {
      filter: none;
    }
  }





  @keyframes hire-logo-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .logos-track {
      animation: none;
    }
  }

  @media (max-width: 768px) {
    .logos-banner {
      min-height: 28rem;
    }

    .logos-track {
      flex-wrap: wrap;
      justify-content: center;
      animation: none;
      width: 100%;
      row-gap: 2.8rem;
    }
  }
`;
