import React from "react";
import styled from "styled-components";
import { mentorshipWhy } from "./mentorshipData";

const MentorshipWhy = () => {
  return (
    <StyledWhy>
      <div className="mentorship-shell inner">
        <h2 className="section-title">Here are why you need a mentor today</h2>
        <div className="cards-grid">
          {mentorshipWhy.map((item) => (
            <article
              key={item.title}
              className="why-card"
              style={{ background: item.bg }}
            >
              <h3 className="why-title">{item.title}</h3>
              <p className="why-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </StyledWhy>
  );
};

export default MentorshipWhy;

const StyledWhy = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #fbfbfb;
  padding: clamp(4rem, 8vw, 7.2rem) 0 clamp(4rem, 9vw, 8rem);

  .mentorship-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .section-title {
    margin: 0 auto 4.3rem;
    max-width: 90rem;
    font-weight: 600;
    font-size: clamp(2.4rem, 3.2vw, 3.2rem);
    line-height: 1.2;
    text-align: center;
    color: #3d3d3d;
  }

  .cards-grid {
    display: grid;
    gap: clamp(2.8rem, 4vw, 4.3rem);
    justify-content: center;
  }

  @media (min-width: 961px) {
    .cards-grid {
      grid-template-columns: repeat(3, minmax(0, 38.5rem));
    }

    .why-card {
      border-radius: 2rem;
    }
  }

  @media (max-width: 960px) {
    .cards-grid {
      grid-template-columns: minmax(0, 40.8rem);
      justify-items: stretch;
      margin: 0 auto;
    }

    .section-title {
      font-size: clamp(2.2rem, 6.5vw, 2.8rem);
      max-width: 32rem;
      margin-bottom: clamp(3rem, 8vw, 4.7rem);
    }

    .why-card {
      border-radius: 1rem;
    }
  }

  .why-card {
    min-height: 22rem;
    padding: clamp(1.8rem, 3vw, 2.8rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #3d3d3d;
    width: 100%;
  }

  .why-title {
    margin: 0 0 1.2rem;
    font-size: clamp(1.8rem, 2vw, 2rem);
    font-weight: 700;
    line-height: 1.2;
  }

  .why-body {
    margin: 0;
    font-size: clamp(1.3rem, 1.35vw, 1.4rem);
    font-weight: 400;
    line-height: clamp(20px, 2.8vw, 28px);
    max-width: 34.5rem;
  }
`;
