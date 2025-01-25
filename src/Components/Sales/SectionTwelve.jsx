import React from "react";
import styled from "styled-components";

const SectionTwelve = () => {
  return (
    <StyledSectionTwelve>
      <div className="section-twelve-container">
        <p>
          <span>
            What does it take for you to start your Product Management Career
            Today?
          </span>
        </p>

        <ul>
            <li>
            <p>Get properly trained and mentored</p>
            </li>
            <li>
            <p>Get properly trained and mentored</p>
            </li>
            <li>
            <p>Take action (Practice, practice, practice what you're learning)</p>
            </li>
        </ul>
       

       

        <p>Join a supportive community of product managers</p>

        <p>
          Just a simple three step process that if you follow correctly, you
          will kickstart your product manager career and be able to get a PM job
          within the next 3 - 6 months from today. 
        </p>

        <p>
          Let me drop this here quickly, just because this three step process is
          simple doesn’t mean it is easy, if you do the three step process
          wrongly, you will waste your time, energy and money
        </p>

        <p><span>Now that you know what it takes to start your career, what Next?</span></p>

        <p>
          Without wasting any time, get yourself PROPER training on Product
          Management and start working. 
        </p>

        <h3>Good News is,</h3>

        <p>
          From today till March 10, I'll be taking <span className="blueSpan">ONLY 20</span> Professionals who
          want to Transition Into <span>Product Management.</span>
        </p>

        <p>This means you need to act fast if you want to get trained by me</p>

        <p>Why?</p>

        <p>
          Because more than 1,000 Professionals like you are currently seeing
          this letter and want me to take them in just like you.
        </p>
      </div>
    </StyledSectionTwelve>
  );
};

export default SectionTwelve;

const StyledSectionTwelve = styled.div`
  padding: 2.9375rem 20% 2.9rem 5%;
  background: #fff;
  @media (max-width: 768px) {
    padding: 2.5rem 5%;
  }

  p {
    color: #000000;
    font-size: 20px;
    line-height: 1.875rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 0.945rem;
      margin-bottom: 1.5rem;
    }
    span {
      font-size: 1.5rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3.6875rem;
    color: #0046ff;
    margin-top: 46px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 1.25rem;
      line-height: 2.1875rem;
      margin: 2rem 0;
    }

  }
  .blueSpan{
        color: #0046FF;
        font-size: 1.5rem;
        @media (max-width: 768px) {
            font-size: 0.875rem;
        }
    }
`;
