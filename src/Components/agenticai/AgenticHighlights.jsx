import React from "react";
import styled from "styled-components";
import { agenticHighlights } from "./agenticData";

const iconCache = {};
function getIcon(name) {
  if (!iconCache[name]) {
    // eslint-disable-next-line import/no-dynamic-require
    iconCache[name] = require(`../../assets/agentic/${name}`);
  }
  return iconCache[name];
}

const AgenticHighlights = () => {
  return (
    <StyledHighlights>
      <div className="wrap">
        {agenticHighlights.map((item) => (
          <div className="highlight-item" key={item.label}>
            <img src={getIcon(item.icon)} alt="" className="hi-icon" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </StyledHighlights>
  );
};

export default AgenticHighlights;

const StyledHighlights = styled.section`
  font-family: 'Inter', sans-serif;
  padding: 0 1.2rem 0;

  .wrap {
    background: #02073A;
    border-radius: 0 0 2.4rem 2.4rem;
    padding: 3.2rem 2.4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.8rem;
    max-width: 124rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  .wrap::after {
    content: "";
    position: absolute;
    width: 28rem;
    height: 28rem;
    border-radius: 50%;
    border: 6rem solid rgba(0, 72, 255, 0.16);
    right: -15rem;
    top: -5rem;
  }

  .highlight-item {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .hi-icon {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    object-fit: contain;
  }

  p {
    color: #ffffff;
    font-size: clamp(1.5rem, 3.3vw, 2rem);
    line-height: 1.5;
    margin: 0;
  }

  @media (min-width: 1024px) {
    padding: 0 5.5rem 0;

    .wrap {
      border-radius: 0 0 3rem 3rem;
      padding: 5.4rem 9rem 5.4rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      justify-items: center;
      max-width: none;
      column-gap: 4rem;
      row-gap: 3rem;
    }

    .hi-icon {
      width: 2.5rem;
      height: 2.5rem;
    }
    p {
      color: #ffffff;
      font-size: clamp(1.5rem, 1.3vw, 2rem);
      line-height: 1.5;
      margin: 0;
    }
  }
`;
