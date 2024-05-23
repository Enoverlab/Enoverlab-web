import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const Aiprogram = () => {
  return (
    <StyledAiprogram>
      <div className="cta">
        <H4 color="#1A1A1A" fs="1.6rem">
        Solve problems, build products, and grow your company with Artificial Intelligence
        </H4>
        <SecondaryButton Text="Enroll Now" />
      </div>
      <div className="writeup">
        <H2 color="rgba(1,1,91,0.82)" mdfs="4rem">
        About the Program
        </H2>
        <main>
          <section>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
              The AI for Product Management Course delves into the integration
              of AI within product management, covering its role across the
              development life cycle, strategies for integrating AI-powered
              features effectively, and the importance of perceiving AI as a
              strategic asset rather than a risk.
            </H4>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
              Upon successful completion of the course and exam, you'll receive
              an "AI for Product Management" badge for your professional
              profile. Both the course and exam are entirely online and
              self-paced, allowing you to learn at your convenience.
            </H4>
          </section>
        </main>
      </div>
    </StyledAiprogram>
  );
};

export default Aiprogram;

const StyledAiprogram = styled.div`
  background: url(${ailine});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 20%;
  padding: 4rem 1.6rem;
  .cta {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .writeup {
    margin-top: 6.4rem;
    h2 {
      margin-bottom: 4rem;
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
    padding: 4rem 9.6rem 6.8rem 9.6rem;
    .cta {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      h4 {
        width: 50%;
      }
    }
    .writeup {
      margin-top: 16rem;
      h2 {
        margin-bottom: 4rem;
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
