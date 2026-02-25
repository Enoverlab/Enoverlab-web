import React from "react";
import styled from "styled-components";
const SectionSixteen = () => {
  return (
    <StyledSectionSixteen>
      <div className="head-text">
        <h1>📢📢Important Notice!!</h1>
      </div>
      <div className="section-sixteen-container">
        <p>
          {/* Enoverlab will be taking the special 6-7 weeks Internship placement{" "} */}
          <span>off the market!</span>
        </p>
        <p>
          This means if you're Not taking advantage of this offer right Now,
        </p>
        <p>
          {/* You will NOT get access to the special 6-7 weeks Internship placement */}
          in April until further notice and the price will go back to its
          Initial price.
        </p>
        <p>
          This is because we still have 28 students who are currently undergoing
          {/* their Product Management Internship. */}
        </p>
        <p>
          <span>Finally,</span>
        </p>
        <p>
          You can decide to start your Tech journey and start getting roles that
          can pay you between{" "}
          <span> N500,000 - N1,000,000 or $50,000-$100,000 yearly</span>
        </p>
        <p className="center-p">
          <span>OR</span>
        </p>
        <p>You can decide to keep doing what you're doing</p>
        <p>It's really your choice.</p>
        <p>
          <span>Click the link below to get started Now</span>
        </p>
        <p>
          <span>[Link]</span>
        </p>
        <p className="center-p">
          <span>OR</span>
        </p>
        <p>
          <span>Make a transfer to:</span>
        </p>

        <div className="account-box">
          <p className="blue-acc">Account Number: 0710055700</p>
          <p className="blue-acc">Account Name: Inoverlab Limited</p>
          <p className="blue-acc">Bank: GTB</p>
        </div>

        <p>And send your proof of payment with the Whatsapp link below:</p>
        <p>
          <span>Text me on Whatsapp here</span>
        </p>
        <p>Again, over 1,000 people are currently seeing this</p>
        <p>And we will accept just 20 Professionals out of them.</p>
        <p>So if you really want this for yourself this year,</p>
        <p>Click the link to get yourself a slot.</p>
        <p>Goodluck.</p>
      </div>
    </StyledSectionSixteen>
  );
};

export default SectionSixteen;

const StyledSectionSixteen = styled.div`
  .head-text {
    text-align: center;
    padding: 3.6875rem 0;
    @media (max-width: 768px) {
      padding: 2rem 5%;
    }
    h1 {
      font-size: 3.9375rem;
      line-height: 3.6875rem;
      color: #0046ff;

      @media (max-width: 768px) {
        font-size: 1.5rem;
        line-height: 2.1875rem;
      }
    }
  }
  .section-sixteen-container {
    padding: 2.9375rem 20% 2.9rem 5%;
    background: #202020;
    @media (max-width: 768px) {
      padding: 2.5rem 5%;
    }
    p {
      color: #ffffff;
      font-size: 1.25rem;
      line-height: 1.875rem;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 0.945rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: 600;
        @media (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
    }
    .center-p {
      text-align: center;
      font-weight: 600;
    }
    .account-box {
      margin: 1rem 0;
      p {
        margin-bottom: 0.2rem;
        color: #84a6ff;
        font-weight: 600;
      }
    }
  }
`;
