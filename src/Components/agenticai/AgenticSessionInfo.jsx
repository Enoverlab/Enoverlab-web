import React from "react";
import styled from "styled-components";
import meetLogo from "../../assets/agentic/meet.png";

const AgenticSessionInfo = () => {
  return (
    <StyledSessionInfo>
      <div className="inner-card">
        <div className="info-block start-date-block">
          <p className="label">Start date:</p>
          <h3>May 16th</h3>
        </div>

        <span className="divider" aria-hidden="true" />

        <div className="info-block time-block">
          <p className="label">Day & Time:</p>
          <p className="time">Every Tuesday 8pm-10pm</p>
          <p className="time">Every Saturday 12pm-2pm</p>
        </div>

        <span className="divider" aria-hidden="true" />

        <div className="info-block venue-block">
          <p className="label">Venue:</p>
          <div className="venue-row">
            <img src={meetLogo} alt="Google Meet" />
            <p className="venue-text">Google Meet</p>
          </div>
        </div>
      </div>
    </StyledSessionInfo>
  );
};

export default AgenticSessionInfo;

const StyledSessionInfo = styled.section`
  font-family: 'Inter', sans-serif;
  padding: 2.4rem 2.4rem 5rem;

  .inner-card {
    max-width: 124rem;
    margin: 0 auto;
    border: 1px solid #A6A6A6;
    border-radius: 20px;
    background: #ffffff;
    padding: 2.8rem 2.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8rem;
  }

  .info-block {
    color: #3d3d3d;
    text-align: center;
    width: 100%;
  }

  .label {
    margin: 0;
    font-size: clamp(1.6rem, 4.5vw, 2rem);
    line-height: 1.4;
    font-weight: 400;
  }

  h3 {
    margin: 1.2rem 0 0;
    font-size: clamp(2.4rem, 7.2vw, 3.2rem);
    line-height: 1.1;
    font-weight: 700;
  }

  .time {
    text-align: left;
    margin: 1rem 0 0;
    font-size: clamp(1.8rem, 5.4vw, 2.4rem);
    line-height: 1.2;
    font-weight: 500;
    white-space: nowrap;
  }

  .venue-row {
    margin-top: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .venue-row img {
    width: 4.2rem;
    height: auto;
    flex-shrink: 0;
  }

  .venue-text {
    margin: 0;
    font-size: clamp(3.4rem, 7vw, 4.4rem);
    line-height: 1.1;
    font-weight: 600;
    white-space: nowrap;
  }

  .divider {
    width: 4.8rem;
    height: 1px;
    background: #a6a6a6;
    flex-shrink: 0;
  }

  @media (min-width: 1024px) {
    padding: 0 9.6rem 2.4rem 9.6rem;

    .inner-card {
      padding: 4.5rem 7.5rem;
      max-width: clamp(100rem, 80vw, 124rem);
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap : 0;
    }

    .divider {
      margin: 0 clamp(5rem, 4.5vw, 7.9rem);
    }

    .label {
      font-size: 2rem;
      text-align: left;
    }

    h3 {
      margin-top: 1.2rem;
      font-size: clamp(2.4rem, 2.2vw, 3.2rem);
      text-align: left;
    }

    .time {
      margin-top: 1rem;
      font-size: clamp(1.8rem, 1.6vw, 2.4rem);
      font-weight: 500;
      line-height: 1.2;
      text-align: center;
    }

    .venue-row {
      margin-top: 1.8rem;
      justify-content: flex-start;
      align-items: flex-end;
    }

    .venue-text {
      font-size: clamp(2rem, 1.9vw, 2.8rem);
      line-height: 1;
    }

    .divider {
      width: 1px;
      height: 4.8rem;
    }
  }
`;
