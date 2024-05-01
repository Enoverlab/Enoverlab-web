import styled from "styled-components";
import { H2, H4, P } from "../../Utils/styled/Typograpyhy";
import benefitAI from "../../assets/icon/benefitAI.png";
import { benefits1 } from "../../constants";

const Benefits = () => {
  return (
    <StyledBenefits>
      <H2 fs="4.205vw" mdfs="3.17vw" mdlh="6rem" color="#333">
        Benefits of <span>Using AI</span> in <br /> Product Manager
      </H2>
      <section className="contain">
        <main>
          <div className="benefit1">
            {benefits1.map((benefit) => (
              <BenefitCard title={benefit.title} details={benefit.details} />
            ))}
          </div>
          <img src={benefitAI} alt="ai benefit breakdown" />
          <div className="benefit2">
            {benefits1.map((benefit) => (
              <BenefitCard title={benefit.title} details={benefit.details} />
            ))}
          </div>
        </main>
      </section>
    </StyledBenefits>
  );
};

export default Benefits;

const StyledBenefits = styled.div`
  padding: 6.4rem 0;
  h2 {
    text-align: center;
    span {
      color: #00f;
    }
  }
  main {
    display: flex;
    justify-content: center;
    margin: 5.2rem 0;
    position: relative;
    img {
      width: 33.5vw;
    }
  }
  .benefit1 > :nth-child(1),
  .benefit1 > :nth-child(2),
  .benefit1 > :nth-child(3),
  .benefit2 > :nth-child(1),
  .benefit2 > :nth-child(2),
  .benefit2 > :nth-child(3) {
    position: absolute;
  }

  .benefit1 > :nth-child(1) {
    top: -7.692vw;
    left: 3.846vw;
  }
  .benefit1 > :nth-child(2) {
    top: 12.82vw;
    left: 2.564vw;
  }
  .benefit1 > :nth-child(3) {
    top: 28.205vw;
    left: 12.5vw;
  }
  .benefit2 > :nth-child(1) {
    top: -7.692vw;
    right: 3.846vw;
  }
  .benefit2 > :nth-child(2) {
    top: 12.82vw;
    right: 2.564vw;
  }
  .benefit2 > :nth-child(3) {
    top: 28.205vw;
    right: 12.5vw;
  }

  @media (min-width: 1024px) {
    padding: 15rem 0;
    main {
      margin-top: 24.8rem;
      img {
        width: 31.746vw;
      }
    }
    .benefit1 > :nth-child(1) {
      top: -9.37vw;
      left: 10.582vw;
    }
    .benefit1 > :nth-child(2) {
      top: 5.555vw;
      left: 3.125vw;
    }
    .benefit1 > :nth-child(3) {
      top: 19.444vw;
      left: 11.805vw;
    }
    .benefit2 > :nth-child(1) {
      top: -9.37vw;
      right: 10.582vw;
    }
    .benefit2 > :nth-child(2) {
      top: 5.555vw;
      right: 3.125vw;
    }
    .benefit2 > :nth-child(3) {
      top: 19.444vw;
      right: 11.805vw;
    }
  }
`;

const BenefitCard = ({ title, details }) => {
  return (
    <StyledBenefitCard>
      <H4
        mdfs="clamp(1.8rem,1.322vw,2.2rem)"
        fs="clamp(6px,1.869vw,10px)"
        color="#00F"
      >
        {title}
      </H4>
      <P
        mdfs="clamp(12px,0.925vw,16px)"
        fs="clamp(4px,1.168vw,6px)"
        color="#4B4B4B"
      >
        {details}
      </P>
    </StyledBenefitCard>
  );
};

const StyledBenefitCard = styled.div`
  padding: 0.573rem;
  border-radius: 7.172px;
  border: 0.359px solid #d6d6d6;
  background: #fff;
  box-shadow: 0px 1.434px 1.434px 0px rgba(0, 0, 0, 0.25);
  width: clamp(12rem, 37vw, 25rem);
  text-align: justify;
  height: fit-content;

  @media (min-width: 1024px) {
    padding: 1.6rem;
    width: 29.36vw;
    height: fit-content;
    border-radius: 20px;
    border: 1px solid #d6d6d6;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    h4 {
      margin-bottom: 1.6rem;
    }
  }
`;
