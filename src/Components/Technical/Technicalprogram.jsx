import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const Technicalprogram = () => {
  return (
    <StyledTechnicalprogram>
      <div className="cta">
        <H4 color="#1A1A1A" fs="1.8rem" mdfs="2.4rem" mdlh="3rem">
        Take your product manager career to the <br /> next level in 8 weeks
        </H4>
        <SecondaryButton Text="Enroll Now" />
      </div>
      <div className="writeup">
        <H2 color="rgba(1,1,91,0.82)" fs='2.4rem' mdfs="4rem">
        Technical Product Management <br /> Program
        </H2>
        <main>
          <section>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            This technical product management program is for Product Managers with at least 1 year of product management experience to advance their technical knowledge and understanding so they can work better with software developers and engineers to build better products.
            </H4>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            In the program, you will learn about frontend and backend frameworks, APIs (Application Programming Interface), integrations, architecture, deployment, use of postman, etc. 
            You would also learn how to collaborate better with engineering teams.

            At the end of the program, you would have gotten a sound technical knowledge, which would take your product manager career to the next level.
            </H4>
          </section>
        </main>
      </div>
    </StyledTechnicalprogram>
  );
};

export default Technicalprogram;

const StyledTechnicalprogram = styled.div`
  background: url(${ailine});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 20%;
  padding: 4rem 1.6rem 1rem 1.6rem;
  .cta {
    display: flex;
    flex-direction: column;
    gap: 25px;
    h4{
      br{
        display: none;
      }
    }
  }
  .writeup {
    margin-top: 6.4rem;
    h2 {
      margin-bottom: 4rem;
      br{
        display: none;
      }
    }
    main {
      section {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
    }
  }
  @media (min-width: 700px){
    .cta {
      h4 {
        font-size: 2rem;
        br{
          display: flex;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 4rem 9.6rem 2rem 9.6rem;
    .cta {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 35px;
      h4 {
        font-size: 2.4rem;
        br{
          display: flex;
        }
      }
    }
    .writeup {
      margin-top: 16rem;
      h2 {
        margin-bottom: 4rem;
        br{
          display: block;
        }
      }
      main {
        section {
            flex-direction: row;
          gap: 13.7rem;
          text-align: justify;
        }
      }
    }
  }
`;
