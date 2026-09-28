import React from "react";
import styled from "styled-components";
import { flexAudience } from "./flexData";
import useFlexReveal from "./useFlexReveal";
import {
  flexColors,
  flexFont,
  flexMotion,
  flexReset,
  onHover,
  flexShell,
  sectionTitle,
} from "./flexTheme";

const FlexAudience = () => {
  const reveal = useFlexReveal();
  // On mobile the list sits a full image-height below the heading, so it gets its own trigger.
  const listReveal = useFlexReveal();

  return (
    <StyledAudience aria-labelledby="flex-audience-title" {...reveal}>
      <div className="shell">
        <h2 id="flex-audience-title" className="reveal">
          Who is <span className="accent">“Flex”</span> for?
        </h2>

        <div className="audience-grid">
          <img
            className="reveal"
            style={{ "--i": 1 }}
            src={flexAudience.image}
            alt={flexAudience.imageAlt}
            width="1100"
            height="895"
            loading="lazy"
            decoding="async"
          />

          <ul className="audience-list" {...listReveal}>
            {flexAudience.items.map(({ text, Icon, tone }, i) => (
              <li key={text} className="reveal" style={{ "--i": i + 1 }}>
                <span
                  className="icon draw"
                  style={{ background: tone.bg, color: tone.fg }}
                >
                  <Icon aria-hidden="true" />
                </span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledAudience>
  );
};

export default FlexAudience;

const StyledAudience = styled.section`
  font-family: ${flexFont};
  background: ${flexColors.tint};
  // padding: clamp(4.8rem, 7vw, 8rem) 0;
  padding: 8rem 0;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  h2 {
    ${sectionTitle}
  }

  .audience-grid {
    margin-top: clamp(3.2rem, 4vw, 5.6rem);
    display: grid;
    gap: 3.2rem;
    align-items: center;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .audience-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.8rem 2rem;
    background: ${flexColors.white};
    border: 1px solid ${flexColors.border};
    border-radius: 1.2rem;
  }

  ${onHover(`
    li:hover {
      translate: 0 -0.3rem;
      border-color: #d5dcec;
      box-shadow: 0 1.2rem 2.4rem -1.6rem rgba(17, 17, 17, 0.18);
    }
  `)}

  .icon {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }

  li p {
    font-size: 1.6rem;
    line-height: 1.55;
    color: ${flexColors.title};
  }

  @media (min-width: 1024px) {
    .audience-grid {
      grid-template-columns: 1fr 1fr;
      gap: clamp(4rem, 5vw, 8rem);
    }

    li p {
      font-size: 1.6rem;
    }
  }
`;
