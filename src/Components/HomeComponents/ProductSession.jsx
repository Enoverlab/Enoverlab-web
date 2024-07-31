import styled from "styled-components";
import speaker from "../../assets/icon/speaker.jpg";
import calendar from "../../assets/icon/calender.png";
import clock from "../../assets/icon/time.png";
import { SecondaryButtonA } from "../../Utils/styled/Buttons";

const ProductSession = () => {
  return (
    <div>
      <Tape>Free Product Session</Tape>
      <StyledSession>
        <Content>
          <SpeakerImage>
            <img src={speaker} alt="Speakers" />
            <div>
                  <h2>Guest Speaker:</h2>
                  <h3>Stellamaris Emamoro</h3>
                  <h4>(Remedial Health)</h4>
            </div>
          </SpeakerImage>
          <div>
            <div className="conti">
              <StyledSpeakerDetails>
                  <h2>Guest Speaker:</h2>
                  <h3>Stellamaris Emamoro</h3>
                  <h4>(Remedial Health)</h4>
              </StyledSpeakerDetails>
              <DetailsSession>
                <h2>Topic:</h2>
                <h3>
                Building and communicating your Product Vision
                </h3>
              </DetailsSession>
            </div>
            <TimeContent>
              <Timing>
                <img src={calendar} alt="calendar" />
                August 3, 2024
              </Timing>
              <Timing>
                <img src={clock} alt="clock" />
                7pm
              </Timing>
            </TimeContent>
          </div>
        </Content>
      <section className="but">
        <SecondaryButtonA Text="Register" to='https://docs.google.com/forms/d/1MGN1d7-fgTcs4ackWRmsYrhrtH3c7aplm4yER37lGWg/edit?ts=65cdcca6' target="_blank"/>
        </section>
    </StyledSession>
    </div>
  );
};

export default ProductSession;

export const StyledSession = styled.div`
  background: #000073;
  padding: 2.9rem 2.5rem ;
  .but{
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    padding: 3.2rem 0.6rem 1.5rem 9.6rem;
    /* display: flex;
    align-items: center; */
    display: flex;
    align-items: center;
    gap: 5.5rem;
    .but{
      display: block;
    }
  }
`

export const Tape = styled.div`
  background: #7aa3ff;
  text-align: center;
  padding: 8px 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
  @media (min-width: 1024px) {
    background: #8c8cff;
    font-size: 20px;
  }
`;


const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  @media (min-width: 1024px) {
    /* width: 80%; */
    display: flex;
    flex-direction: row;
    gap: 40px;
    .conti{
      display: flex;
      gap: 55px;
    }
  }
`;

export const SpeakerImage = styled.div`
display: flex;
gap: 1.8rem;
img{
  width :6.9rem;
  height: 6.9rem;
  border-radius: 50%;
  object-fit: cover;
}
div{
  h2,h4{
    color: #F7F7F7;
    line-height: normal;
    font-size: 1.2rem;
    font-weight: 400;
  }
  h2{
    margin-top: 5px;
  }
  h4{
    margin: 4px 0;
  }
  h3 {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 3px 0px;
  }
}
@media (min-width: 1024px){
  img{
    width :13rem;
    height: 13rem;
  }
  div{
    display: none;
  }
}
`

export const StyledSpeakerDetails = styled.div`
display: none;
  @media (min-width: 1024px) {
    display: block;
    h2{
      color: #F7F7F7;
      line-height: normal;
      margin-top: 5px;
      font-weight: 400;
      font-size: clamp(1.5rem,1.388vw, 2rem);
    }
    h3{
      color: #fff;
      font-size: clamp(1.5rem,1.388vw,2rem);
      margin: 1rem 0px 0.4rem 0rem;
      font-weight: 700;
    }
    h4 {
      font-size: clamp(1.4rem,1.111vw,1.7rem);
      margin: 0;
      font-weight: 400;
      color: #F7F7F7;
      line-height: normal;
    }
  }
`;
export const DetailsSession = styled.div`
  color: #f7f7f7;
  h2 {
    font-weight: 400;
    margin: 5px 0px;
  }
  h3 {
    font-size: 14px;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    h2,h3{
      font-size: clamp(1.5rem,1.388vw,2.2rem);
    }
    h3 {
      line-height: 30px;
    }
  }
`;

const TimeContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 34px 0px;
  @media (min-width: 1024px) {
    margin: 34px 0 0 0px;
    gap: 25px;
  }
`;

export const Timing = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  img {
    width: 24px;
  }
  @media (min-width: 1024px) {
    font-size: clamp(1.5rem,1.388vw,2.2rem);
    gap: 12px;
  }
`;
