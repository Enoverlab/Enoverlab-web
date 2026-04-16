import { Flex } from '../HomeComponents/ProductSection'
import { H2, H4, P } from '../../Utils/styled/Typograpyhy'
// import { SecondaryButtonA } from '../../Utils/styled/Buttons'
import { Link } from 'react-router-dom'
import { PMPProgram } from '../../constants'
import weeks7 from "../../assets/icon/week7.svg"
import styled from 'styled-components';
import check from "../../assets/icon/check.svg"

const ProgramDetails = () => {
  // const admissionClosed = true
  return (
    <StyledProgramDetail>
    <Flex mdgap="5.9rem" display="block" mdalign="stretch" >
      <div className="program">
        <div className="heading" id="hybrid">
          <H4 mdfs="2.38vw" fw="700">
          Project Management
          </H4>
          <img src={weeks7} alt="7 weeks" />
        </div>
        <div className="cover2">
          <main>
            <div className="item">
              <div className='item1'>
                <div >
                <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                  Training day
                </H4>
                <H2
                  mdfs="1.587vw"
                  fs="3.9vw"
                  fw="600"
                  color="var(--Body-Text)"
                >
                  Every Wednesday <br /> & Saturday
                </H2>
                </div>
                <div>
                <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                  Class Times
                </H4>
                <H2
                  mdfs="1.58vw"
                  fs="3.9vw"
                  fw="600"
                  color="var(--Body-Text)"
                >
                  8pm - 10pm
                </H2>
                </div>
              </div>
              <div className="item2">
                <div>
                <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                  Start Date
                </H4>
                <H2
                  mdfs="1.587vw"
                  fs="3.9vw"
                  fw="600"
                  color="var(--Body-Text)"
                >
                  May 16, 2026
                </H2>
                </div>
                <div>
                <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                  TUITION FEES
                </H4>
                <H2
                  mdfs="2.38vw"
                  fs="3.9vw"
                  fw="600"
                  color="var(--Body-Text)"
                >
                  NGN 300,000
                </H2>
              </div>
              </div>
            </div>
          </main>
          <div className="cta">
            <SecondaryButtonA Text={admissionClosed ? "Admission Closed" : "Enroll Now"} to='https://paystack.shop/pay/enoverlabpmp' disabled={admissionClosed} />
            <Link to="#" className="syll">
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
          {PMPProgram.map((pg) => (
            <Flex gap="10px">
              <img src={check} alt="checkMark" />
              <P fs="3.9vw" mdfs="1.23vw" color="var(--Body-Text)">
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
  padding: 3.2rem 0 4.2rem 0.5rem;
  .program {
    position: relative;
    width: 97%;
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
  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
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
      display: grid;
      grid-template-columns: repeat(2,auto);
      justify-content: flex-start;
      gap: 200px;
      padding-top: 6.1rem;
      .syll {
        display: block;
        color: #175afe;
        font-size: 20px;
      }
    }

  }
`
