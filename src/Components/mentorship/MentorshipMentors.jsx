import React from "react";
import styled from "styled-components";
import { mentorshipMentors } from "./mentorshipData";

const MentorshipMentors = () => {
  return (
    <StyledMentors>
      <div className="mentorship-shell inner">
        <h2 className="section-title">
          Experienced{" "}
          <span className="accent">Product Mentors</span> from Top Companies
        </h2>

        <div className="mentor-grid">
          {mentorshipMentors.map((m) => (
            <MentorCard key={m.name} mentor={m} />
          ))}
        </div>
      </div>
    </StyledMentors>
  );
};

function MentorCard({ mentor }) {
  const {
    name,
    role,
    tagline,
    image,
    oldPrice,
    roleShadow,
    bookWidth,
  } = mentor;

  return (
    <article className="mentor-card">
      <div
        className={`mentor-photo is-center`}
      >
        <img src={image} alt={name} />
      </div>
      <div className="mentor-meta">
        <div className="mentor-heading">
          <div className="mentor-names">
            <span className="mentor-name">{name}</span>
            <span className="mentor-rule" aria-hidden="true" />
            <span className={`mentor-role ${roleShadow ? "has-shadow" : ""}`}>
              {role}
            </span>
          </div>
          <p className="mentor-tag">{tagline}</p>
        </div>
        <div className="mentor-rule-line" aria-hidden="true" />
        <div className="mentor-footer">
          <div className="mentor-price">
            <span className="strike">N</span>
            <span className="amount">{oldPrice}</span>
            <span className="sessions">4 sessions</span>
          </div>
          <button type="button" className="book-btn" style={{ width: bookWidth }}>
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default MentorshipMentors;

const StyledMentors = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(4rem, 9vw, 10rem) 0 clamp(4rem, 8vw, 8rem);

  .mentorship-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  .section-title {
    margin: 0 auto clamp(3.2rem, 4vw, 3.6rem);
    max-width: min(118.6rem, 100%);
    font-weight: 600;
    font-size: clamp(2.6rem, 3.8vw, 3.2rem);
    text-align: center;
    color: #3d3d3d;
    line-height: 1.2;
  }

  .accent {
    color: #0030af;
  }

  .mentor-grid {
    display: grid;
    gap: clamp(2.8rem, 4vw, 4.1rem);
    max-width: 118.6rem;
    margin: 0 auto;
    grid-template-columns: 1fr;
    justify-items: center;

    @media (min-width: 961px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .mentor-card {
    width: 100%;
    max-width: 36.8rem;
    border: 1px solid #efefef;
    border-radius: 2rem;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
    min-height: 55.1rem;
    justify-content: center;
    box-sizing: border-box;
  }

  .mentor-photo {
    width: min(31.6rem, 100%);
    border-radius: 2rem;
    overflow: hidden;
    aspect-ratio: 316 / 312;
    background: #e8e8e8;
    position: relative;

    img {
      position: absolute;
      inset: 0;
      width: 187%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    &.is-shift img {
      left: -40%;
      width: 187%;
    }

    &.is-center img {
      left: -0.02%;
      top: -16%;
      width: 100%;
      height: 131%;
      object-position: center top;
    }
  }

  .mentor-meta {
    width: min(31.6rem, 100%);
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
  }

  .mentor-heading {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .mentor-names {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    row-gap: 0.4rem;
  }

  .mentor-name {
    font-weight: 600;
    font-size: clamp(1.65rem, 1.85vw, 1.8rem);
    color: #3d3d3d;
    line-height: 1.6;
  }

  .mentor-rule {
    width: 1px;
    height: 13px;
    background: #d9d9d9;
    flex-shrink: 0;
  }

  .mentor-role {
    font-size: clamp(1.3rem, 1.35vw, 1.4rem);
    font-style: italic;
    font-weight: 400;
    color: #3d3d3d;
    line-height: 1.5;

    &.has-shadow {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .mentor-tag {
    margin: 0;
    font-size: clamp(1.3rem, 1.35vw, 1.4rem);
    color: #3d3d3d;
    line-height: 1.6;
  }

  .mentor-rule-line {
    width: 100%;
    border-top: 1px solid #e5e5e5;
    height: 0;
    margin: 0;
  }

  .mentor-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    flex-wrap: wrap;
  }

  .mentor-price {
    display: inline-flex;
    align-items: baseline;
    gap: 0.4rem;
    color: #3d3d3d;
    font-size: clamp(2rem, 2.2vw, 2.4rem);
    font-weight: 600;
    flex-wrap: wrap;
    white-space: nowrap;

    .strike {
      text-decoration: line-through;
      text-decoration-thickness: 1px;
    }

    .amount {
      font-weight: 600;
      margin-inline-start: 0.05em;
    }

    .sessions {
      font-size: clamp(1.1rem, 1.25vw, 1.2rem);
      font-weight: 400;
      margin-left: 0.35rem;
      align-self: center;
      color: #3d3d3d;
    }
  }

  .book-btn {
    appearance: none;
    border: none;
    cursor: pointer;
    background: #0030af;
    color: #ffffff;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 3.2rem;
    padding: 0 1rem;
    min-height: 5.2rem;
    border-radius: 1rem;
    flex-shrink: 0;
    max-width: 100%;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.92;
    }
  }

  @media (max-width: 960px) {
    .mentor-grid {
      max-width: 36.8rem;
    }
  }
`;
