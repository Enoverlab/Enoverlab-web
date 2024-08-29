import styled from "styled-components"
import herobg from "../../assets/career/herobg.png"
import scratch from "../../assets/career/scratch.svg"
import scratch2 from "../../assets/career/scratch2.svg"
import comment from "../../assets/career/comment.svg"


const Hero = () => {
  return (
    <StyledHero>
      <section className="left_sect">
        <h2>
        Product Management <br /> <span>Career Expo:</span> Landing Your Next Product Manager Role
        </h2>
        <p>
        Learn from Enoverlab at the product management summit and kickstart your  career for free.
        </p>
      </section>
      <section className="right_sect">
        <img src={comment} alt="comment_img" />
        <h3>
            Welcome Great Minds 
        </h3>
        <p>
            Your dream product management role is closer than you  think. The Enoverlab Institute Product Management  Career Expo is your gateway to top companies and invaluable insights. Connect, learn, and launch your career at Nigeria’s premier product management event.
        </p>
      </section>
      <div className="timer">

      </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
    width:100%;
    height: 500px;
    font-family: "Plus Jakarta Sans";
    background : url(${herobg});
    height: fit-content;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top:2rem;
    position: relative;
    padding: 7rem 2.4rem;
    section.left_sect{
        color: white;
        h2{
            font-size: 7.47vw;
            font-weight: 800;
            letter-spacing: 0.64px;
            br{
                display: none;
            }
            span{
                background: #8c8cff;
                border-radius: 999px;
                padding: 0 0.5rem
            }
        }
        p{
            margin-top: 0.9rem;
            font-size: 1.4rem;
            line-height: 2.2rem; 
        }
    }
    section.right_sect{
        background : url(${scratch});
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        height: max-content;
        padding: 1.3rem 3.4rem 1.9rem 2.4rem ;
        color: #373737;
        font-size: 3.2vw;
        line-height: 22px;
        h3{
            font-weight: 800;
        }
        p{
            font-weight: 500;
        }
    }
    @media (min-width: 1024px) {
        border-radius: 20px;
        margin-top: 4rem;
        padding: 7rem 9.6rem;
        display: flex;
        gap: 6.87vw;
        section.left_sect{
            h2{
                font-size: 2.9vw;
                line-height: 6.4rem;
                br{
                display: block;
                }
            }
            
        }
        section.right_sect{
            background: url(${scratch2});
            background-size: contain;
            height: 100%;
            background-repeat: no-repeat;
            padding: 4rem 4.2rem;
            line-height: 3.4rem;
            margin-top : 15rem;
            font-size: 2rem;
        }
        div.timer{
            position: absolute;
        }
    }
`
