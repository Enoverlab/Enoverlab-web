
import styled from 'styled-components'
import metric1 from "../../assets/icon/metric1.svg"
import metric2 from "../../assets/icon/metric2.svg"
import metric3 from "../../assets/icon/metric3.svg"

const Hero = () => {
  return (
    <StyledHero>
      <section>
        <header>
          ABOUT ENOVERLAB
        </header>
        <h1>
          Our Vision
        </h1>
        <h4>
        Transforming Africa One talent at a time
        </h4>
      </section>
      <div className='metrics'>
        <div className="part part1">
          <img src={metric1} alt="" />
          <h4>700+</h4>
          <p>Product Managers trained</p>
        </div>
        <div className="part part2">
          <img src={metric2} alt="" />
          <h4>20,000+</h4>
          <p>Community Members</p>
        </div>
        <div className="part part3">
          <img src={metric3} alt="" />
          <h4>70%</h4>
          <p>Alumni working in 20 countries</p>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
  background-color: #EEFCFC;
  text-align: center;
  margin-top: 2rem;
  position: relative;
  section{
    padding: 3.4rem 0rem;
    display: flex;
    flex-direction: column;
    align-items : center;
    header {
      color: #FFF;
      border-radius: 6.819px;
      font-size: 1.8rem;
      padding: 0.5rem 1rem;
      background: #00BCC6;
    }
    h1{
      color: #003AD4;
      font-weight: 700;
      margin-top: 2.5rem;
      margin-bottom: 1.4rem;
      font-size: 4.3rem;
    }
    h4{
      color: #3D3D3D;
      font-size: 2.2rem;
      width: 60%;
      font-weight: 500;
    }
  }
  .metrics{
    background: #FAFAFA;
    padding: 8.5rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    .part{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h4{
        color: #003AD4;
        font-size: 2.8rem;
        font-weight: 700;
      }
      p{
        color: #3D3D3D;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 50px;
      }
    }
  }
  
  @media (min-width: 1024px) {
    section{
      padding: 9.4rem 0rem;
      h1{
        margin-top: 5.9rem;
        font-size: 6.4rem;
      }
      h4{
        font-size: 3.6rem;
        width: 60%;
      }
    }
    .metrics{
      border-radius: 20px;
      background: #FFF;
      box-shadow: 0px 27px 31.9px 3px #F1F1F1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 20%;
      right: 20%;
      bottom: -250px;
    }
  }
`