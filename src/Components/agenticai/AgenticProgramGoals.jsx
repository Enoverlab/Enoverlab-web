import React from "react";
import styled from "styled-components";
import checkmark from "../../assets/agentic/checkmark.svg";
import { goals } from "./agenticData";

const AgenticProgramGoals = () => {
  return (
    <StyledGoals>
      <div className="container">
        <h2>Program Goals</h2>
        <h3>By the end of the program, you will be able to:</h3>
        <div className="goals-grid">
          {goals.map((goal) => (
            <article className="goal-item" key={goal}>
              <img src={checkmark} alt="check" />
              <p>{goal}</p>
            </article>
          ))}
        </div>
      </div>
    </StyledGoals>
  );
};

export default AgenticProgramGoals;

const StyledGoals = styled.section`
  font-family: 'Inter', sans-serif;
  padding: 6rem 2.4rem;
  background: #eefcfc;

  .container {
    max-width: 124rem;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    color: #3d3d3d;
    text-align: center;
    font-size: clamp(2.6rem, 4.8vw, 3.6rem);
    line-height: 1.2;
  }

  h3 {
    margin: 1.2rem 0 3.2rem;
    color: #3d3d3d;
    text-align: center;
    font-size: clamp(1.7rem, 3.4vw, 2.4rem);
    line-height: 1.5;
    font-weight: 600;
  }

  .goals-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .goal-item {
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;
    padding: 1.8rem;
    min-height: 9.5rem;
  }

  .goal-item img {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .goal-item p {
    margin: 0;
    color: #3d3d3d;
    font-size: 1.6rem;
    line-height: 1.55;
  }

  @media (min-width: 1024px) {
    padding: 7.2rem 9.6rem;

    .goals-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    .goal-item p {
      margin: 0;
      color: #3d3d3d;
      font-size: 1.8rem;
      line-height: 1.55;
    }
  }
`;
