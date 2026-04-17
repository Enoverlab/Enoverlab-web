import React from "react";
import styled from "styled-components";
import entailsRobo from "../../assets/agentic/pg-entails-robo.png";
import { module1, module2, module3, module4, module5 } from "./agenticData";

const ModuleBlock = ({ module }) => {
  return (
    <article className="module-card">
      <h3>{module.title}</h3>
      <h4>{module.subtitle}</h4>
      <ul>
        {module.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

const AgenticProgramEntails = () => {
  return (
    <StyledEntails>
      <div className="heading-wrap">
        <h2>See what the program entails</h2>
      </div>

      <div className="module1-wrap">
        <ModuleBlock module={module1} />
        <div className="side-image-wrap">
          <img src={entailsRobo} alt="Program entails robot" />
        </div>
      </div>

      <div className="modules-grid">
        <ModuleBlock module={module2} />
        <ModuleBlock module={module3} />
        <ModuleBlock module={module4} />
        <ModuleBlock module={module5} />
      </div>
    </StyledEntails>
  );
};

export default AgenticProgramEntails;

const StyledEntails = styled.section`
  background: #eefcfc;
  padding: 5rem 2.4rem;

  .heading-wrap {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  h2 {
    margin: 0;
    color: #3d3d3d;
    font-size: clamp(2.8rem, 5vw, 4rem);
    line-height: 1.25;
  }

  .module1-wrap,
  .modules-grid {
    max-width: 124rem;
    margin: 0 auto;
  }

  .module1-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.4rem;
    margin-bottom: 4rem;
  }

  .side-image-wrap {
    display: flex;
    justify-content: center;
  }

  .side-image-wrap img {
    width: min(100%, 44rem);
    height: auto;
  }

  .modules-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .module-card {
    background: #ffffff;
    border: 1px solid #d4e3e3;
    border-radius: 1.2rem;
    padding: 2.2rem 2rem;
  }

  .module-card h3 {
    margin: 0;
    color: #3d3d3d;
    font-size: 2.2rem;
    line-height: 1.2;
  }

  .module-card h4 {
    margin: 1rem 0 1.6rem;
    color: #3d3d3d;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  .module-card ul {
    margin: 0;
    padding-left: 1.8rem;
    display: grid;
    gap: 1rem;
  }

  .module-card li {
    color: #3d3d3d;
    font-size: 1.5rem;
    line-height: 1.6;
  }

  @media (min-width: 1024px) {
    padding: 7rem 9.6rem;

    .module1-wrap {
      grid-template-columns: 1.35fr 1fr;
      align-items: center;
      margin-bottom: 5rem;
    }

    .modules-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2.4rem;
      align-items: start;
    }

    .module-card {
      padding: 2.6rem;
      min-height: 100%;
    }
  }
`;
