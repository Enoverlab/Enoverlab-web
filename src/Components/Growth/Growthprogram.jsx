import styled from "styled-components";
import ailine from "../../assets/icon/ailines.svg";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const Growthprogram = () => {
  return (
    <StyledGrowthprogram>
      <div className="cta">
      <H4 color="#1A1A1A" fs="1.8rem" mdfs="2.4rem" mdlh="3rem">
        Take your product manager career to the <br /> next level in 8 weeks
        </H4>
        <SecondaryButton Text="Enroll Now" to="#growthEnrol" arrowDown={true} />
      </div>
      <div className="writeup">
        <H2 color="rgba(1,1,91,0.82)" mdfs="4rem">
        Growth Product Management <br /> Program
        </H2>
        <main>
          <section>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            This growth product management program is for Product Managers with at least 1 year of product management experience to advance their marketing, growth, and partnership knowledge to drive their product growth and help their companies achieve their business goals and objectives.
            </H4>
            <H4 fs="1.4rem" color="#4B4B4B" lh="3.2rem">
            In the program, you will learn about how to achieve product market fit (PMF), different types of product growth, AARRR growth metrics, the principle of virality, collaborating with influencers, growth loops, etc.

            You would also learn how to collaborate better with marketing and sales teams.

            At the end of the program, you would have gotten sound knowledge on driving product growth, which would take your product manager career to the next level.
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
