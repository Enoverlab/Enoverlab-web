import React from "react";
import styled from "styled-components";
import grace from "../../assets/agentic/instructor-grace.png";
import bolaji from "../../assets/agentic/instructor-bolaji.png";
import { instructors } from "./agenticData";

const images = [grace, bolaji];

const AgenticInstructors = () => {
  return (
    <StyledInstructors>
      <div className="container">
        <h2>THE INSTRUCTORS</h2>
        <div className="cards">
          {instructors.map((person, index) => (
            <article className="card" key={person.name}>
              <img src={images[index]} alt={person.imageAlt} />
              <div className="text-wrap">
                <h3>{person.name}</h3>
                <h4>{person.role}</h4>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StyledInstructors>
  );
};

export default AgenticInstructors;

const StyledInstructors = styled.section`
  padding: 6rem 2.4rem;
  background: #ffffff;

  .container {
    max-width: 124rem;
    margin: 0 auto;
  }

  h2 {
    margin: 0 0 3.2rem;
    color: #3d3d3d;
    text-align: center;
    font-size: clamp(2.6rem, 5vw, 4rem);
    line-height: 1.2;
  }

  .cards {
    display: grid;
    gap: 3.2rem;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
  }

  .card img {
    width: min(100%, 41rem);
    border-radius: 1.8rem;
    border: 1px solid #d5d5d5;
    background: #f0f0f0;
  }

  .text-wrap h3 {
    margin: 0;
    color: #3d3d3d;
    font-size: clamp(2.6rem, 4.6vw, 3.2rem);
    line-height: 1.2;
  }

  .text-wrap h4 {
    margin: 0.6rem 0 1.6rem;
    color: #3d3d3d;
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 700;
  }

  .text-wrap p {
    margin: 0;
    color: #3d3d3d;
    font-size: 1.6rem;
    line-height: 1.8;
  }

  @media (min-width: 1024px) {
    padding: 8rem 9.6rem;

    .cards {
      gap: 4.8rem;
    }

    .card {
      grid-template-columns: 26rem 1fr;
      gap: 3.2rem;
    }

    .card img {
      width: 100%;
    }
  }
`;
