import styled from "styled-components";
import Marquee from "react-fast-marquee";
import fidelity from "../../assets/icon/fidelity.svg"
import seamlesshr from "../../assets/icon/seamlesshr.png"
// import borderlesshr from "../../assets/icon/borderless.png"
import damdam from "../../assets/icon/damdam.png"
import sterling from "../../assets/icon/sterling.png"
import etranzact from "../../assets/icon/etransact.png"
import interswitch from  "../../assets/icon/interswitch.svg"

const Companies = () => {
  return (
    <StyledCompanies>
      <header>Where Our Alumni Work</header>
      <Marquee className="marquee">
        <img src={fidelity} alt="" />
        <img src={seamlesshr} alt="" />
        <img src={interswitch} alt="" />
        <img src={damdam} alt="" />
        <img src={sterling} alt="" />
        <img src={etranzact} alt="" />
      </Marquee>
    </StyledCompanies>
  )
}

export default Companies


const StyledCompanies = styled.div`
    margin: 3rem 0;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    header {
    padding: 4.1rem 2.4rem;
    font-weight: 700;
    color: var(--Body-Text);
    font-size: 2rem;
    padding-bottom: 2rem;
    }
    img{
    width: 10rem;
    object-fit: contain;
    margin: 1rem 3rem;
    }
    @media (min-width: 1024px) {
    margin: 6rem 0 0 0;
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