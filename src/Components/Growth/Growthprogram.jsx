import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const Growthprogram = () => {
  return (
    <StyledGrowthprogram>
      <div className="cta">
        <H4 color="#1A1A1A" fs="1.6rem">
        Train with Certified product managers and optimise <br /> Poduct Management skills within 3 months!
        </H4>
        <SecondaryButton Text="Enroll Now" />
      </div>
      <div className="writeup">
        <H2 color="rgba(1,1,91,0.82)" mdfs="4rem">
        Growth Product Management <br /> Program
        </H2>
        <main>
          <section>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            The Growth Product Management Course empowers aspiring product managers with essential knowledge and skills for driving growth and innovation in their organizations. Covering topics like user acquisition, retention, and monetization strategies, participants learn through lectures, case studies, and practical exercises to identify growth opportunities and leverage data-driven insights.
            </H4>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            Additionally, advanced topics such as experimentation frameworks, A/B testing, and product analytics are explored, enabling participants to make informed decisions and adapt swiftly to user feedback. By the end of the course, students will have a solid grasp of growth product management principles and practical skills to excel in their roles.
            </H4>
          </section>
        </main>
      </div>
    </StyledGrowthprogram>
  );
};

export default Growthprogram;

const StyledGrowthprogram = styled.div`
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
