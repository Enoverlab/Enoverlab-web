import styled from "styled-components"
import the_garage from "../../assets/icon/about/the_garage.svg"
import circle2 from "../../assets/icon/about/circle2.png"
import deskcircle2 from "../../assets/icon/about/deskcircle2.png"
import circles from "../../assets/icon/circles.png"
const Empowering = () => {
  return (
    <StyledEmpowering>
      <section className="toppy">
          <img src={the_garage} alt="" />
        <div className="empowering">
          <h4>
          Empowering talents <br /> to transform Africa
          </h4>
        </div>
      </section>
      <section className="bottom_part">
        <p>
        Enoverlab is run by a team of experienced Product Managers with over 20 years of cumulative experience in Product Management who are passionate about impacting African talents with the knowledge, skill, and tools they need to become skilled product managers who can solve problems, create and deliver valuable products while driving up business value for organizations.
        </p>
      </section>
    </StyledEmpowering>
  )
}

export default Empowering

const StyledEmpowering = styled.div`
    .empowering{
      background: url(${circles});
      background-repeat: no-repeat;
      padding: 7.6rem 0rem;
      background-color: #002DA4;
      color: #DCE5FF;
      text-align: center;
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 6.4rem;
    }
    .bottom_part{
      padding: 5rem 2rem ;
      background-image: url(${circle2});
      background-repeat: no-repeat;
      background-position: 50% 0%;
      /* background-size: 90%; */
      color: #3D3D3D;
      text-align: justify;
      font-size: 1.5rem;
      line-height: 2.2rem;
      p{
          margin-top: 2rem;
      }
    }
    @media (min-width: 1024px) {
      .toppy{
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        img{
          width: 70%;
        }
        .empowering{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-size: 4.8rem;
          h4{
            width: 49rem;
          }
        }
      }
      .bottom_part{
        padding: 12.7rem 2rem ;
        background-image: url(${deskcircle2});
        background-repeat: no-repeat;
        background-position: 100% 50%;
        color: #3D3D3D;
        text-align: justify;
        font-size: 2.2rem;
        line-height: 3.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            width: 60%;
            margin-top: 2rem;
        }
    }
  }
`