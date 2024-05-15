import styled from "styled-components";
import speaker from "../../assets/icon/speaker.jpg";
import calendar from "../../assets/icon/calender.png";
import clock from "../../assets/icon/time.png";
import { SecondaryButtonA } from "../../Utils/styled/Buttons";

const ProductSession = () => {
  return (
    <div>
      <Tape>Free Product Session</Tape>
      <MainContent>
        <Content>
          <StyledSpeakerDetails>
            <img src={speaker} alt="Speakers" />
            <div>
              <h2>Guest Speaker:</h2>
              <h3>Philip Ade-Akanbi</h3>
              <h4>AI Product Manager, Wema Bank</h4>
            </div>
          </StyledSpeakerDetails>
          <DetailsSession>
            <h2>Topic:</h2>
            <h3>
            Introduction To Artificial Intelligence <br/> Product Management Program
            </h3>
          </DetailsSession>
        </Content>
        <TimeContent>
          <Timing>
            <img src={calendar} alt="calendar" />
            May 18, 2024
          </Timing>
          <Timing>
            <img src={clock} alt="clock" />
            7pm
          </Timing>
        </TimeContent>
        <section>
        <SecondaryButtonA Text="Register" to='https://docs.google.com/forms/d/1MGN1d7-fgTcs4ackWRmsYrhrtH3c7aplm4yER37lGWg/edit?ts=65cdcca6' target="_blank"/>
        </section>
      </MainContent>
    </div>
  );
};

export default ProductSession;

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

export const MainContent = styled.div`
    position: relative;
  background: #000073;
  padding: 2.7rem 1.5rem;
  section{
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    padding: 3.2rem 0.6rem 3.2rem 9.6rem;
    display: flex;
    align-items: center;
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
    gap: 0;
  }
`;

const TimeContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px 0px;
  @media (min-width: 1024px) {
    position: absolute;
    gap: 30px;
    bottom: 0px;
    left: 270px;
  }
`;

export const Timing = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: clamp(1rem,2.803vw,1.2rem);
  font-weight: 700;
  color: #fff;
  img {
    width: 24px;
  }
  @media (min-width: 1024px) {
    font-size: clamp(1.5rem,1.388vw,2.2rem);
  }
`;

export const StyledSpeakerDetails = styled.div`
  display: flex;
  gap: 32px;
  img {
    width: 69px;
    border-radius: 50%;
  }
  h2,h4{
    color: #F7F7F7;
    margin-top: 5px;
    font-size: clamp(1rem,2.803vw,1.2rem);
    font-weight: 400;
  }
  h3 {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin: 3px 0px;
  }
  @media (min-width: 1024px) {
    gap: clamp(3rem,2.91vw, 4rem);
    img {
      width: 135px;
    }
    h2{
      font-size: clamp(1.5rem,1.388vw, 2rem);
    }
    h3{
      font-size: clamp(1.5rem,1.388vw,2rem);
      margin: 1rem 0px 0.4rem 0rem;
    }
    h4 {
      font-size: clamp(1.4rem,1.111vw,1.7rem);
      font-weight: 400;
    }
  }
`;
export const DetailsSession = styled.div`
  color: #f7f7f7;
  display: flex;
  flex-direction: column;
  width: max-content;
  h2 {
    font-weight: 400;
    margin: 5px 0px;
  }
  h3 {
    font-size: 14px;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    padding-left: clamp(4rem,5.4vw, 7rem);
    padding-right: 4rem;
    width: max-content;
    h2,h3{
      font-size: clamp(1.5rem,1.388vw,2.2rem);
    }
    h3 {
      line-height: 30px;
    }
  }
`;
