import React from "react";
import styled from "styled-components";
import { flexContact } from "./flexData";
import useFlexReveal from "./useFlexReveal";
import {
  flexColors,
  flexEase,
  flexFont,
  flexMotion,
  flexReset,
  flexShell,
  onHover,
} from "./flexTheme";

const FlexContact = () => {
  const reveal = useFlexReveal();

  return (
    <StyledContact aria-labelledby="flex-contact-title" {...reveal}>
      <div className="shell">
        <div className="contact-card reveal">
          <h2 id="flex-contact-title">
            {flexContact.title}
            <span>{flexContact.subtitle}</span>
          </h2>

          <ul className="channels">
            {flexContact.channels.map(({ label, href, Icon }, i) => (
              <li key={href} style={{ "--i": i + 2 }}>
                <a href={href}>
                  <span className="channel-icon draw">
                    <Icon aria-hidden="true" />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledContact>
  );
};

export default FlexContact;

const StyledContact = styled.section`
  font-family: ${flexFont};
  background: ${flexColors.title};
  padding: clamp(10.7rem, 6vw, 12.4rem) 0;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  .contact-card {
    max-width: 80rem;
    margin: 0 auto;
    padding: clamp(3.2rem, 4vw, 4rem) clamp(2rem, 3vw, 3.2rem);
    border-radius: 1.6rem;
    background: linear-gradient(135deg, ${flexColors.primary} 0%, #002080 100%);
    color: ${flexColors.white};
    text-align: center;
  }

  h2 {
    font-size: clamp(2.4rem, 1.8vw, 2.8rem);
    font-weight: 500;
    line-height: 1.8;

    span {
      display: block;
    }
  }

  .channels {
    list-style: none;
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    color: ${flexColors.white};
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: ${flexColors.white};
      text-decoration: underline;
    }
  }

  .channel-icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.16);
    font-size: 1.4rem;
    transition:
      background-color 200ms ease,
      translate 200ms ${flexEase};
  }

  ${onHover(`
    a:hover .channel-icon {
      background: rgba(255, 255, 255, 0.28);
      translate: 0 -0.2rem;
    }
  `)}

  @media (min-width: 768px) {
    .channels {
      flex-direction: row;
      justify-content: center;
      gap: 3.2rem;
    }
  }
`;
