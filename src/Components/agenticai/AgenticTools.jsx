import React from "react";
import styled from "styled-components";
import checkmark from "../../assets/agentic/checkmark.svg";
import { toolsUsed } from "./agenticData";

const AgenticTools = () => {
  return (
    <StyledTools>
      <div className="container">
        <h2>TOOLS TO BE USED IN THE PROGRAM</h2>
        <div className="tool-grid">
          {toolsUsed.map((tool) => (
            <div className="tool-card" key={tool}>
              <img src={checkmark} alt="check icon" />
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledTools>
  );
};

export default AgenticTools;

const StyledTools = styled.section`
  font-family: 'Inter', sans-serif;
  background: #02073a;
  padding: 5rem 2.4rem;

  .container {
    max-width: 124rem;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 2.8rem;
    color: #ffffff;
    text-align: center;
    font-size: clamp(2.2rem, 4vw, 3rem);
    line-height: 1.3;
  }

  .tool-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .tool-card {
    background: #ffffff;
    border: 1px solid #3d3d3d;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.4rem 1.6rem;
    min-height: 5.8rem;
  }

  .tool-card img {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .tool-card p {
    margin: 0;
    color: #3d3d3d;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    padding: 6.4rem 9.6rem;

    .tool-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.2rem 2.2rem;
    }
  }
`;
