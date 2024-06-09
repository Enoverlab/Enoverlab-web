import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const Technicalprogram = () => {
  return (
    <StyledTechnicalprogram>
      <div className="cta">
        <H4 color="#1A1A1A" fs="1.6rem">
        Train with Certified product managers and optimise <br /> Poduct Management skills within 3 months!
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
            The Technical Product Management Course prepares aspiring product managers for success in technical settings. Participants delve into essential technical concepts like software development methodologies and system architecture through immersive lectures and workshops. They gain skills to navigate complexities in product management, from feature prioritization to collaboration with engineering teams.
            </H4>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            Advanced topics such as agile frameworks and product lifecycle management are covered, empowering participants to innovate and deliver high-quality products. By completion, students possess a thorough grasp of technical product management principles, priming them for successful careers in the field.
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
    gap: 15px;
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
  @media (min-width: 1024px) {
    padding: 4rem 9.6rem 2rem 9.6rem;
    .cta {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      h4 {
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
