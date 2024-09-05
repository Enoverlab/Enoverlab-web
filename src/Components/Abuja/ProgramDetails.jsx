import { Flex } from '../HomeComponents/ProductSection'
import { H2, H4, P } from '../../Utils/styled/Typograpyhy'
import { SubmitButton } from '../../Utils/styled/Buttons'
import { Link } from 'react-router-dom'
import { OnsiteProgram } from '../../constants'
import weeks20 from "../../assets/icon/20weeks.png"
import styled from 'styled-components';
import check from "../../assets/icon/check.svg"

const ProgramDetails = () => {
  return (
    <StyledProgramDetail>
    <Flex mdgap="5.9rem" display="block" mdalign="stretch" >
              <div className="program">
                <div className="heading" id="onsite">
                  <H4 mdfs="2.38vw" fw="700">
                  Abuja Centre Info
                  </H4>
                  <img src={weeks20} alt="20 weeks" />
                </div>
                <div className="cover2">
                  <form action="https://forms.gle/Gp7G4tN6QsxaPnds7" target="_blank">
                  <main>
                    <div className="item">
                      <div className='item1'>
                       <div >
                       <H4 mdfs="1.058vw" mb="1rem" fs="1.2rem" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="1.4rem"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Every Saturday
                        </H2>
                       </div>
                       <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="1.2rem" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2
                          mdfs="1.58vw"
                          fs="1.4rem"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          10am - 1pm
                        </H2>
                       </div>
                      </div>
                      <div className="item2">
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="1.2rem" color="var(--Body-Text)">
                          Location
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="clamp(1.4rem,1.4rem,2rem)"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Savvy Instant Offices, No 22, Kumasi Cres, <br /> Wuse 2, Abuja
                        </H2>
                        </div>
                      </div>
                      <div className='item3'>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="1.2rem" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="1.4rem"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          12 weeks training
                        </H2>
                        <H2
                          mdfs="1.587vw"
                          fs="1.4rem"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          8 weeks training
                        </H2>
                        </div>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="1.2rem" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="1.4rem"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          ₦300,000
                        </H2>
                      </div>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now" />
                    <Link to="/StandardSyllabus.pdf" target="_blank" download='StandardSyllabus.pdf' className="syll">
                      Download Syllabus
                </Link>
                  </div>
                  </form>
                  
                </div>
              </div>
              <div className="breakdown">
                <H4
                  mdfs="1.58vw"
                  fw="700"
                  pt="25px"
                  pb="25px"
                  mdpb="28px"
                  color="var(--Body-Text)"
                >
                  Training Details
                </H4>
                <div className="list">
                  {OnsiteProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="1.4rem" mdfs="1.23vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
              </div>
            </Flex>
      
    </StyledProgramDetail>
  )
}

export default ProgramDetails

const StyledProgramDetail = styled.div`
    padding: 33px 20px 3.2rem 5px;
  .program {
    position: relative;
    width: 100%;
    img {
      width: clamp(100px, 32vw, 140px);
      position: absolute;
      right: -10px;
    }
  }
  .heading {
    padding: 2.5rem 0;
    background: #0000ff;
    padding-left: 3.5rem;
    display: flex;
    align-items: center;
  }
  .cover2{
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 2rem 0;
    padding-left: 2.5rem;
  }
  .item{
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  .item1,.item3 {
    display: grid;
    grid-template-columns: 1fr .5fr;
    align-items: flex-start;
  }
  /* .item1{
    display: flex;
    justify-content: space-between;
    padding-right: 5.9rem;
  } */
  .list {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
  .cta {
    padding: 3.1rem 0 2.1rem 0;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .syll {
        color: #175afe;
        font-size: 12px;
      }

  }
  .breakdown{
    padding-left: 2.5rem;
  }
  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
    }
    @media (min-width: 700px) {
      .cta {
        padding-right: 7rem;
      }
    }
  @media (min-width: 1024px) {
    padding: 6.8rem 0;
    .program {
      position: relative;
      width: 62.79vw;
      img {
        position: absolute;
        width: 12.65vw;
        right: -13px;
      }
    }
    .breakdown{
      width: calc(100vw - 62.79vw);
    }
    .heading {
      padding: 4rem 0;
      padding-left: 9.6rem;
      display: flex;
      align-items: center;
      gap: 14.48vw;
    }
    .item{
    gap: 65px;
  }
    .list {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .cover2 {
      width: 100%;
      padding: 7.2rem 0 7rem 0;
      padding-left: 9.6rem;
    }
    .cta {
      padding-top: 6.1rem;
      padding-right: 7rem;
      .syll {
        display: block;
        color: #175afe;
        font-size: 20px;
      }
    }

  }
`