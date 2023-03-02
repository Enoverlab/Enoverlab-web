import React from "react";
import styled from "styled-components";
const SectionThirteen = () => {
  return (
    <StyledSectionThirteen>
        <div className="section-head">
          <h3>
            What are the benefits of learning from Enoverlab? (You may ask)
          </h3>
        </div>
      <div className="section-thirteen-container">
        
        <div className="list-container">
          <div className="list">
            <ul>
              <li>You get In-depth training & mentorship </li>
              <li>Introduction to Product Management</li>
              <li>Understand Product thinking</li>
              <li>Understanding Product life cycle</li>
              <li>Understand Competitive analysis</li>
              <li>You'll get Job recommendations & Interview support</li>
              <li>
                You get to join the most supportive product manager community in
                Africa
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>How to Conduct user research</li>
              <li>Understand Product terminologies</li>

              <li>Understand Agile Product development</li>
              <li>Understand the Product roadmap</li>
              <li>Understand Product strategy</li>
              <li>
                You'll get access to product management resources for <span>life</span>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>How to track and analyze product Data</li>
              <li>You'll get a Certificate of completion</li>
              <li>How to land PM roles across the world</li>
              <li>
                <span>
                You'll get access to 6-7 weeks Internship placement to get
                real-life experience
                </span>
              </li>
              <li>You'll learn the advanced product management tools</li>
              <li>And more…</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledSectionThirteen>
  );
};

export default SectionThirteen;

const StyledSectionThirteen = styled.div`
.section-head {
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      h3 {
        font-size: 2.5rem;
        line-height: 3.6875rem;
        color: #0046ff;
        text-align: center;
        max-width: 45%;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            line-height: 2.1875rem;
            max-width: 100%;
        }
      }
    }
  .section-thirteen-container {
    width: 100%;
    padding: 2rem 5%;
    background: #202020;

    
    .list-container {
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .list {
        width: 30%;
        @media (max-width: 768px) {
          width: 100%;
        }
        ul {
          li {
            margin-bottom: 2rem;
            font-size: 1rem;
            color: #fff;
            span {
              font-weight: 600;
            }
            @media (max-width: 768px) {
              font-size: 0.75rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
`;
