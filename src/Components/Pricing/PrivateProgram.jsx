import { H2, H4, P } from '../../Utils/styled/Typograpyhy'
import { SubmitButton } from '../../Utils/styled/Buttons'
// import { Link } from 'react-router-dom'
import { Flex } from '../HomeComponents/ProductSection'
import weeks6 from "../../assets/icon/6weeks.png"
import { privateCoaching } from '../../constants'
import check from "../../assets/icon/check.svg";

const PrivateProgram = () => {
  return (
    <div>
       <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading" id="private">
                  <H4 mdfs="2.3vw" fw="700">
                    Private Coaching
                  </H4>
                  <img src={weeks6} alt="4weeks" />
                </div>
                <form className="cover" method="get" action="https://paystack.com/pay/-hl1a72e6u">
                  <main>
                    <div  className="item">
                      <div >
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Flexible
                        </H2>
                      </div>
                      <div>
                      <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                        Class Times
                      </H4>
                      <H2
                        mdfs="1.58vw"
                        fs="3.6vw"
                        fw="600"
                        color="var(--Body-Text)"
                      >
                        Flexible
                      </H2>
                      </div>
                      <div>
                      <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                        Duration
                      </H4>
                      <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)">
                        6 weeks
                      </H2>
                      </div>
                      <div>
                      <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                        TUITION FEES
                      </H4>
                      <H2
                        mdfs="2vw"
                        fs="3.6vw"
                        fw="600"
                        color="var(--Body-Text)"
                      >
                        ₦ 600,000
                      </H2>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now" />
                    <></>
                    {/* <Link to="/ProgramSyllabus.pdf" target="_blank" download='ProgramSyllabus.pdf' className="syll">
                    Download Syllabus
                    </Link> */}
                  </div>
                </form>
              </div>
              <div className="breakdown">
                <H4 mdfs="1.58vw" fw="700" pt="25px" pb="25px" mdpb="28px" color="var(--Body-Text)">
                  What this training entails:
                </H4>
                <div className="list2">
                  {privateCoaching.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.8vw" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                {/* <Link to="/ProgramSyllabus.pdf" target="_blank" download='ProgramSyllabus.pdf' className="syll">
                  Download Syllabus
                </Link> */}
                </div>
              </div>
            </Flex>
    </div>
  )
}

export default PrivateProgram
