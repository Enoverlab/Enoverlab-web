import React from "react";
import styled from "styled-components";
import { flexSteps } from "./flexData";
import useFlexReveal from "./useFlexReveal";
import {
  flexColors,
  flexEase,
  flexFont,
  flexMotion,
  flexReset,
  onHover,
  flexShell,
  sectionTitle,
} from "./flexTheme";

const FlexHowItWorks = () => {
  const reveal = useFlexReveal();

  return (
    <StyledHow aria-labelledby="flex-how-title" {...reveal}>
      <div className="shell">
        <h2 id="flex-how-title" className="reveal">
          How does <span className="accent">“Flex”</span> work?
        </h2>

        <ol className="steps">
          {flexSteps.map(({ number, title, body, Icon }, i) => (
            <li key={number} className="reveal" style={{ "--i": i + 1 }}>
              <div className="step-top">
                <span className="icon draw">
                  <Icon aria-hidden="true" />
                </span>
                <span className="number" aria-hidden="true">
                  {number}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </StyledHow>
  );
};

export default FlexHowItWorks;

const StyledHow = styled.section`
  font-family: ${flexFont};
  background: ${flexColors.white};
  padding: clamp(4.8rem, 7vw, 9.6rem) 0;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  h2 {
    ${sectionTitle}
  }

  .steps {
    list-style: none;
    margin: clamp(3.2rem, 4vw, 5.6rem) 0 0;
    padding: 0;
    display: grid;
    gap: 1.6rem;
  }

  li {
    padding: 2.4rem;
    background: ${flexColors.card};
    border: 1px solid ${flexColors.border};
    border-radius: 1.6rem;
  }

  ${onHover(`
    li:hover {
      translate: 0 -0.4rem;
      border-color: #d5dcec;
      box-shadow: 0 1.6rem 3.2rem -2rem rgba(17, 17, 17, 0.2);
    }

    li:hover .number {
      color: ${flexColors.primary};
    }
  `)}

  .step-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .icon {
    display: grid;
    place-items: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 0.8rem;
    background: ${flexColors.tintStrong};
    color: ${flexColors.primary};
    font-size: 2.2rem;
  }

  .number {
    font-size: 3.2rem;
    font-weight: 700;
    color: #9aa3b5;
    transition: color 220ms ${flexEase};
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${flexColors.title};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    color: ${flexColors.muted};
  }

  @media (min-width: 768px) {
    .steps {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }
    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
