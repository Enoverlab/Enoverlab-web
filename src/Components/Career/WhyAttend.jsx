import styled from "styled-components"
import whyattend from "../../assets/icon/whyattend.png"

const WhyAttend = () => {
  return (
    <StyledWhyAttend>
      <section className="texty">
        <header>
            Why Attend the Enoverlab Free Product Management Career Expo?
        </header>
        <h3>
            Immerse yourself in a world of product innovation at our free Career Expo. Gain invaluable insights from industry leaders through captivating keynotes, masterclasses, and real-world case studies. Network with like-minded professionals, acquire practical skills, and seize the opportunity to instantly launch or elevate your product management career.
        </h3>
      </section>
      <section className="img">
        <img src={whyattend} alt="" />
      </section>
    </StyledWhyAttend>
  )
}

export default WhyAttend

const StyledWhyAttend = styled.div`
    padding: 5.8rem 2.4rem;
    color: #373737;
    header{
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.2rem;
    }
    h3{
        font-size: 1.4rem;
        line-height: 2.2rem;
        margin-bottom: 3.2rem;
    }
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
        gap: 4.5rem;
        padding: 16.8rem 9.6rem;
        .texty{
            width: 60%;
            header{
                color: #00001A;
                font-size: 3.6rem;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 1.2rem;
            }
            h3{
                font-size: 2rem;
                font-weight: 400;
                line-height: 3.2rem; /* 160% */
            }
        }
        .img img{
            width: 100%;
            border-radius: 8px;
        }
    }
`
