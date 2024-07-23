import { Flex } from '../HomeComponents/ProductSection'
import { H2, H4, P } from '../../Utils/styled/Typograpyhy'
import { SecondaryButtonA } from '../../Utils/styled/Buttons'
import { Link } from 'react-router-dom'
import {TechnicalProgram } from '../../constants'
import weeks8 from "../../assets/icon/weeks8.png"
import styled from 'styled-components';
import check from "../../assets/icon/check.svg"

const ProgramDetails = () => {
  return (
    <StyledProgramDetail>
    <Flex mdgap="5.9rem" display="block" mdalign="stretch" >
              <div className="program">
                <div className="heading" id="onsite">
                  <H4 mdfs="2.38vw" fs="1.8rem" fw="700">
                  Technical Product<br /> Management Program
                  </H4>
                  <img src={weeks8} alt="weeks 8" />
                </div>
                <div className="cover2">
                  <main>
                    <div className="item">
                      <div className='item1'>
                       <div >
                       <H4 mdfs="1.058vw" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Every Saturday
                        </H2>
                       </div>
                       <div>
                       <H4 mdfs="1.058vw" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2
                          mdfs="1.58vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          10am - 2pm
                        </H2>
                       </div>
                      </div>
                      <div className="item2">
                        <div>
                        <H4 mdfs="1.058vw" fs="3.2vw" color="var(--Body-Text)">
                          Location
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Online Training
                        </H2>
                        </div>
                      </div>
                      <div className='item3'>
                        <div>
                        <H4 mdfs="1.058vw" fs="3.2vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          8 weeks
                        </H2>
                        </div>
                        <div>
                        <H4 mdfs="1.058vw" fs="3.2vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="3.6vw"
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
                    <SecondaryButtonA Text="Enroll Now" to='https://forms.gle/tULTGfaEbTRGHfccA' />
                    <Link to="/TPMBrochure.pdf" target="_blank" download='TPM Brochure.pdf' className="syll">
                      Download Syllabus
                </Link>
                  </div>
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
                  {TechnicalProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6vw" mdfs="1.23vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                <Link to="/AISyllabus.pdf" target="_blank" download='AISyllabus.pdf' className="syll">
                      Download Syllabus
                </Link>
                </div>
              </div>
            </Flex>
      
    </StyledProgramDetail>
  )
}

export default ProgramDetails

const StyledProgramDetail = styled.div`
    padding: 33px 20px 3.2rem 15px;
  .program {
    position: relative;
    width: 100%;
    img {
      width: clamp(100px, 32vw, 140px);
      position: absolute;
      right: -10px;
    }
  }
  .strike{
    text-decoration: line-through;
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
    padding-left: 3.5rem;
  }
  .item{
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  .item1,.item2, .item3 {
    display: flex;
  }
  .item1{
    gap:21.164vw;
  }
  .item3{
    gap: 19.841vw;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    .syll {
      display: none;
    }
  }

  .but{
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    .syll{
      color: #175afe;
      font-size: 14px;
    }
  }

  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
    }
  @media (min-width: 1024px) {
    padding: 6.8rem 4.4rem;
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
      justify-content: flex-start;
      .syll {
        display: block;
        padding-left: 17.01vw;
        color: #175afe;
        font-size: 20px;
      }
    }

    .but{
      display: none;
    }

  }
`