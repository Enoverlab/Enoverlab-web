import styled from "styled-components";
import Marquee from "react-fast-marquee";
import fidelity from "../../assets/icon/fidelity.svg"
import seamlesshr from "../../assets/icon/seamlesshr.png"
import borderlesshr from "../../assets/icon/borderless.png"
import damdam from "../../assets/icon/damdam.png"
import sterling from "../../assets/icon/sterling.png"
import etranzact from "../../assets/icon/etransact.png"
import interswitch from  "../../assets/icon/interswitch.svg"
import cambridge from "../../assets/icon/cambridge.png"
import unidroit from "../../assets/icon/unidroit.png"
import access from "../../assets/icon/access.png"
import opay from "../../assets/icon/opay.jpeg"
import renmoney from "../../assets/icon/renmoney.png"
import ulospaces from "../../assets/icon/ulospaces.svg"
import gtbank from "../../assets/icon/gtbank.jpeg"
import mtn from "../../assets/icon/mtnlogo.jpg"
import moniepoint from "../../assets/icon/moniepoint.png"

const Companies = () => {
  return (
    <StyledCompanies>
      <header>Where Our Alumni Work</header>
      <Marquee>
        <img src={borderlesshr } alt="borderlesshr_logo" />
        <img src={cambridge} alt="cambridge_logo" />
        <img src={unidroit} alt="unidroit_logo" />
        <img src={access} alt="unidroit_logo" />
        <img src={opay} alt="unidroit_logo" />
        <img src={renmoney} alt="renmoney_logo"/>
        <img src={ulospaces} alt="ulospaces_logo"/>
        <img src={mtn} alt="mtn_logo"/>
      </Marquee>
      <Marquee className="marquee">
        <img src={fidelity} alt="" />
        <img src={seamlesshr} alt="" />
        <img src={interswitch} alt="" />
        <img src={damdam} alt="" />
        <img src={gtbank} alt="" />
        <img src={sterling} alt="" />
        <img src={etranzact} alt="" />
        <img src={moniepoint} alt="moniepoint_logo"/>
      </Marquee>
    </StyledCompanies>
  )
}

export default Companies


const StyledCompanies = styled.div`
    margin: 4rem 0;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;
    header {
      padding: 3.1rem 2.4rem;
      font-weight: 700;
      text-align: center;
      color: var(--Body-Text);
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    img{
    width: 10rem;
    object-fit: contain;
    margin: 1rem 3rem;
    }
    @media (min-width: 1024px) {
    margin: 8rem 0 0 0;
    header {
      padding: 3.2rem 9.6rem;
      font-size: 3rem;
      padding-bottom: 2.8rem;
    }
    img {
      margin: 0 5rem;
      width: 11.24vw;
    }
  }
    
`